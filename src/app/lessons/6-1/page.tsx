import type { Metadata } from "next";
import Link from "next/link";
import CoursePageHero from "@/components/CoursePageHero";

export const metadata: Metadata = {
  title: "6-1. 연구질문에서 Concourse의 범위 정하기 | Q방법론 온라인 강의",
  description: "선행연구의 Concourse 범위 설정 사례를 비교하고 자기 연구의 대상·상황·시간·쟁점과 자료 기준을 정리합니다.",
};

const cards = [
  {
    num: 1,
    "title": "자료를 모으기 전에, 어떤 관점을 찾는지 묻는다",
    "keyMessage": "연구질문은 수집할 담론의 주제와 맥락을 정하는 출발점입니다.",
    "paragraphs": [
      "5-3에서는 진술문 모집단(Concourse)이 Q표본(Q-set)의 바탕이 된다는 점을 배웠습니다. 이번에는 자기 연구에서 어떤 말과 경험을 수집할지 범위를 정합니다. Concourse의 정의를 다시 외우기보다, 선행연구의 질문과 자료가 어떻게 연결되는지부터 살펴보겠습니다.",
      "Kenward(2019)는 보건의료 분야 Q연구 44편을 검토하면서 Concourse 개발에 사용한 프레임워크와 그 보고를 분석했습니다. 이 고찰에는 연구자가 문헌·인터뷰에서 생성한 주제, 직종 고유 모델, 넓은 보건·사회 이론, 연구자가 고안한 차원을 사용한 접근이 함께 나타납니다. 범위와 자료를 조직하는 방식에는 여러 선택지가 있었다는 뜻입니다.",
      "이 결과를 모든 분야의 연구자가 같은 틀을 따라야 한다는 규칙으로 읽어서는 안 됩니다. Kenward의 검토 대상은 보건의료 분야였고, 사용된 접근을 분류한 결과입니다. 이번 강의에서는 이 보고의 문제의식을 이어받아 “내 질문에 관련된 자료는 무엇이며, 그 관련성을 어떻게 설명할 것인가”를 확인하겠습니다."
    ],
    "sources": [
      "kenward2019"
    ]
  },
  {
    num: 2,
    "title": "조산사 연구: 탐구 대상과 자료의 출처를 구분한다",
    "keyMessage": "네덜란드 조산사의 관점을 연구하면서도, 그 관점을 탐구할 자료는 국제 문헌까지 넓혔습니다.",
    "paragraphs": [
      "Fontein-Kuipers(2016)는 네덜란드 조산사의 여성 중심 돌봄(Woman-centered care) 관점을 탐구하기 위한 Q표본 개발 과정을 기술했습니다. 질문의 초점은 조산사가 여성 중심 돌봄을 어떻게 바라보는가에 있습니다. 따라서 조산사의 돌봄 경험과 그 개념을 둘러싼 표현이 수집의 연결점이 됩니다.",
      "이 연구는 국제 학술문헌, 전문지와 보고서, 미디어, 개인 면담과 예술 자료 등을 수집했습니다. 국제 학술문헌의 초기 검색에는 국가 제한을 두지 않았고, 전문 검토에는 영어·네덜란드어 논문을 포함했습니다. 반면 조산사 면담과 최종 선별·검증은 네덜란드 맥락에 놓여 있었습니다. 연구 대상의 국가와 모든 자료 출처의 국가가 같았던 것은 아닙니다(Fontein-Kuipers, 2016).",
      "이 사례에서 가져올 설계 질문은 “누구의 관점을 탐구하는가”와 “그 관점을 표현할 재료를 어디까지 찾는가”를 구분하는 것입니다. 국제 자료를 포함했다는 이유만으로 최종 Q표본이 모든 국가의 조산사 관점을 포괄한다고 말할 수는 없습니다. 저자도 네덜란드 전문가에 의한 최종 선별·검증의 문화적 한계를 논의했습니다."
    ],
    "sources": [
      "fontein2016"
    ]
  },
  {
    num: 3,
    "title": "교사 소진 연구: 넓은 개념을 특정 경험에 연결한다",
    "keyMessage": "소진이라는 개념은 한국 중등교사의 교직 경험이라는 연구 맥락에서 구체화되었습니다.",
    "paragraphs": [
      "Shim 등(2024)은 한국 중등교사들이 교직 생활에서 겪는 심리적 소진(Psychological burnout)을 어떻게 인식하는지 탐구했습니다. 같은 소진이라도 어떤 직업·경험을 대상으로 하느냐에 따라 수집할 표현은 달라집니다. 이 연구의 질문은 교직 경험을 중심에 둡니다.",
      "연구자들은 관련 문헌에서 121개 진술문을 추출하고, 중·고등학교 교사 10명의 서면 면담에서 220개를 얻어 초기 Concourse 341개를 구성했습니다. 문헌의 개념 언어와 교사가 자신의 경험을 설명하는 언어를 함께 사용한 사례입니다(Shim et al., 2024). 341개는 이 연구의 초기 수집 결과이며, 다른 연구의 목표 수량으로 옮겨 쓰는 숫자는 아닙니다.",
      "문헌에서 확인되는 것과 빈칸도 구분해야 합니다. 이 연구의 Concourse 절에는 수집 방식과 참여 교사 구성이 보고되지만, 문헌 검색과 서면 면담의 구체적 시작·종료 일자는 명시되어 있지 않습니다. 출판연도나 윤리심의 승인일을 수집 기간으로 대신 적을 수 없습니다. 선행연구를 참고할 때도 확인된 범위만 기록하겠습니다."
    ],
    "sources": [
      "shim2024"
    ]
  },
  {
    num: 4,
    "title": "웨어러블 기술 연구: 같은 주제라도 판단 위치가 다르다",
    "keyMessage": "환자와 의료 전문가를 구분해 두 연구의 진술문 목록을 개발했습니다.",
    "paragraphs": [
      "Alsulami 등(2024)은 사우디아라비아의 다발성 경화증(Multiple sclerosis) 환자와 의료 전문가가 웨어러블 기술을 어떻게 바라보는지 탐구할 두 Q연구를 위해 Concourse와 Q표본을 개발했습니다. 기술이라는 공통 주제 안에서도 사용하는 환자와 진료·관리를 맡는 의료 전문가의 위치를 구분한 설계입니다.",
      "환자 연구와 의료 전문가 연구에는 별도의 초기 진술문 목록과 최종 Q표본이 개발되었습니다. 기존 문헌과 스코핑 리뷰에서 얻은 표현을 이론적 틀과 연결하고, 이해관계자 검토와 번역·역번역, 파일럿을 거쳐 다듬었습니다. 두 연구를 준비한 과정은 한 주제의 자료를 누구의 판단에 맞게 구성할지 검토한 사례로 읽을 수 있습니다(Alsulami et al., 2024).",
      "이것이 모든 집단에 별도 Q표본을 만들어야 한다는 의무 기준은 아닙니다. 서로 다른 집단의 배열을 직접 비교하려는 연구라면 공통 진술문과 지시 조건의 설계가 별도 쟁점이 됩니다. 여기서는 선행연구가 누구의 관점을 다루는지 먼저 구분했다는 사실을 가져옵니다. Q표본의 표집틀과 실제 진술문 선별은 6-3 이후에서 다룹니다."
    ],
    "sources": [
      "alsulami2024"
    ]
  },
  {
    num: 5,
    "title": "시간과 포함 기준은 출처별로 확인한다",
    "keyMessage": "출판연도, 자료가 만들어진 기간, 연구자가 검색·면담한 기간을 구분합니다.",
    "paragraphs": [
      "Fontein-Kuipers(2016)의 연구에서는 자료 유형에 따라 시간 범위가 달랐습니다. 국제 학술문헌 검색은 2015년 9~11월에 수행했고, 네덜란드 조산사 전문지는 2010년 1월부터 2015년 7월까지의 출간물을 검토했습니다. 조산사 면담은 2015년 3~5월에 진행되었습니다. 이 날짜들은 서로 다른 활동과 자료 범위를 가리킵니다.",
      "학술문헌 선별에는 여성 중심 돌봄과 관련된 정의·개념 분석의 기준이 사용되었습니다. 자료 유형에 따라 언어와 지역의 조건도 달랐습니다(Fontein-Kuipers, 2016). 따라서 “관련 자료를 모았다”는 요약만으로는 무엇을 포함했는지 알기 어렵습니다. 검색·선별 기준과 해당 자료 유형을 연결해 읽어야 합니다.",
      "다음은 이 사례를 활용하는 강의용 판단 연습입니다. 여성 중심 돌봄의 개념과 관계없는 일반 인력 통계표라면 우선 범위 밖으로 둘 수 있습니다. 돌봄을 제공하는 조건을 논의하는 자료라면 관련성을 다시 검토할 수 있습니다. 이 두 판단은 저자가 보고한 제외 사례가 아니라 교육용 예시입니다. 자료의 찬반 방향보다 연구질문과의 관련성을 설명하는 연습으로 사용하세요."
    ],
    "sources": [
      "fontein2016"
    ]
  },
  {
    num: 6,
    "title": "내 연구의 범위표를 만들고, 수집 계획으로 넘긴다",
    "keyMessage": "선행연구에서 확인한 질문·대상·맥락·시간·자료 기준을 자기 연구의 설계 기록으로 옮깁니다.",
    "paragraphs": [
      "세 사례를 나란히 놓으면 연구질문에 연결되는 자료의 범위를 확인할 수 있습니다. 조산사 연구는 여성 중심 돌봄과 네덜란드 맥락을, 교사 연구는 한국 중등교사의 소진 경험을, 웨어러블 기술 연구는 환자와 의료 전문가의 판단 위치를 드러냅니다(Fontein-Kuipers, 2016; Shim et al., 2024; Alsulami et al., 2024).",
      "아래 범위표는 이 사례들을 비교해 만든 강의용 설계 도구입니다. 어느 한 저자의 공식 단계나 검증된 척도가 아닙니다. 각 칸에 자기 연구의 선택과 이유를 쓰고, 결정하지 못한 부분은 미정으로 남기세요. 범위를 정하는 것은 어떤 응답이 나와야 하는지 미리 정하는 일과 다릅니다. 예상과 다른 관점도 질문과 관련되면 검토할 수 있도록 포함 기준을 적어봅니다.",
      "이번 회차의 산출물은 대상·상황·시간·쟁점과 포함·제외 이유를 설명하는 범위표입니다. 누가, 어디에서, 어떤 자료를 실제로 수집할지와 출처 대장의 구성은 6-2에서 이어갑니다. 수집 중 관련된 새 쟁점을 발견하면 범위표를 수정하고 그 이유를 기록하세요. 이 수정 안내 역시 선행연구 사례를 활용한 강의용 적용 제안입니다."
    ],
    "sources": [
      "fontein2016",
      "shim2024",
      "alsulami2024"
    ]
  }
];
const references = [
  {
    "id": "alsulami2024",
    "label": "Alsulami 등(2024)",
    "text": "Alsulami, S., Konstantinidis, S. Th., & Wharrad, H. (2024). Development of a concourse for two Q-method studies exploring perspectives of patients with multiple sclerosis and healthcare professionals on the use of wearable technology—Lessons learnt. In Digital Health and Informatics Innovations for Sustainable Health Care Systems (pp. 466–470). IOS Press.",
    "doi": "10.3233/SHTI240449"
  },
  {
    "id": "fontein2016",
    "label": "Fontein-Kuipers(2016)",
    "text": "Fontein-Kuipers, Y. (2016). Development of a Q-set for a Q-method study about midwives’ perspectives of woman-centered care. Health Education and Care, 1(2), 31–36.",
    "doi": "10.15761/HEC.1000107"
  },
  {
    "id": "kenward2019",
    "label": "Kenward(2019)",
    "text": "Kenward, L. (2019). A literature review to guide novice researchers using Q methodology in the development of a framework for concourse management. Nurse Researcher, 27(1), 17–21.",
    "doi": "10.7748/nr.2019.e1616"
  },
  {
    "id": "shim2024",
    "label": "Shim 등(2024)",
    "text": "Shim, T., Jun, M., & Lee, S. Y. (2024). How do Korean secondary school teachers perceive psychological burnout in their teaching careers? Behavioral Sciences, 14(12), 1210.",
    "doi": "10.3390/bs14121210"
  }
];
const scopeFields = [
  [
    "연구질문",
    "어떤 판단·경험에 관한 관점을 탐구하는가?"
  ],
  [
    "대상",
    "누구의 관점을 탐구하며, 자료를 제공할 사람은 누구인가?"
  ],
  [
    "상황·맥락",
    "어떤 활동·제도·지역·문화적 상황을 다루는가?"
  ],
  [
    "시간",
    "자료의 생성 기간과 검색·면담 수행 기간을 각각 어떻게 정할 것인가?"
  ],
  [
    "쟁점",
    "질문에 관련된 개념·경험은 무엇이며, 아직 열어둘 쟁점은 무엇인가?"
  ],
  [
    "포함·제외 기준",
    "어떤 자료를 포함·보류·제외하며, 관련성과 판단 이유를 어떻게 기록할 것인가?"
  ]
];

export default function LessonSixOnePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <CoursePageHero
        breadcrumbs={[{ label: "강의 목차", href: "/outline" }, { label: "4부" }, { label: "6-1. 연구질문에서 Concourse의 범위 정하기" }]}
        statusLabel="공개" versionLabel="v1.0 · 2026-09-18"
        title="연구질문에서 Concourse의 범위 정하기"
        description={metadata.description as string}
        imageSrc="/images/6-1-hero-concourse-scope.webp"
        imageAlt="강의용 설계도: 연구질문을 대상·상황·시간·쟁점의 범위와 연결한다"
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
        <section className="mb-14" aria-labelledby="scope-worksheet">
          <h2 id="scope-worksheet" className="text-2xl font-semibold mb-3">내 연구의 Concourse 범위표</h2>
          <p className="text-sm mb-5" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>선행연구 사례를 활용한 강의용 도구입니다. 각 항목에 내 선택과 이유를 적고, 결정하지 못한 부분은 미정으로 남기세요.</p>
          <dl className="space-y-3">
            {scopeFields.map(([label, question]) => (
              <div key={label} className="rounded-lg p-4 sm:p-5" style={{ background: "var(--gray-100)" }}>
                <dt className="font-semibold text-sm mb-2">{label}</dt>
                <dd className="text-sm" style={{ color: "var(--gray-700)", lineHeight: 1.7 }}>{question}</dd>
                <dd className="text-xs mt-3" style={{ color: "var(--gray-500)" }}>내 선택 · 이유 · 미정 항목을 기록하세요.</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm mt-5" style={{ lineHeight: 1.7, color: "var(--gray-700)" }}>범위표를 작성했다면 6-2에서 수집원과 출처 기록을 설계합니다. 수집 중 범위가 바뀌면 변경 이유도 함께 남기세요.</p>
        </section>
        <section className="mt-16 border-t pt-8" style={{ borderColor: "var(--gray-200)" }} aria-labelledby="references">
          <h2 id="references" className="text-2xl font-semibold mb-4">참고문헌</h2>
          <ul className="space-y-5" style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray-700)", overflowWrap: "anywhere" }}>
            {references.map((ref) => <li key={ref.id} id={ref.id} className="scroll-mt-24">{ref.text}{" "}<a href={`https://doi.org/${ref.doi}`} className="underline underline-offset-2">https://doi.org/{ref.doi}</a></li>)}
          </ul>
        </section>
        <nav aria-label="강의 이동" className="pt-8 mt-12 flex flex-wrap items-center justify-between gap-4 border-t" style={{ borderColor: "var(--gray-200)" }}>
          <Link href="/lessons/5-8" className="text-sm" style={{ color: "var(--brand-deep)" }}>← 5-8. Q 연구를 논문으로 옮기는 흐름</Link>
          <span className="text-sm" style={{ color: "var(--gray-400)" }}>6-2. Concourse 수집원과 출처 기록 · 예정</span>
        </nav>
      </div>
    </div>
  );
}
