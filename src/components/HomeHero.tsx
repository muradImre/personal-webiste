"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { scrollY } from "@/lib/scrollY";

export function HomeHero() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = photoRef.current;
    if (!found) return;
    const el: HTMLDivElement = found;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function paint() {
      if (reduce.matches) {
        el.style.transform = "";
        return;
      }
      const t = Math.min(Math.max(scrollY() / window.innerHeight, 0), 1);
      el.style.transform = `translate3d(0, ${t * window.innerHeight * 0.12}px, 0)`;
    }

    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        paint();
      });
    }

    paint();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    reduce.addEventListener("change", paint);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("touchmove", onScroll);
      reduce.removeEventListener("change", paint);
    };
  }, []);

  return (
    <section className="relative h-svh overflow-hidden bg-[#1c1d20] text-paper">
      <div
        ref={photoRef}
        className="hero-photo pointer-events-none absolute inset-0 will-change-transform md:inset-x-0 md:-top-[12vh] md:bottom-auto md:h-[calc(100%+24vh)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.portrait}
          alt={site.name}
          fetchPriority="high"
          className="h-full w-full object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,21,22,0.52)_0%,rgba(20,21,22,0.08)_45%,rgba(20,21,22,0.34)_100%)]" />
      </div>
      <div className="relative z-10 flex h-full min-w-0 flex-col justify-end px-5 pb-10 md:px-12 md:pb-12">
        <p className="max-w-full min-w-0 text-[15px] leading-snug sm:text-[16px]">
          <span className="block sm:inline">Software engineer · Rice University</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">open to full-time</span>
        </p>
        <h1 className="display mt-3 w-full min-w-0 max-w-full text-[clamp(1.75rem,7.4vw,12rem)]">
          {site.name}
        </h1>
        <p className="mt-5 max-w-[22rem] min-w-0 text-[16px] leading-6 text-paper/90 sm:mt-8 sm:max-w-[28rem] sm:text-[17px] sm:leading-7">
          {site.lede}
        </p>
      </div>
    </section>
  );
}
