import type { Metadata } from "next";
import { InfiniteGallery } from "@/components/InfiniteGallery";
import { PageIntro } from "@/components/PageIntro";
import { WorkList } from "@/components/WorkList";
import { getListedProjects, projectHref } from "@/content/work";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I built — systems and personal.",
};

export default function ProjectsPage() {
  const items = getListedProjects().map((item) => ({
    slug: item.slug,
    title: item.title,
    kind: item.kind,
    year: item.year,
    href: projectHref(item),
  }));

  return (
    <div>
      <PageIntro title="Projects—">
        <p>Everything I built. Labels are Systems or Personal.</p>
      </PageIntro>
      <div className="pt-10 pb-16">
        <InfiniteGallery items={items} />
        <div className="mt-14 px-5 md:px-12">
          <WorkList items={items} />
        </div>
      </div>
    </div>
  );
}
