import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  image = site.portrait,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const shareTitle = title === site.title ? site.title : `${title} · ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}
