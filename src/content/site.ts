export const site = {
  name: "Murad Imre",
  firstName: "Murad",
  lastName: "Imre",
  role: "Computer Science, Rice University",
  domain: "muradimre.com",
  url: "https://muradimre.com",
  title: "Murad Imre",
  description:
    "CS at Rice. Research assistant in biomedical NLP. Builds tools he actually uses.",
  email: "mi15@rice.edu",
  location: "Houston, TX",
  timezone: "America/Chicago",
  github: "https://github.com/muradImre",
  githubUser: "muradImre",
  linkedin: "https://www.linkedin.com/in/murad-imre-703193203",
  portrait: "/me.jpg",
  hasPortrait: false,
  lede: "Research assistant in the Rice CS department. I work on biomedical NLP, and I build software I actually use.",
  about: [
    "B.S. Computer Science at Rice, McMurtry College, class of 2026. I live in Houston.",
    "Most of my time right now is Reminisce AI: family recordings into animated films.",
    "Before that: AI product engineer at Milkor in Cape Town, backend and architecture at SLB, and an earlier embedded intern at Milkor on the 380 prototype.",
  ],
  currently: [
    "Co-founder, Reminisce AI — family recordings into animated films",
    "Muqaddim — a local-only macOS day tracker I run in the menu bar",
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
