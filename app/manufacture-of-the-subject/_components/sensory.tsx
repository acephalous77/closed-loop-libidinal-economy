"use client";
/* ============================================================
   SENSORY + END-STATE
   Heartbeat (WebAudio, slows with age, flatlines at exit) ·
   Receipt (your session's behavioral surplus, itemized)
   ============================================================ */
import React from "react";

/* ---------- heartbeat: a pulse that ages with you ---------- */
export function Heartbeat() {
  const [on, setOn] = React.useState(false);
  const ctxRef = React.useRef<AudioContext | null>(null);
  const toRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const flatRef = React.useRef(false);

  // one "lub-dub" via two short sine thumps
  const beat = (ctx: AudioContext, t0: number, gainScale: number) => {
    const notes: [number, number][] = [
      [0, 92],
      [0.16, 70],
    ];
    notes.forEach(([dt, f], i) => {
      const o = ctx.createOscillator(),
        g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(f, t0 + dt);
      const peak = (i === 0 ? 0.5 : 0.34) * gainScale;
      g.gain.setValueAtTime(0.0001, t0 + dt);
      g.gain.exponentialRampToValueAtTime(peak, t0 + dt + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dt + 0.2);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t0 + dt);
      o.stop(t0 + dt + 0.24);
    });
  };

  React.useEffect(() => {
    if (!on) {
      if (toRef.current) clearTimeout(toRef.current);
      if (ctxRef.current) {
        try {
          ctxRef.current.suspend();
        } catch {}
      }
      return;
    }
    let ctx = ctxRef.current;
    if (!ctx) {
      ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      ctxRef.current = ctx;
    }
    try {
      ctx.resume();
    } catch {}

    const loop = () => {
      const ageEl = document.getElementById("hud-age");
      const ageTxt = ageEl ? ageEl.textContent || "" : "";
      const age = parseInt(ageTxt, 10);
      const stageEl = document.getElementById("hud-stage");
      const stage = stageEl ? stageEl.textContent || "" : "";
      const frozen = document.getElementById("mos-root")?.getAttribute("data-frozen") === "1";
      const c = ctxRef.current;
      if (!c) return;

      // flatline at exit
      if (stage === "EXIT" || (!isNaN(age) && age >= 84)) {
        if (!flatRef.current) {
          flatRef.current = true;
          // a single sustained flat tone, then silence
          const o = c.createOscillator(),
            g = c.createGain();
          o.type = "sine";
          o.frequency.value = 220;
          g.gain.setValueAtTime(0.0001, c.currentTime);
          g.gain.exponentialRampToValueAtTime(0.16, c.currentTime + 0.1);
          g.gain.setValueAtTime(0.16, c.currentTime + 2.0);
          g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 3.2);
          o.connect(g);
          g.connect(c.destination);
          o.start();
          o.stop(c.currentTime + 3.3);
        }
        toRef.current = setTimeout(loop, 1500);
        return;
      }
      flatRef.current = false;

      // BPM ages: ~128 infant → ~62 elderly; pauses when meter stopped
      let bpm = isNaN(age) ? 120 : 128 - Math.min(70, age * 0.85);
      if (frozen) bpm = 52; // calm
      beat(c, c.currentTime + 0.02, frozen ? 0.6 : 1);
      toRef.current = setTimeout(loop, (60 / bpm) * 1000);
    };
    loop();
    return () => {
      if (toRef.current) clearTimeout(toRef.current);
    };
  }, [on]);

  return (
    <button
      className={"hb-btn" + (on ? " on" : "")}
      onClick={() => setOn((v) => !v)}
      title={on ? "mute the pulse" : "hear the pulse"}
      aria-label="toggle heartbeat"
    >
      <span className="hb-ecg">
        <svg viewBox="0 0 44 20" preserveAspectRatio="none">
          <polyline points="0,10 14,10 17,3 21,17 25,10 44,10" />
        </svg>
      </span>
      <span className="hb-lab mono">{on ? "pulse on" : "pulse"}</span>
    </button>
  );
}

/* ---------- the receipt: your behavioral surplus, itemized ---------- */
type ReceiptData = { lines: [string, string, string][]; total: number; stamp: string };
export function Receipt() {
  const [data, setData] = React.useState<ReceiptData | null>(null);
  const [printed, setPrinted] = React.useState(0); // rows revealed
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (ents) => {
        if (ents[0].isIntersecting) {
          const p = window.__pss || { events: 0, depth: 0, taps: 0, dwells: 0, dist: 0, secs: 0, paused: false };
          const px = p.dist || 0;
          const km = (px / 3779.5).toFixed(2);
          const mins = Math.floor((p.secs || 0) / 60),
            ss = (p.secs || 0) % 60;
          const dur = (mins ? mins + "m " : "") + ss + "s";
          const lines: [string, string, string][] = [
            ["session duration", dur, "the only thing you spent that was real"],
            ["events captured", (p.events || 0).toLocaleString("en-US"), "each one logged, timestamped, kept"],
            ["scroll depth reached", (p.depth || 0).toFixed(0) + "%", "how far you let it take you"],
            ["taps / intents", (p.taps || 0).toString(), "every press read as a preference"],
            ["terms dwelt on", (p.dwells || 0).toString(), "your curiosity, indexed"],
            ["cursor distance", km + " km", "the labor of your attention, in motion"],
          ];
          const now = new Date();
          const stamp = now.toLocaleDateString("en-GB") + "  " + now.toTimeString().slice(0, 8);
          setData({ lines, total: p.events || 0, stamp });
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // print the rows out one at a time, like register tape
  React.useEffect(() => {
    if (!data) return;
    const reduce = document.getElementById("mos-root")?.getAttribute("data-motion") === "low";
    if (reduce) {
      setPrinted(data.lines.length);
      return;
    }
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setPrinted(i);
      if (i >= data.lines.length) clearInterval(iv);
    }, 230);
    return () => clearInterval(iv);
  }, [data]);

  const doPrint = () => {
    document.body.classList.add("printing-receipt");
    const after = () => {
      document.body.classList.remove("printing-receipt");
      window.removeEventListener("afterprint", after);
    };
    window.addEventListener("afterprint", after);
    setPrinted(data ? data.lines.length : 6);
    setTimeout(() => window.print(), 60);
  };

  const done = data && printed >= data.lines.length;
  const rows: [string, string, string][] = data ? data.lines : [["reading the meter…", "…", ""]];

  return (
    <div ref={ref} className="receipt" id="exit-receipt">
      <div className="receipt-perf" aria-hidden="true" />
      <div className={"receipt-in" + (data ? " live" : "")}>
        <div className="receipt-head">
          <div className="receipt-merchant mono">THE APPARATUS &amp; CO.</div>
          <div className="receipt-t">RECEIPT — YOU</div>
          <div className="receipt-sub mono">
            behavioral surplus generated this visit
            <br />
            {data ? data.stamp : "—"}
            <br />
            reg #07 · cashier: THE ALGORITHM · acct #00-0000-0001
          </div>
        </div>
        <div className="receipt-colhead mono">
          <span>ITEM</span>
          <span>QTY</span>
        </div>
        <div className="receipt-lines">
          {rows.map((l, i) => (
            <div key={i} className={"receipt-row" + (i < printed ? " print-in" : " unprinted")}>
              <div className="receipt-row-top mono">
                <span>{l[0]}</span>
                <span className="dotfill" />
                <span className="receipt-amt">{l[1]}</span>
              </div>
              {l[2] && <div className="receipt-note mono">{l[2]}</div>}
            </div>
          ))}
        </div>
        <div className={"receipt-foot mono" + (done ? " print-in" : " unprinted")}>
          <div className="flex between receipt-total">
            <span>TOTAL SIGNALS HARVESTED</span>
            <span className="receipt-amt">{data ? data.total.toLocaleString("en-US") : "—"}</span>
          </div>
          <div className="receipt-pay">
            <div className="flex between">
              <span>PAID IN</span>
              <span>ONE (1) HUMAN LIFE</span>
            </div>
            <div className="flex between">
              <span>CHANGE DUE</span>
              <span>NONE</span>
            </div>
            <div className="flex between">
              <span>METHOD</span>
              <span>INVOLUNTARY · AUTO-DEBIT</span>
            </div>
          </div>
          <div className="receipt-stamp">NON-REFUNDABLE · THE SURPLUS WAS YOURS</div>
          <div className="barcode" style={{ marginTop: 14, height: 34, opacity: 0.9, filter: "invert(1)" }} />
          <div className="receipt-num mono">4 0 0 2 · 8 1 9 9 · 0 0 0 1 · CRIB↦GRAVE</div>
          <div className="receipt-end">— thank you for your business —</div>
          <button className="receipt-take mono" onClick={doPrint}>
            ↧ &nbsp;take your receipt
          </button>
        </div>
      </div>
      <div className="receipt-zig" aria-hidden="true" />
    </div>
  );
}
