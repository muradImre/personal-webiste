import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections, TagList } from "@/components/ArticleBody";
import { BackLink } from "@/components/PageIntro";
import { ProjectCover } from "@/components/ProjectCover";
import { getCover } from "@/content/covers";
import { experiences, getExperience } from "@/content/experience";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) return {};
  return { title: `${item.role}, ${item.org}`, description: item.summary };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) notFound();
  const cover = getCover(item.slug);

  return (
    <article>
      <BackLink href="/experience" label="Professional Experience" />
      <div className="px-5 pt-6 md:px-10">
        <p className="text-sm text-muted">
          {item.dates} · {item.location}
        </p>
        <h1 className="display mt-4 max-w-[14ch] text-[clamp(3.2rem,9vw,7.5rem)]">{item.org}</h1>
        <p className="mt-3 text-2xl text-ink-soft">{item.role}</p>
        <p className="mt-6 max-w-2xl text-[19px] leading-8 text-ink-soft">{item.summary}</p>
        <TagList tags={item.tags} />
        {item.liveUrl ? (
          <p className="mt-8 text-[15px]">
            <a href={item.liveUrl} target="_blank" rel="noreferrer">
              Open live
            </a>
          </p>
        ) : null}
      </div>

      <div className="px-5 py-12 md:px-10">
        <ProjectCover
          title={item.org}
          tone={cover.tone}
          image={cover.image}
          className="aspect-[16/10] w-full max-w-5xl"
        />
      </div>

      <div className="max-w-2xl px-5 pb-16 md:px-10">
        {item.highlights.length > 0 ? (
          <section>
            <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">In short</h2>
            <ul className="mt-4 space-y-3 text-[17px] leading-8 text-ink-soft">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ) : null}
        <Sections sections={item.sections} />
        <RelatedList items={item.related} />
      </div>
    </article>
  );
}
