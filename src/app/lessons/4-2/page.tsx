import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "4-2. R방법론의 논리 | Q방법론 온라인 강의",
  description:
    "R방법론은 사람을 지우는 방법이 아니라, 사람에게서 얻은 변수값을 통해 변수 간 일반 관계를 분석하는 사회과학의 표준적 분석 언어다.",
};

const references = [
  {
    key: "Bollen2002",
    text: (
      <>
        Bollen, K. A. (2002). Latent Variables in Psychology and the Social Sciences. <em>Annual Review of Psychology, 53</em>(1), 605-634.
      </>
    ),
    doi: "https://doi.org/10.1146/annurev.psych.53.100901.135239",
  },
  {
    key: "CronbachMeehl1955",
    text: (
      <>
        Cronbach, L. J., &amp; Meehl, P. E. (1955). Construct validity in psychological tests. <em>Psychological Bulletin, 52</em>(4), 281-302.
      </>
    ),
    doi: "https://doi.org/10.1037/h0040957",
  },
  {
    key: "Fabrigar1999",
    text: (
      <>
        Fabrigar, L. R., Wegener, D. T., MacCallum, R. C., &amp; Strahan, E. J. (1999). Evaluating the use of exploratory factor analysis in psychological research. <em>Psychological Methods, 4</em>(3), 272-299.
      </>
    ),
    doi: "https://doi.org/10.1037/1082-989X.4.3.272",
  },
  {
    key: "HowardHoffman2018",
    text: (
      <>
        Howard, M. C., &amp; Hoffman, M. E. (2018). Variable-Centered, Person-Centered, and Person-Specific Approaches: Where Theory Meets the Method. <em>Organizational Research Methods, 21</em>(4), 846-876.
      </>
    ),
    doi: "https://doi.org/10.1177/1094428117744021",
  },
  {
    key: "LaursenHoff2006",
    text: (
      <>
        Laursen, B. P., &amp; Hoff, E. (2006). Person-Centered and Variable-Centered Approaches to Longitudinal Data. <em>Merrill-Palmer Quarterly, 52</em>(3), 377-389.
      </>
    ),
    doi: "https://doi.org/10.1353/mpq.2006.0029",
  },
  {
    key: "Spearman1904",
    text: (
      <>
        Spearman, C. (1904). “General Intelligence,” Objectively Determined and Measured. <em>The American Journal of Psychology, 15</em>(2), 201-292.
      </>
    ),
    doi: "https://doi.org/10.2307/1412107",
  },
];

const cards = [
  {
    num: 1,
    title: "왜 먼저 R방법론을 제대로 읽어야 하는가",
    keyMessage: "Q방법론을 제대로 이해하려면 먼저 R방법론을 공정하게 이해해야 한다.",
    points: [
      "R방법론은 사회과학의 표준적 분석 언어다.",
      "R방법론을 낮추면 Q방법론의 차이도 흐려진다.",
      "4-2강은 4-3강으로 넘어가기 위한 공정한 기준선을 세운다.",
    ],
    imageSrc: "/images/4-2-card-01-read-r-fairly.webp",
    imageAlt: "연구문제에서 R방법론 렌즈와 Q방법론 렌즈가 갈라지는 장면",
    body: (
      <>
        {/* 카드 1 강의원고 입력 영역: 왜 먼저 R방법론을 제대로 읽어야 하는가 */}
        <p>
          Q방법론을 배우다 보면 자주 빠지는 함정이 있다.
          <br />
          Q방법론을 새롭고 흥미로운 방법으로 소개하려는 마음이 앞서,
          <br />
          R방법론을 너무 쉽게 낮추어 말하게 되는 것이다.
        </p>

        <p>
          “R방법론은 평균만 내는 방법이다.”
          <br />
          “R방법론은 사람을 지운다.”
          <br />
          “Q방법론은 그보다 더 깊다.”
          <br />
          이런 식의 설명이다.
        </p>

        <p>
          듣기에는 간단하지만, 정확한 설명은 아니다.
          <br />
          R방법론은 평균만 내는 방법이 아니다.
          <br />
          변수 간 관계를 분석하고, 집단 차이를 검토하고,
          <br />
          예측 모형을 만들고, 척도를 개발하며,
          <br />
          관측된 변수 뒤의 잠재 차원을 추론하는 정교한 분석 체계다.
        </p>

        <p>
          4-1강에서 이미 확인했듯이,
          <br />
          변수 중심 분석은 사람을 무시하지 않는다.
          <br />
          사람은 연구에서 사라지는 것이 아니라,
          <br />
          변수값을 제공하는 관측 단위로 들어온다.
          <br />
          연구자는 여러 사람에게서 얻은 변수값을 바탕으로
          <br />
          변수들이 어떻게 함께 움직이는지 분석한다.
        </p>

        <p>
          이 점을 공정하게 보아야 한다.
          <br />
          R방법론은 Q방법론의 반대편에 놓인 낡은 방법이 아니다.
          <br />
          다른 종류의 질문에 답하는 방법이다.
        </p>

        <p>
          어떤 변수가 어떤 결과와 관련되는지,
          <br />
          집단 평균이 어떻게 다른지,
          <br />
          여러 문항이 어떤 요인으로 묶이는지를 묻는 연구에는
          <br />
          R방법론이 강하다.
        </p>

        <p>
          그래서 4-2강은 비판 강의가 아니다.
          <br />
          먼저 R방법론의 논리를 제대로 세워보는 시간이다.
          <br />
          그래야 4-3강에서 Q방법론이 무엇을 다르게 놓는지도
          <br />
          더 선명하게 보인다.
        </p>

        <p>
          차이는 우열에서 나오지 않는다.
          <br />
          연구문제와 자료 구조의 적합성에서 나온다.
        </p>
      </>
    ),
  },
  {
    num: 2,
    title: "R자료의 기본 구조",
    keyMessage: "전형적인 R자료에서는 사람은 행에 놓이고, 변수는 열에 놓이며, 분석의 중심은 변수 간 관계가 된다.",
    points: [
      "행은 사람 또는 사례다.",
      "열은 변수 또는 문항이다.",
      "사람은 변수값을 제공하는 관측 단위이고, 분석의 중심은 변수 간 관계다.",
    ],
    imageSrc: "/images/4-2-card-02-r-data-structure.webp",
    imageAlt: "사람이 행에 놓이고 변수가 열에 놓인 R자료 구조",
    body: (
      <>
        {/* 카드 2 강의원고 입력 영역: R자료의 기본 구조 */}
        <p>
          R방법론의 논리를 이해하려면 먼저 자료 구조부터 보아야 한다.
          <br />
          전형적인 R자료는 행과 열로 이루어진다.
          <br />
          행에는 사람이나 사례가 놓이고, 열에는 변수나 문항이 놓인다.
        </p>

        <p>
          예를 들어 재난관리 연구를 떠올려보자.
          <br />
          한 연구자가 여러 소방공무원에게 재난위험 인식, 조직공정성 인식,
          <br />
          교육훈련 경험, 직무만족, 예방행동 의도를 측정했다고 하자.
        </p>

        <p>
          이때 한 사람은 표의 한 줄이 되고,
          <br />
          각각의 측정 항목은 하나의 변수 열이 된다.
          <br />
          사람은 사라지는 것이 아니라, 각 변수값을 제공하는 관측 단위로 들어온다.
        </p>

        <p>
          다만 분석의 초점은 한 사람의 전체 관점이 아니라,
          <br />
          여러 사람에게서 얻은 변수값들이 어떤 관계를 이루는가에 놓인다.
          <br />
          위험인식이 높은 사람은 예방행동 의도도 높은가,
          <br />
          조직공정성 인식이 높은 사람은 직무만족도 높은가,
          <br />
          교육훈련 경험이 많은 집단은 특정 성과점수가 더 높은가를 묻는 식이다.
        </p>

        <p>
          여러 문항이 하나의 척도나 잠재 차원으로 묶일 수 있는지도 살펴볼 수 있다.
          <br />
          여기서 중요한 것은 `사람이 사라졌다`는 말이 아니다.
          <br />
          오히려 많은 사람의 차이가 자료의 바탕이 된다.
        </p>

        <p>
          다만 그 차이는 사람의 전체 배열로 읽히기보다,
          <br />
          변수값들의 분포와 관계로 분석된다.
          <br />
          그래서 R자료의 기본 구조는 단순하지만 강력하다.
        </p>

        <p>
          사람은 행에 놓이고, 변수는 열에 놓인다.
          <br />
          연구자는 열과 열 사이의 관계, 집단 간 평균 차이,
          <br />
          변수들이 함께 이루는 공통 구조를 분석한다.
          <br />
          이 구조가 R방법론의 출발점이다.
        </p>
      </>
    ),
  },
  {
    num: 3,
    title: "R방법론이 잘 답하는 질문",
    keyMessage: "R방법론은 변수 간 관계, 평균 차이, 예측, 척도 개발, 잠재 차원 추론에 강하다.",
    points: [
      "어떤 변수가 어떤 결과와 관련되는가를 분석한다.",
      "집단 평균 차이와 예측 구조를 검토한다.",
      "여러 문항이 어떤 척도나 잠재 차원으로 묶이는지 살핀다.",
    ],
    imageSrc: "/images/4-2-card-03-questions-r-answers-well.webp",
    imageAlt: "R자료 표에서 평균 차이와 상관, 예측, 척도 개발 질문이 뻗어나가는 장면",
    body: (
      <>
        {/* 카드 3 강의원고 입력 영역: R방법론이 잘 답하는 질문 */}
        <p>
          R방법론이 잘 답하는 질문은 비교적 분명하다.
          <br />
          먼저, 어떤 변수가 어떤 결과와 관련되는가를 물을 수 있다.
        </p>

        <p>
          예를 들어 재난위험 인식이 예방행동 의도와 관련되는지,
          <br />
          조직공정성 인식이 직무만족과 관련되는지 분석할 수 있다.
        </p>

        <p>
          집단 사이의 평균 차이도 살펴볼 수 있다.
          <br />
          교육을 받은 집단과 받지 않은 집단의 평균 점수가 다른지,
          <br />
          경력 5년 이하 집단과 20년 이상 집단의 위험인식 수준이 다른지 비교하는 식이다.
        </p>

        <p>
          어떤 변수들이 함께 움직이는지도 중요한 질문이다.
          <br />
          여러 태도 문항이 비슷한 방향으로 움직인다면,
          <br />
          연구자는 그 문항들이 하나의 공통된 차원을 반영하는지 물을 수 있다.
        </p>

        <p>
          또 어떤 변수가 결과를 예측하는지도 분석할 수 있다.
          <br />
          정책 수용성, 예방행동, 직무만족, 조직몰입 같은 결과를 설명하기 위해
          <br />
          여러 예측 변수를 함께 살펴보는 것이다.
        </p>

        <p>
          이때 R방법론은 변수들 사이의 상대적 영향과 설명력을 검토하는 데 강하다.
          <br />
          그래서 척도 개발이나 잠재구성개념을 추론하는 작업에서도 중요한 역할을 한다.
        </p>

        <p>
          사회과학의 많은 개념은 직접 손으로 만질 수 없다.
          <br />
          신뢰, 만족, 위험인식, 회복탄력성, 조직공정성 같은 개념은
          <br />
          여러 관측 문항을 통해 간접적으로 측정된다.
        </p>

        <p>
          R방법론은 이런 문항들이 이론적 개념과 어떻게 연결되는지 검토하게 해준다.
          <br />
          정책 효과를 평가하거나, 조직을 진단하거나,
          <br />
          교육 프로그램의 성과를 비교하거나,
          <br />
          심리·사회적 척도를 개발할 때 강한 이유가 여기에 있다.
        </p>

        <p>
          따라서 R방법론을 `평균만 내는 방법`이라고 이해하면 안 된다.
          <br />
          평균은 그중 하나의 도구일 뿐이다.
        </p>

        <p>
          R방법론의 더 넓은 힘은 많은 사례에서 변수값을 비교하고,
          <br />
          변수 간 관계를 분석하고,
          <br />
          이론적 구성개념을 검토하고,
          <br />
          예측 가능한 구조를 세우는 데 있다.
        </p>
      </>
    ),
  },
  {
    num: 4,
    title: "상관은 변수들이 함께 움직이는 방식을 본다",
    keyMessage: "R방법론에서 상관은 두 변수가 함께 변하는 정도를 보여준다.",
    points: [
      "R의 상관은 변수 간 공변을 본다.",
      "상관은 관계의 방향과 강도를 요약한다.",
      "상관은 회귀분석, 구조모형, 요인분석의 기초 언어가 된다.",
    ],
    imageSrc: "/images/4-2-card-04-correlation-among-variables.webp",
    imageAlt: "두 변수의 점들이 함께 움직이는 산점도 장면",
    body: (
      <>
        {/* 카드 4 강의원고 입력 영역: 상관은 변수들이 함께 움직이는 방식을 본다 */}
        <p>
          R방법론에서 상관은 아주 중요한 언어다.
          <br />
          상관은 두 변수가 함께 어떻게 움직이는지를 보여준다.
        </p>

        <p>
          한 변수가 높아질 때 다른 변수도 함께 높아지는지,
          <br />
          한쪽이 높아질수록 다른 쪽은 낮아지는지,
          <br />
          아니면 뚜렷한 관련이 없는지를 살펴보는 도구다.
        </p>

        <p>
          예를 들어 위험인식과 예방행동 의도를 측정했다고 하자.
          <br />
          여러 사람에게서 두 변수값을 얻었을 때,
          <br />
          위험인식이 높은 사람이 예방행동 의도도 높은 경향을 보인다면
          <br />
          두 변수는 양의 상관을 가질 수 있다.
        </p>

        <p>
          조직공정성과 직무만족도 비슷하게 볼 수 있다.
          <br />
          조직공정성 인식이 높은 사람이 직무만족도 높게 보고하는 경향이 있다면,
          <br />
          연구자는 두 변수가 함께 움직인다고 말할 수 있다.
        </p>

        <p>
          이때 상관은 두 변수 사이의 관계가 어느 방향으로 나타나는지,
          <br />
          그리고 그 관계가 얼마나 강한지를 간단히 요약해준다.
        </p>

        <p>
          물론 상관이 곧 인과를 뜻하는 것은 아니다.
          <br />
          두 변수가 함께 움직인다는 사실만으로
          <br />
          어느 쪽이 원인이고 어느 쪽이 결과인지 단정할 수는 없다.
        </p>

        <p>
          그래도 상관은 변수 간 관계를 탐색하고,
          <br />
          더 복잡한 분석으로 나아가기 위한 중요한 출발점이 된다.
        </p>

        <p>
          상관은 회귀분석, 구조방정식 모형, 요인분석의 기초 언어이기도 하다.
          <br />
          여러 변수가 어떤 관계망을 이루는지 보아야 예측 모형을 만들 수 있고,
          <br />
          여러 문항이 어떤 공통 차원으로 묶이는지도 검토할 수 있다.
        </p>

        <p>
          여기서 4-5강의 내용을 미리 끌어오지는 않겠다.
          <br />
          4-5강에서는 같은 `상관`이라는 말이
          <br />
          R방법론과 Q방법론에서 어떻게 달라지는지 더 자세히 비교할 것이다.
        </p>

        <p>
          오늘은 R방법론 안에서의 상관만 기억하면 된다.
          <br />
          R에서 상관은 변수와 변수 사이의 공변을 보는 언어다.
        </p>
      </>
    ),
  },
  {
    num: 5,
    title: "요인분석은 변수 뒤의 잠재 차원을 추론한다",
    keyMessage: "R방법론에서 요인분석은 여러 변수 뒤에 놓인 잠재 차원을 추론하는 데 쓰인다.",
    points: [
      "요인분석은 변수들이 공유하는 공통 구조를 찾는다.",
      "구성타당도는 측정된 변수와 이론적 구성개념을 연결하는 논리다.",
      "탐색적 요인분석은 단순 데이터 축소가 아니라 잠재 구성개념을 탐색하는 절차다.",
    ],
    imageSrc: "/images/4-2-card-05-factor-analysis-latent-dimensions.webp",
    imageAlt: "관측 문항들이 잠재 차원과 연결되는 장면",
    body: (
      <>
        {/* 카드 5 강의원고 입력 영역: 요인분석은 변수 뒤의 잠재 차원을 추론한다 */}
        <p>
          R방법론에서 요인분석은 중요한 역할을 한다.
          <br />
          여러 변수가 함께 움직일 때,
          <br />
          연구자는 그 뒤에 어떤 공통 구조가 있는지 묻는다.
        </p>

        <p>
          그 공통 구조는 때로 능력, 태도, 성격, 신뢰, 만족,
          <br />
          위험인식 같은 잠재 차원으로 해석된다.
        </p>

        <p>
          역사적으로는 Spearman(1904)을 짧게 떠올릴 수 있다.
          <br />
          Spearman은 여러 지적 수행 사이의 상관을 바탕으로
          <br />
          공통 요인을 추론했다.
        </p>

        <p>
          이 출발점은 이후 심리측정과 사회과학에서
          <br />
          변수들 뒤의 잠재 차원을 찾는 중요한 전통으로 이어졌다.
        </p>

        <p>
          하지만 이 강의에서 더 중요한 것은
          <br />
          요인분석을 단순한 기술 절차로만 보지 않는 것이다.
          <br />
          사회과학의 많은 개념은 직접 관찰되지 않는다.
        </p>

        <p>
          우리는 `위험인식`을 손으로 만질 수 없고,
          <br />
          `조직공정성`을 눈으로 볼 수 없으며,
          <br />
          `정책신뢰`를 계량기처럼 직접 측정할 수도 없다.
        </p>

        <p>
          대신 여러 문항과 관측 지표를 통해
          <br />
          그런 개념을 추론한다.
        </p>

        <p>
          Cronbach &amp; Meehl(1955)이 말한 구성타당도는
          <br />
          바로 이 지점에서 중요해진다.
          <br />
          어떤 검사가 이론적 구성개념을 얼마나 잘 반영하는지는
          <br />
          하나의 계수만으로 끝나지 않는다.
        </p>

        <p>
          관찰 가능한 속성, 이론적 구성개념,
          <br />
          그리고 그 둘 사이의 관계가
          <br />
          법칙적 망 안에서 함께 검토되어야 한다.
        </p>

        <p>
          다시 말해 측정된 변수는 그 자체로 끝나는 것이 아니라,
          <br />
          이론적 구성개념과 연결되어야 한다.
        </p>

        <p>
          Bollen(2002)의 잠재변수 논의도 이 맥락에서 도움이 된다.
          <br />
          잠재변수는 단순히 `보이지 않는 변수`라는 말만으로는 충분하지 않다.
        </p>

        <p>
          사회과학의 여러 통계 모형에서 잠재변수는
          <br />
          관측된 값으로 직접 드러나지는 않지만,
          <br />
          관측변수들 사이의 관계를 설명하기 위해 필요한
          <br />
          개념적이면서도 통계적인 장치다.
        </p>

        <p>
          Fabrigar et al.(1999)는 탐색적 요인분석을 이해할 때 특히 중요하다.
          <br />
          이들은 주성분 분석과 탐색적 요인분석을 구분한다.
        </p>

        <p>
          주성분 분석은 자료를 줄이는 데 더 가깝고,
          <br />
          탐색적 요인분석은 관측변수들의 상관관계를 설명하기 위해
          <br />
          그 배후의 잠재 구성개념을 찾으려는 공통 요인 모형에 기반한다.
        </p>

        <p>
          그래서 EFA를 단순히 문항 수를 줄이는 절차로만 이해하면 부족하다.
        </p>

        <p>
          이 지점에서 R방법론의 강점이 잘 드러난다.
          <br />
          R방법론은 사람들이 응답한 변수값을 바탕으로
          <br />
          변수들 사이의 공통 구조를 분석하고,
          <br />
          그 구조를 이론적 구성개념과 연결하려 한다.
        </p>

        <p>
          좋은 R연구는 문항을 많이 모아 평균을 내는 데서 멈추지 않는다.
          <br />
          측정된 변수들이 어떤 개념을 반영하는지,
          <br />
          그 개념이 다른 변수들과 어떤 관계를 갖는지,
          <br />
          그 해석이 이론적으로 타당한지를 함께 묻는다.
        </p>

        <p>
          다만 여기서 요인 수 결정, 회전 방식, 고유값 기준,
          <br />
          스크리 검사, 평행분석 같은 세부 절차까지 들어가지는 않겠다.
        </p>

        <p>
          Cattell(1966)의 스크리 검사는
          <br />
          요인 수를 판단할 때 중요한 문헌이지만,
          <br />
          이 강의의 중심 근거는 아니다.
        </p>

        <p>
          그런 세부 논의는 4-5강과
          <br />
          이후의 요인분석 절차 강의에서 더 알맞게 다룰 수 있다.
        </p>

        <p>
          오늘 카드 5에서 기억할 것은 하나다.
          <br />
          R방법론의 요인분석은 변수 뒤의 잠재 차원을 추론하는 언어다.
        </p>

        <p>
          그리고 그 언어는 구성타당도, 잠재변수,
          <br />
          탐색적 요인분석의 논리와 함께 볼 때 더 정확해진다.
        </p>
      </>
    ),
  },
  {
    num: 6,
    title: "R방법론의 강점을 알아야 Q방법론의 차이도 보인다",
    keyMessage: "Q와 R의 차이는 우열이 아니라 연구문제와 자료 구조의 적합성에서 나온다.",
    points: [
      "R방법론은 변수 간 일반 관계와 예측 구조에 강하다.",
      "Q방법론은 다음 강의에서 별도의 논리로 다룬다.",
      "방법 선택은 선호가 아니라 연구문제 적합성의 문제다.",
    ],
    imageSrc: "/images/4-2-card-06-r-strengths-q-differences.webp",
    imageAlt: "연구문제 나침반 양쪽에 R방법론과 Q방법론 렌즈가 놓인 장면",
    body: (
      <>
        {/* 카드 6 강의원고 입력 영역: R방법론의 강점을 알아야 Q방법론의 차이도 보인다 */}
        <p>
          이제 4-2강의 결론을 정리해보자.
          <br />
          R방법론은 사람을 지우는 방법이 아니다.
          <br />
          사람에게서 얻은 변수값을 바탕으로
          <br />
          변수 간 일반 관계를 분석하는 방법이다.
        </p>

        <p>
          R방법론은 많은 연구문제에 강하다.
          <br />
          어떤 변수가 어떤 결과와 관련되는지,
          <br />
          집단 평균이 어떻게 다른지,
          <br />
          어떤 변수가 결과를 예측하는지,
          <br />
          여러 문항이 어떤 잠재 차원으로 묶이는지 분석할 수 있다.
        </p>

        <p>
          사회과학이 오랫동안 R방법론을
          <br />
          표준적 분석 언어로 사용해 온 이유도 여기에 있다.
        </p>

        <p>
          그렇다고 모든 연구문제가
          <br />
          변수 간 관계만으로 충분히 설명되는 것은 아니다.
        </p>

        <p>
          어떤 질문은 사람들이 특정 주제를
          <br />
          어떻게 전체적으로 배열하는지,
          <br />
          무엇을 앞세우고 무엇을 뒤로 미루는지,
          <br />
          서로 다른 판단 논리가 어떻게 나타나는지를 물어야 한다.
        </p>

        <p>
          그 질문은 다음 강의인 4-3강에서
          <br />
          본격적으로 다룰 것이다.
        </p>

        <p>
          여기서 중요한 것은 우열이 아니다.
          <br />
          R방법론이 더 낮고 Q방법론이 더 높은 것이 아니다.
          <br />
          두 방법은 서로 다른 질문에 답한다.
        </p>

        <p>
          R방법론은 변수 간 일반 관계를 잘 보여주고,
          <br />
          Q방법론은 특정 주제에 대한
          <br />
          관점 배열의 구조를 드러내는 데 강하다.
        </p>

        <p>
          따라서 방법론 선택은 연구자의 취향으로 정해지지 않는다.
          <br />
          내가 묻는 질문이 변수 간 관계에 관한 것인지,
          <br />
          아니면 사람들이 만든 전체 배열과 관점 구조에 관한 것인지
          <br />
          먼저 따져야 한다.
        </p>

        <p>
          4-2강에서 R방법론을 공정하게 살펴본 이유가 바로 여기에 있다.
          <br />
          R방법론의 힘을 정확히 이해해야
          <br />
          Q방법론의 차이도 과장 없이 보인다.
        </p>

        <p>
          다음 강의에서는 그 차이를
          <br />
          Q방법론의 자료 구조와 분석 논리 안에서 다시 살펴본다.
        </p>
      </>
    ),
  },
];

const summaryItems = [
  "R방법론은 사람을 지우는 방법이 아니라, 사람에게서 얻은 변수값을 통해 변수 간 일반 관계를 분석하는 방법이다.",
  "전형적인 R자료에서 행은 사람 또는 사례이고, 열은 변수 또는 문항이다.",
  "R방법론에서 사람은 변수값을 제공하는 관측 단위이고, 분석의 중심은 변수 간 관계다.",
  "R방법론은 평균 차이, 상관, 예측, 척도 개발, 잠재 차원 추론에 강하다.",
  "R에서 상관은 변수들이 함께 움직이는 정도를 보여준다.",
  "R에서 요인분석은 관측변수 뒤의 잠재 차원을 추론하는 언어가 될 수 있다.",
  "R방법론의 강점을 정확히 알아야 Q방법론의 차이도 연구문제 적합성의 문제로 이해할 수 있다.",
];

const comparisonRows = [
  { label: "자료 구조", logic: "행=사람/사례, 열=변수/문항", meaning: "사람은 변수값을 제공하는 관측 단위", next: "4-4 표본 개념 차이로 확장" },
  { label: "분석 중심", logic: "변수 간 관계", meaning: "사람의 전체 관점보다 변수들의 공변 구조를 분석", next: "4-3 Q방법론의 배열 중심과 대비" },
  { label: "잘 답하는 질문", logic: "평균 차이, 상관, 예측, 척도, 잠재 차원", meaning: "변수 간 일반 관계를 파악하는 데 강함", next: "4-6 방법 선택 기준으로 연결" },
  { label: "상관", logic: "변수 간 공변", meaning: "두 변수가 함께 움직이는 정도를 요약", next: "4-5 상관 대상 차이에서 심화" },
  { label: "요인분석", logic: "변수 뒤의 잠재 차원 추론", meaning: "구성타당도, 잠재변수, EFA 논리와 연결", next: "4-5, 9장, 10장에서 절차 심화" },
  { label: "강점", logic: "일반화, 예측, 척도 개발, 잠재구조 탐색", meaning: "사회과학의 표준적 분석 언어", next: "Q와의 우열이 아니라 적합성 비교" },
  { label: "주의할 오해", logic: "평균만 내는 낡은 방법이라는 오해", meaning: "R방법론을 공정하게 설명해야 함", next: "Q방법론 우월론 방지" },
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

export default function Lesson42Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "4-2. R방법론의 논리" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-05-17"
        title="R방법론의 논리"
        description="R방법론은 사람을 지우는 방법이 아니라, 사람에게서 얻은 변수값을 통해 변수 간 일반 관계를 분석하는 사회과학의 표준적 분석 언어다."
        imageSrc="/images/4-2-hero-r-methodology-logic.webp"
        imageAlt="여러 사람에게서 얻은 변수값이 상관과 잠재 차원으로 연결되는 장면"
      />

      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          {/* 도입 강의원고 입력 영역: 왜 먼저 R방법론을 제대로 읽어야 하는가 */}
        <p>
          3-4강에서는 Q연구의 보고 기준과 재현가능성 문제를 다루었다.
          <br />
          핵심은 단순했다. 연구자가 어떤 절차를 밟았고, 어떤 판단을 했는지 독자가 따라갈 수 있어야 한다는 것이다. 보고 기준은 형식이 아니라, 연구자의 설계와 해석을 검토 가능하게 만드는 장치였다.
        </p>

        <p>
          4-1강에서는 질문을 한 걸음 앞쪽으로 옮겼다.
          <br />
          좋은 연구는 무엇을 했는지 보고하는 데서 끝나지 않는다. 애초에 무엇을 분석의 중심에 놓았는지도 분명해야 한다.
        </p>

        <p>
          사람에게서 얻은 변수값을 중심에 놓는가.
          <br />
          아니면 한 사람이 만든 전체 배열을 중심에 놓는가.
          <br />
          이 질문이 4장 전체의 출발점이다.
        </p>

        <p>
          이제 4-2강에서는 그중 한 축인 R방법론을 차분히 살펴보려 한다.
          <br />
          여기서 말하는 R방법론은 통계 프로그램 R이 아니다. Q방법론 문헌에서 말하는 전통적 변수 중심 분석의 논리다.
        </p>

        <p>
          여러 사람에게서 여러 변수값을 얻고, 그 변수들이 서로 어떤 관계를 맺는지 분석하는 방식이다.
        </p>

        <p>
          이 강의에서 먼저 조심할 점이 있다.
          <br />
          Q방법론을 설명하려고 R방법론을 낮추어 말하면 안 된다.
        </p>

        <p>
          R방법론은 사람을 무시하는 낡은 방법이 아니다.
          <br />
          오히려 사회과학이 오랫동안 다듬어 온 강력한 분석 언어다. 평균, 분산, 상관, 회귀, 요인분석은 많은 사람에게서 얻은 자료를 비교하고, 일반적 관계를 파악하고, 이론적 구성개념을 검토하는 데 중요한 역할을 해왔다.
        </p>

        <p>
          예를 들어 재난위험 인식이 예방행동 의도를 높이는지, 조직공정성 인식이 직무만족과 관련되는지, 교육 프로그램 참여가 성과점수의 평균 차이를 만드는지 묻는 연구가 있다.
          <br />
          이런 질문에는 R방법론이 잘 맞는다. 연구자는 사람에게서 얻은 측정값을 바탕으로 변수 간 관계, 집단 평균 차이, 예측 구조, 잠재 차원을 분석할 수 있다.
        </p>

        <p>
          그래서 4-2강의 목표는 R방법론의 한계를 다시 비판하는 데 있지 않다.
          <br />
          2-1강에서 우리는 이미 기존 사회과학 방법론이 주관성 연구 앞에서 어떤 한계를 보였는지 살펴보았다. 2-4강에서는 Q와 R이 단순한 행렬 전치 관계가 아니라, 자료와 상관, 요인해석의 의미가 달라지는 관계임을 정리했다.
        </p>

        <p>
          오늘은 그 이야기를 되풀이하지 않는다.
        </p>

        <p>
          오늘의 목표는 더 단순하다.
          <br />
          R방법론은 어떤 자료 구조를 갖는가. 무엇을 분석의 중심에 놓는가. 어떤 질문에 강한가. 상관과 요인분석은 R방법론 안에서 어떤 뜻을 갖는가.
        </p>

        <p>
          이 기준선을 세워야 다음 강의인 4-3강에서 Q방법론의 논리도 더 또렷하게 보인다.
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
              4-2강에서 기억할 핵심
            </h3>
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              {summaryItems.map((item, index) => (
                <div
                  key={item}
                  className={index === summaryItems.length - 1 ? "sm:col-span-2" : ""}
                  style={{
                    padding: "16px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.72)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="shrink-0 text-center font-semibold"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "999px",
                        background: "rgba(69, 111, 238, 0.1)",
                        color: "var(--brand)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        lineHeight: "24px",
                      }}
                    >
                      {index + 1}
                    </span>
                    <p style={{ color: "var(--gray-700)" }}>{item}</p>
                  </div>
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
                    <th className="p-3 text-left">R방법론의 논리</th>
                    <th className="p-3 text-left">4-2강에서의 의미</th>
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
                        R방법론의 논리
                      </dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.logic}</dd>
                    </div>
                    <div>
                      <dt className="mb-1" style={{ color: "var(--gray-400)" }}>
                        4-2강에서의 의미
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
              {ref.doi ? (
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
        <Link href="/lessons/4-1" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 4-1. 변수 중심 분석과 사람 중심 분석
        </Link>
        <Link href="/lessons/4-3" className="text-sm text-right" style={{ color: "var(--brand-deep)" }}>
          4-3. Q방법론의 논리 →
        </Link>
      </div>
    </div>
  );
}
