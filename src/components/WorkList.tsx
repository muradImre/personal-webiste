import Link from "next/link";
import { DimList } from "@/components/DimList";
import { kindLabel } from "@/lib/format";

type Item = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  href: string;
};

export function WorkList({ items }: { items: Item[] }) {
  return (
    <DimList>
      {items.map((item) => (
        <li key={item.slug}>
          <Link
            href={item.href}
            className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-7 opacity-100 transition-opacity duration-200 last:border-b md:py-9"
          >
            <h3 className="display text-[clamp(2.2rem,6vw,5.2rem)]">{item.title}</h3>
            <p className="hidden shrink-0 text-[15px] opacity-70 sm:block">
              {kindLabel(item.kind)} · {item.year}
            </p>
          </Link>
        </li>
      ))}
    </DimList>
  );
}
