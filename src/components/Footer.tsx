export default function Footer() {
  return (
    <footer
      className="py-8 px-8 text-center text-sm"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.05)",
        color: "var(--gray-500)",
      }}
    >
      <p>
        Q방법론 온라인 강의 &middot; 대학원생을 위한 Q methodology 강의사이트 &middot;{" "}
        <a
          href="mailto:dorobo99@gmail.com"
          style={{ color: "var(--brand)", textDecoration: "underline" }}
        >
          dorobo99@gmail.com
        </a>
      </p>
    </footer>
  );
}
