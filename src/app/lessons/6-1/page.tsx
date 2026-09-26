import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-1. 연구질문에서 Concourse의 범위 정하기 | Q방법론 온라인 강의",
  description: "류승훈 연구의 실제 선택을 먼저 예측하고 대조한 뒤 내 연구의 Concourse 범위를 정하는 실습입니다.",
};

const cards = [
  {
    num: 1,
    caseLabel: "관통사례 · 류승훈(2023)",
    title: "연구질문만 보고 수집 범위를 예상해 보기",
    message: "연구질문을 읽고 후보 자료의 범위를 먼저 판단합니다.",
    paragraphs: [
      "5-3에서 진술문 모집단(Concourse)을 배웠습니다. 이번에는 논문의 자료 수집 결과를 보기 전에 연구질문부터 읽겠습니다. 류승훈(2023)은 일선 소방서 소방공무원이 재난대응상황에서 바람직하다고 생각하는 리더십의 인식 유형을 물었습니다. 또 발견된 유형을 기존 리더십 이론과 연결해 보려 했습니다(70–71쪽).",
      "이 질문에서 누구의 관점을 탐구하는지, 어떤 상황과 쟁점을 다루는지 표시해 보세요. 이어 아래 세 자료를 읽고, 연구자가 수집 후보로 검토할 만한지 먼저 판정하세요. 실제 논문의 선택은 그다음에 공개합니다.",
    ],
    sources: ["ryu2023"],
  },
  {
    num: 2,
    caseLabel: "관통사례 · 류승훈(2023)",
    title: "연구자는 어떤 후보 자료를 모았을까?",
    message: "관점을 탐구할 사람과 후보 문장의 수집원을 구별합니다.",
    paragraphs: [
      "류승훈은 미국적십자사 선행연구에서 진술문 36개를 가져왔고, 소방공무원의 개방형 설문·전화 인터뷰·직접 면담에서 167개를 모았습니다(72–73, 82–83쪽). 앞의 36개는 소방서 밖에서 만들어진 표현이지만, 연구질문과 연결될 가능성이 있어 후보로 수집한 것입니다. 현장 진술문은 소방공무원의 경험을 더하기 위해 모았습니다.",
      "따라서 앞 표의 A와 B는 실제 수집 경로에 대응합니다. C는 강의용 가상 자료입니다. 류승훈이 C를 검토하거나 제외했다는 기록은 없습니다.",
      "관점을 탐구할 사람은 일선 소방서의 소방공무원이고, 후보 문장을 찾을 곳은 그보다 넓을 수 있습니다. 후보로 모은 문장을 최종 Q표본에 모두 넣는 것도 아닙니다. 다음 회차에서 두 수집원의 출처를 기록하고, 6-3부터 후보를 줄이는 판단을 살펴봅니다.",
    ],
    sources: ["ryu2023"],
  },
  {
    num: 3,
    caseLabel: "비교사례 · 박철우(2024)",
    title: "같은 주제라도 경계는 달라진다",
    message: "자료 경로가 비슷해도 관점을 탐구할 사람은 다를 수 있습니다.",
    paragraphs: [
      "박철우(2024)는 대한적십자사 경남지사에서 재난구호에 참여하는 직원과 봉사원의 바람직한 리더십 인식을 물었습니다(108–110쪽). 이 연구도 미국적십자사 선행 Q진술문과 국내 현장 표현을 함께 검토했습니다(109–111쪽). 류승훈과 박철우는 비슷한 자료 경로를 택했지만, 관점을 탐구한 사람과 현장 맥락은 다릅니다.",
      "두 연구를 비교하며 자기 연구의 대상과 자료 경계를 나누어 적으세요. 다른 기관에서 나온 문장도 연구질문과 연결된다면 후보로 살펴볼 수 있습니다. 그 문장이 현재 연구 맥락에 맞는지는 나중에 별도로 검토해야 합니다.",
    ],
    sources: ["park2024"],
  },
  {
    num: 4,
    caseLabel: "내 연구 적용",
    title: "판단을 기록해 다음 수집으로 넘기기",
    message: "포함·제외·보류의 이유와 확인 질문을 범위표에 남깁니다.",
    paragraphs: [
      "아까 내린 판정과 실제 수집 경로를 비교해 보세요. 미국적십자사 선행 문장을 처음부터 제외했다면, 왜 그렇게 판단했습니까? 후보 문장을 제공하는 집단과 Q분류에 참여할 집단을 같은 범위로 생각하지 않았는지 확인해 보세요. 이는 연구자의 선택을 평가하고 자기 기준을 고치는 강의용 질문입니다.",
      "이제 자기 연구질문의 대상·상황·쟁점과 후보 자료의 포함·제외·보류 기준을 범위표에 적으세요. 판단을 미뤘다면 무엇을 확인해야 결정할 수 있는지도 적습니다. 수집하면서 새 관점을 발견하면 범위를 다시 정하고 변경 이유를 남기세요. 다음 6-2에서는 이 범위표를 가지고 실제 수집원을 선택합니다.",
    ],
    sources: ["ryu2023", "park2024"],
  },
];

const references = [
  { id: "ryu2023", label: "류승훈(2023)", text: "류승훈. (2023). 재난대응상황에서 부산광역시 A 소방서 소방공무원의 리더십에 대한 주관성 연구 [박사학위논문, 동아대학교]. 연구설계 70–101쪽." },
  { id: "park2024", label: "박철우(2024)", text: "박철우. (2024). 재난대응상황에서 대한적십자사 리더십 구성요소와 행위에 관한 주관성 연구 [박사학위논문, 동아대학교]. 연구설계 108–133쪽." },
];

const practiceCases = [
  ["A", "소방공무원의 재난대응 리더십 경험에서 나온 표현"],
  ["B", "미국적십자사 선행 Q연구의 재난 리더십 진술문"],
  ["C", "재난 현장 경험과 연결되지 않은 평시 인사평가 홍보 문구"],
];

const scopeFields = [
  ["연구질문", "어떤 관점을 묻는가? 질문의 핵심 말을 밑줄로 표시하세요."],
  ["관점을 탐구할 대상", "누구의 관점을 Q분류로 탐구하는가?"],
  ["후보 자료의 범위", "다른 기관·집단의 표현은 어떤 조건에서 수집 후보가 되는가?"],
  ["상황·맥락", "어떤 활동·기관·지역에서 생긴 표현인가?"],
  ["시간", "다룰 경험·자료의 기간은 어디까지인가? 아직 정하지 않았다면 미정으로 적으세요."],
  ["쟁점", "반드시 포함할 의견의 범위와 경계가 애매한 쟁점은 무엇인가?"],
  ["포함·제외·보류", "후보 자료의 판정과 이유를 한 문장씩 적으세요. 보류 자료는 확인 질문도 적으세요."],
];

export default function LessonSixOnePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-1. 연구질문에서 Concourse의 범위 정하기" }]}
        statusLabel="공개" versionLabel="v2.2 · 2026-09-26"
        title="연구질문에서 Concourse의 범위 정하기"
        description={metadata.description as string}
        imageSrc="/images/6-1-hero-concourse-scope.webp"
        imageAlt="강의용 설계도: 연구질문을 대상·상황·시간·쟁점의 범위와 연결한다"
      />
      <div className="mx-auto py-4 sm:py-8" style={{ maxWidth: "720px" }}>
        {cards.map((card, index) => (
          <Fragment key={card.title}>
          <section className="mb-14 sm:mb-16" aria-labelledby={`card-${index + 1}`}>
            <div className="flex flex-wrap items-center gap-2 mb-2"><span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>카드 {index + 1}</span><span className="text-xs rounded-full px-2.5 py-0.5" style={{ background: "var(--gray-100)", color: "var(--gray-700)" }}>{card.caseLabel}</span></div>
            <h2 id={`card-${index + 1}`} className="font-semibold mb-3" style={{ fontSize: "24px", color: "var(--black)" }}>{card.title}</h2>
            <p className="mb-6" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--gray-800)" }}>{card.message}</p>
            <div className="lesson-card-body space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>{card.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <p className="text-xs mt-5" style={{ color: "var(--gray-500)", lineHeight: 1.7 }}>사례 근거: {card.sources.map((id, sourceIndex) => {
              const ref = references.find((item) => item.id === id)!;
              return <span key={id}>{sourceIndex > 0 ? " · " : ""}<a href={`#${id}`} className="underline underline-offset-2">{ref.label}</a></span>;
            })}</p>
          </section>
          {index === 0 && <section className="mb-14" aria-labelledby="practice-cases">
            <h2 id="practice-cases" className="text-2xl font-semibold mb-3">먼저 해보기 · 연구자의 선택을 보기 전 경계 판정</h2>
            <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>류승훈의 첫 연구질문을 기준으로 각 자료를 수집 후보에 포함·제외·보류할지 정하세요. 아래 문구는 판단 연습을 위해 재구성한 자료 유형이며 논문에서 추출한 개별 진술문이 아닙니다. 세 유형 중 어떤 것이 실제 수집 경로였는지는 카드 2에서 확인하세요. 보류했다면 무엇을 확인해야 하는지도 적으세요.</p>
            <div className="space-y-3">{practiceCases.map(([label, item]) => <div key={label} className="rounded-lg p-4 sm:p-5" style={{ background: "var(--gray-100)" }}><p className="font-semibold text-sm mb-2">{label}. {item}</p><p className="text-sm" style={{ color: "var(--gray-600)" }}>내 판정 · 이유 · 더 확인할 점:</p></div>)}</div>
          </section>}
          </Fragment>
        ))}
        <section className="mb-14" aria-labelledby="scope-worksheet">
          <h2 id="scope-worksheet" className="text-2xl font-semibold mb-3">직접 해보기 2 · 내 연구의 범위표</h2>
          <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>자기 연구질문을 아래 칸에 적용하세요. 선택이 바뀌면 변경 날짜와 이유를 남기세요. 이 표는 강의용 도구입니다.</p>
          <dl className="space-y-3">{scopeFields.map(([label, question]) => <div key={label} className="rounded-lg p-4 sm:p-5" style={{ background: "var(--gray-100)" }}><dt className="font-semibold text-sm mb-2">{label}</dt><dd className="text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>{question}</dd><dd className="text-xs mt-3" style={{ color: "var(--gray-500)" }}>내 선택 · 근거 · 미정 항목:</dd></div>)}</dl>
        </section>
        <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="report-check"><h2 id="report-check" className="text-xl font-semibold mb-4">논문에 남길 항목</h2><ul className="space-y-2 text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}><li>□ 연구질문과 관점을 탐구할 대상</li><li>□ 후보 자료를 탐색할 범위와 관점을 탐구할 대상의 관계</li><li>□ 상황·기관·시간·쟁점의 포함 경계</li><li>□ 제외·보류한 자료와 그 이유</li><li>□ 수집 중 범위를 수정한 날짜와 근거</li></ul></section>
        <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="lesson-takeaway"><h2 id="lesson-takeaway" className="text-xl font-semibold mb-3">오늘의 결론</h2><p className="text-sm" style={{ color: "var(--gray-800)", lineHeight: 1.8 }}>Concourse의 범위는 연구질문에서 시작합니다. 수집 중 새로운 관점이 나타나면 범위를 수정하고 그 이유를 기록합니다.</p><p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>다음 질문: 범위를 정했다면 실제 진술문은 어디에서 수집할까요? <Link href="/lessons/6-2" className="underline underline-offset-2" style={{ color: "var(--brand-deep)" }}>6-2로 이어가기 →</Link></p></section>
        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }} aria-labelledby="references"><h2 id="references" className="text-2xl font-semibold mb-4">참고문헌</h2><ul className="space-y-5" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)", overflowWrap: "anywhere" }}>{references.map((ref) => <li key={ref.id} id={ref.id} className="scroll-mt-24">{ref.text}</li>)}</ul></section>
        <nav aria-label="강의 이동" className="pt-8 mt-12 flex flex-wrap items-center justify-between gap-4 border-t" style={{ borderColor: "var(--gray-200)" }}><Link href="/lessons/5-8" className="text-sm" style={{ color: "var(--brand-deep)" }}>← 5-8. Q 연구를 논문으로 옮기는 흐름</Link><Link href="/lessons/6-2" className="text-sm" style={{ color: "var(--brand-deep)" }}>6-2. Concourse 수집원과 출처 기록 →</Link></nav>
      </div>
    </div>
  );
}
