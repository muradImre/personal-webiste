import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedList, Sections, TagList } from "@/components/ArticleBody";
import { Article, ArticleHead, BackLink } from "@/components/PageIntro";
import { ProjectCover } from "@/components/ProjectCover";
import { getCover } from "@/content/covers";
import { getExperience, getListedExperience } from "@/content/experience";
import { pageMetadata } from "@/lib/pageMetadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getListedExperience().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) return {};
  const cover = getCover(item.slug);
  return pageMetadata({
    title: `${item.role}, ${item.org}`,
    description: item.summary,
    path: `/experience/${item.slug}`,
    image: cover.image ?? undefined,
  });
}

function LiveProductLink({ href, name }: { href: string; name: string }) {
  const host = new URL(href).host.replace(/^www\./, "");
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-8 flex max-w-sm items-center justify-between gap-4 rounded-2xl bg-ink px-5 py-4 text-paper"
    >
      <span>
        <span className="block text-[16px] text-paper">Visit {name}</span>
        <span className="mt-1.5 block text-[13px] text-paper/60">{host}</span>
      </span>
      <span className="text-[15px] opacity-70" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) notFound();
  const cover = getCover(item.slug);

  return (
    <Article>
      <BackLink href="/experience" label="Professional Experience" />
      <ArticleHead kicker={`${item.dates} · ${item.location}`} title={item.org}>
        <p className="text-2xl text-ink-soft">{item.role}</p>
        <p className="mt-4 text-[19px] leading-8 text-ink-soft">{item.summary}</p>
        <TagList tags={item.tags} />
        {item.liveUrl ? <LiveProductLink href={item.liveUrl} name={item.org} /> : null}
      </ArticleHead>

      <div className="mt-10 xl:mt-14">
        <ProjectCover
          title={item.org}
          tone={cover.tone}
          image={cover.image}
          showTitle={false}
          className="aspect-[4/3] w-full sm:aspect-[16/10]"
        />
      </div>

      <div className="mx-auto max-w-2xl">
        {item.highlights.length > 0 ? (
          <section className="mt-12">
            <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">In short</h2>
            <ul className="mt-4 space-y-3 text-[17px] leading-8 text-ink-soft">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ) : null}
        <Sections sections={item.sections} />
        {item.liveUrl ? <LiveProductLink href={item.liveUrl} name={item.org} /> : null}
        <RelatedList items={item.related} />
      </div>
    </Article>
  );
}
