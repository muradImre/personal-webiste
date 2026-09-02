"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menu, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="print:hidden">
      <div className="flex items-center justify-between gap-6 px-5 py-5 md:px-12">
        <Link href="/" className="text-[16px] no-underline">
          © {site.name}
        </Link>
        <button
          type="button"
          className="text-[16px] opacity-70 hover:opacity-100"
          onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper">
          <div className="flex items-center justify-between px-5 py-5 md:px-12">
            <span className="text-[16px]">© {site.name}</span>
            <button type="button" className="text-[16px]" onClick={() => setOpen(false)}>
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
