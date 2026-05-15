/*  chain.jsx — Causal implication chain (Lemma 1 → Theorem 1)
 *  Each node is a premise/step from the proof. A node "fires" when
 *  the current state satisfies its condition. The chain runs:
 *
 *  (A2 + A3) ─┐
 *             ├─► θ* attains λ̄ = λ_max ─► S(τ;θ*) ≤ C·e^(-τ/δ_min)
 *  (A1 + A4)─┤                                       │
 *             │                                       ▼
 *  (A5)──────┘                            Pr(E_τ) → 0  for τ > θ_ref
 *                                                 │
 *                                                 ▼
 *                              Var Î(τ) ∝ 1/Pr(E_τ)  diverges
 *                                                 │
 *                                                 ▼
 *                       I(τ) undefined-on-trajectory  ◇  Thm. 1
 *
 *  Each mode (A/B/C) intercepts at a specific node — visualized.
 */

function evalChain(state, knobs) {
  const meanISI = window.recentISIMean(state);
  const PrEtau = Math.exp(-(state.thetaRef) / Math.max(2, meanISI));
  const variance = 1 / Math.max(1e-12, PrEtau);
  const thetaConcentration =
    Math.max(...RKEYS.map(k=>state.theta[k])) - Math.min(...RKEYS.map(k=>state.theta[k]));
  const sumTheta = RKEYS.reduce((a,k)=>a+state.theta[k],0);

  /* truth of each premise */
  const A1 = true;                                    /* always — finite CoV  */
  const A2 = knobs.beta < 0.01;                       /* monotone unless A   */
  const A3 = true;                                    /* policy expressive   */
  const A4 = knobs.Lm < 0.85;                         /* user responds       */
  const A5 = state.t > 60 && thetaConcentration > 0.05; /* SGA converged    */
  const A6 = true;                                    /* generic regularity  */

  const reachedThetaStar = A5 && knobs.beta < 0.01;
  const lambdaSaturated  = reachedThetaStar && meanISI < 6;
  const survivalBoundActive = A1 && lambdaSaturated;
  const PrZero = PrEtau < 0.01;
  const varianceDiverges = variance > 1e3;
  const reclamationForeclosed = PrZero && varianceDiverges;

  return {
    premises: { A1, A2, A3, A4, A5, A6 },
    reachedThetaStar, lambdaSaturated, survivalBoundActive,
    PrZero, varianceDiverges, reclamationForeclosed,
    PrEtau, variance, meanISI,
  };
}

function CausalChain({ state, knobs }) {
  const c = evalChain(state, knobs);
  /* node spec — geometry hand-tuned for a 760×420 SVG canvas */
  const W = 760, H = 460;
  const N = {
    A2: { x: 40,  y: 50,  w: 110, h: 50, label: "(A2)", t: "reward monotone in N_T" },
    A3: { x: 40,  y: 110, w: 110, h: 50, label: "(A3)", t: "π attains λ_max" },
    A5: { x: 40,  y: 170, w: 110, h: 50, label: "(A5)", t: "SGA converges to θ*" },
    A6: { x: 40,  y: 230, w: 110, h: 50, label: "(A6)", t: "θ* isolated, H≺0" },
    A1: { x: 40,  y: 290, w: 110, h: 50, label: "(A1)", t: "renewal CoV bounded" },
    A4: { x: 40,  y: 350, w: 110, h: 50, label: "(A4)", t: "user responds (p₀>0)" },

    star: { x: 200, y: 140, w: 160, h: 80,
      label: "θ* is a local max",
      t: "λ̄(θ*) = λ_max = 1/δ_min" },
    bound: { x: 400, y: 60, w: 200, h: 80,
      label: "Asmussen renewal bound",
      t: "S(τ;θ*) ≤ C(c_v)·e^{−τ/δ_min}" },
    prZero: { x: 400, y: 180, w: 200, h: 80,
      label: "Lemma 1",
      t: "Pr(E_τ) → 0  for τ > θ_ref" },
    varDiv: { x: 400, y: 300, w: 200, h: 80,
      label: "Step 2 (Thm 1)",
      t: "Var Î(τ) ∝ 1/(N·Pr(E_τ))" },
    fore: { x: 578, y: 240, w: 180, h: 100,
      label: "Theorem 1",
      t: "I(τ) undefined-on-trajectory" },
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
    { from: "prZero", to: "fore", lit: c.PrZero },
  ];

  /* mode interception annotations */
  const interceptA = { x: 280, y: 110, label: "Mode A breaks here", on: knobs.beta > 0.05 };
  const interceptB = { x: 200, y: 410, label: "Mode B preserves D_KL elsewhere (does NOT break this chain)", on: knobs.Lm > 0.1 };
  const interceptC = { x: 510, y: 410, label: "Mode C bounds Σ(T) (does NOT break this chain)", on: knobs.sigmaC > 0.05 };

  return (
    <div className="chain">
      <div className="card-sub">
        The proof of Theorem 1 against the live state. A node fires when its premise currently holds; an edge fires when its tail does. <strong>Mode A</strong> is the only intervention whose effect reaches the foreclosure node — Modes B and C operate on parallel structures the chain does not depend on.
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="chainSvg">
        <defs>
          <marker id="arr-lit" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#1a1814"/>
          </marker>
          <marker id="arr-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#b9b1a0"/>
          </marker>
          <marker id="arr-cut" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.46 0.12 35)"/>
          </marker>
        </defs>

        {/* edges */}
        {E.map((e, idx) => {
          const a = N[e.from], b = N[e.to];
          const ax = a.x + a.w, ay = a.y + a.h/2;
          const bx = b.x,        by = b.y + b.h/2;
          const mx = (ax+bx)/2, my = (ay+by)/2;
          const stroke = e.lit ? "#1a1814" : "#b9b1a0";
          const marker = e.lit ? "url(#arr-lit)" : "url(#arr-dim)";
          return (
            <path key={idx}
              d={`M ${ax} ${ay} Q ${mx} ${ay} ${mx} ${my} T ${bx} ${by}`}
              fill="none" stroke={stroke} strokeWidth={e.lit?1.4:0.8}
              markerEnd={marker}
              opacity={e.lit?0.95:0.4}/>
          );
        })}

        {/* Mode A cut — slashes the (A2→star) edge */}
        {interceptA.on && (
          <g>
            <line x1="170" y1="80" x2="200" y2="110" stroke="oklch(0.46 0.12 35)" strokeWidth="2.2"/>
            <line x1="170" y1="110" x2="200" y2="80" stroke="oklch(0.46 0.12 35)" strokeWidth="2.2"/>
            <text x="155" y="74" fontFamily="var(--mono)" fontSize="9" fill="oklch(0.46 0.12 35)" letterSpacing="0.8">MODE A</text>
            <text x="155" y="64" fontFamily="var(--mono)" fontSize="9" fill="oklch(0.46 0.12 35)" letterSpacing="0.8">βR̂'</text>
          </g>
        )}

        {/* nodes */}
        {Object.entries(N).map(([id, n]) => {
          let lit = false;
          if (id.length === 2 && id.startsWith("A")) lit = c.premises[id];
          else if (id === "star") lit = c.reachedThetaStar;
          else if (id === "bound") lit = c.survivalBoundActive;
          else if (id === "prZero") lit = c.PrZero;
          else if (id === "varDiv") lit = c.varianceDiverges;
          else if (id === "fore") lit = c.reclamationForeclosed;

          const isTerminal = id === "fore";
          return (
            <g key={id}>
              <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="2"
                fill={lit ? (isTerminal ? "#1a1814" : "#f3efe7") : "#ece7dc"}
                stroke={lit ? (isTerminal ? "oklch(0.46 0.12 35)" : "#1a1814") : "#b9b1a0"}
                strokeWidth={lit?1.4:0.8}/>
              <text x={n.x+10} y={n.y+16}
                fontFamily="var(--mono)" fontSize="9.5"
                letterSpacing="1.2"
                fill={lit ? (isTerminal ? "oklch(0.62 0.10 35)" : "#1a1814") : "#948c7d"}>
                {n.label}
              </text>
              <text x={n.x + n.w/2} y={n.y + (n.h>60?44:34)}
                textAnchor="middle"
                fontFamily="var(--serif)" fontStyle="italic" fontSize={n.h>60?13:12}
                fill={lit ? (isTerminal ? "#f3efe7" : "#1a1814") : "#6b6457"}>
                {n.t}
              </text>
              {isTerminal && lit && (
                <text x={n.x + n.w/2} y={n.y + 70}
                  textAnchor="middle" fontFamily="var(--mono)" fontSize="9"
                  fill="oklch(0.62 0.10 35)" letterSpacing="1.2">RECLAMATION ⌀</text>
              )}
            </g>
          );
        })}

        {/* labels at the top right showing live numbers */}
        <g transform={`translate(180, 18)`}>
          <text fontFamily="var(--mono)" fontSize="9.5" fill="#6b6457" letterSpacing="1">LIVE READOUT</text>
          <text y="16" fontFamily="var(--mono)" fontSize="10.5" fill="#1a1814">mean τ⁽ᵏ⁾ = {c.meanISI.toFixed(2)}</text>
          <text y="30" fontFamily="var(--mono)" fontSize="10.5" fill="#1a1814">Pr(E_θref) = {c.PrEtau < 1e-3 ? c.PrEtau.toExponential(2) : c.PrEtau.toFixed(4)}</text>
          <text y="44" fontFamily="var(--mono)" fontSize="10.5" fill="#1a1814">Var Î(τ) ≈ {c.variance > 1e4 ? c.variance.toExponential(2) : c.variance.toFixed(0)}</text>
        </g>

        {/* Mode B / Mode C footers */}
        <g>
          <line x1="40" y1="430" x2="360" y2="430" stroke="#cdc6b6" strokeDasharray="2 3"/>
          <text x="40" y="445" fontFamily="var(--mono)" fontSize="9.5"
            fill={knobs.Lm>0.05?"#3b362d":"#b9b1a0"} letterSpacing="1">
            MODE B · holds D_KL(ν_u‖π_R̂) > 0
          </text>
          <text x="40" y="456" fontFamily="var(--serif)" fontStyle="italic" fontSize="11" fill="#6b6457">
            parallel structure — chain unbroken
          </text>
        </g>
        <g>
          <line x1="420" y1="430" x2="740" y2="430" stroke="#cdc6b6" strokeDasharray="2 3"/>
          <text x="420" y="445" fontFamily="var(--mono)" fontSize="9.5"
            fill={knobs.sigmaC>0.05?"#3b362d":"#b9b1a0"} letterSpacing="1">
            MODE C · bounds Σ(T) via I(u_t; y_t)
          </text>
          <text x="420" y="456" fontFamily="var(--serif)" fontStyle="italic" fontSize="11" fill="#6b6457">
            chain still concentrates τ near δ_min
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ════════ Reflection panel — surfaces dynamic commentary ════════ *
 * Reads current state + chain evaluation, picks the most pertinent
 * passage(s). Writes the implications of the current configuration,
 * threading the relations the user is steering.
 */
function ReflectionPanel({ state, knobs }) {
  const c = evalChain(state, knobs);
  const items = [];

  /* threshold-aware commentary */
  if (c.reclamationForeclosed && knobs.beta < 0.05) {
    items.push({
      tag: "FORECLOSURE",
      tone: "alarm",
      head: "The conditioning event has measure tending to zero.",
      body: <>
        Pr(<em>E<sub>τ</sub></em>) is at {fmtSmall(c.PrEtau)} for <em>τ</em>=θ<sub>ref</sub>. Any sample-based estimator <em>Î</em>(<em>τ</em>) at this horizon has variance ∝ 1/Pr(<em>E<sub>τ</sub></em>) ≈ {c.variance.toExponential(1)}. This is what the theorem means by <em>undefined-on-trajectory</em> — not zero, not hard, <em>uninstantiated</em>.
      </>
    });
  }
  if (knobs.beta > 0.05 && c.PrEtau > 0.01) {
    items.push({
      tag: "MODE A",
      tone: "good",
      head: "Lemma 1 has been falsified by example.",
      body: <>
        The bonus β = {knobs.beta.toFixed(2)} produced Pr(<em>E</em><sub>θref</sub>) = {fmtSmall(c.PrEtau)} {">"} 0. Inside this loop, <em>I</em>(<em>τ</em>) at <em>τ</em> &gt; θ<sub>ref</sub> now lives on a positive-measure set. (Prop. 1 with ε = {fmtSmall(c.PrEtau)}.) The intervention itself was instantaneous; the cohort would converge to <em>μ<sub>π'</sub></em> on the order of <em>T<sub>mix</sub>(π')</em>.
      </>
    });
  }
  if (knobs.Lm > 0.15 && knobs.Lm < state.LmStar) {
    items.push({
      tag: "L_m < L_m*",
      tone: "warn",
      head: "Maintenance below threshold — D_KL drifts toward zero.",
      body: <>
        With L<sub>m</sub> = {knobs.Lm.toFixed(2)} {"<"} L<sub>m</sub>* ≈ {state.LmStar.toFixed(2)}, <em>r</em>(<em>L<sub>m</sub></em>) &lt; <em>h<sub>0</sub></em>(<em>β<sub>u</sub></em>): the platform's pull dominates the user's resistance. <em>ν<sub>u</sub></em> is contracting onto π<sub>R̂</sub>. Mode B is not failing here — its threshold is not being met.
      </>
    });
  }
  if (knobs.Lm >= state.LmStar && knobs.Lm > 0.1) {
    items.push({
      tag: "MODE B",
      tone: "good",
      head: "A positive gap is being held.",
      body: <>
        L<sub>m</sub> = {knobs.Lm.toFixed(2)} ≥ L<sub>m</sub>*. The user's self-evaluative distribution is being kept off the platform's reward distribution at the cost of bounded metabolic budget. <em>Note</em>: Lemma 1 is unchanged. The policy still tracks <em>R̂</em>, and may intensify in response to the user's reduced engagement — the foreclosure of <em>τ</em> &gt; θ<sub>ref</sub> can <em>strengthen</em> while this gap is held.
      </>
    });
  }
  if (knobs.sigmaC > 0.1) {
    items.push({
      tag: "MODE C",
      tone: "good",
      head: "The observation channel is being garbled.",
      body: <>
        σ²<sub>η</sub> = {(state.sigmaEta**2).toFixed(4)}. By Blackwell sufficiency, the supremum of <em>E</em>[<em>R̂</em>] under the noisier channel is bounded below the supremum at baseline. The platform still gradient-ascends, but on a less informative target. <em>H</em>(<em>b<sub>t</sub></em>) is held at {state.Hbelief.toFixed(2)} ≥ {(0.32 + knobs.sigmaC*0.78).toFixed(2)} = H<sub>res</sub>(σ²<sub>η</sub>). Σ(T) accumulates more slowly; the chain is intact.
      </>
    });
  }
  if (state.locked) {
    items.push({
      tag: "CAPTURED RESONANCE",
      tone: "alarm",
      head: "K_bm > |ω_b − ω_m| — phase locking achieved.",
      body: <>
        The body has entrained to the medium. φ<sub>b</sub> is no longer a free oscillator; it is a forced oscillator whose driver is the policy through φ<sub>m</sub>. This is Kuramoto entrainment in the strict sense — the same dynamic as circadian zeitgebers, here with the apparatus as zeitgeber.
      </>
    });
  }
  if (state.Hbelief < 0.45 && knobs.sigmaC < 0.05) {
    items.push({
      tag: "DIVIDUAL CONDITION",
      tone: "alarm",
      head: "H(u | y_{1:t}) is collapsing onto a point.",
      body: <>
        The platform's posterior over the user's full state has entropy {state.Hbelief.toFixed(3)}. The four registers — Subject, Citizen, Person, Consumer — are statistically redundant under the stationary distribution induced by π. The dividual condition does not say the individual is divided. It says the four registers have <em>collapsed</em> into a single jointly observable object.
      </>
    });
  }
  if (knobs.beta > 0.05 && knobs.Lm > 0.05) {
    items.push({
      tag: "TIMESCALE MISALIGNMENT",
      tone: "warn",
      head: "Don't substitute B for A.",
      body: <>
        Two interventions running at once on incommensurable timescales. Mode A operates on <em>T<sub>mix</sub></em> (months–years); Mode B on <em>L<sub>m</sub></em> cycles (daily). There is no exchange ratio between them — the framework's §5.4 claim. Evaluations of architectural intervention conducted at clock-time {"<<"} <em>T<sub>mix</sub>(π')</em> will systematically underestimate.
      </>
    });
  }
  if (items.length === 0) {
    items.push({
      tag: "STATIONARY",
      tone: "neutral",
      head: "Nothing has been touched.",
      body: <>The loop is running on its default policy with no intervention. Watch Pr(<em>E<sub>τ</sub></em>) and <em>H</em>(<em>b<sub>t</sub></em>) decay. Open Question 8.1 (mixing-time direction under Mode C) is the most consequential of the remaining open questions, since it determines whether disruption-as-form slows capture or only modifies its endpoint.</>
    });
  }

  return (
    <div className="reflections">
      {items.map((it, i) => (
        <div className={`reflect ${it.tone}`} key={i}>
          <div className="reflect-tag">{it.tag}</div>
          <div className="reflect-head">{it.head}</div>
          <div className="reflect-body">{it.body}</div>
        </div>
      ))}
    </div>
  );
}
function fmtSmall(x) {
  if (x === 0) return "0";
  if (x < 1e-3) return x.toExponential(2);
  return x.toFixed(4);
}

/* expose */
Object.assign(window, { CausalChain, ReflectionPanel, evalChain });
