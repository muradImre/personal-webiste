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
  repoUrl?: string;
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
      "How can a schema-processing system safely combine and rewrite JSON Schema definitions without silently changing what downstream references mean?",
    sections: [
      {
        heading: "The core problem",
        paragraphs: [
          "When schemas are composed from multiple sources, definitions can be duplicated, renamed, or collide with other definitions that happen to use the same identifier.",
          "Some duplicates should collapse into one definition. Others may share a name while representing different structures and need to stay separate. The dangerous case is when the system chooses incorrectly but still produces syntactically valid JSON: references resolve, downstream validation continues, and the system is operating on the wrong schema.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "I worked on a schema-resolution pipeline that detects duplicate and conflicting definitions before they propagate downstream.",
          "The transformation ran in stages: identify collisions, decide whether definitions are equivalent or distinct, rewrite conflicting definitions where necessary, and update internal references so the original relationships stay intact.",
          "Because schemas can reference one another recursively, I treated the problem as a graph rather than as isolated JSON objects. That meant testing both individual transformations and the dependency structure those transformations created.",
        ],
      },
      {
        heading: "Testing",
        paragraphs: [
          "I built regression tests around known failure cases and graph-based tests around reference resolution. The important property was stronger than “the output is valid JSON.” The transformed schema had to preserve the meaning of every reference after rewriting.",
          "Syntactic validity can succeed while semantic correctness fails. Once schemas define symbols, reference other definitions, and get composed and rewritten across scopes, the work looks a lot like names, binding, identity, dependency graphs, and compiler passes.",
        ],
      },
    ],
    tags: ["JSON Schema", "compilers", "testing", "streaming"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "biomed-nlp",
    title: "Biomedical NLP",
    venue: "Rice Computer Science",
    advisor: "Dr. Sinan Kockara",
    role: "Research Engineer",
    location: "Houston, TX",
    year: "2024",
    dates: "May 2024 — August 2024",
    status: "completed",
    summary:
      "How much can a domain-specific language model improve biomedical classification when the dataset is cleaned and expanded, and how does that compare with retrieval on the same task?",
    sections: [
      {
        heading: "Approach",
        paragraphs: [
          "I first worked on the dataset itself. The existing records contained stale and inconsistent information, so I scraped, updated, and added more than 10,000 records before training.",
          "I then built a PyTorch training and inference pipeline around BioMedLM and iterated on preprocessing, training, and evaluation. I compared the classifier against the published benchmark and also built a RAG baseline on the same labels so both approaches could be scored under the same task.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "The fine-tuned classifier reached 0.902 AUC against a 0.857 published benchmark. Against the RAG baseline, the fine-tuned model finished six percentage points higher in F1.",
          "Model performance was determined as much before training as during it. Fixing the data and labels mattered as much as many of the modeling decisions. Two systems can look competitive under one metric while failing in different ways, so class-level behavior and failure cases mattered as much as the headline number.",
          "Retrieval is powerful, but it is not automatically the right architecture for every problem. For this classification task, the fine-tuned model was more stable and performed better on the labels we cared about.",
        ],
      },
    ],
    tags: ["NLP", "PyTorch", "BioMedLM", "RAG"],
    related: [],
    repoUrl: "https://github.com/muradImre/BioNLPClassifier",
    visibility: "listed",
  },
];

export function getListedResearch() {
  return research.filter((item) => item.visibility === "listed");
}

export function getResearch(slug: string) {
  return research.find((item) => item.slug === slug);
}
