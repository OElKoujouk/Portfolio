# Portfolio Next.js - Omar El Koujouk

Portfolio multi-page construit avec Next.js 14 (App Router) et Tailwind CSS. Le site adopte un thème sombre néon bleu/violet et se compose de pages autonomes : Accueil, Projets, fiches détaillées, À propos et Contact. Les composants sont mutualisés et les contenus clés sont centralisés pour faciliter la maintenance.

## Pages principales
- **`/` Accueil** : hero compact (portrait local, CTA Mes projets/Me contacter/Télécharger mon CV), badges de compétences, cartes "Ce que je fais" (3 offres de service), bandeau "Projet primé" pointant vers NavZen et la section À propos complète (intro, expertises, timeline).
- **`/projets`** : grille responsive qui consomme `data/projects.ts` et affiche des cartes cliquables (image Next, description courte, stack).
- **`/projets/[slug]`** : fiche auto-générée (metadata + `generateStaticParams`) avec problématique, stack, workflows optionnels, solution détaillée et galerie (images ou iframe YouTube) alimentées par `demoMedia`.
- **`/contact`** : formulaire client (`useFormState`) + server action `sendContact` qui envoie via Resend, liens sociaux et bloc "Disponible pour : projets web, applications mobiles, intégrations Salesforce".

## Stack et dépendances clefs
- Next.js 14 App Router, React 18, TypeScript.
- Tailwind CSS, `tailwind-merge`, `clsx`, helper `cn` (`lib/utils.ts`).
- `react-icons` (CTA Contact), `lucide-react` (À propos), `resend` pour l'envoi des emails, `pdfkit` prêt pour les exports, `Inter` via `next/font`.
- Node >= 18.18.0 (cf. `package.json`).

## Structure du repo
```
app/
  layout.tsx          # metadata globale, skip-link, Header/Footer
  globals.css         # theming, classes utilitaires card/badge
  page.tsx            # Accueil
  projets/page.tsx    # grille
  projets/[slug]/page.tsx
  contact/page.tsx
  contact/actions.ts  # server action Resend + reCAPTCHA
components/
  Header.tsx, Footer.tsx, Hero.tsx, ProjectCard.tsx,
  ProjectsGrid.tsx, AboutSection.tsx, ContactForm.tsx
data/projects.ts      # base projets + helpers getProjectBySlug/Slugs
lib/utils.ts          # helper cn
public/assets/omar.jpg, CV-Omar.pdf
```

## Design & UX
- Thème sombre "glass" : couleurs `primary`, `secondary`, `accent.*` définies dans `tailwind.config.js`.
- Classes utilitaires `card` et `badge` dans `globals.css`, bruit de fond `grain`, animations `fade-in`, `slide-up`, `glow`.
- Navigation sticky, skip-link accessible, formulaires étiquettes + focus states, composants responsives (grid/flex).

## Données & contenus
- Tous les projets sont définis dans `data/projects.ts` (props `slug`, `stack`, `problem`, `solution`, `demoMedia`, `workflows`).
- Les cartes de la grille utilisent automatiquement ces données ; ajouter un projet suffit à alimenter `/projets` et `/projets/[slug]`.
- Portrait local et CV sont servis depuis `public/assets`.

## Variables d'environnement
Configurer Resend et reCAPTCHA pour activer le formulaire de contact :
| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Clé privée Resend. |
| `RESEND_FROM_EMAIL` | Expéditeur (ex: "Portfolio - Omar <sender@example.com>"). |
| `CONTACT_RECIPIENT_EMAIL` | Adresse de réception des messages. |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Clé publique Google reCAPTCHA (widget v2). |
| `RECAPTCHA_SECRET_KEY` | Clé serveur utilisée pour vérifier les tokens reCAPTCHA. |

Un exemple `.env` est fourni. Sans ces variables, `sendContact` renvoie une erreur contrôlée (message utilisateur + log serveur). Si reCAPTCHA est absent, le formulaire affiche un avertissement et bloque l'envoi.

## Scripts npm
| Script | Description |
| --- | --- |
| `npm run dev` | Lance Next.js en mode développement (http://localhost:3000). |
| `npm run build` | Compile l'application pour la production. |
| `npm start` | Lance le serveur Next.js en mode production. |
| `npm run lint` | Lint avec ESLint/Next. |

## Mise en route
1. `npm install`
2. Créer `.env.local` (copier l'exemple) et définir les variables Resend + reCAPTCHA.
3. `npm run dev` puis ouvrir http://localhost:3000.

## Déploiement Vercel
1. Connecter le repo sur Vercel.
2. Build command : `npm run build` (détectée automatiquement).
3. Output : `.next`. Ajouter les variables d'environnement dans l'onglet Project Settings > Environment Variables.

## Personnalisation
- Mettre à jour les projets dans `data/projects.ts` (textes, workflows, médias, stack, liens).
- Remplacer le portrait/CV dans `public/assets` pour les afficher instantanément.
- Ajuster le thème via `tailwind.config.js` et `app/globals.css`.

## Contact
- Email: omar.lbn@outlook.com
- LinkedIn: https://www.linkedin.com/in/omar-el-koujouk-2580371a7/

Mettez vos liens définitifs avant publication.
