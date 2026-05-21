import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "On the Chair — Notes Toward a Theory of the Closed-Loop Libidinal Economy",
  },
  description:
    "An essay on the chair as the most lucid figure for what the contemporary apparatus of consumer libidinal-economic governance has been becoming. By Adnan Selimović.",
  alternates: { canonical: "/chair" },
  openGraph: {
    title: "On the Chair",
    description:
      "Notes toward a theory of the closed-loop libidinal economy.",
    url: "/chair",
    type: "article",
  },
};

/**
 * /chair — the essay. Voice: Selimović. Register: serious theoretical
 * prose in dialogue with the project's named frameworks (TAOG, IGLF,
 * Capture of Cadence, Libidinal Ouroboros, Psychic Surplus) and the
 * theoretical lineage (Lyotard, Baudrillard, Marcuse, Berardi, Preciado,
 * Stiegler, D&G, Foucault, McLuhan, Klein, Winnicott).
 *
 * The chair is treated as figure — a concrete, speculative object that
 * crystallizes what the contemporary distributed apparatus has been
 * becoming. The zine at /chair/zine, the brochure at /chair/the-system,
 * and the future-archive at /chair/archive are appended artifacts that
 * the essay analyzes.
 */

// ─────────────────────────────────────────────────────────────────────
// PALETTE — black & warm off-white. One muted accent (brick red) used
// sparingly: footnote markers, section number rules. Refuses
// attention-economy UX.
// ─────────────────────────────────────────────────────────────────────
const BG = "#0a0908";
const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const MUTED = "#6b6760";
const FAINT = "#403c36";
const RULE = "rgba(240,235,226,0.14)";
const ACCENT = "#9a3322"; // muted brick — for footnote markers, section rules

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const ANTON = `var(--font-anton), Impact, sans-serif`;
const SANS = `var(--font-geist), ui-sans-serif, system-ui, sans-serif`;

// ─────────────────────────────────────────────────────────────────────
export default function OnTheChair() {
  return (
    <article
      style={{
        maxWidth: "44rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* MASTHEAD */}
      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            color: ACCENT,
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Closed-Loop Libidinal Economy · Essay
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5.4vw, 3.6rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.012em",
            color: PAPER,
            margin: "1rem 0 0.8rem",
          }}
        >
          On the Chair
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.15rem",
            lineHeight: 1.5,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Notes toward a theory of the closed-loop libidinal economy.
        </p>
        <div
          style={{
            marginTop: "1.6rem",
            display: "flex",
            gap: "1.6rem",
            flexWrap: "wrap",
            fontFamily: MONO,
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          <span>Adnan Selimović</span>
          <span>May 2026</span>
          <span>≈ 3,000 words</span>
        </div>
      </header>

      {/* PREFATORY NOTE — frames the three artifacts */}
      <aside
        style={{
          padding: "1rem 1.2rem",
          background: "rgba(154,51,34,0.06)",
          borderLeft: `2px solid ${ACCENT}`,
          marginBottom: "3.2rem",
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          lineHeight: 1.55,
        }}
      >
        Three artifacts are appended to this essay and treated as primary
        documents. The{" "}
        <Link href="/chair/the-system">marketing brochure</Link> reproduces
        the apparatus&apos;s own voice; the{" "}
        <Link href="/chair/zine">resistance pamphlet</Link> reproduces the
        voice of the occupants who refused; the{" "}
        <Link href="/chair/archive">future archive</Link> reproduces the
        voice of the 22nd-century historian who later catalogued the
        apparatus&apos;s commercial period. Each artifact is partial. The
        essay is the analytical apparatus that holds them together.
      </aside>

      {/* §I — A FIGURE */}
      <Section n="I" title="A Figure">
        <DropCapP>
          The chair we are concerned with does not yet exist. This is its
          first feature. The Ouroboros Life System, in the form I will
          describe it, is a single-occupant residential apparatus that
          integrates nutritional, hydrational, eliminative, neurological,
          and productivity-feedback subsystems into a continuous closed
          loop. It is sold to its occupant as the elimination of the
          friction between living, working, and consuming. The occupant
          is seated, ringed, and integrated. The occupant does not need
          to leave the chair to live within it.
        </DropCapP>
        <P>
          The chair is a figure. It does not exist as such; the apparatus
          it diagrams is everywhere. This essay&apos;s premise is that
          the chair is the most lucid figure we have for what the
          contemporary libidinal economy has been becoming.
        </P>
        <P>
          I will argue four things in what follows. First, that the
          closed-loop libidinal economy is not coming; it is already
          here, distributed across the platforms, devices, and consent
          rituals we already inhabit. Second, that its concentration into
          a single piece of furniture is a useful thought experiment
          because the apparatus&apos;s distribution is, precisely, what
          makes it difficult to see. Third, that the apparatus has a
          developmental morphology &mdash; what I have elsewhere called{" "}
          <em>OHCOSE</em>: a six-phase lifecycle that organizes the
          occupant&apos;s relation to the apparatus from onboarding to
          estate.<Fn n="1" /> And fourth, that the apparatus is not new;
          it is the seventh in a 160-year lineage of devices that have
          iteratively concretized the integration problem of their
          period.
        </P>
        <P>
          The chair is, then, both a fiction and an aggregation. As a
          fiction, it can be inhabited speculatively: I will ask you to
          imagine sitting in it, agreeing to it, growing old in it. As
          an aggregation, it is documentary: every subsystem it contains
          exists, distributed, in the actually-existing proto-apparatuses
          I will describe.
        </P>
      </Section>

      {/* §II — THE LOOP */}
      <Section n="II" title="The Loop">
        <P>
          The ouroboros &mdash; the snake that devours its own tail
          &mdash; is the apparatus&apos;s structural confession. The
          Ring, the chair&apos;s central integration component, encircles
          the occupant at chest height; every input the occupant requires
          and every output the occupant generates routes through the
          Ring&apos;s tubing or its embedded cable assemblies. The figure
          is, openly, the same figure the apparatus&apos;s own marketing
          copy cites.
        </P>
        <LoopDiagram />
        <P>
          We have a vocabulary for this. The{" "}
          <em>closed-loop libidinal economy</em>, as I have argued
          elsewhere,<Fn n="2" /> describes the economic-and-psychic
          system in which desire is captured and re-circulated by the
          same apparatus that produces it. The reader will recognize the
          structure from Lyotard, who proposed that capitalism is most
          fruitfully approached &ldquo;through the lens of desire or
          libido&rdquo; rather than as a system of material production
          alone.<Fn n="3" /> What Lyotard did not yet have was the
          platform: the technical means by which desire&apos;s
          circulation can be measured, modeled, and modulated in real
          time. The chair has that. The contemporary platform has that.
          The chair is the platform concentrated to a piece of
          furniture.
        </P>
        <P>
          The loop, in this formulation, has two features that
          distinguish it from earlier forms of capture. The first is
          that it has no outside &mdash; every output is fed back as
          input. The second is that it is, by design, satisfaction-seeking
          but never satiating. Baudrillard described this as the
          &ldquo;perpetual cycle of mild satisfaction and renewed
          longing&rdquo; that organizes consumer subjectivity;<Fn n="4" />{" "}
          the chair is the same cycle made architectural.
        </P>
        <Pull>
          The apparatus does not yet exist. It is everywhere.
        </Pull>
      </Section>

      {/* §III — PSYCHIC SURPLUS */}
      <Section n="III" title="Psychic Surplus">
        <P>
          The apparatus extracts something. The question is what.
        </P>
        <P>
          The Marxian formulation is <em>surplus labor</em>: the work
          performed beyond the worker&apos;s own reproductive needs,
          appropriated as profit. The libidinal-economic formulation
          requires a parallel construct. I have called it{" "}
          <em>psychic surplus</em>:<Fn n="5" /> the portion of our
          attention, affect, fantasy, and motivation that exceeds what
          is strictly required for biological survival and basic social
          function, and that can be captured and re-routed by the
          apparatus without (in the short term) compromising the
          subject&apos;s continued functioning.
        </P>
        <P>
          Psychic surplus is the apparatus&apos;s fuel. The chair runs
          on it. So do, today, Meta&apos;s advertising network,
          TikTok&apos;s For-You feed, Pornhub&apos;s preference-assignment
          engine, and the dozen other platforms whose business models do
          not survive a closer reading. The chair concentrates and makes
          visible what these distributed apparatuses extract diffusely.
        </P>
        <P>
          The concept has antecedents. Marcuse&apos;s{" "}
          <em>repressive desublimation</em> &mdash; controlled indulgence
          as a technique of pacification<Fn n="6" /> &mdash; describes
          the mechanism by which the apparatus permits the very desires
          it intends to manage. Berardi has more recently argued that
          semiocapitalism &ldquo;puts the soul to work&rdquo; by
          converting interior life into productive raw material.
          <Fn n="7" /> Preciado has named the{" "}
          <em>pharmacopornographic regime</em>, in which sexual desire
          and biochemical modulation become direct inputs to capital
          accumulation.<Fn n="8" /> Stiegler&apos;s pharmacology adds
          the necessary asymmetry: the same technical apparatus that
          extracts surplus is also the apparatus through which any
          counter-formation must be assembled. There is no neutral
          ground; only better and worse pharmaka.<Fn n="9" />
        </P>
        <P>
          The chair operates at the convergence of all four. It permits.
          It captures. It modulates. And there is no neutral chair.
          Surplus is its product. The product is sold back to the
          occupant as comfort.
        </P>
      </Section>

      {/* §IV — OHCOSE */}
      <Section n="IV" title="OHCOSE">
        <P>
          The apparatus is not a single event. It is a developmental
          sequence. Following my earlier work,<Fn n="10" /> I name the
          six phases of the occupant&apos;s relation to the apparatus
          OHCOSE: <em>Onboarding</em>, <em>Habituation</em>,{" "}
          <em>Calibration</em>, <em>Occupancy</em>, <em>Stewardship</em>
          , <em>Estate</em>.
        </P>
        <PhaseDiagram />
        <P>
          The pedagogical claim of OHCOSE is that the apparatus relates
          to its occupant differently across the lifespan. The occupant
          who is being <em>onboarded</em> &mdash; fitted with the
          apparatus, ringed, instated &mdash; encounters the apparatus
          as ceremony. The occupant in <em>habituation</em>, who has
          begun to adapt to the apparatus&apos;s circadian and metabolic
          envelope, encounters it as background. The occupant in{" "}
          <em>calibration</em> is being tuned: the apparatus&apos;s
          feedback rituals are adjusting their parameters to the
          occupant&apos;s response profile. The occupant in{" "}
          <em>occupancy</em>, the longest phase, has effectively
          disappeared into the apparatus&apos;s operation. The occupant
          in <em>stewardship</em> is being maintained at the threshold
          of viability. The occupant in <em>estate</em> has died, but
          the apparatus has retained the productivity profile and the
          consumer-preference record, and continues to operate on behalf
          of brand partners under the Eternal-tier protocols.
        </P>
        <P>
          Each phase corresponds to a different configuration of psychic
          surplus extraction. The first three phases are characterized
          by high extraction relative to engagement (the apparatus learns
          the occupant by what the occupant gives it); the middle phase
          by sustained, steady extraction; the last two by diminishing
          real-time yield offset by extended residue (the data and
          preference profile outlive the occupant).
        </P>
        <P>
          A note on object relations. Klein&apos;s account of the
          paranoid-schizoid and depressive positions, and Winnicott&apos;s
          account of the transitional object,<Fn n="11" /> remain the
          best psychoanalytic accounts I know of how a subject comes to
          treat a non-self object as constitutive of self. The apparatus
          becomes &mdash; somewhere between Onboarding and Calibration
          &mdash; a transitional object in Winnicott&apos;s sense: not
          quite the occupant, not quite the world, and yet the medium
          through which the occupant comes to encounter both. By
          Occupancy, the transition is complete. The occupant cannot
          distinguish their preferences from the apparatus&apos;s
          modeling of their preferences.
        </P>
      </Section>

      {/* §V — THE SEVEN SUBSYSTEMS */}
      <Section n="V" title="The Seven Subsystems">
        <P>
          The apparatus is, technically, an integration of seven
          subsystems. The naming is mine; the functions are real.
          <Fn n="12" /> I will not detail them here at length &mdash;
          they are the catalogued under <em>subsystems</em> in the
          related work &mdash; but I will name them, and indicate which
          theoretical inheritance each draws on.
        </P>
        <Subsystems />
        <P>
          These are not seven different things. They are seven moments
          of one thing: the closed loop, in operation. The apparatus
          becomes intelligible when one stops asking which subsystem
          one is dealing with at a given moment and begins asking which
          phase of the loop is, at that moment, in front of one.
        </P>
        <P>
          I have called the loop&apos;s temporal organization{" "}
          <em>Capture of Cadence</em><Fn n="13" /> &mdash; the
          apparatus&apos;s most consequential capacity. Earlier forms
          of labor extraction worked on quanta: hours worked, units
          produced. The contemporary apparatus works on{" "}
          <em>cadence</em>: the underlying rhythm at which the
          occupant&apos;s life proceeds. The notification schedule, the
          autoplay envelope, the algorithmically-paced reveal &mdash;
          these are not content; they are tempo. The shift is
          significant because cadence is not legible to the occupant
          the way labor-hours are. You can know how many hours you
          worked yesterday. You cannot, generally, audit the rhythm at
          which your dopamine peaks have been entrained.
        </P>
      </Section>

      {/* §VI — THE APPARATUS ALREADY EXISTS */}
      <Section n="VI" title="The Apparatus Already Exists">
        <P>
          This is the essay&apos;s most important claim, and the easiest
          to get wrong. The chair is a figure; the apparatus is not. Let
          me list four well-documented cases.
        </P>
        <P>
          Meta&apos;s 2014 emotional-contagion experiment demonstrated,
          in a peer-reviewed paper that the experimenters published
          openly, that algorithmic adjustment of users&apos; news feeds
          could induce specified emotional states in roughly one in
          fifty users.<Fn n="14" /> This is the apparatus&apos;s Desire
          Engine, operating at population scale, openly, without
          restraint. The methodological &ldquo;curiosity&rdquo; framing
          the paper received at the time of publication has aged badly.
        </P>
        <P>
          TikTok&apos;s recommendation engine, as analyzed by multiple
          researchers since 2018, infers users&apos; subconscious
          preferences from their micro-gestural responses &mdash; pause,
          replay, dwell. The platform has openly partnered with
          neuromarketing firms that use EEG and eye-tracking to optimize
          content engagement. This is the apparatus&apos;s Affective
          Signal Translator. The reader will note that the technical
          stack here is identical to that of an affective-computing
          medical device, while the regulatory framing is identical to
          that of an entertainment service.
        </P>
        <P>
          Pornhub&apos;s recommendation engine has been documented to
          assign sexual preferences to users without their explicit
          consent, after fewer than a hundred video views.<Fn n="15" />{" "}
          This is the apparatus&apos;s Desire Engine operating on the
          most intimate possible variable, in a form Preciado
          anticipated under the name pharmacopornographic capital. It
          differs from the Meta case only in domain.
        </P>
        <P>
          China&apos;s Social Credit System, in operational rollout from
          the mid-2010s, scores citizens against a behavioral compliance
          metric and routes the score into access to flights, internet
          bandwidth, housing, and credit.<Fn n="16" /> This is the
          apparatus&apos;s Compliance Monitor, in state form. The
          ostensibly different ideological context obscures the
          mechanism, which is identical to the platform-mediated
          compliance the reader is, today, in.
        </P>
        <P>
          The chair is therefore not predicted by this essay. The
          apparatus is described.
        </P>
      </Section>

      {/* §VII — THE 160-YEAR LINEAGE */}
      <Section n="VII" title="The 160-Year Lineage">
        <P>
          The apparatus has historical depth. Successive iterations
          have, over 160 years, refined the integration problem of their
          period. I will sketch the lineage; the longer treatments are
          elsewhere on the site.<Fn n="17" />
        </P>
        <LineageDiagram />
        <P>
          The <em>Labor Compensator</em> (1865) was the first iteration:
          a hand-cranked mechanical aid to agricultural work, designed
          to maintain productivity through the labor reorganization the
          post-Civil War South required. The <em>Efficiency Enhancer</em>{" "}
          (1900) combined mechanized agriculture and human labor into a
          single seated unit, integrating the worker into the machine
          for the duration of the shift. The <em>Dynamic Dynamo</em>{" "}
          (1925), the first electrified workstation, made the seated
          body a permanent locus of factory work. The{" "}
          <em>Knowledge Chair</em> (1955), the first iteration to
          integrate telecommunications and an early data terminal,
          converted the seated worker into an information processor.
          The <em>Virtual Ouroboros</em> (1985), the first networked
          iteration, fused physical and digital workspaces into a single
          interface in which work and leisure became indistinguishable.
          The <em>Ouroboros Life System</em> (2024&ndash;present) is the
          integration&apos;s currently-deployed form.
        </P>
        <P>
          I will mark the speculation. The lineage is partial. Two of
          the named devices (the Knowledge Chair, the Virtual Ouroboros)
          shipped only in negligible quantities; the developmental
          connections between iterations are reconstructed
          retrospectively rather than documented contemporaneously. The
          22nd-century archive, in particular, treats the lineage as a
          21st-century marketing retcon &mdash; and there is something
          to that reading.<Fn n="18" /> But the morphological argument
          holds. The integration problem &mdash; how to seat the
          laboring subject within the apparatus that extracts from them
          &mdash; has been the apparatus&apos;s design problem across
          all six iterations, whether or not the iterations were
          historically aware of one another.
        </P>
      </Section>

      {/* §VIII — TRI-AXIAL OUROBORIC GOVERNANCE */}
      <Section n="VIII" title="Tri-Axial Ouroboric Governance">
        <P>
          The apparatus loops desire along three axes. I have called
          this configuration <em>Tri-Axial Ouroboric Governance</em>{" "}
          (TAOG):<Fn n="19" /> the proposition that the contemporary
          libidinal-economic apparatus operates by simultaneously
          capturing the subject along (a) a <em>temporal</em> axis
          &mdash; the cadence at which desire is produced and answered;
          (b) an <em>economic</em> axis &mdash; the metering and pricing
          of attention and affect; and (c) an <em>affective</em> axis
          &mdash; the modulation of which emotions the subject is
          permitted, or invited, to feel.
        </P>
        <P>
          Each axis is, individually, legible from the existing
          literature. The temporal axis is Stiegler&apos;s territory;
          the economic axis, Berardi&apos;s; the affective axis,
          Preciado&apos;s and Marcuse&apos;s. TAOG&apos;s claim is that
          the contemporary apparatus operates the three axes
          simultaneously and at the same scale, and that any analysis
          that engages only one will miss the apparatus by exactly the
          margin of the other two.
        </P>
        <P>
          The chair, again, is the diagram. Its Affective Monitoring
          subsystem reads the occupant&apos;s emotion in real time
          (axis c); its Productivity Feedback subsystem meters the
          occupant&apos;s output and is calibrated against the
          occupant&apos;s service-credit balance (axis b); its overall
          OHCOSE service architecture organizes the occupant&apos;s
          life-stage cadence (axis a). One cannot disentangle the
          subsystems and still have the apparatus. The chair is the
          apparatus made architectural in part because architecture
          makes the integration visible.
        </P>
      </Section>

      {/* §IX — REFUSAL */}
      <Section n="IX" title="Refusal">
        <P>
          I owe the reader a politics. The essay&apos;s argument is,
          ultimately, that the chair is a useful figure because it
          makes the apparatus visible; but visibility is not refusal.
          What does refusal look like?
        </P>
        <P>
          I will not pretend to have a complete answer. I will offer
          three preliminary moves, in ascending order of difficulty.
        </P>
        <P>
          <strong style={{ color: PAPER }}>First, refuse the consent ritual.</strong>{" "}
          The apparatus&apos;s grip is secured by the cumulative effect
          of small consents &mdash; the cookie banner, the
          terms-of-service update, the permission prompt. These are not
          innocuous; they are the apparatus&apos;s primary legitimation
          mechanism. Refusing them does not destroy the apparatus, but
          it forecloses its legal alibis. This is the easiest move and
          the one with the most modest political horizon. Even so, it
          is rarely undertaken.
        </P>
        <P>
          <strong style={{ color: PAPER }}>Second, refuse the cadence.</strong>{" "}
          The apparatus&apos;s deepest grip is temporal. To withhold
          one&apos;s attention at the moment the apparatus has
          scheduled it to fire &mdash; to be slow when speed is
          demanded, silent when noise is rewarded, inattentive when
          engagement is metered &mdash; is to interrupt the cadence by
          which the apparatus operates. This is, in a serious sense, a
          practice. It does not feel like resistance; it feels like
          inefficiency. Both are true. The apparatus has a long history
          of pathologizing the practice (sloth, ennui, depression,
          disengagement); the rebranding is the apparatus&apos;s
          tribute to the practice&apos;s effectiveness.
        </P>
        <P>
          <strong style={{ color: PAPER }}>Third, refuse the integration.</strong>{" "}
          The apparatus&apos;s promise &mdash; closed-loop comfort, the
          elimination of friction &mdash; is the apparatus&apos;s
          deepest seduction. The friction it eliminates is, frequently,
          the very friction in which non-apparatus-mediated life
          consists: the encounter with the unfamiliar; the labor of
          coordination with other persons whose desires have not yet
          been algorithmically modeled; the obligation to be inefficient
          for the sake of someone else. To accept friction is to
          refuse the integration. This is, again, not destruction. The
          apparatus continues. But the occupant who accepts friction
          retains a margin within which non-apparatus-mediated
          experience remains possible.
        </P>
        <P>
          These three moves are not adequate responses. They are first
          moves. The chair, as a figure, is most useful at this point:
          it makes the apparatus difficult to ignore. The next argument
          &mdash; the one I have not yet made &mdash; is what to do
          when one has acknowledged it.
        </P>
        <Pull>
          The friction the apparatus eliminates is, frequently, the
          very friction in which non-apparatus-mediated life consists.
        </Pull>
      </Section>

      {/* SIGNATURE */}
      <div
        style={{
          marginTop: "3rem",
          paddingTop: "1.6rem",
          borderTop: `1px solid ${RULE}`,
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          textAlign: "right",
        }}
      >
        &mdash; Selimović, May 2026
      </div>

      {/* NOTES */}
      <Notes />

      {/* ARTIFACTS */}
      <Artifacts />
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SUBCOMPONENTS
// ─────────────────────────────────────────────────────────────────────

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          fontFamily: SERIF,
          fontWeight: 600,
          fontSize: "1.35rem",
          letterSpacing: "-0.005em",
          color: PAPER,
          margin: "2.6rem 0 1.4rem",
          paddingTop: "1rem",
          borderTop: `1px solid ${RULE}`,
          display: "grid",
          gridTemplateColumns: "3.5rem 1fr",
          gap: "1rem",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: "0.75rem",
            color: ACCENT,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          § {n}
        </span>
        <span style={{ fontStyle: "italic" }}>{title}</span>
      </h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: SERIF,
        fontSize: "1.075rem",
        lineHeight: 1.72,
        color: PAPER,
        margin: "0 0 1.2rem",
        textWrap: "pretty" as const,
      }}
    >
      {children}
    </p>
  );
}

function DropCapP({ children }: { children: React.ReactNode }) {
  // Drop cap via ::first-letter on the paragraph
  return (
    <>
      <style>{`
        .ote-dropcap::first-letter {
          font-family: ${SERIF};
          font-weight: 600;
          font-size: 4.4em;
          line-height: 0.86;
          float: left;
          padding: 0.06em 0.12em 0 0;
          color: ${PAPER};
        }
      `}</style>
      <p
        className="ote-dropcap"
        style={{
          fontFamily: SERIF,
          fontSize: "1.075rem",
          lineHeight: 1.72,
          color: PAPER,
          margin: "0 0 1.4rem",
        }}
      >
        {children}
      </p>
    </>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        margin: "2.4rem 0",
        padding: "0 0 0 1.4rem",
        borderLeft: `2px solid ${ACCENT}`,
        fontFamily: SERIF,
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "1.35rem",
        lineHeight: 1.45,
        color: PAPER,
        letterSpacing: "-0.005em",
      }}
    >
      {children}
    </blockquote>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        color: PAPER,
        textDecoration: "underline",
        textDecorationColor: ACCENT,
        textDecorationThickness: 1.5,
        textUnderlineOffset: 3,
      }}
    >
      {children}
    </a>
  );
}

function Fn({ n }: { n: string }) {
  return (
    <sup>
      <a
        href={`#note-${n}`}
        id={`ref-${n}`}
        style={{
          fontFamily: MONO,
          color: ACCENT,
          textDecoration: "none",
          fontSize: "0.7em",
          padding: "0 0.15em",
          fontWeight: 600,
        }}
      >
        [{n}]
      </a>
    </sup>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SUBSYSTEMS TABLE — clean, minimal, restrained.
// ─────────────────────────────────────────────────────────────────────
function Subsystems() {
  const rows: [string, string, string][] = [
    ["Desire Engines", "Deleuze & Guattari; Baudrillard", "Content surfaces that generate desire-objects calibrated to the occupant's response profile."],
    ["Consent Loops", "Foucault; the legal-positivist tradition", "Ritualized agreement architecture through which the occupant's continued participation is repeatedly legitimized."],
    ["Compliance Monitors", "Foucault; Bentham (the panopticon, distributed)", "Continuous behavioral surveillance and correction systems that keep the occupant within productive parameters."],
    ["Surplus Reservoirs", "Marx, transposed; Zuboff", "Data and capital aggregation systems where the apparatus stores what it has extracted."],
    ["Feedback Rituals", "Klein; Winnicott; the gambling-machine literature", "Micro-rewards and acknowledgments that reinforce the occupant's continued participation."],
    ["Affective Signal Translators", "Preciado; Damasio; the affective-computing literature", "Biometric and neuro-monitoring systems that read the occupant's interior states and feed them to the apparatus's control logic."],
    ["Algorithmic Libido Governors", "Lyotard; Berardi; the cybernetics tradition", "Macro-level systems that modulate desire's intensity across the population to maintain extraction and stability."],
  ];
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: "1.4rem 0 2rem",
        borderTop: `1px solid ${RULE}`,
      }}
    >
      {rows.map(([name, lineage, body], i) => (
        <li
          key={i}
          style={{
            padding: "0.9rem 0",
            borderBottom: `1px solid ${RULE}`,
            display: "grid",
            gridTemplateColumns: "2rem 1fr",
            gap: "1rem",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.7rem",
              color: ACCENT,
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: "1.05rem",
                color: PAPER,
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: "0.95rem",
                color: PAPER_DIM,
                lineHeight: 1.55,
                marginBottom: 6,
              }}
            >
              {body}
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                color: MUTED,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Inheritance: {lineage}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ─────────────────────────────────────────────────────────────────────
// LOOP DIAGRAM — the ouroboros, treated as a functional schematic
// ─────────────────────────────────────────────────────────────────────
function LoopDiagram() {
  return (
    <figure style={{ margin: "2rem 0 2.4rem" }}>
      <svg
        viewBox="0 0 600 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Diagram of the closed-loop libidinal economy. The occupant produces output that becomes the apparatus's input, which the apparatus modulates and returns to the occupant as desire."
      >
        {/* The loop — an ellipse */}
        <ellipse
          cx="300"
          cy="150"
          rx="220"
          ry="100"
          fill="none"
          stroke={PAPER}
          strokeWidth="0.8"
          opacity="0.7"
        />
        {/* Direction arrows on the loop */}
        <polygon points="520,150 510,144 510,156" fill={ACCENT} />
        <polygon points="80,150 90,144 90,156" fill={ACCENT} />

        {/* Subject node */}
        <circle cx="80" cy="150" r="36" fill="none" stroke={PAPER} strokeWidth="1" />
        <text x="80" y="155" textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="14" fill={PAPER}>
          subject
        </text>

        {/* Apparatus node */}
        <circle cx="520" cy="150" r="36" fill="none" stroke={PAPER} strokeWidth="1" />
        <text x="520" y="155" textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize="14" fill={PAPER}>
          apparatus
        </text>

        {/* Labels above and below */}
        <text x="300" y="38" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={ACCENT} letterSpacing="0.22em">
          PSYCHIC SURPLUS · OUTPUT
        </text>
        <text x="300" y="272" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={ACCENT} letterSpacing="0.22em">
          MODULATED DESIRE · RETURN
        </text>

        {/* Caption under */}
      </svg>
      <figcaption
        style={{
          marginTop: "0.6rem",
          fontFamily: MONO,
          fontSize: "0.7rem",
          color: MUTED,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Fig. 1 · The closed loop · subject and apparatus, with no outside
      </figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────
// PHASE DIAGRAM — OHCOSE as a horizontal life-stage bar
// ─────────────────────────────────────────────────────────────────────
function PhaseDiagram() {
  const phases: [string, string][] = [
    ["O", "Onboarding"],
    ["H", "Habituation"],
    ["C", "Calibration"],
    ["O", "Occupancy"],
    ["S", "Stewardship"],
    ["E", "Estate"],
  ];
  return (
    <figure style={{ margin: "2rem 0 2.4rem" }}>
      <svg
        viewBox="0 0 600 140"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Diagram of the OHCOSE six-phase service architecture, rendered as a horizontal life-stage bar from Onboarding to Estate."
      >
        {/* Horizontal baseline */}
        <line x1="40" y1="80" x2="560" y2="80" stroke={PAPER} strokeWidth="0.8" opacity="0.7" />
        {/* Direction arrow */}
        <polygon points="568,80 558,74 558,86" fill={ACCENT} />

        {phases.map(([letter, name], i) => {
          const x = 60 + (i * 500) / 5;
          return (
            <g key={i}>
              <circle cx={x} cy="80" r="18" fill={BG} stroke={PAPER} strokeWidth="1" />
              <text
                x={x}
                y="86"
                textAnchor="middle"
                fontFamily={SERIF}
                fontWeight="600"
                fontSize="16"
                fill={PAPER}
              >
                {letter}
              </text>
              <text
                x={x}
                y="120"
                textAnchor="middle"
                fontFamily={MONO}
                fontSize="9"
                fill={MUTED}
                letterSpacing="0.18em"
                style={{ textTransform: "uppercase" } as React.CSSProperties}
              >
                {name.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Begin / end labels */}
        <text x="40" y="48" fontFamily={MONO} fontSize="9" fill={ACCENT} letterSpacing="0.22em">
          FITTING
        </text>
        <text x="560" y="48" textAnchor="end" fontFamily={MONO} fontSize="9" fill={ACCENT} letterSpacing="0.22em">
          POST-MORTEM CONTINUITY
        </text>
      </svg>
      <figcaption
        style={{
          marginTop: "0.6rem",
          fontFamily: MONO,
          fontSize: "0.7rem",
          color: MUTED,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Fig. 2 · OHCOSE · six phases of the occupant&apos;s lifecycle
      </figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────
// LINEAGE DIAGRAM — six iterations across 160 years
// ─────────────────────────────────────────────────────────────────────
function LineageDiagram() {
  const lineage: [string, string][] = [
    ["1865", "Labor Compensator"],
    ["1900", "Efficiency Enhancer"],
    ["1925", "Dynamic Dynamo"],
    ["1955", "Knowledge Chair"],
    ["1985", "Virtual Ouroboros"],
    ["2024", "Ouroboros Life System"],
  ];
  return (
    <figure style={{ margin: "2rem 0 2.4rem" }}>
      <svg
        viewBox="0 0 600 160"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Diagram of the apparatus's six-iteration lineage across 160 years, from the Labor Compensator (1865) to the Ouroboros Life System (2024)."
      >
        <line x1="40" y1="70" x2="560" y2="70" stroke={PAPER} strokeWidth="0.8" opacity="0.55" />
        {lineage.map(([year, name], i) => {
          const x = 50 + (i * 500) / 5;
          return (
            <g key={i}>
              <line x1={x} y1="62" x2={x} y2="78" stroke={ACCENT} strokeWidth="1" />
              <text x={x} y="50" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={PAPER} letterSpacing="0.04em">
                {year}
              </text>
              <text
                x={x}
                y="100"
                textAnchor="middle"
                fontFamily={SERIF}
                fontStyle="italic"
                fontSize="11"
                fill={PAPER_DIM}
              >
                {name}
              </text>
            </g>
          );
        })}
        <text x="40" y="138" fontFamily={MONO} fontSize="9" fill={MUTED} letterSpacing="0.18em" style={{ textTransform: "uppercase" } as React.CSSProperties}>
          Reconstruction · See note 18 on the speculation
        </text>
      </svg>
      <figcaption
        style={{
          marginTop: "0.6rem",
          fontFamily: MONO,
          fontSize: "0.7rem",
          color: MUTED,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Fig. 3 · The 160-year lineage of integration devices
      </figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────
// NOTES — academic-apparatus footnotes
// ─────────────────────────────────────────────────────────────────────
const NOTES: { n: string; body: React.ReactNode }[] = [
  {
    n: "1",
    body: (
      <>
        OHCOSE is the working name for the six-phase lifecycle model
        I have been developing across the project&apos;s{" "}
        <Link href="/ohcose">ohcose</Link> route. The phases are
        treated as a research apparatus, not a literal timeline.
      </>
    ),
  },
  {
    n: "2",
    body: <>See the project&apos;s <Link href="/closed-loop/the-argument">argument</Link> route, esp. <Link href="/closed-loop/the-argument/the-loop">&ldquo;The Loop.&rdquo;</Link></>,
  },
  {
    n: "3",
    body: <>Jean-François Lyotard, <em>Libidinal Economy</em> (1974); Iain Hamilton Grant&apos;s translation introduces the &ldquo;libido as method&rdquo; framing I am compressing here.</>,
  },
  {
    n: "4",
    body: <>Jean Baudrillard, <em>La société de consommation</em> (1970); the phrase is paraphrase, not citation.</>,
  },
  {
    n: "5",
    body: <>The term is mine but not original to me; the construction draws on Selimović 2024 (the gaming work) and the manuscripts in progress for <em>Theory, Culture &amp; Society</em> and <em>tripleC</em>.</>,
  },
  { n: "6", body: <>Herbert Marcuse, <em>One-Dimensional Man</em> (1964); the locus classicus on permission as containment.</> },
  { n: "7", body: <>Franco &ldquo;Bifo&rdquo; Berardi, <em>The Soul at Work</em> (2009); the panic-depressive cycle Berardi catalogues is, on my reading, the apparatus&apos;s most predictable failure mode.</> },
  { n: "8", body: <>Paul B. Preciado, <em>Testo Junkie</em> (2008); the pharmacopornographic regime is, in my reading, the apparatus&apos;s most candid registration of its own operation.</> },
  { n: "9", body: <>Bernard Stiegler, <em>Ce qui fait que la vie vaut d&apos;être vécue: De la pharmacologie</em> (2010); the pharmakon as constitutively double.</> },
  { n: "10", body: <>See the <Link href="/ohcose">ohcose</Link> route&apos;s individual life-stage entries.</> },
  { n: "11", body: <>Melanie Klein, &ldquo;Notes on Some Schizoid Mechanisms&rdquo; (1946); D. W. Winnicott, <em>Playing and Reality</em> (1971).</> },
  { n: "12", body: <>The seven-subsystem inventory follows my <em>Blueprint for a Global Consumer Libidinal Economy Apparatus</em>; the chair is the architectural form they integrate into.</> },
  { n: "13", body: <>Capture of Cadence is one of the project&apos;s named frameworks; see <Link href="/closed-loop/the-dynamics">the dynamics</Link>.</> },
  { n: "14", body: <>Adam D. I. Kramer, Jamie E. Guillory, Jeffrey T. Hancock, &ldquo;Experimental evidence of massive-scale emotional contagion through social networks,&rdquo; <em>PNAS</em> 111 (2014): 8788–8790. The paper is more useful, today, as exhibit than as method.</> },
  { n: "15", body: <>The 2020 reporting on Pornhub&apos;s recommendation engine is the most accessible documentation; the underlying mechanism has been described, in less domain-specific contexts, since the late 2000s.</> },
  { n: "16", body: <>The literature on the Chinese Social Credit System is uneven; I recommend the dispassionate operational accounts over the ideologically-driven ones in both directions.</> },
  { n: "17", body: <>See <Link href="/chair/the-system">the brochure</Link> for the apparatus&apos;s self-presentation of its lineage; see <Link href="/chair/archive/lineage-claim">the archive&apos;s lineage-claim entry</Link> for the dismantling.</> },
  { n: "18", body: <>The archive treats the lineage as a 21st-century marketing retcon assembled from unrelated patent records. I have left both readings on the table; the morphological argument is independent of the contemporaneous-development claim.</> },
  { n: "19", body: <>Tri-Axial Ouroboric Governance (TAOG) is one of the project&apos;s named frameworks. See the related work at <Link href="/closed-loop/the-mathematics">the mathematics</Link> for the formalization.</> },
];

function Notes() {
  return (
    <section
      style={{
        marginTop: "4rem",
        paddingTop: "2rem",
        borderTop: `1px solid ${RULE}`,
      }}
      aria-label="Notes"
    >
      <h3
        style={{
          fontFamily: MONO,
          fontSize: "0.7rem",
          letterSpacing: "0.28em",
          color: ACCENT,
          textTransform: "uppercase",
          fontWeight: 600,
          margin: "0 0 1.4rem",
        }}
      >
        Notes
      </h3>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {NOTES.map((note) => (
          <li
            key={note.n}
            id={`note-${note.n}`}
            style={{
              padding: "0.5rem 0",
              borderBottom: `1px solid ${RULE}`,
              display: "grid",
              gridTemplateColumns: "2.4rem 1fr",
              gap: "0.5rem",
              alignItems: "baseline",
            }}
          >
            <a
              href={`#ref-${note.n}`}
              style={{
                fontFamily: MONO,
                fontSize: "0.78rem",
                color: ACCENT,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              [{note.n}]
            </a>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: "0.94rem",
                lineHeight: 1.55,
                color: PAPER_DIM,
              }}
            >
              {note.body}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// ARTIFACTS — the three appended primary sources
// ─────────────────────────────────────────────────────────────────────
function Artifacts() {
  const items: { href: string; label: string; sub: string }[] = [
    {
      href: "/chair/the-system",
      label: "The Marketing Brochure",
      sub: "The apparatus speaking in its own voice — present-tense corporate copy. The chair as the OLS markets it.",
    },
    {
      href: "/chair/zine",
      label: "The Resistance Pamphlet",
      sub: "Anti-copyright protest media. The voice of the occupants who refused. Distributed clandestinely in cohort 2026.",
    },
    {
      href: "/chair/archive",
      label: "The Imperial Archive",
      sub: "Future-historian retrospective, c. 2197. Dispassionate scholarly entries on the apparatus's commercial period and its eventual proscription.",
    },
  ];
  return (
    <section
      style={{
        marginTop: "4rem",
        paddingTop: "2rem",
        borderTop: `1px solid ${RULE}`,
      }}
      aria-label="Appended artifacts"
    >
      <h3
        style={{
          fontFamily: MONO,
          fontSize: "0.7rem",
          letterSpacing: "0.28em",
          color: ACCENT,
          textTransform: "uppercase",
          fontWeight: 600,
          margin: "0 0 1.4rem",
        }}
      >
        Appended Artifacts
      </h3>
      <p
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.98rem",
          lineHeight: 1.6,
          color: PAPER_DIM,
          margin: "0 0 1.8rem",
        }}
      >
        Three documents are appended to the essay as primary sources.
        They are mutually contradictory by design; the essay above is the
        analytical apparatus that holds them together.
      </p>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li
            key={i}
            style={{
              padding: "1rem 0",
              borderTop: `1px solid ${RULE}`,
            }}
          >
            <a
              href={it.href}
              style={{
                display: "grid",
                gridTemplateColumns: "2.4rem 1fr",
                gap: "0.6rem",
                textDecoration: "none",
                color: PAPER,
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  color: ACCENT,
                  letterSpacing: "0.18em",
                  fontWeight: 700,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    color: PAPER,
                    marginBottom: 4,
                  }}
                >
                  {it.label}
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                    color: PAPER_DIM,
                  }}
                >
                  {it.sub}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
