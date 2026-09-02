import type { Related, Section, Visibility, WorkKind } from "./types";

export type WorkItem = {
  slug: string;
  title: string;
  kind: WorkKind;
  year: string;
  summary: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  sections: Section[];
  tags: string[];
  related: Related[];
  visibility: Visibility;
};

export const work: WorkItem[] = [
  {
    slug: "muqaddim",
    title: "Muqaddim",
    kind: "personal",
    year: "2026",
    summary: "macOS day tracker. 48 half-hour slots, six lanes, menu bar. Local only — no account.",
    repoUrl: "https://github.com/muradImre/Muqaddim",
    featured: true,
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A picture of the day I can see from the menu bar. Half an hour is the unit. Nothing leaves the machine.",
          "I built it because I wanted to use it. The repo is public. There is no product page.",
        ],
      },
    ],
    tags: ["Swift", "macOS"],
    related: [{ href: "/next/shippable-muqaddim", label: "Shippable Muqaddim" }],
    visibility: "listed",
  },
  {
    slug: "reminisce",
    title: "Reminisce AI",
    kind: "personal",
    year: "2026",
    summary: "Family voice recordings into personalized animated films.",
    liveUrl: "https://reminisce-ai.vercel.app",
    featured: true,
    sections: [
      {
        heading: "What this is",
        paragraphs: [
          "Family voice recordings in, a personalized animated film out. Live at reminisce-ai.vercel.app.",
          "I founded it, talked with 30+ people about how they'd actually use it, built the voice-to-video pipeline, and ran a pilot with 20 families.",
        ],
      },
    ],
    tags: ["product"],
    related: [
      { href: "/experience/reminisce", label: "Professional experience" },
      { href: "/next/reminisce-launch", label: "Public launch" },
    ],
    visibility: "listed",
  },
  {
    slug: "document-coder",
    title: "Document coder",
    kind: "personal",
    year: "2026",
    summary: "A tool for working with documents in code. I'll fill in the stack and the link.",
    featured: true,
    sections: [
      {
        heading: "What this is",
        paragraphs: [
          "Document coder is recent work. I'll add a proper writeup, photos, and a live or repo link here.",
        ],
      },
    ],
    tags: ["product"],
    related: [{ href: "/next/document-coder", label: "What's next" }],
    visibility: "listed",
  },
  {
    slug: "bionlp-classifier",
    title: "BioNLPClassifier",
    kind: "research",
    year: "2025",
    summary:
      "Code for the Rice CS biomedical classification work: dataset cleanup, three model families, BioMedLM, zero-shot, then RAG.",
    repoUrl: "https://github.com/muradImre/BioNLPClassifier",
    featured: false,
    sections: [
      {
        heading: "What's in the repo",
        paragraphs: [
          "Encoder-only, decoder-only, and encoder-decoder models, a BioMedLM fine-tune, a zero-shot baseline, and the dataset edits. The writeup is on the research page.",
        ],
      },
    ],
    tags: ["Python", "NLP"],
    related: [{ href: "/research/biomed-nlp", label: "Research writeup" }],
    visibility: "listed",
  },
  {
    slug: "marble-solitaire",
    title: "Marble solitaire",
    kind: "personal",
    year: "2023",
    summary:
      "English marble solitaire. Play it on this page. Python solver and GUI on GitHub.",
    repoUrl: "https://github.com/muradImre/marbleSolitaire",
    featured: false,
    sections: [
      {
        heading: "The game",
        paragraphs: [
          "33 or 37 holes. Jump orthogonally. One marble left, ideally in the center. The solver takes any legal position, not just the standard start.",
        ],
      },
    ],
    tags: ["Python"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "pronunciation-trainer",
    title: "PronunciationTrainerAI",
    kind: "personal",
    year: "2024",
    summary: "Speech in, pronunciation feedback out. English and other languages.",
    repoUrl: "https://github.com/muradImre/PronunciationTrainerAI",
    featured: false,
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Most language apps score vocabulary. This one is for whether the sounds are in the right place.",
        ],
      },
    ],
    tags: ["Python", "speech"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "bloom-cuckoo",
    title: "Bloom / cuckoo filters",
    kind: "systems",
    year: "2024",
    summary: "Bloom filters and cuckoo filters — membership tests, memory, and lookup cost.",
    repoUrl: "https://github.com/muradImre/bloom-cuckoo-project",
    featured: false,
    sections: [
      {
        heading: "Why",
        paragraphs: [
          "Course project. I kept it because writing both is the only way the false-positive math stops being a slide.",
        ],
      },
    ],
    tags: ["Python"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "database-design",
    title: "Database design",
    kind: "systems",
    year: "2024",
    summary: "Schema design in Go.",
    repoUrl: "https://github.com/muradImre/database-design",
    featured: false,
    sections: [
      {
        heading: "Notes",
        paragraphs: ["Course project. Go, without an ORM."],
      },
    ],
    tags: ["Go"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "intra-domain-routing",
    title: "Intra-domain routing",
    kind: "systems",
    year: "2024",
    summary: "Intra-domain routing protocols, in C++.",
    repoUrl: "https://github.com/muradImre/Intra-Domain-Routing-Protocols",
    featured: false,
    sections: [
      {
        heading: "Notes",
        paragraphs: ["Course project. Implementing the protocol is how you stop hand-waving about convergence."],
      },
    ],
    tags: ["C++"],
    related: [],
    visibility: "listed",
  },
];

export function getListedWork() {
  return work.filter((item) => item.visibility === "listed");
}

/** Built software, not research code. Labels: Systems · Personal */
export function getListedProjects() {
  return getListedWork().filter((item) => item.kind !== "research");
}

export function getFeaturedWork() {
  return getListedWork().filter((item) => item.featured);
}

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function projectHref(item: Pick<WorkItem, "slug">) {
  return `/projects/${item.slug}`;
}
