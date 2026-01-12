/**
 * Types de base pour les textes traduits
 */
export type TranslatedText = {
    fr: string;
    en: string;
};

/**
 * Type pour les médias de démonstration (images/vidéos)
 */
export type DemoMedia = {
    type: "image" | "video";
    src: string;
    title?: TranslatedText;
    description?: TranslatedText;
};

/**
 * Type pour les workflows/modules d'un projet
 */
export type Workflow = {
    name: TranslatedText;
    description: TranslatedText;
    tech?: string[];
};

/**
 * Type pour un projet avec textes traduits (stockage)
 */
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

/**
 * Type pour un projet "résolu" dans une langue spécifique (utilisation)
 */
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
    demoMedia?: {
        type: "image" | "video";
        src: string;
        title?: string;
        description?: string;
    }[];
    workflowsTitle?: string;
    workflowsIntro?: string;
    workflows?: {
        name: string;
        description: string;
        tech?: string[];
    }[];
};

/**
 * Type pour les médias déjà résolus dans une langue
 */
export type ResolvedDemoMedia = {
    type: "image" | "video";
    src: string;
    title?: string;
    description?: string;
};

/**
 * Type pour les workflows déjà résolus dans une langue
 */
export type ResolvedWorkflow = {
    name: string;
    description: string;
    tech?: string[];
};
