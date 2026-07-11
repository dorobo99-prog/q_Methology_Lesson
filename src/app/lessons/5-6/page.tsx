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
  title: "5-6. Q-sort 시행 | Q방법론 온라인 강의",
  description:
    "강제분포 그리드 설계, 시행 지시문 작성, 온라인 Q-sort, 사후 인터뷰까지 Q-sort 시행의 전 과정을 학습합니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "Q-sort는 배열이다, 순위가 아니다",
    keyMessage:
      "강제분포 그리드는 참여자가 진술문을 단순 순위가 아니라 전체 배열 구조 안에서 상대적으로 표현하게 만드는 장치입니다.",
    shortDescription:
      "진술문 개수에 따라 척도 범위를 정하고, 참여자의 연구주제 숙련도와 관심도에 따라 분포의 경사도(첨도)를 다르게 설계해야 합니다.",
    points: [
      "진술문 개수(40개 미만: 9점, 40~60개: 11점, 60개 초과: 13점)에 비례하여 격자의 좌우 폭을 결정한다.",
      "주제 숙련도가 낮거나 무관심한 응답자에게는 가파른 분포로 설계해 중립(0점)의 빈도를 넓힌다.",
      "주제가 논쟁적이거나 참여자가 전문가일 경우, 평평한 분포로 설계해 양극단의 허용 칸을 늘린다.",
    ],
  },
  {
    num: 2,
    title: "시행 지시문이 Q-sort를 결정한다",
    keyMessage:
      "시행 지시문은 연구문제가 참여자에게 무엇을 기준으로 배열할지 알려주는 안내문입니다. 지시문이 달라지면 같은 Q-set도 다른 결과를 낳습니다.",
    shortDescription:
      "Watts & Stenner(2012)는 지시문을 어떤 종류의 주관성을 끌어낼 것인지를 결정하는 장치라고 이야기합니다. 온라인 시행에서 명확한 지시문은 특히 중요합니다.",
    points: [
      "'가장 중요한 것'과 '가장 시급한 것'은 같은 진술문 집합으로도 다른 Q-sort 결과를 만든다.",
      "참여자 자신의 관점에서 판단할 것인지, 특정 역할·상황을 기준으로 판단할 것인지를 명확히 해야 한다.",
      "온라인 시행에서는 지시문이 실시간 보충 설명을 대신하는 유일한 안내 수단이다.",
    ],
  },
  {
    num: 3,
    title: "온라인 Q-sort: 가능성과 제약",
    keyMessage:
      "원격 시행은 접근성과 규모 확장이라는 장점을 가져오지만, 문항 수 제한·도구 선택·참여자 지원 설계를 더 꼼꼼히 요구합니다.",
    shortDescription:
      "Meehan et al.(2022)은 온라인 Q-sort의 현실적 상한선으로 35~40개 진술문을 제안합니다. 화면을 통한 읽기와 배열은 대면보다 높은 인지 부담을 줍니다.",
    points: [
      "Q-SorTouch, POET Q, FlashQ 같은 전용 도구는 직관성·그리드 표시 방식·데이터 내보내기 형식에서 차이가 있다.",
      "온라인 시행에서는 사후 인터뷰를 별도 일정으로 잡거나 텍스트 응답으로 대체해야 하는 제약이 생긴다.",
      "도구가 달라도 강제분포 그리드와 시행 지시문의 원칙은 동일하게 유지해야 한다.",
    ],
  },
  {
    num: 4,
    title: "Q-sort는 어떻게 시행하는가",
    keyMessage:
      "Q-sort 시행은 준비 → 도입 설명 → 첫 분류 → 강제분포 배열 → 검토·조정의 순서로 진행됩니다.",
    shortDescription:
      "Buchholtz & Vollstedt(2024)는 전체 진술문을 먼저 세 그룹으로 나누게 한 뒤 그리드에 배치하는 단계적 접근을 사용했습니다. Van Oortmerssen et al.(2025)의 47편 검토에 따르면 Q-sort는 개인 시행과 집단 워크숍 형태 모두에서 활용됩니다.",
    points: [
      "그리드 레이아웃과 척도 범위를 시행 전에 참여자에게 미리 제시한다.",
      "진술문을 동의/중립/비동의 세 그룹으로 먼저 대략 분류하게 하면 배열 부담이 줄어든다.",
      "첫 배치 후 전체 배열을 다시 검토하고 조정하는 단계가 최종 Q-sort 데이터를 완성한다.",
    ],
  },
  {
    num: 5,
    title: "사후 인터뷰: Q-sort를 완성하는 마지막 단계",
    keyMessage:
      "사후 인터뷰는 배열 이유를 참여자의 언어로 직접 확인해 이후 요인 해석의 신뢰를 높이는 필수 단계입니다.",
    shortDescription:
      "참여자 개인의 온전한 주관성을 확보하기 위해 1:1 반구조화 대면 인터뷰를 원칙으로 하며, 양극단 및 예외 배치 문항의 상세 사유를 묻습니다.",
    points: [
      "Q분류를 완료한 직후 1:1 대면 인터뷰를 진행하는 것이 주관성 포착에 가장 적절하다.",
      "온라인 시행에서는 화상 인터뷰(Zoom 등)나 그리드 화면 내 텍스트 사유 입력란을 설계해 한계를 보완한다.",
      "질문지는 양극단 배치 사유, 갈등이나 예상 밖 배치가 이루어진 예외 문항 확인, 분류 경험 피드백으로 구성한다.",
    ],
  },
  {
    num: 6,
    title: "AI 시대의 Q-sort: 도구와 원칙 사이",
    keyMessage:
      "AI는 Q-sort 준비와 분석 보조에 활용할 수 있지만, 인간 참여자의 주관성을 대체하지는 않습니다.",
    shortDescription:
      "Ramlo(2025)는 ChatGPT를 concourse 수집부터 Q-sort 시행까지 통합 활용한 실증 사례를 보고합니다. 그러나 AI 생성 Q-sort는 살아있는 참여자의 경험에서 나오는 주관성이 아닙니다.",
    points: [
      "AI는 concourse 수집, 문항 다양성 확보, 절차 설계 보조에 효과적으로 활용할 수 있다.",
      "Van Oortmerssen et al.(2025)의 조직 Q 연구 검토는 Q-sort가 연구 도구이자 개입 도구로 다양하게 쓰임을 보여준다.",
      "AI 도구 사용 여부와 방식은 방법론 섹션에 투명하게 기술해야 한다.",
    ],
  },
];

function LessonCard({
  num,
  title,
  keyMessage,
  shortDescription,
  points,
  imageSrc,
  imageAlt,
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

      {imageSrc && imageAlt ? (
        <div className="-mx-5 mb-6 sm:mx-0 sm:max-w-[560px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1120}
            height={700}
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
            5-5강에서 우리는 누가 Q-sort를 할 것인지 정했습니다. 이제 5-6강의 질문은 그다음입니다. 그 참여자들이 실제로 진술문을 어떻게 다루게 할까요?
          </p>
          <p>
            Q-sort를 처음 접하면 &quot;진술문을 가장 동의하는 것부터 가장 동의하지 않는 것까지 순위를 매기는 것&quot;으로 오해하기 쉽습니다. 하지만 Q-sort는 단순한 순위 매기기가 아닙니다. 강제분포 그리드 위에서 진술문을 상대적으로 배치하는 절차입니다.
          </p>
          <p>
            강제분포 그리드는 일반적으로 종 모양 또는 준정규분포 형태로 설계됩니다. 참여자는 양극단(가장 동의, 가장 비동의)에는 소수의 진술문만, 중간에는 다수의 진술문을 놓게 됩니다. 이 구조가 중요한 이유는 참여자가 모든 진술문 사이의 상대적 관계를 고려하면서 배열을 결정하게 만들기 때문입니다. 분석 단위는 분류표에 배치된 개별의 진술문이 아닌 진술문의 전체 배열입니다.
          </p>
          <p>
            Brown(1980)과 Watts &amp; Stenner(2012)의 연구에 따르면, 강제분포 그리드를 설계할 때 진술문 개수에 따라 척도 범위를 정하고, 참여자의 연구주제 숙련도와 관심도에 따라 분포의 경사도인 첨도를 조정한다는 구체적인 가이드를 제공합니다.
          </p>
          <p>
            첫째, 진술문 개수에 따른 척도 범위 결정입니다. 진술문 개수가 많아질수록 참여자가 변별할 수 있는 척도 범위도 넓어집니다. 진술문 40개 미만은 +4에서 -4까지의 9점 척도를 주로 사용하고, 40~60개는 +5에서 -5까지의 11점 척도가 보편적이며, 60개 초과는 +6에서 -6까지의 13점 척도로 확장할 수 있습니다.
          </p>
          <p>
            둘째, 참여자의 숙련도 및 주제의 논쟁성에 따른 분포의 경사도 결정입니다. 참여자들이 연구주제에 대해 정보가 부족하거나 관심이 적은 경우, 모호함이나 배치가 애매한 진술문을 자연스럽게 표현할 수 있도록 분포의 중앙(0점, 중립)에 많은 카드를 배치하는 가파른 분포로 설계합니다. 반대로 연구주제가 매우 논쟁적이거나 참여자가 현장 전문가처럼 잘 정립된 의견을 지니고 있을 경우, 양극단(가장 동의 또는 가장 비동의)에 배치할 수 있는 칸의 수를 늘리고 중앙(0점)의 카드 수를 줄여 그리드를 옆으로 납작하게 만드는 평평한 분포로 설계하는 것이 합리적입니다.
          </p>
          <p>
            Buchholtz &amp; Vollstedt(2024)는 동일한 진술문 집합을 리커트 척도로 먼저 평가하게 하고, 다시 강제분포 Q-sort로 배열하게 하는 설계를 사용했습니다. 두 결과를 비교하면 Q-sort가 드러내는 것이 단순 선호 강도가 아니라 관점 내부의 구조와 우선순위임을 확인할 수 있습니다. 리커트에서 높은 점수를 받은 항목도 Q-sort 배열 안에서 강제로 상대화될 때 다른 위치에 놓일 수 있습니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q-sort를 시작하기 전에 참여자는 무엇을 기준으로 진술문을 배열해야 하는지 안내를 받습니다. 이 안내가 시행 지시문입니다.
          </p>
          <p>
            지시문은 연구문제의 번역본입니다. &quot;당신의 관점에서 가장 중요한 것부터 가장 중요하지 않은 것으로 배열해 주세요&quot;와 &quot;현재 당신 조직에서 가장 시급한 것부터 배열해 주세요&quot;는 같은 진술문 집합을 쓰더라도 다른 Q-sort 결과를 낳습니다. 지시문이 달라지면 참여자가 무엇을 기준으로 판단하는지가 달라지고, 그 결과 나타나는 관점 구조도 달라집니다.
          </p>
          <p>
            Watts &amp; Stenner(2012)는 지시문을 작성할 때 참여자가 자기 자신의 관점에서 판단하게 할 것인지, 특정 역할이나 상황을 기준으로 판단하게 할 것인지를 명확히 하라고 조언합니다. 조작적 주관성의 관점에서 지시문은 어떤 종류의 주관성을 끌어낼 것인지를 정하는 장치입니다.
          </p>
          <p>
            Meehan et al.(2022)은 온라인 Q-sort 시행에서 지시문의 명확성이 특히 중요하다고 강조합니다. 대면 시행에서는 연구자가 실시간으로 보충 설명을 줄 수 있지만, 원격 환경에서는 지시문이 유일한 안내 수단이 됩니다.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            전통적으로 Q-sort는 물리적 카드나 종이를 테이블 위에 놓는 대면 방식으로 진행되었습니다. 그러나 디지털 도구의 발전과 함께 온라인·원격 Q-sort가 현실적인 대안이 되었습니다. 특히 코로나-19 팬데믹 이후 원격 시행에 대한 수요와 실증 경험이 빠르게 늘었습니다.
          </p>
          <p>
            Meehan et al.(2022)은 원격 Q-sort를 위한 설계 원칙을 구체적으로 제시합니다. 가장 중요한 권고 사항은 문항 수입니다. 대면 시행에서는 40-50개 진술문도 관리 가능하지만, 온라인에서는 35-40개를 현실적 상한선으로 봅니다. 화면을 통한 진술문 읽기와 배열은 참여자에게 더 높은 인지 부담을 줍니다.
          </p>
          <p>
            소프트웨어 선택도 중요한 결정입니다. Q-SorTouch, POET Q, FlashQ 같은 전용 도구들은 각기 다른 기능과 사용성을 가집니다. 도구가 참여자에게 얼마나 직관적인지, 그리드를 화면에서 어떻게 표시하는지, 데이터 내보내기 형식이 분석 소프트웨어와 호환되는지를 기준으로 선택해야 합니다.
          </p>
          <p>
            온라인 시행의 또 다른 제약은 사후 인터뷰입니다. 대면에서는 배열 직후 자연스럽게 인터뷰로 이어지지만, 원격에서는 별도 일정을 잡거나 텍스트 응답으로 대체해야 합니다. 이 점은 후속 해석의 질에 영향을 줄 수 있습니다.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q-sort 시행은 몇 가지 단계로 나뉩니다. 각 단계를 이해하면 연구자로서 참여자를 어떻게 안내해야 하는지, 어디서 주의가 필요한지 더 분명하게 보입니다.
          </p>
          <p>
            첫째, 준비 단계입니다. 진술문 카드(대면) 또는 디지털 항목(온라인)을 참여자에게 제시하기 전에, 그리드 레이아웃과 척도 범위를 확인합니다. 예를 들어 36개 진술문을 -4에서 +4까지 9점 그리드에 배치한다면, 각 열에 몇 개를 놓는지 미리 제시합니다.
          </p>
          <p>
            둘째, 도입 설명과 지시문 전달 후 첫 분류입니다. 많은 연구자들이 참여자에게 전체 진술문을 먼저 동의/중립/비동의의 세 그룹으로 대략 나누게 한 뒤, 그리드에 배치하는 방식을 권합니다. Buchholtz &amp; Vollstedt(2024)도 이 단계적 접근을 사용해 수학교사 참여자들이 진술문을 보다 체계적으로 배열하도록 안내했습니다.
          </p>
          <p>
            셋째, 강제분포 배열과 검토·조정입니다. 첫 배치 후 참여자는 배열 전체를 다시 보면서 조정합니다. Van Oortmerssen et al.(2025)의 조직 연구 검토에 따르면, Q-sort 시행 절차는 연구 목적에 따라 개인 시행과 집단 워크숍 형태 모두에서 사용됩니다.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q-sort 배열이 끝났다고 해서 자료 수집이 끝난 것이 아닙니다. Q방법론 연구의 완성도는 배열 이후 참여자와 진행하는 사후 인터뷰에 의해 결정됩니다. 이는 연구자의 주관적 판단에만 요인 해석을 의존하지 않고, 참여자의 실제 목소리로 분석 결과를 설명하기 위한 필수적인 품질 관리 단계입니다.
          </p>
          <p>
            사후 인터뷰는 기본적으로 참여자 개개인의 고유한 주관성 흐름을 방해하지 않고 집중적으로 확인하기 위해 1:1 비구조화 또는 반구조화 인터뷰 형태로 시행합니다. 집단 인터뷰 등은 다른 사람의 의견에 영향을 받아 분류 결과를 사후 왜곡할 수 있어 지양됩니다. 가장 이상적인 형태는 Q분류를 완료한 직후, 대면 상황에서 그 자리에서 대화를 나누는 것입니다. 온라인 Q-sort를 진행하는 경우에는 분류 완료 페이지 직후 줌(Zoom) 등의 화상 통화로 연결하거나, 시스템 제약이 있을 때는 그리드 완료 화면에 진술문별 사유 입력란을 배치하여 텍스트로 보완합니다.
          </p>
          <p>
            사후 인터뷰 질문지의 핵심 구성은 크게 세 부분으로 이루어집니다. 첫째, 양극단 배치 사유입니다. &quot;가장 동의하는 칸(+4/+5)과 가장 비동의하는 칸(-4/-5)에 놓인 진술문들을 특별히 그 위치에 배치한 이유는 무엇인가요?&quot;와 같은 질문을 던집니다. 둘째, 예외적이거나 논쟁적인 배치 사유입니다. 연구자가 예상했던 일반적인 분류 기준을 벗어나 있거나, 참여자가 분류하면서 심리적 갈등을 겪은 진술문에 대해 확인합니다. 셋째, Q분류 경험에 대한 피드백입니다. &quot;그리드가 본인의 평소 생각을 표현하기에 충분했는지, 억지로 분류해야 해서 답답했던 문항은 없었는지&quot;를 물음으로써 분류 과정의 타당성과 데이터를 검증합니다.
          </p>
          <p>
            Kirschbaum et al.(2024)은 사후 인터뷰를 &quot;흔히 간과되는 단계&quot;로 지적하며, 이를 혼합연구방법 통합의 별도 가닥으로 다루는 설계를 제안합니다. 이 접근에서 인터뷰 데이터는 Q-sort 분석의 부수적 메모가 아니라, 별도로 분석하고 Q-sort 결과와 통합하는 독립적 자료 층입니다.
          </p>
          <p>
            Watts &amp; Stenner(2012)도 인터뷰를 Q-sort 절차의 자연스러운 연장으로 봅니다. 사후 인터뷰가 없으면 연구자는 배열만 보고 의미를 해석해야 합니다. 그 해석이 참여자의 실제 의도와 얼마나 가까운지는 알기 어렵습니다. 인터뷰는 그 간격을 줄이는 장치입니다.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q방법론과 인공지능(AI)의 결합은 이제 실험을 넘어 실증 연구로 이어지고 있습니다. 특히 ChatGPT 같은 생성형 AI를 Q 연구의 여러 단계에 통합하는 시도가 등장했습니다.
          </p>
          <p>
            Ramlo(2025)는 concourse 수집, Q표본 구성, Q-sort 시행까지 ChatGPT를 활용한 통합적 데이터 수집 절차를 실증 연구로 보고합니다. 이 연구는 Fisher(1935)의 실험설계 원리와 결합해 AI 생성 구조를 Q 연구에 적용했습니다. 연구 준비 시간 단축, 문항 다양성 확보, 탐색적 비용 절감이 주요 장점으로 제시됩니다.
          </p>
          <p>
            그러나 이 접근에는 중요한 방법론적 경계가 있습니다. AI가 생성하거나 수행한 Q-sort는 인간 참여자의 주관성을 대체할 수 없습니다. Q방법론의 핵심은 특정 문제에 대한 사람들의 내면화된 관점을 자연스럽게 표현하게 하는 데 있습니다.
          </p>
          <p>
            Van Oortmerssen et al.(2025)의 47편 조직 Q 연구 검토에서도 Q-sort가 조직 내 집단지성을 끌어내는 개입 도구로 활용된 사례들을 확인할 수 있습니다. AI는 절차 설계의 보조자는 될 수 있지만, Q-sort 자체의 주체가 될 수는 없습니다. 도구와 원칙 사이의 이 경계를 명확히 인식하는 것이 5-6강의 마지막 논점입니다.
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
          { label: "5-6. Q-sort 시행" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-07-05"
        title="Q-sort 시행"
        description="진술문을 배열하는 것은 단순한 순위 매기기가 아닙니다. 강제분포 그리드, 시행 지시문, 사후 인터뷰까지—Q-sort 시행의 전 과정을 설계하는 법을 배웁니다."
        imageSrc="/images/5-6-hero-q-sort-administration.webp"
        imageAlt="강제분포 그리드 위에 진술문 카드를 배치하는 Q-sort 시행 장면"
      />

      <section className="mx-auto py-12 sm:py-16" style={{ maxWidth: "720px" }}>
        <section className="mb-14">
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--gray-700)" }}>
            5-5강에서 누가 Q-sort를 할 것인지 정했다면, 5-6강에서는 그 참여자들이 실제로 어떻게 Q-sort를 수행하는지를 다룹니다. 강제분포 그리드의 논리부터 시행 지시문, 온라인 시행, 사후 인터뷰까지—Q-sort 시행을 설계하는 연구자로서 알아야 할 전 과정을 살펴봅니다.
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
            <li>강제분포 그리드의 형태(척도 범위, 열별 진술문 수)를 논문 방법론에 구체적으로 보고했나요?</li>
            <li>시행 지시문이 연구문제와 직접 연결되는 언어로 작성되었나요?</li>
            <li>온라인 시행을 했다면 사용한 소프트웨어, 화면 구성, 참여자 안내 방식을 보고할 준비가 되어 있나요?</li>
            <li>사후 인터뷰를 실시했다면 어떤 진술문에 집중했고, 그 결과를 해석 단계에서 어떻게 활용할 계획인가요?</li>
            <li>AI 도구를 활용했다면 어느 단계에서, 어떤 방식으로 사용했는지를 방법론에 투명하게 기술했나요?</li>
          </ul>
        </section>

        <section className="mt-12 border-t pt-10" style={{ borderColor: "var(--gray-200)" }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
            참고문헌
          </h2>
          <ul className="space-y-4" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            <li>Brown, S. R. (1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. Yale University Press.</li>
            <li>Buchholtz, N., &amp; Vollstedt, M. (2024). Q methodology as an integrative approach: Bridging quantitative and qualitative insights in a mixed methods study on mathematics teachers&apos; beliefs. <em>Frontiers in Psychology</em>, <em>15</em>, Article 1418040. <a href="https://doi.org/10.3389/fpsyg.2024.1418040" className="hover:underline">https://doi.org/10.3389/fpsyg.2024.1418040</a></li>
            <li>Kirschbaum, M., Cross, M., &amp; Barnett, T. (2024). Combining Q methodology and interviews using mixed methods integration: An exemplar study exploring over-the-counter codeine misuse in Australia. <em>International Journal of Social Research Methodology</em>, <em>28</em>(2), 147–161. <a href="https://doi.org/10.1080/13645579.2024.2304939" className="hover:underline">https://doi.org/10.1080/13645579.2024.2304939</a></li>
            <li>Meehan, K., Ginart, L., &amp; Ormerod, K. J. (2022). Short take: Sorting at a distance: Q methodology online. <em>Field Methods</em>, <em>34</em>(1), 82–88. <a href="https://doi.org/10.1177/1525822X211069657" className="hover:underline">https://doi.org/10.1177/1525822X211069657</a></li>
            <li>Ramlo, S. E. (2025). Integrated data collection in Q methodology: Using ChatGPT from concourse to Q-sample to Q-sort. <em>Journal of Mixed Methods Research</em>, <em>19</em>(2), 191–205. <a href="https://doi.org/10.1177/15586898241262824" className="hover:underline">https://doi.org/10.1177/15586898241262824</a></li>
            <li>van Oortmerssen, L. A., Peeters, E. R., Kampermann, A., &amp; van Montfoort, I. (2025). The Q method as research and intervention tool in organizations: A systematic literature review. <em>Journal of Organizational Effectiveness: People and Performance</em>, <em>12</em>(5), 112–136. <a href="https://doi.org/10.1108/JOEPP-02-2024-0066" className="hover:underline">https://doi.org/10.1108/JOEPP-02-2024-0066</a></li>
            <li>Watts, S., &amp; Stenner, P. (2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications Ltd. <a href="https://doi.org/10.4135/9781446251911" className="hover:underline">https://doi.org/10.4135/9781446251911</a></li>
          </ul>
        </section>

        <nav className="mt-12 flex items-center justify-between border-t pt-8" style={{ borderColor: "var(--gray-200)" }}>
          <Link href="/lessons/5-5" className="text-sm font-medium hover:underline" style={{ color: "var(--brand)" }}>
            이전 강의: 5-5 P-set 선정
          </Link>
          <Link href="/lessons/5-7" className="text-sm font-medium hover:underline text-right" style={{ color: "var(--brand)" }}>
            다음 강의: 5-7 요인분석에서 해석까지
          </Link>
        </nav>
      </section>
    </div>
  );
}
