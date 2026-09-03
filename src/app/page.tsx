import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { DimList } from "@/components/DimList";
import { WorkGallery } from "@/components/WorkGallery";
import { WorkList } from "@/components/WorkList";
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
      <HomeHero />

      <nav aria-label="Site" className="relative z-10 bg-paper px-5 pt-6 pb-10 md:px-12 md:pb-8">
        <DimList>
          {homeIndex.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block border-t border-ink/15 py-5 opacity-100 transition-opacity duration-200 last:border-b md:py-7"
              >
                <span className="display text-[clamp(3.4rem,11vw,9rem)]">{item.label}</span>
              </Link>
            </li>
          ))}
        </DimList>
      </nav>

      <section className="relative z-10 mt-28 bg-paper px-5 pb-8 md:mt-36 md:px-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-[16px]">Current work</h2>
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
