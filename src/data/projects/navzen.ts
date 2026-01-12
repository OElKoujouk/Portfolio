import type { ProjectBase } from "@/types";

export const navzenProject: ProjectBase = {
    slug: "navzen-projet-prime",
    title: {
        fr: "🏆 NavZen — Navigation Indoor",
        en: "🏆 NavZen — Indoor Navigation"
    },
    description: {
        fr: "Lauréat du prix \"Meilleure idée de l'année\" : une révolution dans la navigation indoor combinant la puissance de Rust, la flexibilité de React Native et l'immersion d'Unity.",
        en: "\"Best Idea of the Year\" award winner: a revolution in indoor navigation combining the power of Rust, the flexibility of React Native, and the immersion of Unity."
    },
    longDescription: {
        fr: "NavZen n'est pas qu'une simple application de guidage, c'est une prouesse technique récompensée par un jury d'experts. En fusionnant un moteur de calcul de position en Rust (trilatération BLE ultra-rapide) avec une interface React Native fluide et une visualisation 3D embarquée via Unity, nous avons créé l'expérience de navigation intérieure ultime. L'écosystème est piloté par une API Symfony robuste qui orchestre en temps réel la cartographie des bâtiments, les points d'intérêt et les flux utilisateurs.\n\n🚧 Projet actuellement en cours de développement (Prototype Avancé).",
        en: "NavZen is not just a guidance app, it is a technical feat awarded by a jury of experts. By merging a Rust positioning engine (ultra-fast BLE trilateration) with a fluid React Native interface and embedded 3D visualization via Unity, we have created the ultimate indoor navigation experience. The ecosystem is driven by a robust Symfony API that orchestrates building mapping, points of interest, and user flows in real-time.\n\n🚧 Project currently under active development (Advanced Prototype)."
    },
    stack: ["Rust", "React Native", "Unity", "Symfony", "BLE", "API REST", "TypeScript"],
    image: "/assets/projects/navzen/logo.png",
    problem: {
        fr: "Se perdre dans de vastes complexes (aéroports, hôpitaux, campus) est une source de frustration majeure. Les solutions existantes manquaient de précision, de fluidité ou nécessitaient une infrastructure trop lourde.",
        en: "Getting lost in large complexes (airports, hospitals, campuses) is a major source of frustration. Existing solutions lacked precision, fluidity, or required infrastructure that was too heavy."
    },
    solution: {
        fr: "Une architecture hybride innovante : l'application mobile calcule sa position en local via Rust pour une latence minimale, tandis que le module Unity offre une visualisation 3D intuitive. Le backend Symfony assure la cohérence des données et permet une administration simplifiée des cartes.",
        en: "An innovative hybrid architecture: the mobile app calculates its position locally via Rust for minimal latency, while the Unity module offers intuitive 3D visualization. The Symfony backend ensures data consistency and allows for simplified map administration."
    },
    demoMedia: [
        {
            type: "image",
            src: "/assets/projects/navzen/app-icon-rounded.png",
            title: { fr: "Icône de l'Application", en: "App Icon" },
            description: { fr: "Identité visuelle moderne et reconnaissable sur les stores.", en: "Modern and recognizable visual identity on stores." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/landing-web.png",
            title: { fr: "Site Vitrine", en: "Landing Page" },
            description: { fr: "Présentation web moderne pour promouvoir l'application et ses fonctionnalités.", en: "Modern web presentation to promote the app and its features." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-home.png",
            title: { fr: "Interface d'Accueil", en: "Home Interface" },
            description: { fr: "Design épuré et accès rapide aux fonctionnalités principales.", en: "Clean design and quick access to main features." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-building-select.png",
            title: { fr: "Sélection de Bâtiment", en: "Building Selection" },
            description: { fr: "Recherche intuitive et visualisation des complexes disponibles.", en: "Intuitive search and visualization of available complexes." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-favorites.png",
            title: { fr: "Lieux Favoris", en: "Favorite Places" },
            description: { fr: "Accès rapide aux destinations fréquentes pour un gain de temps.", en: "Quick access to frequent destinations to save time." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-profile.png",
            title: { fr: "Profil Utilisateur", en: "User Profile" },
            description: { fr: "Gestion personnalisée des préférences et de l'historique.", en: "Personalized management of preferences and history." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-settings.png",
            title: { fr: "Paramètres", en: "Settings" },
            description: { fr: "Configuration complète de l'expérience utilisateur.", en: "Complete configuration of the user experience." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-settings-language.png",
            title: { fr: "Internationalisation", en: "Internationalization" },
            description: { fr: "Support multilingue pour s'adapter à tous les visiteurs.", en: "Multilingual support to adapt to all visitors." }
        },
        {
            type: "image",
            src: "/assets/projects/navzen/app-help-support.png",
            title: { fr: "Aide & Support", en: "Help & Support" },
            description: { fr: "Documentation intégrée et assistance utilisateur.", en: "Integrated documentation and user assistance." }
        }
    ]
};
