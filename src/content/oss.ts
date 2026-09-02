export type OssIntent = {
  name: string;
  href?: string;
  note: string;
};

export const ownReposHighlight = [
  "Muqaddim",
  "BioNLPClassifier",
  "marbleSolitaire",
  "PronunciationTrainerAI",
];

export const studying: OssIntent[] = [
  {
    name: "llm-council",
    href: "https://github.com/muradImre/llm-council",
    note: "Fork. Several models argue, then a chair synthesizes. I want to understand the orchestration before I pretend I could improve it.",
  },
  {
    name: "Open-Generative-AI",
    href: "https://github.com/muradImre/Open-Generative-AI",
    note: "Fork of a self-hosted image/video studio. Useful as a map of how these stacks are actually wired, not as a product I intend to operate.",
  },
];

export const wantToContribute: OssIntent[] = [
  {
    name: "Biomedical NLP evaluation sets",
    note: "The regulatory-text benchmark I used was wrong in hundreds of rows. I care about datasets that don't quietly cap your AUC.",
  },
  {
    name: "Local-first macOS utilities",
    note: "Menu bar tools that don't phone home. Muqaddim is my own; I want to read and help adjacent ones.",
  },
  {
    name: "RAG evaluation, not RAG demos",
    note: "Harnesses that let retrieval lose. Leaderboards that only measure chatbot vibes are not this.",
  },
];
