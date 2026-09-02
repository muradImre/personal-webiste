import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { resume } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume — ${site.name}`,
};

export default function ResumePage() {
  return (
    <div className="pb-16">
      <PageIntro title="Resume—">
        <p>
          <a href={resume.file} download="Murad_Imre_Resume.pdf">
            Download PDF
          </a>
        </p>
      </PageIntro>
      <div className="px-5 md:px-12">
        <a
          href={resume.file}
          className="block max-w-5xl overflow-hidden rounded-[1.6rem] bg-white"
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
