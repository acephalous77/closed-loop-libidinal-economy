import Link from "next/link";
import type { ReactNode } from "react";

type Current = "works" | "author" | "colophon";

const NAV = [
  { key: "works", label: "Works", href: "/#works" },
  { key: "author", label: "Author", href: "/author" },
  { key: "colophon", label: "Colophon", href: "/colophon" },
] as const;

export function PressMasthead({ current }: { current?: Current }) {
  return (
    <header className="press-masthead">
      <div className="press-masthead-inner">
        <Link href="/" className="press-wordmark">
          autostimulus
        </Link>
        <nav className="press-nav" aria-label="Site">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={current === item.key ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function PressFooter({ note }: { note?: ReactNode }) {
  return (
    <footer className="press-footer">
      <p className="press-footer-line">
        © 2026 A. Selimović. Published by autostimulus.
      </p>
      {note ? <p className="press-footer-note">{note}</p> : null}
    </footer>
  );
}
