import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections } from "@/components/ArticleBody";
import { BackLink } from "@/components/PageIntro";
import { getIdea, ideas } from "@/content/ideas";
import { stageLabel } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ideas.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getIdea(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function NextDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getIdea(slug);
  if (!item) notFound();

  return (
    <article>
      <BackLink href="/next" label="Next" />
      <div className="px-5 pt-6 md:px-10">
        <p className="text-sm text-muted">
          {stageLabel(item.stage)} · {item.updated}
        </p>
        <h1 className="display mt-4 max-w-[16ch] text-[clamp(3rem,8vw,6.5rem)]">{item.title}</h1>
        <p className="mt-6 max-w-2xl text-[19px] leading-8 text-ink-soft">{item.summary}</p>
      </div>
      <div className="max-w-2xl px-5 pt-10 pb-16 md:px-10">
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </article>
  );
}
