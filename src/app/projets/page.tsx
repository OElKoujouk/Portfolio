import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ProjectsPageClient } from "@/features/projects";

import { translations } from "@/features/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("app-locale")?.value as "fr" | "en") || "fr";
  const t = translations[locale].projects.meta;

  return {
    title: t.title,
    description: t.description
  };
}

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
