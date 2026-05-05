import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "1-2. Q방법론의 핵심 개념과 필요한 이유 | Q방법론 온라인 강의",
  description:
    "Q방법론은 주관성을 흐릿한 의견으로 두지 않고, 진술문 배열과 사람 중심 요인분석을 통해 관점의 구조로 드러낸다.",
};

const references = [
  { key: "Brown1980", text: (<>Brown, S. R. (1980). <em>Political subjectivity: Applications of Q methodology in political science</em>. Yale University Press.</>) },
  { key: "Churruca2021", text: (<>Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>, Article 125.</>), doi: "https://doi.org/10.1186/s12874-021-01309-7" },
  { key: "Dieteren2023", text: (<>Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>, Article 100404.</>), doi: "https://doi.org/10.1016/j.ssaho.2023.100404" },
  { key: "Ockwell2008", text: (<>Ockwell, D. G. (2008). &lsquo;Opening up&rsquo; policy to reflexive appraisal: A role for Q methodology? A case study of fire management in Cape York, Australia. <em>Policy Sciences, 41</em>(4), 263–292.</>), doi: "https://doi.org/10.1007/s11077-008-9066-y" },
  { key: "Stephenson1953", text: (<>Stephenson, W. (1953). <em>The study of behavior: Q-technique and its methodology</em>. University of Chicago Press.</>) },
  { key: "Watts2012", text: (<>Watts, S., &amp; Stenner, P. (2012). <em>Doing Q methodological research: Theory, method and interpretation</em>. SAGE.</>), doi: "https://doi.org/10.4135/9781446251911" },
  { key: "Zabala2018", text: (<>Zabala, A., Sandbrook, C., &amp; Mukherjee, N. (2018). When and how to use Q methodology to understand perspectives in conservation research. <em>Conservation Biology, 32</em>(5), 1185–1194.</>), doi: "https://doi.org/10.1111/cobi.13123" },
];

const summaryTable = [
  { concept: "주관성", en: "subjectivity", question: "Q방법론에서 주관성이란?", answer: "막연한 느낌이 아니라 자기 관점에서 세계를 이해·판단하는 방식이다" },
  { concept: "조작적 주관성", en: "operant subjectivity", question: "주관성은 어떻게 드러나는가?", answer: "Q-sort라는 실제 배열 행위 속에서 관찰 가능하게 드러난다" },
  { concept: "Concourse / Q-set", en: "concourse / Q-set", question: "진술문은 어디서 오는가?", answer: "주제에 대한 말의 전체 장에서 대표 진술문을 추려낸다" },
  { concept: "P-set / Q-sort", en: "P-set / Q-sort", question: "누가 어떻게 배열하는가?", answer: "관점 다양성을 가진 참여자가 진술문을 비교해 한 장의 분포로 배열한다" },
  { concept: "사람 중심 요인분석", en: "by-person factor analysis", question: "무엇을 상관시키는가?", answer: "변수가 아니라 사람들의 Q-sort 사이의 유사성을 비교한다" },
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
      <div className="mb-6 overflow-hidden -mx-5 w-[calc(100%+40px)] sm:mx-0 sm:w-[500px]" style={{ borderRadius: "12px" }}>
        <Image src={imageSrc} alt={imageAlt} width={960} height={540} className="w-full h-auto block" sizes="(max-width: 640px) 100vw, 500px" />
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

export default function Lesson12Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "1부" },
          { label: "1-2. Q방법론의 핵심 개념과 필요한 이유" },
        ]}
        statusLabel="공개"
        versionLabel="v2.0 · 2026-04-29"
        title="Q방법론의 핵심 개념과 필요한 이유"
        description="Q방법론은 주관성을 흐릿한 의견으로 두지 않고, 진술문 배열과 사람 중심 요인분석을 통해 관점의 구조로 드러낸다."
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          Q방법론을 이해하기 위한 여섯 단어
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            1-1강에서 Q방법론이 어떤 연구문제와 맞는지를 보았다면,
            1-2강에서는 그 안의 <strong>기본 언어</strong>를 익힌다.
          </p>
          <p>
            여섯 개념은 따로 떨어진 용어가 아니다.
            Q방법론은 주제에 관해 말해질 수 있는 넓은 세계(Concourse)에서 출발한다.
            연구자는 그 세계를 대표할 진술문 묶음(Q-set)을 만든다.
          </p>
          <p>
            참여자(P-set)는 그 진술문을 자기 관점에 따라 배열한다.
            이 배열이 Q-sort다.
            연구자는 여러 Q-sort를 비교해 비슷한 배열을 가진 사람들의 관점 유형을 찾는다.
          </p>
          <p>
            용어를 배우는 일은 단어 암기가 아니다.
            이 용어들은 <strong>&ldquo;왜 Q방법론이 단순한 작은 표본 설문이 아닌가&rdquo;</strong>를 설명하는 논리다.
          </p>
        </div>
      </section>

      {/* 카드 6개 */}
      <div className="space-y-8 mb-10">
        <Card
          num={1}
          title="주관성"
          keyMessage="Q방법론에서 주관성은 막연한 느낌이 아니라, 자기 관점에서 세계를 이해하고 판단하는 방식이다."
          points={[
            "주관성은 개인의 고유한 관점이다.",
            "주관성은 진술문 배열이라는 행동으로 관찰된다.",
            "외부 척도가 아니라 참여자 내부 관점이 중심이다.",
          ]}
          imageSrc="/images/1-2-card-01-subjectivity.webp"
          imageAlt="개인의 관점이 진술문 배열로 드러나는 장면"
        >
          <p>
            Brown(1980)은 주관성을 한 개인이 세계를 보고 의미를 부여하는 방식으로 설명한다.
            Stephenson(1953)도 주관성을 과학적으로 다룰 수 있는 <strong>구체적 행동</strong>으로 보았다.
          </p>
          <p>
            중요한 것은 연구자가 외부에서 점수를 매기는 것이 아니다.
            참여자가 스스로 의미를 구성하는 장면을 포착하는 것이다.
          </p>
          <p>
            일반 설문은 문항별 응답을 따로 계산한다.
            Q방법론은 여러 진술문을 동시에 놓고 비교하게 한다.
          </p>
          <p>
            그 결과는 응답값의 합이 아니라,
            그 사람이 무엇을 더 중요하게 보고 무엇을 덜 중요하게 보는지 보여주는 <strong>관점의 지도</strong>다.
          </p>
        </Card>

        <Card
          num={2}
          title="조작적 주관성"
          keyMessage="조작적 주관성은 참여자가 실제 배열한 Q-sort 속에서 드러나는 주관성이다."
          points={[
            "주관성은 말이 아니라 배열 행동으로 나타난다.",
            "Q-sort는 관점이 조작적으로 표현되는 절차다.",
            "점수의 의미는 전체 배열 속에서 사후적으로 해석된다.",
          ]}
          imageSrc="/images/1-2-card-02-operant-subjectivity.webp"
          imageAlt="조작적 주관성이 Q-sort로 나타나는 과정"
        >
          <p>
            <strong>조작적</strong>이라는 말은 연구자가 마음을 조작한다는 뜻이 아니다.
            참여자가 직접 진술문을 읽고 비교하고 배열하는 행위 속에서
            주관성이 연구 가능한 형태로 드러난다는 뜻이다.
          </p>
          <p>
            Brown(1980)은 Q-sort를 개인의 관점이 조작적으로 표현되는 절차로 본다.
            참여자는 단일 문항에 따로 답하는 대신 여러 문장을 비교하면서 자신의 의미 체계를 배열한다.
          </p>
          <p>
            어떤 문장이 +4에 놓였다는 사실은 그 문장 하나만의 점수가 아니다.
            <strong> 다른 문장들과의 상대적 관계</strong>가 의미를 만든다.
          </p>
          <p>
            Watts &amp; Stenner(2012)는 Q-sort를 총체적(holistic) 작업이라 부른다.
            낱개 평가가 아니라 전체 묶음 속의 상대적 중요도를 조정하는 일이다.
          </p>
        </Card>

        <Card
          num={3}
          title="Concourse와 Q-set"
          keyMessage="Concourse는 주제에 대해 말해질 수 있는 생각의 넓은 세계, Q-set은 그중 추려낸 대표 진술문이다."
          points={[
            "Concourse는 의견과 진술의 전체 장이다.",
            "Q-set은 그 장을 압축한 진술문 표본이다.",
            "Q-set 개발 과정은 투명하게 보고되어야 한다.",
          ]}
          imageSrc="/images/1-2-card-03-concourse-qset.webp"
          imageAlt="넓은 Concourse에서 Q-set을 추출하는 장면"
        >
          <p>
            Concourse는 특정 주제에 대해 사람들이 말하고 생각할 수 있는
            <strong> 진술의 전체 세계</strong>다.
            정책문서, 인터뷰, 뉴스, 전문가 의견, 기존 연구가 모두 후보가 된다.
          </p>
          <p>
            Q-set은 그 안에서 연구에 사용할 진술문을 추려 만든 표본이다.
            주제를 충분히 포괄하면서, 참여자가 비교할 수 있는 규모여야 한다.
          </p>
          <p>
            Dieteren et al.(2023)은 여러 분야 연구에서 30–50개 안팎이 자주 쓰인다고 정리한다.
            중요한 것은 숫자가 아니라 <strong>왜 그 진술문들을 골랐는가</strong>다.
          </p>
          <p>
            초보 연구자가 자주 놓치는 점이 있다.
            Q-set은 &ldquo;좋아 보이는 문장 몇 개를 모은 것&rdquo;이 아니다.
            출처, 제거 기준, 검토자, 파일럿 절차를 모두 보고해야 한다.
          </p>
        </Card>

        <Card
          num={4}
          title="P-set과 Q-sort"
          keyMessage="P-set은 관점을 제공할 참여자, Q-sort는 그 참여자가 만든 관점의 배열이다."
          points={[
            "P-set은 대표성보다 관점 다양성을 중시한다.",
            "Q-sort는 진술문을 비교해 배열한 결과다.",
            "같은 진술문도 사람마다 배열 논리가 다르다.",
          ]}
          imageSrc="/images/1-2-card-04-pset-qsort.webp"
          imageAlt="P-set 참여자가 Q-sort를 수행하는 장면"
        >
          <p>
            P-set은 단순히 많이 모으면 좋은 표본이 아니다.
            Q방법론의 목적은 비율 추정이 아니라 <strong>의미 있게 다른 관점</strong>을 찾는 것이기 때문이다.
          </p>
          <p>
            그래서 P-set은 무작위 표본보다 목적 표집(purposive sampling)에 가깝다.
            Churruca et al.(2021)와 Dieteren et al.(2023)도
            참여자 수보다 <strong>관점 다양성의 확보</strong>가 중요하다고 정리한다.
          </p>
          <p>
            Q-sort는 참여자가 진술문을 자신의 관점에 따라 배열한 결과다.
            보통 &ldquo;가장 동의함&rdquo;에서 &ldquo;가장 동의하지 않음&rdquo;까지의 분포 위에 놓는다.
          </p>
          <p>
            이때 -3에 놓인 문장이 반드시 절대적 혐오를 뜻하는 것은 아니다.
            다른 문장들에 비해 덜 동의한다는 <strong>상대적 의미</strong>다.
          </p>
        </Card>

        <Card
          num={5}
          title="사람 중심 요인분석"
          keyMessage="Q방법론의 요인분석은 문항이 아니라 사람들의 Q-sort를 비교해 관점 유형을 찾는다."
          points={[
            "Q방법론은 사람 간 상관을 계산한다.",
            "요인은 비슷한 관점을 공유하는 사람들의 군집이다.",
            "Factor array는 각 요인을 대표하는 이상적 Q-sort다.",
          ]}
          imageSrc="/images/1-2-card-05-factor-analysis-array.webp"
          imageAlt="Q-sort 간 상관에서 관점 유형이 나오는 장면"
        >
          <p>
            Q방법론을 이해하는 핵심 전환은 <strong>&ldquo;무엇을 상관시키는가&rdquo;</strong>다.
          </p>
          <p>
            R방법론은 사람을 표본으로 두고 변수 사이의 관계를 본다.
            Q방법론은 한 사람의 Q-sort 전체를 하나의 자료로 보고
            Q-sort들 사이의 유사성을 계산한다.
          </p>
          <p>
            Watts &amp; Stenner(2012)는 이를 사람 중심 요인분석(by-person factor analysis)이라 부른다.
            요인은 잠재 변수가 아니라 <strong>비슷하게 배열한 사람들의 관점 유형</strong>이다.
          </p>
          <p>
            Factor array는 각 요인을 대표하는 이상적 Q-sort다.
            구별 진술문, 합의 진술문과 함께 읽으며 유형을 서사적으로 해석한다.
          </p>
        </Card>

        <Card
          num={6}
          title="왜 Q방법론이 필요한가"
          keyMessage="Q방법론은 평균이 가려버리는 관점의 차이, 숨은 목소리, 가치 갈등의 구조를 드러내기 위해 필요하다."
          points={[
            "평균이 상반된 관점을 상쇄할 때",
            "소수 관점이나 숨은 견해를 찾아야 할 때",
            "정책 갈등의 쟁점과 합의 가능성을 함께 보고 싶을 때",
          ]}
          imageSrc="/images/1-2-card-06-why-q-methodology.webp"
          imageAlt="평균 뒤에 숨어 있던 관점들이 드러나는 장면"
        >
          <p>
            모든 연구문제가 평균과 비율로 잘 설명되는 것은 아니다.
            같은 결론도 이유가 다르고, 같은 반대도 논리가 다르다.
          </p>
          <p>
            Churruca et al.(2021)은 Q방법론이 복잡하고 논쟁적인 문제에서
            다양한 목소리를 드러내는 데 유용하다고 정리한다.
          </p>
          <p>
            Zabala et al.(2018)도 갈등이 교착된 상황,
            숨은 견해를 찾아야 하는 상황,
            정책 수용성 탐색에서 Q방법론이 특히 쓸모 있다고 본다.
          </p>
          <p>
            다만 Q방법론을 과장해서는 안 된다.
            모집단 비율 추정도, 인과효과 검증도 아니다.
            <strong> 설계와 보고의 투명성</strong>이 그 강점을 살린다.
          </p>
        </Card>
      </div>

      {/* 사례 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          사례
        </div>
        <h2
          className="font-semibold mb-5"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          화재관리 정책에서 Q방법론이 필요한 이유
        </h2>
        <div className="space-y-4" style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--gray-700)" }}>
          <p>
            Ockwell(2008)의 호주 Cape York 화재관리 연구는 Q방법론이 정책 연구에서 어떻게 작동하는지 보여준다.
          </p>
          <p>
            쟁점은 단순한 &ldquo;불을 쓸 것인가, 말 것인가&rdquo;가 아니었다.
            과학적 불확실성, 생물다양성, 지역 통제권, 원주민의 전통 토지관리, 정부 담론이 얽힌 문제였다.
          </p>
          <p>
            36개의 Q표본으로 정부 과학자, 원주민, 목축업자, 환경운동가, 관광객이 참여했다.
            결과는 <strong>네 개의 담론</strong>이었다 — 과학적 합리성, 기후변화 우려, 지역 통제권, 원주민 권리.
          </p>
          <p>
            겉으로는 모두 &ldquo;불 사용&rdquo;을 말해도, 그 이유에 따라 완전히 다른 정책 담론이 된다.
            Q방법론은 그 차이를 보여준다.
          </p>
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
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>개념</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>핵심 질문</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>1-2강에서의 답</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr key={row.concept} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}>
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

        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div key={row.concept} className="py-4" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="font-medium mb-1" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>{row.concept}</div>
              <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>{row.en}</div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }}>
                <div className="mb-1"><strong>질문:</strong> {row.question}</div>
                <div><strong>답:</strong> {row.answer}</div>
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
            Q방법론의 핵심은 사람들의 주관성을 진술문 배열로 드러내는 것이다.
          </p>
          <p>
            Concourse는 말의 전체 장, Q-set은 그중 추려낸 대표 진술문이다.
            P-set은 관점을 제공할 참여자, Q-sort는 그가 만든 관점의 배열이다.
          </p>
          <p>
            연구자는 여러 Q-sort를 비교해 비슷한 배열 패턴을 찾고,
            이를 <strong>공유된 관점 유형</strong>으로 해석한다.
          </p>
          <p>
            Q방법론은 작은 표본 설문이 아니다.
            평균과 비율이 숨길 수 있는 판단의 구조와 가치 우선순위를 드러내기 위한 별도의 설계다.
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

      {/* 이전/다음 강의 */}
      <div className="pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <Link href="/lessons/1-1" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 1-1. Q방법론의 정의와 연구문제
        </Link>
        <Link href="/lessons/1-3" className="text-sm text-right" style={{ color: "var(--brand-deep)" }}>
          1-3. Q방법론에 대한 흔한 오해와 한계 →
        </Link>
      </div>
    </div>
  );
}
