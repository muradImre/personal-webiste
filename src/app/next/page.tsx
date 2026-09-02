import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { getListedIdeas } from "@/content/ideas";
import { stageLabel } from "@/lib/format";

export const metadata: Metadata = {
  title: "Next",
  description: "Document coder, a shippable Muqaddim, and a Reminisce public launch.",
};

export default function NextPage() {
  const items = getListedIdeas();

  return (
    <div>
      <PageIntro title="Next—">
        <p>What I actually plan to ship next. Not a backlog of maybes.</p>
      </PageIntro>
      <ul className="mt-10 px-5 pb-16 md:px-12">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/next/${item.slug}`}
              className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-7 last:border-b md:py-9"
            >
              <h2 className="display text-[clamp(2rem,5vw,4.4rem)]">{item.title}</h2>
              <p className="hidden shrink-0 text-[15px] opacity-70 sm:block">
                {stageLabel(item.stage)} · {item.updated}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
