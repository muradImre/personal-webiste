import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { WorkGallery, WorkList } from "@/components/WorkList";
import { site } from "@/content/site";
import { getFeaturedWork, projectHref } from "@/content/work";

const homeIndex = [
  { href: "/resume", label: "Resume" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
] as const;

export default function Home() {
  const recent = getFeaturedWork().map((item) => ({
    slug: item.slug,
    title: item.title,
    kind: item.kind,
    year: item.year,
    href: projectHref(item),
  }));

  return (
    <div>
      <section className="grid items-end gap-10 px-5 pt-8 md:px-12 md:pt-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div>
          <p className="text-[16px]">{site.role}</p>
          <h1 className="display mt-6 max-w-[11ch] text-[clamp(4.8rem,16vw,12.5rem)]">
            {site.name}—
          </h1>
        </div>
        <Portrait className="h-[16rem] w-[12.5rem] justify-self-start sm:h-[20rem] sm:w-[15.5rem] lg:justify-self-end" />
      </section>

      <nav aria-label="Site" className="mt-20 px-5 md:mt-28 md:px-12">
        <ul className="[&:hover_a]:opacity-35">
          {homeIndex.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block border-t border-ink/15 py-5 opacity-100 transition-opacity duration-200 last:border-b hover:!opacity-100 md:py-7"
              >
                <span className="display text-[clamp(3.4rem,11vw,9rem)]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="mt-28 px-5 pb-8 md:mt-36 md:px-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-[16px]">Recent projects</h2>
          <Link href="/projects" className="text-[16px] opacity-70 hover:opacity-100">
            All projects
          </Link>
        </div>
        <WorkGallery items={recent} />
        <div className="mt-10">
          <WorkList items={recent} />
        </div>
      </section>
    </div>
  );
}
