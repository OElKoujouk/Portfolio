"use client";

import ProjectsGrid from "@/components/ProjectsGrid";
import { useLanguage } from "@/lib/i18n";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-12 md:space-y-16">
      <header className="w-full space-y-4 animate-fade-in">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-blue font-semibold">{t.projects.label}</p>
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="text-gradient">{t.projects.title}</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-300 max-w-3xl">
          {t.projects.description}
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-6" />
      </header>
      <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
        <ProjectsGrid />
      </div>
    </section>
  );
}
