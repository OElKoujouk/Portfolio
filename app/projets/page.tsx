import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets",
  description: "Sélection de projets Next.js, React, intégrations Salesforce et automatisations livrés récemment."
};

export default function ProjectsPage() {
  return (
    <section className="space-y-12 md:space-y-16">
      <header className="w-full space-y-4 animate-fade-in">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent-blue animate-pulse-slow" />
          <p className="text-xs uppercase tracking-[0.4em] text-accent-blue font-semibold">Réalisations</p>
        </div>
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="text-gradient">Projets sélectionnés</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-300 max-w-3xl">
          Chaque projet est conçu avec une obsession pour la qualité et la maintenabilité. Voici un aperçu des derniers
          produits livrés.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-6" />
      </header>
      <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        <ProjectsGrid />
      </div>
    </section>
  );
}
