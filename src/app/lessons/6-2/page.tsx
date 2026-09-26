import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-2. Concourse 수집원과 출처 기록 | Q방법론 온라인 강의",
  description: "6-1 범위표에서 수집 방법의 역할을 설계하고, 실제 연구와 대조한 뒤 수집원 지도와 출처 기록을 만드는 실습입니다.",
};

const cards = [
  {
    num: 1,
    caseLabel: "관통사례 · 먼저 판단하기",
    title: "범위를 정했으면 어디에서 말을 찾을까?",
    message: "6-1 범위표에서 각 수집 방법의 역할과 남길 기록을 설계합니다.",
    paragraphs: [
      "6-1에서 작성한 Concourse 범위표를 펼치세요. 연구질문, 관점을 탐구할 사람, 상황, 쟁점을 다시 읽습니다. 재난대응 리더십에 관한 말을 모으려면 어디에서 어떤 표현을 찾을 수 있을까요? 기존 문헌만 읽거나 현장 면담만 한다면 어떤 관점이 빠질지도 예상해 보세요.",
      "6-1에서 문헌과 소방 현장이라는 두 경로는 이미 확인했습니다. 이제 각 경로에서 어떤 방법으로 무엇을 얻고, 어떤 기록을 남길지 먼저 설계합니다. 아래 네 방법은 류승훈 논문에 보고된 실제 방법이지만, 표의 기대 역할·공백은 학생이 판단하는 강의용 질문입니다. 구체적인 수집 수와 실행 결과는 카드 2에서 확인합니다.",
    ],
    sources: ["ryu2023"],
  },
  {
    num: 2,
    caseLabel: "관통사례 · 류승훈(2023)",
    title: "류승훈은 어떤 경로를 선택했을까?",
    message: "기존 Q진술문과 소방 현장 표현을 별도로 모았습니다.",
    paragraphs: [
      "류승훈은 Wheeler et al.(2013)의 미국적십자사 재난 리더십 선행연구에서 Q진술문 36개를 가져왔습니다. 부산 소방공무원의 개방형 설문·전화 인터뷰·직접 면담에서는 진술문 167개를 모았습니다. 두 경로의 초기 Q모집단은 203개입니다(72–73, 82–83쪽). 6-1에서 확인한 문헌·현장 경로가 실제로 이 네 방법으로 구현됐습니다.",
      "현장 자료 수집 대상은 46명이었고 5명은 응답하지 않았습니다. 응답자 41명에게서 얻은 167개는 사람 수가 아니라 진술문 수입니다. 선행 진술문 36개도 최종 Q표본의 수가 아닙니다.",
      "기존 Q연구의 문장만 사용했다면 소방 현장 특유의 생각을 놓칠 수 있습니다. 현장 표현만 사용했다면 기존 리더십 구성요소와 비교할 표현을 놓칠 수 있습니다. 이는 두 경로의 강의용 비교 질문이며, 논문 저자가 이 표로 장단점을 평가했다고 주장하지 않습니다. 수집한 문장마다 새 연구 맥락에 맞는지는 다음 단계에서 검토합니다.",
    ],
    sources: ["ryu2023"],
  },
  {
    num: 3,
    caseLabel: "비교사례 · 박철우(2024)·조정호(2023)",
    title: "다른 연구는 무엇을 조합했을까?",
    message: "비슷한 수집 경로라도 현장과 자료의 단위가 다릅니다.",
    paragraphs: [
      "박철우는 기존 Q진술문과 적십자 활동가 면담 자료를 결합했습니다. 조정호는 이론·척도 문항과 콜센터 상담사의 면담·개방형 설문 자료를 결합했습니다. 류승훈과 비슷한 경로를 택했더라도 연구질문과 현장은 서로 다릅니다. 세부 수와 자료의 단위는 아래 표에서 대조합니다(박철우 109–111쪽; 조정호 69–73쪽).",
    ],
    sources: ["park2024", "cho2023"],
  },
  {
    num: 4,
    caseLabel: "방법 연결",
    title: "어떤 출처가 좋은가보다 무슨 관점을 채우는가",
    message: "출처의 수보다 연구질문과 관점의 연결을 확인합니다.",
    paragraphs: [
      "선행연구와 기존 Q연구는 기존 개념·표현을 찾는 길이 될 수 있습니다. 면담은 경험의 맥락과 이유를, 개방형 설문은 참여자의 짧은 자율적 표현을 얻는 길이 될 수 있습니다. 현장문서·정책문서·회의록·언론은 연구질문과 연결될 때만 추가 후보가 됩니다. 이 목록은 가능한 수집원이며 앞의 세 논문이 모두 사용했다는 뜻이 아닙니다.",
      "자료 종류를 늘리는 것 자체가 목표는 아닙니다. 한 출처에 의존하면 어떤 관점이 빠질지, 새 출처가 그 공백을 실제로 채울지 판단하세요. 41명의 응답에서 167개를 모았다는 숫자만으로 관점이 충분하다고 결론내릴 수도 없습니다.",
    ],
    sources: ["ryu2023", "park2024", "cho2023"],
  },
  {
    num: 5,
    caseLabel: "내 연구 적용",
    title: "내 연구의 수집원 지도를 만들기",
    message: "선택한 출처마다 포함 이유와 기대 관점을 적습니다.",
    paragraphs: [
      "6-1 범위표에서 대상·상황·쟁점을 한 줄씩 가져오세요. 강의 실습에서는 서로 다른 수집원 유형 세 가지를 후보로 적고 역할을 비교합니다. 실제 연구에서 세 유형을 모두 사용해야 한다는 규칙은 아닙니다. 접근할 수 없거나 연구질문과 맞지 않으면 제외·보류하고 이유를 적으세요.",
      "왜 이 출처가 필요한지 설명할 수 없는 행은 다시 검토합니다. 새로운 수집원이 필요해 6-1 범위를 바꾼다면 범위표에 변경 날짜와 이유를 함께 남깁니다.",
    ],
    sources: ["ryu2023"],
  },
  {
    num: 6,
    caseLabel: "내 연구 적용 · 출처 기록",
    title: "출처와 후보 문장을 다시 찾을 수 있게 기록하기",
    message: "수집원 지도에서 출처 대장, 진술문 ID까지 연결합니다.",
    paragraphs: [
      "수집원 지도는 어디서 모을까라는 계획입니다. 실제 자료를 확보하면 출처 대장에 고유한 출처 ID를 붙입니다. 그 자료에서 얻은 표현에는 별도의 진술문 ID를 붙이고, 원문 위치와 출처 ID를 연결합니다. 아래 ID와 양식은 강의용 도구이며 세 논문이 같은 표를 썼다는 뜻은 아닙니다.",
      "Dieteren et al.(2023)과 Churruca et al.(2021)은 Concourse 출처와 Q표본 개발 과정을 독자가 따라갈 수 있게 보고할 필요를 논의합니다. 지금부터 원문과 현재 작업 중인 표현을 나누어 적으면 이후 수정·중복 판단의 근거를 남길 수 있습니다. 예정된 내 수집은 미정, 읽은 연구가 밝히지 않은 정보는 원문 미명시로 구분하세요. 응답자 정보는 연구윤리 기준에 맞게 익명화합니다.",
      "아래 가상 연결 예시에서는 원문을 잠정 재작성하면서 ‘대원 혼란’이라는 맥락이 빠졌는지 묻습니다. 학생이 실제 확보한 표현도 출처 ID와 원문 위치에 연결하세요. 현재 작업 표현은 아직 최종 Q진술문이 아닙니다. 범주화·대표 문장 선정과 수정 판단은 6-3 이후에 합니다.",
    ],
    sources: ["dieteren2023", "churruca2021"],
  },
];

const references = [
  { id: "ryu2023", label: "류승훈(2023)", text: "류승훈. (2023). 재난대응상황에서 부산광역시 A 소방서 소방공무원의 리더십에 대한 주관성 연구 [박사학위논문, 동아대학교]. 연구설계 70–101쪽." },
  { id: "park2024", label: "박철우(2024)", text: "박철우. (2024). 재난대응상황에서 대한적십자사 리더십 구성요소와 행위에 관한 주관성 연구 [박사학위논문, 동아대학교]. 연구설계 108–133쪽." },
  { id: "cho2023", label: "조정호(2023)", text: "조정호. (2023). 포스트코로나 시대, 콜센터 상담사의 셀프리더십 인식유형에 관한 연구 [박사학위논문, 동아대학교]. 연구설계 63–76쪽." },
  { id: "churruca2021", label: "Churruca et al.(2021)", text: "Churruca, K., Ludlow, K., Wu, W., Gibbons, K., Nguyen, H. M., Ellis, L. A., & Braithwaite, J. (2021). A scoping review of Q-methodology in healthcare research. BMC Medical Research Methodology, 21(1), 125. https://doi.org/10.1186/s12874-021-01309-7" },
  { id: "dieteren2023", label: "Dieteren et al.(2023)", text: "Dieteren, C. M., Patty, N. J. S., Reckers-Droog, V. T., & Van Exel, J. (2023). Methodological choices in applications of Q methodology: A systematic literature review. Social Sciences & Humanities Open, 7(1), 100404. https://doi.org/10.1016/j.ssaho.2023.100404" },
];

const collectionMethods = [
  "기존 Q연구 진술문 검토",
  "소방공무원 개방형 설문",
  "전화 면담",
  "직접 면담",
];

export default function LessonSixTwoPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-2. Concourse 수집원과 출처 기록" }]} statusLabel="공개" versionLabel="v2.2 · 2026-09-26" title="Concourse 수집원과 출처 기록" description={metadata.description as string} imageSrc="/images/6-2-hero-source-provenance.webp" imageAlt="6-1 범위표에서 수집원 지도와 출처 대장, 후보 진술문 기록을 거쳐 6-3 표집틀로 이어지는 강의용 기록 흐름" />
      <div className="mx-auto py-4 sm:py-8" style={{ maxWidth: "720px" }}>
        {cards.map((card, index) => <Fragment key={card.title}>
          <section className="mb-14 sm:mb-16" aria-labelledby={`card-${index + 1}`}>
            <div className="flex flex-wrap items-center gap-2 mb-2"><span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>카드 {index + 1}</span><span className="text-xs rounded-full px-2.5 py-0.5" style={{ background: "var(--gray-100)", color: "var(--gray-700)" }}>{card.caseLabel}</span></div>
            <h2 id={`card-${index + 1}`} className="font-semibold mb-3" style={{ fontSize: "24px", color: "var(--black)" }}>{card.title}</h2>
            <p className="mb-6" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--gray-800)" }}>{card.message}</p>
            <div className="lesson-card-body space-y-5" style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--gray-700)" }}>{card.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <p className="text-xs mt-5" style={{ color: "var(--gray-500)", lineHeight: 1.7 }}>사례·방법 근거: {card.sources.map((id, sourceIndex) => { const ref = references.find((item) => item.id === id)!; return <span key={id}>{sourceIndex > 0 ? " · " : ""}<a href={`#${id}`} className="underline underline-offset-2">{ref.label}</a></span>; })}</p>
          </section>
          {index === 0 && <section className="mb-14" aria-labelledby="method-plan">
            <h2 id="method-plan" className="text-2xl font-semibold mb-3">먼저 해보기 · 각 수집 방법의 역할 설계하기</h2>
            <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>6-1에서 문헌과 현장이라는 두 경로를 확인했습니다. 아래 방법별로 기대하는 표현, 남을 공백, 확인할 기록을 적으세요. 실제 수집 수와 실행 결과는 카드 2에서 확인합니다.</p>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse" style={{ minWidth: "680px" }}><thead><tr><th className="text-left p-3 border-b">수집 방법</th><th className="text-left p-3 border-b">기대하는 표현·관점</th><th className="text-left p-3 border-b">이 방법만으로 남을 공백</th><th className="text-left p-3 border-b">확인하거나 남길 기록</th></tr></thead><tbody>{collectionMethods.map((method) => <tr key={method}><th scope="row" className="text-left p-3 border-b font-medium">{method}</th><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td></tr>)}</tbody></table></div>
            <p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>네 방법을 모두 쓸 필요가 있는지, 어떤 방법을 먼저 시행할지 자신의 이유를 적으세요. 표는 복사해 별도 노트에서 작성할 수 있습니다.</p>
          </section>}
          {index === 2 && <section className="mb-14" aria-labelledby="three-studies">
            <h2 id="three-studies" className="text-2xl font-semibold mb-3">직접 해보기 1 · 세 연구의 출처 선택 비교</h2>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse" style={{ minWidth: "700px" }}><thead><tr><th className="text-left p-3 border-b">연구</th><th className="text-left p-3 border-b">문헌·기존 문항 경로</th><th className="text-left p-3 border-b">현장 경로·확인할 수</th><th className="text-left p-3 border-b">강의용 검토 질문</th></tr></thead><tbody><tr><td className="p-3 border-b">류승훈</td><td className="p-3 border-b">기존 Q진술문 36개</td><td className="p-3 border-b">설문·전화·직접 면담 진술문 167개</td><td className="p-3 border-b">어떤 직무·경험의 목소리를 더 확인할까?</td></tr><tr><td className="p-3 border-b">박철우</td><td className="p-3 border-b">기존 Q진술문 36개</td><td className="p-3 border-b">활동가 면담 진술문 44개, 초기 합계 80개</td><td className="p-3 border-b">활동가의 역할별 관점이 담겼는가?</td></tr><tr><td className="p-3 border-b">조정호</td><td className="p-3 border-b">이론·척도 문항 55개</td><td className="p-3 border-b">면담·설문. 설문 61명, 원응답 549개 → 정제 후 244개</td><td className="p-3 border-b">원응답과 정제 후 후보를 어떻게 구분할까?</td></tr></tbody></table></div>
            <p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>마지막 열은 강의용 검토 질문입니다. 조정호의 549개는 설문 원응답 수이고 244개는 정제 후 확보한 수입니다. 한 경로만 사용했다면 어떤 표현을 얻기 어려웠을지 한 연구를 골라 설명해 보세요.</p>
          </section>}
          {index === 3 && <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="terms"><h2 id="terms" className="text-xl font-semibold mb-3">용어 확인 · 넓은 담론과 수집한 문장</h2><p className="text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.8 }}>5-3에서 진술문 모집단(Concourse)을 연구주제에 관해 말해질 수 있는 넓은 표현의 세계로 배웠습니다. 류승훈 논문의 ‘초기 Q모집단 203개’는 그 범위에서 실제 수집한 후보 문장 목록을 가리킵니다. 수집된 목록은 Concourse 전체와 같지 않고, 최종 Q표본(Q-set)도 아닙니다. 연구마다 쓰는 용어는 다를 수 있으므로 이 강의에서는 담론의 범위 → 수집한 표현 → 선별할 Q표본을 구분해 읽습니다.</p></section>}
          {index === 4 && <section className="mb-14" aria-labelledby="source-map">
            <h2 id="source-map" className="text-2xl font-semibold mb-3">직접 해보기 2 · Concourse 수집원 지도</h2>
            <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>6-1 범위표를 옆에 두고 수집원 유형 세 가지를 후보로 비교하세요. 각 행에 포함 이유·기대 관점·수집 방법·판정을 함께 적습니다. 세 유형은 강의용 비교 과제이며 실제 연구의 최소 수집원 수가 아닙니다.</p>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse" style={{ minWidth: "760px" }}><thead><tr><th className="text-left p-3 border-b">수집원 후보</th><th className="text-left p-3 border-b">6-1 범위와의 연결·포함 이유</th><th className="text-left p-3 border-b">기대하는 관점</th><th className="text-left p-3 border-b">수집 방법·접근성</th><th className="text-left p-3 border-b">우선순위·판정</th></tr></thead><tbody>{[1, 2, 3].map((n) => <tr key={n}><th scope="row" className="text-left p-3 border-b font-medium">후보 {n}</th><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td></tr>)}</tbody></table></div>
            <p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>표를 복사해 별도 노트에서 작성하세요. 실제 채택할 수집원 수는 연구질문과 접근성을 보고 결정합니다.</p>
          </section>}
          {index === 5 && <section className="mb-14" aria-labelledby="source-register">
            <h2 id="source-register" className="text-2xl font-semibold mb-3">직접 해보기 3 · 출처 대장과 원표현 기록</h2>
            <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>아래는 실제 연구 자료가 아닌 강의용 가상 연결 예시입니다. 원래 표현과 현재 작업 표현의 차이를 보고, 잠정 재작성에서 빠진 의미가 없는지 확인하세요.</p>
            <div className="overflow-x-auto mb-7"><table className="w-full text-sm border-collapse" style={{ minWidth: "650px" }}><thead><tr><th className="text-left p-3 border-b">기록</th><th className="text-left p-3 border-b">강의용 가상 값</th></tr></thead><tbody><tr><th scope="row" className="text-left p-3 border-b font-medium">출처 대장</th><td className="p-3 border-b">SRC-EX-01 · 가상 소방공무원 면담 메모 · 수집일 해당 없음(가상)</td></tr><tr><th scope="row" className="text-left p-3 border-b font-medium">진술문 원래 표현·위치</th><td className="p-3 border-b">ST-EX-01 · SRC-EX-01의 가상 메모: “현장에선 지휘관이 결정을 늦추면 대원들이 우왕좌왕해요.”</td></tr><tr><th scope="row" className="text-left p-3 border-b font-medium">현재 작업 표현</th><td className="p-3 border-b">“재난현장의 지휘관은 결정을 신속하게 내려야 한다.”</td></tr><tr><th scope="row" className="text-left p-3 border-b font-medium">처리 상태</th><td className="p-3 border-b">잠정 재작성 · 원문의 ‘대원 혼란’이 빠졌는지 6-4에서 재검토</td></tr></tbody></table></div>
            <h3 className="font-semibold mb-3">내 출처 대장</h3>
            <div className="overflow-x-auto mb-7"><table className="w-full text-sm border-collapse" style={{ minWidth: "700px" }}><thead><tr><th className="text-left p-3 border-b">출처 ID</th><th className="text-left p-3 border-b">유형·상세</th><th className="text-left p-3 border-b">6-1 범위와 연결</th><th className="text-left p-3 border-b">수집 방법·기간</th><th className="text-left p-3 border-b">수량·상태</th></tr></thead><tbody><tr><td className="p-3 border-b">SRC-01</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td></tr></tbody></table></div>
            <h3 className="font-semibold mb-3">내 원표현 기록</h3>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse" style={{ minWidth: "700px" }}><thead><tr><th className="text-left p-3 border-b">진술문 ID</th><th className="text-left p-3 border-b">출처 ID</th><th className="text-left p-3 border-b">원문·위치</th><th className="text-left p-3 border-b">현재 작업 표현</th><th className="text-left p-3 border-b">상태·메모</th></tr></thead><tbody><tr><td className="p-3 border-b">ST-001</td><td className="p-3 border-b">SRC-01</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td><td className="p-3 border-b text-gray-500">내 기록</td></tr></tbody></table></div>
            <p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>실제 확보한 표현 한 건을 연결해 보세요. 자료 생성 기간과 실제 수집 기간, 수집일·기록자를 구분해 별도 메모에 남깁니다. 현재 작업 표현은 아직 최종 Q진술문이 아닙니다.</p>
          </section>}
        </Fragment>)}
        <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="report-check"><h2 id="report-check" className="text-xl font-semibold mb-4">논문에 남길 항목</h2><ul className="space-y-2 text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}><li>□ 수집원과 각각을 선택한 이유</li><li>□ 실제 수집 방법과 자료·참여자의 범위</li><li>□ 자료 생성 기간과 검색·면담 수행 기간</li><li>□ 출처별 원응답 수와 확보한 진술문 수의 단위</li><li>□ 추가·변경한 수집원과 판단 이유</li><li>□ 후보 진술문을 원자료에서 다시 확인할 수 있는 기록 방식</li><li>□ 미정·원문 미명시 항목과 확인 계획</li></ul></section>
        <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="lesson-outputs"><h2 id="lesson-outputs" className="text-xl font-semibold mb-3">오늘의 산출물</h2><ol className="space-y-2 text-sm list-decimal pl-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}><li>Concourse 수집원 지도(Source Map): 선택 이유와 기대 관점</li><li>출처 대장(Source Register): 출처 ID와 수집 방법·상태</li><li>원표현 기록(Raw Statement Register): 진술문 ID와 원문·현재 표현</li></ol><p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>세 기록을 6-3의 입력자료로 넘깁니다. 가상 연습 행과 실제 확보한 자료의 행은 구분해 보관하세요.</p></section>
        <section className="mb-14 rounded-xl p-5 sm:p-6" style={{ background: "var(--gray-100)" }} aria-labelledby="lesson-takeaway"><h2 id="lesson-takeaway" className="text-xl font-semibold mb-3">오늘의 결론</h2><p className="text-sm" style={{ color: "var(--gray-800)", lineHeight: 1.8 }}>Concourse 수집은 자료를 많이 모으는 일이 아닙니다. 연구질문에 필요한 서로 다른 관점을 어디에서 확보할지 설계하고, 얻은 표현의 출처를 추적 가능하게 기록하는 과정입니다.</p><p className="text-sm mt-4" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>다음 질문: 모은 문장을 어떻게 구조화하고 Q표본 후보군을 만들까요? → 6-3. 구조화·비구조화 Q표본과 표집틀 설계</p></section>
        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }} aria-labelledby="references"><h2 id="references" className="text-2xl font-semibold mb-4">참고문헌</h2><ul className="space-y-5" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)", overflowWrap: "anywhere" }}>{references.map((ref) => <li key={ref.id} id={ref.id} className="scroll-mt-24">{ref.text}</li>)}</ul></section>
        <nav aria-label="강의 이동" className="pt-8 mt-12 flex flex-wrap items-center justify-between gap-4 border-t" style={{ borderColor: "var(--gray-200)" }}><Link href="/lessons/6-1" className="text-sm" style={{ color: "var(--brand-deep)" }}>← 6-1. 연구질문에서 Concourse의 범위 정하기</Link><span className="text-sm" style={{ color: "var(--gray-400)" }}>6-3. 구조화·비구조화 Q표본과 표집틀 설계 · 예정</span></nav>
      </div>
    </div>
  );
}
