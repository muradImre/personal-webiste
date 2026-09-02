import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { getListedExperience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Reminisce AI, Milkor, and SLB.",
};

export default function ExperiencePage() {
  const items = getListedExperience();

  return (
    <div>
      <PageIntro title="Professional Experience—">
        <p>Jobs and internships. Research and projects are separate.</p>
      </PageIntro>
      <ul className="mt-10 px-5 pb-16 md:px-12">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/experience/${item.slug}`}
              className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-7 last:border-b md:py-9"
            >
              <h2 className="display max-w-[18ch] text-[clamp(2rem,5vw,4.4rem)]">{item.org}</h2>
              <p className="hidden shrink-0 text-[15px] opacity-70 sm:block">
                {item.role} · {item.dates}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
