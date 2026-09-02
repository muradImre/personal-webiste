"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getCover } from "@/content/covers";
import { ProjectCover } from "./ProjectCover";

type Item = {
  slug: string;
  title: string;
  href: string;
};

const COPIES = 3;

export function InfiniteGallery({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const jumping = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || items.length === 0) return;

    function copyWidth() {
      const first = el.querySelector<HTMLElement>("[data-copy]");
      return first?.offsetWidth ?? 0;
    }

    function goToMiddle() {
      const width = copyWidth();
      if (width <= 0) return;
      jumping.current = true;
      el.scrollLeft = width;
      requestAnimationFrame(() => {
        jumping.current = false;
      });
    }

    goToMiddle();

    function onScroll() {
      if (jumping.current) return;
      const width = copyWidth();
      if (width <= 0) return;
      if (el.scrollLeft < width) {
        jumping.current = true;
        el.scrollLeft += width;
        jumping.current = false;
      } else if (el.scrollLeft >= width * 2) {
        jumping.current = true;
        el.scrollLeft -= width;
        jumping.current = false;
      }
    }

    const resize = () => goToMiddle();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [items]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    function onPointerDown(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      dragging.current = true;
      didDrag.current = false;
      startX.current = event.clientX;
      startScroll.current = el.scrollLeft;
      el.setPointerCapture(event.pointerId);
      el.style.cursor = "grabbing";
    }

    function onPointerMove(event: PointerEvent) {
      if (!dragging.current) return;
      const delta = event.clientX - startX.current;
      if (Math.abs(delta) > 6) didDrag.current = true;
      el.scrollLeft = startScroll.current - delta;
    }

    function onPointerUp(event: PointerEvent) {
      dragging.current = false;
      el.style.cursor = "grab";
      el.releasePointerCapture(event.pointerId);
    }

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div
      ref={scrollerRef}
      className="flex cursor-grab overflow-x-auto py-8 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {Array.from({ length: COPIES }, (_, copy) => (
        <div key={copy} data-copy className="flex shrink-0 gap-4 pr-4">
          {items.map((item) => {
            const cover = getCover(item.slug);
            return (
              <Link
                key={`${copy}-${item.slug}`}
                href={item.href}
                draggable={false}
                onClick={(event) => {
                  if (didDrag.current) event.preventDefault();
                }}
                className="group relative z-0 w-[220px] shrink-0 sm:w-[260px] hover:z-20"
              >
                <ProjectCover
                  title={item.title}
                  tone={cover.tone}
                  image={cover.image}
                  className="pointer-events-none aspect-[3/4] w-full"
                />
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
