/**
 * Constantes globales du portfolio
 */

import type { Route } from "next";

// ============================================
// Navigation
// ============================================

/**
 * Routes de navigation principales
 */
export const NAV_HREFS = ["/", "/projets", "/contact"] as const satisfies Route[];

/**
 * Liens externes et réseaux sociaux
 */
export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/omar-el-koujouk-2580371a7/",
    portfolio: "https://omar-elkoujouk.fr",
} as const;

// ============================================
// SEO & Metadata
// ============================================

/**
 * Informations de base pour le SEO
 */
export const SEO_CONFIG = {
    name: "Omar El Koujouk",
    title: "Omar El Koujouk | Développeur Full-Stack & Salesforce",
    description: "Omar El Koujouk. Développeur Full-Stack & Salesforce. Spécialisé en Next.js, React et intégrations Salesforce.",
    url: "https://omar-elkoujouk.fr",
    image: "https://omar-elkoujouk.fr/assets/omar.jpg",
    jobTitle: "Développeur Full-Stack & Salesforce",
} as const;

// ============================================
// Groupes de compétences
// ============================================

/**
 * Groupes de compétences pour la section About
 */
export const SKILL_GROUPS = [
    {
        label: "Salesforce",
        items: ["Lightning Web Components", "APEX", "Salesforce DX (SFDX)"]
    },
    {
        label: "Automatisation",
        items: ["CI/CD", "Intégrations API", "Scripts SFDX"]
    },
    {
        label: "Back-end",
        items: ["Node.js / Express", "Symfony & PHP", "APIs REST", "Prisma + MySQL"]
    },
    {
        label: "Front-end",
        items: ["JavaScript / TypeScript", "React", "React Native", "Tailwind CSS"]
    }
] as const;

// ============================================
// Types dérivés
// ============================================

export type NavHref = (typeof NAV_HREFS)[number];
export type SkillGroup = (typeof SKILL_GROUPS)[number];
