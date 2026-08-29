import type { Metadata } from "next";
import "./globals.css";
import { defaultImage } from "./seo";
import Consent from "./Consent";

export const metadata: Metadata = {
  metadataBase: new URL("https://immobilienmakler-bergisch-gladbach.de/"),
  title: "Immobilienmakler Bergisch Gladbach | Stark & Hoffmann",
  description: "Lokale Immobilienmakler in Bergisch Gladbach: Bewertung, Verkauf und persönliche Beratung durch Stark & Hoffmann Immobilien.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/" },
  openGraph: {
    title: "Immobilienmakler Bergisch Gladbach | Stark & Hoffmann",
    description: "Immobilienbewertung und Verkauf in Bergisch Gladbach und allen 25 Stadtteilen.",
    images: [{ url: defaultImage, width: 1568, height: 1003, alt: "Immobilienmakler Bergisch Gladbach – Stark & Hoffmann Immobilien" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilienmakler Bergisch Gladbach | Stark & Hoffmann",
    description: "Immobilienbewertung und Verkauf in Bergisch Gladbach und allen 25 Stadtteilen.",
    images: [defaultImage],
  },
  verification: {
    google: "UMEgdX9HRciaQpNQvzxL_seevwM8gpWzNM39AV8sLQI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}<Consent /></body>
    </html>
  );
}
