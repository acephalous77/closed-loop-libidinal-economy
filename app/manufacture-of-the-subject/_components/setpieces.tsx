"use client";
/* ============================================================
   SET-PIECES — the interactive arguments
   LoopDemo · DesireTags · AvatarSubject · SurplusResist
   ============================================================ */
import React, { useState, useEffect, useRef } from "react";

/* shared: a labeled meter bar */
export function Meter({
  label,
  pct,
  color,
  sub,
}: {
  label: string;
  pct: number;
  color?: string;
  sub?: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%" }}>
      <div className="flex between" style={{ marginBottom: 5 }}>
        <span
          className="mono"
          style={{
            fontSize: 11,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--bone-dim)",
          }}
        >
          {label}
        </span>
        <span className="mono" style={{ fontSize: 11, color: color || "var(--bone)" }}>
          {Math.round(pct)}%
        </span>
      </div>
      <div style={{ height: 10, border: "1px solid var(--bone-faint)", position: "relative", background: "#000" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: pct + "%",
            background: color || "var(--bone)",
            transition: "width .35s cubic-bezier(.2,.7,.2,1)",
          }}
        />
      </div>
      {sub && (
        <div className="cap" style={{ marginTop: 6 }}>
          {sub}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------
   1 · THE LOOP  — variable-reward engagement demo
------------------------------------------------------------ */
type Reward = { t: string; v: string; big?: boolean };
export function LoopDemo() {
  const [pulls, setPulls] = useState(0);
  const [lack, setLack] = useState(34);
  const [last, setLast] = useState<Reward | null>(null);
  const [jackpots, setJackpots] = useState(0);
  const [secs, setSecs] = useState(0);
  const flash = useRef<HTMLDivElement>(null);

  // fresh lack: the wanting always creeps back up
  useEffect(() => {
    const t = setInterval(() => {
      setLack((l) => Math.min(100, l + (pulls > 0 ? 1.1 : 0.0)));
      if (pulls > 0) setSecs((s) => s + 1);
    }, 700);
    return () => clearInterval(t);
  }, [pulls]);

  const pull = () => {
    setPulls((p) => p + 1);
    // variable schedule: mostly small, sometimes nothing, rarely jackpot
    const r = Math.random();
    let reward: Reward;
    if (r > 0.93) {
      reward = { t: "JACKPOT", v: "+████", big: true };
      setJackpots((j) => j + 1);
    } else if (r > 0.34) {
      reward = { t: "reward", v: "+" + (1 + Math.floor(Math.random() * 3)) };
    } else {
      reward = { t: "nothing", v: "—" };
    }
    setLast(reward);
    // pleasure discharges the lack… briefly
    setLack((l) => Math.max(8, l - (reward.big ? 46 : reward.v === "—" ? 4 : 18)));
    if (flash.current) {
      flash.current.style.opacity = "1";
      setTimeout(() => {
        if (flash.current) flash.current.style.opacity = "0";
      }, 120);
    }
  };

  return (
    <div style={{ border: "2px solid var(--bone)", background: "#0c0c0c" }}>
      <div className="flex between center" style={{ borderBottom: "1px solid var(--bone-faint)", padding: "10px 14px" }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
          fig.02 — the loop
        </span>
        <span className="mono" style={{ fontSize: 11, color: "var(--bone-dim)" }}>
          variable-ratio reward
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0 }} className="loop-grid">
        <div style={{ padding: 22, borderRight: "1px solid var(--bone-faint)", position: "relative" }}>
          <div
            ref={flash}
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--acc)",
              opacity: 0,
              transition: "opacity .12s",
              pointerEvents: "none",
            }}
          />
          <div className="bignum" style={{ fontSize: 64, color: last && last.big ? "var(--acc)" : "var(--bone)" }}>
            {last ? last.v : "00"}
          </div>
          <div className="mono dim" style={{ fontSize: 11, marginTop: 4, minHeight: 16 }}>
            {last ? last.t : "press to begin wanting"}
          </div>
          <button className="btn" style={{ marginTop: 20, width: "100%", fontSize: 15, padding: "16px" }} onClick={pull}>
            PULL
          </button>
          <div className="cap" style={{ marginTop: 14 }}>
            The reward arrives on a variable schedule, the way a slot machine pays — so the next pull is always
            plausibly the one.
          </div>
        </div>
        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 18 }}>
          <Meter
            label="your lack"
            pct={lack}
            color="var(--acc)"
            sub="a small pleasure subsides into a fresh lack, which reaches for the next reward."
          />
          <div className="flex between" style={{ gap: 12 }}>
            <div>
              <div className="mono dim" style={{ fontSize: 11, letterSpacing: ".15em" }}>
                PULLS
              </div>
              <div className="bignum" style={{ fontSize: 34 }}>
                {pulls}
              </div>
            </div>
            <div>
              <div className="mono dim" style={{ fontSize: 11, letterSpacing: ".15em" }}>
                SECONDS
              </div>
              <div className="bignum" style={{ fontSize: 34 }}>
                {secs}
              </div>
            </div>
            <div>
              <div className="mono dim" style={{ fontSize: 11, letterSpacing: ".15em" }}>
                JACKPOTS
              </div>
              <div className="bignum" style={{ fontSize: 34, color: "var(--acc)" }}>
                {jackpots}
              </div>
            </div>
          </div>
          {pulls >= 12 && (
            <div className="rev in" style={{ borderTop: "1px solid var(--bone-faint)", paddingTop: 12 }}>
              <span className="accuse" style={{ fontSize: 13 }}>
                You pulled {pulls} times. Your wanting was the labor. The loop was the product.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   2 · DESIRE → SELLABLE TAGS
------------------------------------------------------------ */
const RAW_WANTS = [
  "to be held",
  "to matter to someone",
  "to rest",
  "to be seen",
  "to belong",
  "to be desired",
  "to not be afraid",
];
const CATS = ["#intimacy", "#wellness", "#status", "#nostalgia", "#self-care", "#community", "#romance", "#identity"];
type Unit = { tag: string; cat: string; price: number };
function processWant(text: string): Unit[] {
  const words = text.trim().split(/\s+/).filter(Boolean).slice(0, 6);
  let price = 4.99;
  return words.map((w, i) => {
    price = +(price * (1.4 + Math.random() * 0.9)).toFixed(2);
    return { tag: "#" + w.toLowerCase().replace(/[^a-z]/g, ""), cat: CATS[(i + w.length) % CATS.length], price };
  });
}

export function DesireTags() {
  const [text, setText] = useState("");
  const [units, setUnits] = useState<Unit[] | null>(null);
  const [busy, setBusy] = useState(false);
  const run = (val?: string) => {
    const v = (val ?? text).trim();
    if (!v) return;
    setText(v);
    setBusy(true);
    setUnits(null);
    setTimeout(() => {
      setUnits(processWant(v));
      setBusy(false);
    }, 520);
  };
  const total = units ? units.reduce((s, u) => s + u.price, 0) : 0;
  return (
    <div style={{ border: "2px solid var(--bone)", background: "#0c0c0c" }}>
      <div className="flex between center" style={{ borderBottom: "1px solid var(--bone-faint)", padding: "10px 14px" }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
          fig.03 — the renderer
        </span>
        <span className="mono" style={{ fontSize: 11, color: "var(--bone-dim)" }}>
          desire → shippable units
        </span>
      </div>
      <div style={{ padding: 22 }}>
        <div className="mono dim" style={{ fontSize: 11, marginBottom: 10 }}>
          NAME SOMETHING YOU WANT.
        </div>
        <div className="flex gap8 wrapf" style={{ marginBottom: 12 }}>
          {RAW_WANTS.map((w) => (
            <button
              key={w}
              className="tag"
              style={{ cursor: "pointer", background: "transparent" }}
              onClick={() => run(w)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--acc)";
                e.currentTarget.style.color = "var(--acc)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--bone-faint)";
                e.currentTarget.style.color = "var(--bone-dim)";
              }}
            >
              {w}
            </button>
          ))}
        </div>
        <div className="flex gap8" style={{ alignItems: "stretch" }}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && run()}
            placeholder="type a longing…"
            className="mono"
            style={{
              flex: 1,
              background: "#000",
              border: "2px solid var(--bone-faint)",
              color: "var(--bone)",
              padding: "12px 14px",
              fontSize: 14,
              outline: "none",
            }}
          />
          <button className="btn" onClick={() => run()}>
            RENDER
          </button>
        </div>

        {busy && (
          <div className="mono red" style={{ marginTop: 18, fontSize: 13 }}>
            cutting into units…
          </div>
        )}

        {units && (
          <div className="mt24">
            <div className="flex wrapf gap8">
              {units.map((u, i) => (
                <div
                  key={i}
                  className="rev in"
                  style={{
                    border: "1px solid var(--bone-faint)",
                    padding: "9px 11px",
                    background: "#111",
                    transitionDelay: i * 70 + "ms",
                  }}
                >
                  <div className="mono" style={{ fontSize: 13, color: "var(--bone)" }}>
                    {u.tag}
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--bone-faint)",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      margin: "3px 0",
                    }}
                  >
                    {u.cat}
                  </div>
                  <div className="mono red" style={{ fontSize: 12 }}>
                    ${u.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex between center mt16" style={{ borderTop: "1px solid var(--bone-faint)", paddingTop: 12 }}>
              <span className="accuse" style={{ fontSize: 12 }}>
                Every fetish a searchable tag. Every longing a performable type.
              </span>
              <span className="mono red" style={{ fontSize: 15 }}>
                EST. ${total.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   3 · THE AVATAR-SUBJECT — optimized toward the marketable mean
------------------------------------------------------------ */
const TRAITS = [
  { id: "look", you: "your actual face", mkt: "the lit, symmetrical angle" },
  { id: "taste", you: "the music no one likes", mkt: "what the algorithm rewards" },
  { id: "work", you: "a hobby, for its own sake", mkt: "a personal brand / a channel" },
  { id: "voice", you: "an unpopular opinion", mkt: "the wearable, shareable take" },
  { id: "time", you: "an unphotographed afternoon", mkt: "the photographable trip" },
];
export function AvatarSubject() {
  const [sel, setSel] = useState<Record<string, "you" | "mkt">>({});
  const choose = (id: string, v: "you" | "mkt") => setSel((s) => ({ ...s, [id]: v }));
  const mkt = Object.values(sel).filter((v) => v === "mkt").length;
  const you = Object.values(sel).filter((v) => v === "you").length;
  const reach = Math.round((mkt / TRAITS.length) * 100);
  const legible = mkt >= you;
  return (
    <div style={{ border: "2px solid var(--bone)", background: "#0c0c0c" }}>
      <div className="flex between center" style={{ borderBottom: "1px solid var(--bone-faint)", padding: "10px 14px" }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
          fig.04 — the avatar-subject
        </span>
        <span className="mono" style={{ fontSize: 11, color: "var(--bone-dim)" }}>
          self as portfolio
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 0 }} className="av-grid">
        <div
          style={{
            padding: 22,
            borderRight: "1px solid var(--bone-faint)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {TRAITS.map((t) => (
            <div key={t.id}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".2em",
                  color: "var(--bone-faint)",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {t.id}
              </div>
              <div className="flex gap8">
                {(["you", "mkt"] as const).map((k) => {
                  const on = sel[t.id] === k;
                  return (
                    <button
                      key={k}
                      onClick={() => choose(t.id, k)}
                      style={{
                        flex: 1,
                        textAlign: "left",
                        cursor: "pointer",
                        padding: "10px 12px",
                        fontSize: 13,
                        lineHeight: 1.3,
                        fontFamily: "var(--f-mono)",
                        border: "2px solid " + (on ? (k === "mkt" ? "var(--acc)" : "var(--bone)") : "var(--bone-faint)"),
                        background: on ? (k === "mkt" ? "var(--acc)" : "var(--bone)") : "transparent",
                        color: on ? (k === "mkt" ? "#fff" : "var(--ink)") : "var(--bone-dim)",
                        transition: ".12s",
                      }}
                    >
                      {k === "you" ? t.you : t.mkt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* avatar visual: blocks homogenise toward the mean as you conform */}
          <div style={{ display: "flex", gap: 4, height: 96, alignItems: "flex-end" }}>
            {TRAITS.map((t, i) => {
              const v = sel[t.id];
              const h = v === "mkt" ? 92 : v === "you" ? 30 + ((i * 13) % 50) : 14;
              const c = v === "mkt" ? "var(--acc)" : v === "you" ? "var(--bone)" : "var(--bone-faint)";
              return (
                <div
                  key={t.id}
                  style={{
                    flex: 1,
                    height: h,
                    background: c,
                    transition: "height .4s cubic-bezier(.2,.7,.2,1),background .2s",
                  }}
                />
              );
            })}
          </div>
          <div
            className="mono dim"
            style={{ fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase" }}
          >
            the profile, regularized
          </div>
          <Meter label="market legibility / reach" pct={reach} color="var(--acc)" />
          <div style={{ borderTop: "1px solid var(--bone-faint)", paddingTop: 12 }}>
            {Object.keys(sel).length < TRAITS.length ? (
              <span className="cap">Curate the self. The metrics are watching which way you lean.</span>
            ) : legible ? (
              <span className="accuse" style={{ fontSize: 13 }}>
                Legible. Your desires now answer to the avatar — the thing underneath has no say.
              </span>
            ) : (
              <span className="mono" style={{ fontSize: 13, color: "var(--bone)" }}>
                You kept yourself — and the reach collapsed. The metric calls that a failure. Does it feel like one?
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   4 · THE SEAMS — a panel that refuses the meter
------------------------------------------------------------ */
const SEAMS = [
  { t: "a reading group", d: "attention given slowly, to no metric" },
  { t: "a repair café", d: "use-value, recovered with your hands" },
  { t: "an open-source project", d: "labor whose reward is the work" },
  { t: "a fan archive kept for love", d: "held off the market, on purpose" },
  { t: "an afternoon with no feed in it", d: "the right to be bored" },
  { t: "people who love you off the record", d: "where no data is generated" },
];
export function SurplusResist({ onFreeze }: { onFreeze?: () => boolean }) {
  const [kept, setKept] = useState<number[]>([]);
  const [frozen, setFrozen] = useState(false);
  const doFreeze = () => {
    const v = onFreeze ? onFreeze() : !frozen;
    setFrozen(v);
  };
  const toggle = (i: number) => setKept((k) => (k.includes(i) ? k.filter((x) => x !== i) : [...k, i]));
  return (
    <div>
      <div className="flex between center wrapf gap16" style={{ marginBottom: 28 }}>
        <div
          className="mono"
          style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "#555" }}
        >
          fig.05 — the seams
        </div>
        <button
          onClick={doFreeze}
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: 13,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            cursor: "pointer",
            border: "2px solid var(--ink)",
            padding: "11px 18px",
            background: frozen ? "var(--ink)" : "transparent",
            color: frozen ? "var(--paper)" : "var(--ink)",
            transition: ".15s",
          }}
        >
          {frozen ? "✓ the meter is stopped" : "stop the meter"}
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: 0,
          border: "2px solid var(--ink)",
        }}
      >
        {SEAMS.map((s, i) => {
          const on = kept.includes(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              style={{
                textAlign: "left",
                cursor: "pointer",
                padding: "20px",
                border: "1px solid #00000022",
                background: on ? "var(--ink)" : "transparent",
                color: on ? "var(--paper)" : "var(--ink)",
                transition: ".15s",
                outline: "none",
                minHeight: 130,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--f-anton)",
                  textTransform: "uppercase",
                  fontSize: 23,
                  lineHeight: 0.95,
                }}
              >
                {s.t}
              </div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, opacity: 0.75, marginTop: 14 }}>
                {on ? "KEPT — for the people in the room." : s.d}
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex between center wrapf gap16" style={{ marginTop: 18 }}>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "#555" }}>
          {kept.length} of {SEAMS.length} kept off the meter
        </span>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "#555", maxWidth: "46ch", textAlign: "right" }}>
          None of it is safe. The apparatus is patient, and has absorbed every one of these before.
        </span>
      </div>
    </div>
  );
}
