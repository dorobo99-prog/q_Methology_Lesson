import type { Metadata } from "next";
import Link from "next/link";
import LessonCard from "@/components/LessonCard";
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
        Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., & Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>(1), 125.
      </>
    ),
    doi: "https://doi.org/10.1186/s12874-021-01309-7",
  },
  {
    key: "Dieteren2023",
    text: (
      <>
        Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., & Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences & Humanities Open, 7</em>(1), 100404.
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
        Watts, S., & Stenner, P. (2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE Publications Ltd.
      </>
    ),
    doi: "https://doi.org/10.4135/9781446251911",
  },
];

const classics = [
  {
    author: "Stephenson, W. (1953)",
    title: "The Study of Behavior: Q-Technique and Its Methodology",
    bullets: [
      "Q방법론의 원전",
      "Q와 R의 구분",
      "사람 중심 요인분석의 기초",
      "주관성의 과학적 탐구 출발점",
    ],
    note: "이 문헌은 대규모 표본과 변수 중심 분석에 익숙한 학생들에게 Q방법론의 출발점이 전혀 다른 문제의식, 즉 사람의 주관적 배열을 과학적으로 다루려는 시도였음을 보여준다.",
  },
  {
    author: "Brown, S. R. (1980)",
    title: "Political Subjectivity: Applications of Q Methodology in Political Science",
    bullets: [
      "Q방법론을 사회과학·정치학 연구로 확장",
      "조작적 주관성 (operant subjectivity)의 사회과학적 의미 정리",
      "Q가 단순히 R방법론의 전치가 아니라는 점을 분명히 설명",
    ],
    note: "Q방법론은 기존 설문 데이터의 행과 열을 뒤집는 기술적 요령이 아니라, 참여자의 자기참조적 관점을 Q-sort로 표현하게 하는 독립적 방법론이다.",
  },
  {
    author: "Watts, S., & Stenner, P. (2012)",
    title: "Doing Q Methodological Research: Theory, Method and Interpretation",
    bullets: [
      "현대 Q 연구의 대표적 입문서",
      "연구설계, 분석, 해석, 보고 절차 설명",
      "대학원생과 실무 연구자에게 실용적 기준 제공",
    ],
    note: "Q-set, Q-sort, 사람 중심 요인분석, factor array, 요인 해석 같은 뒤 강의의 주요 용어를 예고하는 역할을 한다.",
  },
];

export default function Lesson11Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의 목차", href: "/outline" },
          { label: "1부. Q방법론 입문" },
          { label: "1-1. Q방법론의 정의와 연구문제" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-04-25"
        title="Q방법론의 정의와 연구문제"
        description="Q방법론은 사람들의 생각 배열 패턴을 비교해, 서로 다른 관점의 구조를 밝혀내는 방법이다."
      />

      {/* 도입 설명 */}
      <section className="mb-10 pt-8 space-y-4 leading-relaxed text-sm" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", color: "var(--gray-700)" }}>
        <h2
          className="font-semibold mb-2"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          왜 Q방법론인가
        </h2>
        <p>
          사회과학 연구에서 사람들의 생각을 묻는 가장 익숙한 방식은 설문조사다. 설문조사는 많은 사람에게
          같은 질문을 던지고, 응답의 평균, 비율, 변수 간 관계를 계산한다. 이 방식은 "몇 퍼센트가
          찬성하는가", "어떤 변수가 어떤 결과와 관련되는가"를 알고 싶을 때 강력하다. 그러나 모든
          연구문제가 비율이나 평균으로 잘 설명되는 것은 아니다. 어떤 쟁점에서는 사람들이 같은 문장을
          보고도 전혀 다른 이유로 동의하거나 반대한다. 또 어떤 문제에서는 찬반보다 "무엇을 먼저 보고,
          무엇을 나중에 보는가"가 더 중요하다.
        </p>
        <p>
          Q방법론은 바로 그 지점을 다룬다. Q방법론은 참여자에게 여러 진술문을 하나씩 평가하게 하는
          데서 멈추지 않고, 그 진술문들을 서로 비교해 하나의 배열로 만들게 한다. 참여자는 가장 동의하는
          진술문, 가장 동의하지 않는 진술문, 중립에 가까운 진술문을 한 장의 분포표 위에 놓는다. 이
          Q분류(Q-sort)는 한 사람의 관점이 어떤 우선순위와 긴장 속에서 조직되는지를 보여준다. 연구자는
          여러 참여자의 Q분류를 비교해, 비슷한 방식으로 생각을 배열한 사람들의 관점 유형을 찾는다.
        </p>
        <p>
          여기서 중요한 점은 Q방법론이 "사람들이 얼마나 많이 동의했는가"보다 "어떤 관점들이 존재하는가"를
          묻는다는 것이다. Stephenson(1953)은 Q방법론을 테스트나 변수 간 상관이 아니라 사람 간 상관을
          분석하는 방식으로 정식화했다. Brown(1980)은 Q방법론이 참여자의 자기참조적 관점과 조작적
          주관성(operant subjectivity)을 다루는 별도 방법론이라고 설명한다. Watts &amp; Stenner(2012)는
          이를 Q-set 구성, Q-sort, 사람 중심 요인분석(by-person factor analysis), 요인 해석으로
          풀어낸다. 최근 검토연구도 같은 방향을 뒷받침한다. Churruca et al.(2021)은 헬스케어 Q연구
          검토를 통해 연구자들이 Q-set 구성, Q-sort 시행, 분석과 해석의 절차를 명확히 드러낼 필요를
          지적했고, Dieteren et al.(2023)은 다양한 학문 분야의 Q연구를 체계적으로 검토하면서
          Q방법론이 실제로 폭넓은 주제의 관점 탐색에 활용되고 있음을 보여준다.
        </p>
      </section>

      {/* 카드 4개 */}
      <div className="space-y-8 mb-10">
        <LessonCard

          title="Q방법론이란?"
          keyMessage="Q방법론은 주관적인 생각을 체계적으로 배열하고 비교해, 관점의 유형을 찾아내는 연구방법이다."
          description="참여자는 여러 진술문을 자신의 생각에 따라 정렬한다. 연구자는 그 정렬 패턴을 비교해, 비슷한 관점을 공유하는 사람들의 유형을 찾는다."
          points={[
            "분석 대상은 변수보다 사람의 관점이다.",
            "결과는 평균이 아니라 관점 유형으로 나타난다.",
            "핵심은 의견의 많고 적음보다 생각의 구조다.",
          ]}
          imageSrc="/images/1-1-card-01-definition.webp"
          imageAlt="사람들이 진술문을 정렬하고 배열 패턴 비교를 통해 관점 유형이 도출되는 Q방법론 개념도"
        >
          <p>
            Q방법론을 한 문장으로 말하면, 사람들의 주관적 관점을 체계적으로 배열하게 하고 그 배열
            패턴을 비교하는 방법이다. 일반 설문조사에서는 각 문항이 독립적인 응답값으로 남는 경우가
            많다. 반면 Q방법론에서는 참여자가 여러 진술문을 서로 비교하면서 상대적 위치를 정한다.
            어떤 진술문은 강하게 동의하는 쪽에, 어떤 진술문은 강하게 반대하는 쪽에, 어떤 진술문은
            중립에 가까운 곳에 놓인다. 그 결과 하나의 Q-sort는 단순한 응답 묶음이 아니라, 한 사람이
            특정 주제를 어떻게 전체적으로 바라보는지 보여주는 작은 지도처럼 기능한다.
          </p>
          <p>
            이 점에서 Q방법론은 주관성을 모호한 느낌으로 방치하지 않는다. Stephenson(1953)은 생각하고
            느끼고 판단하는 주관성도 조작적으로 관찰 가능한 행동으로 다룰 수 있다고 보았다. Brown(1980)은
            Q-sort가 한 개인의 관점을 조작적으로 표현하게 하는 절차라고 설명한다. Watts &amp; Stenner(2012)의
            설명을 빌리면, Q방법론은 전통적 변수 중심 분석의 렌즈를 뒤집는다. R방법론이 사람들을 여러
            변수로 쪼개어 변수 간 상관을 보는 데 익숙하다면, Q방법론은 Q-sort 전체를 비교해 사람 간
            상관을 본다. 그리고 그 상관을 바탕으로 유사한 시각을 공유하는 사람들의 군집, 즉 관점 유형을
            도출한다.
          </p>
        </LessonCard>

        <LessonCard
          title="Q방법론은 무엇을 찾는가?"
          keyMessage="Q방법론은 누가 몇 명인지보다 어떤 생각 유형이 존재하는지를 찾는다."
          description="같은 문제를 두고도 사람들은 서로 다른 방식으로 이해하고 판단한다. Q방법론은 이런 차이를 몇 개의 관점 유형으로 정리해 보여준다."
          points={[
            "비슷한 생각을 가진 사람들을 패턴으로 묶는다.",
            "각 유형이 무엇을 중요하게 보는지 드러난다.",
            "유형 간 차이를 통해 판단 논리를 해석할 수 있다.",
          ]}
          imageSrc="/images/1-1-card-02-perspective-types.webp"
          imageAlt="비슷한 배열끼리 묶이는 관점 유형 도출 과정"
        >
          <p>
            Q방법론이 찾는 것은 찬성률이나 평균점수가 아니다. Q방법론이 찾는 것은 관점의 구조다. 예를
            들어 어떤 정책에 대해 열 명이 찬성한다고 해도, 그 이유는 서로 다를 수 있다. 어떤 사람은
            효율성을 중시해서 찬성하고, 어떤 사람은 형평성을 중시해서 찬성하며, 또 어떤 사람은 위험을
            줄일 수 있다고 보아 찬성할 수 있다.
          </p>
          <p>
            Q방법론은 이런 차이를 보기 위해 Q-sort 전체를 비교한다. 서로 비슷한 방식으로 진술문을
            배열한 사람들은 하나의 요인에 함께 묶인다. 여기서 요인(factor)은 지능, 성격, 소득 같은
            추상적 변수 묶음이 아니라, 특정 주제에 대해 유사한 관점과 태도를 공유하는 사람들의 유형이다.
            Brown(1980)은 Q방법론이 참여자의 Q-sort에서 사후적으로 발현되는 의미와 관점 구조를
            발견한다고 설명한다. Watts &amp; Stenner(2012)도 Q방법론의 요인이 유사한 시각과 태도를
            공유하는 사람들의 군집을 의미한다고 정리한다. Dieteren et al.(2023)은 많은 Q연구가 유형별
            해석과 구별 진술문 제시에 기대고 있음을 정리하면서, Q연구의 핵심 산출물이 비율이 아니라
            관점 유형이라는 점을 다시 보여준다.
          </p>
          <p>
            그래서 Q방법론의 결과를 읽을 때는 "1유형이 몇 퍼센트인가"보다 "1유형은 무엇을 가장 중요하게
            보고, 무엇을 덜 중요하게 보며, 다른 유형과 어디서 갈라지는가"가 더 중요하다.
          </p>
        </LessonCard>

        <LessonCard
          title="어떤 연구문제에 잘 맞는가?"
          keyMessage="정답이 하나가 아니고, 사람마다 보는 방식이 다른 주제에 Q방법론이 잘 맞는다."
          description="정책, 위험, 안전, 교육, 조직문화처럼 가치와 판단이 섞인 문제에서는 단순 평균보다 관점의 구조가 더 중요할 수 있다."
          points={[
            "정책 수용성의 유형 차이를 볼 때",
            "위험인식과 안전 판단의 차이를 볼 때",
            "조직 내 해석 차이를 분석할 때",
          ]}
          imageSrc="/images/1-1-card-03-good-fit.webp"
          imageAlt="Q방법론이 잘 맞는 연구문제 유형 — 정책, 위험, 조직문화, 교육"
        >
          <p>
            Q방법론은 사람마다 보는 방식이 다를 것으로 예상되는 주제에 잘 맞는다. 특히 어떤 쟁점에
            대해 정답이 하나로 정해져 있지 않고, 이해관계자마다 우선순위와 판단 기준이 다를 때 유용하다.
            예를 들어 정책 수용성, 위험인식, 안전 판단, 조직문화, 교육과정 개편, 의료 서비스 경험,
            환경 갈등처럼 가치, 경험, 이해관계가 섞인 문제에서는 단순 평균이 오히려 중요한 차이를
            가릴 수 있다.
          </p>
          <p>
            Churruca et al.(2021)은 Q방법론이 헬스케어처럼 복잡하고 윤리적으로 민감하며 다양한
            이해관계자가 얽힌 문제에서 유용하게 쓰인다고 정리한다. Dieteren et al.(2023)은 2015년부터
            2019년까지 여러 학문 분야의 Q 연구 613편을 검토하면서, Q방법론이 사회과학, 환경과학, 의학,
            간호학, 경영학 등 폭넓은 분야에서 활용되고 있음을 보여준다.
          </p>
          <p className="font-medium text-gray-800">잘 맞는 연구문제 예시</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>같은 정책을 두고 이해관계자들이 어떤 가치와 우선순위로 판단하는지 알고 싶을 때</li>
            <li>위험이나 안전 문제를 전문가, 실무자, 시민이 어떻게 다르게 해석하는지 보고 싶을 때</li>
            <li>조직 구성원이 변화, 혁신, 책임, 전문성을 서로 다른 방식으로 이해하는지 탐색할 때</li>
            <li>Q방법론으로 먼저 관점 유형을 찾고, 이후 대규모 설문조사로 확장할 문항을 개발하고 싶을 때</li>
          </ul>
        </LessonCard>

        <LessonCard
          title="어떤 연구문제에는 덜 맞는가?"
          keyMessage="Q방법론은 대표성 추정보다 관점 구조 탐색에 강하다."
          description="Q방법론은 모집단 전체의 찬성률이나 비율을 추정하는 방법이 아니다. 몇 퍼센트가 찬성하는가보다 어떤 유형의 생각이 존재하는가를 밝히는 데 목적이 있다."
          points={[
            "전 국민 비율 추정에는 적합하지 않다.",
            "인과효과 검증이 주목적인 연구와는 다르다.",
            "대표성보다 다양한 관점의 포착이 중요하다.",
          ]}
          imageSrc="/images/1-1-card-04-limited-fit.webp"
          imageAlt="설문조사와 Q방법론 비교 — 비율 추정 vs 관점 유형 탐색"
        >
          <p>
            Q방법론이 모든 연구문제에 맞는 것은 아니다. Q방법론은 관점 유형을 찾는 데 강하지만, 그
            유형이 모집단 전체에서 각각 몇 퍼센트를 차지하는지 추정하는 데는 적합하지 않다. 예를 들어
            "전 국민 중 이 정책을 찬성하는 비율은 몇 퍼센트인가"를 알고 싶다면 대표 표본 설문조사가
            더 적합하다. Churruca et al.(2021)도 Q방법론의 초점이 인구학적 일반화가 아니라 관점의
            다양성 포착에 있다고 정리한다.
          </p>
          <p>
            또한 Q방법론은 객관적 변수 간 인과효과를 검증하는 연구와도 목적이 다르다. 성별, 연령,
            소득, 교육수준 같은 독립변수가 어떤 종속변수에 미치는 효과를 통계적으로 검증하고 싶다면
            회귀분석, 실험, 패널분석 등이 더 알맞다. Dieteren et al.(2023)의 검토에서도 실제 Q연구는
            대체로 관점 유형의 탐색과 해석을 중심 산출물로 삼았지, 모집단 수준 인과추정의 대안으로
            사용되지는 않았다.
          </p>
          <p className="font-medium text-gray-800">덜 맞는 연구문제 예시</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>전 국민이나 전체 모집단에서 특정 의견의 정확한 비율을 추정하는 연구</li>
            <li>객관적 변수 간 인과효과를 검증하는 연구</li>
            <li>이미 정답이나 척도가 정해져 있고, 참여자가 그 기준에 얼마나 부합하는지만 측정하는 연구</li>
            <li>참여자가 진술문을 읽고 비교하며 배열하기 어려운 상황에서 수행하는 연구</li>
          </ul>
        </LessonCard>
      </div>

      {/* 요약 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          요약
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
          Q방법론은 사람들의 생각을 단순 점수로 보는 것이 아니라, 여러 생각들이 어떤 우선순위와 긴장
          속에서 하나의 관점을 이루는지를 분석하는 방법이다. 이 방법은 대표성 있는 큰 표본으로 비율을
          추정하는 데보다, 특정 주제에 대해 의미 있게 구별되는 관점 유형을 발견하고 해석하는 데 강하다.
          Churruca et al.(2021)과 Dieteren et al.(2023)도 바로 이 점 — Q방법론의 강점이 관점의
          다양성 탐색과 해석에 있다는 점 — 을 반복해서 확인한다.
        </p>
      </section>

      {/* 핵심 고전 3선 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          핵심 고전
        </div>
        <h2
          className="font-semibold mb-6"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          핵심 고전 3선
        </h2>
        <div className="space-y-6">
          {classics.map((c) => (
            <div
              key={c.author}
              className="pt-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div
                className="text-xs font-semibold mb-0.5"
                style={{ color: "var(--brand-deep)", fontFamily: "var(--font-mono)" }}
              >
                {c.author}
              </div>
              <div
                className="font-semibold italic mb-3"
                style={{ fontSize: "16px", letterSpacing: "-0.2px", color: "var(--black)" }}
              >
                {c.title}
              </div>
              <ul className="space-y-1 mb-3">
                {c.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-start gap-2" style={{ color: "var(--gray-500)" }}>
                    <span style={{ color: "var(--brand)" }} className="mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p
                className="text-xs leading-relaxed pt-3"
                style={{ color: "var(--gray-400)", borderTop: "1px solid rgba(0,0,0,0.07)" }}
              >
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 최근 보고 기준 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-3"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          최근 보고 기준 안내
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--gray-500)" }}>
          오늘 강의는 고전 3선을 중심으로 Q방법론의 기본 의미를 설명한다. 최근 Q방법론 연구는 "Q가
          무엇인가"뿐 아니라 "어떻게 투명하게 보고할 것인가"를 강하게 요구한다.
        </p>
        <div
          className="text-sm font-medium mb-2"
          style={{ color: "var(--black)" }}
        >
          첫날에만 짧게 기억할 점
        </div>
        <ul className="space-y-1.5">
          {[
            "Q-set을 어떻게 만들었는지 설명해야 한다.",
            "P-set을 왜 그렇게 선정했는지 설명해야 한다.",
            "Q-sort 방식, 요인추출, 회전, 요인 수 결정 기준을 보고해야 한다.",
            "유형 해석은 진술문 배열과 참여자 설명에 근거해야 한다.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--gray-700)" }}>
              <span style={{ color: "var(--brand)" }} className="mt-0.5">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 참고문헌 */}
      <section className="mb-10">
        <h2
          className="font-medium mb-4"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          참고문헌
        </h2>
        <ul className="space-y-2">
          {references.map((ref) => (
            <li key={ref.key} className="text-xs leading-relaxed" style={{ color: "var(--gray-500)" }}>
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

      {/* 다음 강의 안내 */}
      <div
        className="pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="text-sm" style={{ color: "var(--gray-400)" }}>← 이전 강의 없음</div>
        <Link
          href="/lessons/1-2"
          className="text-sm text-right"
          style={{ color: "var(--gray-400)" }}
        >
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            1-2. Q방법론의 핵심 개념과 필요한 이유 →
          </span>
        </Link>
      </div>
    </div>
  );
}
