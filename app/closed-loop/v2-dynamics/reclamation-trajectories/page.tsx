/**
 * Reclamation trajectories -- v2 dynamics plate.
 *
 * Operates Theorem 1' (apparatus s2). The framework's hardest claim:
 * any estimator of the conditional autocovariance has unbounded sample
 * complexity under closed-loop sampling.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ReclamationTrajectories } from "@/components/closed-loop-v2/ReclamationTrajectories";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";
import { PlateGlyph } from "@/components/closed-loop-v2/PlateGlyphs";

const PATH = "/closed-loop/v2-dynamics/reclamation-trajectories";

export const metadata: Metadata = {
  title: "Reclamation trajectories — v2 dynamics — closed-loop",
  description:
    "Operates Theorem 1': estimator MSE bounded below by the framework's lower bound. Almost all trajectories cluster above; recovery is operationally infeasible.",
  alternates: { canonical: PATH },
};

export default function ReclamationTrajectoriesPage() {
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
        <span className="text-ink-90">reclamation trajectories</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Reclamation trajectories
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
          className="text-oxblood hover:underline"
        >
          Theorem 1&apos;
        </Link>
        {" · "}the framework&apos;s hardest claim
      </p>

      <div className="flex items-center gap-sm mb-sm" aria-hidden>
        <span className="text-ink-70 shrink-0">
          <PlateGlyph slug="reclamation-trajectories" size={80} strokeWidth={1.05} />
        </span>
        <span className="h-px flex-1 bg-paper-85" />
      </div>

      <div className="my-lg">
        <ReclamationTrajectories />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            A bundle of estimator MSE trajectories versus sample budget{" "}
            <M>{String.raw`T`}</M> on log-log axes. The oxblood
            reference curve is the framework&apos;s lower bound{" "}
            <M>{String.raw`c \cdot \sigma_u^4 / [T \cdot S(\tau; \theta^*)]`}</M>.
            Almost all trajectories cluster above the bound. The rare
            moss-highlighted trajectories that pierce below are exactly
            that — rare. The bound is tight.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
                className="text-oxblood hover:underline"
              >
                Theorem 1&apos;
              </Link>{" "}
              establishes that the MSE of any estimator{" "}
              <M>{String.raw`\hat I_T(\tau)`}</M> of the conditional
              autocovariance is bounded below by{" "}
              <M>{String.raw`c \cdot \sigma_u^4 / [T \cdot S(\tau; \theta^*)]`}</M>.
              Because{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                Lemma 1
              </Link>{" "}
              drives <M>{String.raw`S`}</M> to operationally zero,
              the bound itself diverges in the closure&apos;s sampling
              regime. The plate visualizes this divergence.
            </p>

            <p className="mb-sm">
              <em>What the structural-separation slider does.</em>{" "}
              Increasing{" "}
              <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min}`}</M>{" "}
              squares the height of the bound. The bound&apos;s
              oxblood curve rises; the trajectories above it rise
              with it; the feasibility threshold for any given
              estimator MSE moves further to the right. At{" "}
              <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} = 10^3`}</M>{" "}
              (empirical scale), feasible-sample-budget recovery
              requires <M>{String.raw`T \gtrsim 10^6 c`}</M>;
              operationally infeasible.
            </p>

            <p className="mb-sm">
              <em>Why the rare-trajectory highlight matters.</em>{" "}
              Roughly 5% of trajectories briefly pierce below the
              bound at large{" "}
              <M>{String.raw`T`}</M> — sample-fluctuation effects.
              These don&apos;t falsify the framework: the bound is on{" "}
              <em>expected-MSE</em>, while a single realization&apos;s
              sample-MSE can dip below it. The
              highlight emphasizes that even these rare trajectories
              remain in the operationally-infeasible regime: the
              estimator is &ldquo;lucky&rdquo; on one realization;
              the framework&apos;s claim is about the achievable rate
              for any consistent estimator.
            </p>

            <p className="mb-sm">
              <em>What the theorem authorizes the prose to claim.</em>{" "}
              The closure removes the conditioning event on which
              any sample-based recovery of the user&apos;s autocovariance
              could ground itself. The user-state continues to exist.
              The empirical accessibility of the formal object that a structural reclamation project would have to measure is absent. Not destruction. Not erasure.
              Uninstantiation.
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
              href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
              className="text-oxblood hover:underline"
            >
              Theorem 1&apos; (reclamation as sample-complexity divergence)
            </Link>
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            — the foreclosure that drives S to operational zero
          </li>
          <li>
            What follows:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-5"
              className="text-oxblood hover:underline"
            >
              §5 (intervention modes)
            </Link>{" "}
            — Mode A is the only intervention the impossibility does
            not foreclose
          </li>
          <li>
            Empirical calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Theorem 1&apos; entry)
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — seventh plate. The framework&apos;s three
        load-bearing claims (Lemma 1 + Theorem 1&apos; + Theorem 9) all
        have v2 plates now.
      </footer>
    </main>
  );
}
