# Portfolio - Omar El Koujouk

**Plateforme web personnelle "Full Stack & SEO-First"** construite avec **Next.js 16**, **Tailwind CSS** et une architecture hybride (Server Components + Client interactif).  
Ce projet démontre une maîtrise avancée du développement web moderne, de l'optimisation technique (Core Web Vitals) à l'expérience utilisateur (UX/UI).

🌐 **Live Demo :** [omar-elkoujouk.fr](https://omar-elkoujouk.fr)

---

## 🔥 Fonctionnalités & Points Forts Technique

### ⚡ Core & Performance
- **Next.js 16 (App Router) :** Utilisation intensive des React Server Components (RSC) pour un chargement instantané.
- **PWA (Progressive Web App) :** Manifest généré dynamiquement (`app/manifest.ts`) pour installation sur mobile.
- **Optimisation Images :** `next/image` avec gestion automatique du format WebP/AVIF.
- **Vercel Analytics & Speed Insights :** Monitoring en temps réel intégré (`app/layout.tsx`).

### 🌍 Internationalisation (i18n) Native
Une approche sans librairie lourde, basée sur les standards du Web :
- **Proxy Middleware (`proxy.ts`) :** Intercepte les requêtes pour détecter la locale (`fr`/`en`) via cookie/header.
- **Context API :** `LanguageProvider` pour le changement de langue fluide côté client sans rechargement.
- **Data Hydration :** Contenu dynamique (Blog/Projets) servi dans la bonne langue dès le serveur.

### 📈 Stratégie SEO (Search Engine Optimization)
- **Architecture Sémantique :** HTML5 strict (`<article>`, `<nav>`, `<aside>`).
- **Données Structurées (JSON-LD) :** Injection automatique de schémas `Person`, `BlogPosting`, et `WebSite`.
- **Sitemap Dynamique (`sitemap.ts`) :** Indexation automatique des nouvelles routes Blog et Projets.
- **Métadonnées Dynamiques :** Titres, descriptions et OpenGraph générés pour chaque slug.

### 📝 Blog & Contenu (Headless-like)
Pas de CMS externe, tout est géré via le système de fichiers pour une performance maximale :
- **Architecture Data :** Articles stockés en TypeScript (`data/blog/*.ts`) pour un typage fort.
- **Rendu Hybride :** Contenu HTML sécurisé (`dangerouslySetInnerHTML`) servi via des composants serveurs.
- **7 Articles Piliers :** Contenu technique rédigé pour démontrer l'expertise (React 19, DevOps, IA...).

---

## 📂 Structure du Code (Audit Janvier 2026)

```bash
├── app/
│   ├── api/chat/             # Route API pour le chatbot (expérimental)
│   ├── blog/                 # Routes dynamiques du Blog (SEO-first)
│   ├── contact/              # Formulaire avec Server Actions (Resend)
│   ├── projets/              # Galerie et détails des projets
│   ├── manifest.ts           # Configuration PWA
│   ├── sitemap.ts            # Générateur Sitemap XML
│   └── layout.tsx            # Shell global (Analytics, i18n, Fonts)
│
├── components/
│   ├── blog/                 # BlogList (Grid), BlogPostClient (Article)
│   ├── chat/                 # ChatBubble (Interface IA flottante)
│   ├── home/                 # Hero, Stack, AboutSection
│   ├── projects/             # Cards, Modal, MediaGallery
│   └── ui/                   # LanguageSwitcher, Boutons génériques
│
├── data/
│   ├── blog/                 # 7 Articles techniques (Contenu + Metadata)
│   ├── projects/             # 6 Projets (NavZen, Logifly, QuickGPT...)
│   └── blog.ts / projects.ts # Agrégateurs & Helpers d'accès aux données
│
├── lib/
│   ├── i18n/                 # Logique de traduction & Dictionnaire
│   └── utils.ts              # Helpers (cn, date formatting)
│
├── public/assets/            # Images optimisées, CV PDF, Logos
│
├── types/                    # Définitions TypeScript partagées (BlogPost, Project)
│
└── proxy.ts                  # Middleware custom pour la réécriture d'URL i18n
```

---

## 🛠️ Stack Technique

| Catégorie | Outils |
|-----------|--------|
| **Framework** | Next.js 16.1 (Turbopack), React 19 |
| **Langage** | TypeScript 5.5 (Strict Mode) |
| **Style** | Tailwind CSS 3.4, `clsx`, `tailwind-merge` |
| **Animation** | Framer Motion (Transitions, Scroll Reveal) |
| **Backend** | Server Actions, Resend (Email), NodeJS 20+ |
| **DevOps** | Vercel (Hosting), ESLint 9, Git |

---

## 🚀 Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/OElKoujouk/Portfolio.git

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (.env.local)
# RESEND_API_KEY=...
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...

# 4. Lancer le serveur de développement
npm run dev
# Accès : http://localhost:3000
```

---

## 🤝 Droits & Licence

**Auteur :** Omar El Koujouk.
**Code Source :** Open-Source (MIT). Vous pouvez vous en inspirer pour votre propre portfolio.
**Contenu (Textes/Images) :** Tous droits réservés.

*Projet audité et validé conforme aux standards Web modernes (2026).*
