import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="px-5 pt-6 pb-24 md:px-12">
      <p className="text-[16px]">About</p>
      <h1 className="display mt-4 max-w-[12ch] text-[clamp(3.8rem,11vw,8.5rem)]">
        {site.name}—
      </h1>

      <div
        className={`mt-16 grid items-start gap-12 ${
          site.hasPortrait ? "lg:grid-cols-[18rem_minmax(0,36rem)]" : ""
        }`}
      >
        <Portrait className="h-[24rem] w-full max-w-[18rem]" />
        <div className="max-w-[36rem]">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="mt-0 mb-6 text-[18px] leading-8 first:mt-0">
              {paragraph}
            </p>
          ))}

          <h2 className="mt-12 text-[16px] opacity-50">Currently</h2>
          <ul className="mt-4 space-y-3 text-[17px] leading-7">
            {site.currently.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/resume" className="pill bg-ink text-paper">
              Resume
            </Link>
            <Link href="/experience" className="pill border border-ink">
              Experience
            </Link>
            <Link href="/research" className="pill border border-ink">
              Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
