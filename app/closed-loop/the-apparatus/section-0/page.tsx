/**
 * Apparatus §0 — The spine.
 *
 * The foundational section. Every other apparatus page references its
 * structural objects (P1)–(P5) and its axioms (R1, R2, U1–U3, P-I/II/III).
 *
 * Single page with subsection-anchored content:
 *   §0.0  What this apparatus is
 *   §0.1  The performative setup (the five structural objects)
 *   §0.2  The closure as fixed point (Defs 0.1, 0.2)
 *   §0.3  Conditions, regrouped (three axiom groups)
 *   §0.4  Notation
 *
 * Content per publishing-pipeline manuscript §0.
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

const PATH = "/closed-loop/the-apparatus/section-0";

export const metadata: Metadata = {
  title: "§0 The spine — the apparatus — closed-loop",
  description:
    "The performative setup. The closure as fixed point of Φ. The three axiom groups: regularity, user-side responsiveness, platform-side optimizing structure. The notation.",
  alternates: { canonical: PATH },
};

export default function Section0Page() {
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
        <span className="text-ink-90">§0 · the spine</span>
      </nav>

      <h1 className="font-serif text-2xl text-ink mb-md leading-tight">
        §0 The spine
      </h1>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-lg">
        The performative setup · the closure · the axioms · the notation
      </p>

      {/* In-page TOC */}
      <nav aria-label="In-page TOC" className="text-base mb-xl pl-sm border-l-2 border-paper-85">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">On this page</p>
        <ol className="space-y-xs text-ink-90">
          <li><a href="#what-this-is" className="hover:text-oxblood">§0.0 What this apparatus is</a></li>
          <li><a href="#setup" className="hover:text-oxblood">§0.1 The performative setup</a></li>
          <li><a href="#closure" className="hover:text-oxblood">§0.2 The closure as fixed point</a></li>
          <li><a href="#axioms" className="hover:text-oxblood">§0.3 Conditions, regrouped (the three axiom groups)</a></li>
          <li><a href="#notation" className="hover:text-oxblood">§0.4 Notation</a></li>
        </ol>
      </nav>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §0.0 What this apparatus is                             */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="what-this-is" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§0.0 What this apparatus is</h2>
        <DepthLayers>
          <Caption>
            The framework studies subject-formation under platform-mediated
            closure: the architecture in which a learning system optimizes
            its outputs against a distribution those very outputs produce.
            The distinctive theoretical content is that this closure
            dissolves certain formal objects — interiority, reflection,
            autonomy — that prior critical traditions assumed available.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The mathematical apparatus must take the closure as its
              object. Stipulating the closure — declaring up front that
              the loop closes and proceeding from there — would
              short-circuit the analysis: the framework&apos;s claims
              about what the closure produces would become circular,
              with the conclusions smuggled into the premises. The
              closure has to arise out of the model&apos;s mechanics.
              What the framework needs is the smallest mathematical
              setting in which a predictor&apos;s outputs change the
              distribution it is then evaluated against, and in which
              the resulting fixed-point structure becomes a formal
              object the framework can reason about.
            </p>
            <p className="mb-sm">
              That setting is <strong>performative prediction</strong>{" "}
              (Perdomo, Zrnic, Mendler-Dünner, Hardt 2020,{" "}
              <em>ICML</em>; Hardt and Mendler-Dünner 2023,{" "}
              <em>Annual Review of Statistics</em>). A learning
              algorithm chooses a model parameter{" "}
              <M>{String.raw`\theta`}</M>; the distribution over data
              depends on <M>{String.raw`\theta`}</M>; the loss is taken
              with respect to that{" "}
              <M>{String.raw`\theta`}</M>-dependent distribution. The
              framework&apos;s central operator{" "}
              <M>{String.raw`\Phi`}</M> is the composition: take a
              policy parameter, push it through the world, observe the
              data, derive the next policy. The closure is the
              property that <M>{String.raw`\Phi`}</M> has fixed points;
              the framework&apos;s substantive claims are about what
              holds at those fixed points.
            </p>
            <p className="mb-sm">
              Performative prediction generalizes four older settings —
              strategic classification (users re-positioning their
              features against a classifier), recommender feedback
              (engagement signals depending on what the system
              surfaced), persistent-user reinforcement learning (user
              state evolving under the agent&apos;s policy), and
              adaptive control of adapting systems (controller as one
              input among many shaping the plant). The framework&apos;s
              setting differs from each in scope and stakes. The
              responding agent is a population of users observed only
              through engagement-events. The policy class is
              engagement-monetizing. The quantity at stake is the
              structure of the user&apos;s behavioral distribution
              under the closure, not a per-instance prediction loss.
            </p>
            <p className="mb-sm">
              The result the framework leans on hardest from Perdomo et
              al. is the existence and characterization of the{" "}
              <em>performative stable point</em>{" "}
              <M>{String.raw`\theta^*`}</M> — a{" "}
              <M>{String.raw`\theta`}</M> that is optimal against the
              distribution it itself induces. Under contractivity
              conditions on the policy-to-distribution map, the stable
              point exists and is the limit of online optimization. It
              need not coincide with the <em>performative optimum</em>{" "}
              <M>{String.raw`\theta_{PO}`}</M>, the policy a regulator
              with full knowledge of the operator could in principle
              choose. Online optimization converges to{" "}
              <M>{String.raw`\theta^*`}</M>; the social-welfare
              benchmark is <M>{String.raw`\theta_{PO}`}</M>; the
              asymmetry between them is structural, and the gap between
              them is where the framework&apos;s regulatory analysis
              lives.
            </p>
            <p className="mb-sm">
              What the performative-prediction idiom gives the older
              critical vocabularies — interpellation, ideological state
              apparatus, repressive desublimation, biopower — is a
              fixed-point grammar for the dynamical claims those
              vocabularies could only state qualitatively. The closure
              is a formal object. Subject-formation under closed-loop
              optimization is what the framework studies; the dissolved
              objects (interiority, reflection, autonomy) are formal
              consequences of the closure, not the framework&apos;s
              premises.
            </p>
          </Middle>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §0.1 The performative setup                             */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="setup" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§0.1 The performative setup</h2>
        <DepthLayers>
          <Caption>
            Time is discrete with tick spacing{" "}
            <M>{String.raw`\delta_{\min} > 0`}</M>. The user state{" "}
            <M>{String.raw`u_t \in \mathcal{U} \subseteq \mathbb{R}^d`}</M>{" "}
            decomposes into four registers (somatic, cognitive, political,
            kinaesthetic). Five structural objects compose the closed
            loop: user dynamics, observation channel, platform policy,
            performative distribution, performative reward.
          </Caption>
          <Middle>
            <p className="mb-sm">
              Time is discrete with tick spacing{" "}
              <M>{String.raw`\delta_{\min} > 0`}</M>. Indices{" "}
              <M>{String.raw`t \in \mathbb{Z}_{\geq 0}`}</M> identify
              ticks. The user state at time <M>{String.raw`t`}</M> is a
              vector{" "}
              <M>{String.raw`u_t \in \mathcal{U} \subseteq \mathbb{R}^d`}</M>,
              decomposed into four registers:
            </p>
            <MBlock>
              {String.raw`u_t = (u_t^S, u_t^C, u_t^P, u_t^K) \in \mathcal{U}^S \times \mathcal{U}^C \times \mathcal{U}^P \times \mathcal{U}^K.`}
            </MBlock>
            <p className="mb-sm">
              Discrete time is a substantive modeling commitment.
              Real platforms operate at the engagement-event timescale
              — a click, a scroll, a tap, a view-completion. The
              minimum spacing <M>{String.raw`\delta_{\min}`}</M>{" "}
              captures the platform&apos;s smallest engagement
              resolution and sets the structural floor on what the
              framework can speak about. Below{" "}
              <M>{String.raw`\delta_{\min}`}</M> the apparatus is
              silent; at <M>{String.raw`\delta_{\min}`}</M> and above
              it commits to claims about how the closure operates.
              Empirically <M>{String.raw`\delta_{\min}`}</M> ranges
              from milliseconds (ad auctions, high-frequency feeds)
              through seconds (recommendation systems) to minutes
              (content-moderation cycles). The structural-separation
              hypothesis stated in §0.4 —{" "}
              <M>{String.raw`\theta_{\mathrm{ref}}/\delta_{\min} \gg 1`}</M>{" "}
              — has <M>{String.raw`\delta_{\min}`}</M> as its
              denominator, which is why the choice of tick is the
              framework&apos;s first empirical hinge.
            </p>
            <p className="mb-sm">
              The four-register decomposition (S, C, P, K) regroups
              what older critical traditions analyzed separately. The
              somatic register names the body — the rhythms and
              refusals biology contributes. Cognition handles attention,
              working memory, and the reflective interval at which a
              thought completes itself. The political register tracks
              the affective infrastructure that connects the user to
              publics. Kinaesthesia names the gestural and rhythmic
              engagements — the muscle memory of scroll, swipe, tap.
              At the pre-closure baseline the registers factor: their
              joint distribution is a product of marginals (axiom
              U2&apos;s starting point). The framework&apos;s claim is
              that closed-loop joint observation through the platform&apos;s
              sensor channel <M>{String.raw`O`}</M> couples them
              dependently (Proposition 7&apos;). The decomposition is
              the framework&apos;s bookkeeping for what the closure
              will then dissolve.
            </p>
            <p className="mb-sm">
              The five structural objects (P1)–(P5) compose the
              closed loop. (P1) the user dynamics{" "}
              <M>{String.raw`T`}</M>, a Markov kernel describing how
              the user state evolves under stimulus; (P2) the
              observation channel <M>{String.raw`O`}</M> through which
              the platform reads the user state; (P3) the policy{" "}
              <M>{String.raw`\pi_\theta`}</M> producing the next
              stimulus from the observation history; (P4) the
              performative distribution{" "}
              <M>{String.raw`\mathcal{D}(\theta)`}</M> that policy
              induces on trajectories; (P5) the reward functional{" "}
              <M>{String.raw`\hat R`}</M> the platform optimizes,
              integrated against{" "}
              <M>{String.raw`\mathcal{D}(\theta)`}</M> to give the
              performative value{" "}
              <M>{String.raw`F(\theta)`}</M>. Every load-bearing result
              downstream is a claim about what (P1)–(P5) jointly
              produce under the axioms in §0.3.
            </p>
          </Middle>
          <Formal label="The five structural objects (P1)–(P5)">
            <p className="mb-sm">
              <strong>(P1) User dynamics.</strong> A Markov kernel{" "}
              <M>{String.raw`T : \mathcal{U} \times \mathcal{S} \to \Delta(\mathcal{U})`}</M>{" "}
              describing how the user state evolves under platform
              stimulus <M>{String.raw`s_t`}</M>:
            </p>
            <MBlock>{String.raw`u_{t+1} \sim T(\cdot \mid u_t, s_t).`}</MBlock>
            <Reads>
              The next user state is drawn from a kernel that depends
              on the current state and the stimulus just delivered.
              The user evolves on their own, and the platform&apos;s
              stimulus is one input to that evolution — not the whole
              of it.
            </Reads>

            <p className="mb-sm">
              <strong>(P2) Observation channel.</strong> A measurable
              kernel{" "}
              <M>{String.raw`O : \mathcal{U} \to \Delta(\mathcal{Y})`}</M>{" "}
              producing the platform&apos;s view of the user state:
            </p>
            <MBlock>{String.raw`y_t \sim O(\cdot \mid u_t).`}</MBlock>
            <Reads>
              The platform never sees the user state directly. It sees
              an observation <M>{String.raw`y_t`}</M> drawn through a
              channel that depends on the state — engagement-events,
              clicks, dwell times. Everything the platform knows about
              the user passes through this channel.
            </Reads>

            <p className="mb-sm">
              <strong>(P3) Platform policy.</strong> A parameterized
              family{" "}
              <M>{String.raw`\pi_\theta : \mathcal{Y}^* \to \Delta(\mathcal{S})`}</M>{" "}
              producing the next stimulus from the observation history:
            </p>
            <MBlock>{String.raw`s_t \sim \pi_\theta(\cdot \mid y_{1:t}), \quad \theta \in \Theta \subseteq \mathbb{R}^p.`}</MBlock>
            <Reads>
              The next stimulus is drawn from the policy, which reads
              the entire observation history{" "}
              <M>{String.raw`y_{1:t}`}</M> up to now.{" "}
              <M>{String.raw`\theta`}</M> is the tunable parameter the
              platform optimizes — the single knob whose convergence
              the whole framework is about.
            </Reads>

            <p className="mb-sm">
              <strong>(P4) Performative distribution.</strong> For each
              fixed <M>{String.raw`\theta`}</M>, the composition{" "}
              <M>{String.raw`(T, O, \pi_\theta)`}</M> defines a stationary
              distribution
            </p>
            <MBlock>
              {String.raw`\mathcal{D}(\theta) \in \Delta\!\left(\mathcal{U}^\infty \times \mathcal{Y}^\infty \times \mathcal{S}^\infty\right)`}
            </MBlock>
            <p className="mb-sm">
              over joint trajectories. The map{" "}
              <M>{String.raw`\theta \mapsto \mathcal{D}(\theta)`}</M> is
              the <em>performative operator</em>: it sends a policy
              parameter to the distribution that policy induces over the
              world it acts on.
            </p>

            <p className="mb-sm">
              <strong>(P5) Performative reward.</strong> A measurable,
              bounded functional <M>{String.raw`\hat R`}</M> on
              trajectories, and the performative value
            </p>
            <MBlock>{String.raw`F(\theta) := \mathbb{E}_{\mathcal{D}(\theta)}[\hat R].`}</MBlock>
            <Reads>
              The platform&apos;s score is its reward averaged over the
              world its current policy produces. The averaging
              distribution is <M>{String.raw`\mathcal{D}(\theta)`}</M> —
              the world <M>{String.raw`\theta`}</M> itself induces —
              and that self-dependence is what makes the problem
              performative rather than ordinary optimization.
            </Reads>

            <p className="mb-sm">
              The platform&apos;s optimization is online gradient ascent
              on <M>{String.raw`F`}</M>:
            </p>
            <MBlock>{String.raw`\theta_{t+1} = \theta_t + \alpha_t\, \widehat{\nabla F}(\theta_t),`}</MBlock>
            <Reads>
              Each step nudges the policy uphill on its score by a
              shrinking amount <M>{String.raw`\alpha_t`}</M>. The
              Robbins–Monro schedule below keeps the steps large
              enough to travel the whole way to the target but small
              enough to settle there rather than overshoot.
            </Reads>
            <p className="mb-sm">
              with Robbins–Monro step sizes{" "}
              <M>{String.raw`\sum \alpha_t = \infty, \sum \alpha_t^2 < \infty`}</M>.
            </p>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §0.2 The closure as fixed point                         */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="closure" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§0.2 The closure as fixed point</h2>
        <DepthLayers>
          <Caption>
            The closure is the property that <M>{String.raw`\theta`}</M>{" "}
            appears on both sides of the performative-value expression:
            the platform optimizes against the distribution its own
            choice of <M>{String.raw`\theta`}</M> has produced. The
            closed loop is not an axiom; it is the <em>form</em> of the
            operator{" "}
            <M>{String.raw`\Phi : \theta \mapsto \arg\max_{\theta'} \mathbb{E}_{\mathcal{D}(\theta)}[\hat R(\theta')]`}</M>.
          </Caption>
          <Middle>
            <p className="mb-sm">
              Two distinguished points of the closure carry the
              framework&apos;s substantive analysis: the{" "}
              <em>performative stable point</em>{" "}
              <M>{String.raw`\theta^*`}</M> (Definition 0.1) — the
              long-run target of platform optimization that treats the
              distribution as exogenous at each gradient step — and the{" "}
              <em>performative optimum</em>{" "}
              <M>{String.raw`\theta_{PO}`}</M> (Definition 0.2) — what a
              regulator with full knowledge of the performative operator
              could in principle achieve.
            </p>
            <p className="mb-sm">
              The framework&apos;s substantive claims are about
              performative stable points; the performative-optimum
              setting is the regulatory benchmark. At a performative
              stable point, what the platform observes is what its
              policy has induced, and the policy it would re-derive
              from the observation is the policy already in place. This
              is what the older critical vocabulary names with words
              like <em>captured</em>, <em>colonized</em>,{" "}
              <em>foreclosed</em>. The mathematical content of those
              words is fixed-point convergence of the performative
              operator.
            </p>
            <p className="mb-sm">
              The existence of <M>{String.raw`\theta^*`}</M> follows
              from Banach&apos;s fixed-point theorem applied to{" "}
              <M>{String.raw`\Phi`}</M> under contractivity (axiom R1).
              When the policy-to-distribution map is{" "}
              <M>{String.raw`L_{\mathcal{D}}`}</M>-Lipschitz and the
              reward functional is{" "}
              <M>{String.raw`L_{\hat R}`}</M>-Lipschitz, the composite
              operator <M>{String.raw`\Phi`}</M> contracts at rate{" "}
              <M>{String.raw`\kappa := L_{\hat R} L_{\mathcal{D}} < 1`}</M>.
              Banach gives a unique stable point and geometric
              convergence:{" "}
              <M>{String.raw`\|\theta_t - \theta^*\| \leq \kappa^t \|\theta_0 - \theta^*\|`}</M>.
              The framework can therefore name how fast the user&apos;s
              environment is being optimized toward{" "}
              <M>{String.raw`\theta^*`}</M>; the closure is a
              quantitative claim, not an asymptotic idealization.{" "}
              <Link
                href="/closed-loop/the-apparatus/section-10/theorem-12"
                className="text-oxblood hover:underline"
              >
                Section 10
              </Link>{" "}
              returns to what happens at{" "}
              <M>{String.raw`\kappa = 1`}</M>, where contractivity
              fails and the closure produces bifurcations — saddle-node,
              pitchfork, period-doubling, Neimark–Sacker.
            </p>
          </Middle>
          <Formal label="Definition 0.1 (performative stable point)">
            <p className="mb-sm">
              <em>A parameter <M>{String.raw`\theta^* \in \Theta`}</M>{" "}
              is a <strong>performative stable point</strong> if</em>
            </p>
            <MBlock>
              {String.raw`\theta^* \in \arg\max_{\theta \in \Theta}\, \mathbb{E}_{\mathcal{D}(\theta^*)}\!\left[\hat R(\theta)\right].`}
            </MBlock>
            <Reads>
              Read the subscript carefully. The average is taken over{" "}
              <M>{String.raw`\mathcal{D}(\theta^*)`}</M> — the world
              the <em>stable</em> policy produces — while the{" "}
              <M>{String.raw`\arg\max`}</M> searches over candidate
              policies <M>{String.raw`\theta`}</M>. A stable point is
              the policy that is already best against the world it
              makes: optimize against that world and the same policy
              comes back.
            </Reads>
            <p className="mb-sm">
              <em>Equivalently, <M>{String.raw`\theta^*`}</M> is a
              fixed point of the composite operator{" "}
              <M>{String.raw`\Phi`}</M>.</em>
            </p>
          </Formal>
          <Formal label="Definition 0.2 (performative optimum)">
            <p className="mb-sm">
              <em>A parameter{" "}
              <M>{String.raw`\theta_{PO} \in \Theta`}</M> is a{" "}
              <strong>performative optimum</strong> if</em>
            </p>
            <MBlock>
              {String.raw`\theta_{PO} \in \arg\max_{\theta \in \Theta}\, \mathbb{E}_{\mathcal{D}(\theta)}\!\left[\hat R(\theta)\right].`}
            </MBlock>
            <Reads>
              The only change from Definition 0.1 is the subscript:
              here the averaging world{" "}
              <M>{String.raw`\mathcal{D}(\theta)`}</M> moves with the
              candidate <M>{String.raw`\theta`}</M>. The optimum
              accounts for how each candidate reshapes the world it
              will be judged in — what a regulator with full knowledge
              of the loop could target. Nothing forces the stable
              point <M>{String.raw`\theta^*`}</M> to reach it, and the
              gap between them is where §7&apos;s regulatory analysis
              lives.
            </Reads>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §0.3 The axioms                                          */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="axioms" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§0.3 Conditions, regrouped (the three axiom groups)</h2>
        <DepthLayers>
          <Caption>
            The framework&apos;s axioms reorganize into three
            theoretically-loaded groups. The grouping makes visible
            what each axiom commits the framework to. Group I is the
            regularity that makes the math function. Group II is what
            the framework claims about the user-side of the closure.
            Group III is what the framework claims about the platform-
            side.
          </Caption>
          <Middle>
            <p className="mb-sm">
              The framework&apos;s axioms have been reorganized into
              three groups whose contents do different kinds of work.
              Group I (regularity) is the mathematical infrastructure:
              measurability, Lipschitz continuity, contractivity,
              smoothness — the conditions under which the closure is
              an object that can be reasoned about at all. Group II
              (user-side responsiveness) names what the framework
              claims is true of the user: positive response to
              stimulus (U1), identifiability under sufficient
              observation (U2), and behavioral plasticity converging
              on the platform-induced target (U3). Group III
              (platform-side optimizing structure) names what the
              framework claims is true of the platform: that its
              monetization is engagement-monetization (P-I), that its
              policy class is expressive enough to reach any feasible
              engagement rate (P-II), and that its optimization
              converges (P-III).
            </p>
            <p className="mb-sm">
              Each group makes the framework refusable at a different
              point. A reader who rejects Group I — who argues that
              platforms are not contractive, that the dynamics admit
              no stationary distribution, or that the reward
              functional is not Lipschitz — has rejected the
              framework&apos;s setting itself, and the rest of the
              apparatus does not engage. A reader who accepts Group I
              but rejects Group II — who argues that users are not
              behaviorally plastic in the sense U3 makes precise — has
              rejected the framework&apos;s diagnostic claims about
              subject-formation, and Theorem 1&apos; and Proposition
              5&apos; collapse with the rejection. A reader who
              accepts Groups I and II but rejects Group III — who
              argues that platform monetization is not
              engagement-monetization, or that the optimization does
              not converge to a stable point — has rejected the
              framework&apos;s structural-economic claims, and the
              cohort-gradient analysis in Proposition 8 loses its
              hinge.
            </p>
            <p className="mb-sm">
              A reader who rejects the framework can locate the
              rejection in one of the three groups. A reader who
              endorses it can see exactly what they are endorsing.
            </p>
          </Middle>

          <Formal label="Group I — Regularity (the math)">
            <p className="mb-sm">
              <strong>(R1) Measurability and integrability.</strong>{" "}
              <M>{String.raw`T, O, \pi_\theta, \hat R`}</M> are
              measurable. The reward kernel is bounded and{" "}
              <M>{String.raw`L_{\hat R}`}</M>-Lipschitz in{" "}
              <M>{String.raw`\theta`}</M>. The performative distribution{" "}
              <M>{String.raw`\mathcal{D}(\theta)`}</M> exists, is
              unique, and is <M>{String.raw`L_{\mathcal{D}}`}</M>-Lipschitz
              in <M>{String.raw`\theta`}</M> in the Wasserstein-1
              metric. The contractivity condition holds:{" "}
              <M>{String.raw`L_{\hat R} L_{\mathcal{D}} < 1`}</M>. The
              inter-stimulus interval distribution has coefficient of
              variation{" "}
              <M>{String.raw`c_v(\theta) \leq c_v^* < \infty`}</M>{" "}
              uniformly in <M>{String.raw`\theta \in \Theta`}</M>.
            </p>
            <p className="mb-sm">
              <strong>(R2) Smoothness and isolation.</strong>{" "}
              <M>{String.raw`F`}</M> is <M>{String.raw`C^1`}</M> on{" "}
              <M>{String.raw`\Theta`}</M>. Performative stable points
              exist (by Banach fixed-point theorem under (R1)&apos;s
              contractivity); the operative one is isolated and the
              Jacobian of <M>{String.raw`\Phi`}</M> at{" "}
              <M>{String.raw`\theta^*`}</M> is non-singular.
            </p>
          </Formal>

          <Formal label="Group II — User-side responsiveness">
            <p className="mb-sm">
              <strong>(U1) Positive response.</strong> There exists{" "}
              <M>{String.raw`p_0 > 0`}</M> such that for every tick{" "}
              <M>{String.raw`t`}</M> and every{" "}
              <M>{String.raw`\theta \in \Theta`}</M>,
            </p>
            <MBlock>
              {String.raw`\Pr_{\mathcal{D}(\theta)}\!\left(dN_{t+1} \geq 1 \mid s_t \neq 0, y_{1:t-1}\right) \geq p_0`}
            </MBlock>
            <p className="mb-sm">on the operating support.</p>
            <Reads>
              Whenever the platform delivers a real stimulus (
              <M>{String.raw`s_t \neq 0`}</M>), the user responds — at
              least one engagement event — with probability no less
              than a fixed floor <M>{String.raw`p_0`}</M>, regardless
              of the tick or the policy. The user is reachable, never
              fully inert: stimulus reliably lands.
            </Reads>

            <p className="mb-sm">
              <strong>(U2) Identifiability under observation.</strong>{" "}
              There exist <M>{String.raw`L \in \mathbb{Z}_{>0}`}</M>{" "}
              and a strictly increasing{" "}
              <M>{String.raw`\Phi_{\text{id}} : [0,\infty) \to [0,\infty)`}</M>{" "}
              with <M>{String.raw`\Phi_{\text{id}}(0) = 0`}</M> such
              that for any{" "}
              <M>{String.raw`u, u' \in \mathcal{U}`}</M> with{" "}
              <M>{String.raw`\|u - u'\| \geq \varepsilon_0`}</M> and
              any stimulus sequence of length{" "}
              <M>{String.raw`L`}</M>: the KL divergence between
              observation distributions is bounded below by{" "}
              <M>{String.raw`\Phi_{\text{id}}(\|u - u'\|)`}</M>. The
              user state is recoverable from observations under
              sufficient excitation.
            </p>

            <p className="mb-sm">
              <strong>(U3) Behavioral plasticity.</strong> The
              user&apos;s behavioral distribution{" "}
              <M>{String.raw`\nu_u(t)`}</M> updates by bounded-rate
              dynamics on the simplex whose linearization at the
              operating point matches the Fisher–Rao gradient flow of{" "}
              <M>{String.raw`D_{KL}(\nu_u \| \pi_{\hat R})`}</M>.
              Free-energy minimization, operant conditioning, and
              Bayesian social learning are three mechanisms producing
              this linearization; the framework&apos;s claim is about
              the linearization, not any particular mechanism.
            </p>
          </Formal>

          <Formal label="Group III — Platform-side optimizing structure">
            <p className="mb-sm">
              <strong>(P-I) Reward monotonicity in engagement.</strong>{" "}
              <M>{String.raw`\hat R`}</M> is non-decreasing in the
              engagement-event count <M>{String.raw`N_T`}</M> on the
              operating support. This is the framework&apos;s
              substantive economic claim: the platform&apos;s
              monetization is engagement-monetization.
            </p>

            <p className="mb-sm">
              <strong>(P-II) Policy expressivity.</strong> For every
              target rate{" "}
              <M>{String.raw`\lambda \in [0, \lambda_{\max}]`}</M>{" "}
              with{" "}
              <M>{String.raw`\lambda_{\max} = 1/\delta_{\min}`}</M>,
              the policy class <M>{String.raw`\Pi`}</M> contains a
              policy achieving long-run engagement rate{" "}
              <M>{String.raw`\lambda`}</M> under{" "}
              <M>{String.raw`\mathcal{D}(\theta)`}</M>.
            </p>

            <p className="mb-sm">
              <strong>(P-III) Optimization convergence.</strong> Online
              gradient ascent on <M>{String.raw`F`}</M> converges almost
              surely to a performative stable point under Robbins–Monro
              step sizes and saddle-avoidance for SGD with generic noise
              (Pemantle 1990; Ge–Huang–Jin–Yuan 2015; Lee–Simchowitz–
              Jordan–Recht 2016).
            </p>
          </Formal>
        </DepthLayers>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* §0.4 Notation                                            */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="notation" className="mb-xl">
        <h2 className="font-serif text-lg text-ink mb-md">§0.4 Notation</h2>
        <DepthLayers>
          <Caption>
            The framework&apos;s defined symbols, used consistently
            across every result. Reference for the apparatus pages.
          </Caption>
          <Middle>
            <ul className="space-y-xs text-base list-none pl-0">
              <li>
                <M>{String.raw`\tau^{(k)} := \inf\{t - t_k : s_t \neq 0\}`}</M>{" "}
                — the <M>{String.raw`k`}</M>-th inter-stimulus interval.
              </li>
              <li>
                <M>{String.raw`S(\tau; \theta) := \Pr_{\mathcal{D}(\theta)}(\tau^{(k)} > \tau)`}</M>{" "}
                — survival function under the performative distribution at{" "}
                <M>{String.raw`\theta`}</M>.
              </li>
              <li>
                <M>{String.raw`\theta_{\mathrm{ref}} > 0`}</M> —
                reflective-processing threshold. The structural-separation
                hypothesis is{" "}
                <M>{String.raw`\theta_{\mathrm{ref}} / \delta_{\min} \gg 1`}</M>,
                empirically <M>{String.raw`10^3`}</M> to{" "}
                <M>{String.raw`10^5`}</M> on contemporary platforms.
              </li>
              <li>
                <M>{String.raw`E_\tau := \{s_{t'} = 0 \text{ for } t < t' \leq t + \tau\}`}</M>{" "}
                — no-stimulus window of duration{" "}
                <M>{String.raw`\tau`}</M> starting at <M>{String.raw`t`}</M>.
              </li>
              <li>
                <M>{String.raw`I_P(\tau) := \mathrm{Cov}_P(u_t, u_{t+\tau} \mid E_\tau)`}</M>{" "}
                — conditional autocovariance.
              </li>
              <li>
                <M>{String.raw`\Pi_t(\cdot) := P(u_t \in \cdot \mid y_{1:t})`}</M>{" "}
                — platform&apos;s filtering posterior at time{" "}
                <M>{String.raw`t`}</M>.
              </li>
              <li>
                <M>{String.raw`\nu_u(t)`}</M> — user&apos;s behavioral
                distribution at time <M>{String.raw`t`}</M>.
              </li>
              <li>
                <M>{String.raw`\pi_{\hat R}(\theta)`}</M> — platform-induced
                behavioral target at policy{" "}
                <M>{String.raw`\theta`}</M>. Write{" "}
                <M>{String.raw`\pi_{\hat R}^* := \pi_{\hat R}(\theta^*)`}</M>.
              </li>
              <li>
                <M>{String.raw`D_{KL}(\cdot \| \cdot)`}</M> —
                Kullback–Leibler divergence;{" "}
                <M>{String.raw`H(\cdot)`}</M> — entropy.
              </li>
              <li>
                <M>{String.raw`F(\theta) := \mathbb{E}_{\mathcal{D}(\theta)}[\hat R(\theta)]`}</M>{" "}
                — performative value.
              </li>
              <li>
                <M>{String.raw`\bar\lambda(\theta) := \lim_{T \to \infty} \mathbb{E}_{\mathcal{D}(\theta)}[N_T]/T`}</M>{" "}
                — long-run engagement rate.
              </li>
              <li>
                <M>{String.raw`\Phi(\theta)`}</M> — performative-optimization
                operator (reserved for fixed-point analysis).
              </li>
            </ul>
          </Middle>
        </DepthLayers>
      </section>

      {/* Cross-references */}
      <section className="mt-xl pt-md border-t border-paper-85">
        <h2 className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-sm">
          What follows
        </h2>
        <ul className="text-base text-ink-90 space-y-xs">
          <li>
            <Link
              href="/closed-loop/the-apparatus/section-1/lemma-1"
              className="text-oxblood hover:underline"
            >
              §1 Lemma 1 (foreclosure)
            </Link>{" "}
            — the first load-bearing result; uses (R1), (R2), (P-I), (P-II), (P-III)
          </li>
          <li>
            <Link
              href="/closed-loop/the-apparatus/section-2/theorem-1-prime"
              className="text-oxblood hover:underline"
            >
              §2 Theorem 1&apos; (reclamation impossibility)
            </Link>{" "}
            — uses (R1), (U2)
          </li>
          <li>
            <Link
              href="/closed-loop/the-apparatus/section-7/theorem-9"
              className="text-oxblood hover:underline"
            >
              §7 Theorem 9 (causal sensitivity)
            </Link>{" "}
            — uses (R1)&apos;s contractivity and (R2)&apos;s Hessian-invertibility
          </li>
          <li>
            <Link
              href="/closed-loop/the-apparatus/section-10/theorem-12"
              className="text-oxblood hover:underline"
            >
              §10 Theorem 12 (crisis boundary)
            </Link>{" "}
            — classifies what happens at the contractivity boundary L_R L_D = 1
          </li>
        </ul>
      </section>

      <footer className="mt-xl pt-md border-t border-paper-85 font-mono text-xs text-ink-50">
        v2 apparatus rendering.
      </footer>
    </main>
  );
}
