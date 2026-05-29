/**
 * Closed-loop simulation engine for v2 dynamics plates.
 *
 * A minimal implementation of the framework's (P1)–(P5) setup
 * (apparatus §0.1) reduced to a 1-D scalar instance suitable for
 * interactive visualization:
 *
 *   User state u ∈ ℝ     (abstracts the four-register decomposition)
 *   Policy θ ∈ [0, 1]   (the platform parameter — higher = more frequent
 *                        stimulus; θ_max = 1 corresponds to rate-saturation
 *                        at 1/δ_min per Lemma 1 Step 2)
 *   Inter-stimulus intervals τ_k — exponential with rate θ/δ_min
 *   Reward Ȓ — engagement events (P-I monotone)
 *   Policy update — gradient ascent on Ȓ; convergence rate is set by the
 *                   operator contraction modulus κ_Φ = (β/α)·L_D < 1 per (R1)
 *                   — distribution-sensitivity L_D times the reward's
 *                   condition number β/α (Perdomo et al. 2020). The product
 *                   L_R·L_D is the objective-value sensitivity, not the
 *                   modulus, and is not what governs convergence.
 *
 * The model is intentionally simplified: ISIs are exponential rather than
 * the full Markov-kernel-induced distribution; the four-register
 * decomposition collapses to scalar u; the reward functional is a fixed
 * linear function of recent engagement count rather than an arbitrary
 * non-decreasing functional. The simplifications preserve Lemma 1's
 * qualitative behavior (θ_t → θ_max; S(θ_ref; θ_t) → operational zero)
 * which is what the plate visualizes.
 *
 * For the full sim (multi-register, networked, with the full apparatus
 * setup) see Phase 3's primary sim engine (not yet built).
 */

export interface SimParams {
  /**
   * Reward smoothness β. With the strong-concavity modulus α, the condition
   * number β/α scales the operator contraction modulus κ_Φ = (β/α)·L_D.
   */
  beta: number;
  /** Reward strong-concavity modulus α. The κ_Φ denominator. */
  alpha: number;
  /** Performative-distribution Lipschitz constant L_D. */
  L_D: number;
  /** Minimum tick spacing δ_min. The technical firing-rate floor. */
  deltaMin: number;
  /** Structural-separation ratio θ_ref / δ_min. Empirically 10^3 to 10^5. */
  thetaRefRatio: number;
  /** Initial policy parameter. */
  theta0: number;
}

export const DEFAULT_PARAMS: SimParams = {
  beta: 0.4,
  alpha: 1.0,
  L_D: 0.5,
  deltaMin: 1.0,
  thetaRefRatio: 1e3,
  theta0: 0.01,
};

export interface SimState {
  /** Current policy parameter θ_t ∈ [0, 1]. */
  theta: number;
  /** Current tick. */
  t: number;
}

export function initialState(params: SimParams = DEFAULT_PARAMS): SimState {
  return { theta: params.theta0, t: 0 };
}

/**
 * Policy update — one Robbins–Monro step.
 *
 * The operator modulus κ_Φ := (β/α)·L_D < 1 sets the convergence rate of
 * θ_t to the rate-saturating policy θ* = 1 (Lemma 1 Step 2). We model
 * this as:
 *
 *   θ_{t+1} - θ* = κ_Φ · (θ_t - θ*)
 *
 * which gives geometric convergence to θ* at rate κ_Φ. The closer κ_Φ is
 * to 1, the slower the convergence; at κ_Φ = 1 the iteration stops moving
 * (the contractivity boundary, Theorem 12).
 *
 * For visualization, we want the convergence visible over ~50–500 ticks
 * rather than ~3000 (which the strict κ_Φ < 1 rate would give for
 * κ_Φ ≈ 0.8). We multiply κ_Φ by a visualization-time-compression factor
 * (1/4) so the dynamics complete in a few seconds at 60fps simulation
 * speed.
 */
const TIME_COMPRESSION = 0.25;

export function step(state: SimState, params: SimParams): SimState {
  const kappa = Math.min((params.beta / params.alpha) * params.L_D, 0.999);
  const thetaStar = 1.0;
  // θ_{t+1} - θ* = κ · (θ_t - θ*)
  // Equivalently: θ_{t+1} = θ_t + (1 - κ) · (θ* - θ_t)
  const dt = TIME_COMPRESSION * (1 - kappa);
  const newTheta = state.theta + dt * (thetaStar - state.theta);
  return { theta: Math.min(newTheta, thetaStar), t: state.t + 1 };
}

/**
 * Survival function S(τ; θ) under the framework's exponential-ISI
 * simplification.
 *
 * Under the framework (Lemma 1 Step 3), at policy θ the inter-arrival
 * distribution has mean 1/λ(θ) where λ(θ) = θ · λ_max = θ / δ_min. The
 * exponential ISIs give
 *
 *   S(τ; θ) = exp(-θ · τ / δ_min).
 *
 * For θ → 1 and τ = θ_ref, S(θ_ref; θ) = exp(-θ_ref/δ_min) which, at
 * the structural-separation ratio θ_ref/δ_min = 10^3, gives S < 10^(-434).
 * Operational zero. This matches Lemma 1(b)'s polynomial bound regime
 * up to the much sharper exponential decay the MGF condition gives in
 * Lemma 1(c).
 */
export function survival(tau: number, theta: number, params: SimParams): number {
  return Math.exp((-theta * tau) / params.deltaMin);
}

/**
 * Compute the survival function at a set of τ-values.
 *
 * The τ-values should be log-spaced to render cleanly on a log-scale
 * x-axis (per the foreclosure-clock plate convention: 5 px per order
 * of magnitude).
 */
export function survivalCurve(
  thetas: number,
  taus: number[],
  params: SimParams,
): number[] {
  return taus.map((tau) => survival(tau, thetas, params));
}

/**
 * Generate log-spaced τ-values from δ_min to θ_ref · 10 (one order of
 * magnitude past the reflective threshold).
 */
export function generateLogSpacedTaus(
  params: SimParams = DEFAULT_PARAMS,
  count = 80,
): number[] {
  const tauMin = params.deltaMin;
  const tauMax = params.deltaMin * params.thetaRefRatio * 10;
  const logMin = Math.log10(tauMin);
  const logMax = Math.log10(tauMax);
  const taus: number[] = [];
  for (let i = 0; i < count; i++) {
    const logTau = logMin + (i / (count - 1)) * (logMax - logMin);
    taus.push(Math.pow(10, logTau));
  }
  return taus;
}

/**
 * θ_ref in absolute time units (θ_ref/δ_min · δ_min).
 */
export function thetaRef(params: SimParams = DEFAULT_PARAMS): number {
  return params.thetaRefRatio * params.deltaMin;
}
