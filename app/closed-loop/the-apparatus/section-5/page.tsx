/**
 * Apparatus §5 — Intervention as causal hierarchy.
 *
 * The framework's central political content. Three intervention modes
 * (A, B, C), each at a structurally distinct site (reward R, response
 * T, observation O). The 2×2 taxonomy adds the imposition-source axis.
 * The Mode A scaffold's five features specify what makes the formal
 * possibility a substantive political claim.
 *
 * Single page with anchored subsections — matches the §0 pattern.
 *
 * Source: the canonical apparatus manuscript, §5.0-§5.3.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  ProofEnd,
  Reads,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-5";

export const metadata: Metadata = {
  title: "§5 Intervention modes — the apparatus — closed-loop",
  description:
    "The framework's central political content. Three intervention modes — A (reward), B (response), C (observation) — in a 2×2 causal taxonomy. The Mode A scaffold's five features.",
  alternates: { canonical: PATH },
};

export default function Section5Page() {
  return (
    <main className="min-h-screen px-sm py-md max-w-prose mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <Link href="/closed-loop/the-apparatus" className="hover:text-oxblood">the apparatus</Link>
        {" · "}
        <span className="text-ink-90">§5 · intervention modes</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        §5 Intervention as causal hierarchy
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Three modes · the 2×2 taxonomy · the Mode A scaffold
      </p>

      {/* In-page TOC */}
      <nav aria-label="In-page TOC" className="text-base mb-xl pl-sm border-l-2 border-paper-85">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">On this page</p>
        <ol className="space-y-xs text-ink-90">
          <li><Link href="#taxonomy" className="hover:text-oxblood">§5.0 The 2×2 taxonomy</Link></li>
          <li><Link href="#mode-a" className="hover:text-oxblood">§5.1 Proposition 1&apos; — Mode A (reward intervention)</Link></li>
          <li><Link href="#scaffold" className="hover:text-oxblood">§5.1.1 Mode A scaffold — five features</Link></li>
          <li><Link href="#mode-b" className="hover:text-oxblood">§5.2 Proposition 2&apos; — Mode B (response intervention)</Link></li>
          <li><Link href="#mode-c" className="hover:text-oxblood">§5.3 Proposition 3&apos; — Mode C (observation intervention)</Link></li>
        </ol>
      </nav>

      {/* Opening framing */}
      <p className="text-base text-ink-90 mb-lg max-w-prose">
        The architecture supplies three distinct intervention sites:
        the reward functional <M>{String.raw`\hat R`}</M> (Mode A); the
        user response kernel <M>{String.raw`T`}</M> (Mode B); the
        observation channel <M>{String.raw`O`}</M> (Mode C). The three
        modes are asymmetric, and the asymmetry has a structural
        cause: Mode A intervenes on the topmost layer of the
        performative optimization and modifies the fixed point of{" "}
        <M>{String.raw`\Phi`}</M> directly. Modes B and C intervene
        on <em>inputs</em> to <M>{String.raw`\Phi`}</M> and propagate
        to the fixed point only through the platform&apos;s
        re-optimization, which the platform&apos;s population-level
        averaging dampens. The unified statement is{" "}
        <Link
          href="/closed-loop/the-apparatus/section-7/theorem-9"
          className="text-oxblood hover:underline"
        >
          Theorem 9
        </Link>
        ; the per-mode propositions below are its corollaries.
      </p>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §5.0 The 2×2 taxonomy                                    */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="taxonomy" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§5.0 The 2×2 taxonomy</h2>
        <DepthLayers>
          <Caption>
            Two orthogonal axes: the <strong>intervention site</strong>{" "}
            (which structural variable is modified) and the{" "}
            <strong>imposition source</strong> (individual practice or
            regulatory imposition). The taxonomy makes the asymmetry
            of the three modes legible — and surfaces the fourth-cell
            mode (regulatory imposition on the observation channel)
            that emerges naturally from the cross-product.
          </Caption>
          <Middle>
            <div className="my-md overflow-x-auto">
              <table className="font-mono text-sm">
                <thead>
                  <tr className="border-b border-paper-85">
                    <th className="text-left pr-md pb-xs text-ink-70"></th>
                    <th className="text-left pr-md pb-xs text-ink-70">Site: reward <M>{String.raw`\hat R`}</M></th>
                    <th className="text-left pr-md pb-xs text-ink-70">Site: response <M>{String.raw`T`}</M></th>
                    <th className="text-left pb-xs text-ink-70">Site: observation <M>{String.raw`O`}</M></th>
                  </tr>
                </thead>
                <tbody className="text-ink-90">
                  <tr className="border-b border-paper-85">
                    <td className="pr-md py-xs font-bold">Individual practice</td>
                    <td className="pr-md py-xs italic text-ink-50">structurally vacuous</td>
                    <td className="pr-md py-xs">Mode B</td>
                    <td className="py-xs">Mode C</td>
                  </tr>
                  <tr>
                    <td className="pr-md py-xs font-bold">Regulatory imposition</td>
                    <td className="pr-md py-xs"><strong>Mode A</strong></td>
                    <td className="pr-md py-xs italic text-ink-50">population-coordinated response</td>
                    <td className="py-xs"><strong>fourth-cell</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-sm">
              The 2×2 separates two questions older critical-theory
              frameworks tended to conflate: which structural variable
              is being modified, and who is doing the modifying. The
              reward functional <M>{String.raw`\hat R`}</M>, the
              response kernel <M>{String.raw`T`}</M>, and the
              observation channel <M>{String.raw`O`}</M> are the
              framework&apos;s three intervention sites — derived
              from the apparatus&apos;s (P1)–(P5) setup. The
              imposition source is either individual practice (the
              reflective subject working on themselves) or regulatory
              imposition (the institutional apparatus acting on the
              platform). The cross-product gives six cells, two of
              which are structurally degenerate — individual practice
              on the reward functional (users cannot rewrite{" "}
              <M>{String.raw`\hat R`}</M>) and regulatory imposition
              on the response kernel (no policy acts on{" "}
              <M>{String.raw`T`}</M> directly for any non-coordinated
              population). The remaining four cells are the
              framework&apos;s intervention modes.
            </p>
            <p className="mb-sm">
              The top-left cell (individual practice on the reward) is
              structurally vacuous — users cannot rewrite the platform&apos;s
              reward functional. The remaining cells correspond to the
              three named modes plus the fourth-cell extension.
            </p>
            <p className="mb-sm">
              <em>The fourth-cell mode.</em> Regulatory imposition on
              the observation channel — structurally Mode A applied
              to the Mode C site. Top-of-hierarchy intervention on
              the observation-channel variable. The cell is empirically
              reachable: data-minimization mandates, default-on
              inferential noise, the right to inferential opacity.
              The policy-translation of the formal observation that{" "}
              <em>bounding the platform&apos;s information about the
              user bounds the platform&apos;s extraction from the
              user</em>. Zuboff&apos;s analysis of surveillance
              capitalism (
              <em>The Age of Surveillance Capitalism</em>, 2019)
              argued precisely this — that the platform&apos;s
              extractive capacity is grounded in its access to the
              behavioral surplus the observation channel produces.
              The fourth-cell mode is the apparatus reading of
              Zuboff&apos;s policy implication: regulate{" "}
              <M>{String.raw`O`}</M> as well as{" "}
              <M>{String.raw`\hat R`}</M>.
            </p>
          </Middle>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §5.1 Mode A                                              */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="mode-a" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§5.1 Proposition 1&apos; — Mode A (reward intervention)</h2>
        <DepthLayers>
          <Caption>
            Mode A modifies the reward functional with a regularizer
            that rewards the inter-stimulus interval (the pause)
            exceeding a threshold. The framework&apos;s central
            political claim: at sufficient regularization{" "}
            <M>{String.raw`\beta`}</M>, the survival probability at
            the reflective threshold becomes positive. Mode A breaks
            foreclosure where Modes B and C cannot.
          </Caption>
          <Middle>
            <p className="mb-sm">
              Mode A intervenes directly on the topmost layer of the
              optimization. The regularized functional{" "}
              <M>{String.raw`F'(\theta; \beta) = F(\theta) + \beta B(\theta)`}</M>{" "}
              (with <M>{String.raw`B`}</M> the survival-bonus
              integral; see Lemma 2) supplies a continuous parametric
              path from the unregularized foreclosure regime{" "}
              <M>{String.raw`\beta = 0`}</M> to a regime in which the
              pause-time at the reflective threshold becomes positive.
              By the intermediate value theorem on the continuous
              map <M>{String.raw`P(\beta)`}</M>, any target positive
              survival probability is achievable at some{" "}
              <M>{String.raw`\beta_\varepsilon`}</M>.
            </p>
            <p className="mb-sm">
              <em>Why Mode A is asymmetric.</em> The reward functional
              enters the optimization for every user simultaneously
              (apparatus §0, axiom P-I). Variation in{" "}
              <M>{String.raw`\hat R`}</M> propagates through the argmax
              at full strength —{" "}
              <M>{String.raw`O(1)`}</M> in the population size{" "}
              <M>{String.raw`N`}</M>. Modes B and C are{" "}
              <M>{String.raw`O(1/N)`}</M> at individual scale. The
              exact <M>{String.raw`N`}</M>-fold asymmetry follows from{" "}
              <Link
                href="/closed-loop/the-apparatus/section-7/theorem-9"
                className="text-oxblood hover:underline"
              >
                Theorem 9
              </Link>{" "}
              and vanishes at population-coordinated intervention scale.
            </p>
            <p className="mb-sm">
              <em>Why Mode A is &ldquo;harsh.&rdquo;</em> A platform
              that adopts Mode A is competitively dominated by
              platforms that don&apos;t. The regularization burns
              engagement; unilateral adoption is a competitive
              concession. Multi-platform coordination is required —
              regulation, industry-wide standards, treaty-level
              constraints — for Mode A to operate without driving
              the adopter out of the market.
            </p>
            <p className="mb-sm">
              The reader can{" "}
              <Link
                href="/closed-loop/v2-dynamics/intervention-asymmetry"
                className="text-oxblood hover:underline"
              >
                operate the intervention plate
              </Link>{" "}
              to see Mode A&apos;s effect on{" "}
              <M>{String.raw`\theta^*`}</M> at population scale versus
              Modes B and C at individual scale.
            </p>
          </Middle>
          <Formal label="Proposition 1' (Mode A breaks foreclosure)">
            <p className="mb-sm">
              <em>
                Under (R1)–(R2), (P-I)–(P-III), and the parametric
                setup of Lemma 2, define{" "}
                <M>{String.raw`P(\beta) := \Pr_{\mathcal{D}(\tilde\theta(\beta))}(\tau^{(k)} > \tau^*)`}</M>.
                Then:
              </em>
            </p>
            <p className="mb-sm">
              <strong>(a)</strong>{" "}
              <em><M>{String.raw`P(0)`}</M> is operationally zero by
              Lemma 1 at{" "}
              <M>{String.raw`\tau^* \geq \theta_{\mathrm{ref}}`}</M>.</em>
            </p>
            <p className="mb-sm">
              <strong>(b)</strong>{" "}
              <em><M>{String.raw`\beta \mapsto P(\beta)`}</M> is
              continuous on{" "}
              <M>{String.raw`[0, \infty)`}</M>.</em>
            </p>
            <p className="mb-sm">
              <strong>(c)</strong>{" "}
              <em><M>{String.raw`\varepsilon_{\max} := \sup_\beta P(\beta) > 0`}</M>.</em>
            </p>
            <p className="mb-sm">
              <em>For any{" "}
              <M>{String.raw`\varepsilon \in (P(0), \varepsilon_{\max})`}</M>,
              there exists{" "}
              <M>{String.raw`\beta_\varepsilon`}</M> with{" "}
              <M>{String.raw`P(\beta_\varepsilon) = \varepsilon`}</M>.</em>
            </p>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof
            </p>
            <p className="mb-sm text-ink-90">
              (a) Direct application of Lemma 1 at{" "}
              <M>{String.raw`\tau^*`}</M>. (b) Continuity of{" "}
              <M>{String.raw`P = S(\tau^*; \cdot) \circ \tilde\theta`}</M>{" "}
              from Lemma 2(i) and (R1). (c) From Lemma 2(iii),{" "}
              <M>{String.raw`B(\tilde\theta(\beta_0)) > 0`}</M> at
              some <M>{String.raw`\beta_0`}</M>, and the bound{" "}
              <M>{String.raw`B(\theta) \leq b_{\max} \mathbb{E}[N_T] P(\beta)`}</M>{" "}
              gives{" "}
              <M>{String.raw`P(\beta_0) > 0`}</M>. Intermediate value
              theorem on <M>{String.raw`[0, \beta_0]`}</M> yields{" "}
              <M>{String.raw`\beta_\varepsilon`}</M> for any{" "}
              <M>{String.raw`\varepsilon \in (0, P(\beta_0))`}</M>.
            </p>
            <ProofEnd />

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Remark
            </p>
            <p className="text-base text-ink-90">
              The mode operates on{" "}
              <M>{String.raw`T_{\mathrm{mix}}(\pi')`}</M> — the
              cohort&apos;s mixing time under the modified policy —
              which for engagement-monetized policies is on the order
              of months to years. Evaluations conducted at clock-time
              substantially shorter than{" "}
              <M>{String.raw`T_{\mathrm{mix}}(\pi')`}</M> systematically
              underestimate the intervention&apos;s structural effect.
            </p>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §5.1.1 Mode A scaffold                                  */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="scaffold" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§5.1.1 Mode A scaffold — five features</h2>
        <DepthLayers>
          <Caption>
            Mode A&apos;s formal possibility (Proposition 1&apos;)
            states a structural condition; its substantive political
            content is a further achievement. Effective
            architectural intervention requires five coupled features.
            The mathematics specifies the structural condition under
            which intervention works; the scaffold specifies what
            must obtain for the structural condition to be reachable.
          </Caption>
          <Middle>
            <ol className="list-decimal pl-md space-y-sm mb-sm">
              <li>
                <strong>Substrate condition</strong> — material
                conditions allowing population time-and-attention
                outside the platform&apos;s reach: stable housing,
                manageable debt, time not algorithmically scheduled.
                The substrate is what intervention has to protect.
                Without the substrate, the reward modification has
                no population to land on.
              </li>
              <li>
                <strong>Reward modification</strong> — the regularized{" "}
                <M>{String.raw`\hat R + \beta b`}</M> specifying what
                the platform must value besides engagement. The
                regularizer <M>{String.raw`b`}</M> is the political
                content of Mode A made formal: what the framework
                names as protected (pause-time, reflective interval,
                cohort-developmental substrate) becomes what the
                platform&apos;s optimization is constrained to value.
              </li>
              <li>
                <strong>Enforcement</strong> — credible state capacity
                to impose the modification: regulatory infrastructure,
                audit capacity, penalties. Without enforcement, the
                reward modification is voluntary; voluntary modification
                is competitively dominated.
              </li>
              <li>
                <strong>Multi-platform coordination</strong> — preventing
                the platform that adopts Mode A from being competitively
                dominated by platforms that don&apos;t. The asymmetry
                of Mode A&apos;s harshness (the regularization burns
                engagement) requires coordination at the regulatory
                level — industry-wide standards, treaty-level
                constraints. Unilateral adoption is structurally
                untenable.
              </li>
              <li>
                <strong>Cohort timing</strong> — intervention before
                the formation-window closes for the cohort whose
                interiority is being protected. See{" "}
                <Link
                  href="/closed-loop/the-apparatus/section-6/prop-8"
                  className="text-oxblood hover:underline"
                >
                  Proposition 8
                </Link>
                : after the developmental exposure{" "}
                <M>{String.raw`\tau_{\mathrm{exp}}`}</M> exceeds a
                threshold, the cohort starts essentially at{" "}
                <M>{String.raw`\pi_{\hat R}^*`}</M>; there is nothing
                left to protect that has not already been foreclosed.
                Cohort timing is what makes intervention substantive.
                Without it, intervention is merely commemorative.
              </li>
            </ol>
            <p className="mb-sm">
              The five-feature scaffold is what turns Proposition
              1&apos; from a formal possibility into a substantive
              political claim. The mathematics specifies the
              structural condition under which intervention works;
              the scaffold specifies what must obtain for the
              structural condition to be reachable.
            </p>
          </Middle>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §5.2 Mode B                                              */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="mode-b" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§5.2 Proposition 2&apos; — Mode B (response intervention)</h2>
        <DepthLayers>
          <Caption>
            Mode B is artisanal resistance: the user maintains a
            behavioral distribution{" "}
            <M>{String.raw`\nu_u`}</M> distinct from{" "}
            <M>{String.raw`\pi_{\hat R}^*`}</M> through their own
            attentional and energetic labor. The mode preserves a
            gap for the user who practices it. It does not break
            foreclosure: at individual scale, Mode B is{" "}
            <M>{String.raw`O(1/N)`}</M> at the population-level{" "}
            <M>{String.raw`\theta^*`}</M>.
          </Caption>
          <Middle>
            <p className="mb-sm">
              Mode B operates on the user response kernel{" "}
              <M>{String.raw`T`}</M> — the kernel that, given the
              user&apos;s state and the platform&apos;s stimulus,
              determines the user&apos;s next state. The user&apos;s
              practice modifies <M>{String.raw`T`}</M> for themselves
              — meditation, contemplation, deliberate disengagement,
              sustained attention to non-platform material. The mode
              maintains a gap{" "}
              <M>{String.raw`D_{KL}(\nu_u(t) \| \pi_{\hat R}^*) \geq \gamma > 0`}</M>{" "}
              when the maintenance labor{" "}
              <M>{String.raw`L_m`}</M> exceeds a critical threshold
              <M>{String.raw`L_m^*(\beta_u)`}</M>.
            </p>
            <p className="mb-sm">
              <em>What Mode B does and does not do.</em> The mode is
              real for the user who practices it: their behavioral
              distribution stays distinct from the platform-induced
              target. The mode is approximately invisible at the
              population level: the foreclosure result (Lemma 1)
              operates at the population scale and is invariant under
              individual artisanal practice. Mode B preserves a
              parallel structure for one user; it does not modify
              the policy&apos;s stationary distribution.
            </p>
            <p className="mb-sm">
              <em>Three boundedness conditions.</em>
            </p>
            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>Cohort-bounded.</strong> The maintenance labor
                presupposes a <M>{String.raw`\nu_u`}</M> that can be
                distinct from <M>{String.raw`\pi_{\hat R}^*`}</M>. For
                users whose <M>{String.raw`\nu_u`}</M> developed
                entirely under the closure (
                <Link
                  href="/closed-loop/the-apparatus/section-6/prop-8"
                  className="text-oxblood hover:underline"
                >
                  Prop 8
                </Link>
                ), that distinction is not available at the outset.
              </li>
              <li>
                <strong>Metabolically bounded.</strong>{" "}
                <M>{String.raw`L_m`}</M> is constrained by the user&apos;s
                available energetic and attentional budget, itself
                constrained by exogenous conditions co-temporal with
                the loop: precarity, social-reproduction labor, the
                contracting welfare state.
              </li>
              <li>
                <strong>Non-generalizable.</strong> The mode produces
                a parallel structure for one user; it does not modify
                the policy&apos;s stationary distribution. Population-
                level platform optimization is insensitive to individual
                artisanal practice.
              </li>
            </ul>
          </Middle>
          <Formal label="Proposition 2' (Mode B preserves a gap, doesn't break foreclosure)">
            <p className="mb-sm">
              <em>
                Suppose the user&apos;s behavioral plasticity (U3)
                admits an artisanal-resistance variable{" "}
                <M>{String.raw`L_m \geq 0`}</M> such that the linearized
                dynamics are
              </em>
            </p>
            <MBlock>
              {String.raw`\frac{d}{dt} D_{KL}(\nu_u(t) \,\|\, \pi_{\hat R}^*) = -h_0(\beta_u) + r(L_m),`}
            </MBlock>
            <Reads>
              Two forces act on the user&apos;s distance from the
              platform target: the closure pulls it down at rate{" "}
              <M>{String.raw`h_0(\beta_u)`}</M>, and the user&apos;s
              artisanal practice <M>{String.raw`L_m`}</M> pushes it
              back up at rate <M>{String.raw`r(L_m)`}</M>. Mode B is
              the second term — the disciplined refusal, the curated
              feed. The gap survives only while the practice keeps
              pace with the pull.
            </Reads>
            <p className="mb-sm">
              <em>where <M>{String.raw`h_0, r`}</M> are continuous
              strictly increasing with{" "}
              <M>{String.raw`h_0(0) = r(0) = 0`}</M>. Then:</em>
            </p>

            <p className="mb-sm">
              <strong>(i) Gap preservation.</strong>{" "}
              <em>For{" "}
              <M>{String.raw`L_m \geq L_m^*(\beta_u) := r^{-1}(h_0(\beta_u))`}</M>,</em>
            </p>
            <MBlock>
              {String.raw`D_{KL}(\nu_u(t) \,\|\, \pi_{\hat R}^*) \geq D_{KL}(\nu_u(0) \,\|\, \pi_{\hat R}^*) =: \gamma > 0 \quad \forall t.`}
            </MBlock>
            <Reads>
              If the practice is strong enough — at least the
              break-even level{" "}
              <M>{String.raw`L_m^*`}</M> — the user holds a permanent
              gap <M>{String.raw`\gamma`}</M> from the platform target,
              for all time. The disciplined user really does keep a
              distance. The next claim is the catch: this gap is the
              user&apos;s alone and does nothing to the foreclosure
              the closure imposes on everyone.
            </Reads>

            <p className="mb-sm">
              <strong>(ii) Foreclosure invariance.</strong>{" "}
              <em>Lemma 1 holds:{" "}
              <M>{String.raw`\Pr_{\mathcal{D}(\theta^*)}(E_\tau) \to 0`}</M>{" "}
              for{" "}
              <M>{String.raw`\tau > \theta_{\mathrm{ref}}`}</M>,
              independent of{" "}
              <M>{String.raw`L_m, \beta_u`}</M>.</em>
            </p>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof
            </p>
            <p className="mb-sm text-ink-90">
              (i) Direct from the parametric form: at{" "}
              <M>{String.raw`L_m = L_m^*`}</M>,{" "}
              <M>{String.raw`r(L_m^*) = h_0(\beta_u)`}</M> and the
              rate vanishes; for <M>{String.raw`L_m > L_m^*`}</M> the
              gap grows. (ii) The closed-loop dynamics (P1)–(P5) and
              (P-III) operate at the population level. Individual
              artisanal resistance contributes{" "}
              <M>{String.raw`O(1/N)`}</M> to the population-level{" "}
              <M>{String.raw`\theta^*`}</M>; the foreclosure result is
              invariant.
            </p>
            <ProofEnd />
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §5.3 Mode C                                              */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="mode-c" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§5.3 Proposition 3&apos; — Mode C (observation intervention)</h2>
        <DepthLayers>
          <Caption>
            Mode C is disruption-as-form: the user inflates the
            observation channel&apos;s noise, refusing the
            platform&apos;s legibility. The mode bounds the
            platform&apos;s extractable surplus and preserves residual
            entropy in the user-state. It does not break foreclosure:
            the platform still fires at the rate ceiling.
          </Caption>
          <Middle>
            <p className="mb-sm">
              Mode C operates on the observation channel{" "}
              <M>{String.raw`O`}</M>. The user&apos;s practice
              introduces noise{" "}
              <M>{String.raw`\eta_t`}</M> with variance{" "}
              <M>{String.raw`\sigma_\eta^2 > \sigma_{\eta,0}^2`}</M> —
              camouflage, inauthenticity, strategic illegibility,
              deliberate signal degradation. The added noise
              propagates through Bayesian filtering and bounds the
              residual entropy of the platform&apos;s posterior over
              the user state.
            </p>
            <p className="mb-sm">
              <em>What Mode C does and does not do.</em> Three claims:
              (i) the residual entropy{" "}
              <M>{String.raw`H(u_t \mid y_{1:t})`}</M> is strictly
              positive and strictly increasing in{" "}
              <M>{String.raw`\sigma_\eta^2`}</M>; (ii) the achievable
              reward through the noisier channel is strictly less
              than through the cleaner channel (Blackwell garbling);
              (iii) foreclosure is invariant — the platform still
              converges to a stable point, the value-dominance argument
              still gives the rate ceiling.
            </p>
            <p className="mb-sm">
              <em>Why Mode C&apos;s asymmetry mirrors Mode B&apos;s.</em>{" "}
              The platform extracts less per unit time but still
              fires at the rate ceiling. The mode&apos;s political
              form is camouflage, inauthenticity, refusal of legibility.
              Practiced as an end in itself, the mode becomes a
              politics of refusal that is structurally legible as
              opposition and structurally incapable of producing the
              change opposition is supposed to produce. The pairing
              with Mode A is what gives Mode C its substantive role;
              without the pairing, the disruption is decoration.
            </p>
            <p className="mb-sm">
              <em>Cohort-boundedness.</em> Like Mode B, Mode C
              presupposes a substrate distinct from the platform-
              grammar — a legibility to refuse. Strategic refusal of
              legibility requires the user-state{" "}
              <M>{String.raw`u`}</M> to contain articulations that
              the platform&apos;s observation channel would translate.
              For users whose <M>{String.raw`u`}</M> formed entirely
              under closed-loop optimization, the platform&apos;s
              grammar <em>is</em> the articulation-format of{" "}
              <M>{String.raw`u`}</M> at the outset; no prior
              articulation exists from which strategic illegibility
              could operate.
            </p>
          </Middle>
          <Formal label="Proposition 3' (Mode C bounds surplus, doesn't break foreclosure)">
            <p className="mb-sm">
              <em>
                Suppose the user&apos;s practice inflates observation
                noise:{" "}
                <M>{String.raw`\mathrm{Var}(\eta_t) = \sigma_\eta^2 I_k`}</M>{" "}
                with{" "}
                <M>{String.raw`\sigma_\eta^2 > \sigma_{\eta,0}^2`}</M>.
                Then:
              </em>
            </p>
            <p className="mb-sm">
              <strong>(i) Residual entropy bound.</strong>{" "}
              <M>{String.raw`H(u_t \mid y_{1:t}) \geq H_{\mathrm{res}}(\sigma_\eta^2) > 0`}</M>{" "}
              <em>with <M>{String.raw`H_{\mathrm{res}}`}</M> strictly
              increasing in{" "}
              <M>{String.raw`\sigma_\eta^2`}</M>.</em>
            </p>
            <p className="mb-sm">
              <strong>(ii) Surplus bound.</strong>{" "}
              <M>{String.raw`\sup_\theta F(\theta; \sigma_\eta^2) < \sup_\theta F(\theta; \sigma_{\eta,0}^2)`}</M>{" "}
              <em>strictly.</em>
            </p>
            <p className="mb-sm">
              <strong>(iii) Foreclosure invariance.</strong>{" "}
              <em>Lemma 1 holds at the regularized stable point under{" "}
              <M>{String.raw`\sigma_\eta^2`}</M>.</em>
            </p>

            <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
              Proof
            </p>
            <p className="mb-sm text-ink-90">
              (i) Under a linearized Kalman-filter approximation, the
              steady-state posterior covariance{" "}
              <M>{String.raw`P_\infty(\sigma_\eta^2)`}</M> solves the
              discrete algebraic Riccati equation. Monotonicity in{" "}
              <M>{String.raw`\sigma_\eta^2`}</M> (Anderson & Moore 1979,{" "}
              <em>Optimal Filtering</em>, §4.4): increasing{" "}
              <M>{String.raw`\sigma_\eta^2`}</M> increases{" "}
              <M>{String.raw`P_\infty`}</M> in the Loewner partial
              order. Differential entropy{" "}
              <M>{String.raw`H_{\mathrm{res}}(\sigma_\eta^2) = \frac{1}{2} \log \det(2\pi e P_\infty(\sigma_\eta^2))`}</M>{" "}
              is strictly increasing.
            </p>
            <p className="mb-sm text-ink-90">
              (ii) Blackwell garbling: the higher-noise channel is
              obtained from the lower-noise channel by adding
              independent Gaussian noise. By Blackwell (1953) and Le
              Cam (1986), the achievable reward through the garbled
              channel is bounded above by the un-garbled. Strict
              inequality by (P-I)&apos;s non-trivial dependence of{" "}
              <M>{String.raw`\hat R`}</M> on{" "}
              <M>{String.raw`u_t`}</M>.
            </p>
            <p className="mb-sm text-ink-90">
              (iii) (R1), (R2), (P-I), (P-II), (P-III) are unchanged
              by <M>{String.raw`\sigma_\eta^2`}</M>. The platform
              still converges to a stable point; the value-dominance
              argument of Lemma 1 Step 2 still gives the rate ceiling;
              foreclosure follows.
            </p>
            <ProofEnd />
          </Formal>
        </DepthLayers>
      </section>

      {/* Cross-references */}
      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Unified statement:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              Theorem 9 (causal sensitivity)
            </Link>{" "}
            — the three propositions are corollaries
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1 (foreclosure)
            </Link>{" "}
            — the foreclosure these modes respond to
          </li>
          <li>
            Cohort-boundedness:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-6/prop-8"
              className="text-oxblood hover:underline"
            >
              Proposition 8 (cohort gradient)
            </Link>{" "}
            — why Modes B and C are cohort-bounded
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/intervention-asymmetry"
              className="text-oxblood hover:underline"
            >
              intervention asymmetry (2×2)
            </Link>{" "}
            
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
