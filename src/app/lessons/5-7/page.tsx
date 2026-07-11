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
  title: "5-7. 요인분석에서 해석까지의 흐름 | Q방법론 온라인 강의",
  description: "Q분류의 유사성이 어떻게 후보 요인, 요인배열, 그리고 공유된 관점의 해석으로 이어지는지 살펴봅니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "Q분류가 분석자료가 되는 순간",
    keyMessage: "Q방법론은 개별 진술문 문항을 쪼개어 분석하지 않고, 참여자가 진술문 전체를 배치하여 완성한 Q분류 패턴 자체를 상관시킵니다.",
    shortDescription: "입력 자료의 누락과 오탈자를 꼼꼼히 점검한 뒤, 한 참여자의 Q분류 배열 전체가 다른 참여자의 배열과 얼마나 유사한지 계산합니다. 이 사람 간 상관행렬은 주관성 구조를 탐색하는 분석의 출발점입니다.",
    points: [
      "계산을 시작하기 전, 자료의 점수 분포 오류나 진술문 번호 누락을 철저히 점검합니다.",
      "분석의 기본 단위는 분절된 문항 점수가 아닌, 한 사람이 완성한 전체적인 Q분류 패턴입니다.",
      "사람 간 상관은 두 사람이 특정 주제의 의미 세계를 얼마나 유사한 질서로 구성했는지를 보여줍니다."
    ],
  },
  {
    num: 2,
    title: "요인은 어떻게 처음 추출되는가",
    keyMessage: "요인추출은 최종 분석 결과를 확정 짓는 단계가 아니라, 참여자들의 상관관계 속에 묻혀 있는 잠재적 관점의 후보 축들을 계산해내는 작업입니다.",
    shortDescription: "Q방법론에서 전통적으로 사랑받아온 센트로이드 요인분석(Centroid Factor Analysis)과 현대 분석에서 자주 쓰이는 주성분분석(PCA)은 서로 다른 계산 철학을 가집니다. 절대적 우열을 가리기보다 연구의 맥락에 맞게 선택하고 이를 논문에 밝혀야 합니다.",
    points: [
      "주성분분석은 자료의 전체 분산을 가장 효율적으로 요약해내는 명확하고 단일한 수학적 해를 도출합니다.",
      "센트로이드 요인분석은 단일한 통계적 정답에 안주하기보다 연구자의 질적 탐색과 이론적 회전 여지를 넓게 열어두는 Q의 고전적 방식입니다.",
      "어떤 추출법과 알고리즘을 사용했는지, 그리고 그 선택의 이유와 분석 소프트웨어를 투명하게 밝히는 것이 보고 기준의 핵심입니다."
    ],
  },
  {
    num: 3,
    title: "몇 개의 요인을 남길 것인가",
    keyMessage: "최종 분석에 남겨둘 요인의 개수는 단 하나의 고유값 수치로 기계적으로 정하지 않고, 여러 통계적 기준과 질적인 해석가능성을 종합적으로 조율하여 결정합니다.",
    shortDescription: "고유값 1 이상 기준을 시작으로 Humphrey의 법칙, 요인별 유의적재 Q분류의 수, 그리고 해당 요인이 학술적으로 명료하게 해석되는지를 다각도로 대조하며 최선의 요인 수를 선택합니다.",
    points: [
      "고유값 1 이상(Kaiser Rule) 기준은 의사결정의 편리한 참고치일 뿐, 단독 판정관으로 절대화해서는 안 됩니다.",
      "각 요인을 흔들림 없이 대표해줄 수 있는 독립적인 요인정의 Q분류가 충분히 확보되는지 점검합니다.",
      "통계적 안정성을 방어할 수 있으면서도 연구질문의 본질을 가장 잘 드러내 주는 '최소한의 의미 있는 요인해'를 추구합니다."
    ],
  },
  {
    num: 4,
    title: "회전은 왜 필요한가",
    keyMessage: "요인회전은 자료 자체를 변형시키는 것이 아니라, 이미 추출된 관점의 축들을 연구자가 더 명료하게 읽어내고 정당화할 수 있도록 시각 각도를 조정하는 작업입니다.",
    shortDescription: "통계적 단순성을 기계적으로 극대화하는 베리맥스(Varimax) 회전과, 특정한 가설이나 이론적 기대를 탐색하는 수동·이론적 회전 중 연구 목적에 부합하는 방식을 주체적으로 선택해야 합니다.",
    points: [
      "회전은 요인의 구조적 분산 값을 바꾸거나 참여자의 Q분류를 왜곡하지 않고, 축을 회전하여 바라보는 렌즈만 바꿉니다.",
      "베리맥스는 분석의 자동화와 객관적 재현성에 유리하고, 이론적 회전은 연구자의 직관과 이론적 귀추를 실현하기 좋습니다.",
      "어떤 회전 기법을 선택하느냐에 따라 최종 요인 Z점수와 변별 진술문이 달라져, 해석의 이야기 자체가 완전히 바뀔 수 있습니다."
    ],
  },
  {
    num: 5,
    title: "누가 요인을 정의하는가",
    keyMessage: "요인은 참여자 전체의 획일적인 평균값이 아니며, 유의도 기준을 충족하고 한 관점을 가장 명료하게 대변하는 요인정의 Q분류(Defining Q-sorts)들의 가중 결합으로 계산됩니다.",
    shortDescription: "회전 후 도출된 요인적재치를 바탕으로, 어떤 참여자가 해당 요인의 관점을 순수하게 대변하는지, 혹은 여러 관점이 혼재되어 있는지 구별해 낸 뒤 이상화된 요인배열을 도출합니다.",
    points: [
      "요인적재치는 한 참여자의 Q분류 배열이 해당 요인의 관점 구조와 얼마나 일치하는지 보여주는 상관의 척도입니다.",
      "진술문 문항 수에 기반한 통계적 유의도 한계치 공식을 적용하여 요인을 대변할 핵심 참여자들을 엄밀하게 플래그합니다.",
      "최종 생성되는 요인배열은 단순한 산술 평균이 아니라, 적재 가중치가 반영된 이상적인 표준 Q분류 패턴입니다."
    ],
  },
  {
    num: 6,
    title: "숫자가 관점의 이야기로 바뀌는 과정",
    keyMessage: "요인 해석은 양 끝자리에 놓인 극단 진술문 몇 개만을 따와 성급하게 유형의 이름을 붙이는 단순 요약 작업이 아닙니다. 요인배열 전체의 유기적 상관관계와 참여자의 질적 인터뷰 목소리를 결합하여 생각의 논리적 서사를 만들어가는 과정입니다.",
    shortDescription: "요인배열상 극단 진술문의 배치 논리, 통계적 구분진술문(Distinguishing Statement)의 차별점, 관점들이 교차하는 합의진술문(Consensus Statement)의 합치 지점, 그리고 참여자들의 생생한 사후 목소리를 엮어 하나의 일관되고 풍성한 관점 서사를 입증해 냅니다.",
    points: [
      "양극단(+4/-4)에 배치된 진술문들의 상대적 대조 관계를 통해 관점의 우선순위와 거부 지점을 포착합니다.",
      "구분진술문은 요인 간의 차별적 갈림길을 폭로하며, 합의진술문은 공유된 공통의 신념과 시작점을 증명합니다.",
      "유형의 명칭은 소극형·적극형 같은 성격 묘사형 수식어를 지양하고, 관점이 지향하는 생각의 판단 논리를 압축해야 합니다."
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
}:(typeof cards)[number]) {
  return(
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

      {imageSrc && imageAlt ?(
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
        {points.map((point, index) =>(
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

  switch(num) {
    case 1:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            참여자들의 Q분류가 완료되면 연구자는 설레는 마음으로 컴퓨터 앞의 분석 소프트웨어를 켜게 됩니다. 
            그러나 분석의 첫 단추는 요인분석 버튼을 누르는 것이 아니라, 철저한 <strong>자료 점검</strong>입니다. 
            참여자가 카드를 배치하는 과정에서 혹시 진술문 번호를 잘못 받아 적지는 않았는지, 특정 등급에 배치된 진술문 카드의 개수가 분포 규칙에 맞는지, 빠진 번호는 없는지 확인해야 합니다. 
            만약 이 단계에서 숫자가 꼬이게 되면, 프로그램은 아무런 경고 없이 그릇된 데이터에 기반한 그럴듯한 결과를 뱉어내고 말 것입니다.
          </p>
          <p>
            자료의 신뢰성이 확인되면, 각 참여자의 배열은 하나의 행 또는 열로 시스템에 정렬됩니다. 
            이 순간 문항 중심의 양적 연구인 R방법론(R Methodology)과 주관성 연구인 Q방법론(Q Methodology)의 결정적인 시각 차이가 드러납니다. 
            우리는 &ldquo;진술문 1번 문항에 몇 명이 찬성했는가?&rdquo;라는 질문을 먼저 던지지 않습니다. 
            대신, &ldquo;참여자 A가 주어진 진술문들 사이의 관계를 어떠한 상대적 질서와 체계로 구조화했는가?&rdquo;를 하나의 완결된 전체로 바라봅니다.
          </p>
          <p>
            예를 들어, 두 참여자가 모두 &ldquo;현장의 자율성을 최우선으로 보장해야 한다&rdquo;는 진술문에 강하게 동의(+4)했다고 가정해 봅시다. 
            만약 이 문항 하나만 떼어놓고 본다면 두 사람은 동일한 의견을 가진 것처럼 보일 수 있습니다. 
            하지만 전체 Q분류를 뜯어보면, 첫 번째 참여자는 &lsquo;성과평가와 엄격한 사후 책임&rsquo;을 가장 반대(-4)하는 맥락에서 자율성을 지지한 반면, 
            두 번째 참여자는 &lsquo;체계적인 사전 계획과 중앙의 조율&rsquo;을 강력히 지지(+3)하면서도 실행상의 자율성을 요청한 것일 수 있습니다. 
            이처럼 단일 진술문에 대한 찬반 뒤에 숨겨진 구조적 맥락의 차이는 오직 Q분류 전체를 비교할 때만 포착할 수 있습니다.
          </p>
          <p>
            따라서 Q방법론은 참여자 상호 간의 상관계수를 계산하여 <strong>사람 간 상관행렬</strong>을 구합니다. 
            상관계수가 높다는 것은 두 참여자가 진술문들 간의 상대적인 우선순위를 매우 비슷하게 조직화했다는 뜻이며, 
            이는 그들이 동일한 관점을 공유하고 있을 가능성을 강력히 시사합니다. 
            여기서 우리는 Q요인이 한 인간의 변하지 않는 고정된 성격 유형이 아님을 기억해야 합니다. 
            그것은 <strong>특정 시점, 특정 연구 질문, 그리고 특정 지시 조건 아래에서 발현된, 두 Q분류 사이의 관계적 유사성</strong>을 통계로 포착한 결과물입니다.
          </p>
        </div>
      );
    case 2:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            상관행렬이 만들어지면 우리는 그 안에서 유사한 Q분류 패턴들을 설명해줄 수 있는 몇 가지 잠재적인 관점의 중심축들을 끌어올리게 됩니다. 
            이 단계를 <strong>요인추출(Factor Extraction)</strong>이라고 부릅니다. 
            여기서 명심해야 할 점은, 통계 패키지에서 추출되어 나온 초기 요인들이 곧바로 최종적인 연구 결과나 확정된 관점을 뜻하지 않는다는 사실입니다. 
            요인추출은 단지 자료 속에 내포된 잠재적 구조를 수면 위로 끄집어내는 첫 번째 수학적 탐색일 뿐이며, 
            이후의 요인 수 결정과 회전이라는 중요한 연구자의 의사결정 단계를 통과해야만 합니다.
          </p>
          <p>
            Q방법론의 역사에서 가장 지배적으로 사용되어 온 추출법은 주성분분석(Principal Component Analysis, PCA)과 센트로이드 요인분석(Centroid Factor Analysis) 두 가지입니다.
            주성분분석(PCA)은 상관행렬 내에 존재하는 총분산을 가장 크게 설명하는 첫 번째 주성분을 수학적으로 유도하고, 
            그다음 남아 있는 잔여 분산 중에서 두 번째로 큰 성분을 구하는 방식으로 연쇄 계산됩니다. 
            이 방법은 계산 규칙이 극히 명확하여 동일한 데이터와 설정 하에서는 연구자가 달라도 항상 단 한 가지의 동일한 수학적 결과만을 산출합니다. 
            그렇기 때문에 분석 과정을 표준화하고 연구의 재현가능성을 확보하는 데 대단히 유리합니다.
          </p>
          <p>
            반면, 센트로이드 요인분석은 윌리엄 스티븐슨이 Q방법론을 창시할 때부터 강조해온 역사 깊은 방식입니다. 
            센트로이드 방법은 상관행렬의 평균적인 관계적 중심(Centroid)을 구하여 요인을 추출하므로, 주성분분석처럼 단 하나의 절대적인 분산 극대화 해에 얽매이지 않습니다. 
            스티븐슨은 센트로이드 요인분석이 제공하는 이 통계적 유연성 덕분에, 연구자가 가설적인 탐색을 유도하고 이론적 회전으로 발전시킬 여지를 남긴다고 보았습니다.
          </p>
          <p>
            학술적으로 어떤 방법이 항상 절대적인 정답이라고 단정할 수는 없습니다. 
            Akhtar-Danesh(2017a)의 실증 비교 연구에 따르면, 실제 Q 데이터셋에서 주성분분석(PCA)과 주축요인추출(Principal Axis Factoring, PAF) 등의 진보된 공통요인추출 간의 결과 차이는 실무적으로 크지 않은 것으로 나타나기도 했습니다. 
            Guan(2025) 역시 주성분분석을 선택하더라도 연구의 질문과 성격에 맞추어 그 선택의 배경을 논리적으로 정당화할 수 있다면 방법론적으로 충분히 유효하다고 설명합니다.
          </p>
          <p>
            그러나 <strong>Banasick(2020)의 센트로이드 알고리즘 비교 연구</strong>에 따르면, 센트로이드 방법 내에서도 구체적인 계산 방식(Brown, Horst, Tucker–MacCallum 알고리즘)에 따라 초기 2~3개 요인 추출까지는 유사한 요인적재치를 산출하지만, 뒤쪽 요인으로 갈수록 서로 다르게 갈라지는 분기 현상을 보입니다. 
            심지어 Horst 알고리즘은 특정 참여자의 설명 분산이 100%를 초과하는 비정상적인 헤이우드 케이스를 유발하여 요인해 자체를 불안정하게 만들 수도 있습니다. 
            따라서 연구자는 구체적인 알고리즘과 소프트웨어 버전을 투명하게 밝혀야 합니다.
          </p>
        </div>
      );
    case 3:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            컴퓨터 프로그램은 우리에게 계산 가능한 모든 요인을 화면에 띄워줍니다. 
            그러나 통계적으로 산출된 모든 요인이 우리가 실제로 해석할 가치가 있는 것은 아닙니다.
            연구자는 불필요한 노이즈를 걷어내고 실제 작동하는 핵심 관점들만 남겨야 하는데, 이 중요한 의사결정 과정을 <strong>요인 수 결정(Factor Retention)</strong>이라고 부릅니다.
          </p>
          <p>
            가장 널리 알려진 전통적인 기준은 고유값(Eigenvalue)이 1.0 이상인 요인들만 남기는 카이저 규칙(Kaiser Rule)입니다. 
            고유값은 하나의 요인이 전체 Q분류 분산을 얼마나 많이 대변하고 있는지를 보여주는 정량적 지표입니다. 
            그러나 고유값이 1.0을 아주 살짝 넘겼다고 해서 그 요인이 항상 독창적이고 의미 있는 관점 서사를 담보하는 것은 아닙니다. 
            반대로 고유값이 0.95로 아깝게 기준을 미달했더라도, 현장에 실존하는 의미 있는 소수 담론을 선명하게 포착하고 있다면 그 요인을 성급하게 버리는 것은 연구의 질적 풍부함을 해치는 결정이 될 수 있습니다. 
            Mullen et al.(2022)의 실증 사례 역시, 통계적 수치로는 경계선에 걸쳐 있던 특정 요인을 요인 회전 후의 적재구조와 질적 해석가능성까지 신중히 검토한 뒤 최종 유지하여 연구의 가치를 높인 대표적인 경험적 증거를 제공합니다.
          </p>
          <p>
            우리는 Kaiser Rule 외에도, 한 요인을 흔들림 없이 정의해주는 요인정의 Q분류의 수, 요인의 통계적 안정성을 점검하는 Humphrey의 법칙, 
            여러 요인에 동시에 걸치는 혼합적재(Confounded Loading) 참여자의 비율, 그리고 연구 질문에 답하는 차별화된 관점 서사의 일관성을 다각도로 대조하여 최종 요인해를 정해야 합니다. 
            Banasick(2020)의 센트로이드 연구에서도 드러나듯이, Kaiser rule, Humphrey's rule 등 요인 유지 통계량 사이에 제안 수치가 일치하지 않거나, 
            Tucker-MacCallum의 &lsquo;Criterion L&rsquo; 지표가 수치적으로 명확히 하강하지 않아 요인 수 결정에 혼란을 주는 경우가 많습니다.
          </p>
          <p>
            실무 분석에서는 2요인 해, 3요인 해, 4요인 해를 순차적으로 모두 실행해 보고 나란히 펼쳐놓아 대조해볼 것을 권합니다. 
            요인 수가 너무 적으면 현장의 소수의 관점이 지배적인 거대 담론에 흡수되어 유실될 위험이 있고, 
            반대로 요인 수를 무리하게 늘리면 요인 간의 내용적 차별성이 모호해져 논문 작성 시 중복된 서술을 반복하게 만드는 악순환이 발생합니다. 
            결국 가장 훌륭한 요인해는 <strong>통계적 안정성을 방어할 수 있으면서도, 각 요인이 실제 참여자들의 생생한 데이터에 의해 단단히 지지되고, 
            연구의 본래 목적인 주관성의 다양성을 가장 선명하게 설명해내는 해</strong>입니다.
          </p>
        </div>
      );
    case 4:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            요인추출을 막 끝낸 직후의 요인축들은 데이터의 전체 분산을 수학적으로 설명하는 데 집중되어 있어, 
            어떤 참여자의 Q분류가 정확히 어떤 요인과 높은 정합성을 가지는지 파악하기 모호한 상태인 경우가 많습니다. 
            이때 요인축을 원점을 중심으로 회전시켜 일부 참여자는 요인 A에 가깝게, 다른 참여자는 요인 B에 선명하게 정렬되도록 격자 공간을 재배치하는 단계를 <strong>요인회전(Factor Rotation)</strong>이라고 합니다. 
            회전은 존재하지 않는 데이터를 조작하거나 참여자의 Q분류를 왜곡하지 않습니다. 3차원 공간 속의 물체를 더 선명하게 이해하기 위해 카메라의 각도를 돌리는 것과 같습니다.
          </p>
          <p>
            Q방법론 분석에서 컴퓨터 프로그램의 기본값으로 장착되어 널리 쓰이는 방식은 <strong>베리맥스 회전(Varimax Rotation)</strong>입니다. 
            베리맥스는 직교(Orthogonal) 회전 기법의 하나로, 각 참여자의 Q분류가 특정 요인에만 높은 적재치를 가지고 나머지 요인에는 아주 낮은 적재치를 갖도록 요인 적재값의 분산을 수학적으로 최대화해 줍니다. 
            계산 규칙이 정교하므로 누구나 동일한 기계적 단순 구조를 재현할 수 있다는 점이 큰 장점입니다.
          </p>
          <p>
            하지만 스티븐슨을 비롯한 고전 Q방법론 학자들은 연구자가 마우스로 요인 축을 직접 돌려가며 분석하는 <strong>수동·이론적 회전(Manual or Theoretical Rotation)</strong>을 고유한 학술적 전통으로 중시했습니다. 
            만약 연구자가 사전 문헌 검토를 통해 특정 참여자들이 정책의 수용성과 갈등 구도에서 완벽하게 상반된 관점을 대변할 것이라는 강한 이론적 기대를 품고 있다면, 
            그 두 참여자가 요인 평면상에서 완벽히 대립하도록 축의 각도를 수동으로 회전시켜 그 배후의 주관성 구조를 정교하게 탐색해 볼 수 있습니다.
          </p>
          <p>
            그러나 이 수동 회전은 연구자의 자의적 개입 가능성이라는 약점 때문에 학계 내에서 논쟁의 대상이 되어 왔습니다. 
            Akhtar-Danesh(2017b)는 뚜렷한 사전 가설이나 정량적 기준 없이 연구자가 원하는 예쁜 해석이 나올 때까지 임의로 축을 수동 회전시키는 관행은 분석의 객관성과 신뢰도를 심각하게 떨어뜨릴 수 있다고 강력히 경고합니다. 
            더욱이 Akhtar-Danesh(2023)의 실증 데이터 분석에 따르면, 서로 다른 회전법(Varimax, Quartimax 등)의 선택에 따라 요인별 <strong>구분진술문(Distinguishing Statement)의 구성과 구체적인 Z점수 순위는 유의미하게 달라짐</strong>이 입증되었습니다.
          </p>
          <p>
            예컨대 Quartimax 회전은 일반 요인을 잘 포착하게 해주어 제외되는 Q분류 수를 줄여주지만, 자칫 자료 내에 실제 존재하지 않는 허구적 공통 합의를 인위적으로 구축해낼 위험이나 변별 진술문 수를 축소시켜 질적 서사의 다채로움을 잃게 만들 수 있는 양날의 검을 쥐고 있습니다. 
            따라서 연구자는 어떤 회전 기법을 왜 적용했는지에 대한 과정을 논문에 성실히 밝혀야 합니다.
          </p>
        </div>
      );
    case 5:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            요인회전의 축이 고정되면, 프로그램은 각 참여자의 Q분류가 각각의 요인 축과 얼마나 밀접한 상관을 맺고 있는지 나타내는 <strong>요인적재치(Factor Loading)</strong> 값을 계산해 줍니다. 
            적재치 수치가 1.0에 가까울수록 해당 참여자가 배치한 Q분류 패턴이 그 요인이 대변하는 생각의 구조를 가장 완벽한 형태로 보여주고 있다는 뜻입니다. 
            여기서 높은 적재치는 그 참여자가 더 똑똑하거나 연구 질문에 더 모범적인 답을 내놓았다는 우열의 척도가 아닙니다. 
            단지 그 참여자의 Q분류가 해당 관점의 성격을 매우 깨끗하고 전형적으로 대변해 주고 있음을 수학적으로 표시해줄 뿐입니다.
          </p>
          <p>
            어떤 참여자를 요인의 소유자로 판정할 것인가에 대한 엄밀한 통계적 유의성 임계값을 구하기 위해, Q방법론 학계는 진술문 개수(N)를 대입하는 표준 오차 공식을 사용합니다. 
            {"p < .01 수준에서 유의미한 적재치 임계값은 "}
            <span className="mx-1 inline-flex align-middle text-[0.95em] leading-none" aria-label="2.58 나누기 N의 제곱근">
              <span className="flex flex-col items-center">
                <span className="border-b border-current px-1 pb-0.5">2.58</span>
                <span className="px-1 pt-0.5">√<span className="italic">N</span></span>
              </span>
            </span>
            {"이 되며, 이 수치를 기준으로 연구자는 참여자들을 "}<strong>요인정의 Q분류(Defining Q-sort)</strong>{", "}
            <strong>혼합적재 Q분류(Confounded Q-sort)</strong>{", "}<strong>비유의 Q분류(Non-significant Q-sort)</strong>{"로 판별해 냅니다."}
          </p>
          <p>
            여기서 혼합적재나 비유의 Q분류가 나타나면 이를 &lsquo;실패한 응답자&rsquo; 혹은 &lsquo;버려야 할 쓰레기 데이터&rsquo;로 오인하지 말아야 합니다. 
            혼합적재 참여자는 두 관점의 가치 체계를 동시에 이해하고 조율하려는 복합적 인식을 지닌 하이브리드 주체일 수 있으며, 비유의 참여자는 다수 집단이 포착해내지 못한 극히 독창적인 제3의 통찰을 지닌 인물일 수 있습니다. 
            다만, 특정 요인을 대변하는 &lsquo;이상화된 요인배열&rsquo;의 수학적 산출 공식상에서는 관점의 선명한 재구성을 위해 혼합적재와 비유의 대상들을 배제하고, 
            순수하게 해당 요인만을 명확하게 정당화하는 요인정의 Q분류들만을 계산에 포함시키는 것이 원칙입니다.
          </p>
          <p>
            요인정의 참여자들이 최종 확정되면, 그들의 적재치를 가중치로 환산하여 진술문별 가중평균 Z점수를 계산하고, 
            이 Z점수의 크기 순서대로 원래 참여자들에게 강제했던 격자판 모양과 동일한 점수 분포 구조에 진술문 번호들을 다시 채워 넣게 되는데, 
            이렇게 정렬된 이상적인 완성 격자 보드가 바로 <strong>요인배열</strong>입니다. 
            요인배열은 현실 세계 속 누군가의 실제 Q분류 보드가 아니며, 그 요인이 표현하고자 하는 <strong>&lsquo;가장 이상화된 생각의 프로필&rsquo;</strong>로 이해해야 합니다.
          </p>
        </div>
      );
    case 6:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            요인배열 격자판이 선명한 숫자와 함께 우리 앞에 완성되면, 우리는 마침내 통계 계산의 영역을 빠져나와 질적 해석의 단계로 진입하게 됩니다. 
            이 단계에서 수많은 초보 연구자들이 저지르는 결정적인 실수는 요인배열의 가장 양 끝(+4, -4 등)에 놓인 몇 개의 자극적인 진술문만 골라내어 짜깁기한 뒤 성급하게 유형 서술을 끝마치는 것입니다. 
            양 끝의 진술문들은 물론 매우 중요한 단서를 담고 있지만, 그것만으로는 해당 관점 내면의 깊은 생각의 질서를 전부 담아낼 수 없습니다.
          </p>
          <p>
            우리는 먼저 양극단의 진술문들을 개별적으로 해석하기보다, 상호 <strong>관계적 대조</strong> 속에서 읽어내야 합니다. 
            예를 들어, 어떤 관점이 &ldquo;사업 목적 예산의 유연한 활용&rdquo;을 가장 찬성(+4)하고 &ldquo;공식 지침의 일차적 준수&rdquo;를 가장 반대(-4)했다면, 이는 자율성 자체에 대한 단순한 애착이 아닙니다. 
            예측 불가능한 복잡한 재난 상황에서는 경직된 규정보다는 현장 적응적 실용주의를 우선해야 한다는 일관된 인과적 판단 논리를 갖고 있음을 보여주는 강력한 증거입니다.
          </p>
          <p>
            그다음, 통계적으로 유의미한 차이를 폭로해 주는 <strong>구분진술문</strong>을 추적하여 어떠한 인지적 갈림길에서 관점들이 갈라졌는지 파악하고, 
            모든 요인 사이에서 통계적 점수 차이가 유의미하게 나타나지 않은 <strong>합의진술문</strong>을 통해 
            갈등 당사자들이 그럼에도 불구하고 함께 동의하고 출발할 수 있는 사회적 가치 체계의 공통 분모나 정책적 시작점을 입증해 내야 합니다.
          </p>
          <p>
            이 모든 정량적 뼈대 위에 생명을 불어넣는 최종 작업은, 바로 연구 참여자들의 <strong>사후 인터뷰(Post-sort Interview)</strong>와 연구자가 수집한 질적 현장 메모를 연결하는 것입니다. 
            참여자들이 카드 분류 도중이나 마친 후에 들려준 맥락 정보는 Z점수 뒤에 가려져 있던 생각의 숨은 인과적 맥락과 정성적인 뉘앙스를 복원해 줍니다. 
            유형의 명칭 또한 &lsquo;소극형&rsquo;, &lsquo;비판형&rsquo;처럼 사람의 인격이나 성격을 규정해 버리는 듯한 이름은 피하고, 
            그 관점이 지향하는 생각의 준거틀과 정책적 판단 논리가 드러나는 명칭을 설정해야 합니다. 
            글을 쓸 때도 &ldquo;유형 1 집단에 속한 사람들은...&rdquo;이라는 주어보다는 <strong>&ldquo;유형 1 관점은...&rdquo;</strong> 혹은 <strong>&ldquo;유형 1이 대변하는 판단 논리는...&rdquo;</strong>과 같이 &lsquo;주관성의 구조&rsquo;를 주어로 삼아 기술하는 것이 방법론적으로 가장 정확하고 과학적인 보고 태도입니다.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function LessonPage() {
  return(
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "4부" },
          { label: "5-7. 요인분석에서 해석까지의 흐름" },
        ]}
        statusLabel="공개"
        versionLabel="v1.1 · 2026-07-11"
        title="요인분석에서 해석까지의 흐름"
        description="Q분류의 유사성이 어떻게 후보 요인, 요인배열, 그리고 공유된 관점의 해석으로 이어지는지 살펴봅니다."
        imageSrc="/images/5-7-hero-factor-analysis-to-interpretation.webp"
        imageAlt="5-7. 요인분석에서 해석까지의 흐름 히어로 이미지"
      />

      <section className="mx-auto py-12 sm:py-16" style={{ maxWidth: "720px" }}>
        {cards.map((card) =>(
          <LessonCard key={card.num} {...card} />
        ))}

        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
            참고문헌
          </h2>
          <ul className="space-y-3" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
            <li>Akhtar-Danesh, N.(2017a). A comparison between major factor extraction and factor rotation techniques in Q-methodology. <em>Open Journal of Applied Sciences, 7</em>(4), 147–156. <a href="https://doi.org/10.4236/ojapps.2017.74013" className="hover:underline">https://doi.org/10.4236/ojapps.2017.74013</a></li>
            <li>Akhtar-Danesh, N.(2017b). An overview of the statistical techniques in Q methodology: Is there a better way of doing Q analysis? <em>Operant Subjectivity, 38</em>(3/4). <a href="https://doi.org/10.22488/okstate.17.100553" className="hover:underline">https://doi.org/10.22488/okstate.17.100553</a></li>
            <li>Akhtar-Danesh, N.(2023). Impact of factor rotation on Q-methodology analysis. <em>PLOS ONE, 18</em>(9), e0290728. <a href="https://doi.org/10.1371/journal.pone.0290728" className="hover:underline">https://doi.org/10.1371/journal.pone.0290728</a></li>
            <li>Banasick, S.(2020). A comparison of centroid factor extraction methods for Q methodology. <em>Kobe College Studies, 67</em>(2), 1–17. <a href="https://doi.org/10.18878/00005671" className="hover:underline">https://doi.org/10.18878/00005671</a></li>
            <li>Brown, S. R.(1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. Yale University Press.</li>
            <li>Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J.(2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>, 125. <a href="https://doi.org/10.1186/s12874-021-01309-7" className="hover:underline">https://doi.org/10.1186/s12874-021-01309-7</a></li>
            <li>Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J.(2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>(1), 100404. <a href="https://doi.org/10.1016/j.ssaho.2023.100404" className="hover:underline">https://doi.org/10.1016/j.ssaho.2023.100404</a></li>
            <li>Guan, Z.(2025). Q as methodology: Theoretical underpinnings and key considerations in its practical applications in applied linguistics and TESOL research. <em>International Journal of TESOL Studies</em>. <a href="https://doi.org/10.58304/ijts.251001" className="hover:underline">https://doi.org/10.58304/ijts.251001</a></li>
            <li>McKeown, B., &amp; Thomas, D.(2013). <em>Q methodology</em>. SAGE Publications, Inc. <a href="https://doi.org/10.4135/9781483384412" className="hover:underline">https://doi.org/10.4135/9781483384412</a></li>
            <li>Morea, N., &amp; Ghanbar, H.(2024). Q methodology in applied linguistics: A systematic research synthesis. <em>System, 120</em>, 103194. <a href="https://doi.org/10.1016/j.system.2023.103194" className="hover:underline">https://doi.org/10.1016/j.system.2023.103194</a></li>
            <li>Mullen, R. F., Fleming, A., McMillan, L., &amp; Kydd, A.(2022). <em>Q methodology: Quantitative aspects of data analysis in a study of student nurse perceptions of dignity in care</em>. SAGE Research Methods Cases. <a href="https://doi.org/10.4135/9781529799705" className="hover:underline">https://doi.org/10.4135/9781529799705</a></li>
            <li>Ramlo, S.(2024). Q methodologist views on the future of Q: A study of a research community. <em>Quality &amp; Quantity, 58</em>(5), 4897–4914. <a href="https://doi.org/10.1007/s11135-024-01884-z" className="hover:underline">https://doi.org/10.1007/s11135-024-01884-z</a></li>
            <li>Stephenson, W.(1953). <em>The study of behavior: Q-technique and its methodology</em>. University of Chicago Press.</li>
            <li>Watts, S., &amp; Stenner, P.(2005). Doing Q methodology: Theory, method and interpretation. <em>Qualitative Research in Psychology, 2</em>(1), 67–91. <a href="https://doi.org/10.1191/1478088705qp022oa" className="hover:underline">https://doi.org/10.1191/1478088705qp022oa</a></li>
            <li>Watts, S., &amp; Stenner, P.(2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE. <a href="https://doi.org/10.4135/9781446251911" className="hover:underline">https://doi.org/10.4135/9781446251911</a></li>
            <li>Zabala, A.(2014). qmethod: A package to explore human perspectives using Q methodology. <em>The R Journal, 6</em>(2), 163. <a href="https://doi.org/10.32614/RJ-2014-032" className="hover:underline">https://doi.org/10.32614/RJ-2014-032</a></li>
            <li>Zabala, A., &amp; Pascual, U.(2016). Bootstrapping Q methodology to improve the understanding of human perspectives. <em>PLOS ONE, 11</em>(2), e0148087. <a href="https://doi.org/10.1371/journal.pone.0148087" className="hover:underline">https://doi.org/10.1371/journal.pone.0148087</a></li>
            <li>Zabala, A., Sandbrook, C., &amp; Mukherjee, N.(2018). When and how to use Q methodology to understand perspectives in conservation research. <em>Conservation Biology, 32</em>(5), 1185–1194. <a href="https://doi.org/10.1111/cobi.13123" className="hover:underline">https://doi.org/10.1111/cobi.13123</a></li>
          </ul>
        </section>

        <div
          className="pt-8 mt-12 flex items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <Link href="/lessons/5-6" className="text-sm font-medium hover:underline" style={{ color: "var(--brand)" }}>
            ← 5-6. Q-sort 시행
          </Link>
        </div>
      </section>
    </div>
  );
}
