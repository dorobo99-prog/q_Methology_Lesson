import type { Metadata } from "next";
import Link from "next/link";
import { CURRICULUM, type LessonStatus } from "@/data/lessons";

export const metadata: Metadata = {
  title: "강의 목차 | Q방법론 온라인 강의",
  description: "Q방법론 온라인 강의 전체 목차. 10부 22장 130회차 구성. 연구 설계부터 분석·해석·논문 작성까지.",
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
        <p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.6 }}>
          10부 · 22장 · {CURRICULUM.reduce((total, part) => total + part.chapters.reduce((count, chapter) => count + chapter.lessons.length, 0), 0)}회차
          <br />예정 회차는 원고와 실습자료를 준비한 뒤 순차적으로 공개합니다.
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

      <section className="mb-12" aria-labelledby="learning-path">
        <h2 id="learning-path" className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
          내 연구에 맞게 따라가기
        </h2>
        <ul className="space-y-3 text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>
          <li>처음 배우면: 1장 → 5장 → 6~12장 → 13장 또는 14장 → 16~18장. 요인 수를 판단할 때는 11-1~11-3의 정의 Q분류(Defining sort)를 먼저 읽고 10장으로 돌아옵니다.</li>
          <li>이론을 깊게 배우면: 1장 → 2~4장 → 5장 이후. 연구 목적에 따라 19~21장의 응용·확장을 선택합니다.</li>
          <li>분석 실습은 PQMethod와 R qmethod 중 한 경로를 먼저 완주하고, 15장에서 설정과 결과를 비교합니다. 22장의 체크리스트와 자료실은 각 단계에서 활용합니다.</li>
        </ul>
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
