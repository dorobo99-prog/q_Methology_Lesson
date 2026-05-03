import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "3-2. Brown과 정치적 주관성 연구 | Q방법론 온라인 강의",
  description:
    "Brown(1980)을 통해 Q방법론이 정치적 주관성, 조작적 주관성, 개인내 유의성의 사회과학 방법론으로 재정식화되는 과정을 살핀다.",
};

const references = [
  {
    key: "Brown1978",
    text: (
      <>
        Brown, S. R. (1978). The importance of factors in Q methodology: Statistical and theoretical considerations. <em>Operant Subjectivity, 1</em>(4), 117-124.
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.78.100516",
  },
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
        Brown, S. R. (1993). A primer on Q methodology. <em>Operant Subjectivity, 16</em>(3/4), 91-138.
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.93.100504",
  },
  {
    key: "McKeown2013",
    text: (
      <>
        McKeown, B., &amp; Thomas, D. B. (2013). <em>Q methodology</em>. SAGE Publications, Inc.
      </>
    ),
    doi: "https://doi.org/10.4135/9781483384412",
  },
  {
    key: "Ockwell2008",
    text: (
      <>
        Ockwell, D. G. (2008). &lsquo;Opening up&rsquo; policy to reflexive appraisal: A role for Q methodology? A case study of fire management in Cape York, Australia. <em>Policy Sciences, 41</em>(4), 263-292.
      </>
    ),
    doi: "https://doi.org/10.1007/s11077-008-9066-y",
  },
  {
    key: "Stephenson1953",
    text: (
      <>
        Stephenson, W. (1953). <em>The study of behavior; Q-technique and its methodology</em>. University of Chicago Press.
      </>
    ),
  },
  {
    key: "VanExel2005",
    text: (
      <>
        Van Exel, J., &amp; de Graaf, G. (2005). <em>Q methodology: A sneak preview</em>.
      </>
    ),
  },
  {
    key: "Watts2012",
    text: (
      <>
        Watts, S., &amp; Stenner, P. (2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE Publications Ltd.
      </>
    ),
    doi: "https://doi.org/10.4135/9781446251911",
  },
];

const summaryTable = [
  {
    concept: "정치적 주관성",
    meaning: "정책 찬반의 합이 아니라 사람이 정치적 세계를 의미 있게 배열하는 방식",
    role: "Brown(1980)을 따로 읽어야 하는 중심 이유",
  },
  {
    concept: "조작적 주관성",
    meaning: "참여자의 관점이 Q-sort 배열 행위 속에서 표현되는 방식",
    role: "주관성을 외부 라벨이 아니라 작동하는 관점으로 이해하게 함",
  },
  {
    concept: "개인내 유의성",
    meaning: "한 사람 안에서 진술문들이 이루는 상대적 위치와 우선순위",
    role: "Q방법론이 고립된 응답값이 아니라 전체 배열을 보는 이유",
  },
  {
    concept: "R의 거울상 오해",
    meaning: "Q를 변수 중심 분석의 단순한 방향 전환으로 보는 축소 설명",
    role: "Q방법론의 이론적 정체성을 보호해야 하는 지점",
  },
  {
    concept: "현대 절차화",
    meaning: "Brown의 이론적 정체성이 현대 연구자가 따라갈 수 있는 실행 언어로 번역되는 과정",
    role: "3-3강의 Watts & Stenner와 현대 Q 연구 절차로 이어지는 다리",
  },
];

const debatePoints = [
  "정치적 주관성을 단순 정책 찬반으로 측정하면 무엇을 놓치는가.",
  "Q-sort를 응답이 아니라 배열 행위로 보면 해석이 어떻게 달라지는가.",
  "Q방법론을 R방법론의 역전이라고 설명하는 말은 어디까지 유용하고 어디서부터 위험한가.",
];

const applicationIdeas = [
  "재난안전 정책 연구 — 같은 정책 찬성 안에서도 시민 안전, 국가 책임, 현장 자율성의 의미 구조가 어떻게 달라지는지 살핀다.",
  "조직 연구 — 조직 변화나 갈등을 구성원이 어떤 상대적 질서로 배열하는지 비교한다.",
  "환경 정책 연구 — 정책 대안에 대한 찬반보다 가치, 책임, 위험, 신뢰의 배열 구조를 본다.",
  "교육 정책 연구 — 교사, 학생, 학부모가 같은 교육 정책을 어떤 우선순위와 의미로 받아들이는지 탐색한다.",
  "공공갈등 연구 — 이해관계자 유형을 미리 정하기보다 Q-sort를 통해 공유된 관점 구조를 찾는다.",
];

function Card({
  num,
  title,
  keyMessage,
  points,
  imageSrc,
  imageAlt,
  children,
}: {
  num: number;
  title: React.ReactNode;
  keyMessage: React.ReactNode;
  points: React.ReactNode[];
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
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

      <div className="mb-6 overflow-hidden w-full sm:w-[500px]" style={{ borderRadius: "12px" }}>
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

      <div
        className="space-y-5"
        style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Lesson32Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "3-2. Brown과 정치적 주관성 연구" },
        ]}
        statusLabel="준비 중"
        versionLabel="v1.0 · 2026-05-03"
        title="Brown과 정치적 주관성 연구"
        description="Q방법론은 사람을 분류하는 기술이 아니라, 사람이 정치적 세계를 의미 있게 배열하는 방식을 연구하는 방법론이다."
        imageSrc="/images/3-2-hero-brown-political-subjectivity.webp"
        imageAlt="한 연구자가 정치적 쟁점 카드들을 의미의 질서에 따라 배열하는 장면"
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "17px", color: "var(--black)" }}
        >
          Brown을 왜 따로 읽어야 하는가
        </h2>
        <div
          className="space-y-5"
          style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}
        >
        <p>
          3-1강에서 우리는 Stephenson 이후 Q방법론의 전개 지도를 보았다.
          <br />
          Stephenson의 문제의식, Brown의 이론적 정식화, Q 커뮤니티, 현대 방법론 교재, 응용 연구, 보고 기준 논의가 하나의 흐름으로 이어진다는 점을 확인했다.
        </p>
        <p>
          그 지도 안에서 Brown은 단순한 중간 경유지가 아니다.
          <br />
          Brown은 Q방법론을 단순한 통계 기법이 아니라, 주관성을 연구하는 사회과학 방법론으로 말할 수 있게 만든 저자다.
        </p>
        <p>
          이 말은 Brown이 Q방법론을 창시했다는 뜻이 아니다.
          <br />
          Stephenson이 Q방법론의 출발점을 열었다면, Brown은 그 문제의식을 정치학과 사회과학의 언어로 다시 설명했다.
        </p>
        <p>
          Brown(1980)의 책 제목은 <em>Political Subjectivity</em>다.
          <br />
          이 제목은 3-2강의 입구가 된다.
        </p>
        <p>
          정치학에서 여론, 태도, 선호는 익숙한 연구 대상이다.
          <br />
          그러나 Brown이 보려 한 것은 단순히 “어떤 정책에 찬성하는가” 또는 “어떤 태도를 얼마나 갖고 있는가”가 아니었다.
        </p>
        <p>
          정치적 주관성은 여론이나 태도 연구를 부정하는 개념이 아니다.
          <br />
          오히려 그것들을 하나씩 떼어 평균내는 방식만으로는 사람들이 정치적 세계를 어떻게 이해하는지 충분히 볼 수 없다는 문제의식이다.
        </p>
        <p>
          사람은 여러 쟁점, 가치, 경험, 판단 기준을 서로의 관계 속에 놓고 자기 나름의 정치적 세계를 만든다.
          <br />
          그래서 Brown에게 Q-sort는 단순 응답지가 아니다.
        </p>
        <p>
          참여자가 진술문들을 읽고, 비교하고, 더 중요하거나 덜 중요한 위치에 놓는 과정은 그 사람의 관점이 실제로 작동하는 장면이다.
          <br />
          Q방법론은 바로 그 장면을 연구 자료로 삼는다.
        </p>
        <p>
          이때 조작적 주관성이라는 개념이 중요해진다.
          <br />
          주관성은 연구자가 밖에서 외부 기준으로 붙이는 라벨이 아니라, 참여자가 자신의 관점에서 진술문을 배열할 때 표현된다.
        </p>
        <p>
          Q방법론은 그 표현을 붙잡아 분석한다.
          <br />
          또 하나의 핵심은 개인내 유의성이다.
        </p>
        <p>
          Q방법론은 고정된 특성에서 사람들 사이의 차이만 보는 것이 아니라, 한 사람 안에서 진술문들이 어떤 상대적 질서로 배열되는지를 본다.
          <br />
          이 질서가 있어야 Q-sort는 개별 응답들의 합이 아니라 하나의 전체 관점이 된다.
        </p>
        <p>
          따라서 3-2강은 Brown의 생애 소개가 아니다.
          <br />
          이 강의는 정치적 주관성, 조작적 주관성, 개인내 유의성이 어떻게 연결되는지를 따라간다.
        </p>
        <p>
          이 연결을 이해하면 Q방법론이 왜 사람을 분류하는 기술도, R방법론의 거울상도 아닌지 더 분명해진다.
        </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>정치적 주관성</strong>의 의미</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>조작적 주관성</strong>과 Q-sort</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>개인내 유의성</strong>과 전체 배열</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>Q는 R의 거울상이 아니라는</strong> 오해 교정</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>현대 Q 연구 절차</strong>로 넘어가는 연결</span>
            </li>
          </ul>
          <p></p>
        </div>
      </section>

      {/* 카드 6개 */}
      <div className="space-y-8 mb-10">
        <Card
          num={1}
          title="왜 Brown을 따로 읽어야 하는가"
          keyMessage="Brown은 Q방법론이 무엇을 연구하는지 사회과학이 말할 수 있게 만든 인물이다."
          points={[
            "Brown(1980)은 Q방법론을 정치학에 적용한 데서 멈추지 않고, 주관성 연구 방법론으로 제시했다.",
            "Brown의 기여는 절차 설명보다 이론적 정체성 정리에 있다.",
            "Brown을 이해하면 Q방법론이 왜 작은 표본의 여론조사가 아닌지 선명해진다.",
          ]}
          imageSrc="/images/3-2-card-01-why-brown-matters.webp"
          imageAlt="Stephenson의 초기 문제의식에서 Brown의 정치학적 언어로 이어지는 다리와 정치적 쟁점 카드 배열"
        >
        <p>
          3-1강에서 Brown은 Stephenson 이후 Q방법론 전개 지도의 핵심 인물로 등장했다.
          <br />
          하지만 그때 Brown을 자세히 다루지는 않았다. 3-1강이 전체 지도를 그렸다면, 3-2강은 그 지도 안에서 Brown이 무엇을 했는지 정확히 보는 강의다.
        </p>
        <p>
          Brown을 따로 읽어야 하는 이유는 그가 Q방법론을 단순한 응용 기법으로 소개하지 않았기 때문이다.
          <br />
          Brown(1980)은 Q방법론을 정치학과 사회과학이 다룰 수 있는 주관성 연구 방법론으로 설명했다.
        </p>
        <p>
          여기서 더 중요한 단어는 “정치학”보다 “주관성 연구”다.
          <br />
          Brown은 Q방법론의 창시자가 아니라, Q방법론이 무엇을 연구하는지 사회과학 연구자들이 이해할 수 있게 정리한 인물이다.
        </p>
        <p>
          이 점에서 Brown의 기여는 절차 설명보다 이론적 정체성 정리에 가깝다.
          <br />
          물론 Brown(1980)에는 Q연구의 절차와 응용도 포함되어 있지만, 3-2강에서 우리가 주목할 것은 Brown이 Q방법론의 연구 대상을 어떻게 설명했는가이다.
        </p>
        <p>
          이 구분은 작은 표본의 여론조사라는 오해를 피하게 해준다.
          <br />
          Q방법론은 사람 수가 적은 설문조사가 아니라, 사람들이 어떤 주제 세계를 자기 관점에서 어떻게 배열하는지 보고 공유된 관점 구조를 해석하는 방법론이다.
        </p>
        <p>
          따라서 Brown을 읽는다는 것은 “Q방법론이 정치학에 쓰였다”는 사실을 확인하는 일이 아니다.
          <br />
          Brown을 읽는다는 것은 Q방법론이 주관성을 연구한다는 말을 사회과학적 언어로 어떻게 세울 수 있는지 배우는 일이다.
        </p>
        </Card>

        <Card
          num={2}
          title="정치적 주관성 — 찬반 너머의 정치적 세계 배열"
          keyMessage="정치적 주관성은 정책 찬반의 합이 아니라, 사람이 정치적 세계를 의미 있게 배열하는 방식이다."
          points={[
            "정치적 주관성은 개별 태도의 합이 아니라 관점의 구조다.",
            "같은 정책 찬성도 시민 안전, 국가 책임, 현장 자율성 같은 서로 다른 의미 구조에서 나올 수 있다.",
            "Q-sort는 참여자가 중요하다고 느끼는 정치적 의미의 질서를 드러낸다.",
          ]}
          imageSrc="/images/3-2-card-02-political-subjectivity.webp"
          imageAlt="한 사람이 책상 위의 정책 쟁점 카드들을 중요도에 따라 배열하고 카드 사이 의미의 선이 연결되는 장면"
        >
        <p>
          정치적 주관성을 단순한 정책 찬반으로 이해하면 Brown의 문제의식이 약해진다.
          <br />
          Brown(1980)이 주목한 것은 한 사람이 정치적 세계를 자기 관점에서 어떻게 구성하는가이다.
        </p>
        <p>
          이때 정치적 세계는 의견 몇 개의 목록이 아니다.
          <br />
          여러 쟁점과 가치, 경험과 판단 기준이 서로 연결된 의미의 질서다.
        </p>
        <p>
          예를 들어 어떤 사람이 재난안전 정책에 찬성한다고 해보자.
          <br />
          그 찬성은 겉으로는 같은 응답처럼 보일 수 있다.
        </p>
        <p>
          하지만 어떤 사람에게 그것은 시민 안전의 문제일 수 있고, 다른 사람에게는 국가 책임의 문제일 수 있으며, 또 다른 사람에게는 현장 자율성의 문제일 수 있다.
          <br />
          같은 찬성 아래에서도 무엇을 더 중요하게 놓고, 무엇을 뒤로 미루는지는 달라질 수 있다.
        </p>
        <p>
          Brown이 말하는 정치적 주관성은 바로 이런 정치적 의미 배열의 차이를 보려는 개념이다.
          <br />
          Q방법론은 이 배열을 Q-sort로 관찰한다.
        </p>
        <p>
          참여자는 진술문들을 하나씩 따로 평가하는 데서 멈추지 않는다.
          <br />
          여러 진술문을 서로 비교하면서 더 동의하는 것, 덜 동의하는 것, 판단하기 어려운 것을 상대적 위치에 놓는다.
        </p>
        <p>
          그래서 Q-sort는 정치적 태도의 단순한 합계가 아니다.
          <br />
          그것은 한 사람이 정치적 세계를 어떻게 의미 있게 배치하는지 보여주는 전체 배열이다.
        </p>
        <p>
          연구자는 그 배열을 통해 정치적 주관성이 어떤 구조를 갖는지 읽는다.
          <br />
          정책 문제에서 중요한 것은 때로 “누가 찬성하고 반대하는가”보다 “사람들이 정책 문제를 어떤 의미 구조로 이해하는가”이다.
        </p>
        <p>
          Ockwell(2008) 같은 정책 연구는 이 점을 보조적으로 이해하는 데 도움이 된다.
          <br />
          3-2강에서는 이 사례를 길게 설명하기보다, 정치적 주관성이 정책 담론을 더 깊게 읽는 입구가 될 수 있다는 정도로만 연결한다.
        </p>
        </Card>

        <Card
          num={3}
          title="조작적 주관성 — 관점은 Q-sort에서 작동한다"
          keyMessage="Brown에게 주관성은 연구자가 밖에서 객관화해 붙이는 라벨이 아니라, 참여자가 Q-sort에서 실제로 작동시키는 관점이다."
          points={[
            "주관성은 참여자 자신의 관점에서 출발한다.",
            "Q-sort는 주관성이 실제 행위로 표현되는 장면이다.",
            "연구자는 사전에 정한 척도 점수보다 배열 전체의 의미를 해석한다.",
          ]}
          imageSrc="/images/3-2-card-03-operant-subjectivity.webp"
          imageAlt="카드 배열 위에 한 사람의 시선, 손의 움직임, 의미의 흐름이 겹쳐지는 장면"
        >
        <p>
          2-3강에서 우리는 조작적 주관성, 즉 <em>operant subjectivity</em>를 이미 다루었다.
          <br />
          그때의 핵심은 주관성을 흐릿한 속마음으로 남겨두지 않고, 사람이 자기 세계를 의미 있게 배열하는 행위 속에서 연구할 수 있다는 점이었다.
        </p>
        <p>
          3-2강에서는 이 개념을 Brown의 정치적 주관성 논의 안에 다시 놓는다.
          <br />
          여기서 “조작적”이라는 말은 조심해서 이해해야 한다.
        </p>
        <p>
          조작적 주관성은 연구자가 외부 척도로 주관성을 대체한다는 뜻이 아니다.
          <br />
          Brown에게 주관성은 그 사람 자신의 관점이며, Q기법은 그 관점이 Q-sort에서 표현되게 하는 접근이다.
        </p>
        <p>
          따라서 Q방법론은 주관성을 정답이나 오답으로 판정하지 않는다.
          <br />
          참여자의 판단이 외부 기준에 비추어 맞는지 틀린지를 묻는 것이 아니다.
        </p>
        <p>
          중요한 것은 그 사람이 어떤 기준으로 진술문들을 서로 비교하고 배열하는가이다.
          <br />
          Q-sort는 바로 이 점에서 독특한 자료 생성 장면이 된다.
        </p>
        <p>
          참여자는 진술문을 하나씩 독립적으로 평가하는 데서 멈추지 않는다.
          <br />
          여러 진술문을 동시에 놓고, 더 중요하거나 덜 중요한 상대적 위치를 정한다.
        </p>
        <p>
          이 과정에서 참여자의 관점은 말로 설명되기 전에도 배열의 형태로 나타난다.
          <br />
          그래서 3-2강에서는 “주관성을 객관화한다”는 표현을 피하는 것이 좋다.
        </p>
        <p>
          더 정확한 표현은 “주관성이 Q-sort에서 표현되게 한다”이다.
          <br />
          Q방법론은 주관성을 외부 척도에 끼워 넣는 것이 아니라, 참여자가 자기 관점을 작동시키는 장면을 연구 자료로 삼는다.
        </p>
        <p>
          이 이해가 있어야 정치적 주관성도 제대로 보인다.
          <br />
          정치적 주관성은 연구자가 붙인 이념 라벨이 아니라, 참여자가 정치적 진술문들을 자기 기준에 따라 배열할 때 드러나는 관점의 질서다.
        </p>
        </Card>

        <Card
          num={4}
          title="개인내 유의성 — 한 사람 안의 상대적 질서"
          keyMessage="Q방법론의 출발점은 고정된 특성에서의 개인 간 차이가 아니라, 한 사람 안에서 진술문들이 이루는 상대적 질서다."
          points={[
            "Q-sort의 기본 단위는 고립된 응답 하나가 아니라 한 사람의 전체 배열이다.",
            "개인내 유의성은 한 사람 안에서 진술문들이 이루는 상대적 위치와 우선순위에서 드러난다.",
            "Q요인은 개인 속성의 묶음이 아니라 유사한 상대적 질서를 공유하는 관점 구조로 해석된다.",
          ]}
          imageSrc="/images/3-2-card-04-intraindividual-significance.webp"
          imageAlt="한 사람의 Q-sort 배열 안에서 카드들이 중심과 주변, 찬성과 반대, 강한 의미와 약한 의미의 구조로 놓이는 장면"
        >
        <p>
          개인내 유의성은 3-2강에서 가장 정확하게 붙잡아야 할 개념이다.
          <br />
          이 말을 단순히 “개인이 중요하게 여기는 것”이라고만 설명하면 너무 약하다.
        </p>
        <p>
          개인내 유의성은 고정된 특성에서의 개인 간 차이가 아니라, 한 사람 안에서 진술문들이 어떤 상대적 질서로 배열되는가를 보는 것이다.
          <br />
          이 문장이 카드 4의 핵심이다.
        </p>
        <p>
          R방법론에서 학생들이 익숙하게 떠올리는 유의성은 보통 변수 간 관계나 집단 간 차이의 통계적 판단이다.
          <br />
          물론 그런 유의성도 중요하지만, Brown이 Q방법론에서 강조한 출발점은 다르다.
        </p>
        <p>
          Q방법론은 먼저 한 사람 안에서 어떤 진술문이 다른 진술문보다 더 중요하고, 덜 중요하고, 어떤 위치를 차지하는지를 본다.
          <br />
          이 차이를 이해하면 Q-sort가 왜 단순한 설문 응답 묶음이 아닌지 분명해진다.
        </p>
        <p>
          한 문항에 대한 동의 점수 하나만 보면 그 사람의 관점 구조를 알기 어렵다.
          <br />
          그러나 여러 진술문이 하나의 배열 안에서 어떤 상대적 질서를 이루는지 보면, 그 사람이 주제를 어떻게 의미화하는지 더 가까이 볼 수 있다.
        </p>
        <p>
          예를 들어 재난안전 정책을 둘러싼 진술문들이 있다고 하자.
          <br />
          어떤 참여자는 시민 안전을 최상위에 두고 비용 문제를 주변에 둘 수 있다.
        </p>
        <p>
          다른 참여자는 현장 자율성을 중심에 두고 중앙 통제는 낮은 위치에 둘 수 있다.
          <br />
          이때 중요한 것은 특정 진술문 하나의 점수가 아니라, 진술문들이 한 사람 안에서 이루는 전체 질서다.
        </p>
        <p>
          Q요인도 이 관점에서 해석해야 한다.
          <br />
          Q요인은 개인의 고정된 속성 묶음이 아니라, 유사한 상대적 질서를 공유하는 Q-sort들이 모여 드러나는 관점 구조다.
        </p>
        <p>
          그래서 Q방법론의 요인은 인구집단 비율의 추정치가 아니라, 특정 주제에 대한 공유된 의미 배열이다.
          <br />
          McKeown &amp; Thomas(2013)의 설명처럼, Q-sort는 참여자가 심리적 중요도라는 자기 참조적 기준으로 진술문들을 배열하는 과정이다.
        </p>
        <p>
          한 사람 안에서 상대적 질서가 만들어지기 때문에, 사람 간 상관도 단순한 변수 전치가 아니다.
          <br />
          그것은 관점 배열의 유사성을 비교하는 일이다.
        </p>
        </Card>

        <Card
          num={5}
          title="Brown의 오해 교정 — Q는 R의 거울상이 아니다"
          keyMessage="Brown의 Q방법론은 R방법론의 거울상이 아니라, 주관성을 자료화하고 해석하는 독자적 연구 논리다."
          points={[
            "Q는 사람을 변수처럼 분류하는 기법이 아니다.",
            "Q요인은 공유된 관점의 구조이지 인구집단 비율의 추정치가 아니다.",
            "요인의 중요성은 아이겐값이나 설명분산만이 아니라 맥락적·이론적 의미로 판단되어야 한다.",
          ]}
          imageSrc="/images/3-2-card-05-not-reversed-r.webp"
          imageAlt="변수 중심 표와 Q-sort 배열들이 단순 전치가 아니라 다른 연구 논리로 대비되는 장면"
        >
        <p>
          2-4강에서 우리는 Q와 R의 분리를 이미 다루었다.
          <br />
          그래서 여기서는 행렬 구조, 상관계수, 요인추출 절차를 다시 길게 반복하지 않는다.
        </p>
        <p>
          3-2강의 관심은 Brown이 왜 이 오해를 바로잡으려 했는가에 있다.
          <br />
          핵심 문장은 짧다.
        </p>
        <p>
          Q는 R을 뒤집은 것이 아니라, 주관성을 연구하기 위해 다른 단위에서 출발한다.
          <br />
          R방법론이 변수 중심으로 사람들 사이의 차이나 변수 간 관계를 본다면, Q방법론은 한 사람이 만든 전체 Q-sort와 그 배열들 사이의 유사성을 본다.
        </p>
        <p>
          Brown(1980)이 비판한 것은 Q를 단순한 전치로 보는 설명이다.
          <br />
          “R은 변수 간 상관이고, Q는 사람 간 상관이다”라는 말은 입문 설명으로는 편리하지만, 그 말만 남으면 Q방법론의 핵심이 사라질 수 있다.
        </p>
        <p>
          그렇게 되면 Q방법론이 무엇을 자료화하는지, 왜 조작적 주관성과 개인내 유의성이 중요한지 보이지 않게 된다.
          <br />
          Q방법론은 단순히 행과 열을 바꾸는 계산법이 아니라, 주관성이 배열로 표현되는 방식을 연구하는 논리다.
        </p>
        <p>
          Q요인은 전체 인구를 몇 개 비율로 나누는 결과가 아니다.
          <br />
          Q요인은 특정 주제에 대해 유사한 방식으로 진술문을 배열한 사람들이 공유하는 관점의 구조다.
        </p>
        <p>
          그래서 “이 유형이 전체 인구의 몇 퍼센트인가”보다 “이 관점은 어떤 의미 구조를 갖는가”가 먼저 온다.
          <br />
          Brown(1978)은 이 논점을 보조적으로 강화한다.
        </p>
        <p>
          Brown(1978)의 핵심은 Q요인의 중요성을 아이겐값이나 설명분산 같은 통계적 크기만으로 판단해서는 안 된다는 데 있다.
          <br />
          어떤 요인의 통계적 크기가 작더라도, 연구 맥락 안에서 이론적·사회심리학적으로 중요한 관점이라면 해석에서 중요한 위치를 가질 수 있다.
        </p>
        <p>
          따라서 Brown의 오해 교정은 단순히 “Q와 R은 다르다”는 구호가 아니다.
          <br />
          그것은 Q방법론을 통계 절차의 변형으로 축소하지 말라는 경고다.
        </p>
        <p>
          Q방법론은 주관성이 어떻게 표현되고, 어떤 상대적 질서로 배열되며, 어떤 공유된 관점 구조로 나타나는지를 해석하는 연구 논리다.
        </p>
        </Card>

        <Card
          num={6}
          title="Brown 이후 — 이론이 절차로 번역되는 길"
          keyMessage="Brown 이후의 절차화는 Q방법론의 이론적 정체성을 연구자가 따라갈 수 있는 실행 언어로 번역한 과정이다."
          points={[
            "Brown은 Q방법론의 연구 대상을 주관성의 구조로 분명히 했다.",
            "이론적 정체성이 있어야 절차가 단순 체크리스트로 떨어지지 않는다.",
            "3-3강은 이 정체성이 현대 연구 절차로 어떻게 번역되는지를 다룬다.",
          ]}
          imageSrc="/images/3-2-card-06-from-brown-to-procedure.webp"
          imageAlt="Brown의 이론적 개념 지도에서 현대 연구 절차 체크리스트로 이어지는 흐름"
        >
        <p>
          Brown 이후 Q방법론은 정치학 안에만 머물지 않았다.
          <br />
          여러 분야에서 사람들이 어떤 주제 세계를 서로 다르게 배열하는지 탐구하는 방법으로 확장되었다.
        </p>
        <p>
          그러나 이 확장은 단순히 Q-sort라는 절차가 퍼졌다는 뜻만은 아니다.
          <br />
          절차가 의미를 가지려면, 그 절차가 무엇을 연구하는지에 대한 이론적 정체성이 필요하다.
        </p>
        <p>
          이론적 정체성이 있어야 절차가 단순 체크리스트로 떨어지지 않는다.
          <br />
          이 문장이 카드 6의 핵심이다.
        </p>
        <p>
          Brown은 Q방법론의 연구 대상을 주관성의 구조로 분명히 했다.
          <br />
          정치적 주관성은 정책 찬반의 합이 아니라 정치적 세계의 배열이고, 조작적 주관성은 Q-sort에서 표현되며, 개인내 유의성은 한 사람 안의 상대적 질서로 드러난다.
        </p>
        <p>
          이 틀이 있어야 이후 절차 설명도 단순한 매뉴얼이 아니라 방법론적 의미를 갖는다.
          <br />
          Watts &amp; Stenner(2012), McKeown &amp; Thomas(2013), van Exel &amp; de Graaf(2005)는 이 이론적 정체성을 현대 연구자가 따라갈 수 있는 절차 언어로 옮기는 데 도움을 준다.
        </p>
        <p>
          다만 3-2강에서는 그 절차를 자세히 설명하지 않는다.
          <br />
          Q-set, P-set, Q-sort, factor array의 세부 흐름은 다음 강의에서 본격적으로 다룬다.
        </p>
        <p>
          여기서는 연결만 확인하면 된다.
          <br />
          Brown을 통해 우리는 Q방법론이 무엇을 연구하는지 배운다.
        </p>
        <p>
          다음 강의에서는 그 연구 대상을 실제 연구 설계와 분석 절차로 어떻게 옮기는지 배운다.
          <br />
          Brown 이후의 절차화는 Brown을 대체하는 것이 아니라, Brown이 정리한 질문을 실제 연구 과정으로 번역하는 일이다.
        </p>
        </Card>
      </div>

      {/* 정리 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          정리
        </div>
        <h2
          className="font-semibold mb-5"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          Brown이 Q방법론에 남긴 핵심 기여
        </h2>
        <ul
          className="space-y-4 pl-1"
          style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}
        >
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>주관성 연구 방법론</strong>
              <br />Q방법론을 정치학과 사회과학에서 주관성의 구조를 연구하는 방법론으로 설명했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>정치적 주관성</strong>
              <br />정치적 태도와 선호를 고립된 점수가 아니라 관점의 배열 구조로 읽게 했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>조작적 주관성</strong>
              <br />주관성이 Q-sort 행위 속에서 표현되고 연구자가 해석할 수 있는 자료가 된다는 점을 강조했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>개인내 유의성</strong>
              <br />한 사람 안에서 진술문들이 이루는 상대적 질서를 Q방법론의 핵심 연구 단위로 설명했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>오해 교정</strong>
              <br />Q방법론을 R방법론의 단순 전치로 보는 설명을 경계하고 독자적 연구 논리를 분명히 했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>절차화로의 연결</strong>
              <br />Brown의 이론적 정체성은 이후 현대 Q 연구 절차를 이해하는 토대가 된다.
            </span>
          </li>
        </ul>
      </section>

      {/* 핵심 정리 표 */}
      <section className="mb-10">
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          핵심 정리 — Brown의 개념 지도
        </h2>

        <div className="hidden sm:block overflow-x-auto">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>개념</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>Brown식 의미</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>강의에서의 역할</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr
                  key={row.concept}
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
                >
                  <td className="py-3 pr-4">
                    <span className="font-medium" style={{ color: "var(--brand-deep)" }}>{row.concept}</span>
                  </td>
                  <td className="py-3 pr-4 leading-relaxed">{row.meaning}</td>
                  <td className="py-3 leading-relaxed">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div
              key={row.concept}
              className="py-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="font-medium mb-2" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>
                {row.concept}
              </div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }} className="space-y-1.5">
                <div>
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
                  >
                    의미
                  </span>
                  {row.meaning}
                </div>
                <div>
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--brand)" }}
                  >
                    역할
                  </span>
                  {row.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 토론 쟁점 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          토론 쟁점
        </div>
        <h2
          className="font-semibold mb-5"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          이 강의를 두고 함께 생각해 볼 질문
        </h2>
        <ol className="space-y-3 pl-1" style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}>
          {debatePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="shrink-0 font-semibold mt-0.5"
                style={{
                  fontSize: "13px",
                  color: "var(--brand)",
                  fontFamily: "var(--font-mono)",
                  minWidth: "20px",
                }}
              >
                Q{i + 1}.
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 수강생 연구 적용 아이디어 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          연구 적용
        </div>
        <h2
          className="font-semibold mb-5"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          수강생 연구에 바로 적용해 볼 만한 갈래
        </h2>
        <ul className="space-y-3 pl-1" style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}>
          {applicationIdeas.map((idea, i) => (
            <li key={i} className="flex items-start gap-3">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>{idea}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 요약 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          요약
        </div>
        <div
          className="space-y-4"
          style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--gray-700)" }}
        >
        <p>
          Brown을 “Q방법론을 정치학에 적용한 사람”으로만 기억하면 3-2강의 핵심을 놓치게 된다.
          <br />
          Brown(1980)은 Q방법론이 무엇을 연구하는 방법론인지 다시 말하게 만든 저자다.
        </p>
        <p>
          그는 정치적 주관성, 조작적 주관성, 개인내 유의성을 통해 Q방법론이 주관성의 배열 구조를 연구하는 사회과학 방법론임을 설명했다.
          <br />
          따라서 Q방법론은 사람을 많이 모아 평균을 내는 방법도 아니고, R방법론의 방향만 바꾼 계산법도 아니다.
        </p>
        <p>
          Q방법론은 사람이 자기 세계를 어떻게 의미 있게 배열하는지, 그리고 그 배열들 사이에서 어떤 공유된 관점이 나타나는지를 연구하는 방법론이다.
          <br />
          Brown의 작업은 이 점을 정치학과 사회과학의 언어로 분명하게 만든다.
        </p>
        </div>
      </section>

      {/* 참고문헌 */}
      <section className="mb-10">
        <h2
          className="font-medium mb-4"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          참고문헌
        </h2>
        <ul className="space-y-2.5">
          {references.map((ref) => (
            <li
              key={ref.key}
              className="leading-relaxed"
              style={{ fontSize: "13px", color: "var(--gray-500)" }}
            >
              {ref.text}
              {ref.doi && (
                <>
                  {" "}
                  <a
                    href={ref.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--brand-deep)", textDecoration: "underline" }}
                  >
                    {ref.doi}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 이전/다음 강의 */}
      <div
        className="pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <Link
          href="/lessons/3-1"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 3-1. Stephenson 이후 Q방법론의 전개
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            3-3. Watts &amp; Stenner와 현대 Q 연구 절차
          </span>
        </div>
      </div>
    </div>
  );
}
