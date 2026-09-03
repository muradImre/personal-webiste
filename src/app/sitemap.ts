import type { MetadataRoute } from "next";
import { experiences } from "@/content/experience";
import { ideas } from "@/content/ideas";
import { research } from "@/content/research";
import { site } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const listed = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/research",
    "/next",
    "/resume",
    ...experiences.filter((item) => item.visibility === "listed").map((item) => `/experience/${item.slug}`),
    ...work.filter((item) => item.visibility === "listed").map((item) => `/projects/${item.slug}`),
    ...research.filter((item) => item.visibility === "listed").map((item) => `/research/${item.slug}`),
    ...ideas.filter((item) => item.visibility === "listed").map((item) => `/next/${item.slug}`),
  ];

  return listed.map((path) => ({
    url: `${site.url}${path}`,
  }));
}
