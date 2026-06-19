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
  title: "5-3. concourse 수집 | Q방법론 온라인 강의",
  description:
    "Q방법론 연구에서 진술문 모집단(concourse)을 어떻게 넓고 균형 있게 수집하고, Q-set 후보로 정리하며, 논문 보고가 가능한 기록으로 남길지 다룹니다.",
};

const cards: Card[] = [
  {
    num: 1,
    title: "concourse는 표현 가능한 모든 관점의 세계다",
    keyMessage:
      "concourse는 연구자가 마음에 드는 문장을 모은 목록이 아니라, 연구주제에 대해 사회적으로 발화될 수 있는 관점의 범위입니다.",
    shortDescription:
      "5-2에서 연구문제가 정해졌다면, 이제 그 질문을 둘러싼 말과 판단의 세계를 넓게 수집해야 합니다. 이 단계가 좁으면 뒤의 Q-set도 좁아집니다.",
    points: [
      "concourse는 의견, 경험, 정책언어, 현장언어가 모이는 의사소통의 장이다.",
      "Q-set은 concourse 전체가 아니라 그 대표적 축소판이다.",
      "좋은 concourse는 이후 요인 해석의 언어적 재료가 된다.",
    ],
  },
  {
    num: 2,
    title: "연구문제가 수집 범위를 정한다",
    keyMessage:
      "concourse 수집은 무작정 많이 모으는 일이 아니라, 연구문제가 정한 경계 안에서 넓게 찾는 일입니다.",
    shortDescription:
      "연구문제가 너무 좁으면 중요한 관점이 빠지고, 너무 넓으면 Q-set으로 줄일 수 없는 잡음이 늘어납니다. 수집 전에 경계와 포함 기준을 정해야 합니다.",
    points: [
      "누가 이 주제에 대해 의미 있는 말을 하는지 먼저 정한다.",
      "어떤 상황, 시기, 문서, 현장 경험을 포함할지 기록한다.",
      "포함 기준과 제외 기준은 나중에 논문 방법 장의 근거가 된다.",
    ],
  },
  {
    num: 3,
    title: "수집원은 한 가지로 충분하지 않다",
    keyMessage:
      "문헌만으로는 현장 언어가 빠지고, 인터뷰만으로는 이론적 균형이 흔들릴 수 있습니다.",
    shortDescription:
      "문헌, 인터뷰, 정책문서, 미디어, 현장 언어를 함께 쓰는 이유는 관점의 폭과 표현의 생생함을 동시에 확보하기 위해서입니다.",
    points: [
      "학술문헌은 개념과 기존 논쟁을 잡아준다.",
      "인터뷰와 현장언어는 참여자가 실제로 쓰는 표현을 제공한다.",
      "정책문서와 미디어는 제도적·공적 담론의 언어를 보강한다.",
    ],
  },
  {
    num: 4,
    title: "수집한 문장은 그대로 Q-set이 되지 않는다",
    keyMessage:
      "concourse 수집의 산출물은 원자료 더미가 아니라, 정제 가능한 후보 진술문 목록입니다.",
    shortDescription:
      "중복 제거, 의미 병합, 문장 명료화, 범주화, 전문가 검토, 파일럿은 모두 Q-set 구성으로 넘어가기 전의 준비 작업입니다.",
    points: [
      "Fontein-Kuipers(2016)는 852개 항목을 39개 Q표본으로 줄이는 절차를 제시한다.",
      "Alsulami et al.(2024)은 이론 프레임워크, 이해관계자 검토, 파일럿을 결합한다.",
      "Shi et al.(2026)은 평가지표, 문헌, 인터뷰를 35개 Q표본으로 정제한다.",
    ],
  },
  {
    num: 5,
    title: "구조화는 도움이 되지만 현장 언어를 지우면 안 된다",
    keyMessage:
      "이론 틀은 누락을 줄이지만, 그것만 따르면 연구자의 언어가 참여자의 언어를 덮어버릴 수 있습니다.",
    shortDescription:
      "구조화된 범주는 균형을 돕습니다. 그러나 Q방법론은 조작적 주관성을 드러내는 방법이므로, 실제 사람들이 쓰는 표현을 지우지 않아야 합니다.",
    points: [
      "이론 프레임워크는 문항 편중을 막는 표집틀이 될 수 있다.",
      "현장 표현과 사후 검토는 연구자 편향을 낮춘다.",
      "좋은 설계는 구조화와 개방성을 함께 사용한다.",
    ],
  },
  {
    num: 6,
    title: "기록하지 않은 concourse는 방어하기 어렵다",
    keyMessage:
      "좋은 concourse 수집은 무엇을 모았는가보다, 어떻게 모으고 줄였는지를 설명할 수 있는 상태로 남기는 일입니다.",
    shortDescription:
      "concourse 개발 전략은 자주 빈약하게 보고됩니다. 출처, 수량, 축소 기준, 검토자, 제외 사유를 남겨야 방법론 장에서 방어할 수 있습니다.",
    points: [
      "출처, 수량, 축소 기준, 검토자, 제외 사유를 기록한다.",
      "연구자 판단이 들어간 지점을 숨기지 않는다.",
      "다음 5-4강의 Q-set 구성은 이 기록 위에서 시작된다.",
    ],
  },
];

const checklist = [
  "연구문제가 concourse 수집의 경계를 분명히 정하고 있는가?",
  "문헌, 인터뷰, 정책문서, 미디어, 현장 언어 중 어떤 출처를 왜 포함했는지 설명할 수 있는가?",
  "초기 후보 진술문의 수집 위치와 수량을 기록했는가?",
  "중복 제거, 의미 병합, 제외 기준을 남겼는가?",
  "이론적 구조화와 현장 언어 사이의 균형을 점검했는가?",
  "다음 단계인 Q-set 구성으로 넘길 수 있는 후보 진술문 목록이 만들어졌는가?",
];

const references = [
  <>
    Alsulami, S., Konstantinidis, S. Th., &amp; Wharrad, H. (2024). Development of a concourse for Two Q-Method Studies Exploring Perspectives of Patients with Multiple Sclerosis and Healthcare Professionals on the Use of Wearable Technology-Lessons Learnt. In J. Mantas, A. Hasman, G. Demiris, K. Saranto, M. Marschollek, T. N. Arvanitis, I. Ognjanović, A. Benis, P. Gallos, E. Zoulias, &amp; E. Andrikopoulou (Eds.), <em>Studies in Health Technology and Informatics</em>. IOS Press.{" "}
    <a href="https://doi.org/10.3233/SHTI240449" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.3233/SHTI240449
    </a>
  </>,
  <>
    Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology</em>, <em>21</em>(1), 125.{" "}
    <a href="https://doi.org/10.1186/s12874-021-01309-7" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.1186/s12874-021-01309-7
    </a>
  </>,
  <>
    Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open</em>, <em>7</em>(1), 100404.{" "}
    <a href="https://doi.org/10.1016/j.ssaho.2023.100404" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.1016/j.ssaho.2023.100404
    </a>
  </>,
  <>
    Duncan Millar, J., Mason, H., &amp; Kidd, L. (2022). What is Q methodology? <em>Evidence Based Nursing</em>, <em>25</em>(3), 77–78.{" "}
    <a href="https://doi.org/10.1136/ebnurs-2022-103568" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.1136/ebnurs-2022-103568
    </a>
  </>,
  <>
    Fontein-Kuipers, Y. (2016). Development of a concourse for a Q-Method Study about Midwives&rsquo; 2perspectives of Woman-Centered Care. <em>Health Education and Care</em>, <em>1</em>(2).{" "}
    <a href="https://doi.org/10.15761/HEC.1000107" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.15761/HEC.1000107
    </a>
  </>,
  <>
    Kenward, L. (2019). A literature review to guide novice researchers using Q methodology in the development of a framework for concourse management. <em>Nurse Researcher</em>, <em>27</em>(1), 17–21.{" "}
    <a href="https://doi.org/10.7748/nr.2019.e1616" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.7748/nr.2019.e1616
    </a>
  </>,
  <>
    McKeown, B., &amp; Thomas, D. (2013). <em>Q Methodology</em>. SAGE Publications, Inc.{" "}
    <a href="https://doi.org/10.4135/9781483384412" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.4135/9781483384412
    </a>
  </>,
  <>
    Ramlo, S. E. (2025). Integrated Data Collection in Q Methodology: Using ChatGPT From concourse to Q-sample to Q-sort. <em>Journal of Mixed Methods Research</em>, <em>19</em>(2), 191–205.{" "}
    <a href="https://doi.org/10.1177/15586898241262824" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.1177/15586898241262824
    </a>
  </>,
  <>
    Shi, H., Li, W., Yue, T., Fan, X., Yu, J., Wang, X., &amp; An, L. (2026). Viewpoints of community committee workers on public health emergency management in urban communities: A Q methodology study. <em>Frontiers in Public Health</em>, <em>14</em>, 1795922.{" "}
    <a href="https://doi.org/10.3389/fpubh.2026.1795922" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.3389/fpubh.2026.1795922
    </a>
  </>,
  <>
    Shim, T., Jun, M., &amp; Lee, S. Y. (2024). How Do Korean Secondary School Teachers Perceive Psychological Burnout in Their Teaching Careers? <em>Behavioral Sciences</em>, <em>14</em>(12), 1210.{" "}
    <a href="https://doi.org/10.3390/bs14121210" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.3390/bs14121210
    </a>
  </>,
  <>
    Watts, S., &amp; Stenner, P. (2012). <em>Doing Q Methodological Research: Theory, Method and Interpretation</em>. SAGE Publications Ltd.{" "}
    <a href="https://doi.org/10.4135/9781446251911" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      https://doi.org/10.4135/9781446251911
    </a>
  </>,
  <>
    Webler, T., Danielson, S., &amp; Tuler, S. (2009). <em>Using Q Method to Reveal Social Perspectives in Environmental Research</em>. Greenfield MA: Social and Environmental Research Institute.
  </>,
];

const discussionQuestions = [
  "여러분의 연구주제에서 문헌만으로는 포착하기 어려운 현장 언어는 어디에서 찾을 수 있을까요?",
  "concourse 수집에서 '너무 넓게 모으는 것'과 '너무 좁게 모으는 것' 중 어떤 위험이 더 클까요?",
  "연구자의 이론 틀과 참여자의 실제 표현이 충돌할 때, 어떤 기준으로 후보 진술문을 정리해야 할까요?",
];

function LessonCard({
  num,
  title,
  keyMessage,
  shortDescription,
  points,
  imageSrc,
  imageAlt,
}: Card) {
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
            5-2강에서는 Q방법론에 맞는 연구문제를 세우는 법을 배웠습니다. 연구문제가 정해졌다면, 이제 연구자는 무엇을 먼저 모아야 할까요? 바로 Q모집단(concourse)입니다. concourse는 연구주제를 두고 사람들이 말하고, 느끼고, 판단하고, 논쟁할 수 있는 표현의 넓은 세계입니다.
          </p>
          <p>
            concourse는 단순한 참고문헌 목록이 아닙니다. 문헌에서 뽑은 문장도 들어갈 수 있고, 인터뷰에서 나온 표현도 들어갈 수 있습니다. 정책문서, 언론 기사, 현장 메모, 조직 안에서 반복되는 말, 참여자들이 실제로 쓰는 비유와 감정 표현도 모두 재료가 됩니다. Q방법론은 사람이 자기 관점을 진술문 배열로 드러내는 방법입니다. 그래서 그 진술문은 연구자가 만든 추상어만으로 채워져서는 안 됩니다.
          </p>
          <p>
            예를 들어 &quot;소방예산 위험판단은 어떻게 달라지는가&quot;라는 연구문제를 세웠다고 해봅시다. 이때 concourse는 예산 이론 문헌만으로 구성되지 않습니다. 소방공무원이 현장에서 쓰는 말, 예산부서의 제도 언어, 재난 이후 언론의 문제 제기, 현장 인터뷰에서 반복되는 부담감과 책임의 표현이 함께 들어와야 합니다.
          </p>
          <p>
            이번 강의의 첫 결론은 여기서 나옵니다. concourse 수집은 문장을 많이 긁어모으는 일이 아닙니다. 연구주제에 관해 말해질 수 있는 관점의 범위를 넓고 균형 있게 확보하는 일입니다. 이 단계가 좁으면, 뒤에서 아무리 정교하게 Q-sort와 요인분석을 해도 연구가 드러낼 수 있는 관점의 폭은 처음부터 제한됩니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            concourse를 수집한다고 해서 모든 자료를 끝없이 모을 수는 없습니다. 좋은 수집은 넓지만 무한하지 않습니다. 그 경계를 정해주는 것이 연구문제입니다. 5-2강에서 말했듯이, Q 연구문제는 &quot;얼마나 많은 사람이 동의하는가&quot;가 아니라 &quot;어떤 서로 다른 관점들이 존재하는가&quot;를 묻습니다. concourse 수집의 첫 질문도 자연스럽게 이렇게 바뀝니다. &quot;이 관점의 세계를 말할 수 있는 사람과 자료는 어디에 있는가?&quot;
          </p>
          <p>
            연구문제가 &quot;교사의 심리적 소진 인식&quot;이라면 수집 범위는 교육학 문헌, 교사 인터뷰, 학교 현장의 민원과 업무 부담 언어 쪽으로 열립니다. Shim et al.(2024)은 문헌 고찰에서 121개 진술, 중·고교 교사 서면 인터뷰에서 220개 진술을 모아 총 341개의 초기 진술문을 만들었습니다.
          </p>
          <p>
            반대로 연구문제가 &quot;공중보건 비상관리에서 지역사회 위원회 종사자는 무엇을 중요하게 보는가&quot;라면 수집 범위는 달라집니다. Shi et al.(2026)은 기존 평가지표와 문헌, 그리고 전염병 대응 경험이 있는 지역 종사자 인터뷰를 결합했습니다. 연구문제가 바뀌면, 찾아야 할 말의 출처도 바뀝니다.
          </p>
          <p>
            concourse 수집을 시작하기 전에는 세 가지를 적어두는 편이 좋습니다. 누구의 관점을 다룰 것인가. 어떤 시기와 상황의 자료를 포함할 것인가. 어떤 자료는 왜 제외할 것인가. 이 기록은 단순한 작업 메모가 아닙니다. 나중에 논문 방법 장에서 Q-set 개발의 타당성을 방어하는 근거가 됩니다.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            concourse 수집에서 가장 쉬운 길은 문헌만 보는 것입니다. 하지만 이 길은 금방 좁아집니다. 문헌은 개념과 기존 논쟁을 정리하는 데 강하지만, 참여자들이 실제로 쓰는 말투와 현장 감각을 충분히 담지 못할 수 있습니다. 반대로 인터뷰만 보면 생생한 언어는 얻을 수 있지만, 기존 이론과 연구 축이 빠져 특정 경험에 지나치게 묶일 수 있습니다.
          </p>
          <p>
            Fontein-Kuipers(2016)는 이 점을 잘 보여주는 사례입니다. 이 연구는 조산사의 여성 중심 돌봄에 관한 concourse를 만들기 위해 과학 문헌, 조산사 학술지, 정책 보고서, 미디어, 예술 작품, 조산사 인터뷰, 강사 설문을 함께 사용했습니다. 그 결과 852개의 항목을 수집했고, 이후 여러 단계의 축소와 검토를 거쳐 39개 Q표본(Q-set)으로 정리했습니다.
          </p>
          <p>
            이 사례에서 배울 점은 출처를 많이 늘렸다는 사실 자체가 아닙니다. 서로 다른 출처가 서로 다른 언어를 제공한다는 점이 중요합니다. 학술문헌은 개념을 줍니다. 인터뷰는 현장 언어를 줍니다. 정책문서는 제도적 표현을 줍니다. 미디어와 예술 자료는 감정, 가치, 상징이 실린 표현을 줄 수 있습니다.
          </p>
          <p>
            물론 모든 연구가 예술 작품이나 미디어 자료를 반드시 써야 한다는 뜻은 아닙니다. 핵심은 연구문제에 필요한 관점의 폭을 한 출처가 독점하지 않게 하는 것입니다. 대학원생이라면 최소한 문헌 기반 후보, 현장 기반 후보, 제도 또는 공적 담론 기반 후보를 구분해 모아보는 것부터 시작할 수 있습니다.
          </p>
          <p>
            최근에는 ChatGPT 같은 생성형 AI를 concourse 후보 확장에 활용한 사례도 나왔습니다. Ramlo(2025)는 과학의 주관성을 주제로 ChatGPT에 여러 이론적 프롬프트를 입력해 긴 텍스트를 만들고, 연구자가 이를 의견 진술문으로 정제했습니다. 다만 이 사례는 전통적 문헌검토나 인터뷰를 대체한다기보다, 후보 언어를 넓히는 보조 수집원으로 보는 편이 안전합니다. 이 논문의 더 중요한 대목은 100개 후보 진술문에서 40개 Q표본을 구조적으로 고르는 절차입니다. 그 부분은 다음 5-4강에서 본격적으로 다루겠습니다.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            concourse 수집이 끝나면 연구자의 책상 위에는 아주 많은 문장과 표현이 남습니다. 하지만 이 원자료 더미가 곧바로 Q-set이 되지는 않습니다. Q-set은 참여자가 실제로 읽고 비교하고 배열할 수 있는 진술문 묶음입니다. 그래서 수집된 표현은 중복 제거, 의미 병합, 문장 명료화, 범주화, 전문가 검토, 파일럿을 거쳐야 합니다.
          </p>
          <p>
            Alsulami et al.(2024)은 이 과정을 5단계로 보여줍니다. 문헌과 스코핑 리뷰로 모집단을 만들고, 초기 진술문을 생성한 뒤, 이론적 틀과 연결하고, 이해관계자 검토와 번역·역번역, 파일럿을 거쳐 최종 Q표본을 확정했습니다. 이 사례가 중요한 이유는 &quot;문헌을 참고했다&quot;에서 멈추지 않고, 어떤 절차로 문장이 다듬어졌는지를 추적 가능하게 남겼기 때문입니다.
          </p>
          <p>
            Shi et al.(2026)도 비슷한 교훈을 줍니다. 이 연구는 기존 평가지표, 문헌 고찰, 반구조화 인터뷰를 통해 56개의 초기 진술문을 만들고, 전문가 2인의 정제를 거쳐 35개의 Q표본을 확정했습니다. Shim et al.(2024)은 341개의 초기 진술문을 범주화와 전문가 검토를 거쳐 34개 Q표본으로 줄였습니다.
          </p>
          <p>
            여기서 5-4강으로 넘어갑니다. 5-3강의 목표는 최종 Q-set 구성 원리를 모두 설명하는 것이 아닙니다. 이번 강의의 목표는 Q-set이 생겨날 수 있는 좋은 후보 진술문 풀을 만드는 데 있습니다. 다음 강의에서는 이 후보들을 어떻게 대표적 축소판으로 구성할지 더 자세히 다룹니다.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            concourse를 수집하다 보면 곧 혼란이 생깁니다. 문장은 많고, 서로 겹치고, 어떤 주제는 과잉 대표되며, 어떤 주제는 비어 있습니다. 이때 이론적 프레임워크나 범주 체계가 도움이 됩니다. Alsulami et al.(2024)은 UTAUT2와 문화 차원을 사용해 웨어러블 기술 수용과 관련된 진술문을 구조화했고, Fontein-Kuipers(2016)는 ASE 모델로 여성 중심 돌봄 관련 진술문을 범주화했습니다.
          </p>
          <p>
            하지만 구조화에는 위험도 있습니다. 연구자가 가진 틀만 너무 강하게 적용하면, 참여자가 실제로 쓰는 언어가 사라질 수 있습니다. Q방법론은 조작적 주관성을 드러내는 방법입니다. 다시 말해 연구자가 미리 정한 척도에 참여자를 맞추는 것이 아니라, 참여자가 자기 관점을 배열할 수 있도록 진술문 세계를 마련하는 방법입니다.
          </p>
          <p>
            좋은 concourse 수집은 구조화와 개방성을 함께 사용합니다. 이론 틀은 누락을 줄이고 균형을 잡는 데 씁니다. 인터뷰와 현장 언어는 연구자가 미리 보지 못한 의미를 열어두는 데 씁니다. 전문가와 이해관계자 검토는 문장이 너무 학술적이거나 너무 애매하거나 특정 관점에 치우치지 않았는지 확인하는 과정입니다.
          </p>
          <p>
            수강생 여러분이 자기 연구에서 확인해야 할 질문은 이것입니다. &quot;내 concourse는 연구자의 개념어만 담고 있는가, 아니면 참여자가 실제로 말할 수 있는 언어도 담고 있는가?&quot; 이 질문에 답할 수 있어야 Q-set은 살아 있는 진술문 묶음이 됩니다.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="lesson-card-body space-y-5" style={style}>
          <p>
            concourse 수집의 마지막 원칙은 기록입니다. Kenward(2019)는 Q방법론 문헌에서 concourse 개발 전략이 충분히 설명되지 않는 문제를 지적합니다. 연구자들이 요인분석 결과는 자세히 보고하면서도, 정작 그 결과의 출발점인 진술문 모집단을 어떻게 만들었는지는 짧게 넘기는 경우가 많다는 것입니다. 심사 과정에서는 이 지점이 약점이 됩니다.
          </p>
          <p>
            Churruca et al.(2021)와 Dieteren et al.(2023)의 보고 기준도 같은 방향을 가리킵니다. Q 연구는 Q-set 진술문이 어디서 왔는지, 어떻게 수집되었는지, 어떻게 축소되었는지, 파일럿이나 검토 과정에서 무엇이 바뀌었는지를 설명해야 합니다. 단순히 &quot;문헌과 인터뷰를 참고하여 진술문을 만들었다&quot;고 쓰면 충분하지 않습니다.
          </p>
          <p>
            실무적으로는 concourse 표를 하나 만들어두는 것이 좋습니다. 출처 유형, 원자료 위치, 수집 일자, 초기 문장 수, 중복 제거 기준, 병합 기준, 제외 사유, 검토자 의견을 함께 적습니다. 이 표는 나중에 논문에 그대로 들어가지 않더라도, 연구자가 자신의 판단을 되돌아보고 방어하는 데 큰 도움이 됩니다.
          </p>
          <p>
            오늘 강의는 이렇게 정리할 수 있습니다. concourse 수집은 Q 연구의 언어적 토대를 만드는 단계입니다. 넓게 모으되 기준 없이 흩어지지 않게 하고, 구조화하되 현장 언어를 지우지 않으며, 줄이되 그 이유를 기록해야 합니다. 다음 5-4강에서는 이렇게 모인 후보 진술문을 실제 Q표본(Q-set)으로 구성하는 원리를 살펴보겠습니다.
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
          { label: "5-3. concourse 수집" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-06-19"
        title="concourse 수집"
        description="Q방법론 연구에서 진술문 모집단(concourse)을 어떻게 넓고 균형 있게 수집하고, Q-set 후보로 정리하며, 논문 보고가 가능한 기록으로 남길지 다룹니다."
        imageSrc="/images/5-3-hero-concourse-collection.webp"
        imageAlt="문헌, 인터뷰, 정책문서, 미디어, 현장 언어가 concourse 작업대로 모여 후보 진술문으로 정리되는 흐름도"
      />

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          들어가며
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            5-2강에서 연구문제를 세웠다면, 이제 그 질문을 둘러싼 말의 세계를 수집해야 합니다. Q방법론에서 이 세계를 Q모집단(concourse)이라고 부릅니다. concourse가 좁으면 Q-set도 좁아지고, Q-set이 좁으면 요인분석이 드러낼 수 있는 관점도 좁아집니다.
          </p>
          <p>
            이번 강의는 concourse를 어떻게 모을 것인가에 집중합니다. 문헌, 인터뷰, 정책문서, 미디어, 현장 언어를 어떻게 섞어야 하는지, 수집한 원자료를 어떻게 후보 진술문으로 정리해야 하는지, 그리고 어떤 기록을 남겨야 나중에 논문 방법 장에서 방어할 수 있는지 살펴봅니다.
          </p>
        </div>
      </section>

      {cards.map((card) => (
        <LessonCard key={card.num} {...card} />
      ))}

      <section className="mb-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--black)" }}>
          자가 검토 체크리스트
        </h2>
        <ul className="space-y-3">
          {checklist.map((item, index) => (
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
          {discussionQuestions.map((question, index) => (
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
          {references.map((reference, index) => (
            <li key={`reference-${index}`}>{reference}</li>
          ))}
        </ul>
      </section>

      <div
        className="mt-14 flex items-center justify-between border-t pt-6"
        style={{ borderColor: "var(--gray-200)" }}
      >
        <Link href="/lessons/5-2" style={{ color: "var(--brand)", fontSize: "14px", fontWeight: 600 }} className="hover:underline">
          &larr; 5-2. Q에 맞는 연구문제 설정
        </Link>
      </div>
    </div>
  );
}
