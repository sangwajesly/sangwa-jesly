import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sangwajesly.vercel.app"),
  title: {
    template: "%s | Sangwa Jesly",
    default: "Sangwa Jesly | Designer & Software Engineer",
  },
  description: "I design brands, build web & AI applications, and create automations for businesses and startups.",
  openGraph: {
    title: "Sangwa Jesly | Designer & Software Engineer",
    description: "I design brands, build web & AI applications, and create automations for businesses and startups.",
    url: "https://sangwajesly.vercel.app",
    siteName: "Sangwa Jesly",
    images: [{ url: "/brand/og-default.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/brand/favicon-bw.png" },
      { url: "/icon.png" },
    ],
    apple: "/brand/favicon-bw.png",
    shortcut: "/brand/favicon-bw.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-bg text-fg font-sans antialiased relative">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <FloatingWhatsApp />
        <ScrollReveal />
      </body>
    </html>
  );
}