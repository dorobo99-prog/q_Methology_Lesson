import type { Metadata } from "next";
import Link from "next/link";
import LessonCard from "@/components/LessonCard";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "2-2. Stephenson의 문제의식 | Q방법론 온라인 강의",
  description:
    "1930년대 사회과학의 네 갈래 막다른 길 위에서, Stephenson이 주관성을 어떻게 과학의 대상으로 삼았는지를 따라간다.",
};

const references = [
  {
    key: "Bridgman1927",
    text: (
      <>
        Bridgman, P. W. (1927). <em>The logic of modern physics</em>.
      </>
    ),
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
        Brown, S. R. (1993). A primer on Q methodology. <em>Operant Subjectivity, 16</em>(3/4).
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.93.100504",
  },
  {
    key: "Brown1996",
    text: (
      <>
        Brown, S. R. (1996). Q methodology and qualitative research. <em>Qualitative Health Research, 6</em>(4), 561–567.
      </>
    ),
    doi: "https://doi.org/10.1177/104973239600600408",
  },
  {
    key: "BurtStephenson1939",
    text: (
      <>
        Burt, C., & Stephenson, W. (1939). Alternative views on correlations between persons. <em>Psychometrika, 4</em>(4), 269–281.
      </>
    ),
    doi: "https://doi.org/10.1007/BF02287939",
  },
  {
    key: "Fisher1971",
    text: (
      <>
        Fisher, R. A. (1971). <em>The design of experiments</em> (9th ed.). Hafner Press.
      </>
    ),
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
    key: "Hardcastle1995",
    text: (
      <>
        Hardcastle, G. L. (1995). S. S. Stevens and the origins of operationism. <em>Philosophy of Science, 62</em>(3), 404–424.
      </>
    ),
    doi: "https://doi.org/10.1086/289875",
  },
  {
    key: "McKeownThomas2013",
    text: (
      <>
        McKeown, B., & Thomas, D. (2013). <em>Q methodology</em>. SAGE Publications, Inc.
      </>
    ),
    doi: "https://doi.org/10.4135/9781483384412",
  },
  {
    key: "Ramlo2025",
    text: (
      <>
        Ramlo, S. (2025). Beyond a set of procedures: Reclaiming the philosophical depth of Q methodology. <em>Theory & Psychology</em>, 09593543251381239.
      </>
    ),
    doi: "https://doi.org/10.1177/09593543251381239",
  },
  {
    key: "RamloNewman2011",
    text: (
      <>
        Ramlo, S. E., & Newman, I. (2011). Q methodology and its position in the mixed-methods continuum. <em>Operant Subjectivity, 34</em>(3), 172–191.
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.11.100594",
  },
  {
    key: "Skinner1938",
    text: (
      <>
        Skinner, B. F. (1938). <em>The behavior of organisms</em>. Appleton-Century.
      </>
    ),
  },
  {
    key: "Stenner2011",
    text: (
      <>
        Stenner, P. (2011). Q methodology as qualiquantology. <em>Operant Subjectivity, 34</em>(3), 192–203.
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.11.100593",
  },
  {
    key: "StennerRogers2004",
    text: (
      <>
        Stenner, P., & Rogers, R. S. (2004). Q methodology and qualiquantology: The example of discriminating between emotions. In Z. Todd, B. Nerlich, S. McKeown, & D. D. Clarke (Eds.), <em>Mixing methods in psychology: The integration of qualitative and quantitative methods in theory and practice</em> (pp. 101–120). Psychology Press.
      </>
    ),
  },
  {
    key: "Stephenson1935a",
    text: (
      <>
        Stephenson, W. (1935a). Correlating persons instead of tests. <em>Journal of Personality, 4</em>(1), 17–24.
      </>
    ),
    doi: "https://doi.org/10.1111/j.1467-6494.1935.tb02022.x",
  },
  {
    key: "Stephenson1935b",
    text: (
      <>
        Stephenson, W. (1935b). Technique of factor analysis. <em>Nature, 136</em>(3434), 297.
      </>
    ),
    doi: "https://doi.org/10.1038/136297b0",
  },
  {
    key: "Stephenson1936",
    text: (
      <>
        Stephenson, W. (1936). The inverted factor technique. <em>British Journal of Psychology. General Section, 26</em>(4), 344–361.
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
    key: "Stevens1935",
    text: (
      <>
        Stevens, S. S. (1935). The operational definition of psychological concepts. <em>Psychological Review, 42</em>(6), 517–527.
      </>
    ),
    doi: "https://doi.org/10.1037/h0056973",
  },
  {
    key: "Watson1913",
    text: (
      <>
        Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review, 20</em>(2), 158–177.
      </>
    ),
    doi: "https://doi.org/10.1037/h0074428",
  },
  {
    key: "Watts2012",
    text: (
      <>
        Watts, S., & Stenner, P. (2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE Publications Ltd.
      </>
    ),
    doi: "https://doi.org/10.4135/9781446251911",
  },
];

const summaryTable = [
  {
    stage: "행동주의 배경",
    sources: "Watson(1913), Skinner(1938)",
    meaning: "의식과 내성이 과학 밖으로 밀려나고, 관찰 가능한 행동이 심리학의 표준 언어가 되는 배경",
  },
  {
    stage: "조작주의 배경",
    sources: "Bridgman(1927), Stevens(1935), Hardcastle(1995), Verhaegh(2021)",
    meaning: "개념을 공개적 조작과 변별 반응으로 정리하려는 1930년대 심리학의 과학화 전략",
  },
  {
    stage: "출발점",
    sources: "Stephenson(1935b)",
    meaning: "요인분석을 검사 간 상관에서 사람 간 상관으로 뒤집을 수 있다는 짧은 제안",
  },
  {
    stage: "첫 실험",
    sources: "Stephenson(1935a)",
    meaning: "색상 선호도 실험을 통해 사람 간 상관과 강제분포형 분류의 원형을 제시",
  },
  {
    stage: "절차화",
    sources: "Stephenson(1936)",
    meaning: "Q기법의 실험 절차, 사람 간 상관, 요인 포화도의 전형성 해석을 정식화",
  },
  {
    stage: "방법론적 갈림길",
    sources: "Burt & Stephenson(1939)",
    meaning: "Q를 단순 행렬 전치로 볼 것인지, 독립 방법론으로 볼 것인지의 차이를 드러냄",
  },
  {
    stage: "체계화",
    sources: "Stephenson(1953)",
    meaning: "주관적 행동, 단일 사례, 구조화된 Q표본을 다루는 Q방법론으로 확장",
  },
  {
    stage: "후대 해석",
    sources: "Brown(1980), Good(2010), Watts & Stenner(2012)",
    meaning: "조작적 주관성, 주관성의 과학, 현대 Q 연구 절차로 Stephenson의 문제의식을 번역",
  },
  {
    stage: "철학적 확장",
    sources: "Stenner & Rogers(2004), Stenner(2011), Ramlo & Newman(2011), Ramlo(2025)",
    meaning: "Q방법론을 단순 혼합방법이 아니라 질적 변동을 수학적으로 다루는 양질 혼합으로 해석",
  },
];

export default function Lesson22Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "2부" },
          { label: "2-2. Stephenson의 문제의식" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-04-28"
        title="Stephenson의 문제의식"
        description="1930년대 사회과학의 네 갈래 막다른 길 위에서, Stephenson이 “주관성을 어떻게 과학의 대상으로 삼을 것인가”라는 질문을 어떻게 Q방법론의 출발점으로 바꾸었는지 따라간다."
        imageSrc="/images/2-2-card-00-stephenson-problematic.webp"
        imageAlt="Stephenson의 1935년 서신, 1936년 논문, 1953년 단행본이 한 책상 위에 놓이고 변수 행렬이 사람들의 관점 배열로 바뀌는 장면"
      />

      {/* 도입 설명 */}
      <section className="mb-10 pt-8 space-y-4 leading-relaxed text-sm" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", color: "var(--gray-700)" }}>
        <h2
          className="font-semibold mb-2"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          네 갈래 막다른 길 위의 Stephenson
        </h2>
        <p>
          1930년대 사회과학은 과학성을 얻기 위해 변수, 평균, 상관, 조작적 정의에 의존했지만, 그 과정에서 사람의 관점과 주관성은 분석 단위에서 밀려났다. 사람은 점수를 제공하는 표본이 되었고, 변수는 분석의 주인공이 되었다. 평균은 누구의 것도 아닌 통계적 얼굴을 만들었고, 변수 간 상관은 사람이 자기 세계를 어떻게 의미 있게 배열하는지 보여주지 못했다. 행동주의와 조작주의는 심리학을 자연과학으로 만들려 했지만, 그 과정에서 의식, 내성, 주관성은 과학 밖의 것으로 취급되기 쉬웠다.
        </p>
        <p>
          Stephenson은 이 흐름을 바깥에서 낭만적으로 비판한 사람이 아니었다. 그는 물리학과 심리학을 모두 훈련받았고, Spearman의 요인분석 전통 안에서 성장한 연구자였다. Good(2010)은 그를 단순한 통계기법 발명가가 아니라 &ldquo;주관성의 과학(<em>science of subjectivity</em>)&rdquo;을 추구한 인물로 읽는다. Brown(1980)도 Q방법론을 단순한 R방법론의 전치가 아니라, 한 사람의 관점이 Q-sort라는 행위 속에서 조작적으로 표현되는 방법론으로 정리한다. 따라서 Stephenson의 문제의식은 &ldquo;통계를 버리자&rdquo;가 아니라 &ldquo;통계가 다루지 못한 주관성을 어떻게 통계와 실험의 언어 안으로 가져올 것인가&rdquo;에 가까웠다.
        </p>
        <p>
          이 강의는 Stephenson(1935a, 1935b, 1936, 1953)을 하나의 발전선으로 읽는다. 1935년 <em>Nature</em> 서신은 짧은 제안이었다. 요인분석은 뒤집힐 수 있다. 같은 해 사람 간 상관 논문은 그 제안을 색상 선호도 실험으로 보여주었다. 1936년 논문은 역전된 요인 기법(<em>inverted factor technique</em>)을 수학적·절차적으로 정식화했다. Burt & Stephenson(1939)은 이 발상이 단순한 행렬 전치인지, 아니면 독립적 방법론인지가 이미 당시에도 쟁점이었음을 보여준다. 1953년 단행본 <em>The Study of Behavior</em>는 이 기법을 Q방법론이라는 독자적 방법론으로 확장했다.
        </p>
        <p>
          여기서 중요한 조심점이 있다. 1935년에 Q방법론이 완성되었다고 말하면 안 된다. 1935년은 출발점이다. 1936년은 절차화 단계이고, 1939년은 해석상의 갈림길이며, 1953년은 방법론적 체계화의 지점이다. 또한 Stevens(1935)의 조작적 정의(<em>operational definition</em>)와 Brown(1980)이 정리한 조작적 주관성(<em>operant subjectivity</em>)을 같은 것으로 취급해서도 안 된다. Stevens에게 조작은 심리학 개념을 공개적이고 반복 가능한 변별 반응으로 묶어 모호성을 줄이는 길이었다. Stephenson과 Brown에게 중요한 것은 개인의 관점이 Q-sort라는 자기지시적 행위 속에서 스스로 드러나는 방식이었다.
        </p>
        <p>
          2-2강의 핵심 문장은 이렇게 정리할 수 있다. Stephenson의 문제의식은 주관성을 과학 밖으로 밀어낸 1930년대 심리학에 대한 낭만적 반발이 아니었다. 그는 오히려 요인분석과 조작의 언어를 사용하여, 주관성이 드러나는 행위 자체를 과학적 자료로 만들려 했다. 그래서 Q방법론의 출발점은 &ldquo;통계를 버리자&rdquo;가 아니라 &ldquo;무엇을 상관시킬 것인가를 바꾸자&rdquo;였다.
        </p>
      </section>

      {/* 카드 5개 */}
      <div className="space-y-8 mb-10">

        <LessonCard
          title="카드 1. Stephenson은 반통계주의자가 아니었다"
          keyMessage="Stephenson의 출발점은 통계의 거부가 아니라, 통계가 놓친 주관성의 자리를 다시 여는 것이었다."
          description="Stephenson은 요인분석의 내부자였다. 그의 문제의식은 계량화 자체를 부정하는 것이 아니라, 계량화의 단위가 변수에만 묶일 때 사람의 관점이 사라진다는 데 있었다."
          points={[
            "Stephenson은 요인분석의 바깥 사람이 아니라 내부자였다.",
            "문제는 통계가 아니라 분석 단위였다.",
            "Q방법론은 주관성이 드러나는 행위를 관찰 가능한 자료로 만들려 했다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-2-card-01-not-anti-statistics.webp"
          imageAlt="칠판 한쪽에는 변수 간 상관행렬이, 다른 한쪽에는 사람들의 Q-sort 배열이 그려지고 Stephenson이 두 장면 사이에서 분석 단위를 바꾸는 모습"
        >
          <p>
            Q방법론을 처음 설명할 때 자주 생기는 오해가 있다. &ldquo;아, Q방법론은 양적 통계에 반대해서 나온 방법이군요.&rdquo; 그러나 Stephenson의 출발점은 그렇게 단순하지 않다. 그는 통계를 버린 사람이 아니라, 요인분석의 가능성을 더 끝까지 밀고 간 사람이었다. 1935년 <em>Nature</em> 서신의 제목도 <em>Technique of Factor Analysis</em>다. &ldquo;Q방법론&rdquo;이라는 이름이 먼저 나온 것이 아니라, 요인분석 기법을 어떻게 뒤집을 수 있는지가 먼저 제기되었다.
          </p>
          <p>
            2-1강에서 보았듯이 1930년대 심리학은 Spearman과 Thurstone을 거치며 변수 간 상관과 요인분석을 중심 언어로 삼아가고 있었다. 일반적인 R방법론(<em>R methodology</em>)에서는 여러 사람에게 여러 검사를 실시하고, 그 검사들 사이의 상관을 분석한다. 이때 사람은 변수 점수의 출처일 뿐이다. 분석의 주인공은 지능, 태도, 성격 특성 같은 변수다. 사람은 변수들이 서로 어떻게 관계 맺는지를 보여주는 배경으로 물러난다.
          </p>
          <p>
            Stephenson이 본 문제는 바로 이 지점이었다. 만약 연구자가 알고 싶은 것이 &ldquo;변수들이 어떻게 묶이는가&rdquo;라면 R방법론은 강력하다. 그러나 연구자가 알고 싶은 것이 &ldquo;사람들이 어떤 관점을 공유하는가&rdquo;라면 분석 단위가 달라져야 한다. 같은 진술문에 같은 점수를 준 두 사람이 같은 이유로 그렇게 답했는지, 어떤 항목을 더 중요하게 놓고 어떤 항목을 뒤로 밀었는지, 그 배열 전체가 어떤 관점 구조를 이루는지는 R방법론의 표준 행렬에서 잘 보이지 않는다.
          </p>
          <p>
            Good(2010)은 Stephenson의 작업을 &ldquo;주관성의 과학&rdquo;을 향한 탐색으로 읽는다. 이 표현은 중요하다. Stephenson은 주관성을 과학 밖으로 빼내자는 사람이 아니었다. 반대로 그는 주관성이 과학의 대상이 될 수 있다고 보았다. 다만 그 과학은 주관성을 외부 연구자의 척도에 강제로 맞추는 방식이 아니라, 사람이 스스로 의미 있게 배열한 결과를 비교하는 방식이어야 했다.
          </p>
          <p>
            Burt & Stephenson(1939)은 이 차이가 당시에도 작지 않았음을 잘 보여준다. Burt는 사람 간 상관을 데이터 행렬을 뒤집어 분석하는 실용적 대안으로 이해했다. 수학적으로는 행과 열을 바꾸는 문제처럼 보였기 때문이다. 그러나 Stephenson은 그렇게 보지 않았다. 그에게 Q기법은 기존 r기법의 편의적 변형이 아니라, 다른 목적과 다른 심리학적 가설을 가진 독립적 방법론이었다. 사람 간 상관은 단순한 계산 기법이 아니라, 사람의 전체 배열을 비교 대상으로 삼는 관점 전환이었다.
          </p>
          <p>
            따라서 학생들이 여기서 가져가야 할 메시지는 분명하다. Q방법론은 &ldquo;통계냐, 비통계냐&rdquo;의 문제가 아니다. Q방법론은 &ldquo;무엇을 통계적으로 비교할 것인가&rdquo;의 문제다. R방법론이 변수의 세계를 상관시켰다면, Stephenson은 사람의 관점 배열을 상관시키려 했다. 이 작은 방향 전환이 이후 Q방법론 전체의 문을 연다.
          </p>
        </LessonCard>

        <LessonCard
          title={<>카드 2. 1935년 <em>Nature</em> 서신 — 검사 대신 사람을 상관시키다</>}
          keyMessage="1935년 Stephenson은 요인분석을 '검사 간 상관'에서 '사람 간 상관'으로 뒤집을 수 있다고 제안했다."
          description={<><em>Nature</em> 서신은 매우 짧지만 결정적이다. Stephenson(1935b)은 여러 사람이 여러 검사나 항목을 평가하게 한 뒤, 항목이 아니라 사람 사이의 상관을 구하면 실험 미학이나 교육 심리학처럼 기존에 요인화하기 어려웠던 영역도 실험실 안으로 가져올 수 있다고 보았다.</>}
          points={[
            "기존 요인분석은 여러 사람에게서 얻은 검사 간 상관을 분석했다.",
            "Stephenson은 동일한 자료 구조를 뒤집어 사람 간 상관을 분석하자고 제안했다.",
            "1935년은 Q방법론의 완성이 아니라, 사람 간 상관이라는 가능성을 연 출발점이다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-2-card-02-nature-letter.webp"
          imageAlt="짧은 학술지 서신 한 문장이 확대되고, 변수 행렬이 회전하듯 사람 간 상관행렬로 바뀌는 장면"
        >
          <p>
            1935년 8월 24일 <em>Nature</em>에는 세 편의 짧은 서신이 함께 실렸다. 그중 Stephenson의 짧은 글이 훗날 Q방법론의 출발점으로 기억된다. 이 글에서 Stephenson(1935b)은 기존 요인분석의 방향을 간단히 정리한 뒤, 그 방향을 뒤집을 수 있다고 제안했다. 일반적인 요인분석은 여러 개인에게서 측정한 여러 검사의 상관을 구한다. Stephenson은 반대로 여러 검사 대상이나 항목을 여러 사람이 평가하게 한 뒤, 그 사람들 사이의 상관을 구할 수 있다고 보았다.
          </p>
          <p>
            형식만 보면 간단하다. <em>n</em>개의 대상이나 항목을 <em>m</em>명의 개인이 평가한다. 그러면 기존 방식에서는 항목이나 검사가 분석 단위가 되지만, Stephenson의 제안에서는 <em>m</em>명의 개인 사이에서 <em>m(m-1)/2</em>개의 상관계수를 구한다. 그 상관행렬을 요인분석하면, 변수의 묶음이 아니라 사람들의 관점 묶음이 나타날 수 있다.
          </p>
          <p>
            이 짧은 제안의 의미는 두 가지다. 첫째, 사람을 분석 단위로 되돌린다. 사람은 더 이상 변수 점수를 제공하는 배경이 아니라, 서로 비교되는 배열의 주체가 된다. 둘째, 실험실에서 다루기 어렵다고 여겨졌던 영역을 다시 실험 가능한 대상으로 만든다. Stephenson은 실험 미학이나 교육 심리학처럼 취향, 판단, 관점이 중요한 영역도 사람 간 상관을 통해 요인화할 수 있다고 보았다.
          </p>
          <p>
            같은 해 Stephenson(1935a)은 이 제안을 <em>Correlating Persons Instead of Tests</em>에서 실제 실험으로 보여주었다. 실험 재료는 화방에서 구한 60개의 단색 색상지였다. 20명의 참여자, 곧 젊은 여성 12명과 남성 8명이 가장 좋아하는 색에서 가장 싫어하는 색까지 11점 척도로 색상지를 배열했다. 이때 오늘날 Q-sort의 원형이라고 할 수 있는 사전 배열된 빈도분포가 사용되었다. 참여자는 마음대로 모든 색에 높은 점수를 줄 수 없고, 각 점수대에 들어갈 색상 수가 미리 정해진 분포에 맞춰 색상지를 배치해야 했다.
          </p>
          <p>
            결과는 두 개의 뚜렷한 유형으로 나타났다. 한 요인은 은은한 색조와 차분한 색상을 선호한 12명의 집단이었고, 다른 요인은 밝고 순수한 원색을 선호한 8명의 집단이었다. 중요한 것은 &ldquo;평균적으로 어떤 색이 가장 선호되었는가&rdquo;가 아니었다. Stephenson이 보여준 것은 사람들이 색상들을 상대적으로 배열하는 방식 전체가 서로 닮거나 다를 수 있고, 그 닮음과 차이를 사람 간 상관으로 분석할 수 있다는 점이었다.
          </p>
          <p>
            하지만 이 실험을 Q방법론의 완성으로 부르면 안 된다. 이 시점의 언어는 아직 &ldquo;Q방법론&rdquo;이 아니라 &ldquo;새로운 기법&rdquo; 또는 &ldquo;요인기법의 역전&rdquo;에 가깝다. 해석도 오늘날의 기준에서 보면 아직 거칠다. Stephenson은 두 유형을 &ldquo;고상한 취향&rdquo;과 &ldquo;투박한 취향&rdquo;으로 해석할 때 참여자에 대한 개인적 지식에도 의존했다. 그래서 1935년은 완성점이 아니라 출발점이다. 그러나 바로 그 출발점에서 Q방법론의 가장 중요한 질문, 곧 &ldquo;사람의 관점 배열을 직접 비교할 수 있는가&rdquo;가 처음 분명해졌다.
          </p>
        </LessonCard>

        <LessonCard
          title={<>카드 3. 1936년 <em>Inverted Factor Technique</em> — 발상이 절차가 되다</>}
          keyMessage="1936년 논문에서 Stephenson은 사람 간 상관을 실제 실험 절차와 해석 규칙으로 정식화했다."
          description="Stephenson(1936)은 도자기, 냄새, 기분 평가 실험을 통해 Q기법의 원형을 제시했다. 사람들은 항목을 사전 배열된 빈도분포에 맞춰 분류했고, 연구자는 사람 간 상관과 요인분석을 통해 취향과 기분의 유형을 도출했다."
          points={[
            "Q기법은 항목 모집단을 두고 사람이 그것을 배열하는 방식으로 작동한다.",
            "요인 포화도는 능력의 우수성이 아니라 관점 유형의 전형성을 뜻한다.",
            "Burt & Stephenson(1939)의 논쟁은 Q가 단순 행렬 전치인지 독립 방법론인지의 갈림길을 보여준다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-2-card-03-inverted-factor-technique.webp"
          imageAlt="도자기 사진, 냄새 병, 기분 카드가 각각 작은 Q-sort 분포표 위에 배열되고, 그 결과가 사람 간 상관 네트워크로 이어지는 장면"
        >
          <p>
            1936년 <em>British Journal of Psychology</em>에 발표된 <em>The Inverted Factor Technique</em>은 1935년의 발상이 실제 절차가 되는 순간이다. Stephenson(1936)은 여기서 r기법과 Q기법을 명확히 대비한다. r기법은 &ldquo;사람들의 집단&rdquo;을 모집단으로 두고 검사 간 상관을 구한다. Q기법은 &ldquo;검사나 항목들의 집단&rdquo;을 모집단으로 두고 사람 간 상관을 구한다. 단순한 표현이지만, 이 문장 안에 Q방법론의 기본 데이터 구조가 들어 있다.
          </p>
          <p>
            1936년 논문에서 특히 중요한 것은 강제분류 절차다. 참여자는 도자기, 냄새, 기분 묘사 항목 같은 이질적인 대상을 특정 기준에 따라 평가하되, 연구자가 미리 지정한 빈도분포에 맞춰 점수를 할당한다. 오늘날의 Q-sort처럼, 참여자는 모든 항목을 각각 독립적으로 평가하는 것이 아니라, 항목들 사이의 상대적 중요도와 의미를 한 번에 배열한다. 이것이 단순 설문 응답과 Q-sort의 차이다.
          </p>
          <p>
            Stephenson은 이 절차를 여러 실험으로 보여주었다. 첫째, 15명의 성인이 대영박물관 도자기 엽서 50장을 미적 선호도에 따라 분류했다. 분석 결과 단순한 형태를 선호하는 집단과 화려하고 사실적인 장식을 선호하는 집단이 구분되었다. 둘째, 14명의 참여자가 31종의 냄새를 쾌·불쾌 기준에 따라 분류했다. 대체로 보편적인 쾌·불쾌 순서를 따르는 일반 유형이 나타났지만, 타르나 수지 냄새에 특이하게 반응하는 유형도 분리되었다. 셋째, 18명의 참여자가 30개의 기분 묘사 항목을 자기 자신에게 잘 맞는 순서로 배열했다. 여기서도 순진한 일반 유형과 크레치머의 순환기질·분열기질에 대응하는 유형이 도출되었다.
          </p>
          <p>
            이 논문에서 학생들이 꼭 기억해야 할 해석 규칙이 있다. Q기법에서 요인 포화도(<em>factor saturation</em>)가 높다는 것은 그 사람이 더 뛰어난 능력을 가졌다는 뜻이 아니다. r기법에서 높은 점수나 높은 적재가 능력의 우수성과 연결될 수 있다면, Q기법에서 높은 요인 포화도는 그 사람이 해당 관점 유형을 가장 전형적으로 보여준다는 뜻이다. 요인은 사람의 우열을 매기는 척도가 아니라, 특정 관점 배열의 전형성을 나타낸다.
          </p>
          <p>
            이 지점에서 Burt & Stephenson(1939)을 함께 읽어야 한다. 두 사람은 사람 간 상관이 유효한 통계 기법이라는 점, 사람에 대한 일반 요인은 검사를 상관시켜서 얻을 수 없다는 점, 사람을 상관시킬 때 군집 요인이 발견된다는 점에는 동의했다. 그러나 해석은 갈렸다. Burt는 사람 간 상관을 수학적으로 가능한 실용적 대안, 곧 행렬을 뒤집는 편의적 절차로 보았다. Stephenson은 이를 개인차를 다루는 기존 r기법과 구별되는 독립적 방법론으로 보았다.
          </p>
          <p>
            이 논쟁은 오늘날에도 중요하다. Q방법론을 &ldquo;R방법론의 행과 열을 바꾼 것&rdquo;이라고만 설명하면 Burt의 설명에 머문다. 물론 행렬 전치는 역사적 출발점을 이해하는 데 도움이 된다. 그러나 Stephenson에게 더 중요한 것은 행렬이 아니라 연구 대상의 변화였다. Q기법은 변수의 공통 구조가 아니라 사람의 전체 관점 구조를 요인화한다. 그래서 1936년 논문은 단순히 수학 절차를 제시한 논문이 아니라, 주관적 취향과 기분을 실험 가능한 자료로 만드는 방법론적 실험이었다.
          </p>
        </LessonCard>

        <LessonCard
          title={<>카드 4. 1953년 <em>The Study of Behavior</em> — 주관성을 구체적 행동으로 다루다</>}
          keyMessage="1953년 Stephenson은 Q기법을 단순한 역전 기법이 아니라, 주관적 행동을 연구하는 독자적 방법론으로 확장했다."
          description={<><em>The Study of Behavior</em>에서 Stephenson(1953)은 주관성을 내면의 신비로운 상태가 아니라, Q-sort처럼 관찰 가능한 구체적 행동으로 보았다. 사람은 진술문을 배열하면서 자신의 관점을 외부로 드러내고, 연구자는 그 배열을 상관과 요인분석으로 비교한다.</>}
          points={[
            "주관성은 사라져야 할 잡음이 아니라 연구 대상이다.",
            "Q-sort는 주관성이 조작적으로 드러나는 구체적 행동이다.",
            "operant subjectivity는 operational definition과 같지 않다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-2-card-04-study-of-behavior.webp"
          imageAlt="한 사람이 진술문 카드를 분포표 위에 배열하고, 그 배열이 생각 풍선이 아니라 관찰 가능한 데이터 행렬로 변환되는 장면"
        >
          <p>
            1953년 <em>The Study of Behavior</em>에서 Stephenson의 발상은 독자적 방법론으로 체계화된다. 이 책의 핵심은 단순히 사람 간 상관을 계산하는 법이 아니다. 더 큰 질문은 &ldquo;주관적 행동(<em>subjective behavior</em>)을 과학적으로 연구할 수 있는가&rdquo;이다. Stephenson의 답은 그렇다였다. 단, 주관성을 마음속 깊은 곳에 숨겨진 실체로 가정해서가 아니라, 사람이 실제로 어떤 항목들을 선택하고 배열하는 구체적 행동 속에서 주관성이 드러난다고 보았기 때문이다.
          </p>
          <p>
            2-1강에서 보았듯이 Watson(1913)은 심리학이 의식과 내성에 매달리는 한 객관적 자연과학이 될 수 없다고 보았다. 그의 행동주의는 심리학의 목표를 행동의 예측과 통제로 재정의했다. Stevens(1935)는 심리학의 개념들이 공개적이고 반복 가능한 조작으로 정의되어야 한다고 주장했다. Skinner(1938)는 정신주의적 허구나 내면적 원인을 배제하고, 조작과 반응률 사이의 함수 관계만으로 행동 과학을 세우려 했다. 이 흐름은 심리학을 자연과학으로 만들려는 강력한 시도였지만, 동시에 주관성, 관점, 의미를 과학 밖으로 밀어낼 위험을 갖고 있었다.
          </p>
          <p>
            Stephenson은 이 흐름을 단순히 거부하지 않았다. 오히려 그는 &ldquo;조작&rdquo;과 &ldquo;행동&rdquo;의 언어를 사용해 주관성을 다시 과학 안으로 가져오려 했다. Q-sort는 바로 그 장치다. 참여자는 진술문을 읽고, 서로 비교하고, 자신의 관점에 따라 강제분포 위에 배열한다. 이 배열은 내면에 숨어 있는 감정을 연구자가 추측한 것이 아니다. 참여자가 실제로 수행한 관찰 가능한 행위다. 동시에 그 배열은 참여자의 관점이 외부로 드러난 결과다. Stephenson에게 주관성은 신비로운 잔여가 아니라 구체적 행동이었다.
          </p>
          <p>
            여기서 Stevens식 조작적 정의와 Brown식 조작적 주관성을 구분해야 한다. Stevens(1935)의 조작주의는 경험이나 감각 같은 개념을 공개적이고 반복 가능한 변별 반응으로 재정의함으로써 과학적 동의를 확보하려 했다. Hardcastle(1995)은 Stevens의 조작주의를 과학 공동체의 동의를 만들기 위한 자연주의적 방법론으로 재구성했고, Verhaegh(2021)는 하버드의 Skinner, Boring, Stevens가 조작주의를 각자 다른 방식으로 변형했음을 보여준다. 즉 조작주의는 1930년대 심리학의 과학화 전략이었다.
          </p>
          <p>
            반면 Brown(1980)의 조작적 주관성(<em>operant subjectivity</em>)은 개념을 외부 절차로 환원하는 것이 아니다. Brown에게 주관성은 &ldquo;그 사람 자신의 관점&rdquo;이며, Q기법은 그 관점이 Q-sort라는 행위 속에서 스스로 표현되도록 한다. 이때 연구자는 참여자의 관점을 미리 정해진 정답과 오답의 틀에 끼워 넣지 않는다. 참여자가 항목들을 어떻게 상대적으로 배열하는지 관찰하고, 그 배열들 사이의 유사성과 차이를 요인분석으로 드러낸다.
          </p>
          <p>
            Good(2010)의 &ldquo;주관성의 과학&rdquo;이라는 표현은 이 지점을 잘 붙잡는다. Stephenson은 행동주의가 배제한 내면을 단순히 복원하려 하지 않았다. 그는 주관성을 과학이 다룰 수 있는 방식으로 다시 형식화하려 했다. Watts & Stenner(2012)가 설명하듯, Q방법론의 데이터는 단순히 설문 응답을 전치한 것이 아니다. 모든 진술문을 개인의 심리적 기준에 따라 상대 평가하는 Q-sort라는 독특한 자료 수집 과정이 필요하다. 바로 그 과정에서 주관성은 관찰 가능한 배열이 된다.
          </p>
          <p>
            따라서 1953년의 의미는 분명하다. 1935년에는 사람 간 상관이라는 발상이 있었다. 1936년에는 그 발상이 절차가 되었다. 1953년에는 그 절차가 &ldquo;주관적 행동을 연구하는 방법론&rdquo;으로 확장되었다. Q방법론은 주관성을 과학 밖에 두지 않는다. 주관성을 외부 척도에 억지로 환원하지도 않는다. Q방법론은 사람이 자기 세계를 어떻게 배열하는지를 보게 만든다.
          </p>
        </LessonCard>

        <LessonCard
          title="카드 5. 단일 사례와 구조화된 표본 — 평균 밖의 과학"
          keyMessage="Stephenson에게 과학성은 큰 표본의 평균만이 아니라, 잘 구조화된 조건 아래에서 드러나는 단일 사례의 의미 있는 패턴에서도 나올 수 있었다."
          description="Stephenson(1953)은 큰 표본의 평균으로 모집단 비율을 추정하는 대신, 연구문제에 맞게 구조화된 Q표본과 Q-sort 조건 속에서 주관성의 패턴을 분석했다. 이는 2-1강에서 다룬 평균의 막다른 길에 대한 또 다른 응답이다."
          points={[
            "Q방법론은 모집단 비율 추정이 아니라 관점 구조의 발견과 해석을 목표로 한다.",
            "Q표본은 연구문제와 이론을 반영해 구조화될 수 있다.",
            "단일 사례도 적절히 설계된 조건 안에서는 이론적으로 의미 있는 자료가 될 수 있다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-2-card-05-single-case-structured-sample.webp"
          imageAlt="거대한 평균 그래프 옆에 작지만 정교하게 배열된 Q-sort 보드가 놓이고, 보드 위에서 뚜렷한 관점 유형들이 빛나는 장면"
        >
          <p>
            Q방법론을 배우는 학생들이 가장 자주 묻는 질문 중 하나는 &ldquo;참여자 수가 그렇게 적어도 되나요?&rdquo;이다. 이 질문에는 현대 사회과학의 강한 습관이 들어 있다. 과학성은 큰 표본, 평균, 대표성, 추정의 정확도에서 나온다는 습관이다. Stephenson은 이 습관을 정면으로 거부했다기보다, 다른 종류의 과학성이 가능하다고 보았다.
          </p>
          <p>
            Stephenson(1953)은 이 책의 목표를 단일 사례(<em>single case</em>)와 주관적 행동을 과학적으로 연구하는 대안적 방법론의 확립으로 정리한다. Q방법론은 특정 속성이 모집단 안에 얼마나 분포하는지 추정하는 데 적합하지 않다. 이것은 약점이라기보다 목적의 차이다. Q방법론이 묻는 질문은 &ldquo;이 관점이 전체 인구의 몇 퍼센트인가&rdquo;가 아니라 &ldquo;이 주제에 대해 어떤 관점 구조들이 존재하며, 그것들이 어떻게 의미 있게 구분되는가&rdquo;이다.
          </p>
          <p>
            이때 중요한 것이 구조화된 표본(<em>structured sample</em>)이다. Stephenson(1953)은 Q표본을 아무 진술문이나 모아 만든 목록으로 보지 않았다. 연구문제와 이론이 있다면, Q표본은 그 이론적 범주를 균형 있게 반영하도록 구성될 수 있다. Stephenson은 Fisher의 균형블록설계(<em>balanced block design</em>) 원리를 차용해 Q모집단의 진술문들을 논리적 독립변수 또는 효과로 세분화하고 표본을 구성한다. 다만 여기서 조심해야 한다. Fisher(1971)의 실험설계와 Stephenson의 Q방법론이 완전히 같은 것은 아니다. 더 안전한 표현은 이렇다. Q방법론은 큰 표본 평균에 의존하기보다, 연구문제에 맞게 구성된 Q표본과 정렬 조건 속에서 드러나는 주관성의 패턴을 분석하며, 이 점에서 Fisher식 실험설계가 강조한 조건의 구조화와 친화적인 방법론적 감각을 공유한다.
          </p>
          <p>
            이 논리는 단일 사례 연구에도 연결된다. Stephenson은 단일 사례가 과학 밖의 일화라고 보지 않았다. Good(2010)은 Stephenson이 대규모 표본을 통한 일반화만큼이나, 단일 사례에 대한 집중적이고 실험적으로 통제된 접근과 귀추법(<em>abduction</em>)을 엄밀한 과학의 기초로 보았다고 정리한다. Q방법론에서 한 사람의 Q-sort는 단순한 의견 한 줄이 아니다. 그것은 여러 진술문 사이의 관계를 한 사람이 어떻게 조직했는지 보여주는 전체 배열이다.
          </p>
          <p>
            이 점은 후대 문헌에서 더 넓게 해석된다. Brown(1993)은 Q방법론의 절차를 대학원생이 따라갈 수 있는 입문 문헌으로 정리했고, Brown(1996)은 Q방법론이 질적 연구와 양적 연구의 강점을 함께 지닌다고 설명했다. 그러나 2-2강에서는 &ldquo;혼합방법&rdquo;이라는 말이 너무 앞서가면 곤란하다. 핵심은 질적 연구와 양적 연구의 절충이 아니라, 주관성이 드러나는 배열 행위를 수학적으로 다룰 수 있게 만드는 데 있다.
          </p>
          <p>
            Stenner & Rogers(2004)와 Stenner(2011)의 양질 혼합(<em>qualiquantology</em>) 논의는 이 지점을 더 철학적으로 밀고 간다. 이들은 Q방법론을 단순한 질적·양적 결합이 아니라, 주관과 객관의 낡은 이분법을 흔드는 방법론으로 본다. Stenner(2011)는 Q방법론이 질적 변동을 통제하거나 제거하지 않고, 오히려 그것을 수학적으로 다룰 수 있게 만든다고 말한다. Ramlo & Newman(2011)은 Q방법론을 혼합방법의 연속선 안에 위치시키고, Stenner(2011)는 그 설명이 Q방법론의 존재론적 깊이를 충분히 담지 못한다고 비판한다. 최근 Ramlo(2025)의 논의도 같은 맥락에서 Q방법론을 절차 묶음이 아니라 철학적 깊이를 가진 방법론으로 읽도록 돕는다.
          </p>
          <p>
            실무적으로는 McKeown & Thomas(2013), Watts & Stenner(2012), Brown(1993)이 이후 절차 강의에서 더 중요해진다. 하지만 이 강의의 메시지는 절차보다 먼저 온다. Q방법론은 큰 표본의 평균으로 사람을 평탄화하지 않는다. 대신 연구문제에 맞게 구성된 항목들을 참여자가 자기 관점에 따라 배열하게 하고, 그 배열 사이의 관계를 통해 관점 구조를 발견한다. 이것이 Stephenson이 평균 밖에서 찾은 과학성이다.
          </p>
        </LessonCard>

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
          className="font-semibold mb-4"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          Stephenson의 새 출발점
        </h2>
        <ul className="space-y-3 pl-4 list-disc text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
          <li>
            <strong>통계의 거부가 아니라 분석 단위의 전환</strong> — Stephenson은 요인분석을 버린 것이 아니라, 검사 간 상관에서 사람 간 상관으로 분석 단위를 바꾸었다.
          </li>
          <li>
            <strong>1935년은 완성이 아니라 출발점</strong> — <em>Nature</em> 서신과 색상 선호도 실험은 사람 간 상관의 가능성을 열었지만, Q방법론의 전체 철학과 절차는 1936년과 1953년을 거치며 정교화되었다.
          </li>
          <li>
            <strong>단순 행렬 전치를 넘어선 독립 방법론</strong> — Burt & Stephenson(1939)의 논쟁이 보여주듯, Q는 수학적 편의가 아니라 사람의 전체 관점 배열을 비교하는 다른 방법론적 목적을 가진다.
          </li>
          <li>
            <strong>주관성을 구체적 행동으로 보기</strong> — Q-sort는 참여자가 진술문을 선택하고 배열하는 관찰 가능한 행위이며, 그 행위 속에서 주관성이 조작적으로 드러난다.
          </li>
          <li>
            <strong>평균 밖의 과학</strong> — Q방법론은 모집단 비율 추정보다, 구조화된 조건 아래에서 드러나는 관점 구조와 전형적 유형의 발견을 목표로 한다.
          </li>
        </ul>
      </section>

      {/* 핵심 정리 표 */}
      <section className="mb-10 overflow-x-auto">
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "20px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          핵심 정리
        </h2>
        <table
          className="w-full text-sm"
          style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)", minWidth: "140px" }}>발전 단계</th>
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)", minWidth: "220px" }}>핵심 문헌</th>
              <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>강의에서의 의미</th>
            </tr>
          </thead>
          <tbody>
            {summaryTable.map((row, i) => (
              <tr
                key={row.stage}
                style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
              >
                <td className="py-3 pr-4 font-medium" style={{ color: "var(--brand-deep)" }}>{row.stage}</td>
                <td className="py-3 pr-4 leading-relaxed text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-500)" }}>{row.sources}</td>
                <td className="py-3 leading-relaxed">{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 요약 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          요약
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
          Stephenson의 문제의식은 &ldquo;주관성을 과학 밖에 둘 것인가, 과학 안에서 새롭게 다룰 것인가&rdquo;였다. 그는 통계를 버리지 않았다. 요인분석을 뒤집었다. 1935년 <em>Nature</em> 서신에서 사람 간 상관의 가능성을 제안했고, 같은 해 색상 선호도 실험에서 그 가능성을 보여주었다. 1936년에는 역전된 요인 기법을 절차화했고, 1939년에는 Burt와의 논쟁 속에서 Q가 단순한 행렬 전치가 아니라 독자적 방법론임을 주장했다. 1953년 <em>The Study of Behavior</em>에서는 주관성을 Q-sort라는 구체적 행동 속에서 연구하는 체계를 세웠다. 그래서 Q방법론의 핵심은 &ldquo;주관성을 측정할 수 없는 것으로 포기하지 않고, 주관성이 드러나는 배열 행위를 과학적 자료로 만드는 것&rdquo;이다.
        </p>
      </section>

      {/* 참고문헌 */}
      <section className="mb-10">
        <h2
          className="font-medium mb-4"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          참고문헌
        </h2>
        <ul className="space-y-2">
          {references.map((ref) => (
            <li key={ref.key} className="text-xs leading-relaxed" style={{ color: "var(--gray-500)" }}>
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
          href="/lessons/2-1"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 2-1. 기존 사회과학 방법론의 한계
        </Link>
        <Link
          href="/lessons/2-3"
          className="text-sm text-right"
          style={{ color: "var(--brand-deep)" }}
        >
          2-3. 주관성의 과학적 탐구 →
        </Link>
      </div>
    </div>
  );
}
