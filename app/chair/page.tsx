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
          The chair is a figure. It does not exist as such. The apparatus
          it diagrams is everywhere. The premise of this essay is that
          the chair is the most lucid figure we have for what the
          contemporary libidinal economy has been becoming, and that
          looking at the chair is easier than looking at the apparatus
          directly.
        </P>
        <P>
          A few things follow. The closed-loop libidinal economy is not
          coming; it is here already, distributed across the platforms,
          devices, and consent rituals we inhabit. Its concentration
          into a single piece of furniture is useful as a thought
          experiment because the apparatus&apos;s distribution is what
          makes it hard to see. It has a developmental morphology &mdash;
          what I have elsewhere called{" "}
          <Link href="/chair/concepts#ohcose"><em>OHCOSE</em></Link>, a
          six-phase lifecycle that organizes the occupant&apos;s
          relation to it from onboarding to estate.<Fn n="1" /> And it
          is not new. The chair is the seventh seat in a 160-year
          lineage of devices that have iteratively worked the same
          design problem.
        </P>
        <P>
          So: half fiction, half aggregation. The fiction is the chair
          itself, which you can imagine sitting in. The aggregation is
          the apparatus, which every subsystem the chair contains
          actually instances, somewhere, today.
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
          The vocabulary already exists. The{" "}
          <em>closed-loop libidinal economy</em>, as I have argued
          elsewhere,<Fn n="2" /> is the economic-and-psychic system in
          which desire is captured and re-circulated by the same
          apparatus that produces it. The reader will recognize the
          structure from Lyotard, who proposed in 1974 that capitalism
          is most fruitfully approached &ldquo;through the lens of
          desire or libido&rdquo; rather than as a system of material
          production alone.<Fn n="3" /> What Lyotard did not yet have
          was the platform — the technical means by which desire&apos;s
          circulation could be measured, modeled, and modulated in real
          time. The chair has that. The contemporary platform is, in
          this sense, the chair with the furniture removed.
        </P>
        <P>
          The loop has two features that distinguish it from earlier
          forms of capture. It has no outside: every output the subject
          generates is fed back as input. And it is satisfaction-seeking
          but never satiating — Baudrillard&apos;s &ldquo;perpetual
          cycle of mild satisfaction and renewed longing&rdquo; made
          into architecture.<Fn n="4" />
        </P>
        <Pull>
          The chair is the platform with the furniture put back.
        </Pull>
      </Section>

      {/* §III — PSYCHIC SURPLUS */}
      <Section n="III" title="Psychic Surplus">
        <P>
          What is the apparatus extracting? Not labor, exactly. The
          Marxian construct of <em>surplus labor</em> — the work
          performed beyond the worker&apos;s reproductive needs,
          appropriated as profit — does not quite reach what the
          contemporary apparatus takes. We need a parallel construct.
          I have called it <em>psychic surplus</em>:<Fn n="5" /> the
          portion of our attention, affect, fantasy, and motivation
          that exceeds what is strictly required for biological survival
          and basic social function, and that can be captured and
          re-routed by the apparatus without (in the short term)
          compromising the subject&apos;s continued functioning.
        </P>
        <P>
          Psychic surplus is what the chair runs on. So do Meta&apos;s
          advertising network, TikTok&apos;s For-You feed, Pornhub&apos;s
          preference-assignment engine, and the dozen other platforms
          whose business models do not survive a closer reading. The
          chair is the same extraction concentrated into a piece of
          furniture, where what was diffuse becomes visible.
        </P>
        <P>
          The concept has antecedents. Marcuse&apos;s{" "}
          <em>repressive desublimation</em><Fn n="6" /> — controlled
          indulgence as a technique of pacification — describes the
          mechanism by which the apparatus permits the very desires it
          intends to manage. Berardi argues, more recently, that
          semiocapitalism &ldquo;puts the soul to work&rdquo; by
          converting interior life into productive raw material.
          <Fn n="7" /> Preciado&apos;s <em>pharmacopornographic
          regime</em> names the configuration in which sexual desire
          and biochemical modulation are direct inputs to capital
          accumulation.<Fn n="8" /> And Stiegler&apos;s pharmacology
          insists on the awkward asymmetry the project keeps tripping
          over: the same technical apparatus that extracts surplus is
          also the apparatus through which any counter-formation must
          be assembled. There is no neutral ground. Only better and
          worse pharmaka.<Fn n="9" />
        </P>
        <P>
          The chair sits at the convergence of all four. It permits,
          captures, and modulates simultaneously, and there is no
          neutral chair — the only thing it sells back to the occupant
          is the surplus the occupant produced, repackaged as comfort.
        </P>
      </Section>

      {/* §IV — OHCOSE */}
      <Section n="IV" title="OHCOSE">
        <P>
          The apparatus is not a single event but a developmental
          sequence. Following my earlier work,<Fn n="10" /> I name its
          six phases OHCOSE: <em>Onboarding</em>, <em>Habituation</em>,{" "}
          <em>Calibration</em>, <em>Occupancy</em>, <em>Stewardship</em>
          , <em>Estate</em>.
        </P>
        <PhaseDiagram />
        <P>
          The apparatus relates to its occupant differently in each
          phase. The occupant being <em>onboarded</em> — fitted with
          the apparatus, ringed, instated — encounters it as ceremony.
          In <em>habituation</em>, having begun to adapt to the
          apparatus&apos;s circadian and metabolic envelope, the
          occupant encounters it as background. <em>Calibration</em> is
          the phase in which the apparatus tunes its feedback to the
          occupant&apos;s measured response profile.{" "}
          <em>Occupancy</em>, the longest phase, is the one in which
          the occupant has effectively disappeared into the
          apparatus&apos;s operation. <em>Stewardship</em> is the
          maintenance of the occupant at the threshold of viability as
          productive output declines. <em>Estate</em> is the
          configuration that obtains after the occupant&apos;s biological
          cessation, in which the apparatus retains the productivity
          profile and consumer-preference record and continues to
          operate on behalf of brand partners under the Eternal-tier
          protocols.
        </P>
        <P>
          Each phase has its own extraction profile. The first three
          are high-yield relative to engagement (the apparatus is
          learning the occupant from what the occupant gives it). The
          middle is the steady-state. The last two yield less in real
          time but produce a residue — the occupant&apos;s data and
          preference profile — that outlives the occupant by decades.
        </P>
        <P>
          A note on object relations, because the apparatus depends on
          one. Klein&apos;s account of the paranoid-schizoid and
          depressive positions, and Winnicott&apos;s account of the
          transitional object,<Fn n="11" /> are still the best
          psychoanalytic descriptions I know of how a subject comes to
          treat a non-self object as constitutive of self. Somewhere
          between Onboarding and Calibration the apparatus becomes,
          for the occupant, a transitional object in Winnicott&apos;s
          sense: not quite the occupant, not quite the world, the
          medium through which the occupant encounters both. By
          Occupancy the transition is complete. The occupant cannot
          distinguish their preferences from the apparatus&apos;s
          modeling of their preferences. This is the configuration
          Winnicott most feared and the configuration the apparatus
          most depends on.
        </P>
      </Section>

      {/* §V — THE SEVEN SUBSYSTEMS */}
      <Section n="V" title="The Seven Subsystems">
        <P>
          The apparatus is, technically, an integration of seven
          subsystems. The naming is mine. The functions are real.
          <Fn n="12" /> The longer treatments are at{" "}
          <Link href="/chair/subsystems">subsystems</Link>; here I will
          just name them and indicate the theoretical inheritance each
          draws on.
        </P>
        <Subsystems />
        <P>
          The list of seven is misleading if read as a list of seven
          separate things. The subsystems are facets of one operation
          — the closed loop running — and the analytic question is
          rarely <em>which subsystem</em> but <em>which moment of the
          loop the occupant is currently inside</em>.
        </P>
        <P>
          The loop&apos;s temporal organization is the part I have
          spent the most time on. I call it{" "}
          <Link href="/chair/concepts#capture-of-cadence">
            <em>Capture of Cadence</em>
          </Link>
          .<Fn n="13" /> Earlier forms of labor extraction worked on
          quanta (hours worked, units produced); the contemporary
          apparatus works on cadence (the rhythm at which the
          occupant&apos;s life proceeds). The notification schedule,
          the autoplay envelope, the algorithmically-paced reveal — not
          content but tempo. The reason the shift matters is that
          cadence is not legible to the occupant the way labor-hours
          are. You can audit your hours. You cannot, generally, audit
          the rhythm at which your dopamine peaks have been entrained.
        </P>
      </Section>

      {/* §VI — THE APPARATUS ALREADY EXISTS */}
      <Section n="VI" title="The Apparatus Already Exists">
        <P>
          This is the essay&apos;s most important claim, and the easiest
          to get wrong. The chair is a figure; the apparatus is not. Let
          me list four well-documented cases; each is given a longer
          treatment under{" "}
          <Link href="/chair/precedents">precedents</Link>.
        </P>
        <P>
          <Link href="/chair/precedents/meta-emotional-contagion">
            Meta&apos;s 2014 emotional-contagion experiment
          </Link>{" "}
          demonstrated, in a peer-reviewed paper that the experimenters
          published openly, that algorithmic adjustment of users&apos;
          news feeds could induce specified emotional states in roughly
          one in fifty users.<Fn n="14" /> This is the apparatus&apos;s
          Desire Engine, operating at population scale, openly, without
          restraint. The methodological &ldquo;curiosity&rdquo; framing
          the paper received at the time of publication has aged badly.
        </P>
        <P>
          <Link href="/chair/precedents/tiktok-cadence">
            TikTok&apos;s recommendation engine
          </Link>
          , as analyzed by multiple researchers since 2018, infers
          users&apos; subconscious preferences from their micro-gestural
          responses &mdash; pause, replay, dwell. The platform has
          openly partnered with neuromarketing firms that use EEG and
          eye-tracking to optimize content engagement. This is the
          apparatus&apos;s Affective Signal Translator. The reader will
          note that the technical stack here is identical to that of an
          affective-computing medical device, while the regulatory
          framing is identical to that of an entertainment service.
        </P>
        <P>
          <Link href="/chair/precedents/pornhub-preference-assignment">
            Pornhub&apos;s recommendation engine
          </Link>{" "}
          has been documented to assign sexual preferences to users
          without their explicit consent, after fewer than a hundred
          video views.<Fn n="15" /> This is the apparatus&apos;s Desire
          Engine operating on the most intimate possible variable, in a
          form Preciado anticipated under the name pharmacopornographic
          capital. It differs from the Meta case only in domain.
        </P>
        <P>
          <Link href="/chair/precedents/social-credit-system">
            China&apos;s Social Credit System
          </Link>
          , in operational rollout from the mid-2010s, scores citizens
          against a behavioral compliance metric and routes the score
          into access to flights, internet bandwidth, housing, and
          credit.<Fn n="16" /> This is the apparatus&apos;s Compliance
          Monitor, in state form. The ostensibly different ideological
          context obscures the mechanism, which is identical to the
          platform-mediated compliance the reader is, today, in.
        </P>
        <P>
          The point of listing the four is that the apparatus this
          essay describes is not, in any meaningful sense, my
          projection. It is the apparatus the four cases catalog,
          assembled into one piece of furniture so that what is
          ordinarily distributed becomes a thing the reader can point
          at. The chair is the cataloging, not the prediction.
        </P>
      </Section>

      {/* §VII — THE 160-YEAR LINEAGE */}
      <Section n="VII" title="The 160-Year Lineage">
        <P>
          The apparatus has historical depth. Successive iterations,
          across 160 years, have worked the same integration problem
          for the period each was operating in. Here I will sketch
          them; each gets a longer treatment at{" "}
          <Link href="/chair/lineage">lineage</Link>.<Fn n="17" />
        </P>
        <LineageDiagram />
        <P>
          The <Link href="/chair/lineage/labor-compensator">
            <em>Labor Compensator</em>
          </Link>{" "}
          (1865) was the first: a hand-cranked mechanical aid sold to
          Reconstruction-era plantations to maintain productivity
          through the labor reorganization the period required. The{" "}
          <Link href="/chair/lineage/efficiency-enhancer">
            <em>Efficiency Enhancer</em>
          </Link>{" "}
          (1900) combined mechanized agriculture and human labor into
          a single seated unit, integrating the worker into the machine
          for the duration of the shift. The{" "}
          <Link href="/chair/lineage/dynamic-dynamo">
            <em>Dynamic Dynamo</em>
          </Link>{" "}
          (1925), the first electrified workstation, made the seated
          body a permanent locus of factory work. The{" "}
          <Link href="/chair/lineage/knowledge-chair">
            <em>Knowledge Chair</em>
          </Link>{" "}
          (1955) added telecommunications and an early data terminal,
          turning the seated worker into an information processor. The{" "}
          <Link href="/chair/lineage/virtual-ouroboros">
            <em>Virtual Ouroboros</em>
          </Link>{" "}
          (1985) fused physical and digital workspaces; work and
          leisure became indistinguishable. The{" "}
          <Link href="/chair/lineage/ouroboros-life-system">
            <em>Ouroboros Life System</em>
          </Link>{" "}
          (2024&ndash;present) is the integration in its
          currently-deployed form.
        </P>
        <P>
          The lineage is, I should say, partial. Two of the named
          devices (the Knowledge Chair, the Virtual Ouroboros) shipped
          only in tiny quantities. The developmental connections
          between iterations are reconstructed retrospectively rather
          than documented contemporaneously. The 22nd-century archive
          treats the lineage as a 21st-century marketing retcon, and
          there is something to that reading.<Fn n="18" /> But the
          morphological argument is independent of the
          contemporaneous-development one. The integration problem —
          how to seat the laboring subject inside the apparatus that
          extracts from them — has been the design problem across all
          six iterations, whether or not the iterations were
          historically aware of one another. The lineage essays go into
          the verification in detail; I have allowed the brochure to
          be wrong where it is wrong and to be more right than I
          expected where it is.
        </P>
      </Section>

      {/* §VIII — TRI-AXIAL OUROBORIC GOVERNANCE */}
      <Section n="VIII" title="Tri-Axial Ouroboric Governance">
        <P>
          The apparatus loops desire along three axes simultaneously,
          and a great deal of the existing literature, in my reading,
          misses the apparatus by engaging only one of them. The
          framework I have developed to keep all three in view is{" "}
          <Link href="/chair/concepts#tri-axial-ouroboric-governance">
            <em>Tri-Axial Ouroboric Governance</em>, TAOG for short
          </Link>
          .<Fn n="19" /> Its three axes are <em>temporal</em> (the
          cadence at which desire is produced and answered),{" "}
          <em>economic</em> (the metering and pricing of attention and
          affect), and <em>affective</em> (the modulation of which
          emotions the subject is permitted, or invited, to feel).
        </P>
        <P>
          Each axis is, individually, well-charted. The temporal axis
          is Stiegler&apos;s territory; the economic, Berardi&apos;s;
          the affective, Preciado&apos;s and Marcuse&apos;s. TAOG&apos;s
          claim is that the contemporary apparatus runs all three at
          once, at the same scale, and that any analysis engaging only
          one will miss the apparatus by exactly the margin of the
          other two. (I have, in the past, made this mistake more than
          once myself. Most of what I have written before 2022 engaged
          the affective axis and the economic axis and was confused
          about the temporal one.)
        </P>
        <P>
          The chair is the diagram. Its Affective Monitoring subsystem
          reads the occupant&apos;s emotion in real time (axis c). Its
          Productivity Feedback subsystem meters the occupant&apos;s
          output and is calibrated against the occupant&apos;s
          service-credit balance (axis b). The OHCOSE service
          architecture organizes the occupant&apos;s life-stage cadence
          (axis a). You cannot disentangle the subsystems and still
          have the apparatus. The chair is the apparatus made
          architectural, in part, because architecture makes the
          integration visible.
        </P>
      </Section>

      {/* §IX — REFUSAL */}
      <Section n="IX" title="Refusal">
        <P>
          A politics is owed. The argument so far has been that the
          chair is useful as a figure because it makes the apparatus
          visible — but visibility is not refusal, and the rest of
          this essay is about what to do once you have it. The longer
          treatment of what follows is at{" "}
          <Link href="/chair/refusal">/chair/refusal</Link>, where I
          add a fourth move and am more direct about what I have and
          have not managed to do myself. Here I will sketch the first
          three.
        </P>
        <P>
          The first is the easiest. The apparatus&apos;s grip on us is
          secured by the cumulative effect of small consents — the
          cookie banner, the terms-of-service update, the permission
          prompt. These are not innocuous. They are the
          apparatus&apos;s primary legitimation mechanism. Refusing
          them does not destroy the apparatus; it does forecloses its
          legal alibis. The political horizon is modest. The practice
          is, even so, rarely undertaken, which is informative on its
          own.
        </P>
        <P>
          The second is harder, and the one I think matters most. The
          apparatus&apos;s deepest grip is temporal. To withhold
          attention at the moment the apparatus has scheduled it to
          fire — to be slow when speed is demanded, silent when noise
          is rewarded, inattentive when engagement is metered — is to
          interrupt the cadence by which the apparatus operates. The
          apparatus has a long history of pathologizing this kind of
          practice (sloth, ennui, depression, disengagement); the
          rebranding is the apparatus&apos;s tribute to the
          practice&apos;s effectiveness. It does not feel like
          resistance. It feels like inefficiency. Both readings are
          accurate.
        </P>
        <P>
          The third is the costliest. The apparatus&apos;s promise —
          closed-loop comfort, friction eliminated — is its deepest
          seduction, because friction is unpleasant. The friction the
          apparatus eliminates is frequently the very friction in
          which non-apparatus-mediated life consists: the encounter
          with the unfamiliar, the labor of coordinating with other
          people whose desires have not yet been algorithmically
          modeled, the obligation to be inefficient for someone
          else&apos;s sake. Accepting friction is, in this sense, the
          most thorough refusal. It is also the one I have struggled
          with most in my own practice, and I would rather not lecture
          on it from a position I have not earned.
        </P>
        <P>
          None of the three is adequate on its own. The interior they
          collectively defend is small. But the smallness is the point.
          What the moves preserve is the capacity to recognize the
          apparatus as an apparatus, and to act on the recognition. That
          recognition is what the rest of this project — the
          subsystems, the precedents, the lineage, the artifacts — has
          been trying to make available.
        </P>
        <Pull>
          The smallness is the point.
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

      {/* COMPANIONS */}
      <Companions />

      {/* ARTIFACTS */}
      <Artifacts />
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────
// COMPANIONS — sub-essays that extend specific sections
// ─────────────────────────────────────────────────────────────────────
function Companions() {
  const items: { href: string; label: string; sub: string; section: string }[] = [
    {
      href: "/chair/subsystems",
      label: "Seven Subsystems",
      sub: "Long-form treatment of each subsystem named in §V. Seven essays, around five thousand words.",
      section: "§ V Extended",
    },
    {
      href: "/chair/precedents",
      label: "Precedents",
      sub: "The four actually-existing proto-apparatuses §VI names — Meta's 2014 experiment, TikTok's cadence engine, Pornhub's preference-assignment engine, the Chinese Social Credit System. Three thousand words across four cases.",
      section: "§ VI Extended",
    },
    {
      href: "/chair/lineage",
      label: "Lineage",
      sub: "Six iterations across 160 years, with the brochure's claims checked against the historical record. About forty-five hundred words.",
      section: "§ VII Extended",
    },
    {
      href: "/chair/refusal",
      label: "On Refusal",
      sub: "Longer treatment of §IX. Four moves rather than three, and a more honest accounting of what each can and cannot do.",
      section: "§ IX Extended",
    },
    {
      href: "/chair/concepts",
      label: "Concepts",
      sub: "Working definitions of the project's named frameworks: Closed-Loop Libidinal Economy, Psychic Surplus, OHCOSE, TAOG, IGLF, Capture of Cadence, Libidinal Ouroboros, Satisfaction Loops.",
      section: "Reference",
    },
  ];
  return (
    <section
      style={{
        marginTop: "4rem",
        paddingTop: "2rem",
        borderTop: `1px solid ${RULE}`,
      }}
      aria-label="Companion essays"
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
        Companion Essays
      </h3>
      <p
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.98rem",
          lineHeight: 1.6,
          color: PAPER_DIM,
          margin: "0 0 1.6rem",
        }}
      >
        Sections of this essay are extended into companion essays. Each
        is written in the same analytical voice and at greater depth
        than the main argument permits. The reader who finds a particular
        section thin should follow the companion link there.
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
                gridTemplateColumns: "5.5rem 1fr",
                gap: "0.6rem",
                textDecoration: "none",
                color: PAPER,
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.66rem",
                  color: ACCENT,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {it.section}
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
  const rows: [string, string, string, string][] = [
    ["desire-engines", "Desire Engines", "Deleuze & Guattari; Baudrillard; McLuhan", "Content surfaces that generate desire-objects calibrated to the occupant's response profile."],
    ["consent-loops", "Consent Loops", "Foucault; the legal-positivist tradition", "Ritualized agreement architecture through which the occupant's continued participation is repeatedly legitimized."],
    ["compliance-monitors", "Compliance Monitors", "Foucault; Bentham; Zuboff", "Continuous behavioral surveillance and correction systems that keep the occupant within productive parameters."],
    ["surplus-reservoirs", "Surplus Reservoirs", "Marx, transposed; Zuboff", "Data and capital aggregation systems where the apparatus stores what it has extracted."],
    ["feedback-rituals", "Feedback Rituals", "Klein; Winnicott; Skinner; the casino industry", "Micro-rewards and acknowledgments that reinforce the occupant's continued participation."],
    ["affective-signal-translators", "Affective Signal Translators", "Preciado; Damasio; the affective-computing literature", "Biometric and neuro-monitoring systems that read the occupant's interior states and feed them to the apparatus's control logic."],
    ["algorithmic-libido-governors", "Algorithmic Libido Governors", "Lyotard; Berardi; the cybernetics tradition", "Macro-level systems that modulate desire's intensity across the population to maintain extraction and stability."],
  ];
  return (
    <>
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: "1.4rem 0 1.4rem",
          borderTop: `1px solid ${RULE}`,
        }}
      >
        {rows.map(([slug, name, lineage, body], i) => (
          <li
            key={i}
            style={{
              borderBottom: `1px solid ${RULE}`,
            }}
          >
            <a
              href={`/chair/subsystems/${slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "2rem 1fr auto",
                gap: "1rem",
                padding: "0.9rem 0",
                textDecoration: "none",
                color: "inherit",
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
                    fontSize: "1.08rem",
                    fontStyle: "italic",
                    color: PAPER,
                    fontWeight: 600,
                    marginBottom: 4,
                    letterSpacing: "-0.005em",
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
              <span
                aria-hidden
                style={{
                  fontFamily: MONO,
                  fontSize: "0.78rem",
                  color: ACCENT,
                  letterSpacing: "0.06em",
                }}
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ol>
      <p
        style={{
          marginTop: "0.6rem",
          marginBottom: "1.6rem",
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          lineHeight: 1.55,
        }}
      >
        Each subsystem is given a long-form treatment at{" "}
        <Link href="/chair/subsystems">/chair/subsystems</Link>. The
        essays follow a common skeleton (Figure / Definition / Mechanism /
        Inheritance / In the Chair / A Note) so the seven read as a series.
      </p>
    </>
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
