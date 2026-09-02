import Link from "next/link";
import { site } from "@/content/site";
import { LocalTime } from "./LocalTime";

export function SiteFooter() {
  return (
    <footer id="contact" className="print:hidden">
      <div className="px-5 pt-28 pb-10 md:px-12">
        <p className="text-[16px]">Contact</p>
        <a href={`mailto:${site.email}`} className="display mt-6 block text-[clamp(2.4rem,8vw,6.5rem)]">
          {site.email}
        </a>
      </div>
      <div className="grid gap-8 border-t border-ink/10 px-5 py-8 text-[14px] md:grid-cols-3 md:px-12">
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
    </footer>
  );
}
