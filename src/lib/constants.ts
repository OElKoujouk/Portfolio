/**
 * Constantes globales du site personnel
 */

import type { Route } from "next";

// ============================================
// Navigation
// ============================================

/**
 * Routes de navigation principales
 */
export const NAV_HREFS = ["/", "/projets", "/blog", "/contact"] as const satisfies Route[];

/**
 * Liens externes et réseaux sociaux
 */
export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/omar-el-koujouk-2580371a7/",
    website: "https://omar-elkoujouk.fr",
} as const;

/**
 * Informations de contact centralisées
 */
export const CONTACT_INFO = {
    email: "omar.lbn@outlook.com",
    phone: "+33 7 83 11 59 73",
    phoneRaw: "+33783115973",
} as const;

// ============================================
// SEO & Metadata
// ============================================

/**
 * Informations de base pour le SEO
 */
export const SEO_CONFIG = {
    name: "Omar El Koujouk",
    businessName: "OEK Dev",
    title: "Omar El Koujouk (OEK Dev) | Développeur Full-Stack & Salesforce",
    description: "Omar El Koujouk (OEK Dev) - Expert Salesforce et Développeur Web Full-Stack (React/Next.js) basé à Paris. J'accompagne vos projets de développement web et d'intégration CRM sur-mesure.",
    url: "https://omar-elkoujouk.fr",
    image: "https://omar-elkoujouk.fr/assets/omar.jpg",
    jobTitle: "Développeur Full-Stack & Salesforce",
    siteName: "Omar El Koujouk - OEK Dev",
    locale: "fr_FR",
    keywords: [
        "OEK Dev",
        "Développeur Salesforce Freelance",
        "Expert React Next.js Paris",
        "Intégration CRM Salesforce",
        "Développeur Full Stack Paris",
        "Création site web Next.js",
        "Consultant Technique Salesforce",
        "Développeur Web Freelance",
        "TypeScript",
        "Node.js",
        "Omar El Koujouk"
    ]
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
