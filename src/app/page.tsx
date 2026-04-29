import Image from "next/image";
import Link from "next/link";

const releasedLessons = [
  {
    id: "1-1",
    title: "Q방법론의 정의와 연구문제",
    description: "Q방법론이 어떤 연구문제에 맞고, 무엇을 연구 대상으로 삼는지부터 시작합니다.",
    href: "/lessons/1-1",
    image: "/images/1-1-card-01-definition.webp",
  },
  {
    id: "2-2",
    title: "Stephenson의 문제의식",
    description: "왜 사람이 아니라 변수가 중심이 되었는지, Stephenson이 어디서 방향을 틀었는지 따라갑니다.",
    href: "/lessons/2-2",
    image: "/images/2-2-card-00-stephenson-problematic.webp",
  },
  {
    id: "2-3",
    title: "주관성의 과학적 탐구",
    description: "조작적 주관성, 개인내 유의성, 심리적 유의성을 연결해 Q방법론의 핵심을 설명합니다.",
    href: "/lessons/2-3",
    image: "/images/2-3-card-01-subjectivity-as-organization.webp",
  },
];

const pillars = [
  {
    title: "원전에서 시작",
    text: "Stephenson, Brown, Watts & Stenner를 따라가며 개념이 어떻게 생기고 바뀌는지 차근히 읽습니다.",
  },
  {
    title: "논문까지 연결",
    text: "강의는 정의에서 멈추지 않고, 설계, 분석, 보고, 심사 대응까지 이어지는 연구 작업을 염두에 둡니다.",
  },
  {
    title: "가치 갈등을 다루는 방법",
    text: "정책, 위험, 안전, 교육처럼 평균만으로는 설명되지 않는 문제에서 관점 구조를 어떻게 읽는지 배웁니다.",
  },
];

const stats = [
  { value: "10부", label: "파트 구성" },
  { value: "22장", label: "챕터 수" },
  { value: "70+", label: "전체 강의 편수" },
  { value: "대학원생", label: "주 대상" },
];

export default function HomePage() {
  return (
    <div>
      <section style={{ background: "var(--pure-black)", color: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] gap-10 lg:gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center rounded-full mb-5 px-3 py-1"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "12px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                현재 1부와 2부 일부 공개 중
              </div>

              <h1
                className="font-semibold"
                style={{
                  fontSize: "clamp(40px, 7vw, 64px)",
                  lineHeight: 1.07,
                  letterSpacing: "0",
                  maxWidth: "11ch",
                }}
              >
                관점의 차이를
                <br />
                연구 가능한
                <br />
                질서로 읽는 법
              </h1>

              <p
                className="mt-5 max-w-[620px]"
                style={{
                  fontSize: "21px",
                  lineHeight: 1.42,
                  color: "rgba(255,255,255,0.76)",
                }}
              >
                Q방법론은 사람들이 무엇을 더 중요하게 보고, 무엇을 뒤로 미루며, 어떤 방식으로
                세계를 배열하는지를 탐구하는 방법입니다. 이 강의는 그 발상에서 분석과 보고까지를
                대학원생의 연구 언어로 정리합니다.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/lessons/1-1"
                  className="inline-flex items-center justify-center"
                  style={{
                    minWidth: "136px",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    background: "var(--brand)",
                    color: "var(--white)",
                    fontSize: "17px",
                    textDecoration: "none",
                  }}
                >
                  1강 시작하기
                </Link>
                <Link
                  href="/outline"
                  className="inline-flex items-center justify-center"
                  style={{
                    minWidth: "136px",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.28)",
                    color: "var(--brand-dark-surface)",
                    fontSize: "17px",
                    textDecoration: "none",
                  }}
                >
                  전체 목차 보기
                </Link>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "var(--dark-surface-1)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <Image
                  src="/images/2-3-card-01-subjectivity-as-organization.webp"
                  alt="Q방법론 강의 메인 시각 이미지"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                  priority
                />
                <div className="px-5 sm:px-6 py-5">
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.48)",
                      marginBottom: "8px",
                    }}
                  >
                    공개 강의 하이라이트
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.14,
                      fontFamily: "var(--font-display)",
                      color: "var(--white)",
                    }}
                  >
                    주관성은 의견의 잔여가 아니라
                    <br />
                    관점의 조직이다
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-100)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-[980px] mx-auto px-5 sm:px-8 py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "40px",
                  lineHeight: 1.1,
                  fontWeight: 600,
                  color: "var(--black)",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: "var(--gray-400)", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="max-w-[760px] mb-10">
            <div style={{ fontSize: "12px", color: "var(--gray-400)", marginBottom: "8px" }}>
              공개된 강의
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: 1.1,
                fontWeight: 600,
                color: "var(--black)",
              }}
            >
              지금 바로 읽을 수 있는
              <br />
              핵심 강의들
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {releasedLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={lesson.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  background: "var(--gray-100)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "block",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ aspectRatio: "16 / 10", position: "relative" }}>
                  <Image
                    src={lesson.image}
                    alt={lesson.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="px-5 py-5">
                  <div style={{ fontSize: "12px", color: "var(--gray-400)", marginBottom: "8px" }}>
                    {lesson.id}
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      lineHeight: 1.14,
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      color: "var(--black)",
                    }}
                  >
                    {lesson.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "var(--gray-700)",
                      marginTop: "10px",
                    }}
                  >
                    {lesson.description}
                  </p>
                  <div style={{ color: "var(--brand-deep)", fontSize: "14px", marginTop: "18px" }}>
                    강의 보기
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-100)" }}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start">
            <div>
              <div style={{ fontSize: "12px", color: "var(--gray-400)", marginBottom: "8px" }}>
                강의 방향
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 44px)",
                  lineHeight: 1.1,
                  fontWeight: 600,
                  color: "var(--black)",
                }}
              >
                개념을 설명하는 데서 그치지 않고
                <br />
                연구 작업까지 이어집니다
              </h2>
            </div>

            <div className="grid gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="px-5 py-5"
                  style={{
                    background: "var(--white)",
                    borderRadius: "8px",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "21px",
                      lineHeight: 1.19,
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                      color: "var(--black)",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.68,
                      color: "var(--gray-700)",
                      marginTop: "10px",
                    }}
                  >
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--pure-black)", color: "var(--white)" }}>
        <div className="max-w-[980px] mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.1,
              fontWeight: 600,
              maxWidth: "14ch",
              margin: "0 auto",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>Q방법론을 처음부터</span>
            <br />
            연구 언어로 배우기
          </h2>
          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.42,
              color: "rgba(255,255,255,0.76)",
              maxWidth: "720px",
              margin: "18px auto 0",
            }}
          >
            정의, 역사, 개념, 절차, 분석, 보고까지 이어지는 전체 흐름은 목차에서 먼저 훑고,
            첫 강의부터 순서대로 들어오면 가장 자연스럽습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/outline"
              style={{
                minWidth: "148px",
                padding: "10px 20px",
                borderRadius: "999px",
                background: "var(--brand)",
                color: "var(--white)",
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              강의 목차 보기
            </Link>
            <Link
              href="/lessons/1-1"
              style={{
                minWidth: "148px",
                padding: "10px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "var(--brand-dark-surface)",
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              1강 바로 시작
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
