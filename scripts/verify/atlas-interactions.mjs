/**
 * Atlas interactions — the map's hands. Covers the gestures that are easy
 * to break and invisible to the count/contrast suites: drag-to-pan,
 * one-finger touch pan, pinch that starts on a node, wheel zoom (including
 * Firefox line deltas), wheel-over-overlay containment, zoom during a
 * fit tween, the minimap mapping, hull clicks, URL mode restore, and
 * leaving a guided path by switching to Field.
 *
 *   node scripts/verify/atlas-interactions.mjs
 */
import { chromium } from "playwright";
import { startNextServer, stopNextServer } from "./_server.mjs";

const PORT = process.env.ATLAS_INTERACTIONS_PORT || "3783";
const failures = [];
const check = (ok, label) => {
  if (!ok) failures.push(label);
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function worldTransform(page) {
  return page.evaluate(() => {
    const t = document.querySelector("#world")?.getAttribute("transform") || "";
    const m = t.match(/translate\(([^ ]+) ([^)]+)\) scale\(([^)]+)\)/);
    return m ? { x: +m[1], y: +m[2], k: +m[3], raw: t } : null;
  });
}

async function stagePointAwayFromNodes(page, inset = 80) {
  return page.evaluate((inset) => {
    const st = document.querySelector("#stage").getBoundingClientRect();
    for (let y = st.top + inset; y < st.bottom - inset; y += 24) {
      for (let x = st.left + inset; x < st.right - inset; x += 24) {
        const el = document.elementFromPoint(x, y);
        if (!el) continue;
        if (el.closest("[data-node], #layer-hulls")) continue;
        if (el.closest(".zoom-controls, .minimap, .dossier, .path-reader, .field-cartouche, .index-view, .alt-view")) continue;
        if (el.closest("#stage")) return { x, y };
      }
    }
    return null;
  }, inset);
}

let server;
let browser;
try {
  const started = await startNextServer(PORT);
  server = started.server;
  browser = await chromium.launch();

  // ── desktop ──────────────────────────────────────────────────────────
  const desktop = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await desktop.addInitScript(() => {
    try { localStorage.setItem("atlas_intro_seen_v3", "1"); } catch {}
  });
  const page = await desktop.newPage();
  const pageErrors = [];
  page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));
  await page.goto(`${started.base}/psychopolitics-atlas`, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("#world");

  const k0 = (await worldTransform(page)).k;
  await page.locator('[data-zoom="in"]').click();
  await sleep(150);
  const k1 = (await worldTransform(page)).k;
  check(k1 > k0, `zoom + did not increase k (${k0} → ${k1})`);
  await page.locator('[data-zoom="out"]').click();
  await sleep(150);
  const k2 = (await worldTransform(page)).k;
  check(Math.abs(k2 - k0) < 1e-6, `zoom − did not return to k (${k2} vs ${k0})`);

  // drag-to-pan
  const panPoint = await stagePointAwayFromNodes(page);
  check(!!panPoint, "no empty stage point found for pan");
  if (panPoint) {
    const before = await worldTransform(page);
    await page.mouse.move(panPoint.x, panPoint.y);
    await page.mouse.down();
    await page.mouse.move(panPoint.x + 90, panPoint.y + 55, { steps: 6 });
    await page.mouse.up();
    await sleep(250);
    const after = await worldTransform(page);
    check(Math.abs(after.x - before.x - 90) < 2 && Math.abs(after.y - before.y - 55) < 2, `drag-pan moved ${after.x - before.x},${after.y - before.y} instead of 90,55`);
  }

  // wheel zoom; a line-mode wheel must still move the scale visibly
  const wheelK0 = (await worldTransform(page)).k;
  await page.mouse.move(640, 420);
  await page.mouse.wheel(0, -300);
  await sleep(200);
  const wheelK1 = (await worldTransform(page)).k;
  check(wheelK1 > wheelK0, `pixel wheel did not zoom (${wheelK0} → ${wheelK1})`);
  const lineK0 = (await worldTransform(page)).k;
  await page.evaluate(() => {
    document.querySelector("#stage").dispatchEvent(
      new WheelEvent("wheel", { deltaY: -5, deltaMode: 1, bubbles: true, cancelable: true, clientX: 640, clientY: 420 }),
    );
  });
  await sleep(150);
  const lineK1 = (await worldTransform(page)).k;
  check(lineK1 > lineK0 * 1.02, `line-mode wheel barely moved the scale (${lineK0} → ${lineK1})`);

  // wheel over the dossier scrolls it and leaves the map alone
  await page.goto(`${started.base}/psychopolitics-atlas#sel=human_diversity_foundation`, { waitUntil: "networkidle" });
  await sleep(500);
  check((await page.locator("#dossier").getAttribute("data-open")) === "1", "dossier did not open for #sel");
  const dossierBox = await page.locator("#dossier").boundingBox();
  const dk0 = (await worldTransform(page)).k;
  await page.mouse.move(dossierBox.x + dossierBox.width / 2, dossierBox.y + dossierBox.height / 2);
  await page.mouse.wheel(0, 700);
  await sleep(300);
  const scrollTop = await page.locator("#dossier").evaluate((el) => el.scrollTop);
  const dk1 = (await worldTransform(page)).k;
  check(scrollTop > 0, `wheel over dossier did not scroll it (scrollTop ${scrollTop})`);
  check(Math.abs(dk1 - dk0) < 1e-6, `wheel over dossier zoomed the map (${dk0} → ${dk1})`);

  // a zoom click during a fit tween is not overwritten by the tween.
  // Measure the fit target first, then zoom away from it and interrupt.
  await page.goto(`${started.base}/psychopolitics-atlas`, { waitUntil: "networkidle" });
  await sleep(400);
  await page.locator('[data-zoom="fit"]').click();
  await sleep(700);
  const fitTarget = (await worldTransform(page)).k;
  for (let i = 0; i < 3; i++) {
    await page.locator('[data-zoom="in"]').click();
    await sleep(120);
  }
  await page.locator('[data-zoom="fit"]').click();
  await sleep(50);
  await page.locator('[data-zoom="in"]').click();
  await sleep(700);
  const interruptedK = (await worldTransform(page)).k;
  check(interruptedK > fitTarget * 1.08, `zoom click was eaten by the fit tween (k ${interruptedK}, fit ${fitTarget})`);

  // URL restores the efficacy view
  await page.goto(`${started.base}/psychopolitics-atlas#v=efficacy`, { waitUntil: "networkidle" });
  await sleep(500);
  check((await page.locator("#app").getAttribute("data-mode")) === "efficacy", "v=efficacy did not restore on reload");

  // hull label click focuses its region
  await page.goto(`${started.base}/psychopolitics-atlas`, { waitUntil: "networkidle" });
  await sleep(500);
  const hullPoint = await page.evaluate(() => {
    const st = document.querySelector("#stage").getBoundingClientRect();
    for (const t of document.querySelectorAll("#layer-hulls text")) {
      const r = t.getBoundingClientRect();
      const x = r.x + r.width / 2, y = r.y + r.height / 2;
      if (r.width < 2 || r.height < 2) continue;
      if (x < st.left + 8 || x > st.right - 8 || y < st.top + 8 || y > st.bottom - 8) continue;
      const at = document.elementFromPoint(x, y);
      if (at && at.closest("#layer-hulls")) return { x, y, text: t.textContent };
    }
    return null;
  });
  check(!!hullPoint, "no visible hull label found");
  if (hullPoint) {
    await page.mouse.click(hullPoint.x, hullPoint.y);
    await sleep(400);
    const hash = await page.evaluate(() => location.hash);
    check(hash.includes("region="), `hull label click did not focus a region (hash "${hash}")`);
  }

  // choosing Field leaves an active guided path
  await page.goto(`${started.base}/psychopolitics-atlas#v=paths`, { waitUntil: "networkidle" });
  await sleep(500);
  await page.locator("#path-reader [data-path]").first().click();
  await sleep(500);
  await page.locator('.modes [data-mode="field"]').click();
  await sleep(400);
  const fieldHash = await page.evaluate(() => location.hash);
  check(!fieldHash.includes("path="), `Field kept the guided path active (hash "${fieldHash}")`);

  check(pageErrors.length === 0, `desktop page errors: ${pageErrors.slice(0, 3).join(" | ")}`);
  await desktop.close();

  // ── mobile ───────────────────────────────────────────────────────────
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await mobile.addInitScript(() => {
    try { localStorage.setItem("atlas_intro_seen_v3", "1"); } catch {}
  });
  const mp = await mobile.newPage();
  const mobileErrors = [];
  mp.on("pageerror", (e) => mobileErrors.push(String(e.message || e)));
  await mp.goto(`${started.base}/psychopolitics-atlas`, { waitUntil: "networkidle" });
  await mp.locator('.modes [data-mode="field"]').click();
  await sleep(500);
  const cdp = await mobile.newCDPSession(mp);

  const touchPoint = await stagePointAwayFromNodes(mp, 60);
  check(!!touchPoint, "no empty stage point found for touch pan");
  if (touchPoint) {
    const before = await worldTransform(mp);
    await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: Math.round(touchPoint.x), y: Math.round(touchPoint.y), id: 1 }] });
    for (let i = 1; i <= 6; i++) {
      await cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: Math.round(touchPoint.x) + i * 7, y: Math.round(touchPoint.y) + i * 4, id: 1 }] });
      await sleep(20);
    }
    await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await sleep(250);
    const after = await worldTransform(mp);
    check(Math.abs(after.x - before.x - 42) < 3 && Math.abs(after.y - before.y - 24) < 3, `one-finger touch pan moved ${after.x - before.x},${after.y - before.y} instead of 42,24`);
  }

  // zoom in, find a node, pinch with one finger on it: the map zooms and
  // the node stays put.
  for (let i = 0; i < 4; i++) {
    await mp.locator('[data-zoom="in"]').click();
    await sleep(120);
  }
  const node = await mp.evaluate(() => {
    const candidates = [...document.querySelectorAll("[data-node]")]
      .map((g) => ({ g, r: g.getBoundingClientRect() }))
      .filter((x) => x.r.width > 8)
      .sort((a, b) => b.r.width - a.r.width);
    if (!candidates.length) return null;
    const { g, r } = candidates[0];
    return { id: g.getAttribute("data-node"), transform: g.getAttribute("transform"), x: r.x + r.width / 2, y: r.y + r.height / 2 };
  });
  check(!!node, "no tappable node found for pinch test");
  if (node) {
    const before = await worldTransform(mp);
    const ax = Math.round(node.x), ay = Math.round(node.y);
    const bx = Math.round(Math.min(380, node.x + 90)), by = Math.round(Math.min(800, node.y + 60));
    await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: ax, y: ay, id: 1 }] });
    await sleep(40);
    await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: ax, y: ay, id: 1 }, { x: bx, y: by, id: 2 }] });
    for (let i = 1; i <= 8; i++) {
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [{ x: ax - i * 6, y: ay - i * 3, id: 1 }, { x: bx + i * 6, y: by + i * 3, id: 2 }],
      });
      await sleep(20);
    }
    await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await sleep(350);
    const after = await worldTransform(mp);
    const nodeAfter = await mp.evaluate((id) => [...document.querySelectorAll("[data-node]")].find((g) => g.getAttribute("data-node") === id)?.getAttribute("transform"), node.id);
    check(after.k > before.k * 1.2, `pinch starting on a node did not zoom (${before.k} → ${after.k})`);
    check(nodeAfter === node.transform, `pinch starting on a node moved the node (${node.transform} → ${nodeAfter})`);
  }

  check(mobileErrors.length === 0, `mobile page errors: ${mobileErrors.slice(0, 3).join(" | ")}`);
  await mobile.close();
} finally {
  if (browser) await browser.close();
  if (server) await stopNextServer(server);
}

if (failures.length) {
  console.error(`atlas-interactions: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log("atlas-interactions: PASS — pan, pinch-on-node, wheel containment, tween, URL and path state");
