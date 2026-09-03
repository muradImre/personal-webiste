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
  href?: string;
  sections: Section[];
  tags: string[];
  related: Related[];
  visibility: Visibility;
};

export const work: WorkItem[] = [
  {
    slug: "reminisce",
    title: "Reminisce AI",
    kind: "personal",
    year: "2026",
    summary: "Family voice recordings into personalized animated films.",
    liveUrl: "https://reminisce-ai.vercel.app",
    featured: true,
    href: "/experience/reminisce",
    sections: [
      {
        heading: "What this is",
        paragraphs: [
          "Family voice recordings in, a personalized animated film out. The product is live.",
          "The writeup lives with the professional work — founding, the pipeline, and the twenty-family pilot.",
        ],
      },
    ],
    tags: ["product"],
    related: [
      { href: "/experience/reminisce", label: "Professional experience" },
      { href: "/next/reminisce-launch", label: "Public launch" },
    ],
    visibility: "unlisted",
  },
  {
    slug: "muqaddim",
    title: "Muqaddim",
    kind: "personal",
    year: "2026",
    summary:
      "A local macOS productivity system that reconstructs how I spend my day, including the time I’m away from my computer, then uses that history to help me plan better.",
    repoUrl: "https://github.com/muradImre/Muqaddim",
    featured: true,
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "I wanted a better answer to a simple question: where did my time actually go?",
          "Screen-time tools could tell me what happened on my computer, but they missed everything I did away from it and gave me little help understanding the bigger pattern.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Muqaddim tracks device activity throughout the day. When I return after being away, it detects the gap and prompts me to describe what I was doing. It parses that answer and fills the missing period into the same timeline.",
          "From there, it tracks time across activities, goals, and plans, builds weekly breakdowns, and uses past behavior to surface habits and help plan future days.",
          "The app is built natively in Swift for macOS and runs locally without an account or cloud storage.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "I built it for myself and still use it to track and plan my weeks. Instead of only showing screen time, it gives me a record of how I spend my time and where my plans consistently differ from my behavior.",
        ],
      },
    ],
    tags: ["Swift", "macOS", "AI", "productivity"],
    related: [{ href: "/next/shippable-muqaddim", label: "Shippable Muqaddim" }],
    visibility: "listed",
  },
  {
    slug: "document-coder",
    title: "Document Coder",
    kind: "personal",
    year: "2026",
    summary: "An experiment in making the document itself an interface to software.",
    featured: true,
    sections: [
      {
        heading: "Why I am building it",
        paragraphs: [
          "A lot of people who spend their day in documents know exactly what they want to accomplish but should not need to understand APIs, backend systems, or agent orchestration to make it happen.",
          "I wanted to see how much of that technical layer could disappear behind something they already know how to use: writing.",
        ],
      },
      {
        heading: "What it does",
        paragraphs: [
          "A user describes what they want in normal business language inside a document. Behind that interface, the system can research context, work with external services, and coordinate agentic workflows to carry out technical tasks.",
          "I am intentionally keeping the implementation details high-level while I continue developing it.",
        ],
      },
      {
        heading: "Where it is now",
        paragraphs: [
          "It is an active personal project rather than a finished public product. The current work is around making the system more reliable and deciding which workflows are valuable enough to expose cleanly to nontechnical users.",
        ],
      },
    ],
    tags: ["AI", "agents", "product"],
    related: [{ href: "/next/document-coder", label: "What's next" }],
    visibility: "listed",
  },
  {
    slug: "knots",
    title: "Knots | INFORMS",
    kind: "personal",
    year: "2024",
    summary:
      "A campus social app built around one idea: recommend people just outside your existing social circle instead of giving you more of the same people you already know.",
    featured: false,
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "A lot of social recommendation systems reinforce existing clusters. We wanted to see whether software could deliberately create more weak ties between students.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Students could coordinate meals in real time, while the recommendation system used interests, compatibility, and graph structure to suggest people outside their usual cluster.",
          "I led the team and worked full stack across the Flutter client, TypeScript/Firebase backend, location features, notifications, and the matching logic.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The project turned a graph-theory idea into a product question: can an algorithm move beyond recommending a profile and actually get two people who would not normally meet into the same room?",
        ],
      },
    ],
    tags: ["Flutter", "Firebase", "TypeScript", "graph algorithms"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "vision-systems",
    title: "Deep-Learning Vision",
    kind: "systems",
    year: "2025",
    summary:
      "A set of computer-vision experiments that took me from training CNNs from scratch to working with large pretrained vision and vision-language models.",
    featured: false,
    sections: [
      {
        heading: "What I explored",
        paragraphs: [
          "I trained a custom CNN on CIFAR-10 and built a VGG16 encoder-decoder for semantic segmentation on Cityscapes, including data loading, augmentation, GPU training, inference, and evaluation with IoU and confusion matrices.",
          "I also explored DINOv2 attention maps and used CLIP for zero-shot classification.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "CLIP reached 92.72% zero-shot accuracy across 10,000 CIFAR images. More importantly, the project let me compare how traditional supervised pipelines and large pretrained representations behave on the same kinds of visual tasks.",
        ],
      },
    ],
    tags: ["PyTorch", "CUDA", "CNN", "segmentation"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "adaptive-routing",
    title: "Adaptive Routing Engine",
    kind: "systems",
    year: "2025",
    summary: "A small network that repairs itself when links fail.",
    repoUrl: "https://github.com/muradImre/Intra-Domain-Routing-Protocols",
    featured: false,
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "I implemented both Distance Vector and Link-State routing in C/C++, including Dijkstra for shortest-path computation.",
          "Routers exchange routing information, send heartbeats to detect failed neighbors, invalidate stale routes, and recompute paths when the topology changes. Poison reverse helps prevent bad Distance Vector loops.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The network rerouted traffic through alternate paths during simulated failures and returned to better routes when links recovered. I tested the recovery behavior across more than twenty failure scenarios.",
        ],
      },
    ],
    tags: ["C++", "networking"],
    related: [{ href: "/projects/udp-transfer", label: "UDP Transfer Engine" }],
    visibility: "listed",
  },
  {
    slug: "udp-transfer",
    title: "UDP Transfer Engine",
    kind: "systems",
    year: "2025",
    summary:
      "A reliable transport layer built on top of UDP that still delivers bytes in order when packets are dropped, duplicated, corrupted, delayed, or reordered.",
    featured: false,
    sections: [
      {
        heading: "Why it is interesting",
        paragraphs: [
          "UDP gives you almost none of the reliability guarantees applications usually expect. I wanted to build those guarantees myself rather than relying on TCP.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The protocol uses custom packet formats, sliding windows, sequence numbers, acknowledgments, timeouts, retransmissions, integrity checks, and receiver-side ordering.",
          "I tested it under simulated loss, corruption, delay, duplication, and reordering.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The system maintained reliable in-order transfer at roughly 11.6 Mb/s under the test conditions.",
        ],
      },
    ],
    tags: ["C++", "UDP", "networking"],
    related: [{ href: "/projects/adaptive-routing", label: "Adaptive Routing Engine" }],
    visibility: "listed",
  },
  {
    slug: "mini-java-compiler",
    title: "Mini Java Compiler",
    kind: "systems",
    year: "2025",
    summary:
      "A compiler pipeline that takes a small Java-like language from source code through parsing and intermediate representation to register allocation and instruction scheduling.",
    featured: false,
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The frontend includes scanning and recursive-descent parsing before lowering into an intermediate representation.",
          "From there, I implemented SSA construction with φ-functions and dominance analysis, graph-coloring register allocation to reduce spills, and a dependence-graph instruction scheduler.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "On a roughly 128,000-instruction workload, the scheduler ran in about 1.7 seconds, stayed within 10% of an optimized baseline’s cycle count, and increased runtime by less than 2× when the input size doubled.",
        ],
      },
    ],
    tags: ["Java", "compilers"],
    related: [{ href: "/projects/feat", label: "FEAT" }],
    visibility: "listed",
  },
  {
    slug: "bloom-cuckoo",
    title: "Bloom and Cuckoo Filters",
    kind: "systems",
    year: "2025",
    summary:
      "A benchmark comparing Bloom filters, counting Bloom filters, and cuckoo filters under skewed access patterns instead of uniform textbook traffic.",
    repoUrl: "https://github.com/muradImre/bloom-cuckoo-project",
    featured: false,
    sections: [
      {
        heading: "The question",
        paragraphs: [
          "I wanted to know how the structures behave when a small number of keys are accessed much more frequently than the rest.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "I built a Python benchmarking harness that runs all three structures against the same Zipf-distributed workloads and measures memory use, lookup latency, and throughput.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Under the workloads I tested, cuckoo filters produced lower lookup latency and higher throughput. The project was more about understanding the tradeoffs between the structures than simply reimplementing each one.",
        ],
      },
    ],
    tags: ["Python", "probabilistic data structures"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "messaging",
    title: "Real-Time Messaging",
    kind: "systems",
    year: "2024",
    summary:
      "A real-time messaging system where I built many of the pieces applications usually inherit from frameworks: storage, authentication, validation, concurrent access, patch operations, persistence, and live updates.",
    repoUrl: "https://github.com/muradImre",
    featured: false,
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The browser client is TypeScript and the backend is written in Go around a hierarchical database/document/collection API.",
          "JSON Schema validates data on the wire, token-based authentication controls access, patch operations update documents without replacing them, and Server-Sent Events push live changes to connected clients.",
          "A concurrent skip list handles thread-safe access while persistence happens asynchronously.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The system achieved more than 90% test coverage across the main concurrent and end-to-end workflows and gave me a much deeper understanding of what sits underneath a “simple” messaging product.",
        ],
      },
    ],
    tags: ["Go", "TypeScript", "SSE", "concurrency"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "malloc",
    title: "Malloc",
    kind: "systems",
    year: "2024",
    summary:
      "A memory allocator written in C with segregated free lists, block splitting, coalescing, and consistency checks.",
    featured: false,
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "A useful allocator has to balance two competing goals: use memory efficiently while still serving allocations quickly.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "I organized free blocks into size classes using segregated free lists, used next-fit placement within those lists, split larger blocks when needed, and coalesced adjacent free blocks to reduce fragmentation.",
          "I also built a heap checker around headers, footers, block boundaries, and free-list consistency so memory corruption could be caught close to where it was introduced.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "On the course driver, the allocator reached 95% utilization, 92% throughput, and a 0.91 overall score.",
        ],
      },
    ],
    tags: ["C", "memory management", "systems"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "feat",
    title: "FEAT",
    kind: "systems",
    year: "2023",
    summary:
      "A Java test-generation framework that creates large Python test suites, measures which tests actually expose buggy implementations, and prunes them down to a much smaller high-coverage set.",
    featured: false,
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "The goal was to make grading and evaluation less dependent on a fixed hand-written test suite. A standard suite can miss incorrect implementations simply because nobody anticipated the failure case.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "FEAT reads a configuration, generates a large set of candidate tests, runs them against a reference implementation and multiple buggy variants, then keeps the tests that contribute the most useful coverage.",
          "The result is a smaller suite that still catches a wide range of incorrect behaviors without paying the cost of running every generated case.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The pruned suite detected buggy solutions more effectively than the standard test set we started with, and grading became an automated comparison across implementations rather than a manual rubric pass.",
        ],
      },
    ],
    tags: ["Java", "testing", "automation"],
    related: [{ href: "/projects/mini-java-compiler", label: "Mini Java compiler" }],
    visibility: "listed",
  },
  {
    slug: "houston-zoo",
    title: "Houston Zoo",
    kind: "systems",
    year: "2023",
    summary:
      "A microcontroller-based bird incubator that automatically maintains the temperature, humidity, and ventilation conditions needed for fledgling care.",
    featured: false,
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "The zoo needed a chamber that could maintain stable environmental conditions without constant manual adjustment.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Environmental sensors continuously feed temperature and humidity readings into a C++ control loop running on the microcontroller. The system uses those readings to drive heating and airflow actuators and keep the chamber inside its operating range.",
          "The design had to hold temperature within ±1 °C and humidity within ±3%.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The completed incubator maintained those target ranges in real time and gave me one of my first experiences building software where sensors, control logic, and physical hardware all had to work together.",
        ],
      },
    ],
    tags: ["C++", "embedded", "sensors", "controls"],
    related: [{ href: "/experience/milkor-2023", label: "Later: flight control" }],
    visibility: "listed",
  },
  {
    slug: "marble-solitaire",
    title: "Marble Solitaire",
    kind: "personal",
    year: "2023",
    summary:
      "A playable version of English marble solitaire with a Python solver that can find a path from any legal board state.",
    repoUrl: "https://github.com/muradImre/marbleSolitaire",
    featured: false,
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "I like puzzle solvers, and I wanted the solver to be useful even after someone had already started playing instead of only solving the standard opening position.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The solver represents the board as a search state, generates legal orthogonal jumps, and explores possible future positions until it finds a path toward a one-marble solution.",
          "The GUI lets you play manually, then hand the current position to the solver if you get stuck.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The project turned a small puzzle into a search problem I could interact with directly instead of treating the solver as a separate script.",
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
    year: "2026",
    summary:
      "A speech tool that evaluates how a word or phrase was pronounced rather than whether the user knew the correct vocabulary.",
    repoUrl: "https://github.com/muradImre/PronunciationTrainerAI",
    featured: false,
    sections: [
      {
        heading: "Why I built it",
        paragraphs: [
          "A lot of language tools tell you whether you produced the expected word. I was more interested in whether the individual sounds were produced correctly and where pronunciation started to diverge.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The user speaks a word or phrase, the system processes the audio, compares the spoken output against the expected pronunciation, and returns feedback around the sounds that need attention.",
          "The project is written in Python and is designed to work across languages rather than around a single vocabulary set.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "It became an early version of an idea I later explored much more deeply in production speech systems: turning raw audio and model outputs into feedback that is specific enough for a person to act on.",
        ],
      },
    ],
    tags: ["Python", "speech", "AI"],
    related: [],
    visibility: "listed",
  },
];

export function getListedWork() {
  return work.filter((item) => item.visibility === "listed");
}

/** Oldest first. */
const projectAge: Record<string, number> = {
  feat: 0,
  "houston-zoo": 1,
  "marble-solitaire": 2,
  malloc: 3,
  knots: 4,
  messaging: 5,
  "vision-systems": 6,
  "adaptive-routing": 7,
  "bloom-cuckoo": 8,
  "mini-java-compiler": 9,
  "udp-transfer": 10,
  "document-coder": 11,
  muqaddim: 12,
  "pronunciation-trainer": 13,
};

export function getListedProjects() {
  return getListedWork()
    .filter((item) => item.kind !== "research")
    .sort((a, b) => (projectAge[a.slug] ?? 99) - (projectAge[b.slug] ?? 99));
}

export function getFeaturedWork() {
  return work.filter((item) => item.featured);
}

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function projectHref(item: Pick<WorkItem, "slug" | "href">) {
  return item.href ?? `/projects/${item.slug}`;
}
