import type { Metadata } from "next";
import { submitPassword } from "../actions";

export const metadata: Metadata = {
  title: { absolute: "enter — thinkroom" },
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ error?: string; next?: string }>;
}

export default async function ThinkroomEnter({ searchParams }: PageProps) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const isConfigError = params.error === "config";
  const next = params.next ?? "/thinkroom";

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-md"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="w-full max-w-[28rem]">
        <div
          className="font-mono uppercase text-xs mb-md"
          style={{ letterSpacing: "0.18em", color: "var(--color-ink-50)" }}
        >
          autostimulus / thinkroom / enter
        </div>

        <h1
          className="font-serif text-md mb-xs"
          style={{ color: "var(--color-ink)", letterSpacing: "-0.01em" }}
        >
          A members-only seminar tool.
        </h1>
        <p
          className="text-sm mb-md"
          style={{ color: "var(--color-ink-70)", maxWidth: "26rem", lineHeight: 1.6 }}
        >
          thinkroom is a live, anonymous classroom instrument. It is not
          listed in the atelier index. If you have been given the passphrase,
          enter it below.
        </p>

        {isConfigError && (
          <p
            className="font-mono text-xs mb-sm"
            style={{ color: "var(--color-oxblood)" }}
          >
            this deploy is not yet configured. THINKROOM_PASSWORD and
            THINKROOM_COOKIE_SECRET must be set on the host.
          </p>
        )}
        {hasError && (
          <p
            className="font-mono text-xs mb-sm"
            style={{ color: "var(--color-oxblood)" }}
          >
            passphrase didn’t match. try again.
          </p>
        )}

        <form action={submitPassword} className="flex flex-col gap-3">
          <input type="hidden" name="next" value={next} />
          <input
            type="password"
            name="password"
            autoFocus
            autoComplete="off"
            placeholder="passphrase"
            className="font-mono"
            style={{
              padding: "12px 14px",
              fontSize: "0.95rem",
              background: "transparent",
              color: "var(--color-ink)",
              border: "1px solid var(--color-ink-50)",
              outline: "none",
              borderRadius: 0,
            }}
          />
          <button
            type="submit"
            className="font-mono uppercase text-xs"
            style={{
              padding: "12px 14px",
              letterSpacing: "0.16em",
              background: "var(--color-ink)",
              color: "var(--color-paper)",
              border: "1px solid var(--color-ink)",
              cursor: "pointer",
              borderRadius: 0,
            }}
          >
            enter
          </button>
        </form>

        <p
          className="font-mono text-xs mt-md"
          style={{ color: "var(--color-ink-50)", lineHeight: 1.6 }}
        >
          this page is not indexed. no tracking. no account is created.
          the gate is a single shared passphrase; the cookie expires in 30
          days or when you clear it.
        </p>
      </div>
    </main>
  );
}
