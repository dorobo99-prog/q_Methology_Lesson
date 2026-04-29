import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LessonCard from "@/components/LessonCard";

export const metadata: Metadata = {
  title: "2-1. 기존 사회과학 방법론의 한계 | Q방법론 온라인 강의",
  description:
    "1930년대 심리학·사회과학이 변수 중심 R방법론에 의존하면서 부딪힌 학문적 막다른 길을 따라가, Q방법론이 등장하기 직전의 풍경을 그린다.",
};

const references = [
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
    key: "Danziger1990",
    text: (
      <>
        Danziger, K. (1990). <em>Constructing the subject: Historical origins of psychological research</em>. Cambridge University Press.
      </>
    ),
    doi: "https://doi.org/10.1017/CBO9780511524059",
  },
  {
    key: "Fisher2018",
    text: (
      <>
        Fisher, A. J., Medaglia, J. D., & Jeronimus, B. F. (2018). Lack of group-to-individual generalizability is a threat to human subjects research. <em>Proceedings of the National Academy of Sciences, 115</em>(27).
      </>
    ),
    doi: "https://doi.org/10.1073/pnas.1711978115",
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
    key: "JonesThissen2006",
    text: (
      <>
        Jones, L. V., & Thissen, D. (2006). A history and overview of psychometrics. In <em>Handbook of statistics</em> (Vol. 26, pp. 1–27). Elsevier.
      </>
    ),
    doi: "https://doi.org/10.1016/S0169-7161(06)26001-2",
  },
  {
    key: "Molenaar2004",
    text: (
      <>
        Molenaar, P. C. M. (2004). A manifesto on psychology as idiographic science: Bringing the person back into scientific psychology, this time forever. <em>Measurement: Interdisciplinary Research & Perspective, 2</em>(4), 201–218.
      </>
    ),
    doi: "https://doi.org/10.1207/s15366359mea0204_1",
  },
  {
    key: "Skinner1938",
    text: (
      <>
        Skinner, B. F. (1938). <em>The behavior of organisms: An experimental analysis</em>. Appleton-Century.
      </>
    ),
  },
  {
    key: "Spearman1904",
    text: (
      <>
        Spearman, C. (1904). &ldquo;General intelligence,&rdquo; objectively determined and measured. <em>The American Journal of Psychology, 15</em>(2), 201–292.
      </>
    ),
    doi: "https://doi.org/10.2307/1412107",
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
        Stephenson, W. (1936). The inverted factor technique. <em>British Journal of Psychology, 26</em>(4), 344–361.
      </>
    ),
    doi: "https://doi.org/10.1111/j.2044-8295.1936.tb00803.x",
  },
  {
    key: "Stephenson1953",
    text: (
      <>
        Stephenson, W. (1953). <em>The study of behavior: Q-technique and its methodology</em>. University of Chicago Press.
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
    key: "Thurstone1931",
    text: (
      <>
        Thurstone, L. L. (1931). Multiple factor analysis. <em>Psychological Review, 38</em>(5), 406–427.
      </>
    ),
    doi: "https://doi.org/10.1037/h0069792",
  },
  {
    key: "Thurstone1934",
    text: (
      <>
        Thurstone, L. L. (1934). The vectors of mind. <em>Psychological Review, 41</em>(1), 1–32.
      </>
    ),
    doi: "https://doi.org/10.1037/h0075959",
  },
  {
    key: "Verhaegh2021",
    text: (
      <>
        Verhaegh, S. (2021). Psychological operationisms at Harvard: Skinner, Boring, and Stevens. <em>Journal of the History of the Behavioral Sciences, 57</em>(2), 194–212.
      </>
    ),
    doi: "https://doi.org/10.1002/jhbs.22071",
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
];

const summaryTable = [
  {
    premise: "분석 단위는 변수다",
    deadEnd: "사람의 관점 차이를 직접 비교할 수 없다",
    sources: "Spearman(1904), Thurstone(1931, 1934)",
  },
  {
    premise: "과학성은 평균과 분산으로 표현된다",
    deadEnd: "누구의 것도 아닌 평균이 결과로 남는다",
    sources: "Molenaar(2004), Fisher et al.(2018)",
  },
  {
    premise: "변수 간 상관이 의미를 보여준다",
    deadEnd: "같은 점수가 같은 의미라는 가정이 검증되지 않는다",
    sources: "Stephenson(1935a, 1935b, 1936), Burt & Stephenson(1939)",
  },
  {
    premise: "주관성은 측정할 수 없으므로 비과학이다",
    deadEnd: "정치·교육·임상의 핵심 영역이 비워진다",
    sources: "Watson(1913), Skinner(1938), Stevens(1935), Verhaegh(2021)",
  },
];

export default function Lesson21Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* 내비게이션 */}
      <nav
        className="flex items-center gap-1.5 mb-8"
        style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
      >
        <Link href="/outline" style={{ color: "var(--gray-400)" }} className="hover:underline">강의 목차</Link>
        <span>›</span>
        <span>2부. Q방법론의 등장과 발전</span>
        <span>›</span>
        <span style={{ color: "var(--black)" }}>2-1. 기존 사회과학 방법론의 한계</span>
      </nav>

      {/* 히어로 */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--brand-light)",
              color: "var(--brand-deep)",
            }}
          >
            ✅ 공개
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
          >
            v1.0 · 2026-04-27
          </span>
        </div>
        <h1
          className="font-semibold mb-3"
          style={{ fontSize: "40px", letterSpacing: "-0.8px", lineHeight: 1.1, color: "var(--black)" }}
        >
          기존 사회과학 방법론의 한계
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.5, color: "var(--gray-500)" }}>
          1930년대 심리학·사회과학이 변수 중심 R방법론에 의존하면서 부딪힌 학문적 막다른 길을 따라가, Q방법론이 등장하기 직전의 풍경을 그린다.
        </p>
        <div className="mt-8">
          <Image
            src="/images/2-1-card-00-r-methodology-limits.webp"
            alt="평균값 막대그래프와 변수 간 상관행렬의 정연한 풍경 뒤로 다양한 표정의 개인 실루엣이 흐릿하게 가려진 1930년대 학문의 장면"
            width={500}
            height={280}
            className="h-auto rounded-xl"
            style={{ maxWidth: "500px", width: "100%" }}
            priority
          />
        </div>
      </header>

      {/* 도입 설명 */}
      <section className="mb-10 pt-8 space-y-4 leading-relaxed text-sm" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", color: "var(--gray-700)" }}>
        <h2
          className="font-semibold mb-2"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          왜 1930년대를 다시 보는가
        </h2>
        <p>
          1-1·1-2·1-3강을 통해 Q방법론의 정의·핵심 개념·오해와 한계를 짚었다. 그러나 "Q방법론은 왜 만들어졌는가"라는 질문에 답하려면 1930년대 초 심리학과 사회과학의 풍경으로 돌아가야 한다. 그 시기는 단순히 통계가 많이 쓰이던 시기가 아니라, 심리학 자체가 "측정·상관·요인·조작적 정의"를 통해 자연과학이 되려고 했던 시기였다.
        </p>
        <p>
          학문 공동체가 공유한 전제는 두 가지였다. 첫째, <strong>과학성은 계량화에서 온다</strong>. 둘째, <strong>분석의 단위는 변수다</strong>. 이 전제 위에서 Spearman의 일반지능 g(Spearman, 1904)가 출발점에 서 있었고, Thurstone의 다중 요인분석(Thurstone, 1931, 1934)이 이를 정교화했다. Watson(1913)이 선언한 행동주의는 의식과 내성을 비과학으로 밀어냈고, Stevens(1935)의 조작주의는 심리학 개념을 측정 절차로 정의해야 한다고 선언했다. Jones & Thissen(2006)이 정리하듯, 1935년 심리측정학회(Psychometric Society) 창립과 1936년 <em>Psychometrika</em> 창간은 이 흐름의 제도적 정점이었다.
        </p>
        <p>
          Stephenson이 1935년 <em>Nature</em>에 짧은 서신(Stephenson, 1935b)을 보내 "검사 대신 사람을 상관시키자"고 제안한 것은, 이 풍경을 거부했기 때문이 아니라 그 풍경이 처리할 수 없는 영역, 즉 <strong>사람의 주관적 관점</strong>을 보았기 때문이다. 2-1강은 그가 본 막다른 길의 지도다. 오해를 풀어가는 1-3강과 달리, 2-1강은 "왜 이 방법이 필요했는가"를 시대 안에 다시 놓아본다.
        </p>
      </section>

      {/* 카드 4개 */}
      <div className="space-y-8 mb-10">

        <LessonCard
          title="카드 1. 1930년대 사회과학의 풍경 — R방법론의 지배"
          keyMessage="1930년대 심리학과 사회과학은 행동주의·심리측정·조작주의가 결합한 변수 중심 R방법론으로 통일되어 갔다."
          description="Spearman의 일반지능 g, Thurstone의 다중 요인분석, Watson과 Skinner의 행동주의, Stevens의 조작주의가 결합되면서 '과학적 심리학'의 표준은 '여러 사람에게서 측정한 변수들 사이의 관계를 통계로 다루는 작업'으로 굳어졌다."
          points={[
            "행동주의가 주관성·내성을 비과학으로 밀어냈다.",
            "요인분석이 변수 묶음에서 잠재 차원을 추출하는 표준 도구가 되었다.",
            "1935–1936년 심리측정학회 창립과 Psychometrika 창간으로 계량화는 제도화되었다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-1-card-01-1930s-r-methodology.webp"
          imageAlt="1930년대 R방법론의 주요 인물과 도구가 한 장면에 모인 개념도 — 변수 행렬, 요인 축, 행동 자극-반응 도식, 그리고 그 옆에 1936년 Psychometrika 창간호"
        >
          <p>
            1930년대 심리학을 한 장면으로 그리면 "변수의 시대"라는 표현이 가장 가깝다. 그 시작은 1904년 Spearman으로 거슬러 올라간다. Spearman(1904)은 청각·시각·촉각 변별력 같은 단순한 감각 검사와 학교 성적이나 교사가 평가한 지능 사이의 상관을 분석하면서, 측정 오차와 교란 변수를 수학적으로 교정하면 모든 지적 활동의 기저에 단 하나의 일반 요인 g가 존재함을 보였다. 그가 도입한 "관찰 오차 교정(elimination of observational errors)"과 "지능의 위계(hierarchy of the intelligences)"라는 개념은, 인간의 정신을 변수 간 상관행렬과 그 안에 숨은 잠재 차원으로 다루는 길을 열었다.
          </p>
          <p>
            이 길을 한 단계 더 정교화한 사람이 시카고 대학교의 Thurstone이다. Thurstone(1931)은 Spearman의 2요인 모델이 군집 요인(group factors)을 처리할 수 없다는 한계를 지적하고, 상관행렬에서 요인의 수에 제한 없이 다수의 독립적인 일반 요인을 추출하는 다중 요인분석(multiple factor analysis)의 수학적 절차를 확립했다. 1933년 미국심리학회 회장 취임 연설을 묶은 <em>The Vectors of Mind</em>(Thurstone, 1934)에서 그는 이 방법론을 성격 형용사 60개, 정신병 증상 37개, 직업 흥미 80개, 사회적 태도 척도 등 인간 심리의 거의 모든 영역에 적용했다. 마음을 다차원 공간의 벡터로 표상하고, 변수들이 군집(constellations)을 이루는 자리에 "능력"이나 "태도"라는 이름을 붙이는 작업이 학문의 표준이 되어 갔다.
          </p>
          <p>
            같은 시기, 또 다른 흐름이 심리학을 자연과학으로 만들려 하고 있었다. Watson(1913)은 <em>Psychology as the Behaviorist Views It</em>에서 심리학이 의식과 내성에 집착하는 한 결코 화학이나 물리학 같은 자연과학이 될 수 없다고 선언했다. 그는 심리학의 목표를 "행동의 예측과 통제"로 재정의했고, 사고조차 후두에서 일어나는 미세한 발성 근육 운동으로 환원할 수 있다고 주장했다. Skinner(1938)는 이 행동주의를 <em>The Behavior of Organisms</em>에서 한층 더 밀고 나가, 신경학이나 정신주의적 허구에 의존하지 않고 조작과 반응률 사이의 함수 관계만 기술하는 "기술적 행동주의(descriptive science of behavior)"의 토대를 세웠다. 그가 도입한 누적 기록기(cumulative record)는 단일 유기체의 행동을 통계적 평균에 의존하지 않고도 분석할 수 있게 해 주었지만, 분석의 대상은 어디까지나 관찰 가능한 행동의 빈도였다.
          </p>
          <p>
            행동주의와 짝을 이룬 또 한 흐름이 조작주의(operationism)다. Stevens(1935)는 심리학의 핵심 개념인 "존재", "경험", "감각", "속성"을 형이상학적 모호성에서 벗어나 "공개적이고 반복 가능한 조작"으로 재정의해야 한다고 선언했다. 그의 관점에서 감각은 의식의 사적인 측면이 아니라 자극 변화에 동반하는 유기체의 "차별적 반응(differential reaction)"이며, 경험조차도 처음부터 끝까지 구성 개념(construct)이었다. Hardcastle(1995)은 후일 이 조작주의의 핵심을 "과학적 동의(agreement)를 확보하기 위한 자연주의적 방법론"으로 재해석했고, Verhaegh(2021)는 하버드 아카이브 자료를 통해 Stevens·Skinner·Boring이 브리지먼의 조작주의를 각자의 학파(행동주의·정신물리학)를 정당화하는 도구로 변용했음을 밝혀냈다. 1930년대의 조작주의는 단순한 방법론적 규칙이 아니라, 무엇이 과학이고 무엇이 비과학인지를 가르는 경계선이었다.
          </p>
          <p>
            이 모든 흐름이 한자리에서 만난 시점이 1935–1936년이다. Jones & Thissen(2006)은 1935년 심리측정학회(Psychometric Society) 창립과 1936년 <em>Psychometrika</em> 창간을 "심리측정학이 공식적인 학문 분과로 정립된" 사건으로 기록한다. 심리 척도화, 검사 이론, 요인분석이라는 세 축이 제도적으로 묶이면서, "과학성=계량화"는 학문 공동체의 공유 전제가 되었다. Danziger(1990)는 이 과정 자체가 자연적 발견이 아니라 사회적 구성이었다고 본다. 미국 심리학은 교육 행정가의 효율성 측정 요구에 부응하여 지능·성격 측정을 발전시켰고, 독일 심리학은 군대 장교 선발이라는 시장의 요구에 응답하여 표현 심리학을 발전시켰다. 그가 "방법숭배(methodolatry)"라고 부른 현상은 통일된 이론적 기반이 없는 심리학이 과학의 권위를 빌리기 위해 통계적·양적 규칙 자체를 맹목적으로 추종하게 된 사정을 가리킨다.
          </p>
          <p>
            요약하면 1930년대 심리학은 "사람이 무엇을 의미 있게 느끼는가"보다 "여러 사람에게서 측정된 변수들이 어떻게 상관되는가"를 과학의 중심 언어로 삼아가던 시기였다. 이 풍경은 화려했지만, 다음 세 카드에서 보듯이 사람을 단위에서 사라지게 만드는 부작용을 낳았다.
          </p>
        </LessonCard>

        <LessonCard
          title="카드 2. 평균값에 묻힌 개인 — 평균의 역설"
          keyMessage="집단 평균은 개인의 관점을 평탄화하고, 누구의 것도 아닌 평균을 만든다."
          description="집단 수준에서 발견한 패턴이 개인 수준에서도 같은 모양으로 나타난다는 가정(에르고딕 가정)은 사회과학에서 거의 늘 깨진다. Molenaar(2004)와 Fisher et al.(2018)은 이 어긋남이 단순한 우려가 아니라 수학적·실증적으로 입증된 사실임을 보였다."
          points={[
            "평균은 누구의 관점도 아닌 통계적 잔여다.",
            "인간 심리 과정은 대부분 비에르고딕(nonergodic)하다 (Molenaar, 2004).",
            "개인 내 분산은 집단 간 분산보다 평균 7.85배 크다 (Fisher et al., 2018).",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-1-card-02-average-paradox.webp"
          imageAlt="다양한 시계열 곡선이 한 점의 평균값으로 압축되는 도식 — 압축 과정에서 개별 곡선의 굴곡이 사라지는 모습"
        >
          <p>
            "평균은 모든 사람을 조금씩 닮았지만, 실제로는 누구도 온전히 대표하지 않는 통계적 얼굴이다." 이 말은 1930년대에는 직관에 머물렀지만, 21세기 들어 수학적·실증적으로 입증된 명제가 되었다. Molenaar(2004)는 <em>Measurement</em> 저널에 발표한 선언문 <em>A Manifesto on Psychology as Idiographic Science</em>에서, 집단 간 변동(interindividual variation, IEV)의 구조와 개인 내 변동(intraindividual variation, IAV)의 구조가 점근적으로 동일해지는 조건을 "에르고딕 정리(ergodic theorem)"로 형식화했다. 가우시안 과정의 경우 평균과 분산이 시간에 따라 변하지 않는 정상성(stationarity)을 만족할 때만 에르고딕 과정이 성립한다.
          </p>
          <p>
            문제는 인간의 발달·학습·적응 같은 대부분의 심리 과정이 시간에 따라 변동한다는 점이다. 이 과정들은 비에르고딕(nonergodic) 과정에 속하며, 따라서 집단 수준의 분석 결과를 개인 수준에 일반화하는 것은 수학적으로 정당화되지 않는다. Molenaar는 이를 추상적 주장으로만 두지 않았다. 22명을 90일 동안 매일 30개 성격 변수로 측정한 자료를 분석했더니, 집단 수준에서는 명확한 5요인 모델(Big Five)이 도출되었지만, 개별 참가자의 시계열 데이터에서는 참가자마다 2요인, 3요인, 4요인 등 구조와 에러 분산이 모두 다른 고유한 모델이 나왔다. 횡단면적 요인분석은 집단 내에 각기 다른 요인 구조를 가진 개인들이 섞여 있어도, 이를 통계적으로 매끈한 단일 구조로 포장해 버리는 맹점을 가진다.
          </p>
          <p>
            Fisher et al.(2018)은 이 위협의 범위를 더 넓게 측정했다. <em>PNAS</em>에 발표한 <em>Lack of Group-to-Individual Generalizability</em>는 미국과 네덜란드의 6개 집중 반복 측정 데이터셋(주요우울장애·범불안장애 환자, PTSD 환자, 성격장애 환자, 우울증 RCT 참가자, 일반 대중 등)을 활용해 동일한 변수에 대한 개인 내 분포와 집단 간 분포를 대칭적으로 비교했다. 결과는 충격적이었다. 15개 변수 중 14개에서 평균은 통계적으로 일치했지만(차이 약 3%), 분산(표준편차)의 경우 개인 내 편차가 집단 간 편차보다 최소 3.79배에서 최대 13.20배(평균 7.85배) 더 컸다. 변수 간 상관관계로 가면 격차는 더 컸다. 우울한 기분과 걱정의 상관계수가 집단 수준에서는 r=0.71이지만, 개별 개인의 삶 속에서는 r=0.40 수준이거나 아예 존재하지 않을 수 있다.
          </p>
          <p>
            이 연구들이 가리키는 것은 "심슨의 역설(Simpson's paradox)"이나 "생태학적 오류(ecological fallacy)"가 통계 교과서의 부록 사례가 아니라, 인간 대상 연구의 일상적 위협이라는 사실이다. 임상 가이드라인이 대규모 집단 데이터에 기반한다면, 그 가이드라인이 눈앞의 환자에게 적용될 때 작동한다는 보장은 어디에도 없다.
          </p>
          <p>
            이 사실이 1930년대에 이미 명료하게 인식되었던 것은 아니다. 그러나 Stephenson은 그 시점에 이미 비슷한 직관을 가지고 있었다. Stephenson(1935b)이 <em>Nature</em>에 보낸 짧은 서신에서 그는 기존 요인분석이 "여러 개인에게서 측정한 여러 검사 변수의 상관"을 분석한다는 점을 분명히 적시한 뒤, 그 방향을 뒤집을 가능성을 제안했다. 같은 해 <em>Journal of Personality</em>에 발표한 <em>Correlating Persons Instead of Tests</em>(Stephenson, 1935a)에서 그는 이 발상을 색상 선호도 실험으로 옮겼다. 60개의 색상지를 20명이 사전에 지정된 빈도 분포에 맞춰 강제 분류하게 한 뒤 사람 간 상관을 분석했더니, 두 개의 뚜렷한 요인이 나왔다. 12명은 은은한 색조를 선호하는 "예술적 취향" 유형이었고, 8명은 순수하고 밝은 원색을 선호하는 "투박한 취향" 유형이었다. 평균을 구해 "사람들이 평균적으로 어떤 색을 좋아하는가"를 묻는 대신, 사람들 사이의 패턴 유사성을 직접 비교한 것이다. Molenaar(2004)와 Fisher et al.(2018)이 후일 수학적으로 정식화한 문제의식의 역사적 원형이 여기에 있다.
          </p>
        </LessonCard>

        <LessonCard
          title="카드 3. 상관계수가 가린 개인 차이"
          keyMessage="변수 간 상관은 변수의 관계를 보여줄 뿐, 사람의 관점 차이는 보여주지 않는다. Stephenson은 이 한계를 정면으로 뒤집어 사람 간 상관이라는 새로운 분석 단위를 만들었다."
          description="R방법론에서 분석 단위는 변수이고, 사람은 점수의 출처일 뿐이다. Stephenson(1935a, 1935b, 1936)은 이 행렬을 뒤집어 사람을 변수로, 검사 항목을 모집단으로 삼는 '역전된 요인 기법(inverted factor technique)'을 제안했고, 이는 후일 Q방법론으로 발전했다."
          points={[
            "R의 데이터 행렬에서 단위는 변수이고, 사람은 표본이다.",
            "Stephenson(1935b)은 Nature 서신에서 이 방향을 뒤집을 것을 최초로 제안했다.",
            "Burt & Stephenson(1939)의 논쟁은 두 사람 간 상관 해석의 갈림길을 보여준다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-1-card-03-correlating-persons.webp"
          imageAlt="데이터 행렬이 뒤집히는 도식 — 왼쪽은 변수가 행이고 사람이 열인 R 행렬, 오른쪽은 사람이 행이고 검사가 열인 Q 행렬"
        >
          <p>
            R방법론에서 사람의 위치를 정확히 묘사하면 "변수 점수를 제공하는 표본"이다. 검사가 분석의 단위이고, 사람은 그 검사에 대한 점수의 출처일 뿐이다. 같은 7점을 매긴 두 사람이 같은 이유로 7점을 매겼는지, 항목들을 어떻게 비교했는지는 분석 모형 안에 들어오지 않는다. Spearman(1904)이 일반지능 g를 추출할 때나 Thurstone(1931, 1934)이 다중 요인을 도출할 때나 동일하다. 분석 대상은 변수들 사이의 관계이고, 사람은 그 관계를 만들어내는 익명의 점수 공급원이다.
          </p>
          <p>
            Stephenson은 이 비대칭을 정면으로 뒤집었다. 1935년 8월 24일 <em>Nature</em>에 실린 짧은 서신에서 그는 "다수의 개인에게서 측정한 다수의 변수를 상호상관하는 기존 방식에서 벗어나, 여러 측정물(에세이, 그림 등)에 대해 개인들 간의 상호상관을 구해 요인화하는" 새로운 절차를 학계에 처음 알렸다(Stephenson, 1935b). 이 짧은 서신은 분량에 비해 무게가 컸다. <em>n</em>개의 검사 대상을 <em>m</em>명의 개인이 평가하게 한 뒤 <em>m</em>명 사이의 상관을 도출하고 요인화한다는 단순한 발상의 전환이, 사람을 분석의 단위로 끌어올리는 결정적 한 걸음이었기 때문이다.
          </p>
          <p>
            같은 해 <em>Journal of Personality</em>에 발표한 <em>Correlating Persons Instead of Tests</em>(Stephenson, 1935a)는 이 발상을 실험으로 옮긴 첫 사례다. 화방에서 구한 60종의 단색 색상지를 20명에게 가장 좋아하는 색(10점)부터 가장 싫어하는 색(0점)까지 11점 척도로 평가하게 했다. 단순히 점수를 매기게 하는 대신, 각 점수대별 색상 개수를 미리 지정한 빈도 분포(예: 10점 1개, 5점 12개, 0점 1개)에 맞춰 강제로 할당하게 했다. 오늘날 우리가 Q-sort라고 부르는 강제 분류의 원형이 여기서 처음 등장한다. 실험 시간은 1시간, 계산은 2시간이 걸렸다. 그러나 결과는 두 개의 뚜렷한 유형 — 12명의 "예술적 취향" 집단과 8명의 "투박한 취향" 집단 — 이었고, 작은 표본으로도 사람 사이의 패턴을 명확히 분리해낼 수 있음을 증명했다.
          </p>
          <p>
            Stephenson(1936)은 이 방법을 <em>British Journal of Psychology</em>에 발표한 <em>The Inverted Factor Technique</em>에서 본격적으로 정식화했다. 그가 제시한 r기법과 Q기법의 대조는 단순하면서도 결정적이다. r기법은 "사람들의 집단"을 모집단으로 두고 검사 간 상관을 구한다. Q기법은 "검사나 항목들의 집단"을 모집단으로 두고 사람 간 상관을 구한다. 단순한 행렬 전치(transpose)처럼 보이지만, 그 안에는 중요한 해석상의 전환이 있다. Q기법에서 요인 포화도(factor saturation)가 높다는 것은 그 사람이 뛰어난 능력을 가졌다는 뜻이 아니라, 해당 유형에 "가장 전형적이고 평범하게 객관적"으로 부합한다는 뜻이다. Stephenson은 본문에서 도자기 50점을 15명이 분류한 실험, 31종 냄새를 14명이 평가한 실험, 30개 기분 항목을 18명이 자가 평가한 실험을 차례로 보고했다. 각 실험에서 사람들의 사전 배열된 빈도 분포 강제 분류 결과를 사람 간 상관으로 분석하자, 일관된 유형 구조가 도출되었다. 부부들 사이에서 특정한 상관이 관찰되거나, 크레치머의 순환기질·분열기질에 대응하는 군집이 분리되는 등의 결과는 R방법론으로는 직접 관찰하기 어려운 차원이었다.
          </p>
          <p>
            이 새로운 방법은 학계에서 곧바로 합의를 얻지 못했다. Burt & Stephenson(1939)이 <em>Psychometrika</em>에 공동으로 발표한 <em>Alternative Views on Correlations between Persons</em>는 두 사람이 5년간의 협력 끝에도 끝내 좁히지 못한 견해 차이를 그대로 드러낸 문헌이다. 두 사람 모두 사람 간 상관이 유효한 통계 기법이라는 점, 사람에 대한 일반 요인은 검사를 상관시켜서 얻을 수 없다는 점, 사람을 상관시킬 때 군집 요인이 발견된다는 점에는 동의했다. 그러나 Burt는 이 기법을 "데이터 행렬을 뒤집어 분석하는 실용적 대안"으로 보았고("상호성 원리(reciprocity principle)"), Stephenson은 이를 "기존 r기법과는 완전히 다른 목적과 심리학적 가설을 요구하는 독립적 방법론"으로 보았다. Stephenson은 본 문헌에서 Q기법의 궁극적 목표가 통계적 처리가 아니라 "살아있는 표본 그 자체인 모드 인격(modal person)으로서의 심리적 유형을 탐구하는 새로운 개인학(personalistics)의 창설"임을 천명했다.
          </p>
          <p>
            이 논쟁은 단순한 통계 기법의 차이가 아니다. 사람을 분석 단위로 끌어올린다는 것이 무엇을 의미하는지 — 단순한 행렬 전치인지, 아니면 패러다임의 전환인지 — 가 1930년대 후반의 학문적 쟁점이었고, 그 답을 끝까지 밀고 간 쪽이 Stephenson이다. 1-3강 카드 2에서 다룬 "Q방법론은 R방법론의 행과 열을 뒤집은 것일 뿐이다"라는 흔한 오해는 사실 Burt의 입장에 가까웠다. 그 오해를 해소하려면 Stephenson이 1939년에 이미 제시한 답변, 즉 "Q기법의 요인은 사람들의 전체적인 성격을 포괄하므로 r기법의 요인보다 더 넓고 다양하다"는 입장을 따라가야 한다.
          </p>
        </LessonCard>

        <LessonCard
          title="카드 4. 주관성을 다룰 수 없었던 R방법론"
          keyMessage="객관성을 추구한 R방법론은 주관성을 측정할 수 없는 잔여로 밀어냈고, 그 결과 사회과학이 답해야 할 큰 영역이 비워졌다."
          description="Watson(1913)의 행동주의 선언, Skinner(1938)의 기술적 행동주의, Stevens(1935)의 조작주의가 결합하면서 의식·내성·주관성은 학문의 바깥으로 밀려났다. 그러나 그 자리에 남겨진 빈자리는 여전히 메워져야 했다."
          points={[
            "Watson(1913)은 의식과 내성을 비과학으로 선언했다.",
            "Stevens(1935)는 모든 개념을 변별 반응으로 정의해야 한다고 주장했다.",
            "그 결과 사회과학에는 '관점을 다룰 도구가 없다'는 막다른 길이 생겼다.",
          ]}
          imageMaxWidth="500px"
          imageSide
          imageSrc="/images/2-1-card-04-subjectivity-excluded.webp"
          imageAlt="의식·내성·주관성이라는 단어가 행동주의·조작주의의 문 밖으로 밀려나는 도식 — 그 자리에 빈 의자만 남는 장면"
        >
          <p>
            1930년대의 풍경에서 가장 강력한 정리(整理) 작업은 "무엇이 과학이고 무엇이 비과학인가"를 가르는 일이었다. 그 경계선을 그은 가장 유명한 두 문서가 Watson(1913)과 Stevens(1935)다.
          </p>
          <p>
            Watson(1913)이 <em>Psychological Review</em>에 발표한 <em>Psychology as the Behaviorist Views It</em>은 단순한 논문이 아니라 선언문이다. 그는 기존 구조주의·기능주의 심리학이 "의식"과 "내성법"에 집착함으로써 화학이나 물리학 같은 자연과학으로 자리 잡는 데 실패했다고 비판했다. 그의 처방은 단호했다. 심리학의 이론적 목표를 "행동의 예측과 통제"로 재정의하고, 마음의 상태나 감각의 속성, 심상(imagery) 같은 주관적 의식 현상을 과학적 관찰의 대상으로 삼는 것을 전면 포기해야 한다는 것이었다. 더 극단적인 주장도 있었다. 그는 이른바 "고차원적 사고(higher thought)" 과정조차 내면적 정신 작용이 아니라 후두(larynx)에서 일어나는 발성 근육의 미세한 감각-운동 습관에 불과하다고 정의했다. 동물 실험의 결과는 인간 의식을 유추하기 위한 도구가 아니라 그 자체로 과학적 가치를 지니며, 다윈의 진화론 이후 생물학이 인간 중심주의에서 벗어난 것처럼 심리학도 "좁은 인간의 의식 중심"에서 벗어나야 한다는 것이 그의 결론이었다.
          </p>
          <p>
            Skinner(1938)는 <em>The Behavior of Organisms</em>에서 이 노선을 한층 더 밀고 나갔다. 그는 "정신주의적 허구(mentalistic fictions)"나 신경학적 환원주의에 의존하지 않고, 유기체의 행동 자체를 독립적인 과학적 데이터로 다루는 "기술적 행동주의(descriptive science of behavior)"를 제창했다. 그가 도입한 조작적 조건형성(Type R) 개념은 파블로프의 반응적 조건형성(Type S)과 구분되어, 유발 자극이 명확하지 않은 상태에서 방출(emit)되며 결과(강화)와 상관관계를 맺는 행동을 다루기 위한 틀이었다. 흥미로운 점은 그의 방법론이 "비통계적(non-statistical)" 접근을 명시적으로 표방했다는 것이다. 대규모 집단의 평균을 구하는 대신, 단일 유기체의 행동 변화 과정을 누적 기록기(cumulative record)로 시각화하여 재현 가능한 법칙을 도출했다. 그러나 이 단일 유기체 분석은 어디까지나 행동의 빈도와 강도에 대한 분석이지, 그 유기체가 환경을 어떻게 의미 있게 경험하는지에 대한 분석이 아니었다.
          </p>
          <p>
            Stevens(1935)는 같은 해에 발표한 <em>The Operational Definition of Psychological Concepts</em>에서 행동주의의 짝이 되는 철학적 정리 작업을 수행했다. 그의 주장은 단순했다. "개념이나 명제는 정상적인 인간이 실행할 수 있는 명확하고 구체적인 조작(concrete operations)을 나타낼 때만 경험적 의미를 갖는다." 이 원칙에 따라 그는 심리학의 핵심 개념들을 차례로 재정의했다. "존재(existence)"에 대한 논쟁은 사실의 문제가 아니라 정의와 언어 사용 관습의 문제일 뿐이다. "경험(experience)"은 모든 지식의 원천이 되는 궁극적 바탕이 아니라, 유기체의 복잡한 반응 역사에 기반한 하나의 구성 개념(construct)이다. "감각(sensation)"은 내밀한 의식의 사적인 측면이 아니라, 자극의 변화에 동반하여 겉으로 드러나는 유기체의 차별적 반응(differential reaction)이다. 그가 가는 곳마다 주관성은 객관적 관찰 가능성으로 환원되었다.
          </p>
          <p>
            Hardcastle(1995)의 후대 분석에 따르면, Stevens의 조작주의는 단순히 브리지먼이나 논리실증주의를 수입한 결과가 아니다. 하버드 아카이브에 보관된 1932년의 개인 노트와 1933년의 미출판 원고 <em>Materialism</em> 등을 보면, Stevens는 브리지먼이나 카르납을 본격적으로 접하기 이전에 이미 "동의(agreement)와 변별(discrimination)"을 중심으로 한 자신만의 자연주의적 방법론을 구상하고 있었다. 그에게 과학적 객관성이란 절대적 진리가 아니라 "연구자들 사이의 동의"였고, 인간의 변별 능력을 평가하는 심리학이 모든 과학적 합의의 기초를 제공하는 "예비 과학(propaedeutic science)"이 되어야 했다.
          </p>
          <p>
            Verhaegh(2021)는 같은 시기 하버드의 풍경을 더 넓게 펼쳐 보인다. 그가 <em>Journal of the History of the Behavioral Sciences</em>에서 보여주듯, 조작주의는 한 사람의 발명품이 아니라 Skinner·Boring·McGregor·Stevens 네 사람이 1930년대 초중반에 각자의 학문적 목적을 위해 변용한 도구였다. Skinner는 조작주의를 받아들여 "반사(reflex)"를 생리학이나 정신주의적 의미가 배제된 "자극과 반응의 상관관계"로 재정의함으로써 자신의 행동주의 기초를 세웠다. Boring은 이미 1923년에 "지능은 지능 검사가 측정하는 것"이라고 주장하고 1933년에 심신 동일론을 폈다. McGregor는 정신물리학을 "관찰자의 내면을 묻는 학문"이 아니라 "물리적 시스템의 변별 능력을 측정하는 자연과학"으로 탈바꿈시켰다. Verhaegh가 발견한 아카이브 자료에 따르면, Stevens의 1935년 조작주의 선언문은 지도교수 Boring이 12페이지 분량의 편집 코멘트로 깊이 개입한 공동의 결과물에 가깝다. 조작주의는 순수한 방법론이라기보다, 각 학파가 자기 입장을 정당화하기 위한 무기였다.
          </p>
          <p>
            이 모든 작업의 공동 효과는 무엇이었는가. "주관성=비과학"이라는 등식이었다. 측정 가능한 것만이 과학적이라면, 주관성·의미·관점은 학문의 바깥으로 밀려났다. 그러나 정치·교육·임상·정책 어디에서도 사람의 주관적 관점은 사라지지 않았다. 사라지지 않은 영역이 학문적으로는 비어버린 사정 — 이것이 1930년대 R방법론이 사회과학에 남긴 가장 깊은 막다른 길이다.
          </p>
          <p>
            Stephenson(1935b, 1936)이 사람 간 상관이라는 새로운 분석 단위를 제안한 것은 이 빈자리를 채우려는 시도이기도 했다. Stephenson은 행동주의나 조작주의를 거부한 것이 아니라, 그 안에 머물면서도 주관성을 다룰 수 있는 길을 찾으려 했다. Q-sort에서 응답자가 진술문을 비교하여 배열하는 행위는 명백히 관찰 가능한 조작이고, 그 결과로 나오는 수치는 통계적으로 다룰 수 있다. 동시에 그 배열은 응답자의 주관적 관점이 외부로 드러난 것이다. 1-3강 카드 4에서 다룬 "qualiquantology"라는 표현이 가능해진 이론적 토대는 사실 1930년대의 이 빈자리에서부터 출발한다.
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
          1930년대 사회과학이 부딪힌 네 갈래 막다른 길
        </h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--gray-700)" }}>
          <ul className="space-y-3 pl-4 list-disc">
            <li>
              <strong>변수 중심성의 막다른 길</strong> — Spearman(1904), Thurstone(1931, 1934)에서 발전한 요인분석은 변수가 분석의 단위가 되면서 사람의 관점을 단위에서 사라지게 했다.
            </li>
            <li>
              <strong>평균의 막다른 길</strong> — Molenaar(2004)와 Fisher et al.(2018)이 후일 수학적·실증적으로 보여주듯, 집단 평균은 비에르고딕한 인간 심리 과정에 일반화되지 않는다. 평균은 누구의 관점도 보여주지 않는다.
            </li>
            <li>
              <strong>상관의 막다른 길</strong> — R방법론의 변수 간 상관은 사람 간 관점 유사성을 직접 보여주지 못한다. Stephenson(1935a, 1935b, 1936)은 이 한계를 행렬 전치라는 단순한 발상으로 정면 돌파했지만, Burt & Stephenson(1939)의 논쟁이 보여주듯 그 의미를 학계가 받아들이는 데는 시간이 걸렸다.
            </li>
            <li>
              <strong>객관주의의 막다른 길</strong> — Watson(1913), Skinner(1938), Stevens(1935)가 결합한 행동주의·조작주의는 주관성을 비과학으로 밀어냈다. Hardcastle(1995)과 Verhaegh(2021)가 후일 재구성하듯, 그 결정은 순수한 방법론이 아니라 학파의 자기 정당화이기도 했다. 빈자리는 메워지지 않은 채 남았다.
            </li>
          </ul>
          <div className="mt-4">
            <Image
              src="/images/2-1-card-05-four-dead-ends.webp"
              alt="네 갈래 막다른 길 — 변수 중심성, 평균, 상관, 객관주의가 사람·관점·의미를 차단하는 도식"
              width={500}
              height={280}
              className="h-auto rounded-xl"
              style={{ maxWidth: "500px", width: "100%" }}
            />
          </div>
          <p>
            이 네 갈래 길의 끝에 Stephenson이 서 있었다. 그가 1935년 <em>Nature</em> 서신(Stephenson, 1935b)과 1936년 <em>The Inverted Factor Technique</em>(Stephenson, 1936)에서 던진 작은 발상의 전환은, 비어 있던 자리에 새 출발점을 놓는 일이었다.
          </p>
        </div>
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
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)", minWidth: "200px" }}>1930년대 R방법론의 전제</th>
              <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)", minWidth: "240px" }}>사회과학에 남긴 막다른 길</th>
              <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>대표 근거</th>
            </tr>
          </thead>
          <tbody>
            {summaryTable.map((row, i) => (
              <tr
                key={row.premise}
                style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
              >
                <td className="py-3 pr-4 font-medium" style={{ color: "var(--brand-deep)" }}>{row.premise}</td>
                <td className="py-3 pr-4 leading-relaxed">{row.deadEnd}</td>
                <td className="py-3 leading-relaxed text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-500)" }}>{row.sources}</td>
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
          1930년대 사회과학은 행동주의·요인분석·조작주의가 결합한 변수 중심 R방법론으로 통일되어 갔다. Spearman의 일반지능 g, Thurstone의 다중 요인분석, Watson과 Skinner의 행동주의, Stevens의 조작주의, 그리고 1935–1936년 심리측정학회 창립과 <em>Psychometrika</em> 창간이 한 시대의 풍경을 이뤘다. 그러나 그 통일성은 네 가지 막다른 길을 남겼다. 사람이 단위에서 사라졌고, 평균은 누구의 관점도 아니었으며, 상관은 사람 간 차이를 보여주지 못했고, 주관성은 비과학으로 밀려났다. Stephenson이 1935년 <em>Nature</em>에 보낸 짧은 서신과 1936년 <em>British Journal of Psychology</em>에 발표한 <em>The Inverted Factor Technique</em>은 이 풍경을 거부한 것이 아니라, 그 풍경의 빈자리에서 다른 출발점을 찾으려 한 시도였다.
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
          href="/lessons/1-3"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 1-3. Q방법론에 대한 흔한 오해와 한계
        </Link>
        <Link
          href="/lessons/2-2"
          className="text-sm text-right"
          style={{ color: "var(--brand-deep)" }}
        >
          2-2. Stephenson의 문제의식 →
        </Link>
      </div>
    </div>
  );
}
