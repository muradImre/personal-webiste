import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: site.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-5 pt-6 pb-24 md:px-12">
      <p className="text-[16px]">About</p>
      <h1 className="display mt-4 max-w-full text-[clamp(1.9rem,calc((100vw-2.5rem)/8.6),7rem)]">
        {site.name}
      </h1>

      <div
        className={`mt-16 grid items-start gap-12 ${
          site.hasPortrait ? "lg:grid-cols-[minmax(14rem,18rem)_minmax(0,1fr)] lg:gap-16" : ""
        }`}
      >
        <Portrait className="mx-auto h-[24rem] w-full max-w-[18rem] lg:mx-0 lg:max-w-none" />
        <div className="mx-auto w-full max-w-[40rem] lg:mx-0 lg:max-w-[42rem]">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="mt-0 mb-6 text-[18px] leading-8 first:mt-0">
              <RichText text={paragraph} />
            </p>
          ))}

          <h2 className="mt-12 text-[16px] opacity-50">Currently</h2>
          <ul className="mt-4 space-y-3 text-[17px] leading-7">
            {site.currently.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="relative z-10 mt-10 flex flex-wrap gap-3">
            <Link href="/resume" className="pill pill-line">
              Resume
            </Link>
            <Link href="/experience" className="pill pill-line">
              Experience
            </Link>
            <Link href="/research" className="pill pill-line">
              Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
