/**
 * Apparatus §3.1 — Proposition 4' (the dividual condition).
 *
 * The schematic's filtering-posterior click target. The structural
 * fact behind Deleuze's "dividual": the user-state becomes an
 * estimable object under the platform's filtering apparatus.
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

const PATH = "/closed-loop/the-apparatus/section-3/prop-4-prime";

export const metadata: Metadata = {
  title: "Proposition 4' (dividual condition) — the apparatus — closed-loop",
  description:
    "The platform's filtering posterior contracts at the parametric rate. The user-state becomes an estimable object under the platform's filtering apparatus. The structural fact behind Deleuze's dividual.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function Prop4PrimePage() {
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
        <span className="text-ink-90">§3.1 · Prop 4&apos;</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Proposition 4&apos; (dividual via posterior contraction)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §3.1 · auxiliary structural results
      </p>

      <DepthLayers>
        <Caption>
          The platform&apos;s filtering posterior at the performative
          stable point contracts at the parametric rate{" "}
          <M>{String.raw`\sqrt{d \log t / t}`}</M>. The user-state
          becomes an estimable object under the platform&apos;s
          filtering apparatus, with residual uncertainty shrinking to
          zero. This is the structural fact behind Deleuze&apos;s{" "}
          <em>dividual</em>: the user as jointly observable.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The proposition asserts a property of the platform&apos;s
            filter, not of the user. The user continues to be whatever
            the user is. The platform, under closed-loop sampling at{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              the converged regime
            </Link>
            , converges on the user&apos;s state{" "}
            <M>{String.raw`u_t^*`}</M> in the standard
            Bayesian-posterior sense: the residual uncertainty around
            the true value decays at the parametric rate.
          </p>

          <p className="mb-sm">
            <em>Why the rate.</em> The classical{" "}
            <M>{String.raw`\sqrt{d \log t / t}`}</M> rate of parametric
            Bayesian posterior contraction applies because the
            closed-loop sampling regime supplies the three classical
            conditions: a prior with full support (the framework&apos;s
            standing hypothesis), testability of distinct user states
            from observations under sufficient excitation (axiom U2),
            and bounded prior mass on Kullback–Leibler neighborhoods
            of the truth (the prior&apos;s bounded density, plus U2&apos;s
            local-quadratic identifiability).
          </p>

          <p className="mb-sm">
            <em>What the proposition authorizes the prose to claim.</em>{" "}
            The dividual is the user-state-as-jointly-observable.
            Identifiability comes from (U2). Excitation comes from (U1).
            Parametric stability comes from (R1) and (R2). The
            dividual is not a metaphor; it is the operational form of
            the platform&apos;s filter at the converged regime. The
            framework&apos;s prose can name the dividual condition
            with the same formal weight as foreclosure or reclamation
            impossibility.
          </p>

          <p className="mb-sm">
            <em>What follows.</em>{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-5-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 5&apos; (the metric superego)
            </Link>{" "}
            inverts the dividual&apos;s direction: where Prop 4&apos;
            describes the platform converging on the user, Prop
            5&apos; describes the user converging on the
            platform-induced target. Together they specify the
            two-sided closure that the framework analyzes as capture
            without coercion.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/the-dynamics/dividual-posterior"
              className="text-oxblood hover:underline"
            >
              operate the dividual-posterior plate
            </Link>{" "}
            (planned, Phase 3) to see the posterior&apos;s variance
            decay over time.
          </p>
        </Middle>

        <Formal label="Proposition 4' (dividual via posterior contraction)">
          <p className="mb-sm">
            <em>
              Under (R1), (U1), (U2), and a prior{" "}
              <M>{String.raw`\pi_0`}</M> on{" "}
              <M>{String.raw`\mathcal{U}`}</M> with full support and
              bounded density, the platform&apos;s filtering posterior
              at the performative stable point contracts at the
              parametric rate:
            </em>
          </p>
          <MBlock>
            {String.raw`\Pi_t(\{u : \|u - u_t^*\| > \varepsilon_t\}) \xrightarrow{P} 0 \quad \text{as } t \to \infty,`}
          </MBlock>
          <p className="mb-sm">
            <em>where <M>{String.raw`u_t^*`}</M> is the true user state
            and{" "}
            <M>{String.raw`\varepsilon_t \sim \sqrt{d \log t/t}`}</M>.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof — three conditions
          </p>

          <p className="mb-sm text-ink-90">
            Apply Ghosal & van der Vaart (2017,{" "}
            <em>Fundamentals of Nonparametric Bayesian Inference</em>,
            Theorem 8.9), the master theorem for parametric-rate
            Bayesian posterior contraction. The theorem requires:
          </p>

          <p className="mb-sm">
            <strong>(C1) Prior support.</strong> Full support and
            bounded density of <M>{String.raw`\pi_0`}</M> — the
            framework&apos;s standing prior hypothesis.
          </p>

          <p className="mb-sm">
            <strong>(C2) Testability.</strong> For each{" "}
            <M>{String.raw`\varepsilon > 0`}</M>, construct tests{" "}
            <M>{String.raw`\phi_n`}</M> separating{" "}
            <M>{String.raw`u = u_t^*`}</M> from{" "}
            <M>{String.raw`\|u - u_t^*\| \geq \varepsilon`}</M> with
            exponentially decaying errors. By (U2),{" "}
            <M>{String.raw`L`}</M>-block observation laws are
            KL-separated by{" "}
            <M>{String.raw`\Phi_{\text{id}}(\varepsilon)`}</M> for any{" "}
            <M>{String.raw`u'`}</M> at distance{" "}
            <M>{String.raw`\geq \varepsilon`}</M>. Over{" "}
            <M>{String.raw`n/L`}</M> disjoint blocks, by (U1)&apos;s
            persistent excitation, at least{" "}
            <M>{String.raw`p_0 n/L`}</M> blocks are KL-active.
            Neyman–Pearson tests have errors bounded by{" "}
            <M>{String.raw`\exp(-c n \Phi_{\text{id}}(\varepsilon))`}</M>.
          </p>

          <p className="mb-sm">
            <strong>(C3) Prior mass on KL neighborhood.</strong> Under
            (U2),{" "}
            <M>{String.raw`D_{KL}(P_{y \mid u_t^*} \| P_{y \mid u}) \approx C \|u_t^* - u\|^2`}</M>{" "}
            for <M>{String.raw`u`}</M> near{" "}
            <M>{String.raw`u_t^*`}</M>, so the KL neighborhood{" "}
            <M>{String.raw`B_{KL}(\varepsilon^2)`}</M> contains a
            Euclidean ball of radius{" "}
            <M>{String.raw`\varepsilon/\sqrt{C}`}</M>. The prior&apos;s
            bounded density gives{" "}
            <M>{String.raw`\pi_0(B_{KL}(\varepsilon_n^2)) \geq c_2 \varepsilon_n^d`}</M>.
            Choose{" "}
            <M>{String.raw`\varepsilon_n = \sqrt{(C' d \log n)/n}`}</M>{" "}
            to satisfy the prior-mass condition.
          </p>

          <p className="mb-sm text-ink-90">
            With (C1)–(C3) verified, Theorem 8.9 gives posterior
            contraction at rate{" "}
            <M>{String.raw`\varepsilon_t = \sqrt{(C' d \log t)/t}`}</M>.
            The effective sample size from (U1) is{" "}
            <M>{String.raw`\geq p_0 t`}</M>, preserving the parametric
            rate up to a constant factor.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Remark
          </p>
          <p className="text-base text-ink-90">
            Proposition 4&apos; supplies the structural fact behind
            Deleuze&apos;s <em>dividual</em>: the user-state becomes
            an estimable object under the platform&apos;s filtering
            apparatus, with residual uncertainty contracting at the
            parametric rate. The dividual is the user-state-as-jointly-
            observable. Identifiability is supplied by (U2); excitation
            by (U1); parametric stability by (R1)+(R2).
          </p>
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
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axioms (R1, U1, U2)
            </Link>
          </li>
          <li>
            Companion result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-5-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 5&apos; (metric superego)
            </Link>{" "}
            — the user-side counterpart to the platform-side dividual
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/the-dynamics/dividual-posterior"
              className="text-oxblood hover:underline"
            >
              dividual posterior contraction
            </Link>{" "}
            (planned, Phase 3)
          </li>
          <li>
            Schematic part: the filtering posterior{" "}
            <M>{String.raw`\Pi_t`}</M> links here
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
