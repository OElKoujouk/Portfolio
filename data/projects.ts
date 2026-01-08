import type { Locale } from "@/lib/i18n";

export type DemoMedia = {
  type: "image" | "video";
  src: string;
  title?: { fr: string; en: string };
  description?: { fr: string; en: string };
};

export type Workflow = {
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  tech?: string[];
};

export type TranslatedText = { fr: string; en: string };

export type ProjectBase = {
  slug: string;
  title: TranslatedText;
  description: TranslatedText;
  longDescription: TranslatedText;
  stack: string[];
  image: string;
  problem: TranslatedText;
  solution: TranslatedText;
  link?: string;
  demoMedia?: DemoMedia[];
  workflowsTitle?: TranslatedText;
  workflowsIntro?: TranslatedText;
  workflows?: Workflow[];
};

// Type pour un projet "résolu" dans une langue spécifique
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  problem: string;
  solution: string;
  link?: string;
  demoMedia?: { type: "image" | "video"; src: string; title?: string; description?: string }[];
  workflowsTitle?: string;
  workflowsIntro?: string;
  workflows?: { name: string; description: string; tech?: string[] }[];
};

export const projectsData: ProjectBase[] = [
  {
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
  },
  {
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
    image: "/assets/quickgpt/quickgpt.png",
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
      { type: "image", src: "/assets/quickgpt/chat.png", title: { fr: "Composant qGPT-Chat", en: "qGPT-Chat Component" }, description: { fr: "Interface de chat LWC avec historique des messages et réponses GPT en temps réel.", en: "LWC chat interface with message history and real-time GPT responses." } },
      { type: "image", src: "/assets/quickgpt/generateText-1.png", title: { fr: "Composant qGPT-GenerateText", en: "qGPT-GenerateText Component" }, description: { fr: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue.", en: "LinkedIn message or email generation from a Lead with tone and language selection." } },
      { type: "image", src: "/assets/quickgpt/generateText-2.png", title: { fr: "Composant qGPT-GenerateText", en: "qGPT-GenerateText Component" }, description: { fr: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue.", en: "LinkedIn message or email generation from a Lead with tone and language selection." } },
      { type: "image", src: "/assets/quickgpt/generateText-3.png", title: { fr: "Composant qGPT-GenerateText", en: "qGPT-GenerateText Component" }, description: { fr: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue.", en: "LinkedIn message or email generation from a Lead with tone and language selection." } },
      { type: "image", src: "/assets/quickgpt/improveActivities-1.png", title: { fr: "Composant qGPT-ImproveActivities", en: "qGPT-ImproveActivities Component" }, description: { fr: "Reformulation automatique des comptes-rendus avec un style professionnel.", en: "Automatic report rephrasing in professional style." } },
      { type: "image", src: "/assets/quickgpt/improveActivities-2.png", title: { fr: "Composant qGPT-ImproveActivities", en: "qGPT-ImproveActivities Component" }, description: { fr: "Reformulation automatique des comptes-rendus avec un style professionnel.", en: "Automatic report rephrasing in professional style." } },
      { type: "image", src: "/assets/quickgpt/corrector-1.png", title: { fr: "Composant qGPT-TextCorrector", en: "qGPT-TextCorrector Component" }, description: { fr: "Éditeur universel pour correction et reformulation de texte selon un ton défini.", en: "Universal editor for text correction and rephrasing according to defined tone." } },
      { type: "image", src: "/assets/quickgpt/corrector-2.png", title: { fr: "Composant qGPT-TextCorrector", en: "qGPT-TextCorrector Component" }, description: { fr: "Éditeur universel pour correction et reformulation de texte selon un ton défini.", en: "Universal editor for text correction and rephrasing according to defined tone." } },
      { type: "image", src: "/assets/quickgpt/social-1.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } },
      { type: "image", src: "/assets/quickgpt/social-2.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } },
      { type: "image", src: "/assets/quickgpt/social-3.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } },
      { type: "image", src: "/assets/quickgpt/social-4.png", title: { fr: "Composant qGPT-Social", en: "qGPT-Social Component" }, description: { fr: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM.", en: "Marketing assistant to generate LinkedIn/blog posts and DALL·E visuals by merging CRM data." } }
    ]
  },
  {
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
  },
  {
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
    image: "/assets/Rivalytics/rivalytics-titre.png",
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
      { type: "image", src: "/assets/Rivalytics/rivalytics-1.png", title: { fr: "Tableau de bord – Recherche Rivalytics", en: "Dashboard – Rivalytics Search" }, description: { fr: "Vue synthétique des performances LinkedIn de Dev First : publications, engagement et fréquence.", en: "Synthetic view of Dev First LinkedIn performance: publications, engagement and frequency." } },
      { type: "image", src: "/assets/Rivalytics/rivalytics-2.png", title: { fr: "Insights de performance", en: "Performance Insights" }, description: { fr: "Visualisation de l'engagement par plateforme, évolution des publications et meilleur contenu identifié.", en: "Visualization of engagement by platform, publication evolution and best identified content." } },
      { type: "image", src: "/assets/Rivalytics/rivalytics-3.png", title: { fr: "Contenus publiés – Historique LinkedIn", en: "Published Content – LinkedIn History" }, description: { fr: "Liste chronologique des posts LinkedIn analysés avec leurs dates et niveaux d'engagement.", en: "Chronological list of analyzed LinkedIn posts with dates and engagement levels." } }
    ]
  },
  {
    slug: "linkedin-to-salesforce-extension",
    title: {
      fr: "Extension LinkedIn vers Salesforce",
      en: "LinkedIn to Salesforce Extension"
    },
    description: {
      fr: "Extension Chrome qui scrape un profil LinkedIn et génère instantanément un Lead ou un Contact Salesforce pré-rempli.",
      en: "Chrome extension that scrapes a LinkedIn profile and instantly generates a pre-filled Salesforce Lead or Contact."
    },
    longDescription: {
      fr: "Conception d'une extension Chrome (MV3) pour les équipes sales DevFirst: injection d'un bouton dans l'UI LinkedIn, scraping robuste (spinner, retries) et mapping dynamique vers Salesforce. L'agent de fond orchestre capture écran, parsing des emails et création de Leads/Contacts via des defaultFieldValues, le tout configurable depuis une page Options (instance Salesforce, mapping des champs).",
      en: "Design of a Chrome extension (MV3) for DevFirst sales teams: button injection into LinkedIn UI, robust scraping (spinner, retries) and dynamic mapping to Salesforce. The background agent orchestrates screen capture, email parsing and Lead/Contact creation via defaultFieldValues, all configurable from an Options page (Salesforce instance, field mapping)."
    },
    stack: ["Chrome Extension", "JavaScript", "Salesforce", "HTML/CSS", "chrome.scripting", "Fetch API"],
    image: "/assets/extension/extension.png",
    problem: {
      fr: "Les SDR passaient plusieurs minutes à copier/coller les infos LinkedIn dans Salesforce et perdaient souvent des champs (email, localisation, civilité).",
      en: "SDRs spent several minutes copying/pasting LinkedIn info into Salesforce and often lost fields (email, location, salutation)."
    },
    solution: {
      fr: "Injecter un bouton LinkedIn -> Salesforce, scraper le DOM et les overlays contact-info, deviner la civilité via Genderize.io puis ouvrir Salesforce avec les champs auto-remplis. Une page Options permet de mapper les champs SF, définir l'instance et réexécuter rapidement la création de Lead/Contact.",
      en: "Inject a LinkedIn -> Salesforce button, scrape the DOM and contact-info overlays, guess salutation via Genderize.io then open Salesforce with auto-filled fields. An Options page allows mapping SF fields, setting the instance and quickly re-executing Lead/Contact creation."
    },
    demoMedia: [
      { type: "image", src: "/assets/extension/capture.png", title: { fr: "Bouton capture LinkedIn", en: "LinkedIn Capture Button" }, description: { fr: "CTA inséré dans la top-card LinkedIn pour lancer la création Salesforce.", en: "CTA inserted in LinkedIn top-card to launch Salesforce creation." } }
    ]
  },
  {
    slug: "n8n-automation-suite",
    title: {
      fr: "n8n Automation Suite",
      en: "n8n Automation Suite"
    },
    description: {
      fr: "Suite de 5 workflows n8n qui orchestrent idéation LinkedIn, amélioration de posts, génération d'images, scraping de prospects et multi-agents IA reliés à Notion.",
      en: "Suite of 5 n8n workflows that orchestrate LinkedIn ideation, post improvement, image generation, prospect scraping and multi-agent AI connected to Notion."
    },
    longDescription: {
      fr: "Mise en place d'une plateforme n8n connectée à Google Drive, Notion, OpenAI et Google Custom Search. L'objectif: couvrir tout le cycle social media/prospection en automatisant l'idéation, la rédaction, la création d'assets, la collecte de prospects LinkedIn et la coordination d'agents IA (CEO, PO, Dev). Chaque scénario est versionné, monitorable et déployé depuis un même espace.",
      en: "Implementation of an n8n platform connected to Google Drive, Notion, OpenAI and Google Custom Search. The goal: cover the entire social media/prospecting cycle by automating ideation, writing, asset creation, LinkedIn prospect collection and AI agent coordination (CEO, PO, Dev). Each scenario is versioned, monitorable and deployed from the same space."
    },
    stack: ["n8n", "Notion API", "Google Drive", "Google Sheets", "OpenAI", "Google Custom Search"],
    image: "/assets/n8n/logo.png",
    problem: {
      fr: "La team content devait jongler entre Drive, Notion, prompts OpenAI et feuilles Google pour idéer, produire et suivre les posts LinkedIn tout en nourrissant la prospection.",
      en: "The content team had to juggle between Drive, Notion, OpenAI prompts and Google sheets to ideate, produce and track LinkedIn posts while feeding prospecting."
    },
    solution: {
      fr: "Industrialiser le pipeline via n8n : déclencheurs Drive/Notion, prompts spécialisés, stockage dans Notion/Sheets et agents IA coordonnés. Les 5 workflows couvrent idéation, amélioration, génération d'images, scraping de prospects et multi-agents CEO/PO/Dev pour créer specs et code.",
      en: "Industrialize the pipeline via n8n: Drive/Notion triggers, specialized prompts, storage in Notion/Sheets and coordinated AI agents. The 5 workflows cover ideation, improvement, image generation, prospect scraping and multi-agent CEO/PO/Dev to create specs and code."
    },
    workflows: [
      { name: { fr: "1 - Idéation Drive -> Notion", en: "1 - Drive -> Notion Ideation" }, description: { fr: "Surveillance d'un dossier Google Drive. Chaque image/PDF est téléchargé, archivé, analysé (GPT-4o/GPT-3.5) puis crée une idée de post dans Notion avec title/seed et coche 'Améliorer Post'. Alimente directement les workflows 2 et 3.", en: "Monitoring a Google Drive folder. Each image/PDF is downloaded, archived, analyzed (GPT-4o/GPT-3.5) then creates a post idea in Notion with title/seed and checks 'Improve Post'. Directly feeds workflows 2 and 3." }, tech: ["Google Drive Trigger", "OpenAI GPT-4o", "Notion"] },
      { name: { fr: "2 - Améliorer un post depuis Notion", en: "2 - Improve Post from Notion" }, description: { fr: "Trigger Notion sur les cases 'Améliorer Post', récupération du contenu + images, prompt long-form copywriting, insertion du post final dans la page, mise à jour du statut et backup du texte source. Workflow déclenché par le #1 et prépare le contenu pour le #3.", en: "Notion trigger on 'Improve Post' checkboxes, content + images retrieval, long-form copywriting prompt, final post insertion in page, status update and source text backup. Workflow triggered by #1 and prepares content for #3." }, tech: ["Notion Trigger", "OpenAI GPT-5", "Agent Tool"] },
      { name: { fr: "3 - Générer des visuels DALL·E", en: "3 - Generate DALL·E Visuals" }, description: { fr: "Pages Notion cochées 'Générer Image Post' -> extraction du texte, request DALL·E 3, injection du visuel en file dans Notion puis reset de la checkbox. S'appuie sur les posts enrichis par les workflows 1 & 2.", en: "Notion pages checked 'Generate Image Post' -> text extraction, DALL·E 3 request, visual injection in Notion queue then checkbox reset. Relies on posts enriched by workflows 1 & 2." }, tech: ["Notion", "OpenAI Images API"] },
      { name: { fr: "LinkedIn Scraper", en: "LinkedIn Scraper" }, description: { fr: "Chat Trigger -> Google Custom Search (site:linkedin.com/in), dédupe, pagination et push dans Google Sheets 'Donnée LinkedIn Scrapée' avec nom, titre, snippet et thumbnail.", en: "Chat Trigger -> Google Custom Search (site:linkedin.com/in), dedupe, pagination and push to Google Sheets 'Scraped LinkedIn Data' with name, title, snippet and thumbnail." }, tech: ["LangChain Chat Trigger", "Google Custom Search", "Google Sheets"] },
      { name: { fr: "Multi Agents CEO/PO/Dev", en: "Multi Agents CEO/PO/Dev" }, description: { fr: "Agent CEO route la demande vers un agent Product Owner (user stories + Notion page) puis un agent Dev (code JSON Title/Code/Explanation). Mémoire buffer et règles strictes garantissent une page Notion + code par run.", en: "CEO Agent routes the request to a Product Owner agent (user stories + Notion page) then a Dev agent (JSON code Title/Code/Explanation). Buffer memory and strict rules guarantee a Notion page + code per run." }, tech: ["LangChain Agents", "OpenAI GPT-4.1", "Notion Tool"] }
    ],
    demoMedia: [
      { type: "image", src: "/assets/n8n/1-ideation-drive-notion.png", title: { fr: "1 - Idéation Drive -> Notion", en: "1 - Drive -> Notion Ideation" }, description: { fr: "Surveillance d'un dossier Drive, analyse des fichiers et création d'idées de posts dans Notion.", en: "Drive folder monitoring, file analysis and post idea creation in Notion." } },
      { type: "image", src: "/assets/n8n/2-ameliorer-post-notion.png", title: { fr: "2 - Améliorer un post depuis Notion", en: "2 - Improve Post from Notion" }, description: { fr: "Trigger Notion, prompt long-form copywriting et insertion du post final dans la page.", en: "Notion trigger, long-form copywriting prompt and final post insertion in page." } },
      { type: "image", src: "/assets/n8n/3-automatisation-image-to-notion.png", title: { fr: "3 - Générer des visuels DALL·E", en: "3 - Generate DALL·E Visuals" }, description: { fr: "Pages Notion cochées 'Générer Image Post' -> request DALL·E 3 -> injection du visuel en file dans Notion.", en: "Notion pages checked 'Generate Image Post' -> DALL·E 3 request -> visual injection in Notion queue." } },
      { type: "image", src: "/assets/n8n/linkedin-scraper.png", title: { fr: "LinkedIn Scraper", en: "LinkedIn Scraper" }, description: { fr: "Chat Trigger -> Google Custom Search -> push dans Google Sheets 'Donnée LinkedIn Scrapée'.", en: "Chat Trigger -> Google Custom Search -> push to Google Sheets 'Scraped LinkedIn Data'." } }
    ]
  },
  {
    slug: "gestion-stock-multi-tenant",
    title: {
      fr: "Application de gestion de stock multi-tenant",
      en: "Multi-tenant Inventory Management Application"
    },
    description: {
      fr: "Système complet de gestion de stock multi-établissements avec architecture Express/Prisma et interface Next.js 16. Gestion des rôles, permissions granulaires, workflows de validation et CI/CD Docker.",
      en: "Complete multi-establishment inventory management system with Express/Prisma architecture and Next.js 16 interface. Role management, granular permissions, validation workflows and Docker CI/CD."
    },
    longDescription: {
      fr: "Application de gestion de stock conçue pour gérer plusieurs établissements de manière isolée (multi-tenant). Le système permet de suivre les articles, catégories, mouvements de stock, demandes internes et commandes fournisseurs avec un système de rôles et permissions avancé.\n\nL'architecture sépare clairement le backend (Express + TypeScript, Prisma + MySQL) et le frontend (Next.js 16 + React 19). Chaque établissement dispose de son propre espace de données isolé, avec des rôles hiérarchiques : superadmin (gestion globale), admin (gestion d'établissement), responsable (validation des demandes) et agent (création de demandes).\n\nLe système inclut un workflow complet de gestion des demandes internes avec validation, un système de commandes fournisseurs avec réception, et une traçabilité complète via les mouvements de stock. La sécurité est assurée par JWT, middleware d'authentification et permissions granulaires stockées en JSON.",
      en: "Inventory management application designed to manage multiple establishments in isolation (multi-tenant). The system tracks items, categories, stock movements, internal requests and supplier orders with an advanced role and permission system.\n\nThe architecture clearly separates backend (Express + TypeScript, Prisma + MySQL) and frontend (Next.js 16 + React 19). Each establishment has its own isolated data space, with hierarchical roles: superadmin (global management), admin (establishment management), manager (request validation) and agent (request creation).\n\nThe system includes a complete internal request management workflow with validation, a supplier order system with reception, and complete traceability via stock movements. Security is ensured by JWT, authentication middleware and granular permissions stored in JSON."
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Express", "Prisma", "MySQL", "JWT", "Tailwind CSS v4", "Docker", "CI/CD"],
    image: "/assets/gestion-stock/connexion.png",
    link: "https://logifly.fr",
    problem: {
      fr: "Les établissements avaient besoin d'un système centralisé pour gérer leurs stocks tout en conservant une isolation complète des données entre sites. Les solutions existantes ne permettaient pas une gestion multi-tenant avec des rôles et permissions granulaires, ni un workflow de validation des demandes adapté aux besoins métier.",
      en: "Establishments needed a centralized system to manage their stocks while maintaining complete data isolation between sites. Existing solutions did not allow multi-tenant management with granular roles and permissions, nor a request validation workflow adapted to business needs."
    },
    solution: {
      fr: "Conception d'une architecture multi-tenant avec isolation des données par établissement via Prisma. Implémentation d'un système de rôles hiérarchique (superadmin, admin, responsable, agent) avec permissions JSON granulaires. Création d'un workflow de demandes internes avec validation par les responsables, gestion des commandes fournisseurs avec réception et mise à jour automatique des stocks via les mouvements. L'interface Next.js offre une expérience utilisateur moderne avec navigation par sections selon le rôle, tandis que le backend Express expose une API REST sécurisée avec middleware d'authentification et de tenant.",
      en: "Design of a multi-tenant architecture with data isolation per establishment via Prisma. Implementation of a hierarchical role system (superadmin, admin, manager, agent) with granular JSON permissions. Creation of an internal request workflow with manager validation, supplier order management with reception and automatic stock updates via movements. The Next.js interface offers a modern user experience with section navigation by role, while the Express backend exposes a secure REST API with authentication and tenant middleware."
    },
    workflowsTitle: { fr: "Modules principaux", en: "Main Modules" },
    workflowsIntro: {
      fr: "L'application se structure autour de plusieurs modules métier, chacun adapté aux besoins spécifiques des différents rôles utilisateurs.",
      en: "The application is structured around several business modules, each adapted to the specific needs of different user roles."
    },
    workflows: [
      { name: { fr: "Gestion multi-établissements", en: "Multi-establishment Management" }, description: { fr: "Le superadmin peut créer et gérer plusieurs établissements, chacun avec son propre espace de données isolé. Chaque établissement possède ses propres articles, catégories, utilisateurs, fournisseurs et mouvements de stock.", en: "The superadmin can create and manage multiple establishments, each with its own isolated data space. Each establishment has its own items, categories, users, suppliers and stock movements." }, tech: ["Prisma", "Multi-tenant", "Middleware tenant"] },
      { name: { fr: "Gestion des stocks", en: "Stock Management" }, description: { fr: "Les admins et responsables peuvent créer des articles, les organiser en catégories, définir des seuils d'alerte et suivre les quantités en temps réel. Les mouvements de stock (entrées/sorties) sont tracés avec utilisateur, date et commentaire.", en: "Admins and managers can create items, organize them in categories, set alert thresholds and track quantities in real-time. Stock movements (entries/exits) are tracked with user, date and comment." }, tech: ["Prisma", "MySQL", "Stock movements"] },
      { name: { fr: "Workflow de demandes internes", en: "Internal Request Workflow" }, description: { fr: "Les agents créent des demandes de produits avec référence unique. Les responsables peuvent valider, modifier ou refuser ces demandes. La validation déclenche automatiquement des mouvements de sortie de stock pour les articles préparés.", en: "Agents create product requests with unique reference. Managers can validate, modify or reject these requests. Validation automatically triggers stock exit movements for prepared items." }, tech: ["Workflow", "Validation", "Automatic movements"] },
      { name: { fr: "Commandes fournisseurs", en: "Supplier Orders" }, description: { fr: "Les admins et responsables créent des commandes auprès des fournisseurs avec statut (en cours, reçue). La réception d'une commande génère automatiquement des mouvements d'entrée de stock pour tous les articles commandés.", en: "Admins and managers create orders to suppliers with status (in progress, received). Receiving an order automatically generates stock entry movements for all ordered items." }, tech: ["Orders", "Suppliers", "Automatic reception"] },
      { name: { fr: "Gestion des utilisateurs et permissions", en: "User and Permission Management" }, description: { fr: "Système de permissions granulaires stocké en JSON permettant de définir précisément les droits de chaque utilisateur (lecture, écriture, suppression par module). Les admins peuvent activer/désactiver des comptes et assigner des rôles.", en: "Granular permission system stored in JSON allowing precise definition of each user's rights (read, write, delete per module). Admins can enable/disable accounts and assign roles." }, tech: ["JSON Permissions", "Roles", "Enable/disable"] }
    ],
    demoMedia: [
      { type: "image", src: "/assets/gestion-stock/dashboard.png", title: { fr: "Vue d'ensemble du dashboard", en: "Dashboard Overview" }, description: { fr: "Interface principale avec sidebar et navigation par sections selon le rôle utilisateur.", en: "Main interface with sidebar and section navigation by user role." } },
      { type: "image", src: "/assets/gestion-stock/produits.png", title: { fr: "Gestion des produits et stocks", en: "Product and Stock Management" }, description: { fr: "Interface de gestion des articles avec catégories, quantités, seuils d'alerte et filtres avancés.", en: "Item management interface with categories, quantities, alert thresholds and advanced filters." } },
      { type: "image", src: "/assets/gestion-stock/demande-agent.png", title: { fr: "Création de demande (vue agent)", en: "Request Creation (agent view)" }, description: { fr: "Formulaire de création de demande avec sélection d'articles, quantités et système de favoris.", en: "Request creation form with item selection, quantities and favorites system." } },
      { type: "image", src: "/assets/gestion-stock/validation-responsable.png", title: { fr: "Validation des demandes (vue responsable)", en: "Request Validation (manager view)" }, description: { fr: "Interface de validation avec liste des demandes, détails des articles et actions de validation/modification/refus.", en: "Validation interface with request list, item details and validation/modification/rejection actions." } },
      { type: "image", src: "/assets/gestion-stock/commandes-fournisseurs.png", title: { fr: "Gestion des commandes fournisseurs", en: "Supplier Order Management" }, description: { fr: "Création et suivi des commandes fournisseurs avec catalogue, sélection d'articles et processus de réception.", en: "Supplier order creation and tracking with catalog, item selection and reception process." } }
    ]
  }
];

// Helper pour résoudre un projet dans une langue spécifique
function resolveText(text: TranslatedText | undefined, locale: Locale): string {
  if (!text) return "";
  return text[locale] || text.fr;
}

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

export function getProjects(locale: Locale): Project[] {
  return projectsData.map((p) => resolveProject(p, locale));
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return undefined;
  return resolveProject(project, locale);
}

export function getProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

// Rétrocompatibilité - projets en français par défaut
export const projects: Project[] = getProjects("fr");
