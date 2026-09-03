import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  // Next needs inline scripts for bootstrapping; Plausible is optional and deferred.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://plausible.io`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  // Dev HMR needs websockets; keep production tight.
  `connect-src 'self' https://plausible.io${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  // Never on localhost — browsers would rewrite every asset to https:// and blank the page.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
]
  .join("; ")
  .replace(/\s+/g, " ")
  .trim();

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/experience",
        permanent: true,
      },
      {
        source: "/experience/milkor",
        destination: "/experience/milkor-2025",
        permanent: true,
      },
      {
        source: "/experience/weak-ties",
        destination: "/projects/knots",
        permanent: true,
      },
      {
        source: "/experience/rice-cs-research",
        destination: "/research/biomed-nlp",
        permanent: true,
      },
      {
        source: "/research/bionlp-classifier",
        destination: "/research/biomed-nlp",
        permanent: true,
      },
      {
        source: "/projects/bionlp-classifier",
        destination: "/research/biomed-nlp",
        permanent: true,
      },
      {
        source: "/research/rag-stack",
        destination: "/research/biomed-nlp",
        permanent: true,
      },
      {
        source: "/projects/reminisce",
        destination: "/experience/reminisce",
        permanent: true,
      },
      {
        source: "/projects/intra-domain-routing",
        destination: "/projects/adaptive-routing",
        permanent: true,
      },
      {
        source: "/projects/database-design",
        destination: "/projects/messaging",
        permanent: true,
      },
      {
        source: "/lab",
        destination: "/projects/marble-solitaire",
        permanent: true,
      },
      {
        source: "/lab/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
      {
        source: "/next/campus-weak-ties",
        destination: "/next",
        permanent: true,
      },
      {
        source: "/next/local-first-days",
        destination: "/next/shippable-muqaddim",
        permanent: true,
      },
      {
        source: "/next/unpublished-lab",
        destination: "/next",
        permanent: true,
      },
      {
        source: "/next/rag-vs-finetune",
        destination: "/research/biomed-nlp",
        permanent: true,
      },
      {
        source: "/oss",
        destination: "/",
        permanent: true,
      },
      {
        source: "/now",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
