export type Visibility = "listed" | "unlisted";

export type WorkKind = "systems" | "personal" | "research";

export type IdeaStage = "seedling" | "budding" | "evergreen";

export type Section = {
  heading: string;
  paragraphs: string[];
};

export type Related = {
  href: string;
  label: string;
};
