import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Développeur Full-Stack spécialisé Next.js / Salesforce : projets web, mobiles et intégrations sur mesure."
};

const skillBadges = ["Next.js", "React", "Salesforce", "Tailwind CSS", "TypeScript"];

const offerings = [
  {
    title: "Développement Web",
    description: "Applications Next.js optimisées pour la performance, le SEO et la scalabilité, du design system à la mise en production."
  },
  {
    title: "Intégrations Salesforce",
    description: "Connecteurs sur mesure, automatisations Apex et synchronisations temps réel entre Salesforce et vos outils existants."
  },
  {
    title: "Applications mobiles",
    description: "Expériences mobiles réactives avec React Native, packaging stores et pipeline de déploiement automatisé."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />

      <section className="rounded-3xl border border-white/5 bg-white/5 p-6 text-gray-200 shadow-2xl shadow-black/20">
        <h2 className="text-2xl font-semibold text-white">Compétences clés</h2>
        <p className="mt-2 text-sm text-gray-400">
          Les briques techniques avec lesquelles je conçois des produits fiables et maintenables.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {skillBadges.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 text-gray-200 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white">Ce que je fais</h2>
          <p className="text-sm text-gray-400">
            J&apos;accompagne les équipes produit en combinant design system, architecture logicielle et automatisation.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {offerings.map((item) => (
            <div key={item.title} className="card h-full">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-white/5 bg-white/5 p-6 text-gray-200 shadow-2xl shadow-black/20 lg:p-10">
        <header className="w-full text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-accent-blue">Profil</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Développeur Full-Stack & Salesforce</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300">
            J&apos;aide les équipes produit à assembler architectures web/mobile et écosystème Salesforce, en priorisant la
            lisibilité du code, l&apos;automatisation et la fiabilité des mises en production.
          </p>
        </header>
        <div className="mx-auto max-w-6xl">
          <AboutSection />
        </div>
      </section>
    </div>
  );
}
