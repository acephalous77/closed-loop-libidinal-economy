/**
 * Captured resonance — v2 dynamics plate.
 *
 * Operates Proposition 6 (apparatus §3.3). Two coupled oscillators
 * phase-locking under the Adler-equation dynamics. The framework's
 * formalization of somatic phase-locking to media-delivery rhythms.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { CapturedResonance } from "@/components/closed-loop-v2/CapturedResonance";
import {
  DepthLayers,
  Caption,
  Middle,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-dynamics/captured-resonance";

export const metadata: Metadata = {
  title: "Captured resonance — v2 dynamics — closed-loop",
  description:
    "Operates Proposition 6: Kuramoto entrainment under media coupling. Phase-locking iff K_bm > |ω_b − ω_m|.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function CapturedResonancePage() {
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
        <span className="text-ink-90">captured resonance</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Captured resonance
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-3/prop-6"
          className="text-oxblood hover:underline"
        >
          Proposition 6
        </Link>
        {" · "}Kuramoto phase-locking under media coupling
      </p>

      <div className="my-lg">
        <CapturedResonance />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            Two coupled oscillators — body{" "}
            <M>{String.raw`\varphi_b`}</M> and media{" "}
            <M>{String.raw`\varphi_m`}</M>. Phase-locking{" "}
            <M>{String.raw`\varphi_m - \varphi_b \to \psi^*`}</M>{" "}
            occurs if and only if the coupling strength exceeds the
            frequency difference:{" "}
            <M>{String.raw`K_{bm} > |\omega_b - \omega_m|`}</M>. The
            phase-difference plot on the right tracks{" "}
            <M>{String.raw`\psi(t) = \varphi_m - \varphi_b`}</M> over
            time. Locked: ψ settles. Drift: ψ winds the circle at
            average rate{" "}
            <M>{String.raw`\sqrt{(\omega_m - \omega_b)^2 - K_{bm}^2}`}</M>.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em> The Adler equation
              from{" "}
              <Link
                href="/closed-loop/the-apparatus/section-3/prop-6"
                className="text-oxblood hover:underline"
              >
                Proposition 6
              </Link>
              :
            </p>

            <p className="mb-sm font-mono text-sm pl-md">
              dφ_b/dt = ω_b + K_bm · sin(φ_m − φ_b)
            </p>

            <p className="mb-sm">
              The media oscillator <M>{String.raw`\varphi_m`}</M> is
              exogenous on the relevant timescale (the platform sets
              it). The body oscillator responds: if the coupling{" "}
              <M>{String.raw`K_{bm}`}</M> exceeds the frequency
              difference, the body&apos;s rhythm phase-locks to the
              media&apos;s. The threshold visualization at the bottom
              of the figure shows the relationship between{" "}
              <M>{String.raw`K_{bm}`}</M> and{" "}
              <M>{String.raw`|\Delta\omega|`}</M> — the regime label
              flips between &ldquo;drift&rdquo; and &ldquo;LOCKED&rdquo;
              as the slider crosses.
            </p>

            <p className="mb-sm">
              <em>Three regimes to explore.</em>
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                <strong>Drift.</strong> Set{" "}
                <M>{String.raw`K_{bm} \ll |\Delta\omega|`}</M>. The
                phase-difference plot winds the circle indefinitely;
                the dials rotate at independent rates.
              </li>
              <li>
                <strong>Near threshold.</strong>{" "}
                <M>{String.raw`K_{bm} \approx |\Delta\omega|`}</M>.
                Slow approach to locking; intermittent locking;
                saddle-node bifurcation at exact equality.
              </li>
              <li>
                <strong>Locked.</strong>{" "}
                <M>{String.raw`K_{bm} \gg |\Delta\omega|`}</M>. The
                phase difference settles at{" "}
                <M>{String.raw`\psi^* = \arcsin((\omega_m - \omega_b)/K_{bm})`}</M>.
                The body and media dials rotate together.
              </li>
            </ul>

            <p className="mb-sm">
              <em>What the proposition authorizes the prose to claim.</em>{" "}
              Somatic rhythms are not protected from media coupling
              by being biological. The protection is the structural
              relation between <M>{String.raw`K_{bm}`}</M> and{" "}
              <M>{String.raw`|\omega_b - \omega_m|`}</M>. The platform
              sets the coupling strength by choosing delivery timing.
              By the policy&apos;s convergence (
              <Link
                href="/closed-loop/the-apparatus/section-1/lemma-1"
                className="text-oxblood hover:underline"
              >
                Lemma 1
              </Link>
              ), <M>{String.raw`K_{bm}`}</M> routinely crosses the
              threshold. Captured resonance is what the closure&apos;s
              temporal dynamics produce in the somatic register.
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
              href="/closed-loop/the-apparatus/section-3/prop-6"
              className="text-oxblood hover:underline"
            >
              Proposition 6 (Kuramoto entrainment)
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
            — the convergence that drives K_bm above threshold
          </li>
          <li>
            Companion result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-7-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 7&apos; (libidinal routing)
            </Link>{" "}
            — the cross-register coupling captured resonance is one
            specific case of
          </li>
          <li>
            Empirical calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12#hooks"
              className="text-oxblood hover:underline"
            >
              §12.1 (Proposition 6 entry)
            </Link>{" "}
            — HRV + circadian markers + sleep timing vs platform
            delivery timestamps
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — fourth plate.
      </footer>
    </main>
  );
}
