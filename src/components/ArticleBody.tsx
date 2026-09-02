import Link from "next/link";
import type { Related, Section } from "@/content/types";

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">{section.heading}</h2>
          <div className="mt-4 space-y-4 text-[17px] leading-8 text-ink-soft">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function RelatedList({ items }: { items: Related[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-sm text-muted">Related</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            {item.href.startsWith("/") ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return <p className="mt-5 text-sm text-muted">{tags.join(" · ")}</p>;
}
