export const dynamic = 'force-static';
export const revalidate = 0;

import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sangwajesly.vercel.app";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...projects.map((p) => ({ url: base + "/work/" + p.slug, lastModified: new Date() })),
  ];
}