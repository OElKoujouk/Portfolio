# Contexte du projet -- AI Agents

# Site Personnel Next.js 16 multi-page en production avec support **multilingue FR/EN** et **React 19**. L'interface applique un thème sombre avec des néons bleu/violet, des cartes vitrées réutilisables (`card`, `badge`) et un skip-link pour l'accessibilité. Toutes les pages partagent les mêmes styles Tailwind centralisés dans `app/globals.css`.

> **Stack**: Next.js 16.1.1 | React 19.2 | TypeScript | Tailwind CSS | ESLint 9 (flat config)

---

## Pages et routing

### 1. `/` -- Accueil
- `Hero` avec portrait local (`public/assets/omar.jpg`), CTA `Mes projets`, `Me contacter` et bouton `Télécharger mon CV`.
- Deux blocs complémentaires : badges de compétences clés et cartes "Ce que je fais" (3 offres).
- Bandeau "Projet primé" qui met en avant le cas `NavZen`.
- Section "Profil" qui embarque `AboutSection` (intro, expertises, timeline, projet NavZen).

### 2. `/projets`
- `ProjectsGrid` lit `data/projects.ts` et affiche des `ProjectCard` cliquables (Image optimisée + stack).
- Contenu traduit dynamiquement selon la langue sélectionnée.

### 3. `/projets/[slug]`
- `generateStaticParams`/`generateMetadata` alimentés par `getProjectSlugs`.
- Vérification `notFound()` **côté serveur** dans `page.tsx`.
- Sections : problématique, stack, workflows (optionnel), solution détaillée, galerie (image/iframe).
- Le composant `ProjectDetailClient` gère la traduction côté client.

### 4. `/contact`
- `ContactForm` client + server action `sendContact` (`app/contact/actions.ts`) qui envoie via Resend + vérification reCAPTCHA.
- Utilise `useActionState` et `useFormStatus` (React 19).
- Carte réseaux (LinkedIn) et bloc "Disponibilités".

---

## Architecture du projet

```
/app
  layout.tsx          # SEO global, skip-link, Header/Footer, LanguageProvider
  globals.css         # thème, classes utilitaires card/badge
  page.tsx            # Accueil (Server Component + Client parts)
  projets/page.tsx    # grille
  projets/[slug]/page.tsx  # notFound() côté serveur
  contact/page.tsx
  contact/actions.ts  # server action Resend + reCAPTCHA ("use server")
  api/chat/route.ts   # API route ChatBubble (désactivé)

/components
  /layout             # Header.tsx, Footer.tsx
  /home               # Hero.tsx, AboutSection.tsx, HomePageClient.tsx
  /projects           # ProjectCard, ProjectsGrid, ProjectDetailClient, ProjectMediaGallery
  /contact            # ContactForm.tsx
  /ui                 # LanguageSwitcher.tsx
  /chat               # ChatBubble.tsx (commenté)

/data
  projects.ts         # Index + helpers (getProjects, getProjectBySlug, getProjectSlugs)
  /projects           # ⭐ Fichiers séparés par projet (modularité)
    navzen.ts
    quickgpt.ts
    wordpress.ts
    rivalytics.ts
    linkedin-extension.ts
    n8n.ts
    gestion-stock.ts

/types                # ⭐ Types centralisés
  index.ts            # Réexporte tous les types
  project.ts          # Project, ProjectBase, DemoMedia, Workflow, TranslatedText

/lib
  constants.ts        # ⭐ NAV_HREFS, SKILL_GROUPS, SEO_CONFIG
  utils.ts            # helper cn
  /i18n               # LanguageContext.tsx, translations.ts, index.ts

/proxy.ts             # ⭐ Détection langue (remplace middleware.ts - Next.js 16)

/public/assets        # omar.jpg, CV-Omar.pdf, logo.png, images projets
```

---

## Conformité Next.js 16 / React 19

| Critère | Statut | Détail |
|---------|--------|--------|
| `params` async | ✅ | `await params` dans les pages dynamiques |
| `generateMetadata` async | ✅ | Avec `await params` |
| Server Actions | ✅ | `"use server"` dans `actions.ts` |
| `useActionState` | ✅ | Remplace `useFormState` (React 19) |
| `useFormStatus` | ✅ | Pour le pending state |
| ESLint 9 flat config | ✅ | `eslint.config.mjs` avec `defineConfig` |
| Proxy (ex-middleware) | ✅ | `proxy.ts` avec `export function proxy()` |
| `notFound()` serveur | ✅ | Appelé dans Server Component uniquement |

---

## Internationalisation (i18n)

- **Système** : React Context (`LanguageProvider`) + cookie persistant
- **Bouton** : `LanguageSwitcher` dans le Header (FR / EN)
- **Proxy** : `proxy.ts` détecte `Accept-Language` et set le cookie si absent
- **Projets** : Textes traduits inline dans `data/projects/*.ts`
- **UI** : Fichier central `lib/i18n/translations.ts`

---

## Design & UX

- **Couleurs** : `primary`, `secondary`, `accent.*` définies dans `tailwind.config.js`
- **Composants** : Classes utilitaires `card` et `badge` dans `globals.css`
- **Animations** : `fade-in`, `slide-up`, `glow`, effets glassmorphism
- **Accessibilité** : skip-link, `aria-label`, labels explicites, focus visibles

---

## Variables d'environnement

| Variable | Utilisation |
|----------|-------------|
| `RESEND_API_KEY` | Clé privée Resend |
| `RESEND_FROM_EMAIL` | Expéditeur emails |
| `CONTACT_RECIPIENT_EMAIL` | Destinataire messages |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA widget |
| `RECAPTCHA_SECRET_KEY` | Vérification serveur |

---

## Règles de contribution

### ✅ À faire
- Préserver la structure multi-page et l'esthétique néon/glass
- Réutiliser les composants globaux (`card`, `badge`, `Header`, `Footer`)
- Centraliser les contenus dans `data/`, `public/`, `lib/i18n/`
- Maintenir les traductions FR/EN synchronisées
- Utiliser les types depuis `@/types`
- Utiliser les constantes depuis `@/lib/constants`
- Ajouter les nouveaux projets dans `data/projects/` (1 fichier par projet)

### ❌ À éviter
- `notFound()` dans les Client Components
- `unoptimized` sur les images (sauf GIF animés)
- Clés de liste basées sur le contenu textuel (utiliser des index stables)
- `setState` synchrone dans les `useEffect` sans condition

### 📝 Documentation
- Maintenir `AGENTS.md` et `README.md` synchronisés après toute évolution majeure
- Consulter `BEST_PRACTICES.md` pour les patterns recommandés

---

## Scripts utiles

```bash
npm run dev      # Développement
npm run build    # Build production
npm run lint     # ESLint 9 (eslint .)
npm start        # Serveur production
```

---

Fin du contexte.
