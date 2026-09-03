import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections, TagList } from "@/components/ArticleBody";
import { Article, ArticleHead, BackLink } from "@/components/PageIntro";
import { getCover } from "@/content/covers";
import { getResearch, research } from "@/content/research";
import { pageMetadata } from "@/lib/pageMetadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearch(slug);
  if (!item) return {};
  const cover = getCover(item.slug);
  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/research/${item.slug}`,
    image: cover.image ?? undefined,
  });
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getResearch(slug);
  if (!item) notFound();

  return (
    <Article>
      <BackLink href="/research" label="Research" />
      <ArticleHead kicker={`${item.dates} · ${item.location}`} title={item.title}>
        <p className="text-2xl text-ink-soft">
          {item.role} · Advised by {item.advisor}
        </p>
        <p className="mt-4 text-[19px] leading-8 text-ink-soft">{item.summary}</p>
        <TagList tags={item.tags} />
        {item.repoUrl ? (
          <p className="mt-8 text-[15px]">
            <a href={item.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        ) : null}
      </ArticleHead>
      <div className="mx-auto max-w-2xl">
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </Article>
  );
}
