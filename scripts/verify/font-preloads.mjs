/**
 * Font-preload invariant — the 2026-10-11 cross-work leak check, automated.
 *
 * Turbopack dedupes byte-identical next/font configurations across layouts;
 * when two works shared a font config, one route preloaded the other work's
 * faces (chair routes carried brochure bytes, −180KB once fixed). The fix was
 * unique configs per work; this script keeps them unique by pinning the
 * measured preload count per route. A count that moves means either a font
 * config was deduped again or a route deliberately gained/lost a face —
 * update EXPECTED in that case, together with the commit that says why.
 *
 * Faces were vendored into app/_fonts on 2026-10-12 (no build-time Google
 * fetch); the counts below held unchanged across that swap.
 *
 * Runs `next start` itself via the shared helper (port 3777 by default) so
 * CI and local runs are identical. Requires a prior `npm run build`.
 *
 *   node scripts/verify/font-preloads.mjs
 *
 * Counts <link rel="preload" as="font"> occurrences in the served HTML.
 */

import { startNextServer, stopNextServer } from "./_server.mjs";

const PORT = process.env.PRELOAD_CHECK_PORT || "3777";

// Recorded 2026-10-12 against the first public build. Counts include
// duplicated weights as served. The psychopolitics atlas is a standalone
// static page under public/ — Vercel resolves the bare directory path, but
// `next start` (local and CI) only serves /psychopolitics-atlas/index.html.
// Its zero is pinned so an accidental conversion into a Next route flags.
const EXPECTED = [
  ["/", 6],
  ["/colophon", 6],
  ["/closed-loop", 6],
  ["/closed-loop/v2-argument", 6],
  ["/chair", 17],
  ["/chair/essay", 16],
  ["/manufacture-of-the-subject", 14],
  ["/patriotic-times/plates", 9],
  ["/psychopolitics-atlas/index.html", 0],
  ["/ohcose", 6],
  ["/ouroboric-condition", 8],
];

function countFontPreloads(html) {
  return (html.match(/as="font"/g) || []).length;
}

let server;
let failed = 0;
try {
  const started = await startNextServer(PORT);
  server = started.server;

  for (const [route, expected] of EXPECTED) {
    const res = await fetch(started.base + route);
    if (!res.ok) {
      console.log(`FAIL  ${route} — HTTP ${res.status}`);
      failed++;
      continue;
    }
    const html = await res.text();
    const measured = countFontPreloads(html);
    if (measured === expected) {
      console.log(`ok    ${route} — ${measured} font preloads`);
    } else {
      console.log(`FAIL  ${route} — recorded ${expected}, measured ${measured}`);
      failed++;
    }
  }
} catch (e) {
  console.error(e.message);
  failed++;
} finally {
  await stopNextServer(server);
}

if (failed > 0) {
  console.log(`\n${failed} route(s) diverged from the recorded baseline.`);
  process.exit(1);
}
console.log("\nfont-preload invariant holds.");
process.exit(0);
