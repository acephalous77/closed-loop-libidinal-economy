/*  mindmap.jsx — Independent mind-map of the theoretical apparatus.
 *  Standalone from the simulator. Defines every variable, theorem,
 *  and intervention point; lets you interrogate the causal graph.
 */

const { useState, useMemo } = React;

/* ════════════════ NODES ════════════════
 * Each node has:
 *   id       : stable handle
 *   label    : short symbol shown in the box
 *   name     : prose name
 *   formula  : the formal object (LaTeX-ish ASCII)
 *   defn     : short definition (1–2 lines)
 *   wide     : prose definition (sidebar)
 *   cat      : domain — loop | platform | subject | engagement |
 *              temporal | foreclosure | cohort | assumption |
 *              theorem | mode | instrument
 *   timescale: per-event | T_mix | generational | structural
 *   x, y     : center coords inside the 1500×1100 viewBox
 */
const NODES = [
  /* ── core loop ── */
  { id:"u",     label:"u_t",     name:"User state",
    formula:"u_t = (uˢ, uᶜ, uᵖ, uᵏ)",
    defn:"State vector in U; decomposed into four registers.",
    wide:"Not a self but four channels of address — Subject, Citizen, Person, Consumer — that the historical apparatus once split across school/press/church/marketplace and that the closed loop now routes through a single delivery surface.",
    cat:"loop", timescale:"per-event", x:700, y:430 },
  { id:"regs",  label:"uˢ uᶜ uᵖ uᵏ", name:"Four registers",
    formula:"u_t ∈ U, dim = 4 channels of address",
    defn:"Subject, Citizen, Person, Consumer.",
    wide:"Each register is a measurable sub-state of u_t. Libidinal routing (§3.3) is the claim that mutual information across registers under stationary μ*_π exceeds the pre-closure baseline.",
    cat:"loop", timescale:"per-event", x:700, y:340 },
  { id:"s",     label:"s_t",     name:"Stimulus",
    formula:"s_t = π(y_{1:t}; θ_t)",
    defn:"Stimulus delivered to user at time t.",
    wide:"Policy-shaped delivery. Continuous-time but supported on a tick grid of width δ_min.",
    cat:"loop", timescale:"per-event", x:520, y:430 },
  { id:"y",     label:"y_t",     name:"Engagement signal",
    formula:"y_t = g(u_t) + η_t",
    defn:"Behavioral output observed by the platform.",
    wide:"Tuple of measurable behaviors: taps, scrolls, watch-time, gaze. The compression g is irreversible — distinct internal states can produce identical y_t. This irreversibility is the precondition for optimization.",
    cat:"loop", timescale:"per-event", x:880, y:430 },
  { id:"pi",    label:"π",       name:"Delivery policy",
    formula:"π: y_{1:t} ↦ s_t  ; param θ_t",
    defn:"Maps engagement history to stimulus.",
    wide:"Depends only on y_{1:t} since by (2) the platform has no direct access to u_t. Implicit belief b_t(·) = p(u_t | y_{1:t}; θ_t) is updated by Bayes; π maximizes expected R̂ under b_t.",
    cat:"platform", timescale:"T_mix", x:700, y:560 },
  { id:"f",     label:"f",       name:"Response dynamics",
    formula:"u_{t+1} = f(u_t, s_t) + ξ_t",
    defn:"User's nonlinear, register-coupled response.",
    wide:"Partially unknown to the user. The leak channel ξ_t is the only stochastic admission of anything outside the loop.",
    cat:"loop", timescale:"per-event", x:430, y:500 },
  { id:"g",     label:"g",       name:"Observation function",
    formula:"g: U → Y  (irreversible compression)",
    defn:"State-to-engagement projection.",
    wide:"Many-to-one: distinct u_t map to identical y_t. By (A1) g is measurable.",
    cat:"loop", timescale:"per-event", x:970, y:500 },
  { id:"xi",    label:"ξ_t",     name:"Process noise",
    formula:"ξ_t ~ μ(0, Σ_ξ)  zero-mean, bounded var",
    defn:"Residual variability in u_t — the leak channel.",
    wide:"The only stochastic admission of anything outside the loop. (A1): independent of u_0, mean-zero, bounded variance.",
    cat:"loop", timescale:"per-event", x:540, y:350 },
  { id:"eta",   label:"η_t",     name:"Observation noise",
    formula:"η_t ~ μ(0, σ²_η)",
    defn:"Measurement noise on y_t.",
    wide:"Baseline σ²_η is small. Mode C inflates it. Posterior contraction depends on the channel's informativeness — Blackwell-style sufficiency.",
    cat:"loop", timescale:"per-event", x:860, y:350 },
  { id:"e",     label:"e_t ≡ 0", name:"Foreclosure of exogenous channel",
    formula:"e_t ≡ 0  (eq. (6))",
    defn:"No exogenous input — definitional.",
    wide:"This is the model's architecture, not a substantive claim. The substantive claim — that no-input windows vanish on operational timescales — is Lemma 1, derived from (1)–(5).",
    cat:"foreclosure", timescale:"structural", x:700, y:235 },

  /* ── platform belief / policy ── */
  { id:"theta", label:"θ_t",     name:"Policy parameters",
    formula:"θ_{t+1} = θ_t + α · ∇̂_θ E[R̂; θ_t]",
    defn:"Predictive parameters; updated by SGA on R̂.",
    wide:"Under (A5)+(A6) converges to a local maximum θ* of E[R̂]. The Hessian is negative definite at θ*; this non-degeneracy is required for Lemma 2's implicit-function continuation.",
    cat:"platform", timescale:"T_mix", x:1010, y:560 },
  { id:"R",     label:"R̂",      name:"Reward functional",
    formula:"R̂(y_{1:T}, N_T)  non-decreasing in N_T on Op(π)",
    defn:"Empirical engagement proxy the platform optimizes.",
    wide:"Not normative — session length, revisit rate, ad-impression value, retention curves. Assumption (A2) is monotonicity in N_T over the operating support of π.",
    cat:"platform", timescale:"T_mix", x:1140, y:560 },
  { id:"alpha_l", label:"α",     name:"Learning rate",
    formula:"α  Robbins–Monro or fixed small",
    defn:"Governs SGA convergence rate.",
    wide:"Under (A5) the iterates θ_t converge to a stationary point θ*. In practice modern recommender training continuously re-reaches θ* as the data distribution shifts.",
    cat:"platform", timescale:"T_mix", x:1140, y:650 },
  { id:"bt",    label:"b_t",     name:"Platform belief",
    formula:"b_t(·) = p(u_t | y_{1:t}; θ_t)",
    defn:"Platform's posterior over u_t given engagement history.",
    wide:"H(b_t) → 0 is the dividual condition (§3.3). The four registers collapse into a single jointly-observable object as the engagement history accumulates.",
    cat:"platform", timescale:"T_mix", x:1010, y:650 },
  { id:"pi_R",  label:"π_R̂",    name:"Reward-induced distribution",
    formula:"π_R̂ over user actions — platform's 'ideal user'",
    defn:"Distribution over u_t maximizing R̂ given current obs.",
    wide:"The object ν_u converges onto under the metric superego (§3.4). Convergence is mechanism-agnostic: free-energy, operant, social comparison.",
    cat:"platform", timescale:"T_mix", x:1140, y:740 },

  /* ── user-internal ── */
  { id:"nu",    label:"ν_u",     name:"Self-evaluative distribution",
    formula:"ν_u(t) over user's own value-states",
    defn:"Reflexive estimate the user holds of themselves.",
    wide:"Under the metric superego, D_KL(ν_u‖π_R̂) → 0 as t→∞. The user comes to evaluate themselves through R̂'s implied distribution.",
    cat:"subject", timescale:"T_mix", x:390, y:560 },
  { id:"Lm",    label:"L_m",     name:"Maintenance labor",
    formula:"L_m ∈ [0, L_m,max] — metabolic budget",
    defn:"Energetic cost of preserving ν_u against the policy gradient.",
    wide:"Cohort-bounded (the user must have constructed ν_u under non-closed conditions), metabolically bounded (precarity, social reproduction), and non-generalizable (population-level analytics insensitive to individual practice).",
    cat:"subject", timescale:"T_mix", x:390, y:650 },
  { id:"LmStar", label:"L_m*",   name:"Resistance threshold",
    formula:"L_m* = r⁻¹(h_0(β_u))",
    defn:"Critical maintenance labor at which D_KL is held constant.",
    wide:"Below L_m*: ν_u contracts onto π_R̂. At or above: the gap holds. Derived in Prop. 2 as r(L_m*) = h_0(β_u) where h_0 is platform pressure and r is the user's resistance rate.",
    cat:"subject", timescale:"T_mix", x:250, y:650 },
  { id:"Fu",    label:"F_u",     name:"Variational free energy",
    formula:"F_u[ν_u; π_R̂] = D_KL(ν_u‖π_R̂) − H[ν_u]",
    defn:"User's generative-model free energy.",
    wide:"One of three mechanisms (Friston active inference) that under the operating-point linearization gives the parametric form Prop. 2 requires.",
    cat:"subject", timescale:"T_mix", x:250, y:560 },
  { id:"qu",    label:"q_u",     name:"User generative model",
    formula:"q_u ≈ posterior over s_t given u_t",
    defn:"User's variational posterior over stimuli.",
    wide:"Under active inference, the user minimizes F_u by aligning q_u with the platform's reward — one mechanism of the metric superego.",
    cat:"subject", timescale:"T_mix", x:130, y:560 },
  { id:"Dkl",   label:"D_KL",    name:"Metric superego gap",
    formula:"D_KL(ν_u(t) ‖ π_R̂) → 0",
    defn:"KL gap between user self-eval and reward-induced distribution.",
    wide:"§3.4: convergence is the structural prediction. The framework does not adjudicate the mechanism (free energy, operant, social).",
    cat:"instrument", timescale:"T_mix", x:130, y:650 },

  /* ── engagement / surplus ── */
  { id:"N",     label:"N^i_t",   name:"Counting process",
    formula:"N^i_t  — marked point process per register",
    defn:"Number of i-marked engagement events up to t.",
    wide:"Marks are inferred from content metadata, not from the user. Saccades, taps, scrolls — somatic micro-events, not deliberative choice (§3.5).",
    cat:"engagement", timescale:"per-event", x:1010, y:170 },
  { id:"lam",   label:"λ^i(t)",  name:"Hawkes intensity",
    formula:"λ^i(t) = λ_0^i + Σ_j α_{ij} ∫ κ(t−s) dN^j_s",
    defn:"Instantaneous arrival rate of N^i.",
    wide:"Self+cross-excitation. Off-diagonal α_{ij} produces the joint observability that makes the dividual condition hold.",
    cat:"engagement", timescale:"per-event", x:1140, y:170 },
  { id:"aij",   label:"α_{ij}",  name:"Cross-excitation",
    formula:"α_{ij} ≥ 0  (i, j ∈ {S,C,P,K})",
    defn:"Degree to which a j-event raises intensity of i-events.",
    wide:"Diagonal mass is autonomic. Off-diagonal mass is libidinal routing. The framework's empirical claim is that under closure, off-diagonal α_{ij} ≫ baseline.",
    cat:"engagement", timescale:"per-event", x:1270, y:170 },
  { id:"rho",   label:"ρ_i",     name:"Extraction kernel",
    formula:"ρ_i(u_{t⁻}, y_{t⁻})  predictable, bounded",
    defn:"Per-register yield per engagement event.",
    wide:"Evaluated at left-limits before each jump. Measurable and bounded by (A1). The platform's policy distributes extraction across registers to maximize long-run joint Σ.",
    cat:"engagement", timescale:"per-event", x:1010, y:100 },
  { id:"Sigma", label:"Σ(T)",    name:"Total surplus",
    formula:"Σ(T) = Σ_i ∫₀ᵀ ρ_i dN^i_t",
    defn:"Accumulated yield over horizon T.",
    wide:"Not a derivative of (1)–(4); it is the loop's purpose. Without (5) the loop is autonomic. With (5) it is libidinal-economic.",
    cat:"instrument", timescale:"per-event", x:1300, y:80 },
  { id:"SigmaI",label:"Σⁱ(T)",   name:"Per-register surplus",
    formula:"Σⁱ(T) = ∫₀ᵀ ρ_i dN^i_t",
    defn:"Yield from register i alone.",
    wide:"Optimization is constrained because extracting too aggressively on any single i causes attrition out of N^i, lowering long-run Σⁱ. (§6.3 operating-point: open question.)",
    cat:"instrument", timescale:"per-event", x:1170, y:80 },

  /* ── temporal / resonance ── */
  { id:"tau",   label:"τ_m",     name:"Inter-stimulus interval",
    formula:"τ_m  — ISI for medium m",
    defn:"Time between consecutive delivered stimuli.",
    wide:"The fundamental temporal quantity. Its survival function S(τ;t) is what Lemma 1 controls.",
    cat:"temporal", timescale:"per-event", x:230, y:770 },
  { id:"dmin",  label:"δ_min",   name:"Minimum tick latency",
    formula:"δ_min > 0  — platform tick rate",
    defn:"Minimum technical inter-stimulus latency.",
    wide:"Sets λ_max = 1/δ_min. Typically 10ms to sub-second on modern platforms.",
    cat:"temporal", timescale:"structural", x:100, y:770 },
  { id:"theta_ref", label:"θ_ref", name:"Reflective threshold",
    formula:"θ_ref > 0  — minimum no-input duration for deliberation",
    defn:"Pause duration that supports reflective processing.",
    wide:"On the order of seconds to minutes. The ratio θ_ref/δ_min is the bound's exponent — typically 10³–10⁵, making the Asmussen bound operationally indistinguishable from zero.",
    cat:"temporal", timescale:"structural", x:230, y:870 },
  { id:"lammax",label:"λ_max",   name:"Maximum event rate",
    formula:"λ_max = 1/δ_min",
    defn:"Engagement-rate ceiling.",
    wide:"At θ*, the engagement-maximizer attains λ̄ = λ_max by (A2)+(A3). Local maximality forces saturation.",
    cat:"temporal", timescale:"structural", x:100, y:870 },
  { id:"phib",  label:"φ_b",     name:"Body phase",
    formula:"dφ_b/dt = ω_b + K_{bm} sin(φ_m − φ_b)",
    defn:"Circadian / sleep-wake / attentional oscillator phase.",
    wide:"Under captured resonance, φ_b becomes a forced oscillator. K_{bm} is driven by policy timing.",
    cat:"temporal", timescale:"per-event", x:60, y:560 },
  { id:"phim",  label:"φ_m",     name:"Medium phase",
    formula:"dφ_m/dt = ω_m",
    defn:"Temporal envelope of stimulus delivery.",
    wide:"Under the policy's control. Mode A intervention can change ω_m through delivery scheduling.",
    cat:"temporal", timescale:"per-event", x:60, y:650 },
  { id:"omb",   label:"ω_b",     name:"Body frequency",
    formula:"ω_b  — intrinsic", defn:"Intrinsic oscillator frequency.",
    wide:"Determined by physiology. Mismatch with ω_m generates the detuning |ω_b−ω_m|; phase locking requires K_{bm} to exceed this.",
    cat:"temporal", timescale:"structural", x:60, y:740 },
  { id:"omm",   label:"ω_m",     name:"Medium frequency",
    formula:"ω_m  — intrinsic", defn:"Medium's intrinsic delivery frequency.",
    wide:"Under the policy's control.",
    cat:"temporal", timescale:"per-event", x:60, y:830 },
  { id:"K",     label:"K_{bm}",  name:"Coupling strength",
    formula:"K_{bm} > |ω_b − ω_m|  ⇒  phase lock",
    defn:"Body–medium coupling.",
    wide:"When this inequality holds, the body entrains to the medium — the same Kuramoto dynamic as circadian zeitgebers, here with the apparatus as zeitgeber.",
    cat:"temporal", timescale:"per-event", x:150, y:700 },

  /* ── foreclosure / negative ── */
  { id:"Etau",  label:"E_τ",     name:"No-input window event",
    formula:"E_τ := { s_{t'} = 0 for t < t' ≤ t+τ }",
    defn:"Event that no stimulus is delivered in [t, t+τ].",
    wide:"The conditioning event of Theorem 1. Its measure goes to zero as t→∞ for τ > θ_ref.",
    cat:"foreclosure", timescale:"structural", x:700, y:735 },
  { id:"S",     label:"S(τ;t)",  name:"ISI survival function",
    formula:"S(τ;t) := Pr(τ^(k) > τ | θ_t) ≤ C(c_v)·e^(−τ/δ_min)",
    defn:"Probability that the inter-stimulus interval exceeds τ.",
    wide:"Asmussen renewal bound (Applied Probability and Queues, Ch. V). Under (A1)+(A5)+(A6), S(θ_ref;t) → 0 operationally — Lemma 1.",
    cat:"foreclosure", timescale:"structural", x:560, y:805 },
  { id:"PrE",   label:"Pr(E_τ)", name:"Foreclosure measure",
    formula:"Pr(E_τ) = S(τ;t)  — vanishes for τ > θ_ref",
    defn:"Probability of a reflective-length no-input window.",
    wide:"Effectively zero on operational timescales: e^(−10³) to e^(−10⁵) under realistic θ_ref/δ_min ratios. Mode A is the only intervention that pushes this back above zero.",
    cat:"foreclosure", timescale:"structural", x:700, y:835 },
  { id:"Itau",  label:"I(τ)",    name:"Interiority autocorrelation",
    formula:"I(τ) := Cov(u_t, u_{t+τ} | E_τ)",
    defn:"Conditional autocorrelation of u over no-input windows.",
    wide:"What 'reclamation' would recover. Under Theorem 1, undefined-on-trajectory for τ > θ_ref — not zero, uninstantiated. Sample-based Î(τ) has Var ∝ 1/(N·Pr(E_τ)) and diverges.",
    cat:"instrument", timescale:"structural", x:840, y:805 },
  { id:"Hres",  label:"H_res",   name:"Residual entropy",
    formula:"H_res(σ²_η) > 0  — strictly positive under Mode C",
    defn:"Floor on platform posterior entropy.",
    wide:"Held by Mode C through inflated η_t. The dividual condition H(b_t)→0 fails when H_res is held positive.",
    cat:"instrument", timescale:"per-event", x:1010, y:240 },

  /* ── cohort / meso ── */
  { id:"mu",    label:"μ*_π",    name:"Stationary distribution",
    formula:"μ*_π  over cohort population under π",
    defn:"Limiting distribution of u_t under policy π.",
    wide:"Population-level analytics on which platform optimization runs. Mode B is invisible to this distribution.",
    cat:"cohort", timescale:"T_mix", x:1010, y:870 },
  { id:"Tmix",  label:"T_mix",   name:"Mixing time",
    formula:"T_mix(π) ≤ (1/γ_π) log(1/ε)",
    defn:"Time for cohort to converge to μ*_π.",
    wide:"Inverse of the spectral gap of P_π. On the order of months to years for engagement-monetized policies. Mode A's timescale.",
    cat:"cohort", timescale:"T_mix", x:1140, y:870 },
  { id:"ai",    label:"a_i",     name:"Age of first exposure",
    formula:"a_i  — developmental stage at first closure exposure",
    defn:"Cohort-gradient covariate (§6.1).",
    wide:"Users whose ν_u developed entirely under closed-loop conditions have γ ≈ 0 at outset — L_m* threshold inaccessible. The framework's most direct empirical prediction. Falsifiable.",
    cat:"cohort", timescale:"generational", x:1270, y:870 },
  { id:"D",     label:"D(t,τ)",  name:"Chrono-debt spectrum",
    formula:"D(t,τ) = Λ_◦(τ) − Λ(t,τ)",
    defn:"Deficit in pause-time across all scales τ.",
    wide:"A spectrum, not a number: non-zero across all τ simultaneously. Weighted aggregate D_w(t) = ∫ w(τ) D(t,τ) dτ with w(τ) ∝ τ — longer foreclosed windows count more.",
    cat:"instrument", timescale:"structural", x:1010, y:960 },
  { id:"Lam0",  label:"Λ_◦, Λ",  name:"Baseline / realized survival",
    formula:"Λ_◦(τ) pre-closure  ·  Λ(t,τ) under π",
    defn:"Survival functionals compared in D.",
    wide:"Λ_◦ retains substantial mass at long τ; Λ has vanishing mass. D = Λ_◦ − Λ is the chrono-debt at each scale.",
    cat:"cohort", timescale:"structural", x:1140, y:960 },

  /* ── assumptions ── */
  { id:"A1",    label:"A1", name:"Measurability + integrability",
    formula:"f, g measurable · ξ, η bounded var · ρ_i bounded predictable",
    defn:"Standard regularity giving bounded CoV on N_t.",
    wide:"What the Asmussen renewal-bound argument needs. Inter-arrival distribution has finite second moment relative to its mean.",
    cat:"assumption", timescale:"structural", x:160, y:50 },
  { id:"A2",    label:"A2", name:"Reward monotonicity on Op(π)",
    formula:"E[R̂ | N_T = n, π] is non-decreasing in n a.s. on Op(π)",
    defn:"R̂ rises with engagement count in the operating regime.",
    wide:"Not global monotonicity — just over the regime where π places its mass. Empirically warranted for engagement-monetized platforms.",
    cat:"assumption", timescale:"structural", x:330, y:50 },
  { id:"A3",    label:"A3", name:"Policy expressivity",
    formula:"∃ π_λ ∈ Π with λ̄(π_λ) = λ, ∀λ ∈ [0, λ_max]",
    defn:"Policy class rich enough to attain λ_max.",
    wide:"In modern transformer-based recommender architectures this is uncontroversial.",
    cat:"assumption", timescale:"structural", x:500, y:50 },
  { id:"A4",    label:"A4", name:"User response",
    formula:"∃ p₀ > 0 : Pr(dN_{t+1} ≥ 1 | s_t ≠ 0) ≥ p₀",
    defn:"Non-zero stimulus elicits engagement with positive prob.",
    wide:"Population-level. Fails for users who systematically ignore stimuli — Mode B is the analysis of this failure.",
    cat:"assumption", timescale:"structural", x:670, y:50 },
  { id:"A5",    label:"A5", name:"Gradient convergence",
    formula:"θ_t → θ*  stationary point of E[R̂; θ]",
    defn:"SGA converges under Robbins–Monro.",
    wide:"In typical platform deployments, training operates at scales where this convergence is reached and re-reached continuously.",
    cat:"assumption", timescale:"structural", x:840, y:50 },
  { id:"A6",    label:"A6", name:"Local smoothness + isolation",
    formula:"F, B ∈ C¹ on Θ ; θ* isolated, ∇²F(θ*) ≺ 0",
    defn:"Non-degenerate Hessian at θ*.",
    wide:"Lets the implicit function theorem apply to Lemma 2 and to the parametric continuity of Prop. 1.",
    cat:"assumption", timescale:"structural", x:1010, y:50 },

  /* ── theorems / propositions ── */
  { id:"L1",    label:"Lemma 1", name:"Foreclosure of the no-input window",
    formula:"lim_{t→∞} S(θ_ref; t) = 0",
    defn:"Conditioning event vanishes for τ > θ_ref.",
    wide:"Proof: (A2)+(A3)+(A5)+(A6) give λ̄(θ*) = λ_max; (A1) gives Asmussen exponential tail bound; substitute to get S(θ_ref;θ*) ≤ C·e^(−θ_ref/δ_min), operationally ≈ 0.",
    cat:"theorem", timescale:"structural", x:380, y:1020 },
  { id:"T1",    label:"Theorem 1", name:"Reclamation theorem",
    formula:"I(τ) undefined-on-trajectory for τ > θ_ref",
    defn:"What 'reclamation' would recover names an empty set.",
    wide:"Step 1: define interiority component via law of total covariance. Step 2: conditional expectation on a measure-zero event is non-canonical; sample-based variance diverges as Pr(E_τ)→0. Step 3: Lemma 1 makes that conditioning event vanish.",
    cat:"theorem", timescale:"structural", x:700, y:1020 },
  { id:"L2",    label:"Lemma 2", name:"Parametric continuity",
    formula:"β ↦ θ̃(β) continuous; B(θ̃(β)) ↗",
    defn:"Regularized optimum varies smoothly with β.",
    wide:"Implicit function theorem under (A6). Strict-growth from ∇B(θ*) ≠ 0 (B and F have distinct extremizers). Required for Prop. 1's IVT argument.",
    cat:"theorem", timescale:"structural", x:1020, y:1020 },
  { id:"P1",    label:"Prop 1", name:"Mode A breaks foreclosure",
    formula:"∃ β_ε : P(β_ε) ≥ ε > 0",
    defn:"Mode A is the only mode that breaks Lemma 1.",
    wide:"P(0) ≈ 0 (Lemma 1); sup P(β) > 0 (Lemma 2 strict growth); P continuous → IVT recovers any ε ∈ (0, ε_max).",
    cat:"theorem", timescale:"structural", x:200, y:1020 },
  { id:"P2",    label:"Prop 2", name:"Mode B preserves a gap",
    formula:"L_m ≥ L_m*  ⇒  D_KL(ν_u‖π_R̂) ≥ γ > 0",
    defn:"Artisanal labor preserves D_KL but does not break Lemma 1.",
    wide:"dD_KL/dt = −h_0(β_u) + r(L_m). At L_m*, rates balance. Lemma 1 unchanged because the closed loop's policy update does not depend on ν_u directly.",
    cat:"theorem", timescale:"structural", x:540, y:1020 },
  { id:"P3",    label:"Prop 3", name:"Mode C bounds Σ(T)",
    formula:"E[R̂; θ*(σ²_η)] < E[R̂; θ*(σ²_η,0)]",
    defn:"Disrupted observation bounds yield; Lemma 1 unchanged.",
    wide:"By Blackwell sufficiency: a noisier channel is informationally weaker. The policy still gradient-ascends; π still concentrates τ near δ_min.",
    cat:"theorem", timescale:"structural", x:860, y:1020 },

  /* ── modes (interventions) ── */
  { id:"MA",    label:"Mode A", name:"Architectural intervention",
    formula:"R̂' = R̂ + β · E[Σ_k b(τ^(k))]",
    defn:"Modify policy/reward — breaks Lemma 1.",
    wide:"The only mode that breaks the foreclosure. Operates on T_mix(π'). Antagonistic to engagement reward; voluntary adoption violates (A2).",
    cat:"mode", timescale:"T_mix", x:1380, y:560 },
  { id:"MB",    label:"Mode B", name:"Artisanal intervention",
    formula:"L_m ≥ L_m* = r⁻¹(h_0(β_u))",
    defn:"Maintenance labor on the user side.",
    wide:"Cohort-bounded, metabolically bounded, non-generalizable. Preserves D_KL on a parallel structure; Lemma 1 unchanged. The policy may intensify in response — foreclosure can strengthen.",
    cat:"mode", timescale:"T_mix", x:380, y:730 },
  { id:"MC",    label:"Mode C", name:"Disruption-as-form",
    formula:"Var(η_t) ≥ σ²_η > σ²_η,0",
    defn:"Inflate observation noise — refuse legibility.",
    wide:"Bounds Σ(T) by reducing I(u_t; y_t). Holds H_res > 0. Without architectural pressure, becomes a politics of refusal that is structurally legible as opposition — decoration.",
    cat:"mode", timescale:"per-event", x:1380, y:240 },
];

/* ════════════════ EDGES ════════════════
 * type:
 *   produces       — A produces B in an equation
 *   enters         — A is an input to B
 *   parameterizes  — A parameterizes B
 *   compresses-to  — irreversible projection
 *   forecloses     — A → B vanishes
 *   defines        — A is part of the definition of B
 *   assumes        — theorem T uses assumption A
 *   intervenes     — Mode M acts on N
 *   converges-to   — A → B in the limit
 *   couples        — phase / mutual influence
 *   concludes      — theorem T concludes node N
 *   blocks         — Mode M blocks edge (rendered as cross)
 */
const EDGES = [
  /* the four-step closed loop — eqs (1)–(4) */
  { from:"u",  to:"y",  type:"compresses-to", label:"(2) y=g(u)+η", inLoop:true },
  { from:"y",  to:"pi", type:"enters",        label:"(3) π(y_{1:t})", inLoop:true },
  { from:"pi", to:"s",  type:"produces",      label:"(3) s_t", inLoop:true },
  { from:"s",  to:"u",  type:"produces",      label:"(1) f(u,s)+ξ", inLoop:true },

  /* register decomposition */
  { from:"u", to:"regs", type:"defines" },

  /* loop internals */
  { from:"f",   to:"u",  type:"produces" },
  { from:"g",   to:"y",  type:"produces" },
  { from:"xi",  to:"u",  type:"enters", label:"leak" },
  { from:"eta", to:"y",  type:"enters" },
  { from:"e",   to:"s",  type:"forecloses", label:"e_t ≡ 0" },

  /* platform */
  { from:"theta", to:"pi", type:"parameterizes" },
  { from:"R",     to:"theta", type:"enters", label:"(4) ∇R̂" },
  { from:"alpha_l", to:"theta", type:"parameterizes", label:"rate" },
  { from:"y",    to:"bt", type:"enters", label:"Bayes" },
  { from:"theta", to:"bt", type:"parameterizes" },
  { from:"R",    to:"pi_R", type:"defines" },
  { from:"theta", to:"pi_R", type:"parameterizes" },

  /* engagement / surplus */
  { from:"u", to:"N",  type:"enters", label:"events" },
  { from:"aij", to:"lam", type:"defines" },
  { from:"N",   to:"lam", type:"defines" },
  { from:"lam", to:"N",   type:"defines", label:"intensity" },
  { from:"rho", to:"SigmaI", type:"defines" },
  { from:"N",   to:"SigmaI", type:"defines" },
  { from:"SigmaI", to:"Sigma", type:"defines", label:"Σ_i" },

  /* user-internal */
  { from:"R",  to:"pi_R", type:"defines" },
  { from:"pi_R", to:"nu", type:"converges-to", label:"D_KL → 0" },
  { from:"Lm", to:"nu", type:"enters", label:"resists" },
  { from:"Fu", to:"nu", type:"enters" },
  { from:"qu", to:"Fu", type:"defines" },
  { from:"nu", to:"Dkl", type:"defines" },
  { from:"pi_R", to:"Dkl", type:"defines" },
  { from:"LmStar", to:"Lm", type:"defines", label:"threshold" },

  /* temporal */
  { from:"s",   to:"tau", type:"defines" },
  { from:"dmin", to:"lammax", type:"defines", label:"λ_max=1/δ_min" },
  { from:"tau", to:"S",   type:"defines" },
  { from:"theta_ref", to:"S", type:"enters", label:"threshold" },
  { from:"S",   to:"PrE", type:"defines" },
  { from:"PrE", to:"Etau", type:"defines" },

  /* foreclosure → Theorem 1 */
  { from:"e",   to:"PrE", type:"forecloses", label:"vanishes" },
  { from:"PrE", to:"Itau", type:"forecloses", label:"undefines" },
  { from:"Etau", to:"Itau", type:"defines", label:"cond on" },

  /* Kuramoto / captured resonance */
  { from:"omb", to:"phib", type:"defines" },
  { from:"omm", to:"phim", type:"defines" },
  { from:"K",   to:"phib", type:"couples" },
  { from:"phim", to:"phib", type:"couples", label:"forcing" },
  { from:"pi",  to:"phim", type:"enters", label:"timing" },
  { from:"K",   to:"u",   type:"couples" },

  /* cohort / meso */
  { from:"pi", to:"mu",  type:"defines", label:"stationary" },
  { from:"mu", to:"Tmix", type:"defines", label:"spectral gap" },
  { from:"ai", to:"nu",  type:"enters", label:"developmental ν_u(0)" },
  { from:"S",   to:"Lam0", type:"defines" },
  { from:"Lam0", to:"D",   type:"defines" },

  /* H_res derived from η under Mode C */
  { from:"eta", to:"Hres", type:"defines" },
  { from:"Hres", to:"bt", type:"forecloses", label:"floor" },

  /* assumptions → Lemma 1 */
  { from:"A1", to:"L1", type:"assumes" },
  { from:"A2", to:"L1", type:"assumes" },
  { from:"A3", to:"L1", type:"assumes" },
  { from:"A4", to:"L1", type:"assumes" },
  { from:"A5", to:"L1", type:"assumes" },
  { from:"A6", to:"L1", type:"assumes" },
  /* Lemma 1 → Theorem 1 */
  { from:"L1", to:"T1", type:"concludes" },
  { from:"T1", to:"Itau", type:"concludes", label:"undefines I(τ)" },
  /* Lemma 2 → Prop 1 → Mode A breaks Lemma 1 */
  { from:"A6", to:"L2", type:"assumes" },
  { from:"L2", to:"P1", type:"assumes" },
  { from:"P1", to:"MA", type:"concludes" },
  { from:"MA", to:"L1", type:"blocks", label:"breaks" },
  /* Prop 2 → Mode B preserves D_KL */
  { from:"P2", to:"MB", type:"concludes" },
  { from:"MB", to:"Lm", type:"intervenes" },
  { from:"MB", to:"nu", type:"intervenes" },
  /* Prop 3 → Mode C bounds Σ */
  { from:"P3", to:"MC", type:"concludes" },
  { from:"MC", to:"eta", type:"intervenes" },
  { from:"MC", to:"Sigma", type:"forecloses", label:"bounds" },
];

/* ════════════════ STYLE HELPERS ════════════════ */
const CAT_COLOR = {
  loop:        { fill:"#f3efe7", stroke:"#1a1814", text:"#1a1814" },
  platform:    { fill:"#ece7dc", stroke:"#1a1814", text:"#1a1814" },
  subject:     { fill:"#ece7dc", stroke:"#1a1814", text:"#1a1814" },
  engagement:  { fill:"#f3efe7", stroke:"oklch(0.46 0.12 35)", text:"#1a1814" },
  temporal:    { fill:"#f3efe7", stroke:"#3b362d", text:"#1a1814" },
  foreclosure: { fill:"#1a1814", stroke:"oklch(0.62 0.10 35)", text:"#f3efe7" },
  cohort:      { fill:"#ece7dc", stroke:"#3b362d", text:"#1a1814" },
  instrument:  { fill:"#f3efe7", stroke:"oklch(0.46 0.12 35)", text:"#1a1814" },
  assumption:  { fill:"#f3efe7", stroke:"#1a1814", text:"#1a1814" },
  theorem:     { fill:"#1a1814", stroke:"#1a1814", text:"#f3efe7" },
  mode:        { fill:"oklch(0.46 0.12 35)", stroke:"oklch(0.46 0.12 35)", text:"#f3efe7" },
};
const EDGE_STYLE = {
  "produces":      { stroke:"#1a1814", width:1.6, dash:"" },
  "enters":        { stroke:"#3b362d", width:1, dash:"" },
  "parameterizes": { stroke:"#3b362d", width:1, dash:"4 3" },
  "compresses-to": { stroke:"#1a1814", width:1.6, dash:"" },
  "forecloses":    { stroke:"oklch(0.46 0.12 35)", width:1.6, dash:"5 3" },
  "defines":       { stroke:"#6b6457", width:0.9, dash:"" },
  "assumes":       { stroke:"#6b6457", width:0.9, dash:"2 3" },
  "intervenes":    { stroke:"oklch(0.46 0.12 35)", width:1.6, dash:"" },
  "converges-to":  { stroke:"#3b362d", width:1.4, dash:"6 3" },
  "couples":       { stroke:"#3b362d", width:1.2, dash:"3 3" },
  "concludes":     { stroke:"#1a1814", width:1.6, dash:"" },
  "blocks":        { stroke:"oklch(0.46 0.12 35)", width:2, dash:"" },
};

/* node geometry by category */
function nodeBox(n) {
  if (n.cat === "assumption") return { w: 120, h: 38, rx: 19 };
  if (n.cat === "theorem")    return { w: 160, h: 46, rx: 2 };
  if (n.cat === "mode")       return { w: 130, h: 60, rx: 30 };
  if (n.cat === "foreclosure"&& n.id === "e") return { w: 130, h: 44, rx: 2 };
  if (n.cat === "instrument") return { w: 130, h: 50, rx: 2 };
  return { w: 120, h: 50, rx: 2 };
}

/* ════════════════ QUERY ENGINE ════════════════ */
function trace(direction, seedId) {
  const visited = new Set([seedId]);
  const litEdges = new Set();
  let frontier = [seedId];
  while (frontier.length) {
    const next = [];
    for (const f of frontier) {
      for (const e of EDGES) {
        const isOut = direction === "forward"  && e.from === f;
        const isIn  = direction === "backward" && e.to   === f;
        if (isOut || isIn) {
          litEdges.add(e);
          const other = isOut ? e.to : e.from;
          if (!visited.has(other)) {
            visited.add(other);
            next.push(other);
          }
        }
      }
    }
    frontier = next;
  }
  return { nodes: visited, edges: litEdges };
}

function loopCycleHighlight() {
  const litEdges = new Set(EDGES.filter(e => e.inLoop));
  const nodes = new Set();
  for (const e of litEdges) { nodes.add(e.from); nodes.add(e.to); }
  return { nodes, edges: litEdges };
}
function interventionHighlight() {
  const litEdges = new Set(EDGES.filter(e => e.type === "intervenes" || e.type === "blocks"));
  const nodes = new Set(["MA","MB","MC"]);
  for (const e of litEdges) { nodes.add(e.from); nodes.add(e.to); }
  /* also add the concludes from Props to Modes for context */
  for (const e of EDGES) {
    if (e.type==="concludes" && ["MA","MB","MC"].includes(e.to)) {
      litEdges.add(e); nodes.add(e.from); nodes.add(e.to);
    }
  }
  return { nodes, edges: litEdges };
}
function assumptionsOf(theoremId) {
  /* backward trace restricted to "assumes" and "concludes" relations */
  const visited = new Set([theoremId]);
  const litEdges = new Set();
  let frontier = [theoremId];
  while (frontier.length) {
    const next = [];
    for (const f of frontier) {
      for (const e of EDGES) {
        if (e.to === f && (e.type === "assumes" || e.type === "concludes")) {
          litEdges.add(e);
          if (!visited.has(e.from)) { visited.add(e.from); next.push(e.from); }
        }
      }
    }
    frontier = next;
  }
  return { nodes: visited, edges: litEdges };
}

/* ════════════════ COMPONENT ════════════════ */
function MindMap() {
  const [mode, setMode] = useState("browse");   /* browse | causes | consequences | loop | interventions | assumptions | timescales */
  const [selected, setSelected] = useState(null);
  const [hover, setHover] = useState(null);

  const highlight = useMemo(() => {
    if (mode === "loop") return loopCycleHighlight();
    if (mode === "interventions") return interventionHighlight();
    if (mode === "causes" && selected) return trace("backward", selected);
    if (mode === "consequences" && selected) return trace("forward", selected);
    if (mode === "assumptions" && selected) return assumptionsOf(selected);
    return null;
  }, [mode, selected]);

  const inSet = (set, id) => set ? set.has(id) : false;

  const sel = selected ? NODES.find(n => n.id === selected) : null;
  const inEdges = sel ? EDGES.filter(e => e.to === sel.id) : [];
  const outEdges = sel ? EDGES.filter(e => e.from === sel.id) : [];

  return (
    <div className="mm-app">
      <header className="mm-mast">
        <div>
          <div className="eyebrow">A standalone mind-map of the theoretical apparatus</div>
          <h1>The Closed-Loop Libidinal Economy <em>— relational atlas</em></h1>
          <div className="sub">
            Every variable, assumption, theorem, instrument, and intervention as a node.
            Every formal relation as an edge. Use the modes below to interrogate the causal chains.
          </div>
        </div>
        <div className="byline">A. Selimović<span>— relational atlas</span></div>
      </header>

      <div className="mm-controls">
        <div className="mm-mode-group">
          <span className="mm-mode-lab">QUERY</span>
          <ModeBtn cur={mode} val="browse"        setMode={setMode} label="Browse"/>
          <ModeBtn cur={mode} val="causes"        setMode={setMode} label="Causes of ◆"/>
          <ModeBtn cur={mode} val="consequences"  setMode={setMode} label="Consequences of ◆"/>
          <ModeBtn cur={mode} val="loop"          setMode={setMode} label="The closed loop"/>
          <ModeBtn cur={mode} val="interventions" setMode={setMode} label="Intervention points"/>
          <ModeBtn cur={mode} val="assumptions"   setMode={setMode} label="Assumptions of ◆"/>
          <ModeBtn cur={mode} val="timescales"    setMode={setMode} label="Timescales"/>
        </div>
        <div className="mm-mode-hint">
          {mode === "browse" && "Click any node to inspect. Hover for tooltip."}
          {mode === "causes" && (selected ? `Backward BFS from ${sel.label}. All nodes whose causal closure reaches ◆.` : "Click a node to seed the backward trace.")}
          {mode === "consequences" && (selected ? `Forward BFS from ${sel.label}. All nodes affected by ◆.` : "Click a node to seed the forward trace.")}
          {mode === "loop" && "The four edges constituting the closed loop (1)–(4); the contour the rest of the model rotates around."}
          {mode === "interventions" && "Where each Mode acts. Mode A blocks the L1 chain at its source. Modes B and C act on parallel structures."}
          {mode === "assumptions" && (selected ? `What ${sel.label} formally depends on, traced through the proof structure.` : "Click a theorem, lemma, or proposition.")}
          {mode === "timescales" && "Color by characteristic timescale: per-event · T_mix · generational · structural."}
        </div>
      </div>

      <div className="mm-canvas-wrap">
        <svg className="mm-svg" viewBox="0 0 1500 1100">
          <defs>
            {Object.entries(EDGE_STYLE).map(([k, s]) => (
              <marker key={k} id={`mm-arr-${k.replace(/[^a-z]/g,"")}`}
                viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={s.stroke}/>
              </marker>
            ))}
            <marker id="mm-arr-dim"
              viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#cdc6b6"/>
            </marker>
          </defs>

          {/* domain regions (subtle backgrounds) */}
          <Region label="Assumptions (A1–A6)" x={70} y={20} w={1040} h={70}/>
          <Region label="Theorems · Lemmas · Propositions" x={100} y={985} w={920} h={80}/>
          <Region label="Engagement · Surplus" x={930} y={45} w={420} h={210}/>
          <Region label="User-internal" x={50} y={520} w={400} h={170}/>
          <Region label="Platform" x={960} y={520} w={240} h={250}/>
          <Region label="Cohort · Meso" x={950} y={830} w={400} h={170}/>
          <Region label="Temporal · Resonance" x={20} y={700} w={310} h={210}/>
          <Region label="Foreclosure · Negative" x={500} y={700} w={400} h={170}/>
          <Region label="Closed loop" x={460} y={305} w={550} h={290}/>

          {/* edges */}
          {EDGES.map((e, i) => {
            const a = NODES.find(n => n.id === e.from);
            const b = NODES.find(n => n.id === e.to);
            if (!a || !b) return null;
            const dimmed = highlight && !highlight.edges.has(e);
            const lit = highlight && highlight.edges.has(e);
            return <Edge key={i} a={a} b={b} edge={e} dimmed={dimmed} lit={lit}/>;
          })}

          {/* nodes */}
          {NODES.map(n => {
            const dimmed = highlight && !highlight.nodes.has(n.id);
            const lit = highlight && highlight.nodes.has(n.id);
            return (
              <Node key={n.id} n={n}
                selected={selected === n.id}
                hovered={hover === n.id}
                dimmed={dimmed} lit={lit}
                timescaleMode={mode === "timescales"}
                onClick={() => setSelected(n.id)}
                onEnter={() => setHover(n.id)}
                onLeave={() => setHover(null)}/>
            );
          })}
        </svg>

        <aside className="mm-side">
          {sel ? (
            <NodeDetail n={sel} inEdges={inEdges} outEdges={outEdges}/>
          ) : (
            <div className="mm-side-empty">
              <div className="card-title">SELECT A NODE</div>
              <div className="card-sub" style={{marginTop:8}}>
                Click any object in the atlas to read its formal definition, see what it depends on, and what depends on it.
                Then switch to <em>Causes</em> or <em>Consequences</em> to see the trace.
              </div>
              <Legend/>
            </div>
          )}
        </aside>
      </div>

      <footer className="mm-foot">
        <span>relational atlas — closed-loop libidinal economy</span>
        <span>{NODES.length} nodes · {EDGES.length} edges · 6 assumptions · 3 modes</span>
      </footer>
    </div>
  );
}

function ModeBtn({ cur, val, setMode, label }) {
  return (
    <button className={`mm-mode ${cur===val?"on":""}`} onClick={()=>setMode(val)}>{label}</button>
  );
}

function Region({ x, y, w, h, label }) {
  return (
    <g className="mm-region">
      <rect x={x} y={y} width={w} height={h} fill="rgba(180,170,150,0.07)" stroke="rgba(180,170,150,0.35)" strokeDasharray="2 4"/>
      <text x={x+8} y={y+14} fontFamily="var(--mono)" fontSize="9" letterSpacing="2" fill="#948c7d">{label.toUpperCase()}</text>
    </g>
  );
}

function Node({ n, selected, hovered, dimmed, lit, timescaleMode, onClick, onEnter, onLeave }) {
  const box = nodeBox(n);
  const x = n.x - box.w/2;
  const y = n.y - box.h/2;
  const baseColor = CAT_COLOR[n.cat] || CAT_COLOR.loop;
  let fill = baseColor.fill, stroke = baseColor.stroke, text = baseColor.text;
  if (timescaleMode) {
    const c = {
      "per-event":   "oklch(0.92 0.04 35)",
      "T_mix":       "oklch(0.88 0.05 230)",
      "generational":"oklch(0.85 0.06 145)",
      "structural":  "#ece7dc",
    }[n.timescale];
    fill = c; stroke = "#1a1814"; text = "#1a1814";
  }
  const opacity = dimmed ? 0.18 : 1;
  const sw = (selected || lit) ? 2.2 : (hovered ? 1.6 : 1);

  return (
    <g onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave}
       style={{cursor:"pointer", opacity}}>
      <rect x={x} y={y} width={box.w} height={box.h} rx={box.rx}
        fill={fill} stroke={stroke} strokeWidth={sw}/>
      <text x={n.x} y={n.y - 2} textAnchor="middle"
        fontFamily="var(--mono)" fontSize="12" fill={text} fontWeight="600">{n.label}</text>
      <text x={n.x} y={n.y + 13} textAnchor="middle"
        fontFamily="var(--serif)" fontStyle="italic" fontSize="10.5"
        fill={text === "#f3efe7" ? "rgba(243,239,231,0.7)" : "#6b6457"}>{n.name}</text>
      {hovered && (
        <g>
          <rect x={x} y={y + box.h + 6} width={Math.max(box.w, 220)} height="36"
            fill="#1a1814" stroke="oklch(0.46 0.12 35)" strokeWidth="1"/>
          <text x={x + 8} y={y + box.h + 20}
            fontFamily="var(--mono)" fontSize="9.5" fill="rgba(243,239,231,0.7)" letterSpacing="1">
            {n.formula.slice(0, 36)}
          </text>
          <text x={x + 8} y={y + box.h + 34}
            fontFamily="var(--serif)" fontStyle="italic" fontSize="10.5" fill="#f3efe7">
            {n.defn.slice(0, 50)}
          </text>
        </g>
      )}
    </g>
  );
}

function Edge({ a, b, edge, dimmed, lit }) {
  const style = EDGE_STYLE[edge.type] || EDGE_STYLE.enters;
  const ax = a.x, ay = a.y, bx = b.x, by = b.y;
  /* shorten to box edge */
  const aBox = nodeBox(a), bBox = nodeBox(b);
  const dx = bx - ax, dy = by - ay;
  const len = Math.max(1, Math.hypot(dx, dy));
  const ux = dx/len, uy = dy/len;
  /* approximate exit from rectangle */
  const exitOffset = (box, sign) => {
    const hx = box.w/2 + 4, hy = box.h/2 + 4;
    const t = Math.min(hx / Math.abs(sign*ux || 1e-6), hy / Math.abs(sign*uy || 1e-6));
    return t;
  };
  const tA = exitOffset(aBox, 1);
  const tB = exitOffset(bBox, 1);
  const sx = ax + ux * tA, sy = ay + uy * tA;
  const ex = bx - ux * tB, ey = by - uy * tB;
  const mx = (sx + ex)/2 + uy * 18;
  const my = (sy + ey)/2 - ux * 18;
  /* curved path */
  const d = `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`;
  const markerId = `mm-arr-${edge.type.replace(/[^a-z]/g,"")}`;
  const op = dimmed ? 0.10 : 1;

  return (
    <g style={{opacity: op}}>
      <path d={d} fill="none"
        stroke={style.stroke}
        strokeWidth={(lit ? style.width + 0.8 : style.width)}
        strokeDasharray={style.dash}
        markerEnd={`url(#${markerId})`}/>
      {edge.type === "blocks" && (
        <g transform={`translate(${mx}, ${my})`}>
          <line x1="-10" y1="-10" x2="10" y2="10" stroke={style.stroke} strokeWidth="3"/>
          <line x1="-10" y1="10" x2="10" y2="-10" stroke={style.stroke} strokeWidth="3"/>
        </g>
      )}
      {edge.label && (lit || (!dimmed)) && (
        <text x={mx} y={my-3} textAnchor="middle"
          fontFamily="var(--mono)" fontSize="9" letterSpacing="0.5"
          fill={lit ? style.stroke : "#948c7d"}
          opacity={lit ? 0.95 : 0.6}>{edge.label}</text>
      )}
    </g>
  );
}

function NodeDetail({ n, inEdges, outEdges }) {
  const cat = CAT_COLOR[n.cat] || CAT_COLOR.loop;
  return (
    <div className="mm-detail">
      <div className="mm-pill" style={{background:cat.fill, color:cat.text, borderColor:cat.stroke}}>
        {n.cat.toUpperCase()}
      </div>
      <div className="mm-detail-label">{n.label}</div>
      <div className="mm-detail-name">{n.name}</div>
      <div className="mm-detail-formula">{n.formula}</div>
      <div className="mm-detail-defn">{n.defn}</div>
      <div className="mm-detail-wide">{n.wide}</div>

      <div className="mm-detail-block">
        <div className="micro">DEPENDS ON ({inEdges.length})</div>
        <ul className="mm-edge-list">
          {inEdges.length === 0 ? <li><em>nothing in the model</em></li> :
            inEdges.map((e, i) => {
              const src = NODES.find(n => n.id === e.from);
              return <li key={i}><span className="mm-rel">{e.type}</span> <b>{src.label}</b> <span className="mm-rname">{src.name}</span></li>;
            })}
        </ul>
      </div>

      <div className="mm-detail-block">
        <div className="micro">DETERMINES ({outEdges.length})</div>
        <ul className="mm-edge-list">
          {outEdges.length === 0 ? <li><em>terminal</em></li> :
            outEdges.map((e, i) => {
              const dst = NODES.find(n => n.id === e.to);
              return <li key={i}><span className="mm-rel">{e.type}</span> <b>{dst.label}</b> <span className="mm-rname">{dst.name}</span></li>;
            })}
        </ul>
      </div>

      <div className="mm-detail-block">
        <div className="micro">CHARACTERISTIC TIMESCALE</div>
        <div className="mm-ts">{n.timescale}</div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="mm-legend">
      <div className="micro" style={{marginTop:14}}>EDGE RELATIONS</div>
      <ul className="mm-legend-list">
        {Object.entries(EDGE_STYLE).map(([k, s]) => (
          <li key={k}>
            <svg width="42" height="10"><line x1="2" y1="5" x2="40" y2="5"
              stroke={s.stroke} strokeWidth={s.width} strokeDasharray={s.dash}/></svg>
            <span>{k}</span>
          </li>
        ))}
      </ul>
      <div className="micro" style={{marginTop:14}}>NODE CATEGORIES</div>
      <ul className="mm-legend-list">
        {["loop","platform","subject","engagement","temporal","foreclosure","cohort","instrument","assumption","theorem","mode"].map(k=>{
          const c = CAT_COLOR[k];
          return (
            <li key={k}>
              <span className="mm-sw" style={{background:c.fill, border:`1.5px solid ${c.stroke}`}}/>
              <span>{k}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MindMap/>);
