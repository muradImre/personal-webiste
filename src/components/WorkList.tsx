import Link from "next/link";
import { getCover } from "@/content/covers";
import { kindLabel } from "@/lib/format";
import { ProjectCover } from "./ProjectCover";

type Item = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  href: string;
};

export function WorkList({ items }: { items: Item[] }) {
  return (
    <ul className="[&:hover_a]:opacity-35">
      {items.map((item) => (
        <li key={item.slug}>
          <Link
            href={item.href}
            className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-7 opacity-100 transition-opacity duration-200 last:border-b hover:!opacity-100 md:py-9"
          >
            <h3 className="display text-[clamp(2.2rem,6vw,5.2rem)]">{item.title}</h3>
            <p className="hidden shrink-0 text-[15px] opacity-70 sm:block">
              {kindLabel(item.kind)} · {item.year}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function WorkGallery({ items }: { items: Item[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto py-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item) => {
        const cover = getCover(item.slug);
        return (
          <Link
            key={item.slug}
            href={item.href}
            className="group relative z-0 w-[220px] shrink-0 sm:w-[260px] hover:z-20"
          >
            <ProjectCover
              title={item.title}
              tone={cover.tone}
              image={cover.image}
              className="aspect-[3/4] w-full"
            />
          </Link>
        );
      })}
    </div>
  );
}
