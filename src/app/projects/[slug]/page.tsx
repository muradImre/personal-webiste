import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections, TagList } from "@/components/ArticleBody";
import { MarbleSolitaire } from "@/components/MarbleSolitaire";
import { BackLink } from "@/components/PageIntro";
import { ProjectCover } from "@/components/ProjectCover";
import { getCover } from "@/content/covers";
import { getWork, work } from "@/content/work";
import { kindLabel } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const cover = getCover(item.slug);

  return (
    <article>
      <BackLink href="/projects" label="Projects" />
      <div className="px-5 pt-6 md:px-12">
        <p className="text-sm text-muted">
          {kindLabel(item.kind)} · {item.year}
        </p>
        <h1 className="display mt-4 max-w-[14ch] text-[clamp(3.2rem,9vw,7.5rem)]">{item.title}</h1>
        <p className="mt-6 max-w-2xl text-[19px] leading-8 text-ink-soft">{item.summary}</p>
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
      </div>

      <div className="px-5 py-12 md:px-12">
        {item.slug === "marble-solitaire" ? (
          <div className="max-w-xl rounded-[1.6rem] bg-paper-2 p-6 sm:p-8">
            <MarbleSolitaire />
          </div>
        ) : (
          <ProjectCover
            title={item.title}
            tone={cover.tone}
            image={cover.image}
            className="aspect-[16/10] w-full max-w-5xl"
          />
        )}
      </div>

      <div className="max-w-2xl px-5 pb-16 md:px-12">
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </article>
  );
}
