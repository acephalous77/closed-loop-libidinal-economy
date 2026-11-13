"use client";

import Link from "next/link";

/**
 * Route-level error boundary. Without it, an exception in any client
 * instrument (WebGL, a canvas, a simulation) replaces the whole site with
 * Next's default error screen. The prose and the ways back must survive.
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-md"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="w-full max-w-[42rem]">
        <div
          className="font-mono uppercase text-xs mb-md"
          style={{ letterSpacing: "0.18em", color: "var(--color-ink-50)" }}
        >
          autostimulus / error
        </div>
        <h1
          className="font-serif text-lg mb-sm"
          style={{ color: "var(--color-ink)", letterSpacing: "-0.015em", lineHeight: 1.15 }}
        >
          This page failed to render.
        </h1>
        <p
          className="text-base mb-md"
          style={{ color: "var(--color-ink-90)", lineHeight: 1.55 }}
        >
          The surrounding record is intact. Try the page again; if it keeps
          failing, the route is the fault, not the reading.
        </p>
        <div className="flex flex-wrap gap-sm font-mono text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "10px 16px",
              background: "var(--color-ink)",
              color: "var(--color-paper)",
              border: "1px solid var(--color-ink)",
              cursor: "pointer",
            }}
          >
            try again
          </button>
          <Link
            href="/"
            style={{
              padding: "10px 16px",
              border: "1px solid var(--color-ink)",
              color: "var(--color-ink)",
              textDecoration: "none",
            }}
          >
            ↑ autostimulus
          </Link>
        </div>
      </div>
    </main>
  );
}
