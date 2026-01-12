import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ContactPageClient } from "@/features/contact";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("app-locale")?.value as "fr" | "en") || "fr";

  const titles = {
    fr: "Contact",
    en: "Contact"
  };

  const descriptions = {
    fr: "Contactez-moi pour discuter de votre projet web, mobile ou Salesforce. Réponse sous 24h.",
    en: "Contact me to discuss your web, mobile, or Salesforce project. Reply within 24h."
  };

  return {
    title: titles[locale],
    description: descriptions[locale]
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
