# Portfolio Next.js - Omar El Koujouk

Portfolio multi-page construit avec **Next.js 16** (App Router) et **React 19**, utilisant Tailwind CSS. Le site adopte un thème sombre néon bleu/violet et se compose de pages autonomes : Accueil, Projets, fiches détaillées et Contact. Le portfolio est **entièrement bilingue FR/EN** avec un bouton de changement de langue dans le header.

## 🚀 Fonctionnalités principales

- 🌍 **Multilingue FR/EN** - Bouton de changement de langue, tous les textes traduits
- 🎨 **Thème néon/glass** - Design moderne avec effets glassmorphism et animations
- 📱 **Responsive** - Adapté mobile, tablette et desktop
- ⚡ **Optimisé** - Images Next.js, performances Vercel, ESLint 9
- ♿ **Accessible** - Skip-link, ARIA labels, focus states
- 🔄 **Proxy i18n** - Détection automatique de la langue via cookies

## 📄 Pages principales

- **`/` Accueil** : hero compact (portrait, CTA Projets/Contact/CV), badges de compétences, cartes "Ce que je fais", bandeau "Projet primé" et section À propos complète.
- **`/projets`** : grille responsive avec cartes cliquables (image, description, stack) - contenu traduit.
- **`/projets/[slug]`** : fiche détaillée auto-générée avec problématique, stack, workflows, solution et galerie médias.
- **`/contact`** : formulaire avec server action Resend + reCAPTCHA, liens sociaux et disponibilités.

## 🛠️ Stack technique

| Catégorie | Technologies |
|-----------|-------------|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, `tailwind-merge`, `clsx`, helper `cn` |
| **Icônes** | `lucide-react`, `react-icons` |
| **Email** | `resend` (formulaire contact) |
| **AI** | `@ai-sdk/react`, `@ai-sdk/openai` (ChatBubble, désactivé) |
| **Linting** | ESLint 9 (flat config) |
| **Runtime** | Node >= 20.9.0 |

## 📂 Structure du projet

```
├── app/
│   ├── layout.tsx            # metadata globale, Header/Footer, LanguageProvider
│   ├── globals.css           # theming, classes utilitaires card/badge
│   ├── page.tsx              # Accueil
│   ├── projets/
│   │   ├── page.tsx          # grille projets
│   │   └── [slug]/page.tsx   # page détail projet
│   ├── contact/
│   │   ├── page.tsx          # page contact
│   │   └── actions.ts        # server action Resend + reCAPTCHA
│   └── api/chat/route.ts     # API ChatBubble (désactivé)
│
├── components/
│   ├── layout/               # Header.tsx, Footer.tsx
│   ├── home/                 # Hero.tsx, AboutSection.tsx, HomePageClient.tsx
│   ├── projects/             # ProjectCard, ProjectsGrid, ProjectDetailClient, ProjectMediaGallery
│   ├── contact/              # ContactForm.tsx
│   ├── ui/                   # LanguageSwitcher.tsx
│   └── chat/                 # ChatBubble.tsx (désactivé)
│
├── data/
│   ├── projects.ts           # Index + helpers (getProjects, getProjectBySlug)
│   └── projects/             # Fichiers séparés par projet
│       ├── navzen.ts
│       ├── quickgpt.ts
│       ├── wordpress.ts
│       ├── rivalytics.ts
│       ├── linkedin-extension.ts
│       ├── n8n.ts
│       └── gestion-stock.ts
│
├── types/
│   ├── index.ts              # Réexporte tous les types
│   └── project.ts            # Project, DemoMedia, Workflow, TranslatedText
│
├── lib/
│   ├── constants.ts          # NAV_HREFS, SKILL_GROUPS, SEO_CONFIG
│   ├── utils.ts              # helper cn
│   └── i18n/                 # LanguageContext, translations
│
├── proxy.ts                  # Détection langue (anciennement middleware.ts)
│
└── public/assets/            # omar.jpg, CV-Omar.pdf, logo.png, images projets
```

## 🌐 Internationalisation (i18n)

Le site supporte le français et l'anglais :

- **Bouton FR/EN** dans le header
- **React Context** (`LanguageProvider`) pour gérer l'état
- **Proxy** (`proxy.ts`) détecte la langue du navigateur et set un cookie
- **Traductions centralisées** dans `lib/i18n/translations.ts`
- **Projets traduits** inline dans `data/projects/*.ts`
- **Préférence sauvegardée** en cookie (1 an)

## 🔐 Variables d'environnement

Configurer Resend et reCAPTCHA pour activer le formulaire de contact :

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé privée Resend |
| `RESEND_FROM_EMAIL` | Expéditeur (ex: "Portfolio - Omar <sender@example.com>") |
| `CONTACT_RECIPIENT_EMAIL` | Adresse de réception des messages |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Clé publique Google reCAPTCHA (widget v2) |
| `RECAPTCHA_SECRET_KEY` | Clé serveur pour vérifier les tokens reCAPTCHA |

Un exemple `.env` est fourni. Sans ces variables, `sendContact` renvoie une erreur contrôlée.

## 📜 Scripts npm

| Script | Description |
| --- | --- |
| `npm run dev` | Lance Next.js en mode développement (http://localhost:3000) |
| `npm run build` | Compile l'application pour la production |
| `npm start` | Lance le serveur Next.js en mode production |
| `npm run lint` | Lint avec ESLint 9 (flat config) |

## 🚀 Mise en route

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer l'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés Resend + reCAPTCHA

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir http://localhost:3000
```

## ☁️ Déploiement Vercel

1. Connecter le repo sur Vercel
2. Build command : `npm run build` (détectée automatiquement)
3. Output : `.next`
4. Ajouter les variables d'environnement dans Project Settings > Environment Variables

## ✏️ Personnalisation

| Élément | Fichier(s) |
| --- | --- |
| **Projets** | `data/projects/*.ts` (textes FR/EN, workflows, médias, stack, liens) |
| **Traductions UI** | `lib/i18n/translations.ts` |
| **Constantes** | `lib/constants.ts` (navigation, compétences, SEO) |
| **Types** | `types/project.ts` |
| **Portrait/CV** | `public/assets/` |
| **Thème** | `tailwind.config.js` et `app/globals.css` |

## 📧 Contact

- **Email**: omar.lbn@outlook.com
- **LinkedIn**: [Omar El Koujouk](https://www.linkedin.com/in/omar-el-koujouk-2580371a7/)
- **Portfolio**: [omar-elkoujouk.fr](https://omar-elkoujouk.fr)
