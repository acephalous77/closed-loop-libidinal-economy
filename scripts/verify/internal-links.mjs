/**
 * Internal-link crawl — the standing replacement for the manual 2026-11-01
 * crawl that found the dead RSS and chair-archive links.
 *
 * It starts the built site, reads sitemap.xml, then follows every same-origin
 * anchor it finds. Redirects are followed; a final non-2xx fails. External
 * origins, mailto:, tel:, hash-only links and Next's asset paths are skipped.
 *
 *   node scripts/verify/internal-links.mjs
 *
 * Requires a prior `npm run build`.
 */

import { startNextServer, stopNextServer } from "./_server.mjs";

const PORT = process.env.LINK_CHECK_PORT || "3776";
const MAX_PAGES = Number(process.env.LINK_CHECK_MAX_PAGES || "500");

const started = await startNextServer(PORT);
const server = started.server;
const base = started.base;
const origin = new URL(base).origin;

const seen = new Set();
const queued = new Set();
const failures = [];
const redirects = [];
const queue = [];

function enqueue(raw, from, baseUrl = base) {
  if (!raw) return;
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith("#")) return;
  if (/^(mailto:|tel:|javascript:|data:)/i.test(trimmed)) return;

  let url;
  try {
    url = new URL(trimmed, baseUrl);
  } catch {
    return;
  }
  if (url.origin !== origin) return;
  if (url.pathname.startsWith("/_next/")) return;
  if (url.pathname.startsWith("/__next")) return;

  url.hash = "";
  const key = url.pathname + url.search;
  if (queued.has(key) || seen.has(key)) return;
  queued.add(key);
  queue.push({ key, url: url.toString(), from });
}

function extractHrefs(html) {
  return [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((m) => m[1]);
}

try {
  enqueue("/", "seed");
  enqueue("/sitemap.xml", "seed");

  // Seed from the sitemap before crawling anchors, so a page with no inbound
  // link still has to answer for itself.
  const sitemapRes = await fetch(`${base}/sitemap.xml`);
  if (!sitemapRes.ok) {
    failures.push(`/sitemap.xml — HTTP ${sitemapRes.status}`);
  } else {
    const xml = await sitemapRes.text();
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const loc = new URL(match[1]);
      enqueue(loc.pathname + loc.search, "/sitemap.xml");
    }
  }

  while (queue.length > 0) {
    if (seen.size >= MAX_PAGES) {
      failures.push(`crawl stopped at ${MAX_PAGES} pages`);
      break;
    }

    const item = queue.shift();
    if (!item || seen.has(item.key)) continue;
    seen.add(item.key);

    let res;
    try {
      res = await fetch(item.url, { redirect: "follow" });
    } catch (err) {
      failures.push(`${item.key} — fetch failed (${err.message})`);
      continue;
    }

    const final = new URL(res.url);
    if (final.origin !== origin) {
      failures.push(`${item.key} — redirected off-origin to ${res.url}`);
      continue;
    }
    if (final.pathname !== new URL(item.url).pathname) {
      redirects.push(`${item.key} → ${final.pathname}`);
    }
    if (!res.ok) {
      failures.push(`${item.key} — HTTP ${res.status} (from ${item.from})`);
      continue;
    }

    const type = res.headers.get("content-type") || "";
    if (!type.includes("text/html")) continue;

    const html = await res.text();
    for (const href of extractHrefs(html)) {
      enqueue(href, item.key, item.url);
    }
  }
} finally {
  await stopNextServer(server);
}

if (redirects.length > 0) {
  console.log(`redirects followed (${redirects.length}):\n  ${redirects.join("\n  ")}`);
}
if (failures.length > 0) {
  console.log(`\nFAILURES (${failures.length}):\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log(`internal-link crawl clean — ${seen.size} same-origin URLs.`);
process.exit(0);
