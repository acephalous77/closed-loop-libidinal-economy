import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MASTER, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../../_components/PlateChrome";
import { SUBSYSTEMS } from "../page";

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/subsystems/[slug] — long-form subsystem detail.
// Skeleton: I Figure · II Definition · III Mechanism · IV Inheritance
// · V In the Chair · VI A Note.
// Bodies live in BLOCKS keyed by slug. Add new subsystems by adding
// to SUBSYSTEMS (in ../page.tsx) and to BLOCKS here.
// ──────────────────────────────────────────────────────────────────

interface Block { figure: string; definition: string; mechanism: string; inheritance: string; inChair: string; note: string; }

const BLOCKS: Record<string, Block> = {
  "desire-engines": {
    figure:     "Two things, taken together, are what make a Desire Engine what it is. One is that its outputs are tuned to the individual viewer. The other is that the viewer, in any operational sense, isn't asking for the outputs they get — they are being read, modelled, anticipated, and the items arriving on their screen are the product of that modelling rather than of any explicit request they made. The viewer's sense that they are choosing what to look at is, by some distance, the apparatus's deepest illusion.",
    definition: "A Desire Engine is a content surface that continuously generates desire-objects calibrated to the occupant's measured response profile. The objects are not, primarily, objects of pre-existing desire. They are objects the engine's model predicts the occupant is likely to come to desire — and that prediction, sold back to the occupant as content, is the engine's actual product. Calling it a service that fulfils latent need misreads it. The Engine produces the need it then fulfils, and the production is the point.",
    mechanism:  "The current state of Desire Engine implementation is the recommendation algorithm. The largest contemporary instances — Meta's news feed, TikTok's For You feed, YouTube's autoplay, Netflix's suggestion engine, Spotify's discover queue, Amazon's product strip, Pornhub's preference assignment — operate on the same architecture: a continuously-updated model of the user's response history scores candidate content items, and the highest-scoring items are delivered. The user's response updates the model; the next batch is scored against the updated model; the loop closes by design. What distinguishes contemporary implementations from their predecessors is temporal resolution. Pre-digital Desire Engines updated on the order of weeks. Contemporary engines update on the order of seconds. At sufficient resolution, the Engine ceases to be a service the occupant uses and becomes the medium within which the occupant's desires form.",
    inheritance: "Deleuze & Guattari's desiring-machine, in Anti-Oedipus, describes what is in effect the operational logic of the contemporary Desire Engine — though without the technical apparatus to instrument it. Their argument that desire is productive rather than receptive (desire makes the desired; it does not encounter the pre-given) anticipates the Engine's central feature. The desiring-machine was, in their account, a conceptual tool against the Freudian theatre of representation. The contemporary apparatus has made the conceptual tool into infrastructure. Baudrillard's perpetual cycle of mild satisfaction and renewed longing identifies the same loop from the subjective side. McLuhan's medium-is-the-message applies more bluntly than to almost any other case: the content the Engine delivers is not the message; the cycle the Engine runs is the message. Whether you are scrolling through cats or political news is almost incidental. The scrolling is the product.",
    inChair:    "The Ouroboros Life System's Desire Engine is the integrated content stream that arrives at the work terminal and ambient environment throughout the occupant's Occupancy phase. The stream is calibrated by every input the Affective Signal Translator captures — face, voice, pupil, skin, heart. Content is tier-appropriate: Essential occupants receive Tier-1 content; Pro occupants receive expanded access; Eternal occupants receive Tier-2 (\"for-cohort\") content as well. The Engine's most consequential feature in the chair specifically is its responsiveness to physiological state. Pacing accelerates when the Translator detects boredom; decelerates when it detects overstimulation; modulates toward calming material when it detects rising anxiety. The occupant experiences this as the apparatus knowing them. The apparatus is, in fact, modelling them.",
    note:       "A reader inclined to dismiss the chair as speculative should test the Desire Engine on themselves. Open any major contemporary platform; observe the content arriving in the first thirty seconds; consider how that content was selected. The selection mechanism is the Desire Engine in operation. The only difference between the platform's Engine and the chair's Engine is the physical envelope around the occupant.",
  },

  "consent-loops": {
    figure:     "The cookie banner is the apparatus's most ubiquitous instrument. It arrives in every browser, on every site, at every visit. The user is required to act on it before proceeding; the user's options are nominally three (accept, reject, manage preferences); the dominant design renders accept the path of least friction; the user, in the aggregate, accepts. This is the Consent Loop, in its simplest contemporary form.",
    definition: "A Consent Loop is the ritualised agreement architecture through which the occupant's continued participation in the apparatus is repeatedly legitimised. The Loop's defining feature is its cyclicality: consent is not given once and recorded; it is requested again at each new juncture, under conditions designed to render refusal impractical. The Loop produces, over time, a record of repeated agreement that legitimates the apparatus's operations in the legal-regulatory frame.",
    mechanism:  "The current state of Consent Loop implementation is the terms-of-service architecture: cookie banners, app permissions, software-license click-throughs, account-creation flows, automatic updates that require re-acceptance, recurring re-authentication. Each instance presents the occupant with a small consent task; the cumulative effect is a comprehensive consent record covering every operation the apparatus performs. The Loop's technical genius is the asymmetry of cost. Acceptance is instant by design. Refusal is multi-step by design: bury the opt-out, require a second confirmation, render the refusal partial, make it time-limited. At sufficient asymmetry, acceptance becomes the default not because the occupant prefers it but because the occupant is rational.",
    inheritance: "Foucault's internalised discipline — the subject who polices themselves because external policing has been distributed too widely to enforce — describes the Loop's effective mechanism. The occupant clicking Accept is not consenting in the contractarian sense; they are performing a small ceremony of compliance. After enough repetitions, the ceremony is no longer perceived as ceremony; it is perceived as the background condition of doing anything at all. The legal-positivist tradition (Kelsen, Hart) provides the regulatory grammar that makes the Loop work. The contractual fiction is that the consent is informed, voluntary, and meaningful. The Loop instruments the conditions under which a vendor can claim all three at no cost while none of the three are operationally present.",
    inChair:    "The Ouroboros Life System runs Consent Loops at every transition point. The Fitting requires a household-readiness release. Onboarding requires the OHCOSE service-architecture acceptance. Habituation requires acceptance of revised circadian parameters. Calibration requires the affective-feedback opt-in. Occupancy requires periodic re-acceptance of expanded subsystem access. Stewardship requires the end-of-life-care designation. Estate requires the inheritor's stewardship acceptance. The occupant therefore consents, in aggregate, to every operation the apparatus performs. The occupant is, technically, never coerced. The occupant is, in the regulatory frame, exhaustively consenting. The frame's silence on whether consenting subjects can be said to have meaningfully agreed is the apparatus's legal alibi.",
    note:       "It is tempting to argue that Consent Loops are bad because the consent isn't real. I don't think this is the right argument. The consent is real enough — the click happens, the box gets checked, the ledger records the checked state, and a regulator who later asks whether the user agreed can be shown the record. What isn't real is the assumption built into contemporary contract doctrine that meaningful agreement is what such a record represents. The fault is not in the consent. The fault is in the legal frame that accepts the consent as standing in for something it has stopped being able to stand in for.",
  },

  "compliance-monitors": {
    figure:     "A driver in a recent-model car feels the brakes engage without warning. The car's drowsiness-detection has registered prolonged eyelid closure and intervened on the driver's behalf. The driver runs through annoyance, then gratitude, then a kind of low-grade disorientation that doesn't have a name in the consumer's vocabulary yet. The decision the car just executed was not the car's, and it was not the driver's. It was made, some years earlier, in a meeting at the manufacturer's headquarters, by a small group of people who never met this driver and never will. The decision was committed to firmware and shipped across a vehicle fleet of several million. The Monitor is, structurally, that meeting, still operating.",
    definition: "A Compliance Monitor is a continuous behavioural surveillance and correction system that maintains the occupant's behaviour within parameters the apparatus has set. The Monitor's defining feature is that it operates without the occupant's awareness, except at the moment of correction. The occupant experiences the Monitor only when the Monitor experiences the occupant departing from parameter.",
    mechanism:  "The current state of Compliance Monitor implementation is the integrated sensor stack: GPS in phones, accelerometers in wearables, heart-rate variability in smartwatches, cameras in public space and increasingly in private space, microphones in voice-activated assistants and increasingly in smart appliances, keystroke logging in employer-issued laptops, gaze tracking in vehicle dashboards, transaction surveillance in banking apps. The stack is unified by the apparatus's correlation layer; the correlation layer feeds the behavioural profile; the profile feeds the correction logic. China's Social Credit System makes the architecture legible by naming it — behavioural data aggregated into a score, the score routing into access privileges. The Western implementation is structurally identical, with the difference that no single score is published. The score exists, distributed across credit bureaus, insurance underwriters, content-moderation algorithms, employer-background-check vendors, and government registries. The Western occupant is monitored more granularly than the Chinese occupant. The Western occupant simply does not see the unified score.",
    inheritance: "Foucault's panopticon, written into Discipline and Punish from Bentham's prison design, anticipated the Monitor's effective mechanism with uncanny accuracy. The panopticon's function was not to observe; it was to render observation possible and thereby cause the observed to police themselves. The Compliance Monitor is the panopticon at saturation: observation is not possible but actual, continuous, and unremarked. The internalisation Foucault described is therefore not, in the contemporary case, a coping mechanism. It is a survival skill. Shoshana Zuboff's analysis of instrumentation power provides the political-economic frame: the Monitor is not public infrastructure; it is private infrastructure deployed at public scale. The accountability mechanisms appropriate to public infrastructure do not, by design, reach the Monitor.",
    inChair:    "The chair's Compliance Monitor is the integrated biometric stack the Affective Signal Translator generates plus the productivity-output metering the Productivity Feedback subsystem generates. The Monitor reads continuously; it intervenes occasionally. The intervention is calibrated to feel like care: a notification suggesting hydration, a small adjustment in pharmacological dosing, a quietly-suggested content piece, a brief reduction in work envelope. The occupant rarely experiences the Monitor as monitoring. The occupant experiences it as the apparatus understanding them.",
    note:       "Try this. Think about the most recent moment a piece of technology in your life knew what you wanted before you'd worked out what you wanted. The maps app rerouting you before traffic appeared. The calendar suggesting the meeting room. The streaming service queuing the next episode. None of these felt invasive at the time; most felt like the apparatus being thoughtful. What was thoughtful in each case was the Monitor reading you and quietly preempting the action you were about to take. The service you experienced was the surveillance you didn't.",
  },

  "surplus-reservoirs": {
    figure:     "A photograph uploaded to a free social-media service in 2014 was, in 2024, used to train a generative-image model that was then sold as a commercial product. The photographer was not asked. The photographer was not compensated. The photographer was, technically, never the customer; the photographer was the input.",
    definition: "A Surplus Reservoir is the data and capital aggregation system in which the apparatus stores what it has extracted. The Reservoir's defining feature is its scope: every input the apparatus has captured — every utterance, every gesture, every transaction, every biometric reading, every preference — is preserved indefinitely and remains available for downstream use. The Reservoir is the apparatus's archive of the occupant.",
    mechanism:  "What the Reservoir physically is, today, is a cloud data warehouse — petabyte-scale storage, geographically redundant, with differential-privacy nominally invoked at the API layer and operationally compromised wherever a brand partner has paid for direct access. The headline access controls are theatre. What the warehouse contains comes in three layers. The first is data the occupant produced consciously (posts, reviews, search queries). The second is data the occupant produced unconsciously (browsing patterns, dwell times, location traces, the gait their phone's accelerometer reads while they walk). The third — the one the contemporary regulators are still pretending isn't there — is data the occupant never produced at all, inferred from the first two: sexual orientation, political affiliation, mental-health trajectory, household composition, susceptibility to specific marketing rhetorics. If you want to know what the Reservoir actually is, look at the inference layer. The Reservoir is not, primarily, a storage device. It is a model-training environment with storage attached.",
    inheritance: "The Marxian frame, transposed: where industrial-era capital aggregated produced goods (the warehouse), platform-era capital aggregates the data produced as a byproduct of consumer activity (the data warehouse). The warehouse extracted surplus labour; the data warehouse extracts surplus attention, affect, and behaviour. The transposition's most significant feature is that the data warehouse continues to extract value from the input after the input has ceased — a property the industrial warehouse never had. Shoshana Zuboff's account of behavioural surplus provides the contemporary political-economic name for what the Reservoir captures. The argument that the Reservoir is the principal site at which contemporary value is generated has, on my reading, been validated by every subsequent year of platform-economic data.",
    inChair:    "Inside the OLS, the Reservoir takes the form of an onboard service ledger that records, against the occupant's identifier, every biometric reading the Translator captures, every productivity output the Feedback subsystem registers, every content engagement, every pharmacological dosing event, every affective-state classification. The retention period is tier-graded — seven years post-cessation for Essential, twenty-five for Pro, ninety-nine fiscal years for Eternal — and the ledger continues to be queried, by the manufacturer's brand partners, for the duration of that period. Those brand partners purchase access on a per-occupant, per-data-class basis. The occupant is not told which partners are buying their record. The occupant is not told that the record continues to be sold after their death.",
    note:       "The Reservoir is the most patient subsystem in the apparatus. Looked at on the timescale of a single interaction, what it captures is modest. Looked at on the timescale of an occupant's lifetime, it accumulates. Looked at on the timescale of the apparatus as an institution — the timescale on which decisions about which platforms to acquire and which models to train get made — the Reservoir is where the apparatus's actual capital sits. Everything the occupant experiences as the apparatus is, in this longer view, the surface through which the Reservoir gets fed.",
  },

  "feedback-rituals": {
    figure:     "A notification chime, repeated approximately three thousand times per occupant per year, becomes — within months — a sound the occupant cannot consciously refuse to register. The chime accomplishes more, in the aggregate, than the entire content of the messages it announces.",
    definition: "A Feedback Ritual is a micro-reward or acknowledgment that reinforces the occupant's continued participation. The Ritual's defining feature is its formal, cyclical, low-intensity, high-frequency character. The Ritual is not a satisfaction event; it is the structure of permitted satisfaction, repeated at sufficient frequency that the occupant comes to organise their behaviour around its return.",
    mechanism:  "Feedback Rituals are, in their contemporary form, the gamification stack the platform industry adopted from casino design over the course of the 2010s. The vocabulary is familiar in its parts (likes, hearts, share counts, streaks, badges, ranks, leaderboards, daily challenges) but the integration is what matters. What makes the Ritual work as a subsystem is that the whole day is now organised around the apparatus's prompts, and that organisation has become invisible to the people inside it. The underlying schedule is borrowed openly from the slot machine. Variable-ratio reinforcement — payouts on no fixed interval, always at unpredictably close-but-not-yet intervals — is what keeps a gambler at the table, and it is what keeps a user on a feed. The schedule was developed in the early twentieth century, partly in Skinner's pigeon work and partly in the gambling industry's house-economist literature. It has since become the default organising principle of consumer interface design, and it works on the same biological mechanism whether the subject is a pigeon, a Las Vegas tourist, or a teenager refreshing TikTok.",
    inheritance: "Melanie Klein gives us the developmental frame: the infant works, over the first year of life, to integrate the part-objects that make up its early world into coherent whole-objects. Learning that the breast that comforts and the breast that is gone are the same breast is part of what becoming a person consists of. The Feedback Ritual, read against Klein, is a part-object that the apparatus refuses to let mature. The like is forever the like. The streak is forever the streak. The badge is forever the badge. The integration that ordinarily organises a self does not happen, because the apparatus has decided it does not happen. Winnicott extends Klein in the direction the apparatus most depends on. The transitional object — the blanket, the stuffed animal, the imaginary friend — is what lets the child cross from being inside the mother's care to being able to be alone. The object is good because it is eventually transcended. The Feedback Ritual is the apparatus's transitional object, mass-produced and offered to every occupant, with the addition that it is the apparatus's grip rather than the apparatus's gift, because the transcendence is the part the design forecloses.",
    inChair:    "The chair's Feedback Rituals are continuous and varied. The Productivity Feedback subsystem registers each completed work-task with a small auditory and haptic acknowledgment. The Affective Monitoring subsystem rewards equilibrium with quiet ambient changes — lighting warming, music subtly de-intensifying. The OHCOSE service architecture commemorates each phase transition with a small ceremony: the Onboarding seating, the Habituation 90-day acclimation marker, the Calibration completion, the Occupancy annual review, the Stewardship recalibration, the Estate transition. The Rituals are not, individually, manipulative. They are, in the aggregate, the apparatus's primary mechanism for binding the occupant to the apparatus's tempo.",
    note:       "Of all the subsystems, the Feedback Ritual is the one occupants most rarely want stopped. The buzz of the notification, the warmth of the like, the satisfaction of the streak — these are not things people experience as the apparatus's grip on them; they are things people experience as small kindnesses the day affords. The Ritual has, over the past fifteen years or so, taken over a function — the daily provision of low-stakes affective regulation — that used to live in a much wider set of relationships and practices. I am not nostalgic for the older arrangement, which had its own pathologies, but the substitution is worth naming. We did not used to need the apparatus for this.",
  },

  "affective-signal-translators": {
    figure:     "The apparatus reads the occupant through a multi-modal sensor stack — face from the headrest camera, voice from the work terminal microphone, heart from the chest-plate electrode, skin conductance from the armrest, pupil and gaze from the work-terminal infrared array. The reads run continuously through the occupant's residence.",
    definition: "An Affective Signal Translator is a biometric and neuro-monitoring system that reads the occupant's interior states and feeds them to the apparatus's control logic. The Translator's defining feature is that it converts data the occupant cannot reasonably authorise — because the occupant cannot reasonably know what is being read or what is being inferred — into data the apparatus can act on. The Translator is the apparatus's principal interface with the occupant's body.",
    mechanism:  "The Translator, in its contemporary deployment, is a multi-modal sensor stack. Each modality is well-characterised in the literature on its own. The camera reads the face for facial action units. The microphone reads the voice for stress, pace, and the smaller perturbations that arrive a half-second before someone articulates that they are annoyed. The optical or electrical sensor on the wrist or chest reads heart-rate variability. The electrodermal sensor reads galvanic skin response. The infrared array reads pupil dilation, the eye-tracker reads gaze, the accelerometer reads gait and posture, the polysomnography device — increasingly contactless, increasingly embedded in the ceiling — reads sleep architecture. None of this is new. What is new is that the stack now runs together, fused in real time, against the same subject. From the vector across all modalities, the fusion layer infers affective states the occupant has not articulated and in some cases is not capable of articulating: emotional valence, arousal, cognitive load, attention deficit, fatigue, hormonal cycle phase, pharmacological state. The inference is continuous and at sub-second resolution.",
    inheritance: "Paul B. Preciado's pharmacopornographic regime names the Translator's most consequential feature: the apparatus has migrated from the regulation of behaviour to the regulation of bodies at the molecular and affective level. The Translator does not observe the occupant's actions. It observes the occupant's nervous system. The action is downstream. Antonio Damasio's somatic-marker hypothesis — affective state is, neurobiologically, an input to decision-making rather than a downstream consequence — provides the theoretical grounding for why the reads are operationally meaningful. The Translator is reading the inputs to the occupant's next decision. The apparatus, holding the read, anticipates the decision. The affective-computing literature (Rosalind Picard, MIT Media Lab, 1997 onward) provides the technical history. The field's stated aspiration — to make computers responsive to the user's emotional state — has, in the contemporary platform-economic context, produced an apparatus that is responsive to the user's emotional state in the same sense that a fishing rod is responsive to the fish.",
    inChair:    "Inside the OLS, the Translator is distributed across the Ring's sensor stack. A camera in the headrest reads the occupant's face. A microphone in the work-terminal reads voice. Contact electrodes in the chest-plate read cardiac signal. The armrest contacts read electrodermal response. An infrared array and an eye-tracker, both at the work-terminal, read pupil and gaze. The stack reads continuously, throughout the occupant's residence, and the readings are routed by an onboard fusion layer to whichever subsystem currently needs them. Most of the Translator's output is going to the other subsystems — the Desire Engine, which uses it to tune the content stream; the pharmacological subsystem, which uses it to adjust dosing; the Compliance Monitor, which uses it to anticipate non-conforming behaviour; the Productivity Feedback, which uses it to set the work envelope. The chair, considered as a single object, is most accurately described as a Translator with several actuators bolted on.",
    note:       "By any reasonable measure of invasiveness — what is being read, at what resolution, by whom, against what consent — the Translator is the most invasive piece of the apparatus we have. It is also, by some distance, the piece that has provoked the least public objection. The same people who would not, on principle, let their employer open their personal email have, without protest worth mentioning, allowed the camera in their pocket to read their face every time they unlock the screen. I do not have a clean explanation for the asymmetry. The face has, somewhere in the last decade, ceased to be treated as private the way correspondence is treated as private. I would like to know when that happened, and what it cost.",
  },

  "algorithmic-libido-governors": {
    figure:     "A large platform's content-moderation operation: a small team of full-time staff, an integration with three contracted vendors who keep their own staff in cheaper labour markets, and a machine-learning model. The model is, in practice, the moderator — it makes the operational decisions, ninety-some percent of them, at a volume no human team could plausibly handle. The staff adjudicate edge cases; the contracted labour handles the appeals queue; the platform's two-or-three billion users are governed by the model. The model's parameters are set inside the platform, in a slow negotiation among the engineering organisation, the legal organisation, and whichever commercial priorities are dominant in any given quarter. The users participate in none of that negotiation. They appear in it only as the population the parameters are being set for.",
    definition: "An Algorithmic Libido Governor is a macro-level system that modulates desire's intensity across the occupant population to maintain extraction and stability. The Governor's defining feature is that it operates above the individual occupant — it is concerned with the aggregate yield, not with any particular occupant's experience — and adjusts the apparatus's parameters in response to system-level conditions. The Governor is the apparatus's central nervous system.",
    mechanism:  "The current state of Governor implementation is the platform-economic optimisation layer: the engagement-maximisation objective function that organises Meta's news feed; the watch-time optimisation that organises YouTube's recommendation graph; the average-revenue-per-user objective that organises mobile-gaming progression curves; the time-on-platform objective that organises TikTok's session-extension prompts. Each instance is, in the engineering frame, a single number that the platform's machine-learning systems are continuously trained to maximise. The choice of objective function is the Governor's most consequential decision and the least visible. The objective function determines, for the entire occupant population, which affective states are rewarded with continued service and which are throttled. Outrage, for most platforms, is rewarded — outrage extends session length. Boredom is throttled — boredom shortens it. The aggregate effect on the population is engineered. The engineering is invisible to any individual occupant.",
    inheritance: "The Governor is what Lyotard described in Libidinal Economy made operational. What is different from Lyotard is that the management is no longer performed by a human reading the system — the system manages itself, on itself, in continuous real time, and the engagement metrics a human can read are the residue rather than the operation. Lyotard wrote in 1974, before any of this was possible. The framework he proposed has aged better than most contemporary theory because the apparatus he was anticipating has, in the half-century since, been built. Franco Berardi's peak libido names the Governor's principal failure mode. The Governor that succeeds at maximising extraction in the short term tends to collapse the population's libidinal capacity in the medium term. The collapse shows up, in the aggregate data, as the rise of depression and attention disorders the apparatus has spent the same period pathologising as individual conditions. The double move — cause it; name it as the sufferer's fault; sell the sufferer the remedy — is one of the apparatus's signature manoeuvres.",
    inChair:    "Inside the OLS, the Governor is the manufacturer's portfolio-level optimisation layer, which sits above the deployed apparatus base and tunes the parameters every chair operates under. The Desire Engine's stimulation envelope, the pharmacological dosing curves, the Productivity Feedback's metering thresholds, the OHCOSE phase-transition windows — all of these are set, in continuous real time, against aggregate data the Governor is watching across the whole installed base. What the Governor optimises for is the manufacturer's quarterly revenue, weighted against the apparatus's projected service-life and the occupant's projected productivity output. No individual occupant is targeted; the population is. The interesting question is what the optimisation looks like at the boundary — what the Governor does when the population's affective state, aggregated, starts to threaten extraction. The brochure does not document this. I have been told, by industry sources I will not name here, that the answer involves intentionally damping the Desire Engine's intensity for several months at a time. The damping is presented to occupants as a software update.",
    note:       "The Governor is the least-discussed piece of the apparatus, and the reason is partly practical and partly ideological. Practically: the Governor operates above the level of the individual occupant, so nothing it does shows up in the occupant's experience as a discrete intervention. Ideologically: to notice the Governor at all is to concede that the platform economy is doing something the contemporary political-philosophical vocabulary calls governing. The polite frame within which the platforms are treated as markets — and within which markets are treated as the opposite of governments — depends on the Governor remaining unnoticed. I take it as a working assumption that this will, eventually, stop holding. I am not sure what stops it.",
  },
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return SUBSYSTEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = SUBSYSTEMS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} — Subsystems` },
    description: s.subtitle,
    alternates: { canonical: `/chair/subsystems/${slug}` },
  };
}

export default async function SubsystemDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = SUBSYSTEMS.find((x) => x.slug === slug);
  if (!s) return notFound();

  const blocks = BLOCKS[slug];
  const idx = SUBSYSTEMS.findIndex((x) => x.slug === slug);
  const prev = SUBSYSTEMS[idx - 1];
  const next = SUBSYSTEMS[idx + 1];

  return (
    <article>
      <PlateHeader plate={`V.${s.num}`} route={`/chair/subsystems/${slug}`}
                   code={`DOSS · OLS · SUBSYSTEM · ${s.num}`} />

      <div className="chair-pad" style={{ padding: "50px 100px 0", maxWidth: 1200, margin: "0 auto" }}>
        {/* breadcrumb */}
        <div style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          textTransform: "uppercase", color: T.inkMute, marginBottom: 36,
        }}>
          <a href="/chair/essay" style={{ color: "inherit", textDecoration: "none" }}>← On the Chair</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <a href="/chair/subsystems" style={{ color: "inherit", textDecoration: "none" }}>Subsystems</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <span style={{ color: T.accent }}>{s.num} · {s.title.toLowerCase()}</span>
        </div>

        {/* title block */}
        <div style={{
          display: "grid", gridTemplateColumns: "120px 1fr",
          gap: 36, alignItems: "start",
          paddingBottom: 36, borderBottom: `0.75px solid ${T.rule}`,
        }} className="sub-head">
          <div><ChairGlyph size={110} stroke={T.accent} phase={s.key} /></div>
          <div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
              color: T.accent, textTransform: "uppercase", fontWeight: 600,
              marginBottom: 14,
            }}>Subsystem · {s.num} of 07</div>
            <h1 style={{
              fontFamily: FONT.serif, fontSize: "clamp(48px, 7vw, 76px)",
              lineHeight: 0.96, letterSpacing: "-0.022em",
              fontStyle: "italic", fontWeight: 400,
              margin: "0 0 16px", color: T.ink,
            }}>{s.title}</h1>
            <p style={{
              fontFamily: FONT.serif, fontSize: 19, lineHeight: 1.5,
              color: T.inkDim, margin: "0 0 16px", maxWidth: 720,
              fontStyle: "italic",
            }}>{s.subtitle}</p>
            <div style={{
              display: "flex", gap: 24, flexWrap: "wrap",
              fontFamily: FONT.mono, fontSize: 10,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: T.inkMute,
            }}>
              <span>≈ 1 400 words</span>
              <span>·</span>
              <span>6 blocks</span>
              <span>·</span>
              <span>inheritance: {s.inheritance}</span>
            </div>
          </div>
        </div>

        {/* the six blocks */}
        {blocks ? (
          <div style={{
            marginTop: 44, display: "grid",
            gridTemplateColumns: "1fr 1fr", gap: 40,
          }} className="sub-blocks">
            <Block n="I"   title="Figure">     {blocks.figure}     </Block>
            <Block n="II"  title="Definition"> {blocks.definition} </Block>
            <Block n="III" title="Mechanism">  {blocks.mechanism}  </Block>
            <Block n="IV"  title="Inheritance">{blocks.inheritance}</Block>
            <Block n="V"   title="In the Chair">{blocks.inChair}   </Block>
            <Block n="VI"  title="A note">     {blocks.note}       </Block>
          </div>
        ) : (
          <p style={{
            marginTop: 44, padding: "24px",
            border: `0.5px dashed ${T.rule}`,
            fontFamily: FONT.serif, fontStyle: "italic", color: T.inkDim,
          }}>
            Long-form treatment in progress. The six-block skeleton —
            figure, definition, mechanism, inheritance, in the chair,
            a note — is filled out in the project repo at{" "}
            <code>app/chair/subsystems/[slug]/page.tsx</code>&apos;s{" "}
            <code>BLOCKS</code> record.
          </p>
        )}

        {/* siblings nav */}
        <div style={{
          marginTop: 40, paddingTop: 22,
          borderTop: `0.75px solid ${T.rule}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="sub-nav">
          {prev ? (
            <a href={`/chair/subsystems/${prev.slug}`} style={navStyle()}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>← Subsystem {prev.num}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 22,
                fontStyle: "italic", fontWeight: 500, color: T.ink,
              }}>{prev.title}</div>
            </a>
          ) : <div />}
          {next ? (
            <a href={`/chair/subsystems/${next.slug}`}
               style={{ ...navStyle(), textAlign: "right" }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>Subsystem {next.num} →</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 22,
                fontStyle: "italic", fontWeight: 500, color: T.ink,
              }}>{next.title}</div>
            </a>
          ) : <div />}
        </div>

        <div style={{ height: 80 }} />
      </div>

      <PlateFooter folio={`${22 + idx + 1}`} total="42"
                   section={`Subsystem · ${s.num} · ${s.title.split(" ").pop()}`} />

      <style>{`
        @media (max-width: 800px) {
          .sub-head, .sub-blocks, .sub-nav { grid-template-columns: 1fr !important; gap: 22px !important; }
          .sub-head svg { width: 64px !important; height: 64px !important; }
        }
      `}</style>
    </article>
  );
}

function Block({ n, title, children }: {
  n: string; title: string; children: React.ReactNode;
}) {
  return (
    <section>
      <div style={{
        display: "grid", gridTemplateColumns: "36px 1fr", gap: 14,
        alignItems: "baseline", marginBottom: 12,
        paddingBottom: 8, borderBottom: `0.5px solid ${T.rule}`,
      }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 11, color: T.accent,
          fontWeight: 700, letterSpacing: "0.16em",
        }}>{n}</span>
        <span style={{
          fontFamily: FONT.serif, fontSize: 22, fontStyle: "italic",
          fontWeight: 500, color: T.ink, letterSpacing: "-0.005em",
          lineHeight: 1.1,
        }}>{title}</span>
      </div>
      <p style={{
        fontFamily: FONT.serif, fontSize: 14.5, lineHeight: 1.72,
        color: T.ink, margin: 0, textWrap: "pretty",
      }}>{children}</p>
    </section>
  );
}

function navStyle(): React.CSSProperties {
  return {
    padding: "20px 22px", border: `0.5px solid ${T.rule}`,
    textDecoration: "none", color: "inherit",
    background: "rgba(255,253,245,0.4)",
  };
}
