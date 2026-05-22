import type { Metadata } from "next";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: { absolute: "thinkroom — autostimulus" },
  robots: { index: false, follow: false },
};

// The thinkroom server runs on its own subdomain (a long-running Node /
// WebSocket process — Vercel can't host that). Set this env var to the
// public URL of that deploy.
const THINKROOM_URL =
  process.env.NEXT_PUBLIC_THINKROOM_URL || "https://thinkroom.autostimulus.org";

export default function ThinkroomPortal() {
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
          autostimulus / thinkroom
        </div>

        <h1
          className="font-serif text-lg mb-sm"
          style={{ color: "var(--color-ink)", letterSpacing: "-0.015em", lineHeight: 1.15 }}
        >
          the room legible to itself, in real time.
        </h1>

        <p
          className="text-base mb-sm"
          style={{ color: "var(--color-ink-90)", lineHeight: 1.55 }}
        >
          thinkroom is an anonymous-participation classroom tool. Students
          respond to prompts on their phones; the projector shows the room’s
          distribution of views, never a name. Built for seminars in a
          contentious moment.
        </p>

        <ul
          className="font-mono text-xs mb-md"
          style={{
            color: "var(--color-ink-70)",
            listStyle: "none",
            padding: 0,
            lineHeight: 1.9,
          }}
        >
          <li>· anonymous by default — names are not collected</li>
          <li>· bidirectional transparency — no private moderation queue</li>
          <li>· no accounts, no telemetry, no third-party trackers</li>
          <li>· closes when the session ends</li>
        </ul>

        <div className="flex flex-col gap-3 mb-md">
          <a
            href={THINKROOM_URL}
            target="_blank"
            rel="noopener"
            className="font-mono uppercase text-xs inline-flex items-center justify-between"
            style={{
              padding: "14px 18px",
              letterSpacing: "0.16em",
              background: "var(--color-ink)",
              color: "var(--color-paper)",
              border: "1px solid var(--color-ink)",
              textDecoration: "none",
            }}
          >
            <span>launch a session</span>
            <span style={{ opacity: 0.6 }}>↗</span>
          </a>
          <p
            className="text-xs"
            style={{ color: "var(--color-ink-50)", lineHeight: 1.6 }}
          >
            opens {THINKROOM_URL.replace(/^https?:\/\//, "")} in a new tab.
            Use the launcher there to start the projector, instructor, and
            student windows.
          </p>
        </div>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid var(--color-ink-50)",
            opacity: 0.25,
            margin: "var(--spacing-md) 0",
          }}
        />

        <div className="font-mono text-xs" style={{ color: "var(--color-ink-70)", lineHeight: 1.7 }}>
          <div
            className="uppercase mb-xs"
            style={{ letterSpacing: "0.16em", color: "var(--color-ink-50)" }}
          >
            quick guide
          </div>
          <ol style={{ listStyle: "decimal", paddingLeft: "1.4rem", marginTop: 6 }}>
            <li>
              click <em>launch a session</em> above — it opens the thinkroom
              site in a new tab.
            </li>
            <li>
              on the landing page, the first-time guide walks you through
              picking a room code and opening projector + instructor tabs.
            </li>
            <li>
              students reach <span className="font-mono">/r/CODE</span> on
              their own phones — they scan the QR shown on the projector.
            </li>
            <li>
              edit your question in the instructor view; it appears live on
              the projector and on every student’s screen.
            </li>
          </ol>
        </div>

        <form action={signOut} className="mt-md">
          <button
            type="submit"
            className="font-mono uppercase text-xs"
            style={{
              background: "transparent",
              color: "var(--color-ink-50)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              letterSpacing: "0.14em",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            forget this device
          </button>
        </form>
      </div>
    </main>
  );
}
