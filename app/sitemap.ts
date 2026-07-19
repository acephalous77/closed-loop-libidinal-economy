import type { MetadataRoute } from "next";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

const ATELIER_ROUTES = ["/"];

const OHCOSE_ROUTES = [
  "/ohcose",
  "/ohcose/colophon",
  "/ohcose/i-ontogenesis",
  "/ohcose/i-ontogenesis/cradle-anchoring",
  "/ohcose/i-ontogenesis/algorithmic-nurseries",
  "/ohcose/i-ontogenesis/caregiver-as-infrastructure",
  "/ohcose/i-ontogenesis/surplus-extraction",
  "/ohcose/i-ontogenesis/normative-metrics",
  "/ohcose/i-ontogenesis/trust-attachment-optimization",
  "/ohcose/ii-inscriptive-normalization",
  "/ohcose/ii-inscriptive-normalization/desk-as-altar",
  "/ohcose/ii-inscriptive-normalization/algorithmic-calibration",
  "/ohcose/ii-inscriptive-normalization/emotional-hygiene",
  "/ohcose/ii-inscriptive-normalization/recess-as-release-valve",
  "/ohcose/ii-inscriptive-normalization/playing-at-consumption",
  "/ohcose/ii-inscriptive-normalization/temporal-corridor",
  "/ohcose/iii-adolescent-calibration",
  "/ohcose/iii-adolescent-calibration/calibrating-desire",
  "/ohcose/iii-adolescent-calibration/rebellion-packaged",
  "/ohcose/iii-adolescent-calibration/digital-architectures",
  "/ohcose/iii-adolescent-calibration/pharmacopornographic-order",
  "/ohcose/iii-adolescent-calibration/quantified-selfhood",
  "/ohcose/iii-adolescent-calibration/the-initiate",
  "/ohcose/iv-economic-subjectification",
  "/ohcose/iv-economic-subjectification/onboarding",
  "/ohcose/iv-economic-subjectification/algorithmic-mentorship",
  "/ohcose/iv-economic-subjectification/romantic-markets",
  "/ohcose/iv-economic-subjectification/curating-life",
  "/ohcose/iv-economic-subjectification/happiness-mandate",
  "/ohcose/iv-economic-subjectification/entrenchment",
  "/ohcose/v-peak-productivity",
  "/ohcose/v-peak-productivity/consolidation",
  "/ohcose/v-peak-productivity/economic-zenith",
  "/ohcose/v-peak-productivity/family-formation",
  "/ohcose/v-peak-productivity/civic-anchoring",
  "/ohcose/v-peak-productivity/midlife-affect",
  "/ohcose/v-peak-productivity/decline-foreshadowing",
  "/ohcose/vi-consolidation",
  "/ohcose/vi-consolidation/high-water-mark",
  "/ohcose/vi-consolidation/managing-decline",
  "/ohcose/vi-consolidation/intergenerational-obligations",
  "/ohcose/vi-consolidation/golden-years",
  "/ohcose/vi-consolidation/knowledge-transfer",
  "/ohcose/vi-consolidation/phase-closure",
  "/ohcose/vii-exit",
  "/ohcose/vii-exit/liminal-retirement",
  "/ohcose/vii-exit/death-as-logistics",
  "/ohcose/vii-exit/memorial-capitalism",
  "/ohcose/vii-exit/eldercare-markets",
  "/ohcose/vii-exit/cracks-and-residues",
  "/ohcose/vii-exit/lifecycle-closure",
  "/ohcose/viii-ouroboros",
  "/ohcose/viii-ouroboros/closure-of-the-cycle",
  "/ohcose/viii-ouroboros/sovereign-interface",
  "/ohcose/viii-ouroboros/post-human-harvest",
  "/ohcose/viii-ouroboros/the-broadcast",
];

const CHAIR_ROUTES = [
  "/chair",
  "/chair/colophon",
];

const PATRIOTIC_ROUTES = [
  "/patriotic-times",
  "/patriotic-times/colophon",
  "/patriotic-times/plates",
  "/patriotic-times/plates/the-brooks-brothers-riot",
  "/patriotic-times/plates/the-usa-patriot-act",
  "/patriotic-times/plates/the-creation-of-dhs-and-ice",
  "/patriotic-times/plates/guantanamo-on-the-hudson",
  "/patriotic-times/plates/the-abu-ghraib-photographs",
  "/patriotic-times/plates/blackwater-in-new-orleans",
  "/patriotic-times/plates/the-military-commissions-act",
  "/patriotic-times/plates/the-portsmouth-town-hall",
  "/patriotic-times/plates/citizens-united-v-fec",
  "/patriotic-times/plates/midnight-eviction-of-zuccotti",
  "/patriotic-times/plates/the-uc-davis-pepper-spray",
  "/patriotic-times/plates/ndaa-indefinite-detention",
  "/patriotic-times/plates/hr-347",
  "/patriotic-times/plates/the-snowden-revelations",
  "/patriotic-times/plates/shelby-county-v-holder",
  "/patriotic-times/plates/the-watertown-siege",
  "/patriotic-times/plates/the-bundy-ranch-standoff",
  "/patriotic-times/plates/ferguson-missouri",
  "/patriotic-times/plates/the-tear-gas",
  "/patriotic-times/plates/baltimore-maryland",
  "/patriotic-times/plates/the-malheur-wildlife-refuge",
  "/patriotic-times/plates/standing-rock",
  "/patriotic-times/plates/the-j20-mass-arrests",
  "/patriotic-times/plates/the-tiki-torch-march",
  "/patriotic-times/plates/zero-tolerance-border-policy",
  "/patriotic-times/plates/the-mississippi-ice-raids",
  "/patriotic-times/plates/the-michigan-state-capitol",
  "/patriotic-times/plates/the-lafayette-square-photo-op",
  "/patriotic-times/plates/operation-diligent-valor",
  "/patriotic-times/plates/the-wall-of-moms",
  "/patriotic-times/plates/the-kenosha-patrol",
  "/patriotic-times/plates/plot-to-kidnap-whitmer",
  "/patriotic-times/plates/the-january-6th-insurrection",
  "/patriotic-times/plates/the-gallows",
  "/patriotic-times/plates/the-del-rio-river-crossing",
  "/patriotic-times/plates/the-uvalde-hallway",
  "/patriotic-times/plates/the-supreme-court-barricades",
  "/patriotic-times/plates/the-armed-poll-watchers",
  "/patriotic-times/plates/patriot-front-shield-wall",
  "/patriotic-times/plates/marthas-vineyard-flight",
  "/patriotic-times/plates/stop-cop-city-raid",
  "/patriotic-times/plates/the-tennessee-three",
  "/patriotic-times/plates/the-expulsion",
  "/patriotic-times/plates/the-empty-library-shelves",
  "/patriotic-times/plates/the-rio-grande-razor-wire",
  "/patriotic-times/plates/arrest-of-zephyrs-supporters",
  "/patriotic-times/plates/the-silencing",
  "/patriotic-times/plates/the-mic-hold",
  "/patriotic-times/plates/the-columbia-university-raid",
  "/patriotic-times/plates/hinds-hall",
  "/patriotic-times/plates/the-perp-walk",
  "/patriotic-times/plates/madison-square-garden-rally",
  "/patriotic-times/plates/the-blanket-clemency",
  "/patriotic-times/plates/the-alligator-alcatraz",
  "/patriotic-times/plates/mass-deportation-apparatus",
  "/patriotic-times/plates/midnight-deportation-flights",
  "/patriotic-times/plates/child-behind-the-wire",
  "/patriotic-times/plates/dc-army-parade",
  "/patriotic-times/plates/no-kings-protest",
  "/patriotic-times/plates/the-salute-i",
  "/patriotic-times/plates/the-salute-ii",
  "/patriotic-times/plates/the-minnesota-raid",
  "/patriotic-times/plates/the-war-declaration",
];

// The Closed-Loop Libidinal Economy work is offline — a withdrawal
// notice at /closed-loop, with every sub-path redirected to it and the
// whole section noindexed. It is deliberately absent from the sitemap
// while down; restoring the work re-adds its routes here.

const OUROBORIC_ROUTES = ["/ouroboric-condition"];

const MANUFACTURE_ROUTES = ["/manufacture-of-the-subject"];

const PSYCHOPOLITICS_ROUTES = ["/psychopolitics-atlas/index.html"];

const ROUTES = [
  ...ATELIER_ROUTES,
  ...OHCOSE_ROUTES,
  ...CHAIR_ROUTES,
  ...PATRIOTIC_ROUTES,
  ...OUROBORIC_ROUTES,
  ...MANUFACTURE_ROUTES,
  ...PSYCHOPOLITICS_ROUTES,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1.0
        : path === "/ohcose" ||
          path === "/chair" ||
          path === "/patriotic-times" ||
          path === "/ouroboric-condition" ||
          path === "/manufacture-of-the-subject" ||
          path === "/psychopolitics-atlas/index.html"
        ? 0.9
        : // Project-section landings + per-section pages — high
        path.startsWith("/ohcose/i-") ||
          path.startsWith("/ohcose/ii-") ||
          path.startsWith("/ohcose/iii-") ||
          path.startsWith("/ohcose/iv-") ||
          path.startsWith("/ohcose/v-") ||
          path.startsWith("/ohcose/vi-") ||
          path.startsWith("/ohcose/vii-") ||
          path.startsWith("/ohcose/viii-") ||
          path === "/chair/essay" ||
          path === "/chair/zine" ||
          path === "/chair/lineage" ||
          path === "/chair/precedents" ||
          path === "/chair/subsystems" ||
          path === "/chair/archive" ||
          path === "/chair/concepts" ||
          path === "/chair/refusal" ||
          path === "/patriotic-times/plates"
        ? 0.8
        : // Per-plate / per-subsystem / per-lineage / etc. — lower
        path.startsWith("/patriotic-times/plates/") ||
          path.startsWith("/chair/")
        ? 0.7
        : 0.5,
  }));
}
