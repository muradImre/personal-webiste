export const covers: Record<string, { tone: string; image?: string }> = {
  reminisce: { tone: "#2a221c" },
  muqaddim: { tone: "#1a2744" },
  "bionlp-classifier": { tone: "#1c3a32" },
  "marble-solitaire": { tone: "#4a2018" },
  "pronunciation-trainer": { tone: "#2a2540" },
  "bloom-cuckoo": { tone: "#1f2e28" },
  "database-design": { tone: "#2c2a22" },
  "document-coder": { tone: "#252018" },
  "rice-cs-research": { tone: "#1c3a32" },
  "weak-ties": { tone: "#2a1f18" },
  milkor: { tone: "#22262a" },
  "milkor-2025": { tone: "#22262a" },
  "milkor-2023": { tone: "#2a2420" },
  slb: { tone: "#1e2a28" },
  "rag-stack": { tone: "#243028" },
  "json-schema": { tone: "#1e2430" },
  "biomed-nlp": { tone: "#1c3a32" },
};

export function getCover(slug: string) {
  return covers[slug] ?? { tone: "#1c1c1c" };
}
