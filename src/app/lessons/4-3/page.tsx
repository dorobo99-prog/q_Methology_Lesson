import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "4-3. Q방법론의 논리 | Q방법론 온라인 강의",
  description:
    "Q방법론은 한 사람이 만든 전체 Q-sort 배열을 자료로 삼고, 그 배열들 사이에서 공유된 관점 구조를 해석하는 방법론이다.",
};

const references = [
  {
    key: "Brown1980",
    text: (
      <>
        Brown, S. R. (1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. Yale University Press.
      </>
    ),
  },
  {
    key: "Brown1993",
    text: (
      <>
        Brown, S. R. (1993). A primer on Q methodology. <em>Operant Subjectivity, 16</em>(3/4), 91-138.
      </>
    ),
  },
  {
    key: "BuchholtzVollstedt2024",
    text: (
      <>
        Buchholtz, N., &amp; Vollstedt, M. (2024). Q methodology as an integrative approach: Bridging quantitative and qualitative insights in a mixed methods study on mathematics teachers’ beliefs. <em>Frontiers in Psychology, 15</em>, 1418040.
      </>
    ),
    doi: "https://doi.org/10.3389/fpsyg.2024.1418040",
  },
  {
    key: "Dieteren2023",
    text: (
      <>
        Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences & Humanities Open, 7</em>, 100404.
      </>
    ),
    doi: "https://doi.org/10.1016/j.ssaho.2023.100404",
  },
  {
    key: "McKeownThomas2013",
    text: (
      <>
        McKeown, B., &amp; Thomas, D. B. (2013). <em>Q methodology</em> (2nd ed.). SAGE.
      </>
    ),
  },
  {
    key: "Stephenson1935",
    text: (
      <>
        Stephenson, W. (1935). Correlating persons instead of tests. <em>Character and Personality</em>.
      </>
    ),
  },
  {
    key: "Stephenson1936",
    text: (
      <>
        Stephenson, W. (1936). The inverted factor technique. <em>British Journal of Psychology</em>.
      </>
    ),
  },
  {
    key: "Stephenson1953",
    text: (
      <>
        Stephenson, W. (1953). <em>The study of behavior: Q-technique and its methodology</em>. University of Chicago Press.
      </>
    ),
  },
  {
    key: "WattsStenner2012",
    text: (
      <>
        Watts, S., &amp; Stenner, P. (2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE.
      </>
    ),
  },
];

const cards = [
  {
    num: 1,
    title: "R의 기준선 다음에는 Q의 출발점을 보아야 한다",
    keyMessage: "Q방법론의 출발점은 R방법론 비판이 아니라, 한 사람이 만든 전체 Q-sort 배열을 분석의 중심에 놓는 데 있다.",
    points: [
      "Q방법론은 R방법론을 낮추면서 출발하지 않는다.",
      "Q방법론의 출발점은 한 사람이 만든 전체 Q-sort 배열이다.",
      "최근 Q방법론 적용이 확산될수록, 이 출발점을 정확히 이해해야 한다.",
    ],
    imageSrc: "/images/4-3-card-01-q-starting-point.webp",
    imageAlt: "연구문제 나침반 양쪽에 R방법론의 변수 표와 Q방법론의 Q-sort 배열이 놓인 장면",
    body: (
      <>
        {/* 카드 1 강의원고 입력 영역: R의 기준선 다음에는 Q의 출발점을 보아야 한다 */}
        <p>
          Q방법론을 설명할 때 먼저 피해야 할 태도가 있다.<br />
          R방법론을 낮추면서 Q방법론을 높이는 방식이다. 이런 설명은 쉽게 들리지만, 정확한 설명은 아니다.
        </p>

        <p>
          4-2강에서 보았듯이, R방법론은 사회과학의 강력한 분석 언어다.<br />
          사람에게서 얻은 변수값을 바탕으로 변수 간 관계, 평균 차이, 예측 구조, 잠재 차원을 분석할 수 있다.
        </p>

        <p>
          그래서 4-3강은 R방법론 비판으로 시작하지 않는다.<br />
          이미 기준선은 세워졌다. 이제 물어야 할 질문은 따로 있다.
        </p>

        <p>
          Q방법론은 무엇을 분석의 중심에 놓는가.<br />
          그것은 R방법론과 어떻게 다른가.<br />
          이 질문에서 4-3강의 논리가 시작된다.
        </p>

        <p>
          Q방법론의 출발점은 한 사람이 만든 전체 Q-sort 배열이다.<br />
          여기서 중요한 것은 단순히 <code>사람</code>이라는 말이 아니다. 더 중요한 것은 그 사람이 만든 <code>전체 배열</code>이다.
        </p>

        <p>
          참여자는 진술문들을 자기 기준에 따라 비교하고 배열한다.<br />
          어떤 진술문은 강하게 동의하는 쪽에, 어떤 진술문은 강하게 반대하는 쪽에, 또 어떤 진술문은 상대적으로 중간에 놓는다.
        </p>

        <p>
          이 전체 배열이 Q방법론의 기본 자료가 된다.<br />
          따라서 Q방법론과 R방법론의 차이는 우열의 문제가 아니다.
        </p>

        <p>
          핵심은 어떤 질문을 던지는가에 있다.<br />
          그리고 그 질문에 답하기 위해 어떤 자료 구조를 분석의 중심에 놓는가에 있다.
        </p>

        <p>
          최근 Q방법론 적용이 다양한 분야로 확산될수록 이 구분은 더 중요해진다.<br />
          Dieteren et al.(2023)이 보여주듯, Q방법론 연구가 많아질수록 연구 설계와 분석 선택도 함께 다양해진다.
        </p>

        <p>
          그래서 Q방법론이 무엇을 자료로 삼고, 무엇을 해석하는지 먼저 정확히 잡아두어야 한다.<br />
          이것이 R의 기준선 다음에 Q의 출발점을 살펴보는 이유다.
        </p>
      </>
    ),
  },
  {
    num: 2,
    title: "Q자료의 기본 단위는 전체 Q-sort다",
    keyMessage: "Q방법론에서 기본 자료는 개별 문항 응답 하나가 아니라, 한 사람이 진술문들을 상대적으로 배열한 전체 Q-sort다.",
    points: [
      "한 문항의 찬반만으로는 관점 구조를 보기 어렵다.",
      "Q-sort는 진술문 사이의 상대적 위치와 우선순위를 보존한다.",
      "개인내 유의성은 전체 배열을 자료로 보는 이론적 근거가 된다.",
    ],
    imageSrc: "/images/4-3-card-02-whole-q-sort.webp",
    imageAlt: "한 사람이 Q-sort 분포표 위에 진술문 카드를 전체 배열로 배치하는 장면",
    body: (
      <>
        {/* 카드 2 강의원고 입력 영역: Q자료의 기본 단위는 전체 Q-sort다 */}
        <p>
          Q방법론에서 가장 중요한 단어 중 하나는 Q-sort다.<br />
          그러나 Q-sort를 단순한 응답표로 이해하면 핵심을 놓치게 된다.
        </p>

        <p>
          Q-sort는 한 사람이 만든 전체 배열이다.<br />
          이 점을 먼저 잡아두어야 4-3강의 논리가 흔들리지 않는다.
        </p>

        <p>
          일반 설문에서는 한 문항에 대해 동의하는지, 반대하는지, 어느 정도 동의하는지를 각각 표시할 수 있다.<br />
          물론 이런 정보도 중요하다.
        </p>

        <p>
          하지만 그것만으로는 한 사람이 전체 주제를 어떻게 이해하는지 보기 어렵다.<br />
          개별 응답은 보이지만, 그 응답들이 한 사람 안에서 어떤 질서를 이루는지는 잘 드러나지 않기 때문이다.
        </p>

        <p>
          예를 들어 두 사람이 모두 <code>소방예산은 장비 확충에 우선 배분되어야 한다</code>는 진술에 동의했다고 하자.<br />
          겉으로 보면 두 사람은 같은 의견을 가진 것처럼 보일 수 있다.
        </p>

        <p>
          그러나 그 이유는 다를 수 있다.<br />
          한 사람은 이 진술을 현장대원의 생명 보호와 연결할 수 있다.
        </p>

        <p>
          다른 사람은 행정 책임성, 성과관리, 예산 집행의 투명성과 연결할 수 있다.<br />
          같은 진술에 동의하더라도, 그 진술이 전체 판단 구조 안에서 차지하는 위치는 달라질 수 있다.
        </p>

        <p>
          Q-sort는 바로 이 차이를 설명한다.<br />
          어떤 진술문이 가장 강한 동의 쪽에 놓였는지, 어떤 진술문이 그보다 뒤에 놓였는지, 어떤 진술문과 함께 묶이는지가 중요하다.
        </p>

        <p>
          Brown(1980)이 말한 개인내 유의성은 여기서 의미를 갖는다.<br />
          중요한 것은 단순히 사람들 사이의 평균 차이가 아니다.
        </p>

        <p>
          한 사람 안에서 진술문들이 어떤 상대적 질서를 이루는지가 중요하다.<br />
          Q-sort는 바로 그 질서를 하나의 배열로 보여준다.
        </p>

        <p>
          따라서 Q방법론의 자료는 고립된 문항 응답의 합이 아니다.<br />
          Q방법론의 자료는 한 사람이 특정 주제 세계를 어떻게 배열했는지 보여주는 의미의 배치다.
        </p>
      </>
    ),
  },
  {
    num: 3,
    title: "Q-sort는 조작적 주관성이 드러나는 장면이다",
    keyMessage: "Q-sort는 특이한 설문 응답이 아니라, 참여자의 조작적 주관성이 실제로 작동하는 장면이다.",
    points: [
      "조작적 주관성은 참여자의 관점이 배열 행위 속에서 드러난다는 뜻이다.",
      "자기참조는 참여자가 외부 정답이 아니라 자기 기준으로 판단한다는 뜻이다.",
      "Q-sort는 주관성을 측정값으로 환원하기보다 표현되게 하는 장면이다.",
    ],
    imageSrc: "/images/4-3-card-03-operant-subjectivity-in-q-sort.webp",
    imageAlt: "참여자의 손이 진술문 카드를 움직이고 그 배열 위로 관점 지도가 떠오르는 장면",
    body: (
      <>
        {/* 카드 3 강의원고 입력 영역: Q-sort는 조작적 주관성이 드러나는 장면이다 */}
        <p>
          2-3강에서 우리는 조작적 주관성이라는 개념을 다루었다.<br />
          조작적 주관성은 주관성이 실제 행위 속에서 드러난다는 뜻이다.
        </p>

        <p>
          4-3강에서는 이 개념을 Q방법론의 자료 구조와 연결해 보려 한다.<br />
          특히 Q-sort가 왜 단순한 응답이 아니라, 주관성이 드러나는 장면인지 살펴볼 것이다.
        </p>

        <p>
          Q-sort에서 참여자는 정답을 맞히는 사람이 아니다.<br />
          연구자가 원하는 답을 고르는 사람도 아니다.
        </p>

        <p>
          참여자는 자기 관점에서 진술문들을 읽고 비교한다.<br />
          그리고 그 진술문들이 자신에게 어떤 의미를 갖는지 판단한다.
        </p>

        <p>
          이때 중요한 개념이 자기참조다.<br />
          자기참조란 참여자가 외부 기준에 맞춰 답을 고르는 것이 아니라, 자신의 관점에서 진술문의 의미를 판단한다는 뜻이다.
        </p>

        <p>
          같은 진술문도 참여자의 경험, 가치, 위치에 따라 다르게 읽힐 수 있다.<br />
          그래서 Q-sort에서는 진술문 자체만큼이나, 그것이 한 사람의 배열 안에서 어디에 놓이는지가 중요하다.
        </p>

        <p>
          이런 점에서 Q-sort는 주관성을 객관화하는 장치라기보다, 주관성이 표현되게 하는 장치에 가깝다.<br />
          연구자가 바깥에서 <code>당신은 이런 유형이다</code>라고 붙이는 방식이 아니다.
        </p>

        <p>
          참여자가 배열한 결과 속에서 관점의 질서가 드러난다.<br />
          그 질서가 Q방법론이 다루는 중요한 자료가 된다.
        </p>

        <p>
          McKeown &amp; Thomas(2013)가 강조하는 자기참조의 의미도 여기에 있다.<br />
          Q방법론에서 진술문의 의미는 외부 척도에 의해 일방적으로 정해지지 않는다.
        </p>

        <p>
          참여자가 자기 기준으로 배열할 때, 그 진술문들은 한 사람의 의미 세계 안에서 위치를 갖는다.<br />
          Q-sort는 바로 그 위치들을 하나의 전체 배열로 보여준다.
        </p>

        <p>
          따라서 Q-sort는 특이한 설문 응답이 아니다.<br />
          Q-sort는 참여자의 조작적 주관성이 드러나는 장면이다.
        </p>

        <p>
          이 관점에서 보면 Q방법론은 주관성을 흐릿한 내면 상태로 남겨두지 않는다.<br />
          주관성이 표현되는 배열을 만들고, 그 배열을 분석 가능한 자료로 삼는다.
        </p>
      </>
    ),
  },
  {
    num: 4,
    title: "Q방법론은 사람의 전체 배열들을 비교한다",
    keyMessage: "Q방법론은 개별 변수값이 아니라, 여러 참여자가 만든 전체 Q-sort 배열 사이의 유사성과 차이를 비교한다.",
    points: [
      "Q방법론은 한 사람의 전체 배열을 비교 단위로 삼는다.",
      "같은 문항 응답도 전체 배열 안에서는 다른 의미를 가질 수 있다.",
      "상관 대상의 엄밀한 차이는 4-5강에서 별도로 다룬다.",
    ],
    imageSrc: "/images/4-3-card-04-comparing-whole-arrangements.webp",
    imageAlt: "여러 참여자의 Q-sort 보드가 나란히 놓이고 비슷한 배열끼리 연결되는 장면",
    body: (
      <>
        {/* 카드 4 강의원고 입력 영역: Q방법론은 사람의 전체 배열들을 비교한다 */}
        <p>
          Q방법론은 한 사람의 전체 Q-sort를 자료로 삼는다.<br />
          그렇다면 이어지는 다음 질문은 다음과 같다.<br />
          여러 사람이 만든 Q-sort는 어떻게 분석되는가.
        </p>

        <p>
          Stephenson(1935)은 <code>검사 대신 사람을 상관시킨다</code>는 발상을 제안했다.<br />
          이 표현은 Q방법론의 출발점을 이해하는 데 중요하다.
        </p>

        <p>
          다만 여기서 사람을 상관시킨다는 말을 너무 문자 그대로 받아들이면 오해가 생긴다.<br />
          Q방법론에서 비교되는 것은 사람의 성격이나 정체성 자체가 아니다.
        </p>

        <p>
          비교되는 것은 각 사람이 만든 전체 Q-sort 배열이다.<br />
          다시 말해, 특정 주제에 대해 진술문들을 어떻게 상대적으로 배치했는지가 비교된다.
        </p>

        <p>
          어떤 두 사람이 같은 진술문 몇 개에 동의했다고 해서 반드시 같은 관점을 가진 것은 아니다.<br />
          반대로 일부 문항에서는 다르게 보이더라도, 전체 배열의 구조는 비슷할 수 있다.
        </p>

        <p>
          그래서 Q방법론은 개별 문항 하나에만 머물지 않는다.<br />
          전체 배열이 얼마나 비슷한지, 어떤 판단 논리가 공유되는지, 어디에서 차이가 생기는지를 본다.
        </p>

        <p>
          이 부분은 4-5강에서 더 자세히 다룰 예정이다.<br />
          4-5강에서는 R방법론과 Q방법론에서 상관과 요인분석의 대상이 어떻게 달라지는지 본격적으로 비교한다.
        </p>

        <p>
          오늘은 한 가지만 기억하면 된다.<br />
          Q방법론은 사람을 직접 라벨링하기 전에, 사람들이 만든 전체 배열의 유사성과 차이를 비교한다.
        </p>
      </>
    ),
  },
  {
    num: 5,
    title: "Q요인은 공유된 관점 구조다",
    keyMessage: "Q요인은 사람의 성격 유형이나 인구집단 비율이 아니라, 특정 주제와 Q-set, 지시 조건 아래에서 공유된 의미 배열이다.",
    points: [
      "Q요인은 사람 자체가 아니라 공유된 배열 구조를 가리킨다.",
      "유형명 붙이기는 해석의 끝이 아니라 판단 논리를 압축하는 작업이다.",
      "최근 Q방법론 논의에서도 철학적 기반과 분석 방향을 둘러싼 이해 차이가 계속된다.",
    ],
    imageSrc: "/images/4-3-card-05-q-factor-as-viewpoint-structure.webp",
    imageAlt: "여러 Q-sort 배열이 공유된 관점 구조와 factor array로 정리되는 장면",
    body: (
      <>
        {/* 카드 5 강의원고 입력 영역: Q요인은 공유된 관점 구조다 */}
        <p>
          Q방법론을 처음 배울 때 학생들이 자주 오해하는 지점이 있다.<br />
          Q요인을 사람 유형으로 구분하는 것이다.
        </p>

        <p>
          물론 Q연구에서는 <code>유형</code>이라는 말을 쓰기도 한다.<br />
          그러나 이때의 유형은 사람의 본질적 성격 유형을 뜻하지 않는다.
        </p>

        <p>
          Q요인은 특정 주제에서 유사하게 배열된 Q-sort들이 보여주는 공유된 관점 구조다.<br />
          다시 말해 사람 자체를 분류하는 것이 아니라, 사람들이 표현한 배열 속에서 반복되는 의미 구조를 해석하는 것이다.
        </p>

        <p>
          또 하나의 오해는 Q요인을 인구집단 비율처럼 이해하는 것이다.<br />
          Q방법론은 <code>전체 인구 중 몇 퍼센트가 이 유형인가</code>를 추정하는 방법이 아니다.
        </p>

        <p>
          Q방법론은 특정 연구 주제, 특정 Q-set, 특정 지시 조건 아래에서 어떤 관점 구조가 드러났는지를 보여준다.<br />
          그래서 Q요인은 언제나 연구 맥락과 함께 읽어야 한다.
        </p>

        <p>
          따라서 Q요인 해석은 유형명을 붙이는 것으로 끝나지 않는다.<br />
          오히려 유형명은 해석의 압축에 가깝다.
        </p>

        <p>
          그 관점이 무엇을 가장 중요하게 보고, 무엇을 뒤로 미루는지 살펴야 한다.<br />
          또 다른 관점과 어디에서 갈라지는지도 설명해야 한다.
        </p>

        <p>
          <code>요인의 배열</code>, <code>다른 유형과 구분되는 진술문</code>, <code>공통된 진술문</code> 같은 도구는 바로 이 해석을 돕는다.<br />
          다만 이 강의에서 그 절차를 자세히 설명하지는 않는다.
        </p>

        <p>
          구체적인 요인 해석 방법은 뒤의 요인 해석 강의에서 다룬다.<br />
          여기서는 Q요인을 어떻게 이해해야 하는지만 잡아두면 된다.
        </p>

        <p>
          Ramlo(2024)가 보여주듯, Q방법론 연구자들 사이에서도 Q의 철학적 기반과 분석 방향에 대한 논의는 계속되고 있다.<br />
          이 점은 Q방법론을 단순한 사람 분류 기술로 축소해서는 안 된다는 사실을 다시 확인하게 한다.
        </p>

        <p>
          그래서 4-3강에서 Q요인은 이렇게 이해하면 좋다.<br />
          Q요인은 사람에게 붙이는 이름표가 아니라, 특정 주제에서 드러난 공유된 판단 논리의 구조다.
        </p>
      </>
    ),
  },
  {
    num: 6,
    title: "Q방법론의 강점은 관점 구조를 보존하는 데 있다",
    keyMessage: "Q방법론의 강점은 사람들이 특정 주제를 어떻게 의미 있게 배열하는지, 그리고 그 배열들 사이에서 어떤 공유된 관점이 나타나는지 보존해 보여주는 데 있다.",
    points: [
      "Q방법론은 관점의 빈도보다 관점의 구조를 밝히는 데 강하다.",
      "복잡하고 논쟁적인 주제에서 판단 논리의 차이를 드러낼 수 있다.",
      "재난안전 연구에서는 지역주민·실무자·정책결정자의 위험 판단 구조를 읽는 데 활용될 수 있다.",
    ],
    imageSrc: "/images/4-3-card-06-preserving-viewpoint-structure.webp",
    imageAlt: "평균으로 압축되는 의견과 Q-sort 배열로 보존되는 관점 구조가 대비되는 장면",
    body: (
      <>
        {/* 카드 6 강의원고 입력 영역: Q방법론의 강점은 관점 구조를 보존하는 데 있다 */}
        <p>
          Q방법론의 강점은 관점 구조를 보존하는 데 있다.<br />
          사람들의 의견을 하나의 평균으로만 요약하지 않고, 각자가 만든 배열의 질서를 보존한 상태에서 공유된 관점을 해석한다.
        </p>

        <p>
          그렇다고 해서 Q방법론이 R방법론보다 우월하다는 뜻은 아니다.<br />
          R방법론은 변수 간 일반 관계를 분석하는 데 강하고, Q방법론은 사람들이 특정 주제를 어떤 의미 구조로 배열하는지 보는 데 강하다.
        </p>

        <p>
          정책, 조직, 재난안전, 교육, 환경 갈등처럼 복잡한 주제에서는 찬반만으로 충분하지 않은 경우가 많다.<br />
          같은 정책을 지지하더라도 어떤 사람은 안전을, 어떤 사람은 효율을, 또 어떤 사람은 형평성을 중심에 둘 수 있기 때문이다.
        </p>

        <p>
          Q방법론은 이런 판단 논리의 차이를 드러내는 데 유용하다.<br />
          중요한 것은 누가 몇 명인가가 아니라, 어떤 관점 구조가 존재하는가이다.
        </p>

        <p>
          Ma et al.(2024)의 재난 회복탄력성 연구는 이런 가능성을 보여주는 사례로 활용할 수 있다.<br />
          지역주민이 재난 회복탄력성을 어떻게 다르게 이해하는지 Q방법론으로 탐색할 수 있기 때문이다.
        </p>

        <p>
          다만 이 강의에서는 사례를 길게 설명하지 않는다.<br />
          재난안전 연구에서도 관점 구조가 중요한 주제가 많다는 점만 연결해 둔다.
        </p>

        <p>
          Buchholtz &amp; Vollstedt(2024)도 보조 사례로 유용하다.<br />
          같은 진술문을 리커트 척도와 Q-sort에 적용했을 때, Q-sort는 문항별 평균을 넘어 상대적 배열과 하위 신념 구조를 보여줄 수 있다.
        </p>

        <p>
          다만 여기서 혼합방법론 자체로 넘어가지는 않는다.<br />
          이 강의의 초점은 Q방법론이 관점 구조를 어떻게 보존하는가에 있다.
        </p>

        <p>
          이제 다음 질문이 생긴다.<br />
          Q방법론이 전체 배열을 자료로 삼는다면, 참여자는 어떻게 선정해야 하는가.
        </p>

        <p>
          바로 이 질문이 4-4강 <code>표본 개념의 차이</code>로 이어진다.<br />
          전체 배열을 자료로 본다는 논리는 곧 표본을 이해하는 방식까지 바꾸기 때문이다.
        </p>
      </>
    ),
  },
];

const summaryItems = [
  "Q방법론의 기본 단위는 전체 Q-sort 배열이다.",
  "Q-sort는 조작적 주관성이 드러나는 장면이다.",
  "Q방법론은 고립된 문항 응답보다 진술문들의 상대적 위치를 본다.",
  "Q방법론은 전체 배열들 사이의 유사성과 차이를 비교한다.",
  "Q요인은 사람 라벨이 아니라 공유된 관점 구조다.",
  "Q방법론의 강점은 관점 구조를 보존하면서 해석하는 데 있다.",
];

const comparisonRows = [
  { label: "자료 단위", logic: "전체 Q-sort 배열", meaning: "한 사람이 진술문을 어떻게 상대적으로 배치했는지가 기본 자료다.", next: "5장 이후 Q-sort 절차로 확장" },
  { label: "사람의 위치", logic: "배열을 수행하는 주체", meaning: "참여자는 변수값 제공자라기보다 자기 관점에서 의미 세계를 배열하는 사람이다.", next: "4-4 P-set 논리로 연결" },
  { label: "분석 중심", logic: "관점의 전체 구조", meaning: "개별 응답보다 배열 안의 위치와 우선순위가 중요하다.", next: "4-5 상관 대상 비교로 연결" },
  { label: "상관", logic: "전체 배열 간 유사성", meaning: "사람 자체가 아니라 각 사람이 만든 Q-sort 배열의 유사성을 본다.", next: "4-5에서 본격 비교" },
  { label: "요인", logic: "공유된 관점 구조", meaning: "Q요인은 사람 라벨이나 인구 비율이 아니라 공유된 의미 배열이다.", next: "12장 요인 해석으로 연결" },
  { label: "강점", logic: "관점 구조 보존", meaning: "평균이나 빈도만으로 보기 어려운 판단 논리를 보존한다.", next: "19~21장 응용·혼합방법으로 연결" },
  { label: "주의할 오해", logic: "사람 유형 분류로 축소하기", meaning: "Q방법론은 사람을 고정 유형으로 나누는 기술이 아니다.", next: "4-6 방법 선택 기준으로 연결" },
];

function Card({
  num,
  title,
  keyMessage,
  points,
  imageSrc,
  imageAlt,
  body,
}: {
  num: number;
  title: string;
  keyMessage: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  body: React.ReactNode;
}) {
  return (
    <section className="mb-14 sm:mb-16">
      <div className="mb-5">
        <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>
          카드 {num}
        </div>
        <h2 className="font-semibold mb-3" style={{ fontSize: "24px", color: "var(--black)" }}>
          {title}
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--gray-700)" }}>{keyMessage}</p>
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

      <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
        {body}
      </div>
    </section>
  );
}

export default function Lesson43Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "4-3. Q방법론의 논리" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-05-21"
        title="Q방법론의 논리"
        description="Q방법론은 한 사람이 만든 전체 Q-sort 배열을 자료로 삼고, 그 배열들 사이에서 공유된 관점 구조를 해석하는 방법론이다."
        imageSrc="/images/4-3-hero-q-methodology-logic.webp"
        imageAlt="여러 Q-sort 배열이 공유된 관점 구조로 묶이는 장면"
      />

      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          {/* 도입 강의원고 입력 영역: R의 기준선 다음에는 Q의 출발점을 보아야 한다 */}
        <p>
          4-2강에서는 R방법론의 논리를 먼저 공정하게 살펴보았다.<br />
          R방법론은 사람을 지우는 방법이 아니었다. 사람에게서 얻은 변수값을 바탕으로, 변수들 사이의 일반 관계를 분석하는 사회과학의 중요한 언어였다.
        </p>

        <p>
          R방법론은 어떤 변수가 다른 변수와 함께 움직이는지, 집단 평균이 어떻게 다른지, 여러 문항 뒤에 어떤 잠재 차원이 있는지를 분석하는 데 강하다.<br />
          위험인식과 예방행동, 조직공정성과 직무만족, 교육효과와 성과점수의 관계를 볼 때 R방법론은 매우 유용하다.
        </p>

        <p>
          이제 4-3강에서는 다른 쪽 렌즈를 살펴보려 한다.<br />
          Q방법론은 R방법론의 반대말이 아니다. Q방법론은 다른 질문을 다루기 위해, 다른 자료 단위를 분석의 중심에 놓는다.
        </p>

        <p>
          Q방법론의 출발점은 한 사람이 만든 전체 Q-sort 배열이다.<br />
          참여자는 진술문을 하나씩 따로 평가하는 데서 멈추지 않는다. 여러 진술문을 서로 비교하고, 자기 기준에 따라 상대적 위치를 정한다.
        </p>

        <p>
          이 배열은 단순한 응답지가 아니다.<br />
          어떤 진술문을 가장 앞에 두고, 어떤 진술문을 뒤로 미루며, 어떤 진술문을 중간에 놓는지에는 그 사람의 판단 논리가 담긴다.
        </p>

        <p>
          Q방법론은 바로 이 전체 배열을 주관성의 자료로 삼는다.<br />
          Brown(1980)이 말한 조작적 주관성도 이 지점에서 중요해진다.
        </p>

        <p>
          주관성은 연구자가 밖에서 라벨을 붙여 만들어내는 것이 아니다.<br />
          참여자가 자기 관점에서 진술문들을 배열하는 행위 속에서 드러난다.
        </p>

        <p>
          따라서 Q방법론은 사람을 유형으로 나누는 기술이 아니다.<br />
          Q방법론은 사람들이 특정 주제 세계를 어떻게 의미 있게 배열하는지 살펴보고, 그 배열들 사이에서 공유된 관점 구조를 해석하는 방법론이다.
        </p>

        <p>
          오늘 강의의 핵심은 여기에 있다.<br />
          Q방법론은 개별 문항 응답이 아니라 전체 Q-sort를 자료로 삼는다. 그리고 Q요인은 사람의 이름표가 아니라, 특정 주제에서 드러난 공유된 관점 구조다.
        </p>
        </div>
      </section>

      {cards.map((card) => (
        <Card
          key={card.num}
          num={card.num}
          title={card.title}
          keyMessage={card.keyMessage}
          points={card.points}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          body={card.body}
        />
      ))}

      <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          정리
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--black)" }}>
              4-3강에서 기억할 핵심
            </h3>
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              {summaryItems.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "16px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.72)",
                  }}
                >
                  <p style={{ color: "var(--gray-700)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--black)" }}>
              핵심 정리 표
            </h3>
            <div className="hidden sm:block overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px" }}>
              <table className="w-full border-collapse" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                <thead style={{ background: "var(--gray-100)" }}>
                  <tr>
                    <th className="p-3 text-left">구분</th>
                    <th className="p-3 text-left">Q방법론의 논리</th>
                    <th className="p-3 text-left">4-3강에서의 의미</th>
                    <th className="p-3 text-left">이후 강의와의 연결</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                      <td className="p-3 font-medium">{row.label}</td>
                      <td className="p-3">{row.logic}</td>
                      <td className="p-3">{row.meaning}</td>
                      <td className="p-3">{row.next}</td>
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
                      <dt className="mb-1" style={{ color: "var(--gray-400)" }}>
                        Q방법론의 논리
                      </dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.logic}</dd>
                    </div>
                    <div>
                      <dt className="mb-1" style={{ color: "var(--gray-400)" }}>
                        4-3강에서의 의미
                      </dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.meaning}</dd>
                    </div>
                    <div>
                      <dt className="mb-1" style={{ color: "var(--gray-400)" }}>
                        이후 강의와의 연결
                      </dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.next}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 sm:pt-12">
        <h2 className="font-semibold mb-4" style={{ fontSize: "22px", color: "var(--black)" }}>
          참고문헌
        </h2>
        <ol className="space-y-3 list-decimal pl-5">
          {references.map((ref) => (
            <li key={ref.key} style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)" }}>
              {ref.text}{" "}
              {"doi" in ref && ref.doi ? (
                <Link href={ref.doi} target="_blank" rel="noreferrer" style={{ color: "var(--brand)" }}>
                  [DOI]
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <div
        className="pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <Link href="/lessons/4-2" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 4-2. R방법론의 논리
        </Link>
      </div>
    </div>
  );
}
