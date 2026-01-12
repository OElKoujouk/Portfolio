import type { ProjectBase } from "@/features/projects/types";

export const linkedinExtensionProject: ProjectBase = {
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
    image: "/assets/projects/extension/extension.png",
    problem: {
        fr: "Les SDR passaient plusieurs minutes à copier/coller les infos LinkedIn dans Salesforce et perdaient souvent des champs (email, localisation, civilité).",
        en: "SDRs spent several minutes copying/pasting LinkedIn info into Salesforce and often lost fields (email, location, salutation)."
    },
    solution: {
        fr: "Injecter un bouton LinkedIn -> Salesforce, scraper le DOM et les overlays contact-info, deviner la civilité via Genderize.io puis ouvrir Salesforce avec les champs auto-remplis. Une page Options permet de mapper les champs SF, définir l'instance et réexécuter rapidement la création de Lead/Contact.",
        en: "Inject a LinkedIn -> Salesforce button, scrape the DOM and contact-info overlays, guess salutation via Genderize.io then open Salesforce with auto-filled fields. An Options page allows mapping SF fields, setting the instance and quickly re-executing Lead/Contact creation."
    },
    demoMedia: [
        { type: "image", src: "/assets/projects/extension/capture.png", title: { fr: "Bouton capture LinkedIn", en: "LinkedIn Capture Button" }, description: { fr: "CTA inséré dans la top-card LinkedIn pour lancer la création Salesforce.", en: "CTA inserted in LinkedIn top-card to launch Salesforce creation." } }
    ]
};
