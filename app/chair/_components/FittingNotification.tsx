"use client";

/**
 * FittingNotification — one-shot interrupt that fires after ~45s of dwell.
 *
 * Slides in from bottom-right as if the apparatus had pushed an OS-level
 * notification onto the visitor's machine. Three states:
 *
 *   1. INCOMING — the notification itself. Shows a fake fitting
 *      appointment scheduled with a named consultant from the
 *      blacklist, with [ CONFIRM ] and [ ✕ REFUSE ] buttons.
 *
 *   2. CONFIRMED — if visitor clicks CONFIRM, the notification turns red,
 *      alarms, says "WAIT. THINK ABOUT THIS." with a single REFUSE
 *      escape button.
 *
 *   3. REFUSED — visitor clicks ✕ REFUSE, the notification flashes
 *      green, says "§6 FILED · STATUS: AWAITING ROUTING." then mocks
 *      itself: "DO YOU SERIOUSLY THINK THAT WILL WORK?" before
 *      auto-dismissing.
 *
 * Only fires once per session (localStorage). Can be reset by clearing
 * site data.
 */

import React, { useEffect, useState } from "react";

const BLACK = "#0a0908";
const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const NEON_GREEN = "#39ff14";
const NEON_PINK = "#ff2a8a";
const STAMP_RED = "#e63a2c";
const MUTED = "#6b6760";

const SANS = `var(--font-geist), system-ui, sans-serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const ANTON = `var(--font-anton), Impact, sans-serif`;
const MARKER = `var(--font-permanent-marker), cursive`;

const CONSULTANTS = [
  { name: "Walters, R.", badge: "OIS-44-2811", region: "Lafayette" },
  { name: "Bezdek, M.", badge: "OIS-44-3019", region: "Park Slope" },
  { name: "Okoroafor, B.", badge: "OIS-44-2204", region: "Crown Heights" },
  { name: "Solano, P.", badge: "OIS-44-3122", region: "Bushwick" },
  { name: "Frye, T.", badge: "OIS-44-2998", region: "Greenpoint" },
  { name: "Helene-Petit", badge: "OIS-44-3401", region: "Lower East Side" },
];

const TIMES = ["09:15", "11:42", "13:08", "14:22", "15:51", "16:30"];
const DAYS = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type Phase = "incoming" | "confirmed" | "refused" | "gone";

export function FittingNotification({ delayMs = 45000 }: { delayMs?: number }) {
  const [phase, setPhase] = useState<Phase>("gone");
  const [appointment] = useState(() => {
    const c = CONSULTANTS[(Math.random() * CONSULTANTS.length) | 0];
    const time = TIMES[(Math.random() * TIMES.length) | 0];
    const day = DAYS[(Math.random() * DAYS.length) | 0];
    return { ...c, time, day };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const k = "chair-zine-fitting-notif-shown";
    try {
      if (sessionStorage.getItem(k)) return;
    } catch {}
    const t = window.setTimeout(() => {
      setPhase("incoming");
      try { sessionStorage.setItem(k, "1"); } catch {}
    }, delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  // Auto-dismiss after refused state for a few seconds
  useEffect(() => {
    if (phase !== "refused") return;
    const t = window.setTimeout(() => setPhase("gone"), 6500);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  const tone =
    phase === "incoming" ? PAPER
    : phase === "confirmed" ? STAMP_RED
    : NEON_GREEN;
  const border =
    phase === "incoming" ? `1px solid ${PAPER_DIM}`
    : phase === "confirmed" ? `2px solid ${STAMP_RED}`
    : `2px solid ${NEON_GREEN}`;

  return (
    <div
      role="dialog"
      aria-label="Ouroboros Industries fitting notification"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 99,
        width: 380,
        maxWidth: "calc(100vw - 48px)",
        background: BLACK,
        color: PAPER,
        border,
        padding: "16px 18px 18px",
        fontFamily: SANS,
        boxShadow:
          phase === "confirmed"
            ? `0 0 0 4px rgba(230,58,44,0.15), 0 12px 32px rgba(0,0,0,0.7)`
            : `0 12px 32px rgba(0,0,0,0.7)`,
        animation:
          phase === "confirmed"
            ? "fitting-shake 0.45s ease-in-out 1, fitting-pulse 1.2s ease-in-out infinite"
            : "fitting-slide-in 0.5s ease-out 1",
      }}
    >
      <style>{`
        @keyframes fitting-slide-in {
          from { transform: translateY(120%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fitting-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(230,58,44,0); }
          50% { box-shadow: 0 0 0 8px rgba(230,58,44,0.18); }
        }
        @keyframes fitting-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(2px); }
        }
      `}</style>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
          paddingBottom: 10,
          borderBottom: `1px solid rgba(240,235,226,0.18)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: tone,
              boxShadow: `0 0 8px ${tone}`,
              animation: phase === "incoming" ? "fitting-pulse 1.6s ease-out infinite" : undefined,
            }}
          />
          <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.22em", color: tone, textTransform: "uppercase", fontWeight: 600 }}>
            {phase === "incoming" && "Ouroboros Industries · OS-Push"}
            {phase === "confirmed" && "◆ CONSENT REGISTERED · WAIT"}
            {phase === "refused" && "§6 FILED · ROUTING"}
          </span>
        </div>
        <button
          aria-label="Dismiss"
          onClick={() => setPhase("gone")}
          style={{
            background: "transparent",
            border: "none",
            color: MUTED,
            cursor: "pointer",
            fontSize: 16,
            lineHeight: 1,
            padding: 0,
            fontFamily: MONO,
          }}
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      {phase === "incoming" && (
        <>
          <div
            style={{
              fontFamily: ANTON,
              fontSize: 24,
              color: PAPER,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              marginBottom: 10,
              textTransform: "uppercase",
            }}
          >
            Fitting consultant<br />
            <span style={{ color: NEON_PINK }}>scheduled.</span>
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 14,
              lineHeight: 1.55,
              color: PAPER_DIM,
              marginBottom: 16,
            }}
          >
            <div style={{ color: PAPER, fontWeight: 600 }}>
              {appointment.time} {appointment.day} · {appointment.name}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: NEON_PINK, letterSpacing: "0.12em", marginTop: 2 }}>
              {appointment.badge} · {appointment.region}
            </div>
            <div style={{ marginTop: 8 }}>
              Your residence address has been verified through Cohort Records.
              Please confirm to expedite installation.
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setPhase("confirmed")}
              style={{
                flex: 1,
                padding: "10px 14px",
                background: PAPER,
                color: BLACK,
                border: "none",
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Confirm
            </button>
            <button
              onClick={() => setPhase("refused")}
              style={{
                flex: 1,
                padding: "10px 14px",
                background: "transparent",
                color: NEON_GREEN,
                border: `1px solid ${NEON_GREEN}`,
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              ✕ Refuse
            </button>
          </div>
        </>
      )}

      {phase === "confirmed" && (
        <>
          <div
            style={{
              fontFamily: ANTON,
              fontSize: 26,
              color: PAPER,
              lineHeight: 1.05,
              letterSpacing: "0.01em",
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            Wait.<br />
            <span style={{ color: STAMP_RED }}>Think about this.</span>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: PAPER_DIM, marginBottom: 14 }}>
            You just consented to {appointment.name} at your door at {appointment.time} {appointment.day}.
            Adaeze Nwankwo consented at this stage. So did Jeremiah Walsh.
            Their consents are on file. The two of them are not.
          </div>
          <button
            onClick={() => setPhase("refused")}
            style={{
              width: "100%",
              padding: "12px 14px",
              background: STAMP_RED,
              color: PAPER,
              border: "none",
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ✕ Take it back
          </button>
        </>
      )}

      {phase === "refused" && (
        <>
          <div
            style={{
              fontFamily: ANTON,
              fontSize: 24,
              color: PAPER,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              marginBottom: 10,
              textTransform: "uppercase",
            }}
          >
            §6 filed.<br />
            <span style={{ color: NEON_GREEN }}>routing.</span>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: PAPER_DIM, marginBottom: 6 }}>
            Withdrawal request submitted to §6 Office.
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: MARKER,
              fontSize: 18,
              color: NEON_PINK,
              transform: "rotate(-1deg)",
              lineHeight: 1.2,
            }}
          >
            do you seriously think that will work?
          </div>
          <div
            style={{
              marginTop: 8,
              fontFamily: MONO,
              fontSize: 9,
              color: MUTED,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            ◆ this notification will dismiss in 6s · keep organizing
          </div>
        </>
      )}
    </div>
  );
}
