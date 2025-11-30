# Contexte du projet -- Codex

Portfolio Next.js 14 multi-page en production. L'interface applique un thème sombre avec des néons bleu/violet, des cartes vitrées réutilisables (`card`, `badge`) et un skip-link pour l'accessibilité. Toutes les pages partagent les mêmes styles Tailwind centralisés dans `app/globals.css`.

## Pages et routing
1. **`/` -- Accueil**
   - `Hero` avec portrait local (`public/assets/omar.jpg`), CTA `Mes projets`, `Me contacter` et bouton `Télécharger mon CV`.
   - Deux blocs complémentaires : badges de compétences clés et cartes "Ce que je fais" (3 offres).
   - Bandeau "Projet primé" qui met en avant le cas `NavZen`.
   - Section "Profil" qui embarque `AboutSection` (intro, expertises, timeline, projet NavZen, mention GSX-R 750 K6) directement sur la home.
2. **`/projets`**
   - `ProjectsGrid` lit `data/projects.ts` et affiche des `ProjectCard` cliquables (Image optimisée + stack).
3. **`/projets/[slug]`**
   - `generateStaticParams`/`generateMetadata` alimentés par `getProjectSlugs`.
   - Sections : problématique, stack, workflows (optionnel), solution détaillée, galerie (image/iframe).
4. **`/contact`**
   - `ContactForm` client + server action `sendContact` (`app/contact/actions.ts`) qui envoie via Resend + vérification reCAPTCHA.
   - Carte réseaux (LinkedIn) et bloc "Disponible pour : projets web, applications mobiles, intégrations Salesforce".

## Architecture actuelle
```
/app
  layout.tsx (SEO global, skip-link, Header/Footer)
  globals.css (thème, classes utilitaires card/badge)
  page.tsx, contact/page.tsx
  projets/page.tsx, projets/[slug]/page.tsx
  /contact/actions.ts (server action Resend + reCAPTCHA)
/components
  Header, Footer, Hero, ProjectCard, ProjectsGrid,
  AboutSection, ContactForm
/data/projects.ts (projets + helpers getProjectBySlug/Slugs)
/lib/utils.ts (helper cn)
/public/assets (omar.jpg, CV-Omar.pdf)
```

## Design & UX
- Couleurs `primary`, `secondary`, `accent.*` définies dans `tailwind.config.js`.
- Composants `card` et `badge` (classes utilitaires dans `globals.css`) pour garantir la cohérence.
- Animations douces (`fade-in`, `slide-up`, `glow`), grilles responsive, effets glassmorphism.
- Accessibilité : skip-link, `aria-label` sur les cartes, labels explicites, focus visibles.

## Stack & dépendances
- Next.js 14 App Router, React 18, TypeScript.
- Tailwind CSS + `tailwind-merge`, `clsx` (helper `cn`).
- `react-icons` (CTA contact), `lucide-react` (A propos), `resend` pour l'envoi des mails, `pdfkit` prêt pour les exports.
- Node >= 18.18.0 (cf. `package.json` > `engines`).

## Données & contenu
- Les projets sont définis dans `data/projects.ts` (propriétés `demoMedia`, `workflows`, etc.). Mettre à jour ce fichier pour modifier la grille ET les fiches.
- Images de couverture : URLs distantes (Unsplash) + portrait local ; préférer `<Image>` (optimisation Next).
- CV distribué via `/assets/CV-Omar.pdf`.

## Formulaire & variables d'environnement
- `ContactForm` requiert `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` et `RECAPTCHA_SECRET_KEY` pour la vérification reCAPTCHA côté client/serveur.
- `sendContact` nécessite `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_RECIPIENT_EMAIL`.
- Sans configuration Resend ou reCAPTCHA, l'action renvoie une erreur contrôlée et loggue la cause côté serveur.
- `.env` d'exemple est présent à la racine (ne jamais pousser les vraies valeurs).

## Règles de contribution
- Préserver la structure multi-page (pas de one-page) et l'esthétique néon/glass.
- Réutiliser les composants globaux (`card`, `badge`, `Header`, `Footer`) et enrichir `metadata` de chaque page.
- Centraliser les contenus (projets, assets, textes) dans les fichiers prévus (`data`, `public`).
- Maintenir `AGENTS.md` et `README.md` synchronisés après toute évolution majeure du code ou du périmètre.

Fin du contexte.
