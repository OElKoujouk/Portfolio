import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/features/i18n";
import { SEO_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import SkipLink from "@/components/ui/SkipLink";
// import ChatBubble from "@/features/chat/ChatBubble";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SEO_CONFIG.name,
  url: SEO_CONFIG.url,
  jobTitle: SEO_CONFIG.jobTitle,
  image: SEO_CONFIG.image,
  description: SEO_CONFIG.description,
  sameAs: [SOCIAL_LINKS.linkedin, SEO_CONFIG.url]
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.url),
  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${SEO_CONFIG.name}`
  },
  description: SEO_CONFIG.description,
  keywords: [...SEO_CONFIG.keywords],
  authors: [{ name: SEO_CONFIG.name, url: SEO_CONFIG.url }],
  creator: SEO_CONFIG.name,
  publisher: SEO_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.url,
    siteName: SEO_CONFIG.siteName,
    locale: SEO_CONFIG.locale,
    type: "website",
    images: [
      {
        url: SEO_CONFIG.image,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/logo.png", type: "image/png", sizes: "192x192" }
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png"
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const initialLocale = cookieStore.get("app-locale")?.value as "fr" | "en" | undefined;

  return (
    <html lang="fr" className="bg-primary">
      <head />
      <body className={`${inter.variable} bg-primary text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider initialLocale={initialLocale}>
          <div className="grain" aria-hidden="true" />
          <SkipLink />
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
