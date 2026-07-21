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
  title: "5-8. Q 연구를 논문으로 옮기는 흐름 | Q방법론 온라인 강의",
  description: "Q분석 결과를 학술 논문의 논증 구조(서론-방법-결과-논의)로 전환하고, 20개 항목 보고 체크리스트로 최종 점검하는 방법을 배웁니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "분석결과가 곧 논문은 아니다",
    keyMessage: "Q 분석 소프트웨어가 산출한 요인적재치, Z점수, 요인배열은 연구의 원재료이지 완성된 논문이 아닙니다. 분석은 관점을 구별했지만, 논문은 그 관점을 독자가 따라갈 수 있도록 기술해야 합니다.",
    shortDescription: "통계 출력물을 그대로 붙여 넣은 원고는 독자에게 연구자의 판단 경로를 보여주지 못합니다. 연구질문에서 연구설계, 분석, 해석, 시사점으로 이어지는 논증의 사슬을 만드는 것이 논문 작성의 본질입니다.",
    points: [
      "분석 소프트웨어의 출력 화면은 연구의 중간 산출물이며, 논문은 그 산출물에 맥락과 논증을 입히는 별도의 작업입니다.",
      "독자는 연구자의 분석 소프트웨어를 함께 열어보지 않았으므로, 연구자가 거친 모든 판단의 근거를 글로 보여주어야 합니다.",
      "좋은 Q 논문의 기준은 요인을 발견했다는 사실의 나열이 아니라, 연구질문에서 시사점까지 이어지는 판단 경로의 투명성입니다.",
    ],
  },
  {
    num: 2,
    title: "연구과정을 방법 절의 근거로 바꾼다",
    keyMessage: "논문의 방법 절은 \"Q방법론을 실시하였다\"라는 한 문장으로 끝나는 곳이 아닙니다. 연구자가 각 단계에서 내린 선택과 그 판단의 근거를 투명하게 기록하는 곳입니다.",
    shortDescription: "Q-set 구성, P-set 선정, 추출·회전·요인 수 결정의 각 단계에서 연구자가 왜 그 선택을 했는지를 밝혀야 합니다. 최종 진술문 수만 적는 것이 아니라, 원자료가 최종 Q-set으로 바뀐 판단 경로를 압축하여 제시합니다.",
    points: [
      "콘코스의 출처, Q표본 구성 방식(구조적/비구조적), 진술문 수와 형태, 예비 조사 결과를 빠짐없이 보고합니다.",
      "참여자 선정 전략과 그 근거, 참여자 수, 분류 격자의 형태와 분포 유형, 평정 지시 조건을 구체적으로 명시합니다.",
      "요인 추출법, 회전법, 소프트웨어 이름과 버전, 요인 수 결정에 사용한 복합 기준을 한 줄도 빠뜨리지 않고 기술합니다.",
    ],
  },
  {
    num: 3,
    title: "요인해를 결과 절의 구조로 바꾼다",
    keyMessage: "결과 절은 요인 수와 설명분산만 보고하는 곳이 아닙니다. 요인적재치, 요인배열, 구분진술문, 합의진술문을 체계적으로 배치하여 독자가 분석의 전체 구조를 파악할 수 있게 만드는 곳입니다.",
    shortDescription: "결과 절은 먼저 전체 요인해의 윤곽(요인 수, 설명분산, 요인 간 상관)을 보여주고, 이어서 각 유형의 요인배열을 제시하며, 마지막으로 구분·합의진술문으로 유형 간의 갈림길과 교차점을 드러냅니다.",
    points: [
      "먼저 \"큰 그림\"을 보여줍니다: 최종 요인 수, 각 요인의 고유값과 설명분산, 요인정의 Q분류의 수, 요인 간 상관계수.",
      "각 요인의 요인배열(Factor Array) 전체를 표로 제시하여, 독자가 연구자와 같은 자료를 바라볼 수 있게 합니다.",
      "구분진술문과 합의진술문을 별도로 정리하여, 유형 간에 무엇이 갈라지고 무엇이 공유되는지를 명확히 합니다.",
    ],
  },
  {
    num: 4,
    title: "숫자·진술문·인용문을 하나의 유형 서사로 묶는다",
    keyMessage: "유형 서사(Factor Narrative)는 극단 진술문 몇 개를 나열한 요약이 아닙니다. 요인배열 전체의 구성적 논리를 크립시트(Crib Sheet)로 읽어내고, 참여자의 사후 인터뷰 목소리를 결합하여 하나의 일관된 관점 이야기를 직조하는 작업입니다.",
    shortDescription: "요인배열은 분석 산출물이고, 크립시트는 해석 작업도구이며, 유형 서사는 논문에 제시되는 결과이고, 유형명은 판단 논리를 압축한 제목입니다. 이 네 가지의 관계를 정확히 이해해야 합니다.",
    points: [
      "양극단(+4/-4 등)의 진술문을 개별적으로 읽지 않고, 상호 대조 관계 속에서 관점의 핵심 가치 준거를 파악합니다.",
      "구분진술문으로 유형 간 갈림길을 확인하고, 합의진술문으로 공통 출발점을 찾으며, 사후 인터뷰 인용으로 Z점수 뒤의 맥락을 복원합니다.",
      "유형명은 '소극형'이나 '긍정형'처럼 인격을 규정하는 낙인이 아니라, 그 관점이 지향하는 판단 논리를 직관적으로 전달하는 제목이어야 합니다.",
    ],
  },
  {
    num: 5,
    title: "유형 비교를 이론·정책·실천적 논의로 확장한다",
    keyMessage: "논의(Discussion) 절은 유형별 특징을 반복하는 곳이 아닙니다. 유형 간 비교를 통해 기존 이론과 대화하고, 각 관점에 적합한 정책도구, 의사소통 방식, 참여 구조를 제안하는 곳입니다.",
    shortDescription: "결과 절에서 유형별 서사를 완성한 뒤, 논의 절에서는 유형 간의 공통점과 차이를 이론적 틀 위에 올려놓고, 각 관점이 실천적으로 어떤 정책적·조직적 함의를 갖는지로 확장합니다.",
    points: [
      "유형 서사를 나란히 놓고, 합의진술문에서 공통 가치를 확인하며, 구분진술문에서 핵심 갈림길을 식별합니다.",
      "도출된 관점 구조를 기존 이론(정책 수용성, 갈등 관리, 조직행동, 위험 인식 등)과 대화하여 이론적 기여를 밝힙니다.",
      "각 관점에는 어떤 정책도구, 의사소통 방식, 참여 구조 또는 의사결정 설계가 적합한지를 구체적으로 제안합니다.",
    ],
  },
  {
    num: 6,
    title: "표·부록·분석기록으로 판단 경로를 남긴다",
    keyMessage: "좋은 연구도 보고가 부족하면 평가할 수 없습니다. 요인배열, 적재치, 구분·합의진술문, 분석 설정과 소프트웨어 정보를 체계적으로 기록하여, 독자와 심사자가 연구자의 분석과 해석 경로를 처음부터 끝까지 따라갈 수 있게 만들어야 합니다.",
    shortDescription: "투고 전 마지막 점검에서는 Dieteren(2023)의 20개 항목과 Churruca(2021)의 13개 항목 체크리스트를 대조하여, 빠진 정보가 없는지 확인합니다. 분석 코드, 원자료, 결과표를 재현 가능하게 보존하는 것도 투명성의 일부입니다.",
    points: [
      "본문에 담기 어려운 전체 요인배열 표, 전체 요인적재치 행렬, 원자료의 코드북은 부록이나 보충 자료(Supplementary Materials)로 제공합니다.",
      "분석 소프트웨어의 이름, 버전, 사용한 패키지를 정확히 기록하여 다른 연구자가 동일한 분석 환경에서 결과를 재현할 수 있도록 합니다.",
      "투고 전 보고 체크리스트를 돌려 빠진 항목을 확인하고, 누락된 정보는 본문 또는 부록에 보완합니다.",
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
        <p className="mb-3" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--gray-800)" }}>
          {keyMessage}
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-655)" }}>
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
            여러분이 지금까지 거쳐온 Q 연구의 여정을 잠시 되짚어 봅시다. 연구질문을 설정하고, 콘코스(Concourse)를 수집하여 Q표본(Q Sample)을 구성하고, P표본(P Sample)을 선정하여 Q분류(Q-sort)를 시행하고, 요인을 추출하고 회전하여 요인배열(Factor Array)을 산출하고, 크립시트를 활용해 해석의 윤곽을 잡았습니다. 이 모든 과정의 결과물이 분석 소프트웨어의 출력 창에 정리되어 있습니다.
          </p>
          <p>
            그런데 이 출력물을 논문 파일에 그대로 옮기면, 독자에게는 맥락 없는 숫자의 나열로 보일 수밖에 없습니다. Ramlo(2025)가 설명하듯이 Q방법론은 관점을 구별하는 것과 기술하는 것을 동시에 수행하는 방법입니다. 분석은 &apos;구별&apos;의 역할을 완수했지만, 논문은 &apos;기술&apos;의 역할까지 해내야 합니다. 연구자가 왜 이 연구질문을 던졌는지, 왜 이 추출법과 회전법을 선택했는지, 왜 3요인이 아닌 4요인 해를 최종 채택했는지, 각 유형이 어떤 판단 논리를 공유하는지를 독자가 따라갈 수 있게 서술해야 비로소 한 편의 학술 논문이 됩니다.
          </p>
          <p>
            여기서 핵심은 논문이 분석 보고서가 아니라 <strong>논증 문서</strong>라는 점입니다. McKeown과 Thomas(2013)가 설명하듯 Q 논문은 통계분석 보고서가 아니라 주관성(Subjectivity)의 구조를 설명하는 논문입니다. 통계는 그 설명을 뒷받침하는 뼈대이지, 설명 자체가 아닙니다.
          </p>
          <p>
            이번 강의의 나머지 다섯 장의 카드에서는 이 전환 과정을 구체적으로 살펴보겠습니다. 연구설계의 흔적을 방법 절의 근거로 바꾸고, 요인해를 결과 절의 구조로 전환하고, 숫자와 진술문과 인용문을 하나의 유형 서사로 묶고, 유형 간 비교를 이론적·정책적 논의로 확장하고, 마지막으로 표와 부록과 분석 기록으로 판단 경로를 투명하게 남기는 것이 전체 흐름입니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            많은 초보 연구자들이 방법 절을 가볍게 다루는 경향이 있습니다. &quot;Q방법론(Watts &amp; Stenner, 2012)을 사용하여 40개 진술문으로 Q표본을 구성하고 30명의 참여자에게 Q분류를 시행하였다&quot;와 같은 서술로 충분하다고 생각하기 쉽습니다. 그러나 이 한 문장으로는 독자가 연구의 판단 경로를 따라갈 수 없습니다.
          </p>
          <p>
            Dieteren 등(2023)의 613편 체계적 문헌 고찰에 따르면, 약 50%의 논문이 Q-set 개발 동기를 명시하지 않았고, 25.6%가 요인 추출법을, 20.4%가 회전 방식을 보고하지 않았습니다. 이러한 정보가 빠지면 독자는 연구자가 왜 그런 결과에 도달했는지 판단할 수 없고, 다른 연구자가 이 결과를 재현하거나 비교 평가할 수도 없습니다.
          </p>
          <p>
            Jedlicska 등(2026)은 인터뷰 자료에서 Q표본을 만드는 과정을 7단계로 정리하면서, 주제·하위주제 도출, 개념지도(Concept Mapping) 작성, 진술문 선택, 표현 수정, 전문가 검토를 각 단계별로 구체적으로 기록하는 사례를 보여줍니다. 이 연구가 시사하는 바는 분명합니다. 논문 방법 절은 최종 진술문 수만 쓰는 곳이 아니라, <strong>원자료가 최종 Q-set으로 바뀐 판단 경로를 압축하여 제시하는 곳</strong>입니다.
          </p>
          <p>
            방법 절은 연구자가 &quot;무엇을 했는지&quot;뿐 아니라 <strong>&quot;왜 그렇게 했는지&quot;</strong>를 설명하는 곳입니다. &quot;Q방법론을 실시하였다&quot;는 사실의 선언이 아니라, 선택과 판단의 근거를 제시해야 합니다.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            방법 절에서 연구자의 판단 경로를 밝힌 뒤, 결과 절에서는 그 판단의 결과물을 독자에게 제시해야 합니다. 여기서 많은 초보 연구자들이 빠지는 함정은, 요인 수와 누적 설명분산만 보고하고 곧바로 유형 서사로 넘어가는 것입니다. Dieteren 등(2023)의 검토에 따르면, 요인배열(Factor Array) 전체를 보고한 논문은 65.7%에 불과했고, 구분진술문을 명시한 논문은 40.8%, 합의진술문은 24%에 그쳤습니다.
          </p>
          <p>
            결과 절의 구조는 크게 세 층으로 나뉩니다. 첫째는 전체 요인해의 윤곽입니다. 최종 요인 수, 각 요인의 고유값과 설명분산, 누적 설명분산, 요인정의 Q분류(Defining Q-sorts)의 수, 혼합적재(Confounded) Q분류의 수, 요인 간 상관계수를 표로 정리합니다. Watts와 Stenner(2012)는 누적 설명분산이 35~40% 이상이면 해석을 진행하기에 적절한 경험칙을 제시하지만, 이 수치 하나에 매달리기보다 요인 간 독립성과 해석가능성을 함께 판단해야 합니다.
          </p>
          <p>
            둘째는 각 요인의 요인배열입니다. Churruca 등(2021)은 요인배열 전체를 읽고, 가능한 한 많은 진술문과 참여자 자료를 포함하여 요인별 내러티브를 구축해야 한다고 권고합니다. 요인배열은 해당 요인이 지향하는 가장 이상화된 관점의 프로필이므로, 극단 진술문 몇 개만 뽑아 나열하는 것으로는 배열 전체의 구성적 논리를 전달할 수 없습니다.
          </p>
          <p>
            셋째는 구분진술문과 합의진술문입니다. 구분진술문(Distinguishing Statement)은 특정 요인에서만 통계적으로 유의하게 높거나 낮은 점수를 보이는 진술문으로, 유형 간의 인지적 갈림길을 폭로합니다. 합의진술문(Consensus Statement)은 모든 요인에서 통계적 차이가 유의하지 않은 진술문으로, 서로 다른 관점의 소유자들이 함께 동의하거나 거부하는 공통 지반을 드러냅니다.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            5-7강에서 이미 크립시트(Crib Sheet)를 활용한 해석의 기본 원리를 배웠습니다. 이번 카드에서는 그 해석을 논문에 제시할 유형 서사(Factor Narrative)로 전환하는 과정에 초점을 맞춥니다. 요인배열(Factor Array)은 분석 산출물이고, 크립시트(Crib Sheet)는 해석 작업도구이며, 유형 서사는 논문에 제시되는 결과이고, 유형명(Factor Title)은 판단 논리를 압축한 제목입니다. 이 네 가지 개념의 위계와 관계를 정확히 이해해야 합니다.
          </p>
          <p>
            유형 서사를 작성할 때 가장 경계해야 할 실수는, 양극단 진술문 몇 개만 뽑아 나열한 뒤 &quot;이 유형은 ○○를 중시하고 ××를 거부한다&quot;로 끝내는 것입니다. Churruca 등(2021)은 요인배열 전체의 구성을 읽고 가능한 한 많은 진술문과 참여자 자료를 포함한 서사를 구축해야 한다고 권고합니다.
          </p>
          <p>
            서사 작성의 실무적 순서는 양극단 진술문의 상호 대조, 구분진술문의 갈림길 식별, 합의진술문의 공통 지반 확인, 사후 인터뷰 인용의 맥락 복원, 그리고 유형명의 논리적 압축 순으로 진행됩니다. 유형명은 &apos;소극형&apos;처럼 인격을 재단하는 이름이 아니라, &apos;계획 준수보다 현장 유연성을 우선하는 실용주의&apos;처럼 판단 논리가 드러나는 명칭을 붙입니다.
          </p>
          <p>
            Lundberg와 de Leeuw(2024)는 고등교육 분야 Q 연구 9편을 종합하며, 참여자가 자신이 유의하게 적재된 요인배열을 직접 해석하는 참여적 요인해석(Participatory Factor Interpretation)의 가능성을 소개합니다. 이 접근은 해석의 타당성과 현장 활용성을 높일 수 있는 선택적 전략이지만, Q 연구의 필수 절차로 오해해서는 안 되며 연구자의 분석과 명확히 구분해야 합니다.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            많은 Q 논문의 논의 절이 결과 절의 반복으로 끝나는 경우가 있습니다. &quot;유형 1은 현장 자율성을 중시하고, 유형 2는 제도적 통제를 선호하며, 유형 3은 양자를 절충한다&quot;는 서술은 결과의 재진술이지 논의가 아닙니다.
          </p>
          <p>
            논의 절의 핵심 역할은 두 가지입니다. 첫째, 도출된 관점 구조를 기존 이론적 틀 위에 올려놓는 것입니다. 여러분이 발견한 유형들은 선행연구의 어떤 이론적 개념과 대응되는가? 기존 연구에서 예측하지 못한 새로운 관점이 드러났는가? 유형 간의 긴장은 어떤 이론적 차원에서 설명될 수 있는가? 이런 질문에 답하는 것이 이론적 논의입니다.
          </p>
          <p>
            둘째, 유형별 특징을 실천적 시사점으로 연결하는 것입니다. van Oortmerssen 등(2025)은 조직행동 분야 Q 연구 47편을 검토하면서, Q방법론이 단순한 관점 분류에 그치지 않고 조직진단, 변화관리, 인적자원관리와 같은 연구·개입 도구(Research and Intervention Tool)로 활용될 수 있음을 보여줍니다. 이 연구가 시사하는 바는 특히 소방, 재난, 정책, 교육과 같은 실천 지향적 분야에서 강력합니다.
          </p>
          <p>
            결론과 시사점에서는 연구의 한계도 솔직하게 밝혀야 합니다. P표본(P Sample)은 통계적 대표성을 위한 표본이 아니므로 결과를 모집단으로 일반화할 수 없다는 점, 도출된 유형은 특정 시점·특정 연구질문·특정 맥락에서의 관점 구조라는 점, 인과관계를 주장하지 않는다는 점을 분명히 해야 합니다.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Morea와 Ghanbar(2024)는 응용언어학 분야 Q 연구 55편을 검토한 결과, 요인 추출 기준의 34%, 회전 기준의 20%, 혼합적재(Confounded Q-sorts) 처리 방식의 37%가 미보고였음을 확인했습니다. 이 문제의 근본 원인은 연구의 질이 아니라, 논문에 무엇을 보고해야 하는지에 대한 체계적 점검이 부족하다는 데 있습니다.
          </p>
          <p>
            본문에 반드시 포함해야 할 결과 보고 요소 여섯 가지는 요인별 설명분산과 요인적재자, 요인배열, 극단 진술문, 구분진술문, 합의진술문, 사후 인터뷰 또는 참여자 설명입니다. 여기서 핵심은 이 여섯 요소를 단순히 나열하는 것이 아니라, 이 자료들이 어떻게 하나의 관점 논리를 증명하는가를 보여주는 것입니다.
          </p>
          <p>
            본문에 담기 어려운 상세 자료는 부록이나 온라인 보충 자료(Supplementary Materials)로 제공합니다. 전체 요인적재치 행렬, 전체 요인배열 격자표, Q-set 원문 목록, 코드북이 대표적입니다.
          </p>
          <p>
            Zabala(2014)의 R `qmethod` 패키지와 같은 도구를 사용했다면, 분석 코드와 데이터 파일을 함께 보존하여 다른 연구자가 동일한 분석 환경에서 결과를 재현할 수 있도록 하는 것이 바람직합니다. 분석 설정, 결과표, 그림, 원자료를 논문과 함께 보존하는 것은 투명성을 넘어 학술적 책무의 문제입니다.
          </p>

          <div style={{ marginTop: "24px", padding: "16px", borderRadius: "8px", border: "1px solid var(--gray-200)", backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
            <h4 style={{ fontWeight: 600, fontSize: "14px", color: "var(--black)", marginBottom: "12px" }}>💡 [보고 기준 체크리스트] 투고 전 점검용 전문</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <details style={{ cursor: "pointer", borderBottom: "1px solid var(--gray-200)", paddingBottom: "10px" }}>
                <summary style={{ fontWeight: 600, fontSize: "14px", color: "var(--gray-800)", padding: "4px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>1. Dieteren 등 (2023)의 20개 항목 보고 체크리스트</span>
                  <span style={{ fontSize: "10px", color: "var(--gray-400)" }}>▼ 클릭하여 펼치기</span>
                </summary>
                <div style={{ paddingTop: "10px", paddingLeft: "10px", fontSize: "13px", color: "var(--gray-700)", lineHeight: 1.6 }}>
                  <div style={{ marginBottom: "12px" }}>
                    <strong style={{ color: "var(--black)" }}>연구 설계 (Research Design)</strong>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "4px" }}>
                      <li>① Concourse(담론)의 수집 출처 명시</li>
                      <li>② Q표본(Q-set)의 표집 설계 방식(구조적 vs. 비구조적) 및 그 이론적 근거</li>
                      <li>③ 항목의 유형(언어 진술문, 시각 자료 등)</li>
                      <li>④ 최종 Q-set 진술문 수</li>
                      <li>⑤ 파일럿 테스트(예비 조사)의 목적과 결과 보고</li>
                    </ul>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <strong style={{ color: "var(--black)" }}>자료 수집 (Data Collection)</strong>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "4px" }}>
                      <li>⑥ P표본(P-set) 선정 방식(표집 전략 및 근거)</li>
                      <li>⑦ 참여자 수(P-set 규모) 및 그 선정 이유</li>
                      <li>⑧ 인터뷰 방식(개인 인터뷰, 집단 인터뷰 등)</li>
                      <li>⑨ 인터뷰 유형(대면, 온라인, 우편 등)</li>
                      <li>⑩ Q-sort 평정 지시(Condition of Instruction): 질문 문구, 구두·문서 지시 여부, 사전 분류, 이유 설명 요청 여부</li>
                      <li>⑪ Q분류 격자: 평정 조건(예: 동의·중요도), 척도 범위, 격자 형태, 강제·자유분포 여부</li>
                    </ul>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <strong style={{ color: "var(--black)" }}>자료 분석 (Data Analysis)</strong>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "4px" }}>
                      <li>⑫ 요인분석 통계 기법(요인 추출법 및 요인 회전법)</li>
                      <li>⑬ 최종 요인 수를 결정한 명확한 통계적·이론적 기준</li>
                      <li>⑭ 양극 요인(Bipolar Factors)의 처리 방식과 그 근거</li>
                      <li>⑮ 요인 해석 방법: 정량·정성 자료의 결합, 구분·합의진술문의 활용(사후 인터뷰를 사용했다면 그 활용 방식)</li>
                      <li>⑯ 분석에 사용한 통계 소프트웨어 프로그램 및 버전 정보</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ color: "var(--black)" }}>결과 제시 (Results Presentation)</strong>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "4px" }}>
                      <li>⑰ 요인해(Factor Solution)의 상세: 요인 수, 고유값, 공통성, 설명분산, 요인 간 상관, 요인적재치, 요인별 유의 적재자 수</li>
                      <li>⑱ 전체 요인배열(Factor Array) 격자 위치 또는 진술문별 표준화 점수(Z-score)</li>
                      <li>⑲ 통계적으로 유의미한 구분진술문(Distinguishing) 및 합의진술문(Consensus) 명시</li>
                      <li>⑳ 각 요인별 관점의 논리를 담은 완성도 높은 서사적 설명(Factor Narrative)</li>
                    </ul>
                  </div>
                </div>
              </details>
              
              <details style={{ cursor: "pointer", borderBottom: "1px solid var(--gray-200)", paddingBottom: "10px" }}>
                <summary style={{ fontWeight: 600, fontSize: "14px", color: "var(--gray-800)", padding: "4px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>2. Churruca 등 (2021)의 13개 항목 보고 체크리스트</span>
                  <span style={{ fontSize: "10px", color: "var(--gray-400)" }}>▼ 클릭하여 펼치기</span>
                </summary>
                <div style={{ paddingTop: "10px", paddingLeft: "10px", fontSize: "13px", color: "var(--gray-700)", lineHeight: 1.6 }}>
                  <ol style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "4px" }}>Q 세트 진술문을 어떻게 수집했는지 (담론 도출 과정)</li>
                    <li style={{ marginBottom: "4px" }}>진술문을 어떻게 축소·정제해서 초안 및 최종 Q 세트를 만들었는지</li>
                    <li style={{ marginBottom: "4px" }}>최종 Q 세트의 진술문 수</li>
                    <li style={{ marginBottom: "4px" }}>예비 조사(Pilot Test) 실시 여부와 결과</li>
                    <li style={{ marginBottom: "4px" }}>Q 분류 과제에 사용된 자료 (평정 척도 및 닻 포함)</li>
                    <li style={{ marginBottom: "4px" }}>Q 분류 과제의 구체적인 실시 방법</li>
                    <li style={{ marginBottom: "4px" }}>Q 분류와 함께 사용한 다른 방법과 그 데이터의 활용 방식</li>
                    <li style={{ marginBottom: "4px" }}>요인 추출 및 회전 기법 명시</li>
                    <li style={{ marginBottom: "4px" }}>자료 수집·분석에 사용한 소프트웨어 정보</li>
                    <li style={{ marginBottom: "4px" }}>추출·회전·해석할 요인 수를 결정하는 데 사용한 정보와 통계치</li>
                    <li style={{ marginBottom: "4px" }}>요인 해법으로 설명된 분산(Variance Explained)의 양</li>
                    <li style={{ marginBottom: "4px" }}>요인 해석 과정 및 질적 해석 기법</li>
                    <li style={{ marginBottom: "4px" }}>각 요인이 나타내는 공유된 의미를 Q 세트 진술문과 참여자 인용으로 뒷받침하는 풍부한 서사</li>
                  </ol>
                </div>
              </details>
            </div>
          </div>
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
          { label: "5-8. Q 연구를 논문으로 옮기는 흐름" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-07-21"
        title="Q 연구를 논문으로 옮기는 흐름"
        description="Q분석 결과를 학술 논문의 논증 구조(서론-방법-결과-논의)로 전환하고, 20개 항목 보고 체크리스트로 최종 점검하는 방법을 배웁니다."
        imageSrc="/images/5-8-hero-from-analysis-to-manuscript.webp"
        imageAlt="5-8. Q 연구를 논문으로 옮기는 흐름 히어로 이미지"
      />

      <section className="mx-auto py-12 sm:py-16" style={{ maxWidth: "720px" }}>
        {cards.map((card) => (
          <LessonCard key={card.num} {...card} />
        ))}

        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
            참고문헌
          </h2>
          <ul className="space-y-3" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            <li>Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <i>BMC Medical Research Methodology</i>, <i>21</i>(1), 125. <a href="https://doi.org/10.1186/s12874-021-01309-7" className="hover:underline">https://doi.org/10.1186/s12874-021-01309-7</a></li>
            <li>Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <i>Social Sciences &amp; Humanities Open</i>, <i>7</i>(1), 100404. <a href="https://doi.org/10.1016/j.ssaho.2023.100404" className="hover:underline">https://doi.org/10.1016/j.ssaho.2023.100404</a></li>
            <li>Jedlicska, N., Lichtenberg, S., Berberat, P. O., &amp; Schick, K. (2026). How to design a Q-sample: A seven-step approach based on interview data. <i>GMS Journal for Medical Education</i>, <i>43</i>(1), Doc8. <a href="https://doi.org/10.3205/zma001802" className="hover:underline">https://doi.org/10.3205/zma001802</a></li>
            <li>Lundberg, A., &amp; de Leeuw, R. R. (2024). Introducing and discussing the virtual special issue on using Q methodology in higher education. <i>International Journal of Educational Research Open</i>, <i>6</i>, 100301. <a href="https://doi.org/10.1016/j.ijedro.2023.100301" className="hover:underline">https://doi.org/10.1016/j.ijedro.2023.100301</a></li>
            <li>McKeown, B., &amp; Thomas, D. B. (2013). <i>Q methodology</i> (2nd ed.). SAGE. <a href="https://doi.org/10.4135/9781483384412" className="hover:underline">https://doi.org/10.4135/9781483384412</a></li>
            <li>Morea, N., &amp; Ghanbar, H. (2024). Q methodology in applied linguistics: A systematic research synthesis. <i>System</i>, <i>120</i>, 103194. <a href="https://doi.org/10.1016/j.system.2023.103194" className="hover:underline">https://doi.org/10.1016/j.system.2023.103194</a></li>
            <li>Ramlo, S. E. (2025). <i>Examining subjectivity with Q methodology</i>. Routledge. <a href="https://doi.org/10.4324/9781003511984" className="hover:underline">https://doi.org/10.4324/9781003511984</a></li>
            <li>van Oortmerssen, L. A., Peeters, E. R., Kampermann, A., &amp; van Montfoort, I. (2025). The Q method as research and intervention tool in organizations: A systematic literature review. <i>Journal of Organizational Effectiveness: People and Performance</i>, <i>12</i>(5), 112–136. <a href="https://doi.org/10.1108/JOEPP-02-2024-0066" className="hover:underline">https://doi.org/10.1108/JOEPP-02-2024-0066</a></li>
            <li>Watts, S., &amp; Stenner, P. (2012). <i>Doing Q methodological research: Theory, method and interpretation</i>. SAGE. <a href="https://doi.org/10.4135/9781446251911" className="hover:underline">https://doi.org/10.4135/9781446251911</a></li>
            <li>Zabala, A. (2014). qmethod: A package to explore human perspectives using Q methodology. <i>The R Journal</i>, <i>6</i>(2), 163–173. <a href="https://doi.org/10.32614/RJ-2014-032" className="hover:underline">https://doi.org/10.32614/RJ-2014-032</a></li>
          </ul>
        </section>

        <div
          className="pt-8 mt-12 flex items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <Link href="/lessons/5-7" className="text-sm" style={{ color: "var(--gray-400)" }}>
            ← 5-7. 요인분석에서 해석까지의 흐름
          </Link>
        </div>
      </section>
    </div>
  );
}
