import type { Related, Section, Visibility } from "./types";

export type Idea = {
  slug: string;
  title: string;
  /** Current state, shown in the corner (list + detail). */
  status: string;
  summary: string;
  sections: Section[];
  related: Related[];
  visibility: Visibility;
};

export const ideas: Idea[] = [
  {
    slug: "document-coder",
    title: "Document coder",
    status: "In use · private",
    summary:
      "I already run this. What's missing is something you could hand a teammate — not another private tool that only works on my machine.",
    sections: [
      {
        heading: "Next",
        paragraphs: [
          "Writeup, stack, a link, and a first-run that doesn't assume I wrote it.",
        ],
      },
    ],
    related: [{ href: "/projects/document-coder", label: "Project writeup" }],
    visibility: "listed",
  },
  {
    slug: "shippable-muqaddim",
    title: "Shippable Muqaddim",
    status: "Local · works for me",
    summary:
      "Forty-eight half-hour slots, six lanes, menu bar, local only. That's the product I wanted — for my day, on my machine.",
    sections: [
      {
        heading: "Next",
        paragraphs: [
          "Make the same idea usable for someone who didn't write it: install, defaults, the empty first day. Still on the machine. Still no account. Not a cloud tracker.",
        ],
      },
    ],
    related: [{ href: "/projects/muqaddim", label: "Muqaddim project" }],
    visibility: "listed",
  },
  {
    slug: "reminisce-launch",
    title: "Reminisce public launch",
    status: "Live · 20 families",
    summary:
      "Reminisce turns family voice recordings into personalized animated films. The product is live; twenty families have already used it.",
    sections: [
      {
        heading: "Next",
        paragraphs: [
          "A public launch — put it in front of people who weren't in the first twenty. Not another private pilot.",
        ],
      },
    ],
    related: [{ href: "/experience/reminisce", label: "Reminisce experience" }],
    visibility: "listed",
  },
];

export function getListedIdeas() {
  return ideas.filter((item) => item.visibility === "listed");
}

export function getIdea(slug: string) {
  return ideas.find((item) => item.slug === slug);
}
