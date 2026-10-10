# autostimulus

The atelier of A. Selimović — critical theory, media psychology, political
economy. Multiple works under one roof. Live at
[https://www.autostimulus.org](https://www.autostimulus.org).

## Works

| Route                     | Title                                     | Year      | Status |
| ------------------------- | ----------------------------------------- | --------- | ------ |
| `/psychopolitics-atlas`   | The Psychopolitics of Socialization       | 2026      | live   |
| `/closed-loop`            | The Closed-Loop Libidinal Economy         | 2026      | live   |
| `/patriotic-times`        | Patriotic Times — A Coloring Book         | 2025—2026 | live   |
| `/ohcose`                 | OHCOSE Manual                             | 2025      | live   |
| `/chair`                  | The Ouroboros Life System                 | 2021      | live   |
| `/ouroboric-condition`    | The Ouroboric Condition — An Atlas        | 2018      | live   |
| `/manufacture-of-the-subject` | The Manufacture of the Subject        | 2015      | live   |

`/thinkroom` is a gated, unlisted classroom tool on its own subdomain
(`thinkroom.autostimulus.org`, linked from the atelier index by passphrase
only); it is not one of the works.

`/closed-loop` carries two layers by design (ruling 2026-10-10): the v2
rebuild (`v2-argument`, `the-apparatus`, `v2-dynamics`, `the-architecture`,
`the-instruments`, `glossary`, `the-colophon`) is the presented surface; the
five first-version essays and the note stay first-class; the first-version
`the-mathematics` and `the-dynamics` remain reachable as the archived build
(noindexed, linked from the cover and the v2 footers).

## What the site is

The framework at `/closed-loop` critiques attention-economy design
conventions; the atelier is built to refuse them: no analytics, no tracking,
no engagement loops, no SaaS-aesthetic chrome. Aesthetic register is
Semiotext(e) / *October* / Zone Books — gravity and strangeness applied to
the web. Each work may override the register inside its own subroute.

For what the site logs and does not log, see
`/closed-loop/instrumentation` — the disclosure covers the whole site precisely,
including the thinkroom cookie and the four storage keys.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind v4 (constrained to spec-defined design tokens only)
- MDX content with `remark-math` + `remark-gfm` + `rehype-katex` + `rehype-slug`
- Self-hosted EB Garamond, JetBrains Mono, Garamond Math (SIL OFL); the
  chair, ouroboric-condition, and manufacture registers add their own faces
  via `next/font/google` (self-hosted at build; no runtime font CDN request)
- Deployed on Vercel; prose surfaces build fully static

## Development

```sh
npm install
npm run dev
```

Dev server defaults to port 3000.

```sh
npm run build
npm run lint
npm start
```

## Project structure

```
app/
├── page.tsx                   Atelier index (xerox-zine flyer)
├── layout.tsx                 Root shell, fonts, atelier metadata
├── closed-loop/               The Closed-Loop Libidinal Economy (2026)
│   ├── (v2) v2-argument · the-apparatus · v2-dynamics · the-architecture ·
│   │        the-instruments · glossary · the-colophon
│   └── (v1 archive) the-argument · the-mathematics · the-dynamics ·
│            reading-list · open-questions · colophon · instrumentation
├── ohcose/                    8 phases, 46 sub-protocols + colophon
├── chair/                     brochure · essay · zine · subsystems · lineage ·
│                              precedents · archive (noindex) · concepts · refusal
├── patriotic-times/           hub · 63 plates · colophon
├── ouroboric-condition/       the atlas (single surface)
├── manufacture-of-the-subject/ the descent (single surface)
└── thinkroom/                 gated portal (unlisted)

content/                       MDX prose for the v1 closed-loop surface
components/                    typography · navigation · layout · visualizations
lib/                           jsonld · og-card · motion · simulation engines
public/
├── fonts/
├── psychopolitics-atlas/      standalone atlas page (data + runtime)
├── simulator/                 preserved v1 simulator (vendored React; linked from v1 dynamics)
└── chair/ · ohcose/ · patriotic-times/   per-work assets
_attic/                        parked assets from audits (gitignored; see _attic/README.md)
```

## License

Textual content: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0),
except *Patriotic Times*, which is
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Code
under MIT. See [LICENSE](./LICENSE). Fonts under SIL Open Font License 1.1
(Garamond Math, EB Garamond, JetBrains Mono).

## Citation (closed-loop framework)

Selimović, A. *The Closed-Loop Libidinal Economy*. 2026.
https://www.autostimulus.org/closed-loop
