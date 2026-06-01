import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "4-5. 상관과 요인분석 대상의 차이 | Q방법론 온라인 강의",
  description:
    "R방법론은 변수들이 함께 움직이는 방식을 분석하고, Q방법론은 사람들이 만든 Q-sort 배열이 서로 얼마나 닮았는지를 분석한다.",
};

const cards = [
  {
    num: 1,
    title: "같은 상관계수, 다른 비교 대상",
    keyMessage: "상관계수는 같아 보여도, R방법론과 Q방법론은 서로 다른 대상을 비교한다.",
    shortDescription:
      "R방법론은 변수와 변수 사이의 관계를 본다. Q방법론은 사람이 만든 전체 Q-sort와 다른 Q-sort 사이의 유사성을 본다. 같은 상관계수라도 무엇을 비교하는지에 따라 해석이 달라진다.",
    points: [
      "상관계수는 두 대상의 관계나 유사성을 수치로 표현한다.",
      "R방법론은 주로 변수와 변수를 비교한다.",
      "Q방법론은 사람이 만든 Q-sort와 Q-sort를 비교한다.",
    ],
    imageSrc: "/images/4-5-card-01-same-correlation-different-targets.webp",
    imageAlt: "변수 카드와 Q-sort 배열판이 각각 상관계수로 연결되는 장면",
  },
  {
    num: 2,
    title: "R방법론의 상관: 변수들이 함께 움직이는가",
    keyMessage: "R방법론에서 상관은 변수들이 함께 움직이는 방식을 분석한다.",
    shortDescription:
      "R방법론은 여러 사람에게서 얻은 변수값을 바탕으로 변수 간 관계를 본다. 위험인식이 높을수록 예방행동도 높아지는가, 조직신뢰가 높을수록 정책수용성이 높아지는가와 같은 질문에 강하다.",
    points: [
      "R방법론에서 사람은 변수값을 제공하는 관측 단위가 된다.",
      "상관은 변수와 변수 사이의 공변동을 보여준다.",
      "R방법론은 평균, 상관, 회귀, 요인분석을 통해 일반 관계를 분석하는 데 강하다.",
    ],
    imageSrc: "/images/4-5-card-02-r-correlation-between-variables.webp",
    imageAlt: "사람별 변수값 표에서 변수 열 사이의 상관선이 연결되는 장면",
  },
  {
    num: 3,
    title: "Q방법론의 상관: Q-sort 배열들이 서로 닮았는가",
    keyMessage: "Q방법론에서 상관은 사람이 만든 전체 Q-sort 배열들이 서로 얼마나 닮았는지를 보여준다.",
    shortDescription:
      "Q방법론은 개별 문항 응답 하나만 보지 않는다. 한 사람이 진술문들을 자기 기준에 따라 상대적으로 배열한 전체 Q-sort를 자료로 삼고, 그 배열들 사이의 유사성을 분석한다.",
    points: [
      "Q방법론의 기본 자료 단위는 전체 Q-sort다.",
      "Q-sort 간 상관은 배열의 유사성을 보여준다.",
      "이 유사성은 특정 주제 안에서 드러난 관점 구조의 유사성이다.",
    ],
    imageSrc: "/images/4-5-card-03-q-correlation-between-sorts.webp",
    imageAlt: "여러 참여자의 Q-sort 배열이 겹쳐지고 유사한 배열끼리 관점 지도로 묶이는 장면",
  },
  {
    num: 4,
    title: "요인분석의 대상이 바뀌면 요인의 의미도 바뀐다",
    keyMessage: "요인분석의 대상이 바뀌면 요인의 의미도 바뀐다.",
    shortDescription:
      "R방법론에서 요인은 여러 변수 뒤의 잠재 차원으로 해석될 수 있다. Q방법론에서 요인은 유사하게 배열된 Q-sort들이 공유하는 관점 구조로 해석된다.",
    points: [
      "R요인은 변수 간 관계에서 도출된다.",
      "Q요인은 Q-sort 간 관계에서 도출된다.",
      "Q요인은 성격 특성, 모집단 비율, 문항 묶음이 아니라 공유된 관점 구조다.",
    ],
    imageSrc: "/images/4-5-card-04-factor-meaning-changes.webp",
    imageAlt: "R식 요인분석의 잠재 차원과 Q식 요인분석의 공유 관점 구조를 비교한 장면",
  },
  {
    num: 5,
    title: "factor array는 Q요인 해석의 중심 자료다",
    keyMessage: "factor array는 Q요인이 어떤 관점인지 해석하게 해주는 중심 자료다.",
    shortDescription:
      "factor array는 특정 요인이 Q-set 진술문들을 어떻게 배열할 것인지를 보여주는 대표 배열이다. Q요인 해석은 이 배열을 중심으로 극단 진술문, 구분 진술문, 합의 진술문을 함께 읽는 작업이다.",
    points: [
      "factor array는 요인의 대표 Q-sort에 가깝다.",
      "Q요인 해석은 factor array를 중심으로 이루어진다.",
      "구분 진술문과 합의 진술문은 관점 서사를 뒷받침하는 근거다.",
    ],
    imageSrc: "/images/4-5-card-05-factor-array-interpretation.webp",
    imageAlt: "factor array의 극단 진술문과 구분 진술문, 합의 진술문이 해석 노트로 연결되는 장면",
  },
  {
    num: 6,
    title: "최신 Q연구가 요구하는 것은 선택의 투명성이다",
    keyMessage: "오늘날 Q연구에서는 분석 선택을 독자가 따라갈 수 있게 보고해야 한다.",
    shortDescription:
      "Q방법론은 유연한 방법론이지만, 그 유연성이 보고 생략을 뜻하지는 않는다. 요인추출 방식, 회전 방식, 요인 수 결정, factor array, 구분 진술문, 합의 진술문을 어떻게 사용했는지 투명하게 남겨야 한다.",
    points: [
      "Q연구는 설계와 분석 선택을 투명하게 보고해야 한다.",
      "요인추출, 회전, 요인 수 결정의 근거를 설명해야 한다.",
      "Q요인 해석은 factor array와 진술문 근거로 뒷받침되어야 한다.",
    ],
    imageSrc: "/images/4-5-card-06-transparency-in-q-reporting.webp",
    imageAlt: "Q-sort 보드와 상관행렬, 요인분석 표, factor array가 투명한 보고 흐름으로 연결되는 장면",
  },
];

const comparisonRows = [
  {
    label: "기본 자료 단위",
    r: "사람에게서 얻은 변수값",
    q: "한 사람이 만든 전체 Q-sort",
  },
  {
    label: "상관의 대상",
    r: "변수와 변수",
    q: "Q-sort와 Q-sort",
  },
  {
    label: "상관의 의미",
    r: "변수들이 함께 움직이는 정도",
    q: "전체 배열이 서로 닮은 정도",
  },
  {
    label: "요인분석 대상",
    r: "변수 간 상관행렬",
    q: "Q-sort 간 상관행렬",
  },
  {
    label: "요인의 의미",
    r: "잠재 차원, 구성개념, 문항 묶음",
    q: "공유된 관점 구조, 판단 논리",
  },
  {
    label: "결과 해석 근거",
    r: "요인부하량, 공통성, 설명분산, 구성개념 타당도",
    q: "요인적재치, factor array, Z-score, 구분 진술문, 합의 진술문, 참여자 설명",
  },
  {
    label: "대표 오해",
    r: "R은 사람을 무시한다",
    q: "Q는 단순히 R행렬을 전치한 것이다",
  },
  {
    label: "강의 핵심 문장",
    r: "변수들이 어떻게 함께 움직이는가",
    q: "Q-sort들이 어떻게 비슷하게 배열되는가",
  },
];

const discussionQuestions = [
  "같은 진술문에 같은 정도로 동의한 두 사람도 Q-sort 전체 배열에서는 서로 다를 수 있다. 왜 그런가?",
  "Q요인을 “사람 유형”이라고 부를 때 어떤 오해가 생길 수 있는가?",
  "Q연구 결과에서 factor array를 제시하지 않으면 요인 해석의 어떤 근거가 약해지는가?",
];

function LessonCard({
  num,
  title,
  keyMessage,
  shortDescription,
  points,
  imageSrc,
  imageAlt,
}: {
  num: number;
  title: string;
  keyMessage: string;
  shortDescription: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
}) {
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
                fontSize: "13px",
                color: "var(--brand)",
                fontFamily: "var(--font-mono)",
                minWidth: "18px",
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
        <p>
          <b>"상관계수"</b>라는 말부터 찬찬히 짚어봅시다.<br />
          상관계수는 두 대상이 얼마나 깊게 관련되어 있는지, 혹은 얼마나 닮은 패턴을 보이는지 숫자로 나타낸 값이에요.
        </p>
        <p>
          예를 들어볼게요.<br />
          위험을 높게 인식하는 사람일수록 예방행동 점수도 높다면, 두 변수 사이에 '양의 상관관계'가 있다고 봅니다. 우리가 평소에 흔히 접하던 R방법론의 상관이죠.
        </p>
        <p>
          하지만 Q방법론의 질문은 방향이 전혀 다릅니다.<br />
          여기서는 위험인식 변수와 예방행동 변수 자체를 견주지 않거든요.
        </p>
        <p>
          그 대신 참여자 A가 만든 Q-sort와 참여자 B가 만든 Q-sort가 얼마나 닮았는지를 살핍니다.<br />
          두 사람이 같은 진술문들을 어떤 순서와 우선순위로 늘어놓았는지 <b>'배열 자체'</b>를 비교하는 것이죠.
        </p>
        <p>
          그래서 Q방법론에서는 흔히 이를 '사람 간 상관'이라 부릅니다.<br />
          다만 초학자라면 조금 더 정확하게 이해할 필요가 있어요. 사람 자체를 막연하게 비교하기보다, 특정 주제와 Q-set이라는 틀 안에서 그 사람이 구축해낸 '전체 Q-sort 배열'의 닮음꼴을 비교하는 것이니까요.
        </p>
        <p>
          예컨대 두 소방공무원이 모두 "소방예산은 장비 확충에 우선 배분되어야 한다"는 진술문에 똑같이 동의했다고 해볼까요?<br />
          단순히 문항별 동의 여부만 보면 두 사람은 아주 비슷해 보입니다.
        </p>
        <p>
          하지만 한 사람은 이 문장을 대원 안전이라는 맥락에서 가장 중요하게(+4) 놓았고, 다른 사람은 예산 효율성 관점에서 중간쯤(0)에 배치했을 수 있습니다.<br />
          전체 Q-sort 배열을 뜯어보면 서로 판이한 판단 구조를 지닌 것이죠.
        </p>
        <p>
          상관계수라는 통계 용어는 똑같습니다.<br />
          하지만 R방법론에서는 변수 간 관계를 뜻하고, Q방법론에서는 Q-sort 배열 사이의 유사성을 가리킵니다. 이 상관의 대상을 명확히 구분하는 것이 중요해요.
        </p>
      </div>
    );
  }

  if (num === 2) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        <p>
          R방법론에서 상관은 흔히 변수와 변수 사이의 관계를 뜻해요.<br />
          여러 사람에게서 구체적인 변수값을 얻은 뒤, 이 변수들이 어떻게 함께 움직이는지 분석하는 방식이죠.
        </p>
        <p>
          예를 들어 소방공무원 300명에게 현장 위험인식과 보호장비 착용 태도를 측정했다고 해볼까요?<br />
          두 변수의 상관이 높게 나타났다면, 현장 위험을 크게 인지하는 사람일수록 보호장비를 철저히 착용하는 경향이 있다는 뜻으로 해석해요.
        </p>
        <p>
          다른 예로 재난관리 교육 경험과 재난대응 자신감의 상관을 들 수 있습니다.<br />
          교육을 많이 받은 사람일수록 실제 대응 자신감도 높아지는지 파악하는 식이죠.
        </p>
        <p>
          이 과정에서 사람이 연구 뒤편으로 완전히 사라지는 것은 아니에요.<br />
          다만 사람은 변수값을 제공하는 관측 단위로서 연구에 참여할 뿐입니다. 연구자는 이렇게 모인 여러 사람의 변수값을 결합하여 변수 간의 일반적인 관계를 규명해요.
        </p>
        <p>
          그러므로 R방법론을 두고 '평균만 계산하는 기법'이라거나 '사람을 지워버리는 방법'이라고 평가해서는 곤란합니다.<br />
          R방법론은 변수 간의 관계, 집단 간 평균 차이, 인과적 예측 구조, 잠재 차원과 구성개념을 규명하는 매우 강력한 사회과학의 분석 도구이니까요.
        </p>
        <p>
          다만 R방법론이 해결하기에 가장 알맞은 질문은 따로 정해져 있습니다.<br />
          어떤 변수가 다른 변수와 결합하는가? 개별 문항들이 어떤 구성개념으로 수렴하는가? 특정 변수가 결과 변수를 얼마나 예측하는가? 이럴 때 R방법론이 제 몫을 다하죠.
        </p>
        <p>
          그러나 Q방법론이 던지는 질문은 결이 조금 다릅니다.<br />
          Q방법론은 "위험인식 점수가 예방행동 점수와 얼마나 상관관계를 갖는가?"보다, "참여자들이 위험과 예산, 책임과 현장성이라는 요소를 어떤 주관적 관점으로 배열하는가?"를 묻습니다.
        </p>
        <p>
          이 차이를 뚜렷하게 잡아야 다음 카드에서 다룰 Q방법론의 상관 논리도 정확히 보여요.
        </p>
      </div>
    );
  }

  if (num === 3) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        <p>
          Q방법론의 상관은 그렇다면 무엇을 비교할까요?<br />
          핵심은 단연 <b>Q-sort</b>입니다.
        </p>
        <p>
          Q-sort는 참여자 한 사람이 주어진 진술문들을 자기 기준에 따라 상대적으로 나열한 전체 구조를 뜻해요.<br />
          참여자는 개별 진술문을 낱개로만 평가하고 끝내지 않습니다.
        </p>
        <p>
          어떤 진술문은 격렬하게 동의하는 자리에 놓고, 어떤 진술문은 강하게 반대하는 쪽에 두며, 또 다른 문장은 중요하되 최우선순위는 아니라고 보아 중간 영역에 배치하죠.
        </p>
        <p>
          이 전체적인 배열 상태에 해당 주제를 바라보는 참여자의 주관적 안목이 고스란히 투영됩니다.
        </p>
        <p>
          예컨대 소방안전교부세 배분을 주제로 한 Q-set을 활용한다고 가정해 볼까요?<br />
          한 참여자는 "현장대원 안전 확보"를 가장 앞자리(+4)에 배치하고, "행정 효율성"은 중간(0)에 두며, "예산 절감"은 저 멀리 뒤로 미뤄둘 수 있습니다.
        </p>
        <p>
          반면 다른 참여자는 "지역 간 형평성"을 으뜸으로 꼽고 "중앙정부의 통제 기준 강화"를 그 못지않게 중요하게 둘 수도 있어요.
        </p>
        <p>
          두 사람이 몇 가지 낱개 문항에서는 비슷한 수준으로 동의할지 모릅니다.<br />
          그러나 전체 배열을 조망해보면 서로 판이한 판단 논리를 작동시키고 있음이 드러나죠.
        </p>
        <p>
          Q방법론은 바로 이 전체적인 배열 형태들을 대조합니다.<br />
          참여자 A의 Q-sort와 참여자 B의 Q-sort가 얼마나 비슷하게 구조화되었는지 통계적으로 계산하는 것이죠. 이것이 바로 Q-sort 간 상관의 실체입니다.
        </p>
        <p>
          따라서 Q-sort 간 상관은 '두 사람의 성향이나 성격이 닮았다'는 의미가 아니에요.<br />
          어디까지나 특정 주제, 특정 Q-set, 그리고 구체적인 분류 지시 조건 아래서 두 사람이 구성해낸 관점 배열이 얼마나 유사한지를 보여줄 뿐입니다.
        </p>
        <p>
          이 본질을 놓치면 Q방법론을 MBTI 같은 성격유형 검사로 오해하기 쉽습니다.<br />
          Q방법론은 사람에게 고정된 라벨을 붙이는 도구가 아니라, 사람들이 특정 주관적 세계를 어떤 판단 논리로 구조화하는지 읽어내는 분석 틀이랍니다.
        </p>
      </div>
    );
  }

  if (num === 4) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        <p>
          요인분석은 R방법론과 Q방법론 모두에서 쓰이는 통계 기법이에요.<br />
          이 때문에 초학자들은 두 방법론이 요인을 해석하는 방식도 같을 것이라 넘겨짚곤 하죠.
        </p>
        <p>
          # 하지만 실제로는 전혀 다릅니다.<br />
          요인분석을 적용하는 대상이 다르면, 추출된 요인이 지니는 학술적 의미도 완전히 바뀌니까요.
        </p>
        <p>
          R방법론의 요인분석은 관측되는 여러 변수 기저에 자리한 잠재 차원이나 이론적 구성개념을 탐색하는 데 쓰여요.<br />
          예컨대 여러 질문 문항들이 통계적으로 묶여 움직인다면, 연구자는 이를 '조직신뢰'나 '위험민감성', 혹은 '정책수용성' 같은 하나의 추상적 차원으로 개념화합니다.
        </p>
        <p>
          여기서 요인이란 결국 변수들의 묶음이자, 여러 문항 뒤에 숨겨진 잠재적 차원인 셈이죠.
        </p>
        <p>
          반면 Q방법론의 요인은 변수의 결합이 아닙니다.<br />
          Q방법론에서 밝혀내는 요인은 유사한 방식으로 배열된 Q-sort들이 공유하는 <b>'공통의 관점 구조'</b>를 뜻해요.
        </p>
        <p>
          만약 어떤 Q요인을 '현장 안전 우선형'이라 명명하고 해석했다고 해볼까요?<br />
          그렇다고 이 요인에 강한 적재치를 보이는 참여자들이 모두 똑같은 성향을 지녔다거나, 소방 조직 전체에서 몇 퍼센트가 이 유형에 속한다는 뜻이 결코 아니에요.
        </p>
        <p>
          정확히 말하자면, 이 요인은 주어진 Q-set을 분류하는 과정에서 반복적이고 객관적으로 포착된 하나의 <b>'판단 논리 구조'</b>입니다.<br />
          이 구조는 어떤 진술문을 핵심 가치로 앞세우고, 어떤 주장을 후순위로 미뤄두며, 어떤 가치들 사이에 팽팽한 긴장을 유지하는지 종합적으로 분석하여 해독해요.
        </p>
        <p>
          그러므로 Q요인을 해석할 때 단순한 요인적재치 숫자만 들여다봐서는 곤란합니다.<br />
          요인의 대표 배열을 보여주는 factor array를 뼈대로 삼고, 극단 진술문과 구분 진술문, 합의 진술문, 그리고 참여자들이 직접 남긴 인터뷰 설명까지 입체적으로 엮어내야 하죠.
        </p>
        <p>
          오늘 강의에서 반드시 짚고 넘어가야 할 핵심은 명확해요.<br />
          Q요인은 박제된 성격유형이 아니며, 인구 통계학적 비율도 아니고, 단순한 문항들의 합도 아닙니다. Q요인은 Q-sort 배열들이 나누어 가진 <b>'공유된 관점의 구조'</b>랍니다.
        </p>
      </div>
    );
  }

  if (num === 5) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        <p>
          Q요인을 해석하는 단계에서 <b>factor array</b>는 해석의 출발점이자 종착점이에요.
        </p>
        <p>
          factor array는 특정 요인이 Q-set 전체 진술문을 어떤 형태로 나열할지 보여주는 대표적인 모범 배열입니다.<br />
          쉽게 말해, 해당 요인이 지닌 관점을 표준적인 Q-sort 판 위에 그대로 재현해 놓은 가상의 배열이라고 볼 수 있죠.
        </p>
        <p>
          예컨대 어떤 요인의 factor array에서 "현장대원 안전 확보"가 가장 동의하는 쪽(+4)에 가 있고, "예산 절감"은 반대쪽(-3)에 놓였다고 할까요?<br />
          연구자는 이 대표 배열을 바탕으로 이 요인을 '비용 관리보다 대원의 생명과 안전을 절대적 가치로 삼는 관점'이라 해석하기 시작합니다.
        </p>
        <p>
          단지 진술문 한두 개만 콕 집어 요인의 명칭을 작명하듯 붙이고 끝내서는 안 돼요.
        </p>
        <p>
          참된 요인 해석은 양극단에 배치된 문항들의 관계를 살피고, 다른 요인과 통계적으로 뚜렷하게 구별되는 <b>구분 진술문(distinguishing statements)</b>을 규명하며, 모든 요인이 평화롭게 동조하는 <b>합의 진술문(consensus statements)</b>까지 촘촘히 엮어내는 작업이에요.<br />
          여기에 참여자의 사후 인터뷰 진술이 더해질 때 관점의 결이 더욱 풍성해집니다.
        </p>
        <p>
          여기서 구분 진술문은 특정 관점이 왜 다른 관점들과 독립적으로 존재할 수 있는지 증명해요.<br />
          반대로 합의 진술문은 서로 갈라지는 관점들이 어떤 공통 지점에서 손을 맞잡을 수 있는지 협의의 공간을 보여줍니다.
        </p>
        <p>
          그러므로 factor array는 논문 끝자락 부록에 형식적으로 끼워 넣는 표에 머물러서는 곤란합니다.<br />
          연구자가 명명한 유형의 정당성과 해석의 서사를 방법론적으로 방어하는 강력한 논증 근거이니까요.
        </p>
        <p>
          훌륭한 Q방법론 논문은 단순히 '요인이 몇 개 도출되었다'는 통계적 보고에 머물지 않습니다.<br />
          그 요인이 내재한 판단의 흐름을 밝히고, 이것이 어떤 진술문 배치로 객관화되는지 증명하며, 참여자의 실제 목소리로 어떻게 실증되는지 입체적으로 증명해내지요.
        </p>
      </div>
    );
  }

  if (num === 6) {
    return (
      <div className="lesson-card-body space-y-5" style={style}>
        <p>
          Q방법론을 처음 접할 때 흔히 "Q는 사람을 상관시키는 기법이다"라는 설명을 마주하곤 합니다.<br />
          직관적인 이해를 돕는 출발점으로서는 아주 훌륭한 문장이지요.
        </p>
        <p>
          그러나 현대적인 Q연구의 흐름에서는 이 정도 서술에 머물러서는 곤란해요.<br />
          설득력 있는 논문이 되려면 구체적으로 무엇을 상관시켰는지, 어떤 통계적 요인추출 방식(PCA 혹은 centroid)을 썼는지, 어떤 회전(rotation)을 적용했는지, 그리고 왜 수많은 대안 중 최종적인 요인 구조를 확정했는지 조목조목 밝혀야 합니다.
        </p>
        <p>
          그저 '주성분분석(PCA)에 배리맥스(Varimax) 회전을 적용했다' 한 줄만 적고 넘어가서는 안 돼요.<br />
          몇 개의 요인 모형을 테이블에 올려두고 비교·검토했는지, 요인 개수를 확정한 학술적 근거는 무엇인지, 각 요인의 고유한 주관적 논리를 증명하려고 어떤 진술문 배치와 대표 배열을 엮었는지 상세하게 기술해야 마땅합니다.
        </p>
        <p>
          Q방법론은 연구자의 능동적인 해석 과정을 수반하는 방법론이에요.<br />
          해석의 유연성을 발휘하는 만큼, 역설적으로 그 해석의 발자국을 더 명확하고 정교하게 독자에게 보여주어야 하죠.
        </p>
        <p>
          최근의 Q방법론 계통 체적 문헌검토 연구들이 입을 모아 지적하는 아쉬움도 바로 이 부분입니다.<br />
          방법론의 적용 범위는 넓어졌지만, Q-set 개발 경로, 구체적인 분류 조건, 요인 분석 상세 과정, 그리고 분석의 토대가 되는 factor array나 구분 진술문 보고가 누락되는 사례가 심심치 않게 발견되거든요.
        </p>
        <p>
          이는 결코 양식상의 형식적 요구가 아니에요.<br />
          연구자가 요인을 명명하고 구조화해 나간 논리적 경로를 독자가 함께 밟아볼 수 없다면, 연구 결과의 해석적 타당성을 신뢰하기 어렵기 때문입니다.
        </p>
        <p>
          따라서 Q연구가 지향해야 할 투명성이란 단순히 기계적인 반복 가능성에 그치지 않습니다.<br />
          연구의 매 단계에서 이루어진 설계와 통계적 선택들이 어떤 데이터적 사실과 방법론적 논거로 지탱되는지 추적할 수 있게 하는 일이죠.
        </p>
        <p>
          이번 4-5강에서 강조한 상관과 요인분석 대상의 본질적인 차이 역시 이러한 투명한 보고를 위한 주춧돌이에요.<br />
          우리가 정확히 '무엇과 무엇을 대비했는지' 투명하게 설명할 때 비로소 추출된 요인의 성격도 학술적 설득력을 얻는답니다.
        </p>
      </div>
    );
  }

  return null;
}

export default function Lesson45Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "4-5. 상관과 요인분석 대상의 차이" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-06-01"
        title="상관과 요인분석 대상의 차이"
        description="R방법론은 변수들이 함께 움직이는 방식을 분석하고, Q방법론은 사람들이 만든 Q-sort 배열이 서로 얼마나 닮았는지를 분석한다."
        imageSrc="/images/4-5-hero-correlation-factor-analysis-targets.webp"
        imageAlt="변수 간 상관을 분석하는 R방법론과 Q-sort 간 상관을 분석하는 Q방법론의 차이를 비교한 그림"
      />

      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
        <p>
        4-4강에서는 표본의 개념이 어떻게 다른지 살펴보았어요.<br />
        R방법론에서 표본은 대개 모집단의 평균이나 비율, 변수 간 관계를 안정적으로 추정하는 논리로 이어집니다.
        </p>

        <p>
        반면 Q방법론의 P-set은 인구 비율을 추정하려고 뽑는 표본이 아니에요.<br />
        특정 주제에 명확한 자기 관점을 지녔거나, Q-set을 자기 기준으로 배열할 수 있는 이들로 구성하지요.
        </p>

        <p>
        그렇다면 한 가지 질문이 자연스레 떠옵니다.<br />
        <b>"표본의 의미가 이토록 다르다면, 자료를 분석하는 방식도 달라져야 하지 않을까?"</b>
        </p>

        <p>
        이번 4-5강은 바로 이 흥미로운 질문에서 출발해요.<br />
        우리가 통계 분석에서 자주 접하는 두 단어, <b>상관(correlation)</b>과 <b>요인분석(factor analysis)</b>을 자세히 톺아볼 예정입니다.
        </p>

        <p>
        상관이나 요인분석 같은 통계 용어는 처음 접하면 낯설고 어렵게 느껴지기 마련이죠.<br />
        하지만 핵심은 생각보다 정말 단순해요. 상관은 두 대상이 얼마나 비슷하게 움직이는지 '닮은꼴'을 보는 것이고, 요인분석은 그 관계 속에서 더 큰 패턴을 찾아내는 작업입니다.
        </p>

        <p>
        여기서 가장 중요한 건 바로 <b>'비교 대상이 무엇인가'</b>예요.
        </p>

        <p>
        R방법론은 보통 변수와 변수를 비교합니다.<br />
        예를 들어 위험인식 점수가 높은 사람이 예방행동도 열심히 하는지 살피는 식이죠.
        </p>

        <p>
        반면 Q방법론은 사람들이 만든 전체 Q-sort 배열끼리 비교해요.<br />
        두 사람이 같은 진술문들을 얼마나 비슷한 우선순위로 나열했는지 대조하는 것입니다.
        </p>

        <p>
        이 차이는 단순한 계산 방향의 차이에 그치지 않아요.<br />
        자료 단위부터 상관계수의 의미, 분석 결과를 해석하는 방식까지 완전히 바뀝니다.
        </p>

        <p>
        Stephenson은 일찍이 검사 문항이나 변수 대신 사람을 상관시키는 발상을 제안했어요.<br />
        하지만 Q방법론을 단순히 R방법론 행렬을 뒤집은 기법으로만 이해하면 곤란합니다.<br />
        Brown, Watts와 Stenner, McKeown과 Thomas가 강조하듯, Q방법론의 본질은 참여자가 만든 전체 Q-sort 배열 안에서 <b>조작적 주관성(operant subjectivity)</b>과 <b>자기참조(self-reference)</b>의 구조를 읽어내는 데 있으니까요.
        </p>

        <p>
        오늘 강의의 핵심은 이 한 문장으로 정리할 수 있습니다.
        </p>

        <p>
        <b>"R방법론은 변수들이 함께 움직이는 방식을 분석해 그 뒤의 잠재 차원이나 구성개념을 추론하고, Q방법론은 Q-sort 배열들이 서로 닮은 정도를 분석해 공유된 관점 구조 (shared viewpoint structure)를 해석한다."</b>
        </p>
        </div>
      </section>

      {cards.map((card) => (
        <LessonCard
          key={card.num}
          num={card.num}
          title={card.title}
          keyMessage={card.keyMessage}
          shortDescription={card.shortDescription}
          points={card.points}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
        />
      ))}

      <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          핵심 정리 표
        </h2>
        <div className="hidden sm:block overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px" }}>
          <table className="w-full border-collapse" style={{ fontSize: "14px", lineHeight: 1.6 }}>
            <thead style={{ background: "var(--gray-100)" }}>
              <tr>
                <th className="p-3 text-left">비교 항목</th>
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

      <section className="pt-10 sm:pt-12">
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

      <section className="pt-10 sm:pt-12">
        <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
          하단 요약
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            R방법론은 변수와 변수 사이의 관계가 어떻게 함께 움직이는지 그 공변동을 분석해요.
          </p>
          <p>
            반면 Q방법론은 사람들이 만든 전체 Q-sort 배열들이 서로 얼마나 닮았는지를 분석한답니다.
          </p>
          <p>
            Q방법론은 단순히 R방법론의 행렬을 뒤집어 놓은 기법이 아니에요. 자료를 구성하는 단위부터 상관계수의 실제 의미, 그리고 요인을 추출하고 해석하는 전체적인 관점까지 모두 유기적으로 달라지는 독자적인 방법론이랍니다.
          </p>
        </div>
      </section>

      <div
        className="pt-8 flex items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <Link href="/lessons/4-4" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 4-4. 표본 개념의 차이
        </Link>
        <span className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          4-6. Q와 R 중 무엇을 선택할 것인가 →
        </span>
      </div>
    </div>
  );
}
