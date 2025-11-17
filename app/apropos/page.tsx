import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "A propos",
  description: "Parcours, competences et inspirations d'Omar El Koujouk."
};

export default function AboutPage() {
  return (
    <section className="mx-auto space-y-12 px-4 sm:px-6 lg:max-w-6xl lg:px-8">
      {/* plus de max-w-3xl ici */}
      <header className="w-full">
        <p className="text-xs uppercase tracking-[0.45em] text-accent-blue">Profil</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl whitespace-nowrap">
          Developpeur Full-Stack & Salesforce
        </h1>
        <p className="mt-4 text-base text-gray-300">
          J&apos;aide les equipes produit a assembler architectures web/mobile et ecosysteme Salesforce,
          en priorisant la lisibilite du code, l&apos;automatisation et la fiabilite des mises en
          production.
        </p>
      </header>
      <AboutSection />
    </section>
  );
}
