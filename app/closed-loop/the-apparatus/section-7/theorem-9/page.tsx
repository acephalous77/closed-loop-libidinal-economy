/**
 * Apparatus §7 — Theorem 9 (causal sensitivity in performative systems).
 *
 * The unified sensitivity formula. The framework's third load-bearing
 * claim. The three intervention propositions (1', 2', 3') become
 * corollaries of a single result.
 *
 * Content per publishing-pipeline manuscript §7.1-§7.5.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  ProofEnd,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-7/theorem-9";

export const metadata: Metadata = {
  title: "Theorem 9 (causal sensitivity) — the apparatus — closed-loop",
  description:
    "The unified sensitivity formula. The performative do-calculus. The closure-amplification factor and the N-fold asymmetry between Mode A and individual-scale Modes B/C.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function Theorem9Page() {
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
        <span className="text-ink-90">§7 · Theorem 9</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Theorem 9 (causal sensitivity in performative systems)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §7 · the performative do-calculus
      </p>

      <DepthLayers>
        <Caption>
          The unified sensitivity formula. The three intervention
          propositions of §5 — separately stated, separately proved —
          become corollaries of a single causal-sensitivity result.
          The framework&apos;s third load-bearing claim: the asymmetry
          between Mode A and individual-scale Modes B/C is exactly the
          population-averaging factor 1/N.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The five structural objects (P1)–(P5) and the closure
            define a causal model. The DAG of structural dependencies,
            ignoring closure, is{" "}
            <M>{String.raw`\{T, O, \hat R\} \to \pi_\theta \to \mathcal{D}(\theta) \to F(\theta) \to \Phi \to \theta^*`}</M>.
            The closure introduces{" "}
            <M>{String.raw`\theta^* \to \pi_{\theta^*}`}</M>, creating
            a cycle the fixed-point equation{" "}
            <M>{String.raw`\theta^* = \Phi(\theta^*)`}</M> resolves.
          </p>

          <p className="mb-sm">
            A <em>mechanism intervention</em>{" "}
            <M>{String.raw`\mathrm{do}(X \leftarrow X')`}</M> replaces
            the structural mechanism <M>{String.raw`X`}</M> with{" "}
            <M>{String.raw`X'`}</M>. The framework&apos;s three
            exogenous mechanisms admit:
          </p>

          <ul className="list-disc pl-md mb-sm space-y-xs">
            <li>
              <strong>Mode A:</strong>{" "}
              <M>{String.raw`\mathrm{do}(\hat R \leftarrow \hat R + \beta b)`}</M>
              {" — architectural intervention on the reward functional"}
            </li>
            <li>
              <strong>Mode B (individual):</strong>{" "}
              <M>{String.raw`\mathrm{do}(T_i \leftarrow T_i')`}</M>
              {" for one user "}<M>{String.raw`i`}</M>{" in a population of "}<M>{String.raw`N`}</M>
            </li>
            <li>
              <strong>Mode B (population):</strong>{" "}
              <M>{String.raw`\mathrm{do}(T \leftarrow T')`}</M>
            </li>
            <li>
              <strong>Mode C (individual):</strong>{" "}
              <M>{String.raw`\mathrm{do}(O_i \leftarrow O_i')`}</M>
            </li>
            <li>
              <strong>Mode C (regulatory, fourth-cell):</strong>{" "}
              <M>{String.raw`\mathrm{do}(O \leftarrow O')`}</M>
            </li>
          </ul>

          <p className="mb-sm">
            <em>What the theorem says.</em> The sensitivity of the
            performative stable point <M>{String.raw`\theta^*`}</M> to
            an intervention on any mechanism{" "}
            <M>{String.raw`X \in \{\hat R, T, O\}`}</M> factors into
            two parts: the <em>closure amplification</em>{" "}
            <M>{String.raw`(I - D_\theta \Phi(\theta^*))^{-1}`}</M> —
            the same factor for every mechanism — and the{" "}
            <em>mechanism partial</em>{" "}
            <M>{String.raw`\partial_X \Phi(\theta^*)`}</M> — different
            for each mechanism.
          </p>

          <p className="mb-sm">
            <em>The closure amplification factor.</em> Under
            contractivity{" "}
            <M>{String.raw`L_{\hat R} L_{\mathcal{D}} < 1`}</M>, the
            matrix <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M> has
            operator norm bounded by{" "}
            <M>{String.raw`(1 - L_{\hat R} L_{\mathcal{D}})^{-1}`}</M>.
            Small interventions amplify through the closure by this
            factor. As contractivity approaches its boundary{" "}
            <M>{String.raw`L_{\hat R} L_{\mathcal{D}} \to 1`}</M>, the
            amplification diverges — the regime{" "}
            <Link
              href="/closed-loop/the-apparatus/section-10/theorem-12"
              className="text-oxblood hover:underline"
            >
              Theorem 12 classifies
            </Link>{" "}
            as the four bifurcation regimes.
          </p>

          <p className="mb-sm">
            <em>The N-fold asymmetry.</em> Mode A&apos;s reward
            functional <M>{String.raw`\hat R`}</M> is not user-indexed.
            It enters the optimization for every user simultaneously.
            Population-scale intervention on Modes B or C (e.g. fourth-cell
            regulatory imposition on the observation channel) is also
            unindexed: <M>{String.raw`\partial \theta^*/\partial X = O(1)`}</M>{" "}
            for all three. <em>Individual-scale</em> intervention on{" "}
            <M>{String.raw`T_i`}</M> or <M>{String.raw`O_i`}</M> for a
            single user in a population of <M>{String.raw`N`}</M> incurs
            population-averaging:{" "}
            <M>{String.raw`\partial \theta^*/\partial X_i = (1/N) \cdot \partial \theta^*/\partial X = O(1/N)`}</M>.
            The asymmetry between Mode A and individual-scale Modes B/C
            is exactly <M>{String.raw`N`}</M>-fold. It vanishes at
            population-coordinated intervention scale.
          </p>

          <p className="mb-sm">
            <em>What the theorem authorizes the prose to claim.</em>{" "}
            Substituting individual-scale Modes B or C for Mode A is
            the analytical error that converts political work into its
            symptom. The framework&apos;s hardest political claim is
            formally underwritten here. Mode A is the only intervention
            the foreclosure result (
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>
            ) and the impossibility result (
            <Link
              href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
              className="text-oxblood hover:underline"
            >
              Theorem 1&apos;
            </Link>
            ) do not foreclose.
          </p>

          <p className="mb-sm">
            The political vocabulary the theorem clarifies. What an
            organizer or social-movement theorist would call
            &ldquo;individual digital-hygiene practices&rdquo; — the
            curated phone, the disabled notifications, the practiced
            refusal of platform legibility — operates at the{" "}
            <M>{String.raw`1/N`}</M> scale on the closed loop. What
            the same organizer would call &ldquo;regulatory
            reform&rdquo; — content-moderation rules, antitrust
            action, privacy-regime overhauls — operates at the{" "}
            <M>{String.raw`O(1)`}</M> scale through Mode A, the
            fourth-cell mode, or the population-coordinated variant
            of Mode B. The framework&apos;s claim is that the gap
            between these two is not a difference of degree. It is
            an <M>{String.raw`N`}</M>-fold structural gap baked into
            the closure&apos;s geometry. The framework does not deny
            the value of individual practice; it specifies what
            individual practice can and cannot do at population
            scale.
          </p>

          <p className="mb-sm">
            <em>The do-calculus extension.</em> The theorem extends
            Pearl&apos;s do-calculus in three ways. <em>Closure
            amplification:</em> standard do-calculus works on acyclic
            DAGs; the performative closure adds a cycle that{" "}
            <em>amplifies</em> interventions through{" "}
            <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M>.{" "}
            <em>Population averaging:</em> the distinction between
            individual-practice and regulatory imposition is causally
            captured as the difference between intervening on one term
            of an averaged variable and intervening on the variable
            itself. <em>Mechanism interventions on non-acyclic settings:</em>{" "}
            the framework operates on mechanisms, not on the closure
            variable directly (setting{" "}
            <M>{String.raw`\theta^*`}</M> to a constant is meaningless;{" "}
            <M>{String.raw`\theta^*`}</M> is defined as the fixed point
            of <M>{String.raw`\Phi`}</M>).
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/intervention-asymmetry"
              className="text-oxblood hover:underline"
            >
              operate the intervention-asymmetry plate
            </Link>{" "}
            to see the 2×2 taxonomy in action — the same intervention
            placed in each cell, with the closure-amplification factor
            visible above each chart, the <M>{String.raw`O(1)`}</M>{" "}
            vs <M>{String.raw`O(1/N)`}</M> distinction operationalized.
          </p>
        </Middle>

        <Formal label="Theorem 9 (causal sensitivity in performative systems)">
          <p className="mb-sm">
            <em>
              Under (R1), (R2), assume the performative operator{" "}
              <M>{String.raw`\Phi`}</M> is{" "}
              <M>{String.raw`C^1`}</M> in{" "}
              <M>{String.raw`(\theta, T, O, \hat R)`}</M> and the
              contractivity condition{" "}
              <M>{String.raw`L_{\hat R} L_{\mathcal{D}} < 1`}</M> holds.
              Let <M>{String.raw`\theta^*`}</M> be the performative
              stable point. Then for any mechanism{" "}
              <M>{String.raw`X \in \{\hat R, T, O\}`}</M>, the sensitivity
              of <M>{String.raw`\theta^*`}</M> to <M>{String.raw`X`}</M>{" "}
              is
            </em>
          </p>
          <MBlock>
            {String.raw`\frac{\partial \theta^*}{\partial X} = (I - D_\theta \Phi(\theta^*))^{-1} \cdot \partial_X \Phi(\theta^*).`}
          </MBlock>

          <p className="mb-sm">
            <strong>(i) Closure amplification factor.</strong> <em>The
            matrix <M>{String.raw`(I - D_\theta \Phi(\theta^*))^{-1}`}</M>{" "}
            has operator norm at most{" "}
            <M>{String.raw`(1 - L_{\hat R} L_{\mathcal{D}})^{-1}`}</M>.</em>
          </p>

          <p className="mb-sm">
            <strong>(ii) Mode A direct sensitivity.</strong>{" "}
            <em><M>{String.raw`\partial_{\hat R} \Phi(\theta^*) = O(1)`}</M>{" "}
            in <M>{String.raw`N`}</M>.</em>
          </p>

          <p className="mb-sm">
            <strong>(iii) Modes B and C population-scale sensitivity.</strong>{" "}
            <em>For uniform intervention on <M>{String.raw`T`}</M> or{" "}
            <M>{String.raw`O`}</M>,{" "}
            <M>{String.raw`\partial_T \Phi(\theta^*), \partial_O \Phi(\theta^*) = O(1)`}</M>{" "}
            in <M>{String.raw`N`}</M>.</em>
          </p>

          <p className="mb-sm">
            <strong>(iv) Modes B and C individual-scale sensitivity.</strong>{" "}
            <em>For intervention on <M>{String.raw`T_i`}</M> or{" "}
            <M>{String.raw`O_i`}</M> for one user <M>{String.raw`i`}</M>{" "}
            in a population of <M>{String.raw`N`}</M>,</em>
          </p>
          <MBlock>
            {String.raw`\partial_{T_i} \Phi(\theta^*) = \frac{1}{N} \partial_T \Phi(\theta^*) = O(1/N).`}
          </MBlock>

          <p className="mb-sm">
            <em>The asymmetry between Mode A and individual-scale
            Modes B/C is exactly <M>{String.raw`N`}</M>-fold; it
            vanishes at population-coordinated intervention scale.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof — three steps
          </p>
          <p className="mb-sm text-ink-70 text-sm">
            (1) Implicit function theorem on the closure equation{" "}
            <M>{String.raw`\theta^* = \Phi(\theta^*; T, O, \hat R)`}</M>{" "}
            gives <M>{String.raw`(I - D_\theta \Phi) \cdot \partial \theta^*/\partial X = \partial_X \Phi`}</M>.
            Contractivity (R1) plus Neumann series gives the inverse
            with operator-norm bound (1−L_R L_D)^{`{-1}`} — establishing (i).
            (2) Decomposition of partial derivatives: comparative statics
            on the FOC under (R2)&apos;s Hessian-invertibility gives{" "}
            <M>{String.raw`\partial_{\hat R} \Phi = O(1)`}</M> (Milgrom &
            Shannon 1994); chain rule through{" "}
            <M>{String.raw`\mathcal{D}`}</M> gives same for T, O.
            (3) Population-averaging: with{" "}
            <M>{String.raw`\mathcal{D} = (1/N)\sum_i \mathcal{D}_i`}</M>,
            individual-scale partials are{" "}
            <M>{String.raw`(1/N) \cdot \partial_T \Phi`}</M>. Mode A&apos;s
            reward is not user-indexed; always at population level.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Corollaries — recovery of Propositions 1&apos;, 2&apos;, 3&apos;
          </p>

          <ul className="list-disc pl-md space-y-xs text-base">
            <li>
              <strong>Corollary 9.1 (Prop 1&apos;).</strong> Intervention{" "}
              <M>{String.raw`\mathrm{do}(\hat R \leftarrow \hat R + \beta b)`}</M>{" "}
              produces <M>{String.raw`\partial \theta^*/\partial \beta = O(1)`}</M>;
              at sufficient <M>{String.raw`\beta`}</M>, Mode A becomes positive.
            </li>
            <li>
              <strong>Corollary 9.2 (Prop 2&apos;(ii)).</strong>{" "}
              <M>{String.raw`\mathrm{do}(T_i \leftarrow T_i')`}</M> on a single user:{" "}
              <M>{String.raw`O(1/N)`}</M>. Foreclosure invariant.
            </li>
            <li>
              <strong>Corollary 9.3 (Prop 3&apos;(iii)).</strong>{" "}
              <M>{String.raw`\mathrm{do}(O_i \leftarrow O_i')`}</M> on a single user:{" "}
              <M>{String.raw`O(1/N)`}</M>. Foreclosure invariant.
            </li>
            <li>
              <strong>Corollary 9.4 (Fourth-cell mode).</strong>{" "}
              <M>{String.raw`\mathrm{do}(O \leftarrow O')`}</M> at population scale:{" "}
              <M>{String.raw`O(1)`}</M> — structurally equivalent to Mode A.
            </li>
          </ul>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1 (foreclosure)
            </Link>{" "}
            — the foreclosure this theorem&apos;s political content responds to
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
              className="text-oxblood hover:underline"
            >
              Theorem 1&apos; (reclamation impossibility)
            </Link>{" "}
            — the impossibility Mode A breaks
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/intervention-asymmetry"
              className="text-oxblood hover:underline"
            >
              intervention asymmetry (2×2)
            </Link>{" "}
            (operates this theorem)
          </li>
          <li>
            What follows:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-10/theorem-12"
              className="text-oxblood hover:underline"
            >
              §10 Theorem 12 (crisis boundary)
            </Link>{" "}
            — what happens to the amplification factor as contractivity
            approaches its boundary
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
