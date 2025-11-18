export type DemoMedia = {
  type: "image" | "video";
  src: string;
  title?: string;
  description?: string;
};

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
  demoMedia?: DemoMedia[];
  workflowsTitle?: string;
  workflowsIntro?: string;
  workflows?: {
    name: string;
    description: string;
    tech?: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "navzen-projet-prime",
    title: "🏆 NavZen – Projet primé ETNA",
    description:
      "Lauréat du prix \"Meilleure idée de l’année\" : appli mobile de navigation intérieure qui mixe React Native, Rust et Unity.",
    longDescription:
      "Projet de fin d'études ETNA récompensé par un jury professionnel pour son approche hybride hardware/software. NavZen combine une appli React Native pour guider les visiteurs, un moteur de calcul Rust pour la trilatération BLE et une carte 3D Unity embarquée. L'ensemble est orchestré via une API Symfony qui centralise bâtiments, points d'intérêt et profils utilisateurs.",
    stack: ["Rust", "React Native", "Unity", "Symfony", "BLE", "API REST"],
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    problem:
      "Les visiteurs perdent du temps à s'orienter dans les bâtiments vastes et aucun outil ne proposait une navigation indoor précise ni un back-office simple à administrer.",
    solution:
      "Conception d'une solution temps réel : appli mobile (auth, recherche de bâtiments/POI), moteur Rust pour calculer le chemin via trilatération BLE, rendu 3D interactif Unity intégré dans l'app et API Symfony/REST pour gérer l'inventaire des bâtiments, des points d'intérêt et des balises.",
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
        title: "Prototype NavZen",
        description: "Écrans React Native avec la carte Unity embarquée."
      }
    ]
  },
  {
    slug: "quickgpt-suite-salesforce",
    title: "QuickGPT – Suite d’assistants Salesforce",
    description:
      "Pack de composants LWC/Apex (Chat, Génération, Correction, Social) branchés sur OpenAI pour assister les équipes directement dans Salesforce.",
    longDescription:
      "QuickGPT regroupe cinq composants Salesforce centrés IA, chacun accessible depuis l’interface Lightning.\n\nLa suite s’appuie sur un socle commun (OpenAiHandler pour sécuriser les appels OpenAI, LogUtils pour tracer les échanges, PromptGPT__c pour stocker les prompts multilingues) et expose des use cases précis : dialogue direct avec GPT, génération de messages commerciaux, réécriture d’activités, correction libre et production de contenus social media.",
    stack: ["Salesforce", "LWC", "Apex", "OpenAI", "PromptGPT__c", "LogUtils"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
    problem:
      "Les équipes commerciales/support avaient besoin d’assistants IA directement dans Salesforce pour éviter les copier/coller vers des outils externes et garder la traçabilité CRM.",
    solution:
      "1. Déployer un socle commun (OpenAiHandler + LogUtils + PromptGPT__c) pour mutualiser les appels API, les logs et les prompts.\n\n2. Construire cinq modules spécialisés : qGPT-Chat pour converser avec GPT, qGPT-GenerateText pour suggérer des messages LinkedIn/Emails depuis un Lead, qGPT-ImproveActivities pour réécrire les comptes-rendus Task/Event, qGPT-TextCorrector pour corriger tout texte libre et qGPT-Social pour générer posts LinkedIn/blog + images DALL·E.\n\n3. Exposer ces modules dans un pack App Builder afin que les équipes puissent les activer par objet/process sans code supplémentaire.",
    workflowsTitle: "Modules QuickGPT",
    workflowsIntro:
      "Chaque composant répond à un moment clé du cycle commercial ou support tout en partageant le même socle Apex/Prompts/Logs.",
    workflows: [
      {
        name: "qGPT-Chat",
        description:
          "Interface LWC simulant une messagerie : historique, rôles user/assistant, labels multilingues et réponses immédiates de GPT dans Salesforce.",
        tech: ["LWC", "OpenAiHandler", "LogUtils"]
      },
      {
        name: "qGPT-GenerateText",
        description:
          "Composant déployé sur les Leads pour générer des messages LinkedIn ou emails personnalisés en choisissant le canal, le ton et la langue via PromptGPT__c.",
        tech: ["PromptGPT__c", "Lead UI", "Apex"]
      },
      {
        name: "qGPT-ImproveActivities",
        description:
          "Bouton Task/Event qui reformule automatiquement les comptes-rendus avec un style professionnel grâce à des prompts préconfigurés.",
        tech: ["Task/Event", "OpenAI", "Apex"]
      },
      {
        name: "qGPT-TextCorrector",
        description:
          "Éditeur universel où l’utilisateur colle son texte pour obtenir une correction ou une reformulation selon un ton défini (formel, direct, interne…).",
        tech: ["Reusable LWC", "PromptGPT__c"]
      },
      {
        name: "qGPT-Social",
        description:
          "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant automatiquement les données CRM grâce à des balises dynamiques.",
        tech: ["DALL·E", "ContentGPT__c", "Merge Tags"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
        title: "Dashboard QuickGPT",
        description: "Vue des composants LWC intégrés aux fiches Salesforce (Chat, Generate, Improve, TextCorrector, Social)."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/1H-vSHVOxo8",
        title: "Workflow QuickGPT",
        description: "Démonstration : question qGPT-Chat, génération LinkedIn, amélioration d’activité et post social."
      }
    ]
  },
  {
    slug: "refonte-wordpress",
    title: "Refonte WordPress & intégration Agentforce",
    description:
      "Refonte du site WordPress (Elementor) de Dev First avec un agent Agentforce brandé Salesforce intégré côté front.",
    longDescription:
      "Refonte complète de dev-first.com sous WordPress + Elementor puis intégration d'un agent conversationnel Agentforce relié à Salesforce. Le bot récupère la base de connaissances Trailhead/FAQ, respecte le branding (logo, couleurs, avatar) et expose des topics/actions personnalisés (prise de RDV, push de leads). L'objectif est de transformer une vitrine classique en un outil de génération de business traçable dans Salesforce avec suivi des conversations.",
    stack: ["WordPress", "Elementor", "Salesforce", "Agentforce", "JavaScript"],
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80",
    problem:
      "Dev First disposait d'un site vitrine peu interactif et aucune capture conversationnelle des prospects malgré son écosystème Salesforce.",
    solution:
      "Création de pages Elementor optimisées SEO + ajout d'un widget Agentforce connecté à Salesforce (topics, actions custom, branding complet). L'agent répond instantanément, peut créer des leads, prendre des rendez-vous ou pousser une documentation contextualisée, tout en loggant chaque conversation côté CRM.",
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
        title: "Agentforce intégré",
        description: "Vue du widget Agentforce brandé Dev First sur la landing Elementor."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Démonstration WordPress + Agentforce",
        description: "Parcours complet : question client, création de lead, logging dans Salesforce."
      }
    ]
  },
  {
    slug: "rivalytics-api",
    title: "Rivalytics - Veille concurrentielle",
    description:
      "Plateforme Node.js qui centralise l'authentification, la veille LinkedIn/YouTube et la gestion des cibles pour les equipes marketing.",
    longDescription:
      "Developpement complet d'une API Express securisee pour Rivalytics : authentification JWT via cookies httpOnly, PostgreSQL auto-provisionne, et services de scraping orientes (LinkedIn, YouTube, Apify) afin d'alimenter une console de veille concurrentielle. L'architecture met l'accent sur la resilience cote back-end et les integrations tierces (LinkedIn scraping, Apify, Google APIs).",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Apify",
      "YouTube API"
    ],
    image: "/assets/Rivalytics/rivalytics-titre.png",
    problem:
      "L'equipe marketing n'avait aucun service fiable pour agreger en continu les posts LinkedIn et YouTube de leurs concurrents ni controler les acces utilisateurs.",
    solution:
      "Mise en place d'une API Express modulaire avec CORS, rate limiting, cache et scrapers custom. Authentification via cookies JWT, schema PostgreSQL provisionne au demarrage et connecteurs LinkedIn/YouTube encapsules pour exposer des endpoints `/api` prets a brancher cote front.",
    demoMedia: [
      {
        type: "image",
        src: "/assets/Rivalytics/rivalytics-1.png",
        title: "Tableau de bord – Recherche Rivalytics",
        description: "Vue synthétique des performances LinkedIn de Dev First : publications, engagement et fréquence."
      },
      {
        type: "image",
        src: "/assets/Rivalytics/rivalytics-2.png",
        title: "Insights de performance",
        description: "Visualisation de l’engagement par plateforme, évolution des publications et meilleur contenu identifié."
      },
      {
        type: "image",
        src: "/assets/Rivalytics/rivalytics-3.png",
        title: "Contenus publiés – Historique LinkedIn",
        description: "Liste chronologique des posts LinkedIn analysés avec leurs dates et niveaux d’engagement."
      }
    ]
  },
  {
    slug: "linkedin-to-salesforce-extension",
    title: "Extension LinkedIn vers Salesforce",
    description:
      "Extension Chrome qui scrape un profil LinkedIn et genere instantanement un Lead ou un Contact Salesforce pre-rempli.",
    longDescription:
      "Conception d'une extension Chrome (MV3) pour les equipes sales DevFirst: injection d'un bouton dans l'UI LinkedIn, scraping robuste (spinner, retries) et mapping dynamique vers Salesforce. L'agent de fond orchestre capture ecran, parsing des emails et creation de Leads/Contacts via des defaultFieldValues, le tout configurable depuis une page Options (instance Salesforce, mapping des champs).",
    stack: [
      "Chrome Extension",
      "JavaScript",
      "Salesforce",
      "HTML/CSS",
      "chrome.scripting",
      "Fetch API"
    ],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    problem:
      "Les SDR passaient plusieurs minutes a copier/coller les infos LinkedIn dans Salesforce et perdaient souvent des champs (email, localisation, civilite).",
    solution:
      "Injecter un bouton LinkedIn -> Salesforce, scraper le DOM et les overlays contact-info, deviner la civilite via Genderize.io puis ouvrir Salesforce avec les champs auto-remplis. Une page Options permet de mapper les champs SF, definir l'instance et reexecuter rapidement la creation de Lead/Contact.",
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
        title: "Bouton capture LinkedIn",
        description: "CTA insere dans la top-card LinkedIn pour lancer la creation Salesforce."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/6ZgQ3G1S3wE",
        title: "Demo workflow",
        description: "Video montrant le scraping, la popup et l'ouverture de la page Salesforce avec defaultFieldValues."
      }
    ]
  },
  {
    slug: "n8n-automation-suite",
    title: "n8n Automation Suite",
    description:
      "Suite de 5 workflows n8n qui orchestrent ideation LinkedIn, amelioration de posts, generation d'images, scraping de prospects et multi-agents IA relies a Notion.",
    longDescription:
      "Mise en place d'une plateforme n8n connectee a Google Drive, Notion, OpenAI et Google Custom Search. L'objectif: couvrir tout le cycle social media/prospection en automatisant l'ideation, la redaction, la creation d'assets, la collecte de prospects LinkedIn et la coordination d'agents IA (CEO, PO, Dev). Chaque scenario est versionne, monitorable et deploye depuis un meme espace.",
    stack: [
      "n8n",
      "Notion API",
      "Google Drive",
      "Google Sheets",
      "OpenAI",
      "Google Custom Search"
    ],
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80",
    problem:
      "La team content devait jongler entre Drive, Notion, prompts OpenAI et feuilles Google pour ideer, produire et suivre les posts LinkedIn tout en nourrissant la prospection.",
    solution:
      "Industrialiser le pipeline via n8n : declencheurs Drive/Notion, prompts specialises, stockage dans Notion/Sheets et agents IA coordonnes. Les 5 workflows couvrent ideation, amelioration, generation d'images, scraping de prospects et multi-agents CEO/PO/Dev pour creer specs et code.",
    workflows: [
      {
        name: "1 - Ideation Drive -> Notion",
        description:
          "Surveillance d'un dossier Google Drive. Chaque image/PDF est telecharge, archive, analyse (GPT-4o/GPT-3.5) puis cree une idee de post dans Notion avec title/seed et coche 'Ameliorer Post'. Alimente directement les workflows 2 et 3.",
        tech: ["Google Drive Trigger", "OpenAI GPT-4o", "Notion"]
      },
      {
        name: "2 - Ameliorer un post depuis Notion",
        description:
          "Trigger Notion sur les cases 'Ameliorer Post', recuperation du contenu + images, prompt long-form copywriting, insertion du post final dans la page, mise a jour du statut et backup du texte source. Workflow declenche par le #1 et prepare le contenu pour le #3.",
        tech: ["Notion Trigger", "OpenAI GPT-5", "Agent Tool"]
      },
      {
        name: "3 - Generer des visuels DALL·E",
        description:
          "Pages Notion cochees 'Generer Image Post' -> extraction du texte, request DALL·E 3, injection du visuel en file dans Notion puis reset de la checkbox. S'appuie sur les posts enrichis par les workflows 1 & 2.",
        tech: ["Notion", "OpenAI Images API"]
      },
      {
        name: "LinkedIn Scraper",
        description:
          "Chat Trigger -> Google Custom Search (site:linkedin.com/in), dedupe, pagination et push dans Google Sheets 'Donnee LinkedIn Scrapee' avec nom, titre, snippet et thumbnail.",
        tech: ["LangChain Chat Trigger", "Google Custom Search", "Google Sheets"]
      },
      {
        name: "Multi Agents CEO/PO/Dev",
        description:
          "Agent CEO route la demande vers un agent Product Owner (user stories + Notion page) puis un agent Dev (code JSON Title/Code/Explanation). Memoire buffer et regles strictes garantissent une page Notion + code par run.",
        tech: ["LangChain Agents", "OpenAI GPT-4.1", "Notion Tool"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80",
        title: "Dashboard n8n",
        description: "Vue des 5 workflows actifs relies a Notion, Drive, Sheets et OpenAI."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/GVusbNITEVY",
        title: "Walkthrough multi-workflows",
        description: "Demonstration complete du pipeline ideation -> post -> image -> prospection -> multi agents."
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
