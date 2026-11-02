/*  The Psychopolitics of Socialization — field-guide atlas.
 *  Vanilla ES module. No framework, no third-party requests, no session.
 *  Data: ./atlas-data.js (the 2026 corpus) + ./atlas-additions.js
 *  (the 2026-11-02 Sham Individualism / audience / Rockefeller expansion).
 */

import * as BASE from "./atlas-data.js";
import * as ADD from "./atlas-additions.js";

/* ── palette ────────────────────────────────────────────────────────── */
const C = {
  field: "#0a0d13",
  paper: "#e9e6dc",
  paper2: "#c8c4b7",
  paper3: "#9a978c",
  paper4: "#747268",
  prussian: "#7fb1d8",
  ochre: "#c9a45c",
  moss: "#9bb47a",
  rust: "#c97963",
  rose: "#c98aa8",
  violet: "#b7a0d4",
  cyan: "#7fc4c9",
};

const TYPE_COLOR = {
  person: "#8fb3d9",
  funder: "#c9a45c",
  institution: "#9a9fae",
  program: "#c97963",
  idea: "#9bb47a",
  theory: "#b7a0d4",
  case: "#7fc4c9",
  faction: "#c98aa8",
};
const EV_COLOR = {
  documented: C.moss,
  contested: C.ochre,
  speculative: C.rust,
  untriaged: C.paper4,
};
const FAMILY_COLOR = {
  money: C.ochre,
  power: C.prussian,
  knowledge: C.cyan,
  conflict: C.rust,
  transfer: C.rose,
};
const REL_FAMILY = {
  funded: "money", conduit: "money",
  staffs: "power", ran: "power", sited: "power", convenes: "power",
  captures: "power", subjects: "power",
  theorizes: "knowledge", influenced: "knowledge", became: "knowledge",
  feeds: "knowledge",
  exposed: "conflict", rival: "conflict", litigates: "conflict",
  denies: "conflict",
  appropriated: "transfer", rhymes: "transfer",
};
const REL_LABEL = {
  funded: "funds", conduit: "is conduit for", ran: "ran / directed",
  sited: "sited at", subjects: "draws subjects from",
  influenced: "influences", became: "becomes / migrates into",
  exposed: "exposes", appropriated: "appropriated by",
  rival: "in tension with", denies: "denies",
  theorizes: "reads / theorizes", staffs: "holds a post at",
  convenes: "co-present at", feeds: "shares a data pipe with",
  captures: "state tie →", litigates: "co-counsel / party",
  rhymes: "rhymes with",
};
const REL_LABEL_IN = {
  funded: "funded by", conduit: "takes conduit from", ran: "run by",
  sited: "site of", subjects: "draws subjects to",
  influenced: "influenced by", became: "flows from", exposed: "exposed by",
  appropriated: "appropriates", rival: "in tension with",
  denies: "denied by", theorizes: "read by", staffs: "principal of",
  convenes: "co-presence", feeds: "data from", captures: "state tie ←",
  litigates: "co-party", rhymes: "rhymes with",
};

const ZONES = [
  { id: "patrons", label: "The patrons", cls: ["eugenics", "philan", "state"] },
  { id: "science", label: "The science", cls: ["density", "coercion", "persuasion", "measure"] },
  { id: "programs", label: "The programs", cls: ["mkultra", "carceral", "haight", "control"] },
  { id: "address", label: "The address", cls: ["demagogy"] },
  { id: "present", label: "The present", cls: ["platform", "litigation"] },
  { id: "frame", label: "The frame", cls: ["theory", "transmission"] },
  { id: "money", label: "The money", cls: ["venture", "ai", "sovereign", "aisafety", "darkmoney"] },
  { id: "frontiers", label: "The frontiers", cls: ["embryo", "longevity", "neuro", "belief", "pronatal"] },
  { id: "apparatus", label: "The apparatus", cls: ["surveil", "statecap"] },
];

const PATH_GROUPS = [
  { label: "The historical spine", ids: ["loop", "notouch", "travels", "consent", "population_turn", "rockefeller", "sham"] },
  { label: "The present", ids: ["feed", "cadence", "audience", "capital_tissue", "cutout_thinned", "embryo_web", "ladder", "belief_market", "legibility_state", "sovereign_capital"] },
  { label: "The frame", ids: ["money", "intent", "evidence_gap"] },
];

/* ── small helpers ──────────────────────────────────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const NS = "http://www.w3.org/2000/svg";
function S(tag, attrs = {}, kids = []) {
  const el = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] != null) el.setAttribute(k, attrs[k]);
  for (const k of kids) if (k) el.appendChild(k);
  return el;
}
function textEl(str, attrs = {}) {
  const t = S("text", attrs);
  t.textContent = str;
  return t;
}
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0) / 4294967295;
}
function debounce(fn, ms) {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}
const reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

/* ── merge + prepare ────────────────────────────────────────────────── */
function mergeData() {
  const clusters = { ...BASE.CLUSTERS, ...ADD.CLUSTERS };
  const lenses = { ...BASE.LENSES, ...ADD.LENSES };
  const nodes = [...BASE.NODES, ...ADD.NODES].map((n, i) => ({ ...n, _i: i }));
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const links = [...BASE.LINKS, ...ADD.LINKS]
    .filter((l) => byId[l.s] && byId[l.t])
    .map((l) => ({ ...l, source: byId[l.s], target: byId[l.t] }));
  const threads = [...BASE.THREADS, ...ADD.THREADS];
  const pos = { ...BASE.POS, ...ADD.POS };
  const clusterPos = { ...BASE.CLUSTER_POS, ...ADD.CLUSTER_POS };
  const types = BASE.TYPES;
  const levers = BASE.LEVERS;
  const leverLabel = BASE.LEVER_LABEL;
  const evidence = BASE.EVIDENCE;

  for (const n of nodes) {
    n.deg = 0;
    n.lens = n.lens || [];
    n.ev = n.ev || null;
  }
  for (const l of links) { l.source.deg++; l.target.deg++; }
  for (const n of nodes) n.r = clamp(4.2 + Math.sqrt(n.deg) * 2.15, 4.5, 16.5);

  const adj = new Map(nodes.map((n) => [n.id, new Set()]));
  for (const l of links) { adj.get(l.s).add(l.t); adj.get(l.t).add(l.s); }
  for (const n of nodes) n._adj = adj.get(n.id);

  const clusterMembers = new Map();
  for (const n of nodes) {
    if (!clusterMembers.has(n.cl)) clusterMembers.set(n.cl, []);
    clusterMembers.get(n.cl).push(n);
  }

  const zoneOf = new Map();
  for (let i = 0; i < ZONES.length; i++) for (const cl of ZONES[i].cls) zoneOf.set(cl, i);
  for (const n of nodes) n._zone = zoneOf.has(n.cl) ? zoneOf.get(n.cl) : 0;

  return {
    clusters, lenses, nodes, byId, links, threads, pos, clusterPos,
    types, levers, leverLabel, evidence, adj, clusterMembers, zoneOf,
  };
}

const DATA = mergeData();

const state = {
  mode: "field",
  lens: "structure",
  evidence: new Set(["documented", "contested", "speculative", "untriaged"]),
  kinds: new Set(Object.keys(DATA.types)),
  selected: null,
  hover: null,
  focus: null,
  focusDepth: 1,
  focusSet: null,
  region: null,
  thread: null,
  step: 0,
  path: null,
  relFocus: null,
  bridges: false,
  connectors: false,
  indexQ: "",
  indexKind: "all",
  indexDomain: "all",
  indexEv: "all",
  indexSort: "name",
  introSeen: false,
  paletteSel: 0,
};

const ui = {
  app: $("#app"),
  stage: $("#stage"),
  svg: $("#field-svg"),
  world: $("#world"),
  hulls: $("#layer-hulls"),
  edges: $("#layer-edges"),
  pathLayer: $("#layer-path"),
  nodesLayer: $("#layer-nodes"),
  dossier: $("#dossier"),
  pathReader: $("#path-reader"),
  rail: $("#rail"),
  crumbs: $("#crumbs"),
  status: $("#status"),
  statusLegend: $("#status-legend"),
  indexBody: $("#index-body"),
  indexCount: $("#index-count"),
  indexSearch: $("#index-search"),
  indexKind: $("#index-kind"),
  indexDomain: $("#index-domain"),
  indexEv: $("#index-ev"),
  indexSort: $("#index-sort"),
  minimap: $("#minimap"),
  minimapSvg: $("#minimap-svg"),
  tooltip: $("#tooltip"),
  palette: $("#palette"),
  paletteInput: $("#palette-input"),
  paletteResults: $("#palette-results"),
  intro: $("#intro"),
  introPaths: $("#intro-paths"),
  introLegend: $("#intro-legend"),
};

const view = { x: 0, y: 0, k: 1 };
let stageW = 1, stageH = 1;
let worldBounds = { x: 0, y: 0, w: 1, h: 1 };
let raf = 0;
let labelRaf = 0;
let pointer = null;
let dragNode = null;
let moved = false;
let activePointers = new Map();
let pinch = null;
let lastFocus = null;
let palData = [];
let palItems = [];
let syncHashTimer = null;

/* ── data visibility ────────────────────────────────────────────────── */
function lensActive(n) {
  if (state.lens === "structure") return true;
  if (state.lens === "epistemic") return n.ev != null;
  return (n.lens || []).includes(state.lens);
}
function evVisible(n) {
  return state.evidence.has(n.ev || "untriaged");
}
function kindVisible(n) {
  return state.kinds.has(n.type);
}
function nodeVisible(n) {
  return lensActive(n) && evVisible(n) && kindVisible(n);
}
function inFocus(n) {
  return state.focusSet ? state.focusSet.has(n.id) : false;
}
function inRegion(n) {
  return state.region ? n.cl === state.region : true;
}
function threadIds() {
  if (!state.thread) return null;
  const th = DATA.threads.find((t) => t.id === state.thread.id);
  if (!th) return null;
  return new Set(th.steps.map((s) => s.node));
}
function pathIds() {
  return state.path ? new Set(state.path.seq) : null;
}
function relAttached(n, r) {
  for (const l of DATA.links) {
    if (l.r !== r) continue;
    if (l.s === n.id || l.t === n.id) return true;
  }
  return false;
}
function bridgeSet() {
  if (!state.bridges) return null;
  const s = new Set();
  for (const l of DATA.links) {
    if (l.source._zone !== l.target._zone) { s.add(l.s); s.add(l.t); }
  }
  return s;
}
let articSet = null;
function articulationSet() {
  if (articSet) return articSet;
  const ids = DATA.nodes.map((n) => n.id);
  const disc = {}, low = {}, seen = {}, out = new Set();
  let timer = 0;
  for (const root of ids) {
    if (seen[root]) continue;
    const stack = [{ u: root, parent: null, i: 0, children: 0 }];
    seen[root] = true; disc[root] = low[root] = timer++;
    while (stack.length) {
      const f = stack[stack.length - 1];
      const adj = Array.from(DATA.adj.get(f.u) || []);
      if (f.i < adj.length) {
        const v = adj[f.i++];
        if (v === f.parent) continue;
        if (seen[v]) { if (disc[v] < low[f.u]) low[f.u] = disc[v]; }
        else {
          seen[v] = true; disc[v] = low[v] = timer++;
          f.children++;
          stack.push({ u: v, parent: f.u, i: 0, children: 0 });
        }
      } else {
        stack.pop();
        const p = stack.length ? stack[stack.length - 1] : null;
        if (p) {
          if (low[f.u] < low[p.u]) low[p.u] = low[f.u];
          if (p.parent !== null && low[f.u] >= disc[p.u]) out.add(p.u);
        }
      }
    }
    let children = 0; const vis = { [root]: true }; const st = [{ u: root, i: 0 }];
    while (st.length) {
      const f = st[st.length - 1];
      const adj = Array.from(DATA.adj.get(f.u) || []);
      if (f.i < adj.length) {
        const v = adj[f.i++];
        if (vis[v]) continue;
        vis[v] = true; if (f.u === root) children++;
        st.push({ u: v, i: 0 });
      } else st.pop();
    }
    if (children > 1) out.add(root);
  }
  articSet = out;
  return out;
}

/* ── field construction ─────────────────────────────────────────────── */
function buildField() {
  const wb = { x: Infinity, y: Infinity, r: -Infinity, b: -Infinity };
  for (const n of DATA.nodes) {
    const p = DATA.pos[n.id] || clusterCenter(n.cl);
    n.x = p[0]; n.y = p[1];
    wb.x = Math.min(wb.x, n.x); wb.y = Math.min(wb.y, n.y);
    wb.r = Math.max(wb.r, n.x); wb.b = Math.max(wb.b, n.y);
  }
  worldBounds = { x: wb.x - 120, y: wb.y - 120, w: (wb.r - wb.x) + 240, h: (wb.b - wb.y) + 240 };

  // arrow marker
  const defs = S("defs");
  const marker = S("marker", { id: "atlas-arrow", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
  marker.appendChild(S("path", { d: "M0,1 L9,5 L0,9", fill: "none", stroke: "context-stroke", "stroke-width": "1.5" }));
  defs.appendChild(marker);
  ui.svg.insertBefore(defs, ui.world);

  buildHulls();
  buildEdges();
  buildNodes();
  buildMinimap();

  const stageRect = ui.stage.getBoundingClientRect();
  stageW = stageRect.width || 1000; stageH = stageRect.height || 700;
  fitBounds(worldBounds, false);
}

function clusterCenter(cl) {
  const p = DATA.clusterPos[cl];
  if (p) return p;
  const arr = DATA.clusterMembers.get(cl) || [];
  return [arr.reduce((a, n) => a + (DATA.pos[n.id] ? DATA.pos[n.id][0] : 0), 0) / (arr.length || 1),
          arr.reduce((a, n) => a + (DATA.pos[n.id] ? DATA.pos[n.id][1] : 0), 0) / (arr.length || 1)];
}

function polygonPoints(n, r, offset = -Math.PI / 2) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = offset + (i * 2 * Math.PI) / n;
    pts.push(`${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`);
  }
  return pts.join(" ");
}
function shapeSpec(type, r) {
  switch (type) {
    case "institution": return ["rect", { x: -r * .82, y: -r * .82, width: r * 1.64, height: r * 1.64 }];
    case "funder": return ["polygon", { points: `0,${-r * 1.1} ${r * 1.1},0 0,${r * 1.1} ${-r * 1.1},0` }];
    case "program": return ["polygon", { points: `0,${-r * 1.02} ${r * 1.02},${r * .84} ${-r * 1.02},${r * .84}` }];
    case "idea": return ["circle", { r: r * .82 }];
    case "theory": return ["polygon", { points: polygonPoints(6, r) }];
    case "case": return ["polygon", { points: polygonPoints(5, r) }];
    case "faction": return ["polygon", { points: `0,${r * 1.02} ${r * 1.02},${-r * .8} ${-r * 1.02},${-r * .8}` }];
    default: return ["circle", { r }];
  }
}

function buildNodes() {
  for (const n of DATA.nodes) {
    const g = S("g", { "data-node": n.id, role: "button", "aria-label": n.label + (n.sub ? " — " + n.sub : "") });
    g.style.cursor = "pointer";
    const halo = S("circle", { r: n.r + 7, fill: "none", "stroke-width": "1.6" });
    halo.style.opacity = "0";
    const [tag, attrs] = shapeSpec(n.type, n.r);
    const shape = S(tag, attrs);
    shape.setAttribute("stroke-width", "1.2");
    const ring = S("circle", { r: n.r + 3.4, fill: "none", "stroke-width": "1" });
    const hit = S("circle", { r: Math.max(n.r + 7, 12), fill: "#000", "fill-opacity": "0" });
    const label = textEl(n.label, {
      x: 0, y: n.r + 12.5, "text-anchor": "middle",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": "10.5", "font-weight": "400",
      "paint-order": "stroke", stroke: C.field, "stroke-width": "2.4",
      "stroke-linejoin": "round",
    });
    label.style.pointerEvents = "none";
    const title = S("title"); title.textContent = n.label + (n.sub ? " — " + n.sub : "");
    g.appendChild(title); g.appendChild(halo); g.appendChild(shape); g.appendChild(ring); g.appendChild(hit); g.appendChild(label);
    ui.nodesLayer.appendChild(g);
    n._g = g; n._shape = shape; n._ring = ring; n._halo = halo; n._label = label; n._hit = hit;
    g.addEventListener("mouseenter", () => onHover(n));
    g.addEventListener("mouseleave", () => onHover(null));
    g.addEventListener("pointerdown", (e) => onNodeDown(e, n));
    g.addEventListener("dblclick", (e) => { e.stopPropagation(); e.preventDefault(); focusNode(n, 2); });
  }
}

function buildEdges() {
  for (const l of DATA.links) {
    const el = S("line", { "stroke-linecap": "round" });
    ui.edges.appendChild(el);
    l._el = el;
  }
}

function buildHulls() {
  const groups = DATA.clusterMembers;
  DATA._hulls = {};
  for (const [cl, arr] of groups) {
    if (!arr.length) continue;
    const pts = arr.map((n) => [n.x, n.y]);
    let d, cx, top;
    if (pts.length >= 3) {
      const hull = expandHull(convexHull(pts), 36);
      d = splinePath(hull);
      cx = hull.reduce((s, p) => s + p[0], 0) / hull.length;
      top = Math.min(...hull.map((p) => p[1]));
    } else {
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      cx = (Math.min(...xs) + Math.max(...xs)) / 2;
      const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
      const rx = (Math.max(...xs) - Math.min(...xs)) / 2 + 44;
      const ry = (Math.max(...ys) - Math.min(...ys)) / 2 + 38;
      top = cy - ry;
      d = `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0 Z`;
    }
    const hue = DATA.clusters[cl] ? DATA.clusters[cl].hue : 250;
    const path = S("path", {
      d, fill: `oklch(0.65 0.1 ${hue} / 0.035)`,
      stroke: `oklch(0.72 0.09 ${hue} / 0.22)`, "stroke-width": "1.1",
      "stroke-dasharray": "4 7", "stroke-linejoin": "round",
    });
    path.style.cursor = "pointer";
    path.addEventListener("click", (e) => { e.stopPropagation(); focusRegion(cl); });
    ui.hulls.appendChild(path);
    const label = textEl((DATA.clusters[cl] ? DATA.clusters[cl].label : cl).toUpperCase(), {
      x: cx, y: top - 12, "text-anchor": "middle",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": "10", "font-weight": "600", "letter-spacing": "0.8",
      fill: `oklch(0.8 0.09 ${hue} / 0.85)`,
      "paint-order": "stroke", stroke: C.field, "stroke-width": "3",
      "stroke-linejoin": "round",
    });
    label.style.cursor = "pointer";
    label.addEventListener("click", (e) => { e.stopPropagation(); focusRegion(cl); });
    ui.hulls.appendChild(label);
    DATA._hulls[cl] = { path, label };
  }
}

function convexHull(pts) {
  if (pts.length < 3) return pts.slice();
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  const up = [];
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  lo.pop(); up.pop();
  return lo.concat(up);
}
function expandHull(hull, pad) {
  const cx = hull.reduce((s, p) => s + p[0], 0) / hull.length;
  const cy = hull.reduce((s, p) => s + p[1], 0) / hull.length;
  return hull.map((p) => {
    const dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy) || 1;
    return [p[0] + (dx / d) * pad, p[1] + (dy / d) * pad];
  });
}
function splinePath(pts) {
  const n = pts.length;
  if (n < 3) return "";
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} `;
  }
  return d + "Z";
}

/* ── positions / transform / labels ─────────────────────────────────── */
function renderPositions() {
  for (const n of DATA.nodes) n._g.setAttribute("transform", `translate(${n.x.toFixed(2)} ${n.y.toFixed(2)})`);
  for (const l of DATA.links) {
    const a = l.source, b = l.target;
    const dx = b.x - a.x, dy = b.y - a.y;
    const d = Math.hypot(dx, dy) || 1;
    l._el.setAttribute("x1", (a.x + (dx / d) * a.r).toFixed(2));
    l._el.setAttribute("y1", (a.y + (dy / d) * a.r).toFixed(2));
    l._el.setAttribute("x2", (b.x - (dx / d) * (b.r + 2.5)).toFixed(2));
    l._el.setAttribute("y2", (b.y - (dy / d) * (b.r + 2.5)).toFixed(2));
  }
  if (state.thread || state.path) renderPathLayer();
}

function applyTransform() {
  ui.world.setAttribute("transform", `translate(${view.x.toFixed(2)} ${view.y.toFixed(2)}) scale(${view.k.toFixed(4)})`);
  scheduleLabels();
  updateMinimapViewport();
}

function fitBounds(b, animate) {
  const pad = 70;
  const k = clamp(Math.min(stageW / (b.w + pad * 2), stageH / (b.h + pad * 2)), 0.028, 1.5);
  const x = stageW / 2 - (b.x + b.w / 2) * k;
  const y = stageH / 2 - (b.y + b.h / 2) * k;
  tweenTo({ x, y, k }, animate ? 520 : 0);
}
function centerOn(n, k = 0.68, animate = true) {
  const x = stageW * 0.5 - n.x * k;
  const y = stageH * 0.44 - n.y * k;
  tweenTo({ x, y, k }, animate ? 470 : 0);
}
function tweenTo(to, dur) {
  if (!dur || reduceMotion) { view.x = to.x; view.y = to.y; view.k = to.k; applyTransform(); return; }
  const s = { ...view }, t0 = performance.now();
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const e = ease(p);
    view.x = s.x + (to.x - s.x) * e;
    view.y = s.y + (to.y - s.y) * e;
    view.k = s.k + (to.k - s.k) * e;
    applyTransform();
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function zoomAt(factor, cx, cy) {
  const nk = clamp(view.k * factor, 0.028, 3.6);
  const s = nk / view.k;
  view.x = cx - (cx - view.x) * s;
  view.y = cy - (cy - view.y) * s;
  view.k = nk;
  applyTransform();
}
function screenToWorld(px, py) {
  return { x: (px - view.x) / view.k, y: (py - view.y) / view.k };
}
function stagePoint(e) {
  const r = ui.stage.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

function labelBase(n) {
  if (state.selected === n.id || state.hover === n.id) return 1;
  if (state.thread) {
    const ids = threadIds();
    return ids && ids.has(n.id) ? 1 : 0;
  }
  if (state.path) {
    const ids = pathIds();
    return ids && ids.has(n.id) ? 1 : 0;
  }
  if (state.focusSet) return inFocus(n) ? 1 : 0;
  if (state.region) return n.cl === state.region ? 1 : 0;
  const k = view.k;
  if (k >= 0.55) return 1;
  if (k >= 0.32 && n.deg >= 5) return 0.92;
  if (k >= 0.18 && n.deg >= 10) return 0.86;
  if (k < 0.18 && n.deg >= 16) return 0.8;
  return 0;
}

function scheduleLabels() {
  if (labelRaf) return;
  labelRaf = requestAnimationFrame(() => { labelRaf = 0; updateLabels(); });
}
function updateLabels() {
  const k = view.k;
  const mx = pointer ? pointer.x : null;
  const my = pointer ? pointer.y : null;
  const tIds = state.thread ? threadIds() : null;
  const pIds = state.path ? pathIds() : null;
  const th = state.thread ? DATA.threads.find((x) => x.id === state.thread.id) : null;
  const currentId = th ? th.steps[state.thread.step].node : null;
  const candidates = [];
  for (const n of DATA.nodes) {
    const base = labelBase(n);
    let boost = 0;
    if (!state.thread && !state.path && mx != null) {
      const sx = n.x * k + view.x, sy = n.y * k + view.y;
      const d = Math.hypot(sx - mx, sy - my);
      if (d < 155) boost = (1 - d / 155) * 0.85;
    }
    const op = Math.max(base, boost);
    const lbl = n._label;
    if (op <= 0.04) { lbl.style.display = "none"; continue; }
    const forced = state.selected === n.id || state.hover === n.id || currentId === n.id;
    const onRoute = (tIds && tIds.has(n.id)) || (pIds && pIds.has(n.id));
    lbl.style.display = "";
    lbl.style.opacity = Math.min(1, op).toFixed(2);
    const size = (10.5 + boost * 2.8) / k;
    lbl.setAttribute("font-size", size.toFixed(1));
    lbl.setAttribute("fill", forced ? C.paper : C.paper2);
    lbl.setAttribute("font-weight", boost > 0.35 ? "600" : "400");
    candidates.push({ lbl, forced, score: (forced ? 1e6 : 0) + (onRoute ? 1e5 : 0) + (n.deg || 0) * 100 + op * 100 + boost * 1000 });
  }
  candidates.sort((a, b) => b.score - a.score);
  const placed = [];
  for (const c of candidates) {
    const r = c.lbl.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) { c.lbl.style.display = "none"; continue; }
    const box = { x: r.x - 2, y: r.y - 1, w: r.width + 4, h: r.height + 2 };
    const clash = placed.some((p) => box.x < p.x + p.w && box.x + box.w > p.x && box.y < p.y + p.h && box.y + box.h > p.y);
    if (clash && !c.forced) { c.lbl.style.display = "none"; continue; }
    placed.push(box);
  }
  for (const cl in (DATA._hulls || {})) {
    const h = DATA._hulls[cl];
    const dim = state.region && state.region !== cl;
    const hiddenByFocus = (state.thread || state.path || state.focusSet) && !dim;
    h.label.setAttribute("font-size", (10 / k).toFixed(1));
    h.label.style.opacity = hiddenByFocus ? "0.25" : (dim ? "0.35" : "0.9");
    h.path.style.opacity = hiddenByFocus ? "0.25" : (dim ? "0.4" : "1");
    if (k < 0.06) { h.label.style.display = "none"; continue; }
    h.label.style.display = "";
    const r = h.label.getBoundingClientRect();
    const box = { x: r.x - 3, y: r.y - 2, w: r.width + 6, h: r.height + 4 };
    const clash = placed.some((p) => box.x < p.x + p.w && box.x + box.w > p.x && box.y < p.y + p.h && box.y + box.h > p.y);
    if (clash) { h.label.style.display = "none"; continue; }
    placed.push(box);
  }
}

function updateMinimapViewport() {
  const rect = ui.minimapSvg.querySelector(".viewrect");
  if (!rect) return;
  const w = stageW / view.k, h = stageH / view.k;
  const x = -view.x / view.k, y = -view.y / view.k;
  rect.setAttribute("x", x.toFixed(1)); rect.setAttribute("y", y.toFixed(1));
  rect.setAttribute("width", w.toFixed(1)); rect.setAttribute("height", h.toFixed(1));
}

/* ── field paint ────────────────────────────────────────────────────── */
function paintNode(n) {
  const ev = n.ev || "untriaged";
  const typeColor = TYPE_COLOR[n.type] || C.paper3;
  const fill = state.lens === "epistemic" ? EV_COLOR[ev] : typeColor;
  n._shape.setAttribute("fill", n.type === "idea" ? "none" : fill);
  n._shape.setAttribute("stroke", n.type === "idea" ? fill : C.field);
  n._shape.setAttribute("stroke-width", n.type === "idea" ? "1.8" : "1.2");
  n._ring.setAttribute("stroke", EV_COLOR[ev]);
  n._ring.setAttribute("stroke-dasharray",
    ev === "contested" ? "2 2" : ev === "speculative" ? "0.6 3" : ev === "untriaged" ? "1 4" : "none");
  n._ring.style.opacity = (view.k < 0.12 && state.selected !== n.id && state.hover !== n.id) ? "0.35" : "0.72";
  const sel = state.selected === n.id;
  const hov = state.hover === n.id;
  n._halo.setAttribute("stroke", sel ? C.paper : C.ochre);
  n._halo.style.opacity = sel ? "0.75" : hov ? "0.45" : "0";
}

function refresh() {
  const tIds = threadIds();
  const pIds = pathIds();
  const bSet = bridgeSet();
  const aSet = state.connectors ? articulationSet() : null;
  const rel = state.relFocus;

  let shown = 0;
  for (const n of DATA.nodes) {
    if (!nodeVisible(n)) { n._g.style.display = "none"; continue; }
    n._g.style.display = ""; shown++;
    paintNode(n);
    let op = 1;
    if (tIds) op = tIds.has(n.id) ? (state.thread && DATA.threads.find((t) => t.id === state.thread.id).steps[state.thread.step].node === n.id ? 1 : 0.62) : 0.055;
    else if (pIds) op = pIds.has(n.id) ? 1 : 0.055;
    else if (state.focusSet) op = inFocus(n) ? 1 : 0.13;
    else if (state.region) op = inRegion(n) ? 1 : 0.16;
    else if (rel) op = relAttached(n, rel) ? 1 : 0.18;
    else if (bSet) op = bSet.has(n.id) ? 1 : 0.13;
    else if (aSet) op = aSet.has(n.id) ? 1 : 0.15;
    n._g.style.opacity = op.toFixed(2);
  }

  for (const l of DATA.links) {
    const a = l.source, b = l.target;
    const vis = nodeVisible(a) && nodeVisible(b);
    let op = 0.14;
    if (!vis) op = 0;
    else if (tIds) op = (tIds.has(a.id) && tIds.has(b.id)) ? 0.18 : 0;
    else if (pIds) op = state.path.edgeSet.has(l.s + "|" + l.t) ? 0.9 : 0;
    else if (state.focusSet) op = (inFocus(a) && inFocus(b)) ? 0.5 : 0.045;
    else if (state.region) op = (a.cl === state.region && b.cl === state.region) ? 0.32 : 0.05;
    else if (rel) op = l.r === rel ? 0.78 : 0.035;
    else if (bSet) op = (bSet.has(a.id) && bSet.has(b.id)) ? 0.55 : 0.03;
    else if (aSet) op = (aSet.has(a.id) || aSet.has(b.id)) ? 0.42 : 0.035;
    l._el.style.opacity = op.toFixed(3);
    l._el.setAttribute("stroke", FAMILY_COLOR[REL_FAMILY[l.r] || "power"]);
    const baseW = 0.8 + Math.min(1.1, Math.min(a.deg, b.deg) / 18);
    l._el.setAttribute("stroke-width", (op > 0.5 ? baseW + 0.5 : baseW).toFixed(2));
    if (l.q === "C") l._el.setAttribute("stroke-dasharray", "3 4");
    else if (l.q === "S") l._el.setAttribute("stroke-dasharray", "1 4");
    else l._el.removeAttribute("stroke-dasharray");
    if (op > 0.45) l._el.setAttribute("marker-end", "url(#atlas-arrow)");
    else l._el.removeAttribute("marker-end");
  }

  if (state.region) {
    for (const cl in (DATA._hulls || {})) {
      const dim = cl !== state.region;
      DATA._hulls[cl].path.style.opacity = dim ? "0.35" : "1";
      DATA._hulls[cl].label.style.opacity = dim ? "0.3" : "0.9";
    }
  } else if (!state.thread && !state.path && !state.focusSet) {
    for (const cl in (DATA._hulls || {})) {
      DATA._hulls[cl].path.style.opacity = "1";
      DATA._hulls[cl].label.style.opacity = "0.9";
    }
  }

  ui.status.innerHTML = `${DATA.nodes.length} nodes · ${DATA.links.length} relations · <b>${shown} in view</b>`;
  scheduleLabels();
  renderPathLayer();
  updateCrumbs();
  syncRail();
  syncHash();
}

/* ── path layer ─────────────────────────────────────────────────────── */
function renderPathLayer() {
  const g = ui.pathLayer;
  while (g.firstChild) g.removeChild(g.firstChild);
  if (state.thread) {
    const th = DATA.threads.find((t) => t.id === state.thread.id);
    if (!th) return;
    for (let i = 0; i < th.steps.length - 1; i++) {
      const a = DATA.byId[th.steps[i].node], b = DATA.byId[th.steps[i + 1].node];
      if (!a || !b) continue;
      const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
      const cx = (a.x + b.x) / 2 - (dy / len) * Math.min(80, len * 0.2);
      const cy = (a.y + b.y) / 2 + (dx / len) * Math.min(80, len * 0.2);
      const done = i < state.thread.step;
      g.appendChild(S("path", {
        d: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`,
        fill: "none", stroke: th.accent,
        "stroke-width": done ? 2.2 : 1.2,
        "stroke-opacity": done ? 0.9 : 0.35,
        "stroke-dasharray": "2 6", "stroke-linecap": "round",
      }));
    }
    return;
  }
  if (state.path) {
    const seq = state.path.seq;
    for (let i = 0; i < seq.length - 1; i++) {
      const a = DATA.byId[seq[i]], b = DATA.byId[seq[i + 1]];
      if (!a || !b) continue;
      g.appendChild(S("line", {
        x1: a.x, y1: a.y, x2: b.x, y2: b.y,
        stroke: C.prussian, "stroke-width": "2", "stroke-opacity": "0.85",
        "marker-end": "url(#atlas-arrow)",
      }));
    }
  }
}

/* ── focus / region / overlays ──────────────────────────────────────── */
function clearOverlays(keep = []) {
  const k = new Set(keep);
  if (!k.has("selected")) { state.selected = null; closeDossier(); }
  if (!k.has("focus")) { state.focus = null; state.focusSet = null; }
  if (!k.has("region")) state.region = null;
  if (!k.has("thread")) { state.thread = null; state.step = 0; }
  if (!k.has("path")) state.path = null;
  if (!k.has("relFocus")) state.relFocus = null;
  if (!k.has("bridges")) state.bridges = false;
  if (!k.has("connectors")) state.connectors = false;
}

function focusNode(n, depth = 1) {
  if (!n) return;
  clearOverlays(["selected"]);
  state.selected = n.id;
  state.focus = n.id;
  state.focusDepth = depth;
  state.focusSet = ego(n.id, depth);
  fillDossier(n);
  openDossier();
  centerOn(n, 0.72, true);
  refresh();
}
function ego(id, depth) {
  const s = new Set([id]);
  let frontier = [id];
  for (let d = 0; d < depth; d++) {
    const next = [];
    for (const x of frontier) for (const y of DATA.adj.get(x) || []) {
      if (!s.has(y)) { s.add(y); next.push(y); }
    }
    frontier = next;
  }
  return s;
}
function focusRegion(cl) {
  if (!cl) return;
  clearOverlays([]);
  state.mode = "field";
  state.region = cl;
  closeDossier();
  closePathReader();
  const arr = DATA.clusterMembers.get(cl) || [];
  const b = boundsOf(arr);
  if (b) { setMode("field", false); fitBounds(padBounds(b, 80), true); }
  refresh();
}
function clearRegion() { state.region = null; refresh(); }

function toggleRel(r) {
  if (state.relFocus === r) { state.relFocus = null; refresh(); return; }
  clearOverlays([]);
  state.relFocus = r;
  closeDossier();
  refresh();
}
function toggleBridges() {
  clearOverlays([]);
  state.bridges = true;
  closeDossier();
  const s = bridgeSet();
  const arr = DATA.nodes.filter((n) => s && s.has(n.id));
  if (arr.length) fitBounds(padBounds(boundsOf(arr), 80), true);
  refresh();
}
function toggleConnectors() {
  clearOverlays([]);
  state.connectors = true;
  closeDossier();
  const a = articulationSet();
  const arr = DATA.nodes.filter((n) => a.has(n.id));
  if (arr.length) fitBounds(padBounds(boundsOf(arr), 80), true);
  refresh();
}
function resetView() {
  clearOverlays([]);
  state.lens = "structure";
  state.evidence = new Set(["documented", "contested", "speculative", "untriaged"]);
  state.kinds = new Set(Object.keys(DATA.types));
  setMode("field", false);
  fitBounds(worldBounds, true);
  refresh();
}

function boundsOf(arr) {
  if (!arr || !arr.length) return null;
  let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity;
  for (const n of arr) { a = Math.min(a, n.x); b = Math.min(b, n.y); c = Math.max(c, n.x); d = Math.max(d, n.y); }
  return { x: a, y: b, w: c - a, h: d - b };
}
function padBounds(b, p) { return { x: b.x - p, y: b.y - p, w: b.w + p * 2, h: b.h + p * 2 }; }

/* ── selection + dossier ────────────────────────────────────────────── */
function onHover(n) {
  state.hover = n ? n.id : null;
  if (n) {
    const r = ui.stage.getBoundingClientRect();
    const sx = n.x * view.k + view.x, sy = n.y * view.k + view.y;
    ui.tooltip.innerHTML = `<b>${esc(n.label)}</b> <span>· ${esc(DATA.clusters[n.cl] ? DATA.clusters[n.cl].label : n.cl)}${n.sub ? " · " + esc(n.sub) : ""}</span>`;
    ui.tooltip.style.left = (sx + 10) + "px";
    ui.tooltip.style.top = (sy - 8) + "px";
    ui.tooltip.style.opacity = "1";
    const g = n._g;
    if (g) g.style.opacity = "1";
  } else {
    ui.tooltip.style.opacity = "0";
  }
  scheduleLabels();
  for (const x of DATA.nodes) {
    if (!nodeVisible(x)) continue;
    if (state.selected === x.id || state.hover === x.id) paintNode(x);
    else if (state.hover) paintNode(x);
  }
}

function selectNode(id, opts = {}) {
  const n = DATA.byId[id];
  if (!n) return;
  if (state.mode === "index") setMode("field", false);
  const keepContext = state.mode === "paths" || opts.keepContext;
  clearOverlays(keepContext ? ["selected", "thread", "path"] : ["selected"]);
  state.selected = id;
  state.focus = id;
  state.focusDepth = opts.depth || 1;
  state.focusSet = ego(id, state.focusDepth);
  fillDossier(n);
  openDossier();
  refresh();
  if (opts.center !== false) centerOn(n, opts.k || 0.74, true);
}
function closeDossier() {
  ui.dossier.dataset.open = "0";
}
function dismissDossier() {
  state.selected = null;
  state.focus = null;
  state.focusSet = null;
  closeDossier();
  refresh();
}
function openDossier() {
  ui.dossier.dataset.open = "1";
  ui.dossier.scrollTop = 0;
}

function fillDossier(n) {
  const cl = DATA.clusters[n.cl];
  const ev = n.ev || "untriaged";
  const evLabel = ev === "untriaged" ? "untriaged" : (DATA.evidence[ev] ? DATA.evidence[ev].label : ev);
  const type = DATA.types[n.type] ? DATA.types[n.type].label : n.type;
  const rec = n.rec || {};
  const out = [];
  for (const l of DATA.links) if (l.s === n.id) out.push({ dir: "out", l });
  for (const l of DATA.links) if (l.t === n.id) out.push({ dir: "in", l });
  const outBy = {}, inBy = {};
  for (const { dir, l } of out) {
    const key = (dir === "out" ? REL_LABEL[l.r] : REL_LABEL_IN[l.r]) || l.r;
    const bucket = dir === "out" ? outBy : inBy;
    (bucket[key] = bucket[key] || []).push(l);
  }
  const relHtml = (bucket, dir) => Object.keys(bucket).sort().map((key) => {
    const items = bucket[key].map((l) => {
      const other = dir === "out" ? DATA.byId[l.t] : DATA.byId[l.s];
      if (!other) return "";
      return `<button class="rel-item" data-rel-id="${esc(other.id)}"><span class="arrow">${dir === "out" ? "→" : "←"}</span><span>${esc(other.label)}</span><span class="kind">${esc(DATA.clusters[other.cl] ? DATA.clusters[other.cl].label : other.cl)}</span></button>`;
    }).join("");
    return `<div class="rel-group"><h4>${esc(key)} · ${bucket[key].length}</h4>${items}</div>`;
  }).join("");

  ui.dossier.innerHTML = `
    <div class="dossier-head">
      <div class="dossier-kicker">
        <span class="swatch" style="background:${TYPE_COLOR[n.type] || C.paper3};border-color:${TYPE_COLOR[n.type] || C.paper3}"></span>
        <span>${esc(type)}</span><span>·</span><span>${esc(cl ? cl.label : n.cl)}</span>
        <button class="dossier-close" data-close aria-label="Close the record">×</button>
      </div>
      <h2>${esc(n.label)}</h2>
      ${n.sub ? `<p class="sub">${esc(n.sub)}</p>` : ""}
      <div class="dossier-meta">
        <span><i style="background:${EV_COLOR[ev]};border-color:${EV_COLOR[ev]}"></i>${esc(evLabel)}</span>
        <span>${n.yr ? esc(n.yr) : "—"}</span>
        <span>${n.deg} ties</span>
        ${n.lever ? `<span>lever: ${esc(DATA.leverLabel[n.lever] || n.lever)}</span>` : ""}
      </div>
    </div>
    <div class="dossier-body">
      ${rec.what ? `<div class="record-block"><h3>What it is</h3><p>${esc(rec.what)}</p></div>` : ""}
      ${rec.fund ? `<div class="record-block"><h3>Funding / base</h3><p>${esc(rec.fund)}</p></div>` : ""}
      ${rec.did ? `<div class="record-block"><h3>Did</h3><p>${esc(rec.did)}</p></div>` : ""}
      ${rec.src && rec.src.length ? `<div class="record-block"><h3>Sources</h3><ul>${rec.src.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>` : ""}
      ${!rec.what && !rec.did && !rec.fund ? `<div class="record-block"><p>No record yet. This node is carried by its ties.</p></div>` : ""}
      <div class="dossier-actions">
        <button data-act="focus">Focus this node</button>
        <button data-act="copy">Copy link</button>
        <button data-act="index">Find in index</button>
        <button data-act="clear">Clear focus</button>
      </div>
      <div class="relations">
        ${Object.keys(outBy).length ? `<div class="rel-group"><h4>Outward</h4>${relHtml(outBy, "out")}</div>` : ""}
        ${Object.keys(inBy).length ? `<div class="rel-group"><h4>Inward</h4>${relHtml(inBy, "in")}</div>` : ""}
      </div>
    </div>`;
  ui.dossier.querySelector("[data-close]").addEventListener("click", dismissDossier);
  ui.dossier.querySelectorAll("[data-rel-id]").forEach((b) => {
    b.addEventListener("click", () => selectNode(b.dataset.relId, { center: true }));
  });
  ui.dossier.querySelectorAll("[data-act]").forEach((b) => {
    b.addEventListener("click", () => {
      const act = b.dataset.act;
      if (act === "focus") focusNode(n, 2);
      if (act === "copy") { copyURL(); }
      if (act === "index") { state.indexQ = n.label; ui.indexSearch.value = n.label; setMode("index"); }
      if (act === "clear") { clearOverlays([]); refresh(); }
    });
  });
}

/* ── path / thread ──────────────────────────────────────────────────── */
function findPath(a, b) {
  if (a === b) return [a];
  const prev = {}, seen = new Set([a]), q = [a];
  while (q.length) {
    const cur = q.shift();
    for (const nx of DATA.adj.get(cur) || []) {
      if (seen.has(nx)) continue;
      seen.add(nx); prev[nx] = cur;
      if (nx === b) {
        const path = [b];
        let c = b;
        while (c !== a) { c = prev[c]; path.push(c); }
        return path.reverse();
      }
      q.push(nx);
    }
  }
  return null;
}
function setPath(a, b) {
  const seq = findPath(a, b);
  if (!seq) return;
  clearOverlays([]);
  const edgeSet = new Set();
  for (let i = 0; i < seq.length - 1; i++) edgeSet.add(seq[i] + "|" + seq[i + 1]);
  state.path = { a, b, seq, edgeSet };
  closeDossier();
  setMode("field", false);
  fitBounds(padBounds(boundsOf(seq.map((id) => DATA.byId[id])), 100), true);
  refresh();
  renderPathReadout(seq);
}
function clearPath() {
  state.path = null;
  renderPathReadout(null);
  refresh();
}
function renderPathReadout(seq) {
  const box = $("#path-out");
  if (!box) return;
  if (!seq) {
    box.innerHTML = "";
    const clr = document.querySelector("[data-path-clear]");
    if (clr) clr.style.display = "none";
    return;
  }
  let html = `<div class="rail-group"><span>${seq.length - 1} steps</span></div>`;
  for (let i = 0; i < seq.length; i++) {
    const n = DATA.byId[seq[i]];
    html += `<button class="path-step" data-path-id="${esc(n.id)}"><span class="mark">${String(i + 1).padStart(2, "0")}</span><span>${esc(n.label)}</span></button>`;
    if (i < seq.length - 1) {
      const l = DATA.links.find((x) => (x.s === seq[i] && x.t === seq[i + 1]) || (x.s === seq[i + 1] && x.t === seq[i]));
      const phrase = l ? (l.s === seq[i] ? REL_LABEL[l.r] : REL_LABEL_IN[l.r]) : "linked to";
      html += `<div class="path-rel">↓ ${esc(phrase || "linked to")}</div>`;
    }
  }
  box.innerHTML = html;
  box.querySelectorAll("[data-path-id]").forEach((b) => b.addEventListener("click", () => selectNode(b.dataset.pathId, { center: true })));
  const clr = document.querySelector("[data-path-clear]");
  if (clr) clr.style.display = "block";
}

function enterPath(id) {
  const th = DATA.threads.find((t) => t.id === id);
  if (!th) return;
  clearOverlays([]);
  state.thread = { id, step: 0 };
  state.mode = "paths";
  closeDossier();
  setMode("paths", false);
  gotoStep(0, true);
}
function gotoStep(i, first = false) {
  if (!state.thread) return;
  const th = DATA.threads.find((t) => t.id === state.thread.id);
  if (!th) return;
  state.thread.step = clamp(i, 0, th.steps.length - 1);
  const n = DATA.byId[th.steps[state.thread.step].node];
  if (n) centerOn(n, 0.78, !first);
  renderPathReader();
  refresh();
}
function exitPath() {
  state.thread = null;
  state.step = 0;
  closePathReader();
  if (state.mode === "paths") state.mode = "field";
  setMode(state.mode, false);
  fitBounds(worldBounds, true);
  refresh();
}
function closePathReader() {
  ui.pathReader.dataset.open = "0";
}
function renderPathReader() {
  if (state.mode !== "paths") { closePathReader(); return; }
  ui.pathReader.dataset.open = "1";
  const th = state.thread ? DATA.threads.find((t) => t.id === state.thread.id) : null;
  if (!th) {
    ui.pathReader.innerHTML = `
      <div class="kicker"><span class="dot" style="background:${C.ochre}"></span><span>Guided paths</span></div>
      <h2>Read the field</h2>
      <p class="blurb">A path is an argument you can follow. Each step is a node, a date and a claim; the field dims to the line it traces. Start anywhere.</p>
      <div class="path-steps">
        ${PATH_GROUPS.map((g) => `<div class="rail-group"><span>${esc(g.label)}</span></div>` + g.ids.map((id) => {
          const t = DATA.threads.find((x) => x.id === id);
          if (!t) return "";
          return `<button class="path-step-card" data-path="${esc(t.id)}"><span class="step-head"><span class="num">→</span><span class="node-name">${esc(t.title)}</span><span class="node-kind">${t.steps.length} steps</span></span><span class="note">${esc(t.blurb)}</span></button>`;
        }).join("")).join("")}
      </div>
      <div class="path-controls"><button class="path-close" data-path-exit>← leave paths</button></div>`;
    ui.pathReader.querySelectorAll("[data-path]").forEach((b) => b.addEventListener("click", () => enterPath(b.dataset.path)));
    ui.pathReader.querySelector("[data-path-exit]").addEventListener("click", () => setMode("field"));
    return;
  }
  const step = th.steps[state.thread.step];
  const n = DATA.byId[step.node];
  const accent = th.accent;
  ui.pathReader.innerHTML = `
    <div class="kicker"><span class="dot" style="background:${accent}"></span><span>Guided path</span></div>
    <h2>${esc(th.title)}</h2>
    <p class="blurb">${esc(th.blurb)}</p>
    <div class="path-steps">
      ${th.steps.map((s, i) => {
        const sn = DATA.byId[s.node];
        if (!sn) return "";
        return `<button class="path-step-card" data-step="${i}" aria-current="${i === state.thread.step}">
          <span class="step-head"><span class="num">${String(i + 1).padStart(2, "0")}</span><span class="node-name">${esc(sn.label)}</span><span class="node-kind">${esc(DATA.clusters[sn.cl] ? DATA.clusters[sn.cl].label : sn.cl)}</span></span>
          <span class="note">${esc(s.note)}</span>
        </button>`;
      }).join("")}
    </div>
    <div class="path-controls">
      <button data-prev ${state.thread.step === 0 ? "disabled" : ""}>‹ prev</button>
      <button data-next>${state.thread.step === th.steps.length - 1 ? "restart" : "next ›"}</button>
      <button data-open-record>open record</button>
      <span class="spacer"></span>
      <button class="path-close" data-exit>× close</button>
    </div>
    <div style="margin-top:14px" class="rail-note">${esc(step.note)}</div>`;
  ui.pathReader.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => gotoStep(+b.dataset.step)));
  ui.pathReader.querySelector("[data-prev]").addEventListener("click", () => gotoStep(state.thread.step - 1));
  ui.pathReader.querySelector("[data-next]").addEventListener("click", () => gotoStep(state.thread.step >= th.steps.length - 1 ? 0 : state.thread.step + 1));
  ui.pathReader.querySelector("[data-open-record]").addEventListener("click", () => { if (n) selectNode(n.id, { center: false }); });
  ui.pathReader.querySelector("[data-exit]").addEventListener("click", exitPath);
}

/* ── rail ───────────────────────────────────────────────────────────── */
function buildRail() {
  const total = DATA.nodes.length, ties = DATA.links.length;
  const counts = {};
  for (const n of DATA.nodes) counts[n.cl] = (counts[n.cl] || 0) + 1;

  ui.rail.innerHTML = `
    <section class="rail-section" open>
      <details open>
        <summary>Orientation</summary>
        <div class="rail-body">
          <p class="rail-note"><b>${total}</b> nodes · <b>${ties}</b> relations. Proximity is the argument: clusters that share more ties sit closer. Hover to read; click to open; double-click to focus.</p>
          <div class="path-row" style="margin:0 0 6px">
            <button class="path-go" data-open-palette>Search the field</button>
            <button class="path-clear" data-open-intro title="How to read this atlas">?</button>
          </div>
          <p class="rail-note" style="margin-bottom:0">Read the <b>paths</b> for an argument; use the <b>index</b> for names; use the <b>domains</b> for the macro-skeleton.</p>
        </div>
      </details>
    </section>
    <section class="rail-section">
      <details open>
        <summary>Paths</summary>
        <div class="rail-body" id="rail-paths"></div>
      </details>
    </section>
    <section class="rail-section">
      <details open>
        <summary>Domains <span class="count" style="margin-left:auto;color:var(--paper-4);font-family:var(--mono);font-size:9px">${Object.keys(counts).length}</span></summary>
        <div class="rail-body" id="rail-domains"></div>
      </details>
    </section>
    <section class="rail-section">
      <details>
        <summary>Filters</summary>
        <div class="rail-body" id="rail-filters"></div>
      </details>
    </section>
    <section class="rail-section">
      <details>
        <summary>Trace a tie</summary>
        <div class="rail-body" id="rail-rel"></div>
      </details>
    </section>
    <section class="rail-section">
      <details>
        <summary>Tools</summary>
        <div class="rail-body" id="rail-tools"></div>
      </details>
    </section>
    <section class="rail-section">
      <details>
        <summary>About</summary>
        <div class="rail-body">
          <p class="rail-note">The atlas began as a genealogy of crowding science, Cold-War behavior-engineering and the population-control apparatus. The 2026-11 edition adds the <b>Sham Individualism</b> strand (radio demagogy → Sabido → the podcast ear), the <b>audience as population</b> bridge, and the <b>Rockefeller hinge</b> test.</p>
          <p class="rail-note">Evidence tiers: documented, contested, speculative. Effect figures relayed by the entertainment-education movement are marked contested; the negative-image thesis is marked speculative. The Rockefeller co-funding is documented; the connection is open.</p>
          <button class="path-go" data-open-intro style="width:100%">How to read this atlas</button>
        </div>
      </details>
    </section>`;

  // paths
  const pathBox = $("#rail-paths");
  pathBox.innerHTML = PATH_GROUPS.map((g) => `<div class="rail-group"><span>${esc(g.label)}</span><span>${g.ids.length}</span></div>` + g.ids.map((id) => {
    const t = DATA.threads.find((x) => x.id === id);
    if (!t) return "";
    return `<button class="rail-item" data-path="${esc(t.id)}"><span class="dot" style="background:${t.accent}"></span><span>${esc(t.title)}</span><span class="count">${t.steps.length}</span></button>`;
  }).join("")).join("");
  pathBox.querySelectorAll("[data-path]").forEach((b) => b.addEventListener("click", () => enterPath(b.dataset.path)));

  // domains
  const domBox = $("#rail-domains");
  domBox.innerHTML = ZONES.map((z) => {
    const totalZ = z.cls.reduce((a, c) => a + (counts[c] || 0), 0);
    const rows = z.cls.map((cl) => {
      const c = DATA.clusters[cl];
      if (!c) return "";
      return `<button class="rail-item" data-region="${esc(cl)}"><span class="dot" style="background:oklch(0.68 0.1 ${c.hue})"></span><span>${esc(c.label)}</span><span class="count">${counts[cl] || 0}</span></button>`;
    }).join("");
    return `<div class="rail-group"><span>${esc(z.label)}</span><span>${totalZ}</span></div>${rows}`;
  }).join("");
  domBox.querySelectorAll("[data-region]").forEach((b) => b.addEventListener("click", () => focusRegion(b.dataset.region)));

  // filters
  const f = $("#rail-filters");
  f.innerHTML = `
    <div class="rail-group"><span>Lens</span></div>
    <div class="filter-row" id="lens-row"></div>
    <div class="rail-group"><span>Evidence</span></div>
    <div id="ev-row"></div>
    <p class="rail-note" style="margin:5px 0 10px"><b>Documented ≠ effective.</b> Intent and ambition are not demonstrated capability.</p>
    <div class="rail-group"><span>Kind</span></div>
    <div id="kind-row"></div>`;
  const lensRow = $("#lens-row");
  const lensDefs = [["structure", "Structure"], ...Object.keys(DATA.lenses).map((k) => [k, DATA.lenses[k].label])];
  for (const [k, label] of lensDefs) {
    const b = document.createElement("button");
    b.className = "filter-chip";
    b.dataset.lens = k;
    b.textContent = label;
    b.setAttribute("aria-pressed", String(state.lens === k));
    b.addEventListener("click", () => setLens(k));
    lensRow.appendChild(b);
  }
  const evRow = $("#ev-row");
  for (const ev of ["documented", "contested", "speculative", "untriaged"]) {
    const b = document.createElement("button");
    b.className = "check-row";
    b.dataset.ev = ev;
    b.setAttribute("aria-pressed", String(state.evidence.has(ev)));
    b.innerHTML = `<span class="swatch" style="background:${EV_COLOR[ev]};border-color:${EV_COLOR[ev]}"></span><span>${ev === "untriaged" ? "Untriaged" : DATA.evidence[ev].label}</span><span class="tick">●</span>`;
    b.addEventListener("click", () => {
      if (state.evidence.has(ev)) state.evidence.delete(ev); else state.evidence.add(ev);
      syncRail(); refresh();
    });
    evRow.appendChild(b);
  }
  const kindRow = $("#kind-row");
  for (const k of Object.keys(DATA.types)) {
    const b = document.createElement("button");
    b.className = "check-row";
    b.dataset.kind = k;
    b.setAttribute("aria-pressed", String(state.kinds.has(k)));
    b.innerHTML = `<span class="swatch" style="background:${TYPE_COLOR[k]};border-color:${TYPE_COLOR[k]}"></span><span>${esc(DATA.types[k].label)}</span><span class="tick">●</span>`;
    b.addEventListener("click", () => {
      if (state.kinds.has(k)) state.kinds.delete(k); else state.kinds.add(k);
      syncRail(); refresh();
    });
    kindRow.appendChild(b);
  }

  // relations
  const relBox = $("#rail-rel");
  const relOrder = ["funded", "staffs", "theorizes", "influenced", "became", "ran", "feeds", "captures", "litigates", "rival", "exposed", "rhymes"];
  relBox.innerHTML = `<p class="rail-note">Light up every edge of one kind across the field — follow the money, the genealogy, or the critique.</p>` +
    relOrder.map((r) => {
      const cnt = DATA.links.filter((l) => l.r === r).length;
      if (!cnt) return "";
      return `<button class="rail-item" data-rel="${esc(r)}"><span class="dot" style="background:${FAMILY_COLOR[REL_FAMILY[r]] || C.paper3}"></span><span>${esc(REL_LABEL[r] || r)}</span><span class="count">${cnt}</span></button>`;
    }).join("");
  relBox.querySelectorAll("[data-rel]").forEach((b) => b.addEventListener("click", () => toggleRel(b.dataset.rel)));

  // tools
  const tools = $("#rail-tools");
  tools.innerHTML = `
    <div class="rail-group"><span>Find a path</span></div>
    <input class="path-input" id="path-a" list="atlas-nodes" placeholder="from… e.g. Rockefeller Foundation" autocomplete="off">
    <input class="path-input" id="path-b" list="atlas-nodes" placeholder="to… e.g. Joe Rogan" autocomplete="off" style="margin-top:5px">
    <div class="path-row"><button class="path-go" data-path-go>Trace path</button><button class="path-clear" data-path-clear title="Clear path">×</button></div>
    <div class="path-out" id="path-out"></div>
    <div class="rail-group"><span>Whole-field views</span></div>
    <button class="rail-item" data-tool="bridges"><span class="dot" style="background:${C.prussian}"></span><span>Show crossings</span></button>
    <button class="rail-item" data-tool="connectors"><span class="dot" style="background:${C.ochre}"></span><span>Show load-bearing nodes</span></button>
    <button class="rail-item" data-tool="reset"><span class="dot" style="background:${C.paper3}"></span><span>Reset the view</span></button>`;
  if (!document.getElementById("atlas-nodes")) {
    const dl = document.createElement("datalist");
    dl.id = "atlas-nodes";
    DATA.nodes.slice().sort((a, b) => a.label.localeCompare(b.label)).forEach((n) => {
      const o = document.createElement("option"); o.value = n.label; dl.appendChild(o);
    });
    document.body.appendChild(dl);
  }
  const resolve = (v) => {
    if (!v) return null;
    const t = v.trim().toLowerCase();
    const exact = DATA.nodes.find((n) => n.label.toLowerCase() === t);
    if (exact) return exact.id;
    const part = DATA.nodes.find((n) => n.label.toLowerCase().includes(t));
    return part ? part.id : null;
  };
  const go = () => {
    const a = resolve($("#path-a").value), b = resolve($("#path-b").value);
    if (a && b) setPath(a, b);
    else renderPathReadout(null);
  };
  $("[data-path-go]").addEventListener("click", go);
  $("[data-path-clear]").addEventListener("click", clearPath);
  $("#path-a").addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  $("#path-b").addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  tools.querySelector("[data-tool=bridges]").addEventListener("click", toggleBridges);
  tools.querySelector("[data-tool=connectors]").addEventListener("click", toggleConnectors);
  tools.querySelector("[data-tool=reset]").addEventListener("click", resetView);

  // static buttons
  document.querySelectorAll("[data-open-palette]").forEach((b) => b.addEventListener("click", openPalette));
  document.querySelectorAll("[data-open-intro]").forEach((b) => b.addEventListener("click", openIntro));
  syncRail();
}

function syncRail() {
  document.querySelectorAll("[data-path]").forEach((b) => b.setAttribute("aria-current", String(!!state.thread && state.thread.id === b.dataset.path)));
  document.querySelectorAll("[data-region]").forEach((b) => b.setAttribute("aria-current", String(state.region === b.dataset.region)));
  document.querySelectorAll("[data-lens]").forEach((b) => b.setAttribute("aria-pressed", String(state.lens === b.dataset.lens)));
  document.querySelectorAll("[data-ev]").forEach((b) => {
    const on = state.evidence.has(b.dataset.ev);
    b.setAttribute("aria-pressed", String(on));
    b.querySelector(".tick").style.color = on ? EV_COLOR[b.dataset.ev] : C.paper4;
    b.style.opacity = on ? "1" : "0.5";
  });
  document.querySelectorAll("[data-kind]").forEach((b) => {
    const on = state.kinds.has(b.dataset.kind);
    b.setAttribute("aria-pressed", String(on));
    b.querySelector(".tick").style.color = on ? TYPE_COLOR[b.dataset.kind] : C.paper4;
    b.style.opacity = on ? "1" : "0.5";
  });
  document.querySelectorAll("[data-rel]").forEach((b) => {
    const on = state.relFocus === b.dataset.rel;
    b.setAttribute("aria-current", String(on));
    b.style.background = on ? "var(--field-3)" : "";
  });
  const bridges = document.querySelector("[data-tool=bridges]");
  if (bridges) bridges.setAttribute("aria-current", String(state.bridges));
  const connectors = document.querySelector("[data-tool=connectors]");
  if (connectors) connectors.setAttribute("aria-current", String(state.connectors));
}

function setLens(k) {
  state.lens = k;
  if (k === "epistemic") { /* evidence tier colors */ }
  refresh();
  const desc = $("#lens-desc");
  if (desc) desc.textContent = k === "structure" ? "Nodes coloured by kind." : (DATA.lenses[k] ? DATA.lenses[k].desc : "");
}

/* ── crumbs / status / mode ─────────────────────────────────────────── */
function updateCrumbs() {
  const parts = [];
  parts.push(`<button class="crumb" data-crumb="mode">${esc(state.mode === "field" ? "Field" : state.mode[0].toUpperCase() + state.mode.slice(1))}</button>`);
  if (state.region) parts.push(`<span class="sep">/</span><button class="crumb" data-crumb="region">${esc(DATA.clusters[state.region] ? DATA.clusters[state.region].label : state.region)}</button>`);
  if (state.thread) {
    const th = DATA.threads.find((t) => t.id === state.thread.id);
    if (th) parts.push(`<span class="sep">/</span><button class="crumb" data-crumb="thread">${esc(th.title)} · ${state.thread.step + 1}/${th.steps.length}</button>`);
  }
  if (state.focus && state.selected) {
    const n = DATA.byId[state.selected];
    if (n) parts.push(`<span class="sep">/</span><button class="crumb" data-crumb="selected">${esc(n.label)}</button>`);
  }
  if (state.relFocus) parts.push(`<span class="sep">/</span><button class="crumb" data-crumb="rel">${esc(REL_LABEL[state.relFocus] || state.relFocus)}</button>`);
  if (state.bridges) parts.push(`<span class="sep">/</span><button class="crumb" data-crumb="bridges">crossings</button>`);
  if (state.connectors) parts.push(`<span class="sep">/</span><button class="crumb" data-crumb="connectors">load-bearing</button>`);
  ui.crumbs.innerHTML = parts.join("");
  ui.crumbs.querySelectorAll("[data-crumb]").forEach((b) => b.addEventListener("click", () => {
    const k = b.dataset.crumb;
    if (k === "mode") { setMode("field"); }
    if (k === "region") { state.region = null; refresh(); }
    if (k === "thread") { exitPath(); }
    if (k === "selected") { clearOverlays([]); refresh(); }
    if (k === "rel") { state.relFocus = null; refresh(); }
    if (k === "bridges") { state.bridges = false; refresh(); }
    if (k === "connectors") { state.connectors = false; refresh(); }
  }));
}

function setMode(mode, render = true) {
  state.mode = mode;
  ui.app.dataset.mode = mode;
  ui.app.dataset.rail = "0";
  document.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-current", String(b.dataset.mode === mode)));
  $("#domains-view").dataset.visible = mode === "domains" ? "1" : "0";
  $("#timeline-view").dataset.visible = mode === "timeline" ? "1" : "0";
  $("#matrix-view").dataset.visible = mode === "matrix" ? "1" : "0";
  if (mode === "paths") {
    renderPathReader();
  } else {
    closePathReader();
  }
  if (mode === "index") {
    closeDossier();
    renderIndex();
  } else if (mode === "domains") {
    closeDossier();
    renderDomains();
  } else if (mode === "timeline") {
    closeDossier();
    renderTimeline();
  } else if (mode === "matrix") {
    closeDossier();
    renderMatrix();
  }
  if (mode !== "index") $("#index-view").scrollTop = 0;
  if (render) refresh();
  updateCrumbs();
  syncHash();
}

/* ── index ──────────────────────────────────────────────────────────── */
function buildIndexFilters() {
  const kinds = Object.keys(DATA.types).sort((a, b) => DATA.types[a].label.localeCompare(DATA.types[b].label));
  ui.indexKind.innerHTML = `<option value="all">all kinds</option>` + kinds.map((k) => `<option value="${esc(k)}">${esc(DATA.types[k].label)}</option>`).join("");
  const domains = Object.keys(DATA.clusters).sort((a, b) => DATA.clusters[a].label.localeCompare(DATA.clusters[b].label));
  ui.indexDomain.innerHTML = `<option value="all">all domains</option>` + domains.map((k) => `<option value="${esc(k)}">${esc(DATA.clusters[k].label)}</option>`).join("");
  ui.indexEv.innerHTML = `<option value="all">all tiers</option><option value="documented">documented</option><option value="contested">contested</option><option value="speculative">speculative</option><option value="untriaged">untriaged</option>`;
}

function renderIndex() {
  const q = (state.indexQ || "").trim().toLowerCase();
  let rows = DATA.nodes.filter((n) => {
    if (state.indexKind !== "all" && n.type !== state.indexKind) return false;
    if (state.indexDomain !== "all" && n.cl !== state.indexDomain) return false;
    const ev = n.ev || "untriaged";
    if (state.indexEv !== "all" && ev !== state.indexEv) return false;
    if (!q) return true;
    const hay = (n.label + " " + (n.sub || "") + " " + (n.rec && n.rec.src ? n.rec.src.join(" ") : "") + " " + n.id).toLowerCase();
    return hay.includes(q);
  });
  rows.sort((a, b) => {
    if (state.indexSort === "year") return (a.yr || 9999) - (b.yr || 9999) || a.label.localeCompare(b.label);
    if (state.indexSort === "degree") return b.deg - a.deg || a.label.localeCompare(b.label);
    if (state.indexSort === "domain") return a.cl.localeCompare(b.cl) || a.label.localeCompare(b.label);
    return a.label.localeCompare(b.label);
  });
  ui.indexCount.textContent = `${rows.length} of ${DATA.nodes.length}`;
  ui.indexBody.innerHTML = rows.map((n) => {
    const ev = n.ev || "untriaged";
    return `<tr data-index-id="${esc(n.id)}" tabindex="0">
      <td><span class="name">${esc(n.label)}</span>${n.sub ? `<span class="sub">${esc(n.sub)}</span>` : ""}</td>
      <td class="mono">${esc(DATA.types[n.type] ? DATA.types[n.type].label : n.type)}</td>
      <td class="mono">${esc(DATA.clusters[n.cl] ? DATA.clusters[n.cl].label : n.cl)}</td>
      <td class="mono">${n.yr || "—"}</td>
      <td class="mono"><span class="ev" style="color:${EV_COLOR[ev]}"><i style="background:${EV_COLOR[ev]};border-color:${EV_COLOR[ev]}"></i>${esc(ev)}</span></td>
      <td class="mono">${n.deg}</td>
      <td><button class="go" data-locate="${esc(n.id)}">locate →</button></td>
    </tr>`;
  }).join("") || `<tr><td colspan="7" class="index-empty">No node matches that filter.</td></tr>`;
  ui.indexBody.querySelectorAll("[data-index-id]").forEach((tr) => {
    const id = tr.dataset.indexId;
    const go = () => { setMode("field", false); selectNode(id, { center: true }); };
    tr.addEventListener("click", (e) => { if (e.target.closest("[data-locate]")) return; go(); });
    tr.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
  });
  ui.indexBody.querySelectorAll("[data-locate]").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    setMode("field", false);
    selectNode(b.dataset.locate, { center: true });
  }));
}

/* ── domains / timeline / matrix ────────────────────────────────────── */
function renderDomains() {
  const svg = $("#domains-svg");
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const centers = {};
  for (const cl of Object.keys(DATA.clusters)) centers[cl] = clusterCenter(cl);
  const xs = Object.values(centers).map((p) => p[0]), ys = Object.values(centers).map((p) => p[1]);
  const minX = Math.min(...xs) - 340, maxX = Math.max(...xs) + 340;
  const minY = Math.min(...ys) - 260, maxY = Math.max(...ys) + 260;
  svg.setAttribute("viewBox", `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const counts = {}, w = {};
  for (const n of DATA.nodes) counts[n.cl] = (counts[n.cl] || 0) + 1;
  for (const l of DATA.links) {
    if (l.source.cl === l.target.cl) continue;
    const a = l.source.cl, b = l.target.cl;
    const k = [a, b].sort().join("|");
    w[k] = (w[k] || 0) + 1;
  }
  const gEdges = S("g"), gNodes = S("g");
  for (const k in w) {
    const [a, b] = k.split("|");
    const A = centers[a], B = centers[b];
    if (!A || !B) continue;
    const cnt = w[k];
    gEdges.appendChild(S("line", {
      x1: A[0], y1: A[1], x2: B[0], y2: B[1],
      stroke: C.prussian, "stroke-opacity": Math.min(0.35, 0.04 + cnt * 0.012),
      "stroke-width": Math.min(5, 0.5 + cnt * 0.18),
    }));
  }
  for (const cl of Object.keys(DATA.clusters)) {
    const p = centers[cl], c = DATA.clusters[cl], n = counts[cl] || 0;
    const r = 16 + Math.sqrt(n) * 8;
    const g = S("g", { "data-domain": cl, role: "button", "aria-label": `${c.label}: ${n} nodes` });
    g.style.cursor = "pointer";
    g.appendChild(S("circle", {
      cx: p[0], cy: p[1], r,
      fill: `oklch(0.65 0.1 ${c.hue} / 0.16)`,
      stroke: `oklch(0.74 0.11 ${c.hue} / 0.8)`, "stroke-width": "1.2",
    }));
    g.appendChild(textEl(c.label, {
      x: p[0], y: p[1] - 2, "text-anchor": "middle",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": Math.max(10, r * 0.28), fill: C.paper,
    }));
    g.appendChild(textEl(String(n), {
      x: p[0], y: p[1] + Math.max(12, r * 0.42), "text-anchor": "middle",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": "9", fill: C.paper3,
    }));
    const title = S("title"); title.textContent = `${c.label} — ${n} nodes`;
    g.appendChild(title);
    g.addEventListener("click", () => focusRegion(cl));
    gNodes.appendChild(g);
  }
  svg.appendChild(gEdges); svg.appendChild(gNodes);
}

function renderTimeline() {
  const svg = $("#timeline-svg");
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const W = 1800, H = 760, L = 190, R = 40, T = 50, B = 40;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const yrs = DATA.nodes.filter((n) => n.yr).map((n) => n.yr);
  const minY = 1920, maxY = 2030;
  const xFor = (yr) => L + ((yr - minY) / (maxY - minY)) * (W - L - R);
  const laneH = (H - T - B) / ZONES.length;
  const gAxes = S("g"), gNodes = S("g");
  for (let i = 0; i < ZONES.length; i++) {
    const y = T + i * laneH;
    gAxes.appendChild(S("line", { x1: L, y1: y + laneH - 1, x2: W - R, y2: y + laneH - 1, stroke: C.rule, "stroke-width": "0.8" }));
    gAxes.appendChild(textEl(ZONES[i].label, {
      x: L - 14, y: y + laneH * 0.58, "text-anchor": "end",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": "11", fill: C.paper3,
    }));
  }
  for (let yr = 1920; yr <= 2030; yr += 10) {
    const x = xFor(yr);
    gAxes.appendChild(S("line", { x1: x, y1: T - 8, x2: x, y2: H - B + 4, stroke: C.rule, "stroke-width": "0.6", "stroke-dasharray": "2 5" }));
    gAxes.appendChild(textEl(String(yr), {
      x, y: T - 16, "text-anchor": "middle",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": "10", fill: C.paper4,
    }));
  }
  for (const n of DATA.nodes) {
    if (!n.yr) continue;
    const lane = n._zone;
    const x = xFor(n.yr);
    const y = T + lane * laneH + 18 + hash(n.id) * (laneH - 32);
    const c = DATA.clusters[n.cl] ? DATA.clusters[n.cl].hue : 250;
    const r = 2.6 + Math.min(4.2, Math.sqrt(n.deg) / 2.2);
    const dot = S("circle", { cx: x, cy: y, r, fill: `oklch(0.7 0.11 ${c})`, stroke: C.field, "stroke-width": "0.8" });
    dot.style.cursor = "pointer";
    dot.addEventListener("click", () => { setMode("field", false); selectNode(n.id, { center: true }); });
    const title = S("title"); title.textContent = `${n.label} (${n.yr}) — ${DATA.clusters[n.cl] ? DATA.clusters[n.cl].label : n.cl}`;
    dot.appendChild(title);
    gNodes.appendChild(dot);
  }
  svg.appendChild(gAxes); svg.appendChild(gNodes);
}

function renderMatrix() {
  const svg = $("#matrix-svg");
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  const W = 1280, H = 720, L = 190, R = 50, T = 60, B = 60;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const lanes = DATA.levers;
  const laneH = (H - T - B) / lanes.length;
  const gAxes = S("g"), gNodes = S("g");
  for (let i = 0; i < lanes.length; i++) {
    const y = T + i * laneH;
    gAxes.appendChild(S("line", { x1: L, y1: y + laneH - 1, x2: W - R, y2: y + laneH - 1, stroke: C.rule, "stroke-width": "0.8" }));
    gAxes.appendChild(textEl(DATA.leverLabel[lanes[i]] || lanes[i], {
      x: L - 14, y: y + laneH * 0.55, "text-anchor": "end",
      "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace",
      "font-size": "11", fill: C.paper3,
    }));
  }
  gAxes.appendChild(textEl("against the will", { x: L, y: H - 22, "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace", "font-size": "10", fill: C.paper4 }));
  gAxes.appendChild(textEl("through desire", { x: W - R, y: H - 22, "text-anchor": "end", "font-family": "IBM Plex Mono, ui-monospace, Menlo, monospace", "font-size": "10", fill: C.paper4 }));
  gAxes.appendChild(S("line", { x1: L, y1: H - 34, x2: W - R, y2: H - 34, stroke: C.rule2, "stroke-width": "0.8" }));
  const plotted = DATA.nodes.filter((n) => n.lever != null && n.co != null);
  for (const n of plotted) {
    const lane = Math.max(0, lanes.indexOf(n.lever));
    const x = L + n.co * (W - L - R);
    const y = T + lane * laneH + laneH * 0.55 + (hash(n.id) - 0.5) * laneH * 0.5;
    const c = DATA.clusters[n.cl] ? DATA.clusters[n.cl].hue : 250;
    const r = 3.2 + Math.min(5, Math.sqrt(n.deg) / 2.2);
    const dot = S("circle", { cx: x, cy: y, r, fill: `oklch(0.7 0.12 ${c})`, stroke: C.field, "stroke-width": "0.8" });
    dot.style.cursor = "pointer";
    dot.addEventListener("click", () => { setMode("field", false); selectNode(n.id, { center: true }); });
    const title = S("title"); title.textContent = `${n.label} — ${DATA.leverLabel[n.lever] || n.lever}, ${n.co}`;
    dot.appendChild(title);
    gNodes.appendChild(dot);
  }
  svg.appendChild(gAxes); svg.appendChild(gNodes);
}

/* ── minimap ────────────────────────────────────────────────────────── */
function buildMinimap() {
  const svg = ui.minimapSvg;
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  svg.setAttribute("viewBox", `${worldBounds.x} ${worldBounds.y} ${worldBounds.w} ${worldBounds.h}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const g = S("g");
  const dot = Math.max(8, Math.max(worldBounds.w, worldBounds.h) / 130);
  for (const n of DATA.nodes) {
    const c = DATA.clusters[n.cl] ? DATA.clusters[n.cl].hue : 250;
    g.appendChild(S("circle", {
      cx: n.x, cy: n.y, r: dot,
      fill: `oklch(0.7 0.1 ${c})`, "fill-opacity": "0.55",
    }));
  }
  svg.appendChild(g);
  svg.appendChild(S("rect", { class: "viewrect", x: 0, y: 0, width: 1, height: 1 }));
  updateMinimapViewport();
  let dragMini = false;
  const jump = (e) => {
    const r = svg.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * worldBounds.w + worldBounds.x;
    const py = ((e.clientY - r.top) / r.height) * worldBounds.h + worldBounds.y;
    view.x = stageW / 2 - px * view.k;
    view.y = stageH / 2 - py * view.k;
    applyTransform();
  };
  svg.addEventListener("pointerdown", (e) => { dragMini = true; svg.setPointerCapture(e.pointerId); jump(e); });
  svg.addEventListener("pointermove", (e) => { if (dragMini) jump(e); });
  svg.addEventListener("pointerup", () => { dragMini = false; });
}

/* ── palette ────────────────────────────────────────────────────────── */
function buildPaletteData() {
  const actions = [
    { kind: "action", id: "field", name: "Open the field", sub: "the relational graph" },
    { kind: "action", id: "paths", name: "Open paths", sub: "guided arguments" },
    { kind: "action", id: "index", name: "Open the index", sub: "every node in text" },
    { kind: "action", id: "domains", name: "Open domains", sub: "the macro-skeleton" },
    { kind: "action", id: "timeline", name: "Open the timeline", sub: "1926–2026" },
    { kind: "action", id: "matrix", name: "Open the matrix", sub: "coercion × lever" },
    { kind: "action", id: "intro", name: "How to read this atlas", sub: "the field guide" },
    { kind: "action", id: "reset", name: "Reset the view", sub: "clear all overlays" },
    { kind: "action", id: "share", name: "Copy a link to this view", sub: "the URL carries the state" },
    { kind: "action", id: "export", name: "Export the field as SVG", sub: "the current frame" },
  ];
  const paths = DATA.threads.map((t) => ({ kind: "path", id: t.id, name: t.title, sub: `${t.steps.length} steps · ${t.blurb}` }));
  const domains = Object.keys(DATA.clusters).map((cl) => ({ kind: "domain", id: cl, name: DATA.clusters[cl].label, sub: `${DATA.clusterMembers.get(cl)?.length || 0} nodes` }));
  const nodes = DATA.nodes.map((n) => ({
    kind: "node", id: n.id, name: n.label,
    sub: `${DATA.clusters[n.cl] ? DATA.clusters[n.cl].label : n.cl}${n.sub ? " · " + n.sub : ""}`,
    search: (n.label + " " + (n.sub || "") + " " + n.id).toLowerCase(),
  }));
  return [...actions, ...paths, ...domains, ...nodes];
}
function fuzzy(text, q) {
  const t = text.toLowerCase();
  if (t === q) return 0;
  if (t.startsWith(q)) return 1;
  const words = t.split(/[^a-z0-9]+/).filter(Boolean);
  if (words.some((w) => w.startsWith(q))) return 2;
  if (t.includes(q)) return 3;
  return 99;
}
function openPalette() {
  lastFocus = document.activeElement;
  ui.palette.dataset.open = "1";
  ui.paletteInput.value = "";
  renderPalette("");
  ui.paletteInput.focus();
}
function closePalette() {
  ui.palette.dataset.open = "0";
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function renderPalette(q) {
  const query = q.trim().toLowerCase();
  let list;
  if (!query) {
    list = palData.filter((x) => x.kind === "action" || x.kind === "path");
  } else {
    list = palData.map((x) => ({ x, s: Math.min(fuzzy(x.name, query), x.search ? fuzzy(x.search, query) + 2 : 99) }))
      .filter((v) => v.s < 99)
      .sort((a, b) => a.s - b.s || (a.x.kind === "node" ? 1 : 0) - (b.x.kind === "node" ? 1 : 0))
      .map((v) => v.x);
  }
  palItems = list.slice(0, 40);
  state.paletteSel = clamp(state.paletteSel, 0, Math.max(0, palItems.length - 1));
  const groups = { action: "Actions", path: "Paths", domain: "Domains", node: "Nodes" };
  let html = "", last = "";
  palItems.forEach((x, i) => {
    if (x.kind !== last) { html += `<div class="palette-group">${groups[x.kind]}</div>`; last = x.kind; }
    html += `<button class="palette-item" data-pal="${i}" role="option" aria-selected="${i === state.paletteSel}">
      <span class="p-name">${esc(x.name)}</span><span class="p-sub">${esc(x.sub || "")}</span><span class="p-kind">${esc(x.kind)}</span>
    </button>`;
  });
  if (!palItems.length) html = `<div class="palette-group">No match</div>`;
  ui.paletteResults.innerHTML = html;
  ui.paletteResults.querySelectorAll("[data-pal]").forEach((b) => b.addEventListener("click", () => activatePalette(+b.dataset.pal)));
  const sel = ui.paletteResults.querySelector('[aria-selected="true"]');
  if (sel) sel.scrollIntoView({ block: "nearest" });
}
function activatePalette(i) {
  const x = palItems[i];
  if (!x) return;
  closePalette();
  if (x.kind === "action") {
    if (x.id === "intro") openIntro();
    else if (x.id === "reset") resetView();
    else if (x.id === "share") copyURL();
    else if (x.id === "export") exportSVG();
    else setMode(x.id);
  } else if (x.kind === "path") enterPath(x.id);
  else if (x.kind === "domain") focusRegion(x.id);
  else if (x.kind === "node") { setMode("field", false); selectNode(x.id, { center: true }); }
}

/* ── intro ──────────────────────────────────────────────────────────── */
function buildIntro() {
  const picks = ["sham", "audience", "rockefeller", "loop"];
  ui.introPaths.innerHTML = picks.map((id) => {
    const t = DATA.threads.find((x) => x.id === id);
    if (!t) return "";
    return `<button class="intro-path" data-intro-path="${esc(t.id)}"><span class="p-dot" style="background:${t.accent}"></span><span>${esc(t.title)}</span><span class="p-count">${t.steps.length}</span></button>`;
  }).join("");
  ui.introPaths.querySelectorAll("[data-intro-path]").forEach((b) => b.addEventListener("click", () => { closeIntro(); enterPath(b.dataset.introPath); }));
  const glyph = (type) => {
    const [tag, attrs] = shapeSpec(type, 5.5);
    const el = S(tag, attrs);
    el.setAttribute("fill", type === "idea" ? "none" : TYPE_COLOR[type]);
    el.setAttribute("stroke", type === "idea" ? TYPE_COLOR[type] : C.field);
    el.setAttribute("stroke-width", type === "idea" ? "1.4" : "1");
    const svg = S("svg", { viewBox: "-8 -8 16 16", width: "13", height: "13" });
    svg.appendChild(el);
    return svg.outerHTML;
  };
  const items = [
    [glyph("person"), "person"],
    [glyph("institution"), "institution"],
    [glyph("funder"), "funder"],
    [glyph("program"), "program"],
    [glyph("idea"), "idea"],
    [glyph("theory"), "theory"],
    [glyph("case"), "case"],
  ];
  ui.introLegend.innerHTML = items.map(([g, label]) => `<li><span class="glyph">${g}</span><span>${label}</span></li>`).join("") +
    `<li><span class="glyph"><svg viewBox="0 0 13 13" width="13" height="13"><circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="${C.moss}" stroke-width="1.4"/></svg></span><span>solid ring — documented</span></li>` +
    `<li><span class="glyph"><svg viewBox="0 0 13 13" width="13" height="13"><circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="${C.ochre}" stroke-width="1.4" stroke-dasharray="2 2"/></svg></span><span>dashed — contested</span></li>` +
    `<li><span class="glyph"><svg viewBox="0 0 13 13" width="13" height="13"><circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="${C.rust}" stroke-width="1.4" stroke-dasharray="0.7 3"/></svg></span><span>dotted — speculative</span></li>`;
}
function openIntro() {
  lastFocus = document.activeElement;
  ui.intro.dataset.open = "1";
  $("#intro-close").focus();
}
function closeIntro() {
  ui.intro.dataset.open = "0";
  try { localStorage.setItem("atlas_intro_seen_v3", "1"); } catch (e) {}
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function maybeIntro() {
  if ((location.hash || "").includes("nointro")) { ui.intro.dataset.open = "0"; return; }
  let seen = false;
  try { seen = localStorage.getItem("atlas_intro_seen_v3") === "1"; } catch (e) {}
  if (!seen) openIntro();
}

/* ── zoom / pan / drag ──────────────────────────────────────────────── */
function wireStage() {
  ui.stage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const p = stagePoint(e);
    zoomAt(Math.exp(-e.deltaY * 0.0014), p.x, p.y);
  }, { passive: false });

  ui.stage.addEventListener("pointerdown", (e) => {
    if (e.target.closest("[data-node]")) return;
    if (e.target.closest(".dossier, .path-reader, .minimap, .zoom-controls, .index-view, .alt-view")) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.size === 1) {
      pointer = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y, pan: true };
      ui.stage.setPointerCapture(e.pointerId);
    } else if (activePointers.size === 2) {
      pointer = null;
      const [a, b] = [...activePointers.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, k: view.k, x: view.x, y: view.y, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
    }
  });
  ui.stage.addEventListener("pointermove", (e) => {
    const p = stagePoint(e);
    if (pointer) { pointer.x = e.clientX; pointer.y = e.clientY; }
    const r = ui.stage.getBoundingClientRect();
    if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && activePointers.size === 2) {
      const [a, b] = [...activePointers.values()];
      const nd = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const nk = clamp(pinch.k * (nd / pinch.d), 0.028, 3.6);
      const s = nk / pinch.k;
      const cx = pinch.cx - r.left, cy = pinch.cy - r.top;
      view.x = cx - (cx - pinch.x) * s;
      view.y = cy - (cy - pinch.y) * s;
      view.k = nk;
      applyTransform();
      return;
    }
    if (pointer && pointer.pan) {
      view.x = pointer.vx + (e.clientX - pointer.x);
      view.y = pointer.vy + (e.clientY - pointer.y);
      applyTransform();
      return;
    }
    if (dragNode) {
      const dx = (e.clientX - dragNode.sx) / view.k, dy = (e.clientY - dragNode.sy) / view.k;
      if (Math.abs(e.clientX - dragNode.sx) + Math.abs(e.clientY - dragNode.sy) > 3) moved = true;
      dragNode.n.x = dragNode.x + dx; dragNode.n.y = dragNode.y + dy;
      renderPositions();
    }
    // hover proximity for labels; updateLabels owns collision, so always go through it
    pointer = pointer || { x: e.clientX, y: e.clientY, pan: false };
    pointer.x = e.clientX; pointer.y = e.clientY;
    scheduleLabels();
  });
  const end = (e) => {
    if (activePointers.has(e.pointerId)) activePointers.delete(e.pointerId);
    if (activePointers.size === 0) { pointer = null; pinch = null; }
    if (activePointers.size === 1) {
      const [a] = [...activePointers.values()];
      pointer = { x: a.x, y: a.y, vx: view.x, vy: view.y, pan: true };
      pinch = null;
    }
    if (dragNode) {
      const n = dragNode.n;
      dragNode = null;
      if (!moved) selectNode(n.id, { center: false });
      else refresh();
      moved = false;
    }
  };
  ui.stage.addEventListener("pointerup", end);
  ui.stage.addEventListener("pointercancel", end);
  ui.stage.addEventListener("pointerleave", () => { pointer = null; onHover(null); });

  ui.stage.addEventListener("click", (e) => {
    if (!e.target.isConnected) return;
    if (e.target.closest(".dossier, .path-reader, .minimap, .zoom-controls, .index-view, .alt-view")) return;
    if (e.target.closest("[data-node]")) return;
    if (state.thread || state.path || state.focusSet || state.region || state.relFocus || state.bridges || state.connectors) {
      clearOverlays([]);
      refresh();
    }
  });
}
function onNodeDown(e, n) {
  if (e.button != null && e.button !== 0) return;
  e.stopPropagation();
  const r = ui.stage.getBoundingClientRect();
  dragNode = { n, sx: e.clientX, sy: e.clientY, x: n.x, y: n.y };
  moved = false;
  if (e.target.setPointerCapture) e.target.setPointerCapture(e.pointerId);
}

/* ── URL state / share / export ─────────────────────────────────────── */
function encodeState() {
  const p = [];
  if (state.mode && state.mode !== "field") p.push("v=" + state.mode);
  if (state.lens && state.lens !== "structure") p.push("l=" + state.lens);
  if (state.thread) p.push("path=" + state.thread.id + "." + state.thread.step);
  else if (state.path) p.push("trace=" + state.path.a + "." + state.path.b);
  else if (state.bridges) p.push("bridges=1");
  else if (state.connectors) p.push("loadbearing=1");
  else if (state.relFocus) p.push("rel=" + state.relFocus);
  else if (state.region) p.push("region=" + state.region);
  else if (state.selected) p.push("sel=" + state.selected);
  if (state.focusDepth > 1) p.push("depth=" + state.focusDepth);
  return p.join("&");
}
function syncHash() {
  if (syncHashTimer) return;
  syncHashTimer = setTimeout(() => {
    syncHashTimer = null;
    const h = encodeState();
    try { history.replaceState(null, "", location.pathname + location.search + (h ? "#" + h : "")); } catch (e) {}
  }, 120);
}
function applyHash() {
  let h = "";
  try { h = (location.hash || "").replace(/^#/, ""); } catch (e) {}
  if (!h) return;
  const m = {};
  h.split("&").forEach((kv) => { const i = kv.indexOf("="); if (i > 0) m[kv.slice(0, i)] = kv.slice(i + 1); });
  try {
    if (m.v && ["field", "paths", "index", "domains", "timeline", "matrix"].includes(m.v)) setMode(m.v, false);
    if (m.l && (m.l === "structure" || DATA.lenses[m.l])) state.lens = m.l;
    if (m.depth) state.focusDepth = +m.depth || 1;
    if (m.path) {
      const [id, st] = m.path.split(".");
      if (DATA.threads.some((t) => t.id === id)) { enterPath(id); if (+st) gotoStep(+st); }
    } else if (m.trace) {
      const [a, b] = m.trace.split(".");
      if (DATA.byId[a] && DATA.byId[b]) setPath(a, b);
    } else if (m.bridges) toggleBridges();
    else if (m.loadbearing) toggleConnectors();
    else if (m.rel) toggleRel(m.rel);
    else if (m.region && DATA.clusters[m.region]) focusRegion(m.region);
    else if (m.sel && DATA.byId[m.sel]) selectNode(m.sel, { center: true });
    refresh();
  } catch (e) { console.warn("applyHash", e); }
}
function copyURL() {
  const url = location.href;
  const done = (ok) => {
    const b = document.querySelector("[data-share]");
    if (!b) return;
    const old = b.innerHTML;
    b.innerHTML = ok ? "✓ copied" : "copy failed";
    setTimeout(() => { b.innerHTML = old; }, 1400);
  };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(() => done(true), () => done(false));
    else done(false);
  } catch (e) { done(false); }
}
function exportSVG() {
  try {
    const clone = ui.svg.cloneNode(true);
    clone.setAttribute("xmlns", NS);
    clone.setAttribute("width", stageW);
    clone.setAttribute("height", stageH);
    clone.setAttribute("viewBox", `0 0 ${stageW} ${stageH}`);
    const bg = S("rect", { x: 0, y: 0, width: stageW, height: stageH, fill: C.field });
    clone.insertBefore(bg, clone.firstChild);
    const s = new XMLSerializer().serializeToString(clone);
    const blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + s], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "psychopolitics-atlas.svg";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
  } catch (e) { console.error("SVG export failed", e); }
}

/* ── global wiring ──────────────────────────────────────────────────── */
function wireChrome() {
  document.querySelectorAll("[data-mode]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
  document.querySelector("[data-palette]").addEventListener("click", openPalette);
  document.querySelector("[data-share]").addEventListener("click", copyURL);
  document.querySelector("[data-export]").addEventListener("click", exportSVG);
  document.querySelector("[data-rail-toggle]").addEventListener("click", () => {
    ui.app.dataset.rail = ui.app.dataset.rail === "1" ? "0" : "1";
  });
  document.querySelectorAll("[data-zoom]").forEach((b) => b.addEventListener("click", () => {
    const z = b.dataset.zoom;
    if (z === "fit") fitBounds(worldBounds, true);
    else zoomAt(z === "in" ? 1.25 : 0.8, stageW / 2, stageH / 2);
  }));

  // palette
  ui.palette.addEventListener("click", (e) => { if (e.target === ui.palette) closePalette(); });
  ui.paletteInput.addEventListener("input", () => { state.paletteSel = 0; renderPalette(ui.paletteInput.value); });
  ui.paletteInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); state.paletteSel = clamp(state.paletteSel + 1, 0, palItems.length - 1); renderPalette(ui.paletteInput.value); }
    else if (e.key === "ArrowUp") { e.preventDefault(); state.paletteSel = clamp(state.paletteSel - 1, 0, palItems.length - 1); renderPalette(ui.paletteInput.value); }
    else if (e.key === "Enter") { e.preventDefault(); activatePalette(state.paletteSel); }
    else if (e.key === "Escape") { e.preventDefault(); closePalette(); }
  });

  // index
  ui.indexSearch.addEventListener("input", () => { state.indexQ = ui.indexSearch.value; renderIndex(); });
  ui.indexKind.addEventListener("change", () => { state.indexKind = ui.indexKind.value; renderIndex(); });
  ui.indexDomain.addEventListener("change", () => { state.indexDomain = ui.indexDomain.value; renderIndex(); });
  ui.indexEv.addEventListener("change", () => { state.indexEv = ui.indexEv.value; renderIndex(); });
  ui.indexSort.addEventListener("change", () => { state.indexSort = ui.indexSort.value; renderIndex(); });

  // intro
  $("#intro-close").addEventListener("click", closeIntro);
  $("#intro-enter").addEventListener("click", closeIntro);

  // dossier close on escape handled globally
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    if (e.key === "Escape") {
      if (ui.palette.dataset.open === "1") { closePalette(); return; }
      if (ui.intro.dataset.open === "1") { closeIntro(); return; }
      if (ui.dossier.dataset.open === "1") { dismissDossier(); return; }
      if (state.thread) { exitPath(); return; }
      if (state.path) { clearPath(); return; }
      if (state.focusSet || state.region || state.relFocus || state.bridges || state.connectors) { clearOverlays([]); refresh(); }
    }
    if (typing) return;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette(); }
    else if (e.key === "/") { e.preventDefault(); openPalette(); }
    else if (e.key === "?") { e.preventDefault(); openIntro(); }
    else if (state.thread) {
      if (e.key === "ArrowRight") { e.preventDefault(); gotoStep(state.thread.step + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); gotoStep(state.thread.step - 1); }
    } else if (state.focusSet && state.selected) {
      // cycle neighbors with arrows
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const ids = [...DATA.adj.get(state.selected) || []];
        if (ids.length) {
          const i = ids.indexOf(state.selected);
          const nx = ids[(ids.indexOf(state.selected) + (e.key === "ArrowRight" ? 1 : -1) + ids.length) % ids.length];
          if (nx) selectNode(nx, { center: true });
        }
      }
    }
  });

  window.addEventListener("resize", () => {
    const r = ui.stage.getBoundingClientRect();
    stageW = r.width; stageH = r.height;
    applyTransform();
  });
  window.addEventListener("hashchange", applyHash);

  // intro focus trap
  ui.intro.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusables = $$("button, [href], input, select, textarea", ui.intro).filter((el) => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* ── init ───────────────────────────────────────────────────────────── */
function init() {
  stageW = ui.stage.getBoundingClientRect().width || 1000;
  stageH = ui.stage.getBoundingClientRect().height || 700;
  ui.statusLegend.innerHTML = ["documented", "contested", "speculative"].map((e) => `<span style="color:${EV_COLOR[e]}"><i style="background:${EV_COLOR[e]};border-color:${EV_COLOR[e]}"></i>${e}</span>`).join("");
  buildField();
  buildRail();
  buildIndexFilters();
  palData = buildPaletteData();
  buildIntro();
  wireChrome();
  wireStage();
  renderPositions();
  refresh();
  setMode("field", false);
  maybeIntro();
  applyHash();
}

// `palData` is built before `palette` is opened; `buildPaletteData` is called
// once in init.
init();
