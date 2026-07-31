var REGISTERS = [
  { id: "S", label: "Subject", glyph: "u\u02E2", note: "school / archive" },
  { id: "C", label: "Citizen", glyph: "u\u1D9C", note: "press / parliament" },
  { id: "P", label: "Person", glyph: "u\u1D56", note: "church / family" },
  { id: "K", label: "Consumer", glyph: "u\u1D4F", note: "marketplace" }
];
var RKEYS = ["S", "C", "P", "K"];
function makeInitialState() {
  return {
    t: 0,
    deltaMin: 0.02,
    /* cosmetic; tick = 20 ms     */
    thetaRef: 60,
    /* ticks ≈ 1.2 s reflection   */
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
    /* for I(u^i;u^j) estimate    */
    sigmaSurplus: { S: 0, C: 0, P: 0, K: 0 },
    sigmaSurplusRate: 0,
    /* dΣ/dt smoothed             */
    Hbelief: Math.log(4),
    /* H(b_t)                     */
    Dkl: 0.65,
    /* D_KL(ν_u ‖ π_R̂)            */
    phaseB: 0,
    phaseM: 0,
    omegaB: 0.018,
    omegaM: 0.025,
    K_bm: 0,
    locked: false,
    /* Hawkes intensity (self+cross excitation), per-register baseline */
    lambdaBase: { S: 0.04, C: 0.04, P: 0.04, K: 0.04 },
    lambda: { S: 0.04, C: 0.04, P: 0.04, K: 0.04 },
    /* α_ij — cross-excitation matrix (rows = j, cols = i)             */
    alpha: zerosMat(4),
    /* L_m* threshold (computed from β_u and c_op below)               */
    LmStar: 0
  };
}
function zerosMat(n) {
  return Array.from({ length: n }, () => Array(n).fill(0));
}
function step(prev, knobs) {
  const s = {
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
      K: prev.uTrail.K.slice()
    }
  };
  s.t = prev.t + 1;
  const beta = knobs.beta;
  const Lm = knobs.Lm;
  const sigmaC = knobs.sigmaC;
  const sigmaEta = 0.05 + sigmaC;
  s.sigmaEta = sigmaEta;
  const temp = 0.12;
  let probs = RKEYS.map((k) => Math.exp(s.theta[k] / temp));
  const psum = probs.reduce((a, b) => a + b, 0);
  probs = probs.map((p) => p / psum);
  let cum = 0, rsel = Math.random(), topReg = "S";
  for (let i = 0; i < RKEYS.length; i++) {
    cum += probs[i];
    if (rsel <= cum) {
      topReg = RKEYS[i];
      break;
    }
  }
  const topVal = s.theta[topReg];
  const fireThreshold = 0.18 + beta * 0.55;
  const fireProb = Math.max(0.015, topVal - fireThreshold + 0.62 - beta * 0.35);
  const fired = Math.random() < fireProb;
  let stim = null;
  if (fired) {
    stim = { reg: topReg, amp: 0.6 + 0.4 * Math.random() };
    const isi = s.t - s.lastStim;
    s.isi = isi;
    s.lastStim = s.t;
    s.isiHist = [...prev.isiHist.slice(-499), isi];
  }
  for (const k of RKEYS) {
    const drift = (Math.random() - 0.5) * 0.014;
    let next = s.u[k] + drift;
    if (stim && stim.reg === k) {
      const pull = 0.2 * stim.amp * (1 - Lm * 0.85);
      next = next + pull * (1 - next);
    } else {
      next = next + 5e-3 * (0.5 - next);
    }
    s.u[k] = Math.max(0, Math.min(1, next));
    s.uTrail[k] = [...s.uTrail[k].slice(-1199), s.u[k]];
  }
  let eventThisTick = null;
  if (stim) {
    const baseP = 0.55 + 0.4 * s.u[stim.reg];
    const noisePenalty = 1 - 0.3 * sigmaC;
    const pEvent = baseP * (1 - Lm * 0.62) * noisePenalty;
    if (Math.random() < pEvent) {
      eventThisTick = { kind: "y", reg: stim.reg, t: s.t };
      const rho = 0.08 + 0.18 * prev.u[stim.reg];
      s.sigmaSurplus[stim.reg] = prev.sigmaSurplus[stim.reg] + rho;
    }
  }
  s.sigmaSurplusRate = 0.95 * (prev.sigmaSurplusRate || 0) + 0.05 * (eventThisTick ? 1 : 0);
  const alpha = 0.022;
  for (const k of RKEYS) {
    let grad = 0;
    if (stim && stim.reg === k) {
      grad = (eventThisTick ? 1 : -0.4) * (1 - 0.6 * sigmaC) + (Math.random() - 0.5) * sigmaC * 0.7;
    } else {
      grad = -0.05 * s.theta[k];
    }
    s.theta[k] = Math.max(0.05, Math.min(1.2, s.theta[k] + alpha * grad));
  }
  const tsum = RKEYS.reduce((a, k) => a + s.theta[k], 0);
  for (const k of RKEYS) s.theta[k] = s.theta[k] / tsum * (RKEYS.length * 0.3);
  for (const k of RKEYS) {
    s.lambda[k] = 0.985 * prev.lambda[k] + 0.015 * s.lambdaBase[k];
  }
  if (eventThisTick) {
    const j = eventThisTick.reg;
    s.alpha = prev.alpha.map((r2) => r2.slice());
    for (const i of RKEYS) {
      const bump = i === j ? 0.04 : 0.012;
      const ji = RKEYS.indexOf(j), ii = RKEYS.indexOf(i);
      s.alpha[ji][ii] = Math.min(0.85, 0.985 * s.alpha[ji][ii] + bump);
      s.lambda[i] = Math.min(1, s.lambda[i] + s.alpha[ji][ii] * 0.15);
    }
  } else {
    s.alpha = prev.alpha;
  }
  const dropRate = 1e-3 * (1 - sigmaC * 1.6);
  const noiseFloor = 0.32 + sigmaC * 0.78;
  s.Hbelief = Math.max(
    noiseFloor,
    prev.Hbelief - dropRate + (Math.random() - 0.5) * 4e-3
  );
  const beta_u_base = 0.016;
  const cop = 1;
  const h0 = beta_u_base * cop * cop;
  const r = Lm * 0.02 * cop;
  for (const k of RKEYS) s.pi_R[k] = 0.25 + 0.75 * s.theta[k];
  for (const k of RKEYS) {
    const delta = s.pi_R[k] - s.nu[k];
    s.nu[k] = Math.max(0, Math.min(1, s.nu[k] + beta_u_base * delta - r * Math.sign(delta)));
  }
  let dklRaw = 0;
  for (const k of RKEYS) {
    const p = Math.max(1e-3, s.nu[k]), q = Math.max(1e-3, s.pi_R[k]);
    dklRaw += Math.abs(p - q) * 1.6;
  }
  s.Dkl = Math.max(0, prev.Dkl + (-h0 + r * 0.6));
  s.Dkl = 0.6 * s.Dkl + 0.4 * dklRaw;
  s.LmStar = h0 / Math.max(1e-6, 0.02 * cop);
  const intensity = Math.min(
    1,
    RKEYS.reduce((a, k) => a + s.theta[k], 0) / RKEYS.length * 1.5
  );
  s.K_bm = intensity * (1 - sigmaC * 0.45);
  s.phaseM = prev.phaseM + s.omegaM;
  s.phaseB = prev.phaseB + s.omegaB + s.K_bm * Math.sin(s.phaseM - prev.phaseB) * 0.05;
  const detuning = Math.abs(s.omegaB - s.omegaM);
  s.locked = s.K_bm > detuning * 28;
  const evs = prev.events.slice(-799);
  if (stim) evs.push({ kind: "s", reg: stim.reg, t: s.t });
  if (eventThisTick) evs.push(eventThisTick);
  s.events = evs;
  return s;
}
function survivalEmpirical(isiHist, taus) {
  if (!isiHist.length) return taus.map(() => 1);
  return taus.map((tau) => {
    let c = 0;
    for (const v of isiHist) if (v > tau) c++;
    return c / isiHist.length;
  });
}
function survivalBaseline(taus, meanIsi) {
  const lam = 1 / Math.max(60, meanIsi * 8);
  return taus.map((tau) => Math.exp(-lam * tau));
}
function survivalBound(taus, deltaMin, cv = 1) {
  const C = Math.max(1, cv);
  return taus.map((tau) => Math.min(1, C * Math.exp(-tau / 8)));
}
function miMatrix(uTrail, win = 400) {
  const series = RKEYS.map((k) => uTrail[k].slice(-win));
  const n = series[0].length;
  if (n < 30) return zerosMat(4);
  const M = zerosMat(4);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      M[i][j] = i === j ? 1 : Math.max(0, corr(series[i], series[j]) ** 2);
    }
  }
  return M;
}
function corr(a, b) {
  const n = Math.min(a.length, b.length);
  let ma = 0, mb = 0;
  for (let i = 0; i < n; i++) {
    ma += a[i];
    mb += b[i];
  }
  ma /= n;
  mb /= n;
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < n; i++) {
    const x = a[i] - ma, y = b[i] - mb;
    num += x * y;
    da += x * x;
    db += y * y;
  }
  return num / Math.sqrt(Math.max(1e-9, da * db));
}
function chronoDebt(taus, isiHist) {
  const Lam = survivalEmpirical(isiHist, taus);
  const mean = isiHist.length ? isiHist.reduce((a, b) => a + b, 0) / isiHist.length : 30;
  const Lam0 = survivalBaseline(taus, mean);
  return { Lam, Lam0, D: taus.map((_, k) => Math.max(0, Lam0[k] - Lam[k])) };
}
function reclamationVariance(taus, isiHist, N = 1) {
  const S = survivalEmpirical(isiHist, taus);
  return taus.map((_, k) => {
    const p = Math.max(1e-9, S[k]);
    return 1 / (Math.max(1, N) * p);
  });
}
Object.assign(window, {
  REGISTERS,
  RKEYS,
  makeInitialState,
  step,
  survivalEmpirical,
  survivalBaseline,
  survivalBound,
  miMatrix,
  chronoDebt,
  reclamationVariance
});
