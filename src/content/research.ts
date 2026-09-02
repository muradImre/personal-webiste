import type { Related, Section, Visibility } from "./types";

export type ResearchItem = {
  slug: string;
  title: string;
  venue: string;
  advisor: string;
  role: string;
  location: string;
  year: string;
  dates: string;
  summary: string;
  status: "active" | "paused" | "published" | "completed";
  sections: Section[];
  tags: string[];
  related: Related[];
  visibility: Visibility;
};

export const research: ResearchItem[] = [
  {
    slug: "json-schema",
    title: "JSON Schema Processing & Validation Infrastructure",
    venue: "Rice Computer Science",
    advisor: "Prof. Konstantinos Mamouras",
    role: "Research Engineer",
    location: "Houston, TX",
    year: "2026",
    dates: "January 2026 — May 2026",
    status: "completed",
    summary:
      "Schema-resolution and streaming JSON validation: collapse duplicate definitions, catch naming collisions, and test the rewrite so silent conflicts don't reach downstream consumers.",
    sections: [
      {
        heading: "What I built",
        paragraphs: [
          "A schema-resolution pipeline that eliminated duplicate and conflicting schema definitions before they reached downstream consumers.",
          "A two-pass rewrite that detects schema collisions and generates internal references, so a naming conflict can't fail silently.",
          "Regression tests and graph-based tests that improved correctness coverage for streaming JSON validation workflows.",
        ],
      },
    ],
    tags: ["compilers", "schema", "testing", "streaming"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "biomed-nlp",
    title: "Machine Learning Research — Rice University Fellowship",
    venue: "Rice Computer Science",
    advisor: "Dr. Sinan Kockara",
    role: "Research Engineer",
    location: "Houston, TX",
    year: "2024",
    dates: "May 2024 — August 2024",
    status: "completed",
    summary:
      "Biomedical NLP classifier at 0.902 AUC against a 0.857 benchmark, then the same labels against a RAG baseline.",
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "Developed and fine-tuned a biomedical NLP classifier that reached 0.902 AUC, above the 0.857 published benchmark.",
          "Built PyTorch training and inference pipelines on BioMedLM, including preprocessing and evaluation.",
          "Updated 10,000+ benchmark records through web scraping so the training set matched the labels we actually needed.",
          "Benchmarked against a RAG baseline: 6 percentage points higher F1, and more consistent biomedical classification.",
        ],
      },
    ],
    tags: ["NLP", "PyTorch", "BioMedLM", "RAG"],
    related: [{ href: "/projects/bionlp-classifier", label: "Code" }],
    visibility: "listed",
  },
];

export function getListedResearch() {
  return research.filter((item) => item.visibility === "listed");
}

export function getResearch(slug: string) {
  return research.find((item) => item.slug === slug);
}
