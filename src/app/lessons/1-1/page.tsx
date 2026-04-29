import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "1-1. Q방법론의 정의와 연구문제 | Q방법론 온라인 강의",
  description:
    "Q방법론은 사람들의 생각 배열 패턴을 비교해, 서로 다른 관점의 구조를 밝혀내는 방법이다.",
};

const references = [
  {
    key: "Brown1980",
    text: (
      <>
        Brown, S. R. (1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. New Haven: Yale University.
      </>
    ),
  },
  {
    key: "Churruca2021",
    text: (
      <>
        Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>(1), 125.
      </>
    ),
    doi: "https://doi.org/10.1186/s12874-021-01309-7",
  },
  {
    key: "Dieteren2023",
    text: (
      <>
        Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>(1), 100404.
      </>
    ),
    doi: "https://doi.org/10.1016/j.ssaho.2023.100404",
  },
  {
    key: "Stephenson1953",
    text: (
      <>
        Stephenson, W. (1953). <em>The study of behavior; Q-technique and its methodology</em>. University of Chicago Press.
      </>
    ),
  },
  {
    key: "Watts2012",
    text: (
      <>
        Watts, S., &amp; Stenner, P. (2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE Publications Ltd.
      </>
    ),
    doi: "https://doi.org/10.4135/9781446251911",
  },
];

const classics = [
  {
    author: "Stephenson, W. (1953)",
    title: "The Study of Behavior: Q-Technique and Its Methodology",
    note: "Q방법론의 원전. 변수가 아니라 사람의 주관적 배열을 과학으로 다루려 한 출발점이다.",
  },
  {
    author: "Brown, S. R. (1980)",
    title: "Political Subjectivity",
    note: "Q방법론을 사회과학 연구로 확장한 책. 조작적 주관성을 분명히 정리한다.",
  },
  {
    author: "Watts, S., & Stenner, P. (2012)",
    title: "Doing Q Methodological Research",
    note: "현대 Q연구의 입문서. 설계, 분석, 해석, 보고를 실제 절차로 풀어낸다.",
  },
];

const summaryTable = [
  {
    concept: "분석 단위",
    en: "unit of analysis",
    question: "무엇을 비교하는가",
    answer: "변수 간 점수가 아니라 사람의 배열 전체를 비교한다",
  },
  {
    concept: "결과물",
    en: "output",
    question: "무엇이 나오는가",
    answer: "찬성률이나 평균이 아니라 관점 유형이 나온다",
  },
  {
    concept: "잘 맞는 문제",
    en: "good fit",
    question: "어떤 연구문제와 어울리는가",
    answer: "가치·경험·해석이 갈리는 문제에 강하다",
  },
  {
    concept: "덜 맞는 문제",
    en: "limited fit",
    question: "어떤 연구문제와 안 맞는가",
    answer: "모집단 비율 추정과 인과효과 검증에는 부적합하다",
  },
];

function Card({
  num,
  title,
  keyMessage,
  points,
  imageSrc,
  imageAlt,
  children,
}: {
  num: number;
  title: string;
  keyMessage: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div
        className="text-xs font-medium mb-3"
        style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.4px" }}
      >
        {num < 10 ? `0${num}` : num}
      </div>

      <h2
        className="font-semibold mb-5"
        style={{ fontSize: "22px", letterSpacing: "-0.3px", lineHeight: 1.3, color: "var(--black)" }}
      >
        {title}
      </h2>

      <p
        className="mb-7"
        style={{
          fontSize: "18px",
          lineHeight: 1.65,
          color: "var(--brand-deep)",
          fontWeight: 500,
          paddingLeft: "14px",
          borderLeft: "3px solid var(--brand)",
        }}
      >
        {keyMessage}
      </p>

      <div className="mb-6 overflow-hidden" style={{ borderRadius: "12px" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={960}
          height={540}
          className="w-full h-auto block"
        />
      </div>

      <ul className="mb-8 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3" style={{ color: "var(--gray-700)" }}>
            <span
              className="shrink-0 font-semibold mt-0.5"
              style={{
                fontSize: "13px",
                color: "var(--brand)",
                fontFamily: "var(--font-mono)",
                minWidth: "18px",
              }}
            >
              {i + 1}.
            </span>
            <span style={{ fontSize: "15px", lineHeight: 1.7 }}>{point}</span>
          </li>
        ))}
      </ul>

      <div
        className="space-y-5"
        style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Lesson11Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "1부" },
          { label: "1-1. Q방법론의 정의와 연구문제" },
        ]}
        statusLabel="공개"
        versionLabel="v2.0 · 2026-04-29"
        title="Q방법론의 정의와 연구문제"
        description="Q방법론은 사람들의 생각 배열 패턴을 비교해, 서로 다른 관점의 구조를 밝혀내는 방법이다."
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "17px", color: "var(--black)" }}
        >
          왜 Q방법론인가
        </h2>
        <div
          className="space-y-5"
          style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}
        >
          <p>
            사회과학에서 사람들의 생각을 묻는 가장 익숙한 방식은 설문조사다.
            많은 사람에게 같은 질문을 던지고, 평균과 비율, 변수 간 관계를 계산한다.
          </p>
          <p>
            그러나 모든 연구문제가 평균과 비율로 설명되는 것은 아니다.
            같은 문장에 동의해도 이유가 다르고,
            찬반보다 <strong>무엇을 먼저 보고 무엇을 뒤로 미루는가</strong>가 더 중요한 문제도 있다.
          </p>
          <p>
            Q방법론은 바로 그 지점을 다룬다.
            참여자에게 진술문들을 서로 비교해 하나의 배열로 만들게 한다.
            그 배열은 한 사람의 관점이 어떤 우선순위와 긴장 속에서 조직되는지 보여준다.
          </p>
          <p>
            1-1강은 Q방법론이 무엇이고, 어떤 연구문제와 어울리며, 어떤 연구문제와 어울리지 않는지를 짚는다.
          </p>
        </div>
      </section>

      {/* 카드 4개 */}
      <div className="space-y-8 mb-10">
        {/* 카드 1 */}
        <Card
          num={1}
          title="Q방법론이란?"
          keyMessage="Q방법론은 주관적인 생각을 체계적으로 배열하고 비교해, 관점의 유형을 찾아내는 연구방법이다."
          points={[
            "분석 대상은 변수가 아니라 사람의 관점이다.",
            "결과는 평균이 아니라 관점 유형으로 나타난다.",
            "핵심은 의견의 양보다 생각의 구조다.",
          ]}
          imageSrc="/images/1-1-card-01-definition.webp"
          imageAlt="사람들이 진술문을 정렬하고 배열 패턴 비교를 통해 관점 유형이 도출되는 Q방법론 개념도"
        >
          <p>
            Q방법론을 한 문장으로 말하면 이렇다.
            사람들의 주관적 관점을 <strong>체계적으로 배열하게 하고</strong>,
            그 배열 패턴을 비교하는 방법이다.
          </p>
          <p>
            일반 설문은 문항별 응답을 독립적으로 다룬다.
            Q방법론은 다르다.
            참여자는 여러 진술문을 동시에 놓고 서로 비교한다.
          </p>
          <p>
            어떤 진술문은 강하게 동의하는 쪽에, 어떤 진술문은 강하게 반대하는 쪽에,
            어떤 진술문은 중립에 놓인다.
            이렇게 만들어진 <strong>Q-sort 한 장은 한 사람의 작은 지도</strong>가 된다.
          </p>
          <p>
            Stephenson(1953)은 주관성도 관찰 가능한 행동으로 다룰 수 있다고 보았다.
            Brown(1980)은 Q-sort를 개인의 관점이 조작적으로 표현되는 절차로 정리한다.
            Watts &amp; Stenner(2012)는 이를 사람 간 상관(by-person correlation)을 보는 방법이라고 설명한다.
          </p>
        </Card>

        {/* 카드 2 */}
        <Card
          num={2}
          title="Q방법론은 무엇을 찾는가?"
          keyMessage="Q방법론은 누가 몇 명인지보다, 어떤 생각 유형이 존재하는지를 찾는다."
          points={[
            "비슷하게 배열한 사람들을 하나의 유형으로 묶는다.",
            "각 유형이 무엇을 중요하게 보는지 드러난다.",
            "유형 간 차이를 통해 판단 논리를 해석할 수 있다.",
          ]}
          imageSrc="/images/1-1-card-02-perspective-types.webp"
          imageAlt="비슷한 배열끼리 묶이는 관점 유형 도출 과정"
        >
          <p>
            Q방법론이 찾는 것은 찬성률이나 평균점수가 아니다. 
            <strong>관점의 구조</strong>다.
          </p>
          <p>
            같은 정책에 열 명이 찬성해도 이유는 서로 다를 수 있다.
            누군가는 효율성, 누군가는 형평성, 누군가는 위험 감소를 보고 찬성한다.
          </p>
          <p>
            Q방법론은 이 차이를 보기 위해 Q-sort 전체를 비교한다.
            비슷한 방식으로 배열한 사람들이 하나의 요인으로 묶인다.
          </p>
          <p>
            여기서 요인(factor)은 추상적 변수 묶음이 아니라, 
            <strong>유사한 관점을 공유하는 사람들의 유형</strong>이다.
          </p>
          <p>
            그래서 결과를 읽을 때 중요한 질문은 이렇다.
            &ldquo;1유형이 몇 퍼센트인가&rdquo;가 아니라,
            &ldquo;1유형은 무엇을 가장 중요하게 보고, 다른 유형과 어디서 갈라지는가&rdquo;.
          </p>
        </Card>

        {/* 카드 3 */}
        <Card
          num={3}
          title="어떤 연구문제에 잘 맞는가?"
          keyMessage="정답이 하나가 아니고, 사람마다 보는 방식이 다른 주제에 Q방법론이 잘 맞는다."
          points={[
            "정책 수용성의 유형 차이를 볼 때",
            "위험인식과 안전 판단의 차이를 볼 때",
            "조직 내 해석 차이를 분석할 때",
          ]}
          imageSrc="/images/1-1-card-03-good-fit.webp"
          imageAlt="Q방법론이 잘 맞는 연구문제 — 정책, 위험, 조직문화, 교육"
        >
          <p>
            Q방법론은 사람마다 보는 방식이 다를 것으로 예상되는 주제에 잘 맞는다.
            정답이 하나로 정해져 있지 않고,
            이해관계자마다 우선순위와 판단 기준이 다른 문제다.
          </p>
          <p>
            정책 수용성, 위험인식, 안전 판단, 조직문화, 교육과정 개편, 의료 서비스 경험, 환경 갈등. 
            <strong>가치와 경험과 이해관계가 섞인 문제</strong>들이다.
          </p>
          <p>
            이런 주제에서 단순 평균은 오히려 중요한 차이를 가린다.
            Churruca et al.(2021)은 Q방법론이 헬스케어처럼 윤리적으로 민감하고
            다양한 이해관계자가 얽힌 문제에서 특히 유용하다고 정리한다.
          </p>
          <p>
            Dieteren et al.(2023)의 검토에 따르면 Q연구는
            사회과학, 환경과학, 의학, 간호학, 경영학 등 폭넓은 분야에서 활용되고 있다.
          </p>
        </Card>

        {/* 카드 4 */}
        <Card
          num={4}
          title="어떤 연구문제에는 덜 맞는가?"
          keyMessage="Q방법론은 대표성 추정보다 관점 구조 탐색에 강하다."
          points={[
            "전 국민 비율 추정에는 적합하지 않다.",
            "인과효과 검증이 목적인 연구와는 다르다.",
            "대표성보다 다양한 관점의 포착이 중요하다.",
          ]}
          imageSrc="/images/1-1-card-04-limited-fit.webp"
          imageAlt="설문조사와 Q방법론 비교 — 비율 추정 vs 관점 유형 탐색"
        >
          <p>
            Q방법론이 모든 연구문제에 맞는 것은 아니다.
          </p>
          <p>
            Q방법론은 관점 유형을 찾는 데 강하지만,
            그 유형이 모집단 전체에서 몇 퍼센트인지는 말해주지 않는다.
            전 국민의 정책 찬성률이 궁금하다면 <strong>대표 표본 설문</strong>이 더 맞다.
          </p>
          <p>
            객관적 변수 간 인과효과 검증과도 목적이 다르다.
            성별·연령·소득의 효과를 통계적으로 검증하고 싶다면
            회귀분석, 실험, 패널분석이 더 알맞다.
          </p>
          <p>
            Churruca et al.(2021)도 Q방법론의 초점이 인구학적 일반화가 아니라 
            <strong>관점의 다양성 포착</strong>에 있음을 분명히 한다.
          </p>
        </Card>
      </div>

      {/* 핵심 고전 3선 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          핵심 고전 3선
        </div>
        <h2
          className="font-semibold mb-6"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          이 강의가 기대고 있는 책 세 권
        </h2>
        <div className="space-y-6">
          {classics.map((c) => (
            <div
              key={c.author}
              className="pt-5"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: "var(--brand-deep)", fontFamily: "var(--font-mono)" }}
              >
                {c.author}
              </div>
              <div
                className="font-semibold italic mb-2"
                style={{ fontSize: "16px", letterSpacing: "-0.2px", color: "var(--black)" }}
              >
                {c.title}
              </div>
              <p
                className="leading-relaxed"
                style={{ fontSize: "14px", color: "var(--gray-500)" }}
              >
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 핵심 정리 표 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          핵심 정리
        </h2>

        {/* 데스크탑 테이블 */}
        <div className="hidden sm:block overflow-x-auto">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>관점</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>핵심 질문</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>1-1강에서의 답</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr
                  key={row.concept}
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
                >
                  <td className="py-3 pr-4">
                    <span className="font-medium" style={{ color: "var(--brand-deep)" }}>{row.concept}</span>
                    <br />
                    <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>{row.en}</span>
                  </td>
                  <td className="py-3 pr-4 leading-relaxed">{row.question}</td>
                  <td className="py-3 leading-relaxed">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 */}
        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div
              key={row.concept}
              className="py-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="font-medium mb-1" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>
                {row.concept}
              </div>
              <div
                className="text-xs mb-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
              >
                {row.en}
              </div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }}>
                <div className="mb-1"><strong>질문:</strong> {row.question}</div>
                <div><strong>답:</strong> {row.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 요약 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          요약
        </div>
        <div
          className="space-y-4"
          style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--gray-700)" }}
        >
          <p>
            Q방법론은 사람들의 생각을 단순 점수로 보지 않는다.
            여러 생각이 어떤 우선순위와 긴장 속에서 하나의 관점을 이루는지를 본다.
          </p>
          <p>
            이 방법은 큰 표본으로 비율을 추정하기보다,
            특정 주제에 대해 <strong>의미 있게 구별되는 관점 유형</strong>을 발견하고 해석하는 데 강하다.
          </p>
          <p>
            Churruca et al.(2021)과 Dieteren et al.(2023)의 검토 연구도
            바로 이 점, Q방법론의 강점이 관점의 다양성 탐색과 해석에 있다는 점을 거듭 확인한다.
          </p>
        </div>
      </section>

      {/* 참고문헌 */}
      <section className="mb-10">
        <h2
          className="font-medium mb-4"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          참고문헌
        </h2>
        <ul className="space-y-2.5">
          {references.map((ref) => (
            <li
              key={ref.key}
              className="leading-relaxed"
              style={{ fontSize: "13px", color: "var(--gray-500)" }}
            >
              {ref.text}
              {ref.doi && (
                <>
                  {" "}
                  <a
                    href={ref.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--brand-deep)", textDecoration: "underline" }}
                  >
                    {ref.doi}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 다음 강의 */}
      <div
        className="pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="text-sm" style={{ color: "var(--gray-400)" }}>← 이전 강의 없음</div>
        <Link
          href="/lessons/1-2"
          className="text-sm text-right"
          style={{ color: "var(--brand-deep)" }}
        >
          1-2. Q방법론의 핵심 개념과 필요한 이유 →
        </Link>
      </div>
    </div>
  );
}
