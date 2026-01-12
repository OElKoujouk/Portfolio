import type { ProjectBase } from "@/types";

export const n8nProject: ProjectBase = {
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
    image: "/assets/projects/n8n/logo.png",
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
        { type: "image", src: "/assets/projects/n8n/1-ideation-drive-notion.png", title: { fr: "1 - Idéation Drive -> Notion", en: "1 - Drive -> Notion Ideation" }, description: { fr: "Surveillance d'un dossier Drive, analyse des fichiers et création d'idées de posts dans Notion.", en: "Drive folder monitoring, file analysis and post idea creation in Notion." } },
        { type: "image", src: "/assets/projects/n8n/2-ameliorer-post-notion.png", title: { fr: "2 - Améliorer un post depuis Notion", en: "2 - Improve Post from Notion" }, description: { fr: "Trigger Notion, prompt long-form copywriting et insertion du post final dans la page.", en: "Notion trigger, long-form copywriting prompt and final post insertion in page." } },
        { type: "image", src: "/assets/projects/n8n/3-automatisation-image-to-notion.png", title: { fr: "3 - Générer des visuels DALL·E", en: "3 - Generate DALL·E Visuals" }, description: { fr: "Pages Notion cochées 'Générer Image Post' -> request DALL·E 3 -> injection du visuel en file dans Notion.", en: "Notion pages checked 'Generate Image Post' -> DALL·E 3 request -> visual injection in Notion queue." } },
        { type: "image", src: "/assets/projects/n8n/linkedin-scraper.png", title: { fr: "LinkedIn Scraper", en: "LinkedIn Scraper" }, description: { fr: "Chat Trigger -> Google Custom Search -> push dans Google Sheets 'Donnée LinkedIn Scrapée'.", en: "Chat Trigger -> Google Custom Search -> push to Google Sheets 'Scraped LinkedIn Data'." } }
    ]
};
