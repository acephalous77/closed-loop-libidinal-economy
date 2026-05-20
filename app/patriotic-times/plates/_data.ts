/**
 * Patriotic Times — canonical plate list.
 *
 * Drawn from the project's "Coloring Book Scenes of State Violence"
 * docx (Mar 2026). 25 plates organized in four thematic sections.
 *
 * Each plate has:
 *   - slug: URL-safe identifier for /patriotic-times/plates/[slug]
 *   - section: 1 | 2 | 3 | 4 (the docx section grouping)
 *   - sectionTitle / pageNo: display info
 *   - title + caption + scene description
 *   - src: image path under /public/patriotic-times/ if available, else null
 *
 * Slots without a src are placeholder cards in the index. As plates
 * are finalized, add the src filename and the per-plate coloring
 * route activates.
 */

export interface Plate {
  slug: string;
  section: 1 | 2 | 3 | 4;
  sectionTitle: string;
  pageNo: number;
  title: string;
  caption: string;
  scene: string;
  src: string | null;
}

export const SECTIONS: Record<1 | 2 | 3 | 4, string> = {
  1: "The New Vanguard",
  2: "Militarization of Everyday Life",
  3: "Border Cruelty & Xenophobia",
  4: "Vigilantism & Armed Intimidation",
};

export const PLATES: Plate[] = [
  // ===== SECTION 1: THE NEW VANGUARD (Pages 1–6) =====
  {
    slug: "the-salute",
    section: 1, sectionTitle: SECTIONS[1], pageNo: 1,
    title: "The Salute",
    caption: "New York City, 2026.",
    scene: "Border Patrol Agent G. Bovino raising his arm in a Roman salute from the passenger seat of an official vehicle, framed against the blurred city street.",
    src: null,
  },
  {
    slug: "the-minnesota-raid",
    section: 1, sectionTitle: SECTIONS[1], pageNo: 2,
    title: "The Aftermath",
    caption: "Minnesota, 2026.",
    scene: "A heavily armed tactical officer out of focus in the foreground, with the shattered, blood-stained window of a maroon SUV in the snowy background, following an ICE/law-enforcement shooting.",
    src: null,
  },
  {
    slug: "the-perp-walk",
    section: 1, sectionTitle: SECTIONS[1], pageNo: 3,
    title: "The Perp Walk",
    caption: "New York City, 2024.",
    scene: "Luigi Mangione in a bright orange jumpsuit, looking upward, completely surrounded by a dense phalanx of heavily armed NYPD counter-terrorism officers in tactical gear.",
    src: null,
  },
  {
    slug: "the-declaration",
    section: 1, sectionTitle: SECTIONS[1], pageNo: 4,
    title: "The Declaration",
    caption: "Washington, D.C., 2026.",
    scene: "Donald Trump at a podium beneath the Presidential seal in a dark room, wearing a white \"USA\" hat, flanked by flags, announcing major combat operations against Iran.",
    src: null,
  },
  {
    slug: "alligator-alcatraz",
    section: 1, sectionTitle: SECTIONS[1], pageNo: 5,
    title: "The Facility",
    caption: "Texas, 2025.",
    scene: "The sterile, dystopian interior of a tented detention facility — rows of metal bunk beds locked entirely behind heavy chain-link fencing and caged doors.",
    src: "/patriotic-times/plate-alligator-alcatraz.png",
  },
  {
    slug: "the-breach",
    section: 1, sectionTitle: SECTIONS[1], pageNo: 6,
    title: "The Breach",
    caption: "Washington, D.C., 2021.",
    scene: "The chaotic swarm of rioters clashing with riot police at the arched entrance of the US Capitol on January 6th — a sea of MAGA flags, tactical helmets, and makeshift weapons.",
    src: null,
  },

  // ===== SECTION 2: MILITARIZATION OF EVERYDAY LIFE (Pages 7–13) =====
  {
    slug: "lafayette-square",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 7,
    title: "The Photo Op",
    caption: "Washington, D.C., 2020.",
    scene: "The President holding a Bible awkwardly in front of St. John's Church, surrounded by military brass — moments after riot police cleared peaceful protesters with tear gas.",
    src: "/patriotic-times/plate-iii-lafayette-square.png",
  },
  {
    slug: "the-unmarked-van",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 8,
    title: "The Unmarked Van",
    caption: "Portland, 2020.",
    scene: "Camouflage-clad federal agents with no identifying insignia grabbing a protester off a dark city street and forcing them into an unmarked enterprise rental minivan.",
    src: null,
  },
  {
    slug: "the-subway-checkpoint",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 9,
    title: "The Checkpoint",
    caption: "New York City, 2024.",
    scene: "Heavily armed National Guard soldiers in full military fatigues and body armor standing at turnstiles, searching the bags of everyday commuters descending into the NYC transit system.",
    src: null,
  },
  {
    slug: "the-ramp",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 10,
    title: "The Ramp",
    caption: "New York City, 2024.",
    scene: "NYPD officers in heavy riot gear utilizing a massive tactical armored vehicle ramp to breach a second-story window of Hamilton Hall at Columbia University to clear student protesters.",
    src: null,
  },
  {
    slug: "the-forest",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 11,
    title: "The Forest",
    caption: "Atlanta, 2023.",
    scene: "Massive armored police vehicles and SWAT teams pushing through the trees of the Weelaunee Forest — heavy military machinery against raw nature.",
    src: null,
  },
  {
    slug: "the-hallway",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 12,
    title: "The Hallway",
    caption: "Uvalde, 2022.",
    scene: "The agonizingly static security-camera angle showing a dozen heavily armed, tactically geared police officers standing idle in a school hallway checking their phones.",
    src: null,
  },
  {
    slug: "the-tear-gas",
    section: 2, sectionTitle: SECTIONS[2], pageNo: 13,
    title: "The Tear Gas",
    caption: "Ferguson, 2014.",
    scene: "A lone protester in an American flag shirt, throwing a tear-gas canister back at a line of armored police vehicles silhouetted by the glare of strobe lights and gas clouds.",
    src: null,
  },

  // ===== SECTION 3: BORDER CRUELTY & XENOPHOBIA (Pages 14–19) =====
  {
    slug: "the-river",
    section: 3, sectionTitle: SECTIONS[3], pageNo: 14,
    title: "The River",
    caption: "Del Rio, 2021.",
    scene: "Border Patrol agents on horseback using split reins to aggressively corral and whip at Haitian migrants wading through the water.",
    src: null,
  },
  {
    slug: "the-enclosure",
    section: 3, sectionTitle: SECTIONS[3], pageNo: 15,
    title: "The Enclosure",
    caption: "Ursula, 2018.",
    scene: "Migrant children sleeping on thin mats under crinkly foil mylar blankets inside chain-link enclosures.",
    src: null,
  },
  {
    slug: "the-buoys",
    section: 3, sectionTitle: SECTIONS[3], pageNo: 16,
    title: "The Buoys",
    caption: "Eagle Pass, 2023.",
    scene: "The surreal, dystopian barrier of massive orange spheres wrapped in jagged concertina wire floating in the middle of the Rio Grande to physically maim crossing migrants.",
    src: null,
  },
  {
    slug: "the-raid",
    section: 3, sectionTitle: SECTIONS[3], pageNo: 17,
    title: "The Raid",
    caption: "Morton, Mississippi, 2019.",
    scene: "A young, sobbing girl with her face buried in her hands outside a massive food processing plant after ICE swept the facility and took her parents away.",
    src: null,
  },
  {
    slug: "the-tarmac",
    section: 3, sectionTitle: SECTIONS[3], pageNo: 18,
    title: "The Tarmac",
    caption: "Martha's Vineyard, 2022.",
    scene: "Confused, exhausted migrants stepping off a private charter plane onto the tarmac of an affluent island community, used as political props.",
    src: null,
  },
  {
    slug: "the-departure",
    section: 3, sectionTitle: SECTIONS[3], pageNo: 19,
    title: "The Departure",
    caption: "2025.",
    scene: "Shackled individuals walking in a single-file line up the stairs of an unmarked, stark white charter plane on a dark rural tarmac.",
    src: null,
  },

  // ===== SECTION 4: VIGILANTISM & ARMED INTIMIDATION (Pages 20–25) =====
  {
    slug: "the-torches",
    section: 4, sectionTitle: SECTIONS[4], pageNo: 20,
    title: "The Torches",
    caption: "Charlottesville, 2017.",
    scene: "The nighttime scene of white supremacists marching through the University of Virginia campus, their faces illuminated by the glow of tiki torches.",
    src: null,
  },
  {
    slug: "the-gallery",
    section: 4, sectionTitle: SECTIONS[4], pageNo: 21,
    title: "The Gallery",
    caption: "Lansing, Michigan, 2020.",
    scene: "Heavily armed militia members in tactical gear inside the statehouse, screaming down from the gallery directly into the faces of police officers and lawmakers.",
    src: null,
  },
  {
    slug: "the-patrol",
    section: 4, sectionTitle: SECTIONS[4], pageNo: 22,
    title: "The Patrol",
    caption: "Kenosha, 2020.",
    scene: "A teenager with an AR-15 strapped to his chest, walking with his hands up past massive armored police vehicles that are completely ignoring him.",
    src: null,
  },
  {
    slug: "the-drop-box",
    section: 4, sectionTitle: SECTIONS[4], pageNo: 23,
    title: "The Drop Box",
    caption: "Maricopa County, 2022.",
    scene: "Men wearing full tactical gear, masks, and carrying assault rifles sitting in lawn chairs next to ballot drop boxes in Arizona, to \"monitor\" voters.",
    src: null,
  },
  {
    slug: "the-shield-wall",
    section: 4, sectionTitle: SECTIONS[4], pageNo: 24,
    title: "The Shield Wall",
    caption: "Coeur d'Alene, 2022.",
    scene: "Uniform lines of masked men wearing identical khaki pants, navy shirts, and white face coverings marching through city streets carrying riot shields and flags.",
    src: null,
  },
  {
    slug: "the-gallows",
    section: 4, sectionTitle: SECTIONS[4], pageNo: 25,
    title: "The Gallows",
    caption: "Washington, D.C., 2021.",
    scene: "The gallows erected on the National Mall on January 6th, 2021. Patriot iconography in service of the breach. The Capitol behind.",
    src: "/patriotic-times/plate-01-january-6.png",
  },
];

export function getPlateBySlug(slug: string): Plate | undefined {
  return PLATES.find((p) => p.slug === slug);
}

export function getPlatesBySection(section: 1 | 2 | 3 | 4): Plate[] {
  return PLATES.filter((p) => p.section === section);
}
