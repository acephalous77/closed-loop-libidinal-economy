/**
 * Walkthrough — the browser sweep the sessions ran by hand through an
 * ad-hoc iframe harness (public/__audit.html); this retires the harness.
 *
 * Per route × viewport (390 mobile, 1440 desktop):
 *   - horizontal overflow: scrollWidth − clientWidth > 1px fails, unless
 *     the pair is in walkthrough-baseline.json (authored bleed and torn
 *     edges, recorded with a reason)
 *   - pageerror events: always fail
 *   - console errors: reported in the summary, counted but not failing —
 *     headless noise is settled empirically before it gates anything
 * Screenshots land in _artifacts/walkthrough/<viewport>/<slug>.png
 * (gitignored).
 *
 *   node scripts/verify/walkthrough.mjs
 */

import { chromium } from "playwright";
import { mkdir, readFile } from "node:fs/promises";
import { startNextServer, stopNextServer } from "./_server.mjs";

const PORT = process.env.WALKTHROUGH_PORT || "3778";
const ARTIFACTS = "_artifacts/walkthrough";

const ROUTES = [
  "/",
  "/closed-loop",
  "/closed-loop/v2-argument",
  "/closed-loop/v2-dynamics",
  "/closed-loop/the-apparatus",
  "/closed-loop/errata",
  "/chair",
  "/chair/essay",
  "/chair/zine",
  "/manufacture-of-the-subject",
  "/patriotic-times/plates",
  "/ohcose",
  "/ouroboric-condition",
  "/psychopolitics-atlas/index.html",
  "/reader",
];

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];

async function loadBaseline() {
  try {
    return JSON.parse(
      await readFile(new URL("./walkthrough-baseline.json", import.meta.url), "utf8"),
    );
  } catch {
    return {};
  }
}

const baseline = await loadBaseline();
const slug = (route) =>
  route === "/" ? "home" : route.replace(/^\//, "").replace(/[/.]/g, "-");

let server;
const failures = [];
const knownOverflows = [];
const consoleNoise = [];

try {
  const started = await startNextServer(PORT);
  server = started.server;

  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    await mkdir(`${ARTIFACTS}/${vp.name}`, { recursive: true });
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    let pageErrors = [];
    let consoleErrors = [];
    page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    for (const route of ROUTES) {
      pageErrors = [];
      consoleErrors = [];
      const url = `${started.base}${route}`;
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      } catch {
        try {
          await page.goto(url, { waitUntil: "load", timeout: 30000 });
        } catch (e) {
          failures.push(
            `${route}@${vp.name} — did not load (${e.message.split("\n")[0]})`,
          );
          continue;
        }
      }
      await page.screenshot({
        path: `${ARTIFACTS}/${vp.name}/${slug(route)}.png`,
        fullPage: true,
      });

      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );
      const key = `${route}@${vp.name}`;

      if (overflow > 1) {
        if (baseline[key]) {
          knownOverflows.push(`${key} — +${overflow}px (known: ${baseline[key]})`);
        } else {
          failures.push(`${key} — horizontal overflow +${overflow}px`);
        }
      }
      if (pageErrors.length > 0) {
        failures.push(`${key} — pageerror: ${pageErrors[0]}`);
      }
      if (consoleErrors.length > 0) {
        consoleNoise.push(
          `${key} — console error ×${consoleErrors.length}: ${consoleErrors[0].slice(0, 120)}`,
        );
      }
      console.log(
        `ok    ${key}${overflow > 0 ? ` (overflow +${overflow}px)` : ""}${
          pageErrors.length ? " [pageerror]" : ""
        }`,
      );
    }
    await context.close();
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const res = await page.goto(`${started.base}/definitely-not-a-page`, {
    waitUntil: "load",
  });
  if (res.status() !== 404) {
    failures.push(`/definitely-not-a-page — expected 404, got ${res.status()}`);
  } else {
    console.log("ok    /definitely-not-a-page — 404");
  }
  await context.close();
  await browser.close();
} catch (e) {
  failures.push(`walkthrough aborted: ${e.message}`);
} finally {
  await stopNextServer(server);
}

if (knownOverflows.length > 0) {
  console.log(`\nknown overflow (baselined):\n  ${knownOverflows.join("\n  ")}`);
}
if (consoleNoise.length > 0) {
  console.log(
    `\nconsole errors (reported, not failing):\n  ${consoleNoise.join("\n  ")}`,
  );
}
if (failures.length > 0) {
  console.log(`\nFAILURES (${failures.length}):\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log("\nwalkthrough clean.");
process.exit(0);
