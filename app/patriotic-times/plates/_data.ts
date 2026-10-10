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
  note?: string;
}

export const PLATES: Plate[] = [
  // ───── 2000s ─────
  { no: 1,  slug: "the-brooks-brothers-riot",       title: "The Brooks Brothers Riot",          location: "Miami, Florida",                year: "2000", src: "/patriotic-times/plate-01-the-brooks-brothers-riot.webp", note: "Corporate intimidation disrupts the vote." },
  { no: 2,  slug: "the-usa-patriot-act",            title: "The USA PATRIOT Act",               location: "Washington, D.C.",              year: "2001", src: "/patriotic-times/plate-02-the-usa-patriot-act.webp", note: "The death of privacy." },
  { no: 3,  slug: "the-creation-of-dhs-and-ice",    title: "The Creation of DHS & ICE",         location: "Washington, D.C.",              year: "2002", src: "/patriotic-times/plate-03-the-creation-of-dhs-and-ice.webp", note: "The domestic security apparatus is born." },
  { no: 4,  slug: "guantanamo-on-the-hudson",       title: "Guantanamo on the Hudson",          location: "New York City",                 year: "2004", src: "/patriotic-times/plate-04-guantanamo-on-the-hudson.webp", note: "Preemptive mass arrests at the RNC." },
  { no: 5,  slug: "the-abu-ghraib-photographs",     title: "The Abu Ghraib Photographs",        location: "Abu Ghraib, Iraq",              year: "2004", src: "/patriotic-times/plate-05-the-abu-ghraib-photographs.webp", note: "Unchecked executive cruelty." },
  { no: 6,  slug: "blackwater-in-new-orleans",      title: "Blackwater in New Orleans",         location: "New Orleans, Louisiana",        year: "2005", src: "/patriotic-times/plate-06-blackwater-in-new-orleans.webp", note: "Private mercenaries patrol American streets." },
  { no: 7,  slug: "the-military-commissions-act",   title: "The Military Commissions Act",      location: "Washington, D.C.",              year: "2006", src: "/patriotic-times/plate-07-the-military-commissions-act.webp", note: "The stripping of habeas corpus." },
  { no: 8,  slug: "the-portsmouth-town-hall",       title: "The Portsmouth Town Hall",          location: "Portsmouth, New Hampshire",     year: "2009", src: "/patriotic-times/plate-08-the-portsmouth-town-hall.webp", note: "Armed intimidation enters mainstream politics." },

  // ───── 2010s ─────
  { no: 9,  slug: "citizens-united-v-fec",          title: "Citizens United v. FEC",            location: "Washington, D.C.",              year: "2010", src: "/patriotic-times/plate-09-citizens-united-v-fec.webp", note: "Dark money floods the system." },
  { no: 10, slug: "midnight-eviction-of-zuccotti",  title: "The Midnight Eviction of Zuccotti Park", location: "New York City",            year: "2011", src: "/patriotic-times/plate-10-midnight-eviction-of-zuccotti.webp", note: "Crushing Occupy Wall Street." },
  { no: 11, slug: "the-uc-davis-pepper-spray",      title: "The UC Davis Pepper Spray",         location: "Davis, California",             year: "2011", src: "/patriotic-times/plate-11-the-uc-davis-pepper-spray.webp" },
  { no: 12, slug: "ndaa-indefinite-detention",      title: "The NDAA Indefinite Detention Clause", location: "Washington, D.C.",           year: "2011", src: "/patriotic-times/plate-12-ndaa-indefinite-detention.webp", note: "Military jurisdiction expands." },
  { no: 13, slug: "hr-347",                         title: "H.R. 347",                          location: "Washington, D.C.",              year: "2012", src: "/patriotic-times/plate-13-hr-347.webp", note: "Criminalization of protest near political figures." },
  { no: 14, slug: "the-snowden-revelations",        title: "The Snowden Revelations",           location: "Hong Kong",                     year: "2013", src: "/patriotic-times/plate-14-the-snowden-revelations.webp", note: "The physical footprint of the Panopticon." },
  { no: 15, slug: "shelby-county-v-holder",         title: "Shelby County v. Holder",           location: "Washington, D.C.",              year: "2013", src: "/patriotic-times/plate-15-shelby-county-v-holder.webp", note: "Gutting the Voting Rights Act." },
  { no: 16, slug: "the-watertown-siege",            title: "The Watertown Siege",               location: "Watertown, Massachusetts",      year: "2013", src: "/patriotic-times/plate-16-the-watertown-siege.webp", note: "A suburb under military lockdown." },
  { no: 17, slug: "the-bundy-ranch-standoff",       title: "The Bundy Ranch Standoff",          location: "Bunkerville, Nevada",           year: "2014", src: "/patriotic-times/plate-17-the-bundy-ranch-standoff.webp", note: "Paramilitaries face down the feds." },
  { no: 18, slug: "ferguson-missouri",              title: "Ferguson, Missouri",                location: "Ferguson, Missouri",            year: "2014", src: "/patriotic-times/plate-18-ferguson-missouri.webp", note: "Main Street becomes a war zone." },
  { no: 19, slug: "the-tear-gas",                   title: "The Tear Gas",                      location: "Ferguson, Missouri",            year: "2014", src: "/patriotic-times/plate-19-the-tear-gas.webp" },
  { no: 20, slug: "baltimore-maryland",             title: "Baltimore, Maryland",               location: "Baltimore, Maryland",           year: "2015", src: "/patriotic-times/plate-20-baltimore-maryland.webp", note: "The National Guard locks down a city." },
  { no: 21, slug: "the-malheur-wildlife-refuge",    title: "The Malheur Wildlife Refuge",       location: "Burns, Oregon",                 year: "2016", src: "/patriotic-times/plate-21-the-malheur-wildlife-refuge.webp", note: "An armed right-wing occupation goes unchecked." },
  { no: 22, slug: "standing-rock",                  title: "Standing Rock",                     location: "Cannon Ball, North Dakota",     year: "2016", src: "/patriotic-times/plate-22-standing-rock.webp", note: "Water cannons in the freezing cold for corporate oil." },
  { no: 23, slug: "the-j20-mass-arrests",           title: "The J20 Mass Arrests",              location: "Washington, D.C.",              year: "2017", src: "/patriotic-times/plate-23-the-j20-mass-arrests.webp", note: "Felony riot charges to chill public dissent." },
  { no: 24, slug: "the-tiki-torch-march",           title: "The Tiki Torch March",              location: "Charlottesville, Virginia",     year: "2017", src: "/patriotic-times/plate-24-the-tiki-torch-march.webp", note: "The torchlit march of ethno-nationalism." },
  { no: 25, slug: "zero-tolerance-border-policy",   title: "The Zero Tolerance Border Policy",  location: "U.S.–Mexico Border",            year: "2018", src: "/patriotic-times/plate-25-zero-tolerance-border-policy.webp", note: "Family separation as a weapon." },
  { no: 26, slug: "the-mississippi-ice-raids",      title: "The Mississippi ICE Raids",         location: "Morton, Mississippi",           year: "2019", src: "/patriotic-times/plate-26-the-mississippi-ice-raids.webp" },

  // ───── 2020s ─────
  { no: 27, slug: "the-michigan-state-capitol",     title: "The Michigan State Capitol",        location: "Lansing, Michigan",             year: "2020", src: "/patriotic-times/plate-27-the-michigan-state-capitol.webp", note: "Armed militias scream at state police." },
  { no: 28, slug: "the-lafayette-square-photo-op",  title: "The Lafayette Square Photo-Op",     location: "Washington, D.C.",              year: "2020", src: "/patriotic-times/plate-28-the-lafayette-square-photo-op.webp", note: "Violently clearing a park for a Bible photo-op." },
  { no: 29, slug: "operation-diligent-valor",       title: "Operation Diligent Valor",          location: "Portland, Oregon",              year: "2020", src: "/patriotic-times/plate-29-operation-diligent-valor.webp", note: "Unidentified federal agents in unmarked vans." },
  { no: 30, slug: "the-wall-of-moms",               title: "The Wall of Moms",                  location: "Portland, Oregon",              year: "2020", src: "/patriotic-times/plate-30-the-wall-of-moms.webp" },
  { no: 31, slug: "the-kenosha-patrol",             title: "The Kenosha Patrol",                location: "Kenosha, Wisconsin",            year: "2020", src: "/patriotic-times/plate-31-the-kenosha-patrol.webp" },
  { no: 32, slug: "plot-to-kidnap-whitmer",         title: "The Plot to Kidnap Governor Whitmer", location: "Michigan",                    year: "2020", src: "/patriotic-times/plate-32-plot-to-kidnap-whitmer.webp", note: "Escalation to domestic terror plots." },
  { no: 33, slug: "the-january-6th-insurrection",   title: "The January 6th Insurrection",      location: "Washington, D.C.",              year: "2021", src: "/patriotic-times/plate-33-the-january-6th-insurrection.webp", note: "The violent breach of the transfer of power." },
  { no: 34, slug: "the-gallows",                    title: "The Gallows",                       location: "Washington, D.C.",              year: "2021", src: "/patriotic-times/plate-34-the-gallows.webp" },
  { no: 35, slug: "the-del-rio-river-crossing",     title: "The Del Rio River Crossing",        location: "Del Rio, Texas",                year: "2021", src: "/patriotic-times/plate-35-the-del-rio-river-crossing.webp" },
  { no: 36, slug: "the-uvalde-hallway",             title: "The Uvalde Hallway",                location: "Uvalde, Texas",                 year: "2022", src: "/patriotic-times/plate-36-the-uvalde-hallway.webp" },
  { no: 37, slug: "the-supreme-court-barricades",   title: "The Supreme Court Barricades",      location: "Washington, D.C.",              year: "2022", src: "/patriotic-times/plate-37-the-supreme-court-barricades.webp" },
  { no: 38, slug: "the-armed-poll-watchers",        title: "The Armed Poll Watchers",           location: "Maricopa County, Arizona",      year: "2022", src: "/patriotic-times/plate-38-the-armed-poll-watchers.webp" },
  { no: 39, slug: "patriot-front-shield-wall",      title: "The Patriot Front Shield Wall",     location: "Coeur d'Alene, Idaho",          year: "2022", src: "/patriotic-times/plate-39-patriot-front-shield-wall.webp" },
  { no: 40, slug: "marthas-vineyard-flight",        title: "The Martha's Vineyard Flight",      location: "Martha's Vineyard, Massachusetts", year: "2022", src: "/patriotic-times/plate-40-marthas-vineyard-flight.webp" },
  { no: 41, slug: "stop-cop-city-raid",             title: "The Stop Cop City Raid",            location: "Atlanta, Georgia",              year: "2023", src: "/patriotic-times/plate-41-stop-cop-city-raid.webp" },
  { no: 42, slug: "the-tennessee-three",            title: "The Tennessee Three",               location: "Nashville, Tennessee",          year: "2023", src: "/patriotic-times/plate-42-the-tennessee-three.webp" },
  { no: 43, slug: "the-expulsion",                  title: "The Expulsion",                     location: "Nashville, Tennessee",          year: "2023", src: "/patriotic-times/plate-43-the-expulsion.webp", note: "Partisan purges of elected officials." },
  { no: 44, slug: "the-empty-library-shelves",      title: "The Empty Library Shelves",         location: "Florida",                       year: "2023", src: "/patriotic-times/plate-44-the-empty-library-shelves.webp" },
  { no: 45, slug: "the-rio-grande-razor-wire",      title: "The Rio Grande Razor Wire",         location: "Eagle Pass, Texas",             year: "2023", src: "/patriotic-times/plate-45-the-rio-grande-razor-wire.webp" },
  { no: 46, slug: "arrest-of-zephyrs-supporters",   title: "The Arrest of Zephyr's Supporters", location: "Helena, Montana",               year: "2023", src: "/patriotic-times/plate-46-arrest-of-zephyrs-supporters.webp" },
  { no: 47, slug: "the-silencing",                  title: "The Silencing",                     location: "Helena, Montana",               year: "2023", src: "/patriotic-times/plate-47-the-silencing.webp" },
  { no: 48, slug: "the-mic-hold",                   title: "The Mic Hold",                      location: "Helena, Montana",               year: "2023", src: "/patriotic-times/plate-48-the-mic-hold.webp" },
  { no: 49, slug: "the-columbia-university-raid",   title: "The Columbia University Raid",      location: "New York City",                 year: "2024", src: "/patriotic-times/plate-49-the-columbia-university-raid.webp", note: "Militarized crackdowns on student speech." },
  { no: 50, slug: "hinds-hall",                     title: "Hind's Hall",                       location: "New York City",                 year: "2024", src: "/patriotic-times/plate-50-hinds-hall.webp" },
  { no: 51, slug: "the-perp-walk",                  title: "The Perp Walk",                     location: "New York City",                 year: "2024", src: "/patriotic-times/plate-51-the-perp-walk.webp" },
  { no: 52, slug: "madison-square-garden-rally",    title: "The Madison Square Garden Rally",   location: "New York City",                 year: "2024", src: "/patriotic-times/plate-52-madison-square-garden-rally.webp" },
  { no: 53, slug: "the-blanket-clemency",           title: "The Blanket Clemency",              location: "Washington, D.C.",              year: "2025", src: "/patriotic-times/plate-53-the-blanket-clemency.webp", note: "Pardoning political violence." },
  { no: 54, slug: "the-alligator-alcatraz",         title: "The Alligator Alcatraz",            location: "Texas",                         year: "2025", src: "/patriotic-times/plate-54-the-alligator-alcatraz.webp" },
  { no: 55, slug: "mass-deportation-apparatus",     title: "The Mass Deportation Apparatus",    location: "United States",                 year: "2025", src: "/patriotic-times/plate-55-mass-deportation-apparatus.webp", note: "The explosion of ICE detention camps." },
  { no: 56, slug: "midnight-deportation-flights",   title: "The Midnight Deportation Flights",  location: "United States",                 year: "2025", src: "/patriotic-times/plate-56-midnight-deportation-flights.webp" },
  { no: 57, slug: "child-behind-the-wire",          title: "The Child Behind the Wire",         location: "U.S.–Mexico Border",            year: "2025", src: "/patriotic-times/plate-57-child-behind-the-wire.webp" },
  { no: 58, slug: "dc-army-parade",                 title: "The Washington D.C. Army Parade",   location: "Washington, D.C.",              year: "2025", src: "/patriotic-times/plate-58-dc-army-parade.webp", note: "Dictatorial aesthetics met with millions in the streets." },
  { no: 59, slug: "no-kings-protest",               title: "The 'No Kings' Protest",            location: "Washington, D.C.",              year: "2025", src: "/patriotic-times/plate-59-no-kings-protest.webp" },
  { no: 60, slug: "the-salute-i",                   title: "The Salute (I)",                    location: "New York City",                 year: "2026", src: "/patriotic-times/plate-60-the-salute-i.webp" },
  { no: 61, slug: "the-salute-ii",                  title: "The Salute (II)",                   location: "New York City",                 year: "2026", src: "/patriotic-times/plate-61-the-salute-ii.webp" },
  { no: 62, slug: "the-minnesota-raid",             title: "The Minnesota Raid",                location: "Minnesota",                     year: "2026", src: "/patriotic-times/plate-62-the-minnesota-raid.webp" },
  { no: 63, slug: "the-war-declaration",            title: "The War Declaration",               location: "Washington, D.C.",              year: "2026", src: "/patriotic-times/plate-63-the-war-declaration.webp" },
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
