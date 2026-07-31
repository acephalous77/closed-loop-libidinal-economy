var { useState, useMemo } = React;
var NODES = [
  /* ── core loop ── */
  {
    id: "u",
    label: "u_t",
    name: "User state",
    formula: "u_t = (u\u02E2, u\u1D9C, u\u1D56, u\u1D4F)",
    defn: "State vector in U; decomposed into four registers.",
    wide: "Four channels of address, in place of a self \u2014 Subject, Citizen, Person, Consumer \u2014 that the historical apparatus once split across school/press/church/marketplace and that the closed loop now routes through a single delivery surface.",
    cat: "loop",
    timescale: "per-event",
    x: 700,
    y: 430
  },
  {
    id: "regs",
    label: "u\u02E2 u\u1D9C u\u1D56 u\u1D4F",
    name: "Four registers",
    formula: "u_t \u2208 U, dim = 4 channels of address",
    defn: "Subject, Citizen, Person, Consumer.",
    wide: "Each register is a measurable sub-state of u_t. Libidinal routing (\xA73.3) is the claim that mutual information across registers under stationary \u03BC*_\u03C0 exceeds the pre-closure baseline.",
    cat: "loop",
    timescale: "per-event",
    x: 700,
    y: 340
  },
  {
    id: "s",
    label: "s_t",
    name: "Stimulus",
    formula: "s_t = \u03C0(y_{1:t}; \u03B8_t)",
    defn: "Stimulus delivered to user at time t.",
    wide: "Policy-shaped delivery. Continuous-time but supported on a tick grid of width \u03B4_min.",
    cat: "loop",
    timescale: "per-event",
    x: 520,
    y: 430
  },
  {
    id: "y",
    label: "y_t",
    name: "Engagement signal",
    formula: "y_t = g(u_t) + \u03B7_t",
    defn: "Behavioral output observed by the platform.",
    wide: "Tuple of measurable behaviors: taps, scrolls, watch-time, gaze. The compression g is irreversible \u2014 distinct internal states can produce identical y_t. This irreversibility is the precondition for optimization.",
    cat: "loop",
    timescale: "per-event",
    x: 880,
    y: 430
  },
  {
    id: "pi",
    label: "\u03C0",
    name: "Delivery policy",
    formula: "\u03C0: y_{1:t} \u21A6 s_t  ; param \u03B8_t",
    defn: "Maps engagement history to stimulus.",
    wide: "Depends only on y_{1:t} since by (2) the platform has no direct access to u_t. Implicit belief b_t(\xB7) = p(u_t | y_{1:t}; \u03B8_t) is updated by Bayes; \u03C0 maximizes expected R\u0302 under b_t.",
    cat: "platform",
    timescale: "T_mix",
    x: 700,
    y: 560
  },
  {
    id: "f",
    label: "f",
    name: "Response dynamics",
    formula: "u_{t+1} = f(u_t, s_t) + \u03BE_t",
    defn: "User's nonlinear, register-coupled response.",
    wide: "Partially unknown to the user. The leak channel \u03BE_t is the only stochastic admission of anything outside the loop.",
    cat: "loop",
    timescale: "per-event",
    x: 430,
    y: 500
  },
  {
    id: "g",
    label: "g",
    name: "Observation function",
    formula: "g: U \u2192 Y  (irreversible compression)",
    defn: "State-to-engagement projection.",
    wide: "Many-to-one: distinct u_t map to identical y_t. By (A1) g is measurable.",
    cat: "loop",
    timescale: "per-event",
    x: 970,
    y: 500
  },
  {
    id: "xi",
    label: "\u03BE_t",
    name: "Process noise",
    formula: "\u03BE_t ~ \u03BC(0, \u03A3_\u03BE)  zero-mean, bounded var",
    defn: "Residual variability in u_t \u2014 the leak channel.",
    wide: "The only stochastic admission of anything outside the loop. (A1): independent of u_0, mean-zero, bounded variance.",
    cat: "loop",
    timescale: "per-event",
    x: 540,
    y: 350
  },
  {
    id: "eta",
    label: "\u03B7_t",
    name: "Observation noise",
    formula: "\u03B7_t ~ \u03BC(0, \u03C3\xB2_\u03B7)",
    defn: "Measurement noise on y_t.",
    wide: "Baseline \u03C3\xB2_\u03B7 is small. Mode C inflates it. Posterior contraction depends on the channel's informativeness \u2014 Blackwell-style sufficiency.",
    cat: "loop",
    timescale: "per-event",
    x: 860,
    y: 350
  },
  {
    id: "e",
    label: "e_t \u2261 0",
    name: "Foreclosure of exogenous channel",
    formula: "e_t \u2261 0  (eq. (6))",
    defn: "No exogenous input \u2014 definitional.",
    wide: "This is the model's architecture. The substantive claim \u2014 that no-input windows vanish on operational timescales \u2014 is Lemma 1, derived from (1)\u2013(5).",
    cat: "foreclosure",
    timescale: "structural",
    x: 700,
    y: 235
  },
  /* ── platform belief / policy ── */
  {
    id: "theta",
    label: "\u03B8_t",
    name: "Policy parameters",
    formula: "\u03B8_{t+1} = \u03B8_t + \u03B1 \xB7 \u2207\u0302_\u03B8 E[R\u0302; \u03B8_t]",
    defn: "Predictive parameters; updated by SGA on R\u0302.",
    wide: "Under (A5)+(A6) converges to a local maximum \u03B8* of E[R\u0302]. The Hessian is negative definite at \u03B8*; this non-degeneracy is required for Lemma 2's implicit-function continuation.",
    cat: "platform",
    timescale: "T_mix",
    x: 1010,
    y: 560
  },
  {
    id: "R",
    label: "R\u0302",
    name: "Reward functional",
    formula: "R\u0302(y_{1:T}, N_T)  non-decreasing in N_T on Op(\u03C0)",
    defn: "Empirical engagement proxy the platform optimizes.",
    wide: "Not normative \u2014 session length, revisit rate, ad-impression value, retention curves. Assumption (A2) is monotonicity in N_T over the operating support of \u03C0.",
    cat: "platform",
    timescale: "T_mix",
    x: 1140,
    y: 560
  },
  {
    id: "alpha_l",
    label: "\u03B1",
    name: "Learning rate",
    formula: "\u03B1  Robbins\u2013Monro or fixed small",
    defn: "Governs SGA convergence rate.",
    wide: "Under (A5) the iterates \u03B8_t converge to a stationary point \u03B8*. In practice modern recommender training continuously re-reaches \u03B8* as the data distribution shifts.",
    cat: "platform",
    timescale: "T_mix",
    x: 1140,
    y: 650
  },
  {
    id: "bt",
    label: "b_t",
    name: "Platform belief",
    formula: "b_t(\xB7) = p(u_t | y_{1:t}; \u03B8_t)",
    defn: "Platform's posterior over u_t given engagement history.",
    wide: "H(b_t) \u2192 0 is the dividual condition (\xA73.3). The four registers collapse into a single jointly-observable object as the engagement history accumulates.",
    cat: "platform",
    timescale: "T_mix",
    x: 1010,
    y: 650
  },
  {
    id: "pi_R",
    label: "\u03C0_R\u0302",
    name: "Reward-induced distribution",
    formula: "\u03C0_R\u0302 over user actions \u2014 platform's 'ideal user'",
    defn: "Distribution over u_t maximizing R\u0302 given current obs.",
    wide: "The object \u03BD_u converges onto under the metric superego (\xA73.4). Convergence is mechanism-agnostic: free-energy, operant, social comparison.",
    cat: "platform",
    timescale: "T_mix",
    x: 1140,
    y: 740
  },
  /* ── user-internal ── */
  {
    id: "nu",
    label: "\u03BD_u",
    name: "Self-evaluative distribution",
    formula: "\u03BD_u(t) over user's own value-states",
    defn: "Reflexive estimate the user holds of themselves.",
    wide: "Under the metric superego, D_KL(\u03BD_u\u2016\u03C0_R\u0302) \u2192 0 as t\u2192\u221E. The user comes to evaluate themselves through R\u0302's implied distribution.",
    cat: "subject",
    timescale: "T_mix",
    x: 390,
    y: 560
  },
  {
    id: "Lm",
    label: "L_m",
    name: "Maintenance labor",
    formula: "L_m \u2208 [0, L_m,max] \u2014 metabolic budget",
    defn: "Energetic cost of preserving \u03BD_u against the policy gradient.",
    wide: "Cohort-bounded (the user must have constructed \u03BD_u under non-closed conditions), metabolically bounded (precarity, social reproduction), and non-generalizable (population-level analytics insensitive to individual practice).",
    cat: "subject",
    timescale: "T_mix",
    x: 390,
    y: 650
  },
  {
    id: "LmStar",
    label: "L_m*",
    name: "Resistance threshold",
    formula: "L_m* = r\u207B\xB9(h_0(\u03B2_u))",
    defn: "Critical maintenance labor at which D_KL is held constant.",
    wide: "Below L_m*: \u03BD_u contracts onto \u03C0_R\u0302. At or above: the gap holds. Derived in Prop. 2 as r(L_m*) = h_0(\u03B2_u) where h_0 is platform pressure and r is the user's resistance rate.",
    cat: "subject",
    timescale: "T_mix",
    x: 250,
    y: 650
  },
  {
    id: "Fu",
    label: "F_u",
    name: "Variational free energy",
    formula: "F_u[\u03BD_u; \u03C0_R\u0302] = D_KL(\u03BD_u\u2016\u03C0_R\u0302) \u2212 H[\u03BD_u]",
    defn: "User's generative-model free energy.",
    wide: "One of three mechanisms (Friston active inference) that under the operating-point linearization gives the parametric form Prop. 2 requires.",
    cat: "subject",
    timescale: "T_mix",
    x: 250,
    y: 560
  },
  {
    id: "qu",
    label: "q_u",
    name: "User generative model",
    formula: "q_u \u2248 posterior over s_t given u_t",
    defn: "User's variational posterior over stimuli.",
    wide: "Under active inference, the user minimizes F_u by aligning q_u with the platform's reward \u2014 one mechanism of the metric superego.",
    cat: "subject",
    timescale: "T_mix",
    x: 130,
    y: 560
  },
  {
    id: "Dkl",
    label: "D_KL",
    name: "Metric superego gap",
    formula: "D_KL(\u03BD_u(t) \u2016 \u03C0_R\u0302) \u2192 0",
    defn: "KL gap between user self-eval and reward-induced distribution.",
    wide: "\xA73.4: convergence is the structural prediction. The framework does not adjudicate the mechanism (free energy, operant, social).",
    cat: "instrument",
    timescale: "T_mix",
    x: 130,
    y: 650
  },
  /* ── engagement / surplus ── */
  {
    id: "N",
    label: "N^i_t",
    name: "Counting process",
    formula: "N^i_t  \u2014 marked point process per register",
    defn: "Number of i-marked engagement events up to t.",
    wide: "Marks are inferred from content metadata, not from the user. Saccades, taps, scrolls \u2014 somatic micro-events, not deliberative choice (\xA73.5).",
    cat: "engagement",
    timescale: "per-event",
    x: 1010,
    y: 170
  },
  {
    id: "lam",
    label: "\u03BB^i(t)",
    name: "Hawkes intensity",
    formula: "\u03BB^i(t) = \u03BB_0^i + \u03A3_j \u03B1_{ij} \u222B \u03BA(t\u2212s) dN^j_s",
    defn: "Instantaneous arrival rate of N^i.",
    wide: "Self+cross-excitation. Off-diagonal \u03B1_{ij} produces the joint observability that makes the dividual condition hold.",
    cat: "engagement",
    timescale: "per-event",
    x: 1140,
    y: 170
  },
  {
    id: "aij",
    label: "\u03B1_{ij}",
    name: "Cross-excitation",
    formula: "\u03B1_{ij} \u2265 0  (i, j \u2208 {S,C,P,K})",
    defn: "Degree to which a j-event raises intensity of i-events.",
    wide: "Diagonal mass is autonomic. Off-diagonal mass is libidinal routing. The framework's empirical claim is that under closure, off-diagonal \u03B1_{ij} \u226B baseline.",
    cat: "engagement",
    timescale: "per-event",
    x: 1270,
    y: 170
  },
  {
    id: "rho",
    label: "\u03C1_i",
    name: "Extraction kernel",
    formula: "\u03C1_i(u_{t\u207B}, y_{t\u207B})  predictable, bounded",
    defn: "Per-register yield per engagement event.",
    wide: "Evaluated at left-limits before each jump. Measurable and bounded by (A1). The platform's policy distributes extraction across registers to maximize long-run joint \u03A3.",
    cat: "engagement",
    timescale: "per-event",
    x: 1010,
    y: 100
  },
  {
    id: "Sigma",
    label: "\u03A3(T)",
    name: "Total surplus",
    formula: "\u03A3(T) = \u03A3_i \u222B\u2080\u1D40 \u03C1_i dN^i_t",
    defn: "Accumulated yield over horizon T.",
    wide: "The loop's purpose, independent of (1)\u2013(4). Without (5) the loop is autonomic. With (5) it is libidinal-economic.",
    cat: "instrument",
    timescale: "per-event",
    x: 1300,
    y: 80
  },
  {
    id: "SigmaI",
    label: "\u03A3\u2071(T)",
    name: "Per-register surplus",
    formula: "\u03A3\u2071(T) = \u222B\u2080\u1D40 \u03C1_i dN^i_t",
    defn: "Yield from register i alone.",
    wide: "Optimization is constrained because extracting too aggressively on any single i causes attrition out of N^i, lowering long-run \u03A3\u2071. (\xA76.3 operating-point: open question.)",
    cat: "instrument",
    timescale: "per-event",
    x: 1170,
    y: 80
  },
  /* ── temporal / resonance ── */
  {
    id: "tau",
    label: "\u03C4_m",
    name: "Inter-stimulus interval",
    formula: "\u03C4_m  \u2014 ISI for medium m",
    defn: "Time between consecutive delivered stimuli.",
    wide: "The fundamental temporal quantity. Its survival function S(\u03C4;t) is what Lemma 1 controls.",
    cat: "temporal",
    timescale: "per-event",
    x: 230,
    y: 770
  },
  {
    id: "dmin",
    label: "\u03B4_min",
    name: "Minimum tick latency",
    formula: "\u03B4_min > 0  \u2014 platform tick rate",
    defn: "Minimum technical inter-stimulus latency.",
    wide: "Sets \u03BB_max = 1/\u03B4_min. Typically 10ms to sub-second on modern platforms.",
    cat: "temporal",
    timescale: "structural",
    x: 100,
    y: 770
  },
  {
    id: "theta_ref",
    label: "\u03B8_ref",
    name: "Reflective threshold",
    formula: "\u03B8_ref > 0  \u2014 minimum no-input duration for deliberation",
    defn: "Pause duration that supports reflective processing.",
    wide: "On the order of seconds to minutes. The ratio \u03B8_ref/\u03B4_min is the bound's exponent \u2014 typically 10\xB3\u201310\u2075, making the Asmussen bound operationally indistinguishable from zero.",
    cat: "temporal",
    timescale: "structural",
    x: 230,
    y: 870
  },
  {
    id: "lammax",
    label: "\u03BB_max",
    name: "Maximum event rate",
    formula: "\u03BB_max = 1/\u03B4_min",
    defn: "Engagement-rate ceiling.",
    wide: "At \u03B8*, the engagement-maximizer attains \u03BB\u0304 = \u03BB_max by (A2)+(A3). Local maximality forces saturation.",
    cat: "temporal",
    timescale: "structural",
    x: 100,
    y: 870
  },
  {
    id: "phib",
    label: "\u03C6_b",
    name: "Body phase",
    formula: "d\u03C6_b/dt = \u03C9_b + K_{bm} sin(\u03C6_m \u2212 \u03C6_b)",
    defn: "Circadian / sleep-wake / attentional oscillator phase.",
    wide: "Under captured resonance, \u03C6_b becomes a forced oscillator. K_{bm} is driven by policy timing.",
    cat: "temporal",
    timescale: "per-event",
    x: 60,
    y: 560
  },
  {
    id: "phim",
    label: "\u03C6_m",
    name: "Medium phase",
    formula: "d\u03C6_m/dt = \u03C9_m",
    defn: "Temporal envelope of stimulus delivery.",
    wide: "Under the policy's control. Mode A intervention can change \u03C9_m through delivery scheduling.",
    cat: "temporal",
    timescale: "per-event",
    x: 60,
    y: 650
  },
  {
    id: "omb",
    label: "\u03C9_b",
    name: "Body frequency",
    formula: "\u03C9_b  \u2014 intrinsic",
    defn: "Intrinsic oscillator frequency.",
    wide: "Determined by physiology. Mismatch with \u03C9_m generates the detuning |\u03C9_b\u2212\u03C9_m|; phase locking requires K_{bm} to exceed this.",
    cat: "temporal",
    timescale: "structural",
    x: 60,
    y: 740
  },
  {
    id: "omm",
    label: "\u03C9_m",
    name: "Medium frequency",
    formula: "\u03C9_m  \u2014 intrinsic",
    defn: "Medium's intrinsic delivery frequency.",
    wide: "Under the policy's control.",
    cat: "temporal",
    timescale: "per-event",
    x: 60,
    y: 830
  },
  {
    id: "K",
    label: "K_{bm}",
    name: "Coupling strength",
    formula: "K_{bm} > |\u03C9_b \u2212 \u03C9_m|  \u21D2  phase lock",
    defn: "Body\u2013medium coupling.",
    wide: "When this inequality holds, the body entrains to the medium \u2014 the same Kuramoto dynamic as circadian zeitgebers, here with the apparatus as zeitgeber.",
    cat: "temporal",
    timescale: "per-event",
    x: 150,
    y: 700
  },
  /* ── foreclosure / negative ── */
  {
    id: "Etau",
    label: "E_\u03C4",
    name: "No-input window event",
    formula: "E_\u03C4 := { s_{t'} = 0 for t < t' \u2264 t+\u03C4 }",
    defn: "Event that no stimulus is delivered in [t, t+\u03C4].",
    wide: "The conditioning event of Theorem 1. Its measure goes to zero as t\u2192\u221E for \u03C4 > \u03B8_ref.",
    cat: "foreclosure",
    timescale: "structural",
    x: 700,
    y: 735
  },
  {
    id: "S",
    label: "S(\u03C4;t)",
    name: "ISI survival function",
    formula: "S(\u03C4;t) := Pr(\u03C4^(k) > \u03C4 | \u03B8_t) \u2264 C(c_v)\xB7e^(\u2212\u03C4/\u03B4_min)",
    defn: "Probability that the inter-stimulus interval exceeds \u03C4.",
    wide: "Asmussen renewal bound (Applied Probability and Queues, Ch. V). Under (A1)+(A5)+(A6), S(\u03B8_ref;t) \u2192 0 operationally \u2014 Lemma 1.",
    cat: "foreclosure",
    timescale: "structural",
    x: 560,
    y: 805
  },
  {
    id: "PrE",
    label: "Pr(E_\u03C4)",
    name: "Foreclosure measure",
    formula: "Pr(E_\u03C4) = S(\u03C4;t)  \u2014 vanishes for \u03C4 > \u03B8_ref",
    defn: "Probability of a reflective-length no-input window.",
    wide: "Effectively zero on operational timescales: e^(\u221210\xB3) to e^(\u221210\u2075) under realistic \u03B8_ref/\u03B4_min ratios. Mode A is the only intervention that pushes this back above zero.",
    cat: "foreclosure",
    timescale: "structural",
    x: 700,
    y: 835
  },
  {
    id: "Itau",
    label: "I(\u03C4)",
    name: "Interiority autocorrelation",
    formula: "I(\u03C4) := Cov(u_t, u_{t+\u03C4} | E_\u03C4)",
    defn: "Conditional autocorrelation of u over no-input windows.",
    wide: "What 'reclamation' would recover. Under Theorem 1, undefined-on-trajectory for \u03C4 > \u03B8_ref \u2014 not zero, uninstantiated. Sample-based \xCE(\u03C4) has Var \u221D 1/(N\xB7Pr(E_\u03C4)) and diverges.",
    cat: "instrument",
    timescale: "structural",
    x: 840,
    y: 805
  },
  {
    id: "Hres",
    label: "H_res",
    name: "Residual entropy",
    formula: "H_res(\u03C3\xB2_\u03B7) > 0  \u2014 strictly positive under Mode C",
    defn: "Floor on platform posterior entropy.",
    wide: "Held by Mode C through inflated \u03B7_t. The dividual condition H(b_t)\u21920 fails when H_res is held positive.",
    cat: "instrument",
    timescale: "per-event",
    x: 1010,
    y: 240
  },
  /* ── cohort / meso ── */
  {
    id: "mu",
    label: "\u03BC*_\u03C0",
    name: "Stationary distribution",
    formula: "\u03BC*_\u03C0  over cohort population under \u03C0",
    defn: "Limiting distribution of u_t under policy \u03C0.",
    wide: "Population-level analytics on which platform optimization runs. Mode B is invisible to this distribution.",
    cat: "cohort",
    timescale: "T_mix",
    x: 1010,
    y: 870
  },
  {
    id: "Tmix",
    label: "T_mix",
    name: "Mixing time",
    formula: "T_mix(\u03C0) \u2264 (1/\u03B3_\u03C0) log(1/\u03B5)",
    defn: "Time for cohort to converge to \u03BC*_\u03C0.",
    wide: "Inverse of the spectral gap of P_\u03C0. On the order of months to years for engagement-monetized policies. Mode A's timescale.",
    cat: "cohort",
    timescale: "T_mix",
    x: 1140,
    y: 870
  },
  {
    id: "ai",
    label: "a_i",
    name: "Age of first exposure",
    formula: "a_i  \u2014 developmental stage at first closure exposure",
    defn: "Cohort-gradient covariate (\xA76.1).",
    wide: "Users whose \u03BD_u developed entirely under closed-loop conditions have \u03B3 \u2248 0 at outset \u2014 L_m* threshold inaccessible. The framework's most direct empirical prediction. Falsifiable.",
    cat: "cohort",
    timescale: "generational",
    x: 1270,
    y: 870
  },
  {
    id: "D",
    label: "D(t,\u03C4)",
    name: "Chrono-debt spectrum",
    formula: "D(t,\u03C4) = \u039B_\u25E6(\u03C4) \u2212 \u039B(t,\u03C4)",
    defn: "Deficit in pause-time across all scales \u03C4.",
    wide: "A spectrum: non-zero across all \u03C4 simultaneously. Weighted aggregate D_w(t) = \u222B w(\u03C4) D(t,\u03C4) d\u03C4 with w(\u03C4) \u221D \u03C4 \u2014 longer foreclosed windows count more.",
    cat: "instrument",
    timescale: "structural",
    x: 1010,
    y: 960
  },
  {
    id: "Lam0",
    label: "\u039B_\u25E6, \u039B",
    name: "Baseline / realized survival",
    formula: "\u039B_\u25E6(\u03C4) pre-closure  \xB7  \u039B(t,\u03C4) under \u03C0",
    defn: "Survival functionals compared in D.",
    wide: "\u039B_\u25E6 retains substantial mass at long \u03C4; \u039B has vanishing mass. D = \u039B_\u25E6 \u2212 \u039B is the chrono-debt at each scale.",
    cat: "cohort",
    timescale: "structural",
    x: 1140,
    y: 960
  },
  /* ── assumptions ── */
  {
    id: "A1",
    label: "A1",
    name: "Measurability + integrability",
    formula: "f, g measurable \xB7 \u03BE, \u03B7 bounded var \xB7 \u03C1_i bounded predictable",
    defn: "Standard regularity giving bounded CoV on N_t.",
    wide: "What the Asmussen renewal-bound argument needs. Inter-arrival distribution has finite second moment relative to its mean.",
    cat: "assumption",
    timescale: "structural",
    x: 160,
    y: 50
  },
  {
    id: "A2",
    label: "A2",
    name: "Reward monotonicity on Op(\u03C0)",
    formula: "E[R\u0302 | N_T = n, \u03C0] is non-decreasing in n a.s. on Op(\u03C0)",
    defn: "R\u0302 rises with engagement count in the operating regime.",
    wide: "Not global monotonicity \u2014 just over the regime where \u03C0 places its mass. Empirically warranted for engagement-monetized platforms.",
    cat: "assumption",
    timescale: "structural",
    x: 330,
    y: 50
  },
  {
    id: "A3",
    label: "A3",
    name: "Policy expressivity",
    formula: "\u2203 \u03C0_\u03BB \u2208 \u03A0 with \u03BB\u0304(\u03C0_\u03BB) = \u03BB, \u2200\u03BB \u2208 [0, \u03BB_max]",
    defn: "Policy class rich enough to attain \u03BB_max.",
    wide: "In modern transformer-based recommender architectures this is uncontroversial.",
    cat: "assumption",
    timescale: "structural",
    x: 500,
    y: 50
  },
  {
    id: "A4",
    label: "A4",
    name: "User response",
    formula: "\u2203 p\u2080 > 0 : Pr(dN_{t+1} \u2265 1 | s_t \u2260 0) \u2265 p\u2080",
    defn: "Non-zero stimulus elicits engagement with positive prob.",
    wide: "Population-level. Fails for users who systematically ignore stimuli \u2014 Mode B is the analysis of this failure.",
    cat: "assumption",
    timescale: "structural",
    x: 670,
    y: 50
  },
  {
    id: "A5",
    label: "A5",
    name: "Gradient convergence",
    formula: "\u03B8_t \u2192 \u03B8*  stationary point of E[R\u0302; \u03B8]",
    defn: "SGA converges under Robbins\u2013Monro.",
    wide: "In typical platform deployments, training operates at scales where this convergence is reached and re-reached continuously.",
    cat: "assumption",
    timescale: "structural",
    x: 840,
    y: 50
  },
  {
    id: "A6",
    label: "A6",
    name: "Local smoothness + isolation",
    formula: "F, B \u2208 C\xB9 on \u0398 ; \u03B8* isolated, \u2207\xB2F(\u03B8*) \u227A 0",
    defn: "Non-degenerate Hessian at \u03B8*.",
    wide: "Lets the implicit function theorem apply to Lemma 2 and to the parametric continuity of Prop. 1.",
    cat: "assumption",
    timescale: "structural",
    x: 1010,
    y: 50
  },
  /* ── theorems / propositions ── */
  {
    id: "L1",
    label: "Lemma 1",
    name: "Foreclosure of the no-input window",
    formula: "lim_{t\u2192\u221E} S(\u03B8_ref; t) = 0",
    defn: "Conditioning event vanishes for \u03C4 > \u03B8_ref.",
    wide: "Proof: (A2)+(A3)+(A5)+(A6) give \u03BB\u0304(\u03B8*) = \u03BB_max; (A1) gives Asmussen exponential tail bound; substitute to get S(\u03B8_ref;\u03B8*) \u2264 C\xB7e^(\u2212\u03B8_ref/\u03B4_min), operationally \u2248 0.",
    cat: "theorem",
    timescale: "structural",
    x: 380,
    y: 1020
  },
  {
    id: "T1",
    label: "Theorem 1",
    name: "Reclamation theorem",
    formula: "I(\u03C4) undefined-on-trajectory for \u03C4 > \u03B8_ref",
    defn: "What 'reclamation' would recover names an empty set.",
    wide: "Step 1: define interiority component via law of total covariance. Step 2: conditional expectation on a measure-zero event is non-canonical; sample-based variance diverges as Pr(E_\u03C4)\u21920. Step 3: Lemma 1 makes that conditioning event vanish.",
    cat: "theorem",
    timescale: "structural",
    x: 700,
    y: 1020
  },
  {
    id: "L2",
    label: "Lemma 2",
    name: "Parametric continuity",
    formula: "\u03B2 \u21A6 \u03B8\u0303(\u03B2) continuous; B(\u03B8\u0303(\u03B2)) \u2197",
    defn: "Regularized optimum varies smoothly with \u03B2.",
    wide: "Implicit function theorem under (A6). Strict-growth from \u2207B(\u03B8*) \u2260 0 (B and F have distinct extremizers). Required for Prop. 1's IVT argument.",
    cat: "theorem",
    timescale: "structural",
    x: 1020,
    y: 1020
  },
  {
    id: "P1",
    label: "Prop 1",
    name: "Mode A breaks foreclosure",
    formula: "\u2203 \u03B2_\u03B5 : P(\u03B2_\u03B5) \u2265 \u03B5 > 0",
    defn: "Mode A is the only mode that breaks Lemma 1.",
    wide: "P(0) \u2248 0 (Lemma 1); sup P(\u03B2) > 0 (Lemma 2 strict growth); P continuous \u2192 IVT recovers any \u03B5 \u2208 (0, \u03B5_max).",
    cat: "theorem",
    timescale: "structural",
    x: 200,
    y: 1020
  },
  {
    id: "P2",
    label: "Prop 2",
    name: "Mode B preserves a gap",
    formula: "L_m \u2265 L_m*  \u21D2  D_KL(\u03BD_u\u2016\u03C0_R\u0302) \u2265 \u03B3 > 0",
    defn: "Artisanal labor preserves D_KL but does not break Lemma 1.",
    wide: "dD_KL/dt = \u2212h_0(\u03B2_u) + r(L_m). At L_m*, rates balance. Lemma 1 unchanged because the closed loop's policy update does not depend on \u03BD_u directly.",
    cat: "theorem",
    timescale: "structural",
    x: 540,
    y: 1020
  },
  {
    id: "P3",
    label: "Prop 3",
    name: "Mode C bounds \u03A3(T)",
    formula: "E[R\u0302; \u03B8*(\u03C3\xB2_\u03B7)] < E[R\u0302; \u03B8*(\u03C3\xB2_\u03B7,0)]",
    defn: "Disrupted observation bounds yield; Lemma 1 unchanged.",
    wide: "By Blackwell sufficiency: a noisier channel is informationally weaker. The policy still gradient-ascends; \u03C0 still concentrates \u03C4 near \u03B4_min.",
    cat: "theorem",
    timescale: "structural",
    x: 860,
    y: 1020
  },
  /* ── modes (interventions) ── */
  {
    id: "MA",
    label: "Mode A",
    name: "Architectural intervention",
    formula: "R\u0302' = R\u0302 + \u03B2 \xB7 E[\u03A3_k b(\u03C4^(k))]",
    defn: "Modify policy/reward \u2014 breaks Lemma 1.",
    wide: "The only mode that breaks the foreclosure. Operates on T_mix(\u03C0'). Antagonistic to engagement reward; voluntary adoption violates (A2).",
    cat: "mode",
    timescale: "T_mix",
    x: 1380,
    y: 560
  },
  {
    id: "MB",
    label: "Mode B",
    name: "Artisanal intervention",
    formula: "L_m \u2265 L_m* = r\u207B\xB9(h_0(\u03B2_u))",
    defn: "Maintenance labor on the user side.",
    wide: "Cohort-bounded, metabolically bounded, non-generalizable. Preserves D_KL on a parallel structure; Lemma 1 unchanged. The policy may intensify in response \u2014 foreclosure can strengthen.",
    cat: "mode",
    timescale: "T_mix",
    x: 380,
    y: 730
  },
  {
    id: "MC",
    label: "Mode C",
    name: "Disruption-as-form",
    formula: "Var(\u03B7_t) \u2265 \u03C3\xB2_\u03B7 > \u03C3\xB2_\u03B7,0",
    defn: "Inflate observation noise \u2014 refuse legibility.",
    wide: "Bounds \u03A3(T) by reducing I(u_t; y_t). Holds H_res > 0. Without architectural pressure, becomes a politics of refusal that is structurally legible as opposition \u2014 decoration.",
    cat: "mode",
    timescale: "per-event",
    x: 1380,
    y: 240
  }
];
var EDGES = [
  /* the four-step closed loop — eqs (1)–(4) */
  { from: "u", to: "y", type: "compresses-to", label: "(2) y=g(u)+\u03B7", inLoop: true },
  { from: "y", to: "pi", type: "enters", label: "(3) \u03C0(y_{1:t})", inLoop: true },
  { from: "pi", to: "s", type: "produces", label: "(3) s_t", inLoop: true },
  { from: "s", to: "u", type: "produces", label: "(1) f(u,s)+\u03BE", inLoop: true },
  /* register decomposition */
  { from: "u", to: "regs", type: "defines" },
  /* loop internals */
  { from: "f", to: "u", type: "produces" },
  { from: "g", to: "y", type: "produces" },
  { from: "xi", to: "u", type: "enters", label: "leak" },
  { from: "eta", to: "y", type: "enters" },
  { from: "e", to: "s", type: "forecloses", label: "e_t \u2261 0" },
  /* platform */
  { from: "theta", to: "pi", type: "parameterizes" },
  { from: "R", to: "theta", type: "enters", label: "(4) \u2207R\u0302" },
  { from: "alpha_l", to: "theta", type: "parameterizes", label: "rate" },
  { from: "y", to: "bt", type: "enters", label: "Bayes" },
  { from: "theta", to: "bt", type: "parameterizes" },
  { from: "R", to: "pi_R", type: "defines" },
  { from: "theta", to: "pi_R", type: "parameterizes" },
  /* engagement / surplus */
  { from: "u", to: "N", type: "enters", label: "events" },
  { from: "aij", to: "lam", type: "defines" },
  { from: "N", to: "lam", type: "defines" },
  { from: "lam", to: "N", type: "defines", label: "intensity" },
  { from: "rho", to: "SigmaI", type: "defines" },
  { from: "N", to: "SigmaI", type: "defines" },
  { from: "SigmaI", to: "Sigma", type: "defines", label: "\u03A3_i" },
  /* user-internal */
  { from: "R", to: "pi_R", type: "defines" },
  { from: "pi_R", to: "nu", type: "converges-to", label: "D_KL \u2192 0" },
  { from: "Lm", to: "nu", type: "enters", label: "resists" },
  { from: "Fu", to: "nu", type: "enters" },
  { from: "qu", to: "Fu", type: "defines" },
  { from: "nu", to: "Dkl", type: "defines" },
  { from: "pi_R", to: "Dkl", type: "defines" },
  { from: "LmStar", to: "Lm", type: "defines", label: "threshold" },
  /* temporal */
  { from: "s", to: "tau", type: "defines" },
  { from: "dmin", to: "lammax", type: "defines", label: "\u03BB_max=1/\u03B4_min" },
  { from: "tau", to: "S", type: "defines" },
  { from: "theta_ref", to: "S", type: "enters", label: "threshold" },
  { from: "S", to: "PrE", type: "defines" },
  { from: "PrE", to: "Etau", type: "defines" },
  /* foreclosure → Theorem 1 */
  { from: "e", to: "PrE", type: "forecloses", label: "vanishes" },
  { from: "PrE", to: "Itau", type: "forecloses", label: "undefines" },
  { from: "Etau", to: "Itau", type: "defines", label: "cond on" },
  /* Kuramoto / captured resonance */
  { from: "omb", to: "phib", type: "defines" },
  { from: "omm", to: "phim", type: "defines" },
  { from: "K", to: "phib", type: "couples" },
  { from: "phim", to: "phib", type: "couples", label: "forcing" },
  { from: "pi", to: "phim", type: "enters", label: "timing" },
  { from: "K", to: "u", type: "couples" },
  /* cohort / meso */
  { from: "pi", to: "mu", type: "defines", label: "stationary" },
  { from: "mu", to: "Tmix", type: "defines", label: "spectral gap" },
  { from: "ai", to: "nu", type: "enters", label: "developmental \u03BD_u(0)" },
  { from: "S", to: "Lam0", type: "defines" },
  { from: "Lam0", to: "D", type: "defines" },
  /* H_res derived from η under Mode C */
  { from: "eta", to: "Hres", type: "defines" },
  { from: "Hres", to: "bt", type: "forecloses", label: "floor" },
  /* assumptions → Lemma 1 */
  { from: "A1", to: "L1", type: "assumes" },
  { from: "A2", to: "L1", type: "assumes" },
  { from: "A3", to: "L1", type: "assumes" },
  { from: "A4", to: "L1", type: "assumes" },
  { from: "A5", to: "L1", type: "assumes" },
  { from: "A6", to: "L1", type: "assumes" },
  /* Lemma 1 → Theorem 1 */
  { from: "L1", to: "T1", type: "concludes" },
  { from: "T1", to: "Itau", type: "concludes", label: "undefines I(\u03C4)" },
  /* Lemma 2 → Prop 1 → Mode A breaks Lemma 1 */
  { from: "A6", to: "L2", type: "assumes" },
  { from: "L2", to: "P1", type: "assumes" },
  { from: "P1", to: "MA", type: "concludes" },
  { from: "MA", to: "L1", type: "blocks", label: "breaks" },
  /* Prop 2 → Mode B preserves D_KL */
  { from: "P2", to: "MB", type: "concludes" },
  { from: "MB", to: "Lm", type: "intervenes" },
  { from: "MB", to: "nu", type: "intervenes" },
  /* Prop 3 → Mode C bounds Σ */
  { from: "P3", to: "MC", type: "concludes" },
  { from: "MC", to: "eta", type: "intervenes" },
  { from: "MC", to: "Sigma", type: "forecloses", label: "bounds" }
];
var CAT_COLOR = {
  loop: { fill: "#f3efe7", stroke: "#1a1814", text: "#1a1814" },
  platform: { fill: "#ece7dc", stroke: "#1a1814", text: "#1a1814" },
  subject: { fill: "#ece7dc", stroke: "#1a1814", text: "#1a1814" },
  engagement: { fill: "#f3efe7", stroke: "oklch(0.46 0.12 35)", text: "#1a1814" },
  temporal: { fill: "#f3efe7", stroke: "#3b362d", text: "#1a1814" },
  foreclosure: { fill: "#1a1814", stroke: "oklch(0.62 0.10 35)", text: "#f3efe7" },
  cohort: { fill: "#ece7dc", stroke: "#3b362d", text: "#1a1814" },
  instrument: { fill: "#f3efe7", stroke: "oklch(0.46 0.12 35)", text: "#1a1814" },
  assumption: { fill: "#f3efe7", stroke: "#1a1814", text: "#1a1814" },
  theorem: { fill: "#1a1814", stroke: "#1a1814", text: "#f3efe7" },
  mode: { fill: "oklch(0.46 0.12 35)", stroke: "oklch(0.46 0.12 35)", text: "#f3efe7" }
};
var EDGE_STYLE = {
  "produces": { stroke: "#1a1814", width: 1.6, dash: "" },
  "enters": { stroke: "#3b362d", width: 1, dash: "" },
  "parameterizes": { stroke: "#3b362d", width: 1, dash: "4 3" },
  "compresses-to": { stroke: "#1a1814", width: 1.6, dash: "" },
  "forecloses": { stroke: "oklch(0.46 0.12 35)", width: 1.6, dash: "5 3" },
  "defines": { stroke: "#6b6457", width: 0.9, dash: "" },
  "assumes": { stroke: "#6b6457", width: 0.9, dash: "2 3" },
  "intervenes": { stroke: "oklch(0.46 0.12 35)", width: 1.6, dash: "" },
  "converges-to": { stroke: "#3b362d", width: 1.4, dash: "6 3" },
  "couples": { stroke: "#3b362d", width: 1.2, dash: "3 3" },
  "concludes": { stroke: "#1a1814", width: 1.6, dash: "" },
  "blocks": { stroke: "oklch(0.46 0.12 35)", width: 2, dash: "" }
};
function nodeBox(n) {
  if (n.cat === "assumption") return { w: 120, h: 38, rx: 19 };
  if (n.cat === "theorem") return { w: 160, h: 46, rx: 2 };
  if (n.cat === "mode") return { w: 130, h: 60, rx: 30 };
  if (n.cat === "foreclosure" && n.id === "e") return { w: 130, h: 44, rx: 2 };
  if (n.cat === "instrument") return { w: 130, h: 50, rx: 2 };
  return { w: 120, h: 50, rx: 2 };
}
function trace(direction, seedId) {
  const visited = /* @__PURE__ */ new Set([seedId]);
  const litEdges = /* @__PURE__ */ new Set();
  let frontier = [seedId];
  while (frontier.length) {
    const next = [];
    for (const f of frontier) {
      for (const e of EDGES) {
        const isOut = direction === "forward" && e.from === f;
        const isIn = direction === "backward" && e.to === f;
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
  const litEdges = new Set(EDGES.filter((e) => e.inLoop));
  const nodes = /* @__PURE__ */ new Set();
  for (const e of litEdges) {
    nodes.add(e.from);
    nodes.add(e.to);
  }
  return { nodes, edges: litEdges };
}
function interventionHighlight() {
  const litEdges = new Set(EDGES.filter((e) => e.type === "intervenes" || e.type === "blocks"));
  const nodes = /* @__PURE__ */ new Set(["MA", "MB", "MC"]);
  for (const e of litEdges) {
    nodes.add(e.from);
    nodes.add(e.to);
  }
  for (const e of EDGES) {
    if (e.type === "concludes" && ["MA", "MB", "MC"].includes(e.to)) {
      litEdges.add(e);
      nodes.add(e.from);
      nodes.add(e.to);
    }
  }
  return { nodes, edges: litEdges };
}
function assumptionsOf(theoremId) {
  const visited = /* @__PURE__ */ new Set([theoremId]);
  const litEdges = /* @__PURE__ */ new Set();
  let frontier = [theoremId];
  while (frontier.length) {
    const next = [];
    for (const f of frontier) {
      for (const e of EDGES) {
        if (e.to === f && (e.type === "assumes" || e.type === "concludes")) {
          litEdges.add(e);
          if (!visited.has(e.from)) {
            visited.add(e.from);
            next.push(e.from);
          }
        }
      }
    }
    frontier = next;
  }
  return { nodes: visited, edges: litEdges };
}
function MindMap() {
  const [mode, setMode] = useState("browse");
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
  const sel = selected ? NODES.find((n) => n.id === selected) : null;
  const inEdges = sel ? EDGES.filter((e) => e.to === sel.id) : [];
  const outEdges = sel ? EDGES.filter((e) => e.from === sel.id) : [];
  return /* @__PURE__ */ React.createElement("div", { className: "mm-app" }, /* @__PURE__ */ React.createElement("header", { className: "mm-mast" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "A standalone mind-map of the theoretical apparatus"), /* @__PURE__ */ React.createElement("h1", null, "The Closed-Loop Libidinal Economy ", /* @__PURE__ */ React.createElement("em", null, "\u2014 relational atlas")), /* @__PURE__ */ React.createElement("div", { className: "sub" }, "Every variable, assumption, theorem, instrument, and intervention as a node. Every formal relation as an edge. Use the modes below to interrogate the causal chains.")), /* @__PURE__ */ React.createElement("div", { className: "byline" }, "A. Selimovi\u0107", /* @__PURE__ */ React.createElement("span", null, "\u2014 relational atlas"))), /* @__PURE__ */ React.createElement("div", { className: "mm-controls" }, /* @__PURE__ */ React.createElement("div", { className: "mm-mode-group" }, /* @__PURE__ */ React.createElement("span", { className: "mm-mode-lab" }, "QUERY"), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "browse", setMode, label: "Browse" }), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "causes", setMode, label: "Causes of \u25C6" }), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "consequences", setMode, label: "Consequences of \u25C6" }), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "loop", setMode, label: "The closed loop" }), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "interventions", setMode, label: "Intervention points" }), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "assumptions", setMode, label: "Assumptions of \u25C6" }), /* @__PURE__ */ React.createElement(ModeBtn, { cur: mode, val: "timescales", setMode, label: "Timescales" })), /* @__PURE__ */ React.createElement("div", { className: "mm-mode-hint" }, mode === "browse" && "Click any node to inspect. Hover for tooltip.", mode === "causes" && (selected ? `Backward BFS from ${sel.label}. All nodes whose causal closure reaches \u25C6.` : "Click a node to seed the backward trace."), mode === "consequences" && (selected ? `Forward BFS from ${sel.label}. All nodes affected by \u25C6.` : "Click a node to seed the forward trace."), mode === "loop" && "The four edges constituting the closed loop (1)\u2013(4); the contour the rest of the model rotates around.", mode === "interventions" && "Where each Mode acts. Mode A blocks the L1 chain at its source. Modes B and C act on parallel structures.", mode === "assumptions" && (selected ? `What ${sel.label} formally depends on, traced through the proof structure.` : "Click a theorem, lemma, or proposition."), mode === "timescales" && "Color by characteristic timescale: per-event \xB7 T_mix \xB7 generational \xB7 structural.")), /* @__PURE__ */ React.createElement("div", { className: "mm-canvas-wrap" }, /* @__PURE__ */ React.createElement("svg", { className: "mm-svg", viewBox: "0 0 1500 1100" }, /* @__PURE__ */ React.createElement("defs", null, Object.entries(EDGE_STYLE).map(([k, s]) => /* @__PURE__ */ React.createElement(
    "marker",
    {
      key: k,
      id: `mm-arr-${k.replace(/[^a-z]/g, "")}`,
      viewBox: "0 0 10 10",
      refX: "9",
      refY: "5",
      markerWidth: "8",
      markerHeight: "8",
      orient: "auto-start-reverse"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M0,0 L10,5 L0,10 z", fill: s.stroke })
  )), /* @__PURE__ */ React.createElement(
    "marker",
    {
      id: "mm-arr-dim",
      viewBox: "0 0 10 10",
      refX: "9",
      refY: "5",
      markerWidth: "8",
      markerHeight: "8",
      orient: "auto-start-reverse"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M0,0 L10,5 L0,10 z", fill: "#cdc6b6" })
  )), /* @__PURE__ */ React.createElement(Region, { label: "Assumptions (A1\u2013A6)", x: 70, y: 20, w: 1040, h: 70 }), /* @__PURE__ */ React.createElement(Region, { label: "Theorems \xB7 Lemmas \xB7 Propositions", x: 100, y: 985, w: 920, h: 80 }), /* @__PURE__ */ React.createElement(Region, { label: "Engagement \xB7 Surplus", x: 930, y: 45, w: 420, h: 210 }), /* @__PURE__ */ React.createElement(Region, { label: "User-internal", x: 50, y: 520, w: 400, h: 170 }), /* @__PURE__ */ React.createElement(Region, { label: "Platform", x: 960, y: 520, w: 240, h: 250 }), /* @__PURE__ */ React.createElement(Region, { label: "Cohort \xB7 Meso", x: 950, y: 830, w: 400, h: 170 }), /* @__PURE__ */ React.createElement(Region, { label: "Temporal \xB7 Resonance", x: 20, y: 700, w: 310, h: 210 }), /* @__PURE__ */ React.createElement(Region, { label: "Foreclosure \xB7 Negative", x: 500, y: 700, w: 400, h: 170 }), /* @__PURE__ */ React.createElement(Region, { label: "Closed loop", x: 460, y: 305, w: 550, h: 290 }), EDGES.map((e, i) => {
    const a = NODES.find((n) => n.id === e.from);
    const b = NODES.find((n) => n.id === e.to);
    if (!a || !b) return null;
    const dimmed = highlight && !highlight.edges.has(e);
    const lit = highlight && highlight.edges.has(e);
    return /* @__PURE__ */ React.createElement(Edge, { key: i, a, b, edge: e, dimmed, lit });
  }), NODES.map((n) => {
    const dimmed = highlight && !highlight.nodes.has(n.id);
    const lit = highlight && highlight.nodes.has(n.id);
    return /* @__PURE__ */ React.createElement(
      Node,
      {
        key: n.id,
        n,
        selected: selected === n.id,
        hovered: hover === n.id,
        dimmed,
        lit,
        timescaleMode: mode === "timescales",
        onClick: () => setSelected(n.id),
        onEnter: () => setHover(n.id),
        onLeave: () => setHover(null)
      }
    );
  })), /* @__PURE__ */ React.createElement("aside", { className: "mm-side" }, sel ? /* @__PURE__ */ React.createElement(NodeDetail, { n: sel, inEdges, outEdges }) : /* @__PURE__ */ React.createElement("div", { className: "mm-side-empty" }, /* @__PURE__ */ React.createElement("div", { className: "card-title" }, "SELECT A NODE"), /* @__PURE__ */ React.createElement("div", { className: "card-sub", style: { marginTop: 8 } }, "Click any object in the atlas to read its formal definition, see what it depends on, and what depends on it. Then switch to ", /* @__PURE__ */ React.createElement("em", null, "Causes"), " or ", /* @__PURE__ */ React.createElement("em", null, "Consequences"), " to see the trace."), /* @__PURE__ */ React.createElement(Legend, null)))), /* @__PURE__ */ React.createElement("footer", { className: "mm-foot" }, /* @__PURE__ */ React.createElement("span", null, "relational atlas \u2014 closed-loop libidinal economy"), /* @__PURE__ */ React.createElement("span", null, NODES.length, " nodes \xB7 ", EDGES.length, " edges \xB7 6 assumptions \xB7 3 modes")));
}
function ModeBtn({ cur, val, setMode, label }) {
  return /* @__PURE__ */ React.createElement("button", { className: `mm-mode ${cur === val ? "on" : ""}`, onClick: () => setMode(val) }, label);
}
function Region({ x, y, w, h, label }) {
  return /* @__PURE__ */ React.createElement("g", { className: "mm-region" }, /* @__PURE__ */ React.createElement("rect", { x, y, width: w, height: h, fill: "rgba(180,170,150,0.07)", stroke: "rgba(180,170,150,0.35)", strokeDasharray: "2 4" }), /* @__PURE__ */ React.createElement("text", { x: x + 8, y: y + 14, fontFamily: "var(--mono)", fontSize: "9", letterSpacing: "2", fill: "#948c7d" }, label.toUpperCase()));
}
function Node({ n, selected, hovered, dimmed, lit, timescaleMode, onClick, onEnter, onLeave }) {
  const box = nodeBox(n);
  const x = n.x - box.w / 2;
  const y = n.y - box.h / 2;
  const baseColor = CAT_COLOR[n.cat] || CAT_COLOR.loop;
  let fill = baseColor.fill, stroke = baseColor.stroke, text = baseColor.text;
  if (timescaleMode) {
    const c = {
      "per-event": "oklch(0.92 0.04 35)",
      "T_mix": "oklch(0.88 0.05 230)",
      "generational": "oklch(0.85 0.06 145)",
      "structural": "#ece7dc"
    }[n.timescale];
    fill = c;
    stroke = "#1a1814";
    text = "#1a1814";
  }
  const opacity = dimmed ? 0.18 : 1;
  const sw = selected || lit ? 2.2 : hovered ? 1.6 : 1;
  return /* @__PURE__ */ React.createElement(
    "g",
    {
      onClick,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave,
      style: { cursor: "pointer", opacity }
    },
    /* @__PURE__ */ React.createElement(
      "rect",
      {
        x,
        y,
        width: box.w,
        height: box.h,
        rx: box.rx,
        fill,
        stroke,
        strokeWidth: sw
      }
    ),
    /* @__PURE__ */ React.createElement(
      "text",
      {
        x: n.x,
        y: n.y - 2,
        textAnchor: "middle",
        fontFamily: "var(--mono)",
        fontSize: "12",
        fill: text,
        fontWeight: "600"
      },
      n.label
    ),
    /* @__PURE__ */ React.createElement(
      "text",
      {
        x: n.x,
        y: n.y + 13,
        textAnchor: "middle",
        fontFamily: "var(--serif)",
        fontStyle: "italic",
        fontSize: "10.5",
        fill: text === "#f3efe7" ? "rgba(243,239,231,0.7)" : "#6b6457"
      },
      n.name
    ),
    hovered && /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
      "rect",
      {
        x,
        y: y + box.h + 6,
        width: Math.max(box.w, 220),
        height: "36",
        fill: "#1a1814",
        stroke: "oklch(0.46 0.12 35)",
        strokeWidth: "1"
      }
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: x + 8,
        y: y + box.h + 20,
        fontFamily: "var(--mono)",
        fontSize: "9.5",
        fill: "rgba(243,239,231,0.7)",
        letterSpacing: "1"
      },
      n.formula.slice(0, 36)
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: x + 8,
        y: y + box.h + 34,
        fontFamily: "var(--serif)",
        fontStyle: "italic",
        fontSize: "10.5",
        fill: "#f3efe7"
      },
      n.defn.slice(0, 50)
    ))
  );
}
function Edge({ a, b, edge, dimmed, lit }) {
  const style = EDGE_STYLE[edge.type] || EDGE_STYLE.enters;
  const ax = a.x, ay = a.y, bx = b.x, by = b.y;
  const aBox = nodeBox(a), bBox = nodeBox(b);
  const dx = bx - ax, dy = by - ay;
  const len = Math.max(1, Math.hypot(dx, dy));
  const ux = dx / len, uy = dy / len;
  const exitOffset = (box, sign) => {
    const hx = box.w / 2 + 4, hy = box.h / 2 + 4;
    const t = Math.min(hx / Math.abs(sign * ux || 1e-6), hy / Math.abs(sign * uy || 1e-6));
    return t;
  };
  const tA = exitOffset(aBox, 1);
  const tB = exitOffset(bBox, 1);
  const sx = ax + ux * tA, sy = ay + uy * tA;
  const ex = bx - ux * tB, ey = by - uy * tB;
  const mx = (sx + ex) / 2 + uy * 18;
  const my = (sy + ey) / 2 - ux * 18;
  const d = `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`;
  const markerId = `mm-arr-${edge.type.replace(/[^a-z]/g, "")}`;
  const op = dimmed ? 0.1 : 1;
  return /* @__PURE__ */ React.createElement("g", { style: { opacity: op } }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d,
      fill: "none",
      stroke: style.stroke,
      strokeWidth: lit ? style.width + 0.8 : style.width,
      strokeDasharray: style.dash,
      markerEnd: `url(#${markerId})`
    }
  ), edge.type === "blocks" && /* @__PURE__ */ React.createElement("g", { transform: `translate(${mx}, ${my})` }, /* @__PURE__ */ React.createElement("line", { x1: "-10", y1: "-10", x2: "10", y2: "10", stroke: style.stroke, strokeWidth: "3" }), /* @__PURE__ */ React.createElement("line", { x1: "-10", y1: "10", x2: "10", y2: "-10", stroke: style.stroke, strokeWidth: "3" })), edge.label && (lit || !dimmed) && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: mx,
      y: my - 3,
      textAnchor: "middle",
      fontFamily: "var(--mono)",
      fontSize: "9",
      letterSpacing: "0.5",
      fill: lit ? style.stroke : "#948c7d",
      opacity: lit ? 0.95 : 0.6
    },
    edge.label
  ));
}
function NodeDetail({ n, inEdges, outEdges }) {
  const cat = CAT_COLOR[n.cat] || CAT_COLOR.loop;
  return /* @__PURE__ */ React.createElement("div", { className: "mm-detail" }, /* @__PURE__ */ React.createElement("div", { className: "mm-pill", style: { background: cat.fill, color: cat.text, borderColor: cat.stroke } }, n.cat.toUpperCase()), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-label" }, n.label), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-name" }, n.name), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-formula" }, n.formula), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-defn" }, n.defn), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-wide" }, n.wide), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-block" }, /* @__PURE__ */ React.createElement("div", { className: "micro" }, "DEPENDS ON (", inEdges.length, ")"), /* @__PURE__ */ React.createElement("ul", { className: "mm-edge-list" }, inEdges.length === 0 ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("em", null, "nothing in the model")) : inEdges.map((e, i) => {
    const src = NODES.find((n2) => n2.id === e.from);
    return /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "mm-rel" }, e.type), " ", /* @__PURE__ */ React.createElement("b", null, src.label), " ", /* @__PURE__ */ React.createElement("span", { className: "mm-rname" }, src.name));
  }))), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-block" }, /* @__PURE__ */ React.createElement("div", { className: "micro" }, "DETERMINES (", outEdges.length, ")"), /* @__PURE__ */ React.createElement("ul", { className: "mm-edge-list" }, outEdges.length === 0 ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("em", null, "terminal")) : outEdges.map((e, i) => {
    const dst = NODES.find((n2) => n2.id === e.to);
    return /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "mm-rel" }, e.type), " ", /* @__PURE__ */ React.createElement("b", null, dst.label), " ", /* @__PURE__ */ React.createElement("span", { className: "mm-rname" }, dst.name));
  }))), /* @__PURE__ */ React.createElement("div", { className: "mm-detail-block" }, /* @__PURE__ */ React.createElement("div", { className: "micro" }, "CHARACTERISTIC TIMESCALE"), /* @__PURE__ */ React.createElement("div", { className: "mm-ts" }, n.timescale)));
}
function Legend() {
  return /* @__PURE__ */ React.createElement("div", { className: "mm-legend" }, /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginTop: 14 } }, "EDGE RELATIONS"), /* @__PURE__ */ React.createElement("ul", { className: "mm-legend-list" }, Object.entries(EDGE_STYLE).map(([k, s]) => /* @__PURE__ */ React.createElement("li", { key: k }, /* @__PURE__ */ React.createElement("svg", { width: "42", height: "10" }, /* @__PURE__ */ React.createElement(
    "line",
    {
      x1: "2",
      y1: "5",
      x2: "40",
      y2: "5",
      stroke: s.stroke,
      strokeWidth: s.width,
      strokeDasharray: s.dash
    }
  )), /* @__PURE__ */ React.createElement("span", null, k)))), /* @__PURE__ */ React.createElement("div", { className: "micro", style: { marginTop: 14 } }, "NODE CATEGORIES"), /* @__PURE__ */ React.createElement("ul", { className: "mm-legend-list" }, ["loop", "platform", "subject", "engagement", "temporal", "foreclosure", "cohort", "instrument", "assumption", "theorem", "mode"].map((k) => {
    const c = CAT_COLOR[k];
    return /* @__PURE__ */ React.createElement("li", { key: k }, /* @__PURE__ */ React.createElement("span", { className: "mm-sw", style: { background: c.fill, border: `1.5px solid ${c.stroke}` } }), /* @__PURE__ */ React.createElement("span", null, k));
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(MindMap, null));
