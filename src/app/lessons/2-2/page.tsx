import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "2-2. Stephenson의 문제의식 | Q방법론 온라인 강의",
  description:
    "1930년대 사회과학의 네 갈래 막다른 길 위에서, Stephenson이 주관성을 어떻게 과학의 대상으로 삼았는지를 따라간다.",
};

const references = [
  { key: "Brown1980", text: (<>Brown, S. R. (1980). <em>Political subjectivity</em>. New Haven: Yale University.</>) },
  { key: "Brown1993", text: (<>Brown, S. R. (1993). A primer on Q methodology. <em>Operant Subjectivity, 16</em>(3/4).</>), doi: "https://doi.org/10.22488/okstate.93.100504" },
  { key: "BurtStephenson1939", text: (<>Burt, C., &amp; Stephenson, W. (1939). Alternative views on correlations between persons. <em>Psychometrika, 4</em>(4), 269–281.</>), doi: "https://doi.org/10.1007/BF02287939" },
  { key: "Good2010", text: (<>Good, J. M. M. (2010). Introduction to William Stephenson&rsquo;s quest for a science of subjectivity. <em>Psychoanalysis and History, 12</em>(2), 211–243.</>), doi: "https://doi.org/10.3366/pah.2010.0006" },
  { key: "Hardcastle1995", text: (<>Hardcastle, G. L. (1995). S. S. Stevens and the origins of operationism. <em>Philosophy of Science, 62</em>(3), 404–424.</>), doi: "https://doi.org/10.1086/289875" },
  { key: "Skinner1938", text: (<>Skinner, B. F. (1938). <em>The behavior of organisms</em>. Appleton-Century.</>) },
  { key: "Stenner2011", text: (<>Stenner, P. (2011). Q methodology as qualiquantology. <em>Operant Subjectivity, 34</em>(3), 192–203.</>), doi: "https://doi.org/10.22488/okstate.11.100593" },
  { key: "Stephenson1935a", text: (<>Stephenson, W. (1935a). Correlating persons instead of tests. <em>Journal of Personality, 4</em>(1), 17–24.</>), doi: "https://doi.org/10.1111/j.1467-6494.1935.tb02022.x" },
  { key: "Stephenson1935b", text: (<>Stephenson, W. (1935b). Technique of factor analysis. <em>Nature, 136</em>(3434), 297.</>), doi: "https://doi.org/10.1038/136297b0" },
  { key: "Stephenson1936", text: (<>Stephenson, W. (1936). The inverted factor technique. <em>British Journal of Psychology, 26</em>(4), 344–361.</>), doi: "https://doi.org/10.1111/j.2044-8295.1936.tb00803.x" },
  { key: "Stephenson1953", text: (<>Stephenson, W. (1953). <em>The study of behavior; Q-technique and its methodology</em>. University of Chicago Press.</>) },
  { key: "Stevens1935", text: (<>Stevens, S. S. (1935). The operational definition of psychological concepts. <em>Psychological Review, 42</em>(6), 517–527.</>), doi: "https://doi.org/10.1037/h0056973" },
  { key: "Watson1913", text: (<>Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review, 20</em>(2), 158–177.</>), doi: "https://doi.org/10.1037/h0074428" },
  { key: "Watts2012", text: (<>Watts, S., &amp; Stenner, P. (2012). <em>Doing Q methodological research</em>. SAGE.</>), doi: "https://doi.org/10.4135/9781446251911" },
];

const summaryTable = [
  { stage: "1935년 Nature 서신", year: "1935b", meaning: "검사 간 상관에서 사람 간 상관으로 — 분석 단위의 전환을 처음 제안" },
  { stage: "1935년 색상 실험", year: "1935a", meaning: "Q-sort의 원형 — 강제분포 분류로 두 관점 유형을 분리" },
  { stage: "1936년 Inverted Factor", year: "1936", meaning: "사람 간 상관과 요인 포화도의 전형성 해석을 정식화" },
  { stage: "1939년 Burt 논쟁", year: "1939", meaning: "단순 행렬 전치인가, 독립 방법론인가 — 갈림길이 드러남" },
  { stage: "1953년 Study of Behavior", year: "1953", meaning: "주관성을 Q-sort라는 구체적 행동으로 다루는 방법론으로 체계화" },
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
  keyMessage: string;
  points: string[];
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
        <Image src={imageSrc} alt={imageAlt} width={960} height={540} className="w-full h-auto block" />
      </div>
      <ul className="mb-8 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3" style={{ color: "var(--gray-700)" }}>
            <span
              className="shrink-0 font-semibold mt-0.5"
              style={{ fontSize: "13px", color: "var(--brand)", fontFamily: "var(--font-mono)", minWidth: "18px" }}
            >
              {i + 1}.
            </span>
            <span style={{ fontSize: "15px", lineHeight: 1.7 }}>{point}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-5" style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}>
        {children}
      </div>
    </section>
  );
}

export default function Lesson22Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "2부" },
          { label: "2-2. Stephenson의 문제의식" },
        ]}
        statusLabel="공개"
        versionLabel="v2.0 · 2026-04-29"
        title="Stephenson의 문제의식"
        description="1930년대 사회과학의 네 갈래 막다른 길 위에서, Stephenson이 주관성을 어떻게 과학의 대상으로 바꾸었는지 따라간다."
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          네 갈래 막다른 길 위의 Stephenson
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            1930년대 사회과학은 변수, 평균, 상관, 조작적 정의에 의존했다.
            그 과정에서 <strong>사람의 관점과 주관성</strong>은 분석 단위에서 밀려났다.
          </p>
          <p>
            Stephenson은 이 흐름을 바깥에서 비판한 사람이 아니다.
            그는 물리학과 심리학을 모두 훈련받았고,
            Spearman의 요인분석 전통 안에서 성장했다.
          </p>
          <p>
            그의 문제의식은 &ldquo;통계를 버리자&rdquo;가 아니라
            <strong> &ldquo;통계가 다루지 못한 주관성을 어떻게 통계 안으로 가져올 것인가&rdquo;</strong>였다.
          </p>
          <p>
            이 강의는 Stephenson(1935a, 1935b, 1936, 1953)을 <strong>하나의 발전선</strong>으로 읽는다.
            1935년 짧은 제안에서 1953년 독자적 방법론까지의 길이다.
          </p>
          <p>
            여기서 조심할 점이 있다.
            1935년에 Q방법론이 완성되었다고 말하면 안 된다.
            1935년은 <strong>출발점</strong>이고, 1953년은 체계화 지점이다.
          </p>
        </div>
      </section>

      <div className="space-y-8 mb-10">
        <Card
          num={1}
          title="Stephenson은 반통계주의자가 아니었다"
          keyMessage="Stephenson의 출발점은 통계 거부가 아니라, 통계가 놓친 주관성의 자리를 다시 여는 것이었다."
          points={[
            "Stephenson은 요인분석의 내부자였다.",
            "문제는 통계가 아니라 분석 단위였다.",
            "Q방법론은 주관성이 드러나는 행위를 자료로 만들려 했다.",
          ]}
          imageSrc="/images/2-2-card-01-not-anti-statistics.webp"
          imageAlt="변수 간 상관행렬과 사람들의 Q-sort 배열을 비교하는 도식"
        >
          <p>
            처음 배울 때 흔한 오해가 있다.
            &ldquo;Q방법론은 양적 통계에 반대해서 나온 방법이군요.&rdquo;
          </p>
          <p>
            그러나 그렇지 않다.
            그는 통계를 버린 사람이 아니라 <strong>요인분석의 가능성을 더 끝까지 밀고 간 사람</strong>이다.
            1935년 <em>Nature</em> 서신의 제목도 <em>Technique of Factor Analysis</em>다.
          </p>
          <p>
            R방법론에서 사람은 변수 점수의 출처일 뿐이다.
            분석의 주인공은 지능·태도 같은 변수다.
          </p>
          <p>
            Stephenson이 본 문제는 이 지점이었다.
            연구자가 알고 싶은 것이 <strong>&ldquo;사람들이 어떤 관점을 공유하는가&rdquo;</strong>라면
            분석 단위가 달라져야 한다.
          </p>
          <p>
            Good(2010)은 그의 작업을 <em>주관성의 과학</em>으로 읽는다.
            그는 주관성을 과학 밖으로 빼낸 사람이 아니다.
            오히려 <strong>주관성이 과학의 대상이 될 수 있다</strong>고 보았다.
          </p>
        </Card>

        <Card
          num={2}
          title={<>1935년 <em>Nature</em> 서신 — 검사 대신 사람을 상관시키다</>}
          keyMessage="1935년 Stephenson은 요인분석을 '검사 간 상관'에서 '사람 간 상관'으로 뒤집을 수 있다고 제안했다."
          points={[
            "기존 요인분석은 검사 간 상관을 분석했다.",
            "Stephenson은 자료 구조를 뒤집어 사람 간 상관을 분석하자고 했다.",
            "1935년은 Q방법론의 완성이 아니라 출발점이다.",
          ]}
          imageSrc="/images/2-2-card-02-nature-letter.webp"
          imageAlt="짧은 학술지 서신이 변수 행렬에서 사람 간 상관행렬로 회전하는 장면"
        >
          <p>
            1935년 8월 24일 <em>Nature</em>에는 세 편의 서신이 함께 실렸다.
            그중 Stephenson의 짧은 글이 훗날 <strong>Q방법론의 출발점</strong>으로 기억된다.
          </p>
          <p>
            형식은 단순하다.
            <em>n</em>개의 항목을 <em>m</em>명의 개인이 평가한다.
            기존 방식은 항목이 분석 단위였다.
            Stephenson은 <em>m</em>명 사이의 상관계수를 구하자고 제안했다.
          </p>
          <p>
            의미는 두 가지다.
            첫째, <strong>사람을 분석 단위로 되돌린다</strong>.
            둘째, 실험실에서 다루기 어려웠던 영역(취향·판단·관점)을
            다시 실험 가능한 대상으로 만든다.
          </p>
          <p>
            같은 해 Stephenson(1935a)은 이 제안을 색상 선호도 실험으로 옮겼다.
            60장의 색상지를 20명이 11점 척도로 배열했다.
            <strong> 오늘날 Q-sort의 원형</strong>인 사전 배열된 빈도분포가 사용되었다.
          </p>
          <p>
            결과는 두 개의 뚜렷한 유형이었다.
            은은한 색조를 선호한 12명, 밝은 원색을 선호한 8명.
            중요한 것은 평균이 아니라
            <strong> 사람들이 색상을 배열하는 방식 전체가 닮거나 다를 수 있다</strong>는 발견이었다.
          </p>
        </Card>

        <Card
          num={3}
          title={<>1936년 <em>Inverted Factor Technique</em> — 발상이 절차가 되다</>}
          keyMessage="1936년 논문에서 Stephenson은 사람 간 상관을 실제 실험 절차와 해석 규칙으로 정식화했다."
          points={[
            "Q기법은 항목 모집단을 두고 사람이 그것을 배열하는 방식이다.",
            "요인 포화도는 능력 우수성이 아니라 관점 유형의 전형성을 뜻한다.",
            "Burt 논쟁은 단순 전치인가 독립 방법론인가의 갈림길을 드러낸다.",
          ]}
          imageSrc="/images/2-2-card-03-inverted-factor-technique.webp"
          imageAlt="도자기, 냄새, 기분 카드가 분포표 위에 배열되고 사람 간 상관 네트워크로 이어지는 장면"
        >
          <p>
            1936년 <em>British Journal of Psychology</em>에 발표된 논문은
            1935년의 발상이 <strong>실제 절차가 되는 순간</strong>이다.
          </p>
          <p>
            Stephenson은 r기법과 Q기법을 명확히 대비한다.
            r기법은 사람들의 집단을 모집단으로 두고 검사 간 상관을 구한다.
            Q기법은 항목들의 집단을 모집단으로 두고 사람 간 상관을 구한다.
          </p>
          <p>
            특히 중요한 것은 <strong>강제분류 절차</strong>다.
            참여자는 연구자가 미리 지정한 빈도분포에 맞춰 점수를 할당한다.
            모든 항목을 독립적으로 평가하는 것이 아니라
            한 번에 상대적 의미를 배열한다.
          </p>
          <p>
            여기서 꼭 기억할 해석 규칙이 있다.
            요인 포화도가 높다는 것은 더 뛰어난 능력을 가졌다는 뜻이 아니다.
            그 사람이 <strong>해당 관점 유형을 가장 전형적으로 보여준다</strong>는 뜻이다.
          </p>
          <p>
            Burt &amp; Stephenson(1939)을 함께 읽어야 한다.
            Burt는 행렬 전치라는 실용적 절차로 보았고,
            Stephenson은 <strong>독립적 방법론</strong>으로 보았다.
          </p>
          <p>
            Q방법론을 &ldquo;R의 행과 열을 바꾼 것&rdquo;이라고만 설명하면 Burt에 머문다.
            Stephenson에게 더 중요한 것은 행렬이 아니라 <strong>연구 대상의 변화</strong>였다.
          </p>
        </Card>

        <Card
          num={4}
          title={<>1953년 <em>The Study of Behavior</em> — 주관성을 행동으로 다루다</>}
          keyMessage="1953년 Stephenson은 Q기법을 단순한 역전 기법이 아니라, 주관적 행동을 연구하는 독자적 방법론으로 확장했다."
          points={[
            "주관성은 잡음이 아니라 연구 대상이다.",
            "Q-sort는 주관성이 조작적으로 드러나는 구체적 행동이다.",
            "operant subjectivity는 operational definition과 다르다.",
          ]}
          imageSrc="/images/2-2-card-04-study-of-behavior.webp"
          imageAlt="진술문 카드가 분포표 위에 배열되며 관찰 가능한 데이터 행렬로 변환되는 장면"
        >
          <p>
            1953년 책의 핵심은 사람 간 상관을 계산하는 법이 아니다.
            더 큰 질문은 이것이다.
            <strong> &ldquo;주관적 행동을 과학적으로 연구할 수 있는가?&rdquo;</strong>
          </p>
          <p>
            Stephenson의 답은 그렇다였다.
            단, 주관성을 마음속에 숨겨진 실체로 가정해서가 아니다.
            사람이 어떤 항목들을 선택하고 배열하는
            <strong> 구체적 행동 속에서 주관성이 드러난다</strong>고 보았기 때문이다.
          </p>
          <p>
            Watson(1913)·Stevens(1935)·Skinner(1938)는 심리학을 자연과학으로 만들려 했다.
            그러나 그 과정에서 주관성·관점·의미는 과학 밖으로 밀려날 위험이 있었다.
          </p>
          <p>
            Stephenson은 이 흐름을 거부하지 않았다.
            오히려 <strong>&ldquo;조작&rdquo;과 &ldquo;행동&rdquo;의 언어</strong>로 주관성을 다시 과학 안으로 가져왔다.
          </p>
          <p>
            여기서 Stevens식 조작적 정의와 Brown식 조작적 주관성을 구분해야 한다.
            Stevens는 개념을 변별 반응으로 환원하려 했다.
            Brown(1980)에게 주관성은 <strong>&ldquo;그 사람 자신의 관점&rdquo;</strong>이며,
            Q-sort는 그 관점이 스스로 표현되도록 한다.
          </p>
          <p>
            Good(2010)의 &ldquo;주관성의 과학&rdquo;이 이 지점을 잘 붙잡는다.
            Stephenson은 행동주의가 배제한 내면을 단순히 복원하려 한 것이 아니라,
            <strong> 주관성을 과학이 다룰 수 있는 방식</strong>으로 다시 형식화하려 했다.
          </p>
        </Card>

        <Card
          num={5}
          title="단일 사례와 구조화된 표본 — 평균 밖의 과학"
          keyMessage="Stephenson에게 과학성은 큰 표본의 평균이 아니라, 잘 구조화된 조건 아래에서 드러나는 의미 있는 패턴에서도 나올 수 있었다."
          points={[
            "Q방법론은 모집단 비율 추정이 아니라 관점 구조 발견을 목표로 한다.",
            "Q표본은 연구문제와 이론을 반영해 구조화될 수 있다.",
            "단일 사례도 적절한 조건 안에서는 이론적으로 의미 있는 자료가 된다.",
          ]}
          imageSrc="/images/2-2-card-05-single-case-structured-sample.webp"
          imageAlt="거대한 평균 그래프 옆에 정교하게 배열된 Q-sort 보드"
        >
          <p>
            학생들이 가장 자주 묻는 질문 중 하나는 이것이다.
            &ldquo;참여자 수가 그렇게 적어도 되나요?&rdquo;
          </p>
          <p>
            이 질문에는 강한 습관이 들어 있다.
            과학성은 큰 표본·평균·대표성에서 나온다는 습관이다.
          </p>
          <p>
            Stephenson은 이 습관을 거부했다기보다,
            <strong> 다른 종류의 과학성이 가능하다</strong>고 보았다.
          </p>
          <p>
            Q방법론이 묻는 질문은
            &ldquo;이 관점이 인구의 몇 퍼센트인가&rdquo;가 아니라
            &ldquo;어떤 관점 구조들이 존재하며, 어떻게 의미 있게 구분되는가&rdquo;이다.
          </p>
          <p>
            중요한 것이 <strong>구조화된 표본</strong>이다.
            Q표본은 아무 진술문을 모은 목록이 아니다.
            연구문제와 이론을 균형 있게 반영하도록 구성된다.
          </p>
          <p>
            Stenner(2011)는 이를 <em>qualiquantology</em>로 더 깊게 본다.
            Q방법론은 질적 변동을 통제하지 않고
            <strong> 수학적으로 다룰 수 있게 만든다</strong>.
            평균 밖에서 찾은 과학성이 여기에 있다.
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
          Stephenson의 새 출발점
        </h2>
        <ul className="space-y-4" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--gray-700)" }}>
          <li>
            <strong>통계의 거부가 아니라 분석 단위의 전환</strong> — 검사 간 상관에서 사람 간 상관으로.
          </li>
          <li>
            <strong>1935년은 완성이 아니라 출발점</strong> — 전체 철학과 절차는 1936년과 1953년을 거치며 정교화되었다.
          </li>
          <li>
            <strong>단순 행렬 전치를 넘어선 독립 방법론</strong> — Burt 논쟁이 보여주듯 사람의 전체 관점 배열을 비교하는 다른 목적이다.
          </li>
          <li>
            <strong>주관성을 구체적 행동으로 보기</strong> — Q-sort는 관찰 가능한 행위이며, 그 안에서 주관성이 조작적으로 드러난다.
          </li>
          <li>
            <strong>평균 밖의 과학</strong> — 모집단 비율 추정보다, 구조화된 조건 안에서 드러나는 관점 구조와 전형적 유형의 발견을 목표로 한다.
          </li>
        </ul>
      </section>

      {/* 핵심 정리 표 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          핵심 정리
        </h2>

        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>단계</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>출처</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>강의에서의 의미</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr key={row.stage} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--brand-deep)" }}>{row.stage}</td>
                  <td className="py-3 pr-4 leading-relaxed text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-500)" }}>{row.year}</td>
                  <td className="py-3 leading-relaxed">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div key={row.stage} className="py-4" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="font-medium mb-1" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>{row.stage}</div>
              <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>Stephenson, {row.year}</div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }}>
                {row.meaning}
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
        <div className="space-y-4" style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--gray-700)" }}>
          <p>
            Stephenson의 문제의식은
            <strong> &ldquo;주관성을 과학 밖에 둘 것인가, 안에서 새롭게 다룰 것인가&rdquo;</strong>였다.
          </p>
          <p>
            그는 통계를 버리지 않았다.
            요인분석을 뒤집었다.
          </p>
          <p>
            1935년 <em>Nature</em> 서신에서 사람 간 상관의 가능성을 제안했고,
            같은 해 색상 실험에서 그 가능성을 보여주었다.
            1936년에 절차화하고, 1939년 Burt 논쟁에서 독자성을 주장했다.
          </p>
          <p>
            1953년 <em>The Study of Behavior</em>에서는
            <strong>주관성을 Q-sort라는 구체적 행동 속에서 연구하는 체계</strong>를 세웠다.
          </p>
          <p>
            Q방법론의 핵심은 이렇게 정리된다.
            주관성을 측정할 수 없는 것으로 포기하지 않고,
            주관성이 드러나는 배열 행위를 과학적 자료로 만드는 것.
          </p>
        </div>
      </section>

      {/* 참고문헌 */}
      <section className="mb-10">
        <h2 className="font-medium mb-4" style={{ fontSize: "16px", color: "var(--black)" }}>참고문헌</h2>
        <ul className="space-y-2.5">
          {references.map((ref) => (
            <li key={ref.key} className="leading-relaxed" style={{ fontSize: "13px", color: "var(--gray-500)" }}>
              {ref.text}
              {ref.doi && (
                <>
                  {" "}
                  <a href={ref.doi} target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-deep)", textDecoration: "underline" }}>
                    {ref.doi}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Link href="/lessons/2-1" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 2-1. 기존 사회과학 방법론의 한계
        </Link>
        <Link href="/lessons/2-3" className="text-sm text-right" style={{ color: "var(--brand-deep)" }}>
          2-3. 주관성의 과학적 탐구 →
        </Link>
      </div>
    </div>
  );
}
