# Portfolio Next.js - Omar El Koujouk

Portfolio multi-page construit avec Next.js 14 (App Router) et Tailwind CSS. Le site adopte un theme sombre neon bleu/violet et se compose de pages autonomes: Accueil, Projets, fiches detaillees, A propos et Contact. Les composants sont mutualises et les contenus clefs sont centralises pour faciliter la maintenance.

## Pages principales
- **`/` Accueil**: hero compact (portrait local, CTA Mes projets/Me contacter/Télécharger mon CV), badges de competences, cartes "Ce que je fais" (3 offres de service), bandeau "Projet primé" pointant vers NavZen et la section A propos complete (intro, expertises, timeline).
- **`/projets`**: grille responsive qui consomme `data/projects.ts` et affiche des cartes cliquables (image Next, description courte, stack).
- **`/projets/[slug]`**: fiche auto-generee (metadata + `generateStaticParams`) avec problematique, stack, workflows optionnels, solution detaillee et galerie (images ou iframe YouTube) alimentees par `demoMedia`.
- **`/contact`**: formulaire client (`useFormState`) + server action `sendContact` qui envoie via Resend, liens sociaux et bloc "Disponible pour : projets web, applications mobiles, integrations Salesforce".

## Stack et dependances clefs
- Next.js 14 App Router, React 18, TypeScript.
- Tailwind CSS, `tailwind-merge`, `clsx`, helper `cn` (`lib/utils.ts`).
- `react-icons` (CTA Contact), `lucide-react` (A propos), `resend` pour l'envoi des emails, `pdfkit` pret pour les exports, `Inter` via `next/font`.
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
  contact/actions.ts  # server action Resend
components/
  Header.tsx, Footer.tsx, Hero.tsx, ProjectCard.tsx,
  ProjectsGrid.tsx, AboutSection.tsx, ContactForm.tsx
data/projects.ts      # base projets + helpers getProjectBySlug/Slugs
lib/utils.ts          # helper cn
public/assets/omar.jpg, CV-Omar.pdf
```

## Design & UX
- Theme sombre "glass": couleurs `primary`, `secondary`, `accent.*` definies dans `tailwind.config.js`.
- Classes utilitaires `card` et `badge` dans `globals.css`, bruit de fond `grain`, animations `fade-in`, `slide-up`, `glow`.
- Navigation sticky, skip-link accessible, formulaires etiquettes + focus states, composants responsives (grid/flex).

## Donnees & contenus
- Tous les projets sont definis dans `data/projects.ts` (props `slug`, `stack`, `problem`, `solution`, `demoMedia`, `workflows`).
- Les cartes de la grille utilisent automatiquement ces donnees; ajouter un projet suffit a alimenter `/projets` et `/projets/[slug]`.
- Portrait local et CV sont servis depuis `public/assets`.

## Variables d'environnement
Configurer Resend pour activer le formulaire de contact :
| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Cle privee Resend. |
| `RESEND_FROM_EMAIL` | Expéditeur (ex: "Portfolio - Omar <sender@example.com>"). |
| `CONTACT_RECIPIENT_EMAIL` | Adresse de reception des messages. |

Un exemple `.env` est fourni. Sans ces variables, `sendContact` renvoie une erreur controlee (message utilisateur + log serveur).

## Scripts npm
| Script | Description |
| --- | --- |
| `npm run dev` | Lance Next.js en mode developpement (http://localhost:3000). |
| `npm run build` | Compile l'application pour la production. |
| `npm start` | Lance le serveur Next.js en mode production. |
| `npm run lint` | Lint avec ESLint/Next. |

## Mise en route
1. `npm install`
2. Creer `.env.local` (copier l'exemple) et definir les variables Resend.
3. `npm run dev` puis ouvrir http://localhost:3000.

## Deploiement Vercel
1. Connecter le repo sur Vercel.
2. Build command : `npm run build` (detectee automatiquement).
3. Output : `.next`. Ajouter les variables d'environnement dans l'onglet Project Settings > Environment Variables.

## Personnalisation
- Mettre a jour les projets dans `data/projects.ts` (textes, workflows, medias, stack, liens).
- Remplacer le portrait/CV dans `public/assets` pour les afficher instantanement.
- Ajuster le theme via `tailwind.config.js` et `app/globals.css`.

## Contact
- Email: omar.lbn@outlook.com
- LinkedIn: https://www.linkedin.com/in/omar-el-koujouk-2580371a7/

Mettez vos liens definitifs avant publication.
