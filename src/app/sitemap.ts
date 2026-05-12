import type { MetadataRoute } from "next";
import { openLessons } from "@/data/lessons";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/outline"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...openLessons.map((lesson) => ({
      url: absoluteUrl(lesson.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: lesson.image ? [absoluteUrl(lesson.image)] : undefined,
    })),
  ];
}
