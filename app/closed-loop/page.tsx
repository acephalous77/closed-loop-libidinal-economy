import type { Metadata } from "next";
import Link from "next/link";

/**
 * Withdrawal notice. The Closed-Loop Libidinal Economy work has been
 * taken offline. Every /closed-loop/* deep-link 307-redirects here
 * (see next.config.ts) so citations and bookmarks land on this notice
 * rather than a 404. noindex keeps it out of search while it is down;
 * the route source for the full work is preserved in git, so restoring
 * it is a revert.
 *
 * Copy below is a placeholder in the section's register — Adnan sets
 * the final wording and the reason (withdrawn / in preparation / etc.).
 */
export const metadata: Metadata = {
  title: { absolute: "The Closed-Loop Libidinal Economy — offline" },
  description: "This work is offline.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/closed-loop" },
};

export default function Withdrawn() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-sm text-center">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink-50 mb-md">
        offline
      </p>

      <h1 className="font-serif text-3xl text-ink leading-none tracking-tight">
        <span className="block">the closed-loop</span>
        <span className="block">libidinal economy</span>
      </h1>

      <p className="font-serif italic text-lg text-ink-70 mt-md max-w-[34rem] leading-snug">
        This work has been taken offline while a stable, citable version is
        prepared.
      </p>

      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.16em] text-ink-50 hover:text-oxblood transition-colors mt-2xl"
      >
        ↑ autostimulus
      </Link>
    </main>
  );
}
