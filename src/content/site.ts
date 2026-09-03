export const site = {
  name: "Murad Imre",
  firstName: "Murad",
  lastName: "Imre",
  role: "Software engineer · Rice University · open to full-time",
  domain: "muradimre.com",
  url: "https://muradimre.com",
  title: "Murad Imre",
  description: "I ship products, AI pipelines, and the systems they run on.",
  email: "mi15@rice.edu",
  location: "Houston, TX",
  timezone: "America/Chicago",
  github: "https://github.com/muradImre",
  githubUser: "muradImre",
  linkedin: "https://www.linkedin.com/in/murad-imre-703193203",
  portrait: "/me.jpg?v=3",
  hasPortrait: true,
  lede: "I ship products, AI pipelines, and the systems they run on.",
  about: [
    "Software engineer, B.S. Computer Science from Rice, class of 2026. Based in Houston, open to roles anywhere in the USA. I'm an **aggressive builder**. I like moving fast, learning whatever I need, and getting deep enough into a problem that I understand the system underneath it instead of only the surface.",
    "A lot of what I do comes from curiosity. I'm constantly **building agentic workflows**, automations, internal tools, and little systems for myself because I'll notice something repetitive or inefficient and immediately start wondering if I can make it better. I use agents heavily for research, coding, testing, verification, and productivity, and I'm interested in what happens when they stop being one-off assistants and start becoming systems that can carry out real work.",
    "At the same time, I'm very drawn to the **lower levels of engineering**. I spend time studying **system architecture, embedded systems, control, distributed systems**, and how software interacts with the physical world. I like understanding why something works, why it breaks, and what decisions several layers down caused the behavior you see at the top.",
    "I'm also pretty extroverted for an engineer. I like **talking to users**, doing market research, meeting people, and getting outside of the code. Some of my favorite parts of building Reminisce have been conversations with people and learning how differently they think about a product than I do while building it.",
    "Outside of engineering, I tend to admire **ambitious people and projects that try something difficult before it is obvious that it will work**.",
  ],
  currently: [
    "Looking for full-time software engineering roles, anywhere in the USA",
    "Co-founder, Reminisce AI, family recordings into animated films",
  ],
} as const;

export const menu = [
  { href: "/resume", label: "Resume" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/next", label: "Next" },
  { href: "/about", label: "About" },
] as const;
