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
  imageSrc?: string;
  imageAlt?: string;
};

export const metadata: Metadata = {
  title: "5-2. Q에 맞는 연구문제 설정 | Q방법론 온라인 강의",
  description:
    "Q방법론 연구는 어떤 연구문제에서 시작해야 하는가. 비율 추정이 아니라 관점 구조를 탐색하는 Q형 연구문제를 설계하는 원칙과 방법을 다룹니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "Q 연구문제의 출발점: '얼마나'가 아닌 '어떻게'",
    keyMessage:
      "Q방법론의 연구문제는 비율이나 상관관계가 아니라, 주관적 관점의 구조를 묻습니다.",
    shortDescription:
      "설문조사가 '몇 명이 동의하는가'를 묻는다면, Q는 '어떤 서로 다른 관점들이 존재하는가'를 묻습니다. 이 근본적인 질문 방향의 전환이 Q 연구문제의 핵심입니다.",
    points: [
      "R방법론(설문조사, 회귀분석)은 변수 간 관계와 빈도 추정에 강하다.",
      "Q방법론은 주관적 관점의 다양한 구조를 탐색하는 데 특화된다.",
      "'어떤 관점들이 공존하는가'라는 질문이 Q 연구문제의 출발점이다.",
    ],
  },
  {
    num: 2,
    title: "Q에 맞는 연구문제의 세 조건",
    keyMessage:
      "주제가 복잡하고, 의견이 갈리며, 가치 갈등과 대안적 판단이 중요할 때 Q가 강력합니다.",
    shortDescription:
      "Q방법론은 모든 주제에 적합하지 않습니다. 사회적 논쟁이 존재하고, 정답이 하나로 수렴되지 않으며, 단순한 태도 측정을 넘어 이해관계자들의 다양한 가치 구조를 성찰해야 하는 주제에서 가장 빛납니다.",
    points: [
      "복잡성: 단순한 찬반이 아니라 가치와 우선순위가 얽힌 문제여야 한다.",
      "논쟁성: 이해관계자 간 의미 있는 관점 갈등이나 정책 수용성 차이가 존재해야 한다.",
      "탐색성: 사전에 범주를 규정하지 않고 주관적 멘탈 모델의 다양성을 열린 태도로 포착해야 한다.",
    ],
  },
  {
    num: 3,
    title: "적합한 연구문제 유형과 사례",
    keyMessage:
      "정책 갈등, 위험 인식, 전문가 정체성, 공공 쟁점처럼 복잡한 가치 대립이 내재된 주제가 Q에 가장 잘 맞습니다.",
    shortDescription:
      "행정학, 보건학, 환경학, 교육학 등 다양한 분야에서 Q방법론이 활용됩니다. 공통점은 하나의 정답 대신 의미 있게 구분되는 관점의 유형을 찾아내어 정책 설계와 중재의 근거를 만드는 것입니다.",
    points: [
      "정책 우선순위 인식(예: 소방관들은 안전 투자의 가치를 어떻게 다르게 바라보는가?)",
      "위험 인식과 수용(예: 의료 종사자들은 감염 위험을 어떻게 다르게 이해하는가?)",
      "사악한 문제의 프레이밍(예: 환경 이해관계자들은 생물 다양성 오프셋 대안에 대해 어떤 관점 구조를 가지는가?)",
    ],
  },
  {
    num: 4,
    title: "피해야 할 연구문제 유형",
    keyMessage:
      "비율 추정, 선형 인과관계 검증, 단일 합의 도출이 목표인 문제는 Q에 맞지 않습니다.",
    shortDescription:
      "Q방법론의 강점을 살리지 못하는 연구문제 유형을 피하는 것이 연구 설계의 출발점입니다. Q는 모집단 대표성이 없는 목적 표집을 사용하므로, 빈도 추정이나 변수 간 인과관계를 밝히는 데 한계가 있습니다.",
    points: [
      "'전체 인구 중 몇 %가 A를 지지하는가' → 대표 표본 기반 빈도 추정은 R이 적합하다.",
      "'A 교육이 B 성취도에 영향을 미치는가' → 변수 간 단일 선형 인과관계 검증은 실험 설계나 회귀분석이 맞다.",
      "'전문가가 동의하는 최적의 단일 합의안은 무엇인가' → 관점 수렴을 강제하면 다양한 주관성을 객관적으로 연구하는 Q의 강점이 사라진다.",
    ],
  },
  {
    num: 5,
    title: "연구문제를 Q 형식으로 변환하기",
    keyMessage:
      "기존 연구 주제를 '어떤 관점의 분포(담론 구조)가 존재하는가'라는 형식으로 바꾸면 Q 연구문제가 됩니다.",
    shortDescription:
      "이미 가지고 있는 관심 주제를 Q 연구문제로 변환하는 실천적 감각을 배웁니다. 개별 응답자 수의 분포가 아니라 생각의 군집 구조를 찾아내는 변환이 Q 설계의 첫 걸음입니다.",
    points: [
      "원래 질문: '소방관들은 안전 교육에 만족하는가?' → Q 형식: '소방관들은 안전 교육의 가치와 문제를 어떻게 다르게 바라보는가?'",
      "변환의 핵심: 측정→탐색, 비율→구조, 사람의 분포→관점의 분포로 전환.",
      "연구문제가 확정되면 다음 단계인 concourse 수집의 범위와 문항(Q-set)의 대표성이 자동으로 결정된다.",
    ],
  },
  {
    num: 6,
    title: "연구문제가 연구 전체를 지배한다",
    keyMessage:
      "Q 연구문제는 concourse 수집부터 최종 요인 해석까지 모든 설계 결정을 규정하는 유기적 닻입니다.",
    shortDescription:
      "연구문제가 모호하거나 Q의 가정에 맞지 않으면, 이후 요인분석 단계에서 아무리 정교한 통계를 적용해도 결과가 흔들립니다. 연구문제가 단단해야 concourse에서 요인해석으로 이어지는 방법론적 정당성이 확보됩니다.",
    points: [
      "연구문제의 방향이 concourse 수집의 범위(어떤 의견을 찾을 것인가)를 결정한다.",
      "concourse의 구성이 주제별 균형을 갖춘 진술문(Q-set)의 대표적 축소판을 결정한다.",
      "Q-set 설계와 분류(Q-sorting)의 지시 조건이 최종 사람 간 상관과 요인 점수의 해석력을 결정한다.",
    ],
  },
];

const checklist = [
  "자신의 연구 관심 주제가 단순 찬반이나 통계 추정이 아닌, 주관적 관점의 탐색에 부합하는지 검토했는가?",
  "가치 배열과 복잡성, 논쟁성을 동반한 복합적 주제를 연구문제로 삼고 있는가?",
  "인과관계 검증이나 합의 도출과 같이 Q방법론에 맞지 않는 질문을 걸러냈는가?",
  "원래의 질문을 '어떤 서로 다른 관점들이 공존하는가'의 Q 형식으로 변환해보았는가?",
  "연구문제가 앞으로의 concourse 수집과 문항 설계를 안내할 만큼 명확한가?",
];

const discussionQuestions = [
  "여러분의 연구 분야에서 '전문가들이 같은 개념을 전혀 다른 방식으로 이해하고 있다'고 느낀 경험이 있다면, 그것을 Q 연구문제로 어떻게 구체화할 수 있을까요?",
  "Q 연구문제와 R방법론적 연구문제를 구분하는 가장 핵심적인 기준은 무엇이라고 생각하십니까? 그 기준을 자신의 말로 설명해 보세요.",
  "연구문제를 너무 좁게 잡으면 concourse 확보가 어렵고, 너무 넓게 잡으면 Q-set 구성이 어려워집니다. 이 범위를 조율하는 실제적인 방법은 무엇일까요?",
];

function LessonCard({
  num,
  title,
  keyMessage,
  shortDescription,
  points,
  imageSrc,
  imageAlt,
}: Card) {
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

      {imageSrc && imageAlt ? (
        <div className="-mx-5 mb-6 sm:mx-0 sm:max-w-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={625}
            className="w-full h-auto block"
            style={{ borderRadius: "8px" }}
          />
        </div>
      ) : null}

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
            5장의 첫 강의(5-1)에서 우리는 Q 연구의 전체 파이프라인을 조망했습니다. 준비-설계-시행-분석-보고로 이어지는 그 순환 구조에서, 모든 것의 첫 닻이 되는 것은 바로 연구문제입니다. 그런데 Q방법론에서 연구문제를 세우는 방식은 일반적인 사회과학 연구와 미묘하지만 결정적인 방향의 차이가 있습니다. 익숙한 방식으로 설문조사를 설계할 때 우리는 &quot;이 정책에 몇 명이나 찬성하는가?&quot;, &quot;어떤 배경 변수가 태도 변화와 관련되는가?&quot;를 묻습니다. 이때의 목표는 측정과 추정, 즉 모집단의 비율과 변수 간 인과 관계를 수치로 확인하는 것입니다.
          </p>
          <p>
            Q방법론의 연구문제는 그 방향을 근본적으로 다르게 잡습니다. Q는 &quot;얼마나 많은 사람이 동의하는가&quot;를 묻지 않습니다. 대신 &quot;이 주제를 둘러싸고 의미 있게 구분되는 서로 다른 관점의 구조가 존재하는가, 그리고 그것은 무엇인가&quot;를 묻습니다. Stephenson(1953)이 처음 Q방법론을 정식화했을 때, 그는 변수 간 상관이 아니라 사람과 사람 사이의 상관을 분석하는 새로운 길을 열었습니다. 이 전환이 Q 연구문제의 철학적 출발점입니다.
          </p>
          <p>
            이 차이가 왜 중요한가를 간결하게 비유하면 이렇습니다. R방법론적 시각은 지형 위의 평균 고도를 측정합니다. Q방법론적 시각은 그 지형에 어떤 산과 계곡이 존재하는지, 그 형상을 드러내는 일을 합니다. 평균은 산과 계곡 모두를 지워버리지만, Q는 그 다양한 형상 자체가 연구의 핵심 발견입니다. 따라서 Q 연구문제는 처음부터 &quot;다양한 관점이 공존할 수 있다&quot;는 가정을 내포하고 있으며, 이를 통계적으로 발견하고 해석하는 것이 연구의 목표가 됩니다.
          </p>
          <p>
            결국 Q 연구문제를 세울 때의 첫 번째 물음은 단순합니다. &quot;내가 탐구하려는 주제에 대해, 관련된 사람들은 서로 의미 있게 다른 방식으로 생각하고 있을 것인가?&quot; 이 물음에 &apos;그렇다&apos;고 답할 수 있다면, Q방법론은 그 다양한 생각의 구조를 체계적으로 드러내는 가장 강력한 도구 중 하나가 됩니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q방법론이 어떤 연구문제에 적합한지를 판별하는 데에는 몇 가지 실용적인 기준이 있습니다. Churruca et al.(2021)의 헬스케어 Q연구 검토와 Dieteren et al.(2023)의 방법론적 선택 분석을 종합하면, Q에 잘 맞는 연구문제는 세 가지 조건인 복잡성, 논쟁성, 탐색적 성격을 공통적으로 갖추고 있음을 알 수 있습니다. 단순한 찬반이나 사실 확인으로는 정리되지 않는 다층적 가치가 얽혀 있어야 하며, 이해관계자 간 의견 대립이 분명하고, 결과를 예단하지 않는 탐색적 태도로 관점의 지도를 그려야 합니다.
          </p>
          <p>
            여기에 더해, Zabala, Sandbrook, and Mukherjee(2018)는 Q방법론이 단순한 태도 측정이 아니라 갈등 관리, 대안 설계, 정책 수용성 평가가 요구되는 맥락에서 연구 가치가 극대화된다고 설명합니다. 정답이 하나로 정해지지 않고 가치관에 따라 판단이 달라질 때 Q 연구문제는 빛을 발합니다. Brown(1980)이 강조했듯, Q방법론은 조작적 주관성을 다룹니다. 즉 사람들이 실제로 생각하고 행동하는 과정에서 스스로 드러내는 관점을 포착하는 것입니다.
          </p>
          <p>
            따라서 좋은 Q 연구문제는 표면적 태도의 빈도를 세는 데 머물지 않고, 참여자가 진술문을 분류하는 조작을 수행하며 자신의 가치 우선순위를 투사할 수 있도록 유도합니다. 연구 대상 주제 자체에 관점의 다양성과 우선순위의 충돌이 내재되어 있어야만 Q sorting 단계에서 의미 있는 주관성 맵이 그려집니다.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q방법론이 실제로 어떤 분야에서 활용되는지 살펴보면, 이 방법론이 얼마나 넓은 응용 범위를 가지는지 실감할 수 있습니다. Churruca et al.(2021)의 헬스케어 Q 연구 검토에 따르면, 의료 종사자의 역할 인식, 환자의 치료 경험, 감염 관리 태도, 의료 정책 우선순위 등 다양한 주제에서 Q방법론이 활용되고 있습니다. Dieteren et al.(2023)은 사회과학, 교육학, 환경학, 정책학 등 훨씬 광범위한 분야에서도 Q연구가 이루어지고 있음을 체계적으로 확인합니다.
          </p>
          <p>
            특히 공공행정과 정책연구 영역에서 Q방법론의 적합성은 매우 높습니다. Nederhand and Molenveld(2020)는 Q방법론이 정책 문제를 둘러싼 이해관계자들의 관점 간 유사성과 차이를 식별하고 비교하는 데 탁월하며, 복잡한 공공 의제의 사전 및 사후 정책 개입 설계와 평가 도구로 유용하게 기능할 수 있음을 규명했습니다. 기후 변화나 빈곤, 지역 사회 안전 투자 등 가치 갈등이 내재된 복잡하고 해결이 난해한 사악한 문제를 다룰 때, Q방법론은 다각도의 인식 프레임을 시각화하여 갈등의 타협점을 제공합니다.
          </p>
          <p>
            예를 들어, &quot;소방관들은 커뮤니티 위험 경감 사업의 우선순위를 어떻게 인식하는가?&quot;와 같은 연구문제는 단순히 만족도를 평가하는 것이 아닙니다. 예산 배분, 조직 문화, 개인 책임과 시스템의 한계 등 여러 가치들이 충돌하는 현실 속에서 전문가들이 각기 추구하는 상이한 정책 프레임 유형을 체계적으로 구조화하는 적합한 사례입니다.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q방법론을 공부한 연구자들이 종종 저지르는 설계 오류 중 하나는, Q의 강점에 맞지 않는 연구문제를 억지로 Q 형식으로 포장하는 것입니다. 이 오류를 피하려면, Q에 어울리지 않는 연구문제 유형을 명확히 이해해야 합니다. 첫 번째 유형은 모집단 비율 추정을 목표로 하는 연구문제입니다. &quot;전체 소방관의 몇 퍼센트가 안전 교육에 만족하는가?&quot;라는 질문은 대표 표본을 기반으로 한 빈도 추정이 필요합니다. Q방법론의 참여자 표집은 무작위 표집이 아닌 이론적 목적 표집(purposeful sampling)으로 모집단 대표성을 갖지 않으므로, 이 유형의 연구문제에는 적합하지 않습니다.
          </p>
          <p>
            두 번째로 피해야 할 유형은 변수 간 선형 인과관계 검증을 목표로 하는 연구문제입니다. &quot;A 교육 프로그램이 B 행동 변화를 일으키는가?&quot;는 실험 설계나 회귀분석이 적합한 질문입니다. Q방법론은 특정 독립변수가 종속변수에 미치는 기계적 영향을 추정하는 방법론이 아닙니다. Zabala et al.(2018)과 McKeown &amp; Thomas(2013)가 공통적으로 경고하듯, Q방법론은 인구통계학적 변수들과 주관적 유형 간의 기계적 선형 관계를 귀납적으로 확증하는 도구가 아닙니다.
          </p>
          <p>
            세 번째 유형은 단일한 합의나 베스트 프랙티스의 강제적 도출을 목표로 하는 연구문제입니다. Q방법론은 본질적으로 관점의 다양성을 발견하는 도구입니다. 만약 연구자가 &quot;전문가들이 완전히 수렴하는 최적의 단일 합의안을 도출하겠다&quot;는 생각으로 접근한다면, 이는 Q의 존재 가치인 &apos;소수 관점의 포착과 다양한 목소리의 지도화&apos;라는 철학에 역행하게 됩니다.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            이미 관심 있는 연구 주제가 있다면, 그것을 Q 연구문제로 변환하는 과정은 생각보다 체계적으로 접근할 수 있습니다. 변환의 핵심은 세 가지 전환입니다. 첫째, &apos;측정&apos;에서 &apos;탐색&apos;으로 전환합니다. &quot;소방관들의 안전 의식 수준을 측정하겠다&quot;는 목표를 &quot;소방관들이 안전의 의미를 어떻게 다르게 구성하는지 탐색하겠다&quot;로 바꿉니다. 둘째, &apos;비율&apos;에서 &apos;구조&apos;로 전환합니다. 몇 퍼센트가 어떤 생각을 하는지가 아니라, 어떤 관점의 유형들이 공존하는지를 묻습니다. 셋째, &apos;사람의 분포&apos;에서 &apos;관점의 분포(담론 구조)&apos;로 전환합니다.
          </p>
          <p>
            van Exel and de Graaf(2005)가 쉽게 정리하여 안내하듯, Q방법론의 분석 대상이자 일반화 단위는 개별 응답자가 아니라 도출된 관점 또는 담론 그 자체입니다. 따라서 연구의 목표는 특정한 사람들의 분포를 세는 데 있는 것이 아니라, 그 주제의 의미 영역을 채우고 있는 관점들의 상호 관계를 구조적으로 밝히는 데 있어야 합니다.
          </p>
          <p>
            구체적인 변환 사례를 살펴보겠습니다. 원래 질문이 &quot;의료 종사자들은 환자 안전 문화에 만족하는가?&quot;라면, Q 형식으로는 &quot;의료 종사자들은 환자 안전 문화의 핵심 요소와 개선 방향을 어떻게 다르게 이해하는가?&quot;가 됩니다. 또 다른 예로, &quot;이 지역 주민들은 신재생에너지 정책을 지지하는가?&quot;는 Q 형식에서 &quot;이 지역 주민들은 신재생에너지 정책의 가치와 우선순위를 어떻게 다르게 바라보는가?&quot;가 됩니다. 이처럼 &apos;동의/반대의 비율&apos; 대신 &apos;관점의 다층적 구조&apos;를 묻는 것이 올바른 Q 변환 공식입니다.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            5-1강에서 Q 연구의 전체 파이프라인이 유기적으로 연결된 순환 구조임을 배웠습니다. 이 순환의 가장 결정적인 닻은 연구문제입니다. Q 연구문제가 한 번 결정되면, 그것은 이후 모든 설계 결정의 근거이자 심판이 됩니다. Watts &amp; Stenner(2012)가 Q 연구 절차를 상세히 기술할 때 가장 먼저 강조하는 것도 연구문제와 concourse의 관계입니다.
          </p>
          <p>
            McKeown and Thomas(2013)가 설명하듯, Q방법론의 연구 설계는 의사소통의 장(concourse), Q sample(진술문군), Q sorting, 사람 간 상관과 요인해석이 하나의 정합적 논리로 긴밀하게 연결될 때 성립합니다. 따라서 Q 연구문제는 단순한 서두의 장식품이 아니라, 이후 모든 자료 생성과 통계 해석 절차를 정당화하는 논리적 기준이 됩니다.
          </p>
          <p>
            구체적으로 어떻게 연구문제가 후속 단계를 지배하는지 살펴보겠습니다. 연구문제가 &quot;소방 조직 내 안전 문화에 대한 관점의 다양성&quot;으로 결정되면, concourse는 소방 현장에서 발화되는 안전 관련 진술들을 최대한 포괄적으로 수집해야 합니다. 이 concourse에서 추출된 Q-set은 안전 문화의 다양한 측면들을 균형 있게 담은 representative miniature(대표적 축소판)가 되어야 합니다. 그렇게 구성된 Q-set으로 참여자들이 Q-sort를 수행할 때, 그 배열 데이터는 안전 문화에 대한 다양한 관점 구조를 충실히 투사하게 됩니다.
          </p>
          <p>
            만약 연구문제가 모호하거나 Q에 맞지 않는 방향으로 설정되면 이 유기적 연결고리는 끊어지게 됩니다. 연구자가 편향된 Q-set을 만들거나 지시 조건(conditions of instruction)을 일관성 없게 설계하면, 뒤에 수행하는 정교한 요인분석 통계는 아무 의미 없는 계산기에 불과하게 됩니다. 결국 좋은 Q 연구는 단단한 연구문제의 고정에서 출발합니다.
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
          { label: "5-2. Q에 맞는 연구문제 설정" },
        ]}
        statusLabel="공개"
        versionLabel="v1.1 · 2026-06-19"
        title="Q에 맞는 연구문제 설정"
        description="Q방법론 연구는 어떤 연구문제에서 시작해야 하는가. 비율 추정이 아니라 관점 구조를 탐색하는 Q형 연구문제를 설계하는 원칙과 방법을 다룹니다."
        imageSrc="/images/5-2-hero-research-question.webp"
        imageAlt="5-2. Q에 맞는 연구문제 설정 히어로 이미지"
      />

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            모든 연구의 첫 단추는 무엇을 질문할 것인가, 즉 연구문제를 정의하는 일입니다. Q방법론도 예외가 아닙니다. 하지만 R방법론에 익숙한 연구자들은 자신도 모르게 &apos;빈도&apos;나 &apos;인과관계&apos;를 묻는 질문을 Q방법론 연구문제로 설정하는 실수를 범하곤 합니다.
          </p>
          <p>
            이번 5-2강에서는 Q방법론의 고유한 학문적 가정에 부합하는 좋은 연구문제란 무엇인지 알아보고, 기존 사회과학 질문을 Q 연구문제 형식으로 전환하는 원칙과 예시를 살펴봅니다. 연구문제가 흔들리면 뒤따르는 모든 단계가 흔들리므로, 연구문제를 가장 먼저 단단하게 정의해보시기 바랍니다.
          </p>
        </div>
      </section>

      {cards.map((card) => (
        <LessonCard key={card.num} {...card} />
      ))}

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--black)" }}>
          자가 검토 체크리스트
        </h2>
        <ul className="space-y-3">
          {checklist.map((item, index) => (
            <li key={`check-${index}`} className="flex items-start gap-3 text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.6 }}>
              <span className="shrink-0 text-brand font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--black)" }}>
          토론 질문
        </h2>
        <ul className="space-y-5">
          {discussionQuestions.map((question, index) => (
            <li key={`q-${index}`} className="flex gap-3 text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.6 }}>
              <span className="shrink-0 font-semibold" style={{ fontFamily: "var(--font-mono)", color: "var(--brand)" }}>Q{index + 1}.</span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
          참고문헌
        </h2>
        <ul className="space-y-4" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
          <li>
            Brown, S. R. (1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. New Haven: Yale University Press.
          </li>
          <li>
            Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology</em>, <em>21</em>(1), 125.{" "}
            <a
              href="https://doi.org/10.1186/s12874-021-01309-7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.1186/s12874-021-01309-7
            </a>
          </li>
          <li>
            Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open</em>, <em>7</em>(1), 100404.{" "}
            <a
              href="https://doi.org/10.1016/j.ssaho.2023.100404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.1016/j.ssaho.2023.100404
            </a>
          </li>
          <li>
            McKeown, B., &amp; Thomas, D. B. (2013). <em>Q methodology</em> (2nd ed.). SAGE Publications.{" "}
            <a
              href="https://doi.org/10.4135/9781483384412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.4135/9781483384412
            </a>
          </li>
          <li>
            Nederhand, J., &amp; Molenveld, A. (2020). Q methodology in public administration: State of the art. <em>Oxford Research Encyclopedia of Politics</em>.{" "}
            <a
              href="https://doi.org/10.1093/acrefore/9780190228637.013.1448"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.1093/acrefore/9780190228637.013.1448
            </a>
          </li>
          <li>
            Watts, S., &amp; Stenner, P. (2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications.{" "}
            <a
              href="https://doi.org/10.4135/9781446251911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.4135/9781446251911
            </a>
          </li>
          <li>
            Zabala, A., Sandbrook, C., &amp; Mukherjee, N. (2018). When and how to use Q methodology to understand perspectives in conservation research. <em>Conservation Biology</em>, <em>32</em>(5), 1185-1194.{" "}
            <a
              href="https://doi.org/10.1111/cobi.13123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.1111/cobi.13123
            </a>
          </li>
        </ul>
      </section>

      <div
        className="mt-14 flex items-center justify-between border-t pt-6"
        style={{ borderColor: "var(--gray-200)" }}
      >
        <Link href="/lessons/5-1" style={{ color: "var(--brand)", fontSize: "14px", fontWeight: 600 }} className="hover:underline">
          &larr; 5-1. Q 연구의 전체 흐름
        </Link>
        <Link href="/lessons/5-3" style={{ color: "var(--brand)", fontSize: "14px", fontWeight: 600 }} className="hover:underline">
          5-3. concourse 수집 &rarr;
        </Link>
      </div>
    </div>
  );
}
