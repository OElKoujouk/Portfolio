/**
 * Index des projets du site
 * Agrège tous les projets et expose les fonctions d'accès
 */

import type { Locale } from "@/features/i18n";
import type { ProjectBase, Project, TranslatedText } from "../types";

// Import de tous les projets
import { navzenProject } from "./entries/navzen";
import { quickgptProject } from "./entries/quickgpt";
import { wordpressProject } from "./entries/wordpress";
import { rivalyticsProject } from "./entries/rivalytics";
import { linkedinExtensionProject } from "./entries/linkedin-extension";
import { n8nProject } from "./entries/n8n";
import { gestionStockProject } from "./entries/gestion-stock";

/**
 * Liste de tous les projets (avec textes traduits)
 */
export const projectsData: ProjectBase[] = [
  navzenProject,
  quickgptProject,
  wordpressProject,
  rivalyticsProject,
  linkedinExtensionProject,
  n8nProject,
  gestionStockProject,
];

// ============================================
// Fonctions helpers
// ============================================

/**
 * Résout un texte traduit dans une langue spécifique
 */
function resolveText(text: TranslatedText | undefined, locale: Locale): string {
  if (!text) return "";
  return text[locale] || text.fr;
}

/**
 * Résout un projet dans une langue spécifique
 */
function resolveProject(project: ProjectBase, locale: Locale): Project {
  return {
    slug: project.slug,
    title: resolveText(project.title, locale),
    description: resolveText(project.description, locale),
    longDescription: resolveText(project.longDescription, locale),
    stack: project.stack,
    image: project.image,
    problem: resolveText(project.problem, locale),
    solution: resolveText(project.solution, locale),
    link: project.link,
    demoMedia: project.demoMedia?.map((dm) => ({
      type: dm.type,
      src: dm.src,
      title: dm.title ? resolveText(dm.title, locale) : undefined,
      description: dm.description ? resolveText(dm.description, locale) : undefined
    })),
    workflowsTitle: project.workflowsTitle ? resolveText(project.workflowsTitle, locale) : undefined,
    workflowsIntro: project.workflowsIntro ? resolveText(project.workflowsIntro, locale) : undefined,
    workflows: project.workflows?.map((wf) => ({
      name: resolveText(wf.name, locale),
      description: resolveText(wf.description, locale),
      tech: wf.tech
    }))
  };
}

// ============================================
// API publique
// ============================================

/**
 * Récupère tous les projets dans une langue spécifique
 */
export function getProjects(locale: Locale): Project[] {
  return projectsData.map((p) => resolveProject(p, locale));
}

/**
 * Récupère un projet par son slug dans une langue spécifique
 */
export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return undefined;
  return resolveProject(project, locale);
}

/**
 * Récupère tous les slugs de projets (pour generateStaticParams)
 */
export function getProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

// Rétrocompatibilité - projets en français par défaut
export const projects: Project[] = getProjects("fr");

// Réexport des types pour convenance
export type * from "../types";
