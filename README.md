# Portfolio Next.js — Omar El Koujouk

Portfolio multi-page construit avec Next.js 14 (App Router), Tailwind CSS et TypeScript. Le design adopte une atmosphère sombre aux accents néon bleu/violet, avec une navigation claire entre les pages Accueil, Projets, À propos et Contact.

## Pages
- **Accueil (`/`)** : hero compact avec présentation, photo distante, CTA vers les autres pages.
- **Projets (`/projets`)** : grille responsive alimentée par `data/projects.ts` (images, stack, description).
- **À propos (`/apropos`)** : récit détaillé, badges de compétences, timeline d’expériences et focus sur la passion GSX-R 750 K6.
- **Contact (`/contact`)** : formulaire accessible, liens sociaux et bloc “Disponible pour : projets web, applications mobiles, intégrations Salesforce”.

## Stack & fonctionnalités
- Next.js 14 (App Router) + React + TypeScript
- Tailwind CSS configuré pour le thème dark neon
- Composants fonctionnels modulaires (`/components`)
- Données centralisées (`/data/projects.ts`)
- SEO de base via `metadata` par page, accessibilité (skip-link, labels), animations douces
- Prêt pour Vercel (rendu statique, aucune config supplémentaire)

## Structure
```
app/
  layout.tsx
  globals.css
  page.tsx
  projets/page.tsx
  apropos/page.tsx
  contact/page.tsx
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  ProjectCard.tsx
  ProjectsGrid.tsx
  AboutSection.tsx
  ContactForm.tsx
  ...
data/
  projects.ts
public/
  (assets à ajouter si besoin)
```

## Démarrage
```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000.

## Scripts
| Script | Description |
| --- | --- |
| `npm run dev` | Mode développement avec HMR |
| `npm run build` | Build de production prêt pour Vercel |
| `npm start` | Lance le serveur Next.js en production |
| `npm run lint` | Vérifie la qualité du code via ESLint |

## Déploiement Vercel
1. Connecter ce dépôt sur Vercel.
2. Commande de build : `npm run build` (détection automatique).
3. Output : `.next` (par défaut). Rien d’autre à configurer.

## Personnalisation
- Projets : modifier `data/projects.ts` (textes, images, stack, liens).
- Couleurs / animations : ajuster `tailwind.config.js` et `app/globals.css`.
- Assets locaux : ajouter vos images dans `public/` puis mettre à jour les composants.

## Contact
- Email : omar.lbn@outlook.com
- LinkedIn : https://www.linkedin.com/
- GitHub : https://github.com/

Ajoutez vos propres liens lorsque vous êtes prêt à le publier.


