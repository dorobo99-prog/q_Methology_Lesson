import Image from "next/image";

interface LessonCardProps {
  title: string;
  keyMessage: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function LessonCard({
  title,
  keyMessage,
  description,
  points,
  imageSrc,
  imageAlt,
  children,
}: LessonCardProps) {
  return (
    <section
      style={{
        background: "var(--white)",
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "24px",
        boxShadow: "rgba(0,0,0,0.03) 0px 2px 4px",
        overflow: "hidden",
      }}
    >
      {/* 카드 헤더 */}
      <div className="px-8 pt-8 pb-6" style={{ borderLeft: "3px solid var(--brand)" }}>
        <h2
          className="font-semibold mb-3"
          style={{ fontSize: "24px", letterSpacing: "-0.24px", color: "var(--black)" }}
        >
          {title}
        </h2>
        <p
          className="font-medium mb-2"
          style={{ fontSize: "16px", color: "var(--brand-deep)" }}
        >
          {keyMessage}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
          {description}
        </p>
      </div>

      {/* 이미지 + 3포인트 */}
      <div
        className="px-8 py-6"
        style={{
          background: "var(--gray-50)",
          borderTop: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div
            className="w-full md:w-[576px] shrink-0 overflow-hidden"
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.05)",
              maxWidth: "100%",
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto block"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <ul className="space-y-3 flex-1 pt-1">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--gray-700)" }}>
                <span
                  className="shrink-0 w-5 h-5 flex items-center justify-center text-xs font-semibold rounded-full mt-0.5"
                  style={{
                    background: "var(--brand-light)",
                    color: "var(--brand-deep)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {i + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 강의 원고 */}
      <div className="px-8 py-8" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div
          className="space-y-4 text-sm leading-relaxed"
          style={{ color: "var(--gray-700)" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
