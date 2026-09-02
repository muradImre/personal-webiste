import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Now",
  description: `What ${site.name} is doing now.`,
};

export default function NowPage() {
  return (
    <div>
      <PageIntro title="Now—" />
      <ul className="mt-10 max-w-2xl space-y-4 px-5 pb-16 text-[18px] leading-8 md:px-12">
        {site.currently.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
