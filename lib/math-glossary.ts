/**
 * Plain-English glosses for the framework's symbols. Keyed by the exact
 * LaTeX source passed to <M>. The <M> wrapper looks up its source here
 * and, if found, surfaces the gloss as a hover/tap tooltip.
 *
 * Gloss style: 5–15 words, plain English, present tense, no jargon. The
 * optional href points at the math doc section where the symbol is
 * formally introduced — readers who want the rigorous treatment can
 * jump there directly.
 *
 * Add aliases if the same symbol appears in multiple LaTeX shapes
 * (e.g., spacing variants) — the lookup is exact-string after trim+
 * whitespace-collapse.
 */

export interface GlossEntry {
  gloss: string;
  href?: string;
}

const ENTRIES: Record<string, GlossEntry> = {
  // ── Core platform / policy ─────────────────────────────────────────
  [String.raw`\theta^*`]: {
    gloss: "the converged platform policy — what gradient ascent settles on",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\theta_{\mathrm{ref}}`]: {
    gloss: "the reflective-processing threshold — minimum no-input duration that supports deliberation (seconds to minutes)",
    href: "/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem",
  },
  [String.raw`\delta_{\min}`]: {
    gloss: "the tick rate — how often the platform can fire a new stimulus (milliseconds to sub-second)",
    href: "/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem",
  },
  [String.raw`\theta_{\mathrm{ref}}/\delta_{\min}`]: {
    gloss: "the ratio that drives the foreclosure: how many tick-windows the reflective threshold spans",
    href: "/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem",
  },
  [String.raw`\tilde\theta(\beta)`]: {
    gloss: "the policy continuation as β is dialed up from zero (Mode A's path)",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`\bar\beta`]: {
    gloss: "the supremum of β-values for which Mode A's continuation is well-defined",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },

  // ── Engagement reward ─────────────────────────────────────────────
  [String.raw`\hat{R}`]: {
    gloss: "the engagement reward the platform actually optimizes — session length, retention, ad value",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\hat{R}'`]: {
    gloss: "Mode A's modified reward — R̂ plus a bonus on long inter-stimulus intervals",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`\sup_\pi \mathbb{E}[\hat{R}]`]: {
    gloss: "the best engagement reward the platform can achieve over its policy class",
  },
  [String.raw`\mathbb{E}[\hat{R}]`]: {
    gloss: "the expected engagement reward under the current policy",
  },

  // ── Mode A: architectural intervention ────────────────────────────
  [String.raw`\beta`]: {
    gloss: "Mode A's regularization knob — how heavily long pauses are rewarded",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`B`]: {
    gloss: "bonus achievement — accumulated reward from long inter-stimulus intervals",
  },
  [String.raw`\tau^{(k)}`]: {
    gloss: "the k-th inter-stimulus interval — time between consecutive platform pings",
    href: "/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem",
  },
  [String.raw`\tau^*`]: {
    gloss: "the target no-input duration that Mode A's bonus rewards (≥ θ_ref)",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`b(\tau^{(k)})`]: {
    gloss: "bonus function — paid on each pause whose length exceeds the target τ*",
  },
  [String.raw`\beta \cdot b(\tau^{(k)})`]: {
    gloss: "Mode A's payload — what Mode A adds to the platform's reward",
  },
  [String.raw`P(\beta)`]: {
    gloss: "the probability of recovering a reflective window under Mode A at regularization β",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`P(0) \approx 0`]: {
    gloss: "without intervention, recovery probability is operationally zero (Lemma 1)",
  },
  [String.raw`\sup P(\beta) > 0`]: {
    gloss: "Mode A can in principle recover arbitrarily large probability",
  },
  [String.raw`\epsilon \in (0, \epsilon_{\max})`]: {
    gloss: "any positive recovery probability up to the achievable maximum",
  },

  // ── Mode B: artisanal intervention ────────────────────────────────
  [String.raw`L_m`]: {
    gloss: "the user's maintenance labor — Mode B's effort knob",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`L_m^*`]: {
    gloss: "the labor threshold above which the user holds the gap open",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`L_m^* \approx 0.80`]: {
    gloss: "the threshold value in the worked numerical example",
  },
  [String.raw`L_m \ge L_m^*`]: {
    gloss: "enough labor to maintain the gap",
  },
  [String.raw`L_m < L_m^*`]: {
    gloss: "insufficient labor — gap collapses to zero",
  },
  [String.raw`L_m > 0`]: {
    gloss: "any positive maintenance labor",
  },
  [String.raw`\nu_u`]: {
    gloss: "the user's self-evaluative distribution — their own internal model of what they value",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`\pi_{\hat{R}}`]: {
    gloss: "the platform's implicit ideal-user distribution — what would maximize R̂",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`D_{\mathrm{KL}}(\nu_u \,\|\, \pi_{\hat{R}})`]: {
    gloss: "the gap between the user's self-evaluation and the platform's ideal — Mode B holds this above zero",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`D_{\mathrm{KL}} > 0`]: {
    gloss: "the gap is preserved — user and platform have not converged",
  },
  [String.raw`D_{\mathrm{KL}}`]: {
    gloss: "Kullback-Leibler divergence — the gap between user's self-evaluation and platform's ideal",
  },
  [String.raw`dD_{\mathrm{KL}}/dt = -h_0(\beta_u) + r(L_m)`]: {
    gloss: "the gap's evolution — platform pressure h₀ closes it, user labor r opens it",
  },
  [String.raw`L_m^* = r^{-1}(h_0)`]: {
    gloss: "the equilibrium where user labor exactly counters platform pressure",
  },

  // ── Mode C: disruption-as-form ────────────────────────────────────
  [String.raw`\eta_t`]: {
    gloss: "observation noise — discrepancy between user behavior and what the platform sees",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\mathrm{Var}(\eta_t)`]: {
    gloss: "noise variance — how illegible the user is to the platform",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`\sigma_\eta^+`]: {
    gloss: "Mode C's knob — added observation noise above baseline",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`\sigma_C > 0`]: {
    gloss: "Mode C is active — observation noise inflated above baseline",
  },
  [String.raw`H(u \mid y_{1:t})`]: {
    gloss: "residual entropy — what the platform still doesn't know about you given observations",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`H(u \mid y_{1:t}) \to 0`]: {
    gloss: "the dividual condition — under closure, platform's uncertainty collapses",
  },
  [String.raw`H_{\mathrm{res}}`]: {
    gloss: "Mode C's residual entropy — what stays unknown to the platform",
    href: "/the-mathematics#5-three-modes-of-intervention",
  },
  [String.raw`H_{\mathrm{res}} > 0`]: {
    gloss: "positive residual entropy — the platform never closes the gap",
  },

  // ── Foreclosure / survival ────────────────────────────────────────
  [String.raw`S(\theta_{\mathrm{ref}};\, \theta^*) \le C(c_v)\, \exp(-\theta_{\mathrm{ref}}/\delta_{\min})`]: {
    gloss: "the foreclosure bound: probability of a reflective window decays exponentially fast",
    href: "/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem",
  },
  [String.raw`S(\tau; t)`]: {
    gloss: "survival function — probability that the next pause exceeds τ at time t",
  },
  [String.raw`\tau > \tau^*`]: {
    gloss: "pauses longer than the bonus-eligible target",
  },
  [String.raw`E_\tau`]: {
    gloss: "the event that the next τ ticks contain no stimulus (a no-input window)",
  },
  [String.raw`I(\tau)`]: {
    gloss: "conditional autocovariance of user state at lag τ — undefined when no-input windows vanish",
    href: "/the-mathematics#4-the-foreclosure-lemma-and-the-reclamation-theorem",
  },
  [String.raw`I(\tau) := \mathrm{Cov}(u_t,\, u_{t+\tau} \mid E_\tau)`]: {
    gloss: "the formal definition: autocovariance of user state, conditioned on a no-input window",
  },
  [String.raw`E_\tau := \{s_{t'} = 0 \text{ for } t < t' \le t+\tau\}`]: {
    gloss: "the no-input window event — no stimulus for the next τ ticks",
  },

  // ── Hawkes / somatic ──────────────────────────────────────────────
  [String.raw`s_t`]: {
    gloss: "the stimulus at time t — whatever the platform delivers",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\lambda^i(t)`]: {
    gloss: "the firing rate for register i at time t (Subject/Citizen/Person/Consumer)",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\lambda^i(t) = \lambda_0^i + \sum_j \alpha_{ij} \int \kappa(t-s)\, dN_s^j`]: {
    gloss: "Hawkes intensity: a baseline plus accumulated influence of past events across all registers",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`dN^i_t`]: {
    gloss: "the engagement-event differential for register i — what your body produces at this tick",
  },
  [String.raw`dN^s_t`]: { gloss: "engagement event in the Subject register" },
  [String.raw`dN^c_t`]: { gloss: "engagement event in the Citizen register" },
  [String.raw`dN^p_t`]: { gloss: "engagement event in the Person register" },
  [String.raw`dN^k_t`]: { gloss: "engagement event in the Consumer register" },
  [String.raw`I(u^i; u^j)`]: {
    gloss: "mutual information between two registers — how much one tells the platform about the other",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },

  // ── Surplus / cohort ──────────────────────────────────────────────
  [String.raw`\Sigma`]: { gloss: "total surplus — the platform's accumulated yield" },
  [String.raw`\Sigma(T)`]: {
    gloss: "total platform surplus accumulated over horizon T",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\Sigma^i(T) = \int_0^T \rho_i(u_{t^-}, y_{t^-})\, dN^i_t`]: {
    gloss: "per-register surplus — the integral of the surplus kernel against engagement events",
  },
  [String.raw`T_{\mathrm{mix}}`]: {
    gloss: "the cohort's mixing time — how long until a population converges (months to years for engagement platforms)",
    href: "/the-mathematics#6-other-named-results",
  },
  [String.raw`T_{\mathrm{mix}}(\pi')`]: {
    gloss: "mixing time after a Mode A architectural change — months to years",
  },

  // ── Captured resonance (Kuramoto) ─────────────────────────────────
  [String.raw`\varphi_b`]: {
    gloss: "biological phase — the body's intrinsic rhythm (circadian, attentional)",
    href: "/the-mathematics#1-the-closed-loop-dynamics",
  },
  [String.raw`\varphi_m`]: {
    gloss: "medium phase — the temporal envelope of the platform's delivery",
  },
  [String.raw`K_{bm}`]: {
    gloss: "coupling strength between body and medium phases — strong enough and the body locks onto the medium",
  },

  // ── Frequently appearing standalones ──────────────────────────────
  [String.raw`\pi'`]: { gloss: "the policy after a Mode A modification" },
  [String.raw`\Theta`]: { gloss: "the policy parameter space" },
  [String.raw`c_v`]: { gloss: "coefficient of variation — variability of inter-arrival times" },
  [String.raw`C(c_v)`]: { gloss: "renewal-bound prefactor — depends on the inter-arrival distribution's variability" },
};

/** Look up a gloss for a LaTeX source string. Returns undefined if absent. */
export function findGloss(latex: string): GlossEntry | undefined {
  const normalized = latex.trim().replace(/\s+/g, " ");
  return ENTRIES[normalized] ?? ENTRIES[latex];
}
