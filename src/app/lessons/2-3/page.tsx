import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "2-3. 주관성의 과학적 탐구 | Q방법론 온라인 강의",
  description:
    "Q방법론은 사람의 주관성을 어떻게 과학적 자료로 바꾸는가. 조작적 주관성, 개인내 유의성, 심리적 유의성을 따라간다.",
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
    key: "Verhaegh2021",
    text: (
      <>
        Verhaegh, S. (2021). Psychological operationisms at Harvard: Skinner, Boring, and Stevens. <em>Journal of the History of the Behavioral Sciences, 57</em>(2), 194–212.
      </>
    ),
    doi: "https://doi.org/10.1002/jhbs.22071",
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
    concept: "주관성",
    en: "subjectivity",
    question: "사람은 자기 세계를 어떻게 의미 있게 조직하는가",
    answer: "단순 감정이 아니라 관점의 구조다",
  },
  {
    concept: "조작적 주관성",
    en: "operant subjectivity",
    question: "그 관점은 어떻게 연구 가능한가",
    answer: "Q-sort 같은 배열 행위 속에서 드러난다",
  },
  {
    concept: "개인내 유의성",
    en: "intraindividual significance",
    question: "무엇이 분석의 중심 단위인가",
    answer: "한 사람 내부의 상대적 배열이 먼저다",
  },
  {
    concept: "심리적 유의성",
    en: "psychological significance",
    question: "Q-sort는 무엇을 수량화하는가",
    answer: "개인이 느끼는 상대적 중요도의 질서다",
  },
  {
    concept: "조작적 정의",
    en: "operational definition",
    question: "과학은 개념을 어떻게 다루는가",
    answer: "Stevens의 길은 개념 정리, Q의 길은 관점 표현이다",
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
  title: string;
  keyMessage: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      {/* 섹션 레이블 */}
      <div
        className="text-xs font-medium mb-3"
        style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.4px" }}
      >
        {num < 10 ? `0${num}` : num}
      </div>

      {/* 제목 */}
      <h2
        className="font-semibold mb-5"
        style={{ fontSize: "22px", letterSpacing: "-0.3px", lineHeight: 1.3, color: "var(--black)" }}
      >
        {title}
      </h2>

      {/* 핵심문장 — 풀쿼트 스타일 */}
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

      {/* 이미지 */}
      <div className="mb-6 overflow-hidden" style={{ borderRadius: "12px" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={960}
          height={540}
          className="w-full h-auto block"
        />
      </div>

      {/* 3포인트 */}
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

      {/* 강의 본문 */}
      <div
        className="space-y-5"
        style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Lesson23Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의 목차", href: "/outline" },
          { label: "2부" },
          { label: "2-3. 주관성의 과학적 탐구" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-04-29"
        title="주관성의 과학적 탐구"
        description="Q방법론이 주관성을 단순한 내면 상태가 아니라, 사람이 자기 세계를 의미 있게 배열하는 관점의 구조로 보고 이를 어떻게 과학적으로 다루는지 설명한다."
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "17px", color: "var(--black)" }}
        >
          주관성은 왜 과학 밖으로 밀려났는가
        </h2>
        <div
          className="space-y-5"
          style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}
        >
          <p>
            20세기 초 심리학은 과학이 되기 위해 관찰 가능하고, 반복 가능하고, 공개적으로 검증 가능한 것만 붙잡으려 했다.
            그 과정에서 주관성은 사적인 영역으로 밀려났다.
          </p>
          <p>
            Stevens(1935)의 조작적 정의가 이 시대의 공기를 잘 보여준다.
            심리학 개념은 공개적이고 반복 가능한 조작과 변별 반응 속에서 정의되어야 한다는 것이다.
            Hardcastle(1995)와 Verhaegh(2021)는 이 흐름이 과학 공동체의 동의를 확보하려는 역사적 시도였다고 정리한다.
          </p>
          <p>
            하지만 Stephenson(1953)은 주관성을 포기하자고 하지 않았다.
            오히려 물었다. <strong>주관성이 정말 과학 밖의 것인가.</strong>
          </p>
          <p>
            Brown(1980)이 풀어 쓰듯, Q방법론에서 주관성은 신비한 내면이 아니라 &ldquo;그 사람 자신의 관점&rdquo;이다.
            Good(2010)이 Stephenson의 작업을 &ldquo;주관성의 과학(<em>science of subjectivity</em>)&rdquo;을 향한 탐색으로 읽는 이유도 여기에 있다.
          </p>
          <p>
            2-3강은 이 주관성을 세 겹으로 따라간다.
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>조작적 주관성</strong> — 관점이 실제 배열 행위 속에서 드러난다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>개인내 유의성</strong> — 핵심은 사람들 사이 평균이 아니라 한 사람 안의 상대적 질서다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>심리적 유의성</strong> — Q-sort가 수량화하는 것은 절대값이 아니라 의미의 우선순위다.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 카드 5개 */}
      <div className="space-y-8 mb-10">

        {/* 카드 1 */}
        <Card
          num={1}
          title="주관성은 의견의 잔여가 아니라 관점의 조직이다"
          keyMessage="Q방법론에서 주관성은 불안정한 의견 조각이 아니라, 사람이 세계를 의미 있게 조직하는 관점의 구조다."
          points={[
            "주관성은 '속마음' 자체보다 관점의 조직 방식에 가깝다.",
            "한 사람의 관점은 항목 간 상대적 배열 속에서 드러난다.",
            "Q방법론은 바로 그 조직 양상을 자료로 삼는다.",
          ]}
          imageSrc="/images/2-3-card-01-subjectivity-as-organization.webp"
          imageAlt="흩어진 진술문 카드들이 한 사람의 손에 의해 질서 있는 분포 패턴으로 재배열되는 장면"
        >
          <p>
            2-2강의 마지막 장면을 떠올려보자.
            Stephenson은 사람 대신 변수를 중심에 둔 기존 방법론의 한계를 보며,
            &ldquo;무엇을 상관시킬 것인가&rdquo;를 바꾸자고 제안했다.
          </p>
          <p>
            그런데 그다음 질문이 남는다.{" "}
            <strong>그렇게 바꾸어서 붙잡으려는 대상, 곧 주관성은 정확히 무엇인가.</strong>
          </p>
          <p>
            많은 학생들은 주관성을 곧장 감정, 속마음, 사적 경험으로 떠올린다.
            Q방법론은 이 첫 직관을 살짝 비튼다.
          </p>
          <p>
            Stephenson(1953)에게 주관성은 안쪽에 숨어 있는 무엇이 아니다.
            사람이 진술문을 읽고, 서로 비교하고, 어떤 것은 앞에 두고 어떤 것은 뒤로 미루며
            하나의 배열을 만드는 순간, 주관성은 이미 행동으로 나타난다.
          </p>
          <p>
            Brown(1980)은 더 직설적으로 풀어 쓴다.
            주관성은 &ldquo;그 사람 자신의 관점&rdquo;이다.
            머릿속의 안개가 아니라 세계를 어떻게 의미 있게 조직하는지의 방식이다.
          </p>
          <p>
            이 점이 중요한 이유는, Q방법론이 연구하려는 것이 낱개의 의견이 아니기 때문이다.
            같은 문장에 동의한 두 사람도 전혀 다른 이유로 그렇게 배열할 수 있다.
            그래서 Q방법론은 진술문 하나하나를 독립된 점으로 보지 않고,
            전체 Q-sort 안에서 그것들이 어떻게 서로 자리를 잡는지를 본다.
          </p>
          <p>
            Q방법론은 주관성을 주관성인 채로 다루되,
            그것이 표현되는 질서와 패턴을 분석 가능한 형태로 붙잡는다.
          </p>
        </Card>

        {/* 카드 2 */}
        <Card
          num={2}
          title="Brown의 조작적 주관성 — 관점은 배열 속에서 드러난다"
          keyMessage="조작적 주관성은 주관성이 실제 배열 행위 속에서 연구 가능한 형태로 드러난다는 뜻이다."
          points={[
            "조작적 주관성은 연구자의 척도 부과가 아니다.",
            "Q-sort는 참여자가 자기 관점을 표현하는 행위다.",
            "Q방법론은 주관성을 측정하는 것이 아니라 드러나게 한다.",
          ]}
          imageSrc="/images/2-3-card-02-operant-subjectivity.webp"
          imageAlt="한 사람이 진술문 묶음을 자기 기준으로 재배열하고, 배열 위에 관점의 윤곽이 드러나는 장면"
        >
          <p>
            Brown(1980)이 말하는 <em>operant subjectivity</em>(조작적 주관성)에서
            &ldquo;operant&rdquo;는 Stevens(1935)의 &ldquo;operational&rdquo;과 같은 말이 아니다.
            이 차이는 카드 5에서 다시 다루지만, 먼저 붙잡아야 할 것은
            Brown이 왜 굳이 이 표현을 쓰는가이다.
          </p>
          <p>
            그는 주관성이 연구자의 척도에 의해 외부에서 규정되는 것이 아니라,{" "}
            <strong>개인이 실제로 배열하고 선택하는 행위 속에서 스스로 모습을 드러낸다</strong>고 본다.
          </p>
          <p>
            Brown(1980)의 정리는 이렇다.
            주관성은 각 개인의 관점이며, Q기법은 그 관점을 Q-sort를 통해 조작적으로 표현하게 한다.
          </p>
          <p>
            설문조사에서는 연구자가 문항과 응답 범주를 미리 정해놓고, 참여자가 그 칸 안에서 답한다.
            Q-sort에서는 참여자가 모든 진술문을 서로 비교하면서
            자기 기준에 따라 하나의 전체 배열을 만든다.
            이 과정에서 관점은 낱개 응답이 아니라 전체 패턴으로 나타난다.
          </p>
          <p>
            같은 진술문 세트를 놓고도
            누군가는 가치의 문제를 먼저 보고,
            누군가는 실용성의 문제를 먼저 보고,
            또 누군가는 책임과 위험의 문제를 먼저 본다.
          </p>
          <p>
            조작적 주관성은 이런 우선순위 구조가 실제 배열 행위 속에서 드러나는 상태를 가리킨다.
            Q방법론의 핵심 자료는 &ldquo;표현된 관점&rdquo;이다.
          </p>
        </Card>

        {/* 카드 3 */}
        <Card
          num={3}
          title="개인내 유의성 — 변수보다 배열이 먼저다"
          keyMessage="Q방법론은 사람들 사이의 점수 차이보다, 한 사람 안에서 무엇이 어떻게 배열되는지를 먼저 본다."
          points={[
            "개인내 유의성은 개인간 평균 차이보다 한 사람 내부의 구조를 본다.",
            "같은 점수라도 배열 맥락이 다르면 의미가 달라진다.",
            "이 개념이 사람 중심 요인분석의 이론적 토대다.",
          ]}
          imageSrc="/images/2-3-card-03-intraindividual-significance.webp"
          imageAlt="두 사람이 같은 숫자 점수를 줬지만, 전체 분포 안에서 전혀 다른 위치에 놓인 진술문들이 대비되는 장면"
        >
          <p>
            조작적 주관성이 &ldquo;관점이 배열 속에서 드러난다&rdquo;는 말이라면,
            개인내 유의성(<em>intraindividual significance</em>)은{" "}
            <strong>&ldquo;그 배열의 의미는 어디에 있는가&rdquo;</strong>라는 질문에 대한 답이다.
          </p>
          <p>
            Brown(1980)은 Q방법론을 단순히 R방법론을 뒤집은 것이라고 설명하는 통념을 강하게 비판한다.
            Q가 정말 단순 전치라면, 똑같은 사고를 행과 열만 바꾸어 반복하는 셈이 된다.
            Brown이 보기에 Q의 진짜 토대는 행렬 전치가 아니라 개인내 유의성이다.
          </p>
          <p>
            쉽게 말하면 이렇다.
            중요한 것은 사람들 사이의 평균 점수 차이가 아니라,{" "}
            <strong>한 사람 안에서 진술문들이 어떤 상대적 질서를 이루는가</strong>이다.
          </p>
          <p>
            어떤 문장이 +2를 받았다고 하자.
            R방법론의 습관으로 보면 그 점수는 다른 사람들의 +2와 쉽게 비교된다.
            그러나 Q방법론에서는 그 +2가 어떤 문장들과 함께 올라왔는지,
            전체 배열 속에서 어떤 자리를 차지하는지가 더 중요하다.
          </p>
          <p>
            그래서 Q방법론은 사람을 상관시킨다.
            진술문 하나를 놓고 사람들을 비교하는 것이 아니라,
            각 사람이 만든 전체 배열끼리 얼마나 닮아 있는지를 본다.
            관점은 낱개 문항이 아니라 전체 질서 속에서만 보이기 때문이다.
          </p>
        </Card>

        {/* 카드 4 */}
        <Card
          num={4}
          title="심리적 유의성 — Q-sort는 무엇을 수량화하는가"
          keyMessage="Q-sort가 수량화하는 것은 단순 찬반 빈도가 아니라, 참여자가 느끼는 상대적 중요도와 의미의 질서다."
          points={[
            "심리적 유의성은 개인이 느끼는 상대적 중요도의 척도다.",
            "Q-sort는 항목들을 낱개가 아니라 전체 묶음 속에서 평가하게 한다.",
            "그래서 Q데이터는 총체적 관점 구조를 담는다.",
          ]}
          imageSrc="/images/2-3-card-04-psychological-significance.webp"
          imageAlt="진술문 카드들이 찬성/반대 두 더미가 아니라 미세한 우선순위 차이를 드러내는 계단형 배열로 놓인 장면"
        >
          <p>
            Watts &amp; Stenner(2012)는 이 질문에 답하기 위해
            심리적 유의성(<em>psychological significance</em>)이라는 개념을 전면에 놓는다.
          </p>
          <p>
            Q방법론에서 수량화되는 것은 키, 몸무게, 시험점수처럼 외부 척도로 측정되는 절대량이 아니다.{" "}
            <strong>참여자가 자기 기준에 따라 어떤 진술문을 더 중요하게 여기고,
            어떤 진술문을 덜 중요하게 여기며,
            무엇을 서로 비슷하거나 멀게 느끼는지의 상대적 질서</strong>다.
          </p>
          <p>
            그래서 Q-sort는 단순 찬반 체크가 아니다.
            참여자는 전체 묶음을 앞에 두고,
            &ldquo;무엇을 가장 강하게 동의하는가&rdquo;
            &ldquo;무엇을 가장 강하게 동의하지 않는가&rdquo;를
            계속 비교하면서 배열한다.
            한 문장의 위치는 다른 문장들과의 관계 속에서만 결정된다.
          </p>
          <p>
            강제준정규분포(<em>forced quasi-normal distribution</em>)는
            이런 상대적 우선순위를 드러내기 위한 장치다.
            참여자가 모든 항목을 비슷비슷하게 처리하지 못하게 하고,
            자기 관점의 중심과 주변을 드러내게 만든다.
          </p>
          <p>
            무엇을 가장 앞에 둘 것인가를 결정하는 순간,
            그 사람의 심리적 질서가 나타난다.
            Q-sort는 태도를 숫자로 바꾸는 기계가 아니라,{" "}
            <strong>의미의 우선순위를 분포로 바꾸는 장치</strong>다.
          </p>
        </Card>

        {/* 카드 5 */}
        <Card
          num={5}
          title="조작적 정의와 조작적 주관성 — 비슷해 보이지만 다른 두 길"
          keyMessage="Stevens의 조작적 정의는 개념의 모호성을 줄이려는 길이고, Q방법론의 조작적 주관성은 관점이 드러나는 행위를 자료화하려는 길이다."
          points={[
            "Stevens의 조작은 개념 정의의 문제다.",
            "Brown과 Stephenson의 조작은 관점 표현의 문제다.",
            "둘의 차이를 알아야 Q방법론의 철학을 정확히 이해할 수 있다.",
          ]}
          imageSrc="/images/2-3-card-05-operational-definition-vs-operant-subjectivity.webp"
          imageAlt="왼쪽에는 실험실 측정 장치와 변별 반응 도식, 오른쪽에는 Q-sort 분포 위 관점 패턴이 나란히 놓인 대비 장면"
        >
          <p>
            <em>Operational definition</em>과 <em>operant subjectivity</em>.
            둘 다 한국어로 옮기면 &ldquo;조작적&rdquo;이라는 말이 들어간다.
            많은 학생들이 두 개념을 같은 계열로 받아들이지만,
            실제로는 문제의식도, 대상도, 작업도 다르다.
          </p>
          <p>
            Stevens(1935)의 조작적 정의는
            심리학 개념을 공개적이고 반복 가능한 조작 속에서 정의하려는 전략이다.
            핵심 관심사는 <strong>&ldquo;이 개념을 과학적으로 어떻게 분명히 말할 것인가&rdquo;</strong>다.
          </p>
          <p>
            반면 Brown(1980)과 Stephenson(1953)의 조작적 주관성은
            개념의 정의 방식보다,{" "}
            <strong>관점이 실제로 어떻게 드러나고 표현되는가</strong>에 더 가깝다.
            Q방법론은 참여자가 진술문을 자기지시적으로 배열하는 행위를 통해
            주관성을 바깥으로 드러내게 한다.
          </p>
          <p>
            같은 &ldquo;조작&rdquo;이라는 말을 쓰지만,
            한쪽은 개념 명료화의 전략이고
            다른 한쪽은 관점 표현의 자료화 전략이다.
          </p>
          <p>
            Hardcastle(1995)는 Stevens의 operationism을
            과학 공동체 안에서 합의 가능한 심리학을 만들려는 시도로 읽는다.
            Verhaegh(2021)는 Harvard의 operationism 안에서도
            Skinner, Boring, Stevens의 강조점이 서로 달랐음을 보여준다.
          </p>
          <p>
            꼭 기억해야 할 문장은 하나다.
          </p>
          <p style={{ color: "var(--black)", fontWeight: 500 }}>
            Stevens의 질문은 &ldquo;이 개념을 공적으로 어떻게 정의할 것인가&rdquo;였고,
            Q방법론의 질문은 &ldquo;이 관점이 실제로 어떻게 나타나는가&rdquo;였다.
          </p>
          <p>
            Q방법론은 주관성을 지워서 과학을 얻는 대신,
            주관성이 표현되는 질서를 붙잡아서 과학의 대상으로 만든다.
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
          주관성의 과학이란 무엇인가
        </h2>
        <ul
          className="space-y-4 pl-1"
          style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}
        >
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>주관성은 사적 잔여가 아니라 관점의 조직이다</strong>
              <br />Q방법론은 사람이 세계를 어떻게 배열하고 우선순위화하는지를 본다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>조작적 주관성은 표현된 관점이다</strong>
              <br />주관성은 Q-sort 같은 실제 행위 속에서 연구 가능한 형태로 드러난다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>개인내 유의성이 분석 단위를 바꾼다</strong>
              <br />핵심은 사람들 사이의 평균이 아니라, 한 사람 안에서 항목들이 맺는 상대적 관계다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>심리적 유의성은 Q데이터의 핵심이다</strong>
              <br />Q-sort는 개인이 느끼는 상대적 중요도를 수량화한다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>조작적 정의와 조작적 주관성은 다르다</strong>
              <br />전자는 개념 정리의 전략이고, 후자는 관점 표현을 자료로 만드는 Q방법론의 전략이다.
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
          핵심 정리
        </h2>

        {/* 모바일: 카드형, 데스크탑: 테이블 */}
        <div className="hidden sm:block overflow-x-auto">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>개념</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>핵심 질문</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>2-3강에서의 설명</th>
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
                    <br />
                    <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>{row.en}</span>
                  </td>
                  <td className="py-3 pr-4 leading-relaxed">{row.question}</td>
                  <td className="py-3 leading-relaxed">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일: 카드형 */}
        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div
              key={row.concept}
              className="py-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="font-medium mb-1" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>
                {row.concept}
              </div>
              <div
                className="text-xs mb-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
              >
                {row.en}
              </div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }}>
                <div className="mb-1"><strong>질문:</strong> {row.question}</div>
                <div><strong>설명:</strong> {row.answer}</div>
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
            2-3강의 핵심은 Q방법론이 주관성을 포기하지 않는다는 점이다.
          </p>
          <p>
            Stephenson(1953)은 주관성을 구체적 행동으로 다룰 수 있다고 보았고,
            Brown(1980)은 이를 조작적 주관성으로 정리했다.
            개인내 유의성은 한 사람 안에서 무엇이 어떤 질서를 이루는지를 먼저 보게 만들고,
            Watts &amp; Stenner(2012)의 심리적 유의성은
            Q-sort가 바로 그 상대적 중요도의 배열을 수량화한다고 설명한다.
          </p>
          <p>
            Q방법론은 주관성을 객관성의 반대편에 두지 않는다.
            주관성이 표현되는 질서를 자료로 만든다.
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
          href="/lessons/2-2"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 2-2. Stephenson의 문제의식
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            2-4. Q와 R의 분리 (준비 중)
          </span>
        </div>
      </div>
    </div>
  );
}
