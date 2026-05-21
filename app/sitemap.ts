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

const CLOSED_LOOP_ROUTES = [
  "/closed-loop",
  "/closed-loop/the-argument",
  "/closed-loop/the-argument/the-loop",
  "/closed-loop/the-argument/citizen-after-the-pause",
  "/closed-loop/the-argument/adolescence-without-outside",
  "/closed-loop/the-argument/sincere-captives",
  "/closed-loop/the-argument/note",
  "/closed-loop/the-mathematics",
  "/closed-loop/the-dynamics",
  "/closed-loop/the-dynamics/foreclosure-clock",
  "/closed-loop/the-dynamics/reclamation-trajectories",
  "/closed-loop/the-dynamics/closed-loop",
  "/closed-loop/the-dynamics/libidinal-routing",
  "/closed-loop/the-dynamics/chrono-debt",
  "/closed-loop/the-dynamics/captured-resonance",
  "/closed-loop/the-dynamics/somatic-optimization",
  "/closed-loop/the-dynamics/surplus",
  "/closed-loop/the-dynamics/metric-superego",
  "/closed-loop/the-dynamics/causal-chain",
  "/closed-loop/the-dynamics/intervention",
  "/closed-loop/the-dynamics/cohort-gradient",
  "/closed-loop/the-dynamics/mode-space",
  "/closed-loop/the-dynamics/tiktok",
  "/closed-loop/reading-list",
  "/closed-loop/open-questions",
  "/closed-loop/instrumentation",
  "/closed-loop/colophon",
];

const ROUTES = [...ATELIER_ROUTES, ...CLOSED_LOOP_ROUTES, ...OHCOSE_ROUTES, ...CHAIR_ROUTES, ...PATRIOTIC_ROUTES];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1.0
        : path === "/closed-loop" || path === "/ohcose"
        ? 0.9
        : path === "/chair" || path === "/patriotic-times"
        ? 0.9
        : path.startsWith("/closed-loop/the-") || path.startsWith("/ohcose/i-") || path.startsWith("/ohcose/ii-") || path.startsWith("/ohcose/iii-")
        ? 0.8
        : 0.5,
  }));
}
