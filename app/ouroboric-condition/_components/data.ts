// data.ts — content model for the Atlas (ported from the Claude Design
// prototype, atlas/data.js). Every quote is drawn from the manuscript; prose
// is condensed faithfully from it. tone: 'light' = Anatomy/paper (substrate &
// remainder), 'dark' = Apparatus (a site of capture you descend into).

export type Tone = "light" | "dark";

export interface AtlasLoop {
  i: number;
  scale: string;
}

export interface AtlasSite {
  id: string;
  fig: string;
  tone: Tone;
  title: string;
  sub: string;
  movement: number;
  axis: string;
  diagram: string;
  gloss: string;
  prose: string[];
  quote: string;
  cite: string;
  /** the work the pull-quote is drawn from (defaults to The Ouroboric Condition) */
  quoteSource?: string;
  /** where in the lifecycle this specimen bites (the descent read as a life) */
  stage?: string;
  genealogy: string[];
  related: string[];
  loop?: AtlasLoop;
  pos: { x: number; y: number };
}

export type AtlasEdge = [string, string];

export const ATLAS_SITES: AtlasSite[] = [
  {
    id: 'surplus', fig: '00', tone: 'light', title: 'Psychic Surplus',
    sub: 'the substrate', movement: 1, axis: '—', diagram: 'surplus',
    gloss: 'the excess of attention, curiosity, libido and care that remains after survival',
    prose: [
      "After the day has taken its labor and its performed enthusiasm, a residue remains — not energy exactly, but charge: a diffuse, restless, unsatisfied capacity that nothing on offer was worth spending on. It is the substrate of everything that is not labor — friendship, play, art, organized political life — and a basic feature of psychic life, not a luxury. We are, constitutionally, creatures of excess.",
      "It is not free time, not attention, not Zuboff's behavioral surplus — that is the data mined from it. Surplus used is directed toward an object of one's own choosing, at a pace one controls. Surplus captured is routed toward objects the system selects, at a pace it administers. The difference is sovereignty: who decides where the surplus goes.",
    ],
    quote: 'Psychic surplus is what makes the subject structurally dangerous.', cite: 'Ch. 2',
    genealogy: ['Marx', 'Freud', 'Marcuse', 'Lyotard'],
    related: ['ouroboros', 'triaxial', 'firstscreen', 'held'],
    pos: { x: 1300, y: 250 },
  },
  {
    id: 'ouroboros', fig: '01', tone: 'dark', title: 'The Ouroboric Circuit',
    sub: 'the system principle', movement: 1, axis: '—', diagram: 'ouroboros',
    gloss: 'the system feeds on itself — solicit · channel · harvest · return',
    prose: [
      "The apparatus is ouroboric. It solicits desire, channels it through commodified circuits, harvests the resulting engagement and exhaustion, then deploys the harvest as the raw material for the next cycle of solicitation.",
      "The surplus is captured, processed, returned as engagement metrics and behavioral data — and the depleted population is then sold the repair commodities that answer the depletion the capture produced. The depletion is the system's most reliable productive condition, because it guarantees the next cycle's demand.",
    ],
    quote: "The serpent eats its own tail, and the eating is the machine's principle of operation.", cite: 'Ch. 1',
    genealogy: ['Marx', 'Stiegler', 'Deleuze & Guattari'],
    related: ['surplus', 'triaxial', 'satisfaction', 'repair'],
    pos: { x: 1300, y: 895 },
  },
  {
    id: 'triaxial', fig: '02', tone: 'dark', title: 'Tri-Axial Capture',
    sub: 'time · body · bond', movement: 1, axis: 'all', diagram: 'triaxial',
    gloss: 'cadence, soma, and the social — three interlocking axes of capture',
    prose: [
      "The capture works across three dimensions that cannot be analyzed apart. TIME is colonized through feeds, streaks, notifications — cadence capture, the overwriting of one's own rhythm with the apparatus's optimized tempo. The BODY is organized through ergonomic enclosure and the fatigue that depletes just enough to prevent reflection. The BOND is reorganized into measurable units — a sum of contacts replacing a structure of mutual holding.",
      "The axes interlock. Time-capture lowers the threshold for somatic-capture, which lowers the threshold for social-capture, which regenerates the desire whose next cycle the time-capture absorbs.",
    ],
    quote: 'To analyze any one axis in isolation is to lose the operation. The ouroboros is what binds them.', cite: 'Intro',
    genealogy: ['Stiegler', 'Levinas'],
    related: ['ouroboros', 'boredom', 'janitor'],
    pos: { x: 1300, y: 575 },
  },
  {
    id: 'boredom', fig: '03', tone: 'dark', title: 'Boredom & Dead Air',
    sub: 'the colonization of the gap', movement: 2, axis: 'time', diagram: 'boredom',
    gloss: 'not absence but the felt edge of uncaptured surplus — and the apparatus rushes to fill it',
    prose: [
      "Boredom is misidentified as an absence — a gap in the stimulation supply. It is not absence but pressure: the felt experience of surplus that has not yet found its object. It is the dead air out of which other uses of attention might emerge — the bout that turns into a project, the restlessness that congeals into thought.",
      "Which is why the apparatus cannot tolerate it. Every notification and autoplay exists to colonize the dead air before the surplus can congeal into something ungoverned. Boredom resists management; it is the condition the apparatus most fears.",
    ],
    quote: "That boredom is the crack in the serpent's jaw.", cite: 'Ch. 3',
    genealogy: ['Stiegler', 'Marcuse'],
    related: ['ouroboros', 'glitch', 'satisfaction'],
    pos: { x: 880, y: 460 },
  },
  {
    id: 'satisfaction', fig: '04', tone: 'dark', title: 'The Satisfaction Loop',
    sub: 'the elementary unit', movement: 2, axis: 'time', diagram: 'satisfaction',
    gloss: "the engineered cycle — kill · collect · upgrade · repeat — that metabolizes desire into retention",
    prose: [
      "It is 10:47 PM. She means to play for an hour. The loop is the engineered cycle — kill-collect-upgrade-repeat in the game, post-check-scroll-post in the feed — that metabolizes boredom and desire into retention metrics and behavioral surplus. It borrows addiction's neurochemistry without being addiction.",
      "Structurally it is a governance technology: the apparatus's way of keeping the surplus in circulation, against its accumulation into ungoverned desire. Partial gratification is the mechanism. The reward is always almost here.",
    ],
    quote: 'The game smiles like a dealer. It always has something for her. It always will.', cite: 'Ch. 4',
    genealogy: ['Klein', 'Stiegler', 'Deleuze & Guattari'],
    related: ['ouroboros', 'repair', 'boredom'],
    loop: { i: 0, scale: 'THE SESSION' },
    pos: { x: 430, y: 770 },
  },
  {
    id: 'janitor', fig: '05', tone: 'dark', title: 'The Affective Janitor',
    sub: 'the parasocial bond', movement: 2, axis: 'bond', diagram: 'janitor',
    gloss: 'simulated holding — the face the platform cannot deliver, performed for retention',
    prose: [
      "A streamer has been live for eight hours, voice in the hour-seven rasp. The parasocial bond offers holding — companionship, the sense of a face turned toward you — while harvesting the engagement that holding generates. It is care reorganized into a measurable unit, intimacy performed for retention.",
      "The face, in Levinas's sense, is what the interface cannot deliver: the other's irreducible vulnerability, the demand that precedes calculation. The stream simulates the face without possessing one — responsiveness without the capacity for ethical demand.",
    ],
    quote: 'The face appears. The voice begins. The dead air fills. The surplus is captured. The ouroboros turns.', cite: 'Ch. 5',
    genealogy: ['Levinas', 'Winnicott', 'Klein'],
    related: ['ouroboros', 'rogan', 'face'],
    pos: { x: 900, y: 1180 },
  },
  {
    id: 'rogan', fig: '06', tone: 'dark', title: 'The Rogan Apparatus',
    sub: 'the interpellation machine', movement: 2, axis: 'bond', diagram: 'rogan',
    gloss: 'the voice in the ear that hails you — companionship that captures the residual attention',
    prose: [
      "The listener is driving home, the shift run long, the day's attention already drawn off. The podcast arrives as companionship — a voice in the ear, the sense of being addressed, hailed, recognized. It fills the commute, the chore, the dead hours, and in filling them captures the residual attention nothing else claimed.",
      "No force is required. The apparatus does not coerce the listener; it is simply there, addressing him, whenever he reaches for it. Interpellation is the mechanism — the subject constituted by being hailed.",
    ],
    quote: 'The serpent needs only to be there when he reaches for it. Force is unnecessary to close its jaw.', cite: 'Ch. 6',
    genealogy: ['Althusser', 'Stiegler'],
    related: ['janitor', 'cult', 'ouroboros'],
    pos: { x: 1120, y: 1490 },
  },
  {
    id: 'cult', fig: '07', tone: 'dark', title: 'The Cultic Value-Form',
    sub: 'the loop at the scale of identity', movement: 2, axis: 'bond', diagram: 'cult',
    gloss: 'belonging-hunger converted into a devotional economy that holds the surplus by extracting it',
    prose: [
      "One does not join a cult; one discovers a community that finally makes sense. The cultic value-form names the loop in which the belonging-hunger that institutional hollowing produces is converted into a devotional economy — one that holds the surplus by extracting it, provides community by enclosing it, and that the platform amplifies because devotion generates engagement.",
      "It is the satisfaction loop run at the scale of identity. Where the system has destroyed the holding environments, the population develops a hunger for holding; the cultic formation offers holding on terms that extract.",
    ],
    quote: "The cultic value-form is late capitalism's solution to its own loneliness crisis.", cite: 'Ch. 7',
    genealogy: ['Klein', 'Winnicott'],
    related: ['janitor', 'repair', 'held'],
    loop: { i: 2, scale: 'IDENTITY' },
    pos: { x: 430, y: 1380 },
  },
  {
    id: 'crisis', fig: '08', tone: 'dark', title: 'The Surplus Crisis',
    sub: 'automation without elsewhere', movement: 3, axis: 'time', diagram: 'crisis',
    gloss: 'automation frees the time labor once absorbed — and the surplus has no credible elsewhere to go',
    prose: [
      "After Tesla's We, Robot event, the Optimus robots greeting guests turned out to be remotely operated by humans. The spectacle sold autonomy; the labor was hidden. Automation is arriving in Stiegler's form, not the futurists' — proletarianizing workers without dramatically replacing them, decomposing skilled labor into microtasks.",
      "The surplus crisis is what happens to psychic surplus when the labor that once absorbed it is automated and the surplus has no credible elsewhere to go — visible already in the epidemiology of anxiety, the politics of resentment, the platform's capacity to absorb directionless desire as engagement.",
    ],
    quote: 'Whether anything exists between the automated labor and the captured surplus.', cite: 'Ch. 8',
    genealogy: ['Marx', 'Stiegler'],
    related: ['ouroboros', 'mortality', 'held'],
    pos: { x: 1760, y: 460 },
  },
  {
    id: 'repair', fig: '09', tone: 'dark', title: 'The Repair Commodity',
    sub: 'damage · repair · damage', movement: 3, axis: 'body', diagram: 'repair',
    gloss: 'the system sells the cure for the damage it produces — a secondary loop at higher sophistication',
    prose: [
      "Once the loop's damage becomes legible, the system sells the repair: the wellness app, the meditation retreat, the therapy platform, the burnout book. It converts the system's damage into the system's market, producing a secondary loop — damage-repair-damage-repair — that sustains the ouroboros at a higher level of sophistication.",
      "The tiredness sleep does not fix is not a protocol deficiency. It is the felt experience of a system that extracts from psychic surplus continuously and then sells the depleted subject the means of her own optimization.",
    ],
    quote: "It converts the system's damage into the system's market.", cite: 'Ch. 9',
    genealogy: ['Marcuse', 'Stiegler'],
    related: ['ouroboros', 'satisfaction', 'cult'],
    loop: { i: 1, scale: 'RECOVERY' },
    pos: { x: 430, y: 1075 },
  },
  {
    id: 'firstscreen', fig: '10', tone: 'dark', title: 'The First Screen',
    sub: 'the developmental enclosure', movement: 3, axis: 'bond', diagram: 'firstscreen',
    gloss: 'the colonization of the space in which children form their relation to their own capacities',
    prose: [
      "The toddler reaches for the tablet with the same gesture she uses to reach for her mother's face — the reaching of a psyche in formation, extending toward the object that will hold it. Children have the most psychic surplus per unit of waking time, which makes them the most valuable target for capture and the most damaged by it.",
      "The surplus does not disappear; it is routed into loops designed by adults in a corporate office, optimized for retention. The capture of surplus during development shapes the kind of self that emerges — habituated to receiving its objects of desire rather than generating them.",
    ],
    quote: "The toddler reaches for the tablet with the same gesture she uses to reach for her mother's face.", cite: 'Ch. 10',
    genealogy: ['Klein', 'Winnicott', 'Stiegler'],
    related: ['surplus', 'satisfaction', 'holding'],
    pos: { x: 2110, y: 850 },
  },
  {
    id: 'mortality', fig: '12', tone: 'dark', title: 'The Mortality Problem',
    sub: 'the fantasy of exit', movement: 3, axis: 'body', diagram: 'mortality',
    gloss: 'oligarchic wealth and the optimization that cannot deliver the thing it promises',
    prose: [
      "Bryan Johnson spends approximately two million dollars per year trying not to die — dozens of daily supplements, biometric tracking, plasma exchange. At the top of the hierarchy the apparatus turns on its owners: the surplus of the very wealthy is bound to the one object money cannot secure, and the fantasy of exit — from the body, from the planet — organizes the libidinal economy of those who own the machine.",
      "The same logic that depletes the metropolitan worker governs the oligarch's relation to death: an optimization with no terminus, a loop that cannot deliver the thing it promises.",
    ],
    quote: 'Approximately two million dollars per year trying not to die.', cite: 'Ch. 12',
    genealogy: ['Freud', 'Marx'],
    related: ['crisis', 'custodial', 'held'],
    pos: { x: 1950, y: 1180 },
  },
  {
    id: 'custodial', fig: '11', tone: 'light', title: 'The Custodial Remainder',
    sub: 'the labor that holds', movement: 3, axis: 'bond', diagram: 'custodial',
    gloss: 'the maintenance and care the system depends on, devalues, and cannot produce',
    prose: [
      "The janitor arrives after the event, when the people who matter have gone. The custodial remainder is the maintenance labor without which the system would collapse, performed by those whose labor it devalues — the care that holds human beings through illness, development, and old age, treated as an externality the apparatus does not pay for.",
      "It is also what survives the capture. The care that continues despite its devaluation — the janitor who fixes the chair unasked, the teacher who stays, the friend who shows up — is the ground for a politics of holding.",
    ],
    quote: 'What the system depends on, cannot produce, and will not pay for.', cite: 'Ch. 11',
    genealogy: ['Levinas', 'Winnicott', 'Marx'],
    related: ['held', 'holding', 'mortality'],
    pos: { x: 1690, y: 1460 },
  },
  {
    id: 'glitch', fig: '13', tone: 'light', title: 'The Glitch in the Feed',
    sub: 'where the encounter survives', movement: 4, axis: 'bond', diagram: 'glitch',
    gloss: 'sometimes the feed breaks, and the face the platform cannot render appears',
    prose: [
      "Sometimes the feed breaks. Not technically — technically the feed never breaks, redundancy built into every layer, the autoplay primed. It breaks ethically: a face appears that the apparatus cannot render as data, a vulnerability that makes a demand preceding any calculation, and for a moment the scroll stops.",
      "The glitch is where the ethical encounter survives the capture. But the event alone is not a politics. A politics requires that the face's demand be translated into institutional form — that the momentary constitution be held past the moment.",
    ],
    quote: 'Technically the feed never breaks.', cite: 'Ch. 13',
    genealogy: ['Levinas'],
    related: ['boredom', 'face', 'held'],
    pos: { x: 2160, y: 1540 },
  },
  {
    id: 'held', fig: '14', tone: 'light', title: 'What Is to Be Held',
    sub: 'the politics of holding', movement: 4, axis: '—', diagram: 'held',
    gloss: 'the counter-principle — a politics of holding against the logic of capture',
    prose: [
      "The book has described a system that captures psychic surplus and converts it into shareholder value. Holding is the counter-concept. Capture extracts; holding maintains. Capture converts the person into a data object whose value is the value of the data; holding maintains the person as a person whose value cannot be assigned.",
      "The interventions are collective demands, structural in scope — temporal sovereignty, the protection of the developmental commons, the revaluation of care — not adjustments to a lifestyle. Hope is not the closing register. A map of the terrain; a specification of the pressure points where the apparatus might be made to give.",
    ],
    quote: 'That is where politics starts.', cite: 'Ch. 14',
    genealogy: ['Winnicott', 'Levinas', 'Marx'],
    related: ['holding', 'face', 'custodial', 'glitch'],
    pos: { x: 1300, y: 1770 },
  },
  {
    id: 'holding', fig: 'A', tone: 'light', title: 'Holding', sub: 'Winnicott',
    movement: 4, axis: '—', diagram: 'holding',
    gloss: 'the relational environment in which a person can exist without being reduced to a function',
    prose: [
      "Holding is Winnicott's name for the relational environment in which the infant's psyche develops — and by extension, the environment in which any person can exist without being reduced to a function. It is the counter-concept to capture. Where capture proletarianizes the capacities for attention, boredom, relationship, and play by decomposing them into operations the system performs on the user's behalf, holding leaves those capacities — with their friction, slowness, and occasional uselessness — in the hands of the person whose they are.",
      "The platform has become the primary holding environment for hundreds of millions, offering transitional objects engineered for retention rather than development. To name holding is to name what the capture targets.",
    ],
    quote: 'Capture extracts; holding maintains.', cite: 'Intro',
    genealogy: ['Winnicott', 'Klein'],
    related: ['held', 'face', 'custodial', 'firstscreen'],
    pos: { x: 820, y: 1740 },
  },
  {
    id: 'face', fig: 'B', tone: 'light', title: 'The Face', sub: 'Levinas',
    movement: 4, axis: 'bond', diagram: 'face',
    gloss: "the other's irreducible vulnerability — the demand that precedes calculation, and cannot be rendered as data",
    prose: [
      "The face is Levinas's name for the ethical event in which another person's vulnerability makes a demand that precedes every calculation. It is the counter-concept to the profile — the platform's rendering of the person, flat, queryable, scored, optimized. The face is precisely what that rendering exceeds.",
      "The platform's interfaces operate at the level where the face does not appear, and the operation depends on its non-appearance, because the face's appearance would force the apparatus to slow down to address what cannot be optimized.",
    ],
    quote: 'The face cannot be queried, because the face is not data.', cite: 'Intro',
    genealogy: ['Levinas'],
    related: ['held', 'holding', 'glitch', 'janitor'],
    pos: { x: 1830, y: 1730 },
  },
];

// ── Deepening · drawn from the companion essay "The Psychopolitics of Psychic
// Surplus: Libidinal Governance Across the Human Lifecycle" (Selimović),
// verbatim and lightly condensed. `stage` places each specimen in the lifecycle
// (the descent read as a life); `add` is a third prose movement; `quote` +
// `quoteSource` upgrade the pull-quote where the essay's line is sharper.
const ESSAY = "The Psychopolitics of Psychic Surplus";
const DEEPEN: Record<string, { stage: string; add?: string; quote?: string; quoteSource?: string; cite?: string }> = {
  surplus: {
    stage: "the whole arc",
    add: "The marketer's category for it is life-time value — the projected return on a person if every moment of a life, crib to deathbed, can be metabolized into a stream of transactions. Capital still wants the working day, but its frontier has moved inward, to attention, to affect, to desire. The data thrown off is the exhaust; what burns underneath is the capacity to feel, to imagine, to want, to play, to attach.",
    quote: "Behavioral surplus is what the meters read; psychic surplus is what the meters are clamped to.",
    quoteSource: ESSAY,
    cite: "Introduction",
  },
  ouroboros: {
    stage: "the whole arc",
    add: "Lyotard's wager was that every political economy is already a libidinal economy — that there is no clean wall between the circulation of capital and the circulation of desire. Foucault tracked power as it passed from the sovereign's sword to the discipline of the institution to the management of populations; what runs now is a further passage, into the government of the inner life. The factory did not close. It was relocated behind the eyes.",
  },
  triaxial: { stage: "the whole arc" },
  boredom: {
    stage: "ontogenesis",
    add: "The mechanism Marcuse named is repressive desublimation: a society that no longer represses the drive but discharges it on terms that defuse it. The toddler's restless energy is spent on a video rather than on mischief; the drive gets its release and loses its charge in the same motion, and the charge is the part that might have gone somewhere unscripted. The boredom that is the seedbed of invention is reclassified as a problem with a purchasable solution.",
  },
  satisfaction: {
    stage: "adolescence",
    add: "Watch the game do it. The work, a designer will tell you, is to start a loop in the player's wanting and keep it from closing. A small achievement releases its small pleasure; the pleasure subsides into a fresh lack; the lack reaches for the next achievement. The player's libidinal investment is the labor that makes the product, paid in the token pleasures the product doles back — playbor, play that is also work — and the longer the wanting stays open, the more of it can be monetized.",
  },
  janitor: {
    stage: "adulthood",
    add: "It is hardest to see because it looks like friendship. The need for recognition becomes the raw feed for an advertising machine, and a bond starts to feel like an audience to be kept. The cruelty of the arrangement is its tact: the extraction coincides with the discovery, so that the moment of joy and the moment of capture are the same moment, and the subject has no vantage from which to tell them apart.",
  },
  rogan: {
    stage: "adulthood",
    add: "By adulthood the apparatus has refined its hold. It does not command; it offers, endlessly and in a register tuned to the individual, a marketplace of satisfactions wide enough to feel like the open world and arranged so that every path returns to the work-and-spend. The voice in the ear is one more such offer — companionship that asks nothing, and takes the residual attention nothing else had claimed.",
  },
  cult: {
    stage: "adulthood",
    add: "The adult is now asked to be a product as well as to buy them. The avatar-subject is the self lived increasingly through the profile — the persona that both expresses a person and reshapes them in the image of what the platform rewards. Subjectivity becomes an enterprise, a project in value-maximization, and Marcuse's verdict holds: a comfortable, smooth, reasonable, democratic unfreedom, which holds not by force but by the difficulty of imagining the alternative from inside a life this padded.",
  },
  crisis: {
    stage: "adulthood",
    add: "Stiegler gave the loss its name. Industrial capitalism proletarianized the worker by taking his savoir-faire, the craft that had lived in his hands, and depositing it in the machine; consumer capitalism extends the operation to savoir-vivre, the knowledge of how to live and how to want, and deposits it in the market, which hands the desire back ready-made. The subject keeps the sensation of wanting and loses the authorship of it. When the labor that once absorbed the surplus is automated, the surplus has no credible elsewhere to go.",
  },
  repair: {
    stage: "adulthood · late adulthood",
    add: "The pharmaceutical industry has moved into the regulation of affect itself. Anxious and flattened by precarious work, there are the SSRIs that save lives and keep the worker functional and uncomplaining; unfocused, the quiet epidemic of stimulants; flagging, the pill that restores performance and, with it, the expectation that performance is owed further into the years. Preciado's name for the regime is the pharmacopornographic: power has stopped saying no and started saying have all you want, on our molecule, by our protocol. Government has reached the level of the dose.",
  },
  firstscreen: {
    stage: "ontogenesis",
    add: "The media-industrial firms understand birth as the opening of an account. The licensed character arrives as a child's first love and first loyalty, installed as a transitional object that, unlike the worn blanket Winnicott described, is owned upstream and renewed on a release schedule. I have called the mechanism gadgetized mediation — the interface through which a child's earliest libidinal processes are modulated by something that is also, quietly, a meter. The gap between an impulse and its gratification, the interval where a child once learned that wanting can be tolerated, thins toward zero.",
  },
  mortality: {
    stage: "late adulthood · the exit",
    add: "At the end the hold the apparatus finds is the clinic. The aging of the body is rewritten as a sequence of treatable deficits, each with a product — the pill that restores function, the hormone that manages decline, the shelf of supplements that sells decline back as a thing one has failed to prevent. The wellness industry supplies the narrative: that with the right purchases one may age successfully, which means actively, youthfully, and above all consumingly. And at the very end the meter is still running — the hospital bill, the facility fee, the costly final drugs — and in more than one wealthy country the spending peaks, and so do the profits, in the last months of a life.",
    quote: "The exit does not exit the economy. It is booked as an input.",
    quoteSource: ESSAY,
    cite: "On Late Adulthood",
  },
  custodial: {
    stage: "the remainder",
    add: "Capital extracts from care the way it extracts from everything: by depending on what it refuses to pay for. The care that continues despite its devaluation is also what survives the capture, and the materials of any politics built on it are modest and mostly old — mutual aid the apparatus has not yet sold back as a feature, the convoy that moves people because they must be moved.",
  },
  glitch: {
    stage: "the remainder",
    add: "There are seams. Children misuse their toys in ways no focus group sanctioned; the old withdraw into a quiet the market cannot price; people still love each other off the record, where no data is generated. Whether those seams are anything more than the texture the system tolerates, or the beginning of an outside, is not a question this map can settle.",
  },
  held: {
    stage: "the remainder",
    add: "This is sublimation in the unglamorous sense — a drive that becomes something made instead of something bought. A reading group, a repair café, an open-source project, a fan archive kept for love and held off the market. None of it is safe; the apparatus is patient, and it has absorbed every one of these before. The live question is whether a given place exists to be captured, or exists, first, for the people in it.",
  },
  holding: {
    stage: "the remainder",
    add: "The materials are modest: time that no one is metering, the right to be bored, a room with no feed running in it, work whose reward is the work and the people doing it beside you. Holding leaves the capacities for attention, boredom, relationship, and play — with their friction, their slowness, their occasional uselessness — in the hands of the person whose they are.",
  },
  face: {
    stage: "the remainder",
    add: "The desire for one another that no platform stands between is the surplus the apparatus is built to catch first, and the one thing it cannot manufacture. People still love each other off the record, where no data is generated. The face is what the profile cannot render.",
  },
};

ATLAS_SITES.forEach((s) => {
  const d = DEEPEN[s.id];
  if (!d) return;
  s.stage = d.stage;
  if (d.add && !s.prose.includes(d.add)) s.prose = [...s.prose, d.add];
  if (d.quote) {
    s.quote = d.quote;
    s.quoteSource = d.quoteSource;
    if (d.cite) s.cite = d.cite;
  }
});

// Curated visual threads between sites (the interconnection web).
export const ATLAS_EDGES: AtlasEdge[] = [
  ['surplus', 'triaxial'], ['triaxial', 'ouroboros'],
  ['ouroboros', 'satisfaction'], ['ouroboros', 'boredom'], ['ouroboros', 'janitor'],
  ['ouroboros', 'rogan'], ['ouroboros', 'crisis'], ['ouroboros', 'firstscreen'],
  ['satisfaction', 'boredom'],
  // the loop's three scales, wired as one operation: session → recovery → identity
  ['ouroboros', 'repair'], ['satisfaction', 'repair'], ['repair', 'cult'], ['repair', 'mortality'],
  ['janitor', 'rogan'], ['rogan', 'cult'], ['crisis', 'mortality'],
  ['firstscreen', 'surplus'], ['mortality', 'custodial'],
  ['boredom', 'glitch'], ['glitch', 'face'], ['janitor', 'face'],
  ['cult', 'held'], ['custodial', 'holding'], ['custodial', 'held'],
  ['holding', 'held'], ['face', 'held'], ['glitch', 'held'], ['firstscreen', 'holding'],
];

// "The Descent": the atlas is a tall stratigraphic section read top-to-bottom —
// surface light → the darkening strata of capture → the remainder as bedrock.
// Node positions for this section are defined in chart.tsx (the `POS` map); the
// per-site `pos` above is retained for the type and any non-spatial use.
export const ATLAS_WORLD = { w: 1320, h: 2940 };
