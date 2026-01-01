# Portfolio Next.js - Omar El Koujouk

Portfolio multi-page construit avec Next.js 14 (App Router) et Tailwind CSS. Le site adopte un thème sombre néon bleu/violet et se compose de pages autonomes : Accueil, Projets, fiches détaillées et Contact. Le portfolio est **entièrement bilingue FR/EN** avec un bouton de changement de langue dans le header.

## Fonctionnalités principales
- 🌍 **Multilingue FR/EN** - Bouton de changement de langue, tous les textes traduits
- 🎨 **Thème néon/glass** - Design moderne avec effets glassmorphism et animations
- 📱 **Responsive** - Adapté mobile, tablette et desktop
- ⚡ **Optimisé** - Images Next.js, performances Vercel
- ♿ **Accessible** - Skip-link, ARIA labels, focus states

## Pages principales
- **`/` Accueil** : hero compact (portrait, CTA Projets/Contact/CV), badges de compétences, cartes "Ce que je fais", bandeau "Projet primé" et section À propos complète.
- **`/projets`** : grille responsive avec cartes cliquables (image, description, stack) - contenu traduit.
- **`/projets/[slug]`** : fiche détaillée auto-générée avec problématique, stack, workflows, solution et galerie médias.
- **`/contact`** : formulaire avec server action Resend + reCAPTCHA, liens sociaux et disponibilités.

## Stack et dépendances
- Next.js 14 App Router, React 18, TypeScript
- Tailwind CSS, `tailwind-merge`, `clsx`, helper `cn`
- `react-icons`, `lucide-react` (icônes)
- `resend` (envoi emails)
- `@ai-sdk/react`, `@ai-sdk/openai` (ChatBubble, désactivé pour l'instant)
- Node >= 18.18.0

## Structure du repo
```
app/
  layout.tsx            # metadata globale, Header/Footer, LanguageProvider
  globals.css           # theming, classes utilitaires card/badge
  page.tsx              # Accueil
  projets/page.tsx      # grille
  projets/[slug]/page.tsx
  contact/page.tsx
  contact/actions.ts    # server action Resend + reCAPTCHA

components/
  /layout               # Header.tsx, Footer.tsx
  /home                 # Hero.tsx, AboutSection.tsx
  /projects             # ProjectCard.tsx, ProjectsGrid.tsx, ProjectDetailClient.tsx, ProjectMediaGallery.tsx
  /contact              # ContactForm.tsx
  /ui                   # LanguageSwitcher.tsx
  /chat                 # ChatBubble.tsx (désactivé)

data/
  projects.ts           # projets avec traductions FR/EN inline + helpers

lib/
  /i18n                 # LanguageContext.tsx, translations.ts
  utils.ts              # helper cn

public/assets/          # omar.jpg, CV-Omar.pdf, logo.png, images projets
```

## Internationalisation (i18n)
Le site supporte le français et l'anglais :
- Bouton **FR / EN** dans le header
- React Context (`LanguageProvider`) pour gérer l'état
- Traductions centralisées dans `lib/i18n/translations.ts`
- Projets traduits inline dans `data/projects.ts`
- Préférence sauvegardée en `localStorage`
- Détection automatique de la langue du navigateur

## Variables d'environnement
Configurer Resend et reCAPTCHA pour activer le formulaire de contact :

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé privée Resend |
| `RESEND_FROM_EMAIL` | Expéditeur (ex: "Portfolio - Omar <sender@example.com>") |
| `CONTACT_RECIPIENT_EMAIL` | Adresse de réception des messages |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Clé publique Google reCAPTCHA (widget v2) |
| `RECAPTCHA_SECRET_KEY` | Clé serveur pour vérifier les tokens reCAPTCHA |

Un exemple `.env` est fourni. Sans ces variables, `sendContact` renvoie une erreur contrôlée.

## Scripts npm
| Script | Description |
| --- | --- |
| `npm run dev` | Lance Next.js en mode développement (http://localhost:3000) |
| `npm run build` | Compile l'application pour la production |
| `npm start` | Lance le serveur Next.js en mode production |
| `npm run lint` | Lint avec ESLint/Next |

## Mise en route
1. `npm install`
2. Créer `.env.local` (copier l'exemple) et définir les variables Resend + reCAPTCHA
3. `npm run dev` puis ouvrir http://localhost:3000

## Déploiement Vercel
1. Connecter le repo sur Vercel
2. Build command : `npm run build` (détectée automatiquement)
3. Output : `.next`. Ajouter les variables d'environnement dans Project Settings > Environment Variables

## Personnalisation
- **Projets** : Mettre à jour `data/projects.ts` (textes FR/EN, workflows, médias, stack, liens)
- **Traductions** : Modifier `lib/i18n/translations.ts` pour les textes UI
- **Portrait/CV** : Remplacer dans `public/assets`
- **Thème** : Ajuster via `tailwind.config.js` et `app/globals.css`

## Contact
- Email: omar.lbn@outlook.com
- LinkedIn: https://www.linkedin.com/in/omar-el-koujouk-2580371a7/
