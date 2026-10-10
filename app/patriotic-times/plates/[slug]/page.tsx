import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLATES, getPlateBySlug } from "../_data";
import { ColoringCanvas } from "../_components/ColoringCanvas";

/**
 * Per-plate interactive coloring page. Only generated for plates that
 * have a `src` (image file deployed). Plates pending publication are
 * rendered as placeholder cards on /patriotic-times/plates and have
 * no individual route.
 */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PLATES.filter((p) => p.src !== null).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plate = getPlateBySlug(slug);
  if (!plate) return { title: "Plate not found" };
  return {
    title: `№ ${plate.no.toString().padStart(2, "0")} — ${plate.title}`,
    description: `Patriotic Times, plate ${plate.no}: ${plate.title}. ${plate.location}, ${plate.year}.`,
    alternates: { canonical: `/patriotic-times/plates/${plate.slug}` },
  };
}

const INK = "#0a0a0a";
const INK_70 = "#3d342a";
const INK_50 = "#6b5e4d";
const RED = "#b8222a";
const CHAPTER_INKS = ["#b8222a", "#1e4f8f", "#1d7a45", "#8a6000"]; // riso spot inks I–IV

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `var(--font-anton), "Arial Narrow", Impact, sans-serif`
const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;

export default async function PlateColorPage({ params }: PageProps) {
  const { slug } = await params;
  const plate = getPlateBySlug(slug);
  if (!plate || !plate.src) notFound();

  // Prev/next across live plates (those with src)
  const livePlates = PLATES.filter((p) => p.src !== null);
  const idx = livePlates.findIndex((p) => p.slug === plate.slug);
  const prev = idx > 0 ? livePlates[idx - 1] : null;
  const next = idx < livePlates.length - 1 ? livePlates[idx + 1] : null;

  return (
    <main style={{ padding: "3rem 5vw 4rem", maxWidth: "1400px", margin: "0 auto" }}>
      <nav
        className="print-hide"
        style={{
          marginBottom: "2rem",
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={crumbStyle}>↑ autostimulus</Link>
        <Link href="/patriotic-times" style={crumbStyle}>← Patriotic Times</Link>
        <Link href="/patriotic-times/plates" style={crumbStyle}>← All plates</Link>
      </nav>

      {/* Header */}
      <header
        className="print-hide"
        style={{ marginBottom: "2.5rem", maxWidth: "44rem" }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: RED,
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          № {plate.no.toString().padStart(2, "0")} of 63 · {plate.year}
        </div>
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            textTransform: "uppercase",
            margin: 0,
            color: INK,
          }}
        >
          {plate.title}
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.15rem",
            fontStyle: "italic",
            lineHeight: 1.45,
            color: INK_70,
            marginTop: "1rem",
            marginBottom: 0,
          }}
        >
          {plate.location}, {plate.year}.
        </p>
      </header>

      {/* Canvas */}
      <ColoringCanvas src={plate.src!} alt={`${plate.title} — line art for coloring`} />

      {/* Mounting caption — the plate presented as a home-print edition:
          edition line, title block, curatorial note (chapter-inked). */}
      <div style={{ marginTop: "2.25rem", paddingTop: "1.25rem", borderTop: `1px solid ${INK}`, maxWidth: "44rem" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_50,
            marginBottom: "0.6rem",
          }}
        >
          Patriotic Times · Plate № {plate.no.toString().padStart(2, "0")} of 63 · Edition 2025—2026 · home-print
        </div>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.05rem",
            fontStyle: "italic",
            lineHeight: 1.45,
            color: INK_70,
            margin: 0,
            maxWidth: "38rem",
          }}
        >
          {plate.title}, {plate.year} — {plate.location}.
        </p>
        {plate.note && (
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "1rem",
              fontStyle: "italic",
              lineHeight: 1.45,
              color: INK_70,
              marginTop: "0.75rem",
              marginBottom: 0,
              maxWidth: "38rem",
            }}
          >
            <span style={{ color: plate.chapter ? CHAPTER_INKS[plate.chapter - 1] : RED, fontStyle: "normal", fontWeight: 700, marginRight: "0.5rem" }}>✱</span>
            {plate.note}
          </p>
        )}
      </div>

      {(prev || next) && (
        <nav
          className="print-hide"
          style={{
            marginTop: "3.5rem",
            paddingTop: "1.5rem",
            borderTop: `1px solid ${INK}`,
            display: "flex",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {prev ? (
            <Link href={`/patriotic-times/plates/${prev.slug}`} style={navLinkStyle}>
              ← № {prev.no.toString().padStart(2, "0")} · {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/patriotic-times/plates/${next.slug}`} style={navLinkStyle}>
              № {next.no.toString().padStart(2, "0")} · {next.title} →
            </Link>
          ) : <span />}
        </nav>
      )}
    </main>
  );
}

const crumbStyle: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: INK_50,
  textDecoration: "none",
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: INK_70,
  textDecoration: "none",
  fontWeight: 700,
};
