import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-elkoujouk.fr"),
  title: {
    default: "Omar El Koujouk - Portfolio",
    template: "%s | Omar El Koujouk"
  },
  description: "Développeur Full-Stack spécialisé en Next.js, React et intégrations Salesforce.",
  openGraph: {
    title: "Omar El Koujouk - Portfolio",
    description: "Solutions web modernes, performantes et accessibles.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-primary">
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
        </div>
      </body>
    </html>
  );
}
