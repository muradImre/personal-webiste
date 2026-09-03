import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections } from "@/components/ArticleBody";
import { Article, ArticleHead, BackLink } from "@/components/PageIntro";
import { getIdea, ideas } from "@/content/ideas";
import { pageMetadata } from "@/lib/pageMetadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ideas.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getIdea(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/next/${item.slug}`,
  });
}

export default async function NextDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getIdea(slug);
  if (!item) notFound();

  return (
    <Article>
      <BackLink href="/next" label="Next" />
      <ArticleHead kicker={item.status} title={item.title}>
        <p className="text-[19px] leading-8 text-ink-soft">{item.summary}</p>
      </ArticleHead>
      <div className="mx-auto max-w-2xl">
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </Article>
  );
}
