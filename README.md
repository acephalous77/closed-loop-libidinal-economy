# autostimulus

The atelier of A. Selimović — critical theory, media psychology, political
economy. Multiple projects under one roof. Live at
[https://www.autostimulus.org].

## Works

| Slug                    | Title                                           | Status         |
| ----------------------- | ----------------------------------------------- | -------------- |
| `/closed-loop`          | The Closed-Loop Libidinal Economy               | live (2026)    |
| `/ohcose`               | OHCOSE Manual                                   | in production  |
| `/chair`                | The Ouroboros Chair                             | in production  |
| `/patriotic-times`      | Patriotic Times — A Coloring Book               | in production  |

## What the site is

The framework at `/closed-loop` critiques attention-economy design
conventions; the atelier is built to refuse them: no analytics, no tracking,
no engagement loops, no SaaS-aesthetic chrome. Aesthetic register is
Semiotext(e) / *October* / Zone Books — gravity and strangeness applied to
the web. Each project may override the register inside its own subroute.

See `/closed-loop/instrumentation` on the live site for the full disclosure
of what this site does and does not log (nothing, beyond the seven-day HTTP
server logs that the web requires to function).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind v4 (constrained to spec-defined design tokens only)
- MDX content with `remark-math` + `remark-gfm` + `rehype-katex` + `rehype-slug`
- Self-hosted EB Garamond, JetBrains Mono, Garamond Math (SIL OFL)
- Deployed on Vercel

## Development

```sh
npm install
npm run dev
```

Dev server defaults to port 3000.

```sh
npm run build
npm start
```

Production build is fully static — no runtime server is required for the
prose surfaces.

## Project structure

```
app/
├── page.tsx              Atelier index
├── layout.tsx            Root HTML shell, fonts, atelier metadata
└── closed-loop/          Project: closed-loop libidinal economy (live)
    ├── layout.tsx        Project chrome (footer, math tooltips)
    ├── page.tsx          Project cover
    ├── the-argument/     Four prose pieces and a coda
    ├── the-mathematics/  Formal exposition
    ├── the-dynamics/     Fourteen interactive plates
    ├── reading-list/
    ├── open-questions/
    ├── colophon/
    └── instrumentation/

content/                  MDX prose for closed-loop pages
components/               Typography, navigation, layout primitives
public/fonts/             Self-hosted typefaces
```

Future projects (`/ohcose`, `/chair`, `/patriotic-times`) will add their
own subdirectories under `app/`, each with its own `layout.tsx` defining
that project's register.

## License

Dual-licensed: textual content under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/),
code under MIT. See [LICENSE](./LICENSE). Fonts under SIL Open Font License 1.1.

## Citation (closed-loop framework)

Selimović, A. *The Closed-Loop Libidinal Economy*. 2026.
https://www.autostimulus.org/closed-loop
