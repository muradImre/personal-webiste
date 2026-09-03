"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { menu, site } from "@/content/site";
import { scrollY } from "@/lib/scrollY";

function focusableIn(root: HTMLElement) {
  return [
    ...root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ];
}

export function SiteHeader() {
  const pathname = usePathname();
  const dialogId = useId();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    let frame = 0;

    function paintHero() {
      frame = 0;
      if (pathname !== "/") {
        setPastHero(false);
        document.documentElement.style.setProperty("--hero", "0");
        return;
      }
      const next = 1 - Math.min(1, Math.max(0, scrollY() / (window.innerHeight * 0.55)));
      document.documentElement.style.setProperty("--hero", next.toFixed(3));
      setPastHero(next < 0.45);
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(paintHero);
    }

    paintHero();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      document.documentElement.style.setProperty("--hero", "0");
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      closeBtnRef.current?.focus();
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      menuBtnRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const nodes = focusableIn(root);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`site-header print:hidden${pathname === "/" ? " site-header-home" : ""}${pastHero ? " is-past-hero" : ""}`}
    >
      <div className="flex items-center justify-between gap-6 px-5 py-5 md:px-12">
        <Link href="/" className="text-[16px] no-underline">
          © {site.name}
        </Link>
        <button
          ref={menuBtnRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-end text-[16px] opacity-70 hover:opacity-100"
          aria-expanded={open}
          aria-controls={dialogId}
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          ref={dialogRef}
          id={dialogId}
          className="fixed inset-0 z-50 flex flex-col bg-paper text-ink"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 py-5 md:px-12">
            <span className="text-[16px]">© {site.name}</span>
            <button
              ref={closeBtnRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-end text-[16px]"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-5 md:px-12">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display border-t border-ink/10 py-3 text-[clamp(3rem,9vw,7rem)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="display border-t border-b border-ink/10 py-3 text-[clamp(3rem,9vw,7rem)]"
            >
              Contact
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
