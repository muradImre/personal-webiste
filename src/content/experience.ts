import type { Related, Section, Visibility } from "./types";

export type Experience = {
  slug: string;
  role: string;
  org: string;
  location: string;
  dates: string;
  liveUrl?: string;
  summary: string;
  highlights: string[];
  sections: Section[];
  tags: string[];
  related: Related[];
  visibility: Visibility;
};

export const experiences: Experience[] = [
  {
    slug: "reminisce",
    role: "Co-Founder & Engineer",
    org: "Reminisce AI",
    location: "Houston, TX",
    dates: "June 2026 — present",
    liveUrl: "https://reminisce-ai.vercel.app",
    summary:
      "AI storytelling: family voice recordings into personalized animated films. Live product, piloted with 20 families.",
    highlights: [
      "Founded and shipped an AI storytelling product that transforms family voice recordings into personalized animated films.",
      "Communicated with 30+ prospective users to assess use cases and identify workflow requirements for product development.",
      "Built the end-to-end voice-to-video MVP in Node.js and TypeScript, orchestrating scene generation and video synthesis.",
      "Piloted the product with 20 families, managing onboarding, technical troubleshooting, output quality, and iterative delivery.",
    ],
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "Reminisce takes a family's voice recordings and turns them into a personalized animated film. I founded it, shipped the MVP, and ran the first pilot.",
          "The pipeline is Node.js and TypeScript: scene generation, then video synthesis. Before that, 30+ conversations about how people would actually use it.",
        ],
      },
    ],
    tags: ["product", "TypeScript", "Node.js", "LLM"],
    related: [{ href: "/projects/reminisce", label: "Project page" }],
    visibility: "listed",
  },
  {
    slug: "milkor-2025",
    role: "AI Product Engineer",
    org: "Milkor Integrated Systems",
    location: "Cape Town, South Africa",
    dates: "June 2025 — August 2025",
    summary:
      "AI computer vision for 3D reconstruction of surroundings, built as a standalone perception system for autonomous UAV platforms.",
    highlights: [
      "Engineered an AI computer vision product for 3D reconstruction of its surroundings using Python, C++, Linux, OpenCV.",
      "Produced a standalone perception system designed for deployment across autonomous UAV drone platforms.",
      "Debugged hardware interfaces, sensor streams, image processing, and model inference across the end-to-end perception pipeline.",
      "Tested the system during live UAV demonstrations, processing 100+ GB of flight data to validate perception workflows.",
    ],
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "Cape Town, summer 2025. The product was perception: reconstruct the surroundings in 3D, then get that system onto autonomous UAV platforms.",
          "Python, C++, Linux, OpenCV. The debugging was the job — hardware interfaces, sensor streams, image processing, inference — and then live demos against 100+ GB of flight data.",
        ],
      },
    ],
    tags: ["computer vision", "UAV", "OpenCV", "Python", "C++"],
    related: [{ href: "/experience/milkor-2023", label: "Earlier intern, 2023" }],
    visibility: "listed",
  },
  {
    slug: "slb",
    role: "Backend and Architectural Design Developer",
    org: "(SLB) Schlumberger",
    location: "Houston, TX",
    dates: "February 2025 — April 2025",
    summary:
      "Multi-user safety-training platform: custom C# engine, React editor, .NET services, Azure. Built for thousands of users.",
    highlights: [
      "Designed and built a multi-user safety-training platform across a custom C# engine, React editor, .NET services, and Azure.",
      "Evaluated architectural tradeoffs and defined component, data-flow, and class designs for scalable real-time training scenarios.",
      "Translated internal stakeholder requirements into scalable dynamic multi-user scenarios to support thousands of users.",
      "Implemented speech parsing, SignalR event handlers, and unit/end-to-end tests to support synchronized application workflow.",
    ],
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "A safety-training platform that had to run as a synchronized multi-user scene: custom C# engine, React editor, .NET services, Azure.",
          "The architecture work was component boundaries, data flow, and class design so those scenarios could scale. Speech parsing and SignalR kept the session in lockstep; tests covered the workflow.",
        ],
      },
    ],
    tags: ["backend", "C#", ".NET", "React", "Azure"],
    related: [],
    visibility: "listed",
  },
  {
    slug: "milkor-2023",
    role: "Systems/Software Engineering Intern",
    org: "Milkor – Aerospace & Defence Company",
    location: "Cape Town, South Africa",
    dates: "May 2023 — August 2023",
    summary:
      "Embedded flight-control software for a 12-foot UAV prototype supporting development of the Milkor 380.",
    highlights: [
      "Developed embedded flight-control software for a 12-foot UAV prototype supporting development of the Milkor 380 aircraft.",
      "Integrated an RTOS to support deterministic task scheduling, responsive flight control, and real-time sensor processing.",
      "Calibrated and integrated systems, including cameras, LiDAR, radar, and RF components, collecting 15+ hours of flight data.",
    ],
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "First stint at Milkor, on a 12-foot UAV prototype for the Milkor 380 program. The software was embedded flight control.",
          "An RTOS underneath for deterministic scheduling and real-time sensor processing. Cameras, LiDAR, radar, and RF — calibrated, integrated, and flown for 15+ hours of data.",
        ],
      },
    ],
    tags: ["embedded", "UAV", "RTOS", "C++"],
    related: [{ href: "/experience/milkor-2025", label: "Later intern, 2025" }],
    visibility: "listed",
  },
  {
    slug: "weak-ties",
    role: "Team Lead",
    org: "Weak-ties Decision Lab, INFORMS",
    location: "Rice University",
    dates: "2023 — 2024",
    summary:
      "Led a team of 7 on a matching algorithm for students: shared interests, bias toward weak ties, fast enough to use in a room.",
    highlights: [
      "Team of 7.",
      "Optimization and data science for student matching.",
      "Tuned for real-time results, not overnight batch jobs.",
    ],
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "We matched students on shared interests, with a preference for weak ties over people they already sit with. I led the team. The constraint that mattered was latency: it had to return while people were still there.",
        ],
      },
    ],
    tags: ["optimization"],
    related: [],
    visibility: "unlisted",
  },
  {
    slug: "rice-cs-research",
    role: "Research Assistant",
    org: "Rice Computer Science",
    location: "Houston, TX",
    dates: "2024",
    summary:
      "Biomedical NLP on regulatory text. Best run: 0.902 AUC against a published 0.857.",
    highlights: [],
    sections: [
      {
        heading: "The work",
        paragraphs: [
          "This role is written up under Research: the Rice University fellowship with Dr. Sinan Kockara.",
        ],
      },
    ],
    tags: ["NLP"],
    related: [{ href: "/research/biomed-nlp", label: "Research writeup" }],
    visibility: "unlisted",
  },
];

export function getListedExperience() {
  return experiences.filter((item) => item.visibility === "listed");
}

export function getExperience(slug: string) {
  return experiences.find((item) => item.slug === slug);
}
