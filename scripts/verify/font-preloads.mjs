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
 * Runs `next start` itself (port 3777 by default) so CI and local runs are
 * identical. Requires a prior `npm run build`.
 *
 *   node scripts/verify/font-preloads.mjs
 *
 * Counts <link rel="preload" as="font"> occurrences in the served HTML.
 */

import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = process.env.PRELOAD_CHECK_PORT || "3777";
const BASE = `http://127.0.0.1:${PORT}`;

// Recorded 2026-10-12 against the first public build. Counts include
// duplicated weights as served. The psychopolitics atlas is a standalone
// static page under public/ — Vercel resolves the bare directory path, but
// `next start` (local and CI) only serves /psychopolitics-atlas/index.html.
// Its zero is pinned so an accidental conversion into a Next route flags.
const EXPECTED = [
  ["/", 6],
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

async function waitForServer(tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(BASE, { redirect: "manual" });
      if (res.status >= 200 && res.status < 500) return true;
    } catch {
      // not up yet
    }
    await sleep(500);
  }
  return false;
}

const server = spawn("npx", ["next", "start", "-p", PORT], {
  stdio: ["ignore", "pipe", "pipe"],
});

let serverErr = "";
server.stderr.on("data", (d) => {
  serverErr += d.toString();
});

let failed = 0;
try {
  const up = await waitForServer();
  if (!up) {
    console.error("server did not come up — did you run `npm run build`?");
    if (serverErr.trim()) console.error(serverErr.trim().split("\n").slice(-5).join("\n"));
    process.exit(1);
  }

  for (const [route, expected] of EXPECTED) {
    const res = await fetch(BASE + route);
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
} finally {
  server.kill("SIGTERM");
}

if (failed > 0) {
  console.log(`\n${failed} route(s) diverged from the recorded baseline.`);
  process.exit(1);
}
console.log("\nfont-preload invariant holds.");
