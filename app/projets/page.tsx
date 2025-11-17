import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projets",
  description: "Sélection de projets Next.js, React et intégrations Salesforce."
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <header className="w-full">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-blue">Réalisations</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Projets sélectionnés</h1>
        <p className="mt-4 text-gray-300">
          Chaque projet est conçu avec une obsession pour la qualité et la maintenabilité. Voici un aperçu des derniers
          produits livrés.
        </p>
      </header>
      <ProjectsGrid />
    </section>
  );
}
