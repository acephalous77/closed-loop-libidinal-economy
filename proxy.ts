// Members-only gate for /thinkroom — the seminar tool.
//
// Next.js 16 proxy (the renamed middleware convention). Runs ahead of
// route rendering on every /thinkroom/* request — redirects to
// /thinkroom/enter if the `tr_pass` cookie is missing or doesn't match
// sha256(THINKROOM_PASSWORD:THINKROOM_COOKIE_SECRET).
//
// The cookie is HttpOnly + Secure + SameSite=Lax + 30-day expiry, set
// by the server action in app/thinkroom/actions.ts.
//
// Not high-security: this is a shared-password gate for a small instructor
// audience. If autostimulus ever needs real auth, swap this for Lucia or
// next-auth.

import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "tr_pass";

// Web Crypto SHA-256 (Edge-runtime compatible — Node `crypto` is not).
async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes inside /thinkroom (the gate itself).
  if (pathname === "/thinkroom/enter" || pathname.startsWith("/thinkroom/enter/")) {
    return NextResponse.next();
  }

  // If env vars aren't set, fail closed with a clear message instead of
  // silently letting unauthenticated traffic through.
  const password = process.env.THINKROOM_PASSWORD;
  const secret = process.env.THINKROOM_COOKIE_SECRET;
  if (!password || !secret) {
    return new NextResponse(
      "thinkroom is not configured on this deploy.\n\n" +
        "Set THINKROOM_PASSWORD and THINKROOM_COOKIE_SECRET in the host environment.",
      { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } },
    );
  }

  const expected = await sha256Hex(password + ":" + secret);
  const got = req.cookies.get(COOKIE_NAME)?.value;
  if (got !== expected) {
    const url = req.nextUrl.clone();
    url.pathname = "/thinkroom/enter";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Match the entry route too so we can log/control it if needed later;
  // we early-return for it above.
  matcher: ["/thinkroom/:path*"],
};
