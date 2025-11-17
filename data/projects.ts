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
  workflows?: {
    name: string;
    description: string;
    tech?: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "rivalytics-intelligence-api",
    title: "Rivalytics - Intelligence API",
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
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    problem:
      "L'equipe marketing n'avait aucun service fiable pour agreger en continu les posts LinkedIn et YouTube de leurs concurrents ni controler les acces utilisateurs.",
    solution:
      "Mise en place d'une API Express modulaire avec CORS, rate limiting, cache et scrapers custom. Authentification via cookies JWT, schema PostgreSQL provisionne au demarrage et connecteurs LinkedIn/YouTube encapsules pour exposer des endpoints `/api` prets a brancher cote front.",
    demoMedia: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
        title: "Console Rivalytics",
        description: "Vue interne consommant les endpoints /api pour LinkedIn & YouTube."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/V5F8kB0Kq6w",
        title: "Scraping flow",
        description: "Capture video montrant la collecte et la mise a jour du cache."
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
