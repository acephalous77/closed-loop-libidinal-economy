"use client";

// plate.tsx — the detail reading plate (the depth layer). Ported from
// atlas/plate.jsx.
//   tone:'dark'  → DESCENT: you are inside the apparatus (sodium glow, a
//                  live capture readout ticking beside the diagram).
//   tone:'light' → THE REMAINDER / SUBSTRATE: a calm paper specimen sheet.
// Carries the argument, the verbatim pull-quote, the genealogy, the
// performing diagram, and the interconnections you navigate by.

import { useEffect } from "react";
import type { CSSProperties, ReactNode } from "react";
import { L, D, useTick, useViewport, AtlasDefs, type OpenFn } from "./shared";
import { ATLAS_SITES } from "./data";
import type { AtlasSite } from "./data";
import { DIAGRAMS } from "./diagrams";

const ROMAN_MOVEMENT = ["", "I", "II", "III", "IV"];

const SITES: Record<string, AtlasSite> = {};
ATLAS_SITES.forEach((s) => {
  SITES[s.id] = s;
});

function Readout() {
  // live "you are being captured" strip — dark plates only
  const t = useTick();
  const eng = Math.floor(48213 + t * 0.087);
  const ss = Math.floor(t / 1000),
    session = `${String((ss / 60) | 0).padStart(2, "0")}:${String(ss % 60).padStart(2, "0")}`;
  const ap = 5 - Math.floor((t / 1000) % 5);
  const row = (k: string, v: string, glow?: boolean) => (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "6px 0", borderBottom: `1px solid ${D.rule}` }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: D.dim }}>
        {k}
      </span>
      <span className="mono" style={{ fontSize: 12, color: glow ? D.glow : D.ink }}>
        {v}
      </span>
    </div>
  );
  return (
    <div style={{ marginTop: 18, width: 220 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: D.glow, marginBottom: 4 }}>
        ● CAPTURE · LIVE
      </div>
      {row("SESSION", session)}
      {row("ENGAGEMENT", eng.toLocaleString(), true)}
      {row("AUTOPLAY IN", `0:0${ap}`, true)}
    </div>
  );
}

interface PlateProps {
  site: AtlasSite;
  onOpen: OpenFn;
  onClose: () => void;
  onNav: (dir: number) => void;
  idx: number;
  total: number;
}

export function AtlasPlate({ site, onOpen, onClose, onNav, idx, total }: PlateProps) {
  const vw = useViewport();
  const narrow = vw < 820;
  const dsize = narrow ? Math.min(380, vw - 56) : 400;
  const dark = site.tone === "dark";
  const c = dark
    ? { bg: D.bg, ink: D.ink, dim: D.dim, accent: D.glow, rule: D.rule, gloss: "#9a9388" }
    : { bg: L.paper, ink: L.ink, dim: L.gloss, accent: L.oxide, rule: L.rule, gloss: L.gloss };
  const Diagram = DIAGRAMS[site.diagram];
  const tag = dark
    ? "DESCENT · INSIDE THE APPARATUS"
    : site.id === "surplus"
      ? "THE SUBSTRATE"
      : "THE REMAINDER · IN THE LIGHT";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  const chip = (txt: ReactNode, onClick: () => void, key: string) => (
    <button
      key={key}
      onClick={onClick}
      className="mono"
      style={{
        fontSize: 11,
        letterSpacing: "0.08em",
        color: c.ink,
        background: "transparent",
        border: `1px solid ${c.rule}`,
        padding: "5px 11px",
        cursor: "pointer",
        borderRadius: 0,
        transition: "border-color .15s,color .15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = c.accent;
        e.currentTarget.style.color = c.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = c.rule;
        e.currentTarget.style.color = c.ink;
      }}
    >
      {txt}
    </button>
  );

  return (
    <div className="atlas-root" style={{ position: "fixed", inset: 0, background: c.bg, color: c.ink, zIndex: 50, overflowY: "auto", overflowX: "hidden" }}>
      {/* ledger + frame */}
      <svg width="100%" height="100%" style={{ position: "fixed", inset: 0, pointerEvents: "none" }} preserveAspectRatio="none" viewBox="0 0 1440 900">
        <AtlasDefs idPrefix={dark ? "pld" : "pll"} tone={site.tone} />
        <rect x="0" y="0" width="1440" height="900" fill={`url(#${dark ? "pld" : "pll"}-grid)`} opacity="0.5" />
      </svg>
      {dark && (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", background: "repeating-linear-gradient(0deg,rgba(255,255,255,.012) 0 1px,transparent 1px 3px)" }} />
      )}
      {dark && <div style={{ position: "fixed", inset: 0, pointerEvents: "none", boxShadow: "inset 0 0 260px rgba(0,0,0,.6)" }} />}

      <div style={{ position: "relative", maxWidth: Math.min(vw, 1240), margin: "0 auto", padding: narrow ? "20px 16px 44px" : "40px 56px 56px" }}>
        {/* top chrome */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${c.rule}`, paddingBottom: 14 }}>
          <button onClick={onClose} className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: c.dim, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            ← THE ATLAS
          </button>
          {!narrow && (
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.22em", color: c.accent }}>
              {tag}
            </div>
          )}
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: c.dim }}>
            <span onClick={() => onNav(-1)} style={{ cursor: "pointer" }}>
              ◂
            </span>
            &nbsp;&nbsp;{String(idx + 1).padStart(2, "0")} / {total}&nbsp;&nbsp;
            <span onClick={() => onNav(1)} style={{ cursor: "pointer" }}>
              ▸
            </span>
          </div>
        </div>
        {narrow && (
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.22em", color: c.accent, textAlign: "center", marginTop: 12 }}>
            {tag}
          </div>
        )}

        {/* title block */}
        <div style={{ marginTop: narrow ? 20 : 30 }}>
          <div className="mono" style={{ fontSize: narrow ? 11 : 12, letterSpacing: "0.22em", color: c.accent }}>
            FIG. {site.fig}
            <span style={{ color: c.dim }}>
              {" "}
              · MOVEMENT {["", "I", "II", "III", "IV"][site.movement]}
              {site.axis !== "—" && site.axis !== "all" ? ` · AXIS: ${site.axis.toUpperCase()}` : ""}
            </span>
          </div>
          {site.stage && (
            <div className="mono" style={{ fontSize: narrow ? 9.5 : 10.5, letterSpacing: "0.2em", color: c.dim, marginTop: 6 }}>
              LIFE STAGE <span style={{ color: c.accent }}>· {site.stage.toUpperCase()}</span>
            </div>
          )}
          <h1 className="serif" style={{ fontSize: narrow ? 36 : 54, fontWeight: 500, margin: "8px 0 0", lineHeight: 1.05, letterSpacing: "0.005em", textWrap: "balance" }}>
            {site.title}
          </h1>
          <div className="serif ital" style={{ fontSize: narrow ? 18 : 21, color: c.gloss, marginTop: 8 }}>
            {site.gloss}
          </div>
        </div>

        {/* body: prose | diagram */}
        <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 440px", gap: narrow ? 26 : 56, marginTop: narrow ? 26 : 40, alignItems: "start" }}>
          <div>
            {site.prose.map((p, i) => (
              <p key={i} className="serif" style={{ fontSize: narrow ? 17.5 : 18.5, lineHeight: 1.5, color: c.ink, margin: i ? "1.7em 0 0" : 0, textWrap: "pretty" }}>
                {p}
              </p>
            ))}
            {/* pull quote */}
            <div style={{ margin: "32px 0 0", paddingLeft: 22, borderLeft: `2px solid ${c.accent}` }}>
              <div className="serif ital" style={{ fontSize: narrow ? 21 : 25, lineHeight: 1.32, color: c.ink }}>
                “{site.quote}”
              </div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: c.dim, marginTop: 10 }}>
                {(site.quoteSource || "The Ouroboric Condition").toUpperCase()} · {site.cite.toUpperCase()}
              </div>
            </div>
            {/* genealogy */}
            <div style={{ marginTop: 30 }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: c.dim, marginBottom: 10 }}>
                READ THROUGH
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {site.genealogy.map((g) => (
                  <span key={g} className="serif" style={{ fontSize: 14.5, fontStyle: "italic", color: c.ink, border: `1px solid ${c.rule}`, padding: "3px 12px" }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* diagram panel */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: narrow ? "static" : "sticky", top: 30, order: narrow ? -1 : 0, marginBottom: narrow ? 6 : 0 }}>
            <div style={{ border: `1px solid ${c.rule}`, padding: 14, background: dark ? "#0f1116" : "transparent", position: "relative" }}>
              {[
                [0, 0],
                [1, 0],
                [0, 1],
                [1, 1],
              ].map(([cx, cy], i) => (
                <div
                  key={i}
                  style={
                    {
                      position: "absolute",
                      width: 9,
                      height: 9,
                      [cx ? "right" : "left"]: -1,
                      [cy ? "bottom" : "top"]: -1,
                      borderTop: !cy ? `1px solid ${c.accent}` : "none",
                      borderBottom: cy ? `1px solid ${c.accent}` : "none",
                      borderLeft: !cx ? `1px solid ${c.accent}` : "none",
                      borderRight: cx ? `1px solid ${c.accent}` : "none",
                    } as CSSProperties
                  }
                />
              ))}
              <Diagram size={dsize} tone={site.tone} />
            </div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: c.dim, marginTop: 12, textAlign: "center" }}>
              MOVEMENT {ROMAN_MOVEMENT[site.movement] ?? ""} · FIG. {site.fig} — {site.title.toUpperCase()}
            </div>
            {dark && <Readout />}
          </div>
        </div>

        {/* interconnections */}
        <div style={{ marginTop: narrow ? 36 : 52, borderTop: `1px solid ${c.rule}`, paddingTop: 22 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: c.dim, marginBottom: 14 }}>
            INTERCONNECTIONS · SEE ALSO
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {site.related.map(
              (r) =>
                SITES[r] &&
                chip(
                  <span>
                    <span style={{ color: c.accent }}>FIG. {SITES[r].fig}</span>
                    &nbsp; {SITES[r].title}
                  </span>,
                  () => onOpen(r),
                  r
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
