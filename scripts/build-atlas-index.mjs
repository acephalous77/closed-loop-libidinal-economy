/**
 * Build the crawlable, no-JavaScript record index for the Psychopolitics atlas.
 * Reads the same datasets as the field and writes public/psychopolitics-atlas/records.html.
 *
 *   node scripts/build-atlas-index.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const atlasDir = path.join(root, "public/psychopolitics-atlas");

function load(file) {
  const source = fs.readFileSync(path.join(atlasDir, file), "utf8")
    .replace(/^export const /gm, "const ");
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${source}\n;globalThis.out = { NODES, LINKS, CLUSTERS: typeof CLUSTERS === "undefined" ? null : CLUSTERS, EVIDENCE: typeof EVIDENCE === "undefined" ? null : EVIDENCE, EFFICACY: typeof EFFICACY === "undefined" ? null : EFFICACY };`, context);
  return context.out;
}

const base = load("atlas-data.js");
const additions = load("atlas-additions.js");
const nodes = [...base.NODES, ...additions.NODES];
const links = [...base.LINKS, ...additions.LINKS];
const clusters = { ...base.CLUSTERS, ...(additions.CLUSTERS || {}) };
const evidence = { ...base.EVIDENCE, ...(additions.EVIDENCE || {}) };
const efficacy = { ...base.EFFICACY, ...(additions.EFFICACY || {}) };

const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[ch]));

const count = (key) => key === "untriaged" ? nodes.filter((n) => !n.ev).length : nodes.filter((n) => n.ev === key).length;
const grouped = new Map();
for (const node of nodes) {
  if (!grouped.has(node.cl)) grouped.set(node.cl, []);
  grouped.get(node.cl).push(node);
}
for (const list of grouped.values()) list.sort((a, b) => a.label.localeCompare(b.label));

const nav = [...grouped.keys()]
  .sort((a, b) => (clusters[a]?.label || a).localeCompare(clusters[b]?.label || b))
  .map((cl) => `<a href="#${esc(cl)}">${esc(clusters[cl]?.label || cl)} <span>${grouped.get(cl).length}</span></a>`)
  .join("");

const sections = [...grouped.entries()]
  .sort((a, b) => (clusters[a[0]]?.label || a[0]).localeCompare(clusters[b[0]]?.label || b[0]))
  .map(([cl, list]) => {
    const records = list.map((n) => {
      const src = n.rec?.src?.length ? `<ul class="src">${n.rec.src.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : `<p class="nosrc">No source note recorded.</p>`;
      const eff = n.eff && efficacy[n.eff] ? `<span class="badge eff">${esc(efficacy[n.eff].label)}</span>` : "";
      return `<article class="record" id="${esc(n.id)}">
  <h3><a href="/psychopolitics-atlas/#sel=${encodeURIComponent(n.id)}">${esc(n.label)}</a>${n.sub ? ` <span class="sub">${esc(n.sub)}</span>` : ""}</h3>
  <p class="meta"><span>${esc(n.type || "record")}</span><span>${esc(n.yr || "—")}</span><span class="badge ev-${esc(n.ev || "untriaged")}">${esc(evidence[n.ev]?.label || n.ev || "untriaged")}</span>${eff}</p>
  <p>${esc(n.rec?.what || "")}</p>
  ${src}
</article>`;
    }).join("\n");
    return `<section id="${esc(cl)}"><h2>${esc(clusters[cl]?.label || cl)} <span>${list.length}</span></h2>\n${records}</section>`;
  }).join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Record index — The Psychopolitics of Socialization</title>
<meta name="description" content="A crawlable index of all ${nodes.length} records and ${links.length} relations in The Psychopolitics of Socialization — labels, years, evidence tiers, efficacy verdicts, and source notes.">
<link rel="canonical" href="https://www.autostimulus.org/psychopolitics-atlas/records.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Record index — The Psychopolitics of Socialization">
<meta property="og:url" content="https://www.autostimulus.org/psychopolitics-atlas/records.html">
<style>
  :root { color-scheme: dark; --paper:#e9e6dc; --paper-2:#c9c6bb; --paper-3:#a3a198; --paper-4:#7d7b73; --field:#0a0d13; --field-2:#11151d; --rule:#232a39; --ochre:#c7a45a; --moss:#8ea67e; --rust:#b86b55; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin:0; background:var(--field); color:var(--paper); font:16px/1.55 Georgia, "Times New Roman", serif; }
  a { color:var(--paper); text-decoration-color:var(--paper-4); text-underline-offset:3px; }
  a:hover { color:var(--ochre); }
  .wrap { width:min(960px, calc(100% - 40px)); margin:0 auto; }
  header { padding:64px 0 28px; border-bottom:1px solid var(--rule); }
  .kicker, .meta, nav, .badge, .src, .nosrc { font-family:"IBM Plex Mono", ui-monospace, Menlo, monospace; }
  .kicker { color:var(--ochre); font-size:11px; letter-spacing:.12em; text-transform:uppercase; }
  h1 { margin:.35em 0 .2em; font-size:clamp(34px,7vw,66px); font-weight:400; letter-spacing:-.035em; line-height:1; }
  .lede { max-width:700px; color:var(--paper-2); font-size:18px; }
  .stats { display:flex; flex-wrap:wrap; gap:8px 18px; color:var(--paper-3); font-family:"IBM Plex Mono", ui-monospace, Menlo, monospace; font-size:11px; }
  .stats b { color:var(--paper); font-weight:500; }
  .jump { margin:28px 0 0; display:flex; flex-wrap:wrap; gap:6px 14px; font-size:11px; line-height:1.8; }
  .jump a { color:var(--paper-3); text-decoration:none; border-bottom:1px solid var(--rule); }
  .jump a span { color:var(--paper-4); }
  main { padding:42px 0 80px; }
  section { padding:26px 0 10px; border-top:1px solid var(--rule); }
  section:first-child { border-top:0; }
  h2 { margin:0 0 20px; font-size:24px; font-weight:400; letter-spacing:-.02em; }
  h2 span { color:var(--paper-4); font-family:"IBM Plex Mono", ui-monospace, Menlo, monospace; font-size:12px; font-weight:400; }
  .record { padding:18px 0 20px; border-top:1px solid color-mix(in srgb, var(--rule) 70%, transparent); }
  .record:first-of-type { border-top:0; }
  h3 { margin:0 0 4px; font-size:18px; font-weight:500; line-height:1.25; }
  h3 .sub { color:var(--paper-3); font-size:13px; font-weight:400; }
  .record p { margin:8px 0 0; color:var(--paper-2); }
  .meta { display:flex; flex-wrap:wrap; gap:6px 12px; color:var(--paper-4); font-size:10px; text-transform:uppercase; letter-spacing:.05em; }
  .badge { display:inline-block; padding:1px 5px; border:1px solid var(--rule); color:var(--paper-3); font-size:9px; letter-spacing:.04em; text-transform:uppercase; }
  .badge.ev-documented { color:var(--moss); border-color:color-mix(in srgb, var(--moss) 45%, var(--rule)); }
  .badge.ev-contested { color:var(--ochre); border-color:color-mix(in srgb, var(--ochre) 45%, var(--rule)); }
  .badge.ev-speculative { color:var(--rust); border-color:color-mix(in srgb, var(--rust) 45%, var(--rule)); }
  .badge.eff { color:var(--paper-2); border-color:var(--paper-4); }
  .src, .nosrc { margin:10px 0 0; padding:0; color:var(--paper-4); font-size:10px; line-height:1.6; }
  .src { list-style:none; }
  .src li::before { content:"↳ "; color:var(--paper-4); }
  footer { padding:24px 0 60px; border-top:1px solid var(--rule); color:var(--paper-4); font-family:"IBM Plex Mono", ui-monospace, Menlo, monospace; font-size:10px; }
  footer a { color:var(--paper-3); }
  @media (max-width:560px) { .wrap { width:calc(100% - 28px); } header { padding-top:40px; } .lede { font-size:16px; } }
</style>
</head>
<body>
<div class="wrap">
<header>
  <div class="kicker">The Psychopolitics of Socialization · record index</div>
  <h1>Every record, in text.</h1>
  <p class="lede">A crawlable index of the atlas: all ${nodes.length} records, their years, evidence tiers, efficacy verdicts where recorded, and source notes. The field is the visual argument; this page is its register.</p>
  <div class="stats"><span><b>${nodes.length}</b> records</span><span><b>${links.length.toLocaleString("en-US")}</b> relations</span><span><b>${count("documented")}</b> documented</span><span><b>${count("contested")}</b> contested</span><span><b>${count("speculative")}</b> speculative</span><span><b>${count("untriaged")}</b> untriaged</span><span>1903–2026</span></div>
  <nav class="jump" aria-label="Jump to a domain">${nav}</nav>
</header>
<main>${sections}</main>
<footer><a href="/psychopolitics-atlas/">← the field</a> · <a href="/psychopolitics-atlas/#v=efficacy">efficacy view</a> · <a href="/psychopolitics-atlas/records.html">record index</a> · no scripts, no cookies, no external requests</footer>
</div>
</body>
</html>`;

fs.writeFileSync(path.join(atlasDir, "records.html"), html);
console.log(`atlas-index: ${nodes.length} records, ${links.length} relations, ${Buffer.byteLength(html, "utf8").toLocaleString("en-US")} bytes`);
