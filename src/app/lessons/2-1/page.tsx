import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "2-1. 기존 사회과학 방법론의 한계 | Q방법론 온라인 강의",
  description:
    "1930년대 심리학·사회과학이 변수 중심 R방법론에 의존하면서 부딪힌 학문적 막다른 길을 따라가, Q방법론이 등장하기 직전의 풍경을 그린다.",
};

const references = [
  { key: "BurtStephenson1939", text: (<>Burt, C., &amp; Stephenson, W. (1939). Alternative views on correlations between persons. <em>Psychometrika, 4</em>(4), 269–281.</>), doi: "https://doi.org/10.1007/BF02287939" },
  { key: "Danziger1990", text: (<>Danziger, K. (1990). <em>Constructing the subject: Historical origins of psychological research</em>. Cambridge University Press.</>), doi: "https://doi.org/10.1017/CBO9780511524059" },
  { key: "Fisher2018", text: (<>Fisher, A. J., Medaglia, J. D., &amp; Jeronimus, B. F. (2018). Lack of group-to-individual generalizability is a threat to human subjects research. <em>PNAS, 115</em>(27).</>), doi: "https://doi.org/10.1073/pnas.1711978115" },
  { key: "Hardcastle1995", text: (<>Hardcastle, G. L. (1995). S. S. Stevens and the origins of operationism. <em>Philosophy of Science, 62</em>(3), 404–424.</>), doi: "https://doi.org/10.1086/289875" },
  { key: "JonesThissen2006", text: (<>Jones, L. V., &amp; Thissen, D. (2006). A history and overview of psychometrics. <em>Handbook of statistics</em> (Vol. 26, pp. 1–27). Elsevier.</>), doi: "https://doi.org/10.1016/S0169-7161(06)26001-2" },
  { key: "Molenaar2004", text: (<>Molenaar, P. C. M. (2004). A manifesto on psychology as idiographic science. <em>Measurement, 2</em>(4), 201–218.</>), doi: "https://doi.org/10.1207/s15366359mea0204_1" },
  { key: "Skinner1938", text: (<>Skinner, B. F. (1938). <em>The behavior of organisms</em>. Appleton-Century.</>) },
  { key: "Spearman1904", text: (<>Spearman, C. (1904). &ldquo;General intelligence,&rdquo; objectively determined and measured. <em>The American Journal of Psychology, 15</em>(2), 201–292.</>), doi: "https://doi.org/10.2307/1412107" },
  { key: "Stephenson1935a", text: (<>Stephenson, W. (1935a). Correlating persons instead of tests. <em>Journal of Personality, 4</em>(1), 17–24.</>), doi: "https://doi.org/10.1111/j.1467-6494.1935.tb02022.x" },
  { key: "Stephenson1935b", text: (<>Stephenson, W. (1935b). Technique of factor analysis. <em>Nature, 136</em>(3434), 297.</>), doi: "https://doi.org/10.1038/136297b0" },
  { key: "Stephenson1936", text: (<>Stephenson, W. (1936). The inverted factor technique. <em>British Journal of Psychology, 26</em>(4), 344–361.</>), doi: "https://doi.org/10.1111/j.2044-8295.1936.tb00803.x" },
  { key: "Stevens1935", text: (<>Stevens, S. S. (1935). The operational definition of psychological concepts. <em>Psychological Review, 42</em>(6), 517–527.</>), doi: "https://doi.org/10.1037/h0056973" },
  { key: "Thurstone1934", text: (<>Thurstone, L. L. (1934). The vectors of mind. <em>Psychological Review, 41</em>(1), 1–32.</>), doi: "https://doi.org/10.1037/h0075959" },
  { key: "Verhaegh2021", text: (<>Verhaegh, S. (2021). Psychological operationisms at Harvard. <em>Journal of the History of the Behavioral Sciences, 57</em>(2), 194–212.</>), doi: "https://doi.org/10.1002/jhbs.22071" },
  { key: "Watson1913", text: (<>Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review, 20</em>(2), 158–177.</>), doi: "https://doi.org/10.1037/h0074428" },
];

const summaryTable = [
  { premise: "변수 중심성", deadEnd: "사람의 관점 차이를 직접 비교할 수 없다", sources: "Spearman(1904), Thurstone(1934)" },
  { premise: "평균 의존", deadEnd: "누구의 것도 아닌 평균이 결과로 남는다", sources: "Molenaar(2004), Fisher et al.(2018)" },
  { premise: "변수 간 상관", deadEnd: "같은 점수가 같은 의미라는 가정이 검증되지 않는다", sources: "Stephenson(1935b, 1936)" },
  { premise: "객관주의", deadEnd: "정치·교육·임상의 핵심 영역이 비워진다", sources: "Watson(1913), Stevens(1935)" },
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
  title: string;
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

export default function Lesson21Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "2부" },
          { label: "2-1. 기존 사회과학 방법론의 한계" },
        ]}
        statusLabel="공개"
        versionLabel="v2.0 · 2026-04-29"
        title="기존 사회과학 방법론의 한계"
        description="1930년대 심리학·사회과학이 변수 중심 R방법론에 의존하면서 부딪힌 학문적 막다른 길을 따라가, Q방법론이 등장하기 직전의 풍경을 그린다."
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          왜 1930년대를 다시 보는가
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            <strong>&ldquo;Q방법론은 왜 만들어졌는가&rdquo;</strong>에 답하려면 1930년대 심리학과 사회과학의 풍경으로 돌아가야 한다.
          </p>
          <p>
            그 시기 학문 공동체의 전제는 두 가지였다.
            과학성은 계량화에서 오고, 분석의 단위는 변수다.
          </p>
          <p>
            Spearman의 일반지능 g, Thurstone의 다중 요인분석,
            Watson의 행동주의, Stevens의 조작주의가 그 전제 위에 서 있었다.
            1935–1936년 심리측정학회 창립과 <em>Psychometrika</em> 창간이 흐름의 정점이었다.
          </p>
          <p>
            Stephenson(1935b)이 &ldquo;검사 대신 사람을 상관시키자&rdquo;고 제안한 것은
            이 풍경을 거부했기 때문이 아니라,
            그 풍경이 처리할 수 없는 영역, 곧 <strong>사람의 주관적 관점</strong>을 보았기 때문이다.
          </p>
          <p>
            2-1강은 그가 본 <strong>네 갈래 막다른 길</strong>의 지도다.
          </p>
        </div>
      </section>

      <div className="space-y-8 mb-10">
        <Card
          num={1}
          title="1930년대 사회과학의 풍경"
          keyMessage="1930년대 심리학과 사회과학은 행동주의·심리측정·조작주의가 결합한 변수 중심 R방법론으로 통일되어 갔다."
          points={[
            "행동주의가 주관성·내성을 비과학으로 밀어냈다.",
            "요인분석이 잠재 차원을 추출하는 표준 도구가 되었다.",
            "1935–1936년 심리측정학회 창립으로 계량화는 제도화되었다.",
          ]}
          imageSrc="/images/2-1-card-01-1930s-r-methodology.webp"
          imageAlt="1930년대 R방법론의 주요 인물과 도구"
        >
          <p>
            Spearman(1904)은 감각 검사와 학교 성적의 상관에서
            모든 지적 활동의 기저에 단 하나의 일반 요인 g가 있다고 보았다.
            인간의 정신을 <strong>변수 간 상관행렬</strong>의 잠재 차원으로 다루는 길이 열렸다.
          </p>
          <p>
            Thurstone(1934)은 이를 정교화해 다중 요인분석을 확립했다.
            마음을 다차원 공간의 벡터로 표상하고,
            변수 군집에 &ldquo;능력&rdquo;이나 &ldquo;태도&rdquo;라는 이름을 붙이는 것이 학문의 표준이 되었다.
          </p>
          <p>
            같은 시기 Watson(1913)의 행동주의 선언은
            의식과 내성을 비과학으로 밀어냈다.
            Skinner(1938)는 행동의 빈도와 강도만을 다루는 기술적 행동주의를 세웠다.
          </p>
          <p>
            Stevens(1935)의 조작주의는 짝을 이뤘다.
            모든 개념은 <strong>공개적이고 반복 가능한 조작</strong>으로 정의되어야 한다는 것이다.
          </p>
          <p>
            1935년 심리측정학회 창립과 1936년 <em>Psychometrika</em> 창간이
            &ldquo;과학성=계량화&rdquo;를 학문 공동체의 공유 전제로 굳혔다.
            Danziger(1990)는 이를 <strong>방법숭배(methodolatry)</strong>라 불렀다.
          </p>
        </Card>

        <Card
          num={2}
          title="평균값에 묻힌 개인"
          keyMessage="집단 평균은 개인의 관점을 평탄화하고, 누구의 것도 아닌 평균을 만든다."
          points={[
            "평균은 누구의 관점도 아닌 통계적 잔여다.",
            "인간 심리 과정은 대부분 비에르고딕(nonergodic)하다.",
            "개인 내 분산은 집단 간 분산보다 평균 7.85배 크다.",
          ]}
          imageSrc="/images/2-1-card-02-average-paradox.webp"
          imageAlt="다양한 시계열 곡선이 한 점의 평균값으로 압축되는 도식"
        >
          <p>
            <strong>&ldquo;평균은 모든 사람을 조금씩 닮았지만, 누구도 온전히 대표하지 않는다.&rdquo;</strong>
          </p>
          <p>
            Molenaar(2004)는 이를 에르고딕 정리로 형식화했다.
            인간의 발달·학습·적응은 시간에 따라 변동하는 비에르고딕 과정이다.
            <strong>집단 결과를 개인에 일반화하는 것은 수학적으로 정당화되지 않는다.</strong>
          </p>
          <p>
            그는 22명을 90일간 30개 성격 변수로 측정했다.
            집단 수준에서는 5요인 모델이 나왔지만,
            개인 시계열에서는 사람마다 2·3·4요인의 다른 구조가 나왔다.
          </p>
          <p>
            Fisher et al.(2018)은 6개 데이터셋으로 이를 확인했다.
            평균은 통계적으로 일치했지만(차이 약 3%),
            개인 내 편차가 집단 간 편차보다 평균 <strong>7.85배</strong> 더 컸다.
          </p>
          <p>
            우울한 기분과 걱정의 상관이 집단에서는 r=0.71이지만
            개인의 삶에서는 r=0.40이거나 아예 존재하지 않을 수 있다.
            대규모 가이드라인이 눈앞의 환자에게 작동한다는 보장은 어디에도 없다.
          </p>
        </Card>

        <Card
          num={3}
          title="상관계수가 가린 개인 차이"
          keyMessage="변수 간 상관은 변수의 관계를 보여줄 뿐, 사람의 관점 차이는 보여주지 않는다."
          points={[
            "R의 데이터 행렬에서 단위는 변수, 사람은 표본이다.",
            "Stephenson(1935b)은 그 방향을 뒤집을 것을 처음 제안했다.",
            "Burt vs. Stephenson 논쟁은 두 사람 간 상관의 갈림길이다.",
          ]}
          imageSrc="/images/2-1-card-03-correlating-persons.webp"
          imageAlt="데이터 행렬이 뒤집히는 도식"
        >
          <p>
            R방법론에서 사람은 <strong>변수 점수의 출처</strong>일 뿐이다.
            같은 7점을 매긴 두 사람이 같은 이유로 그렇게 했는지는 분석에 들어오지 않는다.
          </p>
          <p>
            Stephenson은 이 비대칭을 정면으로 뒤집었다.
            1935년 8월 <em>Nature</em>에 실린 짧은 서신에서
            그는 <strong>여러 측정물에 대해 사람들 간의 상관을 구해 요인화</strong>하는 절차를 제안했다.
          </p>
          <p>
            같은 해 색상 선호도 실험(Stephenson, 1935a)이 첫 사례다.
            60종 색상지를 20명에게 빈도 분포에 맞춰 강제 분류하게 했다.
            오늘날 <strong>Q-sort의 원형</strong>이다.
          </p>
          <p>
            결과는 두 개의 뚜렷한 유형 — 12명의 &ldquo;예술적 취향&rdquo;,
            8명의 &ldquo;투박한 취향&rdquo; — 이었다.
            작은 표본으로도 사람 사이 패턴을 분리해낼 수 있음을 증명했다.
          </p>
          <p>
            그러나 합의는 곧바로 오지 않았다.
            Burt &amp; Stephenson(1939)의 논쟁은 끝내 좁혀지지 않았다.
            Burt는 행렬 전치라는 실용적 대안으로,
            Stephenson은 <strong>독립적 방법론</strong>으로 보았다.
          </p>
        </Card>

        <Card
          num={4}
          title="주관성을 다룰 수 없었던 R방법론"
          keyMessage="객관성을 추구한 R방법론은 주관성을 측정할 수 없는 잔여로 밀어냈고, 사회과학이 답해야 할 큰 영역이 비워졌다."
          points={[
            "Watson(1913)은 의식과 내성을 비과학으로 선언했다.",
            "Stevens(1935)는 모든 개념을 변별 반응으로 정의해야 한다고 주장했다.",
            "그 결과 사회과학에 '관점을 다룰 도구가 없다'는 막다른 길이 생겼다.",
          ]}
          imageSrc="/images/2-1-card-04-subjectivity-excluded.webp"
          imageAlt="의식·내성·주관성이 행동주의·조작주의의 문 밖으로 밀려나는 도식"
        >
          <p>
            1930년대 풍경에서 가장 강력한 정리 작업은
            <strong> &ldquo;무엇이 과학이고 무엇이 비과학인가&rdquo;</strong>를 가르는 일이었다.
          </p>
          <p>
            Watson(1913)은 단호했다.
            심리학의 목표는 행동의 예측과 통제이며,
            마음의 상태나 심상은 과학적 관찰의 대상이 아니다.
            사고조차 후두 근육의 미세 운동으로 환원된다고 보았다.
          </p>
          <p>
            Stevens(1935)는 짝이 되는 철학적 정리를 했다.
            존재·경험·감각은 모두 <strong>차별적 반응</strong>으로 환원되어야 한다.
            주관성이 가는 곳마다 객관적 관찰 가능성으로 환원되었다.
          </p>
          <p>
            Hardcastle(1995)와 Verhaegh(2021)는 이를 다시 본다.
            조작주의는 순수한 방법론이 아니라
            각 학파(행동주의·정신물리학)가 자기 입장을 정당화하기 위한 도구였다.
          </p>
          <p>
            공동의 결과는 하나였다.
            <strong>&ldquo;주관성=비과학&rdquo;</strong>이라는 등식이다.
            그러나 정치·교육·임상·정책에서 사람의 관점은 사라지지 않았다.
            사라지지 않은 영역이 학문적으로 비어버린 사정 — 이것이 가장 깊은 막다른 길이다.
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
          1930년대가 남긴 네 갈래 막다른 길
        </h2>
        <ul className="space-y-4 mb-6" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--gray-700)" }}>
          <li>
            <strong>변수 중심성.</strong> 요인분석이 변수를 단위로 삼으면서 사람의 관점이 단위에서 사라졌다.
          </li>
          <li>
            <strong>평균 의존.</strong> 비에르고딕한 인간 심리에서 집단 평균은 누구의 관점도 보여주지 않는다.
          </li>
          <li>
            <strong>변수 간 상관.</strong> R의 상관은 사람 간 관점 유사성을 직접 보여주지 못한다.
            Stephenson은 이 한계를 행렬 전치라는 발상으로 정면 돌파했다.
          </li>
          <li>
            <strong>객관주의.</strong> 행동주의·조작주의는 주관성을 비과학으로 밀어냈다.
            그러나 빈자리는 메워지지 않았다.
          </li>
        </ul>
        <div className="overflow-hidden" style={{ borderRadius: "12px" }}>
          <Image
            src="/images/2-1-card-05-four-dead-ends.webp"
            alt="네 갈래 막다른 길 — 변수 중심성, 평균, 상관, 객관주의"
            width={960}
            height={540}
            className="w-full h-auto block"
          />
        </div>
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
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>R방법론의 전제</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>막다른 길</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>대표 근거</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr key={row.premise} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}>
                  <td className="py-3 pr-4 font-medium" style={{ color: "var(--brand-deep)" }}>{row.premise}</td>
                  <td className="py-3 pr-4 leading-relaxed">{row.deadEnd}</td>
                  <td className="py-3 leading-relaxed text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-500)" }}>{row.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div key={row.premise} className="py-4" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="font-medium mb-2" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>{row.premise}</div>
              <div className="mb-2" style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }}>
                <strong>막다른 길:</strong> {row.deadEnd}
              </div>
              <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>
                {row.sources}
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
            1930년대 사회과학은 행동주의·요인분석·조작주의가 결합한 변수 중심 R방법론으로 통일되어 갔다.
          </p>
          <p>
            그러나 그 통일성은 네 가지 막다른 길을 남겼다.
            사람이 단위에서 사라졌고, 평균은 누구의 관점도 아니었으며,
            상관은 사람 간 차이를 보여주지 못했고, 주관성은 비과학으로 밀려났다.
          </p>
          <p>
            Stephenson이 1935년 <em>Nature</em> 서신과 1936년 <em>Inverted Factor Technique</em>에서 던진 작은 발상의 전환은,
            <strong> 비어 있던 자리에 새 출발점을 놓는 일</strong>이었다.
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
        <Link href="/lessons/1-3" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 1-3. Q방법론에 대한 흔한 오해와 한계
        </Link>
        <Link href="/lessons/2-2" className="text-sm text-right" style={{ color: "var(--brand-deep)" }}>
          2-2. Stephenson의 문제의식 →
        </Link>
      </div>
    </div>
  );
}
