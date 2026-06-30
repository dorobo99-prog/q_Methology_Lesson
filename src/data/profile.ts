export type Paper = {
  journal: string;
  kciGrade: string;
  title: string;
  meta: string;
  doi?: string;
};

export type Presentation = [year: string, title: string, venue: string];
export type Award = [title: string, year: string];

export const papers: Paper[] = [
  {
    journal: "한국정책학회보 · 2026",
    kciGrade: "KCI등재",
    title: "커뮤니티 위험 경감(Community Risk Reduction)에 대한 재난관리 실무자의 주관성 연구",
    meta: "백승창 & 이동규 · 35(2), 757-783",
    doi: "https://doi.org/10.33900/KAPS.2026.35.2.24",
  },
  {
    journal: "재무행정연구 · 2025",
    kciGrade: "KCI후보",
    title: "Systemic Risk 시대, 소방안전교부세 운용 딜레마에 관한 주관성 연구: Musgrave(1959) 재정 3기능의 재해석을 중심으로",
    meta: "백승창 & 이동규 · 5(3), 193-227",
  },
  {
    journal: "한국행정학보 · 2025",
    kciGrade: "KCI우수등재",
    title: "커뮤니티 위험 경감(Community Risk Reduction)에 대한 소방공무원의 주관성 연구",
    meta: "백승창 & 이동규 · 59(2), 207-231",
    doi: "https://doi.org/10.18333/kpar.59.2.207",
  },
  {
    journal: "국정관리연구 · 2024",
    kciGrade: "KCI등재",
    title: "한국형 회복탄력성 지수검사(KRQ-53)의 주관성 연구: 부산 소방서 119 안전센터 소방공무원을 중심으로",
    meta: "백승창, 김정훈 & 이동규 · 19(3), 65-91",
    doi: "https://doi.org/10.16973/JGS.2024.19.3.003",
  },
];

export const presentations: Presentation[] = [
  ["2026", "위험정보의 예산화 과정: 소방예산 위험판단의 주관성 구조", "한국행정학회 하계학술대회"],
  ["2026", "재난연구의 방법론적 편향과 주관성 분석의 공백 — Q방법론의 필요성에 관한 실증적 검토", "한국정책분석평가학회 춘계학술대회"],
  ["2026", "소방공무원의 소방예산 위험판단에 관한 연구", "한국정책학회 춘계학술대회"],
  ["2025", "Systemic Risk 시대의 소방안전교부세 활용에 대한 소방예산담당자 인식 유형 연구", "한국정책학회 동계학술대회 · 최우수논문상"],
  ["2025", "커뮤니티 위험 경감에 대한 재난관리 실무자의 주관성 연구", "한국행정학회 하계학술대회"],
  ["2025", "커뮤니티 위험 경감(CRR)에 대한 재난관리학 대학원생의 주관성 연구", "제10회 전국 행정학과 대학원생 학술대회 · 우수상"],
  ["2024", "부산광역시 B소방서 B119안전센터 소방공무원의 회복탄력성에 관한 주관성 연구", "제9회 전국 행정학과 대학원생 학술대회 · 특별상"],
  ["2024", "소방공무원의 커뮤니티 위험 경감에 관한 주관성 연구", "한국정책분석평가학회 동계학술대회"],
  ["2023", "부산지역 소방공무원의 회복탄력성에 관한 주관성 연구", "한국행정학회 동계학술대회"],
];

export const awards: Award[] = [
  ["한국정책학회 동계학술대회 최우수논문상", "2025"],
  ["제10회 전국 행정학과 대학원생 학술대회 우수상", "2025"],
  ["제9회 전국 행정학과 대학원생 학술대회 특별상", "2024"],
];
