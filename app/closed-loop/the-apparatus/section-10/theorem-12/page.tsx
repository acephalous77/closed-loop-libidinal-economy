/**
 * Apparatus §10 — Theorem 12 (crisis-boundary bifurcation classification).
 *
 * What happens at and beyond the contractivity boundary κ = 1. Four
 * bifurcation regimes — saddle-node, pitchfork, period-doubling,
 * Neimark–Sacker — each with an empirically observable platform-
 * dynamical signature.
 *
 * The schematic's contractivity-boundary annotation links here.
 *
 * Content per publishing-pipeline manuscript §10.1-§10.4.
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

const PATH = "/closed-loop/the-apparatus/section-10/theorem-12";

export const metadata: Metadata = {
  title: "Theorem 12 (crisis-boundary classification) — the apparatus — closed-loop",
  description:
    "Bifurcation classification at the contractivity boundary κ_Φ = 1. Three generic codimension-1 regimes — saddle-node, period-doubling, Neimark–Sacker — plus the pitchfork under cohort symmetry. The framework's vocabulary for platforms' own structural crises.",
  alternates: { canonical: PATH },
};

export default function Theorem12Page() {
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
        <span className="text-ink-90">§10 · Theorem 12</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Theorem 12 (crisis-boundary bifurcation classification)
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §10 · the framework&apos;s vocabulary for platform crises
      </p>

      <DepthLayers>
        <Caption>
          What happens at and beyond the contractivity boundary{" "}
          <M>{String.raw`\kappa_\Phi = 1`}</M> (the operator modulus
          of §0.3). The framework&apos;s stable-point analysis fails.
          Three generic codimension-1 bifurcation regimes —
          saddle-node, period-doubling, Neimark–Sacker — plus the
          pitchfork under cohort symmetry, each with an empirically
          observable platform-dynamical signature. The framework now
          has formal vocabulary for platforms&apos; own structural
          crises.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The framework&apos;s regularity hypothesis (R1) requires
            the operator to contract:{" "}
            <M>{String.raw`\kappa := \kappa_\Phi < 1`}</M>, where{" "}
            <M>{String.raw`\kappa_\Phi \leq (\beta/\alpha) L_{\mathcal{D}}`}</M>{" "}
            is the operator modulus of §0.3 — not the value-sensitivity
            product <M>{String.raw`L_{\hat R} L_{\mathcal{D}}`}</M>.
            As <M>{String.raw`\kappa \to 1^-`}</M>, the closure
            amplification factor{" "}
            <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M> from{" "}
            <Link
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              Theorem 9
            </Link>{" "}
            diverges. For <M>{String.raw`\kappa \geq 1`}</M>, the
            apparatus&apos;s stable-point analysis fails outright.
            This section classifies what dynamical regimes obtain at
            and beyond the crisis boundary.
          </p>

          <p className="mb-sm">
            <em>Linearization at the stable point.</em> Near{" "}
            <M>{String.raw`\theta^*`}</M>, the iteration{" "}
            <M>{String.raw`\theta_{n+1} = \Phi(\theta_n)`}</M> has
            linearization{" "}
            <M>{String.raw`\theta_{n+1} - \theta^* \approx J^* (\theta_n - \theta^*)`}</M>{" "}
            where <M>{String.raw`J^* := D_\theta \Phi(\theta^*)`}</M>.
            By (R1), <M>{String.raw`\rho(J^*) \leq \kappa`}</M>. The
            local-stability classification depends on the location of{" "}
            <M>{String.raw`J^*`}</M>&apos;s eigenvalues relative to
            the unit circle. All inside: asymptotically stable (the
            apparatus&apos;s regime). On the unit circle: marginal;
            bifurcation analysis required. Outside: unstable.
          </p>

          <p className="mb-sm">
            <em>The bifurcation regimes.</em> At{" "}
            <M>{String.raw`\kappa = 1`}</M> a single eigenvalue of the
            linearization touches the unit circle (the generic
            codimension-1 case). Where it touches fixes the
            bifurcation type. Three types are generic in a
            one-parameter family:
          </p>

          <ul className="list-disc pl-md mb-sm space-y-xs">
            <li>
              <strong>Saddle-node</strong> — eigenvalue at{" "}
              <M>{String.raw`+1`}</M>, quadratic non-degeneracy. Two
              fixed points collide and annihilate at threshold. Above
              threshold: iteration diverges or jumps to a distant
              attractor.
            </li>
            <li>
              <strong>Pitchfork</strong> (non-generic) — eigenvalue at{" "}
              <M>{String.raw`+1`}</M>, cubic non-degeneracy. It is{" "}
              <em>not</em> generic in a one-parameter family; it
              replaces the saddle-node only when{" "}
              <M>{String.raw`\Phi`}</M> commutes with a{" "}
              <M>{String.raw`\mathbb{Z}_2`}</M> symmetry — which the
              framework&apos;s symmetric cohorts can supply. A single
              stable fixed point becomes unstable; two symmetric stable
              fixed points appear.
            </li>
            <li>
              <strong>Period-doubling (flip)</strong> — eigenvalue at{" "}
              <M>{String.raw`-1`}</M>. Stable fixed point becomes
              unstable; stable 2-cycle appears. With increasing
              parameter: period-2 → period-4 → … → chaos via the
              Feigenbaum cascade.
            </li>
            <li>
              <strong>Neimark–Sacker</strong> — complex eigenvalue
              pair <M>{String.raw`e^{\pm i\omega}`}</M> on the unit
              circle. Stable fixed point becomes unstable; stable
              invariant circle appears with amplitude{" "}
              <M>{String.raw`\sqrt{\kappa - 1}`}</M> in the
              super-critical case.
            </li>
          </ul>

          <p className="mb-sm">
            All three — saddle-node, period-doubling, Neimark–Sacker —
            are generic codimension-1 events; which one obtains is a
            property of <M>{String.raw`\Phi`}</M> at{" "}
            <M>{String.raw`(\theta^*, \kappa = 1)`}</M>, not a matter
            of one being more typical than the others. The pitchfork
            is the lone exception — it requires the{" "}
            <M>{String.raw`\mathbb{Z}_2`}</M>-equivariance of a
            symmetric cohort and is non-generic without it.
          </p>

          <p className="mb-sm">
            <em>Empirical signatures.</em> Each regime has an
            observable platform-dynamical signature:
          </p>

          <div className="mt-sm mb-sm overflow-x-auto">
            <table className="font-mono text-sm">
              <thead>
                <tr className="border-b border-paper-85">
                  <th className="text-left pr-md pb-xs text-ink-70">Regime</th>
                  <th className="text-left pr-md pb-xs text-ink-70">Empirical signature</th>
                  <th className="text-left pb-xs text-ink-70">Mechanism</th>
                </tr>
              </thead>
              <tbody className="text-ink-90">
                <tr className="border-b border-paper-85">
                  <td className="pr-md py-xs">Saddle-node</td>
                  <td className="pr-md py-xs">Platform crises, hard resets, algorithm-rebuild events</td>
                  <td className="py-xs">Loss of stability with no nearby alternative</td>
                </tr>
                <tr className="border-b border-paper-85">
                  <td className="pr-md py-xs">Pitchfork</td>
                  <td className="pr-md py-xs">Polarized stable regimes</td>
                  <td className="py-xs">Symmetry-breaking after threshold</td>
                </tr>
                <tr className="border-b border-paper-85">
                  <td className="pr-md py-xs">Period-doubling</td>
                  <td className="pr-md py-xs">Oscillating then chaotic engagement</td>
                  <td className="py-xs">Strong self-correction overshooting</td>
                </tr>
                <tr>
                  <td className="pr-md py-xs">Neimark–Sacker</td>
                  <td className="pr-md py-xs">Rage-bait cycles, viral rhythms, recurrent content patterns</td>
                  <td className="py-xs">Rotational dynamics in policy space</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-sm">
            Real platforms likely exhibit a mixture: Neimark–Sacker
            oscillations at intermediate timescales, saddle-node
            crises at longer timescales, period-doubling where
            self-correction overshoots, and the pitchfork where a
            symmetric cohort supplies the{" "}
            <M>{String.raw`\mathbb{Z}_2`}</M> symmetry it requires.
          </p>

          <p className="mb-sm">
            <em>What the theorem authorizes the prose to claim.</em>{" "}
            The platform itself is in crisis. Repeated algorithm-rebuild
            events, monetization pivots, rage-bait cycles, viral cascade
            rhythms — these are not anomalies. They are bifurcation
            phenomena at the contractivity boundary the framework names.
            The platform-crisis chapter of Part II develops the
            substantive content; Theorem 12 supplies the formal
            vocabulary.
          </p>

          <p className="mb-sm">
            <em>Platform-history reading.</em> The framework&apos;s
            bifurcation classification offers a vocabulary for events
            the industry typically describes as engineering anomalies,
            &ldquo;algorithmic shifts,&rdquo; or content-policy
            upheavals. Twitter&apos;s recurrent algorithmic crises in
            2014–2016 — the move from chronological to algorithmic
            timeline, the shadow-banning controversies, the
            platform&apos;s stated identity instability — plausibly
            trace a saddle-node trajectory. The viral content rhythms
            on TikTok&apos;s For You Page (content categories rising
            to platform dominance and decaying in characteristic
            cycles) exhibit the rotational dynamics Neimark–Sacker
            classifies. Facebook&apos;s repeated News Feed pivots
            between video-priority and friends-and-family-priority
            read as period-doubling responses to overshooting
            engagement targets. The framework does not claim that
            these specific events are these specific bifurcations —
            empirical work would have to demonstrate that — but
            supplies the formal vocabulary against which those events
            could be classified.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/crisis-boundary"
              className="text-oxblood hover:underline"
            >
              operate the crisis-boundary plate
            </Link>{" "}
            to view the bifurcation diagram for each regime — the three
            generic cases and the symmetry-protected pitchfork.
          </p>
        </Middle>

        <Formal label="Theorem 12 (crisis-boundary bifurcation classification)">
          <p className="mb-sm">
            <em>
              Let <M>{String.raw`\kappa := \kappa_\Phi`}</M> be the
              contractivity parameter (the operator modulus of §0.3),
              treated as a one-dimensional control parameter. Suppose
              at <M>{String.raw`\kappa = 1`}</M>,{" "}
              <M>{String.raw`J^*(\kappa)`}</M> has a single eigenvalue
              touching the unit circle (the generic codimension-1 case).
              Then the local dynamics near{" "}
              <M>{String.raw`(\theta^*, \kappa = 1)`}</M> undergo one
              of three generic codimension-1 bifurcations — saddle-node
              (a), period-doubling (c), or Neimark–Sacker (d) below.
              The pitchfork (b) is not generic in a one-parameter
              family; it arises in place of the saddle-node when{" "}
              <M>{String.raw`\Phi`}</M> commutes with a{" "}
              <M>{String.raw`\mathbb{Z}_2`}</M> symmetry, which the
              framework&apos;s symmetric cohorts can supply:
            </em>
          </p>

          <p className="mb-sm">
            <strong>(a) Saddle-node</strong> — <em>eigenvalue at{" "}
            <M>{String.raw`+1`}</M>, quadratic non-degeneracy. Below
            threshold: two fixed points (one stable, one unstable). At
            threshold: collision. Above threshold: no fixed points;
            iteration diverges or jumps to distant attractor.</em>{" "}
            Normal form:
          </p>
          <MBlock>{String.raw`\xi_{n+1} = \xi_n + \mu + a \xi_n^2, \quad \mu = \kappa - \kappa^*.`}</MBlock>
          <Reads>
            The simplest map that can lose a fixed point. Below
            threshold (<M>{String.raw`\mu < 0`}</M>) two equilibria sit
            close together; at <M>{String.raw`\mu = 0`}</M> they merge;
            above it, none remain and the iteration shoots off. The
            platform reading: stability vanishes with no nearby regime
            to fall back to — a hard crisis, an algorithm rebuilt from
            scratch.
          </Reads>

          <p className="mb-sm">
            <strong>(b) Pitchfork</strong> — <em>eigenvalue at{" "}
            <M>{String.raw`+1`}</M>, cubic non-degeneracy with symmetry.
            Below threshold: one stable fixed point. Above: stable
            fixed point becomes unstable, two symmetric stable fixed
            points appear.</em> Normal form:
          </p>
          <MBlock>{String.raw`\xi_{n+1} = (1+\mu)\xi_n + b \xi_n^3.`}</MBlock>
          <Reads>
            One stable state splits into two. Past threshold the
            central equilibrium turns unstable and two symmetric
            stable ones open up on either side. The platform reading:
            a single regime bifurcating into two polarized stable
            regimes the system settles into one or the other of.
          </Reads>

          <p className="mb-sm">
            <strong>(c) Period-doubling (flip)</strong> — <em>eigenvalue
            at <M>{String.raw`-1`}</M>. Below threshold: one stable
            fixed point. Above: stable fixed point becomes unstable,
            stable 2-cycle appears. With increasing parameter: period-2
            → period-4 → … → chaotic dynamics via Feigenbaum cascade.</em>{" "}
            Normal form:
          </p>
          <MBlock>{String.raw`\xi_{n+1} = -(1+\mu)\xi_n - c \xi_n^3.`}</MBlock>
          <Reads>
            The negative coefficient flips the iterate&apos;s sign each
            step, so past threshold the system stops settling on a
            fixed point and starts alternating between two values — a
            2-cycle. Push further and the 2-cycle doubles to 4, then
            8, the Feigenbaum road to chaos. The platform reading:
            engagement that first oscillates, then turns erratic.
          </Reads>

          <p className="mb-sm">
            <strong>(d) Neimark–Sacker</strong> — <em>complex eigenvalue
            pair <M>{String.raw`e^{\pm i\omega}`}</M> on unit circle.
            Below threshold: one stable fixed point. Above: stable
            invariant circle appears, with amplitude{" "}
            <M>{String.raw`\sqrt{\kappa - 1}`}</M> in super-critical
            case.</em> Normal form (in complex coordinates):
          </p>
          <MBlock>{String.raw`\zeta_{n+1} = (1+\mu) e^{i\omega} \zeta_n + d|\zeta_n|^2 \zeta_n.`}</MBlock>
          <Reads>
            The complex multiplier{" "}
            <M>{String.raw`e^{i\omega}`}</M> rotates the iterate as it
            grows, so past threshold the system spirals out to a
            standing loop — an invariant circle of radius{" "}
            <M>{String.raw`\sqrt{\mu}`}</M> — rather than a point. The
            platform reading: a sustained oscillation, the recurring
            viral rhythm or rage-bait cycle that neither settles nor
            blows up.
          </Reads>

          <p className="mb-sm">
            <em>Which bifurcation occurs depends on the specific
            structure of <M>{String.raw`\Phi`}</M> near{" "}
            <M>{String.raw`(\theta^*, \kappa = 1)`}</M>.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Proof
          </p>
          <p className="mb-sm text-ink-70 text-sm">
            Each is the standard codimension-1 bifurcation analysis for
            discrete-time dynamical systems applied to the performative
            operator <M>{String.raw`\Phi`}</M> with{" "}
            <M>{String.raw`\kappa`}</M> as control parameter (Wiggins
            2003 Ch. 1; Kuznetsov 2004 Ch. 4). Saddle-node: fixed points{" "}
            <M>{String.raw`\pm\sqrt{-\mu/a}`}</M> collide at threshold.
            Pitchfork: symmetry-breaking under a{" "}
            <M>{String.raw`\mathbb{Z}_2`}</M>-equivariance.
            Period-doubling: <M>{String.raw`\Phi^2`}</M> has a
            pitchfork-like bifurcation giving the period-2 attractor;
            Feigenbaum cascade follows. Neimark–Sacker: invariant
            circle of radius{" "}
            <M>{String.raw`\sqrt{-\mu/\mathrm{Re}(d)}`}</M> in
            super-critical case (Hassard–Kazarinoff–Wan 1981). In a
            generic one-parameter family the eigenvalue crosses the
            unit circle transversally at a single point, and the type
            is fixed by where it crosses — at{" "}
            <M>{String.raw`+1`}</M> (saddle-node),{" "}
            <M>{String.raw`-1`}</M> (period-doubling), or a complex
            pair (Neimark–Sacker). All three are generic; the
            pitchfork is the lone exception, requiring the{" "}
            <M>{String.raw`\mathbb{Z}_2`}</M>-equivariance.
          </p>
          <ProofEnd />
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
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              Theorem 9 (causal sensitivity)
            </Link>{" "}
            — what happens to the amplification factor as contractivity
            approaches its boundary
          </li>
          <li>
            Required:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-0"
              className="text-oxblood hover:underline"
            >
              §0 axiom (R1) contractivity hypothesis
            </Link>
          </li>
          <li>
            Empirical hooks — apparatus §12 (calibration), Theorem 9
            sensitivity measurements applied near the boundary
          </li>
        </ul>
        <p className="text-sm text-ink-50 italic mt-sm">
          The schematic&apos;s contractivity-boundary annotation links
          here. The full table of empirical signatures sits in the
          middle layer above; the four normal-form equations sit in
          the formal layer.
        </p>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
