# Contexte du projet -- Codex

Portfolio Next.js 14 multi-page en production avec support **multilingue FR/EN**. L'interface applique un thème sombre avec des néons bleu/violet, des cartes vitrées réutilisables (`card`, `badge`) et un skip-link pour l'accessibilité. Toutes les pages partagent les mêmes styles Tailwind centralisés dans `app/globals.css`.

## Pages et routing
1. **`/` -- Accueil**
   - `Hero` avec portrait local (`public/assets/omar.jpg`), CTA `Mes projets`, `Me contacter` et bouton `Télécharger mon CV`.
   - Deux blocs complémentaires : badges de compétences clés et cartes "Ce que je fais" (3 offres).
   - Bandeau "Projet primé" qui met en avant le cas `NavZen`.
   - Section "Profil" qui embarque `AboutSection` (intro, expertises, timeline, projet NavZen, mention GSX-R 750 K6) directement sur la home.
2. **`/projets`**
   - `ProjectsGrid` lit `data/projects.ts` et affiche des `ProjectCard` cliquables (Image optimisée + stack).
   - Contenu traduit dynamiquement selon la langue sélectionnée.
3. **`/projets/[slug]`**
   - `generateStaticParams`/`generateMetadata` alimentés par `getProjectSlugs`.
   - Sections : problématique, stack, workflows (optionnel), solution détaillée, galerie (image/iframe).
   - Le composant `ProjectDetailClient` gère la traduction côté client.
4. **`/contact`**
   - `ContactForm` client + server action `sendContact` (`app/contact/actions.ts`) qui envoie via Resend + vérification reCAPTCHA.
   - Carte réseaux (LinkedIn) et bloc "Disponible pour : projets web, applications mobiles, intégrations Salesforce".

## Architecture actuelle
```
/app
  layout.tsx          # SEO global, skip-link, Header/Footer, LanguageProvider
  globals.css         # thème, classes utilitaires card/badge
  page.tsx            # Accueil
  projets/page.tsx    # grille
  projets/[slug]/page.tsx
  contact/page.tsx
  /contact/actions.ts # server action Resend + reCAPTCHA
  /api/chat/route.ts  # API route pour ChatBubble (désactivé pour l'instant)

/components
  /layout             # Header.tsx, Footer.tsx
  /home               # Hero.tsx, AboutSection.tsx
  /projects           # ProjectCard.tsx, ProjectsGrid.tsx, ProjectDetailClient.tsx, ProjectMediaGallery.tsx
  /contact            # ContactForm.tsx
  /ui                 # LanguageSwitcher.tsx
  /chat               # ChatBubble.tsx (commenté, à activer plus tard)

/data
  projects.ts         # projets avec traductions FR/EN inline + helpers getProjects/getProjectBySlug

/lib
  /i18n               # LanguageContext.tsx, translations.ts, index.ts
  utils.ts            # helper cn

/public/assets        # omar.jpg, CV-Omar.pdf, logo.png, images projets
```

## Internationalisation (i18n)
- Système de traduction FR/EN via React Context (`LanguageProvider`).
- Bouton `LanguageSwitcher` dans le Header (FR / EN).
- Langue stockée en `localStorage` et détection automatique du navigateur.
- Les projets ont leurs textes traduits inline dans `data/projects.ts`.
- Fichier central : `lib/i18n/translations.ts`.

## Design & UX
- Couleurs `primary`, `secondary`, `accent.*` définies dans `tailwind.config.js`.
- Composants `card` et `badge` (classes utilitaires dans `globals.css`) pour garantir la cohérence.
- Animations douces (`fade-in`, `slide-up`, `glow`), grilles responsive, effets glassmorphism.
- Accessibilité : skip-link, `aria-label` sur les cartes, labels explicites, focus visibles.

## Stack & dépendances
- Next.js 14 App Router, React 18, TypeScript.
- Tailwind CSS + `tailwind-merge`, `clsx` (helper `cn`).
- `react-icons` (CTA contact), `lucide-react` (icônes), `resend` pour l'envoi des mails.
- `@ai-sdk/react`, `@ai-sdk/openai`, `ai` pour le ChatBubble (désactivé).
- Node >= 18.18.0 (cf. `package.json` > `engines`).

## Données & contenu
- Les projets sont définis dans `data/projects.ts` avec traductions FR/EN inline.
- Structure : `title: { fr: "...", en: "..." }`, etc.
- Fonctions : `getProjects(locale)`, `getProjectBySlug(slug, locale)`.
- Images de couverture : URLs distantes (Unsplash) + assets locaux ; préférer `<Image>` (optimisation Next).
- CV distribué via `/assets/CV-Omar.pdf`.

## Formulaire & variables d'environnement
- `ContactForm` requiert `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` et `RECAPTCHA_SECRET_KEY` pour la vérification reCAPTCHA côté client/serveur.
- `sendContact` nécessite `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_RECIPIENT_EMAIL`.
- Sans configuration Resend ou reCAPTCHA, l'action renvoie une erreur contrôlée et loggue la cause côté serveur.
- `.env` d'exemple est présent à la racine (ne jamais pousser les vraies valeurs).

## Règles de contribution
- Préserver la structure multi-page (pas de one-page) et l'esthétique néon/glass.
- Réutiliser les composants globaux (`card`, `badge`, `Header`, `Footer`) et enrichir `metadata` de chaque page.
- Centraliser les contenus (projets, assets, textes) dans les fichiers prévus (`data`, `public`, `lib/i18n`).
- Maintenir les traductions FR/EN synchronisées dans `translations.ts` et `projects.ts`.
- Maintenir `AGENTS.md` et `README.md` synchronisés après toute évolution majeure du code ou du périmètre.
- Lint : `react/no-unescaped-entities` actif. Echapper les apostrophes en JSX (`J'&apos;...`, `l'&apos;...`) ou utiliser des guillemets doubles.

Fin du contexte.
