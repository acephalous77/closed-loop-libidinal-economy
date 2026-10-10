/**
 * Apparatus §3.5 — Somatic optimization (Hawkes instrument).
 *
 * The dynamical complement to Prop 7''s static explaining-away
 * argument. The engagement-event process modeled as a multi-mark
 * Hawkes with cross-register coupling. Definition 3.1 + the
 * stability condition.
 *
 * Content per the canonical apparatus manuscript, §3.5.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  DepthLayers,
  Caption,
  Middle,
  Formal,
  Reads,
} from "@/components/ui/DepthLayers";
import { MBlock, M } from "@/components/ui/Math";

const PATH = "/closed-loop/the-apparatus/section-3/3.5-hawkes";

export const metadata: Metadata = {
  title: "Somatic optimization (Hawkes instrument) — the apparatus — closed-loop",
  description:
    "The engagement-event process modeled as a multi-mark Hawkes process with cross-register coupling. The dynamical complement to libidinal routing's static explaining-away argument.",
  alternates: { canonical: PATH },
};

export default function HawkesPage() {
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
        <span className="text-ink-90">§3.5 · Hawkes</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        Somatic optimization — the Hawkes instrument
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Apparatus §3.5 · the dynamical complement to libidinal routing
      </p>

      <DepthLayers>
        <Caption>
          The engagement-event process at the user level is a
          multi-mark Hawkes process with cross-register coupling.
          Self-exciting events on each register, plus off-diagonal
          coupling{" "}
          <M>{String.raw`\alpha_{kl}`}</M> between registers, generates
          the dynamical libidinal routing whose static explaining-away
          form is{" "}
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-7-prime"
            className="text-oxblood hover:underline"
          >
            Proposition 7&apos;
          </Link>
          . The instrument is the framework&apos;s formal vocabulary
          for cascading cross-register intensities.
        </Caption>

        <Middle>
          <p className="mb-sm">
            The user&apos;s engagement-event process on each of the
            four registers <M>{String.raw`k \in \{S, C, P, K\}`}</M>{" "}
            is modeled as a counting process{" "}
            <M>{String.raw`\{N_t^k\}`}</M> with a Hawkes intensity
            that depends on the past of all four registers, its own
            among them. An event on the somatic register can trigger
            events on the cognitive, political, or kinaesthetic
            registers via the off-diagonal coupling weights{" "}
            <M>{String.raw`\alpha_{kl}`}</M>.
          </p>

          <p className="mb-sm">
            <em>Why Hawkes.</em> Engagement events are self-exciting:
            one platform interaction makes further interactions more
            likely on a decaying-kernel timescale. Multi-mark Hawkes
            (Hawkes 1971; Daley & Vere-Jones 2003) is the standard
            formalism for self-exciting point processes with
            cross-channel coupling. The Hawkes intensity{" "}
            <M>{String.raw`\lambda^k(t)`}</M> rises after recent
            events and decays back toward the baseline{" "}
            <M>{String.raw`\lambda_0^k`}</M> at the rate the kernel{" "}
            <M>{String.raw`\kappa`}</M> specifies.
          </p>

          <p className="mb-sm">
            The empirical case for Hawkes intensities in
            platform-engagement data is well-established. Engagement-
            event timestamps on YouTube, Twitter, Reddit, and TikTok
            have been fit to multi-mark Hawkes processes across the
            social-media-cascade literature (Zhao et al. 2015;
            Rizoiu et al. 2017; Mishra et al. 2018), with
            cross-channel coupling consistently positive and
            decaying-kernel timescales on the order of minutes to
            hours. The framework&apos;s contribution is to relate the
            coupling matrix to subject-formation: the off-diagonal
            cross-register coupling —{" "}
            <M>{String.raw`\alpha_{kl}`}</M> for{" "}
            <M>{String.raw`k \neq l`}</M> — is what dissolves the
            older analytic separations between body, cognition,
            polity, and habitus. That engagement is self-exciting in
            aggregate is the well-established part; the cross-register
            coupling is the new claim.
          </p>

          <p className="mb-sm">
            <em>Cross-register coupling as libidinal routing.</em>{" "}
            The off-diagonal{" "}
            <M>{String.raw`\alpha_{kl}`}</M> for{" "}
            <M>{String.raw`k \neq l`}</M> is what generates dynamical
            libidinal routing. An event on register{" "}
            <M>{String.raw`l`}</M> raises the intensity on register{" "}
            <M>{String.raw`k`}</M>. The four registers cross-excite
            each other through the coupling matrix{" "}
            <M>{String.raw`\alpha = (\alpha_{kl})`}</M>.{" "}
            Proposition 7&apos;&apos;s static explaining-away argument
            (the four registers become dependently distributed under
            joint observation) is the steady-state form of the
            dynamical coupling Hawkes formalizes here.
          </p>

          <p className="mb-sm">
            <em>The stability condition.</em> The Hawkes process is
            stable — admits a stationary distribution — if and only
            if the branching ratio is less than one:{" "}
            <M>{String.raw`\rho(\alpha) \cdot \int_0^\infty \kappa(s)\, ds < 1`}</M>,
            where <M>{String.raw`\rho(\alpha)`}</M> is the spectral
            radius of the coupling matrix. The networked extension
            (§8) replaces this with{" "}
            <M>{String.raw`\rho(W) \rho(\alpha) \int \kappa < 1`}</M>.
            Approach to the boundary{" "}
            <M>{String.raw`\rho(\alpha) \int \kappa \to 1^-`}</M> is
            where engagement cascades become arbitrarily large.
          </p>

          <p className="mb-sm">
            <em>What the instrument authorizes the prose to claim.</em>{" "}
            The framework&apos;s prose can name cross-register
            cascading events as Hawkes dynamics literally — no metaphor
            required. A burst of political engagement triggering
            somatic activation triggering cognitive rumination
            triggering more political engagement — this is{" "}
            <M>{String.raw`\alpha_{PS} > 0, \alpha_{SC} > 0, \alpha_{CP} > 0`}</M>{" "}
            on a Hawkes kernel. The platform&apos;s optimization
            (per Theorem 9) selects policies that increase off-
            diagonal couplings wherever cascades raise engagement.
          </p>

          <p className="mb-sm">
            The reader can{" "}
            <Link
              href="/closed-loop/v2-dynamics/somatic-hawkes"
              className="text-oxblood hover:underline"
            >
              operate the somatic-Hawkes plate
            </Link>{" "}
            to see event rasters across
            the four registers with the intensity functions overlaid
            — events on one track raising intensity on the others
            via the coupling matrix.
          </p>
        </Middle>

        <Formal label="Definition 3.1 (somatic Hawkes intensity)">
          <p className="mb-sm">
            <em>
              The engagement-event process{" "}
              <M>{String.raw`\{N_t^k\}`}</M> for register{" "}
              <M>{String.raw`k \in \{S, C, P, K\}`}</M> has intensity
            </em>
          </p>
          <MBlock>
            {String.raw`\lambda^k(t) = \lambda_0^k + \sum_l \alpha_{kl} \int_0^t \kappa(t-s)\, dN_s^l,`}
          </MBlock>
          <Reads>
            The rate of engagement-events on register{" "}
            <M>{String.raw`k`}</M> right now is a baseline rate plus a
            sum over <em>every</em> register&apos;s recent events, each
            past event adding a decaying bump (the kernel{" "}
            <M>{String.raw`\kappa`}</M>). The cross terms{" "}
            <M>{String.raw`\alpha_{kl}`}</M> with{" "}
            <M>{String.raw`k \neq l`}</M> are the routing: an event in
            the political register raises the firing rate in the
            somatic one. Events beget events, across registers — the
            dynamical form of the static coupling in Proposition 7&apos;.
          </Reads>
          <p className="mb-sm">
            <em>where{" "}
            <M>{String.raw`\lambda_0^k`}</M> is the baseline intensity,{" "}
            <M>{String.raw`\alpha_{kl}`}</M> is the cross-register
            coupling coefficient, and{" "}
            <M>{String.raw`\kappa : [0, \infty) \to [0, \infty)`}</M>{" "}
            is a temporal decay kernel with{" "}
            <M>{String.raw`\int \kappa < \infty`}</M>.</em>
          </p>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Stability condition
          </p>

          <p className="mb-sm text-ink-90">
            The Hawkes process is stable (admits a stationary
            distribution) if and only if the branching ratio{" "}
            <M>{String.raw`\rho(\alpha) \cdot \int \kappa < 1`}</M>,
            where <M>{String.raw`\rho(\alpha)`}</M> is the spectral
            radius of the coupling matrix{" "}
            <M>{String.raw`\alpha = (\alpha_{kl})`}</M>. The networked
            extension (§8) replaces this with
          </p>
          <MBlock>
            {String.raw`\rho(W) \rho(\alpha) \int \kappa < 1.`}
          </MBlock>
          <Reads>
            The cascade stays finite only while the product of three
            gains is below one: how strongly registers excite each
            other (<M>{String.raw`\rho(\alpha)`}</M>), how strongly
            users excite each other across the social graph (
            <M>{String.raw`\rho(W)`}</M>), and how long each event&apos;s
            influence lasts (<M>{String.raw`\int \kappa`}</M>). Push
            the product toward one and the expected cascade size blows
            up — the platform-wide viral event.
          </Reads>

          <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mt-md mb-sm">
            Remark
          </p>
          <p className="text-base text-ink-90">
            The off-diagonal{" "}
            <M>{String.raw`\alpha_{kl}`}</M> for{" "}
            <M>{String.raw`k \neq l`}</M> is what generates dynamical
            libidinal routing: cross-register cross-excitation
            produces the joint observability that makes the dividual
            condition (§3.1) hold. The Hawkes intensity is the
            dynamical complement to the static explaining-away
            argument of §3.4.
          </p>
        </Formal>
      </DepthLayers>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          Cross-references
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            Static complement:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-7-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 7&apos; (libidinal routing)
            </Link>{" "}
            — the steady-state form of the same cross-register coupling
          </li>
          <li>
            Dividual companion:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-3/prop-4-prime"
              className="text-oxblood hover:underline"
            >
              Proposition 4&apos; (dividual condition)
            </Link>{" "}
            — the joint observability the cross-register coupling
            produces
          </li>
          <li>
            Networked extension:{" "}
            <Link
              href="/closed-loop/the-apparatus/section-8"
              className="text-oxblood hover:underline"
            >
              §8 (engagement cascade theorem)
            </Link>{" "}
            — the same Hawkes framework with cross-user coupling{" "}
            <M>{String.raw`W`}</M>
          </li>
          <li>
            Dynamics plate:{" "}
            <Link
              href="/closed-loop/v2-dynamics/somatic-hawkes"
              className="text-oxblood hover:underline"
            >
              somatic Hawkes
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
