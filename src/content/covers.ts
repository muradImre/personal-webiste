export const covers: Record<string, { tone: string; image?: string }> = {
  reminisce: { tone: "#2a221c", image: "/covers/reminisce.svg" },
  muqaddim: { tone: "#1a2744", image: "/covers/muqaddim.svg" },
  "marble-solitaire": { tone: "#4a2018", image: "/covers/marble-solitaire.svg" },
  "pronunciation-trainer": { tone: "#2a2540", image: "/covers/pronunciation-trainer.svg" },
  "bloom-cuckoo": { tone: "#1f2e28", image: "/covers/bloom-cuckoo.svg?v=2" },
  messaging: { tone: "#2c2a22", image: "/covers/messaging.svg" },
  "document-coder": { tone: "#252018", image: "/covers/document-coder.svg?v=2" },
  knots: { tone: "#2a1f18", image: "/covers/knots.svg?v=3" },
  "vision-systems": { tone: "#1c2a38", image: "/covers/vision-systems.svg?v=2" },
  "adaptive-routing": { tone: "#1a2430", image: "/covers/adaptive-routing.svg?v=3" },
  "udp-transfer": { tone: "#1e2830", image: "/covers/udp-transfer.svg?v=2" },
  malloc: { tone: "#242018", image: "/covers/malloc.svg?v=2" },
  feat: { tone: "#2a221c", image: "/covers/feat.svg?v=3" },
  "houston-zoo": { tone: "#24261c", image: "/covers/houston-zoo.svg" },
  "mini-java-compiler": { tone: "#221c28", image: "/covers/mini-java-compiler.svg?v=3" },
  "milkor-2025": { tone: "#22262a", image: "/covers/milkor-2025.svg?v=7" },
  "milkor-2023": { tone: "#2a2420", image: "/covers/milkor-2023.svg?v=12" },
  slb: { tone: "#1e2a28", image: "/covers/slb.svg?v=5" },
  "json-schema": { tone: "#1e2430" },
  "biomed-nlp": { tone: "#1c3a32" },
};

export function getCover(slug: string) {
  return covers[slug] ?? { tone: "#1c1c1c" };
}
