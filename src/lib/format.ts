export function dateRange(start: string, end: string | null) {
  return end ? `${start} — ${end}` : `${start} — now`;
}

export function kindLabel(kind: string) {
  switch (kind) {
    case "systems":
      return "Systems";
    case "personal":
      return "Personal";
    case "research":
      return "Research";
    default:
      return kind;
  }
}

export function stageLabel(stage: string) {
  switch (stage) {
    case "seedling":
      return "Seedling";
    case "budding":
      return "Budding";
    case "evergreen":
      return "Evergreen";
    default:
      return stage;
  }
}
