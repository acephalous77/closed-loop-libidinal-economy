function evalChain(state, knobs) {
  const meanISI = window.recentISIMean(state);
  const PrEtau = Math.exp(-state.thetaRef / Math.max(2, meanISI));
  const variance = 1 / Math.max(1e-12, PrEtau);
  const thetaConcentration = Math.max(...RKEYS.map((k) => state.theta[k])) - Math.min(...RKEYS.map((k) => state.theta[k]));
  const sumTheta = RKEYS.reduce((a, k) => a + state.theta[k], 0);
  const A1 = true;
  const A2 = knobs.beta < 0.01;
  const A3 = true;
  const A4 = knobs.Lm < 0.85;
  const A5 = state.t > 60 && thetaConcentration > 0.05;
  const A6 = true;
  const reachedThetaStar = A5 && knobs.beta < 0.01;
  const lambdaSaturated = reachedThetaStar && meanISI < 6;
  const survivalBoundActive = A1 && lambdaSaturated;
  const PrZero = PrEtau < 0.01;
  const varianceDiverges = variance > 1e3;
  const reclamationForeclosed = PrZero && varianceDiverges;
  return {
    premises: { A1, A2, A3, A4, A5, A6 },
    reachedThetaStar,
    lambdaSaturated,
    survivalBoundActive,
    PrZero,
    varianceDiverges,
    reclamationForeclosed,
    PrEtau,
    variance,
    meanISI
  };
}
function CausalChain({ state, knobs }) {
  const c = evalChain(state, knobs);
  const W = 760, H = 460;
  const N = {
    A2: { x: 40, y: 50, w: 110, h: 50, label: "(A2)", t: "reward monotone in N_T" },
    A3: { x: 40, y: 110, w: 110, h: 50, label: "(A3)", t: "\u03C0 attains \u03BB_max" },
    A5: { x: 40, y: 170, w: 110, h: 50, label: "(A5)", t: "SGA converges to \u03B8*" },
    A6: { x: 40, y: 230, w: 110, h: 50, label: "(A6)", t: "\u03B8* isolated, H\u227A0" },
    A1: { x: 40, y: 290, w: 110, h: 50, label: "(A1)", t: "renewal CoV bounded" },
    A4: { x: 40, y: 350, w: 110, h: 50, label: "(A4)", t: "user responds (p\u2080>0)" },
    star: {
      x: 200,
      y: 140,
      w: 160,
      h: 80,
      label: "\u03B8* is a local max",
      t: "\u03BB\u0304(\u03B8*) = \u03BB_max = 1/\u03B4_min"
    },
    bound: {
      x: 400,
      y: 60,
      w: 200,
      h: 80,
      label: "Asmussen renewal bound",
      t: "S(\u03C4;\u03B8*) \u2264 C(c_v)\xB7e^{\u2212\u03C4/\u03B4_min}"
    },
    prZero: {
      x: 400,
      y: 180,
      w: 200,
      h: 80,
      label: "Lemma 1",
      t: "Pr(E_\u03C4) \u2192 0  for \u03C4 > \u03B8_ref"
    },
    varDiv: {
      x: 400,
      y: 300,
      w: 200,
      h: 80,
      label: "Step 2 (Thm 1)",
      t: "Var \xCE(\u03C4) \u221D 1/(N\xB7Pr(E_\u03C4))"
    },
    fore: {
      x: 578,
      y: 240,
      w: 180,
      h: 100,
      label: "Theorem 1",
      t: "I(\u03C4) undefined-on-trajectory"
    }
  };
  const E = [
    /* assumptions feeding θ* */
    { from: "A2", to: "star", lit: c.premises.A2 },
    { from: "A3", to: "star", lit: c.premises.A3 },
    { from: "A5", to: "star", lit: c.premises.A5 },
    { from: "A6", to: "star", lit: c.premises.A6 },
    /* θ* → bound */
    { from: "star", to: "bound", lit: c.reachedThetaStar },
    /* A1 feeds bound */
    { from: "A1", to: "bound", lit: c.premises.A1 },
    /* A4 keeps the engagement process alive — feeds prZero */
    { from: "A4", to: "prZero", lit: c.premises.A4 },
    /* bound → prZero */
    { from: "bound", to: "prZero", lit: c.survivalBoundActive },
    /* prZero → varDiv → fore */
    { from: "prZero", to: "varDiv", lit: c.PrZero },
    { from: "varDiv", to: "fore", lit: c.varianceDiverges },
    { from: "prZero", to: "fore", lit: c.PrZero }
  ];
  const interceptA = { x: 280, y: 110, label: "Mode A breaks here", on: knobs.beta > 0.05 };
  const interceptB = { x: 200, y: 410, label: "Mode B preserves D_KL elsewhere (does NOT break this chain)", on: knobs.Lm > 0.1 };
  const interceptC = { x: 510, y: 410, label: "Mode C bounds \u03A3(T) (does NOT break this chain)", on: knobs.sigmaC > 0.05 };
  return /* @__PURE__ */ React.createElement("div", { className: "chain" }, /* @__PURE__ */ React.createElement("div", { className: "card-sub" }, "The proof of Theorem 1 against the live state. A node fires when its premise currently holds; an edge fires when its tail does. ", /* @__PURE__ */ React.createElement("strong", null, "Mode A"), " is the only intervention whose effect reaches the foreclosure node \u2014 Modes B and C operate on parallel structures the chain does not depend on."), /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${W} ${H}`, className: "chainSvg" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("marker", { id: "arr-lit", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, /* @__PURE__ */ React.createElement("path", { d: "M0,0 L10,5 L0,10 z", fill: "#1a1814" })), /* @__PURE__ */ React.createElement("marker", { id: "arr-dim", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, /* @__PURE__ */ React.createElement("path", { d: "M0,0 L10,5 L0,10 z", fill: "#b9b1a0" })), /* @__PURE__ */ React.createElement("marker", { id: "arr-cut", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "8", markerHeight: "8", orient: "auto-start-reverse" }, /* @__PURE__ */ React.createElement("path", { d: "M0,0 L10,5 L0,10 z", fill: "oklch(0.46 0.12 35)" }))), E.map((e, idx) => {
    const a = N[e.from], b = N[e.to];
    const ax = a.x + a.w, ay = a.y + a.h / 2;
    const bx = b.x, by = b.y + b.h / 2;
    const mx = (ax + bx) / 2, my = (ay + by) / 2;
    const stroke = e.lit ? "#1a1814" : "#b9b1a0";
    const marker = e.lit ? "url(#arr-lit)" : "url(#arr-dim)";
    return /* @__PURE__ */ React.createElement(
      "path",
      {
        key: idx,
        d: `M ${ax} ${ay} Q ${mx} ${ay} ${mx} ${my} T ${bx} ${by}`,
        fill: "none",
        stroke,
        strokeWidth: e.lit ? 1.4 : 0.8,
        markerEnd: marker,
        opacity: e.lit ? 0.95 : 0.4
      }
    );
  }), interceptA.on && /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: "170", y1: "80", x2: "200", y2: "110", stroke: "oklch(0.46 0.12 35)", strokeWidth: "2.2" }), /* @__PURE__ */ React.createElement("line", { x1: "170", y1: "110", x2: "200", y2: "80", stroke: "oklch(0.46 0.12 35)", strokeWidth: "2.2" }), /* @__PURE__ */ React.createElement("text", { x: "155", y: "74", fontFamily: "var(--mono)", fontSize: "9", fill: "oklch(0.46 0.12 35)", letterSpacing: "0.8" }, "MODE A"), /* @__PURE__ */ React.createElement("text", { x: "155", y: "64", fontFamily: "var(--mono)", fontSize: "9", fill: "oklch(0.46 0.12 35)", letterSpacing: "0.8" }, "\u03B2R\u0302'")), Object.entries(N).map(([id, n]) => {
    let lit = false;
    if (id.length === 2 && id.startsWith("A")) lit = c.premises[id];
    else if (id === "star") lit = c.reachedThetaStar;
    else if (id === "bound") lit = c.survivalBoundActive;
    else if (id === "prZero") lit = c.PrZero;
    else if (id === "varDiv") lit = c.varianceDiverges;
    else if (id === "fore") lit = c.reclamationForeclosed;
    const isTerminal = id === "fore";
    return /* @__PURE__ */ React.createElement("g", { key: id }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: n.x,
        y: n.y,
        width: n.w,
        height: n.h,
        rx: "2",
        fill: lit ? isTerminal ? "#1a1814" : "#f3efe7" : "#ece7dc",
        stroke: lit ? isTerminal ? "oklch(0.46 0.12 35)" : "#1a1814" : "#b9b1a0",
        strokeWidth: lit ? 1.4 : 0.8
      }
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: n.x + 10,
        y: n.y + 16,
        fontFamily: "var(--mono)",
        fontSize: "9.5",
        letterSpacing: "1.2",
        fill: lit ? isTerminal ? "oklch(0.62 0.10 35)" : "#1a1814" : "#948c7d"
      },
      n.label
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: n.x + n.w / 2,
        y: n.y + (n.h > 60 ? 44 : 34),
        textAnchor: "middle",
        fontFamily: "var(--serif)",
        fontStyle: "italic",
        fontSize: n.h > 60 ? 13 : 12,
        fill: lit ? isTerminal ? "#f3efe7" : "#1a1814" : "#6b6457"
      },
      n.t
    ), isTerminal && lit && /* @__PURE__ */ React.createElement(
      "text",
      {
        x: n.x + n.w / 2,
        y: n.y + 70,
        textAnchor: "middle",
        fontFamily: "var(--mono)",
        fontSize: "9",
        fill: "oklch(0.62 0.10 35)",
        letterSpacing: "1.2"
      },
      "RECLAMATION \u2300"
    ));
  }), /* @__PURE__ */ React.createElement("g", { transform: `translate(180, 18)` }, /* @__PURE__ */ React.createElement("text", { fontFamily: "var(--mono)", fontSize: "9.5", fill: "#6b6457", letterSpacing: "1" }, "LIVE READOUT"), /* @__PURE__ */ React.createElement("text", { y: "16", fontFamily: "var(--mono)", fontSize: "10.5", fill: "#1a1814" }, "mean \u03C4\u207D\u1D4F\u207E = ", c.meanISI.toFixed(2)), /* @__PURE__ */ React.createElement("text", { y: "30", fontFamily: "var(--mono)", fontSize: "10.5", fill: "#1a1814" }, "Pr(E_\u03B8ref) = ", c.PrEtau < 1e-3 ? c.PrEtau.toExponential(2) : c.PrEtau.toFixed(4)), /* @__PURE__ */ React.createElement("text", { y: "44", fontFamily: "var(--mono)", fontSize: "10.5", fill: "#1a1814" }, "Var \xCE(\u03C4) \u2248 ", c.variance > 1e4 ? c.variance.toExponential(2) : c.variance.toFixed(0))), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: "40", y1: "430", x2: "360", y2: "430", stroke: "#cdc6b6", strokeDasharray: "2 3" }), /* @__PURE__ */ React.createElement(
    "text",
    {
      x: "40",
      y: "445",
      fontFamily: "var(--mono)",
      fontSize: "9.5",
      fill: knobs.Lm > 0.05 ? "#3b362d" : "#b9b1a0",
      letterSpacing: "1"
    },
    "MODE B \xB7 holds D_KL(\u03BD_u\u2016\u03C0_R\u0302) > 0"
  ), /* @__PURE__ */ React.createElement("text", { x: "40", y: "456", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "11", fill: "#6b6457" }, "parallel structure \u2014 chain unbroken")), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: "420", y1: "430", x2: "740", y2: "430", stroke: "#cdc6b6", strokeDasharray: "2 3" }), /* @__PURE__ */ React.createElement(
    "text",
    {
      x: "420",
      y: "445",
      fontFamily: "var(--mono)",
      fontSize: "9.5",
      fill: knobs.sigmaC > 0.05 ? "#3b362d" : "#b9b1a0",
      letterSpacing: "1"
    },
    "MODE C \xB7 bounds \u03A3(T) via I(u_t; y_t)"
  ), /* @__PURE__ */ React.createElement("text", { x: "420", y: "456", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "11", fill: "#6b6457" }, "chain still concentrates \u03C4 near \u03B4_min"))));
}
function ReflectionPanel({ state, knobs }) {
  const c = evalChain(state, knobs);
  const items = [];
  if (c.reclamationForeclosed && knobs.beta < 0.05) {
    items.push({
      tag: "FORECLOSURE",
      tone: "alarm",
      head: "The conditioning event has measure tending to zero.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "Pr(", /* @__PURE__ */ React.createElement("em", null, "E", /* @__PURE__ */ React.createElement("sub", null, "\u03C4")), ") is at ", fmtSmall(c.PrEtau), " for ", /* @__PURE__ */ React.createElement("em", null, "\u03C4"), "=\u03B8", /* @__PURE__ */ React.createElement("sub", null, "ref"), ". Any sample-based estimator ", /* @__PURE__ */ React.createElement("em", null, "\xCE"), "(", /* @__PURE__ */ React.createElement("em", null, "\u03C4"), ") at this horizon has variance \u221D 1/Pr(", /* @__PURE__ */ React.createElement("em", null, "E", /* @__PURE__ */ React.createElement("sub", null, "\u03C4")), ") \u2248 ", c.variance.toExponential(1), ". This is what the theorem means by ", /* @__PURE__ */ React.createElement("em", null, "undefined-on-trajectory"), " \u2014 not zero, not hard, ", /* @__PURE__ */ React.createElement("em", null, "uninstantiated"), ".")
    });
  }
  if (knobs.beta > 0.05 && c.PrEtau > 0.01) {
    items.push({
      tag: "MODE A",
      tone: "good",
      head: "Lemma 1 has been falsified by example.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "The bonus \u03B2 = ", knobs.beta.toFixed(2), " produced Pr(", /* @__PURE__ */ React.createElement("em", null, "E"), /* @__PURE__ */ React.createElement("sub", null, "\u03B8ref"), ") = ", fmtSmall(c.PrEtau), " ", ">", " 0. Inside this loop, ", /* @__PURE__ */ React.createElement("em", null, "I"), "(", /* @__PURE__ */ React.createElement("em", null, "\u03C4"), ") at ", /* @__PURE__ */ React.createElement("em", null, "\u03C4"), " > \u03B8", /* @__PURE__ */ React.createElement("sub", null, "ref"), " now lives on a positive-measure set. (Prop. 1 with \u03B5 = ", fmtSmall(c.PrEtau), ".) The intervention itself was instantaneous; the cohort would converge to ", /* @__PURE__ */ React.createElement("em", null, "\u03BC", /* @__PURE__ */ React.createElement("sub", null, "\u03C0'")), " on the order of ", /* @__PURE__ */ React.createElement("em", null, "T", /* @__PURE__ */ React.createElement("sub", null, "mix"), "(\u03C0')"), ".")
    });
  }
  if (knobs.Lm > 0.15 && knobs.Lm < state.LmStar) {
    items.push({
      tag: "L_m < L_m*",
      tone: "warn",
      head: "Maintenance below threshold \u2014 D_KL drifts toward zero.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "With L", /* @__PURE__ */ React.createElement("sub", null, "m"), " = ", knobs.Lm.toFixed(2), " ", "<", " L", /* @__PURE__ */ React.createElement("sub", null, "m"), "* \u2248 ", state.LmStar.toFixed(2), ", ", /* @__PURE__ */ React.createElement("em", null, "r"), "(", /* @__PURE__ */ React.createElement("em", null, "L", /* @__PURE__ */ React.createElement("sub", null, "m")), ") < ", /* @__PURE__ */ React.createElement("em", null, "h", /* @__PURE__ */ React.createElement("sub", null, "0")), "(", /* @__PURE__ */ React.createElement("em", null, "\u03B2", /* @__PURE__ */ React.createElement("sub", null, "u")), "): the platform's pull dominates the user's resistance. ", /* @__PURE__ */ React.createElement("em", null, "\u03BD", /* @__PURE__ */ React.createElement("sub", null, "u")), " is contracting onto \u03C0", /* @__PURE__ */ React.createElement("sub", null, "R\u0302"), ". Mode B is not failing here \u2014 its threshold is not being met.")
    });
  }
  if (knobs.Lm >= state.LmStar && knobs.Lm > 0.1) {
    items.push({
      tag: "MODE B",
      tone: "good",
      head: "A positive gap is being held.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "L", /* @__PURE__ */ React.createElement("sub", null, "m"), " = ", knobs.Lm.toFixed(2), " \u2265 L", /* @__PURE__ */ React.createElement("sub", null, "m"), "*. The user's self-evaluative distribution is being kept off the platform's reward distribution at the cost of bounded metabolic budget. ", /* @__PURE__ */ React.createElement("em", null, "Note"), ": Lemma 1 is unchanged. The policy still tracks ", /* @__PURE__ */ React.createElement("em", null, "R\u0302"), ", and may intensify in response to the user's reduced engagement \u2014 the foreclosure of ", /* @__PURE__ */ React.createElement("em", null, "\u03C4"), " > \u03B8", /* @__PURE__ */ React.createElement("sub", null, "ref"), " can ", /* @__PURE__ */ React.createElement("em", null, "strengthen"), " while this gap is held.")
    });
  }
  if (knobs.sigmaC > 0.1) {
    items.push({
      tag: "MODE C",
      tone: "good",
      head: "The observation channel is being garbled.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u03C3\xB2", /* @__PURE__ */ React.createElement("sub", null, "\u03B7"), " = ", (state.sigmaEta ** 2).toFixed(4), ". By Blackwell sufficiency, the supremum of ", /* @__PURE__ */ React.createElement("em", null, "E"), "[", /* @__PURE__ */ React.createElement("em", null, "R\u0302"), "] under the noisier channel is bounded below the supremum at baseline. The platform still gradient-ascends, but on a less informative target. ", /* @__PURE__ */ React.createElement("em", null, "H"), "(", /* @__PURE__ */ React.createElement("em", null, "b", /* @__PURE__ */ React.createElement("sub", null, "t")), ") is held at ", state.Hbelief.toFixed(2), " \u2265 ", (0.32 + knobs.sigmaC * 0.78).toFixed(2), " = H", /* @__PURE__ */ React.createElement("sub", null, "res"), "(\u03C3\xB2", /* @__PURE__ */ React.createElement("sub", null, "\u03B7"), "). \u03A3(T) accumulates more slowly; the chain is intact.")
    });
  }
  if (state.locked) {
    items.push({
      tag: "CAPTURED RESONANCE",
      tone: "alarm",
      head: "K_bm > |\u03C9_b \u2212 \u03C9_m| \u2014 phase locking achieved.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "The body has entrained to the medium. \u03C6", /* @__PURE__ */ React.createElement("sub", null, "b"), " is no longer a free oscillator; it is a forced oscillator whose driver is the policy through \u03C6", /* @__PURE__ */ React.createElement("sub", null, "m"), ". This is Kuramoto entrainment in the strict sense \u2014 the same dynamic as circadian zeitgebers, here with the apparatus as zeitgeber.")
    });
  }
  if (state.Hbelief < 0.45 && knobs.sigmaC < 0.05) {
    items.push({
      tag: "DIVIDUAL CONDITION",
      tone: "alarm",
      head: "H(u | y_{1:t}) is collapsing onto a point.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "The platform's posterior over the user's full state has entropy ", state.Hbelief.toFixed(3), ". The four registers \u2014 Subject, Citizen, Person, Consumer \u2014 are statistically redundant under the stationary distribution induced by \u03C0. The dividual condition does not say the individual is divided. It says the four registers have ", /* @__PURE__ */ React.createElement("em", null, "collapsed"), " into a single jointly observable object.")
    });
  }
  if (knobs.beta > 0.05 && knobs.Lm > 0.05) {
    items.push({
      tag: "TIMESCALE MISALIGNMENT",
      tone: "warn",
      head: "Don't substitute B for A.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "Two interventions running at once on incommensurable timescales. Mode A operates on ", /* @__PURE__ */ React.createElement("em", null, "T", /* @__PURE__ */ React.createElement("sub", null, "mix")), " (months\u2013years); Mode B on ", /* @__PURE__ */ React.createElement("em", null, "L", /* @__PURE__ */ React.createElement("sub", null, "m")), " cycles (daily). There is no exchange ratio between them \u2014 the framework's \xA75.4 claim. Evaluations of architectural intervention conducted at clock-time ", "<<", " ", /* @__PURE__ */ React.createElement("em", null, "T", /* @__PURE__ */ React.createElement("sub", null, "mix"), "(\u03C0')"), " will systematically underestimate.")
    });
  }
  if (items.length === 0) {
    items.push({
      tag: "STATIONARY",
      tone: "neutral",
      head: "Nothing has been touched.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, "The loop is running on its default policy with no intervention. Watch Pr(", /* @__PURE__ */ React.createElement("em", null, "E", /* @__PURE__ */ React.createElement("sub", null, "\u03C4")), ") and ", /* @__PURE__ */ React.createElement("em", null, "H"), "(", /* @__PURE__ */ React.createElement("em", null, "b", /* @__PURE__ */ React.createElement("sub", null, "t")), ") decay. Open Question 8.1 (mixing-time direction under Mode C) is the most consequential of the remaining open questions, since it determines whether disruption-as-form slows capture or only modifies its endpoint.")
    });
  }
  return /* @__PURE__ */ React.createElement("div", { className: "reflections" }, items.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: `reflect ${it.tone}`, key: i }, /* @__PURE__ */ React.createElement("div", { className: "reflect-tag" }, it.tag), /* @__PURE__ */ React.createElement("div", { className: "reflect-head" }, it.head), /* @__PURE__ */ React.createElement("div", { className: "reflect-body" }, it.body))));
}
function fmtSmall(x) {
  if (x === 0) return "0";
  if (x < 1e-3) return x.toExponential(2);
  return x.toFixed(4);
}
Object.assign(window, { CausalChain, ReflectionPanel, evalChain });
