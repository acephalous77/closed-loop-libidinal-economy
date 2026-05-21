/**
 * Patriotic Times — canonical plate list.
 *
 * Source of truth: Patriotic_Times_Coloring_Book.pdf (Mar 2026), the
 * author's drafted full coloring book. Sixty-three plates organized
 * chronologically from 2000 (Brooks Brothers Riot) to 2026 (War
 * Declaration). Each plate in the PDF is a postcard format — image
 * with caption on front, stamp/correspondence template on back.
 *
 * Each plate has:
 *   - no: 1–63, the canonical plate number
 *   - slug: URL-safe identifier
 *   - title: as printed in the PDF
 *   - location: city / region as printed
 *   - year: ISO-ish year of the event
 *   - src: image path under /public/patriotic-times/ if available, else null
 *
 * Slots without a src render as placeholder cards on the index. Drop
 * a src filename into the entry and the per-plate coloring route
 * activates.
 */

export interface Plate {
  no: number;
  slug: string;
  title: string;
  location: string;
  year: string;
  src: string | null;
}

export const PLATES: Plate[] = [
  // ───── 2000s ─────
  { no: 1,  slug: "the-brooks-brothers-riot",       title: "The Brooks Brothers Riot",          location: "Miami, Florida",                year: "2000", src: "/patriotic-times/plate-01-the-brooks-brothers-riot.png" },
  { no: 2,  slug: "the-usa-patriot-act",            title: "The USA PATRIOT Act",               location: "Washington, D.C.",              year: "2001", src: null },
  { no: 3,  slug: "the-creation-of-dhs-and-ice",    title: "The Creation of DHS & ICE",         location: "Washington, D.C.",              year: "2002", src: null },
  { no: 4,  slug: "guantanamo-on-the-hudson",       title: "Guantanamo on the Hudson",          location: "New York City",                 year: "2004", src: null },
  { no: 5,  slug: "the-abu-ghraib-photographs",     title: "The Abu Ghraib Photographs",        location: "Abu Ghraib, Iraq",              year: "2004", src: null },
  { no: 6,  slug: "blackwater-in-new-orleans",      title: "Blackwater in New Orleans",         location: "New Orleans, Louisiana",        year: "2005", src: null },
  { no: 7,  slug: "the-military-commissions-act",   title: "The Military Commissions Act",      location: "Washington, D.C.",              year: "2006", src: null },
  { no: 8,  slug: "the-portsmouth-town-hall",       title: "The Portsmouth Town Hall",          location: "Portsmouth, New Hampshire",     year: "2009", src: null },

  // ───── 2010s ─────
  { no: 9,  slug: "citizens-united-v-fec",          title: "Citizens United v. FEC",            location: "Washington, D.C.",              year: "2010", src: null },
  { no: 10, slug: "midnight-eviction-of-zuccotti",  title: "The Midnight Eviction of Zuccotti Park", location: "New York City",            year: "2011", src: null },
  { no: 11, slug: "the-uc-davis-pepper-spray",      title: "The UC Davis Pepper Spray",         location: "Davis, California",             year: "2011", src: null },
  { no: 12, slug: "ndaa-indefinite-detention",      title: "The NDAA Indefinite Detention Clause", location: "Washington, D.C.",           year: "2011", src: null },
  { no: 13, slug: "hr-347",                         title: "H.R. 347",                          location: "Washington, D.C.",              year: "2012", src: null },
  { no: 14, slug: "the-snowden-revelations",        title: "The Snowden Revelations",           location: "Hong Kong",                     year: "2013", src: null },
  { no: 15, slug: "shelby-county-v-holder",         title: "Shelby County v. Holder",           location: "Washington, D.C.",              year: "2013", src: null },
  { no: 16, slug: "the-watertown-siege",            title: "The Watertown Siege",               location: "Watertown, Massachusetts",      year: "2013", src: null },
  { no: 17, slug: "the-bundy-ranch-standoff",       title: "The Bundy Ranch Standoff",          location: "Bunkerville, Nevada",           year: "2014", src: null },
  { no: 18, slug: "ferguson-missouri",              title: "Ferguson, Missouri",                location: "Ferguson, Missouri",            year: "2014", src: "/patriotic-times/plate-18-ferguson-missouri.png" },
  { no: 19, slug: "the-tear-gas",                   title: "The Tear Gas",                      location: "Ferguson, Missouri",            year: "2014", src: null },
  { no: 20, slug: "baltimore-maryland",             title: "Baltimore, Maryland",               location: "Baltimore, Maryland",           year: "2015", src: null },
  { no: 21, slug: "the-malheur-wildlife-refuge",    title: "The Malheur Wildlife Refuge",       location: "Burns, Oregon",                 year: "2016", src: null },
  { no: 22, slug: "standing-rock",                  title: "Standing Rock",                     location: "Cannon Ball, North Dakota",     year: "2016", src: null },
  { no: 23, slug: "the-j20-mass-arrests",           title: "The J20 Mass Arrests",              location: "Washington, D.C.",              year: "2017", src: null },
  { no: 24, slug: "the-tiki-torch-march",           title: "The Tiki Torch March",              location: "Charlottesville, Virginia",     year: "2017", src: null },
  { no: 25, slug: "zero-tolerance-border-policy",   title: "The Zero Tolerance Border Policy",  location: "U.S.–Mexico Border",            year: "2018", src: null },
  { no: 26, slug: "the-mississippi-ice-raids",      title: "The Mississippi ICE Raids",         location: "Morton, Mississippi",           year: "2019", src: null },

  // ───── 2020s ─────
  { no: 27, slug: "the-michigan-state-capitol",     title: "The Michigan State Capitol",        location: "Lansing, Michigan",             year: "2020", src: null },
  { no: 28, slug: "the-lafayette-square-photo-op",  title: "The Lafayette Square Photo-Op",     location: "Washington, D.C.",              year: "2020", src: "/patriotic-times/plate-28-the-lafayette-square-photo-op.png" },
  { no: 29, slug: "operation-diligent-valor",       title: "Operation Diligent Valor",          location: "Portland, Oregon",              year: "2020", src: null },
  { no: 30, slug: "the-wall-of-moms",               title: "The Wall of Moms",                  location: "Portland, Oregon",              year: "2020", src: null },
  { no: 31, slug: "the-kenosha-patrol",             title: "The Kenosha Patrol",                location: "Kenosha, Wisconsin",            year: "2020", src: null },
  { no: 32, slug: "plot-to-kidnap-whitmer",         title: "The Plot to Kidnap Governor Whitmer", location: "Michigan",                    year: "2020", src: null },
  { no: 33, slug: "the-january-6th-insurrection",   title: "The January 6th Insurrection",      location: "Washington, D.C.",              year: "2021", src: null },
  { no: 34, slug: "the-gallows",                    title: "The Gallows",                       location: "Washington, D.C.",              year: "2021", src: "/patriotic-times/plate-34-the-gallows.png" },
  { no: 35, slug: "the-del-rio-river-crossing",     title: "The Del Rio River Crossing",        location: "Del Rio, Texas",                year: "2021", src: null },
  { no: 36, slug: "the-uvalde-hallway",             title: "The Uvalde Hallway",                location: "Uvalde, Texas",                 year: "2022", src: null },
  { no: 37, slug: "the-supreme-court-barricades",   title: "The Supreme Court Barricades",      location: "Washington, D.C.",              year: "2022", src: null },
  { no: 38, slug: "the-armed-poll-watchers",        title: "The Armed Poll Watchers",           location: "Maricopa County, Arizona",      year: "2022", src: null },
  { no: 39, slug: "patriot-front-shield-wall",      title: "The Patriot Front Shield Wall",     location: "Coeur d'Alene, Idaho",          year: "2022", src: null },
  { no: 40, slug: "marthas-vineyard-flight",        title: "The Martha's Vineyard Flight",      location: "Martha's Vineyard, Massachusetts", year: "2022", src: null },
  { no: 41, slug: "stop-cop-city-raid",             title: "The Stop Cop City Raid",            location: "Atlanta, Georgia",              year: "2023", src: null },
  { no: 42, slug: "the-tennessee-three",            title: "The Tennessee Three",               location: "Nashville, Tennessee",          year: "2023", src: null },
  { no: 43, slug: "the-expulsion",                  title: "The Expulsion",                     location: "Nashville, Tennessee",          year: "2023", src: null },
  { no: 44, slug: "the-empty-library-shelves",      title: "The Empty Library Shelves",         location: "Florida",                       year: "2023", src: null },
  { no: 45, slug: "the-rio-grande-razor-wire",      title: "The Rio Grande Razor Wire",         location: "Eagle Pass, Texas",             year: "2023", src: null },
  { no: 46, slug: "arrest-of-zephyrs-supporters",   title: "The Arrest of Zephyr's Supporters", location: "Helena, Montana",               year: "2023", src: null },
  { no: 47, slug: "the-silencing",                  title: "The Silencing",                     location: "Helena, Montana",               year: "2023", src: null },
  { no: 48, slug: "the-mic-hold",                   title: "The Mic Hold",                      location: "Helena, Montana",               year: "2023", src: null },
  { no: 49, slug: "the-columbia-university-raid",   title: "The Columbia University Raid",      location: "New York City",                 year: "2024", src: null },
  { no: 50, slug: "hinds-hall",                     title: "Hind's Hall",                       location: "New York City",                 year: "2024", src: null },
  { no: 51, slug: "the-perp-walk",                  title: "The Perp Walk",                     location: "New York City",                 year: "2024", src: null },
  { no: 52, slug: "madison-square-garden-rally",    title: "The Madison Square Garden Rally",   location: "New York City",                 year: "2024", src: null },
  { no: 53, slug: "the-blanket-clemency",           title: "The Blanket Clemency",              location: "Washington, D.C.",              year: "2025", src: null },
  { no: 54, slug: "the-alligator-alcatraz",         title: "The Alligator Alcatraz",            location: "Texas",                         year: "2025", src: "/patriotic-times/plate-54-the-alligator-alcatraz.png" },
  { no: 55, slug: "mass-deportation-apparatus",     title: "The Mass Deportation Apparatus",    location: "United States",                 year: "2025", src: null },
  { no: 56, slug: "midnight-deportation-flights",   title: "The Midnight Deportation Flights",  location: "United States",                 year: "2025", src: null },
  { no: 57, slug: "child-behind-the-wire",          title: "The Child Behind the Wire",         location: "U.S.–Mexico Border",            year: "2025", src: null },
  { no: 58, slug: "dc-army-parade",                 title: "The Washington D.C. Army Parade",   location: "Washington, D.C.",              year: "2025", src: null },
  { no: 59, slug: "no-kings-protest",               title: "The 'No Kings' Protest",            location: "Washington, D.C.",              year: "2025", src: null },
  { no: 60, slug: "the-salute-i",                   title: "The Salute (I)",                    location: "New York City",                 year: "2026", src: null },
  { no: 61, slug: "the-salute-ii",                  title: "The Salute (II)",                   location: "New York City",                 year: "2026", src: null },
  { no: 62, slug: "the-minnesota-raid",             title: "The Minnesota Raid",                location: "Minnesota",                     year: "2026", src: null },
  { no: 63, slug: "the-war-declaration",            title: "The War Declaration",               location: "Washington, D.C.",              year: "2026", src: null },
];

export function getPlateBySlug(slug: string): Plate | undefined {
  return PLATES.find((p) => p.slug === slug);
}

/** Year groupings for the index page. */
export const DECADES: { label: string; start: number; end: number }[] = [
  { label: "2000s", start: 1,  end: 8  },
  { label: "2010s", start: 9,  end: 26 },
  { label: "2020s", start: 27, end: 63 },
];

export function getPlatesByDecade(label: string): Plate[] {
  const decade = DECADES.find((d) => d.label === label);
  if (!decade) return [];
  return PLATES.filter((p) => p.no >= decade.start && p.no <= decade.end);
}
