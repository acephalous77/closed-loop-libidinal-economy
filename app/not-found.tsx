import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "not found — The Closed-Loop Libidinal Economy",
  description: "The page you requested does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-sm">
        <div className="text-center max-w-[var(--measure)]">
          <p
            aria-hidden="true"
            className="font-serif italic text-ink-50 text-2xl mb-md"
          >
            *
          </p>
          <h1 className="font-serif text-2xl text-ink mb-md">not found</h1>
          <p className="font-serif text-base text-ink-70 mb-lg">
            The page you requested does not exist, or has not been written yet.
          </p>
          <p className="font-mono text-sm">
            <a
              href="/"
              className="text-ink-90 hover:text-oxblood transition-colors duration-100"
            >
              ← return to the cover
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
