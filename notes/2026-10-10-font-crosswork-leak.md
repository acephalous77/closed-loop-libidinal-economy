# 2026-10-10 — the cross-work font preload leak (found, root-caused, fixed)

## The finding

Every /chair/* route and the /manufacture-of-the-subject page preloaded each
other's font files: a shared 17-file set (Spectral ×10 + Newsreader ×2 +
Space Grotesk ×1 + Space Mono ×4 ≈ 330 KB) fired on **both** trees — 11 chair
routes paying ~185 KB for faces they never paint, the manufacture page paying
~145 KB for Spectral. Re-measured from the built server (`curl` + the
`next-font-manifest`): chair pages 17 files, manufacture 17, overlap 17.

## How it was found

Chasing the audit-v2 open item ("chair's Spectral + Manrope preload on every
chair route"). The manifest showed chair pages attributed manufacture's files
and vice versa; css chunk `0-z51v7f` contained the **full union** of both
works' @font-face rules, loaded by both trees; no JS module imported across
the two works (checked: no chunk in chair's bundle contains manufacture's
font configs).

## Root cause (confirmed by experiment)

**Turbopack dedupes next/font instances with byte-identical configs across
different layouts into one shared module.** When two works declare the same
font with the same options, the merged font css chunk over-attributes every
file in it to every route loading the chunk. Chair's and manufacture's Anton
instances were identical (`--font-anton`, weight 400, `preload:false`) —
the connector. Proof: setting manufacture's Anton `preload:true` dropped the
essay 17 → **10** but moved the leak to patriotic 3 → **10** (manufacture's
Anton now matched patriotic's identical config). The leak follows config
identity, not imports.

## The fix

Every work's next/font config is now unique:

- Manufacture's Anton variable renamed `--font-anton-mos` (both refs in
  `manufacture.css` updated; visual unchanged) and preload restored to
  default (true — its poster display, painted immediately).
- Chair's Manrope moved out of the layout into
  `app/chair/_components/fonts.ts`, applied on the brochure route only
  (`app/chair/page.tsx`) — its faces preload where they paint, nowhere else.

## Verified result

| route | before | after | bytes now |
|---|---|---|---|
| /chair/essay (+10 chair routes) | 17 files | **10** | 330 → 149 KB (−180 KB) |
| /chair (brochure) | 18 files | **11** | ~355 → 173 KB (−180 KB) |
| /manufacture-of-the-subject | 17 files | **8** | 330 → 192 KB (−138 KB) |
| /patriotic-times | 3 | 3 (unchanged) | — |
| /ouroboric-condition | 2 | 2 (unchanged) | — |
| /closed-loop, /ohcose … | 0 | 0 | — |

Pairwise preload overlaps across all works: **0**. Manifest histogram:
`{0:124, 2:1, 3:4, 8:1, 10:14, 11:1}`. Build 276/276; the one source-visible
change beyond fonts is `--font-anton-mos` in manufacture.css.

**Invariant for the future:** a new next/font instance must not be
byte-identical (font + options, including `variable`) to another work's —
otherwise the sets merge. Check:

    for r in /chair/essay /manufacture-of-the-subject; do
      curl -s "http://localhost:3000$r" | grep -o 'media/[^"]*\.woff2' | sort -u | wc -l
    done

The corrections to the audit note are appended in that file's own Corrections section (2026-10-10, evening).
