"use client";

// Atlas.tsx — orchestrator for "The Ouroboric Condition · An Atlas of Capture".
// Ported from atlas/engine.jsx. A map-style pan/zoom viewport over the chart,
// an entrance, the plate overlay, an index drawer, and a key.
// Desktop: drag paper to pan, wheel to zoom. Touch: one finger pans, two
// fingers pinch-zoom. View position + open plate persist to localStorage.
//
// The default export is a client mount-gate: the atlas reads window /
// localStorage / rAF during render, so it must run only after mount. Until
// then a quiet paper splash stands in (and is what the route prerenders).

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { L, D, useTick, useViewport, ptOnCircle, ATLAS_CSS, type OpenFn } from "./shared";
import { ATLAS_SITES, ATLAS_WORLD } from "./data";
import type { AtlasSite } from "./data";
import { AtlasChart } from "./chart";
import { AtlasPlate } from "./plate";

const W = ATLAS_WORLD.w,
  H = ATLAS_WORLD.h;
const LS = "ouroboric-atlas-v5";
const order = ATLAS_SITES.map((s) => s.id);
const SITE: Record<string, AtlasSite> = {};
ATLAS_SITES.forEach((s) => {
  SITE[s.id] = s;
});
const GROUPS = [
  { label: "I · The Framework", ids: ["surplus", "triaxial", "ouroboros"] },
  { label: "One Loop · Three Scales", ids: ["satisfaction", "repair", "cult"] },
  { label: "The Sites of Capture", ids: ["boredom", "janitor", "rogan", "crisis", "firstscreen", "mortality"] },
  { label: "The Remainder", ids: ["custodial", "glitch", "held", "holding", "face"] },
];
const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);

interface TF {
  x: number;
  y: number;
  scale: number;
}
interface Saved {
  entered?: boolean;
  openId?: string | null;
  tf?: TF | null;
}
interface Trans {
  kind: "descent" | "surface";
  x: number;
  y: number;
  key: number;
}
type Gesture =
  | { mode: "pan"; sx: number; sy: number; ox: number; oy: number }
  | { mode: "pinch"; dist: number }
  | null;

// ───────── entrance ─────────
function Intro({ onEnter, vw }: { onEnter: () => void; vw: number }) {
  const t = useTick();
  const rot = ((t / 1000) * 7) % 360,
    sd = ((t / 1000) * 40) % 360;
  const [sx, sy] = ptOnCircle(120, 120, 70, sd);
  const titleSize = Math.max(27, Math.min(72, (vw - 52) / 11.5));
  const ring = Math.min(180, Math.max(120, vw * 0.42));
  return (
    <div
      className="atlas-root"
      style={{
        position: "fixed",
        inset: 0,
        background: L.paper,
        color: L.ink,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 60,
        padding: "0 22px",
        textAlign: "center",
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} preserveAspectRatio="none" viewBox="0 0 1440 900">
        <defs>
          <pattern id="intro-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke={L.rule} strokeWidth="0.5" opacity={0.45} />
          </pattern>
        </defs>
        <rect x="0" y="0" width="1440" height="900" fill="url(#intro-grid)" opacity="0.5" />
        <rect x="22" y="22" width="1396" height="856" fill="none" stroke={L.ink} strokeWidth="1" opacity="0.45" />
      </svg>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.3em", color: L.oxide, position: "relative" }}>
        AN ATLAS OF CAPTURE
      </div>
      <h1 className="serif" style={{ fontSize: titleSize, fontWeight: 500, margin: "14px 0 0", letterSpacing: "0.01em", position: "relative", whiteSpace: "nowrap", lineHeight: 1.04 }}>
        The Ouroboric Condition
      </h1>
      <div className="serif ital" style={{ fontSize: Math.max(15, titleSize * 0.34), color: L.gloss, marginTop: 12, position: "relative" }}>
        On Psychic Surplus &amp; the Capture of Desire
      </div>
      <svg viewBox="0 0 240 240" width={ring} height={ring} style={{ margin: "22px 0", position: "relative" }}>
        <circle cx="120" cy="120" r="70" fill="none" stroke={L.ink} strokeWidth="1.1" strokeDasharray={`${2 * Math.PI * 70 * 0.96} ${2 * Math.PI * 70 * 0.04}`} transform="rotate(-90 120 120)" />
        {[0, 90, 180, 270].map((d) => {
          const [x1, y1] = ptOnCircle(120, 120, 64, d),
            [x2, y2] = ptOnCircle(120, 120, 76, d);
          return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={L.ink} strokeWidth="1" transform={`rotate(${rot} 120 120)`} />;
        })}
        <circle cx={sx} cy={sy} r="3.4" fill={L.oxide} />
      </svg>
      <p className="serif" style={{ fontSize: Math.min(19, Math.max(16, vw / 25)), lineHeight: 1.6, maxWidth: 600, color: "#2c2820", position: "relative", textWrap: "pretty" }}>
        After the requirements of survival have been met, an excess remains — of attention, of desire, of care. Late capitalism has succeeded in reaching it. What follows is a map of the apparatus that captures it, and of what survives the capture.
      </p>
      <button
        onClick={onEnter}
        className="mono"
        style={{ marginTop: 30, fontSize: 12, letterSpacing: "0.24em", color: L.paper, background: L.ink, border: `1px solid ${L.ink}`, padding: "14px 30px", cursor: "pointer", position: "relative" }}
      >
        ENTER THE ATLAS →
      </button>
      {/* The way out. The atlas had no link back to the umbrella anywhere —
          a reader landing here could enter the work but not leave it. The
          card is exactly viewport-height and must not scroll, so the link
          rides the existing footer line rather than a strip appended below. */}
      <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: L.faint, marginTop: 20, position: "relative" }}>
        17 SPECIMENS · 14 CHAPTERS · ONE APPARATUS
        <span style={{ margin: "0 0.75em" }}>·</span>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          ↑ AUTOSTIMULUS
        </Link>
      </div>
    </div>
  );
}

// ───────── index drawer ─────────
function IndexDrawer({ onOpen, onClose }: { onOpen: OpenFn; onClose: () => void }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(22,18,14,.3)", zIndex: 44, animation: "at-fade .2s ease" }} />
      <div
        className="atlas-root"
        style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(382px,88vw)", background: L.paper, borderLeft: `1px solid ${L.ink}`, zIndex: 45, overflowY: "auto", padding: "20px 22px 48px", boxShadow: "-14px 0 50px rgba(0,0,0,.22)" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `1px solid ${L.ink}`, paddingBottom: 12 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.24em", color: L.oxide }}>
            INDEX OF SPECIMENS
          </span>
          <button onClick={onClose} className="mono" style={{ fontSize: 18, color: L.gloss, background: "none", border: "none", cursor: "pointer", lineHeight: 1 }}>
            ×
          </button>
        </div>
        {GROUPS.map((g) => (
          <div key={g.label} style={{ marginTop: 18 }}>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.18em", color: L.gloss, marginBottom: 8 }}>
              {g.label.toUpperCase()}
            </div>
            {g.ids.map((id) => {
              const s = SITE[id];
              const dark = s.tone === "dark";
              return (
                <button
                  key={id}
                  onClick={() => {
                    onOpen(id);
                    onClose();
                  }}
                  style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: `1px solid ${L.rule}`, padding: "10px 2px", cursor: "pointer" }}
                >
                  <span style={{ flex: "0 0 auto", width: 13, height: 13, background: dark ? "#15171e" : "transparent", border: `1px solid ${dark ? "#3a3326" : L.ink}`, boxShadow: dark ? `inset 0 0 6px ${D.glow}66` : "none" }} />
                  <span className="mono" style={{ flex: "0 0 auto", fontSize: 10, letterSpacing: "0.1em", color: L.oxide, width: 30 }}>
                    {s.fig}
                  </span>
                  <span style={{ flex: 1 }}>
                    <span className="serif" style={{ fontSize: 16, color: L.ink }}>
                      {s.title}
                    </span>
                    <span className="serif ital" style={{ fontSize: 12.5, color: L.gloss, display: "block" }}>
                      {s.sub}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function Key({ onClose, narrow }: { onClose: () => void; narrow: boolean }) {
  const row = (sw: ReactNode, label: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "7px 0" }}>
      {sw}
      <span className="serif" style={{ fontSize: 14, color: L.gloss }}>
        {label}
      </span>
    </div>
  );
  return (
    <div className="atlas-root" style={{ position: "fixed", right: "max(14px, env(safe-area-inset-right))", bottom: "calc(max(14px, env(safe-area-inset-bottom)) + 52px)", width: "min(300px,90vw)", background: L.paper, border: `1px solid ${L.ink}`, padding: "16px 18px", zIndex: 30, boxShadow: "0 10px 40px rgba(0,0,0,.18)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: L.oxide }}>
          KEY
        </span>
        <button onClick={onClose} className="mono" style={{ fontSize: 14, color: L.gloss, background: "none", border: "none", cursor: "pointer" }}>
          ×
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        {row(<div style={{ flex: "0 0 auto", width: 22, height: 22, background: "#15171e", border: "1px solid #3a3326", boxShadow: `inset 0 0 8px ${D.glow}55` }} />, "a site of capture — descend into the apparatus")}
        {row(<div style={{ flex: "0 0 auto", width: 22, height: 22, border: `1px solid ${L.ink}` }} />, "the substrate & the remainder — paper, in the light")}
        {row(
          <svg width="22" height="22" style={{ flex: "0 0 auto" }}>
            <line x1="2" y1="11" x2="20" y2="11" stroke={L.faint} strokeWidth="1" />
          </svg>,
          "an interconnection between specimens"
        )}
      </div>
      <div className="serif ital" style={{ fontSize: 13, color: L.gloss, marginTop: 12, lineHeight: 1.4, borderTop: `1px solid ${L.rule}`, paddingTop: 10 }}>
        Serif is the lived; monospace is the rendered.{" "}
        {narrow ? "One finger moves the map, two fingers zoom; tap any specimen — or use the index." : "Drag the paper to move, scroll to zoom, click any specimen — or open the index."}
      </div>
    </div>
  );
}

export default function AtlasApp() {
  const vw = useViewport();
  const narrow = vw < 760;
  // The explainer is the deliberate landing — show it on every visit (no
  // persisted "entered" skip; openId and tf aren't restored either).
  const [entered, setEntered] = useState(false);
  // Always land on the map: never restore a previously-open plate. A
  // returning visitor was re-entering inside the last specimen placard.
  const [openId, setOpenId] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scaleDisp, setScaleDisp] = useState(1);
  const [keyOpen, setKeyOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [trans, setTrans] = useState<Trans | null>(null);
  const transT = useRef<ReturnType<typeof setTimeout>[]>([]);
  const openIdRef = useRef<string | null>(openId);
  useEffect(() => {
    openIdRef.current = openId;
  }, [openId]);
  const vpRef = useRef<HTMLDivElement>(null),
    worldRef = useRef<HTMLDivElement>(null);
  // Re-fit for the current viewport on load rather than restoring a saved
  // pan/zoom — a transform captured on desktop must not load onto a phone.
  const tf = useRef<TF | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const gesture = useRef<Gesture>(null);

  const persist = useCallback(
    (extra?: Partial<Saved>) => {
      let prev: Saved = {};
      try {
        prev = JSON.parse(localStorage.getItem(LS) || "{}");
      } catch {}
      const data = { ...prev, openId, tf: tf.current, ...(extra || {}) };
      try {
        localStorage.setItem(LS, JSON.stringify(data));
      } catch {}
    },
    [openId]
  );

  // apply the transform, clamped so the tall section can be scrolled top→bottom
  // without being lost off-screen.
  const apply = useCallback(() => {
    const el = worldRef.current,
      vp = vpRef.current;
    if (!el || !vp || !tf.current) return;
    const r = vp.getBoundingClientRect();
    const t = tf.current;
    const sw = W * t.scale,
      sh = H * t.scale;
    if (sw <= r.width) t.x = (r.width - sw) / 2;
    else t.x = Math.max(r.width - sw - 80, Math.min(80, t.x));
    if (sh <= r.height) t.y = (r.height - sh) / 2;
    else t.y = Math.max(r.height - sh - 50, Math.min(64, t.y));
    el.style.transform = `translate(${t.x}px,${t.y}px) scale(${t.scale})`;
  }, []);

  // "fit" the section: fit to width, anchored at the top — the surface fills the
  // screen and the reader descends. On a wide monitor the section is scaled up
  // (more legible); the depth gauge and scroll carry the descent.
  const fit = useCallback(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const r = vp.getBoundingClientRect();
    const narrowVp = r.width < 760;
    if (narrowVp) {
      // a phone reads the section the way the section reads — downward. Open
      // zoomed on the surface (masthead + strata legible), anchored left below
      // the top bar; the reader scrolls to descend, pans for the far clusters,
      // and the Index jumps anywhere.
      const s = 0.48;
      tf.current = { scale: s, x: 6, y: 58 };
      apply();
      setScaleDisp(s);
    } else {
      const s = (r.width / W) * 0.94;
      tf.current = { scale: s, x: (r.width - W * s) / 2, y: 8 };
      apply();
      setScaleDisp(s);
    }
  }, [apply]);

  useLayoutEffect(() => {
    if (tf.current) {
      apply();
      setScaleDisp(tf.current.scale);
    } else fit();
    const onResize = () => {
      if (!tf.current) fit();
      else apply();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const zoomAt = useCallback(
    (cx: number, cy: number, factor: number) => {
      const vp = vpRef.current;
      if (!vp || !tf.current) return;
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.max(0.16, Math.min(3.6, t.scale * factor));
      const k = next / t.scale;
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      setScaleDisp(next);
    },
    [apply]
  );

  // wheel-zoom via a native non-passive listener so preventDefault works
  // (React registers onWheel as passive, which would no-op preventDefault).
  useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      if (e.ctrlKey) {
        // trackpad pinch / ctrl+wheel → zoom toward the cursor
        zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 1.1 : 1 / 1.1);
      } else if (tf.current) {
        // the section is read top→bottom: the wheel descends through the strata
        tf.current.y -= e.deltaY;
        tf.current.x -= e.deltaX;
        apply();
      }
    };
    vp.addEventListener("wheel", handler, { passive: false });
    return () => vp.removeEventListener("wheel", handler);
  }, [zoomAt, apply]);

  // zoom from the viewport center (the + / − controls)
  const zoomBy = useCallback(
    (factor: number) => {
      const vp = vpRef.current;
      if (!vp) return;
      const r = vp.getBoundingClientRect();
      zoomAt(r.left + r.width / 2, r.top + r.height / 2, factor);
      persist();
    },
    [zoomAt, persist]
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const onNode = !!(e.target as Element).closest("[data-atlas-node]");
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size >= 2) {
      const pts = [...pointers.current.values()];
      gesture.current = { mode: "pinch", dist: dist(pts[0], pts[1]) };
      for (const id of pointers.current.keys()) {
        try {
          e.currentTarget.setPointerCapture(id);
        } catch {}
      }
    } else if (!onNode) {
      gesture.current = { mode: "pan", sx: e.clientX, sy: e.clientY, ox: tf.current!.x, oy: tf.current!.y };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    } else {
      gesture.current = null; // single tap on a node → let the click through
    }
  }, []);
  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const p = pointers.current.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;
      const g = gesture.current;
      if (!g) return;
      if (g.mode === "pan") {
        tf.current!.x = g.ox + (e.clientX - g.sx);
        tf.current!.y = g.oy + (e.clientY - g.sy);
        apply();
      } else if (g.mode === "pinch") {
        const pts = [...pointers.current.values()];
        if (pts.length < 2) return;
        const nd = dist(pts[0], pts[1]);
        const mx = (pts[0].x + pts[1].x) / 2,
          my = (pts[0].y + pts[1].y) / 2;
        if (g.dist > 0) zoomAt(mx, my, nd / g.dist);
        g.dist = nd;
      }
    },
    [apply, zoomAt]
  );
  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      pointers.current.delete(e.pointerId);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      if (pointers.current.size === 1) {
        const p = [...pointers.current.values()][0];
        gesture.current = { mode: "pan", sx: p.x, sy: p.y, ox: tf.current!.x, oy: tf.current!.y };
      } else if (pointers.current.size === 0) {
        gesture.current = null;
        persist();
      }
    },
    [persist]
  );

  const clearTrans = useCallback(() => {
    transT.current.forEach(clearTimeout);
    transT.current = [];
  }, []);
  const fireTrans = useCallback(
    (kind: "descent" | "surface", x: number, y: number) => {
      clearTrans();
      setTrans({ kind, x, y, key: Date.now() });
      transT.current.push(setTimeout(() => setTrans(null), 850));
    },
    [clearTrans]
  );
  const toneOf = (id: string) => (SITE[id] ? SITE[id].tone : "light");

  const open = useCallback<OpenFn>(
    (id, e) => {
      const x = (e && e.clientX) || window.innerWidth / 2,
        y = (e && e.clientY) || window.innerHeight / 2;
      setOpenId(id);
      fireTrans(toneOf(id) === "dark" ? "descent" : "surface", x, y);
    },
    [fireTrans]
  );
  const close = useCallback(() => {
    clearTrans();
    setTrans({ kind: "surface", x: window.innerWidth / 2, y: window.innerHeight / 2, key: Date.now() });
    transT.current.push(setTimeout(() => setOpenId(null), 380));
    transT.current.push(setTimeout(() => setTrans(null), 850));
  }, [clearTrans]);
  const nav = useCallback(
    (dir: number) => {
      const i = order.indexOf(openIdRef.current ?? "");
      const next = order[(i + dir + order.length) % order.length];
      setOpenId(next);
      fireTrans(toneOf(next) === "dark" ? "descent" : "surface", window.innerWidth / 2, window.innerHeight / 2);
    },
    [fireTrans]
  );
  useEffect(() => {
    persist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  const site = openId ? SITE[openId] : null;
  const ctrlStyle = (lbl: string): CSSProperties => ({
    fontSize: lbl.length > 2 ? 10 : 16,
    letterSpacing: lbl.length > 2 ? "0.14em" : 0,
    minWidth: 38,
    height: 38,
    padding: "0 11px",
    color: L.ink,
    background: L.paper,
    border: `1px solid ${L.ink}`,
    cursor: "pointer",
  });

  return (
    <div className="atlas-root" style={{ position: "fixed", inset: 0, background: "#cdc7b8", overflow: "hidden", fontFamily: "var(--atlas-serif),serif" }}>
      <style>{ATLAS_CSS}</style>
      {/* viewport */}
      <div
        ref={vpRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ position: "absolute", inset: 0, cursor: "grab", touchAction: "none" }}
      >
        <div ref={worldRef} style={{ position: "absolute", top: 0, left: 0, width: W, height: H, transformOrigin: "0 0", willChange: "transform" }}>
          <AtlasChart onOpen={open} hovered={hovered} setHovered={setHovered} narrow={narrow} />
        </div>
      </div>

      {/* top bar — slim: the chart's masthead carries the title & author */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, minHeight: 52, display: "flex", alignItems: "center", gap: 10, padding: "max(8px, env(safe-area-inset-top)) max(14px, env(safe-area-inset-right)) 0 max(14px, env(safe-area-inset-left))", pointerEvents: "none" }}>
        <Link
          href="/"
          className="mono"
          style={{ fontSize: 10, letterSpacing: "0.18em", color: L.ink, textDecoration: "none", whiteSpace: "nowrap", background: L.paper, border: `1px solid ${L.ink}`, padding: "8px 12px", pointerEvents: "auto", boxShadow: "0 2px 10px rgba(0,0,0,.08)" }}
        >
          ↑ AUTOSTIMULUS
        </Link>
        <button
          onClick={() => setIndexOpen(true)}
          className="mono"
          style={{ fontSize: 10.5, letterSpacing: "0.14em", color: L.ink, background: L.paper, border: `1px solid ${L.ink}`, padding: "8px 13px", cursor: "pointer", pointerEvents: "auto", boxShadow: "0 2px 10px rgba(0,0,0,.08)" }}
        >
          ☰ INDEX
        </button>
      </div>

      {/* controls */}
      <div style={{ position: "fixed", right: "max(14px, env(safe-area-inset-right))", bottom: "max(14px, env(safe-area-inset-bottom))", display: "flex", gap: 6, alignItems: "center" }}>
        {!narrow && (
          <div className="mono" style={{ fontSize: 10, color: L.gloss, marginRight: 4, width: 38, textAlign: "right" }}>
            {Math.round(scaleDisp * 100)}%
          </div>
        )}
        <button onClick={() => setKeyOpen((v) => !v)} className="mono" style={ctrlStyle("key")}>
          key
        </button>
        <button onClick={fit} className="mono" style={ctrlStyle("fit")}>
          fit
        </button>
        <button onClick={() => zoomBy(1 / 1.25)} className="mono" style={ctrlStyle("−")}>
          −
        </button>
        <button onClick={() => zoomBy(1.25)} className="mono" style={ctrlStyle("+")}>
          +
        </button>
      </div>

      {/* live read-out — fixed, follows the hover as the reader descends */}
      {!narrow && (
        <div
          style={{
            position: "fixed",
            left: 14,
            bottom: 14,
            width: 320,
            border: `1px solid ${hovered ? L.oxide : L.ink}`,
            background: L.paper,
            pointerEvents: "none",
            zIndex: 41,
            boxShadow: "0 6px 24px rgba(0,0,0,.12)",
            transition: "border-color .2s",
          }}
        >
          <div style={{ display: "flex", borderBottom: `1px solid ${hovered ? L.oxide : L.ink}` }}>
            <div className="serif" style={{ flex: 1, padding: "8px 13px", fontSize: 17, color: L.ink, borderRight: `1px solid ${hovered ? L.oxide : L.ink}` }}>
              {hovered && SITE[hovered] ? SITE[hovered].title : "The Ouroboric Apparatus"}
            </div>
            <div className="mono" style={{ padding: "8px 11px", fontSize: 10.5, color: hovered ? L.oxide : L.gloss, display: "flex", alignItems: "center" }}>
              FIG. {hovered && SITE[hovered] ? SITE[hovered].fig : "00"}
            </div>
          </div>
          <div className="serif ital" style={{ padding: "8px 13px", fontSize: 13.5, lineHeight: 1.32, color: L.gloss }}>
            {hovered && SITE[hovered] ? SITE[hovered].gloss : "hover a specimen to read it; click to descend into its plate."}
          </div>
        </div>
      )}

      {/* mobile read-out — tap a specimen to light its connection threads;
          tap again (or here) to descend. The phone's stand-in for hover. */}
      {narrow && hovered && SITE[hovered] && (
        <div
          style={{ position: "fixed", left: "max(14px, env(safe-area-inset-left))", right: "max(14px, env(safe-area-inset-right))", bottom: "calc(max(14px, env(safe-area-inset-bottom)) + 52px)", zIndex: 41, background: L.paper, border: `1px solid ${L.oxide}`, boxShadow: "0 8px 30px rgba(0,0,0,.22)" }}
        >
          <button
            onClick={() => setHovered(null)}
            className="mono"
            aria-label="clear highlight"
            style={{ position: "absolute", top: 4, right: 8, fontSize: 17, lineHeight: 1, color: L.gloss, background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            ×
          </button>
          <button
            onClick={(e) => open(hovered, e)}
            style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "12px 36px 13px 14px" }}
          >
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.16em", color: L.oxide }}>
              FIG. {SITE[hovered].fig}
            </div>
            <div className="serif" style={{ fontSize: 18, color: L.ink, marginTop: 4 }}>
              {SITE[hovered].title}
            </div>
            <div className="serif ital" style={{ fontSize: 13.5, lineHeight: 1.34, color: L.gloss, marginTop: 3 }}>
              {SITE[hovered].gloss}
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: L.oxide, marginTop: 9 }}>
              TAP AGAIN TO DESCEND →
            </div>
          </button>
        </div>
      )}
      {keyOpen && <Key onClose={() => setKeyOpen(false)} narrow={narrow} />}
      {indexOpen && <IndexDrawer onOpen={open} onClose={() => setIndexOpen(false)} />}

      {!entered && (
        <Intro
          onEnter={() => {
            setEntered(true);
            persist({ entered: true });
          }}
          vw={vw}
        />
      )}
      {site && <AtlasPlate site={site} onOpen={open} onClose={close} onNav={nav} idx={order.indexOf(site.id)} total={order.length} />}
      {trans &&
        (() => {
          const descent = trans.kind === "descent";
          // disc radius covers the screen from any origin point
          const R =
            (typeof window !== "undefined"
              ? Math.hypot(window.innerWidth, window.innerHeight)
              : 1400) * 1.06;
          return (
            <div
              key={trans.key}
              aria-hidden
              style={{ position: "fixed", inset: 0, zIndex: 70, pointerEvents: "none", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div
                className="atlas-disc"
                style={{
                  position: "absolute",
                  left: trans.x - R,
                  top: trans.y - R,
                  width: 2 * R,
                  height: 2 * R,
                  borderRadius: "50%",
                  transformOrigin: "center",
                  willChange: "transform,opacity",
                  background: descent
                    ? `radial-gradient(circle, ${D.glow}66, ${D.bg} 60%)`
                    : `radial-gradient(circle, rgba(255,255,255,.6), ${L.paper} 62%)`,
                  animation: "at-disc .85s cubic-bezier(.55,0,.3,1) forwards",
                }}
              />
              <div
                className="mono atlas-label"
                style={{ position: "relative", fontSize: narrow ? 9 : 11, letterSpacing: "0.32em", color: descent ? D.glow : L.oxide, textAlign: "center", padding: "0 20px", animation: "at-label .85s ease forwards" }}
              >
                {descent ? "DESCENDING INTO THE APPARATUS" : "SURFACING"}
              </div>
            </div>
          );
        })()}
    </div>
  );
}

