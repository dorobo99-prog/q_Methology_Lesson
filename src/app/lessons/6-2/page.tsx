import type { Metadata } from "next";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-2. Concourse 수집원과 출처 기록 | Q방법론 온라인 강의",
  description: "6-1 범위표를 수집원 지도와 출처 대장으로 바꾸고 후보 진술문의 출처를 기록합니다.",
};

const cards = [
  {
    num: 1,
    title: "범위표를 수집원 지도로 바꾼다",
    keyMessage: "6-1의 선택마다 실제 자료 위치와 수집방법을 연결합니다.",
    paragraphs: [
      "6-1에서는 연구질문을 대상·상황·시간·쟁점과 연결해 진술문 모집단(Concourse)의 범위를 정했습니다. 이번에는 범위표의 각 선택 옆에 실제 수집원을 적습니다. ‘교사의 소진 경험’처럼 주제만 적지 말고, 그 경험을 표현하는 자료가 어디에 있는지 구체화합니다.",
      "수집원은 연구질문에 맞게 선택해야 합니다. 학술문헌은 기존 개념과 논쟁을 보여줄 수 있고, 면담은 참여자가 실제로 사용하는 표현을 제공할 수 있습니다. 정책문서·전문지·미디어도 연구질문과 관련될 때 수집원이 됩니다. 모든 연구가 같은 종류의 자료를 사용해야 하는 것은 아닙니다.",
      "먼저 6-1 범위표를 펼치세요. 각 항목에 맞는 수집원을 한 개 이상 적으세요. 그 수집원이 연구질문과 관련되는 이유도 적으세요. 아직 접근방법을 정하지 못했다면 상태를 ‘미정’으로 표시하세요.",
    ],
    sources: ["dieteren2023", "churruca2021"],
  },
  {
    num: 2,
    title: "수집원마다 서로 다른 정보를 기록한다",
    keyMessage: "자료의 출간 기간과 연구자의 검색·면담 기간을 구분합니다.",
    paragraphs: [
      "Fontein-Kuipers(2016)는 여성 중심 돌봄에 관한 Concourse를 만들기 위해 여러 수집원을 사용했습니다. 국제 학술문헌은 PubMed·OVID·EBSCO에서 검색했고, 네덜란드 조산사 전문지는 별도로 수동 검색했습니다. 보고서와 가이드라인, 신문·Facebook·다큐멘터리, 픽션과 예술, 조산사 면담과 강사 설문도 포함했습니다.",
      "자료 유형마다 기록할 정보가 달랐습니다. 국제 학술문헌 검색은 2015년 9월 1일부터 11월 30일까지 수행했습니다. 네덜란드 조산사 전문지는 2010년 1월부터 2015년 7월까지의 출간물을 검토했습니다. 조산사 21명의 면담은 2015년 3월부터 5월까지 진행했습니다. 이 날짜들은 각각 검색 수행 기간, 자료 출간 기간, 면담 수행 기간을 뜻합니다(Fontein-Kuipers, 2016).",
      "출처 대장에서는 날짜의 의미를 함께 적으세요. ‘2015년’만 적으면 자료의 출간연도인지 검색일인지 알 수 없습니다. 언어·지역·검색방법도 자료 유형에 맞게 기록하세요. 해당되지 않는 항목은 비워두지 말고 ‘해당 없음’으로 표시하세요.",
    ],
    sources: ["fontein2016"],
  },
  {
    num: 3,
    title: "출처 대장은 자료 한 건의 이력을 남긴다",
    keyMessage: "확인한 정보와 아직 확인하지 못한 정보를 출처 단위로 나눠 적습니다.",
    paragraphs: [
      "Dieteren et al.(2023)은 Q방법론 연구가 Concourse의 출처, 항목 표집 과정, 항목 유형과 수를 보고해야 한다고 제안했습니다. Churruca et al.(2021)도 Q표본 진술문을 어떻게 수집하고 축소·정제했는지 설명해야 한다고 제안했습니다. 두 고찰은 기록의 필요성을 뒷받침하지만, 하나의 표준 출처 대장 양식을 제시하지는 않습니다.",
      "이번 강의에서는 이 보고 요구를 실제 작업에 적용하기 위해 출처 대장을 만듭니다. 출처 식별번호, 출처 유형, 자료명 또는 참여자 집단, 연구질문과의 관련성, 자료 생성 기간, 검색·면담 기간, 언어·지역, 수집방법, 포함 기준과 상태를 기록합니다. 이 항목들은 선행연구의 공식 공통 절차가 아니라 강의용 도구입니다.",
      "자료 한 건을 등록하세요. 확인한 정보만 적으세요. 검색 기간이나 URL을 확인하지 못했다면 임의로 채우지 마세요. ‘미정’은 앞으로 결정할 항목에 쓰고, ‘미명시’는 선행연구나 원자료가 보고하지 않은 항목에 쓰세요.",
    ],
    sources: ["dieteren2023", "churruca2021"],
  },
  {
    num: 4,
    title: "후보 진술문에도 출처 식별번호를 붙인다",
    keyMessage: "후보 문장과 원출처를 식별번호로 연결하되 아직 선별하지 않습니다.",
    paragraphs: [
      "출처 대장은 자료 단위를 기록합니다. 후보 진술문 기록은 그 자료에서 얻은 표현을 추적합니다. 두 기록을 출처 식별번호로 연결하면 후보 진술문이 어느 문헌·면담·게시물에서 왔는지 다시 확인할 수 있습니다.",
      "후보 진술문 기록에는 진술문 식별번호, 현재 문장, 원래 표현이나 위치, 출처 식별번호, 직접 추출·요약·번역 여부, 수집일과 상태를 적습니다. 아직은 문장이 좋은지 판단하거나 최종 Q표본에 포함할지 결정하지 않습니다. 구조화·비구조화 표집틀은 6-3에서, 문장 선별과 수정은 6-4에서 다룹니다.",
      "후보 진술문 세 개를 등록하세요. 같은 자료에서 가져와도 각각 다른 진술문 식별번호를 붙이세요. 원래 위치를 확인할 수 없다면 ‘미명시’라고 적으세요. 문장을 요약하거나 번역했다면 그 상태를 표시하고 원문과 현재 문장을 구분하세요.",
    ],
    sources: ["dieteren2023", "churruca2021"],
  },
  {
    num: 5,
    title: "빈칸을 숨기지 않고 6-3으로 넘긴다",
    keyMessage: "미보고 항목을 추측하지 않고 수집원별 후보 목록을 다음 실습으로 넘깁니다.",
    paragraphs: [
      "Shim et al.(2024)은 문헌에서 121개, 중·고등학교 교사 10명의 서면 면담에서 220개를 수집해 초기 Concourse 341개를 구성했다고 보고했습니다. 그러나 문헌 검색 데이터베이스와 구체적인 검색·면담 기간은 보고하지 않았습니다. 윤리심의 승인일이나 출판연도로 이 빈칸을 대신 채울 수는 없습니다.",
      "좋은 기록은 모든 칸이 채워진 표가 아닙니다. 무엇을 확인했고 무엇을 확인하지 못했는지 구분한 표입니다. 확인하지 못한 정보는 ‘미명시’로 남기세요. 이후 확인하면 값을 추가하고 확인일을 기록하세요. 출처가 바뀌거나 범위가 넓어졌다면 6-1 범위표에도 변경 이유를 남기세요.",
      "이번 회차의 산출물은 수집원 지도, 출처 대장, 후보 진술문 출처 기록입니다. 다음 6-3에서는 수집원별 후보가 어떤 주제와 쟁점을 대표하는지 살펴봅니다. 오늘 만든 기록은 표집틀에서 누락과 편중을 확인하는 자료가 됩니다.",
    ],
    sources: ["shim2024"],
  },
];

const references = [
  { id: "churruca2021", label: "Churruca et al.(2021)", text: "Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., & Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. BMC Medical Research Methodology, 21(1), 125.", doi: "10.1186/s12874-021-01309-7" },
  { id: "dieteren2023", label: "Dieteren et al.(2023)", text: "Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., & Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. Social Sciences & Humanities Open, 7(1), 100404.", doi: "10.1016/j.ssaho.2023.100404" },
  { id: "fontein2016", label: "Fontein-Kuipers(2016)", text: "Fontein-Kuipers, Y. (2016). Development of a Q-set for a Q-method study about midwives’ perspectives of woman-centered care. Health Education and Care, 1(2), 31–36.", doi: "10.15761/HEC.1000107" },
  { id: "shim2024", label: "Shim et al.(2024)", text: "Shim, T., Jun, M., & Lee, S. Y. (2024). How do Korean secondary school teachers perceive psychological burnout in their teaching careers? Behavioral Sciences, 14(12), 1210.", doi: "10.3390/bs14121210" },
];

const sourceMapFields = [
  ["대상", "누구의 관점을 찾는가? 어떤 사람·문헌·매체에서 그 표현을 찾을 수 있는가?"],
  ["상황·맥락", "어떤 활동·제도·지역과 관련된 자료인가? 연구질문과 어떻게 연결되는가?"],
  ["시간", "자료가 만들어진 기간과 내가 검색·면담할 기간은 각각 언제인가?"],
  ["쟁점", "포함하려는 관점과 논쟁은 무엇인가? 현재 접근 가능한 수집원은 무엇인가?"],
];

const registerFields = [
  ["출처 ID", "SRC-01처럼 자료 한 건마다 고유 번호를 붙입니다."],
  ["출처 유형", "학술문헌·면담·전문지·정책문서·온라인 게시물 등으로 적습니다."],
  ["자료명·참여자", "문헌 제목이나 면담 참여자 집단을 적습니다."],
  ["생성 기간", "자료가 출간되거나 만들어진 기간을 적습니다."],
  ["검색·면담 기간", "연구자가 실제로 자료를 찾거나 면담한 기간을 적습니다."],
  ["언어·지역", "자료의 언어와 관련 지역을 확인합니다."],
  ["수집방법", "데이터베이스 검색·수동 검색·면담 등 실제 방법을 적습니다."],
  ["포함 이유", "연구질문과 관련되는 이유를 한 문장으로 적습니다."],
  ["상태", "예정·확보·미정·미명시 중 하나를 선택합니다."],
];

const statementFields = [
  ["진술문 ID", "ST-001처럼 후보 문장마다 고유 번호를 붙입니다."],
  ["현재 후보 문장", "현재 작업 중인 문장을 적습니다."],
  ["원래 표현·위치", "원문과 쪽·절·문단·타임스탬프 등 다시 찾을 위치를 적습니다."],
  ["출처 ID", "출처 대장의 ID와 연결합니다."],
  ["처리 상태", "직접 추출·요약·번역 중 하나를 표시합니다."],
  ["수집일", "후보 문장을 등록한 날짜를 적습니다."],
  ["기록 상태", "후보·보류·미명시 중 하나를 표시합니다."],
];

function PracticeGrid({ fields }: { fields: string[][] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {fields.map(([label, guide]) => (
        <div key={label} className="rounded-lg p-4 sm:p-5" style={{ background: "var(--gray-100)" }}>
          <dt className="font-semibold text-sm mb-2">{label}</dt>
          <dd className="text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>{guide}</dd>
          <dd className="text-xs mt-4 pt-3 border-t" style={{ color: "var(--gray-500)", borderColor: "var(--gray-200)" }}>내 기록:</dd>
        </div>
      ))}
    </dl>
  );
}

export default function LessonSixTwoPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-2. Concourse 수집원과 출처 기록" }]}
        statusLabel="공개" versionLabel="v1.1 · 2026-09-19"
        title="Concourse 수집원과 출처 기록"
        description={metadata.description as string}
        imageSrc="/images/6-2-hero-source-provenance.webp"
        imageAlt="6-1 범위표에서 수집원 지도와 출처 대장, 후보 진술문 기록을 거쳐 6-3 표집틀로 이어지는 강의용 기록 흐름"
      />
      <div className="mx-auto py-4 sm:py-8" style={{ maxWidth: "720px" }}>
        {cards.map((card) => (
          <section key={card.num} className="mb-14 sm:mb-16" aria-labelledby={`card-${card.num}`}>
            <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>카드 {card.num}</div>
            <h2 id={`card-${card.num}`} className="font-semibold mb-3" style={{ fontSize: "24px", color: "var(--black)" }}>{card.title}</h2>
            <p className="mb-6" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--gray-800)" }}>{card.keyMessage}</p>
            <div className="lesson-card-body space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>
              {card.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <p className="text-xs mt-5" style={{ color: "var(--gray-500)", lineHeight: 1.7 }}>
              관련 문헌: {card.sources.map((id, index) => {
                const ref = references.find((item) => item.id === id)!;
                return <span key={id}>{index > 0 ? " · " : ""}<a href={`#${id}`} className="underline underline-offset-2">{ref.label}</a></span>;
              })}
            </p>
          </section>
        ))}

        <section className="mb-14" aria-labelledby="source-map">
          <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>적용 활동 1</div>
          <h2 id="source-map" className="text-2xl font-semibold mb-3">내 연구의 수집원 지도</h2>
          <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>6-1 범위표를 펼치고 각 항목에 구체적인 수집원, 연구질문과의 관련성, 접근방법과 현재 상태를 적으세요. 이 표는 등록 선행연구의 보고 항목을 수업에 적용한 강의용 도구입니다.</p>
          <PracticeGrid fields={sourceMapFields} />
        </section>

        <section className="mb-14" aria-labelledby="source-register">
          <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>적용 활동 2</div>
          <h2 id="source-register" className="text-2xl font-semibold mb-3">출처 대장</h2>
          <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>첫 자료를 SRC-01로 등록하세요. 확인하지 못한 정보는 추측하지 말고 ‘미정’ 또는 ‘미명시’로 적으세요. 특정 연구자의 공식 양식이나 검증된 척도가 아닌 강의용 기록 도구입니다.</p>
          <PracticeGrid fields={registerFields} />
        </section>

        <section className="mb-14" aria-labelledby="statement-register">
          <div className="text-xs mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>적용 활동 3</div>
          <h2 id="statement-register" className="text-2xl font-semibold mb-3">후보 진술문 출처 기록</h2>
          <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>후보 진술문 세 개를 등록하고 출처 ID로 원자료와 연결하세요. 문장을 요약하거나 번역했다면 원문과 현재 문장을 구분해 처리 상태를 남기세요.</p>
          <PracticeGrid fields={statementFields} />
        </section>

        <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="self-check">
          <h2 id="self-check" className="text-xl font-semibold mb-4">자가 검토</h2>
          <ul className="space-y-3 text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>
            <li>□ 6-1에서 정한 범위와 각 수집원의 관련성을 설명했는가?</li>
            <li>□ 자료 생성 기간과 검색·면담 수행 기간을 구분했는가?</li>
            <li>□ 출처 기록과 후보 진술문 기록을 식별번호로 연결했는가?</li>
            <li>□ 확인하지 못한 정보를 미정·미명시로 표시했는가?</li>
            <li>□ 아직 6-3의 표집틀이나 6-4의 선별 판단을 적용하지 않았는가?</li>
          </ul>
        </section>

        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }} aria-labelledby="references">
          <h2 id="references" className="text-2xl font-semibold mb-4">참고문헌</h2>
          <ul className="space-y-5" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)", overflowWrap: "anywhere" }}>
            {references.map((ref) => <li key={ref.id} id={ref.id} className="scroll-mt-24">{ref.text}{" "}<a href={`https://doi.org/${ref.doi}`} className="underline underline-offset-2">https://doi.org/{ref.doi}</a></li>)}
          </ul>
        </section>

        <nav aria-label="강의 이동" className="pt-8 mt-12 flex flex-wrap items-center justify-between gap-4 border-t" style={{ borderColor: "var(--gray-200)" }}>
          <Link href="/lessons/6-1" className="text-sm" style={{ color: "var(--brand-deep)" }}>← 6-1. 연구질문에서 Concourse의 범위 정하기</Link>
          <span className="text-sm" style={{ color: "var(--gray-400)" }}>6-3. 구조화·비구조화 Q표본과 표집틀 설계 · 예정</span>
        </nav>
      </div>
    </div>
  );
}
