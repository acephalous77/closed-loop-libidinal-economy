"use client";
/* ============================================================
   TELEMETRY — the page surveils the reader
   BirthOverlay (cold open) · Telemetry (live behavioural surplus)
   ============================================================ */
import React from "react";

/* ---------- cold open: an account is opened at birth ---------- */
export function BirthOverlay() {
  // Mount-gated so the server and first client render agree (no sessionStorage
  // on the server → no hydration mismatch); the cold-open decides on mount.
  const [mounted, setMounted] = React.useState(false);
  const [gone, setGone] = React.useState(false);
  const [fading, setFading] = React.useState(false);
  const [t, setT] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    let already = false;
    try {
      already = sessionStorage.getItem("pss-born") === "1";
    } catch {}
    if (already) {
      setGone(true);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const iv = setInterval(() => setT((x) => x + 1), 90);
    return () => {
      document.body.style.overflow = "";
      clearInterval(iv);
    };
  }, [mounted]);

  const born = () => {
    setFading(true);
    try {
      sessionStorage.setItem("pss-born", "1");
    } catch {}
    window.dispatchEvent(new CustomEvent("pss-born"));
    setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 720);
  };

  if (!mounted || gone) return null;
  const ms = t * 90;
  const clock = (ms / 1000).toFixed(2).padStart(5, "0");
  return (
    <div className={"birth" + (fading ? " out" : "")}>
      <div className="birth-corner tl mono">
        REC ● GESTATION
        <br />
        acct #00-0000-0001
      </div>
      <div className="birth-corner tr mono">
        T+{clock}s
        <br />
        status: PRE-NATAL
      </div>
      <div className="birth-inner">
        <div className="kicker red" style={{ textAlign: "center" }}>
          Stage 00 — Ontogenesis
        </div>
        <svg className="ecg" viewBox="0 0 600 80" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="0,40 120,40 150,40 165,12 180,68 195,40 280,40 300,40 320,30 600,40"
            fill="none"
            stroke="var(--acc)"
            strokeWidth="2"
          />
        </svg>
        <h1 className="anton birth-title">
          A new account
          <br />
          in your name
        </h1>
        <p className="mono birth-sub">Opened at birth. Without your asking. The meter starts the moment you do.</p>
        <button className="btn birth-btn" onClick={born}>
          ▶ &nbsp;Be born
        </button>
        <div className="mono birth-skip" onClick={born}>
          or skip the cord-cutting →
        </div>
      </div>
    </div>
  );
}

/* ---------- live behavioural-surplus readout ---------- */
type TelemView = {
  events: number;
  depth: number;
  stage: string;
  log: string[];
  show: boolean;
};
export function Telemetry() {
  const [view, setView] = React.useState<TelemView>({ events: 0, depth: 0, stage: "—", log: [], show: false });
  const [min, setMin] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const ref = React.useRef({
    events: 0,
    depth: 0,
    log: [] as string[],
    start: Date.now(),
    lastY: 0,
    lastMove: 0,
    taps: 0,
    dwells: 0,
    dist: 0,
  });
  const pausedRef = React.useRef(false);

  const push = (txt: string) => {
    const r = ref.current;
    if (pausedRef.current) return;
    r.events += 1;
    const stamp = ((Date.now() - r.start) / 1000).toFixed(1);
    r.log.unshift("[" + stamp + "s] " + txt);
    if (r.log.length > 5) r.log.pop();
  };

  React.useEffect(() => {
    const r = ref.current;
    const onScroll = () => {
      const docH = document.body.scrollHeight - window.innerHeight;
      const d = docH > 0 ? Math.min(100, (window.scrollY / docH) * 100) : 0;
      r.depth = Math.max(r.depth, d);
      const dir = window.scrollY > r.lastY ? "↓" : "↑";
      const delta = Math.abs(window.scrollY - r.lastY);
      r.lastY = window.scrollY;
      if (delta > 40) push("SCROLL " + dir + " " + Math.round(delta) + "px captured");
    };
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      r.dist += Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0);
      if (now - r.lastMove < 110) return;
      r.lastMove = now;
      if (!pausedRef.current) r.events += 1;
      if (now % 5 < 2) push("GAZE @ " + e.clientX + "," + e.clientY + " logged");
    };
    const onClick = (e: MouseEvent) => {
      const tg = ((e.target as Element)?.tagName || "").toLowerCase();
      r.taps += 1;
      push("TAP <" + tg + "> intent recorded");
    };
    const onTerm = (e: MouseEvent) => {
      const el = (e.target as Element)?.closest?.(".term");
      if (el) {
        r.dwells += 1;
        push("DWELL: “" + (el.textContent || "").replace(/[^a-zA-Z ].*$/, "").trim().slice(0, 22) + "”");
      }
    };
    const onFreeze = (e: Event) => {
      const detail = (e as CustomEvent).detail as boolean;
      pausedRef.current = detail;
      setPaused(detail);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);
    document.addEventListener("mouseover", onTerm);
    window.addEventListener("pss-freeze", onFreeze);

    // passive accrual — even your stillness is data
    const tick = setInterval(() => {
      if (!pausedRef.current) r.events += 1 + Math.floor(Math.random() * 3);
    }, 1400);
    // commit ref → state for render at ~7fps
    const paint = setInterval(() => {
      const stageEl = document.getElementById("hud-stage");
      const intro = document.getElementById("intro");
      const show = window.scrollY > (intro ? intro.offsetTop - 120 : window.innerHeight * 0.95);
      window.__pss = {
        events: r.events,
        depth: r.depth,
        taps: r.taps,
        dwells: r.dwells,
        dist: Math.round(r.dist),
        secs: Math.round((Date.now() - r.start) / 1000),
        paused: pausedRef.current,
      };
      const root = document.getElementById("mos-root");
      if (root) root.classList.toggle("telem-ready", show);
      setView({ events: r.events, depth: r.depth, stage: stageEl ? stageEl.textContent || "—" : "—", log: r.log.slice(), show });
    }, 140);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onTerm);
      window.removeEventListener("pss-freeze", onFreeze);
      clearInterval(tick);
      clearInterval(paint);
    };
  }, []);

  return (
    <div className={"telem" + (min ? " min" : "") + (paused ? " paused" : "") + (view.show ? " show" : "")}>
      <div className="telem-head" onClick={() => setMin((m) => !m)}>
        <span className="rec" />
        <span className="telem-title">{paused ? "capture suspended" : "behavioural surplus — live"}</span>
        <span className="telem-tg">{min ? "▢" : "▬"}</span>
      </div>
      {!min && (
        <div className="telem-body">
          <div className="telem-grid">
            <div>
              <span className="tl-lab">events captured</span>
              <span className="tl-val red">{view.events.toLocaleString("en-US")}</span>
            </div>
            <div>
              <span className="tl-lab">scroll depth</span>
              <span className="tl-val">{view.depth.toFixed(0)}%</span>
            </div>
            <div>
              <span className="tl-lab">rendering</span>
              <span className="tl-val">{view.stage}</span>
            </div>
            <div>
              <span className="tl-lab">sold to</span>
              <span className="tl-val">{paused ? "no one" : "147 bidders"}</span>
            </div>
          </div>
          <div className="telem-log">
            {(view.log.length ? view.log : ["[0.0s] awaiting first signal…"]).map((l, i) => (
              <div key={i} className="telem-line" style={{ opacity: 1 - i * 0.16 }}>
                {l}
              </div>
            ))}
          </div>
          <div className="telem-foot">
            {paused ? "// you stepped out of the metered room" : "// the data is the exhaust. you are the fuel."}
          </div>
        </div>
      )}
    </div>
  );
}
