import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "1-3. Q방법론에 대한 흔한 오해와 한계 | Q방법론 온라인 강의",
  description:
    "Q방법론을 둘러싼 다섯 가지 오해를 정리하고, 진짜 강점과 한계가 어디에 있는지 분명히 한다.",
};

const references = [
  { key: "Brown1980", text: (<>Brown, S. R. (1980). <em>Political subjectivity</em>. Yale University Press.</>) },
  { key: "Brown1996", text: (<>Brown, S. R. (1996). Q methodology and qualitative research. <em>Qualitative Health Research, 6</em>(4), 561–567.</>), doi: "https://doi.org/10.1177/104973239600600408" },
  { key: "Churruca2021", text: (<>Churruca, K., Ludlow, K., Wu, W., et al. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>, Article 125.</>), doi: "https://doi.org/10.1186/s12874-021-01309-7" },
  { key: "Dieteren2023", text: (<>Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>, Article 100404.</>), doi: "https://doi.org/10.1016/j.ssaho.2023.100404" },
  { key: "Grimsrud2020", text: (<>Grimsrud, K., Graesse, M., &amp; Lindhjem, H. (2020). Using the generalised Q method in ecological economics. <em>Ecological Economics, 170</em>, 106588.</>), doi: "https://doi.org/10.1016/j.ecolecon.2019.106588" },
  { key: "MoreaGhanbar2024", text: (<>Morea, N., &amp; Ghanbar, H. (2024). Q methodology in applied linguistics: A systematic research synthesis. <em>System, 120</em>, Article 103194.</>), doi: "https://doi.org/10.1016/j.system.2023.103194" },
  { key: "RamloNewman2011", text: (<>Ramlo, S. E., &amp; Newman, I. (2011). Q methodology and its position in the mixed-methods continuum. <em>Operant Subjectivity, 34</em>(3), 172–191.</>), doi: "https://doi.org/10.22488/okstate.11.100594" },
  { key: "Stenner2011", text: (<>Stenner, P. (2011). Q methodology as qualiquantology. <em>Operant Subjectivity, 34</em>(3), 192–203.</>), doi: "https://doi.org/10.22488/okstate.11.100593" },
  { key: "Stephenson1953", text: (<>Stephenson, W. (1953). <em>The study of behavior: Q-technique and its methodology</em>. University of Chicago Press.</>) },
  { key: "Watts2012", text: (<>Watts, S., &amp; Stenner, P. (2012). <em>Doing Q methodological research</em>. SAGE.</>), doi: "https://doi.org/10.4135/9781446251911" },
  { key: "Zabala2018", text: (<>Zabala, A., Sandbrook, C., &amp; Mukherjee, N. (2018). When and how to use Q methodology to understand perspectives in conservation research. <em>Conservation Biology, 32</em>(5), 1185–1194.</>), doi: "https://doi.org/10.1111/cobi.13123" },
];

const summaryTable = [
  { concept: "표본 수", en: "sample size", question: "작은 표본은 약한 연구인가?", answer: "검정력 문제가 아니라 관점 포화의 문제다" },
  { concept: "행과 열", en: "transposed?", question: "R방법론을 뒤집은 것인가?", answer: "변수가 아닌 사람 간 상관에서 출발하는 별도 설계다" },
  { concept: "비율 추정", en: "proportion", question: "유형이 몇 퍼센트인지 말할 수 있나?", answer: "관점의 존재만 보여줄 수 있다" },
  { concept: "성격", en: "qual or quant?", question: "질적인가 양적인가?", answer: "양자가 통합된 qualiquantology다" },
  { concept: "일반화", en: "generalization", question: "결과를 일반화할 수 있나?", answer: "분석적·이론적 일반화로 가능하다" },
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

export default function Lesson13Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "1부" },
          { label: "1-3. Q방법론에 대한 흔한 오해와 한계" },
        ]}
        statusLabel="공개"
        versionLabel="v2.0 · 2026-04-29"
        title="Q방법론에 대한 흔한 오해와 한계"
        description="Q방법론을 둘러싼 다섯 가지 흔한 오해를 정리하고, 진짜 강점과 한계가 어디에 있는지 분명히 한다."
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2 className="font-semibold mb-4" style={{ fontSize: "17px", color: "var(--black)" }}>
          왜 오해를 먼저 정리해야 하는가
        </h2>
        <div className="space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
          <p>
            논문 심사나 토론에서 가장 자주 부딪히는 말은 이것이다.
            &ldquo;이거 그냥 작은 표본 설문조사 아닌가?&rdquo;
          </p>
          <p>
            오해를 정리하는 일은 Q방법론을 변호하기 위해서가 아니다.
            Q방법론을 <strong>언제 쓰면 안 되는지</strong>, 강점이 어디에서 빛나는지를 분명히 하기 위해서다.
          </p>
          <p>
            R방법론의 잣대로 평가하면 약점만 두드러진다.
            그러나 자기 강점이 빛나는 연구문제와 만나면 다른 방법으로 대체할 수 없는 결과를 준다.
          </p>
          <p>
            다섯 카드를 따라가면 Q방법론의 경계가 분명해진다.
          </p>
        </div>
      </section>

      <div className="space-y-8 mb-10">
        <Card
          num={1}
          title='오해 1. "표본 수가 작아서 약한 연구다"'
          keyMessage="Q방법론에서 P-set은 모집단을 추정하는 표본이 아니라, 관점 다양성을 드러내는 목적 표집이다."
          points={[
            "통계적 검정력의 문제가 아니다.",
            "기준은 관점이 충분히 포화(saturation)되었는가다.",
            "P-set은 보통 20–50명 안팎이 자주 쓰인다.",
          ]}
          imageSrc="/images/1-3-card-01-small-sample-misunderstanding.webp"
          imageAlt="작은 표본을 모집단 추정 잣대가 아닌 관점 포화 잣대로 평가하는 장면"
        >
          <p>
            &ldquo;표본이 너무 작다&rdquo;는 지적은 R방법론의 잣대를 그대로 가져온 것이다.
            R연구에서 작은 표본은 검정력 부족과 일반화 실패를 뜻한다.
          </p>
          <p>
            Q연구는 다르다.
            P-set은 모집단 추정용 확률 표본이 아니라
            <strong>의미 있게 다른 관점</strong>을 드러내기 위한 목적 표집이다.
          </p>
          <p>
            기준은 &ldquo;충분히 큰가&rdquo;가 아니라 &ldquo;충분히 다양한가&rdquo;다.
            새 참여자를 더해도 새 유형이 나오지 않으면 그 시점이 포화점이다.
          </p>
          <p>
            다만 작아도 된다는 면허로 받아들이면 안 된다.
            <strong>왜 이 사람들인가</strong>를 더 정밀하게 설명할 의무가 따라온다.
          </p>
        </Card>

        <Card
          num={2}
          title='오해 2. "설문조사를 뒤집은 것이다"'
          keyMessage="Q방법론은 R방법론의 전치(transpose)가 아니라, 출발 발상부터 다른 별도의 설계다."
          points={[
            "변수가 아닌 사람 간 상관을 계산한다.",
            "Q-sort는 응답이 아니라 비교 행위다.",
            "의미의 단위는 점수가 아니라 배열 전체다.",
          ]}
          imageSrc="/images/1-3-card-02-not-transposed-survey.webp"
          imageAlt="R방법론과 Q방법론이 같은 데이터에서 출발하지 않는다는 도식"
        >
          <p>
            &ldquo;행과 열을 바꾼 분석&rdquo;이라는 비유는 도입에는 도움이 되지만 핵심을 가린다.
          </p>
          <p>
            R방법론은 사람을 표본으로 두고 변수 사이의 관계를 분석한다.
            변수가 단위이고, 사람은 점수의 출처다.
          </p>
          <p>
            Q방법론은 한 사람의 Q-sort 전체를 하나의 단위로 본다.
            <strong>사람 간 상관</strong>을 계산해 비슷한 배열을 가진 사람들의 관점 유형을 찾는다.
          </p>
          <p>
            R의 응답은 한 문항의 독립적 점수다.
            Q의 응답은 여러 진술문을 동시에 비교한 상대적 위치다.
            전치 비유로는 이 차이를 설명할 수 없다.
          </p>
        </Card>

        <Card
          num={3}
          title='오해 3. "모집단 비율을 말할 수 있다"'
          keyMessage="Q방법론은 어떤 관점이 존재하는지 보여줄 뿐, 그 관점이 인구에서 몇 퍼센트인지는 말할 수 없다."
          points={[
            "결과는 유형 구조이지 비율이 아니다.",
            "비율을 말하려면 후속 R연구로 확장해야 한다.",
            "Generalised Q method가 한 대안이다.",
          ]}
          imageSrc="/images/1-3-card-03-no-population-ratio.webp"
          imageAlt="관점 유형의 존재와 모집단 비율 추정의 차이"
        >
          <p>
            발표 후 자주 받는 질문이 있다.
            &ldquo;이 유형이 전체 국민의 몇 퍼센트입니까?&rdquo;
          </p>
          <p>
            정직한 답은 <strong>&ldquo;Q방법론만으로는 알 수 없습니다&rdquo;</strong>다.
            P-set이 확률 표본이 아니기 때문이다.
          </p>
          <p>
            Grimsrud et al.(2020)은 그래서 generalised Q method를 제안한다.
            Q연구로 도출한 핵심 진술문을 대규모 설문에 결합해
            존재 여부와 분포를 함께 보는 방식이다.
          </p>
          <p>
            Dieteren et al.(2023)은 일부 Q연구가
            요인 적재자 비율을 모집단 비율처럼 보고하는 <strong>오용</strong>을 지적한다.
            이는 P-set 안 분포일 뿐, 인구 비율이 아니다.
          </p>
        </Card>

        <Card
          num={4}
          title='오해 4. "질적 연구인가, 양적 연구인가"'
          keyMessage="Q방법론은 양적 절차로 질적 의미를 분석하는 qualiquantology다. 어느 한쪽으로 환원되지 않는다."
          points={[
            "자료 수집은 질적·양적 자원을 모두 활용한다.",
            "분석은 사람 간 상관과 요인분석으로 통계적이다.",
            "해석은 진술문 배열과 참여자 설명에 근거한다.",
          ]}
          imageSrc="/images/1-3-card-04-qualiquantology.webp"
          imageAlt="질적 차원과 양적 차원이 Q방법론에서 통합되는 장면"
        >
          <p>
            &ldquo;질적인가 양적인가&rdquo;라는 질문 자체가 Q의 성격을 가린다.
          </p>
          <p>
            Brown(1996)은 Q방법론이 두 방법의 강점을 결합한다고 본다.
            Stenner(2011)는 이를 <em>qualiquantology</em>로 묶는다.
            단순한 혼합이 아니라 자료의 성격 자체가 처음부터 양쪽이라는 뜻이다.
          </p>
          <p>
            Ramlo &amp; Newman(2011)은 Q방법론을 혼합방법 연속선 안에 위치시킨다.
            Stenner(2011)는 더 강하게, 단순 혼합으로 읽으면 그 존재론을 놓친다고 본다.
          </p>
          <p>
            결론은 같다.
            Q방법론은 질적 자료에서 출발해 양적 절차로 분석하고,
            다시 질적으로 해석하는 <strong>한 흐름</strong>이다.
          </p>
        </Card>

        <Card
          num={5}
          title='오해 5. "결과를 일반화할 수 없다"'
          keyMessage="Q방법론의 일반화는 모집단 비율이 아니라 관점 유형의 구조와 논리를 다른 맥락에 적용하는 형태다."
          points={[
            "분석적 일반화(analytic generalization)에 가깝다.",
            "관점 유형의 논리가 일반화의 단위다.",
            "이론적 기여로서의 일반화로 이해해야 한다.",
          ]}
          imageSrc="/images/1-3-card-05-analytic-generalization.webp"
          imageAlt="사람 수의 일반화가 아닌 관점 유형 논리의 일반화"
        >
          <p>
            비율을 말할 수 없다면 무엇을 일반화할 수 있는가?
          </p>
          <p>
            답은 <strong>&ldquo;사람 수의 일반화&rdquo;가 아니라 &ldquo;관점 논리의 일반화&rdquo;</strong>다.
            사례연구의 분석적 일반화 개념과 가깝다.
          </p>
          <p>
            발견된 관점 유형이 다른 맥락에서도 비슷한 논리로 작동하는지를
            이론과 정책 설계 차원에서 검토하는 것이 일반화의 무대다.
          </p>
          <p>
            중요한 것은 단위 전환이다.
            &ldquo;몇 명이 이 유형인가&rdquo;가 아니라
            &ldquo;이 유형이 어떤 판단 구조를 보여주는가&rdquo;다.
          </p>
        </Card>
      </div>

      {/* 한계 */}
      <section className="mb-10 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          className="text-xs font-medium uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--brand)", letterSpacing: "0.6px" }}
        >
          한계
        </div>
        <h2
          className="font-semibold mb-5"
          style={{ fontSize: "19px", letterSpacing: "-0.2px", color: "var(--black)" }}
        >
          Q방법론 자체의 한계
        </h2>
        <p className="mb-5" style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--gray-700)" }}>
          오해와는 별도로, Q방법론에는 실제 한계가 있다. 이를 인정하는 것이 책임 있는 사용의 출발점이다.
        </p>
        <ul className="space-y-4" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--gray-700)" }}>
          <li>
            <strong>연구자 해석 의존성.</strong> 요인 추출 수, 회전 방식, 유형 명명에 연구자의 판단이 들어간다.
            Q-sort 직후 인터뷰, 구별·합의 진술문, 해석 근거를 함께 제시해야 한다.
          </li>
          <li>
            <strong>Q-set 구성의 주관성.</strong> Concourse 수집과 Q-set 추출 기준은 연구자가 정한다.
            단계별 보고가 필수다.
          </li>
          <li>
            <strong>횡단적 스냅샷.</strong> 특정 시점의 인식 구조를 보여주는 사진에 가깝다.
            Morea &amp; Ghanbar(2024)는 응용언어학 Q연구의 93%가 횡단 연구라고 보고한다.
          </li>
          <li>
            <strong>인과추론 불가.</strong> 어떤 변인이 어떤 결과를 일으키는지 검증하지 않는다.
          </li>
          <li>
            <strong>보고 투명성 부족.</strong> P-set 선정 근거, 회전 방식, 설명분산, factor array 보고가
            누락되는 관행이 반복된다고 검토 연구가 지적한다.
          </li>
        </ul>
        <div className="mt-6 overflow-hidden" style={{ borderRadius: "12px" }}>
          <Image
            src="/images/1-3-card-06-limitations-checklist.webp"
            alt="Q방법론 한계 체크리스트"
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
          오해와 정정 한눈에 보기
        </h2>

        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>쟁점</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>흔한 오해</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>정정된 이해</th>
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
                <div className="mb-1"><strong>오해:</strong> {row.question}</div>
                <div><strong>정정:</strong> {row.answer}</div>
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
            Q방법론에 대한 오해는 대개 R방법론의 잣대로 평가할 때 생긴다.
          </p>
          <p>
            Q방법론의 강점은 표본 크기가 아니라 관점 다양성의 포착,
            비율 추정이 아니라 유형 구조의 발견,
            인과 검증이 아니라 의미의 해석이다.
          </p>
          <p>
            동시에 Q방법론에는 연구자 해석 의존, Q-set 주관성, 횡단성, 인과추론 불가, 보고 투명성 같은
            <strong> 진짜 한계</strong>가 있다.
          </p>
          <p>
            강점과 한계를 함께 보는 일,
            그리고 자기 연구문제와 맞는지 구분하는 일이 1-3강의 핵심이다.
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
        <Link href="/lessons/1-2" className="text-sm" style={{ color: "var(--gray-400)" }}>
          ← 1-2. Q방법론의 핵심 개념과 필요한 이유
        </Link>
        <Link href="/lessons/2-1" className="text-sm text-right" style={{ color: "var(--brand-deep)" }}>
          2-1. 기존 사회과학 방법론의 한계 →
        </Link>
      </div>
    </div>
  );
}
