import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ContactPageClient } from "@/features/contact";

import { translations } from "@/features/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("app-locale")?.value as "fr" | "en") || "fr";
  const t = translations[locale].contact.meta;

  return {
    title: t.title,
    description: t.description
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
