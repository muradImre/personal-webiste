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
        source: "/research/bionlp-classifier",
        destination: "/research/biomed-nlp",
        permanent: true,
      },
      {
        source: "/research/rag-stack",
        destination: "/research/biomed-nlp",
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
    ];
  },
};

export default nextConfig;
