/**
 * Atlas mobile parity — the text alternatives are the mobile interface.
 * Checks 390x844: index cards, domain directory, decade list, matrix table,
 * evidence key, rail inert state, status fit, no overflow, no external requests.
 *
 *   node scripts/verify/atlas-mobile.mjs
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { startNextServer, stopNextServer } from "./_server.mjs";

const PORT = process.env.ATLAS_MOBILE_PORT || "3781";
const ARTIFACTS = "_artifacts/atlas-mobile";
const failures = [];
const check = (ok, label) => { if (!ok) failures.push(label); };

let server;
try {
  await mkdir(ARTIFACTS, { recursive: true });
  const started = await startNextServer(PORT);
  server = started.server;
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await context.addInitScript(() => {
    try { localStorage.setItem("atlas_intro_seen_v3", "1"); } catch {}
  });
  const page = await context.newPage();
  const pageErrors = [], consoleErrors = [], external = [];
  page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));
  page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
  page.on("request", (r) => { if (!r.url().startsWith(started.base) && !r.url().startsWith("data:")) external.push(r.url()); });

  const res = await page.goto(`${started.base}/psychopolitics-atlas`, { waitUntil: "networkidle", timeout: 30000 });
  const csp = res?.headers()["content-security-policy"] || "";
  check(!!csp && csp.includes("script-src 'self'"), "atlas CSP header missing or too loose");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForSelector("#field-svg", { state: "attached" });
  check((await page.locator("#status").innerText()).includes("654 nodes"), "status lacks 654 nodes");
  check((await page.locator("#status").innerText()).includes("1138 relations"), "status lacks 1138 relations");
  check((await page.locator("#layer-grid line").count()) > 0, "graticule missing");
  check((await page.locator("#layer-hulls > path").count()) === 84, "territory plate paths are not 84");
  check((await page.locator("#layer-edges > path").count()) === 1138, "relation arcs are not 1138 paths");
  check(await page.locator(".field-cartouche").evaluate((el) => getComputedStyle(el).display === "none"), "cartouche visible on mobile");
  const statusFit = await page.evaluate(() => {
    const el = document.querySelector("#status");
    return { scroll: el.scrollWidth, client: el.clientWidth };
  });
  check(statusFit.scroll <= statusFit.client + 1, `status clips: ${statusFit.scroll}/${statusFit.client}`);
  check((await page.locator("#app").getAttribute("data-mode")) === "index", "mobile does not open on the index");
  await page.screenshot({ path: `${ARTIFACTS}/390-default.png`, fullPage: false });

  await page.locator('.modes [data-mode="index"]').click();
  await page.waitForSelector("#index-cards .index-card");
  check((await page.locator("#index-cards .index-card").count()) === 654, "index cards are not 654");
  check((await page.locator("#index-count").innerText()) === "654 of 654", "index count mismatch");
  check(await page.locator(".index-table").evaluate((el) => getComputedStyle(el).display === "none"), "index table visible on mobile");
  await page.locator("#evidence-key summary").click();
  const key = await page.locator("#evidence-key-body").innerText();
  check(key.includes("Untriaged"), "evidence key lacks untriaged");
  check(key.includes("Speculative / not established"), "evidence key lacks speculative label");
  await page.screenshot({ path: `${ARTIFACTS}/390-index.png`, fullPage: false });
  await page.locator("#index-cards .index-card").first().click();
  await page.waitForSelector("#dossier[data-open='1']");
  check(await page.locator("#dossier [data-close]").evaluate((el) => el === document.activeElement), "dossier close control did not take focus");
  await page.screenshot({ path: `${ARTIFACTS}/390-dossier.png`, fullPage: false });
  await page.locator("#dossier [data-close]").click();
  check((await page.locator("#dossier").getAttribute("data-open")) === "0", "dossier did not close");

  await page.locator('.modes [data-mode="domains"]').click();
  check((await page.locator("#dossier").getAttribute("data-open")) === "0", "dossier reopened on domains");
  await page.waitForSelector("#domains-list .alt-row");
  check((await page.locator("#domains-list .alt-row").count()) === 28, "domain directory is not 28 rows");
  check(await page.locator("#domains-svg").evaluate((el) => getComputedStyle(el).display === "none"), "domain SVG visible on mobile");
  await page.screenshot({ path: `${ARTIFACTS}/390-domains.png`, fullPage: false });

  await page.locator('.modes [data-mode="timeline"]').click();
  await page.waitForSelector("#timeline-list .alt-row");
  check((await page.locator("#timeline-list .alt-row").count()) === 654, "timeline list is not 654 nodes");
  check((await page.locator("#timeline-list .alt-decade").count()) >= 12, "timeline list has too few decades");
  check(await page.locator("#timeline-svg").evaluate((el) => getComputedStyle(el).display === "none"), "timeline SVG visible on mobile");
  await page.screenshot({ path: `${ARTIFACTS}/390-timeline.png`, fullPage: false });

  await page.locator('.modes [data-mode="matrix"]').click();
  await page.waitForSelector("#matrix-list tbody tr");
  check((await page.locator("#matrix-list tbody tr").count()) === 62, "matrix table is not 62 rows");
  check(await page.locator("#matrix-svg").evaluate((el) => getComputedStyle(el).display === "none"), "matrix SVG visible on mobile");
  await page.screenshot({ path: `${ARTIFACTS}/390-matrix.png`, fullPage: false });

  await page.locator('.modes [data-mode="paths"]').click();
  await page.waitForSelector("#path-reader[data-open='1']");
  check(await page.locator("#path-reader").isVisible(), "path reader not visible");
  await page.screenshot({ path: `${ARTIFACTS}/390-paths.png`, fullPage: false });
  await page.keyboard.press("Escape");
  await page.locator('.modes [data-mode="field"]').click();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check(overflow <= 1, `horizontal overflow +${overflow}px`);
  await page.screenshot({ path: `${ARTIFACTS}/390-field-after.png`, fullPage: false });

  // Rail: closed is inert, open makes the stage inert.
  const toggle = page.locator("[data-rail-toggle]");
  await toggle.click();
  check((await toggle.getAttribute("aria-expanded")) === "true", "rail toggle lacks aria-expanded=true");
  check(await page.locator("#stage").evaluate((el) => el.inert === true), "stage is not inert with rail open");
  check(await page.locator("#rail").evaluate((el) => el.inert === false), "rail is inert while open");
  await toggle.click();
  check((await toggle.getAttribute("aria-expanded")) === "false", "rail toggle lacks aria-expanded=false");
  check(await page.locator("#rail").evaluate((el) => el.inert === true), "closed rail is not inert");

  check(pageErrors.length === 0, `page errors: ${pageErrors.join(" | ")}`);
  check(consoleErrors.length === 0, `console errors: ${consoleErrors.join(" | ")}`);
  check(external.length === 0, `external requests: ${[...new Set(external)].join(" | ")}`);

  await browser.close();
} finally {
  await stopNextServer(server);
}

if (failures.length) {
  console.error(`atlas-mobile: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log("atlas-mobile: PASS — 390px alternatives, rail inert, no overflow/external requests");
