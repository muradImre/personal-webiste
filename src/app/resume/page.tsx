import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { resume } from "@/content/resume";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: `Resume — ${site.name}`,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="pb-16">
      <PageIntro title="Resume —">
        <p>
          <a href={resume.file} download="Murad_Imre_Resume.pdf">
            Download PDF
          </a>
        </p>
      </PageIntro>
      <div className="px-5 md:px-12">
        <a
          href={resume.file}
          className="mx-auto block w-full max-w-[8.5in] overflow-hidden rounded-[1.6rem] bg-white shadow-[0_1px_2px_rgba(28,29,32,0.08),0_12px_40px_rgba(28,29,32,0.12)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resume.preview}
            alt={`${site.name} resume`}
            className="block h-auto w-full"
          />
        </a>
      </div>
    </div>
  );
}
