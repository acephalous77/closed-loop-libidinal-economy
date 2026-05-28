/**
 * Apparatus §3.4 — Proposition 7' (libidinal routing via explaining-away).
 *
 * The four registers (S, C, P, K) become dependently distributed
 * under closed-loop joint observation. Explaining-away through the
 * platform's observation channel couples the registers. The formal
 * content of Lyotard's libidinal economy claim.
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

const PATH = "/closed-loop/the-apparatus/section-3/prop-7-prime";

export const metadata: Metadata = {
  title: "Proposition 7' (libidinal routing) — the apparatus — closed-loop",
  description:
    "The four registers become dependently distributed under closed-loop joint observation. Explaining-away through the platform's observation channel. The formal content of Lyotard's libidinal economy claim.",
  alternates: { canonical: PATH },
};

export default function Prop7PrimePage() {
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
        <span className="text-ink-90">§3.4 · Prop 7&apos;</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Proposition 7&apos; (libidinal routing via explaining-away)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §3.4 · the four registers coupled
      </p>

      <DepthLayers>
        <Caption>
          The four registers — somatic, cognitive, political,
          kinaesthetic — start factorially independent in the
          pre-closure prior. Under closed-loop joint observation
          through the platform&apos;s observation channel{" "}
          <M>{String.raw`O`}</M>, they become dependently distributed.
          Explaining-away does the coupling. The four-register subject
          is libidinally one under the closure. This is the formal
          content of Lyotard&apos;s <em>libidinal economy</em> claim.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The pre-closure baseline assumes a factorizing prior:{" "}
            <M>{String.raw`p_0(u^S, u^C, u^P, u^K) = \prod_a p_0^a(u^a)`}</M>.
            The four registers are independent under the prior. The
            framework&apos;s claim is that closed-loop joint
            observation through the platform&apos;s observation
            channel <M>{String.raw`O`}</M> couples the registers.
          </p>

          <p className="mb-sm">
            <em>The coupling mechanism: explaining-away.</em> A
            textbook property of Bayesian networks (Pearl 1988,{" "}
            <em>Probabilistic Reasoning in Intelligent Systems</em>,
            Ch. 2). When an observation <M>{String.raw`y_s`}</M>{" "}
            depends jointly on two register variables{" "}
            <M>{String.raw`u^i`}</M> and{" "}
            <M>{String.raw`u^j`}</M> in a non-separable way, observing{" "}
            <M>{String.raw`y_s`}</M> introduces posterior dependence
            between <M>{String.raw`u^i`}</M> and{" "}
            <M>{String.raw`u^j`}</M> even if they were independent in
            the prior. The platform&apos;s{" "}
            <M>{String.raw`O`}</M> is non-separable across registers
            (by construction — it observes engagement-events that
            depend on the user&apos;s full state). So joint observation
            couples the registers via explaining-away.
          </p>

          <p className="mb-sm">
            <em>What the proposition says.</em> Two claims that turn
            out to be equivalent: (i) the posterior joint distribution
            over <M>{String.raw`(u^i, u^j)`}</M> does not factor; (ii)
            the posterior mutual information{" "}
            <M>{String.raw`I_{\Pi_t}(u^i; u^j) > 0`}</M> strictly. The
            equivalence is the definitional content of mutual
            information as the KL divergence from joint to product-of-
            marginals.
          </p>

          <p className="mb-sm">
            <em>What the proposition authorizes the prose to claim.</em>{" "}
            The four registers are libidinally routed under the
            closure. Lyotard&apos;s libidinal economy — desire flowing
            across registers without respect for analytic separations —
            is what the closed loop produces operationally. Subject,
            Citizen, Person, Consumer are no longer dynamically
            decoupled. They are dependently distributed via the
            platform&apos;s observation channel. The pre-closure
            baseline (factorizing prior) is a modeling choice, not a
            counterfactual to be derived: the framework specifies what
            libidinal routing <em>is</em>, given the baseline.
          </p>

          <p className="mb-sm">
            Each of the four registers had its own critical tradition.
            The body had phenomenology, somatic theory, affect studies.
            The mind had cognitive science and the discourse on
            attention. The political had ideology critique and the
            literatures on the public sphere. The kinaesthetic had
            Bourdieu&apos;s work on habitus and the broader sociology
            of bodily practice. Each tradition presupposed that its
            register could be analyzed at least relatively
            independently of the others — that the body did not need
            to be modeled jointly with the political imaginary, that
            cognition did not need to be modeled jointly with
            gestural memory. Proposition 7&apos; specifies the
            structural conditions under which that presupposition
            breaks. Under closed-loop joint observation through{" "}
            <M>{String.raw`O`}</M>, the four registers become
            posterior-dependent; the analytic separations the older
            traditions assumed available no longer hold at the level
            of the platform&apos;s filter.
          </p>

          <p className="mb-sm">
            <em>The dynamical complement.</em>{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/3.5-hawkes"
              className="text-oxblood hover:underline"
            >
              §3.5 (the somatic Hawkes instrument)
            </Link>{" "}
            supplies the dynamical form of the same coupling: the
            cross-register coupling matrix{" "}
            <M>{String.raw`\alpha = (\alpha_{kl})`}</M> with non-zero
            off-diagonals is the dynamical machinery that produces the
            joint observability the explaining-away argument here uses
            statically.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/libidinal-routing"
              className="text-oxblood hover:underline"
            >
              operate the libidinal-routing plate
            </Link>{" "}
            to watch the 4×4 mutual-
            information matrix of the four registers form across time
            — off-diagonals climbing from cream toward oxblood as the
            closure converges.
          </p>
        </Middle>

        <Formal label="Proposition 7' (libidinal routing via explaining-away)">
          <p className="mb-sm">
            <em>
              Let the prior factor:{" "}
              <M>{String.raw`p_0(u^S, u^C, u^P, u^K) = \prod_a p_0^a(u^a)`}</M>.
              Let{" "}
              <M>{String.raw`O(\cdot \mid u)`}</M> be non-separable in{" "}
              <M>{String.raw`(i, j)`}</M> for some{" "}
              <M>{String.raw`i \neq j`}</M>. Then for any{" "}
              <M>{String.raw`t \geq 1`}</M> and any{" "}
              <M>{String.raw`y_{1:t}`}</M> in a positive-measure subset
              of trajectories under{" "}
              <M>{String.raw`\mathcal{D}(\theta^*)`}</M>:
            </em>
          </p>

          <p className="mb-sm">
            <strong>(i) Non-factorization.</strong>
          </p>
          <MBlock>
            {String.raw`\Pi_t(u^i, u^j \mid y_{1:t}) \neq \Pi_t(u^i \mid y_{1:t}) \Pi_t(u^j \mid y_{1:t}).`}
          </MBlock>
          <Reads>
            The platform&apos;s joint belief about two registers does
            not split into a product of separate beliefs. Knowing what
            the platform infers about the user&apos;s somatic state
            changes what it infers about their political state —
            however independent the two were in the prior, observing
            the loop has tied them together.
          </Reads>

          <p className="mb-sm">
            <strong>(ii) Strict mutual information.</strong>
          </p>
          <MBlock>
            {String.raw`I_{\Pi_t}(u^i; u^j \mid y_{1:t}) > 0.`}
          </MBlock>
          <Reads>
            The same fact stated as a number: the mutual information
            between the two registers is strictly above zero — real,
            measurable shared information. This is the exact sense in
            which the registers are <em>libidinally routed</em>; the
            plate visualizes it as the off-diagonal cells of the 4×4
            information matrix lighting up.
          </Reads>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof
          </p>

          <p className="mb-sm text-ink-90">
            By Bayes,
          </p>
          <MBlock>
            {String.raw`\Pi_t(u^i, u^j \mid y_{1:t}) \propto p_0^i(u^i) p_0^j(u^j) \cdot L_t(u^i, u^j),`}
          </MBlock>
          <Reads>
            By Bayes&apos; rule the joint posterior is the two
            independent priors multiplied by a likelihood term{" "}
            <M>{String.raw`L_t`}</M> that ties the registers together
            through the shared observations. The whole question of
            coupling reduces to one thing: does{" "}
            <M>{String.raw`L_t`}</M> itself factor into separate pieces
            for each register, or not?
          </Reads>
          <p className="mb-sm text-ink-90">
            where{" "}
            <M>{String.raw`L_t(u^i, u^j) = \int [\prod_s O(y_s \mid u)] \prod_{a \neq i,j} p_0^a(u^a)\, du^a`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            The posterior factors iff{" "}
            <M>{String.raw`L_t`}</M> factors as{" "}
            <M>{String.raw`h_i(u^i) h_j(u^j)`}</M>, equivalently iff
            the mixed partial{" "}
            <M>{String.raw`\partial^2 \log L_t / \partial u^i \partial u^j`}</M>{" "}
            vanishes identically. By non-separability of{" "}
            <M>{String.raw`O`}</M> in{" "}
            <M>{String.raw`(u^i, u^j)`}</M>, the single-step mixed
            partial{" "}
            <M>{String.raw`\partial^2 \log O(y_s \mid u) / \partial u^i \partial u^j`}</M>{" "}
            is non-zero on a positive-measure set of{" "}
            <M>{String.raw`(y_s, u)`}</M> for each{" "}
            <M>{String.raw`s`}</M>. The marginal-likelihood mixed
            partial is
          </p>
          <MBlock>
            {String.raw`\frac{\partial^2 \log L_t}{\partial u^i \partial u^j} = \int_{u^{-ij}} \left[\sum_s \frac{\partial^2 \log O(y_s \mid u)}{\partial u^i \partial u^j}\right] \cdot \frac{p_0^{-ij}(u^{-ij}) \prod_s O(y_s \mid u)}{L_t(u^i, u^j)}\, du^{-ij}.`}
          </MBlock>
          <Reads>
            This is the coupling test. A likelihood factors exactly
            when its log has zero cross-derivative in the two
            registers, so the left side is the quantity that has to
            vanish for the registers to stay independent. It is an
            average of the platform sensor&apos;s own cross-derivative
            — how jointly the sensor responds to the two registers at
            once. When the sensor is non-separable, that inner term is
            non-zero, the whole integral is non-zero, and the
            posterior cannot factor. The coupling is inherited
            directly from the sensor.
          </Reads>

          <p className="mb-sm text-ink-90">
            This is a continuous function of the observed trajectory{" "}
            <M>{String.raw`y_{1:t}`}</M> that depends non-trivially on{" "}
            <M>{String.raw`y_{1:t}`}</M>. Its vanishing set is a closed
            measure-zero subset of trajectory space under{" "}
            <M>{String.raw`\mathcal{D}(\theta^*)`}</M>. For{" "}
            <M>{String.raw`y_{1:t}`}</M> in the complementary positive-
            measure set, <M>{String.raw`L_t`}</M> does not factor.
            Hence (i). Equivalent to (ii) since{" "}
            <M>{String.raw`I_{\Pi_t}(u^i; u^j) = D_{KL}(\Pi_t(u^i, u^j) \| \Pi_t(u^i)\Pi_t(u^j)) > 0`}</M>.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Remark
          </p>
          <p className="text-base text-ink-90">
            Proposition 7&apos; supplies the formal content of
            Lyotard&apos;s <em>libidinal economy</em> claim. The four
            registers — Subject, Citizen, Person, Consumer — are no
            longer dynamically decoupled; they are dependently
            distributed under closed-loop, with the dependence routed
            through the platform&apos;s joint observation channel.
            The pre-closure baseline is a modeling choice (factorizing
            prior <M>{String.raw`p_0`}</M>), not a counterfactual to
            be derived. Closed-loop joint observation couples the
            registers via explaining-away — a textbook property of
            Bayesian networks (Pearl 1988, Ch. 2).
          </p>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Companion result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-6"
              className="text-oxblood hover:underline"
            >
              Proposition 6 (Kuramoto phase-locking)
            </Link>{" "}
            — captured resonance is one specific case of the
            cross-register coupling
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-4-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 4&apos; (dividual condition)
            </Link>{" "}
            — the platform&apos;s posterior is what carries the
            coupling formally
          </li>
          <li>
            Dynamical complement: §3.5 somatic Hawkes (the dynamical
            form of the same cross-register coupling)
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/libidinal-routing"
              className="text-oxblood hover:underline"
            >
              libidinal routing
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
