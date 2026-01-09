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
      whatIDoTitle: "Services",
      whatIDoSubtitle: "Des solutions techniques adaptées à vos enjeux, du design system à la mise en production.",
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
          title: "Mon expertise",
          paragraphs: [
            "Je conçois des architectures fiables en Next.js, React Native et Salesforce, avec un focus sur la maintenabilité et la scalabilité. Mon approche : connecter produit, métier et automatisation pour fluidifier les roadmaps.",
            "Je pilote les workflows de bout en bout : intégrations API, scripts SFDX, CI/CD et monitoring — jusqu'au déploiement en production. Diplômé de l'ETNA Paris et EPITECH.",
          ],
        },
        {
          title: "Approche technique",
          paragraphs: [
            "Allier la précision technique à une curiosité constante. J'aime disséquer les problèmes complexes pour bâtir des solutions simples, performantes et durables. Une rigueur acquise par l'expérience et appliquée à chaque projet.",
          ],
        },
      ],
      skillsTitle: "Expertises techniques",
      skillsSubtitle: "Les technos qui composent mon stack quotidien entre React, Salesforce et automatisation.",
      experienceLabel: "Parcours",
      experienceTitle: "Expériences professionnelles",
      experiences: [
        {
          role: "Développeur Salesforce",
          company: "Dev First",
          period: "Avril 2024 - Novembre 2025",
          highlights: [
            "Développement de features Apex & LWC sur mesure pour les équipes commerciales.",
            "Conception d'une extension Chrome LinkedIn ↔ Salesforce pour la synchronisation des leads.",
            "Refonte complète de dev-first.com avec intégration des services Salesforce.",
            "Mise en place d'Agentforce (Topics, Actions, Web To Lead) et automatisations SFDX.",
            "Intégration d'APIs tierces (OpenAI) et accompagnement technique Trailhead.",
          ],
        },
        {
          role: "Ingénieur Infrastructure & Automatisation",
          company: "KeopsConcept",
          period: "Mars 2023 - Janvier 2024",
          highlights: [
            "Développement d'interfaces PHP pour le pilotage des machines de production.",
            "Automatisation de la génération de fichiers DXF depuis les données métier.",
            "Optimisation des performances et réduction du taux d'erreur sur les procédés industriels.",
          ],
        },
      ],
      projectLabel: "Projet R&D",
      navZenProject: {
        title: "🏆 NavZen — Application de navigation indoor primée",
        awardLabel: "Projet primé - Distinction",
        awardTitle: 'Lauréat "Meilleur projet de l\'année"',
        awardDescription: "Prix décerné par un jury professionnel pour l'innovation technique et l'impact produit.",
        viewProject: "Voir le projet",
        highlightIntro: "Application mobile de navigation intérieure : React Native, authentification, recherche intelligente, BLE.",
        highlights: [
          "Moteur de trilatération en Rust pour le calcul de chemin indoor en temps réel.",
          "Backend Symfony/API REST et intégration Unity 3D pour une expérience immersive.",
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
      whatIDoTitle: "Services",
      whatIDoSubtitle: "Technical solutions tailored to your challenges, from design system to production deployment.",
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
          title: "My expertise",
          paragraphs: [
            "I design reliable architectures with Next.js, React Native and Salesforce, focusing on maintainability and scalability. My approach: connecting product, business and automation to streamline roadmaps.",
            "I manage end-to-end workflows: API integrations, SFDX scripts, CI/CD and monitoring — all the way to production deployment. Graduate of ETNA Paris and EPITECH.",
          ],
        },
        {
          title: "Technical approach",
          paragraphs: [
            "Combining technical precision with constant curiosity. I enjoy dissecting complex problems to build simple, high-performing, and sustainable solutions. A rigor acquired through experience and applied to every project.",
          ],
        },
      ],
      skillsTitle: "Technical Expertise",
      skillsSubtitle: "The technologies that make up my daily stack between React, Salesforce and automation.",
      experienceLabel: "Background",
      experienceTitle: "Professional Experience",
      experiences: [
        {
          role: "Salesforce Developer",
          company: "Dev First",
          period: "April 2024 - November 2025",
          highlights: [
            "Development of custom Apex & LWC features for sales teams.",
            "Built a Chrome extension for LinkedIn ↔ Salesforce lead synchronization.",
            "Full redesign of dev-first.com with Salesforce service integrations.",
            "Agentforce setup (Topics, Actions, Web To Lead) and SFDX automations.",
            "Third-party API integration (OpenAI) and technical mentoring via Trailhead.",
          ],
        },
        {
          role: "Infrastructure & Automation Engineer",
          company: "KeopsConcept",
          period: "March 2023 - January 2024",
          highlights: [
            "Developed PHP interfaces for production machine control.",
            "Automated DXF file generation from business data.",
            "Performance optimization and error rate reduction on industrial processes.",
          ],
        },
      ],
      projectLabel: "R&D Project",
      navZenProject: {
        title: "🏆 NavZen — Award-winning indoor navigation app",
        awardLabel: "Award-winning Project - Distinction",
        awardTitle: '"Best Project of the Year" Winner',
        awardDescription: "Award given by a professional jury for technical innovation and product impact.",
        viewProject: "View project",
        highlightIntro: "Indoor navigation mobile app: React Native, authentication, smart search, BLE.",
        highlights: [
          "Rust-powered trilateration engine for real-time indoor pathfinding.",
          "Symfony/REST API backend and Unity 3D integration for immersive experience.",
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
      label: "Work",
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
