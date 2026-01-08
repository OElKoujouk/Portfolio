import type { Metadata } from "next";
import { cookies } from "next/headers";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("portfolio-locale")?.value as "fr" | "en") || "fr";

  const titles = {
    fr: "Projets",
    en: "Projects"
  };

  const descriptions = {
    fr: "Découvrez mes réalisations : applications web, intégrations Salesforce et projets mobiles.",
    en: "Discover my work: web applications, Salesforce integrations, and mobile projects."
  };

  return {
    title: titles[locale],
    description: descriptions[locale]
  };
}

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
