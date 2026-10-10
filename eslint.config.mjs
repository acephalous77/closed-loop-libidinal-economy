import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The simulator under public/ is a preserved prior artifact served
    // as-is: standalone .jsx compiled in-browser by Babel, with React
    // and the panel components loaded via <script> tags. It is not part
    // of the Next build, so linting it produces spurious no-undef noise.
    "public/**",
  ]),
  {
    rules: {
      // The prose carries intentional typographic apostrophes and quotes
      // (' ' " "). They render correctly; escaping every occurrence to
      // entities would be churn and risks literal entities leaking into
      // copy. Off site-wide rather than disabled per-line in 400+ places.
      "react/no-unescaped-entities": "off",

      // Underscore-prefixed identifiers mark deliberate non-use (e.g. a
      // scenario function that keeps a parameter for call-site symmetry).
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // React Compiler rules (eslint-plugin-react-hooks v6, promoted to
      // errors by eslint-config-next 16). They fire heavily on this site's
      // imperative visualization layer — D3/canvas/Three.js draw code,
      // requestAnimationFrame loops, ref-based telemetry, hydration-safe
      // mount gating, and inline interactive SVG sub-components — where the
      // flagged patterns are deliberate and correct. Kept as warnings:
      // still surfaced for review, but not failing lint on working art.
      "react-hooks/refs": "warn",
      "react-hooks/static-components": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/immutability": "warn",
    },
  },
]);

export default eslintConfig;
