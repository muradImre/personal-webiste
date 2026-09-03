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

