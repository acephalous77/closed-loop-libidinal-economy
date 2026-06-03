"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Closed-loop project footer — mounted via app/closed-loop/layout.tsx,
 * so it only appears inside the closed-loop project routes.
 *
 * Three rows of wayfinding, plus a small atelier-back link to navigate
 * up to autostimulus.org root. The section the reader is currently
 * inside is marked in ink-90 (vs ink-50 for the others), so they always
 * know which surface they are on. Hairline divider above; mono · xs
 * register recedes when not the focus.
 */
export function SiteFooter() {
  const pathname = usePathname() || "/";

  const isActive = (prefix: string) => {
    if (prefix === "/closed-loop") return pathname === "/closed-loop";
    return pathname === prefix || pathname.startsWith(prefix + "/");
  };

  const linkClass = (active: boolean) =>
    "transition-colors duration-100 " +
    (active
      ? "text-ink-90"
      : "text-ink-50 hover:text-oxblood");

  return (
    <footer className="print-hide w-full mt-2xl pt-md pb-md border-t border-paper-85">
      <div className="mx-auto max-w-[var(--container-page)] px-sm flex flex-col sm:flex-row items-baseline justify-between gap-sm text-center sm:text-left">
        <p className="font-mono text-xs text-ink-50">
          <Link
            href="/closed-loop"
            className={linkClass(isActive("/closed-loop"))}
          >
            the closed-loop libidinal economy
          </Link>
        </p>
        <nav aria-label="Site sections" className="font-mono text-xs text-ink-50">
          <Link href="/closed-loop/v2-argument" className={linkClass(isActive("/closed-loop/v2-argument"))}>
            the argument
          </Link>
          <span aria-hidden="true" className="mx-xs">·</span>
          <Link href="/closed-loop/the-apparatus" className={linkClass(isActive("/closed-loop/the-apparatus"))}>
            the apparatus
          </Link>
          <span aria-hidden="true" className="mx-xs">·</span>
          <Link href="/closed-loop/v2-dynamics" className={linkClass(isActive("/closed-loop/v2-dynamics"))}>
            the dynamics
          </Link>
          <span aria-hidden="true" className="mx-xs">·</span>
          <Link href="/closed-loop/the-instruments" className={linkClass(isActive("/closed-loop/the-instruments"))}>
            the instruments
          </Link>
          <span aria-hidden="true" className="mx-xs">·</span>
          <Link href="/closed-loop/glossary" className={linkClass(isActive("/closed-loop/glossary"))}>
            the glossary
          </Link>
        </nav>
        <p className="font-mono text-xs text-ink-50">
          <Link href="/closed-loop/the-architecture" className={linkClass(isActive("/closed-loop/the-architecture"))}>
            the architecture
          </Link>
          <span aria-hidden="true" className="mx-xs">·</span>
          <Link href="/closed-loop/the-colophon" className={linkClass(isActive("/closed-loop/the-colophon"))}>
            the colophon
          </Link>
        </p>
      </div>
      <div className="mx-auto max-w-[var(--container-page)] px-sm mt-sm text-center sm:text-left">
        <Link
          href="/"
          className="font-mono text-xs text-ink-50 hover:text-oxblood transition-colors duration-100"
        >
          ↑ autostimulus
        </Link>
      </div>
    </footer>
  );
}
