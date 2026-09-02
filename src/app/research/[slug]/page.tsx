import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections, TagList } from "@/components/ArticleBody";
import { BackLink } from "@/components/PageIntro";
import { getResearch, research } from "@/content/research";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearch(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getResearch(slug);
  if (!item) notFound();

  return (
    <article>
      <BackLink href="/research" label="Research" />
      <div className="px-5 pt-6 md:px-10">
        <p className="text-sm text-muted">
          {item.dates} · {item.location}
        </p>
        <h1 className="display mt-4 max-w-[18ch] text-[clamp(3rem,8vw,6.5rem)]">{item.title}</h1>
        <p className="mt-3 text-2xl text-ink-soft">
          {item.role} · Advised by {item.advisor}
        </p>
        <p className="mt-6 max-w-2xl text-[19px] leading-8 text-ink-soft">{item.summary}</p>
        <TagList tags={item.tags} />
      </div>
      <div className="max-w-2xl px-5 pt-10 pb-16 md:px-10">
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </article>
  );
}
