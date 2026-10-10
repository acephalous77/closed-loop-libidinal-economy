"use client";
/* ============================================================
   ARTWORK — generative, made-here brutalist visuals
   LedgerCard (a life as a ledger) · BlisterPack (affect, dosed)
   ============================================================ */
import React from "react";
import { prefersReducedMotion } from "@/lib/motion";

/* ---------- the life ledger ---------- */
const LEDGER_ROWS = [
  { y: "00", e: "account opened", a: "$0.00" },
  { y: "02", e: "first licensed love", a: "redact" },
  { y: "06", e: "attention, trained to dart", a: "$1,240" },
  { y: "13", e: "redact", a: "$4,900" },
  { y: "17", e: "arousal, rendered to data", a: "redact" },
  { y: "24", e: "co-authored desire", a: "$38,400" },
  { y: "41", e: "redact", a: "$61,500" },
  { y: "58", e: "age successfully™", a: "$9,400" },
  { y: "73", e: "memory, sold back", a: "redact" },
  { y: "84", e: "exit, booked as input", a: "$7,400" },
];
const RBAR = (w: string) => (
  <span
    style={{
      display: "inline-block",
      height: 9,
      width: w,
      background: "var(--bone)",
      verticalAlign: "middle",
    }}
  />
);

export function LedgerCard() {
  const [bal, setBal] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const total = 2380000;
    const io = new IntersectionObserver(
      (ents) => {
        if (ents[0].isIntersecting) {
          // Honor reduced-motion: settle on the final figure, skip the count-up.
          if (prefersReducedMotion()) {
            setBal(total);
          } else {
            const t0 = performance.now(),
              dur = 1700;
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / dur);
              setBal(Math.round(total * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="ledger">
      <div className="ledger-stamp mono">SOLD</div>
      <div className="ledger-head">
        <div>
          <div className="mono ledger-t">Life Ledger</div>
          <div className="mono ledger-sub">acct #00-0000-0001 · holder: you</div>
        </div>
        <div className="mono ledger-sub" style={{ textAlign: "right" }}>
          status
          <br />
          <span style={{ color: "var(--acc)" }}>ACTIVE</span>
        </div>
      </div>
      <div className="ledger-cols mono">
        <span>yr</span>
        <span>entry</span>
        <span style={{ textAlign: "right" }}>booked</span>
      </div>
      <div className="ledger-rows">
        {LEDGER_ROWS.map((r, i) => (
          <div key={i} className="ledger-row mono">
            <span className="ld-yr">{r.y}</span>
            <span className="ld-e">{r.e === "redact" ? RBAR("66%") : r.e}</span>
            <span className="ld-a">{r.a === "redact" ? RBAR("38px") : r.a}</span>
          </div>
        ))}
      </div>
      <div className="ledger-foot">
        <div className="flex between center">
          <span className="mono ledger-sub">lifetime balance extracted</span>
          <span className="mono ledger-bal">${bal.toLocaleString("en-US")}</span>
        </div>
        <div className="barcode" style={{ marginTop: 12, height: 38, opacity: 0.85 }} />
        <div className="mono ledger-sub" style={{ marginTop: 8, letterSpacing: ".18em" }}>
          4 0 0 2 · 8 1 9 9 · 0 0 0 1 · CRIB↦GRAVE
        </div>
      </div>
    </div>
  );
}

/* ---------- affect, dosed: a clinical blister pack ---------- */
type Pod = { l: string; t: "tab" | "cap"; taken?: boolean; c?: string };
const PODS: Pod[] = [
  { l: "SSRI", t: "tab", taken: true },
  { l: "BENZO", t: "cap", c: "var(--acc)" },
  { l: "STIM", t: "cap" },
  { l: "SLEEP", t: "tab", taken: true },
  { l: "THE PILL", t: "tab", c: "var(--acc)" },
  { l: "LOW-T", t: "cap" },
  { l: "FOCUS", t: "tab" },
  { l: "CALM", t: "cap", taken: true },
  { l: "MOOD", t: "tab" },
  { l: "PERFORM", t: "cap", c: "var(--acc)" },
  { l: "VITALITY", t: "tab" },
  { l: "+ MORE", t: "cap" },
];
export function BlisterPack() {
  const [taken, setTaken] = React.useState<boolean[]>(() => PODS.map((p) => !!p.taken));
  const pop = (i: number) => setTaken((s) => s.map((v, j) => (j === i ? !v : v)));
  const n = taken.filter(Boolean).length;
  return (
    <div className="blister">
      <div className="blister-head">
        <span className="mono">AFFECT · daily dose</span>
        <span className="mono" style={{ color: "var(--bone-faint)" }}>
          Rx&nbsp;{RBAR("40px")}
        </span>
      </div>
      <div className="blister-grid">
        {PODS.map((p, i) => (
          <button
            key={i}
            className={"pod" + (taken[i] ? " taken" : "")}
            onClick={() => pop(i)}
            title={taken[i] ? "taken" : "take"}
          >
            <span className="pod-cell">
              {taken[i] ? (
                <span className="pod-check">✓</span>
              ) : p.t === "cap" ? (
                <span className="pill-cap" style={{ "--pc": p.c || "var(--bone)" } as React.CSSProperties} />
              ) : (
                <span className="pill-tab" style={{ "--pc": p.c || "var(--bone)" } as React.CSSProperties} />
              )}
            </span>
            <span className="pod-lab mono">{p.l}</span>
          </button>
        ))}
      </div>
      <div className="blister-foot flex between center">
        <span className="mono">have all you want — on our molecule, by our protocol.</span>
        <span className="mono" style={{ color: "var(--acc)", whiteSpace: "nowrap" }}>
          {n}/12 taken
        </span>
      </div>
    </div>
  );
}
