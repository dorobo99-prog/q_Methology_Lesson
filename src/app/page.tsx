import Image from "next/image";
import Link from "next/link";

import { openLessons } from "@/data/lessons";
import { awards, papers, presentations } from "@/data/profile";

const stats = [
  { value: "10부", label: "파트 구성" },
  { value: "22장", label: "챕터 수" },
  { value: "123강", label: "전체 강의 편수" },
  { value: "대학원생", label: "주 대상" },
];

const latestLessons = [...openLessons]
  .filter((lesson) => lesson.publishedAt)
  .sort((a, b) => {
    const dateOrder = b.publishedAt.localeCompare(a.publishedAt);
    return dateOrder !== 0 ? dateOrder : b.order - a.order;
  })
  .slice(0, 5);

const formatDate = (date: string) => date.replaceAll("-", ".");

const features = [
  {
    title: "원전에서 시작",
    description: "Stephenson, Brown, Watts & Stenner를 따라가며 개념이 어떻게 생기고 바뀌는지 차근히 읽습니다.",
  },
  {
    title: "논문까지 연결",
    description: "강의는 정의에서 멈추지 않고, 설계, 분석, 보고, 심사 대응까지 이어지는 연구 작업을 염두에 둡니다.",
  },
  {
    title: "가치 갈등을 다루는 방법",
    description: "정책, 위험, 안전, 교육처럼 평균만으로는 설명되지 않는 문제에서 관점 구조를 어떻게 읽는지 배웁니다.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="px-5 py-24 text-center sm:px-8 sm:py-28" style={{ background: "var(--gray-100)" }}>
        <h1
          className="mx-auto max-w-[760px] font-semibold"
          style={{ fontSize: "clamp(36px, 7vw, 56px)", lineHeight: 1.07, color: "var(--black)" }}
        >
          관점의 차이를
          <br />
          연구 가능한 질서로.
        </h1>
        <p className="mx-auto mt-5 max-w-[620px]" style={{ fontSize: "19px", lineHeight: 1.47, color: "rgba(0,0,0,0.8)" }}>
          Q방법론은 사람들이 무엇을 더 중요하게 보고, 무엇을 뒤로 미루며, 어떤 방식으로 세계를 배열하는지를 탐구합니다.
          이 강의는 그 발상에서 분석과 보고까지를 대학원생의 연구 언어로 정리합니다.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link className="rounded-full px-6 py-2.5 text-[17px] text-white" style={{ background: "var(--brand)" }} href="/lessons/1-1">
            1강 시작하기
          </Link>
          <Link className="rounded-full border px-6 py-2.5 text-[17px]" style={{ borderColor: "var(--brand)", color: "var(--brand)" }} href="/outline">
            전체 목차 보기 →
          </Link>
        </div>
      </section>

      <section className="border-y" style={{ borderColor: "var(--gray-200)" }}>
        <div className="mx-auto grid max-w-[900px] grid-cols-2 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r px-5 py-7 text-center last:border-r-0" style={{ borderColor: "var(--gray-200)" }}>
              <div className="font-semibold" style={{ fontSize: "36px", lineHeight: 1.07 }}>{stat.value}</div>
              <div className="mt-1 text-xs" style={{ color: "rgba(0,0,0,0.48)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.5px]" style={{ color: "rgba(0,0,0,0.48)" }}>강의 방향</p>
          <h2 className="mb-9 font-semibold" style={{ fontSize: "clamp(28px, 5vw, 40px)", lineHeight: 1.1 }}>
            개념 설명에서 멈추지 않고
            <br />
            연구 작업까지.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="mb-2 font-semibold" style={{ fontSize: "19px", lineHeight: 1.2 }}>{feature.title}</h3>
                <p className="text-[15px]" style={{ color: "rgba(0,0,0,0.8)", lineHeight: 1.5 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-20" style={{ background: "var(--gray-100)" }}>
        <div className="mx-auto max-w-[900px]">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.5px]" style={{ color: "rgba(0,0,0,0.48)" }}>공개된 강의</p>
          <h2 className="mb-9 font-semibold" style={{ fontSize: "clamp(28px, 5vw, 40px)", lineHeight: 1.1 }}>최신 강의</h2>
          <div className="overflow-hidden rounded-xl border bg-white" style={{ borderColor: "var(--gray-200)" }}>
            <div
              className="hidden grid-cols-[116px_1fr_140px] border-b px-5 py-3 text-xs font-semibold sm:grid"
              style={{ borderColor: "var(--gray-200)", color: "rgba(0,0,0,0.48)" }}
            >
              <span>강의 차수</span>
              <span>강의 제목</span>
              <span className="text-right">업로드 날짜</span>
            </div>
            {latestLessons.map((lesson) => (
              <Link
                key={lesson.id}
                className="grid gap-1 border-b px-5 py-4 transition-colors last:border-b-0 hover:bg-[var(--gray-100)] sm:grid-cols-[116px_1fr_140px] sm:items-center sm:gap-4"
                style={{ borderColor: "var(--gray-200)" }}
                href={lesson.href}
              >
                <span className="text-xs font-semibold sm:text-sm" style={{ color: "var(--brand)" }}>
                  <span className="mr-2 font-medium sm:hidden" style={{ color: "rgba(0,0,0,0.48)" }}>강의 차수</span>
                  {lesson.id}
                </span>
                <span className="font-semibold" style={{ fontSize: "16px", lineHeight: 1.35 }}>{lesson.title}</span>
                <span className="text-xs sm:text-right sm:text-sm" style={{ color: "rgba(0,0,0,0.48)" }}>
                  <span className="mr-2 font-medium sm:hidden">업로드 날짜</span>
                  {formatDate(lesson.publishedAt)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="author" className="px-5 py-20 sm:px-8" style={{ background: "var(--gray-100)" }}>
        <div className="mx-auto max-w-[900px]">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.5px]" style={{ color: "rgba(0,0,0,0.48)" }}>강의 개설자</p>
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-9">
            <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full bg-black">
              <Image src="/images/profile.webp" alt="백승창 프로필 사진" fill sizes="88px" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <h2 className="mb-2 font-semibold" style={{ fontSize: "40px", lineHeight: 1.1 }}>백승창</h2>
              <p style={{ fontSize: "17px", color: "rgba(0,0,0,0.8)", lineHeight: 1.47 }}>
                동아대학교 재난관리학과 박사과정
                <br />
                부산소방재난본부 현직 소방공무원 (경력 20년)
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Q방법론", "재난관리정책", "단절적 균형이론 (PET)", "소방예산 분석"].map((tag) => (
                  <span key={tag} className="rounded-full border bg-white px-3.5 py-1 text-[13px]" style={{ borderColor: "var(--gray-200)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 grid overflow-hidden rounded-xl border sm:grid-cols-3" style={{ borderColor: "var(--gray-200)" }}>
            <div className="bg-white px-5 py-6 text-center"><div className="text-[40px] font-semibold leading-none">{papers.length}</div><div className="mt-1 text-xs" style={{ color: "rgba(0,0,0,0.48)" }}>KCI 등재 논문</div></div>
            <div className="border-y bg-white px-5 py-6 text-center sm:border-x sm:border-y-0" style={{ borderColor: "var(--gray-200)" }}><div className="text-[40px] font-semibold leading-none">{presentations.length}</div><div className="mt-1 text-xs" style={{ color: "rgba(0,0,0,0.48)" }}>학회 발표</div></div>
            <div className="bg-white px-5 py-6 text-center"><div className="text-[40px] font-semibold leading-none">{awards.length}</div><div className="mt-1 text-xs" style={{ color: "rgba(0,0,0,0.48)" }}>수상</div></div>
          </div>

          <details className="overflow-hidden rounded-xl border bg-white" style={{ borderColor: "var(--gray-200)" }}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-semibold [&::-webkit-details-marker]:hidden" style={{ fontSize: "21px" }}>
              논문 실적 · 학회 발표 · 수상경력
              <span className="text-sm font-medium" style={{ color: "var(--brand-deep)" }}>펼치기 / 접기</span>
            </summary>
            <div className="border-t px-5 py-6" style={{ borderColor: "var(--gray-200)" }}>
              <h3 className="mb-5 font-semibold" style={{ fontSize: "21px" }}>논문 실적</h3>
              <div className="grid gap-3">
                {papers.map((paper) => (
                  <article key={paper.title} className="rounded-lg bg-white p-5" style={{ border: "1px solid var(--gray-200)" }}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.4px]" style={{ color: "var(--brand)" }}>{paper.journal}</span>
                      <span className="rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-[0.2px]" style={{ borderColor: "var(--gray-200)", color: "rgba(0,0,0,0.56)" }}>{paper.kciGrade}</span>
                    </div>
                    <p className="mt-1 text-[15px] font-semibold leading-relaxed">{paper.title}</p>
                    <p className="mt-1 text-[13px]" style={{ color: "rgba(0,0,0,0.48)" }}>{paper.meta}</p>
                    {paper.doi ? <a className="mt-1 block text-xs" style={{ color: "var(--brand-deep)" }} href={paper.doi} target="_blank" rel="noopener noreferrer">{paper.doi.replace("https://", "")} ›</a> : null}
                  </article>
                ))}
              </div>

              <hr className="my-9 border-0 border-t" style={{ borderColor: "var(--gray-200)" }} />

              <h3 className="mb-5 font-semibold" style={{ fontSize: "21px" }}>학회 발표</h3>
              <div className="relative pl-5">
                <div className="absolute bottom-2 left-[6px] top-2 w-px" style={{ background: "var(--gray-200)" }} />
                {presentations.map(([year, title, venue]) => (
                  <div key={`${year}-${title}`} className="relative pb-5 pl-6 last:pb-0">
                    <div className="absolute left-[-14px] top-1.5 h-2 w-2 rounded-full border-2" style={{ background: "var(--brand)", borderColor: "var(--gray-100)" }} />
                    <p className="mb-0.5 text-[11px] font-semibold tracking-[0.3px]" style={{ color: "var(--brand)" }}>{year}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.8)" }}>{title}<br /><span className="text-xs" style={{ color: "rgba(0,0,0,0.48)" }}>{venue}</span></p>
                  </div>
                ))}
              </div>

              <hr className="my-9 border-0 border-t" style={{ borderColor: "var(--gray-200)" }} />

              <h3 className="mb-5 font-semibold" style={{ fontSize: "21px" }}>수상경력</h3>
              <div className="flex flex-wrap gap-2.5">
                {awards.map(([title, year]) => (
                  <div key={title} className="rounded-lg border px-4 py-3" style={{ borderColor: "var(--gray-200)" }}>
                    <div className="text-[13px] leading-snug">{title}<span className="mt-0.5 block text-[11px]" style={{ color: "rgba(0,0,0,0.48)" }}>{year}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8" style={{ background: "var(--white)" }}>
        <div className="mx-auto max-w-[600px]">
          <h2 className="font-semibold" style={{ fontSize: "clamp(30px, 5vw, 40px)", lineHeight: 1.1 }}>처음부터 순서대로.</h2>
          <p className="mt-4" style={{ fontSize: "17px", color: "rgba(0,0,0,0.8)" }}>
            정의, 역사, 개념, 절차, 분석, 보고까지 이어지는 전체 흐름을 목차에서 먼저 훑고 첫 강의부터 들어오면 가장 자연스럽습니다.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link className="rounded-full border px-6 py-2.5 text-[17px]" style={{ borderColor: "var(--brand)", color: "var(--brand)" }} href="/outline">강의 목차 보기</Link>
            <Link className="rounded-full px-6 py-2.5 text-[17px] text-white" style={{ background: "var(--brand)" }} href="/lessons/1-1">1강 바로 시작 →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
