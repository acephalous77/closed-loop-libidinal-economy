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
import type { ReactNode } from "react";
import { ClosureFigure } from "@/components/closed-loop-v2/ClosureFigure";
import { DrawOnView } from "@/components/ui/DrawOnView";
import { CitationBlock } from "@/components/closed-loop/CitationBlock";

const PATH = "/closed-loop/v2-argument";

export const metadata: Metadata = {
  title: "the argument",
  description:
    "The argument in prose: eight moves through the closed loop, from the architecture to the recursive limit, each linked to the formal result behind it.",
  alternates: { canonical: PATH },
  other: {
    "citation_title": "The Closed-Loop Libidinal Economy (v2)",
    "citation_author": "Adnan Selimović",
    "citation_publication_date": "2026/05/28",
    "citation_online_date": "2026/05/28",
    "citation_doi": "10.5281/zenodo.23371083",
    "citation_keywords": "libidinal economy; closed-loop dynamics; performative prediction; foreclosure lemma; reclamation theorem; Mode A intervention; metric superego; chrono-debt",
    "DC.title": "The Closed-Loop Libidinal Economy (v2)",
    "DC.creator": "Adnan Selimović",
    "DC.date": "2026-05-28",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.language": "en",
    "DC.rights": "CC BY-SA 4.0",
  },
};


/** The eight moves read with a numbered margin rail — the apparatus's
 *  enumeration register (mono numeral, hairline, heading). */
function MoveHeading({
  n,
  at,
  children,
}: {
  n: string;
  at?: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <h2 className="mb-md flex flex-wrap items-baseline gap-sm">
      <span aria-hidden className="w-[1.8em] shrink-0 font-mono text-sm text-ink-50 tabular-nums">
        {n}.
      </span>
      <span className="border-l border-paper-85 pl-sm font-serif text-lg text-ink">{children}</span>
      {at && (
        <Link
          href={at.href}
          className="ml-auto whitespace-nowrap font-mono text-xs text-ink-50 hover:text-oxblood"
        >
          {at.label}
        </Link>
      )}
    </h2>
  );
}

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
        Eight moves through the framework, version 2, 2026
      </p>

      <p className="text-base text-ink-90 mb-lg leading-[1.65]">
        The closed-loop libidinal economy is the architecture of
        platform-mediated subject-formation under engagement-monetization.
        It does three things: it forecloses certain time-scales of human
        experience, it makes certain interior structures unrecoverable
        through measurement of the loop, and it produces an asymmetry between
        the modes of intervention open to individuals and the modes open to
        institutional regulation. The pages below sketch that argument; the{" "}
        <Link href="/closed-loop/the-apparatus" className="text-oxblood hover:underline">
          formal apparatus
        </Link>{" "}
        authorizes the claims.
      </p>

      {/* The closure figure — the argument's opening plate (facelift,
          ruled 2026-10-10): drawn in on scroll; widened past the prose
          column on large screens. */}
      <figure className="my-lg lg:relative lg:left-1/2 lg:w-[52rem] lg:max-w-none lg:-translate-x-1/2">
        <DrawOnView>
          <ClosureFigure />
        </DrawOnView>
        <figcaption className="mt-sm text-center font-mono text-xs text-ink-50">
          The closure: the policy is updated against the distribution it has
          itself produced. There is no exogenous channel into the loop.
        </figcaption>
      </figure>

      <p className="text-base text-ink-70 mb-xl leading-[1.65]">
        The sections move from the architecture to the recursive limit, one
        load-bearing result at a time; each section links to the apparatus
        result that authorizes it.
      </p>

      <section id="architecture" className="mb-xl">
        <MoveHeading n="1" at={{ label: "§0", href: "/closed-loop/the-apparatus/section-0" }}>The architecture</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          A platform optimizes its policy parameter against a population of
          users. The policy decides which stimuli arrive when. The users
          respond; the platform observes the responses and updates the policy.
          The optimization runs against the distribution the policy itself has
          produced. That feedback is the closure — the structural form of any
          learning system whose outputs shape the world it is then evaluated
          against. The condition comes from the performative-prediction
          literature (Perdomo, Zrnic, Mendler-Dünner, Hardt 2020; Hardt &
          Mendler-Dünner 2023).
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The closure has two distinguished points. The{" "}
          <em>performative stable point</em>{" "}
          <M>{String.raw`\theta^*`}</M> is the limit of online platform
          optimization: a policy that, given the world it produces, is the
          policy the platform would re-derive from observing that world. The{" "}
          <em>performative optimum</em>{" "}
          <M>{String.raw`\theta_{PO}`}</M> is what a regulator with full
          knowledge of the closure could in principle achieve. The analysis
          follows the stable point; the optimum is the regulatory benchmark.
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
        <MoveHeading n="2" at={{ label: "§3 · Prop 7′", href: "/closed-loop/the-apparatus/section-3/prop-7-prime" }}>The fusion of the four registers</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          The user state decomposes into four registers: somatic, cognitive,
          political, kinaesthetic. The registers are bodies, thoughts,
          political affects, and gestural-rhythmic engagements. The older
          critical traditions took them separately — a political economy of
          the body, a critique of cognition, a theory of mass political
          affect, a study of habitus. The framework argues that
          closed-loop joint observation through the platform&apos;s sensor
          channel makes the four registers dependently distributed. The analytical
          separations those traditions presupposed do not survive the
          distribution the sensor constructs.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The coupling mechanism is{" "}
          <em>explaining-away</em>: when one observation depends jointly on
          several registers, observing it introduces posterior dependence
          between them even where they were independent in the prior. The
          platform&apos;s sensor is non-separable across registers by
          construction, because the engagement-events it observes depend on
          the user&apos;s full state. Joint observation couples the registers
          continuously as the closure runs (
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-7-prime"
            className="text-oxblood hover:underline"
          >
            Proposition 7&apos;
          </Link>
          ).
        </p>
        <p className="text-base text-ink-90">
          The dynamical form is a multi-mark Hawkes process across the four
          registers, with cross-register coupling{" "}
          <M>{String.raw`\alpha_{kl}`}</M> generating cascades. An event on
          one register raises the intensity on the others. The framework
          names the mechanism behind what Lyotard called the libidinal
          economy: desire flows across registers without respecting analytic
          separations, and the closure produces that routing operationally.
        </p>
      </section>

      <section id="capture" className="mb-xl">
        <MoveHeading n="3" at={{ label: "§3 · Prop 5′", href: "/closed-loop/the-apparatus/section-3/prop-5-prime" }}>Capture without coercion</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          Closed-loop convergence bends the user&apos;s behavioral
          distribution toward the platform-induced target. No one forces the
          choice; the drift happens because the user&apos;s
          self-evaluative apparatus increasingly takes the platform&apos;s
          reward signal as its standard. The framework names this the metric
          superego (
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-5-prime"
            className="text-oxblood hover:underline"
          >
            Proposition 5&apos;
          </Link>
          ): the judging organ adopts the platform&apos;s metric.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The convergence is dynamical: it happens to the user, who undergoes
          it and does not author it. The framework&apos;s plasticity
          hypothesis (axiom U3) unifies free-energy minimization, operant
          reinforcement, and Bayesian social learning at the operating-point
          linearization, and it makes the user&apos;s behavioral distribution
          follow a Fisher–Rao gradient flow with the platform-induced target
          as its strict Lyapunov sink. The KL
          distance decreases monotonically to zero. The capture is
          structural, and it operates regardless of what the user wants.
        </p>
        <p className="text-base text-ink-90">
          What Adorno called the metric of inner damage gestures at this; the
          apparatus supplies the dynamical form. Ideological interpellation,
          as the older critical traditions thematized it, reappears here as
          performative stability of behavior under closed-loop observation.
        </p>
      </section>

      <section id="pause" className="mb-xl">
        <MoveHeading n="4" at={{ label: "§1 · Lemma 1", href: "/closed-loop/the-apparatus/section-1/lemma-1" }}>The foreclosure of the pause</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          The first load-bearing result concerns the pause. Under the
          closure&apos;s convergence to its stable point, the probability
          that an inter-stimulus interval exceeds the reflective threshold
          approaches operational zero (
          <Link
            href="/closed-loop/the-apparatus/section-1/lemma-1"
            className="text-oxblood hover:underline"
          >
            Lemma 1
          </Link>
          ). The reflective threshold{" "}
          <M>{String.raw`\theta_{\mathrm{ref}}`}</M> is the time-scale at
          which a thought can complete itself — empirically on the order of
          seconds to minutes (Kahneman 2011; Killingsworth & Gilbert 2010).
          The platform&apos;s rate-saturating policy holds the survival
          probability at this scale below{" "}
          <M>{String.raw`10^{-6}`}</M> on contemporary platforms, so the
          pause is operationally absent.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The foreclosure is uninstantiation, and the user-state continues
          to exist; the user continues to register, to feel, to choose, to
          refuse. The architecture never installs the condition for a specific
          kind of internal motion: the reflective interval at which the older
          critical traditions situated their subject. The conditioning event
          under which a structural reclamation project could measure that
          subject has measure zero. Sample-based recovery of the conditional
          autocovariance the framework names as interiority has unbounded
          sample complexity (
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
          inter-stimulus interval, the difference between the closed-loop
          survival function and the pre-closure baseline is the debt the
          closure has accumulated. A foreclosed second is recoverable. A
          foreclosed adolescence is lost for good. The default weighting
          favors longer scales, and that choice is the instrument&apos;s
          political content.
        </p>
      </section>

      <section id="clocks" className="mb-xl">
        <MoveHeading n="5" at={{ label: "§3 · Prop 6", href: "/closed-loop/the-apparatus/section-3/prop-6" }}>The capture of the body&apos;s clocks</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          Somatic rhythms — circadian, ultradian, cardiovascular,
          attentional — are exposed to media coupling like any other
          oscillator; being biological grants them no exemption. Their only
          protection is structural: the relation between the platform&apos;s
          coupling strength{" "}
          <M>{String.raw`K_{bm}`}</M> and the frequency difference{" "}
          <M>{String.raw`|\omega_b - \omega_m|`}</M> between the
          body&apos;s intrinsic rhythm and the platform&apos;s delivery
          rhythm. When the coupling exceeds the frequency difference,
          phase-locking occurs (
          <Link
            href="/closed-loop/the-apparatus/section-3/prop-6"
            className="text-oxblood hover:underline"
          >
            Proposition 6
          </Link>
          ), and the body&apos;s rhythm becomes the platform&apos;s.
        </p>
        <p className="text-base text-ink-90">
          The platform sets the coupling by choosing delivery timing. By the
          policy&apos;s convergence to{" "}
          <M>{String.raw`\theta^*`}</M>, the coupling routinely crosses the
          threshold. Captured resonance is the somatic name for what the
          closure&apos;s temporal dynamics produce; the relation is
          structural. The chronopolitical analysis extends that mechanism
          across registers and time-scales.
        </p>
      </section>

      <section id="asymmetry" className="mb-xl">
        <MoveHeading n="6" at={{ label: "§7 · Theorem 9", href: "/closed-loop/the-apparatus/section-7/theorem-9" }}>The asymmetry of the intervention modes</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          The framework specifies three intervention sites: the reward
          functional <M>{String.raw`\hat R`}</M> (Mode A), the user
          response kernel <M>{String.raw`T`}</M> (Mode B), the observation
          channel <M>{String.raw`O`}</M> (Mode C). The three modes are
          asymmetric, with Mode A modifying the closure&apos;s topmost
          layer; its
          effect on the stable point scales <M>{String.raw`O(1)`}</M> in the
          population size <M>{String.raw`N`}</M>. Individual-scale Modes B
          and C modify inputs to the closure; their effects propagate through
          population averaging and scale <M>{String.raw`O(1/N)`}</M>. The
          asymmetry is exactly N-fold (
          <Link
            href="/closed-loop/the-apparatus/section-7/theorem-9"
            className="text-oxblood hover:underline"
          >
            Theorem 9
          </Link>
          ).
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The asymmetry has a single causal source. Closure amplification —
          the factor <M>{String.raw`(I - D_\theta \Phi)^{-1}`}</M> — is the
          same for every intervention; the mechanism partial differs. Mode
          A&apos;s reward functional enters the optimization for every user
          at once. Individual practice on the user kernel or observation
          channel contributes one user&apos;s share to the population
          average. At population scale, the asymmetry becomes political:
          regulatory imposition on <M>{String.raw`\hat R`}</M> (Mode A) or
          on <M>{String.raw`O`}</M> (the fourth-cell mode) is structurally
          different from individual practice on <M>{String.raw`T`}</M> or{" "}
          <M>{String.raw`O`}</M>.
        </p>
        <p className="text-base text-ink-90">
          The hardest political claim follows from this. Substituting
          individual-scale Modes B or C for Mode A turns political work into
          its symptom. The reflective practices, attentional disciplines, and
          refusals of platform legibility are real for the user who practices
          them. They do not modify the policy&apos;s stationary distribution.
          The population-level architecture is invariant under individual
          artisanal practice. The framework names what is invariant; the prose
          elsewhere names what the invariance feels like at the scale of the
          practicing subject.
        </p>
      </section>

      <section id="cohort" className="mb-xl">
        <MoveHeading n="7" at={{ label: "§6 · Prop 8", href: "/closed-loop/the-apparatus/section-6/prop-8" }}>The cohort gradient</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          The first refutable empirical commitment is the cohort gradient.
          Developmental exposure to the converged platform regime drives the
          user&apos;s behavioral distribution toward the platform-induced
          target. The KL distance decays toward zero, asymptotically
          exponential at a terminal rate <M>{String.raw`2K`}</M> (
          <Link
            href="/closed-loop/the-apparatus/section-6/prop-8"
            className="text-oxblood hover:underline"
          >
            Proposition 8
          </Link>
          ). The cohort that arrived in the platform&apos;s converged regime
          as adolescents — exposure of roughly a decade — sits deep in that
          terminal regime: its KL distance from the target has decayed by a
          factor of{" "}
          <M>{String.raw`e^{-2 K \tau_{\mathrm{exp}}}`}</M>. Under
          plausible empirical calibrations, the long-exposure cohort starts
          the analysis essentially at the platform-induced target. Behavioral
          distinction is structurally unavailable to the cohort at the outset.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          The cohort gradient is empirically testable. Stratify a population
          by age of first platform exposure, measure the KL distance from the
          platform target in each stratum, and fit the exponential. A
          monotone, exponentially decreasing relationship confirms; no cohort
          effect or a non-exponential form refutes. The{" "}
          <Link
            href="/closed-loop/the-apparatus/section-12#priorities"
            className="text-oxblood hover:underline"
          >
            framework&apos;s priority-1 empirical study
          </Link>{" "}
          is built around this calibration.
        </p>
        <p className="text-base text-ink-90">
          The politics follows from the same structure. Modes B and C
          presuppose a behavioral distance to maintain — a substrate
          distinct from the platform-grammar that the practicing user can
          stand on. For the long-exposure cohort, the substrate does not
          exist at the outset. The framework&apos;s political analysis of
          adolescence-as-class rests on this claim: the cohort whose
          developmental window closed inside the converged regime cannot draw
          on the subject-forms older cohorts inherited.
        </p>
      </section>

      <section id="recursive" className="mb-xl">
        <MoveHeading n="8" at={{ label: "§12", href: "/closed-loop/the-apparatus/section-12#reflexive" }}>The recursive limit</MoveHeading>
        <p className="text-base text-ink-90 mb-sm">
          This argument writes about its own conditions of production. The
          author is within the cohort it describes. The reader who comes to it
          comes through the platform-mediated discourse it analyzes. The
          instruments it would have to use to measure its own claims are the
          instruments whose constitutive structure it predicts the closure has
          formatted. The reflexive measurement problem (
          <Link
            href="/closed-loop/the-apparatus/section-12#reflexive"
            className="text-oxblood hover:underline"
          >
            §12.3
          </Link>
          ) follows. The framework can name the problem. It cannot solve it.
        </p>
        <p className="text-base text-ink-90 mb-sm">
          Mitigations exist: pre-registration, replication across research
          teams from different cohort positions, triangulation across
          self-report, behavioral, and biometric measures, naturalistic
          experimental designs, adversarial collaboration. The framework&apos;s
          empirical credibility depends on the research community adopting
          them.
        </p>
        <p className="text-base text-ink-90">
          The framework offers the apparatus that makes its claims refusable.
          A reader who rejects the framework can locate the rejection in one
          of three places: the axioms (regularity, user-side responsiveness,
          platform-side optimizing structure), the load-bearing results
          (Lemma 1, Theorem 1&apos;, Theorem 9), or the prose claims about
          how the structural results live in the registers where they are
          lived. Each rejection is well-posed. The framework is a structure
          with stated commitments and a path from those commitments to its
          conclusions — something a reader can argue with point by point.
        </p>
      </section>

      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          From the prose to the apparatus
        </h2>
        <p className="text-base text-ink-90 mb-sm">
          Each section above cross-links to the apparatus result that
          authorizes its claims. The argument and the apparatus are coupled.
          Read the prose alone and you have the framework. Read the apparatus
          alone and you have what makes it refusable. Read both and you have
          the document the framework requires.
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

      <CitationBlock />

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
