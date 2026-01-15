# Omar El Koujouk (OEK Dev) — Site Personnel

**Site web personnel "Full Stack & SEO-First"** construit avec **Next.js 16**, **React 19**, **Tailwind CSS** et une architecture **Features-First** (Clean Architecture).  
Ce projet démontre une maîtrise avancée du développement web moderne, de l'optimisation technique (Core Web Vitals) à l'expérience utilisateur (UX/UI).

🌐 **Site Live :** [omar-elkoujouk.fr](https://omar-elkoujouk.fr)

---

## 🎯 Objectifs du Projet

- **Vitrine professionnelle** : Présenter mes compétences, projets et articles techniques
- **Performance maximale** : Utilisation intensive des React Server Components (RSC)
- **SEO optimisé** : Architecture sémantique, JSON-LD, sitemap dynamique
- **Internationalisation native** : Français/Anglais sans librairie lourde
- **Architecture maintenable** : Organisation "features-first" pour une évolutivité facile

---

## 🔥 Fonctionnalités & Points Forts Techniques

### ⚡ Core & Performance
- **Next.js 16 (App Router)** : React Server Components (RSC) pour un chargement instantané
- **React 19** : Dernières fonctionnalités React (use, Server Actions natives)
- **PWA (Progressive Web App)** : Manifest généré dynamiquement (`app/manifest.ts`)
- **Optimisation Images** : `next/image` avec gestion automatique WebP/AVIF
- **Vercel Analytics & Speed Insights** : Monitoring en temps réel intégré

### 🌍 Internationalisation (i18n) Native
Architecture custom sans librairie externe :
- **Proxy Middleware (`proxy.ts`)** : Détection de la locale (`fr`/`en`) via cookie/header
- **Context API** : `LanguageProvider` pour changement de langue fluide côté client
- **Data Hydration** : Contenu (Blog/Projets) servi dans la bonne langue dès le serveur
- **Types `TranslatedText`** : Typage fort `{ fr: string; en: string }` pour tout le contenu

### 🔒 Sécurité
- **Content Security Policy (CSP)** : Headers de sécurité injectés via le proxy
- **Validation Zod** : Validation stricte côté serveur de tous les formulaires
- **reCAPTCHA v3** : Protection anti-spam sur le formulaire de contact
- **Headers de sécurité** : X-Content-Type-Options, X-Frame-Options, Referrer-Policy

### 📈 Stratégie SEO (Search Engine Optimization)
- **Architecture Sémantique** : HTML5 strict (`<article>`, `<nav>`, `<aside>`)
- **Données Structurées (JSON-LD)** : Schémas `Person`, `ProfessionalService`, `BlogPosting`
- **Sitemap Dynamique (`sitemap.ts`)** : Indexation automatique des routes Blog et Projets
- **Métadonnées Dynamiques** : Titres, descriptions et OpenGraph générés par slug
- **Typed Routes** : Validation TypeScript des routes internes

### 📝 Blog & Contenu (Headless-like)
Pas de CMS externe, tout est géré via le système de fichiers :
- **Architecture Data** : Articles stockés en TypeScript pour un typage fort
- **7 Articles Piliers** : Contenu technique rédigé (React 19, CI/CD, TypeScript, etc.)
- **Rendu Sécurisé** : Contenu HTML servi via des composants serveurs

### 📧 Formulaire de Contact
- **Server Actions** : Mutations sécurisées côté serveur
- **React Email** : Templates d'emails stylisés avec `@react-email/components`
- **Resend API** : Envoi d'emails transactionnels fiable

---

## 📂 Architecture du Code (Features-First)

```
src/
├── app/                           # Routes (Next.js App Router)
│   ├── api/                       # Routes API
│   ├── blog/                      # Routes dynamiques du Blog
│   │   ├── [slug]/page.tsx        # Page article
│   │   └── page.tsx               # Liste des articles
│   ├── contact/                   # Formulaire de contact
│   ├── projets/                   # Galerie et détails des projets
│   │   ├── [slug]/page.tsx        # Page projet
│   │   └── page.tsx               # Liste des projets
│   ├── globals.css                # Styles globaux
│   ├── layout.tsx                 # Shell global (Analytics, i18n, SEO)
│   ├── manifest.ts                # Configuration PWA
│   ├── page.tsx                   # Page d'accueil
│   └── sitemap.ts                 # Générateur Sitemap XML
│
├── features/                      # 📦 Modules métier (Clean Architecture)
│   ├── blog/
│   │   ├── components/            # BlogList, BlogPostClient
│   │   ├── data/posts/            # 7 articles techniques
│   │   ├── types/                 # BlogPost, BlogPostBase
│   │   └── index.ts               # API publique du module
│   │
│   ├── projects/
│   │   ├── components/            # ProjectCard, ProjectsGrid, etc.
│   │   ├── data/entries/          # 7 projets (NavZen, QuickGPT, etc.)
│   │   ├── types/                 # Project, ProjectBase, DemoMedia
│   │   └── index.ts               # API publique du module
│   │
│   ├── contact/
│   │   ├── actions/               # Server Actions (sendContact)
│   │   ├── components/            # ContactForm, ContactPageClient
│   │   ├── emails/                # Templates React Email
│   │   └── index.ts               # API publique du module
│   │
│   ├── home/
│   │   ├── components/            # Hero, AboutSection, HomePageClient
│   │   └── index.ts               # API publique du module
│   │
│   ├── i18n/
│   │   ├── components/            # LanguageSwitcher
│   │   ├── LanguageContext.tsx    # Provider React
│   │   ├── translations.ts        # Dictionnaire fr/en
│   │   └── index.ts               # API publique du module
│   │
│   └── chat/
│       ├── components/            # ChatBubble (désactivé)
│       └── index.ts               # API publique du module
│
├── components/
│   ├── layout/                    # Header, Footer
│   └── ui/                        # SkipLink et composants génériques
│
├── lib/
│   ├── constants.ts               # SEO_CONFIG, NAV_HREFS, SOCIAL_LINKS
│   └── utils.ts                   # Helpers (cn, formatters)
│
└── proxy.ts                       # Middleware i18n + Security Headers (CSP)
```

### Principes d'Architecture

| Règle | Description |
|-------|-------------|
| **Features-First** | Chaque domaine métier (blog, projects, contact...) est isolé dans son module |
| **API Publique** | Chaque feature expose ses exports via `index.ts` |
| **Types Colocalisés** | Les types vivent dans `features/*/types/` |
| **Composants UI séparés** | `components/ui/` ne dépend jamais de `features/` |
| **Server Components par défaut** | Client Components uniquement pour l'interactivité |

---

## 🛠️ Stack Technique

| Catégorie | Outils |
|-----------|--------|
| **Framework** | Next.js 16.1 (App Router), React 19 |
| **Langage** | TypeScript 5.5 (Strict Mode) |
| **Styling** | Tailwind CSS 3.4, `clsx`, `tailwind-merge` |
| **Animation** | Animations CSS natives (keyframes personnalisés) |
| **Icônes** | Lucide React, React Icons |
| **Backend** | Server Actions, Zod (validation), Resend (emails) |
| **Email Templates** | React Email (`@react-email/components`) |
| **Hébergement** | Vercel, ESLint 9, Git |
| **Node.js** | 20.9.0+ |

---

## 📊 Contenu

### 🗂️ Projets (7)
- **NavZen** — Application mobile de navigation indoor (primée)
- **QuickGPT** — Suite de composants Salesforce (LWC/Apex)
- **Gestion Stock** — Application de gestion d'inventaire
- **n8n Workflows** — Automatisations no-code
- **LinkedIn Extension** — Extension Chrome LinkedIn → Salesforce
- **Rivalytics** — Analyse concurrentielle
- **WordPress** — Refonte site + chatbot Agentforce

### 📝 Articles de Blog (7)
- Next.js et projets web en 2026
- Nouveautés React 19
- TypeScript et qualité de code
- Infrastructure CI/CD moderne
- Headless CMS vs WordPress
- UX Mobile-First et PWA

---

## �🚀 Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/OElKoujouk/Portfolio.git
cd Portfolio

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (.env.local)
cp .env.example .env.local
# Remplir les variables suivantes :
# RESEND_API_KEY=...
# RESEND_FROM_EMAIL=...
# CONTACT_RECIPIENT_EMAIL=...
# RECAPTCHA_SECRET_KEY=...
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...

# 4. Lancer le serveur de développement
npm run dev
# Accès : http://localhost:3000
```

### Scripts NPM

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification ESLint |

---

## 📁 Variables d'Environnement

| Variable | Description | Requis |
|----------|-------------|--------|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails | ✅ |
| `RESEND_FROM_EMAIL` | Adresse expéditeur des emails | ✅ |
| `CONTACT_RECIPIENT_EMAIL` | Adresse destinataire du formulaire | ✅ |
| `RECAPTCHA_SECRET_KEY` | Clé secrète reCAPTCHA v3 | ✅ |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Clé publique reCAPTCHA v3 | ✅ |

---

## 🤝 Droits & Licence

**Auteur :** Omar El Koujouk  
**Tous droits réservés** — Code et contenu.

---

*Projet audité et validé conforme aux standards Web modernes — Janvier 2026*
