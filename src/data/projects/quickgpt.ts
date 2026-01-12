import type { ProjectBase } from "@/types";

export const quickgptProject: ProjectBase = {
    slug: "quickgpt-suite-salesforce",
    title: {
        fr: "QuickGPT – Suite d'assistants Salesforce",
        en: "QuickGPT – Salesforce AI Assistant Suite"
    },
    description: {
        fr: "Pack de composants LWC/Apex (Chat, Génération, Correction, Social) branchés sur OpenAI pour assister les équipes directement dans Salesforce.",
        en: "LWC/Apex component pack (Chat, Generation, Correction, Social) connected to OpenAI to assist teams directly in Salesforce."
    },
    longDescription: {
        fr: "QuickGPT regroupe cinq composants Salesforce centrés IA, chacun accessible depuis l'interface Lightning.\n\nLa suite s'appuie sur un socle commun (OpenAiHandler pour sécuriser les appels OpenAI) et expose des use cases précis : dialogue direct avec GPT, génération de messages commerciaux, réécriture d'activités, correction libre et production de contenus social media.",
        en: "QuickGPT brings together five AI-focused Salesforce components, each accessible from the Lightning interface.\n\nThe suite relies on a common foundation (OpenAiHandler to secure OpenAI calls) and exposes specific use cases: direct dialogue with GPT, sales message generation, activity rewriting, free correction and social media content production."
    },
    stack: ["Salesforce", "LWC", "Apex", "OpenAI"],
    image: "/assets/projects/quickgpt/quickgpt.png",
    problem: {
        fr: "Les équipes commerciales/support avaient besoin d'assistants IA directement dans Salesforce pour éviter les copier/coller vers des outils externes et garder la traçabilité CRM.",
        en: "Sales/support teams needed AI assistants directly in Salesforce to avoid copy/pasting to external tools and maintain CRM traceability."
    },
    solution: {
        fr: "1. Déployer un socle commun (OpenAiHandler) pour mutualiser les appels API.\n\n2. Construire cinq modules spécialisés : qGPT-Chat pour converser avec GPT, qGPT-GenerateText pour suggérer des messages LinkedIn/Emails depuis un Lead, qGPT-ImproveActivities pour réécrire les comptes-rendus Task/Event, qGPT-TextCorrector pour corriger tout texte libre et qGPT-Social pour générer posts LinkedIn/blog + images DALL·E.\n\n3. Exposer ces modules dans un pack App Builder afin que les équipes puissent les activer par objet/process sans code supplémentaire.",
        en: "1. Deploy a common foundation (OpenAiHandler) to pool API calls.\n\n2. Build five specialized modules: qGPT-Chat to converse with GPT, qGPT-GenerateText to suggest LinkedIn/Email messages from a Lead, qGPT-ImproveActivities to rewrite Task/Event reports, qGPT-TextCorrector to correct any free text and qGPT-Social to generate LinkedIn/blog posts + DALL·E images.\n\n3. Expose these modules in an App Builder pack so teams can activate them per object/process without additional code."
    },
    workflowsTitle: { fr: "Modules QuickGPT", en: "QuickGPT Modules" },
    workflowsIntro: {
        fr: "Chaque composant répond à un moment clé du cycle commercial ou support tout en partageant le même socle Apex/Prompts.",
        en: "Each component addresses a key moment in the sales or support cycle while sharing the same Apex/Prompts foundation."
    },
    workflows: [
        {
            name: { fr: "qGPT-Chat", en: "qGPT-Chat" },
            description: {
                fr: "Interface LWC simulant une messagerie : historique, rôles user/assistant, labels multilingues et réponses immédiates de GPT dans Salesforce.",
                en: "LWC interface simulating messaging: history, user/assistant roles, multilingual labels and immediate GPT responses in Salesforce."
            },
            tech: ["LWC", "OpenAiHandler"]
        },
        {
            name: { fr: "qGPT-GenerateText", en: "qGPT-GenerateText" },
            description: {
                fr: "Composant déployé sur les Leads pour générer des messages LinkedIn ou emails personnalisés en choisissant le canal, le ton et la langue.",
                en: "Component deployed on Leads to generate personalized LinkedIn messages or emails by choosing channel, tone and language."
            },
            tech: ["Lead UI", "Apex"]
        },
        {
            name: { fr: "qGPT-ImproveActivities", en: "qGPT-ImproveActivities" },
            description: {
                fr: "Bouton Task/Event qui reformule automatiquement les comptes-rendus avec un style professionnel grâce à des prompts préconfigurés.",
                en: "Task/Event button that automatically rephrases reports in a professional style using preconfigured prompts."
            },
            tech: ["Task/Event", "OpenAI", "Apex"]
        },
        {
            name: { fr: "qGPT-TextCorrector", en: "qGPT-TextCorrector" },
            description: {
                fr: "Éditeur universel où l'utilisateur colle son texte pour obtenir une correction ou une reformulation selon un ton défini (formel, direct, interne…).",
                en: "Universal editor where the user pastes their text to get a correction or rephrasing according to a defined tone (formal, direct, internal...)."
            },
            tech: ["Reusable LWC"]
        },
        {
            name: { fr: "qGPT-Social", en: "qGPT-Social" },
            description: {
                fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant automatiquement les données CRM grâce à des balises dynamiques.",
                en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by automatically merging CRM data using dynamic tags."
            },
            tech: ["DALL·E"]
        }
    ],
    demoMedia: [
        { type: "image", src: "/assets/projects/quickgpt/chat.png", title: { fr: "Composant qGPT-Chat", en: "qGPT-Chat Component" }, description: { fr: "Interface de chat LWC avec historique des messages et réponses GPT en temps réel.", en: "LWC chat interface with message history and real-time GPT responses." } },
        { type: "image", src: "/assets/projects/quickgpt/generateText-1.png", title: { fr: "Composant qGPT-GenerateText", en: "qGPT-GenerateText Component" }, description: { fr: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue.", en: "LinkedIn message or email generation from a Lead with tone and language selection." } },
        { type: "image", src: "/assets/projects/quickgpt/generateText-2.png", title: { fr: "Composant qGPT-GenerateText", en: "qGPT-GenerateText Component" }, description: { fr: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue.", en: "LinkedIn message or email generation from a Lead with tone and language selection." } },
        { type: "image", src: "/assets/projects/quickgpt/generateText-3.png", title: { fr: "Composant qGPT-GenerateText", en: "qGPT-GenerateText Component" }, description: { fr: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue.", en: "LinkedIn message or email generation from a Lead with tone and language selection." } },
        { type: "image", src: "/assets/projects/quickgpt/improveActivities-1.png", title: { fr: "Composant qGPT-ImproveActivities", en: "qGPT-ImproveActivities Component" }, description: { fr: "Reformulation automatique des comptes-rendus avec un style professionnel.", en: "Automatic report rephrasing in professional style." } },
        { type: "image", src: "/assets/projects/quickgpt/improveActivities-2.png", title: { fr: "Composant qGPT-ImproveActivities", en: "qGPT-ImproveActivities Component" }, description: { fr: "Reformulation automatique des comptes-rendus avec un style professionnel.", en: "Automatic report rephrasing in professional style." } },
        { type: "image", src: "/assets/projects/quickgpt/corrector-1.png", title: { fr: "Composant qGPT-TextCorrector", en: "qGPT-TextCorrector Component" }, description: { fr: "Éditeur universel pour correction et reformulation de texte selon un ton défini.", en: "Universal editor for text correction and rephrasing according to defined tone." } },
        { type: "image", src: "/assets/projects/quickgpt/corrector-2.png", title: { fr: "Composant qGPT-TextCorrector", en: "qGPT-TextCorrector Component" }, description: { fr: "Éditeur universel pour correction et reformulation de texte selon un ton défini.", en: "Universal editor for text correction and rephrasing according to defined tone." } },
        { type: "image", src: "/assets/projects/quickgpt/social-1.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } },
        { type: "image", src: "/assets/projects/quickgpt/social-2.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } },
        { type: "image", src: "/assets/projects/quickgpt/social-3.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } },
        { type: "image", src: "/assets/projects/quickgpt/social-4.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } }
    ]
};
