"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getCover } from "@/content/covers";
import { bindCenterLift } from "@/lib/centerLift";
import { ProjectCover } from "./ProjectCover";

type Item = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  href: string;
};

export function WorkGallery({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    return bindCenterLift(el);
  }, [items]);

  return (
    <div
      ref={scrollerRef}
      className="-mx-5 flex gap-4 overflow-x-auto px-5 py-10 md:-mx-4 md:px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => {
        const cover = getCover(item.slug);
        return (
          <Link
            key={item.slug}
            href={item.href}
            className="lift-card group relative z-0 block w-[220px] origin-center shrink-0 first:origin-left last:origin-right sm:w-[260px]"
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
