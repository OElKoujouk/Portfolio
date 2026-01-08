import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/i18n";
// import ChatBubble from "@/components/chat/ChatBubble";

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
    icon: [
      { url: "https://omar-elkoujouk.fr/favicon.ico", sizes: "any" },
      { url: "https://omar-elkoujouk.fr/assets/logo.png", type: "image/png", sizes: "32x32" },
      { url: "https://omar-elkoujouk.fr/assets/logo.png", type: "image/png", sizes: "192x192" }
    ],
    shortcut: "https://omar-elkoujouk.fr/favicon.ico",
    apple: "https://omar-elkoujouk.fr/assets/logo.png"
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-primary">
      <head />
      <body className={`${inter.variable} bg-primary text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider initialLocale={(await cookies()).get("portfolio-locale")?.value as "fr" | "en" | undefined}>
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
        </LanguageProvider>
      </body>
    </html>
  );
}




