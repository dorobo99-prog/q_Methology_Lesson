import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "2-4. Q와 R의 분리 | Q방법론 온라인 강의",
  description:
    "Q방법론은 R방법론을 단순히 뒤집은 것이 아니다. 같은 요인분석 언어 안에서도 자료 구조, 상관의 의미, 요인 해석이 어떻게 갈라지는지 따라간다.",
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
        Brown, S. R. (1993). A primer on Q methodology. <em>Operant Subjectivity, 16</em>(3/4).
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.93.100504",
  },
  {
    key: "BurtStephenson1939",
    text: (
      <>
        Burt, C., &amp; Stephenson, W. (1939). Alternative views on correlations between persons. <em>Psychometrika, 4</em>(4), 269–281.
      </>
    ),
    doi: "https://doi.org/10.1007/BF02287939",
  },
  {
    key: "Good2010",
    text: (
      <>
        Good, J. M. M. (2010). Introduction to William Stephenson&rsquo;s quest for a science of subjectivity. <em>Psychoanalysis and History, 12</em>(2), 211–243.
      </>
    ),
    doi: "https://doi.org/10.3366/pah.2010.0006",
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
    key: "Stephenson1935a",
    text: (
      <>
        Stephenson, W. (1935a). Correlating persons instead of tests. <em>Character and Personality, 4</em>(1), 17–24.
      </>
    ),
    doi: "https://doi.org/10.1111/j.1467-6494.1935.tb02022.x",
  },
  {
    key: "Stephenson1935b",
    text: (
      <>
        Stephenson, W. (1935b). Technique of factor analysis. <em>Nature, 136</em>, 297.
      </>
    ),
    doi: "https://doi.org/10.1038/136297b0",
  },
  {
    key: "Stephenson1936",
    text: (
      <>
        Stephenson, W. (1936). The inverted factor technique. <em>British Journal of Psychology, 26</em>(4), 344–361.
      </>
    ),
    doi: "https://doi.org/10.1111/j.2044-8295.1936.tb00803.x",
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
    item: "기본 질문",
    r: "변수들이 어떻게 함께 변하는가",
    q: "사람들이 어떻게 비슷한 배열을 만드는가",
  },
  {
    item: "분석의 중심",
    r: "변수 간 관계",
    q: "사람들의 전체 Q-sort 간 관계",
  },
  {
    item: "사람의 위치",
    r: "변수값을 제공하는 사례",
    q: "관점을 배열하는 주체",
  },
  {
    item: "상관의 의미",
    r: "변수 간 공변동",
    q: "관점 배열의 유사성",
  },
  {
    item: "요인의 의미",
    r: "잠재 속성, 차원, 구성개념",
    q: "공유된 관점, 해석 틀, 시각",
  },
  {
    item: "자료 생성",
    r: "문항별 점수나 변수 측정",
    q: "자기 참조적 Q-sort 배열",
  },
  {
    item: "해석 언어",
    r: "평균, 분산, 특성, 예측",
    q: "배열, 우선순위, 관점, 유형",
  },
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

      <div className="mb-6 overflow-hidden" style={{ borderRadius: "12px" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={960}
          height={540}
          className="w-full h-auto block"
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

export default function Lesson24Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "2부" },
          { label: "2-4. Q와 R의 분리" },
        ]}
        statusLabel="공개"
        versionLabel="v1.1 · 2026-04-30"
        title="Q와 R의 분리"
        description="Q방법론과 R방법론은 같은 통계 언어를 일부 공유하지만, 무엇을 자료로 보고 무엇을 상관시키며 무엇을 요인으로 해석하는지가 근본적으로 다르다."
        imageSrc="/images/2-4-card-00-separation-of-q-and-r.webp"
        imageAlt="왼쪽의 변수 중심 R행렬과 오른쪽의 사람 중심 Q-sort 배열이 같은 분석 도구를 거치지만 서로 다른 요인 구조로 나타나는 장면"
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "17px", color: "var(--black)" }}
        >
          &ldquo;뒤집으면 된다&rdquo;는 말은 왜 충분하지 않은가
        </h2>
        <div
          className="space-y-5"
          style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}
        >
          <p>
            Q방법론을 처음 배울 때 가장 흔히 듣는 설명이 있다.
            <strong> &ldquo;Q는 R을 뒤집은 것이다.&rdquo;</strong>
          </p>
          <p>
            틀린 말은 아니다. Stephenson(1935b)은 검사 대신 사람을 상관시키는 발상을 열었다.
            그러나 여기서 멈추면 Q방법론을 잘못 이해하게 된다.
          </p>
          <p>
            Brown(1980)이 강조하듯, Q의 토대는 행렬 전치가 아니라 개인내 유의성이다.
            핵심은 행과 열을 바꾼 것이 아니라,
            <strong> 무엇을 의미 있는 자료로 볼 것인가</strong>를 바꾼 데 있다.
          </p>
          <p>
            R방법론에서 사람은 변수값을 제공하는 사례다.
            Q방법론에서 사람은 진술문 전체를 자기 기준으로 배열하는 주체다.
            Watts &amp; Stenner(2012)의 심리적 유의성, McKeown &amp; Thomas(2013)의 자기 참조는 바로 이 차이를 가리킨다.
          </p>
          <p>
            2-4강은 이 차이를 여섯 걸음으로 따라간다.
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>같은 요인분석 안에서 두 방법은 어떻게 다른 출발점을 가졌는가.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>R의 변수 중심 논리와 Q의 사람 중심 논리는 무엇인가.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>같은 상관계수가 어떻게 다른 의미를 갖는가, 그리고 왜 Q는 단순 전치가 아닌가.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 카드 6개 */}
      <div className="space-y-8 mb-10">

        {/* 카드 1 */}
        <Card
          num={1}
          title="같은 요인분석, 다른 출발점"
          keyMessage="Q와 R은 같은 통계 언어를 일부 공유하지만, 무엇을 설명하려는지부터 다르다."
          points={[
            "둘 다 요인분석을 쓸 수 있지만 연구 대상이 다르다.",
            "R은 변수 중심, Q는 사람 중심이다.",
            "출발 질문이 다르므로 데이터 구성과 해석도 달라진다.",
          ]}
          imageSrc="/images/2-4-card-01-same-factor-analysis-different-starting-point.webp"
          imageAlt="하나의 요인분석 도구 상자가 변수 행렬과 Q-sort 배열로 갈라지는 장면"
        >
          <p>
            Q와 R의 차이를 말할 때 첫 번째 함정은 둘을 완전히 다른 우주처럼 그리는 것이다.
            Q방법론은 통계를 버린 방법이 아니다. Stephenson은 요인분석의 외부자가 아니라 내부자였다.
          </p>
          <p>
            그의 문제의식은 통계를 버리는 것이 아니라,{" "}
            <strong>통계가 무엇을 보게 만들 것인가</strong>를 바꾸는 데 있었다.
          </p>
          <p>
            Stephenson(1935b)의 짧은 <em>Nature</em> 서신은 이 출발점을 보여준다.
            기존 요인분석은 검사·변수 사이의 상관을 분석했다.
            그는 이 기법을 역전해, 사람들 사이의 상관을 구할 수 있다고 보았다.
          </p>
          <p>
            그러나 1935년의 발상이 Q방법론 전체는 아니다.
            1936년에 절차가 정리되었고, 1953년에 주관적 행동을 다루는 방법론으로 체계화되었다.
          </p>
          <p>
            R은 여러 변수의 동시 변화 패턴에서 잠재 차원을 추론한다.
            Q는 여러 사람의 전체 배열이 서로 얼마나 닮았는지를 분석해 공유된 관점 구조를 드러낸다.
          </p>
          <p>
            Brown(1980)은 이 차이를 개인내 유의성으로 정리한다.
            중요한 것은 사람들 사이의 평균 차이가 아니라,{" "}
            <strong>한 사람 안에서 진술문들이 이루는 상대적 질서</strong>다.
          </p>
        </Card>

        {/* 카드 2 */}
        <Card
          num={2}
          title="R방법론 — 변수 간 상관으로 사람을 설명하다"
          keyMessage="R의 기본 질문은 변수들이 어떻게 함께 움직이며, 그 패턴이 사람의 속성과 집단 차이를 어떻게 설명하는가이다."
          points={[
            "개인은 보통 변수값을 제공하는 사례(case)다.",
            "상관의 대상은 변수들이다.",
            "요인은 변수들 뒤의 잠재 차원이나 속성으로 읽힌다.",
          ]}
          imageSrc="/images/2-4-card-02-r-methodology-variable-correlations.webp"
          imageAlt="여러 사람의 행과 변수 열로 구성된 데이터 표에서 변수 열들이 잠재 차원으로 묶이는 장면"
        >
          <p>
            R방법론을 단순하거나 낡은 방법처럼 그리면 안 된다.
            R은 변수 간 관계, 평균 차이, 예측, 척도화 같은 강력한 질문을 잘 다룬다.
          </p>
          <p>
            전형적인 R 데이터 표를 떠올려보자.
            행에는 사람들이, 열에는 변수들이 있다.
            정치적 관심, 교육 수준, 소득, 이념 성향, 정책 지지 점수가 열을 이룬다.
          </p>
          <p>
            연구자는 변수들 사이의 상관을 보고, 어떤 변수들이 함께 움직이는지 분석한다.
            요인분석을 쓰면, 요인은 변수들 뒤의 잠재 차원으로 해석된다.
          </p>
          <p>
            이 구조에서 사람이 사라지는 것은 아니다.
            다만 분석의 중심이 사람의 전체 관점이 아니라{" "}
            <strong>변수들 사이의 관계</strong>에 놓인다.
            사람은 변수값을 제공하는 사례, 변수는 분석의 주인공이 된다.
          </p>
          <p>
            그래서 R은 &ldquo;이 변수와 저 변수는 얼마나 관련이 있는가&rdquo;,
            &ldquo;이 척도는 어떤 요인으로 묶이는가&rdquo;,
            &ldquo;이 특성이 다른 특성을 얼마나 예측하는가&rdquo; 같은 질문에 강하다.
          </p>
          <p>
            2-1강에서 보았듯, 이 변수 중심 논리는 사람의 주관성을 놓칠 수 있다.
            평균과 변수 간 상관은 유용하지만,
            사람이 자기 세계를 어떻게 의미 있게 배열하는지는 보여주지 않는다.
          </p>
        </Card>

        {/* 카드 3 */}
        <Card
          num={3}
          title="Q방법론 — 사람 간 상관으로 관점을 드러내다"
          keyMessage="Q의 기본 질문은 사람들이 자기 세계를 어떻게 배열하며, 그 배열들 사이에 어떤 관점의 친연성이 존재하는가이다."
          points={[
            "자료의 핵심은 한 사람의 전체 Q-sort다.",
            "상관의 대상은 변수보다 사람들의 배열이다.",
            "요인은 비슷한 배열을 공유하는 관점 유형으로 읽힌다.",
          ]}
          imageSrc="/images/2-4-card-03-q-methodology-person-correlations.webp"
          imageAlt="여러 사람의 Q-sort 보드가 유사성 선으로 연결되며 관점 군집으로 묶이는 장면"
        >
          <p>
            Stephenson(1935a)의 제목은 직관적이다.
            <strong> &ldquo;검사 대신 사람을 상관시키기.&rdquo;</strong>
          </p>
          <p>
            여기서 말하는 사람 간 상관은 막연한 유사성이 아니다.
            Q에서 상관되는 것은 각 참여자가 만든 <strong>전체 Q-sort</strong>다.
          </p>
          <p>
            한 사람이 여러 진술문을 읽고, 비교하고,
            가장 동의하는 것부터 가장 동의하지 않는 것까지 상대적으로 배열한 전체 구조가 자료가 된다.
          </p>
          <p>
            설문조사에서는 보통 각 문항에 독립적으로 점수를 준다.
            반면 Q-sort에서는 진술문들을 서로 비교해야 한다.
            한 진술문을 끝에 놓으면 다른 진술문은 밀려난다.
          </p>
          <p>
            한 진술문의 의미는 전체 배열 안에서 다른 진술문들과의 관계 속에서 정해진다.
            Q-sort는 낱개 응답표가 아니라 <strong>관점의 배열</strong>이다.
          </p>
          <p>
            Watts &amp; Stenner(2012)는 이를 심리적 유의성으로 설명한다.
            Q-sort에서 수량화되는 것은 외부 척도의 절대값이 아니라,
            참여자에게 무엇이 더 중요하고 덜 중요한지의 상대적 질서다.
          </p>
          <p>
            그래서 Q에서 사람 간 상관은
            &ldquo;두 사람이 같은 문항에 같은 점수를 줬는가&rdquo;보다 넓다.
            그것은 두 사람이 <strong>전체 진술문 세계를 얼마나 비슷하게 조직했는가</strong>를 묻는다.
          </p>
        </Card>

        {/* 카드 4 */}
        <Card
          num={4}
          title="데이터 행렬이 바뀌면 상관의 의미도 바뀐다"
          keyMessage="Q와 R의 차이는 숫자의 방향이 아니라, 상관이 무엇을 뜻하게 되는가의 차이다."
          points={[
            "같은 상관계수라도 해석 대상이 다르다.",
            "R의 상관은 변수 관계, Q의 상관은 관점 유사성이다.",
            "행렬 구조가 달라지면 분석 결과의 의미도 달라진다.",
          ]}
          imageSrc="/images/2-4-card-04-correlation-meaning-changes.webp"
          imageAlt="같은 Pearson r 기호가 한쪽에서는 변수 열을, 다른 쪽에서는 두 Q-sort 보드를 잇는 대비 장면"
        >
          <p>
            여기서 학생들이 가장 헷갈린다.
            &ldquo;어차피 Pearson r 아닌가요?&rdquo;
          </p>
          <p>
            맞다. 계산식은 같다.
            그러나 같은 숫자라도{" "}
            <strong>무엇을 비교했는지에 따라 의미는 달라진다</strong>.
          </p>
          <p>
            R에서 상관은 변수들이 함께 변하는 정도다.
            정치적 관심과 투표 참여, 위험 인식과 정책 지지가 함께 움직이는지를 본다.
            요인분석을 하면 변수들이 잠재 차원으로 묶인다.
          </p>
          <p>
            Q에서 상관되는 것은 한 사람의 전체 Q-sort와 다른 사람의 전체 Q-sort다.
            따라서 Q의 상관계수는 두 사람이 진술문들을 얼마나 비슷한 방식으로 상대 배열했는지를 뜻한다.
            전체 배열의 형태가 얼마나 닮았는가가 핵심이다.
          </p>
          <p>
            McKeown &amp; Thomas(2013)는 이 차이를 단위의 문제로도 짚는다.
            R 행렬을 그냥 뒤집으면, 한 열에 IQ·칼로리·소득처럼 서로 다른 측정 단위가 섞일 수 있다.
            이런 이질적 단위를 그대로 상관시키면 선형성의 의미가 흐려진다.
          </p>
          <p>
            반면 Q-sort에서는 모든 진술문이 참여자에게 주는{" "}
            <strong>심리적 유의성</strong>이라는 단일한 자기 참조 기준으로 배열된다.
            그래서 사람 간 상관은 단순 행렬 전치가 아니라,
            Q-sort라는 별도의 자료 생성 과정을 전제한다.
          </p>
          <p>
            Burt &amp; Stephenson(1939)의 논쟁도 이 지점이다.
            Burt는 사람 간 상관을 기존 요인분석의 수학적 변형으로 보았고,
            Stephenson은 그것이 다른 심리학적 목적과 가설을 요구한다고 보았다.
          </p>
          <p>
            작은 예. 두 사람이 같은 정책에 모두 찬성했다고 해서 같은 관점인 것은 아니다.
            한쪽은 &ldquo;공정성&rdquo; 때문에, 다른 쪽은 &ldquo;효율성&rdquo; 때문에 지지할 수 있다.
            Q-sort에서는 이 차이가 전체 배열의 우선순위로 드러난다.
          </p>
        </Card>

        {/* 카드 5 */}
        <Card
          num={5}
          title="요인의 의미 — 특성 차원이 아니라 공유된 관점"
          keyMessage="Q의 요인은 사람을 나누는 숨은 특성 차원이 아니라, 여러 사람이 공유하는 관점의 형태다."
          points={[
            "R요인은 속성의 차원으로 읽히기 쉽다.",
            "Q요인은 관점의 전형적 형태로 읽힌다.",
            "해석 언어도 \"trait\"보다 \"viewpoint\"에 가까워진다.",
          ]}
          imageSrc="/images/2-4-card-05-factor-as-shared-viewpoint.webp"
          imageAlt="변수들이 잠재 특성 축으로 모이는 장면과 Q-sort들이 factor array로 합쳐지는 장면이 대비되는 장면"
        >
          <p>
            요인이라는 말도 Q와 R에서 다르게 들린다.
          </p>
          <p>
            R에서 요인은 흔히 변수들 뒤의 잠재 특성으로 해석된다.
            여러 문항이 함께 움직이면 &ldquo;정치효능감&rdquo;, &ldquo;권위주의&rdquo;,
            &ldquo;위험회피 성향&rdquo; 같은 구성개념을 떠올린다.
          </p>
          <p>
            Q에서 요인은 다르게 읽힌다.
            Q요인은 <strong>특정 주제에 대해 비슷한 Q-sort 배열을 보인 사람들이 공유하는 관점의 형태</strong>다.
          </p>
          <p>
            그래서 Q요인을 해석할 때 첫 질문은 &ldquo;이 사람들은 어떤 유형인가&rdquo;가 아니다.
            더 중요한 질문은
            &ldquo;이 관점은 무엇을 가장 중요하게 보고, 무엇을 뒤로 미루며, 어떤 차이를 의미 있게 느끼는가&rdquo;다.
          </p>
          <p>
            McKeown &amp; Thomas(2013)는 Q-sort들이 상관·요인분석될 때,
            방대한 의사소통의 장(<em>concourse</em>) 안에 있던 독립적 관점들이 더 선명하게 드러난다고 본다.
            요인분석은 사람을 고정 범주에 가두는 도구가 아니라,
            복잡한 관점 배열을 해석 가능하게 정리하는 도구가 된다.
          </p>
          <p>
            이 점을 놓치면 &ldquo;factor = 사람 유형&rdquo;이라는 오해가 생긴다.
            어떤 사람이 특정 요인에 적재된다는 말은
            그가 영구적으로 그 유형이라는 뜻이 아니다.
          </p>
          <p>
            그것은 <strong>특정 연구 주제, 특정 Q표본, 특정 지시 조건 아래에서</strong>{" "}
            그 사람이 그 관점 배열과 강하게 연결된다는 뜻이다.
            Q요인은 사람의 본질이라기보다 표현된 공유 관점의 이상화된 형태다.
          </p>
        </Card>

        {/* 카드 6 */}
        <Card
          num={6}
          title="왜 Q는 단순한 전치가 아닌가"
          keyMessage="Q는 행렬을 뒤집는 데서 출발했지만, 자료 생성 방식과 해석 목적까지 달라지는 독립적 방법론이다."
          points={[
            "출발점에 전치의 발상이 있었던 것은 맞다.",
            "그러나 Q는 자료 수집 단계부터 별도의 설계 논리를 가진다.",
            "\"R을 뒤집었다\"는 말은 입문용 설명일 뿐, 최종 설명은 아니다.",
          ]}
          imageSrc="/images/2-4-card-06-not-simple-transposition.webp"
          imageAlt="회전 화살표가 멈추고 그 너머에 Q표본·Q-sort·사람 간 상관·factor array·해석 메모가 하나의 흐름으로 이어지는 장면"
        >
          <p>
            <strong>&ldquo;Q는 R을 뒤집은 것이다.&rdquo;</strong>
            이 문장은 어디까지 맞고, 어디서부터 부족한가.
          </p>
          <p>
            역사적 출발점을 설명할 때는 맞다.
            Stephenson(1935b)은 요인분석의 역전을 제안했고,
            Stephenson(1935a, 1936)은 사람 간 상관을 실험과 절차로 보여주었다.
          </p>
          <p>
            그러나 최종 설명으로는 부족하다.
            Q방법론은 R 데이터 행렬을 단순히 가져와 행과 열을 바꾸는 방법이 아니다.
          </p>
          <p>
            Q가 성립하려면 먼저{" "}
            <strong>의사소통의 장에서 Q표본이 구성되어야 한다</strong>.
            참여자는 그 진술문들을 자기 참조적 기준으로 전체 배열한다.
            연구자는 그 Q-sort들 사이의 상관을 계산하고,
            요인분석과 회전을 거쳐 공유된 관점의 형태를 해석한다.
          </p>
          <p>
            자료 생성, 분석, 해석이 하나의 설계 논리로 연결되어 있다.
          </p>
          <p>
            McKeown &amp; Thomas(2013)는 Q방법론을
            Q-sort라는 기법, 상관·요인분석·요인점수라는 분석 방법,
            그리고 주관성을 과학적으로 다루는 포괄적 탐구 논리의 결합으로 설명한다.
          </p>
          <p>
            Q-sort만 가져와 설문 보조 도구처럼 쓰거나,
            사람 간 상관만 계산하고 Q의 철학적 전제를 잊으면 핵심이 사라진다.
          </p>
          <p style={{ color: "var(--black)", fontWeight: 500 }}>
            Q는 R의 거울상이 아니라, 주관성을 과학적으로 연구하기 위해
            분석 단위와 해석 언어를 새로 조직한 방법론이다.
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
          Q와 R은 어디서 갈라지는가
        </h2>
        <ul
          className="space-y-4 pl-1"
          style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}
        >
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>연구 질문의 차이</strong>
              <br />R은 변수의 관계로 사람을 설명하고, Q는 사람의 배열로 관점을 드러낸다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>자료 구조의 차이</strong>
              <br />R은 개인별 변수값이 단위, Q는 한 사람의 전체 Q-sort가 단위다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>상관의 차이</strong>
              <br />R은 변수 간 상관, Q는 사람 간 상관을 다룬다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>요인 해석의 차이</strong>
              <br />R요인은 잠재 속성, Q요인은 공유된 관점의 구조에 가깝다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>측정 단위의 차이</strong>
              <br />R은 변수마다 단위가 다를 수 있지만, Q는 모든 진술문이 심리적 유의성이라는 공통 기준 위에 놓인다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>방법론적 지위의 차이</strong>
              <br />Q는 단순 전치에서 출발했지만, 독립적 자료 생성·해석 논리를 가진다.
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
          핵심 정리 — R vs Q
        </h2>

        {/* 데스크탑: 테이블 */}
        <div className="hidden sm:block overflow-x-auto">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>비교 항목</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>R방법론</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>Q방법론</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr
                  key={row.item}
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
                >
                  <td className="py-3 pr-4">
                    <span className="font-medium" style={{ color: "var(--brand-deep)" }}>{row.item}</span>
                  </td>
                  <td className="py-3 pr-4 leading-relaxed">{row.r}</td>
                  <td className="py-3 leading-relaxed">{row.q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일: 카드형 */}
        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div
              key={row.item}
              className="py-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="font-medium mb-2" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>
                {row.item}
              </div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }}>
                <div className="mb-1">
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
                  >
                    R
                  </span>
                  {row.r}
                </div>
                <div>
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--brand)" }}
                  >
                    Q
                  </span>
                  {row.q}
                </div>
              </div>
            </div>
          ))}
        </div>
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
            2-4강의 핵심은 Q와 R의 차이를 &ldquo;행렬을 뒤집는다&rdquo;는 설명 너머에서 이해하는 것이다.
          </p>
          <p>
            Stephenson(1935a, 1935b, 1936)은 사람 간 상관의 가능성을 열었고,
            Stephenson(1953)은 이를 Q방법론으로 체계화했다.
            Brown(1980), Watts &amp; Stenner(2012), McKeown &amp; Thomas(2013)가 보여주듯
            Q의 핵심은 단순 전치가 아니라 Q-sort의 전체 배열, 심리적 유의성, 자기 참조,
            사람 간 상관, 공유된 관점 해석이 하나로 이어지는 데 있다.
          </p>
          <p>
            Q는 R의 반대말이 아니다.
            주관성을 다른 방식으로 과학의 대상으로 만드는 방법론이다.
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
          href="/lessons/2-3"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 2-3. 주관성의 과학적 탐구
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            3-1. 변수 중심 vs 사람 중심 (준비 중)
          </span>
        </div>
      </div>
    </div>
  );
}
