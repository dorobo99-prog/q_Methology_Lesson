import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "3-4. 최근 Q방법론의 보고 기준과 재현가능성 논의 | Q방법론 온라인 강의",
  description:
    "Q방법론이 여러 분야로 확산된 이후, 무엇을 어떻게 보고해야 독자가 설계와 해석 과정을 따라갈 수 있는지 살핀다.",
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
    key: "Churruca2021",
    text: (
      <>
        Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>(1), 125.
      </>
    ),
    doi: "https://doi.org/10.1186/s12874-021-01309-7",
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
];

const cards = [
  {
    num: 1,
    title: "보고 기준은 왜 등장했는가",
    keyMessage: "Q방법론이 널리 쓰이면서 연구 품질 문제는 “Q를 했는가”보다 “Q를 어떻게 했는지 설명했는가”로 옮겨갔다.",
    points: [
      "Q방법론은 보건, 환경, 정책, 재난, 교육 등 여러 분야로 확산되었다.",
      "최근 확산은 보고 기준 논의가 단순 유행이 아니라 누적된 연구 품질 문제와 연결됨을 보여준다.",
      "방법론적 다양성 자체가 문제는 아니지만, 보고가 부족하면 연구의 질을 평가하기 어렵다.",
    ],
    imageSrc: "/images/3-4-card-01-why-reporting-standards.webp",
    imageAlt: "Q방법론 확산 지도 위에 보고 기준 레이어가 겹쳐지는 장면",
    body: (
      <>
        {/* 카드 1 강의원고 입력 영역: 보고 기준은 왜 등장했는가 */}
        <p>
          보고 기준은 갑자기 나온 유행어가 아니다.
        </p>

        <p>
          Q방법론이 여러 분야에서 널리 쓰이기 시작하면서, 독자가 확인해야 할 것도 함께 늘어났다.<br />
          연구자가 실제로 무엇을 했고, 어떤 판단을 거쳐 결과에 도달했는지 볼 수 있어야 하기 때문이다.
        </p>

        <p>
          Dieteren et al.(2023)는 Q방법론 논문의 약 80%가 2005년 이후 발표되었고, 약 50%가 2015~2020년에 집중되었다고 정리한다.
        </p>

        <p>
          이 수치는 Q방법론이 일부 연구자의 특수한 관심을 넘어섰다는 점을 보여준다.<br />
          이제 Q방법론은 여러 분야에서 실제 연구 방법으로 사용되고 있다.
        </p>

        <p>
          확산 자체는 반가운 일이다.
        </p>

        <p>
          Q방법론은 보건, 환경, 정책, 재난, 교육처럼 관점의 차이가 중요한 분야에서 강점을 갖는다.<br />
          같은 정책이나 문제를 두고도 사람들은 서로 다른 의미 구조를 구성하기 때문이다.
        </p>

        <p>
          하지만 적용 분야가 넓어질수록 연구자의 선택도 다양해진다.
        </p>

        <p>
          Q-set을 만드는 방식이 달라질 수 있다.<br />
          P-set을 구성하는 방식도 연구마다 다르다.<br />
          Q-sort 지시 조건, 요인추출과 회전 방식, 해석 자료를 사용하는 방식도 달라진다.
        </p>

        <p>
          이 다양성 자체가 문제는 아니다.
        </p>

        <p>
          문제는 그 선택이 충분히 보고되지 않을 때 생긴다.<br />
          독자는 왜 그 Q-set이 적절한지 판단하기 어렵다.<br />
          왜 그 사람들이 참여자로 선정되었는지도 알기 어렵다.
        </p>

        <p>
          요인해 선택도 마찬가지다.
        </p>

        <p>
          왜 그 요인 수를 선택했는지, 어떤 기준으로 해석했는지가 보이지 않으면 결과를 평가하기 어렵다.<br />
          이때 연구의 품질이 반드시 나쁘다고 말할 수는 없다.<br />
          다만 독자가 그 품질을 판단하기 어려워진다.
        </p>

        <p>
          그래서 보고 기준은 통제의 장치가 아니다.
        </p>

        <p>
          보고 기준은 투명성의 장치다.<br />
          연구자를 하나의 표준 절차에 묶어두기 위한 것이 아니다.<br />
          연구자가 실제로 내린 선택을 독자가 따라갈 수 있게 만드는 장치다.
        </p>


      </>
    ),
  },
  {
    num: 2,
    title: "Q 연구에서 자주 누락되는 정보들",
    keyMessage: "Q-set 개발, 요인추출, 회전, 인터뷰 방식, 해석 근거가 빠지면 독자는 연구의 질을 평가하기 어렵다.",
    points: [
      "Churruca et al.(2021)는 절차가 충분히 보고되지 않을 때 독자가 연구 수행 과정을 따라가기 어렵다는 점을 보여준다.",
      "Dieteren et al.(2023)는 설계 선택과 분석 기준이 생략될 때 연구의 질을 평가하기 어렵다는 점을 보여준다.",
      "factor array, 구별 진술문, 공통 진술문, 참여자 인용이 빠지면 요인해석의 근거가 약해진다.",
    ],
    imageSrc: "/images/3-4-card-02-missing-reporting-items.webp",
    imageAlt: "Q 연구 보고서의 누락 항목이 빈칸으로 표시되는 장면",
    body: (
      <>
        {/* 카드 2 강의원고 입력 영역: Q 연구에서 자주 누락되는 정보들 */}
        <p>
          보고 부족은 대체로 비슷한 지점에서 반복된다.
        </p>

        <p>
          Q-set을 어떻게 만들었는지 빠지는 경우가 있다.<br />
          Q-sort를 어떤 조건에서 시행했는지도 충분히 설명하지 않는 경우가 있다.<br />
          요인을 어떻게 추출하고 회전했는지, 또 무엇을 근거로 해석했는지가 생략되기도 한다.
        </p>

        <p>
          Churruca et al.(2021)는 의료 분야 Q연구를 검토하면서 이런 문제를 보여준다.
        </p>

        <p>
          Q-set 도출 과정이 충분히 보고되지 않으면 독자는 진술문이 어디서 왔는지 알기 어렵다.<br />
          Q-sort 시행 방식이 빠지면 참여자가 어떤 조건에서 배열했는지도 따라가기 어렵다.
        </p>

        <p>
          분석 단계도 마찬가지다.
        </p>

        <p>
          요인추출 방법, 설명분산, 요인해석 과정이 충분히 제시되지 않으면 연구 절차는 흐릿해진다.<br />
          결과는 그럴듯해 보일 수 있지만, 독자는 그 결과가 어떻게 만들어졌는지 확인하기 어렵다.
        </p>

        <p>
          Dieteren et al.(2023)는 이 문제를 여러 학문 분야로 넓혀 살핀다.
        </p>

        <p>
          Q-set 개발 동기, 인터뷰 방식, 요인추출법, 회전법이 빠지면 설계 선택을 평가하기 어렵다.<br />
          factor array, distinguishing statements, consensus statements가 충분히 제시되지 않으면 결과 해석의 근거도 약해진다.
        </p>

        <p>
          여기서 중요한 것은 누락 항목을 외우는 일이 아니다.
        </p>

        <p>
          더 중요한 질문은 따로 있다.<br />
          이 정보가 빠졌을 때, 독자는 무엇을 판단할 수 없게 되는가?
        </p>

        <p>
          예를 들어 Q-set 개발 과정이 빠지면 최종 진술문들이 연구 주제의 담론을 충분히 담고 있는지 알기 어렵다.
        </p>

        <p>
          요인추출과 회전 방법이 빠지면 왜 특정 요인해가 선택되었는지 검토하기 어렵다.<br />
          연구자가 어떤 기준으로 분석 결과를 선택했는지가 보이지 않기 때문이다.
        </p>

        <p>
          해석 근거가 부족하면 문제는 더 커진다.
        </p>

        <p>
          factor array가 없으면 유형의 전체 배열 구조를 보기 어렵다.<br />
          구별 진술문과 공통 진술문이 없으면 유형 간 차이와 공통점을 확인하기 어렵다.<br />
          참여자 인용이 없으면 그 해석이 실제 참여자의 설명과 어떻게 연결되는지도 알기 어렵다.
        </p>

        <p>
          결국 보고 누락은 단순한 형식 문제가 아니다.
        </p>

        <p>
          유형 이름이 자료에 근거한 것인지, 연구자의 인상에 기대고 있는지 판단하기 어려워진다.<br />
          그래서 좋은 Q 연구는 결과만 제시하지 않는다.<br />
          그 결과를 해석할 수 있는 근거까지 함께 남긴다.
        </p>
      </>
    ),
  },
  {
    num: 3,
    title: "재현가능성은 판단 과정의 추적 가능성에 가깝다",
    keyMessage: "Q방법론에서 여기서 말하는 재현가능성은 동일 결과의 복제라기보다 연구자의 설계·분석·해석 판단을 추적하고 검토할 수 있는 상태에 가깝다.",
    points: [
      "Q방법론에서 재현가능성 논의는 동일 결과 복제만으로 좁히기 어렵다.",
      "핵심은 보고 투명성, 감사 가능성, 판단 과정의 추적 가능성이다.",
      "독자는 연구자의 설계 선택과 요인해석 논리를 따라갈 수 있어야 한다.",
    ],
    imageSrc: "/images/3-4-card-03-traceable-judgement-process.webp",
    imageAlt: "연구문제에서 해석까지 판단 과정이 추적 가능한 선으로 연결되는 장면",
    body: (
      <>
        {/* 카드 3 강의원고 입력 영역: 재현가능성은 판단 과정의 추적 가능성에 가깝다 */}
        <p>
          “재현가능성”이라는 말은 조금 조심해서 써야 한다.
        </p>

        <p>
          이 말을 같은 조건에서 같은 결과가 반복되어야 한다는 뜻으로만 이해하면, Q방법론의 성격과 어긋날 수 있다.
        </p>

        <p>
          Q방법론은 주관성을 다룬다.<br />
          참여자의 관점은 시간, 맥락, 경험에 따라 달라질 수 있다.<br />
          같은 사람이 같은 주제를 다시 배열하더라도 완전히 같은 Q-sort가 나온다고 보기는 어렵다.
        </p>

        <p>
          그렇다고 재현가능성이 중요하지 않다는 뜻은 아니다.
        </p>

        <p>
          Q방법론에서 더 중요하게 보아야 할 것은 보고 투명성, 감사 가능성, 판단 과정의 추적 가능성이다.
        </p>

        <p>
          독자는 연구자가 어떤 연구문제에서 출발했는지 알아야 한다.<br />
          concourse를 어떻게 구성했는지, Q-set을 어떤 기준으로 줄였는지도 따라갈 수 있어야 한다.
        </p>

        <p>
          P-set을 왜 그렇게 구성했는지, Q-sort 지시 조건은 무엇이었는지도 보여야 한다.<br />
          요인 수를 어떻게 정했고, 어떤 요인해를 선택했는지도 확인할 수 있어야 한다.
        </p>

        <p>
          해석에서도 마찬가지다.
        </p>

        <p>
          왜 그 요인에 그런 이름을 붙였는지, 어떤 factor array와 구별 진술문, 참여자 설명이 그 해석을 뒷받침하는지 드러나야 한다.
        </p>

        <p>
          그래야 독자는 연구자의 해석을 그대로 믿는 데서 멈추지 않는다.<br />
          그 해석이 실제 자료에 근거한 것인지 검토할 수 있다.
        </p>

        <p>
          따라서 여기서 말하는 재현가능성을 Q방법론만의 독자적 이론처럼 과장할 필요는 없다.
        </p>

        <p>
          더 정확히 말하면, 좋은 보고는 연구자의 판단 경로를 독자가 따라가고 평가할 수 있게 만드는 일이다.
        </p>
      </>
    ),
  },
  {
    num: 4,
    title: "Churruca 체크리스트 — 연구 절차를 따라가게 만들기",
    keyMessage: "Churruca et al.(2021)의 핵심은 Q 연구의 각 단계에서 무엇을 했는지 빠뜨리지 말고 보고하라는 데 있다.",
    points: [
      "Q-set 문항 수집, 정제, 축소 과정과 최종 문항 수를 보고해야 한다.",
      "Q-sorting 자료, 시행 방식, 함께 사용한 자료, 요인추출과 회전 방법을 보고해야 한다.",
      "요인해석은 Q-set 진술문과 참여자 인용으로 뒷받침되는 풍부한 서사로 제시해야 한다.",
    ],
    imageSrc: "/images/3-4-card-04-churruca-checklist.webp",
    imageAlt: "Churruca 체크리스트가 Q 연구 절차 흐름 위에 배치된 장면",
    body: (
      <>
        {/* 카드 4 강의원고 입력 영역: Churruca 체크리스트 */}
        <p>
          Churruca et al.(2021)는 의료 분야 Q연구를 검토한 문헌이다.
        </p>

        <p>
          이 연구는 2019년까지 발표된 의료 분야 Q연구를 살펴보면서, 반복적으로 나타나는 보고 결함을 정리했다.
        </p>

        <p>
          이 문헌이 3-4강에서 중요한 이유는 의료 분야에만 있지 않다.
        </p>

        <p>
          의료처럼 복잡하고 실천적인 분야에서 Q방법론이 쓰일수록, 연구 절차는 더 분명히 남아야 한다.<br />
          독자는 연구자가 어떤 절차를 밟았는지 따라갈 수 있어야 한다.
        </p>

        <p>
          Churruca et al.(2021)는 이를 위해 13개 항목 체크리스트를 제시한다.
        </p>

        <p>
          여기에는 Q-set 문항을 어떻게 수집했는지, 진술문을 어떻게 정제하고 축소했는지가 포함된다.<br />
          파일럿을 했는지, Q-sorting 과제를 어떻게 시행했는지도 보고해야 한다.
        </p>

        <p>
          분석 단계도 빠질 수 없다.
        </p>

        <p>
          연구자는 요인추출과 회전 방법을 밝혀야 한다.<br />
          사용한 소프트웨어, 요인 수를 결정할 때 참고한 정보, 설명분산도 함께 제시해야 한다.<br />
          그래야 독자는 분석 결과가 어떤 절차를 거쳐 나왔는지 따라갈 수 있다.
        </p>

        <p>
          해석 단계에서는 더 많은 설명이 필요하다.
        </p>

        <p>
          Churruca et al.(2021)는 요인해석이 Q-set 진술문과 참여자 인용으로 뒷받침되어야 한다고 본다.<br />
          숫자만으로는 관점의 의미 구조를 충분히 설명하기 어렵기 때문이다.
        </p>

        <p>
          결국 Churruca의 질문은 하나로 모인다.
        </p>

        <p>
          연구 절차가 독자에게 빠짐없이 따라가지는가?<br />
          13개 항목을 모두 외우는 것이 목표는 아니다.<br />
          중요한 것은 Q 연구의 흐름이 독자에게 보이도록 남기는 것이다.
        </p>
      </>
    ),
  },
  {
    num: 5,
    title: "Dieteren 체크리스트 — 설계 선택과 결과 제시를 투명하게 만들기",
    keyMessage: "Dieteren et al.(2023)의 핵심은 Q방법론 연구에서 실제 선택한 설계와 분석 기준을 명확히 제시하라는 데 있다.",
    points: [
      "Q-set 크기, 구성 방식, P-set 규모, 표집 전략을 설계 선택으로 보고해야 한다.",
      "PCA 또는 centroid, varimax 또는 수동회전, 요인 수 결정 기준을 명확히 밝혀야 한다.",
      "factor array, 요인 간 상관, 설명분산, 요인적재치, distinguishing/consensus statements를 결과 제시와 연결해야 한다.",
    ],
    imageSrc: "/images/3-4-card-05-dieteren-checklist.webp",
    imageAlt: "Dieteren 체크리스트의 네 축이 보고 대시보드로 정리된 장면",
    body: (
      <>
        {/* 카드 5 강의원고 입력 영역: Dieteren 체크리스트 */}
        <p>
          Dieteren et al.(2023)는 Q방법론의 보고 문제를 여러 학문 분야로 넓혀 살핀 문헌이다.
        </p>

        <p>
          Churruca et al.(2021)가 의료 분야 Q연구에서 절차가 어떻게 보고되는지를 집중적으로 보았다면, Dieteren et al.(2023)는 전 학문 분야에서 연구자들이 어떤 방법론적 선택을 해왔는지 정리한다.<br />
          두 문헌은 서로 경쟁한다기보다, 같은 문제를 다른 범위에서 보완해주는 관계에 가깝다.
        </p>

        <p>
          Dieteren et al.(2023)의 20개 항목은 크게 네 축으로 나눠 볼 수 있다.<br />
          연구 설계, 자료수집, 자료분석, 결과 제시다.
        </p>

        <p>
          연구 설계에서는 concourse의 출처, Q-set 구성 방식, Q-set의 크기가 중요하다.<br />
          자료수집에서는 P-set의 규모와 표집 전략, 인터뷰 방식, 정렬 그리드, 지시문이 드러나야 한다.
        </p>

        <p>
          분석 단계에서는 PCA를 썼는지 centroid를 썼는지, varimax를 썼는지 수동회전을 했는지 밝혀야 한다.<br />
          요인 수를 어떤 기준으로 결정했는지도 함께 설명해야 한다.
        </p>

        <p>
          이 선택들에는 하나의 정답만 있는 것이 아니다.<br />
          그래서 무엇을 선택했는지 못지않게, 왜 그렇게 선택했는지가 중요하다.
        </p>

        <p>
          결과 제시에서는 factor array, 요인 간 상관, 설명분산, 요인적재치가 기본 근거가 된다.<br />
          distinguishing statements와 consensus statements는 유형 간 차이와 공통점을 보여주는 자료다.
        </p>

        <p>
          이 정보가 있어야 독자는 유형 이름과 해석 서사가 실제 자료에 근거하고 있는지 검토할 수 있다.<br />
          결국 Dieteren의 질문은 하나로 모인다.<br />
          연구자가 선택한 설계와 분석 기준이 독자에게 보이는가?
        </p>
      </>
    ),
  },
  {
    num: 6,
    title: "Q 연구자가 남겨야 할 다섯 가지 흔적",
    keyMessage: "좋은 Q 논문은 연구자의 판단이 지나간 흔적을 남긴다.",
    points: [
      "Q-set이 어디서 왔고 어떻게 줄어들었는지 남긴다.",
      "어떤 사람을 왜 P-set으로 선정했는지 남긴다.",
      "요인을 어떻게 추출·회전·해석했는지, 어떤 진술문과 인용문을 근거로 삼았는지 남긴다.",
    ],
    imageSrc: "/images/3-4-card-06-five-traces-of-q-study.webp",
    imageAlt: "Q 연구자의 다섯 가지 판단 흔적이 타임라인으로 남는 장면",
    body: (
      <>
        {/* 카드 6 강의원고 입력 영역: Q 연구자가 남겨야 할 다섯 가지 흔적 */}
        <p>
          3-4강의 실천적 결론은 간단하다.
        </p>

        <p>
          좋은 Q 논문은 연구자의 판단이 지나간 흔적을 남긴다.<br />
          여기서 말하는 흔적은 장황한 설명이 아니다.<br />
          독자가 연구의 흐름을 따라갈 수 있게 해주는 핵심 정보다.
        </p>

        <p>
          첫째, Q-set이 어디서 왔고 어떻게 줄어들었는지 남겨야 한다.
        </p>

        <p>
          Concourse에서 어떤 기준으로 진술문을 모았는지 설명해야 한다.<br />
          그리고 그 진술문들이 어떤 과정을 거쳐 최종 Q-set이 되었는지도 보여주어야 한다.
        </p>

        <p>
          둘째, 어떤 사람을 왜 P-set으로 선정했는지 남겨야 한다.
        </p>

        <p>
          Q방법론에서 P-set은 인구 대표성을 위한 표본이 아니다.<br />
          관점 다양성을 확보하기 위한 참여자 구성이다.<br />
          그래서 때로는 참여자 수보다 선정 이유가 더 중요하다.
        </p>

        <p>
          셋째, 참여자가 어떤 조건에서 Q-sort를 했는지 남겨야 한다.
        </p>

        <p>
          지시문, 정렬 그리드, 시행 방식, 사후 설명 요청 여부는 자료의 의미를 바꿀 수 있다.<br />
          이 정보가 빠지면 독자는 Q-sort가 어떤 조건에서 만들어졌는지 알기 어렵다.
        </p>

        <p>
          넷째, 요인을 어떤 기준으로 추출하고 회전했는지 남겨야 한다.
        </p>

        <p>
          PCA를 썼는지 centroid를 썼는지 밝혀야 한다.<br />
          varimax를 썼는지 수동회전을 했는지, 요인 수를 어떻게 결정했는지도 함께 설명해야 한다.
        </p>

        <p>
          다섯째, 어떤 진술문과 인용문을 근거로 요인을 해석했는지 남겨야 한다.
        </p>

        <p>
          본문에는 핵심 판단과 해석 논리를 쓴다.<br />
          부록에는 전체 Q-set, factor array, Z-score, distinguishing/consensus statements, post-sort comments를 배치할 수 있다.
        </p>

        <p>
          이 카드는 5장 절차 강의와 17장 보고 체크리스트로 이어지는 실천적 결론이다.
        </p>

        <p>
          오늘 세부 양식을 모두 외울 필요는 없다.<br />
          대신 앞으로 Q연구를 설계할 때 먼저 물어야 한다.
        </p>

        <p>
          나는 어떤 판단의 흔적을 남길 것인가?
        </p>
      </>
    ),
  },
];

const reportingPrinciples = [
  {
    title: "절차를 생략하지 않는다",
    description:
      "Q-set 개발, P-set 선정, Q-sort 시행, 분석, 해석의 흐름이 독자에게 보여야 한다. 생략된 절차는 독자가 연구를 평가할 수 없게 만든다.",
  },
  {
    title: "선택의 이유를 밝힌다",
    description:
      "Q방법론에는 연구자가 선택해야 하는 지점이 많다. 어떤 선택을 했는지뿐 아니라 왜 그렇게 했는지를 남겨야 한다.",
  },
  {
    title: "숫자와 해석을 함께 제시한다",
    description:
      "요인적재치, 설명분산, factor array 같은 숫자는 중요하지만, 그 자체로 관점의 의미를 설명하지는 않는다. 숫자는 해석 서사와 함께 제시되어야 한다.",
  },
  {
    title: "factor array와 구별·공통 진술문을 연결한다",
    description:
      "요인해석은 연구자의 인상으로 끝나면 안 된다. factor array, distinguishing statements, consensus statements가 해석의 근거가 되어야 한다.",
  },
  {
    title: "유형 이름은 판단 논리가 드러나게 붙인다",
    description:
      "유형명은 멋진 제목이 아니라 해석의 압축이다. 어떤 진술문과 참여자 설명에 근거해 그런 이름을 붙였는지 드러나야 한다.",
  },
];

const reportingChecklist = [
  {
    area: "Q-set",
    required: "출처, 축소 과정, 최종 문항 수",
    risk: "진술문 대표성 판단 불가",
    question: "이 문항들은 어디서 왔는가?",
  },
  {
    area: "P-set",
    required: "선정 기준, 참여자 수, 다양성 근거",
    risk: "관점 다양성 판단 불가",
    question: "왜 이 사람들이 필요한가?",
  },
  {
    area: "Q-sort",
    required: "지시문, 그리드, 시행 방식",
    risk: "자료수집 조건 판단 불가",
    question: "참여자는 어떤 조건에서 배열했는가?",
  },
  {
    area: "분석",
    required: "추출법, 회전법, 소프트웨어, 요인 수 기준",
    risk: "결과 재검토 불가",
    question: "왜 이 요인해를 선택했는가?",
  },
  {
    area: "해석",
    required: "factor array, 구별 진술문, 공통 진술문, 인용문",
    risk: "유형명과 서사의 근거 약화",
    question: "이 유형명은 무엇에 근거하는가?",
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

export default function Lesson34Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "3-4. 최근 Q방법론의 보고 기준과 재현가능성 논의" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-05-07"
        title="최근 Q방법론의 보고 기준과 재현가능성 논의"
        description="Q방법론이 여러 분야로 확산된 이후, 연구자가 무엇을 어떻게 보고해야 독자가 설계와 해석 과정을 따라갈 수 있는지 살펴본다."
        imageSrc="/images/3-4-hero-reporting-standards-and-reproducibility.webp"
        imageAlt="흩어진 Q 연구 자료가 투명한 보고 기록으로 정리되는 장면"
      />

      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
        <p>
          3-3강에서는 Q방법론의 절차를 살펴보았다.
        </p>

        <p>
          Concourse, Q-set, P-set, Q-sort, 요인분석, 해석은 단순히 순서대로 처리할 작업들이 아니었다.<br />
          주관성이 자료로 드러나고, 그 자료가 서로 비교되고, 다시 의미 있는 관점으로 읽히는 과정이었다.
        </p>

        <p>
          이제 질문은 한 단계 더 나아간다.
        </p>

        <p>
          절차가 중요하다면, 그 절차를 어떻게 남겼는지도 중요하다.<br />
          연구자가 무엇을 했는지 독자가 따라갈 수 없다면, 그 연구가 좋은 Q 연구인지 판단하기 어렵다.
        </p>

        <p>
          최근 Q방법론은 보건, 환경, 정책, 재난, 교육 등 여러 분야로 확산되고 있다.
        </p>

        <p>
          이 확산은 Q방법론의 장점에서 비롯된다.<br />
          Q방법론은 사람들의 관점, 가치 판단, 경험의 구조를 다룰 수 있다.<br />
          그래서 복잡하고 논쟁적인 주제를 연구할 때 자주 선택된다.
        </p>

        <p>
          하지만 확산은 또 다른 문제를 만든다.
        </p>

        <p>
          연구마다 보고 방식이 달라진다.<br />
          어떤 연구는 Q-set이 어디서 왔는지 충분히 설명하지 않는다.<br />
          어떤 연구는 요인추출이나 회전 방법을 생략한다.
        </p>

        <p>
          요인해석에서도 비슷한 문제가 생긴다.
        </p>

        <p>
          factor array를 충분히 제시하지 않거나, 구별 진술문과 공통 진술문을 분명히 보여주지 않는 경우가 있다.<br />
          참여자 인용 없이 유형 이름만 붙이는 연구도 있다.
        </p>

        <p>
          물론 이것이 모든 연구 설계가 나쁘다는 뜻은 아니다.
        </p>

        <p>
          문제는 독자가 연구자의 판단을 따라갈 정보가 부족하다는 데 있다.<br />
          Q방법론은 주관성 연구다.<br />
          그렇기 때문에 설계와 해석의 흔적을 더 분명히 남겨야 한다.
        </p>

        <p>
          이 지점에서 Churruca et al.(2021)와 Dieteren et al.(2023)의 논의가 중요해진다.
        </p>

        <p>
          Churruca et al.(2021)는 의료 분야 Q연구에서 반복되는 보고 결함을 검토하고 13개 항목 체크리스트를 제시했다.<br />
          Dieteren et al.(2023)는 여러 학문 분야의 Q연구를 검토하며 20개 항목 체크리스트를 정리했다.
        </p>

        <p>
          여기서 말하는 재현가능성은 동일한 결과를 기계적으로 다시 얻는다는 뜻만은 아니다.
        </p>

        <p>
          Q방법론은 주관성을 다룬다.<br />
          시간과 맥락이 달라지면 참여자의 배열도 달라질 수 있다.<br />
          그래서 중요한 것은 같은 결과의 반복보다 판단 과정의 추적 가능성이다.
        </p>

        <p>
          독자는 연구자가 Q-set을 어떻게 만들었는지 알아야 한다.<br />
          누구를 P-set으로 선정했는지, 어떤 조건에서 Q-sort를 했는지도 알아야 한다.<br />
          요인 수를 어떻게 정했고, 어떤 근거로 요인을 해석했는지도 따라갈 수 있어야 한다.
        </p>

        <p>
          그래서 3-4강은 17장의 보고 체크리스트를 미리 외우는 시간이 아니다.
        </p>

        <p>
          오늘의 목표는 보고 기준이 왜 필요한지 이해하는 것이다.<br />
          보고 기준은 심사 대응용 형식이 아니다.<br />
          Q방법론의 신뢰도를 지키기 위해 남겨야 할 최소한의 연구 기록이다.
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
              좋은 Q 연구 보고의 5원칙
            </h3>
            <div
              className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3"
              style={{ fontSize: "15px", lineHeight: 1.7 }}
            >
              {reportingPrinciples.map((item, index) => (
                <div
                  key={item.title}
                  className={index === reportingPrinciples.length - 1 ? "sm:col-span-2" : ""}
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
                    <div>
                      <p className="font-semibold mb-1" style={{ color: "var(--black)" }}>
                        {item.title}
                      </p>
                      <p style={{ color: "var(--gray-700)" }}>{item.description}</p>
                    </div>
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
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "15%" }}>보고 영역</th>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "29%" }}>반드시 남겨야 할 정보</th>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "25%" }}>빠졌을 때 생기는 문제</th>
                    <th className="text-left font-semibold" style={{ padding: "12px", width: "31%" }}>학생이 점검할 질문</th>
                  </tr>
                </thead>
                <tbody>
                  {reportingChecklist.map((row) => (
                    <tr key={row.area} style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                      <td className="font-semibold" style={{ padding: "12px", color: "var(--brand-deep)" }}>
                        {row.area}
                      </td>
                      <td style={{ padding: "12px", color: "var(--gray-700)" }}>{row.required}</td>
                      <td style={{ padding: "12px", color: "var(--gray-700)" }}>{row.risk}</td>
                      <td style={{ padding: "12px", color: "var(--gray-700)" }}>{row.question}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-3">
              {reportingChecklist.map((row) => (
                <div
                  key={row.area}
                  style={{
                    padding: "16px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.72)",
                  }}
                >
                  <h4 className="font-semibold mb-3" style={{ fontSize: "16px", color: "var(--brand-deep)" }}>
                    {row.area}
                  </h4>
                  <dl className="space-y-3" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                    <div>
                      <dt className="font-semibold mb-1" style={{ color: "var(--black)" }}>반드시 남겨야 할 정보</dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.required}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold mb-1" style={{ color: "var(--black)" }}>빠졌을 때 생기는 문제</dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.risk}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold mb-1" style={{ color: "var(--black)" }}>학생이 점검할 질문</dt>
                      <dd style={{ color: "var(--gray-700)" }}>{row.question}</dd>
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
        <Link href="/lessons/3-3" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 3-3. Watts &amp; Stenner와 현대 Q 연구 절차
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 장</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            4장. Q와 R은 무엇이 다른가
          </span>
        </div>
      </div>
    </div>
  );
}
