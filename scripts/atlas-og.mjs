// Regenerates public/psychopolitics-atlas/og.png from the atlas data.
// The image is static; run this after a count/date/title change.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { chromium } from "playwright";

const root = path.resolve(import.meta.dirname, "..");
const atlas = path.join(root, "public/psychopolitics-atlas");

function load(file) {
  const source = fs.readFileSync(path.join(atlas, file), "utf8").replace(/^export const /gm, "const ");
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${source}\n;globalThis.out = { NODES, LINKS };`, context);
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

const font = (file) => fs.readFileSync(path.join(atlas, "fonts", file)).toString("base64");
const serif = font("SourceSerif4-Regular.woff2");
const mono = font("IBMPlexMono-Regular.woff2");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:AtlasSerif;src:url(data:font/woff2;base64,${serif}) format("woff2");font-weight:400;font-style:normal}
@font-face{font-family:AtlasMono;src:url(data:font/woff2;base64,${mono}) format("woff2");font-weight:400;font-style:normal}
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;background:#0b0f17;color:#ece6d8;overflow:hidden}
body{font-family:AtlasSerif,Georgia,serif;position:relative}
.grid{position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px,#2a3241 1px,transparent 0);background-size:26px 26px;opacity:.42}
.wash{position:absolute;inset:0;background:radial-gradient(70% 70% at 78% 20%,#1b2b3b 0%,transparent 60%),radial-gradient(60% 60% at 8% 90%,#2b2116 0%,transparent 62%)}
.frame{position:absolute;inset:38px;border:1px solid #3b4452}
.meta{position:absolute;left:70px;top:70px;font-family:AtlasMono,Menlo,monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#b8b0a1}
.meta b{color:#e7b86a;font-weight:400}
h1{position:absolute;left:68px;top:142px;width:800px;margin:0;font-weight:400;font-size:82px;line-height:.96;letter-spacing:-.035em;color:#f0eadc}
h1 em{font-style:normal;color:#e7b86a}
.sub{position:absolute;left:72px;top:356px;width:660px;margin:0;font-size:24px;line-height:1.28;color:#b8b0a1}
.rule{position:absolute;left:72px;bottom:132px;width:420px;height:1px;background:#596171}
.stats{position:absolute;left:72px;bottom:70px;font-family:AtlasMono,Menlo,monospace;font-size:13px;letter-spacing:.06em;color:#d8d0c0}
.stats b{color:#e7b86a;font-weight:400}
.door{position:absolute;right:70px;bottom:70px;font-family:AtlasMono,Menlo,monospace;font-size:11px;letter-spacing:.08em;color:#8e948f;text-align:right;line-height:1.8}
.ring{position:absolute;right:82px;top:92px;width:330px;height:330px;border:1px solid #485465;border-radius:50%;opacity:.8}
.ring:before,.ring:after{content:"";position:absolute;border:1px solid #485465;border-radius:50%}.ring:before{inset:46px}.ring:after{inset:96px}
.axis{position:absolute;right:70px;top:260px;width:360px;height:1px;background:#485465;transform:rotate(-18deg);transform-origin:right center}
.tag{position:absolute;right:70px;top:330px;font-family:AtlasMono,Menlo,monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#8e948f;text-align:right;line-height:2.1}
</style></head><body>
<div class="grid"></div><div class="wash"></div><div class="frame"></div>
<div class="meta">Autostimulus · <b>relational atlas</b> · 2026 edition</div>
<h1>The Psychopolitics <em>of Socialization</em></h1>
<p class="sub">A relational atlas of mass address, population science and the platform present.</p>
<div class="ring"></div><div class="axis"></div><div class="tag">field · paths · index<br>domains · timeline · matrix</div>
<div class="rule"></div>
<div class="stats"><b>${nodes.length}</b> nodes &nbsp;·&nbsp; <b>${links.length.toLocaleString("en-US")}</b> relations &nbsp;·&nbsp; <b>${minYear}–${maxYear}</b></div>
<div class="door">autostimulus.org<br>/psychopolitics-atlas</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(atlas, "og.png"), type: "png" });
await browser.close();
console.log(`atlas-og: ${nodes.length} nodes, ${links.length} relations, ${minYear}-${maxYear}`);
