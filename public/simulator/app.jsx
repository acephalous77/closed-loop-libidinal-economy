/*  app.jsx — composition root for the simulator */

const { useState, useEffect, useRef, useReducer } = React;

function App() {
  const [knobs, setKnobs] = useState({ beta: 0, Lm: 0, sigmaC: 0 });
  const [state, setState] = useState(() => window.makeInitialState());
  const [playing, setPlaying] = useState(true);
  const [rate, setRate] = useState(1);                   /* ticks per frame  */
  const stateRef = useRef(state);
  const knobsRef = useRef(knobs);
  stateRef.current = state; knobsRef.current = knobs;

  /* animation loop */
  useEffect(() => {
    if (!playing) return;
    let raf;
    const loop = () => {
      let s = stateRef.current;
      for (let i = 0; i < rate; i++) s = window.step(s, knobsRef.current);
      setState(s);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [playing, rate]);

  const reset = () => setState(window.makeInitialState());

  return (
    <div className="app">
      <header className="masthead">
        <div>
          <div className="eyebrow">A live instrument · §§1–8</div>
          <h1>The Closed-Loop Libidinal Economy <em>— a live simulator</em></h1>
          <div className="sub">
            Six equations, six instruments, three modes of intervention. Run the apparatus.
            Watch Lemma 1 produce Theorem 1 in real time, and intervene at the points the framework
            specifies — each at its own timescale, each on a structurally distinct object.
          </div>
        </div>
        <div className="byline">
          A. Selimović
          <span>after the closed-loop exposition</span>
        </div>
      </header>

      <div className="transport">
        <button className="btn" onClick={()=>setPlaying(p=>!p)}>
          {playing ? "❚❚ pause" : "▶  play"}
        </button>
        <button className="btn ghost" onClick={reset}>↺ reset</button>
        <label>RATE
          <select value={rate} onChange={e=>setRate(+e.target.value)}>
            <option value="1">1×</option>
            <option value="2">2×</option>
            <option value="4">4×</option>
            <option value="8">8×</option>
          </select>
        </label>
        <div className="clock">
          <span>t&nbsp;<b>{state.t}</b></span>
          <span>clock&nbsp;<b>{(state.t * state.deltaMin).toFixed(2)}s</b></span>
          <span>events&nbsp;<b>{state.events.length}</b></span>
        </div>
      </div>

      {/* ───── 1. THE LOOP ───── */}
      <section className="section">
        <SectionHead n="§1" title="The closed loop" sub="Equations (1)–(6) wired as a directed graph. The contour is closed by construction; e_t ≡ 0 is the foreclosure of the exogenous channel."/>
        <div className="grid">
          <div className="card">
            <div className="card-title">Loop diagram <span className="tag">eqs. (1)–(6)</span></div>
            <LoopDiagram state={state} knobs={knobs}/>
          </div>
          <div className="card">
            <div className="card-title">User state <span className="tag">u_t = (uˢ,uᶜ,uᵖ,uᵏ)</span></div>
            <RegistersPanel state={state}/>
          </div>
          <div className="card">
            <div className="card-title">Captured resonance <span className="tag">§3.6 · eq. (Kuramoto)</span></div>
            <KuramotoView state={state}/>
            <div className="micro" style={{marginTop: 10, lineHeight: 1.5, color:"var(--ink-3)"}}>
              Phase lock condition <em>K<sub>bm</sub></em> &gt; |ω<sub>b</sub>−ω<sub>m</sub>|. The platform shapes φ<sub>m</sub> through delivery timing; under sustained policy, the body becomes a forced oscillator.
            </div>
          </div>
        </div>
      </section>

      {/* ───── 2. INSTRUMENTS ───── */}
      <section className="section">
        <SectionHead n="§3" title="Six instruments" sub="Each formally independent: surplus, chrono-debt, routing, metric superego, somatic optimization, captured resonance."/>
        <div className="grid">
          <div className="card span-2">
            <div className="card-title">Live instruments <span className="tag">§3.1–3.6</span></div>
            <MetricsPanel state={state} knobs={knobs}/>
          </div>
          <div className="card">
            <div className="card-title">Surplus Σⁱ(T) <span className="tag">per-register, §3.1</span></div>
            <div className="card-sub">Σ(T) = ∑ᵢ ∫ ρᵢ(u<sub>t⁻</sub>, y<sub>t⁻</sub>) dN<sup>i</sup><sub>t</sub>. The marked point process is the apparatus's purpose.</div>
            <SurplusBreakdown state={state}/>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card span-2">
            <div className="card-title">Marked point process N<sup>i</sup><sub>t</sub> <span className="tag">§3.5 · Hawkes</span></div>
            <div className="card-sub">Each tick: one stimulus s<sub>t</sub> (top lane) and any engagement events it elicits (per-register lanes). The differential dN<sup>i</sup><sub>t</sub> is the body — saccades, taps, scroll-events — and the optimization is over these micro-events, not deliberative choice.</div>
            <EventRaster state={state}/>
          </div>
          <div className="card">
            <div className="card-title">α<sub>ij</sub> cross-excitation <span className="tag">§3.5</span></div>
            <HawkesMatrix state={state}/>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <div className="card-title">Mutual information I(uⁱ;uʲ) <span className="tag">§3.3 · routing</span></div>
            <MutualInfo state={state}/>
          </div>
          <div className="card">
            <div className="card-title">Chrono-debt spectrum <span className="tag">§3.2 · D(t,τ) = Λ_◦(τ) − Λ(t,τ)</span></div>
            <ChronoSpectrum state={state}/>
            <div className="micro" style={{marginTop: 8, color:"var(--ink-3)", lineHeight:1.5}}>
              D(t,τ) is a <em>spectrum</em>: the deficit in pause-time is non-zero across all scales simultaneously, not just at one preferred scale. A foreclosed second is recoverable; a foreclosed adolescence is not.
            </div>
          </div>
          <div className="card">
            <div className="card-title">Survival S(τ;t) + Var Î(τ) <span className="tag">§4 · Lemma 1 + Thm 1 step 2</span></div>
            <SurvivalView state={state}/>
            <div className="micro" style={{marginTop: 8, color:"var(--ink-3)", lineHeight:1.5}}>
              Asmussen bound (Ch. V): <em>S(τ;θ*) ≤ C(c<sub>v</sub>)·e<sup>−τ/δ<sub>min</sub></sup></em>. Sample-based <em>Î</em>(τ) has variance ∝ 1/(N·Pr(<em>E<sub>τ</sub></em>)) and diverges as Pr(<em>E<sub>τ</sub></em>) → 0 — the operational meaning of <em>undefined-on-trajectory</em>.
            </div>
          </div>
        </div>
      </section>

      {/* ───── 3. CAUSAL CHAIN ───── */}
      <section className="section">
        <SectionHead n="§4" title="The causal chain · Lemma 1 → Theorem 1" sub="Each node is a premise or step from the proof, lit when its condition is currently satisfied. Each mode intercepts at a specific node."/>
        <div className="grid">
          <div className="card span-2">
            <div className="card-title">Implication graph <span className="tag">Asmussen · Pemantle · Kallenberg</span></div>
            <CausalChain state={state} knobs={knobs}/>
          </div>
          <div className="card">
            <div className="card-title">Intervention controls <span className="tag">§5 · three modes</span></div>
            <InterventionPanel knobs={knobs} setKnobs={setKnobs} state={state}/>
          </div>
        </div>
      </section>

      {/* ───── 4. REFLECTION ───── */}
      <section className="section">
        <SectionHead n="§5–§8" title="Implications, in real time" sub="What the configuration you've set up implies — which results hold, which are bypassed, which threshold is being met, which timescales you've conflated."/>
        <div className="grid">
          <div className="card span-3">
            <div className="card-title">Reflection <span className="tag">live</span></div>
            <ReflectionPanel state={state} knobs={knobs}/>
          </div>
        </div>
      </section>

      {/* ───── 5. EQUATIONS REFERENCE ───── */}
      <section className="section">
        <SectionHead n="§1" title="The six equations · reference"/>
        <div className="eqs">
          <Eq n="(1) State evolution" body="u_{t+1} = f(u_t, s_t) + ξ_t"
            gloss="user response dynamics; ξ_t is the leak channel — the only stochastic admission of anything outside the loop."/>
          <Eq n="(2) Engagement signal" body="y_t = g(u_t) + η_t"
            gloss="irreversible compression of the user state; distinct internal states can produce identical y_t. The precondition for optimization."/>
          <Eq n="(3) Delivery policy" body="s_t = π(y_{1:t}; θ_t)"
            gloss="policy depends only on engagement history; the platform has no direct access to u_t. This is what makes the loop closed."/>
          <Eq n="(4) Online learning" body="θ_{t+1} = θ_t + α · ∇̂R̂"
            gloss="stochastic gradient ascent on the platform's empirical reward. Mode A inserts a regularization here."/>
          <Eq n="(5) Surplus extraction" body="Σ(T) = ∑_i ∫ ρ_i(u_{t⁻}, y_{t⁻}) dN^i_t"
            gloss="marked point process; not derivative of (1)–(4) — the loop's purpose. Without (5) the loop is autonomic; with (5) it is libidinal-economic."/>
          <Eq n="(6) Foreclosure" body="e_t ≡ 0"
            gloss="no exogenous channel. Definitional. The propositional claim — that no-input windows vanish — is Lemma 1, not (6) itself."/>
        </div>
      </section>

      {/* ───── 6. THEOREM ───── */}
      <section className="section">
        <div className="theorem">
          <div className="lemma">
            <h3>Lemma 1 · foreclosure of the no-input window</h3>
            <div className="stmt">
              Under (A1)–(A6), <em>S(θ<sub>ref</sub>; t) → 0</em> as <em>t → ∞</em>.
            </div>
            <div className="formula">
              S(θ<sub>ref</sub>; θ*) ≤ C(c_v) · exp(−θ<sub>ref</sub>/δ<sub>min</sub>) ≈ e⁻¹⁰³ to e⁻¹⁰⁵
            </div>
          </div>
          <div className="theorem-body">
            <h3>Theorem 1 · reclamation theorem</h3>
            <div className="stmt">
              <em>I</em>(τ) := <em>Cov</em>(u<sub>t</sub>, u<sub>t+τ</sub> | <em>E</em><sub>τ</sub>) is <b>undefined-on-trajectory</b> in the limit <em>t → ∞</em> for <em>τ</em> &gt; θ<sub>ref</sub>. The quantity that "reclamation" would recover is not literally zero — it is <em>uninstantiated</em>.
            </div>
            <div className="formula" style={{marginTop:10}}>
              Var Î(τ) ∝ 1/(N · Pr(<em>E<sub>τ</sub></em>))  →  ∞.
            </div>
          </div>
        </div>
      </section>

      {/* ───── 7. SCOPE ───── */}
      <section className="section">
        <SectionHead n="§7–§8" title="What the model does not claim"/>
        <div className="grid">
          <Card title="(§7) Not everywhere realized">
            The framework does not claim universality. It claims that <em>where</em> the loop is realized — on major commercial platforms whose policies satisfy (3)–(4) — Lemma 1 and Theorem 1 hold structurally. Long-form reading, conversation, durational practice, sleep do not realize the closure.
          </Card>
          <Card title="(§7) Not mechanism-fixed">
            The metric superego is mechanism-agnostic by design. Convergence may be realized by free-energy minimization, by operant reinforcement, or by social comparison. Empirical adjudication between the routes is downstream of the framework.
          </Card>
          <Card title="(§7) Not falsification-immune">
            A platform adopting non-trivial β·B regularization in the sense of Prop. 1 would falsify Lemma 1 by example. The framework's prediction is that no platform under engagement-monetization will do so voluntarily — that prediction is itself falsifiable.
          </Card>
          <Card title="(§8.1) Open · T_mix under Mode C">
            Whether disrupted observation slows convergence (weaker policy pull) or accelerates it (more diffuse target) is unresolved. Mode C's strategic role depends on which holds.
          </Card>
          <Card title="(§8.2) Open · cohort gradient">
            The developmental moderation of <em>I</em>(τ) by age-of-first-exposure is asserted as a structural prediction; the formal mechanism connecting (1)–(5) to a developmentally modulated <em>I</em>(τ) remains a research target.
          </Card>
          <Card title="(§8.3) Open · operating point of Σⁱ">
            The explicit operating point of the per-register surplus distribution conditional on α<sub>ij</sub> requires a constrained-optimization characterization (KKT over the policy's action space) the framework does not yet write down.
          </Card>
        </div>
      </section>

      <div className="footer">
        <span>closed-loop libidinal economy — live exposition</span>
        <span>t = {state.t} · σ²<sub>η</sub> = {(state.sigmaEta**2).toFixed(4)} · β = {knobs.beta.toFixed(2)} · L<sub>m</sub> = {knobs.Lm.toFixed(2)}</span>
      </div>
    </div>
  );
}

/* ─────────────── helpers ─────────────── */

function SectionHead({ n, title, sub }) {
  return (
    <div className="section-head">
      <div className="section-n">{n}</div>
      <div>
        <div className="section-title">{title}</div>
        {sub && <div className="section-sub">{sub}</div>}
      </div>
    </div>
  );
}

function Eq({ n, body, gloss }) {
  return (
    <div className="eq">
      <div className="n">{n}</div>
      <div className="body">{body}</div>
      <div className="gloss">{gloss}</div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="card bare">
      <div className="card-title">{title}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 4 }}>{children}</div>
    </div>
  );
}

/* mount */
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
