# 2026-11-22 — the readout added to the atlas

**NEEDS YOU**

- **Deploy or hold.** The build and every suite are green; nothing is pushed. Say deploy and production moves from 654/1,097 to 777/1,311. Until then `verify:atlas-prod` fails by design.
- **Ruling on the three new territory names** — *Consumer research & the readout*, *The arbitrage of the subject*, *The remedy apparatus* — and on the two new analysis lenses, *The readout* and *The arbitrage*. They can be renamed before the deploy without touching the records.
- **A primary-source pass on the 123 new records.** Each carries the dossier's own short citations; some are vendor claims or secondary relays and are marked *contested*. The dossier's text was the source of record for this build, not a fresh archive check.

## What changed

The Consumer Research room (the eleven-pass dossier in `~/Downloads/consumer research for autostimulus netwrok/`) is now a branch of the atlas. It mounts as a third data module, `public/psychopolitics-atlas/atlas-consumer.js`, merged over `atlas-data.js` and `atlas-additions.js` at load time. The two older files are untouched.

- **Three territories.** T29 *Consumer research & the readout* (1911–), T30 *The arbitrage of the subject* (1916–), T31 *The remedy apparatus* (1970–). The negative-file and export branches extend the existing carceral, statecap and surveil territories back to 1858.
- **Three lenses.** *The readout*, *The arbitrage*, *Remedy & legitimation*. The lens row now runs twelve analytic filters plus Structure.
- **Twelve relation types.** `reads`, `prices`, `sells`, `buys`, `audits`, `exempts`, `justifies`, `establishes`, `bans`, `conditions`, `enforces`, `supplies` — with forward and inverse labels and a family colour each.
- **Five paths.** *The comparator* (11 steps), *The spread* (9), *The remedy that isn't* (9), *The negative file* (7), *The route out and back* (9). They join the rail under *The readout*.
- **New analysis rows.** Nineteen new mechanism rows in the Matrix view; twenty new efficacy verdicts.

## Totals

| | before | now |
|---|---|---|
| nodes | 654 | **777** |
| relations | 1,097 | **1,311** |
| date range | 1903–2026 | **1858–2026** |
| documented / contested / speculative / untriaged | 610 / 37 / 6 / 1 | **721 / 49 / 6 / 1** |
| assessed edges | 12 | **52** |
| matrix rows | 62 | **81** |
| efficacy records | 18 | **38** |
| domains | 28 | **31** |
| lenses | 9 | **12** |
| guided paths | 20 | **25** |

The new module carries 123 nodes and 214 curated edges.

## Method and corrections

The dossier was read in three parallel passes (notes 01–08, 09–18, 19–27) plus a targeted pass for the named missing entities, then reconciled here. Candidate duplicates were merged before writing: the two FCRA entries into `fcra`; the two medical-debt entries into `medical_debt_removal`; the two OECD disclosure entries; the marketing-column restatement into the exemption and the credit/marketing columns; the radio-index duplicate into the existing `nielsen`; the Princeton radio duplicate into the existing `princeton_radio`; Claritas's 1966 and 1971 entries into one `claritas`. `atlas-data.js` and `atlas-additions.js` were not edited.

The prose passed the canonical scan on the new record text and the new intro copy: 7,047 words, **0 high or medium reliable tells**, verdict *clean*. The 120 remaining low flags are the atlas's record register — the compact semicolon `did` line — and were kept deliberately.

## Verification (this Mac, 2026-11-22)

- `node scripts/build-atlas-index.mjs` — `777 records, 1311 relations, 463,848 bytes`.
- `npm run build` — `✓ Compiled successfully`; `282/282` static pages.
- `npm run verify` — font preloads, walkthrough, internal links, atlas consistency, contrast, interactions and dynamics all PASS. `atlas-consistency: PASS — 777 nodes, 1311 links, 1858-2026, 52 flagged edges`.
- `npm run verify:atlas-mobile` — `PASS — 390px alternatives, rail inert, no overflow/external requests`.
- `npm run atlas:og` — `777 nodes, 1311 relations, 1858-2026`; `og.png` regenerated.
- Browser check: 31 territory plates, 13 lens buttons, 25 paths; the *readout* lens puts 65 nodes in view; the new dossier records render with their sources.

## What this does not claim

The new records are as good as the dossier's citations, not better. The build does not fact-check the dossier, does not send anything, and does not deploy. Production remains the 2026-11-02 atlas until a push is ruled.
