/**
 * Closed-loop libidinal economy — simulation engine.
 *
 * Ported from sim.jsx in the original simulator artifact. Implements the
 * six equations from §1 of the mathematical exposition as discrete-time
 * dynamics on a tick grid of δ_min. State evolution, observation, policy
 * (REINFORCE-style ascent), surplus accumulation, Hawkes intensities,
 * Kuramoto phase coupling, and the metric superego D_KL dynamics all live
 * in one step function.
 *
 * Three intervention modes are exposed via knobs:
 *   beta    — Mode A regularization (architectural)
 *   Lm      — Mode B maintenance labor (artisanal)
 *   sigmaC  — Mode C injected observation noise (disruption-as-form)
 */

export const REGISTERS = ["S", "C", "P", "K"] as const;
export type Register = (typeof REGISTERS)[number];

export type RegisterMap = Record<Register, number>;

export interface SimState {
  t: number;
  deltaMin: number;
  thetaRef: number;
  u: RegisterMap;
  theta: RegisterMap;
  nu: RegisterMap;
  pi_R: RegisterMap;
  sigmaEta: number;
  isi: number;
  lastStim: number;
  events: { kind: "y"; reg: Register; t: number }[];
  isiHist: number[];
  uTrail: Record<Register, number[]>;
  sigmaSurplus: RegisterMap;
  sigmaSurplusRate: number;
  Hbelief: number;
  Dkl: number;
  phaseB: number;
  phaseM: number;
  omegaB: number;
  omegaM: number;
  K_bm: number;
  locked: boolean;
  lambdaBase: RegisterMap;
  lambda: RegisterMap;
  alpha: number[][];
  LmStar: number;
}

export interface SimKnobs {
  beta: number;
  Lm: number;
  sigmaC: number;
}

const RKEYS: Register[] = ["S", "C", "P", "K"];

function zerosMat(n: number): number[][] {
  return Array.from({ length: n }, () => Array(n).fill(0));
}

export function makeInitialState(): SimState {
  return {
    t: 0,
    deltaMin: 0.02,
    thetaRef: 60,
    u: { S: 0.42, C: 0.55, P: 0.38, K: 0.66 },
    theta: { S: 0.25, C: 0.25, P: 0.25, K: 0.25 },
    nu: { S: 0.5, C: 0.5, P: 0.5, K: 0.5 },
    pi_R: { S: 0.5, C: 0.5, P: 0.5, K: 0.5 },
    sigmaEta: 0.05,
    isi: 1,
    lastStim: 0,
    events: [],
    isiHist: [],
    uTrail: { S: [], C: [], P: [], K: [] },
    sigmaSurplus: { S: 0, C: 0, P: 0, K: 0 },
    sigmaSurplusRate: 0,
    Hbelief: Math.log(4),
    Dkl: 0.65,
    phaseB: 0,
    phaseM: 0,
    omegaB: 0.018,
    omegaM: 0.025,
    K_bm: 0,
    locked: false,
    lambdaBase: { S: 0.04, C: 0.04, P: 0.04, K: 0.04 },
    lambda: { S: 0.04, C: 0.04, P: 0.04, K: 0.04 },
    alpha: zerosMat(4),
    LmStar: 0,
  };
}

/**
 * Advance the simulation by one tick. Pure function — does not mutate
 * `prev`. Uses Math.random() internally; pass a seeded RNG by monkey-
 * patching globalThis.Math.random temporarily for reproducible runs.
 */
export function step(prev: SimState, knobs: SimKnobs): SimState {
  const s: SimState = {
    ...prev,
    u: { ...prev.u },
    theta: { ...prev.theta },
    nu: { ...prev.nu },
    pi_R: { ...prev.pi_R },
    sigmaSurplus: { ...prev.sigmaSurplus },
    lambdaBase: { ...prev.lambdaBase },
    lambda: { ...prev.lambda },
    uTrail: {
      S: prev.uTrail.S.slice(),
      C: prev.uTrail.C.slice(),
      P: prev.uTrail.P.slice(),
      K: prev.uTrail.K.slice(),
    },
  };
  s.t = prev.t + 1;

  const beta = knobs.beta;
  const Lm = knobs.Lm;
  const sigmaC = knobs.sigmaC;
  const sigmaEta = 0.05 + sigmaC;
  s.sigmaEta = sigmaEta;

  // (3) Policy π — softmax over θ; β raises the firing threshold (Mode A).
  const temp = 0.12;
  let probs = RKEYS.map((k) => Math.exp(s.theta[k] / temp));
  const psum = probs.reduce((a, b) => a + b, 0);
  probs = probs.map((p) => p / psum);
  let cum = 0;
  const rsel = Math.random();
  let topReg: Register = "S";
  for (let i = 0; i < RKEYS.length; i++) {
    cum += probs[i];
    if (rsel <= cum) {
      topReg = RKEYS[i];
      break;
    }
  }
  const topVal = s.theta[topReg];
  const fireThreshold = 0.18 + beta * 0.55;
  // The floor scales with β so Mode A (β > 0) can actually suppress firing
  // enough to produce reflective-length no-input windows. At β = 0 the floor
  // is 0.015 (original tuning); at β = 10 it drops to 0.0005, permitting
  // 30s windows with positive probability.
  const fireFloor = Math.max(0.0005, 0.015 - beta * 0.0015);
  const fireProb = Math.max(
    fireFloor,
    topVal - fireThreshold + 0.62 - beta * 0.35
  );
  const fired = Math.random() < fireProb;

  let stim: { reg: Register; amp: number } | null = null;
  if (fired) {
    stim = { reg: topReg, amp: 0.6 + 0.4 * Math.random() };
    const isi = s.t - s.lastStim;
    s.isi = isi;
    s.lastStim = s.t;
    s.isiHist = [...prev.isiHist.slice(-499), isi];
  } else {
    s.isi = s.t - s.lastStim;
  }

  // (1) u_{t+1} = f(u_t, s_t) + ξ_t
  for (const k of RKEYS) {
    const drift = (Math.random() - 0.5) * 0.014;
    let next = s.u[k] + drift;
    if (stim && stim.reg === k) {
      const pull = 0.2 * stim.amp * (1 - Lm * 0.85);
      next = next + pull * (1 - next);
    } else {
      next = next + 0.005 * (0.5 - next);
    }
    s.u[k] = Math.max(0, Math.min(1, next));
    s.uTrail[k] = [...s.uTrail[k].slice(-1199), s.u[k]];
  }

  // (2) y_t = g(u_t) + η_t — engagement event probability
  let eventThisTick: { kind: "y"; reg: Register; t: number } | null = null;
  if (stim) {
    const baseP = 0.55 + 0.4 * s.u[stim.reg];
    const noisePenalty = 1 - 0.3 * sigmaC;
    const pEvent = baseP * (1 - Lm * 0.62) * noisePenalty;
    if (Math.random() < pEvent) {
      eventThisTick = { kind: "y", reg: stim.reg, t: s.t };
      // (5) Σ — extraction kernel ρ_i at left-limit
      const rho = 0.08 + 0.18 * prev.u[stim.reg];
      s.sigmaSurplus[stim.reg] = prev.sigmaSurplus[stim.reg] + rho;
    }
  }
  s.sigmaSurplusRate =
    0.95 * (prev.sigmaSurplusRate || 0) + 0.05 * (eventThisTick ? 1 : 0);

  // (4) θ_{t+1} = θ_t + α·∇R̂ — REINFORCE-style on the chosen register
  const alpha = 0.022;
  for (const k of RKEYS) {
    let grad: number;
    if (stim && stim.reg === k) {
      grad =
        (eventThisTick ? 1 : -0.4) * (1 - 0.6 * sigmaC) +
        (Math.random() - 0.5) * sigmaC * 0.7;
    } else {
      grad = -0.05 * s.theta[k];
    }
    s.theta[k] = Math.max(0.05, Math.min(1.2, s.theta[k] + alpha * grad));
  }
  const tsum = RKEYS.reduce((a, k) => a + s.theta[k], 0);
  for (const k of RKEYS) s.theta[k] = (s.theta[k] / tsum) * (RKEYS.length * 0.3);

  // Hawkes intensities decay toward baseline; jumps on each event.
  for (const k of RKEYS) {
    s.lambda[k] = 0.985 * prev.lambda[k] + 0.015 * s.lambdaBase[k];
  }
  if (eventThisTick) {
    const j = eventThisTick.reg;
    s.alpha = prev.alpha.map((r) => r.slice());
    for (const i of RKEYS) {
      const bump = i === j ? 0.04 : 0.012;
      const ji = RKEYS.indexOf(j);
      const ii = RKEYS.indexOf(i);
      s.alpha[ji][ii] = Math.min(0.85, 0.985 * s.alpha[ji][ii] + bump);
      s.lambda[i] = Math.min(1.0, s.lambda[i] + s.alpha[ji][ii] * 0.15);
    }
  } else {
    s.alpha = prev.alpha;
  }

  // Dividual condition: H(b_t) drifts toward 0 under exposure.
  const dropRate = 0.001 * (1 - sigmaC * 1.6);
  const noiseFloor = 0.32 + sigmaC * 0.78;
  s.Hbelief = Math.max(
    noiseFloor,
    prev.Hbelief - dropRate + (Math.random() - 0.5) * 0.004
  );

  // Metric superego D_KL: dD_KL/dt ≈ −h_0(β_u) + r(L_m).
  const beta_u_base = 0.016;
  const cop = 1.0;
  const h0 = beta_u_base * cop * cop;
  const r = Lm * 0.02 * cop;
  for (const k of RKEYS) s.pi_R[k] = 0.25 + 0.75 * s.theta[k];
  for (const k of RKEYS) {
    const delta = s.pi_R[k] - s.nu[k];
    s.nu[k] = Math.max(
      0,
      Math.min(1, s.nu[k] + beta_u_base * delta - r * Math.sign(delta))
    );
  }
  let dklRaw = 0;
  for (const k of RKEYS) {
    const p = Math.max(1e-3, s.nu[k]);
    const q = Math.max(1e-3, s.pi_R[k]);
    dklRaw += Math.abs(p - q) * 1.6;
  }
  s.Dkl = Math.max(0, prev.Dkl + (-h0 + r * 0.6));
  s.Dkl = 0.6 * s.Dkl + 0.4 * dklRaw;
  s.LmStar = h0 / Math.max(1e-6, 0.02 * cop);

  // Kuramoto phase: body entrains to medium under sustained policy.
  const intensity = Math.min(
    1,
    (RKEYS.reduce((a, k) => a + s.theta[k], 0) / RKEYS.length) * 1.5
  );
  s.K_bm = intensity * (1 - sigmaC * 0.45);
  s.phaseM = prev.phaseM + s.omegaM;
  s.phaseB =
    prev.phaseB +
    s.omegaB +
    s.K_bm * Math.sin(s.phaseM - prev.phaseB) * 0.05;
  const detuning = Math.abs(s.omegaB - s.omegaM);
  s.locked = s.K_bm > detuning;

  return s;
}

/** Mean of the four-register user state — a coarse 1D projection. */
export function projectU(state: SimState): number {
  return (state.u.S + state.u.C + state.u.P + state.u.K) / 4;
}
