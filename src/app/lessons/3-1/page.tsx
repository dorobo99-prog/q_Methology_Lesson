import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "3-1. Stephenson 이후 Q방법론의 전개 | Q방법론 온라인 강의",
  description:
    "Stephenson의 주관성의 과학이 Brown, Q 커뮤니티, 현대 절차화, 응용 연구, 보고 기준을 거치며 어떻게 독자적 연구 전통으로 축적되었는지를 본다.",
};

const references = [
  {
    key: "Attems2020",
    text: (
      <>
        Attems, M.-S., Schlögl, M., Thaler, T., Rauter, M., &amp; Fuchs, S. (2020). Risk communication and adaptive behaviour in flood-prone areas of Austria: A Q-methodology study on opinions of affected homeowners. <em>PLOS ONE, 15</em>(5), e0233551.
      </>
    ),
    doi: "https://doi.org/10.1371/journal.pone.0233551",
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
    key: "Churruca2021",
    text: (
      <>
        Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., &amp; Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. <em>BMC Medical Research Methodology, 21</em>(1), 125.
      </>
    ),
    doi: "https://doi.org/10.1186/s12874-021-01309-7",
  },
  {
    key: "Dieteren2023",
    text: (
      <>
        Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., &amp; Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. <em>Social Sciences &amp; Humanities Open, 7</em>(1), 100404.
      </>
    ),
    doi: "https://doi.org/10.1016/j.ssaho.2023.100404",
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
    key: "Ma2024",
    text: (
      <>
        Ma, J. W., Leite, F., Lieberknecht, K., Stephens, K. K., &amp; Bixler, R. P. (2024). Using Q-methodology to discover disaster resilience perspectives from local residents. <em>International Journal of Disaster Risk Reduction, 104</em>, 104353.
      </>
    ),
    doi: "https://doi.org/10.1016/j.ijdrr.2024.104353",
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
    key: "Morea2024",
    text: (
      <>
        Morea, N., &amp; Ghanbar, H. (2024). Q methodology in applied linguistics: A systematic research synthesis. <em>System, 120</em>, 103194.
      </>
    ),
    doi: "https://doi.org/10.1016/j.system.2023.103194",
  },
  {
    key: "Ockwell2008",
    text: (
      <>
        Ockwell, D. G. (2008). &lsquo;Opening up&rsquo; policy to reflexive appraisal: A role for Q methodology? A case study of fire management in Cape York, Australia. <em>Policy Sciences, 41</em>(4), 263–292.
      </>
    ),
    doi: "https://doi.org/10.1007/s11077-008-9066-y",
  },
  {
    key: "Phelps2021",
    text: (
      <>
        Phelps, J., Zabala, A., Daeli, W., &amp; Carmenta, R. (2021). Experts and resource users split over solutions to peatland fires. <em>World Development, 146</em>, 105594.
      </>
    ),
    doi: "https://doi.org/10.1016/j.worlddev.2021.105594",
  },
  {
    key: "Ramlo2024",
    text: (
      <>
        Ramlo, S. (2024). Q methodologist views on the future of Q: A study of a research community. <em>Quality &amp; Quantity, 58</em>(5), 4897–4914.
      </>
    ),
    doi: "https://doi.org/10.1007/s11135-024-01884-z",
  },
  {
    key: "RamloNewman2011",
    text: (
      <>
        Ramlo, S. E., &amp; Newman, I. (2011). Q methodology and its position in the mixed-methods continuum. <em>Operant Subjectivity, 34</em>(3), 172–191.
      </>
    ),
    doi: "https://doi.org/10.22488/okstate.11.100594",
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
    key: "Stephenson1953",
    text: (
      <>
        Stephenson, W. (1953). <em>The study of behavior; Q-technique and its methodology</em>. University of Chicago Press.
      </>
    ),
  },
  {
    key: "VanOortmerssen2025",
    text: (
      <>
        Van Oortmerssen, L. A., Peeters, E. R., Kampermann, A., &amp; Van Montfoort, I. (2025). The Q method as research and intervention tool in organizations: A systematic literature review. <em>Journal of Organizational Effectiveness: People and Performance, 12</em>(5), 112–136.
      </>
    ),
    doi: "https://doi.org/10.1108/JOEPP-02-2024-0066",
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
    stage: "출발과 주변화",
    figures: "Stephenson(1953), Good(2010)",
    contribution: "주관성을 과학적으로 연구하려는 출발점, 주류 바깥에서의 축적 경로",
    next: "3-1 도입과 카드 1",
  },
  {
    stage: "이론적 정식화",
    figures: "Brown(1980)",
    contribution: "정치적 주관성·조작적 주관성·개인내 유의성으로 Q의 이론적 정체성 강화",
    next: "3-2. Brown과 정치적 주관성 연구",
  },
  {
    stage: "공동체 형성",
    figures: "Ramlo(2024), Ramlo & Newman(2011), Stenner(2011)",
    contribution: "전통 보존과 확장, 혼합방법론적 위치를 둘러싼 공동체 토론",
    next: "3-2와 3-3 사이 전승 맥락",
  },
  {
    stage: "현대 절차화",
    figures: "Watts & Stenner(2012), McKeown & Thomas(2013)",
    contribution: "concourse, Q-set, P-set, Q-sort, 분석, 해석을 실행 절차로 번역",
    next: "3-3. Watts & Stenner와 현대 Q 연구 절차",
  },
  {
    stage: "응용 분야 확장",
    figures: "Churruca et al.(2021), Ockwell(2008), Ma et al.(2024)",
    contribution: "보건·정책·재난 분야에서 관점 차이와 가치갈등을 다루는 도구로 사용",
    next: "9부 응용 강의",
  },
  {
    stage: "보고 기준 논의",
    figures: "Churruca et al.(2021), Dieteren et al.(2023)",
    contribution: "확산 이후 설계 투명성, 재현가능성, Q기법의 도구적 축소 방지를 제기",
    next: "3-4. 최근 보고 기준과 재현가능성 논의",
  },
];

const debatePoints = [
  "방법론이 독자적 연구 전통이 되려면 원전, 핵심 개념, 연구 공동체, 절차 교재, 응용 사례 중 무엇이 가장 중요한가.",
  "Q방법론은 왜 주류 양적 방법론처럼 빠르게 확산되지 않았는가. 그것이 약점이었는가, 아니면 고유한 문제의식을 보존하는 조건이었는가.",
  "Q의 확산은 정체성을 강화했는가, 아니면 \"Q-sort를 한 모든 연구\"로 의미를 희석시켰는가.",
  "Ramlo(2024)가 보여준 전통 보존과 확장은 충돌하는 두 길인가, 살아 있는 공동체의 두 호흡인가.",
];

const applicationIdeas = [
  "재난관리 — 주민·실무자·행정가가 같은 위험 상황을 어떤 우선순위로 배열하는지 본다.",
  "소방정책 — 예방, 대응, 형평성, 비용, 책임 같은 진술문이 참여자별로 어떤 판단 구조를 이루는지 탐색한다.",
  "위험인식 — 위험의 크기보다 사람들이 위험·책임·통제 가능성·공정성을 어떻게 상대 배열하는지 본다.",
  "조직문화 — 구성원을 미리 유형화하지 않는다. 특정 변화나 갈등 쟁점에 대한 Q-sort가 드러내는 공유 관점을 본다.",
  "교육정책 — 교사·학생·학부모가 같은 정책을 어떤 의미와 우선순위로 받아들이는지 비교한다.",
  "선행 Q연구 검토 — concourse, Q-set, P-set, 지시문, 요인추출, 회전, 해석이 충분히 보고되었는지 점검한다.",
  "본인 연구 적합성 — 연구문제가 관점 차이·가치갈등·정책판단·실천 복잡성을 포함하는지 자문한다.",
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

export default function Lesson31Page() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[
          { label: "강의목차", href: "/outline" },
          { label: "3부" },
          { label: "3-1. Stephenson 이후 Q방법론의 전개" },
        ]}
        statusLabel="공개"
        versionLabel="v1.0 · 2026-05-01"
        title="Stephenson 이후 Q방법론의 전개"
        description="Stephenson의 주관성의 과학이 Brown, Q 커뮤니티, 현대 절차화, 응용 연구, 보고 기준을 거치며 독자적 연구 전통으로 축적된 흐름을 그린다."
        imageSrc="/images/3-1-hero-after-stephenson-development.webp"
        imageAlt="Stephenson에서 출발해 Brown, Q 커뮤니티, 현대 방법론 교재, 응용 연구와 보고 기준으로 이어지는 Q방법론의 지식 계보도"
      />

      {/* 도입 */}
      <section className="mb-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "17px", color: "var(--black)" }}
        >
          독자적 방법론은 어떻게 연구 전통이 되는가
        </h2>
        <div
          className="space-y-5"
          style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}
        >
          <p>
            2-4강의 마지막 질문은 하나였다.
            &ldquo;Q는 정말 R을 뒤집은 것인가.&rdquo;
          </p>
          <p>
            답은 짧았다. Q방법론은 행렬 전치로 끝나지 않는다.
          </p>
          <p>
            한 사람은 진술문 세계를 자기 기준으로 배열한다.
            Q방법론은 그 배열들 사이의 유사성을 통해 공유된 관점의 구조를 드러낸다.
          </p>
          <p>
            그러나 독자적 방법론이라는 말은 곧바로 널리 받아들여졌다는 뜻이 아니다.
          </p>
          <p>
            다음 질문이 더 무겁다.
            기존 주류와 다른 언어를 가진 방법론은 어떻게 사라지지 않고 전승되는가.
          </p>
          <p>
            누가 그 언어를 보존하는가.
            누가 그것을 사회과학의 언어로 다시 설명하는가.
            누가 실제 연구자가 따라 할 수 있는 절차로 바꾸는가.
          </p>
          <p>
            Stephenson(1953)은 Q기법을 주관적 행동의 독자적 방법론으로 체계화했다.
            그러나 Good(2010)이 정리하듯, 그의 문제의식은 곧바로 주류 심리학의 중심에 자리 잡지 못했다.
          </p>
          <p>
            이 점을 실패담으로 읽으면 안 된다.
            중심부와 다른 길을 걸었다는 말은 사라졌다는 뜻이 아니다.
          </p>
          <p>
            다른 공동체와 다른 연구문제 속에서 고유한 언어를 유지했다는 뜻이다.
          </p>
          <p>3-1강은 그 전승의 지도를 그린다.</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>Brown</strong>의 이론적 재정식화</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>Q 커뮤니티</strong>의 축적</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>Watts &amp; Stenner / McKeown &amp; Thomas</strong>의 절차화</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>응용 분야</strong>의 확장</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">→</span>
              <span><strong>보고 기준</strong>의 등장</span>
            </li>
          </ul>
          <p>
            이 여섯 걸음을 따라가면 흩어진 주제들이 하나의 흐름으로 묶인다.
          </p>
        </div>
      </section>

      {/* 카드 6개 */}
      <div className="space-y-8 mb-10">

        {/* 카드 1 */}
        <Card
          num={1}
          title="Stephenson 이후의 질문 — Q는 어떻게 전승되었는가"
          keyMessage="Q방법론은 Stephenson의 아이디어에서 시작했지만, 곧장 주류가 된 것이 아니라 다른 경로에서 전승되었다."
          points={[
            "Q는 R의 단순 전치가 아니라 주관성 연구의 독자적 출발점이었다.",
            "Stephenson의 문제의식은 주류 방법론의 중심으로 곧장 들어가지 못했다.",
            "전승의 핵심은 통계 기법이 아니라 문제의식의 축적이었다.",
          ]}
          imageSrc="/images/3-1-card-01-how-q-survived.webp"
          imageAlt="Stephenson의 책과 초기 Q-sort가 작은 출발점으로 놓이고, 그 뒤로 좁지만 끊기지 않는 연구 경로가 이어지는 장면"
        >
          <p>
            2-4강에서 우리는 Q의 독립성을 Q와 R의 차이로 설명했다.
          </p>
          <p>
            Q는 같은 통계 언어를 일부 공유한다.
            그러나 자료 생성과 해석의 목적이 다르다.
          </p>
          <p>
            R은 변수 간 관계를 중심에 둔다.
            Q는 한 사람이 만든 전체 Q-sort와 그 배열들 사이의 유사성을 본다.
          </p>
          <p>
            이 독립성은 Stephenson(1953)에서 체계화된다.
          </p>
          <p>
            Stephenson은 Q를 통계적 장난으로 보지 않았다.
            그는 사람 간 상관, Q-sort, 구조화된 Q표본, 단일 사례를 하나의 방법론으로 묶었다.
          </p>
          <p>
            목표는 통계 기법이 아니었다.
            주관성을 연구 가능한 행동으로 만드는 일이었다.
          </p>
          <p>
            그러나 Good(2010)이 보여주듯, 이 문제의식은 곧바로 주류 심리학의 중심으로 들어가지 못했다.
          </p>
          <p>
            요인분석의 목적과 과학적 심리학의 방향을 두고 Stephenson은 주류와 긴장 관계에 있었다.
          </p>
          <p>
            대규모 표본과 변수 중심 분석의 권위가 강했던 장에서 Q는 곧장 표준이 되지 않았다.
          </p>
          <p>
            여기서 &ldquo;주변부&rdquo;라는 말을 약점으로만 읽으면 그림이 어그러진다.
          </p>
          <p>
            Q방법론은 사라진 아이디어가 아니다.
            중심부와 다른 경로에서 전승된 문제의식이다.
          </p>
          <p>
            연구 전통은 큰 교과서의 중심에서만 살아남지 않는다.
            특정 질문을 필요로 하는 연구자들이 용어와 사례를 반복해서 축적할 때도 살아남는다.
          </p>
          <p>
            그래서 3-1강의 첫 질문은 &ldquo;왜 즉시 주류가 되지 않았는가&rdquo;에서 멈추지 않는다.
          </p>
          <p>
            더 무거운 질문이 그 다음에 있다.
            <strong> &ldquo;그럼에도 무엇이 전승되었는가.&rdquo;</strong>
          </p>
          <p>
            전승된 것은 계산법이 아니다.
            사람이 자기 세계를 의미 있게 배열하는 방식을 과학적으로 다룰 수 있다는 문제의식이었다.
          </p>
        </Card>

        {/* 카드 2 */}
        <Card
          num={2}
          title="Brown — Q를 정치적 주관성의 방법론으로 세우다"
          keyMessage="Brown은 Q방법론을 정치적 주관성을 연구하는 사회과학 방법론으로 정식화하며 Q의 이론적 정체성을 강화했다."
          points={[
            "Brown(1980)은 Q를 정치학과 사회과학의 언어로 재정식화했다.",
            "그는 Q의 토대를 단순 전치가 아니라 조작적 주관성과 개인내 유의성에 두었다.",
            "Brown의 본격적 논의는 3-2강의 무대다.",
          ]}
          imageSrc="/images/3-1-card-02-brown-political-subjectivity.webp"
          imageAlt="정치적 의견과 정책 갈등 카드들이 Q-sort 배열로 정리되고, Brown의 Political Subjectivity가 그 배열의 이론적 축처럼 놓이는 장면"
        >
          <p>
            Stephenson 이후 Q의 전개에서 Brown(1980)은 빼놓을 수 없다.
          </p>
          <p>
            Brown은 Q방법론을 정치학과 사회과학의 언어로 설명한 핵심 연구자다.
          </p>
          <p>
            그의 <em>Political Subjectivity</em>는 Q를 분석 기법이 아니라
            정치적 주관성을 연구하는 방법론으로 제시한다.
          </p>
          <p>
            Brown에게 중요한 질문은 하나였다.
            사람들이 정치적 세계를 어떤 관점으로 배열하는가.
          </p>
          <p>
            정치적 주관성은 정책에 대한 찬반 점수로만 드러나지 않는다.
          </p>
          <p>
            사람들은 가치, 이해관계, 감정, 판단 기준을 비교하며 자신만의 질서를 만든다.
          </p>
          <p>
            Q방법론은 그 질서를 Q-sort라는 조작을 통해 관찰 가능한 형태로 끌어낸다.
          </p>
          <p>
            여기서 조작적 주관성이 결정적이다.
          </p>
          <p>
            Brown은 주관성을 연구자의 외부 분류틀로 미리 정의하지 않는다.
            참여자가 진술문을 배열하는 행위 속에서 드러나는 것으로 본다.
          </p>
          <p>
            따라서 Q의 자료는 응답값의 합이 아니다.{" "}
            <strong>한 사람이 자기 기준으로 구성한 전체 배열</strong>이다.
          </p>
          <p>
            이 자리가 곧바로 개인내 유의성으로 이어진다.
          </p>
          <p>
            다만 3-1강에서 Brown을 모두 설명하지는 않는다.
          </p>
          <p>
            Brown의 정치적 주관성, 조작적 주관성, 개인내 유의성은 3-2강의 본 무대다.
          </p>
          <p>
            여기서는 Brown의 자리만 잡아두면 충분하다.
            Brown은 Stephenson 이후 Q의 이론적 정체성을 사회과학의 언어로 강화한 인물이다.
          </p>
          <p>
            Brown은 Q를 &ldquo;완성한&rdquo; 사람이 아니다.
            Q방법론이 무엇을 연구하는지 사회과학자들이 이해할 수 있도록 다시 짠 사람이다.
          </p>
          <p>
            이 차이가 중요하다.
            Q는 한 사람의 원전에서 끝나지 않았다.
          </p>
          <p>
            후속 연구자의 이론적 해석과 적용을 통해 더 넓은 학문 언어를 얻었다.
          </p>
        </Card>

        {/* 카드 3 */}
        <Card
          num={3}
          title="Q 커뮤니티 — 방법론은 공동체 속에서 축적된다"
          keyMessage="Q방법론은 한 사람의 아이디어로 머무르지 않고, 연구자 공동체의 반복적 토론과 적용 사례 속에서 방법론적 언어를 축적했다."
          points={[
            "연구 전통은 원전만으로 유지되지 않는다.",
            "Q 커뮤니티는 조작적 주관성, 사람 간 상관, 요인 해석의 언어를 반복적으로 다듬었다.",
            "현대 Q 커뮤니티 안에는 전통 보존과 실용적 확장이라는 생산적 긴장이 살아 있다.",
          ]}
          imageSrc="/images/3-1-card-03-q-community.webp"
          imageAlt="여러 연구자가 Q-sort 카드, 학술지, 세미나 노트, 온라인 네트워크를 중심으로 연결되어 있는 장면"
        >
          <p>연구 전통은 원전만으로 유지되지 않는다.</p>
          <p>
            한 권의 책이 중요해도, 그 언어를 읽고 반복하고 비판하고 적용하는 공동체가 없으면 방법론은 오래 가지 못한다.
          </p>
          <p>Q방법론도 마찬가지였다.</p>
          <p>
            Stephenson의 문제의식은 Brown 같은 이론가만으로 전승되지 않았다.
            Q를 쓰고 가르치고 논쟁한 연구자 공동체 속에서 축적되었다.
          </p>
          <p>
            이 공동체를 설명할 때 ISSSS, <em>Operant Subjectivity</em>, QMethod.org 같은 이름이 등장한다.
          </p>
          <p>설립 연도를 외울 필요는 없다.</p>
          <p>
            중요한 것은 Q방법론이 주류 교과서 바깥에서도 지속적인 학술 장을 만들었다는 점이다.
          </p>
          <p>
            QMethod.org는 Q방법론을 단순 기법이 아니라 철학과 인식론을 포함하는 방법론으로 소개한다.
          </p>
          <p>
            학회, 저널, 컨퍼런스, 자료를 한자리에 연결하는 창구 역할을 한다.
          </p>
          <p>
            Ramlo(2024)는 이 공동체 자체를 Q방법론으로 연구했다.
          </p>
          <p>
            이 연구는 Q방법론 연구자 47명을 대상으로 Q의 미래 관점을 분석했다.
            그 결과 두 관점이 도출되었다.
          </p>
          <p>
            하나는 <strong>전통과 커뮤니티</strong> 관점이다.
            Stephenson의 철학적 유산과 공동체의 연대를 중시한다.
          </p>
          <p>
            다른 하나는 <strong>비정통성과 Q의 확장</strong> 관점이다.
            새로운 소프트웨어, 다른 방법론과의 결합, 실용적 확장에 더 열려 있다.
          </p>
          <p>
            이 차이를 분열로만 읽을 필요는 없다.
            오히려 연구 전통이 살아 있다는 신호다.
          </p>
          <p>
            한 가지 정통성만 반복하는 공동체는 안정적으로 보인다.
            그러나 동시에 닫힌 전통이 될 위험도 함께 자란다.
          </p>
          <p>
            전통 보존과 실용적 확장 사이의 긴장은 Q가 자기 깊이와 응용 가능성을 계속 조정한다는 뜻이다.
          </p>
          <p>
            Ramlo &amp; Newman(2011)과 Stenner(2011)의 논쟁도 같은 자리에 있다.
          </p>
          <p>
            Ramlo &amp; Newman은 Q를 질-양 연속선 위의 혼합방법론으로 설명한다.
          </p>
          <p>
            Stenner는 그 설명이 Q의 존재론적 깊이를 담지 못한다고 본다.
            그는 Q를 더 급진적인 질-양적 방법론(<em>qualiquantology</em>)으로 이해해야 한다고 주장한다.
          </p>
          <p>
            3-1강에서 이 철학 논쟁을 깊게 풀지는 않는다.
            Q 공동체 안에 정체성을 둘러싼 토론이 계속되어 왔다는 점만 확인하면 된다.
          </p>
        </Card>

        {/* 카드 4 */}
        <Card
          num={4}
          title="절차화 — 철학이 연구 절차로 번역되다"
          keyMessage="Q방법론이 널리 쓰이려면 철학만으로는 부족했다. 현대 연구자가 따라 할 수 있는 절차 언어가 필요했다."
          points={[
            "철학은 실제 연구 절차로 번역되어야 했다.",
            "현대 교재들은 Q-sort와 분석·해석 과정을 단계별로 설명했다.",
            "3-3강과 5부 이후 강의는 이 절차를 더 자세히 다룬다.",
          ]}
          imageSrc="/images/3-1-card-04-proceduralization.webp"
          imageAlt="추상적 이론 구름이 concourse · Q-set · P-set · Q-sort · analysis · interpretation 단계 카드로 정리되는 장면"
        >
          <p>방법론은 철학만으로 움직이지 않는다.</p>
          <p>
            Q방법론이 &ldquo;주관성을 과학적으로 연구한다&rdquo;는 문제의식을 갖고 있어도,
            연구자가 무엇을 해야 하는지 알 수 없으면 강의실과 현장에서 쓰일 수 없다.
          </p>
          <p>
            그래서 Stephenson과 Brown의 문제의식은 절차 언어로 번역되어야 했다.
          </p>
          <p>
            Watts &amp; Stenner(2012)는 이 점에서 결정적인 교재다.
          </p>
          <p>이들은 Q의 이론적 배경만 설명하지 않는다.</p>
          <p>
            Q-sort 자료 수집, 요인분석, PQMethod 사용, 요인 해석까지
            연구자가 따라갈 수 있는 방식으로 안내한다.
          </p>
          <p>
            특히 Q방법론이 R 행렬을 단순히 전치하는 일이 아니라는 점을 분명히 한다.
          </p>
          <p>
            Q는 참여자가 진술문을 심리적 유의성에 따라 배열하는 새로운 자료 생성 과정을 요구한다.
          </p>
          <p>
            McKeown &amp; Thomas(2013)도 비슷한 역할을 한다.
          </p>
          <p>
            이들은 의사소통의 장(<em>concourse</em>), Q표본(<em>Q-set</em>),
            P표본(<em>P-set</em>), Q분류(<em>Q-sort</em>),
            통계 분석, 요인 점수와 해석을 하나의 절차로 설명한다.
          </p>
          <p>
            동시에 Q가 자기 참조와 조작적 주관성을 전제로 하는 독립적 방법론이라는 점을 강조한다.
          </p>
          <p>
            이 절차화는 Q의 철학을 약화시키는 과정이 아니다.
            오히려 철학이 연구 설계로 내려오는 과정이다.
          </p>
          <p>어떤 진술문 세계를 분류할 것인가.</p>
          <p>누구를 P표본으로 초대할 것인가.</p>
          <p>어떤 지시 조건을 줄 것인가.</p>
          <p>
            이 모든 선택이 주관성을 어떻게 볼 것인가라는 철학적 질문과 연결된다.
          </p>
          <p>다만 3-1강에서 절차를 길게 가르치지 않는다.</p>
          <p>
            Q방법론이 현대 연구자가 수행할 수 있는 절차 언어를 얻었다는 점만 잡아두면 충분하다.
          </p>
          <p>
            3-3강은 Watts &amp; Stenner를 중심으로 현대 절차를 깊게 다룬다.
            5부 이후 강의는 Q-set, P-set, Q-sort, 분석과 해석의 세부 절차로 들어간다.
          </p>
        </Card>

        {/* 카드 5 */}
        <Card
          num={5}
          title="응용 확장 — 관점 차이가 중요한 현장으로 이동하다"
          keyMessage="Q방법론은 정치학에 머무르지 않고, 관점 차이와 가치갈등이 중요한 보건·환경·재난·교육·조직 연구로 확장되었다."
          points={[
            "보건·의료에서는 환자·전문가·조직 구성원의 관점 차이를 이해하는 데 쓰인다.",
            "환경·정책·재난에서는 이해관계자별 우선순위와 가치갈등을 드러내는 데 쓰인다.",
            "교육·조직 분야 최신 리뷰는 확산과 함께 보고 투명성 문제를 함께 보여준다.",
          ]}
          imageSrc="/images/3-1-card-05-applied-expansion.webp"
          imageAlt="정책·보건·환경·재난·교육·조직 아이콘이 하나의 Q방법론 허브로 연결되는 장면"
        >
          <p>Q방법론의 확산을 단순한 유행으로 설명하면 부족하다.</p>
          <p>
            더 무거운 질문은 따로 있다.
            <strong> 어떤 종류의 연구문제가 Q방법론을 필요로 하는가.</strong>
          </p>
          <p>
            Q는 평균, 비율, 변수 간 관계보다 관점의 구조가 중요한 문제에서 힘을 갖는다.
          </p>
          <p>
            여러 이해관계자가 같은 사안을 다른 우선순위로 바라볼 때, Q는 그 차이를 체계적으로 드러낸다.
          </p>
          <p>보건·의료 분야가 좋은 예다.</p>
          <p>
            Churruca et al.(2021)은 의료 분야 Q연구 289편을 검토했다.
          </p>
          <p>
            그 결과 Q방법론이 복잡하고 논쟁적이며 윤리적으로 민감한 의료 문제에 적합하다고 평가했다.
          </p>
          <p>
            환자, 보호자, 의료 제공자, 조직 구성원은 같은 의료 문제를 다르게 경험한다.
          </p>
          <p>
            Q방법론은 이 차이를 만족도 점수로 환원하지 않는다.
            공유된 관점의 유형으로 정리한다.
          </p>
          <p>
            환경·정책·화재 거버넌스에서도 Q의 필요성은 분명하다.
          </p>
          <p>
            Ockwell(2008)은 호주 Cape York 화재관리 사례에서 Q를 정책의 반성적 평가 도구로 사용했다.
          </p>
          <p>
            Phelps et al.(2021)은 인도네시아 이탄지 화재 해법을 둘러싼 전문가와 자원 이용자의 정책 선호 차이를 분석했다.
          </p>
          <p>
            이런 연구에서 Q는 단순한 의견 수집을 넘어선다.
            정책이 어떤 담론을 반영하고 어떤 관점을 배제하는지 보이게 한다.
          </p>
          <p>재난·위험 분야도 마찬가지다.</p>
          <p>
            Attems et al.(2020)은 오스트리아 홍수 위험 지역 주민의 위험 커뮤니케이션과 적응행동을 Q로 분석했다.
          </p>
          <p>
            Ma et al.(2024)은 지역 주민이 재난 회복탄력성 지표를 어떻게 우선순위화하는지 보여주었다.
          </p>
          <p>이 연구들의 메시지는 같다.</p>
          <p>
            중요한 것은 위험의 크기 자체가 아니다.
            사람들이 위험·책임·보호·형평성·준비를 어떤 질서로 배열하는지가 핵심 자료다.
          </p>
          <p>교육·조직 분야는 보조 사례로 짧게 본다.</p>
          <p>
            Morea &amp; Ghanbar(2024)는 응용언어학 분야 Q연구가 2019년 이후 빠르게 증가했음을 보여준다.
            교사와 학습자의 인지·감정, 언어학습 동기 같은 주제에서 활용되었다.
          </p>
          <p>
            Van Oortmerssen et al.(2025)는 조직행동 분야 Q연구 47편을 검토했다.
          </p>
          <p>
            Q가 학계와 실무, 정량과 정성, 다양한 이해관계자를 연결하는 연구·개입 도구가 될 수 있다고 정리한다.
          </p>
          <p>수강생은 여기서 한 가지 기준을 가져가면 된다.</p>
          <p>Q방법론은 모든 주제에 자동으로 맞는 방법이 아니다.</p>
          <p>
            그러나 연구문제가 관점 차이, 가치갈등, 정책판단, 실천 현장의 복잡성을 포함한다면 Q를 진지하게 고려할 수 있다.
          </p>
          <p>질문을 다시 만들어 보자.</p>
          <p style={{ color: "var(--black)", fontWeight: 500 }}>
            &ldquo;Q를 써도 되는가&rdquo;가 아니라,
            &ldquo;이 연구에서 사람들이 세계를 다르게 배열하는 방식이 핵심 자료인가&rdquo;다.
          </p>
        </Card>

        {/* 카드 6 */}
        <Card
          num={6}
          title="확산 이후의 과제 — 좋은 Q연구는 투명하게 보고된다"
          keyMessage="Q방법론이 넓게 퍼질수록, 연구자가 무엇을 어떻게 했는지 투명하게 보고하는 일이 방법론의 품질을 좌우한다."
          points={[
            "확산은 성숙의 신호이지만, 보고 품질 문제도 함께 드러낸다.",
            "좋은 Q연구는 관점 해석만이 아니라 설계와 분석 과정을 투명하게 보여준다.",
            "3-4강은 최근 보고 기준과 재현가능성 논의를 깊게 다룬다.",
          ]}
          imageSrc="/images/3-1-card-06-reporting-standards.webp"
          imageAlt="여러 Q연구 논문이 쌓여 있고, 그 옆에 체크리스트와 보고 기준표가 놓이는 장면"
        >
          <p>방법론이 확산되면 두 가지 일이 동시에 일어난다.</p>
          <p>
            하나는 반가운 일이다.
            더 많은 연구자가 그 방법론을 알고 새로운 질문을 던진다.
          </p>
          <p>
            다른 하나는 조심해야 할 일이다.
            방법론이 빠르게 퍼질수록, 충분히 이해하지 않은 채 일부 절차만 빌려 쓰는 연구도 늘어난다.
          </p>
          <p>Q방법론에서도 이 문제가 나타났다.</p>
          <p>
            Churruca et al.(2021)은 의료 분야 Q연구를 검토하면서
            Q-set 개발, Q-sort 시행, 요인추출과 회전, 요인 해석의 보고 누락을 지적했다.
          </p>
          <p>이들은 13개 항목의 체크리스트를 제시했다.</p>
          <p>
            Dieteren et al.(2023)은 전 학문 분야 613편을 검토했다.
          </p>
          <p>
            연구 설계와 자료 수집, 분석, 결과 제시에서 연구자가 무엇을 선택했는지 충분히 보고하지 않는 문제가 반복된다고 정리했다.
          </p>
          <p>이 문제는 형식의 문제가 아니다.</p>
          <p>Q방법론에서 독자는 다음을 알아야 한다.</p>
          <ul className="space-y-2 pl-1" style={{ fontSize: "15px" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
              <span>왜 그 concourse에서 그 Q-set이 나왔는지.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
              <span>왜 그 참여자들이 선택되었는지.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
              <span>어떤 Q-sort 지시 조건이 사용되었는지.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
              <span>어떤 추출과 회전 방법이 쓰였는지.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
              <span>요인을 어떻게 해석했는지.</span>
            </li>
          </ul>
          <p>
            이런 정보가 없으면 결과가 흥미로워 보여도 평가가 어려워진다.
            관점 유형이 어떻게 만들어졌는지 보이지 않기 때문이다.
          </p>
          <p>
            Morea &amp; Ghanbar(2024)와 Van Oortmerssen et al.(2025)는 이 문제가 특정 분야에 국한되지 않음을 보여준다.
          </p>
          <p>
            응용언어학에서는 요인추출 기준, 회전 기준, 혼합된 Q-sort 처리 방식 같은 분석 정보가 누락되는 사례가 반복되었다.
          </p>
          <p>
            조직행동에서는 일부 연구가 주관성 탐구가 아닌 가설 검증이나 기존 측정 도구의 변형처럼 Q기법을 사용하는 문제도 나타났다.
          </p>
          <p>3-1강에서 체크리스트를 자세히 외우지는 않는다.</p>
          <p>그 작업은 3-4강에서 한다.</p>
          <p>여기서는 한 가지 원칙만 기억하면 된다.</p>
          <p>좋은 Q연구는 &ldquo;Q-sort를 했다&rdquo;는 한 줄로 충분하지 않다.</p>
          <p style={{ color: "var(--black)", fontWeight: 500 }}>
            좋은 Q연구는 어떤 주관성을 어떤 자료 생성으로 포착했고,
            어떤 분석 선택을 했으며, 그 선택이 해석에 어떻게 연결되었는지
            독자가 따라갈 수 있게 보고한다.
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
          Stephenson 이후 Q방법론은 어떻게 전개되었는가
        </h2>
        <ul
          className="space-y-4 pl-1"
          style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--gray-700)" }}
        >
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>Stephenson</strong>
              <br />Q의 출발점은 주관성의 과학화였다. 사람의 관점 배열을 과학적으로 다룰 수 있다는 발상이 핵심이다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>Brown</strong>
              <br />Brown은 Q를 정치적 주관성의 방법론으로 정식화했다. 조작적 주관성과 개인내 유의성을 이론적 토대로 강화했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>Q 커뮤니티</strong>
              <br />Q는 작은 공동체와 <em>Operant Subjectivity</em> 전통 속에서 철학·절차·사례를 축적했다. 보존과 확장의 긴장도 함께 살아 있다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>현대 절차화</strong>
              <br />Watts &amp; Stenner(2012)와 McKeown &amp; Thomas(2013)는 Q를 현대 연구자가 따라 할 수 있는 연구 절차로 번역했다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>응용 연구 확장</strong>
              <br />Q는 보건·환경·재난·교육·조직처럼 관점 차이와 가치갈등이 중요한 분야로 확장되었다.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "var(--brand)" }} className="mt-0.5 shrink-0">•</span>
            <span>
              <strong>보고 기준 논의</strong>
              <br />확산 이후에는 설계 투명성과 도구적 축소 방지가 함께 중요해졌다.
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
          핵심 정리 — Q방법론 전개 지도
        </h2>

        {/* 데스크탑: 테이블 */}
        <div className="hidden sm:block overflow-x-auto">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse", color: "var(--gray-700)" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>전개 단계</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>핵심 인물·문헌</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "var(--black)" }}>Q에 준 기여</th>
                <th className="text-left py-3 font-semibold" style={{ color: "var(--black)" }}>다음 강의 연결</th>
              </tr>
            </thead>
            <tbody>
              {summaryTable.map((row, i) => (
                <tr
                  key={row.stage}
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: i % 2 === 0 ? "transparent" : "var(--gray-50)" }}
                >
                  <td className="py-3 pr-4">
                    <span className="font-medium" style={{ color: "var(--brand-deep)" }}>{row.stage}</span>
                  </td>
                  <td className="py-3 pr-4 leading-relaxed text-xs">{row.figures}</td>
                  <td className="py-3 pr-4 leading-relaxed">{row.contribution}</td>
                  <td className="py-3 leading-relaxed text-xs">{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일: 카드형 */}
        <div className="sm:hidden space-y-3">
          {summaryTable.map((row) => (
            <div
              key={row.stage}
              className="py-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="font-medium mb-2" style={{ fontSize: "15px", color: "var(--brand-deep)" }}>
                {row.stage}
              </div>
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--gray-700)" }} className="space-y-1.5">
                <div>
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
                  >
                    인물
                  </span>
                  {row.figures}
                </div>
                <div>
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
                  >
                    기여
                  </span>
                  {row.contribution}
                </div>
                <div>
                  <span
                    className="inline-block mr-2 text-xs font-semibold"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--brand)" }}
                  >
                    연결
                  </span>
                  {row.next}
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
            3-1강의 핵심은 하나다.
            Stephenson 이후 Q방법론은 사라진 아이디어가 아니라 연구 전통으로 축적되었다.
          </p>
          <p>
            Stephenson의 주관성의 과학은 곧바로 주류 방법론의 중심이 되지 못했다.
          </p>
          <p>
            그러나 Brown의 정치적 주관성, 조작적 주관성의 이론화,
            Q 커뮤니티의 축적, Watts &amp; Stenner와 McKeown &amp; Thomas의 절차화,
            응용 분야의 확장, 보고 기준 논의를 거치며 독자적 방법론의 모습을 갖추었다.
          </p>
          <p>
            이제 Q방법론을 단순한 분석 기법으로만 이해하면 안 된다.
            Q는 문제의식, 공동체, 절차, 응용, 보고 기준이 함께 쌓인 연구 전통이다.
          </p>
          <p>
            이 관점이 있어야 이후 Brown의 정치적 주관성, Watts &amp; Stenner의 절차화,
            보고 기준 논의를 따로따로 외우지 않고 하나의 흐름으로 이해할 수 있다.
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
          href="/lessons/2-4"
          className="text-sm"
          style={{ color: "var(--gray-400)" }}
        >
          ← 2-4. Q와 R의 분리
        </Link>
        <div className="text-sm text-right" style={{ color: "var(--gray-400)" }}>
          <span>다음 강의</span>
          <br />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
            3-2. Brown과 정치적 주관성 (준비 중)
          </span>
        </div>
      </div>
    </div>
  );
}
