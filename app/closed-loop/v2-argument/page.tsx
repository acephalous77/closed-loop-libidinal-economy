/**
 * The curated argument -- v2 /closed-loop/v2-argument.
 *
 * The prose entry point to the framework. ~3-4k words organized
 * around eight load-bearing moves. Each move cross-links to the
 * apparatus section that authorizes it. Lighter than the manuscript
 * prose; meant as the surface a reader arrives at first, before
 * reading the apparatus.
 *
 * Lives at /closed-loop/v2-argument. The v1 /closed-loop/the-argument
 * (which is itself a multi-piece prose surface) is preserved intact.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { M } from "@/components/ui/Math";

const PATH = "/closed-loop/v2-argument";

export const metadata: Metadata = {
  title: "the argument — closed-loop",
  description:
    "The prose entry point to the closed-loop libidinal economy framework. Eight load-bearing moves cross-linking to the formal apparatus.",
  alternates: { canonical: PATH },
};

export default function CuratedArgumentPage() {
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
        <span className="text-ink-90">the argument</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        The argument
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        Eight moves · the framework in prose
      </p>

      <p className="text-base text-ink-90 mb-lg leading-snug">
        The closed-loop libidinal economy is the architecture of
        platform-mediated subject-formation under engagement-
        monetization. The framework specifies what this architecture
        does: it forecloses certain time-scales of human experience,
        renders certain interior structures empirically unrecoverable
        through measurement of the loop, and produces an asymmetry
        between the modes of intervention available to individuals
        and the modes available to institutional regulation. The
        prose below sketches the argument; the{" "}
        <Link href="/closed-loop/the-apparatus" className="text-oxblood hover:underline">
          formal apparatus
        </Link>{" "}
        authorizes the claims.
      </p>

      <nav aria-label="In-page TOC" className="text-base mb-xl pl-sm border-l-2 border-paper-85">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">Eight moves</p>
        <ol className="space-y-xs text-ink-90">
          <li><Link href="#architecture" className="hover:text-oxblood">1. The architecture</Link></li>
          <li><Link href="#registers" className="hover:text-oxblood">2. The four registers, fused</Link></li>
          <li><Link href="#capture" className="hover:text-oxblood">3. Capture without coercion</Link></li>
          <li><Link href="#pause" className="hover:text-oxblood">4. The pause foreclosed</Link></li>
          <li><Link href="#clocks" className="hover:text-oxblood">5. The body&apos;s clocks captured</Link></li>
          <li><Link href="#asymmetry" className="hover:text-oxblood">6. The asymmetry of the intervention modes</Link></li>
          <li><Link href="#cohort" className="hover:text-oxblood">7. The cohort gradient</Link></li>
          <li><Link href="#recursive" className="hover:text-oxblood">8. The recursive limit</Link></li>
        </ol>
      </nav>

      <section id="architecture" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">1. The architecture</h2>
        <p className="text-base text-ink-90 mb-sm">
          A platform optimizes its policy parameter against a
          population of users. The policy determines which stimuli
          arrive when. The users respond. The platform observes the
          responses and updates the policy. The optimization runs
          against the distribution the policy itself has produced.
          This is the closure: the structural form of any learning
          system whose outputs shape the world it is then evaluated
          against. The framework borrows the condition from the
          performative-prediction literature (Perdomo, Zrnic,
          Mendler-Dünner, Hardt 2020; Hardt & Mendler-Dünner 2023).
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The closure has two distinguished points. The{" "}
          <em>performative stable point</em>{" "}
          <M>{String.raw`\theta^*`}</M> is what online platform
          optimization converges to: a policy that, given the world
          it produces, is the policy the platform would re-derive
          from observing that world. The{" "}
          <em>performative optimum</em>{" "}
          <M>{String.raw`\theta_{PO}`}</M> is what a regulator with
          full knowledge of the closure could in principle achieve.
          The framework&apos;s substantive analysis is about the
          stable point; the optimum is the regulatory benchmark.
        </p>
        <p className="text-base text-ink-90">
          <Link
            href="/closed-loop/the-architecture"
            className="text-oxblood hover:underline"
          >
            The schematic
          </Link>{" "}
          renders the architecture as a diagram. The{" "}
          <Link
            href="/closed-loop/the-apparatus/section-0"
            className="text-oxblood hover:underline"
          >
            §0 spine
          </Link>{" "}
          gives the formal setup, the closure as fixed point, and
          the framework&apos;s three groups of axioms.
        </p>
      </section>

      <section id="registers" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">2. The four registers, fused</h2>
        <p className="text-base text-ink-90 mb-sm">
          The user state decomposes into four registers — somatic,
          cognitive, political, kinaesthetic. Bodies, thoughts,
          political affects, gestural and rhythmic engagements. The
          older critical traditions analyzed these separately: a
          political economy of the body, a critique of cognition, a
          theory of mass political affect, a study of habitus. The
          framework&apos;s claim is that under closed-loop joint
          observation through the platform&apos;s sensor channel,
          the four registers become dependently distributed. The
          analytic separations they presupposed no longer hold at
          the level of the user-state distribution the platform&apos;s
          filter constructs.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The coupling mechanism is{" "}
          <em>explaining-away</em>: when a single observation depends
          jointly on multiple registers, observing it introduces
          posterior dependence between them even if they were
          independent in the prior. The platform&apos;s sensor is
          non-separable across registers by construction — it
          observes engagement-events that depend on the user&apos;s
          full state. Joint observation couples the registers,
          continuously, as the closure runs (
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-7-prime"
            className="text-oxblood hover:underline"
          >
            Proposition 7&apos;
          </Link>
          ).
        </p>
        <p className="text-base text-ink-90">
          The dynamical form is a multi-mark Hawkes process across
          the four registers, with cross-register coupling{" "}
          <M>{String.raw`\alpha_{kl}`}</M> generating cascades. An
          event on one register raises the intensity on others. The
          framework names what Lyotard called the libidinal economy:
          desire flowing across registers without respecting
          analytic separations. The closure produces this routing
          operationally.
        </p>
      </section>

      <section id="capture" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">3. Capture without coercion</h2>
        <p className="text-base text-ink-90 mb-sm">
          Under closed-loop convergence, the user&apos;s behavioral
          distribution drifts toward the platform-induced target.
          The drift has nothing to do with forced choices; it happens
          because the user&apos;s self-evaluative apparatus increasingly
          takes the platform&apos;s reward signal as its standard. The
          framework names this the metric superego (
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-5-prime"
            className="text-oxblood hover:underline"
          >
            Proposition 5&apos;
          </Link>
          ): the user&apos;s judging organ adopts the platform&apos;s
          metric.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The convergence is dynamical — it happens to the user, who
          undergoes it and does not author it. Under the
          framework&apos;s plasticity hypothesis (axiom U3) — which
          unifies free-energy minimization, operant reinforcement,
          and Bayesian social learning at the operating-point
          linearization — the user&apos;s behavioral distribution
          follows a Fisher–Rao gradient flow with the platform-
          induced target as its strict Lyapunov sink. The KL
          distance decreases monotonically to zero. The capture is
          structural; it operates regardless of what the user wants.
        </p>
        <p className="text-base text-ink-90">
          What Adorno called the metric of inner damage gestures at
          this; the apparatus supplies the dynamical form. What the
          older critical traditions thematized as ideological
          interpellation is here re-described as performative
          stability of behavior under closed-loop observation.
        </p>
      </section>

      <section id="pause" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">4. The pause foreclosed</h2>
        <p className="text-base text-ink-90 mb-sm">
          The framework&apos;s first load-bearing result. Under the
          closure&apos;s convergence to its stable point, the
          probability that an inter-stimulus interval exceeds the
          reflective threshold approaches operational zero (
          <Link
            href="/closed-loop/the-apparatus/section-1/lemma-1"
            className="text-oxblood hover:underline"
          >
            Lemma 1
          </Link>
          ). The reflective threshold{" "}
          <M>{String.raw`\theta_{\mathrm{ref}}`}</M> is the time-
          scale at which a thought can complete itself — empirically
          on the order of seconds to minutes (Kahneman 2011;
          Killingsworth & Gilbert 2010). Under the platform&apos;s
          rate-saturating policy, the survival probability at this
          scale is bounded above by{" "}
          <M>{String.raw`10^{-6}`}</M> on contemporary platforms.
          The pause is operationally absent.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The foreclosure is uninstantiation. The user-state
          continues to exist; the user continues to register, to
          feel, to choose, to refuse. The architectural condition for a specific kind of internal motion never gets installed: the reflective interval
          at which the older critical traditions situated their
          subject. The conditioning event under which a
          structural reclamation project could measure that subject
          has measure zero. Sample-based recovery of the conditional
          autocovariance the framework names as interiority has
          unbounded sample complexity (
          <Link
            href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
            className="text-oxblood hover:underline"
          >
            Theorem 1&apos;
          </Link>
          ).
        </p>
        <p className="text-base text-ink-90">
          The chrono-debt spectrum (
          <Link
            href="/closed-loop/the-apparatus/section-1/1.4-chrono-debt"
            className="text-oxblood hover:underline"
          >
            Definition 1.1
          </Link>
          ) measures the foreclosure across scales. At each scale of
          inter-stimulus interval, the difference between the closed-
          loop survival function and the pre-closure baseline is the
          debt the closure has accumulated. A foreclosed second is
          recoverable. A foreclosed adolescence is lost for good.
          The weighting that prioritizes longer scales is the
          framework&apos;s default — and the political content of
          the instrument.
        </p>
      </section>

      <section id="clocks" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">5. The body&apos;s clocks captured</h2>
        <p className="text-base text-ink-90 mb-sm">
          Somatic rhythms — circadian, ultradian, cardiovascular,
          attentional — are exposed to media coupling like any other
          oscillator; being biological grants them no exemption. Their
          only protection is structural: the
          relation between the platform&apos;s coupling strength{" "}
          <M>{String.raw`K_{bm}`}</M> and the frequency difference{" "}
          <M>{String.raw`|\omega_b - \omega_m|`}</M> between the
          body&apos;s intrinsic rhythm and the platform&apos;s
          delivery rhythm. When the coupling exceeds the frequency
          difference, phase-locking occurs (
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-6"
            className="text-oxblood hover:underline"
          >
            Proposition 6
          </Link>
          ). The body&apos;s rhythm becomes the platform&apos;s.
        </p>
        <p className="text-base text-ink-90">
          The platform sets the coupling by choosing delivery
          timing. By the policy&apos;s convergence to{" "}
          <M>{String.raw`\theta^*`}</M>, the coupling routinely
          crosses the threshold. Captured resonance is what the
          closure&apos;s temporal dynamics produce in the somatic
          register — a structural relation. The
          chronopolitical analysis the framework licenses is built
          on this mechanism extended across registers and
          time-scales.
        </p>
      </section>

      <section id="asymmetry" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">6. The asymmetry of the intervention modes</h2>
        <p className="text-base text-ink-90 mb-sm">
          The framework specifies three intervention sites: the
          reward functional <M>{String.raw`\hat R`}</M> (Mode A),
          the user response kernel <M>{String.raw`T`}</M> (Mode B),
          the observation channel <M>{String.raw`O`}</M> (Mode C).
          The three modes are asymmetric. Mode A modifies the
          closure&apos;s topmost layer; its effect on the stable
          point scales <M>{String.raw`O(1)`}</M> in the population
          size <M>{String.raw`N`}</M>. Individual-scale Modes B and
          C modify inputs to the closure; their effects propagate
          through population averaging and scale{" "}
          <M>{String.raw`O(1/N)`}</M>. The asymmetry is exactly
          N-fold (
          <Link
            href="/closed-loop/the-apparatus/section-7/theorem-9"
            className="text-oxblood hover:underline"
          >
            Theorem 9
          </Link>
          ).
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The asymmetry has a single causal source. Closure
          amplification — the factor{" "}
          <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M> — is the
          same for every intervention; the mechanism partial differs. Mode A&apos;s reward functional enters
          the optimization for every user simultaneously. Individual
          practice on the user kernel or observation channel
          contributes one user&apos;s share to the population
          average. The political content of the asymmetry: at
          population scale, regulatory imposition on{" "}
          <M>{String.raw`\hat R`}</M> (Mode A) or on{" "}
          <M>{String.raw`O`}</M> (the fourth-cell mode) is
          structurally different from individual practice on{" "}
          <M>{String.raw`T`}</M> or <M>{String.raw`O`}</M>.
        </p>
        <p className="text-base text-ink-90">
          The framework&apos;s hardest political claim follows.
          Substituting individual-scale Modes B or C for Mode A is
          the analytical error that converts political work into
          its symptom. The reflective practices, attentional
          disciplines, refusals of platform legibility — these are
          real for the user who practices them. They do not modify
          the policy&apos;s stationary distribution. The
          population-level architecture is invariant under
          individual artisanal practice. The framework names what
          is invariant; the prose elsewhere names what the
          invariance feels like at the scale of the practicing
          subject.
        </p>
      </section>

      <section id="cohort" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">7. The cohort gradient</h2>
        <p className="text-base text-ink-90 mb-sm">
          The framework&apos;s first refutable empirical commitment.
          Developmental exposure to the converged platform regime
          drives the user&apos;s behavioral distribution toward the
          platform-induced target. The KL distance decays toward zero,
          asymptotically exponential at a terminal rate{" "}
          <M>{String.raw`2K`}</M> (
          <Link
            href="/closed-loop/the-apparatus/section-6/prop-8"
            className="text-oxblood hover:underline"
          >
            Proposition 8
          </Link>
          ). The cohort that arrived in the platform&apos;s converged
          regime as adolescents — exposure of roughly a decade — sits
          deep in that terminal regime: its KL distance from the
          target has decayed by a factor of{" "}
          <M>{String.raw`e^{-2 K \tau_{\mathrm{exp}}}`}</M>. Under
          plausible empirical calibrations, the long-exposure
          cohort starts the analysis essentially at the platform-
          induced target. Behavioral distinction is structurally
          unavailable to the cohort at the outset.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The cohort gradient is empirically testable. Stratify a
          population by age-of-first-platform-exposure, measure the
          KL distance from the platform target for each stratum,
          fit the exponential. A monotone, exponentially-decreasing
          relationship confirms; no cohort effect or a non-
          exponential form refutes. The{" "}
          <Link
            href="/closed-loop/the-apparatus/section-12#priorities"
            className="text-oxblood hover:underline"
          >
            framework&apos;s priority-1 empirical study
          </Link>{" "}
          is built around this calibration.
        </p>
        <p className="text-base text-ink-90">
          The political content. Mode B and Mode C presuppose a
          behavioral distance to maintain — a substrate distinct
          from the platform-grammar that the practicing user can
          stand on. For the long-exposure cohort, the substrate
          does not exist at the outset. The framework&apos;s
          political analysis of adolescence-as-class rests on this
          structural claim: the cohort whose developmental window
          closed inside the converged regime cannot draw on the
          subject-forms older cohorts inherited.
        </p>
      </section>

      <section id="recursive" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">8. The recursive limit</h2>
        <p className="text-base text-ink-90 mb-sm">
          The framework writes about its own conditions of
          production. The author is within the cohort the framework
          describes. The reader who comes to the framework comes
          through the platform-mediated discourse the framework
          analyzes. The instruments the framework would have to use
          to measure its own claims are the instruments whose
          constitutive structure the framework predicts the closure
          has formatted. This is the reflexive measurement problem
          (
          <Link
            href="/closed-loop/the-apparatus/section-12#reflexive"
            className="text-oxblood hover:underline"
          >
            §12.3
          </Link>
          ). The framework names the problem; the framework cannot
          solve it.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          Mitigations are available — pre-registration, replication
          across research teams from different cohort positions,
          triangulation across self-report and behavioral and
          biometric measures, naturalistic experimental designs,
          adversarial collaboration. The framework&apos;s empirical
          credibility depends on these mitigations being adopted by
          the research community.
        </p>
        <p className="text-base text-ink-90">
          The framework offers the apparatus that makes its claims refusable. A reader who rejects the framework can
          locate the rejection in one of three places: the axioms
          (regularity, user-side responsiveness, platform-side
          optimizing structure), the load-bearing results (Lemma 1,
          Theorem 1&apos;, Theorem 9), or the prose claims about how
          the structural results live in the registers where they
          are lived. Each rejection is well-posed. The framework is a
          structure with stated commitments and a path from those
          commitments to its conclusions — something a reader can
          argue with point by point.
        </p>
      </section>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          From the prose to the apparatus
        </h2>
        <p className="text-base text-ink-90 mb-sm">
          Each section above cross-links to the apparatus result
          that authorizes its claims. The argument and the apparatus
          are coupled. A reader who follows only the prose has
          read the framework. A reader who follows only the
          apparatus has read what makes the framework refusable. A
          reader who follows both has read the document the
          framework requires.
        </p>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            <Link
              href="/closed-loop/the-apparatus"
              className="text-oxblood hover:underline"
            >
              The apparatus
            </Link>{" "}
            — formal sections §0 through §12
          </li>
          <li>
            <Link
              href="/closed-loop/the-architecture"
              className="text-oxblood hover:underline"
            >
              The architecture
            </Link>{" "}
            — the closure as interactive schematic
          </li>
          <li>
            <Link
              href="/closed-loop/v2-dynamics"
              className="text-oxblood hover:underline"
            >
              The dynamics
            </Link>{" "}
            — twelve interactive plates against the apparatus results
          </li>
          <li>
            <Link
              href="/closed-loop/the-instruments"
              className="text-oxblood hover:underline"
            >
              The instruments
            </Link>{" "}
            — six measurable instruments, each with its calibration
            protocol
          </li>
          <li>
            <Link
              href="/closed-loop/glossary"
              className="text-oxblood hover:underline"
            >
              The glossary
            </Link>{" "}
            — the framework&apos;s defined terms
          </li>
          <li>
            <Link
              href="/closed-loop/the-colophon"
              className="text-oxblood hover:underline"
            >
              The colophon
            </Link>{" "}
            — what the site refuses, and why
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 curated argument. v1 the-argument at{" "}
        <Link href="/closed-loop/the-argument" className="text-oxblood hover:underline">
          /closed-loop/the-argument
        </Link>{" "}
        preserved intact.
      </footer>
    </main>
  );
}
