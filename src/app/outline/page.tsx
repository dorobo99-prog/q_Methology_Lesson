import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "강의 목차 | Q방법론 온라인 강의",
  description: "Q방법론 온라인 강의 전체 목차. 10부 22장 구성.",
};

type Status = "open" | "draft" | "locked";

interface Lesson {
  id: string;
  title: string;
  status: Status;
  href?: string;
}

interface Chapter {
  num: string;
  title: string;
  lessons: Lesson[];
}

interface Part {
  num: string;
  title: string;
  chapters: Chapter[];
}

const CURRICULUM: Part[] = [
  {
    num: "1부",
    title: "Q방법론 입문",
    chapters: [
      {
        num: "1장",
        title: "Q방법론이란 무엇인가",
        lessons: [
          { id: "1-1", title: "Q방법론의 정의와 연구문제", status: "open", href: "/lessons/1-1" },
          { id: "1-2", title: "Q방법론의 핵심 개념과 필요한 이유", status: "open", href: "/lessons/1-2" },
          { id: "1-3", title: "Q방법론에 대한 흔한 오해와 한계", status: "open", href: "/lessons/1-3" },
        ],
      },
    ],
  },
  {
    num: "2부",
    title: "Q방법론의 등장과 발전",
    chapters: [
      {
        num: "2장",
        title: "Q방법론이 등장한 이유",
        lessons: [
          { id: "2-1", title: "기존 사회과학 방법론의 한계", status: "open", href: "/lessons/2-1" },
          { id: "2-2", title: "Stephenson의 문제의식", status: "open", href: "/lessons/2-2" },
          { id: "2-3", title: "주관성의 과학적 탐구", status: "open", href: "/lessons/2-3" },
          { id: "2-4", title: "Q와 R의 분리", status: "locked" },
        ],
      },
      {
        num: "3장",
        title: "Q방법론의 역사와 현대적 발전",
        lessons: [
          { id: "3-1", title: "Stephenson 이후 Q방법론의 전개", status: "locked" },
          { id: "3-2", title: "Brown과 정치적 주관성 연구", status: "locked" },
          { id: "3-3", title: "Watts & Stenner와 현대 Q 연구 절차", status: "locked" },
          { id: "3-4", title: "최근 Q방법론의 보고 기준과 재현가능성 논의", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "3부",
    title: "Q와 R의 차이",
    chapters: [
      {
        num: "4장",
        title: "Q와 R은 무엇이 다른가",
        lessons: [
          { id: "4-1", title: "변수 중심 분석과 사람 중심 분석", status: "locked" },
          { id: "4-2", title: "R방법론의 논리", status: "locked" },
          { id: "4-3", title: "Q방법론의 논리", status: "locked" },
          { id: "4-4", title: "표본 개념의 차이", status: "locked" },
          { id: "4-5", title: "상관과 요인분석 대상의 차이", status: "locked" },
          { id: "4-6", title: "Q와 R 중 무엇을 선택할 것인가", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "4부",
    title: "Q 연구 절차",
    chapters: [
      {
        num: "5장",
        title: "Q 연구 절차 한눈에 보기",
        lessons: [
          { id: "5-1", title: "Q 연구의 전체 흐름", status: "locked" },
          { id: "5-2", title: "연구문제 설정", status: "locked" },
          { id: "5-3", title: "Concourse 수집", status: "locked" },
          { id: "5-4", title: "Q-set 구성", status: "locked" },
          { id: "5-5", title: "P-set 선정", status: "locked" },
          { id: "5-6", title: "Q-sort 시행", status: "locked" },
          { id: "5-7", title: "요인분석과 해석", status: "locked" },
          { id: "5-8", title: "논문 보고", status: "locked" },
        ],
      },
      {
        num: "6장",
        title: "Concourse와 Q-set 개발",
        lessons: [
          { id: "6-1", title: "Concourse란 무엇인가", status: "locked" },
          { id: "6-2", title: "Concourse 수집원", status: "locked" },
          { id: "6-3", title: "Q-set 개발 원리", status: "locked" },
          { id: "6-4", title: "좋은 진술문과 나쁜 진술문", status: "locked" },
          { id: "6-5", title: "Q-set 검토와 파일럿", status: "locked" },
          { id: "6-6", title: "Q-set 개발 보고 방법", status: "locked" },
        ],
      },
      {
        num: "7장",
        title: "P-set과 Q-sort",
        lessons: [
          { id: "7-1", title: "P-set의 의미", status: "locked" },
          { id: "7-2", title: "대표성보다 다양성이 중요한 이유", status: "locked" },
          { id: "7-3", title: "P-set 규모와 선정 기준", status: "locked" },
          { id: "7-4", title: "Q-sort의 의미", status: "locked" },
          { id: "7-5", title: "강제분포와 비강제분포", status: "locked" },
          { id: "7-6", title: "온라인 Q-sort 시행법", status: "locked" },
          { id: "7-7", title: "Post-sort interview", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "5부",
    title: "Q 분석의 원리",
    chapters: [
      {
        num: "8장",
        title: "Q 분석은 무엇을 계산하는가",
        lessons: [
          { id: "8-1", title: "Q 데이터의 구조", status: "locked" },
          { id: "8-2", title: "사람 간 상관행렬", status: "locked" },
          { id: "8-3", title: "Q에서 요인분석이 의미하는 것", status: "locked" },
          { id: "8-4", title: "분석 전 데이터 점검", status: "locked" },
        ],
      },
      {
        num: "9장",
        title: "요인추출과 회전",
        lessons: [
          { id: "9-1", title: "PCA의 기본 원리", status: "locked" },
          { id: "9-2", title: "Centroid의 기본 원리", status: "locked" },
          { id: "9-3", title: "PCA와 centroid의 차이", status: "locked" },
          { id: "9-4", title: "Varimax 회전", status: "locked" },
          { id: "9-5", title: "수동회전", status: "locked" },
          { id: "9-6", title: "회전이 해석에 미치는 영향", status: "locked" },
        ],
      },
      {
        num: "10장",
        title: "요인 수 결정",
        lessons: [
          { id: "10-1", title: "요인 수 결정의 중요성", status: "locked" },
          { id: "10-2", title: "고유값 기준", status: "locked" },
          { id: "10-3", title: "설명분산 기준", status: "locked" },
          { id: "10-4", title: "유의한 요인적재자 수", status: "locked" },
          { id: "10-5", title: "Humphrey's rule", status: "locked" },
          { id: "10-6", title: "해석가능성 기준", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "6부",
    title: "요인 해석",
    chapters: [
      {
        num: "11장",
        title: "요인적재치와 대표 Q-sort",
        lessons: [
          { id: "11-1", title: "요인적재치의 의미", status: "locked" },
          { id: "11-2", title: "유의수준 계산", status: "locked" },
          { id: "11-3", title: "Defining sort", status: "locked" },
          { id: "11-4", title: "Confounded sort", status: "locked" },
          { id: "11-5", title: "Non-significant sort", status: "locked" },
          { id: "11-6", title: "자동 flagging과 수동 판단", status: "locked" },
        ],
      },
      {
        num: "12장",
        title: "Z-score, factor array, 진술문 해석",
        lessons: [
          { id: "12-1", title: "Z-score란 무엇인가", status: "locked" },
          { id: "12-2", title: "Factor array 읽기", status: "locked" },
          { id: "12-3", title: "극단 진술문 해석", status: "locked" },
          { id: "12-4", title: "Distinguishing statements", status: "locked" },
          { id: "12-5", title: "Consensus statements", status: "locked" },
          { id: "12-6", title: "요인 명명과 유형 서사", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "7부",
    title: "소프트웨어 실습",
    chapters: [
      {
        num: "13장",
        title: "PQMethod",
        lessons: [
          { id: "13-1", title: "PQMethod란 무엇인가", status: "locked" },
          { id: "13-2", title: "설치와 기본 구조", status: "locked" },
          { id: "13-3", title: "데이터 입력", status: "locked" },
          { id: "13-4", title: "상관행렬 확인", status: "locked" },
          { id: "13-5", title: "요인추출", status: "locked" },
          { id: "13-6", title: "회전", status: "locked" },
          { id: "13-7", title: "결과표 읽기", status: "locked" },
        ],
      },
      {
        num: "14장",
        title: "R qmethod",
        lessons: [
          { id: "14-1", title: "R qmethod란 무엇인가", status: "locked" },
          { id: "14-2", title: "RStudio와 패키지 설치", status: "locked" },
          { id: "14-3", title: "데이터 구조", status: "locked" },
          { id: "14-4", title: "기본 분석 실행", status: "locked" },
          { id: "14-5", title: "PCA와 centroid 적용", status: "locked" },
          { id: "14-6", title: "Rotation 설정", status: "locked" },
          { id: "14-7", title: "결과 추출과 저장", status: "locked" },
        ],
      },
      {
        num: "15장",
        title: "PQMethod와 R qmethod 비교",
        lessons: [
          { id: "15-1", title: "공통 분석 흐름", status: "locked" },
          { id: "15-2", title: "입력 방식의 차이", status: "locked" },
          { id: "15-3", title: "출력 결과의 차이", status: "locked" },
          { id: "15-4", title: "재현가능성의 차이", status: "locked" },
          { id: "15-5", title: "어떤 상황에서 무엇을 쓸 것인가", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "8부",
    title: "논문에 싣기",
    chapters: [
      {
        num: "16장",
        title: "Q 논문의 기본 구조",
        lessons: [
          { id: "16-1", title: "서론에서 Q방법론을 제시하는 법", status: "locked" },
          { id: "16-2", title: "이론적 배경과 연구설계의 역할 구분", status: "locked" },
          { id: "16-3", title: "연구설계 파트 쓰는 법", status: "locked" },
          { id: "16-4", title: "분석결과 파트 쓰는 법", status: "locked" },
          { id: "16-5", title: "결론 및 시사점 쓰는 법", status: "locked" },
        ],
      },
      {
        num: "17장",
        title: "Q방법론 보고 체크리스트",
        lessons: [
          { id: "17-1", title: "Concourse 보고", status: "locked" },
          { id: "17-2", title: "Q-set 보고", status: "locked" },
          { id: "17-3", title: "P-set 보고", status: "locked" },
          { id: "17-4", title: "Q-sort 보고", status: "locked" },
          { id: "17-5", title: "요인추출과 회전 보고", status: "locked" },
          { id: "17-6", title: "요인해석 보고", status: "locked" },
          { id: "17-7", title: "표와 부록 구성", status: "locked" },
        ],
      },
      {
        num: "18장",
        title: "심사자가 자주 지적하는 문제",
        lessons: [
          { id: "18-1", title: "Q-set 개발 과정이 불투명한 경우", status: "locked" },
          { id: "18-2", title: "P-set 선정 근거가 약한 경우", status: "locked" },
          { id: "18-3", title: "요인 수 결정 근거가 부족한 경우", status: "locked" },
          { id: "18-4", title: "유형 이름이 피상적인 경우", status: "locked" },
          { id: "18-5", title: "결과와 결론이 연결되지 않는 경우", status: "locked" },
          { id: "18-6", title: "Q를 단순 유형분류로만 사용하는 경우", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "9부",
    title: "응용과 확장",
    chapters: [
      {
        num: "19장",
        title: "정책연구에서의 Q방법론",
        lessons: [
          { id: "19-1", title: "정책판단과 가치갈등", status: "locked" },
          { id: "19-2", title: "이해관계자 유형화", status: "locked" },
          { id: "19-3", title: "정책수용성 연구", status: "locked" },
          { id: "19-4", title: "의사결정 논리 분석", status: "locked" },
        ],
      },
      {
        num: "20장",
        title: "재난·위험연구에서의 Q방법론",
        lessons: [
          { id: "20-1", title: "위험인식 연구", status: "locked" },
          { id: "20-2", title: "재난대응 조직 연구", status: "locked" },
          { id: "20-3", title: "소방·재난 예산 인식 연구", status: "locked" },
          { id: "20-4", title: "실무자와 관리자의 인식 차이", status: "locked" },
        ],
      },
      {
        num: "21장",
        title: "혼합방법과 Q방법론",
        lessons: [
          { id: "21-1", title: "Q와 인터뷰", status: "locked" },
          { id: "21-2", title: "Q와 설문조사", status: "locked" },
          { id: "21-3", title: "Q와 사례연구", status: "locked" },
          { id: "21-4", title: "Q와 텍스트분석", status: "locked" },
          { id: "21-5", title: "Q와 네트워크 분석 가능성", status: "locked" },
        ],
      },
    ],
  },
  {
    num: "10부",
    title: "자료실",
    chapters: [
      {
        num: "22장",
        title: "체크리스트와 템플릿",
        lessons: [
          { id: "22-1", title: "Q 연구 전체 체크리스트", status: "locked" },
          { id: "22-2", title: "Concourse 수집 템플릿", status: "locked" },
          { id: "22-3", title: "Q-set 개발 템플릿", status: "locked" },
          { id: "22-4", title: "P-set 선정 템플릿", status: "locked" },
          { id: "22-5", title: "Q-sort 안내문 템플릿", status: "locked" },
          { id: "22-6", title: "Post-sort interview 질문지", status: "locked" },
          { id: "22-7", title: "논문작성 템플릿", status: "locked" },
        ],
      },
    ],
  },
];

type BadgeStyle = { label: string; bg: string; color: string };
const statusBadge: Record<Status, BadgeStyle> = {
  open:   { label: "공개", bg: "var(--white)", color: "var(--black)" },
  draft:  { label: "작성 중", bg: "var(--white)", color: "var(--black)" },
  locked: { label: "예정", bg: "var(--white)", color: "var(--gray-400)" },
};

export default function OutlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <section
        className="mb-12 px-5 py-6 sm:px-8 sm:py-8"
        style={{ background: "var(--gray-100)", borderRadius: "8px" }}
      >
        <div
          className="text-xs mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}
        >
          강의 목차
        </div>
        <h1
          className="font-semibold mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 44px)",
            lineHeight: 1.1,
            color: "var(--black)",
          }}
        >
          전체 강의 목차
        </h1>
        <p className="text-sm sm:text-base" style={{ color: "var(--gray-700)", maxWidth: "740px", lineHeight: 1.6 }}>
          대학원생을 위한 Q방법론 온라인 강의 전체 구조다. 공개된 강의는 바로 들어갈 수 있고,
          아직 열리지 않은 장은 순서대로 이어질 수 있도록 자리만 먼저 고정해 두었다.
        </p>

        <div className="flex flex-wrap gap-2 mt-7">
          {Object.values(statusBadge).map((v) => (
            <span
              key={v.label}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                fontFamily: "var(--font-mono)",
                background: v.bg,
                color: v.color,
                border: "1px solid var(--border-subtle)",
              }}
            >
              {v.label}
            </span>
          ))}
        </div>
      </section>

      {/* 목차 */}
      <div className="space-y-12">
        {CURRICULUM.map((part) => (
          <div key={part.num}>
            <h2
              className="font-semibold mb-5 pb-3"
              style={{
                fontSize: "20px",
                fontFamily: "var(--font-display)",
                color: "var(--black)",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ color: "var(--brand-deep)" }}>{part.num}.</span>{" "}
              {part.title}
            </h2>
            <div className="space-y-6 pl-2">
              {part.chapters.map((chapter) => (
                <div key={chapter.num}>
                  <h3
                    className="text-sm font-medium mb-2 ml-1"
                    style={{ color: "var(--gray-500)" }}
                  >
                    {chapter.num}. {chapter.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {chapter.lessons.map((lesson) => {
                      const badge = statusBadge[lesson.status];
                      const isOpen = lesson.status === "open" && lesson.href;
                      return (
                        <li
                          key={lesson.id}
                          className="flex items-center gap-3 py-1.5 px-3 rounded-lg transition-all"
                          style={{ background: isOpen ? "transparent" : undefined }}
                        >
                          <span
                            className="shrink-0 text-xs px-2.5 py-0.5 rounded-full"
                            style={{
                              fontFamily: "var(--font-mono)",
                              background: badge.bg,
                              color: badge.color,
                              border: "1px solid var(--border-subtle)",
                            }}
                          >
                            {badge.label}
                          </span>
                          {isOpen ? (
                            <Link
                              href={lesson.href!}
                              className="text-sm font-medium transition-colors"
                              style={{ color: "var(--brand-deep)" }}
                            >
                              {lesson.id}. {lesson.title}
                            </Link>
                          ) : (
                            <span className="text-sm" style={{ color: "var(--gray-400)" }}>
                              {lesson.id}. {lesson.title}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
