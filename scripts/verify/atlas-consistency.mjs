/**
 * Atlas consistency — one count, one date range, one source claim.
 * Reads the data modules, the static page, the register, and llms.txt; fails
 * when any surface drifts from the canonical numbers.
 *
 *   node scripts/verify/atlas-consistency.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "../..");
const atlas = path.join(root, "public/psychopolitics-atlas");
const failures = [];
const check = (ok, label) => { if (!ok) failures.push(label); };

function load(file) {
  const source = fs.readFileSync(path.join(atlas, file), "utf8").replace(/^export const /gm, "const ");
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${source}\n;globalThis.out = { NODES, LINKS, EVIDENCE: typeof EVIDENCE === "undefined" ? null : EVIDENCE };`, context);
  return context.out;
}

const base = load("atlas-data.js");
const add = load("atlas-additions.js");
const nodes = [...base.NODES, ...add.NODES];
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
const links = [...base.LINKS, ...add.LINKS].filter((l) => byId[l.s] && byId[l.t]);
const years = nodes.map((n) => n.yr).filter(Boolean);
const minYear = Math.min(...years);
const maxYear = Math.max(...years);
const tiers = { documented: 0, contested: 0, speculative: 0, untriaged: 0 };
for (const n of nodes) tiers[n.ev || "untriaged"]++;
const assessed = links.filter((l) => l.q).length;
const html = fs.readFileSync(path.join(atlas, "index.html"), "utf8");
const js = fs.readFileSync(path.join(atlas, "atlas.js"), "utf8");
const css = fs.readFileSync(path.join(atlas, "atlas.css"), "utf8");
const data = fs.readFileSync(path.join(atlas, "atlas-data.js"), "utf8");
const works = fs.readFileSync(path.join(root, "lib/works.ts"), "utf8");
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const next = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");

check(nodes.length === 654, `nodes ${nodes.length} !== 654`);
check(links.length === 1139, `links ${links.length} !== 1139`);
check(tiers.documented === 599, `documented ${tiers.documented} !== 599`);
check(tiers.contested === 37, `contested ${tiers.contested} !== 37`);
check(tiers.speculative === 6, `speculative ${tiers.speculative} !== 6`);
check(tiers.untriaged === 12, `untriaged ${tiers.untriaged} !== 12`);
check(tiers.documented + tiers.contested + tiers.speculative + tiers.untriaged === nodes.length, "tiers do not sum to nodes");
check(assessed === 14, `assessed edges ${assessed} !== 14`);
check(minYear === 1903 && maxYear === 2026, `year range ${minYear}-${maxYear} !== 1903-2026`);

for (const needle of [`${nodes.length} nodes`, `${links.length.toLocaleString("en-US")} relations`, "1903–2026", "source notes"]) {
  check(html.includes(needle), `index.html missing ${needle}`);
}
check(html.includes('rel="canonical" href="https://www.autostimulus.org/psychopolitics-atlas"'), "canonical is not the bare atlas URL");
check(html.includes('og:url" content="https://www.autostimulus.org/psychopolitics-atlas"'), "og:url is not the bare atlas URL");
check(html.includes('id="domains-list"') && html.includes('id="timeline-list"') && html.includes('id="matrix-list"'), "mobile alternative containers missing");
check(html.includes('id="index-cards"') && html.includes('id="evidence-key-body"'), "index cards or evidence key missing");
check(/id="dossier"[^>]*role="dialog"[^>]*tabindex="-1"/.test(html), "dossier focus target missing");
check(/id="path-reader"[^>]*role="dialog"[^>]*tabindex="-1"/.test(html), "path-reader focus target missing");

check(js.includes('sub: "1903–2026"'), "palette timeline subtitle is not 1903–2026");
check(!js.includes('sub: "1926–2026"'), "palette still carries 1926–2026");
check(js.includes("untriaged: C.paper4"), "untriaged color missing");
check(js.includes("DATA.evidence[ev]") && js.includes("untriaged"), "JS does not read the four-tier evidence ladder");
check(js.includes("buildEvidenceKey"), "evidence key builder missing");
check(js.includes("buildGrid") && js.includes("buildHulls") && js.includes("buildEdges"), "field construction seams missing");
check(js.includes('S("path", { fill: "none"'), "relation arcs are not paths");
check(js.includes("plate") && js.includes("_hulls[cl].plate"), "territory plate layers missing");
check(html.includes("field-cartouche") && html.includes("layer-grid"), "field cartouche or graticule missing");
check(css.includes(".field-cartouche") && css.includes(".stage::after"), "field cartouche or vignette CSS missing");
check(js.includes("renderDomainsList") && js.includes("renderTimelineList") && js.includes("renderMatrixList"), "mobile list renderers missing");
check(js.includes("syncRailState") && js.includes("ui.rail.inert") && js.includes("ui.stage.inert"), "rail inert wiring missing");
check(!js.includes("No cookies, no analytics, no third-party requests"), "rail still claims no third-party requests");

check(data.includes("untriaged:") && data.includes("Speculative / not established"), "data evidence ladder not updated");
check(!data.includes("documented | contested | speculative\n"), "data comment still says three tiers");
check(css.includes("--paper-4: #8a887d"), "paper-4 contrast token is not #8a887d");
check(css.includes(".alt-list") && css.includes(".index-cards"), "mobile alternative CSS missing");

check(works.includes(`${nodes.length} nodes`) && works.includes(`${minYear}–${maxYear}`), "lib/works.ts count/date drift");
check(works.includes('href: "/psychopolitics-atlas"'), "lib/works.ts does not use the bare atlas URL");
check(llms.includes(`${nodes.length} nodes`) && llms.includes(`${links.length.toLocaleString("en-US")} relations`), "llms.txt count drift");
check(llms.includes(`${minYear}–${maxYear}`) && llms.includes("source notes"), "llms.txt date/source claim drift");
check(!llms.includes("nine analytic lenses; documented/contested/speculative evidence tiers; primary sources."), "llms.txt still says primary sources");

check(next.includes("Content-Security-Policy"), "atlas CSP missing");
check(next.includes("source: \"/psychopolitics-atlas/:path*\""), "CSP is not atlas-scoped");

const png = fs.readFileSync(path.join(atlas, "og.png"));
check(png.subarray(1, 4).toString() === "PNG", "og.png is not a PNG");
const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
check(width === 1200 && height === 630, `og.png is ${width}x${height}, not 1200x630`);
check(!fs.existsSync(path.join(atlas, "index-2026-11-02.html")), "old public atlas backup still ships");
check(!fs.existsSync(path.join(atlas, "support.js")), "dead support.js still ships");
check(fs.existsSync(path.join(root, "_attic/2026-11-02/atlas-index-backup.html")), "parked atlas backup missing");
check(fs.existsSync(path.join(root, "_attic/2026-11-02/design-audit-2026-10-31.md")), "parked design audit missing");

if (failures.length) {
  console.error(`atlas-consistency: ${failures.length} failure(s)`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log(`atlas-consistency: PASS — ${nodes.length} nodes, ${links.length} links, ${minYear}-${maxYear}, ${assessed} flagged edges`);
