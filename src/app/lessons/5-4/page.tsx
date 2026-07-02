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
  title: "5-4. Q-set 구성 | Q방법론 온라인 강의",
  description: "수집한 진술문 모집단(Concourse)을 바탕으로, 연구문제와 담론 지형을 엄밀히 반영하는 최종 Q표본(Q-set/Q-sample)을 선별·설계·정제하는 실무적 핵심 논리를 학습합니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "Q표본은 Concourse의 대표성 있는 축소판이다",
    keyMessage: "Q표본(Q-set/Q-sample)은 수집된 진술문 모집단(Concourse)에서 추출한 대표성 설계(Representative design)의 결과물입니다.",
    shortDescription: "Q표본은 단순히 읽기 좋은 문장을 임의로 골라 모은 것이 아닙니다. Brunswik(1955)의 개념에 기원을 둔 대표성 설계(Representative design)를 적용하여, Concourse의 담론 지형과 다양성의 균형을 작은 묶음 안에 옮겨 놓는 과정입니다.",
    points: [
      "Q표본은 Concourse에 존재하는 다양한 관점을 질적으로 대표해야 한다.",
      "단순 무작위 추출이 아닌, 의사소통적 균형을 고려한 표집이다.",
      "대표성 설계를 통해 분류 결과의 질적 타당성을 확보한다.",
    ],
  },
  {
    num: 2,
    title: "좋은 진술문이 살아남는 7가지 평가 기준",
    keyMessage: "최종 Q표본에 들어갈 진술문은 엄격한 질적 기준을 통과해야 오해 없는 Q분류를 유도합니다.",
    shortDescription: "후보 진술문을 평가할 때 7가지 명확한 기준(관련성, 명확성, 중의성 회피, 간결성, 변별성, 일관된 형식, 자기참조성)을 대입하여 오역이나 혼란을 방지하고 문장을 정밀하게 다듬어야 합니다.",
    points: [
      "복합 질문(Double-barreled)과 상황적 모호성을 줄인다.",
      "참가자가 자신의 관점을 자연스럽게 투사할 수 있는 자기참조성(Self-reference)을 유지한다.",
      "문법 교정 시 원본에 담긴 감정적 반응(Emotional response)을 지우지 않는다.",
    ],
  },
  {
    num: 3,
    title: "구조화된 표집과 비구조화된 표집의 보완적 관계",
    keyMessage: "이론적 분류를 활용하는 구조화된 접근(Structured approach)과 열린 비구조화된 접근(Unstructured approach)은 상호 보완적입니다.",
    shortDescription: "구조화된 접근은 요인 설계나 블록 설계로 편향을 줄이지만, 개방성을 제한할 수 있습니다. 두 접근의 장단점을 함께 보아야 좋은 Q표본에 가까워집니다.",
    points: [
      "요인 설계와 Fisher(1935)의 격자망 원리를 적용한 연역적 표집틀 구성.",
      "두 접근은 대립항이 아니라 균형과 개방성을 동시에 잡는 상호 점검 도구이다.",
      "구조화된 틀을 쓰더라도 현장의 자연스러운 어조와 문체는 그대로 살려둔다.",
    ],
  },
  {
    num: 4,
    title: "Q표본 규모는 어떻게 결정되는가",
    keyMessage: "Q표본 크기는 30~50개 사이에서 연구 질문의 깊이와 참여자의 인지적 부하를 고려해 유연하게 결정합니다.",
    shortDescription: "Q표본의 숫자에 정답은 없습니다. Dieteren et al.(2023)의 분석에 따르면 대다수 연구가 30~50개(보통 40~50개)를 사용합니다. 너무 많으면 인지적 과부하를 유발하고, 너무 적으면 변별력이 떨어집니다.",
    points: [
      "Dieteren et al.(2023)의 실제 관행에서 관찰되는 30~50개 규모.",
      "참여자의 인지적 과부하 방지를 고려한 합리적 선별.",
      "요인 분석 시의 변별성과 연구 경계의 균형.",
    ],
  },
  {
    num: 5,
    title: "AI를 활용한 진술문 도출의 약속과 한계",
    keyMessage: "생성형 AI는 Q표본 도출과 확장을 도울 수 있지만, 연구자의 이론적 조작화를 대체할 수 없습니다.",
    shortDescription: "Ramlo(2025)는 ChatGPT를 활용해 Concourse에서 진술문 후보를 정제하는 절차를 제시했습니다. AI는 요약과 카테고리화에 강력하지만, 최종 타당성 판정과 의미 맥락 검수 책임은 온전히 연구자에게 있습니다.",
    points: [
      "AI 프롬프팅을 통한 Concourse 요약 및 진술문 후보군 변환의 효율화.",
      "AI가 도출한 표현의 정밀도와 왜곡 여부를 연구자가 이론적으로 감수.",
      "AI 활용 시 그 경로와 프롬프트를 연구 방법론 장에 투명하게 보고한다.",
    ],
  },
  {
    num: 6,
    title: "전문가 검토와 파일럿 테스트라는 최종 품질 게이트",
    keyMessage: "Q표본을 완성하기 전, 전문가 검증과 파일럿 테스트를 거쳐 진술문의 질적 타당성을 확인합니다.",
    shortDescription: "Paige & Morin(2016)은 CVI(Content Validity Index)를 산출해 내용 타당도를 확보하고 파일럿 테스트를 수행했습니다. 이 절차를 거쳐야 실제 Q-sort에서 참가자들의 오독과 분류 포기를 막을 수 있습니다.",
    points: [
      "주제 대표성을 검토하는 내용 전문가와 Q-sort 오작동을 거르는 Q방법론 전문가의 협업.",
      "내용타당도지수(CVI) 0.80 기준선을 활용한 진술문 조정.",
      "파일럿 모의 정렬을 통한 소요 시간 측정 및 지시문 명확화.",
    ],
  }
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
            5-3강에서는 연구 질문을 둘러싼 사회적 담론의 원자료, 곧 진술문 모집단(Concourse)을 어떻게 수집하는지 살펴보았습니다. 이제 연구자 앞에는 수백 개의 거친 문장, 인터뷰 전사, 정책 문서의 조각이 놓여 있습니다. 이 더미에서 참가자가 실제로 읽고 배열할 30~50개의 진술문을 추려내는 과정이 이번 5-4강의 핵심인 <strong>Q표본(Q-set/Q-sample) 구성</strong>입니다.
          </p>
          <p>
            여기서 초보 연구자가 자주 하는 오해가 있습니다. Q표본 구성을 &quot;수집된 문장 중에서 읽기 좋은 문장 몇 개를 고르는 작업&quot; 정도로 생각하는 것입니다. 하지만 Q방법론에서 Q표본은 단순한 문장 목록이 아닙니다. Concourse가 품고 있는 관점의 폭, 차이, 긴장을 작은 묶음 안에 옮겨 놓는 대표성 설계의 결과물이어야 합니다.
          </p>
          <p>
            대표성 설계는 인지심리학자 브룬스윅(Egon Brunswik, 1955)의 개념에 기원을 둡니다. 일반적인 R방법론 연구가 연구 대상인 &apos;사람&apos;을 무작위로 추출해 표본의 대표성을 확보한다면, Q방법론 연구는 주관성의 지도인 &apos;진술문&apos;을 체계적으로 표집해 말의 세계가 가진 대표성을 확보합니다. 다시 말해 최종 Q표본은 거대한 Concourse의 분포와 다양성, 대립의 균형을 압축해 둔 작은 지도에 가깝습니다.
          </p>
          <p>
            연구자가 자신의 선호에 이끌려 특정 성향의 문장만 Q표본에 가득 넣는다면 어떻게 될까요? 이후 참가자들이 아무리 성실하게 Q분류를 하고, 요인 분석이 정교하게 이루어지더라도 처음 제공한 지도 자체가 기울어져 있습니다. 그러면 분석에서 도출되는 주관성 유형도 그만큼 편향될 수밖에 없습니다. Q표본이 Concourse의 정밀한 축소판이어야 하는 이유가 여기에 있습니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            그렇다면 수집된 후보 문장 중에서 어떤 문장을 살리고, 어떤 문장을 제외해야 할까요? Q표본에 들어갈 진술문을 평가할 때 연구자가 확인해야 할 기준은 7가지입니다. 관련성, 명확성, 중의성 회피, 간결성, 변별성, 일관된 형식, 자기참조성입니다.
          </p>
          <p>
            특히 초보 연구자가 자주 놓치는 것이 &apos;복합 진술&apos;입니다. 예를 들어 &quot;우리 조직의 예산 분배는 투명하지만, 집행 과정은 비효율적이다&quot;라는 문장이 있다면 참가자는 곧바로 난처해집니다. 분배의 투명성에는 동의하지만 집행의 비효율성에는 동의하지 않을 때, 이 문장을 플러스(+)에 놓아야 할까요, 마이너스(-)에 놓아야 할까요? 이처럼 판단의 축이 엉켜 있는 복합 진술은 &quot;예산 분배는 투명하다&quot;와 &quot;예산 집행 과정은 비효율적이다&quot;로 나누어야 합니다.
          </p>
          <p>
            한 가지 더 조심할 부분이 있습니다. 문장을 깔끔하게 다듬겠다는 이유로 연구자 관점에서 문법과 구문을 지나치게 손보면, 인터뷰 전사에 담겨 있던 현장 실무자의 감정적 반응이나 날것의 표현이 사라질 수 있습니다. Q방법론은 사람들이 실제로 쓰는 일상적 언어를 대변해야 합니다. 따라서 의미를 흐리는 모호성은 줄이되, 현장의 어조까지 모두 지워 버리는 식의 문장 정리는 피해야 합니다.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q표본을 표집하는 구체적인 설계 방법론은 크게 두 가지로 나뉩니다. 첫째는 이론이나 사전 범주를 표집의 격자망으로 사용하는 구조화된 접근(Structured approach)이고, 둘째는 사전 범주 없이 수집된 Concourse를 주제별 친화도에 따라 유연하게 묶어서 고르는 비구조화된 접근(Unstructured approach)입니다.
          </p>
          <p>
            구조화된 접근은 대개 피셔(R. A. Fisher, 1935)의 실험 계획법에 나오는 요인 설계나 블록 설계 원리를 적용합니다. 예를 들어 페이지와 모린(Paige & Morin, 2016)의 연구처럼, &apos;교육적 고려사항(3가지)&apos;과 &apos;설계 특성(5가지)&apos;이라는 두 축을 교차시켜 총 15개(3×5)의 격자 셀(Cell)을 구성할 수 있습니다. 그리고 각 셀마다 균일하게 4개씩의 진술문을 배정하면 최종 60개의 Q표본이 만들어집니다. 이렇게 하면 특정 주제 영역에 문항이 지나치게 쏠리거나 아예 빠지는 일을 줄일 수 있습니다.
          </p>
          <p>
            반면, 비구조화된 접근은 사전에 고정된 이론적 틀을 두지 않고, Concourse에 모인 진술문을 아래로부터 위로 귀납적으로 분류합니다. 담론이 실제로 어떤 모양으로 모여 있는지를 보면서 Q표본을 추출하는 방식입니다. 연구자가 미리 예상하지 못했던 주제적 변종을 포착하는 데 유연하다는 장점이 있습니다.
          </p>
          <p>
            두 접근 중 어느 한쪽이 절대적으로 우월한 것은 아닙니다. 구조화된 접근은 연구자가 가진 개념적 편향을 줄이고, 논문 심사 과정에서 표본의 설계 엄밀성을 설명하기 좋습니다. 다만 연구자의 이론적 격자 안에 참가자의 살아 있는 주관성을 가둘 위험이 있습니다. 비구조화된 접근은 풍부하고 생생한 표현을 살리기 좋지만, 자칫 연구자의 자의적 기준에 따라 특정 영역의 목소리만 커질 수 있습니다. 그래서 좋은 Q연구는 두 접근을 서로 점검하게 만듭니다. 구조화된 격자로 전체 영역의 균형을 확인하되, 개별 진술문을 고를 때는 비구조화된 감각을 열어 두어 현장의 어조와 문체를 유지하는 방식입니다.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            그렇다면 최종 Q표본의 개수는 몇 개가 적당할까요? Q방법론을 처음 시작하는 대학원생들이 자주 묻는 질문입니다. 먼저 분명히 해 둘 점은, Q표본의 규모에 수학적으로 정해진 하나의 정답은 없다는 것입니다. 경험적으로 Q방법론 연구는 보통 30개에서 50개 안팎의 진술문으로 Q표본을 구성합니다. 디터렌 외(Dieteren et al., 2023)의 체계적 문헌고찰에 따르면, 출판된 수백 편의 Q방법론 연구 중 절대다수가 이 30~50개 범위 안에서 Q표본 크기를 결정했으며, 그중에서도 40~50개 사이의 규모가 가장 보편적인 실제 연구 관행으로 관찰됩니다.
          </p>
          <p>
            이 범위가 정착된 데에는 뚜렷한 실무적·인지적 이유가 있습니다. 만약 Q표본의 개수가 20개 미만으로 너무 적다면, 참가자들이 자신의 의견을 미세하게 조정하며 표현할 수 있는 변별력과 정보의 밀도가 너무 낮아집니다. 각 요인들의 대립각을 명확하게 드러내는 데도 한계가 발생합니다.
          </p>
          <p>
            반대로 진술문이 60개나 80개를 넘어가면, 분류에 참여하는 사람에게 인지적 과부하가 생깁니다. 참가자는 많은 진술문 카드를 하나하나 읽고 비교하며 좌우로 배치하는 과정에서 피로를 느끼고, 이는 무성의한 분류나 무작위 배치로 이어질 수 있습니다. 따라서 연구자는 연구 질문의 범주를 충분히 대표할 만큼의 변별력을 확보하면서도, 참가자의 집중이 무너지지 않을 절충점으로 30~50개 안팎의 규모를 결정해야 합니다.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            최근 생성형 AI의 발전은 Q방법론 연구의 초반 작업 방식에도 변화를 가져오고 있습니다. 방대한 텍스트 더미인 Concourse에서 Q표본 후보 진술문을 뽑아내는 요약과 선별 과정에 생성형 AI를 활용하려는 시도가 늘고 있습니다.
          </p>
          <p>
            람로(Ramlo, 2025)는 ChatGPT를 활용해 다양한 텍스트 소스에서 Q진술문 후보를 추출하고, 이를 이론적 차원에 맞추어 범주화하며, 문장 다듬기 단계를 효율화하는 절차를 제시했습니다. 정밀하게 설계된 프롬프트를 사용하면 수백 페이지 분량의 인터뷰 전사나 학술 문헌에서 핵심 주장을 담은 단일 평서문을 빠르게 만들고 분류할 수 있습니다. 연구자의 초반 노동 시간과 인지적 에너지를 줄여 준다는 점에서 분명한 장점이 있습니다.
          </p>
          <p>
            하지만 도구적 유용성만 보고 지나가면 안 됩니다. AI는 문장의 요약과 형식적 변환에는 강하지만, 연구의 맥락적 타당성을 판정하거나 가치관의 미묘한 뉘앙스를 저울질하지는 못합니다. AI가 도출한 문장을 무비판적으로 가져다 쓰면, 현장에서 통용되는 고유한 맥락이나 참가자의 어투가 왜곡되거나 획일화될 수 있습니다.
          </p>
          <p>
            중요한 원칙은 분명합니다. 생성형 AI는 연구자의 작업을 보조하는 성능 좋은 도구일 뿐, 연구를 정교화하고 타당성을 확보하는 이론적 조작화의 주체가 아닙니다. 최종 책임자는 연구자입니다. AI가 뽑아낸 후보 리스트를 놓고, 7가지 평가 기준에 맞는지 한 문장씩 읽으며 조정하는 검수 절차는 건너뛸 수 없습니다. 또한 연구에 AI를 사용했다면 방법론 장에서 어떤 단계에, 어떤 프롬프트와 논리로 AI를 활용했는지 투명하게 보고해야 합니다.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            연구자가 평가 기준을 적용하고 이론적 설계를 마쳐 Q표본 카드를 확정했더라도, 곧바로 본 조사에 투입해서는 안 됩니다. Q표본이 거쳐야 할 마지막 품질 점검은 <strong>전문가 검토</strong>와 <strong>파일럿 테스트</strong>입니다.
          </p>
          <p>
            페이지와 모린(Paige & Morin, 2016) 연구는 이 두 단계가 왜 필요한지 잘 보여주는 사례입니다. 연구진은 3×5 요인 설계를 통해 392개의 예비 Concourse 항목을 60개의 예비 Q표본으로 줄인 뒤, 이를 두 그룹의 전문가에게 보내 검증을 받았습니다. 첫째는 연구 주제인 시뮬레이션 교육의 대표성과 내용적 정확성을 판단해 줄 &apos;내용 전문가&apos;였고, 둘째는 진술문의 형식과 Q-sort 오작동 가능성을 살펴볼 &apos;Q방법론 전문가&apos;였습니다.
          </p>
          <p>
            연구진은 내용 전문가들에게 각 진술문의 명확성과 다양성을 평가하게 하여 내용타당도지수(Content Validity Index, CVI)를 산출했습니다. CVI 점수가 기준선인 0.80 미만인 모호한 문항은 전문가 의견에 따라 삭제하거나 수정했습니다. Q방법론 전문가는 문장 안에서 참가자의 독립적인 주관성 투사를 방해하는 불필요한 수식어나 부가적 지지 표현을 걸러내어, 한 문장이 하나의 주관적 의미를 담도록 다듬었습니다.
          </p>
          <p>
            전문가 검토를 마친 뒤에는 실제 분류 대상자와 유사한 인구통계학적 배경을 가진 소수의 인원을 대상으로 파일럿 테스트를 진행해야 합니다. 파일럿 테스트는 단순한 예행연습이 아닙니다. 참가자들이 실제로 분류를 진행하는 모습을 관찰하면서, 어떤 문장에서 머뭇거리는지, 어떤 표현 때문에 질문이 생기는지 확인하는 과정입니다. 파일럿 테스트를 통해 평균 분류 소요 시간과 지시문의 명확성까지 확인했을 때, 비로소 Q표본을 본 조사에 투입할 수 있습니다.
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
          { label: "5-4. Q-set 구성" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-06-26"
        title="Q-set 구성"
        description="수집한 진술문 모집단(Concourse)을 바탕으로, 연구문제와 담론 지형을 엄밀히 반영하는 최종 Q표본(Q-set/Q-sample)을 선별·설계·정제하는 실무적 핵심 논리를 학습합니다."
        imageSrc="/images/5-4-hero-q-set-construction.webp"
        imageAlt="5-4. Q-set 구성 히어로 이미지"
      />

      <section className="mx-auto py-12 sm:py-16" style={{ maxWidth: "720px" }}>
        {cards.map((card) => (
          <LessonCard key={card.num} {...card} />
        ))}

        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
            참고문헌
          </h2>
          <ul className="space-y-4" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            <li>
              Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., & Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology</em>, <em>21</em>(1), 125. <a href="https://doi.org/10.1186/s12874-021-01309-7" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand)" }}>https://doi.org/10.1186/s12874-021-01309-7</a>
            </li>
            <li>
              Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., & Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences & Humanities Open</em>, <em>7</em>(1), 100404. <a href="https://doi.org/10.1016/j.ssaho.2023.100404" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand)" }}>https://doi.org/10.1016/j.ssaho.2023.100404</a>
            </li>
            <li>
              Paige, J. B., & Morin, K. H. (2016). Q-Sample Construction: A Critical Step for a Q-Methodological Study. <em>Western Journal of Nursing Research</em>, <em>38</em>(1), 96-110. <a href="https://doi.org/10.1177/0193945914545177" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand)" }}>https://doi.org/10.1177/0193945914545177</a>
            </li>
            <li>
              Ramlo, S. E. (2025). Integrated Data Collection in Q Methodology: Using ChatGPT From Concourse to Q-sample to Q-sort. <em>Journal of Mixed Methods Research</em>, <em>19</em>(2), 191–205. <a href="https://doi.org/10.1177/15586898241262824" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand)" }}>https://doi.org/10.1177/15586898241262824</a>
            </li>
            <li>
              Watts, S., & Stenner, P. (2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications Ltd. <a href="https://doi.org/10.4135/9781446251911" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand)" }}>https://doi.org/10.4135/9781446251911</a>
            </li>
          </ul>
        </section>

        <div
          className="pt-8 mt-12 flex items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <Link href="/lessons/5-3" className="text-sm-medium" style={{ color: "var(--brand)" }}>
            ← 5-3. concourse 수집
          </Link>
          <Link href="/lessons/5-5" className="text-sm-medium" style={{ color: "var(--brand)" }}>
            5-5. P-set 선정 →
          </Link>
        </div>
      </section>
    </div>
  );
}
