import Link from "next/link";

export default function Header() {
  return (
    <header
        className="sticky top-0 z-50 flex items-center justify-between px-8 h-14"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "var(--black)",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "-0.28px",
            textDecoration: "none",
          }}
        >
          Q방법론 강의
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/outline" className="nav-link">강의 목차</Link>
          <Link href="/lessons/1-1" className="nav-cta">1강 시작</Link>
        </nav>
      </header>
  );
}
