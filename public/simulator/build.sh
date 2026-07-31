#!/usr/bin/env bash
# Rebuild the preserved simulator's local assets.
#
# The simulator used to pull React, ReactDOM and Babel-standalone from
# unpkg.com and compile its JSX in the browser — three third-party script
# requests on every visit, ~4.2MB, and the reason next.config.ts documents
# that the site runs no Content-Security-Policy (in-browser JSX needs
# 'unsafe-eval').
#
# Now: React + ReactDOM are vendored locally as production UMD builds, and
# the .jsx is compiled ahead of time, so Babel is gone entirely. ~143KB, no
# third-party requests, no unsafe-eval.
#
# Provenance: the UMD builds come from the npm registry (which verifies
# package integrity), NOT an ad-hoc download. The development builds in the
# same packages hash to exactly the SRI values the old <script> tags
# carried, which is what proves these are the same files unpkg was serving:
#   react.development.js      sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L
#   react-dom.development.js  sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm
#
# The .jsx files are classic scripts sharing top-level globals (sim.jsx
# defines what panels/chain/app consume), so this TRANSFORMS each file in
# place rather than bundling — and deliberately does not minify identifiers,
# which would rename those cross-file globals and break the page.
#
# Usage:  ./build.sh        (from public/simulator/)
set -euo pipefail
cd "$(dirname "$0")"

REACT_VER=18.3.1
SRC=(sim panels chain app mindmap)

echo "── vendoring React ${REACT_VER} (production UMD) ──"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
( cd "$TMP" && npm pack "react@${REACT_VER}" "react-dom@${REACT_VER}" >/dev/null 2>&1 )
tar xzf "$TMP/react-${REACT_VER}.tgz" -C "$TMP" && mv "$TMP/package" "$TMP/react"
tar xzf "$TMP/react-dom-${REACT_VER}.tgz" -C "$TMP" && mv "$TMP/package" "$TMP/react-dom"

# integrity gate — the dev builds must hash to the SRI values above, or the
# registry gave us something other than what unpkg was serving.
check() {
  local got; got="sha384-$(openssl dgst -sha384 -binary "$1" | openssl base64 -A)"
  [ "$got" = "$2" ] || { echo "INTEGRITY FAIL $1"; echo "  got $got"; echo "  want $2"; exit 1; }
  echo "  verified  $(basename "$1")"
}
check "$TMP/react/umd/react.development.js" \
  "sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L"
check "$TMP/react-dom/umd/react-dom.development.js" \
  "sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm"

mkdir -p vendor
cp "$TMP/react/umd/react.production.min.js" vendor/
cp "$TMP/react-dom/umd/react-dom.production.min.js" vendor/

echo "── compiling JSX (transform only, identifiers preserved) ──"
for f in "${SRC[@]}"; do
  [ -f "$f.jsx" ] || continue
  # --tsconfig-raw='{}' is load-bearing: without it esbuild walks up to the
  # repo's tsconfig.json, which sets "jsx": "react-jsx", and emits the
  # AUTOMATIC runtime — `import { jsx } from "react/jsx-runtime"`. That makes
  # the output an ES module, and these are loaded as classic scripts sharing
  # globals, so the import is a syntax error and the file never evaluates.
  # (Symptom: sim.js works, panels/chain/app silently define nothing, page
  # renders blank.) The empty inline tsconfig stops the lookup so the classic
  # React.createElement runtime below actually applies.
  npx --yes esbuild "$f.jsx" \
    --loader:.jsx=jsx \
    --tsconfig-raw='{}' \
    --jsx=transform \
    --jsx-factory=React.createElement \
    --jsx-fragment=React.Fragment \
    --target=es2019 \
    --outfile="$f.js" \
    --log-level=error

  # Top-level `const`/`let` -> `var`, which is what in-browser Babel used to
  # produce (it lowered everything to ES5) and what these files depend on.
  #
  # These are classic scripts, so top-level `const` lands in the ONE shared
  # global lexical environment. panels.jsx and app.jsx both open with
  #   const { useState, useEffect, useRef } = React;
  # so the second to load throws "Identifier 'useState' has already been
  # declared" and never evaluates — App stays undefined and the page renders
  # blank. `var` redeclaration is legal, so this restores the old behaviour.
  # esbuild cannot do it via --target=es5 ("Transforming const to es5 is not
  # supported yet"), hence the rewrite here. Anchored at column 0 so nested
  # declarations are untouched.
  perl -i -pe 's/^const /var /; s/^let /var /' "$f.js"
  echo "  compiled  $f.jsx -> $f.js"
done

echo "── done ──"
ls -l vendor/*.js | awk '{printf "  %-10s %s\n", $5, $9}'
