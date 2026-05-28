/**
 * Apparatus §11 — Synthesis.
 *
 * The closing meta-content. Inventory of fifteen formal results,
 * the framework's three load-bearing claims, the open research-
 * frontier questions, and the framework as one (long) sentence.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-11";

export const metadata: Metadata = {
  title: "§11 Synthesis — the apparatus — closed-loop",
  description:
    "The fifteen formal results inventoried. The framework's three load-bearing claims. Open research-frontier questions. The framework as one sentence.",
  alternates: { canonical: PATH },
};

export default function Section11Page() {
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
        <span className="text-ink-90">§11 · synthesis</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        §11 Synthesis
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        The fifteen results · three load-bearing claims · open questions · the framework as one sentence
      </p>

      <nav aria-label="In-page TOC" className="text-base mb-xl pl-sm border-l-2 border-paper-85">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">On this page</p>
        <ol className="space-y-xs text-ink-90">
          <li><a href="#fifteen" className="hover:text-oxblood">§11.1 The fifteen formal results</a></li>
          <li><a href="#claims" className="hover:text-oxblood">§11.2 The three load-bearing claims</a></li>
          <li><a href="#open" className="hover:text-oxblood">§11.3 Open research-frontier questions</a></li>
          <li><a href="#one-sentence" className="hover:text-oxblood">§11.4 The framework as one sentence</a></li>
        </ol>
      </nav>

      {/* §11.1 */}
      <section id="fifteen" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§11.1 The fifteen formal results</h2>
        <DepthLayers>
          <Caption>
            The unified apparatus has fifteen formal results, organized
            in three groups: ten load-bearing results, five extensions
            (new since the original framework), and six defined
            measurable instruments.
          </Caption>
          <Middle>
            <h3 className="font-mono text-sm uppercase tracking-wider text-ink-70 mt-md mb-sm">Load-bearing results (the original ten)</h3>
            <ul className="list-disc pl-md space-y-xs">
              <li><Link href="/closed-loop/the-apparatus/section-1/lemma-1" className="text-oxblood hover:underline">Lemma 1</Link> — foreclosure of the no-stimulus window</li>
              <li><Link href="/closed-loop/the-apparatus/section-2/theorem-1-prime" className="text-oxblood hover:underline">Theorem 1&apos;</Link> — reclamation as sample-complexity divergence</li>
              <li><Link href="/closed-loop/the-apparatus/section-3/prop-4-prime" className="text-oxblood hover:underline">Proposition 4&apos;</Link> — dividual via posterior contraction</li>
              <li><Link href="/closed-loop/the-apparatus/section-3/prop-5-prime" className="text-oxblood hover:underline">Proposition 5&apos;</Link> — metric superego as performative behavioral stability</li>
              <li><Link href="/closed-loop/the-apparatus/section-3/prop-6" className="text-oxblood hover:underline">Proposition 6</Link> — Kuramoto entrainment under media coupling</li>
              <li><Link href="/closed-loop/the-apparatus/section-3/prop-7-prime" className="text-oxblood hover:underline">Proposition 7&apos;</Link> — libidinal routing via explaining-away</li>
              <li><Link href="/closed-loop/the-apparatus/section-4/lemma-2" className="text-oxblood hover:underline">Lemma 2</Link> — parametric continuity of regularized stable points</li>
              <li><Link href="/closed-loop/the-apparatus/section-5" className="text-oxblood hover:underline">Proposition 1&apos;</Link> — Mode A breaks foreclosure</li>
              <li><Link href="/closed-loop/the-apparatus/section-5" className="text-oxblood hover:underline">Proposition 2&apos;</Link> — Mode B preserves a gap, doesn&apos;t break foreclosure</li>
              <li><Link href="/closed-loop/the-apparatus/section-5" className="text-oxblood hover:underline">Proposition 3&apos;</Link> — Mode C bounds surplus, doesn&apos;t break foreclosure</li>
            </ul>

            <h3 className="font-mono text-sm uppercase tracking-wider text-ink-70 mt-md mb-sm">Extensions (five new since the original framework)</h3>
            <ul className="list-disc pl-md space-y-xs">
              <li><Link href="/closed-loop/the-apparatus/section-6/prop-8" className="text-oxblood hover:underline">Proposition 8</Link> — cohort gradient as developmental Fisher–Rao convergence</li>
              <li><Link href="/closed-loop/the-apparatus/section-7/theorem-9" className="text-oxblood hover:underline">Theorem 9</Link> — causal sensitivity in performative systems</li>
              <li><Link href="/closed-loop/the-apparatus/section-8" className="text-oxblood hover:underline">Theorem 10</Link> — mean-field convergence to continuum</li>
              <li><Link href="/closed-loop/the-apparatus/section-9/theorem-11" className="text-oxblood hover:underline">Theorem 11</Link> — stretched-exponential survival bound</li>
              <li><Link href="/closed-loop/the-apparatus/section-10/theorem-12" className="text-oxblood hover:underline">Theorem 12</Link> — crisis-boundary bifurcation classification</li>
            </ul>

            <h3 className="font-mono text-sm uppercase tracking-wider text-ink-70 mt-md mb-sm">Defined measurable instruments (six)</h3>
            <ul className="list-disc pl-md space-y-xs">
              <li>Libidinal surplus <M>{String.raw`\Sigma(T)`}</M> — embedded in (P5) setup</li>
              <li><Link href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt" className="text-oxblood hover:underline">Chrono-debt spectrum</Link> <M>{String.raw`D(t, \tau)`}</M></li>
              <li>Libidinal routing mutual information <M>{String.raw`I_{\Pi_t}(u^i; u^j)`}</M> — Proposition 7&apos;</li>
              <li>Dividual condition <M>{String.raw`H(u_t \mid y_{1:t}) \to 0`}</M> — Proposition 4&apos;</li>
              <li>Metric superego <M>{String.raw`D_{KL}(\nu_u(t) \| \pi_{\hat R}^*)`}</M> — Proposition 5&apos;</li>
              <li>Somatic optimization Hawkes intensity <M>{String.raw`\lambda^k(t)`}</M> — §3.5</li>
            </ul>
          </Middle>
        </DepthLayers>
      </section>

      {/* §11.2 */}
      <section id="claims" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§11.2 The framework&apos;s three load-bearing claims</h2>
        <DepthLayers>
          <Caption>
            The whole framework rests on three substantive claims
            about closed-loop dynamics. Each maps to a specific formal
            result. The three claims are what the prose argues; the
            formal counterparts are what authorize the arguments.
          </Caption>
          <Middle>
            <p className="mb-sm">
              <strong>Claim A — Foreclosure of reflective time.</strong>{" "}
              The platform&apos;s optimization drives the probability
              of long no-stimulus windows to operationally zero. What
              Stiegler called the proletarianization of attention and
              what Kahneman documented as the gap between system-1 and
              system-2 are phenomenological registers of the same
              structural foreclosure.{" "}
              <em>Formal counterpart:</em>{" "}
              <Link href="/closed-loop/the-apparatus/section-1/lemma-1" className="text-oxblood hover:underline">
                Lemma 1
              </Link>
              , with polynomial, exponential, and stretched-exponential
              bounds (
              <Link href="/closed-loop/the-apparatus/section-9/theorem-11" className="text-oxblood hover:underline">
                Theorem 11
              </Link>
              ).
            </p>
            <p className="mb-sm">
              <strong>Claim B — Reclamation is operationally
              incoherent.</strong> The recovery of pre-platform
              interiority through measurement of the closed loop&apos;s
              dynamics has unbounded sample complexity. What Adorno,
              Marcuse, and Lacan named with words like the metric of
              inner damage, one-dimensional thought, and the subject
              of the unconscious persists at the user-state level;
              what becomes inaccessible is the observational regime
              in which their preservation could be empirically
              demonstrated.{" "}
              <em>Formal counterpart:</em>{" "}
              <Link href="/closed-loop/the-apparatus/section-2/theorem-1-prime" className="text-oxblood hover:underline">
                Theorem 1&apos;
              </Link>
              , with effective-sample-size bound and Le Cam minimax
              form.
            </p>
            <p className="mb-sm">
              <strong>Claim C — Intervention asymmetry.</strong>{" "}
              Architectural interventions modify the stable point with{" "}
              <M>{String.raw`O(1)`}</M> propagation; individual
              practice doesn&apos;t propagate at the population level.
              The framework&apos;s hardest political claim follows:
              substituting individual-scale Modes B or C for Mode A
              is the analytical error that converts political work
              into its symptom.{" "}
              <em>Formal counterpart:</em>{" "}
              <Link href="/closed-loop/the-apparatus/section-7/theorem-9" className="text-oxblood hover:underline">
                Theorem 9
              </Link>
              , with closure-amplification factor and
              population-averaging dampening.
            </p>
          </Middle>
        </DepthLayers>
      </section>

      {/* §11.3 */}
      <section id="open" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§11.3 Open research-frontier questions</h2>
        <DepthLayers>
          <Caption>
            The original apparatus&apos;s open questions are all closed.
            Five new research-frontier questions surface from the
            rebuild — well-formulated extensions rather than gaps in
            the basic apparatus.
          </Caption>
          <Middle>
            <ol className="list-decimal pl-md space-y-sm">
              <li>
                <strong>Crisis-boundary dynamics in detail</strong> —
                codimension-2 bifurcations, global bifurcations,
                post-bifurcation attractors.{" "}
                <Link href="/closed-loop/the-apparatus/section-10/theorem-12" className="text-oxblood hover:underline">
                  Theorem 12
                </Link>{" "}
                classifies the codimension-1 cases; the higher-
                codimension and global pictures remain to be developed.
              </li>
              <li>
                <strong>Stochastic bifurcation</strong> — Theorem 12
                treats <M>{String.raw`\Phi`}</M> deterministically;
                real performative operators are estimated stochastically.
                Near the crisis boundary, the stochastic component
                dominates, requiring random-dynamical-systems machinery
                (Arnold 1998, <em>Random Dynamical Systems</em>).
              </li>
              <li>
                <strong>Mean-field-game refinement</strong> — the
                population-averaging argument in Theorem 9 Step 3 is
                a mean-field approximation. The rigorous master-equation
                approach (Cardaliaguet, Delarue, Lasry, Lions 2019)
                replaces the approximation with a continuum limit and
                produces sharper results.
              </li>
              <li>
                <strong>Sparse-graphon limits</strong> —{" "}
                <Link href="/closed-loop/the-apparatus/section-8" className="text-oxblood hover:underline">
                  Theorem 10
                </Link>{" "}
                requires the graph sequence to converge to a graphon.
                Real platforms have sparse graphs that graphons
                don&apos;t capture. Sparse-graph mean-field limits
                (Borgs, Chayes, Cohn, Holden, Zhao 2018) are an active
                research frontier.
              </li>
              <li>
                <strong>Multi-platform networks</strong> — the
                apparatus has one platform; real internet ecosystems
                have competing platforms with overlapping users.
                Multi-platform extensions would have competing
                performative stable points and distinguish
                &ldquo;captured by platform A&rdquo; from
                &ldquo;captured by platform B.&rdquo;
              </li>
            </ol>
          </Middle>
        </DepthLayers>
      </section>

      {/* §11.4 */}
      <section id="one-sentence" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§11.4 The framework as one sentence</h2>
        <div className="text-base text-ink-90 italic leading-relaxed border-l-2 border-oxblood pl-sm max-w-prose">
          The closed-loop libidinal economy is the
          performative-prediction fixed point{" "}
          <M>{String.raw`\theta^* = \Phi(\theta^*)`}</M> produced by a
          platform optimizing engagement-monetized reward against a
          user population, in which the optimization saturates the
          technical firing-rate ceiling (
          <Link href="/closed-loop/the-apparatus/section-1/lemma-1" className="text-oxblood hover:underline not-italic">
            Lemma 1
          </Link>
          ,{" "}
          <Link href="/closed-loop/the-apparatus/section-9/theorem-11" className="text-oxblood hover:underline not-italic">
            Theorem 11
          </Link>
          ), drives the conditional autocorrelation of user-state
          across reflective windows below any feasible-sample
          recoverability (
          <Link href="/closed-loop/the-apparatus/section-2/theorem-1-prime" className="text-oxblood hover:underline not-italic">
            Theorem 1&apos;
          </Link>
          ), produces an intervention asymmetry whose structure
          follows from where in the closure each candidate intervention
          sits (
          <Link href="/closed-loop/the-apparatus/section-7/theorem-9" className="text-oxblood hover:underline not-italic">
            Theorem 9
          </Link>
          ), with the framework&apos;s substantive empirical content —
          cohort gradient (
          <Link href="/closed-loop/the-apparatus/section-6/prop-8" className="text-oxblood hover:underline not-italic">
            Proposition 8
          </Link>
          ), network percolation (
          <Link href="/closed-loop/the-apparatus/section-8" className="text-oxblood hover:underline not-italic">
            Theorem 10 and corollaries
          </Link>
          ), mobilization-dispersion dynamics — extending naturally
          through developmental and networked refinements, and with
          the apparatus&apos;s stability boundary itself classified (
          <Link href="/closed-loop/the-apparatus/section-10/theorem-12" className="text-oxblood hover:underline not-italic">
            Theorem 12
          </Link>
          ) so that the framework has formal vocabulary for stable
          extraction, viral oscillation, regime collapse, and
          algorithmic chaos.
        </div>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
