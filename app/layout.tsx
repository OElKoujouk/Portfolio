import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import ChatBubble from "@/components/ChatBubble";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omar El Koujouk",
  url: "https://omar-elkoujouk.fr",
  jobTitle: "Développeur Full-Stack & Salesforce",
  image: "https://omar-elkoujouk.fr/assets/omar.jpg",
  description:
    "Omar El Koujouk. Développeur Full-Stack & Salesforce. Spécialisé en Next.js, React et intégrations Salesforce.",
  sameAs: ["https://www.linkedin.com/in/omar-el-koujouk-2580371a7/", "https://omar-elkoujouk.fr"]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-elkoujouk.fr"),
  title: {
    default: "Omar El Koujouk | Développeur Full-Stack & Salesforce",
    template: "%s | Omar El Koujouk"
  },
  description:
    "Omar El Koujouk. Développeur Full-Stack & Salesforce. Spécialisé en Next.js, React et intégrations Salesforce.",
  openGraph: {
    title: "Omar El Koujouk | Développeur Full-Stack & Salesforce",
    description:
      "Développeur Full-Stack & Salesforce. Omar El Koujouk. Spécialisé en Next.js, React et intégrations Salesforce.",
    type: "website"
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png"
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
          {/*
            ChatBubble rendu inutilisé pour l'instant.
            Remettre l'import et le JSX ci-dessous quand le chatbot sera réactivé.
          */}
          {/* <ChatBubble /> */}
        </div>
      </body>
    </html>
  );
}




