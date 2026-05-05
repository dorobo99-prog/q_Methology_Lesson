import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "3-3. Watts & Stenner와 현대 Q 연구 절차 | Q방법론 온라인 강의",
  description:
    "Brown(1980)의 주관성 이론이 Watts & Stenner(2012)의 현대 Q 연구 절차로 어떻게 번역되는지 살핀다.",
};

const references = [
  {
    key: "Brown1980",
    text: (
      <>
        Brown, S. R. (1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. New Haven: Yale University.
      </>
    ),
  },
  {
    key: "Brown1993",
    text: (
      <>
        Brown, S. R. (1993). A Primer on Q Methodology. <em>Operant Subjectivity, 16</em>(3/4).
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.93.100504",
  },
  {
    key: "Churruca2021",
    text: (
      <>
        Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>(1), 125.
      </>
    ),
    doi: "https://doi.org/10.1186/s12874-021-01309-7",
  },
  {
    key: "Damio2016",
    text: (
      <>
        Damio, S. M. (2016). Q METHODOLOGY: AN OVERVIEW AND STEPS TO IMPLEMENTATION. <em>Asian Journal of University Education, 12</em>(1), 105-117, 119-122.
      </>
    ),
  },
  {
    key: "Dieteren2023",
    text: (
      <>
        Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>(1), 100404.
      </>
    ),
    doi: "https://doi.org/10.1016/j.ssaho.2023.100404",
  },
  {
    key: "McKeown2013",
    text: (
      <>
        McKeown, B., &amp; Thomas, D. (2013). <em>Q Methodology</em>. SAGE Publications, Inc.
      </>
    ),
    doi: "https://doi.org/10.4135/9781483384412",
  },
  {
    key: "VanExel2005",
    text: (
      <>
        Van Exel, &amp; De Graaf. (2005). <em>Q methodology-A sneak preview</em>. Www.Jobvanexel.Nl.
      </>
    ),
  },
  {
    key: "Watts2012",
    text: (
      <>
        Watts, S., &amp; Stenner, P. (2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications Ltd.
      </>
    ),
    doi: "https://doi.org/10.4135/9781446251911",
  },
  {
    key: "Zabala2014",
    text: (
      <>
        Zabala, A. (2014). qmethod: A Package to Explore Human Perspectives Using Q Methodology. <em>The R Journal, 6</em>(2), 163.
      </>
    ),
    doi: "https://doi.org/10.32614/RJ-2014-032",
  },
];

const cards = [
  {
    num: 1,
    title: "절차는 왜 필요한가",
    keyMessage: "Q방법론 절차는 체크리스트가 아니라 주관성이 자료로 나타나는 조건을 만드는 장치다.",
    points: [
      "절차만 외우면 Q방법론은 특이한 설문과 통계 처리로 축소된다.",
      "Brown의 조작적 주관성은 참여자의 배열 행위를 필요로 한다.",
      "Watts & Stenner는 이론, 방법, 해석을 하나의 연구 흐름으로 연결한다.",
    ],
    imageSrc: "/images/3-3-card-01-why-procedure-matters.webp",
    imageAlt: "이론에서 절차로 연결되는 연구 흐름",
    body: (
      <>
        {/* 카드 1 강의원고 입력 영역: 절차는 왜 필요한가 */}
        <p>
          Q방법론 절차를 배우기 전에 먼저 물어야 할 질문이 있다.<br />
          왜 Q방법론에는 이런 절차가 필요한가?
        </p>

        <p>
          이 질문 없이 절차를 배우면 concourse, Q-set, P-set, Q-sort, 요인분석, 해석은 단순한 작업 목록이 된다.<br />
          그러면 Q방법론은 체크리스트처럼 보인다.
        </p>

        <p>
          Brown(1980)은 Q방법론이 주관성을 연구하는 방법론임을 보여주었다.<br />
          그런데 주관성은 연구자가 밖에서 바로 측정할 수 있는 물건이 아니다.
        </p>

        <p>
          참여자가 자기 관점에서 진술문을 비교하고 배열하는 장면이 있어야 한다.<br />
          그때 주관성은 연구자가 다룰 수 있는 자료로 나타난다.
        </p>

        <p>
          Watts & Stenner(2012)의 기여는 이 지점을 현대 연구 절차로 정리한 데 있다.<br />
          이들은 Q방법론의 이론, 자료 수집, 분석, 해석을 분리된 조각으로 두지 않는다.
        </p>

        <p>
          Q-sort라는 자료 생성 장면이 있고, 요인분석이라는 비교 장치가 있다.<br />
          그리고 factor array를 읽어내는 해석 작업이 있다.
        </p>

        <p>
          이 세 가지가 연결될 때 Q방법론은 단순한 절차가 아니라 연구 방법론이 된다.<br />
          절차는 주관성이 자료로 나타나는 조건이고, 그 자료를 비교 가능하게 만드는 형식이다.
        </p>

        <p>
          더 나아가 절차는 분석 결과를 다시 연구질문의 언어로 되돌리는 길이기도 하다.<br />
          그래서 절차 체크리스트는 필요하지만 충분하지 않다.
        </p>

        <p>
          체크리스트는 빠뜨리지 않게 도와준다.<br />
          그러나 왜 그 단계를 밟아야 하는지는 설명해주지 않는다.
        </p>

        <p>
          오늘 강의의 초점은 바로 그 “왜”에 있다.<br />
          이제 그 첫 번째 입구인 concourse와 Q-set으로 들어가 보자.
        </p>
      </>
    ),
  },
  {
    num: 2,
    title: "Concourse와 Q-set",
    keyMessage: "Concourse는 말해질 수 있는 세계이고, Q-set은 그 세계를 연구 가능한 축소판으로 만든 장치다.",
    points: [
      "Concourse는 특정 주제에 대한 담론의 우주다.",
      "Q-set은 concourse 전체가 아니라 연구 질문에 맞춘 구조화된 축소판이다.",
      "좋은 Q-set은 관점 다양성과 배열 가능성을 함께 확보한다.",
    ],
    imageSrc: "/images/3-3-card-02-concourse-q-set.webp",
    imageAlt: "concourse에서 Q-set으로 축소되는 장면",
    body: (
      <>
        {/* 카드 2 강의원고 입력 영역: Concourse와 Q-set */}
        <p>
          Q방법론 절차의 첫 입구는 concourse다.<br />
          Concourse는 특정 주제에 대해 사람들이 말하고, 생각하고, 느끼고, 논쟁할 수 있는 표현의 세계다.
        </p>
        <p>
          정책문서, 인터뷰, 뉴스, 현장 경험, 기존 연구, 일상 대화에서 나오는 말들이 모두 concourse의 재료가 될 수 있다.<br />
          즉 concourse는 주제에 대해 말해질 수 있는 세계다.
        </p>
        <p>
          여기서 중요한 점은 Q방법론이 연구자가 미리 정한 척도에서 바로 출발하지 않는다는 것이다.<br />
          Q방법론은 먼저 사람들이 실제로 사용하는 언어와 의미의 장을 연다.
        </p>

        <p>
          주관성을 연구하려면, 그 주관성이 표현될 수 있는 말의 세계를 먼저 확보해야 한다.<br />
          Q-set은 바로 이 세계를 연구 가능한 형태로 정리한 것이다.
        </p>

        <p>
          그러나 concourse 전체를 그대로 Q-sort에 넣을 수는 없다.<br />
          너무 많은 진술문은 참여자가 비교하고 배열할 수 없다.
        </p>

        <p>
          반대로 너무 좁은 진술문은 관점의 차이를 드러내지 못한다.<br />
          그래서 연구자는 concourse를 연구 가능한 축소판, 곧 Q-set으로 만든다.
        </p>

        <p>
          van Exel & de Graaf(2005)는 Q-set을 concourse의 대표적 축소판으로 이해할 수 있게 도와준다.<br />
          이 표현이 중요한 이유는 Q-set이 단순 문항 목록이 아니기 때문이다.
        </p>

        <p>
          Q-set은 말해질 수 있는 세계를 참여자가 실제로 배열할 수 있는 연구 장치로 바꾼 것이다.<br />
          다시 말해 Q-set은 주관성의 세계를 배열 가능한 카드 묶음으로 바꾸는 단계다.
        </p>

        <p>
          이 지점에서 Brown의 이론은 절차 속으로 내려온다.<br />
          주관성이 배열로 나타나려면, 먼저 배열될 진술문들이 필요하다.
        </p>

        <p>
          Concourse와 Q-set은 주관성이 작동할 수 있는 무대를 마련한다.<br />
          이제 다음 질문은 누가 이 무대 위에서 자신의 관점을 배열할 것인가이다.
        </p>
      </>
    ),
  },
  {
    num: 3,
    title: "P-set과 지시 조건",
    keyMessage: "P-set은 인구 대표성이 아니라 관점 다양성을 확보하는 참여자 구성이고, 지시 조건은 배열 기준을 정한다.",
    points: [
      "P-set의 핵심은 사람 수보다 관점의 적절한 포함이다.",
      "참여자는 모집단 축소판이 아니라 관점을 배열할 수 있는 사람들이다.",
      "지시 조건은 Q-sort가 어떤 기준에서 작동할지 정한다.",
    ],
    imageSrc: "/images/3-3-card-03-p-set-condition-of-instruction.webp",
    imageAlt: "다양한 참여자와 지시 조건의 관계",
    body: (
      <>
        {/* 카드 3 강의원고 입력 영역: P-set과 지시 조건 */}
        <p>
          Q방법론에서 P-set을 설명할 때 학생들이 가장 자주 헷갈리는 지점은 표본 수다.<br />
          “몇 명이면 충분한가”라는 질문은 분명 중요하다.
        </p>

        <p>
          하지만 이 질문이 모집단 대표성의 언어로만 이해되면 Q방법론의 논리가 흐려진다.<br />
          Q방법론의 P-set은 인구 비율을 추정하기 위한 표본이 아니다.
        </p>

        <p>
          Q방법론에서 더 중요한 질문은 이것이다.<br />
          누가 이 주제에 대해 의미 있는 관점을 배열할 수 있는가?
        </p>

        <p>
          어떤 사람들이 서로 다른 경험, 위치, 이해관계, 가치 판단을 통해 Q-set을 다르게 읽을 가능성이 있는가?<br />
          P-set은 바로 이런 관점 다양성을 확보하기 위한 참여자 구성이다.
        </p>

        <p>
          McKeown & Thomas(2013)는 Q방법론이 자기 참조에 기반한다고 설명한다.<br />
          참여자는 외부 기준으로 정답을 맞히는 사람이 아니다.
        </p>

        <p>
          참여자는 자기 관점에서 진술문들을 배열하는 사람이다.<br />
          따라서 P-set은 “모집단을 얼마나 닮았는가”보다 “주제 세계를 얼마나 의미 있게 배열할 수 있는가”에 의해 정당화된다.
        </p>

        <p>
          여기에 지시 조건이 붙는다.<br />
          같은 Q-set이라도 “가장 동의하는 순서로 배열하라”와 “가장 중요하다고 느끼는 순서로 배열하라”는 서로 다른 자료를 만든다.
        </p>

        <p>
          지시 조건은 참여자가 어떤 기준으로 의미 세계를 배열해야 하는지 알려주는 장치다.<br />
          같은 카드라도 기준이 달라지면 배열의 의미가 달라진다.
        </p>

        <p>
          이 점에서 P-set과 지시 조건은 단순 운영 절차가 아니다.<br />
          P-set은 누가 주관성을 표현할 것인가를 정하고, 지시 조건은 그 주관성이 어떤 기준으로 작동할 것인가를 정한다.
        </p>

        <p>
          둘은 Q-sort가 성립하기 위한 조건이다.<br />
          이제 우리는 Q방법론의 중심 장면, 곧 참여자가 실제로 진술문을 배열하는 순간으로 이동한다.
        </p>
      </>
    ),
  },
  {
    num: 4,
    title: "Q-sort",
    keyMessage: "Q-sort는 특이한 설문이 아니라 참여자의 조작적 주관성이 실제로 작동하는 배열 장면이다.",
    points: [
      "Q-sort는 개별 문항 응답의 합이 아니라 전체 배열이다.",
      "심리적 유의성은 참여자의 상대 배열을 가능하게 하는 단위다.",
      "주관성은 Q-sort 행위 속에서 표현된다.",
    ],
    imageSrc: "/images/3-3-card-04-q-sort-operant-subjectivity.webp",
    imageAlt: "Q-sort 배열이 진행되는 장면",
    body: (
      <>
        {/* 카드 4 강의원고 입력 영역: Q-sort */}
        <p>
          Q-sort는 Q방법론 절차의 중심 장면이다.<br />
          겉으로 보면 참여자가 카드나 문항을 분류하는 활동처럼 보인다.
        </p>

        <p>
          그러나 Q-sort를 특이한 설문 응답으로 이해하면 핵심을 놓친다.<br />
          Q-sort는 문항별 점수표가 아니라 전체 배열이다.
        </p>

        <p>
          Q-sort에서 참여자는 진술문을 하나씩 독립적으로 평가하지 않는다.<br />
          여러 진술문을 동시에 놓고 서로 비교한다.
        </p>

        <p>
          어떤 진술문은 강한 동의 쪽으로 이동한다.<br />
          어떤 진술문은 강한 반대 쪽으로 이동하고, 어떤 진술문은 상대적으로 덜 중요한 위치에 놓인다.
        </p>

        <p>
          Watts & Stenner(2012)가 강조하는 심리적 유의성은 여기서 중요하다.<br />
          Q방법론의 진술문들은 내용상 서로 다를 수 있다.
        </p>

        <p>
          하지만 Q-sort 안에서는 참여자에게 주는 주관적 중요도와 의미의 강도를 기준으로 하나의 배열 안에 놓인다.<br />
          그래서 Q-sort는 단순한 점수표가 아니라 한 사람의 의미 세계를 보여주는 구조다.
        </p>

        <p>
          이것이 Brown의 조작적 주관성과 연결된다.<br />
          주관성은 참여자의 머릿속에 숨어 있다가 연구자가 추측하는 것이 아니다.
        </p>

        <p>
          참여자가 Q-set을 자기 기준으로 배열하는 바로 그 행위 속에서 주관성은 작동하고 표현된다.<br />
          그래서 Q-sort는 자료 수집 단계이면서 동시에 이론이 관찰 가능한 형태로 나타나는 순간이다.
        </p>

        <p>
          Q방법론에서 자료는 이미 의미 없는 숫자가 아니다.<br />
          자료는 참여자가 자기 세계를 어떻게 배열했는지 보여주는 전체 구조다.
        </p>

        <p>
          이제 연구자는 이런 Q-sort들이 서로 어떻게 닮고 다른지 물어야 한다.<br />
          그 질문이 요인분석으로 이어진다.
        </p>
      </>
    ),
  },
  {
    num: 5,
    title: "요인분석",
    keyMessage: "요인분석은 사람을 분류하는 과정이 아니라 Q-sort 배열 사이의 공유된 관점 패턴을 발견하는 과정이다.",
    points: [
      "Q방법론은 변수 간 상관보다 Q-sort 간 상관을 본다.",
      "요인은 유사한 배열들이 공유하는 관점 구조다.",
      "요인 판단은 통계 기준과 이론적 맥락을 함께 본다.",
    ],
    imageSrc: "/images/3-3-card-05-factor-analysis-patterns.webp",
    imageAlt: "Q-sort 패턴이 요인으로 묶이는 장면",
    body: (
      <>
        {/* 카드 5 강의원고 입력 영역: 요인분석 */}
        <p>
          Q-sort가 한 사람의 전체 배열이라면, 다음 질문은 배열들 사이의 관계다.<br />
          어떤 참여자들의 배열은 서로 닮아 있고, 어떤 배열은 뚜렷하게 다르다.
        </p>

        <p>
          Q방법론의 요인분석은 바로 이 배열들 사이의 유사성과 차이를 찾는 과정이다.<br />
          여기서 분석의 대상은 개별 문항 점수가 아니라 전체 Q-sort 배열이다.
        </p>

        <p>
          이때 조심해야 할 표현이 있다.<br />
          Q방법론은 사람을 유형으로 분류한다고 말할 수 있지만, 그 말이 사람 자체에 고정된 라벨을 붙인다는 뜻이 되어서는 안 된다.
        </p>

        <p>
          Q요인은 인구집단 비율의 추정치가 아니다.<br />
          또한 사람의 본질적 성격 묶음도 아니다.
        </p>

        <p>
          Watts & Stenner(2012)는 Q방법론에서 사람 간 상관, 요인 추출, 회전, factor array 생성, 해석이 이어지는 과정을 설명한다.<br />
          그러나 이 과정의 목적은 “몇 가지 인간 유형을 찾았다”가 아니다.
        </p>

        <p>
          목적은 특정 주제에 대해 유사한 Q-sort 배열들이 공유하는 관점 구조를 밝히는 것이다.<br />
          그러므로 요인은 사람 라벨이 아니라 관점 패턴이다.
        </p>

        <p>
          McKeown & Thomas(2013)도 Q방법론이 R방법론의 단순 역전이 아니라는 점을 강조한다.<br />
          Q방법론은 이질적인 변수들을 억지로 상관시키는 것이 아니다.
        </p>

        <p>
          참여자가 심리적 유의성에 따라 배열한 전체 Q-sort들을 비교한다.<br />
          그래서 분석 단위는 개별 문항이 아니라 배열 전체다.
        </p>

        <p>
          요인분석을 이해할 때는 통계적 기준과 이론적 판단을 함께 봐야 한다.<br />
          설명분산, 요인적재값, 요인 수 같은 수치는 중요하다.
        </p>

        <p>
          하지만 Q요인의 의미는 그 수치만으로 결정되지 않는다.<br />
          어떤 배열 구조가 연구질문에 대해 해석 가능한 관점을 제공하는지가 함께 판단되어야 한다.
        </p>

        <p>
          이제 남은 일은 발견된 관점 패턴을 읽어내는 것이다.<br />
          바로 여기서 Q방법론의 해석이 시작된다.
        </p>
      </>
    ),
  },
  {
    num: 6,
    title: "해석",
    keyMessage: "해석은 유형명을 붙이는 일이 아니라 factor array와 의미 구조를 연구질문으로 되돌리는 작업이다.",
    points: [
      "Factor array는 요인별 관점 구조를 읽는 해석 지도다.",
      "구별 진술문과 합의 진술문은 관점의 차이와 공통 기반을 보여준다.",
      "해석은 분석 결과를 연구질문의 언어로 재번역한다.",
    ],
    imageSrc: "/images/3-3-card-06-interpretation-back-to-question.webp",
    imageAlt: "분석 결과가 연구질문으로 되돌아가는 장면",
    body: (
      <>
        {/* 카드 6 강의원고 입력 영역: 해석 */}
        <p>
          Q방법론에서 해석은 마지막에 붙는 장식이 아니다.<br />
          오히려 해석은 Q연구가 연구로 완성되는 지점이다.
        </p>

        <p>
          요인분석이 유사한 배열 패턴을 찾아주었다면, 해석은 그 패턴이 연구질문에 대해 무엇을 말하는지 읽어내는 작업이다.<br />
          이때 절차는 다시 의미의 언어가 된다.
        </p>

        <p>
          이때 factor array는 중요하다.<br />
          Factor array는 특정 요인이 대표하는 이상적 Q-sort 배열로 이해할 수 있다.
        </p>

        <p>
          연구자는 factor array를 통해 어떤 진술문이 강한 동의 쪽에 놓이는지 읽는다.<br />
          또 어떤 진술문이 강한 반대 쪽에 놓이고, 어떤 진술문이 중심부에 놓이는지도 함께 본다.
        </p>

        <p>
          하지만 해석은 극단 진술문 몇 개를 골라 유형명을 붙이는 일이 아니다.<br />
          구별 진술문은 한 관점이 다른 관점과 어디에서 달라지는지 보여준다.
        </p>

        <p>
          합의 진술문은 서로 다른 관점들이 어디에서 공통 기반을 갖는지 보여준다.<br />
          사후 설명이나 인터뷰가 있다면, 참여자가 왜 그런 배열을 만들었는지 해석을 더 풍부하게 만든다.
        </p>

        <p>
          Churruca et al.(2021)와 Dieteren et al.(2023)는 Q방법론 연구에서 절차와 해석을 투명하게 보고해야 한다는 점을 보여준다.<br />
          다만 3-3강에서는 이 체크리스트의 세부 항목을 깊게 다루지 않는다.
        </p>

        <p>
          그 내용은 3-4강의 중심 주제다.<br />
          오늘 강의에서 중요한 것은 해석의 방향이다.
        </p>

        <p>
          해석은 분석 결과를 연구자의 임의적 이야기로 덮는 것이 아니다.<br />
          해석은 Q-sort 배열, factor array, 구별 진술문, 합의 진술문, 참여자의 설명을 연결하는 작업이다.
        </p>

        <p>
          그 연결을 통해 주관성의 구조는 다시 연구질문의 언어로 번역된다.<br />
          이제 Brown에서 시작한 이론은 Watts & Stenner의 절차를 거쳐 연구 결과의 해석으로 되돌아온다.
        </p>
      </>
    ),
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

export default function Lesson33Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "3-3. Watts & Stenner와 현대 Q 연구 절차" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-05-04"
        title="Watts & Stenner와 현대 Q 연구 절차"
        description="Q방법론 절차는 작업 순서가 아니라, 주관성이 자료로 나타나고 비교되고 해석되는 장치들의 연결이다."
        imageSrc="/images/3-3-hero-watts-stenner-modern-q-procedure.webp"
        imageAlt="주관성 이론이 Q방법론 연구 절차 흐름으로 연결되는 장면"
      />

      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
        <p>
          Q방법론을 처음 배우면 누구나 절차부터 붙잡고 싶어진다.<br />
          Concourse를 만들고, Q-set을 고르고, P-set을 정하고, Q-sort를 실시한 뒤 요인분석과 해석으로 가면 된다고 생각하기 쉽다.
        </p>

        <p>
          이 순서는 틀리지 않다.<br />
          그러나 이 순서만 남으면 Q방법론은 매우 특이한 설문조사나 통계 처리법처럼 보인다.
        </p>

        <p>
          3-2강에서 우리는 Brown(1980)을 통해 Q방법론의 연구 대상이 무엇인지 확인했다.<br />
          Q방법론은 사람을 많이 모아 평균을 내는 방법도 아니고, R방법론의 행렬을 단순히 뒤집은 계산법도 아니다.
        </p>

        <p>
          Q방법론은 사람이 자기 세계를 어떻게 의미 있게 배열하는지를 본다.<br />
          그리고 그런 배열들 사이에서 어떤 공유된 관점 구조가 나타나는지를 연구한다.
        </p>

        <p>
          그렇다면 다음 질문이 생긴다.<br />
          그런 주관성은 어떻게 연구 자료가 될 수 있는가?
        </p>

        <p>
          “주관성을 연구한다”는 말만으로는 연구가 되지 않는다.<br />
          참여자가 자기 관점을 표현할 수 있는 장면이 필요하고, 그 배열들을 비교할 수 있는 분석 절차가 필요하다.
        </p>

        <p>
          분석된 패턴을 다시 의미 있는 관점으로 읽어내는 해석 언어도 필요하다.<br />
          Watts & Stenner(2012)가 중요한 이유가 바로 여기에 있다.
        </p>

        <p>
          Watts & Stenner는 Q방법론을 철학적 선언으로만 남겨두지 않는다.<br />
          Q의 역사와 이론에서 출발해 Q-sort, 요인배열, 해석으로 이어지는 연구 수행의 언어를 제시한다.
        </p>

        <p>
          그래서 이 강의에서 Watts & Stenner는 단순한 절차 교재의 저자가 아니다.<br />
          Brown의 이론과 실제 연구 실행을 연결하는 안내자다.
        </p>

        <p>
          이때 절차는 이론의 바깥에 붙은 부록이 아니다.<br />
          조작적 주관성은 Q-sort에서 표현되고, 개인내 유의성은 Q-sort 안에서 진술문들이 이루는 상대적 질서로 나타난다.
        </p>

        <p>
          따라서 절차는 주관성 이론이 관찰 가능한 연구 장면으로 바뀌는 형식이다.<br />
          3-3강은 바로 이 형식이 어떻게 만들어지는지를 따라간다.
        </p>

        <p>
          오늘은 Q-set을 몇 개로 줄일지, 요인 수를 어떻게 결정할지, 소프트웨어를 어떻게 조작할지를 배우는 시간이 아니다.<br />
          오늘의 목표는 이후 절차 강의에 들어가기 전에, 왜 그런 절차가 필요한지 이해하는 것이다.
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
        <div className="space-y-5" style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}>
          {/* 정리 강의원고 입력 영역 */}
        <p>
          3-3강의 핵심은 간단하다.<br />
          Brown은 Q방법론이 무엇을 연구할지 말해주고, Watts & Stenner는 그것을 어떻게 연구 절차로 실행할지 보여준다.
        </p>

        <p>
          이때 절차는 이론을 대신하는 매뉴얼이 아니다.<br />
          절차는 주관성이 자료로 나타나고, 비교되고, 해석되는 길이다.
        </p>

        <p>
          그래서 Q방법론 절차를 배울 때는 순서를 외우는 데서 멈추지 말아야 한다.<br />
          Concourse, Q-set, P-set, Q-sort, 요인분석, 해석은 각각 별개의 작업이 아니라 하나의 연결된 장치다.
        </p>

        <p>
          그 연결을 이해해야 이후 실제 절차를 배울 때 Q방법론을 단순 유형분류나 작은 표본 설문으로 오해하지 않을 수 있다.
        </p>
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
        <Link href="/lessons/3-2" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 3-2. Brown과 정치적 주관성 연구
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            3-4. 최근 Q방법론의 보고 기준과 재현가능성 논의
          </span>
        </div>
      </div>
    </div>
  );
}
