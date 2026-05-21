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
  "/patriotic-times/plates/ferguson-missouri",
  "/patriotic-times/plates/the-lafayette-square-photo-op",
  "/patriotic-times/plates/the-gallows",
  "/patriotic-times/plates/the-alligator-alcatraz",
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
