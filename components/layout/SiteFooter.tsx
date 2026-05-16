"use client";

import { usePathname } from "next/navigation";

/**
 * Site footer — sits at the bottom of every page via the root layout.
 * Wayfinding nav (argument · mathematics · dynamics · reading list)
 * with the section the reader is currently inside marked in ink-90
 * (vs ink-50 for the others), so they always know which surface they
 * are on. Hairline divider above; mono · xs register recedes when not
 * the focus.
 */
export function SiteFooter() {
  const pathname = usePathname() || "/";

  const isActive = (prefix: string) => {
    if (prefix === "/") return pathname === "/";
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
            href="/"
            className={linkClass(isActive("/"))}
          >
            the closed-loop libidinal economy
          </a>
        </p>
        <nav aria-label="Site sections" className="font-mono text-xs text-ink-50">
          <a href="/the-argument" className={linkClass(isActive("/the-argument"))}>
            the argument
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/the-mathematics" className={linkClass(isActive("/the-mathematics"))}>
            the mathematics
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/the-dynamics" className={linkClass(isActive("/the-dynamics"))}>
            the dynamics
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/reading-list" className={linkClass(isActive("/reading-list"))}>
            reading list
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/open-questions" className={linkClass(isActive("/open-questions"))}>
            open questions
          </a>
        </nav>
        <p className="font-mono text-xs text-ink-50">
          <a href="/colophon" className={linkClass(isActive("/colophon"))}>
            colophon
          </a>
          <span aria-hidden="true" className="mx-xs">·</span>
          <a href="/instrumentation" className={linkClass(isActive("/instrumentation"))}>
            instrumentation
          </a>
        </p>
      </div>
    </footer>
  );
}
