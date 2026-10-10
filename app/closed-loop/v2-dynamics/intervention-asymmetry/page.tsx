/**
 * Intervention asymmetry — v2 dynamics plate.
 *
 * Operates Theorem 9 (apparatus §7). The 2×2 site×source taxonomy
 * from §5.0 with the per-cell sensitivity made operable. Mode A
 * scales O(1) in N; individual-scale Modes B/C scale O(1/N).
 */
import type { Metadata } from "next";
import Link from "next/link";
import { InterventionAsymmetry } from "@/components/closed-loop-v2/InterventionAsymmetry";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/intervention-asymmetry";

export const metadata: Metadata = {
  title: "Intervention asymmetry — v2 dynamics — closed-loop",
  description:
    "Operates Theorem 9: the 2×2 site×source intervention taxonomy with per-cell sensitivity. Mode A O(1) vs individual-scale Modes B/C O(1/N).",
  alternates: { canonical: PATH },
};

export default function InterventionAsymmetryPage() {
  return (
    <main className="min-h-screen px-sm py-md max-w-[1100px] mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-md"
      >
        <Link href="/" className="hover:text-oxblood">autostimulus</Link>
        {" · "}
        <Link href="/closed-loop" className="hover:text-oxblood">closed-loop</Link>
        {" · "}
        <span className="text-ink-70">v2 dynamics</span>
        {" · "}
        <span className="text-ink-90">intervention asymmetry</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Intervention asymmetry
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-7/theorem-9"
          className="text-oxblood hover:underline"
        >
          Theorem 9
        </Link>
        {" · "}the 2×2 taxonomy made operable
      </p>

      <div className="my-lg">
        <InterventionAsymmetry />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            The 2×2 site×source taxonomy with per-cell sensitivity{" "}
            <M>{String.raw`\partial \theta^* / \partial X`}</M> made
            visible. Mode A (regulatory × reward) and the fourth-cell
            mode (regulatory × observation) scale{" "}
            <M>{String.raw`O(1)`}</M> in population size{" "}
            <M>{String.raw`N`}</M>. Individual-scale Modes B and C
            scale <M>{String.raw`O(1/N)`}</M>. The asymmetry is
            exactly N-fold; the bars make it visible.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-7/theorem-9"
                className="text-oxblood hover:underline"
              >
                Theorem 9
              </Link>{" "}
              supplies the unified sensitivity formula{" "}
              <M>{String.raw`\partial \theta^* / \partial X = (I - D_\theta \Phi)^{-1} \cdot \partial_X \Phi`}</M>.
              The plate visualizes the per-cell magnitude of this
              partial across the four cells of the taxonomy from{" "}
              <Link
                href="/closed-loop/the-apparatus/section-5"
                className="text-oxblood hover:underline"
              >
                §5.0
              </Link>
              .
            </p>

            <p className="mb-sm">
              <em>The closure amplification factor.</em>{" "}
              <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M> has operator
              norm at most{" "}
              <M>{String.raw`(1 - \kappa_\Phi)^{-1}`}</M>{" "}
              under contractivity, where{" "}
              <M>{String.raw`\kappa_\Phi = (\beta/\alpha)\, L_{\mathcal{D}}`}</M>.
              The same factor amplifies every intervention; the mechanism partial differs across cells. As{" "}
              <M>{String.raw`\kappa_\Phi \to 1`}</M>, the amplification
              diverges — the regime{" "}
              <Link
                href="/closed-loop/the-apparatus/section-10/theorem-12"
                className="text-oxblood hover:underline"
              >
                Theorem 12
              </Link>{" "}
              classifies into three generic bifurcations, plus the
              pitchfork under cohort symmetry.
            </p>

            <p className="mb-sm">
              <em>The N-fold asymmetry.</em> Mode A&apos;s{" "}
              <M>{String.raw`\hat R`}</M> is unindexed by user: it
              enters the optimization for every user simultaneously.
              The fourth-cell&apos;s observation regulation is
              similarly unindexed. Both scale{" "}
              <M>{String.raw`O(1)`}</M>. Individual-scale Modes B
              (user-side practice on{" "}
              <M>{String.raw`T_i`}</M>) and C (user-side practice on{" "}
              <M>{String.raw`O_i`}</M>) incur the{" "}
              <M>{String.raw`1/N`}</M> population-averaging factor:
              individual practice contributes one user&apos;s share
              to the population average.
            </p>

            <p className="mb-sm">
              <em>What the bar comparison shows.</em> Set each cell&apos;s
              intervention intensity equal. Vary{" "}
              <M>{String.raw`N`}</M>. At small{" "}
              <M>{String.raw`N`}</M>, the bars look similar; the
              asymmetry is small. At{" "}
              <M>{String.raw`N = 10^6`}</M> (population-scale), Mode
              A&apos;s bar is six orders of magnitude larger than the
              individual-scale Modes B/C bars. This is the framework&apos;s
              hardest political claim made operable.
            </p>

            <p className="mb-sm">
              <em>What the proposition authorizes the prose to claim.</em>{" "}
              Substituting individual-scale Modes B or C for Mode A
              is the analytical error that converts political work
              into its symptom. The framework&apos;s central political
              claim sits in this 2×2.
            </p>
          </Middle>
        </DepthLayers>
      </div>

      <section className="mt-xl pt-md border-t border-paper-85 max-w-prose mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Operates:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              Theorem 9 (causal sensitivity)
            </Link>
          </li>
          <li>
            The taxonomy:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              §5 Intervention modes (with the 2×2 in §5.0)
            </Link>
          </li>
          <li>
            Crisis boundary:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-10/theorem-12"
              className="text-oxblood hover:underline"
            >
              Theorem 12
            </Link>{" "}
            — what happens to the amplification as contractivity
            approaches its boundary
          </li>
          <li>
            Empirical calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Theorem 9 entry)
            </Link>{" "}
            — natural-experiment estimation of the sensitivities from
            platform policy changes
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — sixth plate.
      </footer>
    </main>
  );
}
