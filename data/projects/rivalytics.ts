import type { ProjectBase } from "@/types";

export const rivalyticsProject: ProjectBase = {
    slug: "rivalytics-api",
    title: {
        fr: "Rivalytics - Veille concurrentielle",
        en: "Rivalytics - Competitive Intelligence"
    },
    description: {
        fr: "Plateforme Node.js qui centralise l'authentification, la veille LinkedIn/YouTube et la gestion des cibles pour les équipes marketing.",
        en: "Node.js platform that centralizes authentication, LinkedIn/YouTube monitoring and target management for marketing teams."
    },
    longDescription: {
        fr: "Développement complet d'une API Express sécurisée pour Rivalytics : authentification JWT via cookies httpOnly, PostgreSQL auto-provisionné, et services de scraping orientés (LinkedIn, YouTube, Apify) afin d'alimenter une console de veille concurrentielle. L'architecture met l'accent sur la résilience côté back-end et les intégrations tierces (LinkedIn scraping, Apify, Google APIs).",
        en: "Complete development of a secure Express API for Rivalytics: JWT authentication via httpOnly cookies, auto-provisioned PostgreSQL, and oriented scraping services (LinkedIn, YouTube, Apify) to feed a competitive intelligence console. The architecture emphasizes backend resilience and third-party integrations (LinkedIn scraping, Apify, Google APIs)."
    },
    stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Apify", "YouTube API"],
    image: "/assets/projects/Rivalytics/rivalytics-titre.png",
    link: "https://rivalytics-1197d4646b8a.herokuapp.com/",
    problem: {
        fr: "L'équipe marketing n'avait aucun service fiable pour agréger en continu les posts LinkedIn et YouTube de leurs concurrents ni contrôler les accès utilisateurs.",
        en: "The marketing team had no reliable service to continuously aggregate competitors' LinkedIn and YouTube posts or control user access."
    },
    solution: {
        fr: "Mise en place d'une API Express modulaire avec CORS, rate limiting, cache et scrapers custom. Authentification via cookies JWT, schéma PostgreSQL provisionné au démarrage et connecteurs LinkedIn/YouTube encapsulés pour exposer des endpoints `/api` prêts à brancher côté front.",
        en: "Implementation of a modular Express API with CORS, rate limiting, cache and custom scrapers. Authentication via JWT cookies, PostgreSQL schema provisioned at startup and encapsulated LinkedIn/YouTube connectors to expose `/api` endpoints ready to plug into the frontend."
    },
    demoMedia: [
        { type: "image", src: "/assets/projects/Rivalytics/rivalytics-1.png", title: { fr: "Tableau de bord – Recherche Rivalytics", en: "Dashboard – Rivalytics Search" }, description: { fr: "Vue synthétique des performances LinkedIn de Dev First : publications, engagement et fréquence.", en: "Synthetic view of Dev First LinkedIn performance: publications, engagement and frequency." } },
        { type: "image", src: "/assets/projects/Rivalytics/rivalytics-2.png", title: { fr: "Insights de performance", en: "Performance Insights" }, description: { fr: "Visualisation de l'engagement par plateforme, évolution des publications et meilleur contenu identifié.", en: "Visualization of engagement by platform, publication evolution and best identified content." } },
        { type: "image", src: "/assets/projects/Rivalytics/rivalytics-3.png", title: { fr: "Contenus publiés – Historique LinkedIn", en: "Published Content – LinkedIn History" }, description: { fr: "Liste chronologique des posts LinkedIn analysés avec leurs dates et niveaux d'engagement.", en: "Chronological list of analyzed LinkedIn posts with dates and engagement levels." } }
    ]
};
