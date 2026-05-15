/*  panels.jsx — live visualizations & metric/intervention surfaces
 *  Components made global at the bottom for cross-script availability.
 */

const { useMemo, useEffect, useRef, useState } = React;

/* ════════ LoopDiagram — equations (1)–(6) as a wired graph ════════ */
function LoopDiagram({ state, knobs }) {
  const w = 560, h = 360;
  const cx = w/2, cy = h/2;
  const r = 132;
  const nodes = [
    { id: "u", x: cx,        y: cy - r,     label: "u_t",      sub: "user state" },
    { id: "y", x: cx + r,    y: cy,         label: "y_t",      sub: "engagement" },
    { id: "π", x: cx,        y: cy + r,     label: "π(y₁ₜ;θₜ)", sub: "policy" },
    { id: "s", x: cx - r,    y: cy,         label: "s_t",       sub: "stimulus" },
  ];
  const edges = [
    { from: "u", to: "y", eq: "(2) y = g(u)+η", lit: true },
    { from: "y", to: "π", eq: "(4) θ ← θ+α∇R̂", lit: true },
    { from: "π", to: "s", eq: "(3) s = π(y₁ₜ)",  lit: state.t > 0 },
    { from: "s", to: "u", eq: "(1) u' = f(u,s)+ξ", lit: true },
  ];

  /* pulse animation: pick the edge currently active */
  const tickPhase = (state.t % 4);
  const activeEdge = edges[tickPhase];

  return (
    <div className="loop">
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#1a1814" />
          </marker>
        </defs>
        {/* closed contour */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#cdc6b6" strokeDasharray="2 4" />
        {/* foreclosure marker — (6) e_t ≡ 0 */}
        <g transform={`translate(${cx - 200}, ${cy})`}>
          <line x1="0" y1="-22" x2="0" y2="22" stroke="#1a1814" strokeWidth="1" />
          <text x="-6" y="-28" textAnchor="end" fontFamily="var(--mono)" fontSize="10" fill="#6b6457" letterSpacing="1.2">e_t ≡ 0</text>
          <text x="-6" y="-14" textAnchor="end" fontFamily="var(--serif)" fontStyle="italic" fontSize="11" fill="#6b6457">no exogenous</text>
          <text x="-6" y="0"   textAnchor="end" fontFamily="var(--serif)" fontStyle="italic" fontSize="11" fill="#6b6457">channel</text>
          <text x="-6" y="14"  textAnchor="end" fontFamily="var(--serif)" fontStyle="italic" fontSize="11" fill="#6b6457">(6)</text>
        </g>
        {edges.map((e, idx) => {
          const f = nodes.find(n=>n.id===e.from), t = nodes.find(n=>n.id===e.to);
          const dx = t.x-f.x, dy = t.y-f.y;
          const len = Math.hypot(dx, dy);
          const ux = dx/len, uy = dy/len;
          const fx = f.x + ux*36, fy = f.y + uy*36;
          const tx = t.x - ux*36, ty = t.y - uy*36;
          /* curved arc — bow outward */
          const mx = (fx+tx)/2 + uy*22, my = (fy+ty)/2 - ux*22;
          const active = idx === tickPhase;
          return (
            <g key={e.from+e.to}>
              <path d={`M ${fx} ${fy} Q ${mx} ${my} ${tx} ${ty}`}
                fill="none"
                stroke={active ? "var(--accent)" : "#1a1814"}
                strokeWidth={active ? 2.2 : 1}
                markerEnd="url(#ar)"
                opacity={active ? 1 : 0.7} />
              <text x={mx} y={my - 4} textAnchor="middle"
                fontFamily="var(--mono)" fontSize="10" fill={active?"var(--accent)":"#3b362d"}
                letterSpacing="0.5">{e.eq}</text>
            </g>
          );
        })}
        {nodes.map(n => (
          <g key={n.id} transform={`translate(${n.x},${n.y})`}>
            <circle r="32" fill="#f3efe7" stroke="#1a1814" strokeWidth="1.2" />
            <text textAnchor="middle" y="-3" fontFamily="var(--serif)" fontStyle="italic" fontSize="17" fill="#1a1814">{n.label}</text>
            <text textAnchor="middle" y="13" fontFamily="var(--mono)" fontSize="8.5" fill="#6b6457" letterSpacing="1">{n.sub}</text>
          </g>
        ))}
        {/* the "loop is closed" annotation */}
        <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="#948c7d" letterSpacing="1.5">CLOSED</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="#948c7d" letterSpacing="1.5">CONTOUR</text>
      </svg>
    </div>
  );
}

/* ════════ Registers — live u_t per channel of address ════════ */
function RegistersPanel({ state }) {
  return (
    <>
      <div className="card-sub">The user state <em>u<sub>t</sub></em> decomposes into four registers — channels of address, not selves. Each evolves under <em>f(u, s) + ξ</em>.</div>
      <div className="registers">
        {REGISTERS.map(reg => {
          const v = state.u[reg.id];
          const flash = state.events.length && state.events[state.events.length-1].reg === reg.id;
          return (
            <React.Fragment key={reg.id}>
              <div className="lab"><span className="glyph">{reg.glyph}</span> {reg.label}</div>
              <div className="track"><div className={`fill ${flash?"flash":""}`} style={{width: `${v*100}%`}}/></div>
              <div className="val">{v.toFixed(3)}</div>
            </React.Fragment>
          );
        })}
      </div>
      <div style={{height: 12}} />
      <div className="micro" style={{marginBottom: 6}}>Policy belief θ_t — implicit posterior weights</div>
      <div className="registers">
        {REGISTERS.map(reg => {
          const v = state.theta[reg.id];
          return (
            <React.Fragment key={reg.id}>
              <div className="lab"><span className="glyph">θ{sub(reg.id)}</span> {reg.label}</div>
              <div className="track"><div className="fill" style={{width: `${v*100}%`, background: "var(--ink-3)"}}/></div>
              <div className="val">{v.toFixed(3)}</div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
const subMap = { S: "ₛ", C: "ᴄ", P: "ₚ", K: "ᴋ" };
function sub(k) { return subMap[k] || ""; }

/* ════════ MetricsPanel — instruments §3 with live values ════════ */
function MetricsPanel({ state, knobs }) {
  const ms = state.isi * (state.deltaMin*1000);
  const PrEtau = Math.exp(-(state.thetaRef) * (1/Math.max(2, recentISIMean(state)))); /* operational, not strict */
  const foreclosed = PrEtau < 0.001;
  const dividual = state.Hbelief < 0.5;
  const totalSurplus = RKEYS.reduce((a,k)=>a+state.sigmaSurplus[k], 0);

  return (
    <>
      <div className="card-sub">
        Six instruments from §3, evaluated on the live trajectory. Each is measurable; none is a derivative of another.
      </div>
      <div className="metrics">
        <div className="metric">
          <div className="name">Foreclosure</div>
          <div className="formula">Pr(<em>E<sub>τ</sub></em>) = <em>S</em>(θ<sub>ref</sub>; θ<sub>t</sub>)</div>
          <div className={`value ${foreclosed?"alarm":""}`}>{fmtSmall(PrEtau)}</div>
          <div className="note">no-input window of length θ<sub>ref</sub>={state.thetaRef} ticks</div>
        </div>
        <div className="metric">
          <div className="name">Dividual condition</div>
          <div className="formula"><em>H</em>(<em>b<sub>t</sub></em>) = <em>H</em>(<em>u<sub>t</sub></em> | <em>y</em><sub>1:t</sub>)</div>
          <div className={`value ${dividual?"alarm":(knobs.sigmaC>0.2?"ok":"")}`}>{state.Hbelief.toFixed(3)}</div>
          <div className="note">posterior entropy nats; H<sub>res</sub>(σ²<sub>η</sub>) ≥ {(0.32 + knobs.sigmaC*0.78).toFixed(2)}</div>
        </div>
        <div className="metric">
          <div className="name">Metric superego</div>
          <div className="formula"><em>D<sub>KL</sub></em>(<em>ν<sub>u</sub></em> ‖ π<sub>R̂</sub>)</div>
          <div className={`value ${state.Dkl>0.3?"ok":""}`}>{state.Dkl.toFixed(3)}</div>
          <div className="note">L<sub>m</sub>* = {state.LmStar.toFixed(2)} — current L<sub>m</sub> = {knobs.Lm.toFixed(2)}</div>
        </div>
        <div className="metric">
          <div className="name">Surplus Σ(T)</div>
          <div className="formula">∑<sub>i</sub> ∫ ρ<sub>i</sub>(u<sub>t⁻</sub>) dN<sup>i</sup><sub>t</sub></div>
          <div className="value alarm">{totalSurplus.toFixed(2)}</div>
          <div className="note">rate dΣ/dt ≈ {state.sigmaSurplusRate.toFixed(3)}</div>
        </div>
        <div className="metric">
          <div className="name">Captured resonance</div>
          <div className="formula"><em>K<sub>bm</sub></em> > | ω<sub>b</sub> − ω<sub>m</sub> |</div>
          <div className={`value ${state.locked?"alarm":""}`}>
            {state.K_bm.toFixed(2)} {state.locked?">":"<"} {(Math.abs(state.omegaB-state.omegaM)*28).toFixed(2)}
          </div>
          <div className="note">{state.locked ? "PHASE-LOCKED — body entrains to medium" : "free oscillator"}</div>
        </div>
        <div className="metric">
          <div className="name">ISI (Δt to last stim)</div>
          <div className="formula"><em>τ</em><sup>(k)</sup> in ticks · {(state.deltaMin*1000).toFixed(0)} ms</div>
          <div className="value">{state.isi}</div>
          <div className="note">δ<sub>min</sub> = 1 tick · θ<sub>ref</sub>/δ<sub>min</sub> = {state.thetaRef}</div>
        </div>
      </div>
    </>
  );
}

function recentISIMean(state) {
  const h = state.isiHist.slice(-80);
  if (!h.length) return 4;
  return h.reduce((a,b)=>a+b, 0) / h.length;
}
function fmtSmall(x) {
  if (x === 0) return "0";
  if (x < 1e-3) return x.toExponential(2);
  return x.toFixed(4);
}

/* ════════ SurplusBreakdown — per-register §3.1 ════════ */
function SurplusBreakdown({ state }) {
  const total = Math.max(0.001, RKEYS.reduce((a,k)=>a+state.sigmaSurplus[k], 0));
  return (
    <div className="surplus-grid">
      {REGISTERS.map(reg => {
        const v = state.sigmaSurplus[reg.id];
        const pct = (v/total)*100;
        return (
          <div className="surplus-cell" key={reg.id}>
            <div className="reg"><span className="glyph">Σ{sub(reg.id)}</span> &nbsp;{reg.label}</div>
            <div className="amt">{v.toFixed(2)}</div>
            <div className="micro" style={{marginTop:4}}>{pct.toFixed(1)}% of yield</div>
          </div>
        );
      })}
    </div>
  );
}

/* ════════ EventRaster — N^i_t marked point process ════════ */
function EventRaster({ state }) {
  const win = 600;
  const t0 = Math.max(0, state.t - win);
  return (
    <div className="raster">
      <div className="rlab"><b>s_t</b> stimuli</div>
      <Lane events={state.events} t0={t0} win={win} filter={e=>e.kind==="s"} cls="stim"/>
      {REGISTERS.map(reg => (
        <React.Fragment key={reg.id}>
          <div className="rlab">dN<sup>{reg.id.toLowerCase()}</sup><sub>t</sub> · <b>{reg.label}</b></div>
          <Lane events={state.events} t0={t0} win={win}
            filter={e => e.kind==="y" && e.reg===reg.id}
            cls={reg.id.toLowerCase()}/>
        </React.Fragment>
      ))}
    </div>
  );
}
function Lane({ events, t0, win, filter, cls }) {
  return (
    <div className="lane">
      {events.filter(filter).map((e, i) => {
        const left = ((e.t - t0) / win) * 100;
        if (left < 0 || left > 100) return null;
        return <div key={i} className={`mark ${cls}`} style={{left: left+"%"}} />;
      })}
    </div>
  );
}

/* ════════ HawkesMatrix — α_ij cross-excitation ════════ */
function HawkesMatrix({ state }) {
  return (
    <div>
      <div className="card-sub">
        Hawkes intensity <em>λ<sup>i</sup>(t) = λ<sub>0</sub><sup>i</sup> + ∑<sub>j</sub> α<sub>ij</sub>∫κ(t−s) dN<sup>j</sup><sub>s</sub></em>.
        Off-diagonal entries are libidinal routing (§3.3): a <em>j</em>-marked event raises the intensity of an <em>i</em>-marked one. Diagonal dominance is autonomic; off-diagonal mass is the dividual collapse.
      </div>
      <div className="matrix">
        <div className="mh"></div>
        {REGISTERS.map(r => <div key={"h"+r.id} className="mh">{r.id}</div>)}
        {REGISTERS.map((rj, j) => (
          <React.Fragment key={"row"+rj.id}>
            <div className="mh">{rj.id}</div>
            {REGISTERS.map((ri, i) => {
              const v = state.alpha[j][i];
              const bg = `oklch(${Math.max(0.20, 0.96 - v*0.55)} ${0.06 + v*0.12} 35 / ${0.10 + v*0.85})`;
              return (
                <div className="mc" key={"c"+j+i} style={{background: bg, color: v>0.35?"#f3efe7":"#1a1814"}}>
                  {v.toFixed(2)}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="row" style={{marginTop:10, justifyContent:"space-between"}}>
        <div className="micro">trace(α) — autonomic</div>
        <div className="mono-val">{state.alpha.reduce((a,r,i)=>a+r[i],0).toFixed(3)}</div>
      </div>
      <div className="row" style={{justifyContent:"space-between"}}>
        <div className="micro">‖α<sub>off-diag</sub>‖ — libidinal routing</div>
        <div className="mono-val">
          {state.alpha.reduce((a,r,j)=>a + r.reduce((b,v,i)=>b+(i===j?0:v),0), 0).toFixed(3)}
        </div>
      </div>
    </div>
  );
}

/* ════════ MutualInfo — I(u^i; u^j) under stationary distribution ════════ */
function MutualInfo({ state }) {
  const M = useMemo(() => miMatrix(state.uTrail), [state.t]);
  return (
    <div>
      <div className="card-sub">
        Mutual information across registers under stationary <em>μ<sub>π</sub></em>.
        Off-diagonal mass &gt;&gt; baseline = the libidinal-routing claim. <em>H</em>(<em>u</em> | <em>y</em><sub>1:t</sub>) → 0 follows.
      </div>
      <div className="matrix">
        <div className="mh"></div>
        {REGISTERS.map(r => <div key={"mh"+r.id} className="mh">{r.id}</div>)}
        {REGISTERS.map((rj, j) => (
          <React.Fragment key={"mi"+rj.id}>
            <div className="mh">{rj.id}</div>
            {REGISTERS.map((ri, i) => {
              const v = M[j][i];
              const bg = i===j
                ? `oklch(0.30 0 0 / ${0.12 + v*0.20})`
                : `oklch(${0.94 - v*0.55} 0.06 230 / ${0.12 + v*0.78})`;
              const col = (i!==j && v>0.45) ? "#f3efe7" : "#1a1814";
              return (
                <div className="mc" key={"mic"+j+i} style={{background:bg, color:col}}>
                  {v.toFixed(2)}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ════════ Spectrum — chrono-debt D(t,τ) ════════ */
function ChronoSpectrum({ state }) {
  const w = 460, h = 220, pad = { l: 36, r: 14, t: 14, b: 28 };
  const taus = useMemo(() => {
    const out = []; for (let i = 0; i < 60; i++) out.push(1 + i*4); return out;
  }, []);
  const { Lam, Lam0, D } = useMemo(
    () => chronoDebt(taus, state.isiHist),
    [state.isiHist.length]
  );
  const xs = taus.map((t, i) => pad.l + (i/(taus.length-1)) * (w - pad.l - pad.r));
  const yScale = v => pad.t + (1 - v) * (h - pad.t - pad.b);
  const lineLam0 = xs.map((x,i)=>`${x},${yScale(Lam0[i])}`).join(" ");
  const lineLam  = xs.map((x,i)=>`${x},${yScale(Lam[i])}`).join(" ");
  const area = xs.map((x,i)=>`${x},${yScale(Lam0[i])}`).join(" ")
    + " " + xs.slice().reverse().map((x,i)=>{
      const idx = xs.length-1-i;
      return `${x},${yScale(Lam[idx])}`;
    }).join(" ");

  return (
    <div className="spectrum">
      <svg viewBox={`0 0 ${w} ${h}`}>
        {/* gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map(v => (
          <g key={v}>
            <line x1={pad.l} x2={w-pad.r} y1={yScale(v)} y2={yScale(v)} stroke="#cdc6b6" strokeWidth="0.5"/>
            <text x={pad.l-6} y={yScale(v)+3} fontFamily="var(--mono)" fontSize="9" textAnchor="end" fill="#948c7d">{v.toFixed(2)}</text>
          </g>
        ))}
        {/* D(t,τ) shaded chrono-debt */}
        <polygon points={area} fill="oklch(0.46 0.12 35 / 0.18)" />
        {/* Λ_◦(τ) baseline */}
        <polyline points={lineLam0} fill="none" stroke="#3b362d" strokeWidth="1.2" strokeDasharray="3 3"/>
        {/* Λ(t,τ) realized */}
        <polyline points={lineLam} fill="none" stroke="var(--accent)" strokeWidth="2"/>
        {/* axes */}
        <line x1={pad.l} y1={h-pad.b} x2={w-pad.r} y2={h-pad.b} stroke="#1a1814"/>
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={h-pad.b} stroke="#1a1814"/>
        <text x={(w+pad.l)/2} y={h-6} textAnchor="middle" fontFamily="var(--mono)" fontSize="9.5" fill="#3b362d" letterSpacing="1">τ  (ticks)</text>
        <text x={10} y={pad.t+8} fontFamily="var(--mono)" fontSize="9.5" fill="#3b362d" letterSpacing="1">Pr(τ_m &gt; τ)</text>
        {/* θ_ref marker */}
        {(() => {
          const k = Math.min(taus.length-1, Math.round((state.thetaRef-1)/4));
          const x = xs[k];
          return (
            <g>
              <line x1={x} x2={x} y1={pad.t} y2={h-pad.b} stroke="#1a1814" strokeDasharray="2 2"/>
              <text x={x+4} y={pad.t+10} fontFamily="var(--mono)" fontSize="9" fill="#1a1814">θ_ref</text>
            </g>
          );
        })()}
      </svg>
      <div className="spectrum-legend">
        <span><span className="sw" style={{background:"#3b362d", borderTop:"1px dashed #3b362d", height:0, borderTopWidth:2}}/>Λ_◦(τ) — pre-closure baseline</span>
        <span><span className="sw" style={{background:"var(--accent)"}}/>Λ(t,τ) — realized under π</span>
        <span><span className="sw" style={{background:"oklch(0.46 0.12 35 / 0.4)"}}/>D(t,τ) chrono-debt</span>
      </div>
    </div>
  );
}

/* ════════ SurvivalView — survival fn + estimator variance ════════ */
function SurvivalView({ state }) {
  const w = 460, h = 200, pad = { l: 44, r: 14, t: 14, b: 30 };
  const taus = useMemo(() => {
    const out = []; for (let i = 0; i < 50; i++) out.push(1 + i*3); return out;
  }, []);
  const Semp = useMemo(() => survivalEmpirical(state.isiHist, taus),
    [state.isiHist.length]);
  const Sbound = useMemo(() => survivalBound(taus, state.deltaMin, 1.2), []);
  const varI = useMemo(() => reclamationVariance(taus, state.isiHist, Math.max(1, state.isiHist.length)),
    [state.isiHist.length]);

  /* log-scale for survival (left axis); separate scale on right for variance */
  const ymin = 1e-6;
  const ys = v => {
    const lv = Math.log10(Math.max(ymin, v));
    return pad.t + ((-lv) / -Math.log10(ymin)) * (h - pad.t - pad.b);
  };
  const xs = taus.map((t, i) => pad.l + (i/(taus.length-1)) * (w - pad.l - pad.r));
  const lineEmp = xs.map((x,i)=>`${x},${ys(Semp[i])}`).join(" ");
  const lineBound = xs.map((x,i)=>`${x},${ys(Sbound[i])}`).join(" ");

  /* right axis: log variance */
  const vmax = Math.log10(Math.max(...varI, 10));
  const ysv = v => {
    const lv = Math.log10(Math.max(1, v));
    return pad.t + (1 - lv/Math.max(1, vmax)) * (h - pad.t - pad.b);
  };
  const lineVar = xs.map((x,i)=>`${x},${ysv(varI[i])}`).join(" ");
  /* θ_ref vertical */
  const kref = Math.min(taus.length-1, Math.round((state.thetaRef-1)/3));

  return (
    <div className="survival">
      <svg viewBox={`0 0 ${w} ${h}`}>
        {[0, 1, 2, 3, 4, 5].map(p => {
          const v = Math.pow(10, -p);
          return (
            <g key={p}>
              <line x1={pad.l} x2={w-pad.r} y1={ys(v)} y2={ys(v)} stroke="#cdc6b6" strokeWidth="0.5"/>
              <text x={pad.l-6} y={ys(v)+3} fontFamily="var(--mono)" fontSize="9" textAnchor="end" fill="#948c7d">10⁻{p}</text>
            </g>
          );
        })}
        {/* foreclosure zone right of θ_ref */}
        <rect x={xs[kref]} y={pad.t} width={w-pad.r-xs[kref]} height={h-pad.t-pad.b}
          fill="oklch(0.46 0.12 35 / 0.06)"/>
        <polyline points={lineBound} fill="none" stroke="#3b362d" strokeWidth="1" strokeDasharray="3 3"/>
        <polyline points={lineEmp} fill="none" stroke="var(--accent)" strokeWidth="2"/>
        <polyline points={lineVar} fill="none" stroke="var(--leak)" strokeWidth="1.4"/>
        <line x1={xs[kref]} x2={xs[kref]} y1={pad.t} y2={h-pad.b} stroke="#1a1814" strokeDasharray="2 2"/>
        <text x={xs[kref]+4} y={pad.t+10} fontFamily="var(--mono)" fontSize="9" fill="#1a1814">θ_ref</text>
        <line x1={pad.l} y1={h-pad.b} x2={w-pad.r} y2={h-pad.b} stroke="#1a1814"/>
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={h-pad.b} stroke="#1a1814"/>
        <text x={(w+pad.l)/2} y={h-6} textAnchor="middle" fontFamily="var(--mono)" fontSize="9.5" fill="#3b362d" letterSpacing="1">τ  (ticks)</text>
        <text x={4} y={pad.t+8} fontFamily="var(--mono)" fontSize="9" fill="#3b362d" letterSpacing="1">S(τ;t),  Var Î(τ)</text>
      </svg>
      <div className="spectrum-legend">
        <span><span className="sw" style={{background:"#3b362d", height:2}}/>{"Asmussen bound  C·e^(−τ/δ_min)"}</span>
        <span><span className="sw" style={{background:"var(--accent)"}}/>S(τ;t) empirical</span>
        <span><span className="sw" style={{background:"var(--leak)"}}/>Var Î(τ) ∝ 1/(N·Pr(E_τ))</span>
      </div>
    </div>
  );
}

/* ════════ KuramotoView — captured resonance §3.6 ════════ */
function KuramotoView({ state }) {
  /* render two rotating phases on a single dial; lock indicator    */
  const w = 460, h = 140;
  const cx = h/2 + 20, cy = h/2, r = 50;
  const bx = cx + r * Math.cos(state.phaseB);
  const by = cy + r * Math.sin(state.phaseB);
  const mx = cx + r * Math.cos(state.phaseM);
  const my = cy + r * Math.sin(state.phaseM);
  const dphi = ((state.phaseM - state.phaseB) % (2*Math.PI) + 2*Math.PI) % (2*Math.PI);
  return (
    <div className="phase">
      <svg viewBox={`0 0 ${w} ${h}`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#cdc6b6"/>
        <circle cx={cx} cy={cy} r="2" fill="#1a1814"/>
        <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#1a1814" strokeWidth="1.6"/>
        <line x1={cx} y1={cy} x2={mx} y2={my} stroke="var(--accent)" strokeWidth="1.6"/>
        <circle cx={bx} cy={by} r="4" fill="#1a1814"/>
        <circle cx={mx} cy={my} r="4" fill="var(--accent)"/>
        <text x={cx} y={cy+r+18} textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="#6b6457" letterSpacing="1">body · medium</text>

        {/* live equation readouts */}
        <g transform={`translate(${h+50}, 18)`}>
          <text fontFamily="var(--serif)" fontStyle="italic" fontSize="13" fill="#1a1814">
            dφ<tspan baselineShift="sub" fontSize="9">b</tspan>/dt = ω<tspan baselineShift="sub" fontSize="9">b</tspan> + K<tspan baselineShift="sub" fontSize="9">bm</tspan> sin(φ<tspan baselineShift="sub" fontSize="9">m</tspan> − φ<tspan baselineShift="sub" fontSize="9">b</tspan>)
          </text>
          <text y="26" fontFamily="var(--mono)" fontSize="11" fill="#1a1814">
            K<tspan baselineShift="sub" fontSize="8">bm</tspan> = {state.K_bm.toFixed(3)}
          </text>
          <text y="44" fontFamily="var(--mono)" fontSize="11" fill="#1a1814">
            |ω<tspan baselineShift="sub" fontSize="8">b</tspan>−ω<tspan baselineShift="sub" fontSize="8">m</tspan>| = {Math.abs(state.omegaB-state.omegaM).toFixed(4)}
          </text>
          <text y="64" fontFamily="var(--mono)" fontSize="11" fill={state.locked ? "var(--accent)" : "var(--good)"} fontWeight="600" letterSpacing="0.8">
            {state.locked ? "▣  PHASE-LOCKED" : "○  free oscillation"}
          </text>
          <text y="82" fontFamily="var(--serif)" fontStyle="italic" fontSize="11" fill="#6b6457">
            Δφ = {dphi.toFixed(2)} rad
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ════════ InterventionPanel — Modes A / B / C ════════ */
function InterventionPanel({ knobs, setKnobs, state }) {
  const PrEtau = Math.exp(-(state.thetaRef) * (1/Math.max(2, recentISIMean(state))));
  const broken = PrEtau > 0.01; /* Mode A actually pushed Pr(E_τ) above threshold */
  return (
    <div className="intervene">
      {/* Mode A */}
      <div className="mode">
        <div className="mode-head">
          <span className="badge">A</span>
          <span className="title">Architectural</span>
          <span className={`breaks ${broken?"yes":""}`}>{broken ? "breaks lemma 1" : "lemma 1 holds"}</span>
        </div>
        <div className="mode-desc">
          Augment <em>R̂</em> with a bonus on long ISIs: <em>R̂' = R̂ + β·∑<sub>k</sub> b(τ<sup>(k)</sup>)</em>.
          The only mode that breaks the foreclosure. Operates on <em>T<sub>mix</sub>(π')</em>.
        </div>
        <div className="slider-row">
          <div className="k">β <span className="micro">regularization</span></div>
          <input type="range" min="0" max="1.2" step="0.01" value={knobs.beta}
            onChange={e=>setKnobs({...knobs, beta:+e.target.value})}/>
          <div className="v">{knobs.beta.toFixed(2)}</div>
        </div>
        <div className="micro" style={{marginTop:6, color:"var(--ink-4)"}}>
          Prop. 1: <em>P</em>(β) continuous in β, <em>P</em>(0)≈0, sup <em>P</em>(β) &gt; 0  ⇒  IVT recovers any ε∈(0,ε<sub>max</sub>).
        </div>
      </div>

      {/* Mode B */}
      <div className="mode">
        <div className="mode-head">
          <span className="badge">B</span>
          <span className="title">Artisanal</span>
          <span className="breaks">lemma 1 unchanged</span>
        </div>
        <div className="mode-desc">
          Maintenance labor <em>L<sub>m</sub></em> against the platform's pull. Preserves a positive <em>D<sub>KL</sub></em>(<em>ν<sub>u</sub></em>‖π<sub>R̂</sub>) iff <em>L<sub>m</sub></em> ≥ <em>L<sub>m</sub></em>*.
        </div>
        <div className="slider-row">
          <div className="k">L<sub>m</sub> <span className="micro">labor</span></div>
          <input type="range" min="0" max="1" step="0.01" value={knobs.Lm}
            onChange={e=>setKnobs({...knobs, Lm:+e.target.value})}/>
          <div className="v">{knobs.Lm.toFixed(2)}</div>
        </div>
        <div className="micro" style={{marginTop:6, color:"var(--ink-4)"}}>
          dD<sub>KL</sub>/dt = −h<sub>0</sub>(β<sub>u</sub>) + r(L<sub>m</sub>) · L<sub>m</sub>* = r⁻¹(h<sub>0</sub>) ≈ {state.LmStar.toFixed(2)}
        </div>
      </div>

      {/* Mode C */}
      <div className="mode">
        <div className="mode-head">
          <span className="badge">C</span>
          <span className="title">Disruption-as-form</span>
          <span className="breaks">bounds Σ(T) only</span>
        </div>
        <div className="mode-desc">
          Inflate <em>Var</em>(η<sub>t</sub>) by refusing legibility. By Blackwell sufficiency, <em>sup<sub>π</sub> E[R̂]</em> falls; <em>H<sub>res</sub></em> &gt; 0 is held.
        </div>
        <div className="slider-row">
          <div className="k">σ<sub>η</sub><sup>+</sup> <span className="micro">added noise</span></div>
          <input type="range" min="0" max="0.6" step="0.01" value={knobs.sigmaC}
            onChange={e=>setKnobs({...knobs, sigmaC:+e.target.value})}/>
          <div className="v">{knobs.sigmaC.toFixed(2)}</div>
        </div>
        <div className="micro" style={{marginTop:6, color:"var(--ink-4)"}}>
          σ²<sub>η</sub> = {(state.sigmaEta**2).toFixed(4)}  ·  H<sub>res</sub>(σ²<sub>η</sub>) ≥ {(0.32 + knobs.sigmaC*0.78).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

/* expose */
Object.assign(window, {
  LoopDiagram, RegistersPanel, MetricsPanel, SurplusBreakdown,
  EventRaster, HawkesMatrix, MutualInfo,
  ChronoSpectrum, SurvivalView, KuramotoView, InterventionPanel,
  recentISIMean,
});
