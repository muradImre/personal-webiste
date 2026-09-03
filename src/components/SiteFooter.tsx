"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { site } from "@/content/site";
import { AboutStamp } from "./AboutStamp";
import { LocalTime } from "./LocalTime";

export function SiteFooter() {
  const pathname = usePathname();

  useEffect(() => {
    const found = document.getElementById("contact");
    if (!found) return;
    const end: HTMLElement = found;
    let frame = 0;

    function paint() {
      frame = 0;
      const rect = end.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - Math.min(1, Math.max(0, rect.top / vh));
      document.documentElement.style.setProperty("--end", progress.toFixed(3));

      const header = document.querySelector(".site-header");
      const bar = header instanceof HTMLElement ? header.getBoundingClientRect().height : 72;
      const over = rect.top >= bar ? 0 : 1 - Math.min(1, Math.max(0, rect.top) / bar);
      document.documentElement.style.setProperty("--end-bar", over.toFixed(3));
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    }

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.documentElement.style.setProperty("--end", "0");
      document.documentElement.style.setProperty("--end-bar", "0");
    };
  }, [pathname]);

  return (
    <footer id="contact" className="site-end print:hidden">
      <div className="flex min-h-svh flex-col justify-between px-5 pt-28 pb-10 md:px-12">
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="w-full min-w-0 md:flex-1">
            <p className="text-[16px]">Contact</p>
            <a href={`mailto:${site.email}`} className="display mt-8 block text-[clamp(2.8rem,10vw,8rem)]">
              {site.email}
            </a>
          </div>
          <AboutStamp className="md:mb-2" />
        </div>
        <div className="grid gap-8 border-t border-current/20 pt-8 text-[14px] md:grid-cols-3">
          <div>
            <p className="opacity-50">{site.location}</p>
            <p className="mt-1">
              <LocalTime timeZone={site.timezone} />
            </p>
          </div>
          <div>
            <p className="opacity-50">Elsewhere</p>
            <p className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <Link href="/resume">Resume</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
