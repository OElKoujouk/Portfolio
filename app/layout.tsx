import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omar El Koujouk",
  url: "https://omar-elkoujouk.fr",
  jobTitle: "Développeur de Solutions Digitales",
  image: "https://omar-elkoujouk.fr/assets/omar.jpg",
  description:
    "Portfolio d'Omar El Koujouk, Développeur de Solutions Digitales : expériences web performantes et applications sur mesure.",
  sameAs: ["https://www.linkedin.com/in/omar-el-koujouk-2580371a7/", "https://omar-elkoujouk.fr"]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-elkoujouk.fr"),
  title: {
    default: "Portfolio d'Omar El Koujouk | Développeur de Solutions Digitales",
    template: "%s | Omar El Koujouk"
  },
  description:
    "Portfolio d'Omar El Koujouk, Développeur de Solutions Digitales : expériences web performantes et applications sur mesure.",
  openGraph: {
    title: "Portfolio d'Omar El Koujouk | Développeur de Solutions Digitales",
    description:
      "Portfolio d'Omar El Koujouk : solutions web modernes, performantes et accessibles, portées par un développeur de solutions digitales.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-primary">
      <head>
        <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personJsonLd)}
        </Script>
      </head>
      <body className={`${inter.variable} bg-primary text-white`}>
        <div className="grain" aria-hidden="true" />
        <a href="#content" className="skip-link">
          Aller au contenu principal
        </a>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main id="content" className="relative z-10 flex-1 pb-16 pt-12">
            <div className="container mx-auto px-6">{children}</div>
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
