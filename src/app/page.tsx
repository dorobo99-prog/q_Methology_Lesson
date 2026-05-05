"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { openLessons, heroImages, type Lesson } from "@/data/lessons";

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

function pickRandom<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

export default function HomePage() {
  const [hero, setHero] = useState(heroImages[0]);
  const [featured, setFeatured] = useState<Lesson[]>(openLessons.slice(0, 3));

  useEffect(() => {
    setHero(heroImages[Math.floor(Math.random() * heroImages.length)]);
    const picked = pickRandom(openLessons, 3).sort((a, b) => a.order - b.order);
    setFeatured(picked);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ background: "var(--pure-black)", color: "var(--white)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-0">
          <div className="max-w-[820px]">
            <h1
              className="font-semibold"
              style={{
                fontSize: "clamp(44px, 7.4vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              관점의 차이를
              <br />
              연구 가능한 질서로.
            </h1>
            <p
              className="mt-6 max-w-[640px]"
              style={{
                fontSize: "21px",
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Q방법론은 사람들이 무엇을 더 중요하게 보고, 무엇을 뒤로 미루며, 어떤 방식으로 세계를
              배열하는지를 탐구합니다. 이 강의는 그 발상에서 분석과 보고까지를 대학원생의 연구
              언어로 정리합니다.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-9">
              <Link
                href="/lessons/1-1"
                className="inline-flex items-center justify-center"
                style={{
                  padding: "12px 26px",
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
                style={{
                  color: "var(--brand-dark-surface)",
                  fontSize: "17px",
                  textDecoration: "none",
                }}
              >
                전체 목차 보기 →
              </Link>
            </div>
          </div>

          {/* 히어로 이미지 — 랜덤 */}
          <div className="mt-14 sm:mt-20">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={2000}
              height={1100}
              className="w-full h-auto block"
              style={{ borderRadius: "18px" }}
              priority
            />
          </div>
        </div>
        <div className="h-20 sm:h-28" />
      </section>

      {/* STATS */}
      <section style={{ background: "var(--gray-100)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-12 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 36px)",
                    lineHeight: 1.1,
                    fontWeight: 600,
                    color: "var(--black)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "13px", color: "var(--gray-400)", marginTop: "6px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LESSONS — 랜덤 3개, 강의 순서 정렬 */}
      <section style={{ background: "var(--white)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-[760px] mb-12 sm:mb-16">
            <div style={{ fontSize: "13px", color: "var(--gray-400)", marginBottom: "10px" }}>
              공개된 강의
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: 1.1,
                fontWeight: 600,
                color: "var(--black)",
                letterSpacing: "-0.015em",
              }}
            >
              지금 바로 읽을 수 있는 강의들
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {featured.map((lesson) => (
              <Link
                key={lesson.id}
                href={lesson.href!}
                className="group block"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="-mx-5 w-[calc(100%+40px)] sm:mx-0 sm:w-[500px] md:w-full"
                  style={{
                    aspectRatio: "16 / 10",
                    position: "relative",
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: "var(--gray-100)",
                  }}
                >
                  <Image
                    src={lesson.image!}
                    alt={lesson.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="pt-5">
                  <div
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--gray-400)",
                      marginBottom: "8px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    {lesson.id}
                  </div>
                  <h3
                    style={{
                      fontSize: "21px",
                      lineHeight: 1.2,
                      fontWeight: 600,
                      color: "var(--black)",
                      letterSpacing: "-0.01em",
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
                  <div style={{ color: "var(--brand)", fontSize: "14px", marginTop: "16px" }}>
                    강의 보기 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "var(--gray-100)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-[760px] mb-12 sm:mb-16">
            <div style={{ fontSize: "13px", color: "var(--gray-400)", marginBottom: "10px" }}>
              강의 방향
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 44px)",
                lineHeight: 1.1,
                fontWeight: 600,
                color: "var(--black)",
                letterSpacing: "-0.015em",
              }}
            >
              개념 설명에서 멈추지 않고 연구 작업까지.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{ borderTop: "1px solid var(--border-medium)", paddingTop: "20px" }}
              >
                <h3
                  style={{
                    fontSize: "19px",
                    lineHeight: 1.25,
                    fontWeight: 600,
                    color: "var(--black)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
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
      </section>

      {/* CTA */}
      <section style={{ background: "var(--pure-black)", color: "var(--white)" }}>
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.1,
              fontWeight: 600,
              letterSpacing: "-0.015em",
            }}
          >
            처음부터 순서대로.
          </h2>
          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "560px",
              margin: "18px auto 0",
            }}
          >
            정의, 역사, 개념, 절차, 분석, 보고까지 이어지는 전체 흐름을 목차에서 먼저 훑고
            첫 강의부터 들어오면 가장 자연스럽습니다.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            <Link
              href="/outline"
              style={{
                padding: "12px 26px",
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
                color: "var(--brand-dark-surface)",
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              1강 바로 시작 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
