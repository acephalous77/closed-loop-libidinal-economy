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

// Curated visual threads between sites (the interconnection web).
export const ATLAS_EDGES: AtlasEdge[] = [
  ['surplus', 'triaxial'], ['triaxial', 'ouroboros'],
  ['ouroboros', 'satisfaction'], ['ouroboros', 'boredom'], ['ouroboros', 'janitor'],
  ['ouroboros', 'rogan'], ['ouroboros', 'crisis'], ['ouroboros', 'firstscreen'],
  ['satisfaction', 'boredom'],
  ['janitor', 'rogan'], ['rogan', 'cult'], ['crisis', 'mortality'],
  ['firstscreen', 'surplus'], ['mortality', 'custodial'],
  ['boredom', 'glitch'], ['glitch', 'face'], ['janitor', 'face'],
  ['cult', 'held'], ['custodial', 'holding'], ['custodial', 'held'],
  ['holding', 'held'], ['face', 'held'], ['glitch', 'held'], ['firstscreen', 'holding'],
];

export const ATLAS_WORLD = { w: 2600, h: 1980 };
