/**
 * lessons.ts — 강의 데이터 단일 소스
 *
 * 새 강의를 추가할 때 이 파일만 수정하면 됩니다.
 * - outline/page.tsx (강의 목차) 자동 반영
 * - page.tsx (랜딩 히어로 이미지 / "지금 읽을 수 있는 강의들") 자동 반영
 *
 * 공개 강의로 전환할 때:
 *   status: "locked" → "open"
 *   href, description, image 채우기
 */

export type LessonStatus = "open" | "draft" | "locked";

export interface Lesson {
  id: string;
  /** 정렬 키 — 부번호 × 100 + 장번호 (예: 1-3 → 103, 2-4 → 204) */
  order: number;
  title: string;
  status: LessonStatus;
  /** 공개 강의만 — 강의 페이지 경로 */
  href?: string;
  /** 공개 강의만 — 랜딩 카드 설명 */
  description?: string;
  /** 공개 강의만 — 랜딩 카드 + 히어로 풀 이미지 */
  image?: string;
}

export interface Chapter {
  num: string;
  title: string;
  lessons: Lesson[];
}

export interface Part {
  num: string;
  title: string;
  chapters: Chapter[];
}

/* ════════════════════════════════════════════════════════════════
   강의 목차 전체 — 여기만 수정하면 모든 페이지에 반영됩니다
   ════════════════════════════════════════════════════════════════ */
export const CURRICULUM: Part[] = [
  {
    num: "1부",
    title: "Q방법론 입문",
    chapters: [
      {
        num: "1장",
        title: "Q방법론이란 무엇인가",
        lessons: [
          {
            id: "1-1", order: 101, status: "open",
            title: "Q방법론의 정의와 연구문제",
            href: "/lessons/1-1",
            description: "Q방법론이 어떤 연구문제에 맞고, 무엇을 연구 대상으로 삼는지부터 시작합니다.",
            image: "/images/1-1-card-01-definition.webp",
          },
          {
            id: "1-2", order: 102, status: "open",
            title: "Q방법론의 핵심 개념과 필요한 이유",
            href: "/lessons/1-2",
            description: "주관성, concourse, Q-set, P-set, Q-sort가 어떻게 연결되는지 핵심 구조를 잡습니다.",
            image: "/images/1-2-card-01-subjectivity.webp",
          },
          {
            id: "1-3", order: 103, status: "open",
            title: "Q방법론에 대한 흔한 오해와 한계",
            href: "/lessons/1-3",
            description: "소표본 오해, 설문 혼동, 한계까지 솔직하게 정리합니다.",
            image: "/images/1-3-hero-misunderstanding-and-limitations.webp",
          },
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
          {
            id: "2-1", order: 201, status: "open",
            title: "기존 사회과학 방법론의 한계",
            href: "/lessons/2-1",
            description: "변수 중심 사고가 사람의 주관성을 어떻게 밀어냈는지 따라갑니다.",
            image: "/images/2-1-card-00-r-methodology-limits.webp",
          },
          {
            id: "2-2", order: 202, status: "open",
            title: "Stephenson의 문제의식",
            href: "/lessons/2-2",
            description: "왜 사람이 아니라 변수가 중심이 되었는지, Stephenson이 어디서 방향을 틀었는지 따라갑니다.",
            image: "/images/2-2-card-00-stephenson-problematic.webp",
          },
          {
            id: "2-3", order: 203, status: "open",
            title: "주관성의 과학적 탐구",
            href: "/lessons/2-3",
            description: "조작적 주관성, 개인내 유의성, 심리적 유의성을 연결해 Q방법론의 핵심을 설명합니다.",
            image: "/images/2-3-card-01-subjectivity-as-organization.webp",
          },
          {
            id: "2-4", order: 204, status: "open",
            title: "Q와 R의 분리",
            href: "/lessons/2-4",
            description: "Q와 R은 같은 통계 언어를 일부 공유하지만, 자료 구조·상관의 의미·요인 해석이 근본적으로 다릅니다.",
            image: "/images/2-4-card-00-separation-of-q-and-r.webp",
          },
        ],
      },
      {
        num: "3장",
        title: "Q방법론의 역사와 현대적 발전",
        lessons: [
          {
            id: "3-1", order: 301, status: "open",
            title: "Stephenson 이후 Q방법론의 전개",
            href: "/lessons/3-1",
            description: "Stephenson의 주관성의 과학이 Brown, Q 커뮤니티, 현대 절차화, 응용 연구, 보고 기준을 거쳐 어떻게 독자적 연구 전통으로 축적되었는지 본다.",
            image: "/images/3-1-hero-after-stephenson-development.webp",
          },
          {
            id: "3-2", order: 302, status: "open",
            title: "Brown과 정치적 주관성 연구",
            href: "/lessons/3-2",
            description: "Brown(1980)을 통해 Q방법론이 정치적 주관성, 조작적 주관성, 개인내 유의성의 사회과학 방법론으로 재정식화되는 과정을 살핀다.",
            image: "/images/3-2-hero-brown-political-subjectivity.webp",
          },
          { id: "3-3", order: 303, status: "locked", title: "Watts & Stenner와 현대 Q 연구 절차" },
          { id: "3-4", order: 304, status: "locked", title: "최근 Q방법론의 보고 기준과 재현가능성 논의" },
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
          { id: "4-1", order: 401, status: "locked", title: "변수 중심 분석과 사람 중심 분석" },
          { id: "4-2", order: 402, status: "locked", title: "R방법론의 논리" },
          { id: "4-3", order: 403, status: "locked", title: "Q방법론의 논리" },
          { id: "4-4", order: 404, status: "locked", title: "표본 개념의 차이" },
          { id: "4-5", order: 405, status: "locked", title: "상관과 요인분석 대상의 차이" },
          { id: "4-6", order: 406, status: "locked", title: "Q와 R 중 무엇을 선택할 것인가" },
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
          { id: "5-1", order: 501, status: "locked", title: "Q 연구의 전체 흐름" },
          { id: "5-2", order: 502, status: "locked", title: "연구문제 설정" },
          { id: "5-3", order: 503, status: "locked", title: "Concourse 수집" },
          { id: "5-4", order: 504, status: "locked", title: "Q-set 구성" },
          { id: "5-5", order: 505, status: "locked", title: "P-set 선정" },
          { id: "5-6", order: 506, status: "locked", title: "Q-sort 시행" },
          { id: "5-7", order: 507, status: "locked", title: "요인분석과 해석" },
          { id: "5-8", order: 508, status: "locked", title: "논문 보고" },
        ],
      },
      {
        num: "6장",
        title: "Concourse와 Q-set 개발",
        lessons: [
          { id: "6-1", order: 601, status: "locked", title: "Concourse란 무엇인가" },
          { id: "6-2", order: 602, status: "locked", title: "Concourse 수집원" },
          { id: "6-3", order: 603, status: "locked", title: "Q-set 개발 원리" },
          { id: "6-4", order: 604, status: "locked", title: "좋은 진술문과 나쁜 진술문" },
          { id: "6-5", order: 605, status: "locked", title: "Q-set 검토와 파일럿" },
          { id: "6-6", order: 606, status: "locked", title: "Q-set 개발 보고 방법" },
        ],
      },
      {
        num: "7장",
        title: "P-set과 Q-sort",
        lessons: [
          { id: "7-1", order: 701, status: "locked", title: "P-set의 의미" },
          { id: "7-2", order: 702, status: "locked", title: "대표성보다 다양성이 중요한 이유" },
          { id: "7-3", order: 703, status: "locked", title: "P-set 규모와 선정 기준" },
          { id: "7-4", order: 704, status: "locked", title: "Q-sort의 의미" },
          { id: "7-5", order: 705, status: "locked", title: "강제분포와 비강제분포" },
          { id: "7-6", order: 706, status: "locked", title: "온라인 Q-sort 시행법" },
          { id: "7-7", order: 707, status: "locked", title: "Post-sort interview" },
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
          { id: "8-1", order: 801, status: "locked", title: "Q 데이터의 구조" },
          { id: "8-2", order: 802, status: "locked", title: "사람 간 상관행렬" },
          { id: "8-3", order: 803, status: "locked", title: "Q에서 요인분석이 의미하는 것" },
          { id: "8-4", order: 804, status: "locked", title: "분석 전 데이터 점검" },
        ],
      },
      {
        num: "9장",
        title: "요인추출과 회전",
        lessons: [
          { id: "9-1", order: 901, status: "locked", title: "PCA의 기본 원리" },
          { id: "9-2", order: 902, status: "locked", title: "Centroid의 기본 원리" },
          { id: "9-3", order: 903, status: "locked", title: "PCA와 centroid의 차이" },
          { id: "9-4", order: 904, status: "locked", title: "Varimax 회전" },
          { id: "9-5", order: 905, status: "locked", title: "수동회전" },
          { id: "9-6", order: 906, status: "locked", title: "회전이 해석에 미치는 영향" },
        ],
      },
      {
        num: "10장",
        title: "요인 수 결정",
        lessons: [
          { id: "10-1", order: 1001, status: "locked", title: "요인 수 결정의 중요성" },
          { id: "10-2", order: 1002, status: "locked", title: "고유값 기준" },
          { id: "10-3", order: 1003, status: "locked", title: "설명분산 기준" },
          { id: "10-4", order: 1004, status: "locked", title: "유의한 요인적재자 수" },
          { id: "10-5", order: 1005, status: "locked", title: "Humphrey's rule" },
          { id: "10-6", order: 1006, status: "locked", title: "해석가능성 기준" },
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
          { id: "11-1", order: 1101, status: "locked", title: "요인적재치의 의미" },
          { id: "11-2", order: 1102, status: "locked", title: "유의수준 계산" },
          { id: "11-3", order: 1103, status: "locked", title: "Defining sort" },
          { id: "11-4", order: 1104, status: "locked", title: "Confounded sort" },
          { id: "11-5", order: 1105, status: "locked", title: "Non-significant sort" },
          { id: "11-6", order: 1106, status: "locked", title: "자동 flagging과 수동 판단" },
        ],
      },
      {
        num: "12장",
        title: "Z-score, factor array, 진술문 해석",
        lessons: [
          { id: "12-1", order: 1201, status: "locked", title: "Z-score란 무엇인가" },
          { id: "12-2", order: 1202, status: "locked", title: "Factor array 읽기" },
          { id: "12-3", order: 1203, status: "locked", title: "극단 진술문 해석" },
          { id: "12-4", order: 1204, status: "locked", title: "Distinguishing statements" },
          { id: "12-5", order: 1205, status: "locked", title: "Consensus statements" },
          { id: "12-6", order: 1206, status: "locked", title: "요인 명명과 유형 서사" },
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
          { id: "13-1", order: 1301, status: "locked", title: "PQMethod란 무엇인가" },
          { id: "13-2", order: 1302, status: "locked", title: "설치와 기본 구조" },
          { id: "13-3", order: 1303, status: "locked", title: "데이터 입력" },
          { id: "13-4", order: 1304, status: "locked", title: "상관행렬 확인" },
          { id: "13-5", order: 1305, status: "locked", title: "요인추출" },
          { id: "13-6", order: 1306, status: "locked", title: "회전" },
          { id: "13-7", order: 1307, status: "locked", title: "결과표 읽기" },
        ],
      },
      {
        num: "14장",
        title: "R qmethod",
        lessons: [
          { id: "14-1", order: 1401, status: "locked", title: "R qmethod란 무엇인가" },
          { id: "14-2", order: 1402, status: "locked", title: "RStudio와 패키지 설치" },
          { id: "14-3", order: 1403, status: "locked", title: "데이터 구조" },
          { id: "14-4", order: 1404, status: "locked", title: "기본 분석 실행" },
          { id: "14-5", order: 1405, status: "locked", title: "PCA와 centroid 적용" },
          { id: "14-6", order: 1406, status: "locked", title: "Rotation 설정" },
          { id: "14-7", order: 1407, status: "locked", title: "결과 추출과 저장" },
        ],
      },
      {
        num: "15장",
        title: "PQMethod와 R qmethod 비교",
        lessons: [
          { id: "15-1", order: 1501, status: "locked", title: "공통 분석 흐름" },
          { id: "15-2", order: 1502, status: "locked", title: "입력 방식의 차이" },
          { id: "15-3", order: 1503, status: "locked", title: "출력 결과의 차이" },
          { id: "15-4", order: 1504, status: "locked", title: "재현가능성의 차이" },
          { id: "15-5", order: 1505, status: "locked", title: "어떤 상황에서 무엇을 쓸 것인가" },
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
          { id: "16-1", order: 1601, status: "locked", title: "서론에서 Q방법론을 제시하는 법" },
          { id: "16-2", order: 1602, status: "locked", title: "이론적 배경과 연구설계의 역할 구분" },
          { id: "16-3", order: 1603, status: "locked", title: "연구설계 파트 쓰는 법" },
          { id: "16-4", order: 1604, status: "locked", title: "분석결과 파트 쓰는 법" },
          { id: "16-5", order: 1605, status: "locked", title: "결론 및 시사점 쓰는 법" },
        ],
      },
      {
        num: "17장",
        title: "Q방법론 보고 체크리스트",
        lessons: [
          { id: "17-1", order: 1701, status: "locked", title: "Concourse 보고" },
          { id: "17-2", order: 1702, status: "locked", title: "Q-set 보고" },
          { id: "17-3", order: 1703, status: "locked", title: "P-set 보고" },
          { id: "17-4", order: 1704, status: "locked", title: "Q-sort 보고" },
          { id: "17-5", order: 1705, status: "locked", title: "요인추출과 회전 보고" },
          { id: "17-6", order: 1706, status: "locked", title: "요인해석 보고" },
          { id: "17-7", order: 1707, status: "locked", title: "표와 부록 구성" },
        ],
      },
      {
        num: "18장",
        title: "심사자가 자주 지적하는 문제",
        lessons: [
          { id: "18-1", order: 1801, status: "locked", title: "Q-set 개발 과정이 불투명한 경우" },
          { id: "18-2", order: 1802, status: "locked", title: "P-set 선정 근거가 약한 경우" },
          { id: "18-3", order: 1803, status: "locked", title: "요인 수 결정 근거가 부족한 경우" },
          { id: "18-4", order: 1804, status: "locked", title: "유형 이름이 피상적인 경우" },
          { id: "18-5", order: 1805, status: "locked", title: "결과와 결론이 연결되지 않는 경우" },
          { id: "18-6", order: 1806, status: "locked", title: "Q를 단순 유형분류로만 사용하는 경우" },
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
          { id: "19-1", order: 1901, status: "locked", title: "정책판단과 가치갈등" },
          { id: "19-2", order: 1902, status: "locked", title: "이해관계자 유형화" },
          { id: "19-3", order: 1903, status: "locked", title: "정책수용성 연구" },
          { id: "19-4", order: 1904, status: "locked", title: "의사결정 논리 분석" },
        ],
      },
      {
        num: "20장",
        title: "재난·위험연구에서의 Q방법론",
        lessons: [
          { id: "20-1", order: 2001, status: "locked", title: "위험인식 연구" },
          { id: "20-2", order: 2002, status: "locked", title: "재난대응 조직 연구" },
          { id: "20-3", order: 2003, status: "locked", title: "소방·재난 예산 인식 연구" },
          { id: "20-4", order: 2004, status: "locked", title: "실무자와 관리자의 인식 차이" },
        ],
      },
      {
        num: "21장",
        title: "혼합방법과 Q방법론",
        lessons: [
          { id: "21-1", order: 2101, status: "locked", title: "Q와 인터뷰" },
          { id: "21-2", order: 2102, status: "locked", title: "Q와 설문조사" },
          { id: "21-3", order: 2103, status: "locked", title: "Q와 사례연구" },
          { id: "21-4", order: 2104, status: "locked", title: "Q와 텍스트분석" },
          { id: "21-5", order: 2105, status: "locked", title: "Q와 네트워크 분석 가능성" },
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
          { id: "22-1", order: 2201, status: "locked", title: "Q 연구 전체 체크리스트" },
          { id: "22-2", order: 2202, status: "locked", title: "Concourse 수집 템플릿" },
          { id: "22-3", order: 2203, status: "locked", title: "Q-set 개발 템플릿" },
          { id: "22-4", order: 2204, status: "locked", title: "P-set 선정 템플릿" },
          { id: "22-5", order: 2205, status: "locked", title: "Q-sort 안내문 템플릿" },
          { id: "22-6", order: 2206, status: "locked", title: "Post-sort interview 질문지" },
          { id: "22-7", order: 2207, status: "locked", title: "논문작성 템플릿" },
        ],
      },
    ],
  },
];

/* ── 자동 파생 — 아래는 수정하지 않아도 됩니다 ─────────────────── */

/** 공개된 강의 목록 (order 순) */
export const openLessons = CURRICULUM
  .flatMap((part) => part.chapters.flatMap((ch) => ch.lessons))
  .filter((l): l is Required<Lesson> => l.status === "open" && !!l.href)
  .sort((a, b) => a.order - b.order);

/** 히어로 이미지 풀 (공개 강의의 image에서 자동 생성) */
export const heroImages = openLessons
  .filter((l) => !!l.image)
  .map((l) => ({ src: l.image, alt: l.title }));
