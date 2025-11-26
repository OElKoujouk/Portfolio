# Contexte du projet -- Codex

Portfolio Next.js 14 multi-page en production. L'interface applique un theme sombre avec des neons bleu/violet, des cartes vitrees reutilisables (`card`, `badge`) et un skip-link pour l'accessibilite. Toutes les pages partagent les memes styles Tailwind centralises dans `app/globals.css`.

## Pages et routing
1. **`/` -- Accueil**
   - `Hero` avec portrait local (`public/assets/omar.jpg`), CTA `Mes projets`, `Me contacter` et bouton `Télécharger mon CV`.
   - Deux blocs complementaires : badges de competences cles et cartes "Ce que je fais" (3 offres).
   - Bandeau "Projet primé" qui met en avant le cas `NavZen`.
   - Section "Profil" qui embarque `AboutSection` (intro, expertises, timeline, projet NavZen, mention GSX-R 750 K6) directement sur la home.
2. **`/projets`**
   - `ProjectsGrid` lit `data/projects.ts` et affiche des `ProjectCard` cliquables (Image optimisee + stack).
3. **`/projets/[slug]`**
   - `generateStaticParams`/`generateMetadata` alimentes par `getProjectSlugs`.
   - Sections : problematique, stack, workflows (optionnel), solution detaillee, galerie (image/iframe).
4. **`/contact`**
   - `ContactForm` client + server action `sendContact` (`app/contact/actions.ts`) qui envoie via Resend.
   - Carte reseaux (LinkedIn) et bloc "Disponible pour : projets web, applications mobiles, integrations Salesforce".

## Architecture actuelle
```
/app
  layout.tsx (SEO global, skip-link, Header/Footer)
  globals.css (theme, classes utilitaires card/badge)
  page.tsx, contact/page.tsx
  projets/page.tsx, projets/[slug]/page.tsx
  /contact/actions.ts (server action Resend)
/components
  Header, Footer, Hero, ProjectCard, ProjectsGrid,
  AboutSection, ContactForm
/data/projects.ts (projets + helpers getProjectBySlug/Slugs)
/lib/utils.ts (helper cn)
/public/assets (omar.jpg, CV-Omar.pdf)
```

## Design & UX
- Couleurs `primary`, `secondary`, `accent.*` definies dans `tailwind.config.js`.
- Composants `card` et `badge` (classes utilitaires dans `globals.css`) pour garantir la coherence.
- Animations douces (`fade-in`, `slide-up`, `glow`), grilles responsive, effets glassmorphism.
- Accessibilite : skip-link, `aria-label` sur les cartes, labels explicites, focus visibles.

## Stack & dependances
- Next.js 14 App Router, React 18, TypeScript.
- Tailwind CSS + `tailwind-merge`, `clsx` (helper `cn`).
- `react-icons` (CTA contact), `lucide-react` (A propos), `resend` pour l'envoi des mails, `pdfkit` prêt pour les exports.
- Node >= 18.18.0 (cf. `package.json` > `engines`).

## Donnees & contenu
- Les projets sont definis dans `data/projects.ts` (proprietes `demoMedia`, `workflows`, etc.). Mettre a jour ce fichier pour modifier la grille ET les fiches.
- Images de couverture : URLs distantes (Unsplash) + portrait local; preferer `<Image>` (optimisation Next).
- CV distribue via `/assets/CV-Omar.pdf`.

## Formulaire & variables d'environnement
- `ContactForm` embarque reCAPTCHA v2 (widget Google). Le site requiert `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (front) et `RECAPTCHA_SECRET_KEY` (verification server) en plus de Resend.
- `sendContact` necessite `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_RECIPIENT_EMAIL`.
- Sans configuration Resend ou reCAPTCHA, l'action renvoie une erreur controlee et loggue la cause cote serveur.
- `.env` d'exemple est present a la racine (ne jamais pousser les vraies valeurs).

## Regles de contribution
- Preserver la structure multi-page (pas de one-page) et l'esthetique neon/glass.
- Reutiliser les composants globaux (`card`, `badge`, `Header`, `Footer`) et enrichir `metadata` de chaque page.
- Centraliser les contenus (projets, assets, textes) dans les fichiers prevus (`data`, `public`).
- Maintenir `AGENTS.md` et `README.md` synchronises apres toute evolution majeure du code ou du perimetre.

Fin du contexte.
