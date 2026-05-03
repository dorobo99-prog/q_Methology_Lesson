import type { Metadata } from "next";
import Link from "next/link";
import { CURRICULUM, type LessonStatus } from "@/data/lessons";

export const metadata: Metadata = {
  title: "강의 목차 | Q방법론 온라인 강의",
  description: "Q방법론 온라인 강의 전체 목차. 10부 22장 구성.",
};

type BadgeStyle = { label: string; bg: string; color: string };
const statusBadge: Record<LessonStatus, BadgeStyle> = {
  open:   { label: "공개",    bg: "var(--white)", color: "var(--black)" },
  draft:  { label: "작성 중", bg: "var(--white)", color: "var(--black)" },
  locked: { label: "예정",    bg: "var(--white)", color: "var(--gray-400)" },
};

export default function OutlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <section
        className="mb-12 px-5 py-6 sm:px-8 sm:py-8"
        style={{ background: "var(--gray-100)", borderRadius: "8px" }}
      >
        <div
          className="text-xs mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
        >
          강의 목차
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
          전체 강의 목차
        </h1>
        <p className="text-sm sm:text-base" style={{ color: "var(--gray-700)", maxWidth: "740px", lineHeight: 1.6 }}>
          대학원생과 연구자를 위한 Q방법론 온라인 강의 전체 목차입니다.<br />
          이 강의는 Stephenson의 Q방법론, Brown의 정치적 주관성, Q와 R의 차이, Q-set 개발, P-set 선정, Q-sort, 요인분석, PQMethod, R qmethod, 논문 작성법까지 단계별로 다룹니다.
        </p>

        <div className="flex flex-wrap gap-2 mt-7">
          {Object.values(statusBadge).map((v) => (
            <span
              key={v.label}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                fontFamily: "var(--font-mono)",
                background: v.bg,
                color: v.color,
                border: "1px solid var(--border-subtle)",
              }}
            >
              {v.label}
            </span>
          ))}
        </div>
      </section>

      {/* 목차 */}
      <div className="space-y-12">
        {CURRICULUM.map((part) => (
          <div key={part.num}>
            <h2
              className="font-semibold mb-5 pb-3"
              style={{
                fontSize: "20px",
                fontFamily: "var(--font-display)",
                color: "var(--black)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ color: "var(--brand-deep)" }}>{part.num}.</span>{" "}
              {part.title}
            </h2>
            <div className="space-y-6 pl-2">
              {part.chapters.map((chapter) => (
                <div key={chapter.num}>
                  <h3
                    className="text-sm font-medium mb-2 ml-1"
                    style={{ color: "var(--gray-500)" }}
                  >
                    {chapter.num}. {chapter.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {chapter.lessons.map((lesson) => {
                      const badge = statusBadge[lesson.status];
                      const isOpen = lesson.status === "open" && lesson.href;
                      return (
                        <li
                          key={lesson.id}
                          className="flex items-center gap-3 py-1.5 px-3 rounded-lg"
                        >
                          <span
                            className="shrink-0 text-xs px-2.5 py-0.5 rounded-full"
                            style={{
                              fontFamily: "var(--font-mono)",
                              background: badge.bg,
                              color: badge.color,
                              border: "1px solid var(--border-subtle)",
                            }}
                          >
                            {badge.label}
                          </span>
                          {isOpen ? (
                            <Link
                              href={lesson.href!}
                              className="text-sm font-medium transition-colors"
                              style={{ color: "var(--brand-deep)" }}
                            >
                              {lesson.id}. {lesson.title}
                            </Link>
                          ) : (
                            <span className="text-sm" style={{ color: "var(--gray-400)" }}>
                              {lesson.id}. {lesson.title}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
