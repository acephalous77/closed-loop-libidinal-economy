import type { Metadata } from "next";

/**
 * Layout for the withdrawn closed-loop section. The work is offline:
 * the cover renders a withdrawal notice and every sub-path 307-redirects
 * to it (next.config.ts), so this layout only ever wraps the notice.
 *
 * The project footer, math-tooltip processor, and framework JSON-LD that
 * used to mount here all pointed into the now-offline surfaces, so they
 * are gone. noindex is set at the section root as a backstop in case any
 * route slips past the redirect. Restoring the work is a git revert of
 * this file, page.tsx, and the next.config.ts redirect.
 */
export const metadata: Metadata = {
  title: {
    default: "The Closed-Loop Libidinal Economy",
    template: "%s — The Closed-Loop Libidinal Economy",
  },
  robots: { index: false, follow: false },
};

export default function ClosedLoopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
