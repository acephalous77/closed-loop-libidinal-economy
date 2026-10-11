/**
 * Chrono-debt spectrum — v2 dynamics plate.
 *
 * Operates Definition 1.1 (apparatus §1.4). The framework's signature
 * instrument for chronopolitical analysis, made operable: the spectrum
 * D(t, τ) = S(τ; θ_∘) − S(τ; θ_t) across log-spaced τ.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ChronoDebtSpectrum } from "@/components/closed-loop-v2/ChronoDebtSpectrum";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
} from "@/components/ui/DepthLayers";
import { M } from "@/components/ui/Math";
import { PlateGlyph } from "@/components/closed-loop-v2/PlateGlyphs";

const PATH = "/closed-loop/v2-dynamics/chrono-debt-spectrum";

export const metadata: Metadata = {
  title: "Chrono-debt spectrum — v2 dynamics — closed-loop",
  description:
    "Operates Definition 1.1: the foreclosed pause-time at every scale, measured against the pre-closure baseline. The framework's signature instrument.",
  alternates: { canonical: PATH },
};

export default function ChronoDebtSpectrumPage() {
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
        <span className="text-ink-90">chrono-debt spectrum</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Chrono-debt spectrum
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Operates{" "}
        <Link
          href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt"
          className="text-oxblood hover:underline"
        >
          Definition 1.1
        </Link>
        {" · "}the framework&apos;s signature instrument
      </p>

      <div className="flex items-center gap-sm mb-sm" aria-hidden>
        <span className="text-ink-70 shrink-0">
          <PlateGlyph slug="chrono-debt-spectrum" size={80} strokeWidth={1.05} />
        </span>
        <span className="h-px flex-1 bg-paper-85" />
      </div>

      <div className="my-lg">
        <ChronoDebtSpectrum />
      </div>

      <div className="max-w-prose mx-auto">
        <DepthLayers>
          <Caption>
            The chrono-debt spectrum{" "}
            <M>{String.raw`D(t, \tau) = S(\tau; \theta_\circ) - S(\tau; \theta_t)`}</M>{" "}
            across log-spaced{" "}
            <M>{String.raw`\tau`}</M>. Each bar measures the foreclosed
            pause-time at that scale, against the pre-closure baseline.
            The bars are darkest where the foreclosure is sharpest —
            typically at the intermediate scales between{" "}
            <M>{String.raw`\delta_{\min}`}</M> and{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}`}</M>.
          </Caption>

          <Middle>
            <p className="mb-sm">
              <em>What the plate operates.</em>{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt"
                className="text-oxblood hover:underline"
              >
                Definition 1.1
              </Link>{" "}
              defines the chrono-debt spectrum as the difference
              between the pre-closure baseline survival function and
              the closed-loop one, evaluated at every scale. As the
              policy <M>{String.raw`\theta_t`}</M> converges to the
              fixed point{" "}
              <M>{String.raw`\theta^*`}</M>, the bars climb across
              the scales the closure forecloses first.
            </p>

            <p className="mb-sm">
              <em>The scale-differentiated structure.</em> Per the
              proposition&apos;s property (b), the spectrum varies
              across <M>{String.raw`\tau`}</M>:
            </p>

            <ul className="list-disc pl-md mb-sm space-y-xs">
              <li>
                At short scales (<M>{String.raw`\tau \sim \delta_{\min}`}</M>),
                both survival functions are near unity and the debt
                is small.
              </li>
              <li>
                At intermediate scales{" "}
                (<M>{String.raw`\delta_{\min} \ll \tau \lesssim \theta_{\mathrm{ref}}`}</M>),
                the closed loop has driven the current survival down
                sharply while the baseline retains substantial mass.
                The debt is maximal here.
              </li>
              <li>
                At long scales{" "}
                (<M>{String.raw`\tau \gg \theta_{\mathrm{ref}}`}</M>),
                both survival functions are small and the debt
                asymptotes.
              </li>
            </ul>

            <p className="mb-sm">
              <em>Weighted view.</em> Toggle &ldquo;weighted by scale&rdquo;
              to multiply each bar by{" "}
              <M>{String.raw`\tau`}</M> (the framework&apos;s default
              weighting). The weighting encodes the substantive claim:
              a foreclosed adolescence weighs more than a foreclosed
              second by the relevant timescale ratio. Unweighted shows
              where the foreclosure first concentrates; weighted shows
              what carries the political weight.
            </p>

            <p className="mb-sm">
              <em>The aggregate readout.</em>{" "}
              <M>{String.raw`\int_0^\infty D(t, \tau)\, d\tau`}</M> is
              the unweighted aggregate chrono-debt; under the framework
              the integral grows as{" "}
              <M>{String.raw`\theta_t \to \theta^*`}</M> and the
              spectrum widens. The number in the readout is the
              instantaneous integrated debt — the chronopolitical
              magnitude of the foreclosure at the current{" "}
              <M>{String.raw`\theta_t`}</M>.
            </p>
          </Middle>

          <Formal label="Definition 1.1 (chrono-debt spectrum) — referenced" collapsible defaultExpanded={false}>
            <p className="text-base text-ink-90">
              The full definition and properties live at{" "}
              <Link
                href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt"
                className="text-oxblood hover:underline"
              >
                §1.4
              </Link>
              . The plate above visualizes the spectrum directly; the
              aggregate integral with default weighting{" "}
              <M>{String.raw`w(\tau) \propto \tau`}</M> is the
              chronopolitical magnitude property (c).
            </p>
          </Formal>
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
              href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt"
              className="text-oxblood hover:underline"
            >
              Definition 1.1 (chrono-debt spectrum)
            </Link>
          </li>
          <li>
            Companion plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/foreclosure-clock"
              className="text-oxblood hover:underline"
            >
              foreclosure clock
            </Link>{" "}
            — the same sim engine, visualized as survival curves
          </li>
          <li>
            Prior result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            — the foreclosure that drives the spectrum
          </li>
          <li>
            As instrument:{" "}
            <Link
              href="/closed-loop/the-instruments"
              className="text-oxblood hover:underline"
            >
              the instruments
            </Link>{" "}
            — the chrono-debt spectrum is the framework&apos;s
            signature measurable instrument
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50 max-w-prose mx-auto">
        v2 dynamics plate — second plate against the new sim engine.
        v1 chrono-debt plate (built on the pre-rework math) is still
        at{" "}
        <Link
          href="/closed-loop/the-dynamics/chrono-debt"
          className="text-oxblood hover:underline"
        >
          /closed-loop/the-dynamics/chrono-debt
        </Link>
        .
      </footer>
    </main>
  );
}
