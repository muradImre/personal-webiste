import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { getListedResearch } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Work with Prof. Konstantinos Mamouras and Dr. Sinan Kockara at Rice CS.",
};

export default function ResearchPage() {
  const items = getListedResearch();

  return (
    <div>
      <PageIntro title="Research—">
        <p>
          Two pieces at Rice CS: JSON schema infrastructure with Prof. Konstantinos Mamouras, and a biomedical NLP
          fellowship with Dr. Sinan Kockara.
        </p>
      </PageIntro>
      <ul className="mt-10 px-5 pb-16 md:px-12">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/research/${item.slug}`}
              className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-7 last:border-b md:py-9"
            >
              <h2 className="display max-w-[22ch] text-[clamp(1.8rem,4vw,3.6rem)]">{item.title}</h2>
              <p className="hidden shrink-0 text-[15px] opacity-70 sm:block">
                {item.advisor} · {item.year}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
