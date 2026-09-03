"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, useTransition } from "react";
import { menu } from "@/content/site";
import { scrollToTopInstant } from "@/lib/scrollY";

type Phase = "idle" | "cover" | "reveal";

const COVER_MS = 480;
const REVEAL_MS = 620;
const ABORT_MS = 10000;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInternalPage(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return false;
  const path = href.split(/[?#]/)[0];
  if (path === "") return false;
  if (/\.\w+$/.test(path)) return false;
  return true;
}

function introLabel(href: string) {
  const path = href.split(/[?#]/)[0];
  if (path === "/") return "Home";
  const exact = menu.find((item) => item.href === path);
  if (exact) return exact.label;
  const segment = path.split("/").filter(Boolean).pop() ?? "";
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function PageCurtain() {
  const router = useRouter();
  const pathname = usePathname();
  const fromPath = useRef(pathname);
  const destHref = useRef<string | null>(null);
  const phaseRef = useRef<Phase>("idle");
  const pushTimer = useRef(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const [navStarted, setNavStarted] = useState(false);
  const [paintedPath, setPaintedPath] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  phaseRef.current = phase;

  useEffect(() => {
    if (phase === "idle") {
      delete document.documentElement.dataset.curtain;
    } else {
      document.documentElement.dataset.curtain = phase;
    }
  }, [phase]);

  const arrived =
    navStarted && paintedPath !== null && paintedPath !== fromPath.current;

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (phaseRef.current !== "idle") return;
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (prefersReducedMotion()) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || !isInternalPage(href)) return;

      const next = href.split(/[?#]/)[0];
      if (next === pathname) return;

      event.preventDefault();
      event.stopPropagation();
      fromPath.current = pathname;
      destHref.current = href;
      setPaintedPath(null);
      setNavStarted(false);
      setLabel(introLabel(href) || (anchor.textContent ?? "").trim().split("\n")[0]);
      setPhase("cover");

      window.clearTimeout(pushTimer.current);
      pushTimer.current = window.setTimeout(() => {
        if (phaseRef.current !== "cover") return;
        const hrefTo = destHref.current;
        if (!hrefTo) return;
        setNavStarted(true);
        startTransition(() => {
          router.push(hrefTo, { scroll: false });
        });
      }, COVER_MS);
    }

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(pushTimer.current);
    };
  }, [pathname, router, startTransition]);

  useEffect(() => {
    function onPainted(event: Event) {
      const path = (event as CustomEvent<string>).detail;
      if (typeof path !== "string") return;
      setPaintedPath(path);
    }

    window.addEventListener("route-painted", onPainted);
    return () => window.removeEventListener("route-painted", onPainted);
  }, []);

  useLayoutEffect(() => {
    if (!arrived) return;
    scrollToTopInstant();
    const frame = window.requestAnimationFrame(() => scrollToTopInstant());
    return () => window.cancelAnimationFrame(frame);
  }, [arrived, paintedPath, phase]);

  useEffect(() => {
    if (phase !== "cover" || !arrived) return;
    setPhase("reveal");
  }, [phase, arrived]);

  useEffect(() => {
    if (phase !== "cover") return;
    const abort = window.setTimeout(() => {
      if (phaseRef.current !== "cover") return;
      destHref.current = null;
      setNavStarted(false);
      setPaintedPath(null);
      setPhase("idle");
    }, ABORT_MS);
    return () => window.clearTimeout(abort);
  }, [phase]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const done = window.setTimeout(() => {
      destHref.current = null;
      setNavStarted(false);
      setPaintedPath(null);
      setPhase("idle");
    }, REVEAL_MS);
    return () => window.clearTimeout(done);
  }, [phase]);

  useEffect(() => {
    function onPop() {
      if (phaseRef.current === "idle") return;
      window.clearTimeout(pushTimer.current);
      destHref.current = null;
      setNavStarted(false);
      setPaintedPath(null);
      setPhase("idle");
    }

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className={`page-curtain page-curtain-${phase}`} data-phase={phase} aria-hidden="true">
      <div className="page-curtain-copy px-5 md:px-12">
        <p className="display max-w-[12ch] text-[clamp(4.2rem,14vw,11rem)]">{label}</p>
      </div>
    </div>
  );
}
