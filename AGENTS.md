# Contexte du projet — Codex

## Objectif principal
Refaire intégralement un portfolio Next.js 14 multi-page, moderne et prêt pour un déploiement Vercel. Chaque page doit être claire, indépendante et responsive.

## Pages à produire
1. **Accueil (`/`)**
   - Hero compact : photo, nom, description courte
   - Boutons `Mes projets` (vers `/projets`) et `Me contacter` (vers `/contact`)
   - Pas de projets, pas d’à-propos, pas de formulaire sur cette page
2. **Projets (`/projets`)**
   - Grille responsive
   - Cartes avec image, titre, description, stack
   - Données issues de `data/projects.ts`
3. **À propos (`/apropos`)**
   - Texte détaillé, compétences en badges, timeline d’expériences
   - Mention explicite de la passion pour la moto GSX-R 750 K6
4. **Contact (`/contact`)**
   - Formulaire (nom, email, message)
   - Liens GitHub & LinkedIn
   - Bloc “Disponible pour : projets web, applications mobiles, intégrations Salesforce”

## Architecture obligatoire
```
/app
  layout.tsx
  globals.css
  page.tsx
  /projets/page.tsx
  /apropos/page.tsx
  /contact/page.tsx
/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  ProjectCard.tsx
  ProjectsGrid.tsx
  AboutSection.tsx
  ContactForm.tsx
  (autres composants si besoin)
/data
  projects.ts
/public
  (assets/images)
```

## Design & UX
- Thème sombre avec accents bleu/violet néon
- Animations douces (fade, slide, glow)
- Cohérence visuelle entre les pages, layout aéré
- Pas de page one-page ni de sections inutiles

## Contraintes techniques
- Next.js 14 (App Router) + React + TypeScript
- Tailwind CSS pour tout le style
- Composants fonctionnels uniquement
- SEO de base + accessibilité (labels, skip-link, aria)
- Performances optimisées (images Next, data centralisée)

## Livrables attendus
- Code complet respectant l’architecture ci-dessus
- `AGENTS.md` (ce document) à jour
- `README.md` détaillant stack, installation, scripts, déploiement et contact
- Aucune section résiduelle de l’ancien template
- Projet prêt à lancer avec `npm install` puis `npm run dev`

Fin du contexte.
