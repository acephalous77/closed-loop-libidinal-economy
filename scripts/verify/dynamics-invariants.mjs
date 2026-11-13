/**
 * Dynamics invariants — the numerical and interaction fixes that the
 * prose cannot check. Each assertion names the defect it guards.
 *
 *   node scripts/verify/dynamics-invariants.mjs
 */
import { chromium } from "playwright";
import { startNextServer, stopNextServer } from "./_server.mjs";

const PORT = process.env.DYNAMICS_INVARIANTS_PORT || "3784";
const failures = [];
const check = (ok, label) => {
  if (!ok) failures.push(label);
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let server;
let browser;
try {
  const started = await startNextServer(PORT);
  server = started.server;
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e.message || e)));

  // C1 — the pair key must preserve register order (SC not CS).
  await page.goto(`${started.base}/closed-loop/v2-dynamics/libidinal-routing`, { waitUntil: "networkidle" });
  await sleep(300);
  const timeSlider = page.locator('input[type="range"]').first();
  await timeSlider.evaluate((e) => {
    const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    set.call(e, e.max);
    e.dispatchEvent(new Event("input", { bubbles: true }));
    e.dispatchEvent(new Event("change", { bubbles: true }));
  });
  await sleep(500);
  const cells = await page.locator(".cell-value").allTextContents();
  check(cells[1] === "0.95", `S-C saturation is ${cells[1]} (expected 0.95)`);
  check(cells[2] === "0.69", `S-P saturation is ${cells[2]} (expected 0.69)`);
  check(cells[3] === "0.90", `S-K saturation is ${cells[3]} (expected 0.90)`);
  check(cells[11] === "0.58", `P-K saturation is ${cells[11]} (expected 0.58)`);

  // C2 — the branching ratio includes the decay lifetime; the default
  // parameters are supercritical, not subcritical.
  await page.goto(`${started.base}/closed-loop/v2-dynamics/network-coupling`, { waitUntil: "networkidle" });
  await sleep(300);
  const networkText = await page.locator("body").innerText();
  check(networkText.includes("branching ratio rho(W) * alpha / (1 - decay)"), "branching-ratio label omits the decay term");
  check(/supercritical \(platform-wide\)/.test(networkText), "default branching ratio is not labelled supercritical");

  // C4 — the Lyapunov certificate starts at D_KL(start || target), not 0.
  await page.goto(`${started.base}/closed-loop/v2-dynamics/metric-superego`, { waitUntil: "networkidle" });
  await sleep(400);
  const metricText = await page.locator("body").innerText();
  check(metricText.includes("7.94e-1"), "initial D_KL is not 7.94e-1");

  // C5 — the Hawkes simulation keeps advancing while a slider is dragged.
  await page.goto(`${started.base}/closed-loop/v2-dynamics/somatic-hawkes`, { waitUntil: "networkidle" });
  await sleep(300);
  const play = page.getByRole("button", { name: /play/i }).first();
  await play.waitFor({ state: "visible" });
  await play.click();
  await page.waitForFunction(
    () => [...document.querySelectorAll("button")].some((b) => /pause/i.test(b.textContent || "")),
    { timeout: 3000 },
  );
  const hashPaths = () =>
    page.evaluate(() => {
      const ds = [...document.querySelectorAll("svg path")].map((p) => p.getAttribute("d") || "");
      return ds.join("").split("").reduce((h, c) => ((h * 31 + c.charCodeAt(0)) | 0), 0);
    });
  const h0 = await hashPaths();
  let h1 = h0;
  for (let i = 0; i < 5 && h1 === h0; i++) {
    await sleep(250);
    h1 = await hashPaths();
  }
  check(h0 !== h1, "Hawkes plate did not advance after Play");
  const slider = page.locator('input[type="range"]').first();
  const box = await slider.boundingBox();
  const during = [];
  await page.mouse.move(box.x + box.width * 0.25, box.y + box.height / 2);
  await page.mouse.down();
  for (let i = 0; i < 8; i++) {
    await page.mouse.move(box.x + box.width * (0.25 + i * 0.05), box.y + box.height / 2);
    await sleep(90);
    during.push(await hashPaths());
  }
  await page.mouse.up();
  check(new Set(during).size >= 3, "Hawkes plate froze during a slider drag");

  // D1 — the reclamation window set is derived from maxIsi, so changing
  // θ_ref reclassifies users while paused.
  await page.goto(`${started.base}/closed-loop/the-dynamics/reclamation-trajectories`, { waitUntil: "networkidle" });
  await sleep(300);
  const selects = page.locator("select");
  for (let i = 0; i < (await selects.count()); i++) {
    const opts = await selects.nth(i).locator("option").allTextContents();
    if (opts.some((o) => /with-bonus/.test(o))) await selects.nth(i).selectOption({ index: 1 });
    if (opts.includes("200")) await selects.nth(i).selectOption({ label: "200" });
  }
  const threshold = page.locator("select").filter({ has: page.locator("option", { hasText: "1s" }) }).first();
  await threshold.selectOption({ label: "1s" });
  await page.getByRole("button", { name: /^run$/i }).first().click();
  await sleep(3000);
  const windowed = () =>
    page.evaluate(() => {
      const s = [...document.querySelectorAll("span")].find((el) => /^\d+ \/ \d+$/.test((el.textContent || "").trim()));
      return s ? s.textContent.trim() : "";
    });
  const atOneSecond = await windowed();
  check(parseInt(atOneSecond, 10) > 0, `with-bonus at 1s windowed set is ${atOneSecond}`);
  await threshold.selectOption({ label: "5 min" });
  await sleep(500);
  const atFiveMinutes = await windowed();
  check(parseInt(atFiveMinutes, 10) === 0, `5-minute threshold did not clear the windowed set (${atFiveMinutes})`);

  // C6/C7 — the schematic exposes its parts to assistive tech.
  await page.goto(`${started.base}/closed-loop/the-architecture`, { waitUntil: "networkidle" });
  await sleep(300);
  check((await page.locator("svg.schematic-svg").getAttribute("role")) === "group", "schematic still prunes its parts with role=img");
  check((await page.locator('svg.schematic-svg [role="button"]').count()) >= 10, "schematic parts are missing from the a11y tree");

  // D6 — the cohort tooltip is reachable without a mouse.
  await page.goto(`${started.base}/closed-loop/the-dynamics/cohort-gradient`, { waitUntil: "networkidle" });
  await sleep(300);
  const points = page.locator('svg [aria-label^="Age "]');
  check((await points.count()) === 6, `cohort keyboard points: ${await points.count()}`);
  await points.nth(2).focus();
  await sleep(200);
  check((await page.evaluate(() => document.activeElement?.getAttribute("aria-label") || "")).startsWith("Age "), "cohort point did not take focus");
  check((await page.locator("body").innerText()).includes("age = 8"), "cohort focus did not reveal its tooltip");

  // D8 — expanding a TikTok diagram must reveal the whole drawing.
  await page.goto(`${started.base}/closed-loop/the-dynamics/tiktok`, { waitUntil: "networkidle" });
  await sleep(300);
  const expand = page.locator("button[aria-expanded]").first();
  const panel = expand.locator("div").first();
  const before = await panel.evaluate((e) => e.getBoundingClientRect().height);
  await expand.click();
  await sleep(350);
  const after = await panel.evaluate((e) => e.getBoundingClientRect().height);
  check(after > before + 20, `TikTok expanded height ${before} -> ${after}`);

  // E5 — the preserved mind-map exposes nodes to the keyboard.
  await page.goto(`${started.base}/simulator/mindmap.html`, { waitUntil: "networkidle" });
  await sleep(600);
  const mindNodes = page.locator('svg [role="button"][aria-label]');
  check((await mindNodes.count()) >= 40, `mindmap focusable nodes: ${await mindNodes.count()}`);
  await mindNodes.nth(3).focus();
  await sleep(200);
  const sideBefore = await page.locator(".mm-side").innerText();
  await mindNodes.nth(3).press("Enter");
  await sleep(300);
  check((await page.locator(".mm-side").innerText()) !== sideBefore, "mindmap Enter did not select the focused node");

  check(errors.length === 0, `page errors: ${errors.slice(0, 3).join(" | ")}`);
} finally {
  if (browser) await browser.close();
  if (server) await stopNextServer(server);
}

if (failures.length) {
  console.error(`dynamics-invariants: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log("dynamics-invariants: PASS — routing, branching, KL, Hawkes, reclamation, schematic, cohort, tiktok, mindmap");
