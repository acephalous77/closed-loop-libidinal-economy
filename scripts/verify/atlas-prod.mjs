/**
 * Atlas production check — post-deploy: canonical route, CSP, counts, the
 * shipped assets, and the browser's network. The browser check intentionally
 * fails when Cloudflare still injects its beacon: a CSP block prevents the
 * request but leaves a console violation; the zone setting is the clean fix.
 *
 *   node scripts/verify/atlas-prod.mjs [url]
 */
import { chromium } from "playwright";
const base = (process.argv[2] || "https://www.autostimulus.org/psychopolitics-atlas").replace(/\/$/, "");
const failures = [];
const check = (ok, label) => { if (!ok) failures.push(label); };

const res = await fetch(base, { redirect: "follow" });
check(res.status === 200, `${base} returned ${res.status}`);
const html = await res.text();
const csp = res.headers.get("content-security-policy") || "";
check(csp.includes("script-src 'self'"), "CSP missing or too loose");
check(html.includes("654 nodes") && html.includes("1,139 relations"), "production counts missing");
check(html.includes("1903–2026"), "production date range missing");
check(html.includes('rel="canonical" href="https://www.autostimulus.org/psychopolitics-atlas"'), "canonical is not bare");
check(!html.includes("index-2026-11-02.html"), "old atlas backup referenced");

const css = await (await fetch(`${base}/atlas.css`)).text();
check(css.includes("--paper-4: #8a887d"), "production CSS lacks paper-4");
check(css.includes(".alt-list") && css.includes(".index-cards"), "production CSS lacks mobile alternatives");
const js = await (await fetch(`${base}/atlas.js`)).text();
check(js.includes("renderDomainsList") && js.includes("syncRailState"), "production JS is stale");
const og = await fetch(`${base}/og.png`);
check(og.status === 200 && (og.headers.get("content-type") || "").includes("image/png"), "og.png is not served as PNG");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const blocked = [];
page.on("requestfailed", (r) => {
  if (r.url().includes("cloudflareinsights")) blocked.push(r.url());
});
await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
await browser.close();
if (blocked.length) failures.push(`Cloudflare beacon still injected (CSP-blocked): ${[...new Set(blocked)].join(" | ")} — disable Web Analytics in the Cloudflare dashboard`);

if (failures.length) {
  console.error(`atlas-prod: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log(`atlas-prod: PASS — ${base} (CSP, counts, no beacon, current assets)`);
