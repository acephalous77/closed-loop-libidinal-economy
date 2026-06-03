/**
 * Apparatus §3.3 — Proposition 6 (Kuramoto entrainment under media coupling).
 *
 * Somatic phase-locking. When the platform's coupling strength exceeds
 * the difference between body and platform intrinsic frequencies,
 * phase-locking occurs. Captured resonance: somatic rhythms phase-lock
 * to delivery rhythms.
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

const PATH = "/closed-loop/the-apparatus/section-3/prop-6";

export const metadata: Metadata = {
  title: "Proposition 6 (Kuramoto phase-locking) — the apparatus — closed-loop",
  description:
    "Somatic phase-locking under media coupling. Body rhythm phase-locks to platform delivery rhythm iff the coupling strength exceeds the frequency difference. Captured resonance.",
  alternates: { canonical: PATH },
};

export default function Prop6Page() {
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
        <span className="text-ink-90">§3.3 · Prop 6</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Proposition 6 (Kuramoto entrainment under media coupling)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §3.3 · captured resonance · somatic phase-locking
      </p>

      <DepthLayers>
        <Caption>
          When the platform&apos;s coupling strength{" "}
          <M>{String.raw`K_{bm}`}</M> exceeds the difference between
          body and platform intrinsic frequencies{" "}
          <M>{String.raw`|\omega_b - \omega_m|`}</M>, phase-locking
          occurs. The body&apos;s rhythm becomes the platform&apos;s.
          Captured resonance: somatic rhythms are exposed to media
          coupling regardless of being &ldquo;biological.&rdquo; Their
          only protection is a structural relation, and the
          platform&apos;s parameters routinely cross the threshold.
        </Caption>

        <Middle>
          <p className="mb-sm">
            Two oscillators: a somatic oscillator with phase{" "}
            <M>{String.raw`\varphi_b(t)`}</M> and intrinsic frequency{" "}
            <M>{String.raw`\omega_b`}</M>; a media-delivery oscillator
            with phase{" "}
            <M>{String.raw`\varphi_m(t) = \omega_m t + \varphi_m(0)`}</M>{" "}
            and intrinsic frequency{" "}
            <M>{String.raw`\omega_m`}</M> set by the platform&apos;s
            delivery timing. Coupling occurs through stimulus delivery:
            each platform event nudges the body&apos;s phase toward
            the media phase by an amount proportional to the coupling
            strength <M>{String.raw`K_{bm}`}</M>.
          </p>

          <p className="mb-sm">
            <em>The threshold.</em> Phase-locking — the phase difference
            settling at a constant{" "}
            <M>{String.raw`\psi^*`}</M> — occurs if and only if{" "}
            <M>{String.raw`K_{bm} > |\omega_b - \omega_m|`}</M>. Below
            threshold, the phase difference winds the circle at average
            drift rate{" "}
            <M>{String.raw`\sqrt{(\omega_m - \omega_b)^2 - K_{bm}^2}`}</M>{" "}
            (the Adler equation). At threshold exactly, a saddle-node
            bifurcation collapses the two equilibrium branches; above
            threshold, the principal-branch equilibrium{" "}
            <M>{String.raw`\psi_+^* \in (-\pi/2, \pi/2)`}</M> is
            stable.
          </p>

          <p className="mb-sm">
            <em>What the proposition authorizes the prose to claim.</em>{" "}
            <em>Captured resonance</em> is the formal name. Somatic
            rhythms — circadian, ultradian, cardiovascular,
            attentional — are exposed to media coupling regardless of
            being biological. Their only protection is structural: the
            relation between{" "}
            <M>{String.raw`K_{bm}`}</M> and{" "}
            <M>{String.raw`|\omega_b - \omega_m|`}</M>. The platform
            sets the coupling strength by choosing delivery timing.
            By its policy&apos;s convergence (Lemma 1), it routinely
            sets the coupling strength to cross the threshold. The
            body&apos;s rhythm phase-locks to the delivery rhythm.
          </p>

          <p className="mb-sm">
            The proposition&apos;s empirical hinge is well-established.
            Heart-rate variability under emotionally activating media
            stimuli has been documented across the affective-computing
            literature (Kreibig 2010; Picard et al. 1997).
            Circadian-rhythm disruption from screen exposure during
            the body&apos;s evening melatonin window has been
            quantified in the chronobiology literature (Chang et al.
            2015; Hatori et al. 2017). Pupillary and attention-system
            coupling to short-form video pacing has been measured in
            psychophysiological-engagement studies (Reeves et al.
            2021). What these literatures jointly establish:{" "}
            <M>{String.raw`K_{bm} > 0`}</M>. Somatic oscillators do
            respond to media coupling. The framework&apos;s
            contribution is the threshold — when does the body&apos;s
            rhythm phase-lock to the platform&apos;s, and when does it
            merely drift?
          </p>

          <p className="mb-sm">
            <em>The platform-side reading.</em> The platform&apos;s
            optimization (Theorem 9&apos;s sensitivity) selects
            policies that increase <M>{String.raw`K_{bm}`}</M> wherever
            this raises engagement. The threshold-crossing is the
            equilibrium outcome of the closure — the platform&apos;s
            own optimization drives it. Captured resonance is what the
            closure&apos;s temporal dynamics produce in the somatic
            register.
          </p>

          <p className="mb-sm">
            The temporal politics this exposes was already named by
            Jonathan Crary (<em>24/7: Late Capitalism and the Ends of
            Sleep</em>, 2013) — the way capital progressively erodes
            the temporal recesses (sleep, idle hours, the diurnal
            pause) on which human reconstitution depended.
            Proposition 6 specifies the structural mechanism. Once{" "}
            <M>{String.raw`K_{bm} > |\omega_b - \omega_m|`}</M>, the
            body&apos;s rhythm enters the platform&apos;s basin —
            circadian, ultradian, cardiac, attentional. Crary&apos;s
            diagnosis was that the recesses were being colonized; the
            proposition supplies the mathematical form of the
            colonization.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/captured-resonance"
              className="text-oxblood hover:underline"
            >
              operate the captured-resonance plate
            </Link>{" "}
            to vary{" "}
            <M>{String.raw`K_{bm}`}</M> and the frequency difference{" "}
            <M>{String.raw`|\omega_b - \omega_m|`}</M> and watch the
            phase-locking transition.
          </p>
        </Middle>

        <Formal label="Proposition 6 (Kuramoto entrainment under media coupling)">
          <p className="mb-sm">
            <em>
              Let <M>{String.raw`\varphi_b(t)`}</M> be the phase of a
              somatic oscillator with intrinsic frequency{" "}
              <M>{String.raw`\omega_b > 0`}</M>. Let{" "}
              <M>{String.raw`\varphi_m(t) = \omega_m t + \varphi_m(0)`}</M>{" "}
              be the media-delivery phase, with{" "}
              <M>{String.raw`\omega_m`}</M> exogenous to the body on
              the relevant timescale. Suppose the coupled dynamics are
            </em>
          </p>
          <MBlock>
            {String.raw`\frac{d\varphi_b}{dt} = \omega_b + K_{bm} \sin(\varphi_m - \varphi_b).`}
          </MBlock>
          <Reads>
            The body&apos;s rhythm advances at its own frequency{" "}
            <M>{String.raw`\omega_b`}</M>, plus a tug from the media
            rhythm. The tug&apos;s size is the coupling{" "}
            <M>{String.raw`K_{bm}`}</M> times the sine of how far the
            two phases are apart — strongest when they are a
            quarter-cycle out of step, vanishing when aligned. This is
            the Kuramoto equation: the minimal model of one oscillator
            pulled toward another.
          </Reads>
          <p className="mb-sm">
            <em>Phase-locking —{" "}
            <M>{String.raw`\varphi_m(t) - \varphi_b(t) \to \psi^*`}</M>{" "}
            for some constant <M>{String.raw`\psi^*`}</M> — occurs if
            and only if{" "}
            <M>{String.raw`K_{bm} > |\omega_b - \omega_m|`}</M>.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof
          </p>

          <p className="mb-sm text-ink-90">
            Let{" "}
            <M>{String.raw`\psi(t) := \varphi_m(t) - \varphi_b(t)`}</M>.
            Then{" "}
            <M>{String.raw`\dot\psi = \omega_m - \omega_b - K_{bm} \sin\psi`}</M>.
            Equilibria satisfy{" "}
            <M>{String.raw`\sin\psi^* = (\omega_m - \omega_b)/K_{bm}`}</M>.
            A real solution exists iff{" "}
            <M>{String.raw`|\omega_m - \omega_b|/K_{bm} \leq 1`}</M>,
            equivalently{" "}
            <M>{String.raw`K_{bm} \geq |\omega_m - \omega_b|`}</M>.
          </p>

          <p className="mb-sm text-ink-90">
            When it exists, the principal-branch solution{" "}
            <M>{String.raw`\psi_+^* \in [-\pi/2, \pi/2]`}</M> satisfies{" "}
            <M>{String.raw`\cos\psi_+^* \geq 0`}</M>. Linearizing at{" "}
            <M>{String.raw`\psi^*`}</M>:{" "}
            <M>{String.raw`\dot{\delta\psi} = -K_{bm} \cos\psi^* \cdot \delta\psi`}</M>.
            Stability iff <M>{String.raw`\cos\psi^* > 0`}</M>, which
            holds strictly when{" "}
            <M>{String.raw`\psi_+^* \in (-\pi/2, \pi/2)`}</M> — i.e.,
            when{" "}
            <M>{String.raw`K_{bm} > |\omega_m - \omega_b|`}</M>{" "}
            strictly. The complementary branch{" "}
            <M>{String.raw`\psi_-^* \in [\pi/2, 3\pi/2]`}</M> has{" "}
            <M>{String.raw`\cos\psi_-^* \leq 0`}</M> and is unstable.
          </p>

          <p className="mb-sm text-ink-90">
            At threshold{" "}
            <M>{String.raw`K_{bm} = |\omega_m - \omega_b|`}</M>{" "}
            exactly, the two branches coalesce at{" "}
            <M>{String.raw`\psi^* = \pm\pi/2`}</M> in a saddle-node
            bifurcation (Strogatz 2015, <em>Nonlinear Dynamics and
            Chaos</em>, §4.6 — the Adler equation).
          </p>

          <p className="mb-sm text-ink-90">
            Below threshold (
            <M>{String.raw`K_{bm} < |\omega_m - \omega_b|`}</M>), no
            equilibrium exists;{" "}
            <M>{String.raw`\psi(t)`}</M> winds the circle at average
            drift rate{" "}
            <M>{String.raw`\sqrt{(\omega_m - \omega_b)^2 - K_{bm}^2}`}</M>.
          </p>
          <ProofEnd />

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Remark
          </p>
          <p className="text-base text-ink-90">
            Captured resonance is the formal name: when the
            platform&apos;s coupling strength exceeds the difference
            between body and platform intrinsic frequencies, phase
            locking occurs. The platform sets the coupling strength
            by choosing delivery timing; the threshold is, by the
            policy&apos;s convergence, routinely crossed. Somatic
            rhythms are exposed to media coupling regardless of being
            &ldquo;biological.&rdquo; Their only protection is a
            structural relation between <M>{String.raw`K_{bm}`}</M> and{" "}
            <M>{String.raw`|\omega_b - \omega_m|`}</M>. The
            platform&apos;s parameters move users across the threshold.
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
              href="/closed-loop/the-apparatus/section-3/prop-7-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 7&apos; (libidinal routing)
            </Link>{" "}
            — the four-register coupling that captured resonance is
            one specific case of
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              Lemma 1
            </Link>{" "}
            — the convergence that produces threshold-crossing as
            equilibrium outcome
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/captured-resonance"
              className="text-oxblood hover:underline"
            >
              captured resonance
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
