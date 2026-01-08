import type { ProjectBase } from "@/types";

export const wordpressProject: ProjectBase = {
    slug: "refonte-wordpress",
    title: {
        fr: "Refonte WordPress & intégration Agentforce",
        en: "WordPress Redesign & Agentforce Integration"
    },
    description: {
        fr: "Refonte du site WordPress (Elementor) de Dev First avec un agent Agentforce brandé Salesforce intégré côté front.",
        en: "Redesign of Dev First WordPress site (Elementor) with a Salesforce-branded Agentforce agent integrated on the frontend."
    },
    longDescription: {
        fr: "Refonte complète de dev-first.com sous WordPress + Elementor puis intégration d'un agent conversationnel Agentforce relié à Salesforce. Le bot récupère la base de connaissances Trailhead/FAQ, respecte le branding (logo, couleurs, avatar) et expose des topics/actions personnalisés (prise de RDV, push de leads). L'objectif est de transformer une vitrine classique en un outil de génération de business traçable dans Salesforce avec suivi des conversations.",
        en: "Complete redesign of dev-first.com using WordPress + Elementor then integration of an Agentforce conversational agent connected to Salesforce. The bot retrieves the Trailhead/FAQ knowledge base, respects branding (logo, colors, avatar) and exposes custom topics/actions (appointment booking, lead pushing). The goal is to transform a classic showcase into a business generation tool traceable in Salesforce with conversation tracking."
    },
    stack: ["WordPress", "Elementor", "Salesforce", "Agentforce", "JavaScript"],
    image: "/assets/wordpress/devfirst.png",
    link: "https://www.dev-first.com/",
    problem: {
        fr: "Dev First disposait d'un site vitrine peu interactif et aucune capture conversationnelle des prospects malgré son écosystème Salesforce.",
        en: "Dev First had a non-interactive showcase website and no conversational prospect capture despite its Salesforce ecosystem."
    },
    solution: {
        fr: "Création de pages Elementor optimisées SEO + ajout d'un widget Agentforce connecté à Salesforce (topics, actions custom, branding complet). L'agent répond instantanément, peut créer des leads, prendre des rendez-vous ou pousser une documentation contextualisée, tout en loggant chaque conversation côté CRM.",
        en: "Creation of SEO-optimized Elementor pages + addition of an Agentforce widget connected to Salesforce (topics, custom actions, complete branding). The agent responds instantly, can create leads, book appointments or push contextualized documentation, while logging every conversation on the CRM side."
    },
    demoMedia: [
        { type: "image", src: "/assets/wordpress/site.png", title: { fr: "Agentforce intégré", en: "Integrated Agentforce" }, description: { fr: "Site WordPress Dev First avec l'agent Agentforce en bas à droite.", en: "Dev First WordPress site with Agentforce agent in bottom right." } },
        { type: "image", src: "/assets/wordpress/agentforce.png", title: { fr: "Interface Agentforce", en: "Agentforce Interface" }, description: { fr: "Vue agrandie de l'agent Agentforce avec branding Dev First et options de conversation.", en: "Enlarged view of Agentforce agent with Dev First branding and conversation options." } }
    ]
};
