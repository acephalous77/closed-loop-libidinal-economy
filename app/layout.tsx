import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "katex/dist/katex.min.css";

const ebGaramond = localFont({
  src: [
    { path: "../public/fonts/EBGaramond-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/EBGaramond-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/EBGaramond-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/EBGaramond-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-eb-garamond",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: [
    { path: "../public/fonts/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const garamondMath = localFont({
  src: "../public/fonts/Garamond-Math.otf",
  variable: "--font-garamond-math",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Closed-Loop Libidinal Economy",
  description:
    "A framework for attention capture under platform capitalism. Adnan Selimović, Ph.D.",
  authors: [{ name: "Adnan Selimović" }],
  openGraph: {
    title: "The Closed-Loop Libidinal Economy",
    description:
      "A framework for attention capture under platform capitalism.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${jetBrainsMono.variable} ${garamondMath.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
