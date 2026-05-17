"use client";

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
          <a
            href="/closed-loop"
            className={linkClass(isActive("/closed-loop"))}
          >
            the closed-loop libidinal economy
          </a>
        </p>
        <nav aria-label="Site sections" className="font-mono text-xs text-ink-50">
          <a href="/closed-loop/the-argument" className={linkClass(isActive("/closed-loop/the-argument"))}>
            the argument
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/closed-loop/the-mathematics" className={linkClass(isActive("/closed-loop/the-mathematics"))}>
            the mathematics
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/closed-loop/the-dynamics" className={linkClass(isActive("/closed-loop/the-dynamics"))}>
            the dynamics
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/closed-loop/reading-list" className={linkClass(isActive("/closed-loop/reading-list"))}>
            reading list
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/closed-loop/open-questions" className={linkClass(isActive("/closed-loop/open-questions"))}>
            open questions
          </a>
        </nav>
        <p className="font-mono text-xs text-ink-50">
          <a href="/closed-loop/colophon" className={linkClass(isActive("/closed-loop/colophon"))}>
            colophon
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/closed-loop/instrumentation" className={linkClass(isActive("/closed-loop/instrumentation"))}>
            instrumentation
          </a>
        </p>
      </div>
      <div className="mx-auto max-w-[var(--container-page)] px-sm mt-sm text-center sm:text-left">
        <a
          href="/"
          className="font-mono text-xs text-ink-50 hover:text-oxblood transition-colors duration-100"
        >
          ↑ autostimulus
        </a>
      </div>
    </footer>
  );
}
