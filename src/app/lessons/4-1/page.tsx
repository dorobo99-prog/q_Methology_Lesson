import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "4-1. 변수 중심 분석과 사람 중심 분석 | Q방법론 온라인 강의",
  description:
    "Q와 R의 차이를 계산 방향이 아니라 무엇을 분석의 중심에 놓는가의 차이로 살핀다.",
};

const references = [
  {
    key: "BergmanMagnusson1997",
    text: (
      <>
        Bergman, L. R., &amp; Magnusson, D. (1997). A person-oriented approach in research on developmental psychopathology. <em>Development and Psychopathology, 9</em>(2), 291-319.
      </>
    ),
    doi: "https://doi.org/10.1017/S095457949700206X",
  },
  {
    key: "BergmanTrost2006",
    text: (
      <>
        Bergman, L. R., &amp; Trost, K. (2006). The person-oriented versus the variable-oriented approach: Are they complementary, opposites, or exploring different worlds? <em>Merrill-Palmer Quarterly, 52</em>(3), 601-632.
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
    doi: "https://doi.org/10.22488/okstate.93.100504",
  },
  {
    key: "Hofmans2020",
    text: (
      <>
        Hofmans, J., Wille, B., &amp; Schreurs, B. (2020). Person-centered methods in vocational research. <em>Journal of Vocational Behavior, 118</em>, 103398.
      </>
    ),
    doi: "https://doi.org/10.1016/j.jvb.2020.103398",
  },
  {
    key: "HowardHoffman2018",
    text: (
      <>
        Howard, M. C., &amp; Hoffman, M. E. (2018). Variable-centered, person-centered, and person-specific approaches: Where theory meets the method. <em>Organizational Research Methods, 21</em>(4), 846-876.
      </>
    ),
    doi: "https://doi.org/10.1177/1094428117744021",
  },
  {
    key: "LaursenHoff2006",
    text: (
      <>
        Laursen, B., &amp; Hoff, E. (2006). Person-centered and variable-centered approaches to longitudinal data. <em>Merrill-Palmer Quarterly, 52</em>(3), 377-389.
      </>
    ),
    doi: "https://doi.org/10.1353/mpq.2006.0029",
  },
  {
    key: "MeyerMorin2016",
    text: (
      <>
        Meyer, J. P., &amp; Morin, A. J. S. (2016). A person-centered approach to commitment research: Theory, research, and methodology. <em>Journal of Organizational Behavior, 37</em>(4), 584-612.
      </>
    ),
    doi: "https://doi.org/10.1002/job.2085",
  },
  {
    key: "Molenaar2004",
    text: (
      <>
        Molenaar, P. C. M. (2004). A manifesto on psychology as idiographic science: Bringing the person back into scientific psychology, this time forever. <em>Measurement: Interdisciplinary Research and Perspectives, 2</em>(4), 201-218.
      </>
    ),
    doi: "https://doi.org/10.1207/s15366359mea0204_1",
  },
  {
    key: "WattsStenner2005",
    text: (
      <>
        Watts, S., &amp; Stenner, P. (2005). Doing Q methodology: Theory, method and interpretation. <em>Qualitative Research in Psychology, 2</em>(1), 67-91.
      </>
    ),
    doi: "https://doi.org/10.1191/1478088705qp022oa",
  },
  {
    key: "Woo2018",
    text: (
      <>
        Woo, S. E., Jebb, A. T., Tay, L., &amp; Parrigon, S. (2018). Putting the “person” in the center: Review and synthesis of person-centered approaches and methods in organizational science. <em>Organizational Research Methods, 21</em>(4), 814-845.
      </>
    ),
    doi: "https://doi.org/10.1177/1094428117752467",
  },
];

const cards = [
  {
    num: 1,
    title: "보고 기준 다음에는 분석의 중심을 물어야 한다",
    keyMessage:
      "좋은 연구는 절차를 잘 보고하는 데서 끝나지 않고, 무엇을 분석의 중심에 놓았는지 분명히 해야 한다.",
    points: [
      "보고 기준은 연구자의 판단을 따라가게 만드는 장치다.",
      "4-1강은 그 판단의 출발점, 즉 분석 중심을 묻는다.",
      "분석 중심이 달라지면 연구문제, 표본, 자료, 상관, 요인해석도 달라진다.",
    ],
    imageSrc: "/images/4-1-card-01-analysis-center.webp",
    imageAlt: "보고 체크리스트에서 변수 중심 렌즈와 배열 중심 렌즈로 시선이 이동하는 장면",
    body: (
      <>
        {/* 카드 1 강의원고 입력 영역: 보고 기준 다음에는 분석의 중심을 물어야 한다 */}
        <p>
          3-4강에서는 좋은 Q연구가 무엇을 남겨야 하는지 살펴봤다.
          <br />
          Q-set 개발 과정, P-set 선정 이유, Q-sort 시행 조건, 요인추출과 회전,
          <br />
          요인해석의 근거—이것들이 독자에게 보여야 한다는 것이었다.
        </p>

        <p>
          이제 질문을 한 단계 앞으로 옮긴다.
          <br />
          연구자가 무엇을 했는지 남기기 전에,
          <br />
          무엇을 분석의 중심에 놓았는지 먼저 물어야 한다.
        </p>

        <p>
          R방법론에서는 사람에게서 얻은 변수값이 분석의 중심이다.
          <br />
          사람은 변수값을 제공하는 사례로 연구에 들어온다.
          <br />
          연구자는 그 값들을 모아 평균 차이, 상관, 예측 구조, 잠재 요인을 분석한다.
        </p>

        <p>
          Q방법론에서는 한 사람이 만든 전체 배열이 중심이다.
          <br />
          참여자가 진술문들을 자기 기준으로 비교하고 배열한
          <br />
          Q-sort 전체가 하나의 자료가 된다.
        </p>

        <p>
          이 차이는 표현의 문제가 아니다.
          <br />
          분석의 중심이 달라지면 연구문제도, 표본의 의미도,
          <br />
          상관과 요인해석의 의미도 달라진다.
          <br />
          2-4강에서 Q방법론이 R방법론의 단순 전치가 아니라고 했던 이유가 여기 있다.
        </p>

        <p>
          4장은 이 질문을 세분화하는 장이다.
          <br />
          4-1강에서 전체 지도를 보고,
          <br />
          4-2강부터 각 축을 하나씩 살펴간다.
        </p>
      </>
    ),
  },
  {
    num: 2,
    title: "변수 중심 분석은 사람을 무시하지 않는다",
    keyMessage:
      "변수 중심 분석은 사람을 무시하는 방법이 아니라, 사람에게서 얻은 변수값을 통해 일반적 관계를 분석하는 방법이다.",
    points: [
      "개인은 변수값을 제공하는 사례로 들어온다.",
      "분석의 중심은 변수 간 관계, 평균 차이, 예측 구조에 놓인다.",
      "일반화, 척도화, 인과모형 검토에 강하다.",
    ],
    imageSrc: "/images/4-1-card-02-variable-centered.webp",
    imageAlt: "여러 사람에게서 얻은 자료가 변수 관계 분석으로 정리되는 장면",
    body: (
      <>
        {/* 카드 2 강의원고 입력 영역: 변수 중심 분석은 사람을 무시하지 않는다 */}
        <p>
          Q방법론을 설명할 때 흔히 빠지는 함정이 있다.
          <br />
          R방법론을 낮춰야 Q방법론이 돋보인다고 생각하는 것이다.
          <br />
          그렇지 않다.
        </p>

        <p>
          R방법론은 많은 사람에게서 얻은 측정값을 바탕으로
          <br />
          변수들 사이의 관계를 분석하는 데 강한 방법이다.
          <br />
          재난위험 인식이 높을수록 예방행동 의도가 높아지는지,
          <br />
          조직공정성이 직무만족에 영향을 주는지,
          <br />
          교육 프로그램이 성과점수의 차이를 만드는지—
          <br />
          이런 질문에는 변수 중심 분석이 맞다.
        </p>

        <p>
          Laursen &amp; Hoff(2006)는 변수 중심 접근이
          <br />
          변수 간 관계와 예측 변인의 상대적 중요성을 파악하는 데
          <br />
          강점이 있다고 설명한다.
          <br />
          Howard &amp; Hoffman(2018)도 모집단 수준의 평균화된 구조를
          <br />
          간결하게 제시하는 장점을 지적한다.
        </p>

        <p>
          R방법론은 Q방법론의 반대편에 있는 낡은 방법이 아니다.
          <br />
          다른 질문에 답하는 분석 렌즈다.
        </p>

        <p>
          Q방법론은 R방법론이 실패한 자리에 등장하는 게 아니다.
          <br />
          R방법론과 다른 종류의 질문을 다루기 위해 필요한 방법이다.
          <br />
          이 기준선을 잡아야 다음 단계로 넘어갈 수 있다.
        </p>
      </>
    ),
  },
  {
    num: 3,
    title: "사람 중심 분석은 전체 패턴을 본다",
    keyMessage:
      "사람 중심 분석은 개인을 변수값의 묶음으로만 보지 않고, 개인이나 하위집단이 가진 전체 패턴을 보려 한다.",
    points: [
      "개인이나 하위집단의 전체 구성에 관심을 둔다.",
      "평균 관계보다 패턴, 조합, 프로파일 차이를 중시한다.",
      "Q방법론은 이 감각을 주관성의 전체 배열 분석으로 연결한다.",
    ],
    imageSrc: "/images/4-1-card-03-person-centered-pattern.webp",
    imageAlt: "한 사람 또는 소수 집단의 여러 특성이 하나의 프로파일 패턴으로 연결되는 장면",
    body: (
      <>
        {/* 카드 3 강의원고 입력 영역: 사람 중심 분석은 전체 패턴을 본다 */}
        <p>
          사람 중심 분석은 개인을 변수값의 묶음으로만 보지 않으려는
          <br />
          문제의식에서 출발한다.
          <br />
          한 변수의 점수가 아니라,
          <br />
          여러 요소가 한 사람 안에서 어떤 패턴으로 결합되어 있는가를 본다.
        </p>

        <p>
          Bergman &amp; Magnusson(1997)은 개인을
          <br />
          여러 구성요소가 상호작용하며 기능하는 조직화된 전체로 본다.
          <br />
          특정 요소의 의미도 전체 패턴 속에서 이해된다는 것이다.
        </p>

        <p>
          Bergman &amp; Trost(2006)도 같은 맥락에서,
          <br />
          사람 중심 접근이 개인을 통합된 전체로 보고
          <br />
          여러 구성요소를 분할되지 않은 패턴으로 다룬다고 설명한다.
          <br />
          그러면서 변수 중심 접근과 사람 중심 접근은
          <br />
          적대 관계가 아니라 상호보완적으로 작동할 수 있다고 본다.
        </p>

        <p>
          현대 조직·직업연구에서도 사람 중심 방법은 활발히 논의된다.
          <br />
          Woo et al.(2018)은 조직과학에서 사람 중심 방법의 개념적 혼란을 정리했고,
          <br />
          Hofmans et al.(2020)은 잠재계층분석·잠재프로파일분석 등을
          <br />
          직업연구 맥락에서 소개한다.
        </p>

        <p>
          다만 Q방법론은 이 방법들과 같지 않다.
          <br />
          군집분석, 잠재계층분석, 잠재프로파일분석은
          <br />
          사람 중심 접근의 넓은 계열에 들어가지만,
          <br />
          Q방법론과 분석 논리가 같은 것은 아니다.
        </p>

        <p>
          Q방법론이 이 흐름과 연결되는 지점은
          <br />
          “전체 패턴을 본다”는 감각이다.
          <br />
          한 사람이 진술문들을 어떻게 배열했는지,
          <br />
          그 배열 전체가 어떤 관점 구조를 갖는지를 본다.
        </p>

        <p>
          사람 중심 분석은 Q방법론을 설명하기 위한 넓은 배경이다.
          <br />
          4-3강에서는 Q방법론이 이 감각을
          <br />
          어떻게 고유한 주관성 연구 논리로 발전시키는지 살펴볼 것이다.
        </p>
      </>
    ),
  },
  {
    num: 4,
    title: "평균을 보면 경향이 보이고, 배열을 보면 논리가 보인다",
    keyMessage:
      "평균은 집단의 중심 경향을 보여주고, 배열은 한 사람이 무엇을 앞세우고 무엇을 뒤로 미루는지 보여준다.",
    points: [
      "평균은 집단 수준의 일반 경향을 보여준다.",
      "전체 배열은 한 사람의 우선순위와 판단 구조를 보여준다.",
      "같은 찬성이라도 배열의 논리는 다를 수 있다.",
    ],
    imageSrc: "/images/4-1-card-04-average-vs-arrangement.webp",
    imageAlt: "평균값 막대그래프와 서로 다른 Q-sort 배열이 나란히 비교되는 장면",
    body: (
      <>
        {/* 카드 4 강의원고 입력 영역: 평균을 보면 경향이 보이고, 배열을 보면 논리가 보인다 */}
        <p>
          평균은 많은 사람의 응답을 요약하고,
          <br />
          집단의 중심 경향을 보여주며,
          <br />
          전체 흐름을 파악하게 해준다.
          <br />
          정책이나 조직 연구에서 평균은 여전히 강력한 도구다.
        </p>

        <p>
          그런데 평균은 서로 다른 판단 논리를
          <br />
          하나의 값으로 압축하기도 한다.
          <br />
          같은 평균점수 뒤에 전혀 다른 이유와 우선순위가
          <br />
          숨어 있을 수 있다.
        </p>

        <p>
          Molenaar(2004)는 집단 간 변동에서 얻은 구조를
          <br />
          특정 개인의 시간적 변화나 개인 내부 구조에
          <br />
          그대로 일반화하기 어렵다고 지적한다.
          <br />
          Q방법론 문헌은 아니지만,
          <br />
          집단 수준의 분석 결과와 개인 수준의 구조를
          <br />
          구분해야 한다는 점을 이해하는 데 닿아 있다.
        </p>

        <p>
          소방예산 배분을 예로 들어보자.
          <br />
          두 사람이 모두 “장비 확충에 우선 배분해야 한다”에 동의할 수 있다.
          <br />
          한 사람은 현장대원의 생명 보호를, 다른 사람은 감사와 책임성 확보를 이유로
          <br />
          같은 진술에 동의하는 것이다.
        </p>

        <p>
          변수 중심 분석에서는 두 사람이 같은 방향의 응답을 한 것으로 처리된다.
          <br />
          해당 진술에 대한 전반적 지지 수준을 파악하는 데는 유용하다.
        </p>

        <p>
          Q방법론은 거기서 한 걸음 더 들어간다.
          <br />
          그 진술이 다른 진술문들과 어떤 관계 속에 놓였는지,
          <br />
          무엇보다 앞에 두었는지,
          <br />
          무엇보다 뒤로 밀었는지를 본다.
        </p>

        <p>
          그래서 Q방법론에서 한 문항의 찬반은 전부가 아니다.
          <br />
          한 사람이 만든 전체 배열을 보존하고,
          <br />
          그 배열들 사이에서 비슷한 판단 논리가
          <br />
          어떻게 나타나는지를 읽는 것이
          <br />
          Q방법론의 분석 단위다.
        </p>
      </>
    ),
  },
  {
    num: 5,
    title: "Q방법론의 사람 중심은 유형 분류가 아니다",
    keyMessage:
      "Q방법론의 사람 중심 분석은 사람을 라벨링하는 것이 아니라, 사람들이 공유하는 관점 배열을 해석하는 것이다.",
    points: [
      "Q요인은 사람의 본질적 성격 라벨이 아니다.",
      "Q요인은 특정 주제에 대해 공유된 의미 배열이다.",
      "유형명은 사람 이름표가 아니라 판단 논리의 압축이어야 한다.",
    ],
    imageSrc: "/images/4-1-card-05-not-labeling-people.webp",
    imageAlt: "여러 Q-sort 배열이 공통된 관점 구조로 묶이는 장면",
    body: (
      <>
        {/* 카드 5 강의원고 입력 영역: Q방법론의 사람 중심은 유형 분류가 아니다 */}
        <p>
          “사람 중심”이라는 표현은 유용하지만,
          <br />
          오해를 부르기도 한다.
          <br />
          이 말을 들으면 “사람을 몇 가지 유형으로 나누는 것”을
          <br />
          먼저 떠올리기 쉽다.
        </p>

        <p>
          Q방법론의 사람 중심은 그것과 다르다.
          <br />
          사람에게 이름표를 붙이는 작업이 아니다.
          <br />
          특정 주제에 대해 그 사람이 만든 전체 배열이
          <br />
          분석의 대상이다.
        </p>

        <p>
          Q요인은 “이 사람은 A형이다”라는 라벨이 아니다.
          <br />
          특정 Q-set과 지시 조건 아래에서
          <br />
          여러 Q-sort가 공유하는 관점 구조다.
        </p>

        <p>
          Brown(1993)은 Q방법론의 절차를
          <br />
          Q-sorting, 상관, 요인분석, 요인해석으로 연결해 설명한다.
          <br />
          이 흐름에서 요인은 단순한 사람 묶음이 아니라,
          <br />
          해석되어야 할 관점 구조다.
        </p>

        <p>
          Watts &amp; Stenner(2005)도 Q방법론이
          <br />
          이론, 방법, 해석이 결합된 접근임을 강조한다.
          <br />
          결과는 숫자로 끝나지 않는다.
          <br />
          factor array와 진술문 위치를 바탕으로
          <br />
          관점 서사로 해석되어야 한다.
        </p>

        <p>
          유형명은 사람 이름표가 아니다.
          <br />
          그 관점이 무엇을 앞에 두고,
          <br />
          무엇을 뒤로 미루며,
          <br />
          어떤 판단 논리를 갖는지 압축한 표현이어야 한다.
        </p>

        <p>
          4-3강에서 이 내용을 더 깊이 다룬다.
          <br />
          지금은 하나만 기억하면 된다.
          <br />
          Q방법론의 사람 중심은 사람을 분류하는 것이 아니라,
          <br />
          사람이 만든 배열 속에서 관점 구조를 읽는 것이다.
        </p>
      </>
    ),
  },
  {
    num: 6,
    title: "4장은 방법 선택의 감각을 만드는 장이다",
    keyMessage:
      "4장의 목표는 Q방법론과 R방법론 중 하나를 이기게 하는 것이 아니라, 연구문제에 맞는 방법 선택의 감각을 만드는 것이다.",
    points: [
      "4-2강은 R방법론의 논리를 공정하게 살펴본다.",
      "4-3강은 Q방법론의 논리를 사람 중심 배열로 설명한다.",
      "4-4 이후에는 표본, 상관, 요인해석, 방법 선택 기준으로 확장한다.",
    ],
    imageSrc: "/images/4-1-card-06-method-choice-map.webp",
    imageAlt: "연구문제에 따라 Q방법론과 R방법론의 다른 길을 안내하는 방법 선택 지도",
    body: (
      <>
        {/* 카드 6 강의원고 입력 영역: 4장은 방법 선택의 감각을 만드는 장이다 */}
        <p>
          4장의 목표는 Q방법론과 R방법론 중
          <br />
          하나를 이기게 하는 것이 아니다.
          <br />
          연구문제에 맞는 방법 선택의 감각을 기르는 것이다.
        </p>

        <p>
          어떤 연구문제는 변수 간 관계를 묻는다.
          <br />
          위험인식이 예방행동 의도를 예측하는지,
          <br />
          조직공정성이 직무만족과 어떤 관계를 갖는지,
          <br />
          특정 교육이 평균 점수 변화를 만드는지가 그런 질문이다.
        </p>

        <p>
          다른 연구문제는 관점의 배열 구조를 묻는다.
          <br />
          소방공무원들이 소방예산 배분을 어떤 판단 논리로 이해하는지,
          <br />
          재난안전 정책을 둘러싼 이해관계자들이
          <br />
          무엇을 우선하고 무엇을 후순위로 보는지가 그런 질문이다.
        </p>

        <p>
          Laursen &amp; Hoff(2006)는 변수 중심 접근과 사람 중심 접근이
          <br />
          서로 다른 강점을 지닌 상보적 렌즈라고 설명한다.
          <br />
          Howard &amp; Hoffman(2018)도
          <br />
          연구 질문에 맞는 접근을 선택해야 한다고 본다.
        </p>

        <p>
          방법론 선택은 선호가 아니라
          <br />
          연구문제와 자료 구조의 적합성에서 나온다.
          <br />
          내가 묻는 질문이 변수 간 관계에 관한 것인지,
          <br />
          전체 배열과 관점 구조에 관한 것인지
          <br />
          먼저 분명히 해야 한다.
        </p>

        <p>
          4-2강에서는 R방법론의 논리를,
          <br />
          4-3강에서는 Q방법론의 논리를 살펴본다.
          <br />
          4-4강부터는 표본·상관·요인분석·방법 선택의 차이를
          <br />
          차례로 다룬다.
          <br />
          4-1강은 그 여정을 시작하는 지도다.
        </p>
      </>
    ),
  },
];

const summaryItems = [
  "변수 중심 분석은 변수 간 일반 관계, 평균 차이, 예측 구조를 분석하는 데 강하다.",
  "사람 중심 분석은 개인이나 하위집단의 전체 패턴과 조합을 보려 한다.",
  "R방법론은 사람을 무시하는 방법이 아니라, 사람에게서 얻은 변수값을 통해 일반적 관계를 설명하는 방법이다.",
  "Q방법론은 사람 유형 분류가 아니라, 한 사람이 만든 전체 배열을 중심으로 관점 구조를 읽는 방법이다.",
  "Q요인은 사람의 본질적 성격 라벨이 아니라, 특정 주제·Q-set·지시 조건 아래에서 공유된 관점 배열이다.",
  "방법 선택은 연구자의 선호가 아니라 연구문제와 자료 구조의 적합성에서 나온다.",
];

const comparisonRows = [
  {
    category: "분석 중심",
    variable: "여러 사람에게서 얻은 변수값과 변수 간 관계",
    person: "개인이나 하위집단의 전체 패턴과 조합",
    q: "한 사람이 만든 전체 Q-sort 배열",
  },
  {
    category: "강점",
    variable: "일반화, 평균 차이, 변수 간 상관, 예측, 척도화",
    person: "하위집단 차이, 프로파일, 조합, 이질성 탐색",
    q: "관점의 우선순위와 판단 논리 해석",
  },
  {
    category: "위험한 오해",
    variable: "사람을 무시하는 방법이라고 단순화하는 것",
    person: "모든 사람 중심 방법을 같은 방법으로 보는 것",
    q: "Q방법론을 사람 유형 분류로 축소하는 것",
  },
  {
    category: "적합한 질문",
    variable: "어떤 변수가 어떤 결과와 관련되는가?",
    person: "어떤 패턴을 가진 사람이나 집단이 존재하는가?",
    q: "사람들은 이 주제를 어떤 관점 구조로 배열하는가?",
  },
  {
    category: "4장에서의 역할",
    variable: "4-2강에서 R방법론의 논리로 확장",
    person: "4-3강에서 Q방법론의 논리로 연결",
    q: "4-4~4-6강에서 표본·상관·요인·선택 기준으로 구체화",
  },
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
  title: React.ReactNode;
  keyMessage: React.ReactNode;
  points: React.ReactNode[];
  imageSrc: string;
  imageAlt: string;
  body: React.ReactNode;
}) {
  return (
    <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div
        className="text-xs font-medium mb-3"
        style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.4px" }}
      >
        {num < 10 ? `0${num}` : num}
      </div>

      <h2
        className="font-semibold mb-5"
        style={{ fontSize: "22px", letterSpacing: "-0.3px", lineHeight: 1.3, color: "var(--black)" }}
      >
        {title}
      </h2>

      <p
        className="mb-7"
        style={{
          fontSize: "18px",
          lineHeight: 1.65,
          color: "var(--brand-deep)",
          fontWeight: 500,
          paddingLeft: "14px",
          borderLeft: "3px solid var(--brand)",
        }}
      >
        {keyMessage}
      </p>

      <div
        className="mb-6 overflow-hidden -mx-5 w-[calc(100%+40px)] sm:mx-0 sm:w-[500px]"
        style={{ borderRadius: "12px" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={960}
          height={540}
          className="w-full h-auto block"
          sizes="(max-width: 640px) 100vw, 500px"
        />
      </div>

      <ul className="mb-8 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3" style={{ color: "var(--gray-700)" }}>
            <span
              className="shrink-0 font-semibold mt-0.5"
              style={{
                fontSize: "13px",
                color: "var(--brand)",
                fontFamily: "var(--font-mono)",
                minWidth: "18px",
              }}
            >
              {i + 1}.
            </span>
            <span style={{ fontSize: "15px", lineHeight: 1.7 }}>{point}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-5" style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}>
        {body}
      </div>
    </section>
  );
}

export default function Lesson41Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "4-1. 변수 중심 분석과 사람 중심 분석" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-05-11"
        title="변수 중심 분석과 사람 중심 분석"
        description="Q와 R의 차이는 계산 방향의 차이만이 아니라, 무엇을 분석의 중심에 놓는가의 차이다."
        imageSrc="/images/4-1-hero-variable-centered-person-centered.webp"
        imageAlt="변수 중심 분석과 사람 중심 분석을 서로 다른 분석 렌즈로 비교하는 장면"
      />

      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          {/* 도입 강의원고 입력 영역: Q와 R의 차이는 어디서 시작되는가 */}
        <p>
          3-4강에서는 Q연구의 보고 기준과 재현가능성을 다뤘다.
          <br />
          좋은 Q연구는 관점을 발견하는 데서 끝나지 않는다.
          <br />
          그 관점이 어떻게 만들어지고 해석되었는지 독자가 따라갈 수 있어야 한다.
        </p>

        <p>
          보고 기준이란 결국 연구자가 무엇을 했는지 남기는 문제다.
          <br />
          - Q-set 구성 방식, P-set 선정 근거, Q-sort 조건, 요인 해석의 근거 -
          <br />
          이것들이 기록되어야 한다.
        </p>

        <p>
          4-1강은 그보다 앞선 질문에서 출발한다.
          <br />
          연구자는 애초에 무엇을 분석의 중심에 놓는가.
          <br />
          사람에게서 나온 변수값인가, 아니면 한 사람이 만든 전체 배열인가.
        </p>

        <p>
          사회과학은 오랫동안 변수값을 중심으로 사람 간 차이와 변수 간 관계를 분석해 왔다.
          <br />
          위험인식과 예방행동, 조직공정성과 직무만족, 교육효과와 성과점수 같은 문제에서
          <br />
          변수 중심 분석은 강력하다.
        </p>

        <p>
          그런데 모든 연구문제가 변수 간 관계만으로 풀리지는 않는다.
          <br />
          한 사람이 여러 판단 요소를 어떻게 조합하는지, 무엇을 앞세우고 무엇을 미루는지—
          <br />
          관점의 구조 자체를 봐야 할 때가 있다.
        </p>

        <p>
          Laursen &amp; Hoff(2006)는 변수 중심 접근과 사람 중심 접근이 대립하는 게 아니라
          <br />
          상호보완적이라고 설명한다.
          <br />
          전자는 보편적 관계를 넓게 보게 해주고, 후자는 특정 하위집단이나 개인 패턴을 가까이 들여다보게 해준다.
        </p>

        <p>
          Q방법론은 이 사람 중심의 감각과 연결되지만, 군집분석이나 잠재프로파일분석과는 다르다.
          <br />
          특정 주제에 대해 한 사람이 만든 전체 Q-sort 배열을 자료로 삼고,
          <br />
          그 배열들 사이에서 공유된 관점 구조를 해석한다.
        </p>

        <p>
          4-1강의 목표는 Q방법론과 R방법론 중 어느 쪽이 낫다고 말하는 게 아니다.
          <br />
          4장 전체의 지도를 먼저 그리는 것이다.
          <br />
          4-2강에서는 R방법론의 논리를, 4-3강에서는 Q방법론의 논리를,
          <br />
          4-4 이후에는 표본·상관·요인분석·방법 선택의 차이를 차례로 살펴볼 것이다.
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
              4-1강에서 기억할 핵심
            </h3>
            <div
              className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3"
              style={{ fontSize: "15px", lineHeight: 1.7 }}
            >
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

            <div className="hidden sm:block overflow-hidden" style={{ borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)" }}>
              <table className="w-full border-collapse" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                <thead>
                  <tr style={{ background: "rgba(0,0,0,0.035)", color: "var(--black)" }}>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "15%" }}>구분</th>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "28%" }}>변수 중심 분석</th>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "28%" }}>사람 중심 분석</th>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "29%" }}>Q방법론에서의 의미</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.category} style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                      <td className="font-semibold" style={{ padding: "12px", color: "var(--brand-deep)" }}>
                        {row.category}
                      </td>
                      <td style={{ padding: "12px", color: "var(--gray-700)" }}>{row.variable}</td>
                      <td style={{ padding: "12px", color: "var(--gray-700)" }}>{row.person}</td>
                      <td style={{ padding: "12px", color: "var(--gray-700)" }}>{row.q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-3">
              {comparisonRows.map((row) => (
                <div
                  key={row.category}
                  style={{
                    padding: "16px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.72)",
                  }}
                >
                  <h4 className="font-semibold mb-3" style={{ fontSize: "16px", color: "var(--brand-deep)" }}>
                    {row.category}
                  </h4>
                  <dl className="space-y-3" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                    <div>
                      <dt className="font-semibold mb-1" style={{ color: "var(--black)" }}>변수 중심 분석</dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.variable}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold mb-1" style={{ color: "var(--black)" }}>사람 중심 분석</dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.person}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold mb-1" style={{ color: "var(--black)" }}>Q방법론에서의 의미</dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.q}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-5" style={{ fontSize: "22px", color: "var(--black)" }}>
          참고문헌
        </h2>
        <ol className="space-y-3">
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
        <Link href="/lessons/3-4" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 3-4. 최근 Q방법론의 보고 기준과 재현가능성 논의
        </Link>
        <Link href="/lessons/4-2" className="text-sm text-right" style={{ color: "var(--brand-deep)" }}>
          4-2. R방법론의 논리 →
        </Link>
      </div>
    </div>
  );
}
