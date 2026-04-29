import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 h-12"
      style={{
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <Link
        href="/"
        style={{
          color: "var(--white)",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0",
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
