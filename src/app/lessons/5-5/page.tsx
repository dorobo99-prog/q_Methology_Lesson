import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

type Card = {
  num: number;
  title: string;
  keyMessage: string;
  shortDescription: string;
  points: string[];
};

export const metadata: Metadata = {
  title: "5-5. P-set 선정 | Q방법론 온라인 강의",
  description:
    "P표본(P-set)을 모집단의 축소판이 아니라 관점 다양성을 드러내는 전략적 참여자 구성으로 설계하는 법을 학습합니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "P-set은 모집단의 축소판이 아니다",
    keyMessage:
      "Q방법론에서 P표본(P-set)의 목적은 모집단 빈도 추정이 아니라 관점 구조의 발견입니다.",
    shortDescription:
      "참여자를 많이 모으는 것보다, 연구주제에 대해 서로 다른 주관성을 가질 가능성이 있는 사람들을 전략적으로 포함하는 일이 중요합니다.",
    points: [
      "Q방법론은 의견의 비율보다 관점의 배열과 구조를 탐색한다.",
      "P-set 선정은 확률표집보다 목적 표집의 논리에 가깝다.",
      "대표성은 모집단 비율이 아니라 관점 다양성의 포함 논리로 설명한다.",
    ],
  },
  {
    num: 2,
    title: "대표성이 아니라 관점의 위치를 설계한다",
    keyMessage:
      "좋은 P-set은 연구문제와 관련된 역할, 경험, 이해관계, 현장 지식의 차이를 의도적으로 담습니다.",
    shortDescription:
      "P-set은 사람 명단이 아니라 관점의 지도입니다. 어떤 위치가 빠지면 연구주제의 주관성 지형이 납작해지는지를 먼저 생각해야 합니다.",
    points: [
      "연구문제와 연결된 관점 차원을 먼저 정의한다.",
      "참여자 포함 기준은 역할과 경험의 차이를 근거로 제시한다.",
      "제외된 집단은 결과 해석 범위의 한계로 함께 보고한다.",
    ],
  },
  {
    num: 3,
    title: "몇 명이면 충분한가",
    keyMessage:
      "P-set 규모에는 하나의 정답이 없으며, 연구설계와 실행 조건을 함께 보고 판단합니다.",
    shortDescription:
      "Dieteren et al.(2023)의 검토에서 참여자 수는 평균 41.1명, 범위 3-302명으로 넓었습니다. 관행의 숫자는 참고값이지 절대 기준이 아닙니다.",
    points: [
      "Q-set 크기, 기대되는 관점 수, 모집 가능성을 함께 고려한다.",
      "Zabala et al.(2018)의 보전 연구 검토에서는 P-set 26-46명이 흔했다.",
      "작은 P-set도 관점 포함 논리가 분명하면 강한 설계가 될 수 있다.",
    ],
  },
  {
    num: 4,
    title: "진술문 수와 참여자 수를 함께 본다",
    keyMessage:
      "진술문 수와 참여자 수의 비율은 실무 감각을 줄 수 있지만, 관점 포함 논리를 대신할 수 없습니다.",
    shortDescription:
      "Gorichanaz(2025)는 39개 Q표본과 UX 전문가 14명 P-set을 사용한 사례입니다. 3:1 비율은 이런 적용 연구의 산정 근거로 다루되, 보편 규칙처럼 외우지 않습니다.",
    points: [
      "진술문이 많고 참여자가 너무 적으면 안정적인 관점 구조가 약해질 수 있다.",
      "참여자가 많아도 Q-set이 빈약하면 분석의 질은 높아지지 않는다.",
      "수치 기준은 연구문제와 표집 논리를 보조하는 설명이어야 한다.",
    ],
  },
  {
    num: 5,
    title: "재난·정책 연구에서 P-set을 짜는 법",
    keyMessage:
      "재난·정책 연구의 P-set은 현장 경험, 피해 경험, 책임 위치, 조직 소속의 차이를 설계해야 합니다.",
    shortDescription:
      "Ma et al.(2024)은 지역주민 41명을 P-set으로 구성해 재난 회복력 관점을 탐색했습니다. 소방·재난 연구에서 현장성과 P-set 논리가 어떻게 연결되는지 보여 주는 사례입니다.",
    points: [
      "주민 관점 연구라면 주민이 P-set의 중심이 되어야 한다.",
      "조직 내부 연구라면 직무, 계급, 업무 경험의 차이를 설계한다.",
      "참여자 구성은 연구결과를 해석할 수 있는 범위를 결정한다.",
    ],
  },
  {
    num: 6,
    title: "모집은 설계이고 실행은 품질관리다",
    keyMessage:
      "P-set의 품질은 모집 논리뿐 아니라 응답률, 플랫폼 사용성, 사후 인터뷰 가능성의 영향을 받습니다.",
    shortDescription:
      "온라인 Q-sort에서는 초대 수, 참여율, 이탈, 도구 사용의 어려움이 분석 자료의 질을 좌우합니다. 모집 과정 자체를 방법론의 일부로 보고해야 합니다.",
    points: [
      "Gorichanaz(2025)는 LinkedIn 초대 180명, 최종 참여 14명을 보고했다.",
      "온라인 도구의 사용성은 참여자의 분류 집중도에 영향을 준다.",
      "사후 인터뷰는 해석의 깊이를 보강한다.",
    ],
  },
];

function LessonCard({
  num,
  title,
  keyMessage,
  shortDescription,
  points,
}: (typeof cards)[number]) {
  return (
    <section className="mb-14 sm:mb-16">
      <div className="mb-5">
        <div
          className="text-xs mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
        >
          카드 {num}
        </div>
        <h2 className="font-semibold mb-3" style={{ fontSize: "24px", color: "var(--black)" }}>
          {title}
        </h2>
        <p className="mb-3" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--gray-700)" }}>
          {keyMessage}
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}>
          {shortDescription}
        </p>
      </div>

      <ul className="mb-8 space-y-3">
        {points.map((point, index) => (
          <li key={`${num}-${index}`} className="flex items-start gap-3" style={{ color: "var(--gray-700)" }}>
            <span
              className="shrink-0 font-semibold mt-0.5"
              style={{
                minWidth: "18px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--brand)",
              }}
            >
              {index + 1}.
            </span>
            <span style={{ fontSize: "15px", lineHeight: 1.7 }}>{point}</span>
          </li>
        ))}
      </ul>

      <LessonCardBody num={num} />
    </section>
  );
}

function LessonCardBody({ num }: { num: number }) {
  const style = { fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" };

  switch (num) {
    case 1:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            5-4강에서 우리는 Q표본을 다뤘습니다. 연구참여자에게 무엇을 분류하게 할 것인가를 정한 셈입니다. 이제 5-5강의 질문은 그다음입니다. 누가 그 진술문을 분류해야 할까요? 이 질문이 바로 P표본(P-set) 선정입니다.
          </p>
          <p>
            처음 Q방법론을 접하면 P-set을 설문조사의 표본처럼 떠올리기 쉽습니다. &quot;우리 연구대상 모집단을 대표하려면 몇 명을 뽑아야 하지?&quot;라는 질문에서 출발하곤 합니다. 하지만 Q방법론의 목적은 모집단에서 어떤 의견이 몇 퍼센트인지 추정하는 데 있지 않습니다. 서로 다른 주관성의 구조를 발견하는 데 있습니다.
          </p>
          <p>
            Zabala et al.(2018)은 Q방법론에서 참여자 선정이 확률표집보다 목적 표집에 가깝다고 설명합니다. 여기서 봐야 할 대목은 평균적인 사람을 많이 모으는 일이 아닙니다. 연구주제에 대해 서로 다른 관점을 가질 가능성이 있는 사람들을 전략적으로 포함하는 일입니다.
          </p>
          <p>
            P-set을 설계할 때 첫 질문도 &quot;몇 명이면 대표적인가&quot;가 아닙니다. &quot;이 주제에서 어떤 관점들이 충돌하거나 갈라질 수 있는가&quot;입니다. 그 관점의 자리에 실제 사람을 배치하는 과정이 P-set 선정입니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            P-set 선정은 사람 명단을 채우는 일이 아니라 관점의 지도를 그리는 일입니다. 예를 들어 재난 회복력(Disaster resilience)을 연구한다면, 지역 주민, 현장 실무자, 행정 담당자, 전문가는 같은 단어를 쓰면서도 서로 다른 문제의식을 가질 수 있습니다.
          </p>
          <p>
            이때 연구자는 &quot;모집단 비율대로 몇 명씩&quot;보다 &quot;어떤 위치가 빠지면 관점 구조가 납작해지는가&quot;를 먼저 봐야 합니다. 피해 경험이 있는 주민과 없는 주민, 현장 대응 경험이 있는 실무자와 정책 설계자는 서로 다른 종류의 지식을 지닐 수 있습니다.
          </p>
          <p>
            Watts &amp; Stenner(2012)의 설명처럼 Q방법론의 분석 결과는 사람 자체를 분류하지 않습니다. 사람들이 진술문을 배열하는 방식에서 공유된 관점을 찾아냅니다. 그러려면 P-set 안에 관점의 차이가 들어와야 합니다.
          </p>
          <p>
            좋은 P-set 설명에는 &quot;우리는 몇 명을 모집했다&quot;만 있으면 부족합니다. 왜 그 사람들이 연구문제와 관련된 중요한 관점 위치를 차지하는지, 어떤 차이를 드러내려고 포함했는지가 함께 제시되어야 합니다.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            그렇다면 현실적으로 몇 명이면 될까요? 여기서 조심할 대목이 있습니다. Q방법론에는 모든 연구에 적용되는 마법 같은 숫자가 없습니다. P-set 규모는 Q표본 크기, 기대되는 관점 수, 모집 가능성, 참여자가 Q-sort를 수행하는 데 드는 시간을 함께 놓고 판단해야 합니다.
          </p>
          <p>
            Dieteren et al.(2023)의 체계적 문헌고찰을 보면 실제 Q연구의 P-set 규모는 꽤 다양합니다. 검토된 연구들의 참여자 수 평균은 41.1명이었고, 범위는 3명에서 302명까지 넓었습니다. 상당수 연구는 20명에서 50명 사이의 참여자를 활용했습니다.
          </p>
          <p>
            Zabala et al.(2018)이 검토한 보전 연구 사례에서도 P-set은 대체로 26-46명 사이에서 구성되었습니다. 이 숫자들은 규칙이라기보다 관행의 범위입니다. 연구자가 &quot;왜 이 정도 규모가 이 연구문제에 충분한가&quot;를 설명할 때 참고할 수 있는 경험적 배경이 됩니다.
          </p>
          <p>
            작은 P-set이 언제나 약점인 것은 아닙니다. 오히려 관점 차이가 분명하고, 각 참여자가 충분히 숙고해서 Q-sort를 수행하며, 사후 인터뷰까지 이어질 수 있다면 소규모 P-set도 강한 설계가 될 수 있습니다. 숫자는 설계를 대신하지 않습니다.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            실무에서는 Q표본의 진술문 수와 P-set 규모를 함께 봅니다. 진술문이 너무 많고 참여자가 너무 적으면 안정적인 요인 구조를 기대하기 어렵습니다. 반대로 참여자를 많이 모아도 진술문이 연구문제를 충분히 담지 못하면 분석은 빈약해집니다.
          </p>
          <p>
            Gorichanaz(2025)는 인간중심 디자인의 직장 내 장벽을 연구하면서 UX 전문가 14명을 P-set으로 구성하고, 39개의 Q표본을 사용했습니다. 이 논문은 3:1 비율을 실무적 산정 근거로 언급합니다. 실제 온라인 Q방법론 연구에서 규모 판단을 어떻게 제시하는지 보여주는 사례입니다.
          </p>
          <p>
            &quot;진술문 수와 참여자 수의 균형을 확인하되, 최종 판단은 연구문제와 관점 다양성의 논리로 정당화한다.&quot; Q방법론에서 P-set은 통계적 힘을 키우려고 정하는 표본이 아닙니다. 해석 가능한 관점 구조를 만들 수 있는가의 문제이기도 합니다.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            소방·재난 분야에서는 P-set 선정이 특히 중요합니다. 재난을 바라보는 관점은 현장 경험, 피해 경험, 책임 위치, 조직 소속에 따라 크게 달라질 수 있기 때문입니다. 주민이 보는 회복력과 행정 담당자가 보는 회복력은 같은 단어 안에서도 다른 우선순위를 가질 수 있습니다.
          </p>
          <p>
            Ma et al.(2024)은 지역주민 41명을 P-set으로 구성해 재난 회복력 지표에 대한 관점을 탐색했습니다. 이 연구는 95개 지표를 45개 Q표본으로 정제하고, 지역주민이 그 지표들을 어떻게 배열하는지 살폈습니다. 강의 사례로 적합한 이유는 P-set이 연구문제의 현장성과 직접 연결되기 때문입니다.
          </p>
          <p>
            여기서 배울 점은 간단합니다. 재난 회복력을 주민 관점에서 묻는다면 주민이 P-set의 중심이 됩니다. 반대로 소방조직의 위험 판단을 묻는다면 현장대원, 지휘관, 예방업무 담당자, 예산·정책 담당자처럼 조직 내부의 관점 차이를 설계해야 합니다.
          </p>
          <p>
            좋은 P-set 문장은 &quot;총 41명을 모집했다&quot;로 끝나지 않습니다. 왜 그 41명이 연구문제의 관점 공간을 구성하는지, 빠진 집단이 있다면 왜 제외했는지, 연구결과를 어느 범위까지 해석할 수 있는지를 함께 밝혀야 합니다.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            P-set은 논문 방법론 표에 숫자로만 적으면 안됩니다. 실제 연구에서는 모집이 어렵고, 참여자가 중간에 이탈할 수 있으며, 온라인 Q-sort 도구를 쓰는 과정에서 혼란이 생기기도 합니다. 모집 과정 자체도 설계의 일부입니다.
          </p>
          <p>
            Gorichanaz(2025)는 LinkedIn을 통해 180명의 UX 전문가에게 참여를 요청했고, 최종적으로 14명이 연구에 참여했다고 보고합니다. 응답률은 약 8%였습니다. 이 숫자는 단순한 부록 정보가 아닙니다. 온라인 전문직 P-set 모집에서 어떤 실행 조건이 생기는지 보여주는 자료입니다.
          </p>
          <p>
            Coogan &amp; Herrington(2011)은 Q방법론 입문 절차를 설명하면서, Q표본을 만드는 과정과 실제 Q-sort 참여자가 연구주제의 관점을 충분히 다룰 수 있는지 확인하는 과정을 함께 보게 합니다. 이 대목은 P-set 선정이 모집 명단 작성에 그치지 않고, 진술문과 참여자의 적합성을 점검하는 과정임을 알려 줍니다.
          </p>
          <p>
            5-6강에서는 이렇게 선정한 사람들이 실제로 Q-sort를 수행하는 단계로 넘어갑니다. 오늘의 결론은 간단합니다. P-set 선정은 &quot;몇 명을 모았는가&quot;보다 &quot;어떤 관점들이 들어왔는가&quot;를 설명하는 일입니다. 그 설명이 분명할수록 이후 분석과 해석도 훨씬 단단해집니다.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function LessonPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "4부" },
          { label: "5-5. P-set 선정" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-07-02"
        title="P-set 선정"
        description="Q방법론에서 참여자는 모집단의 축소판이 아니라 관점의 차이를 드러내는 전략적 구성입니다."
        imageSrc="/images/5-5-hero-p-set-selection.webp"
        imageAlt="넓은 관점 공간에서 서로 다른 참여자 프로필을 선별해 P-set을 구성하는 장면"
      />

      <section className="mx-auto py-12 sm:py-16" style={{ maxWidth: "720px" }}>
        <section className="mb-14">
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--gray-700)" }}>
            5-4강에서 무엇을 분류하게 할 것인가를 정했다면, 5-5강에서는 누가 그 분류를 해야 하는가를 정합니다. P표본(P-set) 선정의 핵심은 대표성 있는 사람 수를 맞추는 일이 아니라, 연구문제와 연결된 관점의 차이를 빠뜨리지 않는 일입니다.
          </p>
        </section>

        {cards.map((card) => (
          <LessonCard key={card.num} {...card} />
        ))}

        <section className="mt-16 border-t pt-10" style={{ borderColor: "var(--gray-200)" }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
            자가 검토 질문
          </h2>
          <ul className="space-y-3" style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            <li>P-set을 모집단 대표성이 아니라 관점 다양성의 언어로 설명했나요?</li>
            <li>참여자 포함 기준이 연구문제와 직접 연결되어 있나요?</li>
            <li>P-set 규모를 하나의 규칙으로 정당화하지 않고, Q-set 크기와 실행 조건까지 함께 설명했나요?</li>
            <li>제외된 집단이나 모집 한계를 결과 해석 범위의 한계로 남겼나요?</li>
          </ul>
        </section>

        <section className="mt-12 border-t pt-10" style={{ borderColor: "var(--gray-200)" }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
            참고문헌
          </h2>
          <ul className="space-y-4" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            <li>Coogan, J., &amp; Herrington, N. (2011). Q methodology: an overview. <em>Research in Secondary Teacher Education, 1</em>(2), 24-28.</li>
            <li>Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>(1), 100404. <a href="https://doi.org/10.1016/j.ssaho.2023.100404" className="hover:underline">https://doi.org/10.1016/j.ssaho.2023.100404</a></li>
            <li>Gorichanaz, T. (2025). Identifying the barriers to human-centered design in the workplace: Perspectives from UX professionals. <em>Proceedings of the ACM on Human-Computer Interaction, 9</em>(2), Article CSCW110, 1-25. <a href="https://doi.org/10.1145/3711008" className="hover:underline">https://doi.org/10.1145/3711008</a></li>
            <li>Ma, J. W., Leite, F., Lieberknecht, K., Stephens, K. K., &amp; Bixler, R. P. (2024). Using Q-methodology to discover disaster resilience perspectives from local residents. <em>International Journal of Disaster Risk Reduction, 104</em>, 104353. <a href="https://doi.org/10.1016/j.ijdrr.2024.104353" className="hover:underline">https://doi.org/10.1016/j.ijdrr.2024.104353</a></li>
            <li>Watts, S., &amp; Stenner, P. (2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications Ltd. <a href="https://doi.org/10.4135/9781446251911" className="hover:underline">https://doi.org/10.4135/9781446251911</a></li>
            <li>Zabala, A., Sandbrook, C., &amp; Mukherjee, N. (2018). When and how to use Q methodology to understand perspectives in conservation research. <em>Conservation Biology, 32</em>(5), 1185-1194. <a href="https://doi.org/10.1111/cobi.13123" className="hover:underline">https://doi.org/10.1111/cobi.13123</a></li>
          </ul>
        </section>

        <nav className="mt-12 flex items-center justify-between border-t pt-8" style={{ borderColor: "var(--gray-200)" }}>
          <Link href="/lessons/5-4" className="text-sm font-medium hover:underline" style={{ color: "var(--brand)" }}>
            이전 강의: 5-4 Q-set 구성
          </Link>
          <span className="text-sm" style={{ color: "var(--gray-400)" }}>
            다음 강의: 5-6 Q-sort 시행
          </span>
        </nav>
      </section>
    </div>
  );
}
