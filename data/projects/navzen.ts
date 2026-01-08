import type { ProjectBase } from "@/types";

export const navzenProject: ProjectBase = {
    slug: "navzen-projet-prime",
    title: {
        fr: "🏆 NavZen – Projet primé ETNA",
        en: "🏆 NavZen – ETNA Award-winning Project"
    },
    description: {
        fr: "Lauréat du prix \"Meilleure idée de l'année\" : appli mobile de navigation intérieure qui mixe React Native, Rust et Unity.",
        en: "\"Best Idea of the Year\" award winner: indoor navigation mobile app combining React Native, Rust and Unity."
    },
    longDescription: {
        fr: "Projet de fin d'études ETNA récompensé par un jury professionnel pour son approche hybride hardware/software. NavZen combine une appli React Native pour guider les visiteurs, un moteur de calcul Rust pour la trilatération BLE et une carte 3D Unity embarquée. L'ensemble est orchestré via une API Symfony qui centralise bâtiments, points d'intérêt et profils utilisateurs.",
        en: "ETNA final year project awarded by a professional jury for its hybrid hardware/software approach. NavZen combines a React Native app to guide visitors, a Rust computation engine for BLE trilateration and an embedded Unity 3D map. Everything is orchestrated via a Symfony API that centralizes buildings, points of interest and user profiles."
    },
    stack: ["Rust", "React Native", "Unity", "Symfony", "BLE", "API REST"],
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80",
    problem: {
        fr: "Les visiteurs perdent du temps à s'orienter dans les bâtiments vastes et aucun outil ne proposait une navigation indoor précise ni un back-office simple à administrer.",
        en: "Visitors waste time finding their way in large buildings and no tool offered precise indoor navigation or a simple back-office to administer."
    },
    solution: {
        fr: "Conception d'une solution temps réel : appli mobile (auth, recherche de bâtiments/POI), moteur Rust pour calculer le chemin via trilatération BLE, rendu 3D interactif Unity intégré dans l'app et API Symfony/REST pour gérer l'inventaire des bâtiments, des points d'intérêt et des balises.",
        en: "Design of a real-time solution: mobile app (auth, building/POI search), Rust engine to calculate paths via BLE trilateration, interactive Unity 3D rendering embedded in the app and Symfony/REST API to manage the inventory of buildings, points of interest and beacons."
    },
    demoMedia: [
        {
            type: "image",
            src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80",
            title: { fr: "Prototype NavZen", en: "NavZen Prototype" },
            description: { fr: "Écrans React Native avec la carte Unity embarquée.", en: "React Native screens with embedded Unity map." }
        }
    ]
};
