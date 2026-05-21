import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUBSYSTEMS } from "../page";

const PAPER = "#1a1814";
const PAPER_DIM = "#4a443a";
const MUTED = "#8a8478";
const RULE = "rgba(26,24,20,0.14)";
const ACCENT = "#7a2818";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/subsystems/[slug] — the seven companion essays.
 *
 * Each essay follows the same six-section skeleton:
 * §I Figure → §II Definition → §III Mechanism → §IV Inheritance
 * → §V In the Chair → §VI A Note. The skeleton is a structural
 * device that makes the seven essays read as a series.
 *
 * Voice and register match /chair (the main essay): serif body,
 * restrained palette, no zine ornaments.
 */

type Section = {
  n: string;
  title: string;
  body: (string | { quote: string })[];
};

type Body = {
  sections: Section[];
};

const BODIES: Record<string, Body> = {
  "desire-engines": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "Two things, taken together, are what make a Desire Engine what it is. One is that its outputs are tuned to the individual viewer. The other is that the viewer, in any operational sense, isn't asking for the outputs they get — they are being read, modelled, anticipated, and the items arriving on their screen are the product of that modelling rather than of any explicit request they made. The viewer's sense that they are choosing what to look at is, by some distance, the apparatus's deepest illusion.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "A Desire Engine is a content surface that continuously generates desire-objects calibrated to the occupant's measured response profile. The objects are not, primarily, objects of pre-existing desire. They are objects the engine's model predicts the occupant is likely to come to desire — and that prediction, sold back to the occupant as content, is the engine's actual product. Calling it a service that fulfils latent need misreads it. The Engine produces the need it then fulfils, and the production is the point.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "The current state of Desire Engine implementation is, technically, the recommendation algorithm. The largest contemporary instances — Meta's news feed, TikTok's For You feed, YouTube's autoplay, Netflix's suggestion engine, Spotify's discover queue, Amazon's product recommendation strip, Pornhub's preference assignment — operate on the same basic architecture: a continuously-updated model of the user's response history is used to score candidate content items, and the highest-scoring items are delivered to the user. The user's response to those items updates the model, and the next batch of items is scored against the updated model. The architecture is closed-loop by design.",
          "What distinguishes contemporary implementations from their predecessors (cable-television programming, magazine advertising, mail-order catalog selection) is the temporal resolution. Pre-digital Desire Engines could update their model on the order of weeks or months. Contemporary engines update on the order of seconds. The shift is not a difference of degree; it is a difference of kind. At sufficient temporal resolution, the Desire Engine ceases to be a service the occupant uses and becomes the medium within which the occupant's desires form.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "Deleuze & Guattari's account of the <em>desiring-machine</em>, in <em>Anti-Oedipus</em>, describes what is, in effect, the operational logic of the contemporary Desire Engine — though without the technical apparatus to instrument it. Their argument that desire is productive rather than receptive (desire makes the desired; it does not encounter the pre-given) anticipates the Desire Engine's central feature: the desire-object is constituted in the loop that produces it. The desiring-machine was, in their account, a conceptual tool against the Freudian theatre of representation. The contemporary apparatus has made the conceptual tool into infrastructure.",
          "Baudrillard's account of the &ldquo;perpetual cycle of mild satisfaction and renewed longing&rdquo; identifies the same loop from the subjective side. The Desire Engine does not satisfy desire; it organizes a cycle in which satisfaction is briefly approached, then receded from, then re-approached. Baudrillard called this the structure of consumer subjectivity. The Desire Engine is what consumer subjectivity looks like at platform scale.",
          "McLuhan's &ldquo;medium is the message&rdquo; applies more bluntly than to almost any other case. The content the Desire Engine delivers is not the message; the cycle the Engine runs is the message. Whether you are scrolling through cats or political news or makeup tutorials is, for the apparatus's purposes, almost incidental. The scrolling is the product.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "The Ouroboros Life System's Desire Engine is the integrated content stream that arrives at the work terminal and ambient environment throughout the occupant's Occupancy phase. The stream is calibrated by every input the Affective Signal Translator captures (face, voice, pupil, skin, heart). The stream's content is tier-appropriate: Essential occupants receive Tier-1 content; Pro occupants receive expanded access; Eternal occupants receive Tier-2 (&ldquo;for-cohort&rdquo;) content as well.",
          "The Engine's most consequential design feature, in the chair specifically, is its responsiveness to physiological state. The stream's pacing accelerates when the Translator detects boredom; it decelerates when the Translator detects overstimulation; it modulates content toward calming material when the Translator detects rising anxiety. The occupant experiences this as the apparatus &ldquo;knowing&rdquo; them. The apparatus is, in fact, modeling them.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "A reader inclined to dismiss the chair as speculative should test the Desire Engine on themselves. Open any major contemporary platform; observe the content arriving in the first thirty seconds; consider how that content was selected. The selection mechanism is the Desire Engine in operation. The only difference between the platform's Desire Engine and the chair's Desire Engine is the physical envelope around the occupant.",
        ],
      },
    ],
  },

  "consent-loops": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "The cookie banner is the apparatus's most ubiquitous instrument. It arrives in every browser, on every site, at every visit. The user is required to act on it before proceeding; the user's options are nominally three (accept, reject, manage preferences); the dominant design renders <em>accept</em> the path of least friction; the user, in the aggregate, accepts. This is the Consent Loop, in its simplest contemporary form.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "A Consent Loop is the ritualized agreement architecture through which the occupant's continued participation in the apparatus is repeatedly legitimized. The Loop's defining feature is its cyclicality: consent is not given once and recorded; it is requested again at each new juncture, under conditions designed to render refusal impractical. The Loop produces, over time, a record of repeated agreement that legitimates the apparatus's operations in the legal-regulatory frame.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "The current state of Consent Loop implementation is the terms-of-service architecture: cookie banners, app permissions, software-license click-throughs, account-creation flows, automatic updates that require re-acceptance of updated terms, recurring re-authentication prompts. Each instance presents the occupant with a small consent task; the cumulative effect of compliance with these tasks is a comprehensive consent record covering every operation the apparatus performs on the occupant.",
          "The Loop's technical genius is the asymmetry of cost. Acceptance is, by design, instant. Refusal is, by design, multi-step: bury the opt-out in a sub-menu; require a second confirmation; render the refusal partial (you can refuse Marketing cookies but not Functional cookies, and Functional includes most of what you objected to); make the refusal time-limited (you must re-refuse periodically). At sufficient asymmetry, acceptance becomes the default not because the occupant prefers it but because the occupant is rational.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "Foucault's account of internalized discipline — the subject who polices themselves because external policing has been distributed too widely to enforce — describes the Consent Loop's effective mechanism. The occupant who clicks <em>Accept</em> is, on Foucault's reading, not consenting in the contractarian sense; they are performing a small ceremony of compliance. The ceremony's repetition is its function. After enough repetitions, the ceremony is no longer perceived as ceremony; it is perceived as the background condition of doing anything at all.",
          "The legal-positivist tradition (Hans Kelsen, H. L. A. Hart) provides the regulatory grammar that makes the Loop work. The contractual fiction is that the consent is informed, voluntary, and meaningful. The Loop instruments the conditions under which a vendor can claim all three at no cost while none of the three are operationally present. The Loop is, in this sense, the apparatus's legal-positivist masterpiece: a contract recognized by every regulator that has ever assessed it, and recognized as meaningful by approximately none of its signatories.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "The Ouroboros Life System runs Consent Loops at every transition point. The Fitting requires a household-readiness assessment release; the Onboarding requires the OHCOSE service-architecture acceptance; the Habituation phase requires acceptance of revised circadian parameters; the Calibration phase requires the affective-feedback opt-in; the Occupancy phase requires periodic re-acceptance of expanded subsystem access; the Stewardship phase requires the end-of-life-care designation; the Estate phase requires the inheritor's stewardship acceptance.",
          "The occupant therefore consents, in aggregate, to every operation the apparatus performs. The occupant is, technically, never coerced. The occupant is, in the regulatory frame, exhaustively consenting. The frame's silence on whether consenting subjects can be said to have meaningfully agreed is, in the chair's case as in the platform's, the apparatus's legal alibi.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "It is tempting to argue that Consent Loops are bad because the consent isn't real. I don't think this is the right argument. The consent is real enough — the click happens, the box gets checked, the platform's ledger records the checked state, and a regulator who later asks whether the user agreed can be shown the record. What isn't real is the assumption built into contemporary contract doctrine that meaningful agreement is what such a record represents. The Loop's actual function is to produce a record of agreement that signifies nothing about agreement, and then to use the record where signification was never what the regulators were going to check anyway. The fault is not in the consent. The fault is in the legal frame that accepts the consent as standing in for something it has stopped being able to stand in for.",
        ],
      },
    ],
  },

  "compliance-monitors": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "A driver in a recent-model car feels the brakes engage without warning. The car's drowsiness-detection has registered prolonged eyelid closure and intervened on the driver's behalf. The driver runs through annoyance, then gratitude, then a kind of low-grade disorientation that doesn't have a name in the consumer's vocabulary yet. The decision the car just executed was not the car's, and it was not the driver's. It was made, some years earlier, in a meeting at the manufacturer's headquarters, by a small group of people who never met this particular driver and never will. The decision was committed to firmware and shipped across a vehicle fleet of several million. The Monitor is, structurally, that meeting, still operating.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "A Compliance Monitor is a continuous behavioral surveillance and correction system that maintains the occupant's behavior within parameters the apparatus has set. The Monitor's defining feature is that it operates without the occupant's awareness, except at the moment of correction. The occupant experiences the Monitor only when the Monitor experiences the occupant departing from parameter.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "The current state of Compliance Monitor implementation is the integrated sensor stack: GPS in phones, accelerometers in wearables, heart-rate variability in smartwatches, cameras in public space and increasingly in private space, microphones in voice-activated assistants and increasingly in smart appliances, keystroke logging in employer-issued laptops, gaze tracking in vehicle dashboards, transaction surveillance in banking apps. The stack is unified by the apparatus's correlation layer; the correlation layer feeds the behavioral profile; the behavioral profile feeds the correction logic.",
          "China's Social Credit System makes the architecture legible by naming it. The system aggregates behavioral data into a score; the score routes into access privileges (flights, internet, housing, credit). The Western implementation is, structurally, identical, with the difference that no single score is published — the score exists, distributed across the credit bureaus, insurance underwriters, content-moderation algorithms, employer-background-check vendors, and government registries that consume each fragment of the surveillance stack. The Western occupant is monitored more granularly than the Chinese occupant. The Western occupant simply does not see the unified score.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "Foucault's panopticon, written into <em>Discipline and Punish</em> from Bentham's prison design, anticipated the Compliance Monitor's effective mechanism with uncanny accuracy. The panopticon's function was not to observe; it was to render observation possible and thereby cause the observed to police themselves. The Compliance Monitor is the panopticon at saturation: observation is not possible but actual, continuous, and unremarked. The internalization Foucault described is therefore not, in the contemporary case, a coping mechanism. It is a survival skill.",
          "Shoshana Zuboff's analysis of &ldquo;instrumentation power&rdquo; provides the political-economic frame: the Monitor is not, in the contemporary case, public infrastructure; it is private infrastructure deployed at public scale. The accountability mechanisms appropriate to public infrastructure (constitutional protections, judicial review, democratic oversight) do not, by design, reach the Monitor. The Monitor's effective reach exceeds any public-infrastructure analog by several orders of magnitude; its accountability reach is approximately zero.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "The chair's Compliance Monitor is the integrated biometric stack the Affective Signal Translator generates plus the productivity-output metering the Productivity Feedback subsystem generates. The Monitor reads continuously; it intervenes occasionally. The intervention is calibrated to feel like care: a notification suggesting hydration; a small adjustment in pharmacological dosing; a quietly-suggested content piece; a brief reduction in work envelope. The occupant rarely experiences the Monitor as monitoring. The occupant experiences it as the apparatus understanding them.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "Try this. Think about the most recent moment a piece of technology in your life knew what you wanted before you'd worked out what you wanted. The maps app rerouting you before traffic appeared. The calendar suggesting the meeting room. The streaming service queuing the next episode. None of these felt invasive at the time; most felt like the apparatus being thoughtful. What was thoughtful in each case was the Monitor reading you and quietly preempting the action you were about to take. The service you experienced was the surveillance you didn't.",
        ],
      },
    ],
  },

  "surplus-reservoirs": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "A photograph uploaded to a free social-media service in 2014 was, in 2024, used to train a generative-image model that was then sold as a commercial product. The photographer was not asked. The photographer was not compensated. The photographer was, technically, never the customer; the photographer was the input.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "A Surplus Reservoir is the data and capital aggregation system in which the apparatus stores what it has extracted. The Reservoir's defining feature is its scope: every input the apparatus has captured — every utterance, every gesture, every transaction, every biometric reading, every preference — is preserved indefinitely and remains available for downstream use. The Reservoir is the apparatus's archive of the occupant.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "What the Reservoir physically is, today, is a cloud data warehouse — petabyte-scale storage, geographically redundant, with differential-privacy nominally invoked at the API layer and operationally compromised wherever a brand partner has paid for direct access. The headline access controls are theatre. What the warehouse contains comes in three layers. The first is data the occupant produced consciously (posts, reviews, search queries). The second is data the occupant produced unconsciously (browsing patterns, dwell times, location traces, the gait their phone's accelerometer reads while they walk). The third — and the one the contemporary regulators are still pretending isn't there — is data the occupant never produced at all, inferred from the first two: sexual orientation, political affiliation, mental-health trajectory, household composition, susceptibility to specific marketing rhetorics.",
          "If you want to know what the Reservoir actually is, look at the inference layer. The Reservoir is not, primarily, a storage device. It is a model-training environment with storage attached. The stored data feeds the models that score the next inputs; the scoring of the next inputs feeds back into the stored data; the loop closes inside the same datacenter. The Reservoir is the apparatus's memory and its prediction engine in a single fabric, which is to say it is the closest thing the apparatus has to consciousness.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "The Marxian frame, transposed: where industrial-era capital aggregated produced goods (the warehouse), platform-era capital aggregates the data produced as a byproduct of consumer activity (the data warehouse). The transposition is operationally faithful. The warehouse extracted surplus labor; the data warehouse extracts surplus attention, affect, and behavior. The transposition's most significant feature is that the data warehouse continues to extract value from the input after the input has ceased — a property the industrial warehouse never had.",
          "Shoshana Zuboff's account of &ldquo;behavioral surplus&rdquo; provides the contemporary political-economic name for what the Reservoir captures. The argument that the Reservoir is the principal site at which contemporary value is generated — that the user is the product, that the platform is the apparatus that converts user behavior into salable predictions — has, on my reading, been validated by every subsequent year of platform-economic data.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "Inside the OLS, the Reservoir takes the form of an onboard service ledger that records, against the occupant's identifier, every biometric reading the Translator captures, every productivity output the Feedback subsystem registers, every content engagement, every pharmacological dosing event, and every affective-state classification. The retention period is tier-graded — seven years post-cessation for Essential occupants, twenty-five for Pro, ninety-nine fiscal years for Eternal — and the ledger continues to be queried, by the manufacturer's brand partners, for the duration of that period.",
          "Those brand partners purchase access on a per-occupant, per-data-class basis. The occupant is not told which partners are buying their record. The occupant is not told that the record continues to be sold after their death. The brochure's silence on both points is one of the few places the brochure's evasion is operationally legible to a reader paying attention.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "The Reservoir is the most patient subsystem in the apparatus. Looked at on the timescale of a single interaction, what it captures is modest. Looked at on the timescale of an occupant's lifetime, it accumulates. Looked at on the timescale of the apparatus as an institution — the timescale on which decisions about which platforms to acquire and which models to train get made — the Reservoir is where the apparatus's actual capital sits. Everything the occupant experiences as the apparatus is, in this longer view, the surface through which the Reservoir gets fed.",
        ],
      },
    ],
  },

  "feedback-rituals": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "A notification chime, repeated approximately three thousand times per occupant per year, becomes — within months — a sound the occupant cannot consciously refuse to register. The chime accomplishes more, in the aggregate, than the entire content of the messages it announces.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "A Feedback Ritual is a micro-reward or acknowledgment that reinforces the occupant's continued participation. The Ritual's defining feature is its formal, cyclical, low-intensity, high-frequency character. The Ritual is not a satisfaction event; it is the structure of permitted satisfaction, repeated at sufficient frequency that the occupant comes to organize their behavior around its return.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "Feedback Rituals are, in their contemporary form, the gamification stack the platform industry adopted from casino design over the course of the 2010s. The vocabulary is familiar in its parts (likes, hearts, share counts, streaks, badges, ranks, leaderboards, daily challenges) but the integration is what matters. Each ritual is a small thing on its own, and most of them would be unremarkable in isolation. What makes the Ritual work as a subsystem is that the whole day, on most contemporary platforms, is now organised around the apparatus's prompts, and that organisation has become invisible to the people inside it.",
          "The underlying schedule is borrowed openly from the slot machine. Variable-ratio reinforcement — payouts on no fixed interval, always at unpredictably close-but-not-yet intervals — is what keeps a gambler at the table, and it is what keeps a user on a feed. The schedule was developed in the early twentieth century, partly in B. F. Skinner's pigeon work and partly in the gambling industry's house-economist literature; the platform industry adopted it more or less wholesale in the 2010s. Whether the engineers who adopted it knew where it came from is a separate question. The schedule has since become the default organising principle of consumer interface design, and it works on the same biological mechanism whether the subject is a pigeon, a Las Vegas tourist, or a teenager refreshing TikTok.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "Melanie Klein gives us the developmental frame: the infant works, over the first year of life, to integrate the part-objects that make up its early world into coherent whole-objects. The breast that comforts and the breast that is gone are, at first, separate things; learning that they are the same breast is part of what becoming a person consists of. The Feedback Ritual, read against Klein, is a part-object that the apparatus refuses to let mature. The like is forever the like. The streak is forever the streak. The badge is forever the badge. The integration that ordinarily organises a self does not happen, because the apparatus has decided it does not happen — keeping the occupant at the developmental position that produces the highest engagement rates.",
          "Winnicott extends Klein in the direction the apparatus most depends on. The transitional object — the blanket, the stuffed animal, the imaginary friend — is what lets the child cross from being inside the mother's care to being able to be alone. The object is good because it is eventually transcended. The Feedback Ritual is the apparatus's transitional object, mass-produced and offered to every occupant, with the addition that it is the apparatus's grip rather than the apparatus's gift, because the transcendence is the part the design forecloses.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "The chair's Feedback Rituals are continuous and varied. The Productivity Feedback subsystem registers each completed work-task with a small auditory and haptic acknowledgment; the Affective Monitoring subsystem rewards equilibrium with quiet ambient changes (lighting warming, music subtly de-intensifying); the OHCOSE service architecture commemorates each phase transition with a small ceremony (the Onboarding seating; the Habituation 90-day acclimation marker; the Calibration completion; the Occupancy annual review; the Stewardship recalibration; the Estate transition).",
          "The Rituals are not, individually, manipulative. They are, in the aggregate, the apparatus's primary mechanism for binding the occupant to the apparatus's tempo.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "Of all the subsystems, the Feedback Ritual is the one occupants most rarely want stopped. The buzz of the notification, the warmth of the like, the satisfaction of the streak — these are not things people experience as the apparatus's grip on them; they are things people experience as small kindnesses the day affords. The Ritual has, over the past fifteen years or so, taken over a function — the daily provision of low-stakes affective regulation — that used to live in a much wider set of relationships and practices. I am not nostalgic for the older arrangement, which had its own pathologies, but the substitution is worth naming. We did not used to need the apparatus for this.",
        ],
      },
    ],
  },

  "affective-signal-translators": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "A phone's front-facing camera observes the user's face. The camera operates continuously when the screen is on. The user has consented, in the operating system's permission framework, to the camera's operation. The user does not, generally, know which applications are reading the camera at any given moment. The user does not, generally, know what the reading applications are inferring from the camera's input.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "An Affective Signal Translator is a biometric and neuro-monitoring system that reads the occupant's interior states and feeds them to the apparatus's control logic. The Translator's defining feature is that it converts data the occupant cannot reasonably authorize (because the occupant cannot reasonably know what is being read or what is being inferred) into data the apparatus can act on. The Translator is the apparatus's principal interface with the occupant's body.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "The Translator, in its contemporary deployment, is a multi-modal sensor stack. Each modality is well-characterised in the literature on its own. The camera reads the face for facial action units. The microphone reads the voice for stress, pace, and the smaller perturbations that arrive a half-second before someone articulates that they are annoyed. The optical or electrical sensor on the wrist or chest reads heart-rate variability. The electrodermal sensor reads galvanic skin response. The infrared array reads pupil dilation, the eye-tracker reads gaze, the accelerometer reads gait and posture, the polysomnography device — increasingly contactless, increasingly embedded in the ceiling — reads sleep architecture. None of this is new. What is new is that the stack now runs together, fused in real time, against the same subject.",
          "The fusion layer is where the work happens. From the vector across all modalities, the Translator infers affective states the occupant has not articulated and in some cases is not capable of articulating: emotional valence, arousal, cognitive load, attention deficit, fatigue, hormonal cycle phase, pharmacological state. The accuracy is moderate but commercially adequate, which has always been the standard the rest of the apparatus runs against. The inference is continuous and at sub-second resolution, which is the standard the rest of the apparatus does not run against and could not.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "Paul B. Preciado's pharmacopornographic regime names the Translator's most consequential feature: the apparatus has migrated from the regulation of behavior to the regulation of bodies at the molecular and affective level. The Translator does not, in the contemporary case, observe the occupant's actions. It observes the occupant's nervous system. The action is downstream.",
          "Antonio Damasio's account of the somatic-marker hypothesis — the proposition that affective state is, neurobiologically, an input to decision-making rather than a downstream consequence — provides the theoretical grounding for why the Translator's reads are operationally meaningful. The Translator is not, in the trivial sense, reading the occupant's feelings; it is reading the inputs to the occupant's next decision. The apparatus, holding the read, anticipates the decision.",
          "The affective-computing literature (Rosalind Picard, MIT Media Lab, 1997 onward) provides the technical history. The field's stated aspiration — to make computers responsive to the user's emotional state — has, in the contemporary platform-economic context, produced an apparatus that is responsive to the user's emotional state in the same sense that a fishing rod is responsive to the fish.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "Inside the OLS, the Translator is distributed across the Ring's sensor stack. A camera in the headrest reads the occupant's face. A microphone in the work-terminal reads voice. Contact electrodes in the chest-plate read cardiac signal. The armrest contacts read electrodermal response. An infrared array and an eye-tracker, both at the work-terminal, read pupil and gaze. The stack reads continuously, throughout the occupant's residence, and the readings are routed by an onboard fusion layer to whichever subsystem currently needs them.",
          "Most of the Translator's output is going to the other subsystems — the Desire Engine, which uses it to tune the content stream; the pharmacological subsystem, which uses it to adjust dosing; the Compliance Monitor, which uses it to anticipate non-conforming behaviour; the Productivity Feedback, which uses it to set the work envelope. None of these subsystems would operate, in any meaningful sense, without the Translator's reads. The chair, considered as a single object, is most accurately described as a Translator with several actuators bolted on.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "By any reasonable measure of invasiveness — what is being read, at what resolution, by whom, against what consent — the Translator is the most invasive piece of the apparatus we have. It is also, by some distance, the piece that has provoked the least public objection. The same people who would not, on principle, let their employer open their personal email have, without protest worth mentioning, allowed the camera in their pocket to read their face every time they unlock the screen. I do not have a clean explanation for the asymmetry. The face has, somewhere in the last decade, ceased to be treated as private the way correspondence is treated as private. I would like to know when that happened, and what it cost.",
        ],
      },
    ],
  },

  "algorithmic-libido-governors": {
    sections: [
      {
        n: "I",
        title: "A Figure",
        body: [
          "A large platform's content-moderation operation: a small team of full-time staff, an integration with three contracted vendors who keep their own staff in cheaper labour markets, and a machine-learning model. The model is, in practice, the moderator — it makes the operational decisions, ninety-some percent of them, at a volume no human team could plausibly handle. The staff adjudicate edge cases; the contracted labour handles the appeals queue; the platform's two-or-three billion users are governed by the model. The model's parameters are set inside the platform, in a slow negotiation among the engineering organisation, the legal organisation, and whichever commercial priorities are dominant in any given quarter. The users participate in none of that negotiation. They appear in it only as the population the parameters are being set for.",
        ],
      },
      {
        n: "II",
        title: "Definition",
        body: [
          "An Algorithmic Libido Governor is a macro-level system that modulates desire's intensity across the occupant population to maintain extraction and stability. The Governor's defining feature is that it operates above the individual occupant — it is concerned with the aggregate yield, not with any particular occupant's experience — and adjusts the apparatus's parameters in response to system-level conditions. The Governor is the apparatus's central nervous system.",
        ],
      },
      {
        n: "III",
        title: "Mechanism",
        body: [
          "The current state of Algorithmic Libido Governor implementation is the platform-economic optimization layer: the engagement-maximization objective function that organizes Meta's news feed; the watch-time optimization that organizes YouTube's recommendation graph; the average-revenue-per-user objective that organizes mobile-gaming progression curves; the time-on-platform objective that organizes TikTok's session-extension prompts. Each instance is, in the engineering frame, a single number that the platform's machine-learning systems are continuously trained to maximize.",
          "The choice of objective function is the Governor's most consequential decision and the least visible. The objective function determines, for the entire occupant population, which affective states are rewarded with continued service and which are throttled. Outrage, for most platforms, is rewarded — outrage extends session length. Boredom is throttled — boredom shortens it. The aggregate effect on the population is engineered. The engineering is invisible to any individual occupant.",
        ],
      },
      {
        n: "IV",
        title: "Theoretical Inheritance",
        body: [
          "The Governor is what Lyotard described in <em>Libidinal Economy</em> made operational. What is different from Lyotard is that the management is no longer performed by a human reading the system — the system manages itself, on itself, in continuous real time, and the engagement metrics a human can read are the residue rather than the operation. Lyotard wrote in 1974, before any of this was possible. The framework he proposed has aged better than most contemporary theory because the apparatus he was anticipating has, in the half-century since, been built.",
          "Franco Berardi's <em>peak libido</em> names the Governor's principal failure mode. Berardi's claim is that libidinal energy is a limited resource that can be exhausted, and that the apparatus is engineered to extract at the edge of the limit. The Governor that succeeds at maximising extraction in the short term tends to collapse the population's libidinal capacity in the medium term. The collapse shows up, in the aggregate data, as the rise of depression and attention disorders the apparatus has spent the same period pathologising as individual conditions. The double move (cause it; name it as the sufferer's fault; sell the sufferer the remedy) is one of the apparatus's signature manoeuvres.",
        ],
      },
      {
        n: "V",
        title: "In the Chair",
        body: [
          "Inside the OLS, the Governor is the manufacturer's portfolio-level optimisation layer, which sits above the deployed apparatus base and tunes the parameters every chair operates under. The Desire Engine's stimulation envelope, the pharmacological dosing curves, the Productivity Feedback's metering thresholds, the OHCOSE phase-transition windows — all of these are set, in continuous real time, against aggregate data the Governor is watching across the whole installed base.",
          "What the Governor optimises for is the manufacturer's quarterly revenue, weighted against the apparatus's projected service-life and the occupant's projected productivity output. No individual occupant is targeted; the population is. The interesting question is what the optimisation looks like at the boundary — what the Governor does when the population's affective state, aggregated, starts to threaten extraction. The brochure does not document this. I have been told, by industry sources I will not name here, that the answer involves intentionally damping the Desire Engine's intensity for several months at a time. The damping is presented to occupants as a software update.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "The Governor is the least-discussed piece of the apparatus, and the reason is partly practical and partly ideological. Practically: the Governor operates above the level of the individual occupant, so nothing it does shows up in the occupant's experience as a discrete intervention. Ideologically: to notice the Governor at all is to concede that the platform economy is doing something the contemporary political-philosophical vocabulary calls governing. The polite frame within which the platforms are treated as markets — and within which markets are treated as the opposite of governments — depends on the Governor remaining unnoticed. I take it as a working assumption that this will, eventually, stop holding. I am not sure what stops it.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return SUBSYSTEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = SUBSYSTEMS.find((s) => s.slug === slug);
  if (!entry) return {};
  return {
    title: { absolute: `${entry.title} — On the Chair` },
    description: entry.subtitle,
    alternates: { canonical: `/chair/subsystems/${slug}` },
  };
}

export default async function SubsystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = SUBSYSTEMS.find((s) => s.slug === slug);
  const body = BODIES[slug];
  if (!entry || !body) notFound();

  // For prev/next navigation
  const idx = SUBSYSTEMS.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? SUBSYSTEMS[idx - 1] : null;
  const next = idx < SUBSYSTEMS.length - 1 ? SUBSYSTEMS[idx + 1] : null;

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
      {/* Top nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.5rem",
          fontFamily: MONO,
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          color: MUTED,
          textTransform: "uppercase",
        }}
      >
        <a href="/chair/subsystems" style={{ color: "inherit", textDecoration: "none" }}>
          ← Seven Subsystems
        </a>
        <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>
          On the Chair
        </a>
      </nav>

      {/* Header */}
      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "2.5rem",
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
          Subsystem {entry.number} · § V Companion
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5.4vw, 3.4rem)",
            lineHeight: 1.08,
            color: PAPER,
            margin: "1rem 0 0.8rem",
            letterSpacing: "-0.012em",
          }}
        >
          {entry.title}
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.1rem",
            lineHeight: 1.5,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          {entry.subtitle}
        </p>
        <p
          style={{
            marginTop: "1.2rem",
            fontFamily: MONO,
            fontSize: "0.66rem",
            letterSpacing: "0.18em",
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          Inheritance · {entry.inheritance}
        </p>
      </header>

      {/* Body */}
      {body.sections.map((s) => (
        <section key={s.n} style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 600,
              fontSize: "1.2rem",
              letterSpacing: "-0.005em",
              color: PAPER,
              margin: "2.4rem 0 1.2rem",
              paddingTop: "0.9rem",
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
                fontSize: "0.72rem",
                color: ACCENT,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              § {s.n}
            </span>
            <span style={{ fontStyle: "italic" }}>{s.title}</span>
          </h2>
          {s.body.map((p, i) => {
            if (typeof p === "string") {
              return (
                <p
                  key={i}
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1.07rem",
                    lineHeight: 1.72,
                    color: PAPER,
                    margin: "0 0 1.2rem",
                    textWrap: "pretty" as const,
                  }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              );
            }
            return (
              <blockquote
                key={i}
                style={{
                  margin: "1.8rem 0",
                  padding: "0 0 0 1.4rem",
                  borderLeft: `2px solid ${ACCENT}`,
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  lineHeight: 1.5,
                  color: PAPER,
                }}
              >
                {p.quote}
              </blockquote>
            );
          })}
        </section>
      ))}

      {/* Signature */}
      <div
        style={{
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: `1px solid ${RULE}`,
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          textAlign: "right",
        }}
      >
        &mdash; Selimović, May 2026 · Subsystem {entry.number} of 7
      </div>

      {/* Prev / Next navigation */}
      <nav
        style={{
          marginTop: "3rem",
          paddingTop: "1.6rem",
          borderTop: `1px solid ${RULE}`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.4rem",
        }}
      >
        {prev ? (
          <a
            href={`/chair/subsystems/${prev.slug}`}
            style={{
              padding: "0.9rem 1rem",
              border: `1px solid ${RULE}`,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: MUTED,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              ← Subsystem {prev.number}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: PAPER,
              }}
            >
              {prev.title}
            </div>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={`/chair/subsystems/${next.slug}`}
            style={{
              padding: "0.9rem 1rem",
              border: `1px solid ${RULE}`,
              textDecoration: "none",
              color: "inherit",
              textAlign: "right",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: MUTED,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Subsystem {next.number} →
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: PAPER,
              }}
            >
              {next.title}
            </div>
          </a>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
