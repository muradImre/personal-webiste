import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
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
