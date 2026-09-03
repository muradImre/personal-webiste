import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections, TagList } from "@/components/ArticleBody";
import { MarbleSolitaire } from "@/components/MarbleSolitaire";
import { Article, ArticleHead, BackLink } from "@/components/PageIntro";
import { ProjectCover } from "@/components/ProjectCover";
import { getCover } from "@/content/covers";
import { getListedProjects, getWork } from "@/content/work";
import { kindLabel } from "@/lib/format";
import { pageMetadata } from "@/lib/pageMetadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getListedProjects().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  const cover = getCover(item.slug);
  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/projects/${item.slug}`,
    image: cover.image ?? undefined,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const cover = getCover(item.slug);

  return (
    <Article>
      <BackLink href="/projects" label="Projects" />
      <ArticleHead kicker={`${kindLabel(item.kind)} · ${item.year}`} title={item.title}>
        <p className="text-[19px] leading-8 text-ink-soft">{item.summary}</p>
        <TagList tags={item.tags} />
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          {item.liveUrl ? (
            <a href={item.liveUrl} target="_blank" rel="noreferrer">
              Open live
            </a>
          ) : null}
          {item.repoUrl ? (
            <a href={item.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </ArticleHead>

      <div className="mt-10 xl:mt-14">
        {item.slug === "marble-solitaire" ? (
          <div className="mx-auto max-w-xl rounded-[1.6rem] bg-paper-2 p-6 sm:p-8">
            <MarbleSolitaire />
          </div>
        ) : (
          <ProjectCover
            title={item.title}
            tone={cover.tone}
            image={cover.image}
            showTitle={false}
            className="aspect-[4/3] w-full sm:aspect-[16/10]"
          />
        )}
      </div>

      <div className="mx-auto max-w-2xl">
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </Article>
  );
}
