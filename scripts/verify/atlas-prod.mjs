/**
 * Atlas production check — post-deploy: canonical route, CSP, counts, no
 * Cloudflare beacon, and the shipped assets. Run after the deployment settles.
 *
 *   node scripts/verify/atlas-prod.mjs [url]
 */
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
check(!html.includes("cloudflareinsights"), "Cloudflare beacon still in the page");
check(!html.includes("index-2026-11-02.html"), "old atlas backup referenced");

const css = await (await fetch(`${base}/atlas.css`)).text();
check(css.includes("--paper-4: #8a887d"), "production CSS lacks paper-4");
check(css.includes(".alt-list") && css.includes(".index-cards"), "production CSS lacks mobile alternatives");
const js = await (await fetch(`${base}/atlas.js`)).text();
check(js.includes("renderDomainsList") && js.includes("syncRailState"), "production JS is stale");
const og = await fetch(`${base}/og.png`);
check(og.status === 200 && (og.headers.get("content-type") || "").includes("image/png"), "og.png is not served as PNG");

if (failures.length) {
  console.error(`atlas-prod: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log(`atlas-prod: PASS — ${base} (CSP, counts, no beacon, current assets)`);
