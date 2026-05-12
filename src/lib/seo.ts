import { openLessons, type Lesson } from "@/data/lessons";

export const siteName = "Q방법론 온라인 강의";
export const courseDescription =
  "대학원생을 위한 Q methodology 온라인 강의사이트. Q방법론의 정의부터 분석, 보고, 논문 작성까지 다룹니다.";

function normalizeSiteUrl(value: string | undefined): string {
  const fallback = "http://localhost:3000";
  const raw = value?.trim() || fallback;
  const withProtocol = raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL,
);

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function findOpenLessonById(id: string | undefined): Required<Lesson> | undefined {
  if (!id) return undefined;
  return openLessons.find((lesson) => lesson.id === id);
}

export function getLessonJsonLd(lesson: Required<Lesson>, description: string) {
  const lessonUrl = absoluteUrl(lesson.href);
  const lessonName = `${lesson.id}. ${lesson.title}`;
  const image = lesson.image ? absoluteUrl(lesson.image) : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${absoluteUrl("/")}#course`,
        name: siteName,
        description: courseDescription,
        inLanguage: "ko",
        provider: {
          "@type": "Organization",
          name: siteName,
          url: absoluteUrl("/"),
        },
      },
      {
        "@type": ["Article", "LearningResource"],
        "@id": `${lessonUrl}#article`,
        headline: lessonName,
        name: lessonName,
        description,
        url: lessonUrl,
        mainEntityOfPage: lessonUrl,
        inLanguage: "ko",
        image,
        isPartOf: {
          "@id": `${absoluteUrl("/")}#course`,
        },
        learningResourceType: "Lecture",
        educationalLevel: "Graduate",
        about: ["Q방법론", "Q methodology", "주관성 연구"],
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: absoluteUrl("/"),
        },
      },
    ],
  };
}
