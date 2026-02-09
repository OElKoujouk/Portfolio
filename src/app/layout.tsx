import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/features/i18n";
import { SEO_CONFIG, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";
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
  sameAs: [SOCIAL_LINKS.linkedin, SEO_CONFIG.url],
  knowsAbout: [
    "Salesforce Development",
    "Lightning Web Components",
    "APEX Programming",
    "React Development",
    "Next.js Framework",
    "TypeScript",
    "Node.js",
    "API Integration",
    "CI/CD",
    "Web Development",
    "Full-Stack Development"
  ],
  worksFor: {
    "@type": "Organization",
    "name": SEO_CONFIG.businessName
  },
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  }
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SEO_CONFIG.businessName,
  image: SEO_CONFIG.image,
  url: SEO_CONFIG.url,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  geo: {
    "@type": "GeoCoordinates",
    "latitude": "48.8566",
    "longitude": "2.3522"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
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
  publisher: SEO_CONFIG.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      'fr': 'https://omar-elkoujouk.fr',
      'en': 'https://omar-elkoujouk.fr/en',
    }
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
  },
  manifest: "/manifest.json"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
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
