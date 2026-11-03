# 2026-11-02 — atlas efficacy field A7

**Status:** deployed. Applied on the instruction “proceed commit approve all.” Adds a
new **Efficacy** view; no node/link counts, edges, dates, routes, or evidence
tiers changed. The view plots only records whose claim carries an efficacy
verdict; it does not turn absence of a verdict into a finding of no effect.
The verdict describes the claim in the record, not the record's actor. Nothing
sends; no training, no publication.

## The field

- **Horizontal axis:** year, 1900–2030.
- **Vertical lanes:** partial / at-scale (top), contested / not established
  (middle), no demonstrated effect / refuted (bottom).
- Node fill remains the macro-zone hue; the verdict is carried by the lane, not
  by a new colour channel.
- Clicking a node opens its record in the field; the mobile alternative is a
  four-column table (node, verdict, year, recorded claim).
- The view note says: “Only records whose claims carry a verdict; the verdict
  describes the recorded claim, not the actor. Absence is not a verdict of no
  effect.”

## Records

18 records carry an explicit `eff` verdict drawn from their existing record:

- **Failed / refuted (8):** `freedman`, `replication_failure`, `ssci`,
  `cambridge_analytica`, `erickson_nlp`, `estabrooks`, `social_credit`, `orne`.
- **Contested / not established (7):** `herasight`,
  `comprehensive_soldier_fitness`, `twenge`, `lencz_carmi`,
  `simplemente_maria`, `ven_conmigo`, `acompaname`.
- **Partial / at-scale (3):** `dellavigna_linos`, `oes_sbst`, `fb_contagion`.

The taxonomy is `EFFICACY` in `atlas-data.js`; the field is `renderEfficacy()`
in `atlas.js`; the view is `#efficacy-view` in `index.html`. The page meta
and `public/llms.txt` name the efficacy view.

## Verify

- `npm run build` — 282 static pages.
- `npm run verify` — atlas consistency expects 18 efficacy records; links,
  contrast, walkthrough pass.
- `npm run verify:atlas-mobile` — PASS; the 390px efficacy table has 18 rows,
  the SVG is hidden, and the page has no overflow.
- Desktop browser check: mode `efficacy`, 18 circles, 32 SVG text nodes, no
  overflow.

## Deploy

- Field commit `792969b`; scope-clarification commit `723c36a`.
- CI `41561191162` and `41561775377` — success.
- `npm run verify:atlas-prod` — PASS. The production browser check now opens
  the efficacy view at 390px, counts 18 table rows, and confirms the SVG is
  hidden; no Cloudflare beacon, CSP present, counts 654/1,138.
- Production HTML serves `data-mode="efficacy"`; `atlas-data.js` serves 15
  `eff` records and `atlas-additions.js` serves 3 — 18 in all.
