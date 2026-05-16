# The Closed-Loop Libidinal Economy

The formal home of a framework on attention capture under platform capitalism.

A long-form prose argument, a mathematical exposition, and (in progress) five
interactive visualizations of the closed-loop dynamics. By Adnan Selimović.

Live at [https://autostimulus.org].

## What the site is

The framework critiques attention-economy design conventions, and the site is
built to refuse them: no analytics, no tracking, no engagement loops, no
SaaS-aesthetic chrome. The aesthetic register is Semiotext(e) / *October* /
Zone Books — gravity and strangeness applied to the web.

See `/instrumentation` on the live site for the full disclosure of what this
site does and does not log (nothing, beyond the seven-day HTTP server logs
that the web requires to function).

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
app/                  Next.js routes (one directory per page)
content/              MDX source for prose and math pages
components/           Typography, navigation, and layout primitives
public/fonts/         Self-hosted typefaces
```

## License

Dual-licensed: textual content under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/),
code under MIT. See [LICENSE](./LICENSE). Fonts under SIL Open Font License 1.1.

## Citation

S.,A. *The Closed-Loop Libidinal Economy*. 2026.
https://autostimulus.org
