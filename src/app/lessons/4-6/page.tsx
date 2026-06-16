import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "4-6. Q와 R 중 무엇을 선택할 것인가 | Q방법론 온라인 강의",
  description:
    "연구질문, 자료 단위, 표본 논리, 분석 방식, 해석 언어의 정합성을 기준으로 Q방법론과 R방법론을 선택하는 방법을 다룬다.",
};

const cards = [
  {
    num: 1,
    title: "방법 선택은 익숙한 기법이 아니라 연구질문에서 시작한다",
    keyMessage:
      "방법은 먼저 정하는 것이 아니라, 연구질문이 요구하는 증거의 형태에 맞추어 선택한다.",
    shortDescription:
      "연구자는 먼저 자신이 정말 알고 싶은 것이 무엇인지 물어야 한다. 변수의 관계와 차이를 묻는 질문과 전체 관점 배열의 구조를 묻는 질문은 서로 다른 자료와 분석을 요구한다.",
    points: [
      "방법 선택은 연구자의 취향이나 유행에서 출발하지 않는다.",
      "연구질문이 요구하는 증거의 형태를 먼저 확인해야 한다.",
      "연구질문, 자료 단위, 표본 논리, 분석 방식, 해석 언어가 함께 맞아야 한다.",
    ],
    imageSrc: "/images/4-6-card-01-method-choice-starts-from-question.webp",
    imageAlt:
      "연구질문에서 변수표와 평균 그래프로 향하는 R 경로와 Q-sort와 관점 지도로 향하는 Q 경로가 갈라지는 장면",
  },
  {
    num: 2,
    title: "변수의 관계·차이·효과를 알고 싶다면 R을 검토한다",
    keyMessage:
      "변수 사이의 관계, 집단 평균 차이, 효과, 예측, 모집단 비율을 알고 싶다면 R방법론을 우선 검토한다.",
    shortDescription:
      "R방법론은 여러 관측 단위에서 얻은 변수값을 바탕으로 변수 간 관계와 집단 차이를 분석한다. 평균 차이, 효과, 예측과 비율처럼 수량적 분포와 관계를 묻는 질문에 적합하다.",
    points: [
      "R방법론은 변수값을 바탕으로 일반 관계와 차이를 분석한다.",
      "평균 차이, 효과, 예측, 비율을 묻는 질문에 강하다.",
      "R방법론은 Q방법론이 대체해야 할 낡은 방법이 아니다.",
    ],
    imageSrc: "/images/4-6-card-02-r-for-relationships-differences-effects.webp",
    imageAlt:
      "여러 사람의 변수값 표가 평균 차이 그래프와 상관선, 예측 모형으로 연결되는 장면",
  },
  {
    num: 3,
    title: "관점의 구조·판단 논리를 알고 싶다면 Q를 검토한다",
    keyMessage:
      "사람들이 특정 주제를 어떤 방식으로 이해하고 배열하는지 알고 싶다면 Q방법론을 우선 검토한다.",
    shortDescription:
      "Q방법론의 기본 자료는 개별 문항 점수가 아니라 한 사람이 만든 전체 Q-sort 배열이다. 그 배열에는 무엇을 앞세우고 뒤로 미루는지에 관한 상대적 우선순위와 판단 논리가 담긴다.",
    points: [
      "Q방법론은 한 사람이 만든 전체 Q-sort 배열을 자료로 삼는다.",
      "Q-sort는 진술문 사이의 상대적 우선순위와 판단 논리를 보존한다.",
      "Q요인은 고정된 성격 유형이나 모집단 비율이 아니라 공유된 관점 구조다.",
    ],
    imageSrc: "/images/4-6-card-03-q-for-viewpoint-structure.webp",
    imageAlt:
      "여러 참여자가 동일한 진술문을 각자의 Q-sort 보드에 배열하고 유사한 배열이 관점 지도로 묶이는 장면",
  },
  {
    num: 4,
    title: "같은 주제도 질문을 바꾸면 방법이 달라진다",
    keyMessage: "연구주제의 이름이 아니라 그 주제에서 무엇을 묻는지가 방법을 결정한다.",
    shortDescription:
      "같은 재난안전 교육과정 개편 연구라도 교육 효과와 평균 변화를 묻는다면 R식 질문이 된다. 교육과정의 우선순위를 어떤 논리로 배열하는지 묻는다면 Q식 질문이 된다.",
    points: [
      "같은 주제도 질문을 바꾸면 방법이 달라진다.",
      "효과, 평균 변화, 비율을 묻는 질문은 R식 질문에 가깝다.",
      "우선순위, 의미 구조, 판단 논리를 묻는 질문은 Q식 질문에 가깝다.",
    ],
    imageSrc: "/images/4-6-card-04-same-topic-different-questions.webp",
    imageAlt:
      "재난안전 교육과정 개편이라는 하나의 주제에서 효과와 비율을 묻는 R 질문과 우선순위와 관점을 묻는 Q 질문이 갈라지는 장면",
  },
  {
    num: 5,
    title: "Q와 R을 함께 사용할 때는 역할을 분명히 나눈다",
    keyMessage:
      "Q와 R을 결합할 수 있지만, 각 방법이 어떤 질문과 증거를 담당하는지 분명해야 한다.",
    shortDescription:
      "R은 일반 경향과 변수 관계를, Q는 전체 배열의 관점 구조와 판단 논리를 밝히는 데 사용할 수 있다. 후속 R연구에는 별도의 측정도구 구성, 타당화와 표본설계가 필요하다.",
    points: [
      "Q와 R은 결합할 수 있지만 혼합 자체가 목적이 되어서는 안 된다.",
      "각 방법이 담당하는 질문, 자료, 분석, 통합 지점을 명시해야 한다.",
      "Q요인 적재자 수를 모집단 비율로 해석해서는 안 된다.",
    ],
    imageSrc: "/images/4-6-card-05-combining-q-and-r-with-clear-roles.webp",
    imageAlt:
      "일반 경향과 변수 관계를 다루는 도구와 관점 구조와 판단 논리를 다루는 도구가 연구 흐름에서 서로 다른 역할을 맡는 장면",
  },
  {
    num: 6,
    title: "최종 선택은 질문·자료·표본·분석·해석의 정합성으로 점검한다",
    keyMessage:
      "좋은 방법 선택은 질문, 자료 단위, 표본 논리, 분석 방식, 해석 언어가 서로 맞을 때 이루어진다.",
    shortDescription:
      "평균과 효과를 묻는 질문에 Q방법론을 사용하거나 관점 구조를 묻는 질문에 평균만 제시하면 연구목적과 결과가 어긋난다. 최종 선택은 다섯 가지 정합성으로 점검한다.",
    points: [
      "연구질문과 자료 단위가 맞아야 한다.",
      "표본 논리와 분석 방식이 맞아야 한다.",
      "결과를 해석하는 언어가 연구목적과 맞아야 한다.",
    ],
    imageSrc: "/images/4-6-card-06-coherence-check.webp",
    imageAlt:
      "연구질문, 자료 단위, 표본 논리, 분석 방식, 해석 언어의 다섯 퍼즐 조각이 맞물리는 장면",
  },
];

const comparisonRows = [
  {
    label: "중심 질문",
    r: "변수 관계, 집단 차이, 효과, 예측, 모집단 비율",
    q: "관점 구조, 판단 논리, 의미 배열",
  },
  {
    label: "자료 단위",
    r: "개인이나 사례가 제공한 변수값",
    q: "한 사람이 만든 전체 Q-sort 배열",
  },
  {
    label: "표본 논리",
    r: "모집단 대표성, 추정 안정성, 검정력",
    q: "관점 관련성, 의미 있는 다양성, 배열 가능성",
  },
  {
    label: "분석 대상",
    r: "변수 간 관계와 분포",
    q: "Q-sort 배열 간 유사성과 차이",
  },
  {
    label: "결과 표현",
    r: "평균, 비율, 계수, 효과크기, 예측력",
    q: "factor array, 구별·합의 진술문, 관점 서사",
  },
  {
    label: "일반화",
    r: "적절한 표본설계에 따른 통계적 일반화",
    q: "관점 구조의 이론적·해석적 전이",
  },
  {
    label: "주요 위험",
    r: "측정 타당도나 모형 가정의 부적합",
    q: "Q요인을 사람 라벨이나 모집단 비율로 오해",
  },
];

const checklist = [
  "내 질문은 변수 관계·차이·효과·비율을 묻는가, 관점 구조·판단 논리를 묻는가?",
  "필요한 자료 단위는 개인별 변수값인가, 전체 Q-sort 배열인가?",
  "표본은 모집단 추정을 위한 것인가, 의미 있는 관점 다양성을 드러내기 위한 것인가?",
  "결과를 평균·비율·계수로 제시할 것인가, factor array와 관점 서사로 제시할 것인가?",
  "Q요인을 고정된 사람 유형이나 모집단 비율처럼 해석하고 있지 않은가?",
  "Q와 R을 결합한다면 각 방법의 질문, 자료, 분석, 통합 지점이 분명한가?",
  "Q를 선택했다면 Q-set과 P-set 설계가 연구질문과 맞는가?",
  "독자가 질문부터 해석까지 선택의 논리를 따라갈 수 있는가?",
];

const discussionQuestions = [
  "같은 연구주제라도 어떤 질문에서는 R이, 어떤 질문에서는 Q가 더 적합한 이유는 무엇인가?",
  "Q요인 적재자 수를 “이 유형이 전체의 몇 퍼센트”라고 표현하면 왜 문제가 되는가?",
  "Q와 R을 결합한 연구에서 혼합 자체가 목적이 되었다고 판단할 수 있는 징후는 무엇인가?",
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

      <ul className="mb-8 space-y-3">
        {points.map((point, index) => (
          <li key={point} className="flex items-start gap-3" style={{ color: "var(--gray-700)" }}>
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

  if (num === 1) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        {/* TODO: 윤문이 끝난 카드 1 강의원고를 아래 4개 문단에 입력 */}
        <p>
        연구방법의 선택은 익숙한 기법에서 시작하지 않습니다.<br />
        연구자가 먼저 물어야 할 질문은 "내가 어떤 방법을 쓰고 싶은가"가 아니라<br />
        <b>"이 연구에서 정말 알고 싶은 것은 무엇인가"</b>가 먼저예요.
        </p>

        <p>
        예를 들어 재난안전 교육과정 개편을 연구한다고 해볼까요.<br />
        "교육과정 참여 후 학생들의 재난대응 자기효능감 평균이 높아졌는가"를 알고 싶다면, 필요한 자료는 사전·사후 점수입니다.<br />
        분석은 평균 차이와 효과크기, 통계적 불확실성을 중심으로 이루어지죠. 이 질문은 R방법론을 우선 검토하는 것이 자연스러워요.
        </p>

        <p>
        반대로 "대학원생과 현장 실무자는 재난안전 교육과정 개편에서 무엇을 가장 중요하게 보고, 무엇을 상대적으로 뒤로 미루는가"를 알고 싶다면 필요한 자료가 달라집니다.<br />
        개별 문항 평균보다 여러 진술문이 한 사람 안에서 어떤 우선순위로 배열되는지가 중요해지거든요.
        </p>

        <p>
        이런 질문이라면 Q방법론을 우선 검토해볼 수 있어요.<br />
        Q방법론은 참여자가 진술문을 자기 기준에 따라 배열한 전체 Q-sort를 자료로 삼고, 그 배열들 사이에서 공유된 관점 구조를 해석합니다.
        </p>

        <p>
        그러니까 방법 선택은 "Q냐 R이냐"를 먼저 정하는 일이 아니에요.<br />
        연구질문이 요구하는 증거의 형태가 무엇인지 확인하는 일입니다.
        </p>

        <p>
        어떤 질문은 변수값과 평균, 상관, 효과를 요구해요.<br />
        어떤 질문은 전체 배열, 우선순위, 판단 논리를 요구하죠.
        </p>

        <p>
        이 차이를 놓치면 연구방법은 장식이 되어버립니다.<br />
        질문은 관점 구조를 묻고 있는데 평균만 제시하거나, 질문은 모집단 비율을 묻고 있는데 Q요인의 적재자 수를 비율처럼 해석하면 연구설계가 흔들리지요.
        </p>

        <p>
        그래서 4-6강의 핵심은 단순해요.<br />
        좋은 방법 선택은 연구질문, 자료 단위, 표본 논리, 분석 방식, 해석 언어가 서로 맞물릴 때 이루어집니다.
        </p>
      </div>
    );
  }

  if (num === 2) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        {/* TODO: 윤문이 끝난 카드 2 강의원고를 아래 4개 문단에 입력 */}
        <p>
        변수의 관계, 평균 차이, 효과, 예측, 모집단 비율을 알고 싶다면 R방법론을 우선 검토합니다.<br />
        여기서 말하는 R방법론은 통계 프로그램 R이 아니에요.<br />
        Q방법론 문헌에서 구분하는 변수 중심 분석의 논리를 뜻하죠.
        </p>

        <p>
        재난안전 교육과정 개편 사례로 볼까요.<br />
        "교육과정 참여 후 학생들의 재난대응 자기효능감 평균은 참여 전보다 증가했는가."<br />
        이 질문은 교육의 효과와 수량적 변화를 묻습니다. 연구자는 참여 전 점수와 참여 후 점수를 수집하고, 그 차이가 어느 정도인지 분석하게 되지요.
        </p>

        <p>
        또 다른 질문도 가능해요.<br />
        "재난위험 인식이 높은 학생일수록 재난대응 훈련 참여 의도가 높은가."<br />
        "현장실습 경험이 있는 학생과 없는 학생의 교육 만족도 평균은 다른가."<br />
        "개편된 교육과정에 찬성하는 학생 비율은 어느 정도인가."<br />
        이런 질문들은 변수값의 관계, 평균 차이, 분포, 비율을 묻고 있어요.
        </p>

        <p>
        이런 질문 앞에서 R방법론은 아주 강합니다.<br />
        여러 사람에게서 변수값을 얻고, 그 변수들이 함께 어떻게 움직이는지 볼 수 있거든요.<br />
        상관, 회귀, 집단 비교, 실험 또는 준실험 설계, 척도 구성, 잠재 차원 분석은 모두 이런 질문에 답하는 데 쓰입니다.
        </p>

        <p>
        그래서 R방법론을 평균만 계산하는 낡은 방법처럼 말해서는 곤란해요.<br />
        평균은 R방법론에서 사용하는 여러 분석 언어 중 하나일 뿐입니다.<br />
        R방법론은 변수 간 관계, 집단 차이, 예측 구조, 구성개념을 분석하는 강력한 사회과학의 언어예요.
        </p>

        <p>
        다만 R방법론이 잘 답하는 질문과 Q방법론이 잘 답하는 질문은 서로 다릅니다.<br />
        R은 "얼마나 높아졌는가", "어떤 변수가 어떤 결과와 관련되는가", "몇 퍼센트가 찬성하는가"에 강하지요.
        </p>

        <p>
        하지만 "사람들이 재난안전 교육과정 개편을 어떤 가치와 우선순위로 이해하는가"라는 질문에는 다른 자료 구조가 필요해요.<br />
        바로 그때 Q방법론을 검토하게 됩니다.
        </p>
      </div>
    );
  }

  if (num === 3) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        {/* TODO: 윤문이 끝난 카드 3 강의원고를 아래 4개 문단에 입력 */}
        <p>
        관점의 구조와 판단 논리를 알고 싶다면 Q방법론을 우선 검토합니다.<br />
        Q방법론의 기본 자료는 개별 문항 점수 하나가 아니에요.<br />
        한 사람이 만든 전체 Q-sort 배열이죠.
        </p>

        <p>
        재난안전 교육과정 개편 사례를 다시 볼까요.<br />
        "대학원생과 현장 실무자는 재난안전 교육과정 개편의 우선순위를 어떤 관점 구조로 배열하는가."<br />
        이 질문은 평균 점수나 비율만으로 답하기 어렵습니다. 사람들이 어떤 내용을 가장 앞세우고, 어떤 내용을 뒤로 미루며, 어떤 내용을 중간에 놓는지 들여다봐야 해요.
        </p>

        <p>
        예를 들어 어떤 참여자는 "현장대응 역량 강화"를 가장 중요한 자리에 놓을 수 있어요.<br />
        다른 참여자는 "재난관리 이론과 정책 이해"를 앞세울 수 있고, 또 다른 참여자는 "자격 취득과 성과 측정"을 중요하게 볼 수도 있습니다.
        </p>

        <p>
        이 차이는 단순한 찬반 차이가 아니에요.<br />
        같은 진술문에 동의하더라도, 그 진술문이 전체 배열 안에서 어떤 위치에 놓이느냐에 따라 의미가 달라지거든요.<br />
        어떤 사람에게는 핵심 가치가 되고, 다른 사람에게는 부차적 고려 사항이 될 수 있습니다.
        </p>

        <p>
        Q방법론은 바로 이 전체 배열을 봅니다.<br />
        한 사람이 진술문들을 자기 기준에 따라 상대적으로 배열한 결과를 자료로 삼고, 여러 Q-sort 사이에서 유사한 배열 패턴을 찾아요.<br />
        그 패턴을 읽어내어 공유된 관점 구조와 판단 논리를 해석하는 것이죠.
        </p>

        <p>
        여기서 꼭 짚고 넘어갈 경계가 있어요.<br />
        Q요인은 사람의 고정된 성격 유형이 아닙니다.<br />
        Q요인에 적재된 사람 수가 모집단에서 그 관점이 차지하는 비율을 뜻하는 것도 아니에요.<br />
        Q요인은 특정 주제, 특정 Q-set, 특정 지시 조건 아래에서 드러난 공유된 의미 배열입니다.
        </p>

        <p>
        그러니까 Q방법론은 "작은 표본으로 사람 유형을 나누는 방법"이 아니에요.<br />
        사람들이 특정 주제 세계를 어떻게 배열하는지 살피고, 그 배열들 사이에서 어떤 관점 구조가 나타나는지 해석하는 방법입니다.
        </p>
      </div>
    );
  }

  if (num === 4) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        {/* TODO: 윤문이 끝난 카드 4 강의원고를 아래 4개 문단에 입력 */}
        <p>
        같은 연구주제라도 질문을 바꾸면 방법이 달라져요.<br />
        연구주제의 이름이 방법을 결정하지 않습니다.<br />
        그 주제에서 무엇을 묻느냐가 방법을 결정하죠.
        </p>

        <p>
        "재난안전 교육과정 개편"이라는 주제를 예로 들어볼까요.<br />
        먼저 R식 질문을 만들어볼 수 있어요.<br />
        "재난안전 교육과정 참여 후 학생의 재난대응 자기효능감 평균은 참여 전보다 증가했는가."<br />
        이 질문은 교육 효과와 수량적 변화를 묻습니다. 자료는 사전·사후 자기효능감 점수이고, 결과는 평균 차이, 효과크기, 불확실성으로 제시되지요.
        </p>

        <p>
        이번에는 Q식 질문으로 바꾸어볼게요.<br />
        "대학원생과 현장 실무자는 재난안전 교육과정 개편의 우선순위를 어떤 관점 구조로 배열하는가."<br />
        이 질문은 무엇을 앞세우고 무엇을 뒤로 미루는지, 그 판단 논리를 묻습니다. 자료는 교육과정 개편 진술문의 전체 Q-sort 배열이고, 결과는 factor array와 진술문 근거로 해석한 공유 관점이 됩니다.
        </p>

        <p>
        두 질문은 같은 주제를 다루고 있어요.<br />
        하지만 요구하는 자료가 다릅니다.<br />
        첫 번째 질문은 변수값과 평균 차이를 요구하고, 두 번째 질문은 전체 배열과 관점 구조를 요구하지요. 자연히 방법도 달라집니다.
        </p>

        <p>
        이 원리는 사회적 요소와 기술적 요소가 함께 얽힌 주제에서도 마찬가지예요.<br />
        예를 들어 온라인 재난안전 교육 플랫폼의 접속률, 만족도, 학습성과를 묻는다면 R식 질문에 가깝습니다.<br />
        반면 학습자와 현장 실무자가 그 플랫폼을 어떤 의미와 우선순위로 받아들이는지 묻는다면 Q식 질문에 가깝지요.
        </p>

        <p>
        Frank et al.(2024)은 정보시스템 연구에서 Q방법론이 사회기술적 관점과 연결될 수 있음을 논의합니다.<br />
        사회기술적 관점은 조직과 정보시스템을 기술적 요소와 사회적 요소의 결합으로 이해해요.<br />
        재난안전 교육 플랫폼이나 소방조직의 디지털 전환처럼 기술과 사람이 함께 얽힌 주제를 생각할 때 참고가 됩니다.
        </p>

        <p>
        다만 표현에는 주의가 필요해요.<br />
        Q방법론이 주관성을 객관적으로 측정한다고 말하기보다, 참여자의 주관성이 Q-sort에서 표현되게 하고 그 배열을 체계적으로 해석한다고 말하는 것이 더 적절합니다.
        </p>

        <p>
        방법 선택은 주제명에서 나오지 않아요. 질문에서 나옵니다.<br />
        효과를 묻는가요? 관계를 묻는가요? 비율을 묻는가요?<br />
        아니면 의미 구조와 판단 논리를 묻는가요?<br />
        이 구분이 Q와 R 선택의 출발점입니다.
        </p>
      </div>
    );
  }

  if (num === 5) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        {/* TODO: 윤문이 끝난 카드 5 강의원고를 아래 4개 문단에 입력 */}
        <p>
        Q와 R을 함께 사용할 수 있어요.<br />
        하지만 함께 사용한다는 사실만으로 연구가 더 좋아지는 것은 아닙니다.<br />
        중요한 건 각 방법이 어떤 질문과 증거를 담당하는지 분명히 하는 것이죠.
        </p>

        <p>
        재난안전 교육과정 개편 연구를 단계적으로 설계해볼까요.<br />
        먼저 Q방법론으로 교육과정 개편에 관한 주요 관점 구조를 탐색할 수 있어요.<br />
        예를 들어 어떤 참여자들은 현장대응 역량을 가장 앞세우고, 어떤 참여자들은 이론과 정책 이해를 중시하며, 또 다른 참여자들은 자격 취득과 성과 측정을 중시할 수 있습니다.
        </p>

        <p>
        여기까지는 관점 구조와 판단 논리를 탐색하는 단계예요.<br />
        이 단계에서 얻은 Q요인은 모집단 비율이 아닙니다.<br />
        Q요인에 몇 명이 적재되었는지를 보고 "전체 학생의 몇 퍼센트가 이 관점이다"라고 말할 수는 없어요.
        </p>

        <p>
        그다음 후속 R연구를 설계할 수 있습니다.<br />
        다만 이때도 주의가 필요해요.<br />
        Q에서 발견한 관점 구조를 그대로 설문 선택지로 옮기면 안 됩니다. 관점의 의미를 훼손하지 않는 문항을 구성하고, 측정도구의 타당성을 검토하고, 적절한 표본설계를 통해 변수 관계나 분포를 조사해야 하지요.
        </p>

        <p>
        Buchholtz와 Vollstedt(2024)의 연구는 이 점을 잘 보여줍니다.<br />
        이 연구는 수학 예비교사의 신념을 연구하면서 14개 진술문을 6점 리커트 척도 설문에 사용하고, 직후 동일한 14개 진술문을 Q-sort로 배열하게 했으며, 이후 Q-sort 이유와 방법론 선호도에 대한 질적 인터뷰를 실시했어요.
        </p>

        <p>
        이 사례는 단순히 "Q 다음 R"을 한 연구가 아닙니다.<br />
        리커트 척도, Q-sort, 인터뷰가 각각 다른 역할을 맡는 통합설계예요.<br />
        리커트 척도는 문항별 일반 경향을 보여줍니다. Q-sort는 같은 진술문들이 한 사람 안에서 어떤 상대적 우선순위로 배열되는지를 보여주지요.<br />
        그리고 인터뷰는 그 배열의 이유를 해석하는 보조 자료가 됩니다.
        </p>

        <p>
        그러니까 혼합방법을 사용할 때 핵심은 "많이 섞었다"가 아니에요.<br />
        각 방법이 맡는 질문과 증거가 분명한가입니다.<br />
        R은 일반 경향과 변수 관계를 볼 수 있고, Q는 전체 배열의 관점 구조와 판단 논리를 볼 수 있어요. 두 방법이 만나는 지점은 설계 안에서 명시되어야 합니다.
        </p>

        <p>
        Ramlo와 Newman(2011)의 논의처럼 Q방법론은 질적 또는 양적 한쪽으로만 쉽게 분류하기 어렵습니다.<br />
        Q-sort 과정은 참여자의 자기참조적 의미 구성을 포함하고, 이후 분석은 수치화된 배열을 바탕으로 이루어지지요.
        </p>

        <p>
        하지만 이 점이 Q와 R을 아무렇게나 결합해도 된다는 뜻은 아니에요.<br />
        결합할수록 오히려 역할 구분과 보고의 투명성이 더 중요해집니다.
        </p>
      </div>
    );
  }

  return (
    <div className="lesson-card-body space-y-5" style={style}>
      {/* TODO: 윤문이 끝난 카드 6 강의원고를 아래 4개 문단에 입력 */}
        <p>
        마지막으로 방법 선택을 다섯 가지 정합성으로 점검해볼까요.<br />
        첫째는 연구질문이에요.<br />
        내가 묻는 것이 변수 간 관계인가요? 집단 평균 차이인가요? 효과인가요? 예측인가요? 모집단 비율인가요?<br />
        아니면 사람들이 특정 주제를 어떤 우선순위와 판단 논리로 배열하는가인가요?
        </p>

        <p>
        둘째는 자료 단위입니다.<br />
        R식 질문에서는 개인이나 사례가 제공한 변수값이 기본 자료 단위가 돼요.<br />
        Q식 질문에서는 한 사람이 만든 전체 Q-sort 배열이 기본 자료 단위가 됩니다.<br />
        자료 단위가 다르면 분석도 달라지죠.
        </p>

        <p>
        셋째는 표본 논리예요.<br />
        R방법론에서는 모집단 대표성, 추정 안정성, 검정력이 중요해질 수 있습니다.<br />
        Q방법론에서는 관점 관련성, 의미 있는 다양성, 참여자가 Q-set을 자기 기준으로 배열할 수 있는지가 중요하지요.
        </p>

        <p>
        넷째는 분석 방식입니다.<br />
        변수 간 관계를 묻는다면 상관, 회귀, 집단 비교, 구조모형 같은 R식 분석이 적합할 수 있어요.<br />
        Q-sort 배열 간 유사성과 관점 구조를 묻는다면 Q식 상관과 요인해석이 필요합니다.
        </p>

        <p>
        다섯째는 해석 언어예요.<br />
        R결과는 평균, 비율, 회귀계수, 효과크기, 예측력으로 표현될 수 있습니다.<br />
        Q결과는 factor array, 구별 진술문, 합의 진술문, 관점 서사로 표현되어야 하지요.<br />
        Q요인을 사람의 고정된 성격 유형이나 모집단 비율처럼 해석해서는 안 됩니다.
        </p>

        <p>
        Q방법론을 선택했다면 Q-set과 P-set 설계도 함께 점검해야 해요.<br />
        Q-set은 해당 주제의 관점 지형을 충분히 포괄하고 내용적 균형을 갖추어야 합니다.<br />
        P-set은 모집단 비율을 맞추는 표본이 아니라, 의미 있는 관점 다양성을 드러낼 수 있는 참여자 구성이어야 하지요.
        </p>

        <p>
        Q방법론 연구 체크리스트도 이 점을 강조합니다.<br />
        연구주제가 복잡하고 관점 의존적인 문제인지, Q-set이 어떤 출처에서 구성되었는지, 참여자가 관점 관련성을 기준으로 선정되었는지, Q-sorting 조건과 요인해석 근거가 보고되었는지를 점검해야 해요.
        </p>

        <p>
        Ramlo(2025)는 ChatGPT를 활용해 concourse 후보를 생성하고, 연구자가 이를 의견 진술문으로 정제한 뒤 구조화된 Q-sample을 구성하는 사례를 제시합니다.<br />
        하지만 이 문헌은 Q와 R 선택의 핵심 근거라기보다, Q-set 개발 단계에서 AI를 보조적으로 활용할 수 있음을 보여주는 사례로 읽어야 해요.
        </p>

        <p>
        AI가 전통적 concourse 수집을 대체한다고 보기보다, 연구자의 이론적 프롬프트, 정제, 교차검증을 전제로 한 보조 수단으로 이해해야 합니다.
        </p>

        <p>
        좋은 방법 선택은 하나의 질문으로 압축돼요.<br />
        <b>연구질문, 자료 단위, 표본 논리, 분석 방식, 해석 언어가 서로 맞는가.</b><br />
        이 질문에 답할 수 있다면, Q와 R 중 무엇을 선택할 것인지도 훨씬 분명해집니다.
        </p>
    </div>
  );
}

export default function Lesson46Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "4-6. Q와 R 중 무엇을 선택할 것인가" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-06-06"
        title="Q와 R 중 무엇을 선택할 것인가"
        description="Q와 R의 선택은 방법의 우열이 아니라, 연구질문과 자료 구조가 어떤 답을 요구하는지 판단하는 문제다."
        imageSrc="/images/4-6-hero-choosing-between-q-and-r.webp"
        imageAlt="연구질문을 중심으로 변수 관계를 분석하는 R방법론과 관점 구조를 분석하는 Q방법론의 선택 기준을 비교한 그림"
      />

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          {/* TODO: 윤문이 끝난 히어로 카드 강의원고를 아래 4개 문단에 입력 */}
        <p>
        4장 전체에서 우리는 Q방법론과 R방법론의 차이를 하나씩 살펴보았습니다.
        </p>

        <p>
        4-1강에서는 이런 질문을 던졌죠.<br />
        사람에게서 얻은 변수값을 분석의 중심에 놓을 것인가, 아니면 한 사람이 만든 전체 배열을 중심에 놓을 것인가.<br />
        이 물음이 4장 전체의 출발점이었습니다.
        </p>

        <p>
        4-2강에서는 R방법론의 논리를 공정하게 짚어보았어요.<br />
        R방법론은 사람을 지우는 방법이 아니었습니다.<br />
        사람에게서 얻은 변수값을 바탕으로 변수 간 관계, 집단 평균 차이, 예측 구조, 잠재 차원을 분석하는 사회과학의 강력한 언어입니다.
        </p>

        <p>
        4-3강에서는 Q방법론의 논리를 살펴보았습니다.<br />
        Q방법론의 기본 자료는 개별 문항 점수 하나가 아니었어요.<br />
        참여자가 진술문들을 자기 기준에 따라 비교하고 배열한 전체 Q-sort 구조, 그것이 Q방법론의 출발점이었습니다.
        </p>

        <p>
        4-4강에서는 표본 개념의 차이를 다루었어요.<br />
        R방법론의 표본은 대체로 모집단의 평균, 비율, 변수 관계를 안정적으로 추정하는 논리와 연결됩니다.
        </p>

        <p>
        반면 Q방법론의 P-set은 인구 비율을 추정하려고 뽑는 표본이 아니에요.<br />
        특정 주제에 의미 있는 관점을 표현하고, Q-set을 자기 기준으로 배열할 수 있는 사람들의 구성이죠.
        </p>

        <p>
        4-5강에서는 상관과 요인분석의 대상이 다르다는 점을 확인했습니다.<br />
        R방법론은 보통 변수와 변수를 비교해요.<br />
        Q방법론은 한 사람이 만든 전체 Q-sort와 다른 사람이 만든 전체 Q-sort를 비교합니다.
        </p>

        <p>
        같은 상관계수, 같은 요인분석이라는 말이 쓰이더라도 무엇을 비교하느냐에 따라 해석은 완전히 달라지지요.
        </p>

        <p>
        이제 4-6강에서는 이 모든 차이를 하나의 질문으로 모아봅니다.<br />
        <b>그렇다면 Q와 R 중 무엇을 선택해야 할까요?</b>
        </p>

        <p>
        이 질문은 어느 방법이 더 좋은가를 묻는 것이 아니에요.<br />
        더 정확한 질문은 이겁니다.<br />
        <b>이 연구에서 내가 정말 알고 싶은 것은 무엇인가.</b>
        </p>

        <p>
        변수 간 관계인가요? 평균 차이인가요? 효과인가요? 모집단 비율인가요?<br />
        아니면 사람들이 특정 주제를 어떤 의미 구조와 판단 논리로 배열하는가인가요?
        </p>

        <p>
        예를 들어 "재난안전 교육과정 개편"이라는 주제가 있다고 해볼까요.<br />
        이 주제만으로는 방법이 결정되지 않습니다.
        </p>

        <p>
        교육과정 참여 후 학생들의 재난대응 자기효능감 평균이 높아졌는지 알고 싶다면, R식 질문에 가까워요.<br />
        반면 대학원생과 현장 실무자가 교육과정 개편의 우선순위를 어떤 관점 구조로 배열하는지 알고 싶다면, Q식 질문에 가깝습니다.
        </p>

        <p>
        그래서 오늘의 목표는 Q와 R의 차이를 외우는 데 있지 않아요.<br />
        자신의 연구질문에 맞는 방법을 판단하는 감각을 기르는 데 있습니다.
        </p>
        </div>
      </section>

      {cards.map((card) => (
        <LessonCard key={card.num} {...card} />
      ))}

      <section
        className="py-8 px-5 sm:px-7 mb-12"
        style={{ background: "var(--gray-100)", borderRadius: "8px" }}
      >
        <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
          Q와 R은 어떻게 선택하는가
        </h2>
        <div className="space-y-4" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--gray-700)" }}>
          <p>
            변수 간 관계, 평균 차이, 효과, 예측과 모집단 비율을 알고 싶다면 R방법론을 우선
            검토합니다. 특정 주제의 공유된 관점 구조와 판단 논리를 알고 싶다면 Q방법론을 우선
            검토합니다.
          </p>
          <p>
            두 방법을 결합할 수 있지만 각 방법이 맡는 질문과 증거, 통합 지점이 분명해야 합니다.
            Q요인 적재자 수를 모집단 비율로 바꾸어 읽어서는 안 됩니다.
          </p>
        </div>
      </section>

      <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          핵심 정리 표
        </h2>
        <div
          className="hidden sm:block overflow-hidden"
          style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px" }}
        >
          <table className="w-full border-collapse" style={{ fontSize: "14px", lineHeight: 1.6 }}>
            <thead style={{ background: "var(--gray-100)" }}>
              <tr>
                <th className="p-3 text-left">선택 기준</th>
                <th className="p-3 text-left">R방법론</th>
                <th className="p-3 text-left">Q방법론</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <td className="p-3 font-medium">{row.label}</td>
                  <td className="p-3">{row.r}</td>
                  <td className="p-3">{row.q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 sm:hidden">
          {comparisonRows.map((row) => (
            <div
              key={row.label}
              style={{
                padding: "16px",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
              }}
            >
              <div className="font-semibold mb-3" style={{ color: "var(--black)" }}>
                {row.label}
              </div>
              <dl className="space-y-3" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                <div>
                  <dt className="mb-1" style={{ color: "var(--gray-400)" }}>R방법론</dt>
                  <dd style={{ color: "var(--gray-700)" }}>{row.r}</dd>
                </div>
                <div>
                  <dt className="mb-1" style={{ color: "var(--gray-400)" }}>Q방법론</dt>
                  <dd style={{ color: "var(--gray-700)" }}>{row.q}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-12">
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          동일 주제의 연구질문 비교
        </h2>
        <div className="space-y-8" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--gray-700)" }}>
          <div>
            <h3 className="font-semibold mb-2" style={{ color: "var(--black)" }}>R식 질문</h3>
            <p className="mb-2">
              재난안전 교육과정 참여 후 학생의 재난대응 자기효능감 평균은 참여 전보다
              증가했는가?
            </p>
            <p>사전·사후 점수로 평균 차이, 효과크기와 불확실성을 분석합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2" style={{ color: "var(--black)" }}>Q식 질문</h3>
            <p className="mb-2">
              대학원생과 현장 실무자는 재난안전 교육과정 개편의 우선순위를 어떤 관점 구조로
              배열하는가?
            </p>
            <p>전체 Q-sort와 factor array를 바탕으로 공유된 판단 논리를 해석합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2" style={{ color: "var(--black)" }}>단계적 결합 질문</h3>
            <p className="mb-2">
              Q방법론으로 주요 관점을 탐색한 뒤 별도의 측정도구를 구성·검증하고 대표성 있는
              후속 표본에서 관련 변수와 분포를 조사할 수 있는가?
            </p>
            <p>
              Q요인을 그대로 응답 범주로 옮기지 않고 측정 구성과 타당화, 표본설계를 별도로
              수행해야 합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          방법 선택 체크리스트
        </h2>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1 block shrink-0"
                style={{
                  width: "16px",
                  height: "16px",
                  border: "1px solid var(--gray-400)",
                  borderRadius: "3px",
                }}
              />
              <span style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-12">
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          토론 질문
        </h2>
        <ol className="space-y-3 list-decimal pl-5">
          {discussionQuestions.map((question) => (
            <li key={question} style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}>
              {question}
            </li>
          ))}
        </ol>
      </section>

      <section className="pt-12">
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          학생 적용 아이디어
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--gray-700)" }}>
          <p>
            자신의 연구주제를 R식 질문과 Q식 질문으로 각각 한 문장씩 바꾸어 써봅니다. 두
            질문에서 필요한 자료 단위가 어떻게 달라지는지도 함께 적습니다.
          </p>
          <p>
            두 방법을 결합한다면 어떤 순서로 사용할지, 각 방법이 담당할 질문과 통합 지점이
            무엇인지 표시합니다.
          </p>
          <p>
            짝과 질문을 바꾸어 읽고, 어느 방법이 더 좋아 보이는지가 아니라 질문과 자료 단위가
            서로 맞는지를 중심으로 피드백합니다.
          </p>
        </div>
      </section>

      <section className="pt-12">
        <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
          하단 요약
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            Q와 R의 선택은 어느 방법이 더 우수한가가 아니라 연구자가 무엇을 알고 싶은가의
            문제입니다.
          </p>
          <p>
            변수 관계, 평균 차이, 효과, 예측과 모집단 비율을 알고 싶다면 R방법론을, 공유된
            관점 구조와 판단 논리를 알고 싶다면 Q방법론을 우선 검토합니다.
          </p>
          <p>
            두 방법을 함께 사용할 때는 역할과 통합 지점을 분명히 하고, 최종 선택은 연구질문,
            자료 단위, 표본 논리, 분석 방식, 해석 언어의 정합성으로 점검합니다.
          </p>
        </div>
      </section>

      <section className="pt-12">
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          참고문헌
        </h2>
        <ol className="space-y-3 list-decimal pl-5">
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Brown, S. R. (1980).{" "}
            <em>Political subjectivity: Applications of Q methodology in political science</em>. New
            Haven: Yale University.
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Brown, S. R. (1993). A Primer on Q Methodology. <em>Operant Subjectivity</em>,{" "}
            <em>16</em>(3/4).{" "}
            <Link
              href="https://doi.org/10.22488/okstate.93.100504"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Buchholtz, N., &amp; Vollstedt, M. (2024). Q methodology as an integrative approach:
            Bridging quantitative and qualitative insights in a mixed methods study on mathematics
            teachers&apos; beliefs. <em>Frontiers in Psychology</em>, <em>15</em>, 1418040.{" "}
            <Link
              href="https://doi.org/10.3389/fpsyg.2024.1418040"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp;
            Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research.{" "}
            <em>BMC Medical Research Methodology</em>, <em>21</em>(1), 125.{" "}
            <Link
              href="https://doi.org/10.1186/s12874-021-01309-7"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023).
            Methodological choices in applications of Q methodology: A systematic literature review.{" "}
            <em>Social Sciences &amp; Humanities Open</em>, <em>7</em>(1), 100404.{" "}
            <Link
              href="https://doi.org/10.1016/j.ssaho.2023.100404"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Frank, M., Kohn, V., &amp; Holten, R. (2024). Q methodology and the sociotechnical
            perspective. <em>Information Systems and E-Business Management</em>, <em>22</em>(4),
            599–631.{" "}
            <Link
              href="https://doi.org/10.1007/s10257-024-00679-x"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Jedlicska, N., Lichtenberg, S., Berberat, P. O., &amp; Schick, K. (2026). How to design
            a Q-sample: A seven-step approach based on interview data [Text/html].{" "}
            <em>GMS Journal for Medical Education</em>, <em>43</em>(1).{" "}
            <Link
              href="https://doi.org/10.3205/ZMA001802"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            McKeown, B., &amp; Thomas, D. (2013). <em>Q Methodology</em>. SAGE Publications, Inc.{" "}
            <Link
              href="https://doi.org/10.4135/9781483384412"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Ramlo, S. E. (2025). Integrated Data Collection in Q Methodology: Using ChatGPT From
            Concourse to Q-sample to Q-sort. <em>Journal of Mixed Methods Research</em>,{" "}
            <em>19</em>(2), 191–205.{" "}
            <Link
              href="https://doi.org/10.1177/15586898241262824"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Stephenson, W. (1935). CORRELATING PERSONS INSTEAD OF TESTS.{" "}
            <em>Journal of Personality</em>, <em>4</em>(1), 17–24.{" "}
            <Link
              href="https://doi.org/10.1111/j.1467-6494.1935.tb02022.x"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Stephenson, W. (1936). THE INVERTED FACTOR TECHNIQUE.{" "}
            <em>British Journal of Psychology. General Section</em>, <em>26</em>(4), 344–361.{" "}
            <Link
              href="https://doi.org/10.1111/j.2044-8295.1936.tb00803.x"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Stephenson, W. (1953). <em>The study of behavior; Q-technique and its methodology</em>.
            University of Chicago Press.
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Van Oortmerssen, L. A., Peeters, E. R., Kampermann, A., &amp; Van Montfoort, I. (2025).
            The Q method as research and intervention tool in organizations: A systematic literature
            review. <em>Journal of Organizational Effectiveness: People and Performance</em>,{" "}
            <em>12</em>(5), 112–136.{" "}
            <Link
              href="https://doi.org/10.1108/JOEPP-02-2024-0066"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
          <li style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            Watts, S., &amp; Stenner, P. (2012).{" "}
            <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE
            Publications Ltd.{" "}
            <Link
              href="https://doi.org/10.4135/9781446251911"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--brand)" }}
            >
              [DOI]
            </Link>
          </li>
        </ol>
      </section>

      <div
        className="pt-8 mt-12 flex items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <Link href="/lessons/4-5" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 4-5. 상관과 요인분석 대상의 차이
        </Link>
        <Link
          href="/lessons/5-1"
          className="text-sm text-right"
          style={{ color: "var(--gray-400)" }}
        >
          5-1. Q 연구의 전체 흐름 →
        </Link>
      </div>
    </div>
  );
}
