import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "5-1. Q 연구의 전체 흐름 | Q방법론 온라인 강의",
  description:
    "Q방법론 연구 절차의 5단계(준비-설계-시행-분석-보고)가 유기적으로 연동되는 전체 흐름을 개괄적으로 살펴봅니다.",
};

const cards = [
  {
    num: 1,
    title: "Q 연구 절차의 직관적 파악",
    keyMessage:
      "Q 연구는 단방향 절차가 아니라, 연구문제에서 최종 보고서까지 의미가 순환하는 정교한 흐름도입니다.",
    shortDescription:
      "전체 Q 연구 파이프라인의 5개 영역을 조망하고, 각 단계가 어떻게 유기적으로 연결되는지 소개합니다.",
    points: [
      "준비(연구문제/concourse)에서 시작하여 설계, 시행, 분석, 보고로 이어지는 순환 과정.",
      "각 단계는 분절된 것이 아니라, 해석과 연구질문을 끊임없이 조율하는 연속적인 과정.",
      "전체 흐름의 시각화를 통해 이후 각론에서 다룰 세부 기술의 좌표를 미리 확인.",
    ],
  },
  {
    num: 2,
    title: "준비 단계: 연구문제와 concourse",
    keyMessage:
      "무엇을 묻는가에 따라 어떤 생각의 공간을 채울지 결정됩니다.",
    shortDescription:
      "연구주제 선정과 의견의 우주인 concourse 수집을 통해 Q 연구의 기반을 닦는 준비 단계를 설명합니다.",
    points: [
      "Q 연구주제는 복잡하고 사회적 논쟁이 있으며 주관적 의미 구조를 지닌 분야에 적합.",
      "concourse는 연구 주제에 관해 나눌 수 있는 모든 의견과 진술의 총합(의견의 우주).",
      "문헌 검토, 인터뷰, 미디어 자료 등 다양한 출처를 균형 있게 활용하여 편향 방지.",
    ],
  },
  {
    num: 3,
    title: "설계 단계: Q-set과 P-set",
    keyMessage:
      "진술문의 축소판과 참여자 다양성이 만나 주관성의 지도를 그립니다.",
    shortDescription:
      "concourse에서 추출한 Q-set(진술문군)과 의견을 대변할 P-set(참여자군)을 구성하는 설계 단계의 논리를 다룹니다.",
    points: [
      "Q-set은 concourse의 대표적 축소판으로, 보통 30~50개의 진술문으로 구성.",
      "P-set은 모집단 추정을 위한 대표 표본이 아니라, 다양한 관점을 나타낼 수 있는 의도적 표집.",
      "Q-set과 P-set의 상호 작용이 주관성의 차원들을 도출하는 분석의 토대가 됨.",
    ],
  },
  {
    num: 4,
    title: "수행 단계: Q-sort와 인터뷰",
    keyMessage:
      "참여자가 진술문을 직접 배열하면서 자기 주관성을 스스로 구조화합니다.",
    shortDescription:
      "강제분포 그리드 위에 Q-sort를 수행하고 사후 인터뷰를 통해 해석의 단서를 얻는 수행 단계입니다.",
    points: [
      "정해진 지시문에 따라 동의 더미, 비동의 더미, 중립 더미를 분류하고 그리드에 배치.",
      "준정규 분포 형태의 그리드에 카드를 채우는 강제분포를 통한 상대적 중요성 비교.",
      "양극단(+4, -4 등)에 카드를 놓은 이유를 묻는 사후 인터뷰는 단순 숫자를 넘어선 질적 해석의 핵심 열쇠.",
    ],
  },
  {
    num: 5,
    title: "분석 단계: 요인 추출과 회전",
    keyMessage:
      "개인의 정렬이 유사성에 따라 그룹화되어 공통의 관점(요인)을 드러냅니다.",
    shortDescription:
      "Q-sort 간 상관행렬을 구하고 요인 분석을 적용해 공통의 주관적 차원을 추출하는 분석 단계를 설명합니다.",
    points: [
      "R방법론과 달리 사람 간 상관(Q-sort 간 상관)을 분석하여 변수가 아닌 '사람 그룹'을 찾음.",
      "주성분분석(PCA) 또는 Centroid 추출을 거쳐 Varimax 회전 등으로 요인 축을 회전.",
      "설명분산, 고유값(Eigenvalue), 해석가능성 등을 종합하여 채택할 요인 수를 결정.",
    ],
  },
  {
    num: 6,
    title: "보고 단계: 해석과 재현성",
    keyMessage:
      "통계적 점수 뒤에 숨겨진 이야기와 절차적 투명성을 보고합니다.",
    shortDescription:
      "요인가(factor Q-sort value)와 구분진술문(distinguishing statements)을 토대로 유형별 서사를 구성하고 투명하게 보고하는 단계입니다.",
    points: [
      "Z-score로 환산된 요인별 이상적 배열과 사후 인터뷰를 결합하여 유형 명명 및 해석.",
      "학술지 투고 시 보고 체크리스트(Q-set 추출, P-set 정보, 요인결정 기준 등)를 준수하여 재현성 확보.",
      "Q방법론은 단순한 유형 분류를 넘어, 발견된 주관성의 구조를 사회과학적으로 설명하고 정책적/이론적 시사점으로 연결하는 기여 선언.",
    ],
  },
];

const checklist = [
  "전체 연구절차(준비-설계-수행-분석-보고)가 선형이 아닌 유기적 연동 관계로 머릿속에 잡혀 있는가?",
  "우리 연구의 주제가 주관성의 구조나 우선순위 분석에 부합하는 질문을 던지고 있는가?",
  "의견의 우주(concourse)를 한쪽으로 편향되지 않게 설계하고 표집할 계획이 있는가?",
  "참여자 구성(P-set)을 모집단 일반화가 아닌, 주관적 관점 다양성 확보 관점으로 선별했는가?",
  "Q-sorting 후 사후 인터뷰를 수행하여 해석의 질적 단서를 확보할 장치가 마련되어 있는가?",
];

const discussionQuestions = [
  "여러분의 연구 관심 주제를 Q 연구 절차의 5단계(준비-설계-수행-분석-보고)에 대입해 본다면, 각 단계에서 어떤 데이터나 문항이 나와야 할까요?",
  "의견의 우주인 concourse를 수집할 때 학술 문헌 조사와 실제 이해관계자 인터뷰의 비중을 어떻게 맞추는 것이 더 다채로운 진술을 확보하는 데 유리할까요?",
  "Q방법론의 소표본 설계(P-set)를 두고 '대표성 부족'을 지적하는 심사 위원들에게 어떻게 연구의 정합성과 과학적 타당성을 설명할 수 있을까요?",
];

interface LessonCardProps {
  num: number;
  title: string;
  keyMessage: string;
  shortDescription: string;
  points: string[];
  imageSrc?: string;
  imageAlt?: string;
}

function LessonCard({
  num,
  title,
  keyMessage,
  shortDescription,
  points,
  imageSrc,
  imageAlt,
}: LessonCardProps) {
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
            Q방법론(Q methodology) 연구를 시작하는 많은 연구자가 저지르는 가장 흔한 오해 중 하나는, 이 방법론을 단순히 진술문 카드를 정렬하고 컴퓨터 프로그램을 돌려 통계를 얻는 기계적인 분석 절차로만 취급하는 것입니다. 하지만 Q방법론은 연구문제 설정에서 시작하여 의견 수집, 진술문 표집, 참여자 정렬, 요인 분석, 그리고 질적 사후 인터뷰에 이르기까지 모든 단계가 서로 긴밀하게 피드백을 주고받는 유기적인 연구 설계입니다. 이 첫 강의에서는 세부적인 통계 공식에 매몰되기 전에, 전체 Q 연구의 파이프라인이 어떤 지형을 그리고 있는지 직관적으로 조망하고자 합니다.
          </p>
          <p>
            전체 흐름을 크게 다섯 영역으로 나누어 보면, 준비(preparation), 설계(design), 시행(execution), 분석(analysis), 보고(reporting) 단계로 요약할 수 있습니다. 각 단계는 독립적으로 분절되어 작동하지 않으며, 이전 단계에서 내린 결정이 다음 단계의 자료 형태를 지배하고, 최종 분석 결과는 다시 처음의 연구질문으로 피드백을 보내는 순환적 논리를 가집니다. 따라서 전체 흐름도를 머릿속에 담고 있어야만, 세부적인 문항을 만들거나 코딩을 진행할 때 자신이 지금 어느 좌표에 서 있고 어떤 가정 위에서 움직이고 있는지 잃어버리지 않습니다.
          </p>
          <p>
            이 전체 파이프라인에서 가장 흥미로운 지점은 바로 양적 분석과 질적 분석의 결합입니다. 연구자가 진술문을 수집하는 과정은 고도로 질적이고 해석적이지만, 수집된 카드를 참여자가 정렬한 데이터는 상관관계와 요인 분석이라는 엄밀한 양적 통계를 통해 객관적인 수학적 구조로 환산됩니다. 그리고 그렇게 도출된 통계적 요인들은 다시 사후 인터뷰와 참여자 의견이라는 질적 텍스트를 통해 비로소 생생한 '주관적 관점의 서사'로 되살아납니다. 즉, 통계와 해석이 톱니바퀴처럼 맞물려 돌아가는 것이 Q방법론의 참모습입니다.
          </p>
          <p>
            따라서 본 강의에서 제공하는 전체 흐름도는 단순한 슬라이드 꾸미기용 시각 자료가 아닙니다. 이는 준비에서 보고에 이르는 각 단계가 어떻게 서로의 논리를 보완하고 뒷받침하는지 보여주는 방법론적 지도입니다. 각론으로 들어가기 전, 이 지도를 통해 Q 연구의 핵심 매커니즘인 <b>주관성의 과학적 발견</b>이 어떻게 실현되는지 그 직관적인 방향을 먼저 고정해 두시기 바랍니다.
          </p>
        </div>
      );
    case 2:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            모든 사회과학 연구와 마찬가지로, Q 연구 역시 명확한 연구문제의 설정에서 출발합니다. Q방법론에 적합한 연구문제는 &quot;이 현상에 대해 얼마나 많은 사람이 동의하는가&quot;와 같은 빈도나 크기 추정이 아닙니다. 그보다 &quot;이 쟁점을 둘러싸고 이해관계자들은 어떤 다른 주관적 관점의 구조를 형성하고 있는가&quot; 혹은 &quot;이들이 갈등하는 핵심 가치의 배열은 무엇인가&quot;처럼 가치의 충돌과 미묘한 인식의 차이를 탐구하는 주제여야 합니다. 이 질문의 방향성이 명확해야 다음 단계인 의견의 우주를 수집하는 작업을 올바르게 안내할 수 있습니다.
          </p>
          <p>
            연구문제가 고정되면, 연구자는 해당 주제에 대해 사회적으로 발화될 수 있는 모든 진술과 의견의 총합인 concourse를 수집하기 시작합니다. concourse는 어떤 쟁점을 둘러싼 인간의 주관적 발화들이 모여 있는 거대한 '의견의 우주'와 같습니다. 연구자는 선행 연구와 관련 학술 문헌은 물론, 심층 인터뷰, 전문가 의견, 뉴스 미디어 기사, 심지어 SNS의 코멘트나 관련 법령 문서까지 망라하여 이 우주 속의 진술들을 수집하게 됩니다.
          </p>
          <p>
            concourse를 수집할 때 연구자가 빠지기 쉬운 가장 큰 위험은 특정 출처나 본인의 학술적 편견에 의존해 의견의 우주를 왜곡하는 것입니다. 예컨대 학술 논문만으로 concourse를 채우면 실제 실무자들의 생생한 주관성이 배제되고, 반대로 언론 기사로만 구성하면 자극적이고 극단적인 여론에 휩쓸리기 쉽습니다. 따라서 다양한 출처를 균형 있게 넘나들며 포화 상태에 이를 때까지 충분히 자료를 모으는 것이 준비 단계의 핵심 과제입니다.
          </p>
          <p>
            이렇게 모인 방대한 진술 자료들은 아직 정돈되지 않은 원석의 상태입니다. 이 가공되지 않은 의견의 우주를 어떻게 정제하고 이론적 틀에 맞춰 균형 있게 배치하여 최종적인 분석 카드로 다듬어 갈 것인가가 바로 다음 단계인 설계의 몫입니다. 준비 단계에서의 concourse 포집 노력이 깊고 넓을수록, 최종 연구 결과의 신뢰성과 타당성은 비례하여 높아집니다.
          </p>
        </div>
      );
    case 3:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            준비 단계에서 수집한 concourse가 의견의 우주라면, 설계 단계의 핵심은 그 거대한 우주를 대표할 수 있는 '축소판'을 만드는 것입니다. 연구자는 수백 개에 달하는 가공되지 않은 진술 중에서 중복을 제거하고 명료하게 정제하여, 보통 30개에서 50개 사이의 대표적인 진술문 묶음인 Q-set(Q표본)을 구성합니다. Q-set은 단순히 문항을 무작위로 축소하는 것이 아니라, 전체 의견 지형의 대표적 축소판 역할을 하도록 정밀하게 샘플링되어야 합니다.
          </p>
          <p>
            이때 Q-set을 구조화하여 정합성을 높이기 위해 흔히 <code>Fisher(1935)</code>의 블록설계 원리를 적용합니다. 주제별 쟁점과 분석 프레임을 격자형 매트릭스로 설계한 뒤, 각 격자 셀에 해당하는 진술문을 균형 있게 배치하는 방식입니다. 이러한 구조화된 표집을 활용하면 특정 주장에 진술문이 편중되는 것을 막고, 참여자가 편견 없이 자신의 관점을 그리드 위에 쏟아낼 수 있도록 돕는 문항 균형이 확보됩니다.
          </p>
          <p>
            Q-set 설계와 결합하여, 이를 평가하고 정렬할 주체인 P-set(참여자 표집)의 선정이 동시에 진행됩니다. Q방법론의 P-set은 R방법론처럼 모집단 분포를 추정하기 위한 무작위 표본이 아닙니다. Q의 P-set은 연구 주제에 대해 의미 있는 주관적 관점을 실제로 말해줄 수 있는 핵심 이해관계자나 전문가들로 구성하는 의도적 표집 방식을 따릅니다.
          </p>
          <p>
            P-set의 규모는 보통 20명에서 50명 사이로 R방법론의 표본 크기에 비해 현저히 작게 구성되지만, 이는 방법론적 결함이 아니라 고유한 설계 선택입니다. 관점의 다양성을 드러내는 것이 목적이므로, 숫자의 크기보다 연구 문제와 이론적으로 깊은 관련성을 가진 다양한 배경의 참여자들을 포함시키는 정밀한 기획이 설계 단계의 성패를 가릅니다.
          </p>
        </div>
      );
    case 4:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            설계 단계가 끝나고 Q-set과 P-set이 준비되면, 실제 자료수집이 이루어지는 수행 단계로 접어듭니다. 수행의 중심에는 참여자가 정해진 지시문에 따라 진술문 카드들을 상대적 동의 수준에 맞추어 그리드 위에 배치하는 Q-sorting(Q분류) 작업이 있습니다. 이는 단순히 질문에 예 혹은 아니오로 답하는 것을 넘어, 참여자가 여러 진술문 간의 상대적 가치를 끊임없이 비교하고 저울질하며 자기 주관성의 지도를 스스로 그리는 능동적 작업입니다.
          </p>
          <p>
            Q-sorting에서 사용되는 그리드는 보통 준정규분포 형태의 강제분포 구조를 가집니다. 가장 동의하는 카드는 오른쪽 끝(+4 또는 +5)에, 동의하지 않는 카드는 왼쪽 끝(-4 또는 -5)에 제한된 칸 수만큼만 채워 넣고, 애매하거나 중립적인 카드는 가운데(0) 영역에 배치하게 됩니다. 이러한 강제적인 배열 방식은 참여자로 하여금 자신이 가장 중요하게 생각하는 가치와 그렇지 않은 가치를 치열하게 우선순위화하도록 강제하여 변별력 높은 고품질의 주관성 자료를 도출해 냅니다.
          </p>
          <p>
            그러나 정렬 그리드 위의 숫자 배열만으로는 참여자의 내면적인 동기나 맥락을 완벽히 이해할 수 없습니다. 그리하여 Q정렬 직후 수행하는 사후 인터뷰는 수행 단계에서 절대 생략할 수 없는 질적 분석의 축입니다. 특히 가장 강한 동의(+4)나 가장 강한 비동의(-4) 칸에 특정 진술문을 배치한 이유를 참여자에게 구체적으로 묻고 기록함으로써, 통계적 결과 뒤에 숨겨진 진짜 맥락의 단서를 수집합니다.
          </p>
          <p>
            최근에는 웹 기반의 온라인 Q-sorting 툴을 활용한 비대면 수행도 증가하고 있지만, 이 경우에도 참여자의 주관성 정렬 이유를 텍스트 코멘트로 상세하게 남기도록 유도하는 품질 관리가 필수적입니다. 이처럼 정량적인 카드 그리드 자료와 정성적인 인터뷰 기록이 한 세트로 묶여 수집되어야만 비로소 다음 단계인 수학적 요인 분석과 깊이 있는 해석이 가능해집니다.
          </p>
        </div>
      );
    case 5:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            참여자들로부터 수집된 Q-sort 그리드 자료는 분석 단계에 들어서면서 본격적인 통계적 연산의 대상이 됩니다. R방법론의 분석이 변수와 변수 간의 상관관계를 구하는 것과 달리, Q방법론의 요인 분석은 사람과 사람 간의 상관관계, 즉 개개인이 생성해 낸 Q-sort 배열들이 서로 얼마나 닮았는지를 계산합니다. 이를 통해 연구자는 생각의 구조가 유사한 사람들끼리 하나의 그룹으로 묶여 공통의 요인을 도출하는 과정을 목격하게 됩니다.
          </p>
          <p>
            분석 과정은 크게 요인 추출과 요인 회전의 두 축으로 구성됩니다. 통상 주성분분석(Principal Component Analysis, PCA)이나 센트로이드(Centroid) 기법을 사용해 초기 요인들을 뽑아낸 다음, 요인의 해석력을 높이고 좌표 평면에서 요인들의 축을 가장 설득력 있게 배치하기 위해 베리맥스 회전이나 연구자의 수동 회전 기법을 적용하게 됩니다.
          </p>
          <p>
            이 분석 단계에서 연구자가 내려야 할 가장 중요한 방법론적 결정 중 하나는 '몇 개의 요인을 채택할 것인가'입니다. 설명분산, 카이저 기준(고유값 1.0 이상), 각 요인에 유의미하게 적재되는 사람의 수 같은 양적 기준들을 검토하는 동시에, 각 요인이 학술적으로 충분히 차별화된 해석가능성을 지니는지 질적으로도 함께 따져 보아야 합니다.
          </p>
          <p>
            요인 수가 확정되고 분석 프로그램(예: PQMethod 또는 R의 <code>qmethod</code> 패키지) 연산이 끝나면, 각 요인별 이상적 정렬 상태를 나타내는 요인가와 특정 요인만이 가진 독특한 관점을 식별해 주는 구분진술문(distinguishing statements)이 출력됩니다. 이 수학적 지표들이 완성됨으로써, 숫자를 바탕으로 생생한 인간의 관점을 설명하는 마지막 보고 단계의 문이 열립니다.
          </p>
        </div>
      );
    case 6:
      return(
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            Q 연구의 마무리는 분석 단계가 뱉어낸 차가운 통계 수치들에 따뜻한 의미의 숨결을 불어넣는 보고 단계입니다. 연구자는 각 요인별 이상적 배열 배열인 요인가에서 높은 점수(+4, +3 등)를 받은 진술문들과 식별진술문들을 세심히 뜯어보며, 이 요인을 공유하는 참여자 그룹이 지닌 고유한 생각의 흐름과 신념 체계를 추적합니다. 이 과정에서 정렬 당시 수집한 사후 인터뷰의 발언 문장들을 적절히 인용함으로써 해석의 생생함과 설득력을 극대화합니다.
          </p>
          <p>
            해석이 완성되면 연구자는 각 요인에 걸맞은 명확하고 직관적인 유형 이름을 부여하고, 각 유형이 지니는 성격을 입체적으로 서술합니다. 그러나 훌륭한 해석을 넘어 학술적 가치를 인정받기 위해서는 절차적 재현성 확보를 위한 투명한 보고 기준을 준수해야 합니다. concourse 수집 규모, Q-set 및 P-set 구성의 상세 논리, 요인분석 소프트웨어 사양 및 요인 수 결정 근거를 논문에 소상히 밝혀 주어야 합니다.
          </p>
          <p>
            최근 국제 학술지들에서는 Q방법론 논문의 보고 투명성을 매우 중요하게 평가하고 있으며, 설계와 정렬 및 분석의 과정이 감사 가능한 수준으로 기술되어 있지 않은 논문은 심사 단계에서 즉시 리젝될 위험이 높습니다. 따라서 단순히 유형의 결과만을 나열하는 것이 아니라, 연구 설계의 처음부터 끝까지 전체 파이프라인의 일관성을 검증받을 수 있도록 보고 체크리스트를 꼼꼼히 채워야 합니다.
          </p>
          <p>
            결국 Q방법론 연구의 최종 기여 선언은 단순한 분류 놀이에 머무는 것이 아니라, 발견된 유형들의 주관성 구조를 바탕으로 행정학이나 정책학적 대안을 제시하고 가치 갈등의 타협 지점을 제안하는 것에 있습니다. 준비와 설계에서 시작해 분석을 거쳐 해석으로 수렴하는 이 전체 파이프라인의 완성도를 통해, 여러분의 연구는 단순한 통계 자료를 넘어 사회를 읽어내는 설득력 있는 정책 과학으로 승격될 것입니다.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function Lesson51Page() {
  return(
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "4부" },
          { label: "5-1. Q 연구의 전체 흐름" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-06-16"
        title="Q 연구의 전체 흐름"
        description="Q방법론 연구 절차의 5단계(준비-설계-시행-분석-보고)가 유기적으로 연동되는 전체 흐름을 개괄적으로 살펴봅니다."
        imageSrc="/images/5-1-hero-overall-flow.webp"
        imageAlt="준비, 설계, 수행, 분석, 보고의 5개 단계가 피드백 루프로 유기적으로 연결된 Q 연구의 전체 파이프라인 흐름도"
      />

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            이 5장에서는 Q방법론의 실제 연구 과정을 구체적인 단계별 실전 절차로 다룹니다. 본격적으로 개별 단계를 탐구하기 전에, 연구문제 설정부터 시작하여의 의견 표집, sorting 수행, 통계 연산, 최종 해석과 보고서 작성에 이르는 전체 흐름을 파이프라인 개념으로 이해하는 것이 매우 중요합니다.
          </p>
          <p>
            Q 연구는 각 단계가 절벽처럼 단절되어 있지 않고, 통계 연산의 결과가 사후 질적 인터뷰를 만나 완성되는 고도의 통합설계 형태를 띱니다. 이 5-1강을 통해 전체 과정을 관통하는 방법론적 지도를 마음에 먼저 담아보시기 바랍니다.
          </p>
        </div>
      </section>

      {cards.map((card) =>(
        <LessonCard key={card.num} {...card} />
      ))}

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--black)" }}>
          자가 검토 체크리스트
        </h2>
        <ul className="space-y-3">
          {checklist.map((item, index) =>(
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
          {discussionQuestions.map((question, index) =>(
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
            Brown, S. R.(1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. New Haven: Yale University.
          </li>
          <li>
            Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J.(2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology</em>, <em>21</em>(1), 125.{" "}
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
            Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J.(2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open</em>, <em>7</em>(1), 100404.{" "}
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
            Watts, S., &amp; Stenner, P.(2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications Ltd.{" "}
            <a
              href="https://doi.org/10.4135/9781446251911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              https://doi.org/10.4135/9781446251911
            </a>
          </li>
        </ul>
      </section>

      <div className="mt-14 flex items-center justify-between border-t pt-6" style={{ borderColor: "var(--gray-200)" }}>
        <Link href="/lessons/4-6" style={{ color: "var(--brand)", fontSize: "14px", fontWeight: 600 }} className="hover:underline">
          &larr; 4-6. Q와 R 중 무엇을 선택할 것인가
        </Link>
        <Link href="/lessons/5-2" style={{ color: "var(--brand)", fontSize: "14px", fontWeight: 600 }} className="hover:underline">
          5-2. Q에 맞는 연구문제 설정 &rarr;
        </Link>
      </div>
    </div>
  );
}
