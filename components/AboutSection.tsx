import { Activity, Flame, Download } from "lucide-react";

const introSections = [
  {
    title: "Ce que je fais",
    icon: Activity,
    paragraphs: [
      "Formé à ETNA Paris et EPITECH, je construis des architectures fiables en Next.js, React Native et Salesforce. J'aime connecter produit, métier et automatisation pour fluidifier les roadmaps.",
      "J'orchestration les workflows : intégrations API, scripts SFDX, CI/CD et monitoring pour garder la maîtrise jusqu'au déploiement."
    ]
  },
  {
    title: "Ce qui m'inspire",
    icon: Flame,
    paragraphs: [
      "La GSX-R 750 K6 m'apprend la précision : réglages, anticipation et contrôle sont les mêmes réflexes que j'applique au code.",
      "Je reste curieux des technos émergentes (BLE, Unity 3D, Rust) pour injecter de la créativité et proposer des expériences immersives."
    ]
  }
];

const skillGroups = [
  {
    label: "Salesforce",
    items: ["Lightning Web Components", "APEX", "Salesforce DX (SFDX)"]
  },
  {
    label: "Automatisation",
    items: ["CI/CD", "Intégrations API", "Scripts SFDX", "BLE / Rust"]
  },
  {
    label: "Back-end",
    items: ["Node.js / Express", "Symfony & PHP", "APIs REST"]
  },
  {
    label: "Front-end",
    items: ["JavaScript / TypeScript", "React", "React Native", "Tailwind CSS"]
  }
];

const experiences = [
  {
    role: "Développeur Salesforce (CDD)",
    company: "Dev First",
    period: "Avril 2024 - Novembre 2025",
    highlights: [
      "Features Apex & LWC sur mesure pour les équipes sales.",
      "Extension Chrome LinkedIn → Salesforce pour synchroniser les leads.",
      "Refonte de dev-first.com avec branchements services Salesforce.",
      "Configuration Agentforce (Topics, Actions, Web To Lead) + automatisations SFDX.",
      "Intégration d'API externes (OpenAI) et mentoring Trailhead."
    ]
  },
  {
    role: "Administrateur infrastructures sécurisées (CDD)",
    company: "KeopsConcept",
    period: "Mars 2023 - Janvier 2024",
    highlights: [
      "Interface PHP avec les machines de production.",
      "Génération automatique de fichiers DXF depuis les données métier.",
      "Optimisation du code pour réduire les erreurs et accélérer les procédés."
    ]
  }
];

const navZenProject = {
  title: "Projet NavZen — Fin d'études ETNA",
  highlights: [
    "Application de navigation intérieure React Native (auth, recherche, BLE).",
    "Algorithme de trilatération en Rust et calcul de chemin indoor.",
    "Backend Symfony/API REST et intégration Unity 3D immersive."
  ]
};

export default function AboutSection() {
  return (
    <section className="space-y-12">
      <div className="grid gap-6 lg:grid-cols-2">
        {introSections.map(({ title, icon: Icon, paragraphs }) => (
          <article
            key={title}
            className="card group relative overflow-hidden p-8 transition duration-500 hover:border-accent-blue/50"
          >
            <div className="absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-50 group-hover:bg-accent-blue/25" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 text-accent-blue">
                <Icon className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-white">{title}</h2>
              </div>
              {paragraphs.map((text) => (
                <p key={text} className="max-w-3xl text-base leading-relaxed text-gray-200">
                  {text}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="card px-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Expertises techniques</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-400">
              Les technos qui composent mon stack quotidien entre React, Salesforce et automatisation.
            </p>
          </div>
          <a
            href="/assets/CV-Omar.pdf"
            download
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500/80 via-accent-blue to-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:shadow-cyan-400/40"
          >
            <Download className="h-4 w-4" />
            Télécharger mon CV
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-widest text-cyan-300">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100 transition hover:border-cyan-300/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="card p-8">
          <p className="text-xs uppercase tracking-[0.45em] text-accent-blue">Parcours</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Expériences professionnelles</h2>
          <div className="mt-8 space-y-8">
            {experiences.map(({ role, company, period, highlights }) => (
              <article key={role} className="relative border-l border-white/10 pl-6">
                <span className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-accent-blue shadow-[0_0_12px_rgba(0,217,255,0.8)]" />
                <p className="text-xs uppercase tracking-widest text-gray-400">{period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{role}</h3>
                <p className="text-sm text-gray-400">{company}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="card bg-gradient-to-br from-white/10 via-transparent to-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.45em] text-accent-blue">Projet d&apos;école</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{navZenProject.title}</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-300">
            {navZenProject.highlights.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
