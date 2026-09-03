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
      "Families tell a story. Reminisce turns it into an animated film they can watch together. Piloted with 20 families.",
    highlights: [
      "A voice-to-film product people can open — not a demo reel.",
      "Thirty-plus conversations about how families would actually use it, then a pilot with twenty of them.",
      "I built the pipeline in Node.js and TypeScript: speech, scenes, then video.",
    ],
    sections: [
      {
        heading: "Before the pipeline was mature",
        paragraphs: [
          "Someone should be able to sit down, tell a family story naturally, and end up with something they can watch and keep. The hard part is everything between those two moments. People jump around in time, forget names, add context late, and care about details a model does not know are important. The product had to turn that into a coherent film without sanding away what made it personal.",
          "I talked to more than thirty prospective users before the pipeline was mature: what they would want to preserve, who they would make it for, how comfortable they were recording themselves, and what would make the result feel worth keeping. That research changed the product several times.",
          "Then I piloted it with twenty families. That is where the useful feedback came from: confusing onboarding, stories that generated badly, scenes that matched the transcript but felt emotionally wrong, and places the system needed more context than I expected.",
        ],
      },
      {
        heading: "How the system is built",
        paragraphs: [
          "I built the pipeline in Node.js and TypeScript. Raw speech becomes a transcript. From there the system has to understand people, places, events, relationships, chronology, and emotional beats, then turn that into a scene plan and structured inputs for visuals and video.",
          "The hard part is coherence across the whole chain. A mistake early becomes a completely believable but wrong scene several steps later. Each stage has a clear output rather than one giant prompt deciding everything. I added retries and checks around generation because model calls fail in ways normal software does not: an API can succeed while the result is still unusable.",
        ],
      },
      {
        heading: "What changed once people used it",
        paragraphs: [
          "Technical correctness and product quality are different things. A scene can contain the right people and setting and still feel wrong to the family watching it. A generated film can complete successfully and still miss the point of the story.",
          "That pushed the work toward evaluation, user intent, and where human judgment belongs inside the workflow — without treating the pipeline as a black box.",
        ],
      },
    ],
    tags: ["product", "TypeScript", "Node.js", "LLM"],
    related: [{ href: "/next/reminisce-launch", label: "Public launch" }],
    visibility: "listed",
  },
  {
    slug: "milkor-2025",
    role: "AI Product Engineer",
    org: "Milkor Integrated Systems",
    location: "Cape Town, South Africa",
    dates: "June 2025 — August 2025",
    summary:
      "Perception for autonomous UAVs: reconstruct the surroundings in 3D, as a system that could ship on an airframe, not a notebook.",
    highlights: [
      "A standalone 3D-reconstruction stack for UAV platforms — Python, C++, OpenCV, Linux.",
      "The job was the whole pipeline: sensors, images, inference, and the hardware they arrived on.",
      "Live flight demos against more than 100 GB of data.",
    ],
    sections: [
      {
        heading: "What made it difficult",
        paragraphs: [
          "This was a perception and 3D reconstruction system for autonomous UAV platforms. The goal was not a model that looked good on a prepared dataset. The system had to take data from real sensors, move it through the stack, reconstruct the surroundings, and hold together when it was attached to an aircraft and tested outside.",
          "Almost every layer could produce the same visible symptom. If the reconstruction looked wrong, the problem might be calibration, a camera stream, IMU timing, ROS communication, image processing, inference, hardware, or the environment itself. There was rarely a useful error saying which layer was responsible.",
          "A lot of the work became isolating those problems: enough of the entire pipeline to keep moving downward until the real source showed up, instead of patching whatever was visible at the end.",
        ],
      },
      {
        heading: "The system",
        paragraphs: [
          "I worked across cameras and IMUs, ROS/ROS2 data flows, Linux, C/C++, Python, OpenCV, perception logic, inference, and the hardware tying those pieces together.",
          "ROS was part of the backbone. Sensor data had to be published and consumed with the right timing and the right assumptions about the data. Once multiple sensors and processing stages are involved, the interfaces between components matter as much as the components.",
          "The objective was a standalone perception system that could be used across UAV platforms, not something that only worked as a development setup.",
        ],
      },
      {
        heading: "From development to flight",
        paragraphs: [
          "We tested against more than 100 GB of real flight data and during live UAV demonstrations. Real flight introduced motion, vibration, lighting changes, imperfect sensor data, timing issues, and conditions that were hard to reproduce at a desk.",
          "That changed the debug question. Instead of asking whether one component worked, I had to ask whether the whole chain still produced a useful answer when every input was a little less clean than expected.",
        ],
      },
    ],
    tags: ["computer vision", "ROS/ROS2", "OpenCV", "Python", "C++"],
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
      "A React editor and C# engine for SLB onboarding. Sessions had to stay in sync: .NET services, Azure, CosmosDB, Redis.",
    highlights: [
      "Editor plus engine — people authoring a branching path and people walking it, on one clock.",
      "The architecture work was boundaries: what talks to what when a thousand people are in the same session.",
      "Speech parsing and SignalR kept the workflow live. Tests covered that path.",
    ],
    sections: [
      {
        heading: "The architecture problem",
        paragraphs: [
          "The system had two sides: an editor used to create branching onboarding experiences, and an engine used to run those experiences for many users at the same time. My work was mainly backend and architecture. The interesting problem was making independently built components behave like one system when state was changing in real time.",
          "It looked like a normal web application until you asked what happens when hundreds or thousands of people are inside the same experience and their state has to stay consistent. Where does the authoritative state live? Which events need to propagate immediately? What belongs in persistent storage and what belongs in live session state? What happens if two components have different assumptions about the same object? What should the engine know about the editor, and what should stay completely separate?",
          "Those questions mattered more than any individual endpoint.",
        ],
      },
      {
        heading: "What I worked on",
        paragraphs: [
          "I spent a lot of time on component boundaries, class design, data flow, backend behavior, and how the editor and engine should communicate.",
          "The stack was a React editor, a C# engine, .NET services, Azure, CosmosDB for what persists, Redis for live session state, and SignalR for real-time behavior. I also worked on speech parsing and tests on the paths where state moved across multiple parts of the system.",
          "A large part of the architecture work was making sure one decision did not quietly create three different interpretations elsewhere.",
        ],
      },
      {
        heading: "When the mental models didn't match",
        paragraphs: [
          "Different people were building different components, and assumptions that seemed obvious inside one part of the system were not always shared. Integration got slower because some problems were mismatched mental models rather than code defects.",
          "A few of us pushed for clearer requirements, earlier dependency checks, more direct communication, and better documentation of architectural decisions. A design is only useful if the people building it share the same understanding of it.",
        ],
      },
    ],
    tags: ["backend", "C#", ".NET", "Azure", "CosmosDB"],
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
      "Embedded flight-control software on a 12-foot UAV prototype for the Milkor 380 program.",
    highlights: [
      "Flight control on a 12-foot prototype, with an RTOS underneath so tasks stayed on time.",
      "Cameras, LiDAR, radar, and RF — calibrated, wired, and flown.",
      "More than fifteen hours of flight data from those integrations.",
    ],
    sections: [
      {
        heading: "What was different about embedded work",
        paragraphs: [
          "This was my first time writing software attached to something that could leave the ground. I worked on a 12-foot UAV prototype for the Milkor 380 program, with embedded flight-control software underneath it and cameras, LiDAR, radar, RF, and other hardware feeding the system.",
          "Before this, most of the software I had written lived in environments where the machine underneath it was easy to ignore. Embedded systems remove that. Tasks have deadlines. Sensors produce data on their own schedule. Hardware has physical limits. Timing matters. Memory matters. A component that behaves perfectly in isolation can still cause problems once it shares resources with everything else.",
        ],
      },
      {
        heading: "The work",
        paragraphs: [
          "I worked in C/C++ around the flight-control stack and an RTOS that handled deterministic scheduling and real-time sensor work.",
          "I also spent time bringing up and calibrating cameras, LiDAR, radar, and RF. That meant moving between software and hardware: reading data, checking interfaces, figuring out whether something was behaving correctly, then seeing what happened when the aircraft was flown. The integrations produced more than fifteen hours of flight data.",
        ],
      },
      {
        heading: "Why the software was never abstract",
        paragraphs: [
          "If a task ran late, a sensor was wrong, or an interface behaved differently from what the code assumed, the physical system exposed it. The loop either responded correctly, on time, under real conditions, or it did not. That is where the interest in embedded systems and control became serious.",
        ],
      },
    ],
    tags: ["embedded", "UAV", "RTOS", "C++"],
    related: [{ href: "/experience/milkor-2025", label: "Later intern, 2025" }],
    visibility: "listed",
  },
];

export function getListedExperience() {
  return experiences.filter((item) => item.visibility === "listed");
}

export function getExperience(slug: string) {
  return experiences.find((item) => item.slug === slug);
}
