/**
 * Apparatus §1.4 — Definition 1.1 (chrono-debt spectrum).
 *
 * The framework's signature instrument for chronopolitical analysis.
 * Lives in the same §1 directory as Lemma 1 (which it follows from).
 *
 * Content per autostimulus-planning/10_sample_apparatus_section.md §1.4
 * and the formal definition from publishing-pipeline manuscript §1.4.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-1/1.4-chrono-debt";

export const metadata: Metadata = {
  title: "Definition 1.1 (chrono-debt spectrum) — the apparatus — closed-loop",
  description:
    "The chrono-debt spectrum — the foreclosed pause-time at every scale, measured against a pre-closure baseline. The framework's signature instrument for chronopolitical analysis.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
};

export default function ChronoDebtPage() {
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
        <span className="text-ink-90">§1.4 · Definition 1.1</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Definition 1.1 (chrono-debt spectrum)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §1.4 · the framework&apos;s signature instrument
      </p>

      <DepthLayers>
        <Caption>
          The chrono-debt spectrum — the foreclosed pause-time at every
          scale, measured against a pre-closure baseline. The
          framework&apos;s signature instrument for chronopolitical
          analysis: the spectrum is non-zero across the entire scale
          range above the reflective threshold{" "}
          <M>{String.raw`\theta_{\mathrm{ref}}`}</M>.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The survival functions of{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            induce a defined object that travels alongside the lemma
            as the framework&apos;s signature instrument. Fix a
            baseline policy <M>{String.raw`\pi_\circ`}</M> inducing
            survival function <M>{String.raw`S(\tau; \theta_\circ)`}</M>.
            The chrono-debt at scale <M>{String.raw`\tau`}</M> at time{" "}
            <M>{String.raw`t`}</M> is the difference between the two
            survival functions; the spectrum{" "}
            <M>{String.raw`D(t, \cdot)`}</M> is the function of{" "}
            <M>{String.raw`\tau`}</M>.
          </p>

          <p className="mb-sm">
            The aggregate chrono-debt is the spectrum integrated
            against a weighting function <M>{String.raw`w`}</M> — by
            default <M>{String.raw`w(\tau) \propto \tau`}</M>, giving
            longer foreclosed windows proportionally more weight.
          </p>

          <p className="mb-sm">
            What the spectrum reveals depends on which scales the
            weighting prioritizes. At short scales (<M>{String.raw`\tau`}</M>{" "}
            comparable to <M>{String.raw`\delta_{\min}`}</M>), both
            survival functions are near unity and the debt is small.
            At intermediate scales (
            <M>{String.raw`\delta_{\min} \ll \tau \lesssim \theta_{\mathrm{ref}}`}</M>),
            the closed loop has driven{" "}
            <M>{String.raw`S(\tau; \theta_t)`}</M> down sharply while
            the baseline retains substantial mass — the debt is
            maximal here. At long scales (
            <M>{String.raw`\tau \gg \theta_{\mathrm{ref}}`}</M>), both
            survival functions are small and the debt asymptotes.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/chrono-debt-spectrum"
              className="text-oxblood hover:underline"
            >
              watch the spectrum form across scales
            </Link>{" "}
            at the chrono-debt-spectrum plate. The plate exposes the
            parameter{" "}
            <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min}`}</M>{" "}
            and the contractivity{" "}
            <M>{String.raw`L_{\hat R} L_{\mathcal{D}}`}</M>; the reader
            can see how the debt distribution shifts across scales as
            those parameters change.
          </p>

          <p className="mb-sm">
            The instrument&apos;s substantive content: what the
            closure removes is not a number. It is a spectrum of
            foreclosed intervals. A foreclosed second is recoverable.
            A foreclosed adolescence is not. The weighting function
            encodes which scales of foreclosed survival the analysis
            cares about; the framework&apos;s default linear weighting
            encodes the claim that a foreclosed adolescence weighs
            more than a foreclosed second by the relevant timescale
            ratio.
          </p>

          <p className="mb-sm">
            What gets foreclosed at which scale matters. At seconds,
            the foreclosure removes the interval at which a complete
            thought lands — the small pause between perception and
            response in which system-2 deliberation operates. At
            minutes, the timescale of sustained attention to a problem,
            the inner duration in which a worry resolves into something
            workable or names itself a worry. At hours, the structural
            condition for sustained engagement with a project — what
            writers and craftspeople call flow, what therapists call
            the holding interval. At days, the timescale of mood and
            weather, the diurnal rhythm against which a self registers
            its own variations. At years, the timescale of an extended
            biographical project — the developmental window analyzed
            in Proposition 8 as the cohort-gradient claim. The
            spectrum&apos;s defining work is to differentiate across
            timescales: what is foreclosed at a second carries
            different political weight from what is foreclosed at a
            decade.
          </p>

          <p className="mb-sm">
            Stiegler&apos;s analysis of tertiary retention — the
            technically-recorded traces that exteriorize memory —
            provides one of the older critical traditions&apos;
            most-developed treatments of chrono-politics. Stiegler
            argued that techniques of recording (writing, photography,
            phonography, video) progressively proletarianize the inner
            duration through which a self maintains continuity, with
            the technically-mediated traces displacing what they were
            supposed to extend. Lemma 1 and Definition 1.1 give the
            structural form of what Stiegler diagnosed
            phenomenologically. The chrono-debt spectrum names which
            scales are now colonized, and at what rate.
          </p>

          <p className="mb-sm">
            The baseline policy <M>{String.raw`\pi_\circ`}</M> is a
            modeling choice. The framework specifies what chrono-debt
            is given <M>{String.raw`\pi_\circ`}</M>; the choice of{" "}
            <M>{String.raw`\pi_\circ`}</M> depends on what the
            analysis reads the debt against — the pre-platform regime,
            a regulated regime under Mode A, or another reference
            policy.
          </p>
        </Middle>

        <Formal label="Definition 1.1 (chrono-debt spectrum)">
          <p className="mb-sm">
            <em>
              Fix a baseline policy <M>{String.raw`\pi_\circ \in \Pi`}</M>{" "}
              inducing survival function{" "}
              <M>{String.raw`S(\tau; \theta_\circ)`}</M>. The{" "}
              <strong>chrono-debt at scale <M>{String.raw`\tau`}</M> at
              time <M>{String.raw`t`}</M></strong> is
            </em>
          </p>
          <MBlock>
            {String.raw`D(t, \tau) := S(\tau; \theta_\circ) - S(\tau; \theta_t).`}
          </MBlock>

          <p className="mb-sm">
            <em>
              The <strong>aggregate chrono-debt</strong> with weighting{" "}
              <M>{String.raw`w: [0, \infty) \to [0, \infty)`}</M> is
            </em>
          </p>
          <MBlock>
            {String.raw`D_w(t) := \int_0^\infty w(\tau)\, D(t, \tau)\, d\tau.`}
          </MBlock>

          <p className="mb-sm">
            <em>
              The default weighting{" "}
              <M>{String.raw`w(\tau) \propto \tau`}</M> gives longer
              foreclosed windows proportionally more weight.
            </em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Properties
          </p>

          <p className="mb-sm">
            <strong>(a) Positivity at long scales.</strong> By Lemma 1,{" "}
            <M>{String.raw`S(\tau; \theta^*) \to 0`}</M> for{" "}
            <M>{String.raw`\tau > \theta_{\mathrm{ref}}`}</M>. For any
            non-degenerate baseline with{" "}
            <M>{String.raw`S(\theta_{\mathrm{ref}}; \theta_\circ) > 0`}</M>,{" "}
            <M>{String.raw`D(\infty, \tau) = S(\tau; \theta_\circ) > 0`}</M>{" "}
            at long scales. The closed loop drives its own survival to
            operationally zero, leaving the baseline survival mass as
            foreclosed debt.
          </p>

          <p className="mb-sm">
            <strong>(b) Scale-differentiated structure.</strong> The
            spectrum <M>{String.raw`D(t, \tau)`}</M> varies across{" "}
            <M>{String.raw`\tau`}</M>. The maximum is at intermediate
            scales where the closed loop has driven{" "}
            <M>{String.raw`S(\tau; \theta_t)`}</M> down while the
            baseline still retains substantial mass.
          </p>

          <p className="mb-sm">
            <strong>(c) Weighted aggregate as chronopolitical magnitude.</strong>{" "}
            The choice of weighting <M>{String.raw`w`}</M> encodes the
            analytic priority across scales. Linear{" "}
            <M>{String.raw`w(\tau) \propto \tau`}</M> is the
            framework&apos;s default.
          </p>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Prior result:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1 (foreclosure)
            </Link>{" "}
            — the spectrum measures what the foreclosure leaves behind
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/chrono-debt-spectrum"
              className="text-oxblood hover:underline"
            >
              chrono-debt spectrum
            </Link>{" "}
            (operates this instrument)
          </li>
          <li>
            Calibration:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-12"
              className="text-oxblood hover:underline"
            >
              §12 (empirical calibration protocol)
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering — Phase 2 work in progress.
      </footer>
    </main>
  );
}
