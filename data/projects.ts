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
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80",
    problem:
      "Les visiteurs perdent du temps à s'orienter dans les bâtiments vastes et aucun outil ne proposait une navigation indoor précise ni un back-office simple à administrer.",
    solution:
      "Conception d'une solution temps réel : appli mobile (auth, recherche de bâtiments/POI), moteur Rust pour calculer le chemin via trilatération BLE, rendu 3D interactif Unity intégré dans l'app et API Symfony/REST pour gérer l'inventaire des bâtiments, des points d'intérêt et des balises.",
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80",
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
    image: "/assets/quickgpt/quickgpt.png",
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
        src: "/assets/quickgpt/chat.png",
        title: "Composant qGPT-Chat",
        description: "Interface de chat LWC avec historique des messages et réponses GPT en temps réel."
      },
      {
        type: "image",
        src: "/assets/quickgpt/generateText-1.png",
        title: "Composant qGPT-GenerateText",
        description: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue."
      },
      {
        type: "image",
        src: "/assets/quickgpt/generateText-2.png",
        title: "Composant qGPT-GenerateText",
        description: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue."
      },
      {
        type: "image",
        src: "/assets/quickgpt/generateText-3.png",
        title: "Composant qGPT-GenerateText",
        description: "Génération de messages LinkedIn ou emails depuis un Lead avec choix du ton et de la langue."
      },
      {
        type: "image",
        src: "/assets/quickgpt/improveActivities-1.png",
        title: "Composant qGPT-ImproveActivities",
        description: "Reformulation automatique des comptes-rendus avec un style professionnel."
      },
      {
        type: "image",
        src: "/assets/quickgpt/improveActivities-2.png",
        title: "Composant qGPT-ImproveActivities",
        description: "Reformulation automatique des comptes-rendus avec un style professionnel."
      },
      {
        type: "image",
        src: "/assets/quickgpt/corrector-1.png",
        title: "Composant qGPT-TextCorrector",
        description: "Éditeur universel pour correction et reformulation de texte selon un ton défini."
      },
      {
        type: "image",
        src: "/assets/quickgpt/corrector-2.png",
        title: "Composant qGPT-TextCorrector",
        description: "Éditeur universel pour correction et reformulation de texte selon un ton défini."
      },
      {
        type: "image",
        src: "/assets/quickgpt/social-1.png",
        title: "Composant qGPT-Social",
        description: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM."
      },
      {
        type: "image",
        src: "/assets/quickgpt/social-2.png",
        title: "Composant qGPT-Social",
        description: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM."
      },
      {
        type: "image",
        src: "/assets/quickgpt/social-3.png",
        title: "Composant qGPT-Social",
        description: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM."
      },
      {
        type: "image",
        src: "/assets/quickgpt/social-4.png",
        title: "Composant qGPT-Social",
        description: "Assistant marketing pour générer des posts LinkedIn/blog et des visuels DALL·E en fusionnant les données CRM."
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
    image: "/assets/wordpress/devfirst.png",
    link: "https://www.dev-first.com/",
    problem:
      "Dev First disposait d'un site vitrine peu interactif et aucune capture conversationnelle des prospects malgré son écosystème Salesforce.",
    solution:
      "Création de pages Elementor optimisées SEO + ajout d'un widget Agentforce connecté à Salesforce (topics, actions custom, branding complet). L'agent répond instantanément, peut créer des leads, prendre des rendez-vous ou pousser une documentation contextualisée, tout en loggant chaque conversation côté CRM.",
    demoMedia: [
      {
        type: "image",
        src: "/assets/wordpress/site.png",
        title: "Agentforce intégré",
        description: "Site WordPress Dev First avec l'agent Agentforce en bas à droite."
      },
      {
        type: "image",
        src: "/assets/wordpress/agentforce.png",
        title: "Interface Agentforce",
        description: "Vue agrandie de l'agent Agentforce avec branding Dev First et options de conversation."
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
    link: "https://rivalytics-1197d4646b8a.herokuapp.com/",
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
    image: "/assets/extension/extension.png",
    problem:
      "Les SDR passaient plusieurs minutes a copier/coller les infos LinkedIn dans Salesforce et perdaient souvent des champs (email, localisation, civilite).",
    solution:
      "Injecter un bouton LinkedIn -> Salesforce, scraper le DOM et les overlays contact-info, deviner la civilite via Genderize.io puis ouvrir Salesforce avec les champs auto-remplis. Une page Options permet de mapper les champs SF, definir l'instance et reexecuter rapidement la creation de Lead/Contact.",
    demoMedia: [
      {
        type: "image",
        src: "/assets/extension/capture.png",
        title: "Bouton capture LinkedIn",
        description: "CTA insere dans la top-card LinkedIn pour lancer la creation Salesforce."
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
    image: "/assets/n8n/logo.png",
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
        src: "/assets/n8n/1-ideation-drive-notion.png",
        title: "1 - Ideation Drive -> Notion",
        description: "Surveillance d’un dossier Drive, analyse des fichiers et creation d’idees de posts dans Notion."
      },
      {
        type: "image",
        src: "/assets/n8n/2-ameliorer-post-notion.png",
        title: "2 - Ameliorer un post depuis Notion",
        description: "Trigger Notion, prompt long-form copywriting et insertion du post final dans la page."
      },
      {
        type: "image",
        src: "/assets/n8n/3-automatisation-image-to-notion.png",
        title: "3 - Generer des visuels DALL·E",
        description: "Pages Notion cochees 'Generer Image Post' -> request DALL·E 3 -> injection du visuel en file dans Notion."
      },
      {
        type: "image",
        src: "/assets/n8n/3-automatisation-image-to-notion.png",
        title: "LinkedIn Scraper",
        description: "Chat Trigger -> Google Custom Search -> push dans Google Sheets 'Donnee LinkedIn Scrapee'."
      }
    ]
  },
  {
    slug: "gestion-stock-multi-tenant",
    title: "Application de gestion de stock multi-tenant",
    description:
      "Système complet de gestion de stock multi-établissements avec architecture Express/Prisma et interface Next.js 16. Gestion des rôles, permissions granulaires, workflows de validation et CI/CD Docker.",
    longDescription:
      "Application de gestion de stock conçue pour gérer plusieurs établissements de manière isolée (multi-tenant). Le système permet de suivre les articles, catégories, mouvements de stock, demandes internes et commandes fournisseurs avec un système de rôles et permissions avancé.\n\nL'architecture sépare clairement le backend (Express + TypeScript, Prisma + MySQL) et le frontend (Next.js 16 + React 19). Chaque établissement dispose de son propre espace de données isolé, avec des rôles hiérarchiques : superadmin (gestion globale), admin (gestion d'établissement), responsable (validation des demandes) et agent (création de demandes).\n\nLe système inclut un workflow complet de gestion des demandes internes avec validation, un système de commandes fournisseurs avec réception, et une traçabilité complète via les mouvements de stock. La sécurité est assurée par JWT, middleware d'authentification et permissions granulaires stockées en JSON.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "JWT",
      "Tailwind CSS v4",
      "Docker",
      "CI/CD"
    ],
    image: "/assets/gestion-stock/connexion.png",
    problem:
      "Les établissements avaient besoin d'un système centralisé pour gérer leurs stocks tout en conservant une isolation complète des données entre sites. Les solutions existantes ne permettaient pas une gestion multi-tenant avec des rôles et permissions granulaires, ni un workflow de validation des demandes adapté aux besoins métier.",
    solution:
      "Conception d'une architecture multi-tenant avec isolation des données par établissement via Prisma. Implémentation d'un système de rôles hiérarchique (superadmin, admin, responsable, agent) avec permissions JSON granulaires. Création d'un workflow de demandes internes avec validation par les responsables, gestion des commandes fournisseurs avec réception et mise à jour automatique des stocks via les mouvements. L'interface Next.js offre une expérience utilisateur moderne avec navigation par sections selon le rôle, tandis que le backend Express expose une API REST sécurisée avec middleware d'authentification et de tenant.",
    workflowsTitle: "Modules principaux",
    workflowsIntro:
      "L'application se structure autour de plusieurs modules métier, chacun adapté aux besoins spécifiques des différents rôles utilisateurs.",
    workflows: [
      {
        name: "Gestion multi-établissements",
        description:
          "Le superadmin peut créer et gérer plusieurs établissements, chacun avec son propre espace de données isolé. Chaque établissement possède ses propres articles, catégories, utilisateurs, fournisseurs et mouvements de stock.",
        tech: ["Prisma", "Multi-tenant", "Middleware tenant"]
      },
      {
        name: "Gestion des stocks",
        description:
          "Les admins et responsables peuvent créer des articles, les organiser en catégories, définir des seuils d'alerte et suivre les quantités en temps réel. Les mouvements de stock (entrées/sorties) sont tracés avec utilisateur, date et commentaire.",
        tech: ["Prisma", "MySQL", "Mouvements de stock"]
      },
      {
        name: "Workflow de demandes internes",
        description:
          "Les agents créent des demandes de produits avec référence unique. Les responsables peuvent valider, modifier ou refuser ces demandes. La validation déclenche automatiquement des mouvements de sortie de stock pour les articles préparés.",
        tech: ["Workflow", "Validation", "Mouvements automatiques"]
      },
      {
        name: "Commandes fournisseurs",
        description:
          "Les admins et responsables créent des commandes auprès des fournisseurs avec statut (en cours, reçue). La réception d'une commande génère automatiquement des mouvements d'entrée de stock pour tous les articles commandés.",
        tech: ["Commandes", "Fournisseurs", "Réception automatique"]
      },
      {
        name: "Gestion des utilisateurs et permissions",
        description:
          "Système de permissions granulaires stocké en JSON permettant de définir précisément les droits de chaque utilisateur (lecture, écriture, suppression par module). Les admins peuvent activer/désactiver des comptes et assigner des rôles.",
        tech: ["Permissions JSON", "Rôles", "Activation/désactivation"]
      }
    ],
    demoMedia: [
      {
        type: "image",
        src: "/assets/gestion-stock/dashboard.png",
        title: "Vue d'ensemble du dashboard",
        description: "Interface principale avec sidebar et navigation par sections selon le rôle utilisateur."
      },
      {
        type: "image",
        src: "/assets/gestion-stock/produits.png",
        title: "Gestion des produits et stocks",
        description: "Interface de gestion des articles avec catégories, quantités, seuils d'alerte et filtres avancés."
      },
      {
        type: "image",
        src: "/assets/gestion-stock/demande-agent.png",
        title: "Création de demande (vue agent)",
        description: "Formulaire de création de demande avec sélection d'articles, quantités et système de favoris."
      },
      {
        type: "image",
        src: "/assets/gestion-stock/validation-responsable.png",
        title: "Validation des demandes (vue responsable)",
        description: "Interface de validation avec liste des demandes, détails des articles et actions de validation/modification/refus."
      },
      {
        type: "image",
        src: "/assets/gestion-stock/commandes-fournisseurs.png",
        title: "Gestion des commandes fournisseurs",
        description: "Création et suivi des commandes fournisseurs avec catalogue, sélection d'articles et processus de réception."
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

