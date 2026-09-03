import type { IdeaStage, Related, Section, Visibility } from "./types";

export type Idea = {
  slug: string;
  title: string;
  stage: IdeaStage;
  summary: string;
  updated: string;
  sections: Section[];
  related: Related[];
  visibility: Visibility;
};

export const ideas: Idea[] = [
  {
    slug: "document-coder",
    title: "Document coder",
    stage: "budding",
    updated: "2026",
    summary: "Finish the document tool so someone else can actually use it — writeup, stack, a link, a version that isn't just mine.",
    sections: [
      {
        heading: "Next",
        paragraphs: [
          "I already run this. What's missing is the thing you'd hand a teammate: how it's built, where the code lives, and a first-run that doesn't assume I wrote it.",
        ],
      },
    ],
    related: [{ href: "/projects/document-coder", label: "Project page" }],
    visibility: "listed",
  },
  {
    slug: "shippable-muqaddim",
    title: "Shippable Muqaddim",
    stage: "budding",
    updated: "2026",
    summary:
      "Muqaddim works for my day. Next is making it usable for people who aren't me — without turning it into a cloud tracker.",
    sections: [
      {
        heading: "Next",
        paragraphs: [
          "Right now it's 48 half-hour slots, six lanes, menu bar, local only. That's the product I wanted.",
          "Shippable means the same idea, optimized for someone who didn't write it: install, defaults, the empty first day. Still on the machine. Still no account.",
        ],
      },
    ],
    related: [{ href: "/projects/muqaddim", label: "Muqaddim" }],
    visibility: "listed",
  },
  {
    slug: "reminisce-launch",
    title: "Reminisce public launch",
    stage: "budding",
    updated: "2026",
    summary:
      "The product exists. Twenty families have used it. Next is a public launch, not another private pilot.",
    sections: [
      {
        heading: "Next",
        paragraphs: [
          "Reminisce turns family voice recordings into personalized animated films. It's live. The work now is putting it in front of people who weren't in the first twenty.",
        ],
      },
    ],
    related: [{ href: "/experience/reminisce", label: "Professional experience" }],
    visibility: "listed",
  },
];

export function getListedIdeas() {
  return ideas.filter((item) => item.visibility === "listed");
}

export function getIdea(slug: string) {
  return ideas.find((item) => item.slug === slug);
}
