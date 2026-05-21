import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Permanent_Marker, Caveat } from "next/font/google";

/**
 * Chair project layout.
 *
 * The master register is light — warm cream paper, dark warm ink,
 * a deep blueprint navy as the brand accent. The essay, the
 * subsystems, the precedents, the lineage, the refusal essay, the
 * concepts, and the colophon all live in this register. The
 * brochure (/chair/the-system) opts up to clinical white — the
 * apparatus's showroom aesthetic — using its own per-page wrapper.
 * The archive (/chair/archive) keeps its scholarly sepia. The zine
 * (/chair/zine) is the only place that overrides the master to
 * cinematic dark, because protest media is the one register where
 * dark is right.
 */

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: {
    default:
      "On the Chair — Notes Toward a Theory of the Closed-Loop Libidinal Economy",
    template: "%s — On the Chair",
  },
  description:
    "An essay and three appended artifacts on the chair as a figure for what the contemporary closed-loop libidinal economy has been becoming. By Adnan Selimović.",
  openGraph: {
    type: "article",
    siteName: "Closed-Loop Libidinal Economy",
    title: "On the Chair",
    description:
      "Notes toward a theory of the closed-loop libidinal economy.",
    url: `${SITE_URL}/chair`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "On the Chair",
    description: "Notes toward a theory of the closed-loop libidinal economy.",
  },
};

// Light, warm-cream master palette.
const BG = "#f3ecd9";           // warm cream paper
const BG_DEEP = "#ebe1c8";      // gradient deepening
const INK = "#1a1814";          // warm dark — body ink
const INK_DIM = "#5a544a";      // secondary text
const MUTED = "#8a8478";        // tertiary text / labels
const LINE = "rgba(26,24,20,0.12)";
const ACCENT = "#7a2818";       // sepia-brick — the project's distinguishing colour

export default function ChairLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`chair-theme ${geistSans.variable} ${geistMono.variable} ${anton.variable} ${permanentMarker.variable} ${caveat.variable}`}
      style={{
        minHeight: "100vh",
        background: BG,
        color: INK,
        fontFamily: `var(--font-geist), ui-sans-serif, system-ui, -apple-system, sans-serif`,
        fontWeight: 380,
        letterSpacing: "-0.005em",
        colorScheme: "light",
        position: "relative",
        backgroundImage: `linear-gradient(180deg, ${BG} 0%, ${BG_DEEP} 100%)`,
      }}
    >
      <style>{`
        .chair-theme ::selection { background: ${ACCENT}; color: ${BG}; }
        .chair-theme a:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }

        /* Subtle paper-grain texture, ever-present */
        .chair-theme::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.08;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.46  0 0 0 0 0.38  0 0 0 0.4 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }
      `}</style>

      {children}

      {/* Foot — faint, ceremonial */}
      <div
        style={{
          padding: "5rem 5vw 4rem",
          textAlign: "center",
          fontSize: "0.7rem",
          fontFamily: `var(--font-geist-mono), ui-monospace, monospace`,
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: MUTED,
          borderTop: `1px solid ${LINE}`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          ↑ autostimulus
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>
          essay
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/subsystems" style={{ color: "inherit", textDecoration: "none" }}>
          subsystems
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/concepts" style={{ color: "inherit", textDecoration: "none" }}>
          concepts
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/precedents" style={{ color: "inherit", textDecoration: "none" }}>
          precedents
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/lineage" style={{ color: "inherit", textDecoration: "none" }}>
          lineage
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/refusal" style={{ color: "inherit", textDecoration: "none" }}>
          refusal
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/the-system" style={{ color: "inherit", textDecoration: "none" }}>
          brochure
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/zine" style={{ color: "inherit", textDecoration: "none" }}>
          zine
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/archive" style={{ color: "inherit", textDecoration: "none" }}>
          archive
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.4 }}>·</span>
        <a href="/chair/colophon" style={{ color: "inherit", textDecoration: "none" }}>
          colophon
        </a>
      </div>
    </div>
  );
}
