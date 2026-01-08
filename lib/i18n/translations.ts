export type Locale = "fr" | "en";

export const translations = {
  fr: {
    skipToContent: "Aller au contenu principal",
    // Header
    nav: {
      home: "Accueil",
      projects: "Projets",
      contact: "Contact",
    },
    // Hero
    hero: {
      role: "Développeur Full-Stack & Salesforce",
      intro: "Spécialisé en Next.js, React et intégrations Salesforce. Je conçois des expériences numériques performantes pour les entreprises ambitieuses.",
      projectsBtn: "Mes projets",
      contactBtn: "Me contacter",
      downloadCV: "Télécharger mon CV",
      portraitAlt: "Portrait d'Omar",
    },
    // Home page
    home: {
      skillsTitle: "Compétences clés",
      skillsSubtitle: "Les briques techniques avec lesquelles je conçois des produits fiables et maintenables.",
      whatIDoTitle: "Ce que je fais",
      whatIDoSubtitle: "J'accompagne les équipes produit en combinant design system, architecture logicielle et automatisation.",
      profileLabel: "Profil",
      profileTitle1: "Développeur Full-Stack",
      profileTitle2: "& Salesforce",
      profileDescription: "J'aide les équipes produit à assembler architectures web/mobile et écosystème Salesforce, en priorisant la lisibilité du code, l'automatisation et la fiabilité des mises en production.",
      offerings: [
        {
          title: "Développement Web",
          description: "Applications Next.js optimisées pour la performance, le SEO et la scalabilité, du design system à la mise en production.",
        },
        {
          title: "Intégrations Salesforce",
          description: "Connecteurs sur mesure, automatisations Apex et synchronisations temps réel entre Salesforce et vos outils existants.",
        },
        {
          title: "Applications mobiles",
          description: "Expériences mobiles réactives avec React Native, packaging stores et pipeline de déploiement automatisé.",
        },
      ],
    },
    // About section
    about: {
      introSections: [
        {
          title: "Ce que je fais",
          paragraphs: [
            "Formé à l'ETNA Paris et à EPITECH, je construis des architectures fiables en Next.js, React Native et Salesforce. J'aime connecter produit, métier et automatisation pour fluidifier les roadmaps.",
            "Je pilote les workflows : intégrations API, scripts SFDX, CI/CD et monitoring pour garder la maîtrise jusqu'au déploiement.",
          ],
        },
        {
          title: "Ce qui m'inspire",
          paragraphs: [
            "Passionné de moto et de mécanique, j'aime comprendre le fonctionnement des systèmes, optimiser les performances et résoudre des problèmes techniques. Cette approche méthodique se retrouve dans ma façon de développer.",
          ],
        },
      ],
      skillsTitle: "Expertises techniques",
      skillsSubtitle: "Les technos qui composent mon stack quotidien entre React, Salesforce et automatisation.",
      experienceLabel: "Parcours",
      experienceTitle: "Expériences professionnelles",
      experiences: [
        {
          role: "Développeur Salesforce (CDD)",
          company: "Dev First",
          period: "Avril 2024 - Novembre 2025",
          highlights: [
            "Features Apex & LWC sur mesure pour les équipes sales.",
            "Extension Chrome LinkedIn ↔ Salesforce pour synchroniser les leads.",
            "Refonte de dev-first.com avec branchements services Salesforce.",
            "Configuration Agentforce (Topics, Actions, Web To Lead) + automatisations SFDX.",
            "Intégration d'API externes (OpenAI) et mentoring Trailhead.",
          ],
        },
        {
          role: "Administrateur infrastructures sécurisées (CDD)",
          company: "KeopsConcept",
          period: "Mars 2023 - Janvier 2024",
          highlights: [
            "Interface PHP avec les machines de production.",
            "Génération automatique de fichiers DXF depuis les données métier.",
            "Optimisation du code pour réduire les erreurs et accélérer les procédés.",
          ],
        },
      ],
      projectLabel: "Projet d'école",
      navZenProject: {
        title: "🏆Projet NavZen — Fin d'études ETNA",
        awardLabel: "Projet primé - Distinction",
        awardTitle: 'Lauréat "Meilleure projet de l\'année"',
        awardDescription: "Prix décerné par un jury professionnel pour l'innovation et l'impact produit.",
        viewProject: "Voir le projet",
        highlightIntro: "Développement d'une application mobile de navigation intérieure : React Native, auth, recherche, BLE.",
        highlights: [
          "Algorithme de trilatération en Rust et calcul de chemin indoor.",
          "Backend Symfony/API REST et intégration Unity 3D immersive.",
        ],
      },
    },
    // Footer
    footer: {
      tagline: "Développeur Full-Stack & Salesforce.",
      location: "Basé en Ile-de-France · Disponible en présentiel et distanciel.",
    },
    // Contact page
    contact: {
      label: "Contact",
      title1: "Parlons de votre",
      title2: "prochain projet",
      responseTime: "Réponse sous 24h. Je suis disponible pour des missions à distance.",
      availableFor: "Disponible pour",
      webProjects: "Projets web",
      mobileApps: "Applications mobiles",
      salesforceIntegrations: "Intégrations Salesforce",
      form: {
        lastName: "Nom",
        lastNamePlaceholder: "Ex : Julien",
        firstName: "Prénom",
        firstNamePlaceholder: "Ex : Dupont",
        email: "Email",
        emailPlaceholder: "vous@email.com",
        phone: "Téléphone",
        phonePlaceholder: "+33 6 12 34 56 78",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet...",
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        recaptchaWarning: "reCAPTCHA n'est pas configuré, les envois ne seront pas protégés contre le spam.",
      },
    },
    // Projects page
    projects: {
      label: "Réalisations",
      title: "Projets sélectionnés",
      description: "Chaque projet est conçu avec une obsession pour la qualité et la maintenabilité. Voici un aperçu des derniers produits livrés.",
    },
    // Project detail page
    projectDetail: {
      backToProjects: "Retour aux projets",
      projectLabel: "Projet",
      projectNotFound: "Projet introuvable",
      problem: "Problématique",
      stack: "Stack utilisée",
      redirect: "Redirection",
      keyWorkflows: "Workflows clés",
      workflowsDefaultIntro: "Suite coordonnée de scénarios couvrant les étapes essentielles du produit présenté.",
      solutionsResults: "Solutions & résultats",
      demo: "Démo",
      viewDetails: "Voir les détails",
    },
  },
  en: {
    skipToContent: "Skip to main content",
    // Header
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      role: "Full-Stack Developer & Salesforce",
      intro: "Specialized in Next.js, React and Salesforce integrations. I design high-performing digital experiences for ambitious companies.",
      projectsBtn: "My projects",
      contactBtn: "Contact me",
      downloadCV: "Download my CV",
      portraitAlt: "Portrait of Omar",
    },
    // Home page
    home: {
      skillsTitle: "Key Skills",
      skillsSubtitle: "The technical building blocks I use to create reliable and maintainable products.",
      whatIDoTitle: "What I do",
      whatIDoSubtitle: "I support product teams by combining design systems, software architecture, and automation.",
      profileLabel: "Profile",
      profileTitle1: "Full-Stack Developer",
      profileTitle2: "& Salesforce",
      profileDescription: "I help product teams assemble web/mobile architectures and Salesforce ecosystem, prioritizing code readability, automation and production deployment reliability.",
      offerings: [
        {
          title: "Web Development",
          description: "Next.js applications optimized for performance, SEO and scalability, from design system to production deployment.",
        },
        {
          title: "Salesforce Integrations",
          description: "Custom connectors, Apex automations and real-time synchronization between Salesforce and your existing tools.",
        },
        {
          title: "Mobile Applications",
          description: "Responsive mobile experiences with React Native, store packaging and automated deployment pipeline.",
        },
      ],
    },
    // About section
    about: {
      introSections: [
        {
          title: "What I do",
          paragraphs: [
            "Trained at ETNA Paris and EPITECH, I build reliable architectures with Next.js, React Native and Salesforce. I love connecting product, business and automation to streamline roadmaps.",
            "I manage workflows: API integrations, SFDX scripts, CI/CD and monitoring to maintain control until deployment.",
          ],
        },
        {
          title: "What inspires me",
          paragraphs: [
            "Passionate about motorcycles and mechanics, I enjoy understanding how systems work, optimizing performance and solving technical problems. This methodical approach is reflected in my development style.",
          ],
        },
      ],
      skillsTitle: "Technical Expertise",
      skillsSubtitle: "The technologies that make up my daily stack between React, Salesforce and automation.",
      experienceLabel: "Background",
      experienceTitle: "Professional Experience",
      experiences: [
        {
          role: "Salesforce Developer (Fixed-term)",
          company: "Dev First",
          period: "April 2024 - November 2025",
          highlights: [
            "Custom Apex & LWC features for sales teams.",
            "Chrome extension LinkedIn ↔ Salesforce to sync leads.",
            "Redesign of dev-first.com with Salesforce service connections.",
            "Agentforce configuration (Topics, Actions, Web To Lead) + SFDX automations.",
            "External API integration (OpenAI) and Trailhead mentoring.",
          ],
        },
        {
          role: "Secure Infrastructure Administrator (Fixed-term)",
          company: "KeopsConcept",
          period: "March 2023 - January 2024",
          highlights: [
            "PHP interface with production machines.",
            "Automatic DXF file generation from business data.",
            "Code optimization to reduce errors and speed up processes.",
          ],
        },
      ],
      projectLabel: "School Project",
      navZenProject: {
        title: "🏆NavZen Project — ETNA Final Year",
        awardLabel: "Award-winning Project - Distinction",
        awardTitle: '"Best Project of the Year" Winner',
        awardDescription: "Award given by a professional jury for innovation and product impact.",
        viewProject: "View project",
        highlightIntro: "Development of an indoor navigation mobile app: React Native, auth, search, BLE.",
        highlights: [
          "Trilateration algorithm in Rust and indoor pathfinding.",
          "Symfony/REST API backend and immersive Unity 3D integration.",
        ],
      },
    },
    // Footer
    footer: {
      tagline: "Full-Stack Developer & Salesforce.",
      location: "Based in Île-de-France · Available on-site and remote.",
    },
    // Contact page
    contact: {
      label: "Contact",
      title1: "Let's talk about your",
      title2: "next project",
      responseTime: "Response within 24h. I am available for remote work.",
      availableFor: "Available for",
      webProjects: "Web projects",
      mobileApps: "Mobile applications",
      salesforceIntegrations: "Salesforce integrations",
      form: {
        lastName: "Last name",
        lastNamePlaceholder: "e.g. Smith",
        firstName: "First name",
        firstNamePlaceholder: "e.g. John",
        email: "Email",
        emailPlaceholder: "you@email.com",
        phone: "Phone",
        phonePlaceholder: "+1 555 123 4567",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send message",
        sending: "Sending...",
        recaptchaWarning: "reCAPTCHA is not configured, submissions will not be protected against spam.",
      },
    },
    // Projects page
    projects: {
      label: "Portfolio",
      title: "Selected Projects",
      description: "Each project is crafted with an obsession for quality and maintainability. Here's a glimpse of the latest products delivered.",
    },
    // Project detail page
    projectDetail: {
      backToProjects: "Back to projects",
      projectLabel: "Project",
      projectNotFound: "Project not found",
      problem: "Problem",
      stack: "Tech Stack",
      redirect: "Redirect",
      keyWorkflows: "Key Workflows",
      workflowsDefaultIntro: "Coordinated sequence of scenarios covering the essential stages of the presented product.",
      solutionsResults: "Solutions & Results",
      demo: "Demo",
      viewDetails: "View details",
    },
  },
} as const;

export type Translations = typeof translations.fr;
