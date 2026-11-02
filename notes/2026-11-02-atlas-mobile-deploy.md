# 2026-11-02 — atlas mobile QA deployed

Status: live. This supersedes the status line in
`notes/2026-11-02-atlas-mobile-qa.md` and the atlas line in
`notes/2026-11-02-deploy.md`; production no longer serves `9b91d5d` as the
latest atlas commit.

## Commit

`466391f` — Finish the atlas mobile QA pass.
The status-bar evidence legend is hidden below 560px; the QA note is recorded.

## Gate

- `npm run build` — 282 static pages, TypeScript clean.
- `npm run verify` — font-preload invariant holds; walkthrough clean; internal
  link crawl clean across 249 same-origin URLs.
- GitHub Actions `41487877145` — success.

## Production

`https://www.autostimulus.org/psychopolitics-atlas` returns `200`; its
`atlas.css` carries `.statusbar .legend { display: none; }`.

Checked in Chromium at 390×844:

- 654 nodes, `654 nodes · 1139 relations · 654 in view`;
- legend `display: none`;
- no horizontal overflow (`390 / 390`);
- Source Serif 4 loaded;
- no console errors, page errors, or failed requests.

The atlas is live at `466391f`. Nothing else remains open on this pass.
