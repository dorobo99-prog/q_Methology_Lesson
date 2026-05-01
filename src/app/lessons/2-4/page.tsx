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
          왜 &ldquo;뒤집으면 된다&rdquo;는 말이 충분하지 않은가
        </h2>
        <div
          className="space-y-5"
          style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}
        >
          <p>
            Q방법론을 처음 배울 때 가장 많이 듣는 말이 있다.
          </p>
          <p style={{ color: "var(--black)", fontWeight: 500 }}>
            &ldquo;Q는 R을 뒤집은 것이다.&rdquo;
          </p>
          <p>
            이 설명은 완전히 틀린 말은 아니다.
            역사적으로 보면 Stephenson의 출발점은 실제로 요인분석의 방향을 바꾸는 데 있었다.
          </p>
          <p>
            기존 요인분석은 여러 사람에게 여러 검사를 실시하고, 검사나 변수들 사이의 상관관계를 분석했다.
            Stephenson(1935b)은 이 절차를 뒤집어 볼 수 있다고 제안했다.
          </p>
          <p>
            검사 대신 사람을 상관시키면, 기존 분석이 잘 다루지 못했던 심미적 취향, 태도, 성격, 주관적 판단을 실험실 안으로 끌어올 수 있다는 발상이었다.
          </p>
          <p>
            하지만 여기서 멈추면 Q방법론을 잘못 이해하게 된다.
          </p>
          <p>
            &ldquo;뒤집는다&rdquo;는 말은 수학적 출발점은 설명하지만, 방법론 전체를 설명하지 못한다.
            Brown(1980)이 강조하듯 Q방법론의 토대는 단순한 행렬 전치가 아니라 <strong>개인내 유의성</strong>이다.
          </p>
          <p>
            Q방법론은 한 사람이 여러 진술문을 자기 기준에 따라 어떻게 상대적으로 배열하는지를 본다.
            핵심은 &ldquo;행과 열을 바꿨다&rdquo;가 아니라, &ldquo;무엇을 의미 있는 자료로 볼 것인가를 바꿨다&rdquo;에 있다.
          </p>
          <p>
            R방법론은 여러 사람에게서 얻은 변수값을 모아 변수들이 함께 어떻게 움직이는지 본다.
            이때 사람은 대개 변수값을 제공하는 사례가 된다.
          </p>
          <p>
            반면 Q방법론은 한 사람이 만든 전체 Q-sort를 하나의 의미 있는 배열로 보고, 그 배열들 사이의 유사성과 차이를 상관시킨다.
            이때 사람은 점수의 운반자가 아니라 관점의 배열을 수행한 주체가 된다.
          </p>
          <p>
            Watts &amp; Stenner(2012)가 말하는 <em>심리적 유의성</em>, McKeown &amp; Thomas(2013)가 강조하는 <em>자기 참조</em>는 바로 이 차이를 설명하는 핵심 단어다.
          </p>
          <p>
            그래서 2-4강의 목표는 R방법론을 깎아내리는 것이 아니다.
            R방법론은 변수 간 관계, 평균 차이, 예측, 척도화에 강한 방법이다.
          </p>
          <p>
            다만 Q방법론이 묻는 질문은 다르다.
          </p>
          <p>
            Q방법론은 &ldquo;이 변수가 다른 변수와 얼마나 함께 움직이는가&rdquo;보다 &ldquo;이 사람들은 이 주제의 진술문들을 어떤 관점 구조로 배열하는가&rdquo;를 묻는다.
            같은 상관계수와 요인분석을 사용하더라도, 연구 질문과 자료 구조가 달라지면 해석의 세계도 달라진다.
          </p>
          <p>
            이 강의는 그 차이를 여섯 걸음으로 나누어 따라간다.
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>Q와 R이 같은 요인분석 전통 안에서 어떻게 다른 질문을 갖게 되었는가.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>R방법론의 변수 중심 논리와 Q방법론의 사람 중심 논리는 각각 무엇인가.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>같은 상관계수라도 R에서는 변수 관계, Q에서는 관점 유사성을 뜻한다는 점.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span>Q요인이 숨은 특성이 아니라 공유된 관점의 형태라는 점, 그리고 Q가 왜 단순 전치가 아닌 독립적 방법론인지.</span>
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
          Q와 R의 차이를 설명할 때 가장 먼저 피해야 할 함정은 둘을 완전히 다른 우주처럼 말하는 것이다.
          Q방법론은 통계를 버리고 질적 해석만 남긴 방법이 아니다.
        </p>
        <p>
          Stephenson은 요인분석의 외부자가 아니라 내부자였다.
          2-2강에서 보았듯, 그의 문제의식은 통계를 버리는 것이 아니라 <strong>통계가 무엇을 보게 만들 것인가</strong>를 바꾸는 데 있었다.
        </p>
        <p>
          그래서 Q방법론은 요인분석과 결별한 방법이 아니라, 요인분석의 질문을 다른 방향으로 돌린 방법이다.
        </p>
        <p>
          Stephenson(1935b)의 짧은 <em>Nature</em> 서신은 이 출발점을 잘 보여준다.
          당시의 요인분석은 여러 사람에게서 측정한 검사나 변수들 사이의 상관을 분석하는 방식이었다.
        </p>
        <p>
          Stephenson은 이 기법을 역전할 수 있다고 보았다.
          여러 검사나 항목을 두고, 사람들 사이의 상관을 구하면 어떨까.
        </p>
        <p>
          이 질문은 훗날 Q방법론으로 발전한다.
          그러나 1935년의 발상만으로 Q방법론 전체가 완성된 것은 아니다.
          1936년에는 역전된 요인 기법이 절차화되었고, 1953년에는 주관적 행동을 연구하는 방법론으로 체계화되었다.
        </p>
        <p>
          여기서 중요한 것은 &ldquo;같은 요인분석&rdquo;이라는 표현과 &ldquo;다른 출발점&rdquo;이라는 표현을 동시에 붙잡는 일이다.
        </p>
        <p>
          R방법론은 여러 변수들이 함께 움직이는 패턴을 분석해 잠재 차원이나 특성을 추론한다.
          Q방법론은 여러 사람이 만든 전체 배열들이 서로 얼마나 비슷한지를 분석해 공유된 관점의 구조를 드러낸다.
        </p>
        <p>
          같은 상관과 요인분석이라는 언어를 사용할 수 있지만, 그 언어가 가리키는 대상은 다르다.
        </p>
        <p>
          Brown(1980)은 이 차이를 <strong>개인내 유의성</strong>이라는 말로 정리한다.
        </p>
        <p>
          Q방법론에서 중요한 것은 여러 사람 사이의 평균 점수 차이가 아니라, 한 사람 안에서 진술문들이 어떤 상대적 질서를 이루는가이다.
        </p>
        <p>
          이 점을 이해하면 &ldquo;Q는 R을 뒤집었다&rdquo;라는 말의 한계가 보인다.
          Q는 단순히 행과 열을 바꾼 것이 아니라, 한 사람이 자기 세계를 배열하는 방식 자체를 자료로 삼았다.
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
            R방법론을 설명할 때 조심해야 할 점이 있다.
            Q방법론을 돋보이게 하려고 R방법론을 단순하거나 낡은 방법처럼 말하면 안 된다.
          </p>
          <p>
            R방법론은 아주 강력한 질문을 잘 다루는 방법이다.
            어떤 태도 척도와 행동 지표가 함께 움직이는지, 어떤 변수들이 하나의 잠재 구성개념을 이루는지, 어떤 집단이 평균적으로 더 높은 점수를 보이는지 묻는 연구에는 R방법론이 적합하다.
          </p>
          <p>
            전형적인 R방법론의 데이터 표를 떠올려보자.
            행에는 사람들이 있고, 열에는 변수들이 있다.
          </p>
          <p>
            한 사람은 정치적 관심, 교육 수준, 소득, 이념 성향, 정책 지지 점수 같은 여러 변수값을 제공한다.
            연구자는 이 변수들 사이의 상관을 보고, 어떤 변수들이 함께 움직이는지 분석한다.
          </p>
          <p>
            요인분석을 사용한다면, 요인은 여러 변수 뒤에 있는 잠재 차원으로 해석되기 쉽다.
            그 끝에서 &ldquo;정치효능감&rdquo;이나 &ldquo;권위주의&rdquo; 같은 구성개념이 등장할 수 있다.
          </p>
          <p>
            이 구조에서 사람은 중요하지 않은 존재가 아니다.
            다만 분석의 중심이 사람의 전체 관점이라기보다 변수들 사이의 관계에 놓인다.
          </p>
          <p>
            사람은 변수값을 제공하는 사례이고, 변수가 분석의 주인공이 된다.
          </p>
          <p>
            그래서 R방법론은 이런 질문에 강하다.
            &ldquo;이 변수와 저 변수는 얼마나 관련이 있는가&rdquo;, &ldquo;이 척도는 어떤 요인으로 묶이는가&rdquo;, &ldquo;이 특성은 다른 특성을 얼마나 예측하는가&rdquo;.
          </p>
          <p>
            2-1강에서 우리는 이 변수 중심 논리가 사람의 주관성을 놓칠 수 있다는 점을 보았다.
            평균과 변수 간 상관은 유용하지만, 사람이 자기 세계를 어떻게 의미 있게 배열하는지를 보여주지는 않는다.
          </p>
          <p>
            바로 이 지점에서 Q방법론은 다른 질문을 던진다.
            사람을 변수값의 묶음으로 보는 대신, 한 사람이 만든 전체 배열을 하나의 자료로 본다면 무엇이 보일까.
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
            Stephenson(1935a)의 제목은 매우 직관적이다.
            &ldquo;검사 대신 사람을 상관시키기.&rdquo;
          </p>
          <p>
            이것이 Q방법론의 첫 번째 문을 연다.
            하지만 여기서 말하는 사람 간 상관은 &ldquo;사람이 사람과 비슷하다&rdquo;는 막연한 말이 아니다.
          </p>
          <p>
            Q방법론에서 상관되는 것은 각 참여자가 만든 <strong>전체 Q-sort</strong>다.
            한 사람이 여러 진술문을 읽고, 비교하고, 가장 동의하는 것부터 가장 동의하지 않는 것까지 상대적으로 배열한 전체 구조가 상관의 대상이 된다.
          </p>
          <p>
            이 차이는 작아 보이지만 결정적이다.
          </p>
          <p>
            설문조사에서는 보통 각 문항에 독립적으로 점수를 준다.
            연구자는 이후 문항 점수를 합산하거나 변수 간 상관을 계산한다.
          </p>
          <p>
            반면 Q-sort에서는 참여자가 진술문들을 서로 비교해야 한다.
            어떤 진술문을 오른쪽 끝에 놓으면, 다른 진술문은 상대적으로 밀려난다.
          </p>
          <p>
            한 진술문의 의미는 전체 배열 안에서 다른 진술문들과의 관계 속에서 정해진다.
          </p>
          <p>
            그래서 Q-sort는 낱개 응답표가 아니라 <strong>관점의 배열</strong>이다.
          </p>
          <p>
            Watts &amp; Stenner(2012)는 이 점을 <strong>심리적 유의성</strong>이라는 말로 설명한다.
            Q-sort에서 수량화되는 것은 외부 기준으로 측정한 절대값이 아니라, 참여자에게 무엇이 더 중요하고 덜 중요한지의 상대적 질서다.
          </p>
          <p>
            McKeown &amp; Thomas(2013)도 Q방법론에서 모든 진술문이 <strong>자기 참조적 기준</strong> 속에서 의미를 얻는다고 설명한다.
            이 때문에 Q방법론은 이질적인 진술문들을 한 사람의 심리적 중요도라는 단일한 배열 질서 안에 놓을 수 있다.
          </p>
          <p>
            따라서 Q방법론에서 사람 간 상관은 &ldquo;두 사람이 같은 문항에 같은 점수를 줬는가&rdquo;보다 더 넓은 의미를 갖는다.
            그것은 두 사람이 전체 진술문 세계를 얼마나 비슷하게 조직했는가를 묻는다.
          </p>
          <p>
            비슷한 Q-sort를 보인 사람들은 특정 주제에 대해 유사한 관점 구조를 공유한다고 볼 수 있다.
            Q요인은 바로 이 <strong>공유된 관점의 패턴</strong>을 드러내는 장치다.
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
            여기서 학생들이 가장 많이 헷갈리는 지점이 나온다.
            &ldquo;어차피 상관계수는 같은 Pearson r 아닌가요?&rdquo;
          </p>
          <p>
            맞다. 계산식만 보면 같은 상관계수를 쓸 수 있다.
            하지만 같은 숫자라도 <strong>무엇을 비교했는지에 따라 의미는 달라진다</strong>.
          </p>
          <p>
            온도와 습도의 상관, 두 사람의 Q-sort 배열 상관, 두 척도 점수의 상관은 모두 상관계수로 표현될 수 있지만, 해석 대상은 다르다.
          </p>
          <p>
            R방법론에서 상관은 보통 변수들이 함께 변하는 정도를 뜻한다.
            정치적 관심과 투표 참여가 함께 증가하는지, 위험 인식과 정책 지지가 함께 움직이는지 보는 것이다.
          </p>
          <p>
            이때 상관계수는 변수 관계의 지표다.
            요인분석을 하면 여러 변수들이 하나의 잠재 차원으로 묶일 수 있고, 요인은 변수들 뒤에 있는 구조로 읽힌다.
          </p>
          <p>
            Q방법론에서 상관은 다르다.
          </p>
          <p>
            Q에서 상관되는 것은 한 사람이 만든 전체 Q-sort와 다른 사람이 만든 전체 Q-sort다.
            Q의 상관계수는 두 사람이 진술문들을 얼마나 비슷한 방식으로 상대 배열했는지를 뜻한다.
          </p>
          <p>
            어떤 두 사람이 같은 문장 몇 개에만 비슷하게 반응했는지가 아니라, 전체 배열의 형태가 얼마나 닮았는지가 중요하다.
            그래서 Q에서 상관은 <strong>관점 유사성의 지표</strong>다.
          </p>
          <p>
            McKeown &amp; Thomas(2013)는 이 차이를 단위의 문제로도 설명한다.
          </p>
          <p>
            단순히 R 데이터 행렬을 뒤집으면, 한 열 안에 IQ, 칼로리, 소득처럼 서로 다른 측정 단위가 섞일 수 있다.
            이런 이질적 단위를 그냥 상관시키면 선형성의 의미가 불분명해진다.
          </p>
          <p>
            그러나 Q-sort에서는 모든 진술문이 참여자에게 주는 <strong>심리적 유의성</strong>이라는 단일한 자기 참조적 기준으로 배열된다.
            그래서 사람 간 상관은 단순한 행렬 전치가 아니라, Q-sort라는 별도의 자료 생성 과정을 전제로 한다.
          </p>
          <p>
            Burt &amp; Stephenson(1939)의 논쟁도 이 지점을 잘 보여준다.
          </p>
          <p>
            Burt는 사람 간 상관을 기존 요인분석의 수학적 변형이나 실용적 대안으로 볼 수 있다고 보았다.
            반면 Stephenson은 사람 간 상관이 기존 r기법과 다른 심리학적 목적과 가설을 요구한다고 보았다.
          </p>
          <p>
            이 차이는 단순한 용어 싸움이 아니다.
            상관이 무엇을 뜻하는가, 요인이 무엇을 드러내는가, 과학이 어떤 종류의 주관성을 다룰 수 있는가에 대한 방법론적 갈림길이었다.
          </p>
          <p>
            작은 예로 생각해 보자.
            두 사람이 어떤 정책에 모두 찬성했다고 해서 같은 관점을 가진 것은 아니다.
          </p>
          <p>
            한 사람은 그 정책을 &ldquo;공정성&rdquo; 때문에 지지할 수 있고, 다른 사람은 &ldquo;효율성&rdquo; 때문에 지지할 수 있다.
          </p>
          <p>
            Q-sort에서는 이런 차이가 전체 배열의 우선순위로 드러난다.
            같은 찬성이라도 무엇을 가장 앞에 두고 무엇을 뒤로 미루는지가 다르면, 두 사람의 관점 구조는 달라진다.
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
          R방법론에서 요인은 흔히 변수들의 묶음 뒤에 있는 잠재 특성이나 차원으로 해석된다.
          여러 문항이 함께 움직이면 &ldquo;정치효능감&rdquo;, &ldquo;권위주의&rdquo;, &ldquo;위험회피 성향&rdquo; 같은 구성개념을 떠올릴 수 있다.
        </p>
        <p>
          물론 R요인 해석도 연구 설계에 따라 다양하지만, 기본적으로 <strong>변수들의 관계</strong>가 중심이다.
        </p>
        <p>
          Q방법론에서 요인은 다르게 읽힌다.
        </p>
        <p>
          Q요인은 어떤 사람들이 본질적으로 같은 성격을 가졌다는 뜻이 아니다.
          Q요인은 특정 주제에 대해 비슷한 Q-sort 배열을 보인 사람들이 공유하는 <strong>관점의 형태</strong>다.
        </p>
        <p>
          그래서 Q요인을 해석할 때 가장 먼저 물어야 할 질문은 &ldquo;이 사람들은 어떤 유형의 사람인가&rdquo;가 아니다.
        </p>
        <p style={{ color: "var(--black)", fontWeight: 500 }}>
          &ldquo;이 관점은 무엇을 가장 중요하게 보고, 무엇을 뒤로 미루며, 어떤 차이를 의미 있게 느끼는가.&rdquo;
        </p>
        <p>
          Watts &amp; Stenner(2012)는 Q방법론의 요인이 특정 주제에 대해 유사한 관점이나 태도를 공유하는 사람들의 군집을 식별한다고 설명한다.
        </p>
        <p>
          McKeown &amp; Thomas(2013)는 Q-sort들이 서로 상관되고 요인분석될 때, 방대한 의사소통의 장(<em>concourse</em>) 안에 들어 있던 독립적인 관점들이 더 선명하게 드러난다고 본다.
          요인분석은 여기서 사람을 고정된 성격 범주에 가두는 도구가 아니라, 복잡한 관점 배열을 해석 가능하게 정리하는 도구가 된다.
        </p>
        <p>
          이 점을 놓치면 &ldquo;factor = 사람 유형&rdquo;이라는 오해가 생긴다.
        </p>
        <p>
          Q연구에서 어떤 사람이 특정 요인에 적재된다는 말은, 그 사람이 영구적으로 그 유형의 사람이라는 뜻이 아니다.
          그것은 특정 연구 주제, 특정 Q표본, 특정 지시 조건 아래에서 그 사람이 그 관점 배열과 강하게 연결된다는 뜻이다.
        </p>
        <p>
          Q요인은 사람 자체의 본질이라기보다, 주어진 주제에 대해 표현된 <strong>공유 관점의 이상화된 형태</strong>다.
        </p>
        <p>
          그래서 이후 요인해석 강의에서는 factor array, distinguishing statements, consensus statements, 참여자 사후 인터뷰가 중요해진다.
        </p>
        <p>
          Q요인을 해석하려면 요인의 이름을 붙이는 것만으로는 부족하다.
          각 요인이 어떤 진술문을 극단에 놓고, 어떤 진술문을 중립에 두며, 다른 요인과 어디서 갈라지는지 서사적으로 설명해야 한다.
        </p>
        <p>
          Q요인은 통계 결과이면서 동시에 해석해야 할 <strong>관점의 이야기</strong>다.
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
          이제 2-4강의 결론으로 가보자.
        </p>
        <p style={{ color: "var(--black)", fontWeight: 500 }}>
          &ldquo;Q는 R을 뒤집은 것이다.&rdquo; 이 문장은 어디까지 맞고, 어디서부터 부족한가.
        </p>
        <p>
          역사적 출발점을 설명할 때는 맞다.
          Stephenson(1935b)은 요인분석을 역전할 수 있다고 제안했고, Stephenson(1935a, 1936)은 사람 간 상관을 실험과 절차로 보여주었다.
        </p>
        <p>
          Q방법론을 처음 배우는 학생에게 이 문장은 입구가 될 수 있다.
        </p>
        <p>
          그러나 최종 설명으로는 부족하다.
        </p>
        <p>
          Q방법론은 단순히 기존 R 데이터 행렬을 가져와 행과 열을 바꾸는 방법이 아니다.
          Q방법론이 성립하려면 먼저 의사소통의 장에서 Q표본을 구성해야 한다.
        </p>
        <p>
          참여자는 그 진술문들을 자기 참조적 기준에 따라 전체 배열로 분류해야 한다.
          연구자는 그 전체 Q-sort들 사이의 상관을 계산하고, 요인분석과 회전을 거쳐 공유된 관점의 형태를 해석해야 한다.
        </p>
        <p>
          <strong>자료 생성, 분석, 해석</strong>이 하나의 설계 논리로 연결되어 있다.
        </p>
        <p>
          McKeown &amp; Thomas(2013)는 Q방법론을 Q-sort라는 기법, 상관·요인분석·요인점수라는 분석 방법, 그리고 주관성을 과학적으로 다루는 포괄적 탐구 논리의 결합으로 설명한다.
        </p>
        <p>
          이 설명은 매우 중요하다.
          Q-sort만 가져와서 설문 보조 도구처럼 쓰거나, 사람 간 상관만 계산하고 Q의 철학적 전제를 잊으면 Q방법론의 핵심이 사라진다.
        </p>
        <p>
          Q방법론은 도구 상자의 한 가지 기술이 아니라, 주관성이 표현되는 질서를 자료로 만드는 방법론이다.
        </p>
        <p>
          Brown(1980)의 비판도 같은 방향을 가리킨다.
          Q방법론의 올바른 토대는 단순 전치가 아니라 <strong>개인내 유의성</strong>이다.
        </p>
        <p>
          Q방법론은 한 사람 안에서 진술문들이 어떤 질서를 이루는지, 그리고 그 질서가 다른 사람들의 배열과 어떻게 닮거나 다른지를 본다.
          Watts &amp; Stenner(2012)도 Q방법론이 성립하려면 모든 진술문을 개인의 심리적 기준에 따라 상대 평가하는 Q-sort라는 새로운 자료 수집 과정이 필요하다고 강조한다.
        </p>
        <p>
          따라서 2-4강의 핵심 문장은 이렇게 정리할 수 있다.
        </p>
        <p>
          Q방법론은 R을 뒤집는 발상에서 출발했지만, R의 단순한 변형으로 끝나지 않는다.
          Q방법론은 주관성이 표현되는 <strong>전체 배열</strong>을 자료로 삼고, 사람 간 상관을 통해 <strong>공유된 관점 구조</strong>를 드러내며, 그 요인을 통계적 차원이 아니라 해석해야 할 <strong>관점의 형태</strong>로 읽는다.
        </p>
        <p style={{ color: "var(--black)", fontWeight: 500 }}>
          Q는 R의 거울상이 아니라, 주관성을 과학적으로 연구하기 위해 분석 단위와 해석 언어를 새로 조직한 방법론이다.
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
            Stephenson(1935a, 1935b, 1936)은 사람 간 상관의 가능성을 열었고, Stephenson(1953)은 이를 Q방법론으로 체계화했다.
          </p>
          <p>
            그러나 Brown(1980), Watts &amp; Stenner(2012), McKeown &amp; Thomas(2013)가 보여주듯 Q방법론의 핵심은 단순 전치가 아니라 Q-sort라는 전체 배열, 심리적 유의성, 자기 참조, 사람 간 상관, 공유된 관점 해석이 하나로 이어지는 데 있다.
          </p>
          <p style={{ color: "var(--black)", fontWeight: 500 }}>
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
        <Link
          href="/lessons/3-1"
          className="text-sm text-right"
          style={{ color: "var(--gray-400)" }}
        >
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            3-1. Stephenson 이후 Q의 전개 →
          </span>
        </Link>
      </div>
    </div>
  );
}
