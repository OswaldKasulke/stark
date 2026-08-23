import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://immobilienmakler-bergisch-gladbach.de/"),
  title: "Immobilienmakler Bergisch Gladbach | Stark & Hoffmann",
  description: "Lokale Immobilienmakler in Bergisch Gladbach: Bewertung, Verkauf und persönliche Beratung durch Stark & Hoffmann Immobilien.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/" },
  openGraph: {
    title: "Immobilienmakler Bergisch Gladbach | Stark & Hoffmann",
    description: "Immobilienbewertung und Verkauf in Bergisch Gladbach und allen 25 Stadtteilen.",
    images: [{ url: "https://immobilienmakler-bergisch-gladbach.de/og.png", width: 1568, height: 1003, alt: "Immobilienmakler Bergisch Gladbach – Stark & Hoffmann Immobilien" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilienmakler Bergisch Gladbach | Stark & Hoffmann",
    description: "Immobilienbewertung und Verkauf in Bergisch Gladbach und allen 25 Stadtteilen.",
    images: ["https://immobilienmakler-bergisch-gladbach.de/og.png"],
  },
  icons: {
    icon: "https://immobilienmakler-bergisch-gladbach.de/favicon.svg",
    shortcut: "https://immobilienmakler-bergisch-gladbach.de/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
