export default function Footer() {
  return (
    <footer
      className="py-10 px-5 sm:px-8 text-center text-sm"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--gray-100)",
        color: "var(--gray-400)",
      }}
    >
      <p>
        Q방법론 온라인 강의 &middot; 대학원생을 위한 Q methodology 강의사이트 &middot;{" "}
        <a
          href="mailto:dorobo99@gmail.com"
          style={{ color: "var(--brand-deep)", textDecoration: "none" }}
        >
          dorobo99@gmail.com
        </a>
      </p>
    </footer>
  );
}
