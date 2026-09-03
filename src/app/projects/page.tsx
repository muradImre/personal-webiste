import type { Metadata } from "next";
import { InfiniteGallery } from "@/components/InfiniteGallery";
import { PageIntro } from "@/components/PageIntro";
import { WorkList } from "@/components/WorkList";
import { getListedProjects, projectHref } from "@/content/work";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Systems and personal work — compilers, allocators, routing, and tools I actually use.",
  path: "/projects",
});

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
      <PageIntro title="Projects —">
        <p>The systems and tools behind that sentence. Labels are Systems or Personal.</p>
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
