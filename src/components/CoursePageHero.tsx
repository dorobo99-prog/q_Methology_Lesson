import Image from "next/image";
import Link from "next/link";
import { findOpenLessonById, getLessonJsonLd } from "@/lib/seo";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface CoursePageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  statusLabel: string;
  versionLabel: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CoursePageHero({
  breadcrumbs,
  statusLabel,
  versionLabel,
  title,
  description,
  imageSrc,
  imageAlt,
}: CoursePageHeroProps) {
  const currentLabel = breadcrumbs[breadcrumbs.length - 1]?.label;
  const lessonId = currentLabel?.match(/^(\d+-\d+)/)?.[1];
  const lesson = findOpenLessonById(lessonId);
  const jsonLd = lesson ? getLessonJsonLd(lesson, description) : undefined;

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}

      <nav
        className="flex items-center gap-1.5 mb-8 flex-wrap"
        style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? <span>›</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} style={{ color: "var(--gray-400)" }} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: isLast ? "var(--black)" : "var(--gray-400)" }}>{item.label}</span>
              )}
            </span>
          );
        })}
      </nav>

      <header
        className="mb-12 px-5 py-6 sm:px-8 sm:py-8"
        style={{
          background: "var(--gray-100)",
          borderRadius: "8px",
        }}
      >
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--white)",
              color: "var(--black)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {statusLabel}
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
          >
            {versionLabel}
          </span>
        </div>

        <h1
          className="font-semibold mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 44px)",
            lineHeight: 1.1,
            color: "var(--black)",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "var(--gray-700)",
            maxWidth: "740px",
          }}
        >
          {description}
        </p>

        {imageSrc && imageAlt ? (
          <div className="mt-8 overflow-hidden" style={{ borderRadius: "8px", maxWidth: "560px" }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1120}
              height={630}
              className="w-full h-auto block"
              priority
            />
          </div>
        ) : null}
      </header>
    </>
  );
}
