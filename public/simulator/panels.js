var { useMemo, useEffect, useRef, useState } = React;
function LoopDiagram({ state, knobs }) {
  const w = 560, h = 360;
  const cx = w / 2, cy = h / 2;
  const r = 132;
  const nodes = [
    { id: "u", x: cx, y: cy - r, label: "u_t", sub: "user state" },
    { id: "y", x: cx + r, y: cy, label: "y_t", sub: "engagement" },
    { id: "\u03C0", x: cx, y: cy + r, label: "\u03C0(y\u2081\u209C;\u03B8\u209C)", sub: "policy" },
    { id: "s", x: cx - r, y: cy, label: "s_t", sub: "stimulus" }
  ];
  const edges = [
    { from: "u", to: "y", eq: "(2) y = g(u)+\u03B7", lit: true },
    { from: "y", to: "\u03C0", eq: "(4) \u03B8 \u2190 \u03B8+\u03B1\u2207R\u0302", lit: true },
    { from: "\u03C0", to: "s", eq: "(3) s = \u03C0(y\u2081\u209C)", lit: state.t > 0 },
    { from: "s", to: "u", eq: "(1) u' = f(u,s)+\u03BE", lit: true }
  ];
  const tickPhase = state.t % 4;
  const activeEdge = edges[tickPhase];
  return /* @__PURE__ */ React.createElement("div", { className: "loop" }, /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}`, preserveAspectRatio: "xMidYMid meet" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("marker", { id: "ar", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, /* @__PURE__ */ React.createElement("path", { d: "M0,0 L10,5 L0,10 z", fill: "#1a1814" }))), /* @__PURE__ */ React.createElement("circle", { cx, cy, r, fill: "none", stroke: "#cdc6b6", strokeDasharray: "2 4" }), /* @__PURE__ */ React.createElement("g", { transform: `translate(${cx - 200}, ${cy})` }, /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "-22", x2: "0", y2: "22", stroke: "#1a1814", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("text", { x: "-6", y: "-28", textAnchor: "end", fontFamily: "var(--mono)", fontSize: "10", fill: "#6b6457", letterSpacing: "1.2" }, "e_t \u2261 0"), /* @__PURE__ */ React.createElement("text", { x: "-6", y: "-14", textAnchor: "end", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "11", fill: "#6b6457" }, "no exogenous"), /* @__PURE__ */ React.createElement("text", { x: "-6", y: "0", textAnchor: "end", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "11", fill: "#6b6457" }, "channel"), /* @__PURE__ */ React.createElement("text", { x: "-6", y: "14", textAnchor: "end", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "11", fill: "#6b6457" }, "(6)")), edges.map((e, idx) => {
    const f = nodes.find((n) => n.id === e.from), t = nodes.find((n) => n.id === e.to);
    const dx = t.x - f.x, dy = t.y - f.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len;
    const fx = f.x + ux * 36, fy = f.y + uy * 36;
    const tx = t.x - ux * 36, ty = t.y - uy * 36;
    const mx = (fx + tx) / 2 + uy * 22, my = (fy + ty) / 2 - ux * 22;
    const active = idx === tickPhase;
    return /* @__PURE__ */ React.createElement("g", { key: e.from + e.to }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: `M ${fx} ${fy} Q ${mx} ${my} ${tx} ${ty}`,
        fill: "none",
        stroke: active ? "var(--accent)" : "#1a1814",
        strokeWidth: active ? 2.2 : 1,
        markerEnd: "url(#ar)",
        opacity: active ? 1 : 0.7
      }
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: mx,
        y: my - 4,
        textAnchor: "middle",
        fontFamily: "var(--mono)",
        fontSize: "10",
        fill: active ? "var(--accent)" : "#3b362d",
        letterSpacing: "0.5"
      },
      e.eq
    ));
  }), nodes.map((n) => /* @__PURE__ */ React.createElement("g", { key: n.id, transform: `translate(${n.x},${n.y})` }, /* @__PURE__ */ React.createElement("circle", { r: "32", fill: "#f3efe7", stroke: "#1a1814", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("text", { textAnchor: "middle", y: "-3", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "17", fill: "#1a1814" }, n.label), /* @__PURE__ */ React.createElement("text", { textAnchor: "middle", y: "13", fontFamily: "var(--mono)", fontSize: "8.5", fill: "#6b6457", letterSpacing: "1" }, n.sub))), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy - 4, textAnchor: "middle", fontFamily: "var(--mono)", fontSize: "9", fill: "#948c7d", letterSpacing: "1.5" }, "CLOSED"), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy + 10, textAnchor: "middle", fontFamily: "var(--mono)", fontSize: "9", fill: "#948c7d", letterSpacing: "1.5" }, "CONTOUR")));
}
function RegistersPanel({ state }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "card-sub" }, "The user state ", /* @__PURE__ */ React.createElement("em", null, "u", /* @__PURE__ */ React.createElement("sub", null, "t")), " decomposes into four registers \u2014 channels of address, not selves. Each evolves under ", /* @__PURE__ */ React.createElement("em", null, "f(u, s) + \u03BE"), "."), /* @__PURE__ */ React.createElement("div", { className: "registers" }, REGISTERS.map((reg) => {
    const v = state.u[reg.id];
    const flash = state.events.length && state.events[state.events.length - 1].reg === reg.id;
    return /* @__PURE__ */ React.createElement(React.Fragment, { key: reg.id }, /* @__PURE__ */ React.createElement("div", { className: "lab" }, /* @__PURE__ */ React.createElement("span", { className: "glyph" }, reg.glyph), " ", reg.label), /* @__PURE__ */ React.createElement("div", { className: "track" }, /* @__PURE__ */ React.createElement("div", { className: `fill ${flash ? "flash" : ""}`, style: { width: `${v * 100}%` } })), /* @__PURE__ */ React.createElement("div", { className: "val" }, v.toFixed(3)));
  })), /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginBottom: 6 } }, "Policy belief \u03B8_t \u2014 implicit posterior weights"), /* @__PURE__ */ React.createElement("div", { className: "registers" }, REGISTERS.map((reg) => {
    const v = state.theta[reg.id];
    return /* @__PURE__ */ React.createElement(React.Fragment, { key: reg.id }, /* @__PURE__ */ React.createElement("div", { className: "lab" }, /* @__PURE__ */ React.createElement("span", { className: "glyph" }, "\u03B8", sub(reg.id)), " ", reg.label), /* @__PURE__ */ React.createElement("div", { className: "track" }, /* @__PURE__ */ React.createElement("div", { className: "fill", style: { width: `${v * 100}%`, background: "var(--ink-3)" } })), /* @__PURE__ */ React.createElement("div", { className: "val" }, v.toFixed(3)));
  })));
}
var subMap = { S: "\u209B", C: "\u1D04", P: "\u209A", K: "\u1D0B" };
function sub(k) {
  return subMap[k] || "";
}
function MetricsPanel({ state, knobs }) {
  const ms = state.isi * (state.deltaMin * 1e3);
  const PrEtau = Math.exp(-state.thetaRef * (1 / Math.max(2, recentISIMean(state))));
  const foreclosed = PrEtau < 1e-3;
  const dividual = state.Hbelief < 0.5;
  const totalSurplus = RKEYS.reduce((a, k) => a + state.sigmaSurplus[k], 0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "card-sub" }, "Six instruments from \xA73, evaluated on the live trajectory. Each is measurable; none is a derivative of another."), /* @__PURE__ */ React.createElement("div", { className: "metrics" }, /* @__PURE__ */ React.createElement("div", { className: "metric" }, /* @__PURE__ */ React.createElement("div", { className: "name" }, "Foreclosure"), /* @__PURE__ */ React.createElement("div", { className: "formula" }, "Pr(", /* @__PURE__ */ React.createElement("em", null, "E", /* @__PURE__ */ React.createElement("sub", null, "\u03C4")), ") = ", /* @__PURE__ */ React.createElement("em", null, "S"), "(\u03B8", /* @__PURE__ */ React.createElement("sub", null, "ref"), "; \u03B8", /* @__PURE__ */ React.createElement("sub", null, "t"), ")"), /* @__PURE__ */ React.createElement("div", { className: `value ${foreclosed ? "alarm" : ""}` }, fmtSmall(PrEtau)), /* @__PURE__ */ React.createElement("div", { className: "note" }, "no-input window of length \u03B8", /* @__PURE__ */ React.createElement("sub", null, "ref"), "=", state.thetaRef, " ticks")), /* @__PURE__ */ React.createElement("div", { className: "metric" }, /* @__PURE__ */ React.createElement("div", { className: "name" }, "Dividual condition"), /* @__PURE__ */ React.createElement("div", { className: "formula" }, /* @__PURE__ */ React.createElement("em", null, "H"), "(", /* @__PURE__ */ React.createElement("em", null, "b", /* @__PURE__ */ React.createElement("sub", null, "t")), ") = ", /* @__PURE__ */ React.createElement("em", null, "H"), "(", /* @__PURE__ */ React.createElement("em", null, "u", /* @__PURE__ */ React.createElement("sub", null, "t")), " | ", /* @__PURE__ */ React.createElement("em", null, "y"), /* @__PURE__ */ React.createElement("sub", null, "1:t"), ")"), /* @__PURE__ */ React.createElement("div", { className: `value ${dividual ? "alarm" : knobs.sigmaC > 0.2 ? "ok" : ""}` }, state.Hbelief.toFixed(3)), /* @__PURE__ */ React.createElement("div", { className: "note" }, "posterior entropy nats; H", /* @__PURE__ */ React.createElement("sub", null, "res"), "(\u03C3\xB2", /* @__PURE__ */ React.createElement("sub", null, "\u03B7"), ") \u2265 ", (0.32 + knobs.sigmaC * 0.78).toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "metric" }, /* @__PURE__ */ React.createElement("div", { className: "name" }, "Metric superego"), /* @__PURE__ */ React.createElement("div", { className: "formula" }, /* @__PURE__ */ React.createElement("em", null, "D", /* @__PURE__ */ React.createElement("sub", null, "KL")), "(", /* @__PURE__ */ React.createElement("em", null, "\u03BD", /* @__PURE__ */ React.createElement("sub", null, "u")), " \u2016 \u03C0", /* @__PURE__ */ React.createElement("sub", null, "R\u0302"), ")"), /* @__PURE__ */ React.createElement("div", { className: `value ${state.Dkl > 0.3 ? "ok" : ""}` }, state.Dkl.toFixed(3)), /* @__PURE__ */ React.createElement("div", { className: "note" }, "L", /* @__PURE__ */ React.createElement("sub", null, "m"), "* = ", state.LmStar.toFixed(2), " \u2014 current L", /* @__PURE__ */ React.createElement("sub", null, "m"), " = ", knobs.Lm.toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "metric" }, /* @__PURE__ */ React.createElement("div", { className: "name" }, "Surplus \u03A3(T)"), /* @__PURE__ */ React.createElement("div", { className: "formula" }, "\u2211", /* @__PURE__ */ React.createElement("sub", null, "i"), " \u222B \u03C1", /* @__PURE__ */ React.createElement("sub", null, "i"), "(u", /* @__PURE__ */ React.createElement("sub", null, "t\u207B"), ") dN", /* @__PURE__ */ React.createElement("sup", null, "i"), /* @__PURE__ */ React.createElement("sub", null, "t")), /* @__PURE__ */ React.createElement("div", { className: "value alarm" }, totalSurplus.toFixed(2)), /* @__PURE__ */ React.createElement("div", { className: "note" }, "rate d\u03A3/dt \u2248 ", state.sigmaSurplusRate.toFixed(3))), /* @__PURE__ */ React.createElement("div", { className: "metric" }, /* @__PURE__ */ React.createElement("div", { className: "name" }, "Captured resonance"), /* @__PURE__ */ React.createElement("div", { className: "formula" }, /* @__PURE__ */ React.createElement("em", null, "K", /* @__PURE__ */ React.createElement("sub", null, "bm")), " > | \u03C9", /* @__PURE__ */ React.createElement("sub", null, "b"), " \u2212 \u03C9", /* @__PURE__ */ React.createElement("sub", null, "m"), " |"), /* @__PURE__ */ React.createElement("div", { className: `value ${state.locked ? "alarm" : ""}` }, state.K_bm.toFixed(2), " ", state.locked ? ">" : "<", " ", (Math.abs(state.omegaB - state.omegaM) * 28).toFixed(2)), /* @__PURE__ */ React.createElement("div", { className: "note" }, state.locked ? "PHASE-LOCKED \u2014 body entrains to medium" : "free oscillator")), /* @__PURE__ */ React.createElement("div", { className: "metric" }, /* @__PURE__ */ React.createElement("div", { className: "name" }, "ISI (\u0394t to last stim)"), /* @__PURE__ */ React.createElement("div", { className: "formula" }, /* @__PURE__ */ React.createElement("em", null, "\u03C4"), /* @__PURE__ */ React.createElement("sup", null, "(k)"), " in ticks \xB7 ", (state.deltaMin * 1e3).toFixed(0), " ms"), /* @__PURE__ */ React.createElement("div", { className: "value" }, state.isi), /* @__PURE__ */ React.createElement("div", { className: "note" }, "\u03B4", /* @__PURE__ */ React.createElement("sub", null, "min"), " = 1 tick \xB7 \u03B8", /* @__PURE__ */ React.createElement("sub", null, "ref"), "/\u03B4", /* @__PURE__ */ React.createElement("sub", null, "min"), " = ", state.thetaRef))));
}
function recentISIMean(state) {
  const h = state.isiHist.slice(-80);
  if (!h.length) return 4;
  return h.reduce((a, b) => a + b, 0) / h.length;
}
function fmtSmall(x) {
  if (x === 0) return "0";
  if (x < 1e-3) return x.toExponential(2);
  return x.toFixed(4);
}
function SurplusBreakdown({ state }) {
  const total = Math.max(1e-3, RKEYS.reduce((a, k) => a + state.sigmaSurplus[k], 0));
  return /* @__PURE__ */ React.createElement("div", { className: "surplus-grid" }, REGISTERS.map((reg) => {
    const v = state.sigmaSurplus[reg.id];
    const pct = v / total * 100;
    return /* @__PURE__ */ React.createElement("div", { className: "surplus-cell", key: reg.id }, /* @__PURE__ */ React.createElement("div", { className: "reg" }, /* @__PURE__ */ React.createElement("span", { className: "glyph" }, "\u03A3", sub(reg.id)), " \xA0", reg.label), /* @__PURE__ */ React.createElement("div", { className: "amt" }, v.toFixed(2)), /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginTop: 4 } }, pct.toFixed(1), "% of yield"));
  }));
}
function EventRaster({ state }) {
  const win = 600;
  const t0 = Math.max(0, state.t - win);
  return /* @__PURE__ */ React.createElement("div", { className: "raster" }, /* @__PURE__ */ React.createElement("div", { className: "rlab" }, /* @__PURE__ */ React.createElement("b", null, "s_t"), " stimuli"), /* @__PURE__ */ React.createElement(Lane, { events: state.events, t0, win, filter: (e) => e.kind === "s", cls: "stim" }), REGISTERS.map((reg) => /* @__PURE__ */ React.createElement(React.Fragment, { key: reg.id }, /* @__PURE__ */ React.createElement("div", { className: "rlab" }, "dN", /* @__PURE__ */ React.createElement("sup", null, reg.id.toLowerCase()), /* @__PURE__ */ React.createElement("sub", null, "t"), " \xB7 ", /* @__PURE__ */ React.createElement("b", null, reg.label)), /* @__PURE__ */ React.createElement(
    Lane,
    {
      events: state.events,
      t0,
      win,
      filter: (e) => e.kind === "y" && e.reg === reg.id,
      cls: reg.id.toLowerCase()
    }
  ))));
}
function Lane({ events, t0, win, filter, cls }) {
  return /* @__PURE__ */ React.createElement("div", { className: "lane" }, events.filter(filter).map((e, i) => {
    const left = (e.t - t0) / win * 100;
    if (left < 0 || left > 100) return null;
    return /* @__PURE__ */ React.createElement("div", { key: i, className: `mark ${cls}`, style: { left: left + "%" } });
  }));
}
function HawkesMatrix({ state }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "card-sub" }, "Hawkes intensity ", /* @__PURE__ */ React.createElement("em", null, "\u03BB", /* @__PURE__ */ React.createElement("sup", null, "i"), "(t) = \u03BB", /* @__PURE__ */ React.createElement("sub", null, "0"), /* @__PURE__ */ React.createElement("sup", null, "i"), " + \u2211", /* @__PURE__ */ React.createElement("sub", null, "j"), " \u03B1", /* @__PURE__ */ React.createElement("sub", null, "ij"), "\u222B\u03BA(t\u2212s) dN", /* @__PURE__ */ React.createElement("sup", null, "j"), /* @__PURE__ */ React.createElement("sub", null, "s")), ". Off-diagonal entries are libidinal routing (\xA73.3): a ", /* @__PURE__ */ React.createElement("em", null, "j"), "-marked event raises the intensity of an ", /* @__PURE__ */ React.createElement("em", null, "i"), "-marked one. Diagonal dominance is autonomic; off-diagonal mass is the dividual collapse."), /* @__PURE__ */ React.createElement("div", { className: "matrix" }, /* @__PURE__ */ React.createElement("div", { className: "mh" }), REGISTERS.map((r) => /* @__PURE__ */ React.createElement("div", { key: "h" + r.id, className: "mh" }, r.id)), REGISTERS.map((rj, j) => /* @__PURE__ */ React.createElement(React.Fragment, { key: "row" + rj.id }, /* @__PURE__ */ React.createElement("div", { className: "mh" }, rj.id), REGISTERS.map((ri, i) => {
    const v = state.alpha[j][i];
    const bg = `oklch(${Math.max(0.2, 0.96 - v * 0.55)} ${0.06 + v * 0.12} 35 / ${0.1 + v * 0.85})`;
    return /* @__PURE__ */ React.createElement("div", { className: "mc", key: "c" + j + i, style: { background: bg, color: v > 0.35 ? "#f3efe7" : "#1a1814" } }, v.toFixed(2));
  })))), /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginTop: 10, justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { className: "micro" }, "trace(\u03B1) \u2014 autonomic"), /* @__PURE__ */ React.createElement("div", { className: "mono-val" }, state.alpha.reduce((a, r, i) => a + r[i], 0).toFixed(3))), /* @__PURE__ */ React.createElement("div", { className: "row", style: { justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { className: "micro" }, "\u2016\u03B1", /* @__PURE__ */ React.createElement("sub", null, "off-diag"), "\u2016 \u2014 libidinal routing"), /* @__PURE__ */ React.createElement("div", { className: "mono-val" }, state.alpha.reduce((a, r, j) => a + r.reduce((b, v, i) => b + (i === j ? 0 : v), 0), 0).toFixed(3))));
}
function MutualInfo({ state }) {
  const M = useMemo(() => miMatrix(state.uTrail), [state.t]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "card-sub" }, "Mutual information across registers under stationary ", /* @__PURE__ */ React.createElement("em", null, "\u03BC", /* @__PURE__ */ React.createElement("sub", null, "\u03C0")), ". Off-diagonal mass >> baseline = the libidinal-routing claim. ", /* @__PURE__ */ React.createElement("em", null, "H"), "(", /* @__PURE__ */ React.createElement("em", null, "u"), " | ", /* @__PURE__ */ React.createElement("em", null, "y"), /* @__PURE__ */ React.createElement("sub", null, "1:t"), ") \u2192 0 follows."), /* @__PURE__ */ React.createElement("div", { className: "matrix" }, /* @__PURE__ */ React.createElement("div", { className: "mh" }), REGISTERS.map((r) => /* @__PURE__ */ React.createElement("div", { key: "mh" + r.id, className: "mh" }, r.id)), REGISTERS.map((rj, j) => /* @__PURE__ */ React.createElement(React.Fragment, { key: "mi" + rj.id }, /* @__PURE__ */ React.createElement("div", { className: "mh" }, rj.id), REGISTERS.map((ri, i) => {
    const v = M[j][i];
    const bg = i === j ? `oklch(0.30 0 0 / ${0.12 + v * 0.2})` : `oklch(${0.94 - v * 0.55} 0.06 230 / ${0.12 + v * 0.78})`;
    const col = i !== j && v > 0.45 ? "#f3efe7" : "#1a1814";
    return /* @__PURE__ */ React.createElement("div", { className: "mc", key: "mic" + j + i, style: { background: bg, color: col } }, v.toFixed(2));
  })))));
}
function ChronoSpectrum({ state }) {
  const w = 460, h = 220, pad = { l: 36, r: 14, t: 14, b: 28 };
  const taus = useMemo(() => {
    const out = [];
    for (let i = 0; i < 60; i++) out.push(1 + i * 4);
    return out;
  }, []);
  const { Lam, Lam0, D } = useMemo(
    () => chronoDebt(taus, state.isiHist),
    [state.isiHist.length]
  );
  const xs = taus.map((t, i) => pad.l + i / (taus.length - 1) * (w - pad.l - pad.r));
  const yScale = (v) => pad.t + (1 - v) * (h - pad.t - pad.b);
  const lineLam0 = xs.map((x, i) => `${x},${yScale(Lam0[i])}`).join(" ");
  const lineLam = xs.map((x, i) => `${x},${yScale(Lam[i])}`).join(" ");
  const area = xs.map((x, i) => `${x},${yScale(Lam0[i])}`).join(" ") + " " + xs.slice().reverse().map((x, i) => {
    const idx = xs.length - 1 - i;
    return `${x},${yScale(Lam[idx])}`;
  }).join(" ");
  return /* @__PURE__ */ React.createElement("div", { className: "spectrum" }, /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}` }, [0, 0.25, 0.5, 0.75, 1].map((v) => /* @__PURE__ */ React.createElement("g", { key: v }, /* @__PURE__ */ React.createElement("line", { x1: pad.l, x2: w - pad.r, y1: yScale(v), y2: yScale(v), stroke: "#cdc6b6", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("text", { x: pad.l - 6, y: yScale(v) + 3, fontFamily: "var(--mono)", fontSize: "9", textAnchor: "end", fill: "#948c7d" }, v.toFixed(2)))), /* @__PURE__ */ React.createElement("polygon", { points: area, fill: "oklch(0.46 0.12 35 / 0.18)" }), /* @__PURE__ */ React.createElement("polyline", { points: lineLam0, fill: "none", stroke: "#3b362d", strokeWidth: "1.2", strokeDasharray: "3 3" }), /* @__PURE__ */ React.createElement("polyline", { points: lineLam, fill: "none", stroke: "var(--accent)", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: pad.l, y1: h - pad.b, x2: w - pad.r, y2: h - pad.b, stroke: "#1a1814" }), /* @__PURE__ */ React.createElement("line", { x1: pad.l, y1: pad.t, x2: pad.l, y2: h - pad.b, stroke: "#1a1814" }), /* @__PURE__ */ React.createElement("text", { x: (w + pad.l) / 2, y: h - 6, textAnchor: "middle", fontFamily: "var(--mono)", fontSize: "9.5", fill: "#3b362d", letterSpacing: "1" }, "\u03C4  (ticks)"), /* @__PURE__ */ React.createElement("text", { x: 10, y: pad.t + 8, fontFamily: "var(--mono)", fontSize: "9.5", fill: "#3b362d", letterSpacing: "1" }, "Pr(\u03C4_m > \u03C4)"), (() => {
    const k = Math.min(taus.length - 1, Math.round((state.thetaRef - 1) / 4));
    const x = xs[k];
    return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: x, x2: x, y1: pad.t, y2: h - pad.b, stroke: "#1a1814", strokeDasharray: "2 2" }), /* @__PURE__ */ React.createElement("text", { x: x + 4, y: pad.t + 10, fontFamily: "var(--mono)", fontSize: "9", fill: "#1a1814" }, "\u03B8_ref"));
  })()), /* @__PURE__ */ React.createElement("div", { className: "spectrum-legend" }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: "#3b362d", borderTop: "1px dashed #3b362d", height: 0, borderTopWidth: 2 } }), "\u039B_\u25E6(\u03C4) \u2014 pre-closure baseline"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: "var(--accent)" } }), "\u039B(t,\u03C4) \u2014 realized under \u03C0"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: "oklch(0.46 0.12 35 / 0.4)" } }), "D(t,\u03C4) chrono-debt")));
}
function SurvivalView({ state }) {
  const w = 460, h = 200, pad = { l: 44, r: 14, t: 14, b: 30 };
  const taus = useMemo(() => {
    const out = [];
    for (let i = 0; i < 50; i++) out.push(1 + i * 3);
    return out;
  }, []);
  const Semp = useMemo(
    () => survivalEmpirical(state.isiHist, taus),
    [state.isiHist.length]
  );
  const Sbound = useMemo(() => survivalBound(taus, state.deltaMin, 1.2), []);
  const varI = useMemo(
    () => reclamationVariance(taus, state.isiHist, Math.max(1, state.isiHist.length)),
    [state.isiHist.length]
  );
  const ymin = 1e-6;
  const ys = (v) => {
    const lv = Math.log10(Math.max(ymin, v));
    return pad.t + -lv / -Math.log10(ymin) * (h - pad.t - pad.b);
  };
  const xs = taus.map((t, i) => pad.l + i / (taus.length - 1) * (w - pad.l - pad.r));
  const lineEmp = xs.map((x, i) => `${x},${ys(Semp[i])}`).join(" ");
  const lineBound = xs.map((x, i) => `${x},${ys(Sbound[i])}`).join(" ");
  const vmax = Math.log10(Math.max(...varI, 10));
  const ysv = (v) => {
    const lv = Math.log10(Math.max(1, v));
    return pad.t + (1 - lv / Math.max(1, vmax)) * (h - pad.t - pad.b);
  };
  const lineVar = xs.map((x, i) => `${x},${ysv(varI[i])}`).join(" ");
  const kref = Math.min(taus.length - 1, Math.round((state.thetaRef - 1) / 3));
  return /* @__PURE__ */ React.createElement("div", { className: "survival" }, /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}` }, [0, 1, 2, 3, 4, 5].map((p) => {
    const v = Math.pow(10, -p);
    return /* @__PURE__ */ React.createElement("g", { key: p }, /* @__PURE__ */ React.createElement("line", { x1: pad.l, x2: w - pad.r, y1: ys(v), y2: ys(v), stroke: "#cdc6b6", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("text", { x: pad.l - 6, y: ys(v) + 3, fontFamily: "var(--mono)", fontSize: "9", textAnchor: "end", fill: "#948c7d" }, "10\u207B", p));
  }), /* @__PURE__ */ React.createElement(
    "rect",
    {
      x: xs[kref],
      y: pad.t,
      width: w - pad.r - xs[kref],
      height: h - pad.t - pad.b,
      fill: "oklch(0.46 0.12 35 / 0.06)"
    }
  ), /* @__PURE__ */ React.createElement("polyline", { points: lineBound, fill: "none", stroke: "#3b362d", strokeWidth: "1", strokeDasharray: "3 3" }), /* @__PURE__ */ React.createElement("polyline", { points: lineEmp, fill: "none", stroke: "var(--accent)", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("polyline", { points: lineVar, fill: "none", stroke: "var(--leak)", strokeWidth: "1.4" }), /* @__PURE__ */ React.createElement("line", { x1: xs[kref], x2: xs[kref], y1: pad.t, y2: h - pad.b, stroke: "#1a1814", strokeDasharray: "2 2" }), /* @__PURE__ */ React.createElement("text", { x: xs[kref] + 4, y: pad.t + 10, fontFamily: "var(--mono)", fontSize: "9", fill: "#1a1814" }, "\u03B8_ref"), /* @__PURE__ */ React.createElement("line", { x1: pad.l, y1: h - pad.b, x2: w - pad.r, y2: h - pad.b, stroke: "#1a1814" }), /* @__PURE__ */ React.createElement("line", { x1: pad.l, y1: pad.t, x2: pad.l, y2: h - pad.b, stroke: "#1a1814" }), /* @__PURE__ */ React.createElement("text", { x: (w + pad.l) / 2, y: h - 6, textAnchor: "middle", fontFamily: "var(--mono)", fontSize: "9.5", fill: "#3b362d", letterSpacing: "1" }, "\u03C4  (ticks)"), /* @__PURE__ */ React.createElement("text", { x: 4, y: pad.t + 8, fontFamily: "var(--mono)", fontSize: "9", fill: "#3b362d", letterSpacing: "1" }, "S(\u03C4;t),  Var \xCE(\u03C4)")), /* @__PURE__ */ React.createElement("div", { className: "spectrum-legend" }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: "#3b362d", height: 2 } }), "Asmussen bound  C\xB7e^(\u2212\u03C4/\u03B4_min)"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: "var(--accent)" } }), "S(\u03C4;t) empirical"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "sw", style: { background: "var(--leak)" } }), "Var \xCE(\u03C4) \u221D 1/(N\xB7Pr(E_\u03C4))")));
}
function KuramotoView({ state }) {
  const w = 460, h = 140;
  const cx = h / 2 + 20, cy = h / 2, r = 50;
  const bx = cx + r * Math.cos(state.phaseB);
  const by = cy + r * Math.sin(state.phaseB);
  const mx = cx + r * Math.cos(state.phaseM);
  const my = cy + r * Math.sin(state.phaseM);
  const dphi = ((state.phaseM - state.phaseB) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  return /* @__PURE__ */ React.createElement("div", { className: "phase" }, /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${w} ${h}` }, /* @__PURE__ */ React.createElement("circle", { cx, cy, r, fill: "none", stroke: "#cdc6b6" }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: "2", fill: "#1a1814" }), /* @__PURE__ */ React.createElement("line", { x1: cx, y1: cy, x2: bx, y2: by, stroke: "#1a1814", strokeWidth: "1.6" }), /* @__PURE__ */ React.createElement("line", { x1: cx, y1: cy, x2: mx, y2: my, stroke: "var(--accent)", strokeWidth: "1.6" }), /* @__PURE__ */ React.createElement("circle", { cx: bx, cy: by, r: "4", fill: "#1a1814" }), /* @__PURE__ */ React.createElement("circle", { cx: mx, cy: my, r: "4", fill: "var(--accent)" }), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy + r + 18, textAnchor: "middle", fontFamily: "var(--mono)", fontSize: "9", fill: "#6b6457", letterSpacing: "1" }, "body \xB7 medium"), /* @__PURE__ */ React.createElement("g", { transform: `translate(${h + 50}, 18)` }, /* @__PURE__ */ React.createElement("text", { fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "13", fill: "#1a1814" }, "d\u03C6", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "9" }, "b"), "/dt = \u03C9", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "9" }, "b"), " + K", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "9" }, "bm"), " sin(\u03C6", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "9" }, "m"), " \u2212 \u03C6", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "9" }, "b"), ")"), /* @__PURE__ */ React.createElement("text", { y: "26", fontFamily: "var(--mono)", fontSize: "11", fill: "#1a1814" }, "K", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "8" }, "bm"), " = ", state.K_bm.toFixed(3)), /* @__PURE__ */ React.createElement("text", { y: "44", fontFamily: "var(--mono)", fontSize: "11", fill: "#1a1814" }, "|\u03C9", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "8" }, "b"), "\u2212\u03C9", /* @__PURE__ */ React.createElement("tspan", { baselineShift: "sub", fontSize: "8" }, "m"), "| = ", Math.abs(state.omegaB - state.omegaM).toFixed(4)), /* @__PURE__ */ React.createElement("text", { y: "64", fontFamily: "var(--mono)", fontSize: "11", fill: state.locked ? "var(--accent)" : "var(--good)", fontWeight: "600", letterSpacing: "0.8" }, state.locked ? "\u25A3  PHASE-LOCKED" : "\u25CB  free oscillation"), /* @__PURE__ */ React.createElement("text", { y: "82", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "11", fill: "#6b6457" }, "\u0394\u03C6 = ", dphi.toFixed(2), " rad"))));
}
function InterventionPanel({ knobs, setKnobs, state }) {
  const PrEtau = Math.exp(-state.thetaRef * (1 / Math.max(2, recentISIMean(state))));
  const broken = PrEtau > 0.01;
  return /* @__PURE__ */ React.createElement("div", { className: "intervene" }, /* @__PURE__ */ React.createElement("div", { className: "mode" }, /* @__PURE__ */ React.createElement("div", { className: "mode-head" }, /* @__PURE__ */ React.createElement("span", { className: "badge" }, "A"), /* @__PURE__ */ React.createElement("span", { className: "title" }, "Architectural"), /* @__PURE__ */ React.createElement("span", { className: `breaks ${broken ? "yes" : ""}` }, broken ? "breaks lemma 1" : "lemma 1 holds")), /* @__PURE__ */ React.createElement("div", { className: "mode-desc" }, "Augment ", /* @__PURE__ */ React.createElement("em", null, "R\u0302"), " with a bonus on long ISIs: ", /* @__PURE__ */ React.createElement("em", null, "R\u0302' = R\u0302 + \u03B2\xB7\u2211", /* @__PURE__ */ React.createElement("sub", null, "k"), " b(\u03C4", /* @__PURE__ */ React.createElement("sup", null, "(k)"), ")"), ". The only mode that breaks the foreclosure. Operates on ", /* @__PURE__ */ React.createElement("em", null, "T", /* @__PURE__ */ React.createElement("sub", null, "mix"), "(\u03C0')"), "."), /* @__PURE__ */ React.createElement("div", { className: "slider-row" }, /* @__PURE__ */ React.createElement("div", { className: "k" }, "\u03B2 ", /* @__PURE__ */ React.createElement("span", { className: "micro" }, "regularization")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "1.2",
      step: "0.01",
      value: knobs.beta,
      onChange: (e) => setKnobs({ ...knobs, beta: +e.target.value })
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "v" }, knobs.beta.toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginTop: 6, color: "var(--ink-4)" } }, "Prop. 1: ", /* @__PURE__ */ React.createElement("em", null, "P"), "(\u03B2) continuous in \u03B2, ", /* @__PURE__ */ React.createElement("em", null, "P"), "(0)\u22480, sup ", /* @__PURE__ */ React.createElement("em", null, "P"), "(\u03B2) > 0  \u21D2  IVT recovers any \u03B5\u2208(0,\u03B5", /* @__PURE__ */ React.createElement("sub", null, "max"), ").")), /* @__PURE__ */ React.createElement("div", { className: "mode" }, /* @__PURE__ */ React.createElement("div", { className: "mode-head" }, /* @__PURE__ */ React.createElement("span", { className: "badge" }, "B"), /* @__PURE__ */ React.createElement("span", { className: "title" }, "Artisanal"), /* @__PURE__ */ React.createElement("span", { className: "breaks" }, "lemma 1 unchanged")), /* @__PURE__ */ React.createElement("div", { className: "mode-desc" }, "Maintenance labor ", /* @__PURE__ */ React.createElement("em", null, "L", /* @__PURE__ */ React.createElement("sub", null, "m")), " against the platform's pull. Preserves a positive ", /* @__PURE__ */ React.createElement("em", null, "D", /* @__PURE__ */ React.createElement("sub", null, "KL")), "(", /* @__PURE__ */ React.createElement("em", null, "\u03BD", /* @__PURE__ */ React.createElement("sub", null, "u")), "\u2016\u03C0", /* @__PURE__ */ React.createElement("sub", null, "R\u0302"), ") iff ", /* @__PURE__ */ React.createElement("em", null, "L", /* @__PURE__ */ React.createElement("sub", null, "m")), " \u2265 ", /* @__PURE__ */ React.createElement("em", null, "L", /* @__PURE__ */ React.createElement("sub", null, "m")), "*."), /* @__PURE__ */ React.createElement("div", { className: "slider-row" }, /* @__PURE__ */ React.createElement("div", { className: "k" }, "L", /* @__PURE__ */ React.createElement("sub", null, "m"), " ", /* @__PURE__ */ React.createElement("span", { className: "micro" }, "labor")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: knobs.Lm,
      onChange: (e) => setKnobs({ ...knobs, Lm: +e.target.value })
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "v" }, knobs.Lm.toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginTop: 6, color: "var(--ink-4)" } }, "dD", /* @__PURE__ */ React.createElement("sub", null, "KL"), "/dt = \u2212h", /* @__PURE__ */ React.createElement("sub", null, "0"), "(\u03B2", /* @__PURE__ */ React.createElement("sub", null, "u"), ") + r(L", /* @__PURE__ */ React.createElement("sub", null, "m"), ") \xB7 L", /* @__PURE__ */ React.createElement("sub", null, "m"), "* = r\u207B\xB9(h", /* @__PURE__ */ React.createElement("sub", null, "0"), ") \u2248 ", state.LmStar.toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "mode" }, /* @__PURE__ */ React.createElement("div", { className: "mode-head" }, /* @__PURE__ */ React.createElement("span", { className: "badge" }, "C"), /* @__PURE__ */ React.createElement("span", { className: "title" }, "Disruption-as-form"), /* @__PURE__ */ React.createElement("span", { className: "breaks" }, "bounds \u03A3(T) only")), /* @__PURE__ */ React.createElement("div", { className: "mode-desc" }, "Inflate ", /* @__PURE__ */ React.createElement("em", null, "Var"), "(\u03B7", /* @__PURE__ */ React.createElement("sub", null, "t"), ") by refusing legibility. By Blackwell sufficiency, ", /* @__PURE__ */ React.createElement("em", null, "sup", /* @__PURE__ */ React.createElement("sub", null, "\u03C0"), " E[R\u0302]"), " falls; ", /* @__PURE__ */ React.createElement("em", null, "H", /* @__PURE__ */ React.createElement("sub", null, "res")), " > 0 is held."), /* @__PURE__ */ React.createElement("div", { className: "slider-row" }, /* @__PURE__ */ React.createElement("div", { className: "k" }, "\u03C3", /* @__PURE__ */ React.createElement("sub", null, "\u03B7"), /* @__PURE__ */ React.createElement("sup", null, "+"), " ", /* @__PURE__ */ React.createElement("span", { className: "micro" }, "added noise")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "0.6",
      step: "0.01",
      value: knobs.sigmaC,
      onChange: (e) => setKnobs({ ...knobs, sigmaC: +e.target.value })
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "v" }, knobs.sigmaC.toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginTop: 6, color: "var(--ink-4)" } }, "\u03C3\xB2", /* @__PURE__ */ React.createElement("sub", null, "\u03B7"), " = ", (state.sigmaEta ** 2).toFixed(4), "  \xB7  H", /* @__PURE__ */ React.createElement("sub", null, "res"), "(\u03C3\xB2", /* @__PURE__ */ React.createElement("sub", null, "\u03B7"), ") \u2265 ", (0.32 + knobs.sigmaC * 0.78).toFixed(2))));
}
Object.assign(window, {
  LoopDiagram,
  RegistersPanel,
  MetricsPanel,
  SurplusBreakdown,
  EventRaster,
  HawkesMatrix,
  MutualInfo,
  ChronoSpectrum,
  SurvivalView,
  KuramotoView,
  InterventionPanel,
  recentISIMean
});
