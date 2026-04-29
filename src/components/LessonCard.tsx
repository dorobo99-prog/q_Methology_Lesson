import Image from "next/image";

interface LessonCardProps {
  title: React.ReactNode;
  keyMessage: React.ReactNode;
  description: React.ReactNode;
  points: React.ReactNode[];
  imageSrc: string;
  imageAlt: string;
  imageMaxWidth?: string;
  imageSide?: boolean;
  children: React.ReactNode;
}

export default function LessonCard({
  title,
  keyMessage,
  description,
  points,
  imageSrc,
  imageAlt,
  imageMaxWidth = "960px",
  imageSide = false,
  children,
}: LessonCardProps) {
  return (
    <section className="pt-10 sm:pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <h2
        className="font-semibold mb-5"
        style={{ fontSize: "22px", letterSpacing: "-0.3px", lineHeight: 1.3, color: "var(--black)" }}
      >
        {title}
      </h2>
      <p
        className="mb-4"
        style={{
          fontSize: "17px",
          lineHeight: 1.65,
          color: "var(--brand-deep)",
          fontWeight: 500,
          paddingLeft: "14px",
          borderLeft: "3px solid var(--brand)",
        }}
      >
        {keyMessage}
      </p>
      {description && (
        <p className="mb-7 text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
          {description}
        </p>
      )}

      <div className={`mb-6 flex gap-6 ${imageSide ? "flex-col md:flex-row md:items-start" : "flex-col"}`}>
        <div
          className="shrink-0 overflow-hidden"
          style={{ borderRadius: "12px", maxWidth: imageMaxWidth, width: "100%" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={960}
            height={720}
            className="w-full h-auto block"
          />
        </div>
        <ul className={`space-y-3 ${imageSide ? "flex-1" : ""}`}>
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3" style={{ color: "var(--gray-700)" }}>
              <span
                className="shrink-0 font-semibold mt-0.5"
                style={{
                  fontSize: "13px",
                  color: "var(--brand)",
                  fontFamily: "var(--font-mono)",
                  minWidth: "18px",
                }}
              >
                {i + 1}.
              </span>
              <span style={{ fontSize: "15px", lineHeight: 1.7 }}>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5" style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--gray-700)" }}>
        {children}
      </div>
    </section>
  );
}
