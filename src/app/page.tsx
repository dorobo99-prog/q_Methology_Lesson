import Link from "next/link";

const stats = [
  { value: "10부", label: "파트 구성" },
  { value: "22장", label: "챕터 수" },
  { value: "70+", label: "강의 편수" },
  { value: "대학원생", label: "대상" },
];

const features = [
  {
    badge: "이론",
    badgeColor: { bg: "var(--brand-light)", color: "var(--brand-deep)" },
    title: "이론과 실전 동시에",
    desc: "Stephenson의 원전부터 PQMethod 실습까지, Q방법론을 처음 배우는 연구자가 논문을 쓸 수 있는 수준까지 안내합니다.",
  },
  {
    badge: "보고",
    badgeColor: { bg: "rgba(55,114,207,0.10)", color: "#3772cf" },
    title: "최신 보고 기준 반영",
    desc: "Churruca et al. (2021)과 Dieteren et al. (2023)의 체계적 문헌검토를 기반으로, 학술지 심사를 통과하는 보고 수준을 목표로 합니다.",
  },
  {
    badge: "사례",
    badgeColor: { bg: "rgba(195,125,13,0.10)", color: "#c37d0d" },
    title: "다양한 분야 사례",
    desc: "정책연구, 재난·위험연구, 의료, 환경 등 실제 Q방법론 적용 사례를 통해 자신의 연구에 적용하는 방법을 배웁니다.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 히어로 — 대기 그라디언트 */}
      <section
        className="text-center px-8 py-24"
        style={{
          background: "linear-gradient(180deg, #e8faf1 0%, #f0fdf6 30%, #ffffff 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-6"
            style={{
              background: "var(--brand-light)",
              color: "var(--brand-deep)",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            ✅ 강의 1-1 공개 중
          </span>

          <h1
            className="font-semibold mb-4"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-1.28px",
              color: "var(--black)",
            }}
          >
            사람들의 관점 차이를
            <br />
            <span style={{ color: "var(--brand-deep)" }}>과학적으로 탐구</span>하는 방법
          </h1>

          <p
            className="mx-auto mb-8"
            style={{
              fontSize: "18px",
              lineHeight: 1.5,
              color: "var(--gray-500)",
              maxWidth: "560px",
            }}
          >
            Q방법론은 주관적인 생각을 체계적으로 배열하고 비교해, 관점의 유형을 찾아내는 연구방법입니다.
            정책, 위험, 안전, 교육처럼 가치와 판단이 얽힌 문제에서 특히 유용합니다.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/lessons/1-1"
              className="inline-block font-medium transition-opacity hover:opacity-90"
              style={{
                background: "var(--black)",
                color: "var(--white)",
                padding: "10px 24px",
                borderRadius: "9999px",
                fontSize: "15px",
                boxShadow: "var(--shadow-button)",
              }}
            >
              1강 시작하기
            </Link>
            <Link
              href="/outline"
              className="inline-block font-medium transition-colors"
              style={{
                background: "var(--white)",
                color: "var(--black)",
                padding: "10px 24px",
                borderRadius: "9999px",
                fontSize: "15px",
                border: "1px solid var(--border-medium)",
              }}
            >
              강의 목차 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 통계 바 */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="max-w-4xl mx-auto px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-semibold text-2xl"
                style={{ color: "var(--black)", letterSpacing: "-0.5px" }}
              >
                {s.value}
              </div>
              <div className="text-sm mt-0.5" style={{ color: "var(--gray-400)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 특징 카드 */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--gray-400)",
            letterSpacing: "0.6px",
          }}
        >
          강의 특징
        </div>
        <h2
          className="font-semibold mb-10"
          style={{ fontSize: "32px", letterSpacing: "-0.8px", lineHeight: 1.2 }}
        >
          이 강의에서 배우는 것
        </h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 transition-all"
              style={{
                background: "var(--white)",
                border: "1px solid rgba(0,0,0,0.05)",
                borderRadius: "16px",
                boxShadow: "rgba(0,0,0,0.03) 0px 2px 4px",
              }}
            >
              <span
                className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-4"
                style={{
                  background: f.badgeColor.bg,
                  color: f.badgeColor.color,
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {f.badge}
              </span>
              <h3
                className="font-semibold mb-2"
                style={{ fontSize: "20px", letterSpacing: "-0.2px" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.05)" }} />

      {/* CTA 하단 */}
      <section className="px-8 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="font-semibold mb-3"
            style={{ fontSize: "32px", letterSpacing: "-0.8px", lineHeight: 1.2 }}
          >
            지금 1강을 시작해보세요
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--gray-500)" }}>
            Q방법론의 정의와 어떤 연구문제에 적합한지 배웁니다.
          </p>
          <Link
            href="/lessons/1-1"
            className="inline-block font-medium transition-opacity hover:opacity-90"
            style={{
              background: "var(--brand)",
              color: "var(--black)",
              padding: "10px 28px",
              borderRadius: "9999px",
              fontSize: "15px",
            }}
          >
            1-1. Q방법론의 정의와 연구문제 →
          </Link>
        </div>
      </section>
    </div>
  );
}
