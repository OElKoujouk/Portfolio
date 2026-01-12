"use client";

import Link from "next/link";
import { Activity, Flame } from "lucide-react";
import { useLanguage } from "@/features/i18n";
import { SKILL_GROUPS } from "@/lib/constants";

export default function AboutSection() {
  const { t } = useLanguage();

  const introSections = t.about.introSections.map((section, index) => ({
    ...section,
    icon: index === 0 ? Activity : Flame
  }));

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
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 p-2">
                  <Icon className="h-5 w-5 text-accent-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent-blue">
                  {title}
                </h2>
              </div>
              {paragraphs.map((text, idx) => (
                <p key={`${title}-para-${idx}`} className="max-w-3xl text-base leading-relaxed text-gray-200">
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
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
              <h2 className="text-2xl font-bold text-white">{t.about.skillsTitle}</h2>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
              {t.about.skillsSubtitle}
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/20 p-5 transition-all duration-300 hover:border-accent-blue/30 hover:bg-gradient-to-br hover:from-accent-blue/10 hover:to-black/30"
            >
              <p className="text-sm uppercase tracking-widest font-semibold text-accent-blue mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="badge"
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
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
            <p className="text-xs uppercase tracking-[0.45em] text-accent-blue font-semibold">{t.about.experienceLabel}</p>
          </div>
          <h2 className="text-2xl font-bold text-white">{t.about.experienceTitle}</h2>
          <div className="mt-8 space-y-8">
            {t.about.experiences.map(({ role, company, period, highlights }) => (
              <article key={role} className="relative border-l border-white/10 pl-6">
                <span className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-accent-blue shadow-[0_0_12px_rgba(0,217,255,0.8)]" />
                <p className="text-xs uppercase tracking-widest text-gray-400">{period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{role}</h3>
                <p className="text-sm text-gray-400">{company}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {highlights.map((item, idx) => (
                    <li key={`${role}-highlight-${idx}`} className="flex items-start gap-2">
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
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full" />
            <p className="text-xs uppercase tracking-[0.45em] text-accent-blue font-semibold">{t.about.projectLabel}</p>
          </div>
          <h2 className="text-2xl font-bold text-white">{t.about.navZenProject.title}</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-300">
            <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-4 text-white shadow-2xl shadow-cyan-500/10 transition hover:border-accent-blue/60 hover:shadow-cyan-500/30">
              <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">{t.about.navZenProject.awardLabel}</p>
                  <p className="mt-2 text-base font-semibold text-white">{t.about.navZenProject.awardTitle}</p>
                  <p className="mt-1 text-sm text-cyan-100">{t.about.navZenProject.awardDescription}</p>
                </div>
                <Link
                  href="/projets/navzen-projet-prime"
                  className="inline-flex items-center justify-center rounded-full border border-accent-blue/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-blue transition hover:border-accent-blue hover:bg-accent-blue/10"
                >
                  {t.about.navZenProject.viewProject}
                </Link>
              </div>
            </div>
            <p className="flex items-start gap-2 text-base text-gray-100">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{t.about.navZenProject.highlightIntro}</span>
            </p>
            {t.about.navZenProject.highlights.map((item, idx) => (
              <p key={`navzen-highlight-${idx}`} className="flex items-start gap-2">
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
