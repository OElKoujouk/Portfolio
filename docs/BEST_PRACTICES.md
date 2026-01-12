# 🚀 Best Practices - React / Next.js Projects

> Guide de référence pour l'IA et les développeurs lors de la création, refactorisation ou audit de projets React/Next.js.

---

## 📚 Table des matières

1. [Stack recommandée](#-stack-recommandée)
2. [Architecture de projet](#-architecture-de-projet)
3. [Next.js 16+ / React 19+](#-nextjs-16--react-19)
4. [Configuration ESLint 9](#-configuration-eslint-9)
5. [TypeScript](#-typescript)
6. [Patterns React](#-patterns-react)
7. [Composants et styling](#-composants-et-styling)
8. [Performance](#-performance)
9. [Accessibilité (a11y)](#-accessibilité-a11y)
10. [SEO](#-seo)
11. [Internationalisation (i18n)](#-internationalisation-i18n)
12. [Context7 - Documentation IA](#-context7---documentation-ia)
13. [Checklist de qualité](#-checklist-de-qualité)

---

## 🛠️ Stack recommandée

### Frontend moderne (2024-2026)

| Catégorie | Recommandé | Alternative |
|-----------|-----------|-------------|
| **Framework** | Next.js 16+ | Vite + React |
| **React** | React 19+ | - |
| **Langage** | TypeScript (strict) | - |
| **Styling** | Tailwind CSS v4 | CSS Modules |
| **Linting** | ESLint 9 (flat config) | - |
| **Formatting** | Prettier | - |
| **State** | React Context / Zustand | Redux Toolkit |
| **Forms** | React Hook Form + Zod | - |
| **Fetching** | Server Components / TanStack Query | SWR |
| **Icons** | Lucide React | Heroicons |

### Dépendances utiles

```json
{
  "dependencies": {
    "next": "^16.x",
    "react": "^19.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "eslint": "^9.x",
    "eslint-config-next": "^16.x",
    "@types/node": "^20.x",
    "@types/react": "^19.x"
  }
}
```

---

## 📂 Architecture de projet

### Structure recommandée (Next.js App Router)

```
├── app/                      # Routes et pages
│   ├── layout.tsx            # Layout racine (metadata, providers)
│   ├── page.tsx              # Page d'accueil
│   ├── globals.css           # Styles globaux
│   ├── [feature]/            # Feature-based routing
│   │   ├── page.tsx          # Page principale
│   │   ├── [id]/page.tsx     # Page dynamique
│   │   └── actions.ts        # Server Actions "use server"
│   └── api/                  # API Routes (si nécessaire)
│
├── components/               # Composants réutilisables
│   ├── ui/                   # Composants UI primitifs (Button, Input, Card)
│   ├── layout/               # Header, Footer, Sidebar
│   ├── [feature]/            # Composants spécifiques à une feature
│   └── shared/               # Composants partagés
│
├── lib/                      # Utilitaires et configuration
│   ├── utils.ts              # Helper functions (cn, formatDate, etc.)
│   ├── constants.ts          # Constantes globales
│   ├── validations.ts        # Schémas Zod
│   └── [feature]/            # Logique métier par feature
│
├── data/                     # Données statiques
│   ├── index.ts              # Point d'entrée
│   └── [entity]/             # Fichiers par entité
│
├── types/                    # Types TypeScript centralisés
│   ├── index.ts              # Réexporte tous les types
│   └── [entity].ts           # Types par domaine
│
├── hooks/                    # Custom hooks (si nombreux)
│   └── use-[name].ts
│
├── public/                   # Assets statiques
│   └── assets/
│
├── proxy.ts                  # Proxy/Middleware (Next.js 16+)
├── eslint.config.mjs         # ESLint 9 flat config
├── tailwind.config.js        # Configuration Tailwind
└── tsconfig.json             # Configuration TypeScript
```

### Principes clés

1. **Feature-based organization** : Grouper par fonctionnalité, pas par type de fichier
2. **Colocation** : Garder les fichiers liés proches (actions.ts avec page.tsx)
3. **Barrel exports** : Utiliser `index.ts` pour simplifier les imports
4. **Separation of concerns** : Types, constantes et utilitaires séparés

---

## ⚡ Next.js 16+ / React 19+

### Async params et searchParams

```typescript
// ✅ Next.js 16+ : params est une Promise
type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  // ...
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return { title: `Item ${id}` };
}
```

### Server Actions

```typescript
// app/[feature]/actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function createItem(formData: FormData) {
  // Validation avec Zod
  // Logique métier
  revalidatePath("/items");
}
```

### useActionState (React 19)

```typescript
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createItem } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "..." : "Submit"}</button>;
}

export function Form() {
  const [state, formAction] = useActionState(createItem, null);
  return (
    <form action={formAction}>
      {/* fields */}
      <SubmitButton />
    </form>
  );
}
```

### notFound() - Côté serveur uniquement

```typescript
// ✅ Dans un Server Component
import { notFound } from "next/navigation";

export default async function Page({ params }: Props) {
  const { id } = await params;
  const item = await getItem(id);
  
  if (!item) {
    notFound(); // ✅ Appelé côté serveur
  }
  
  return <ItemClient item={item} />;
}

// ❌ NE PAS faire dans un Client Component
// Le client doit recevoir des données validées
```

### Proxy (ex-Middleware)

```typescript
// proxy.ts (Next.js 16+)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Logique de proxy
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

---

## 🔧 Configuration ESLint 9

### Flat config (eslint.config.mjs)

```javascript
// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
```

### Script package.json

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

---

## 📘 TypeScript

### Configuration stricte

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Patterns de types

```typescript
// types/index.ts - Réexporter tous les types
export type { User, UserRole } from "./user";
export type { Project, ProjectStatus } from "./project";

// types/project.ts - Types par domaine
export type TranslatedText = {
  fr: string;
  en: string;
};

export type Project = {
  id: string;
  title: string;
  // ...
};

// Éviter 'any', préférer 'unknown' si nécessaire
type ApiResponse<T> = {
  data: T;
  error?: string;
};
```

---

## ⚛️ Patterns React

### 1. Clés de liste stables

```typescript
// ❌ Mauvais : clé basée sur le contenu
{items.map((item) => (
  <li key={item.text}>{item.text}</li>
))}

// ✅ Bon : clé stable avec identifiant + index
{items.map((item, idx) => (
  <li key={`${parentId}-item-${idx}`}>{item.text}</li>
))}

// ✅ Idéal : clé basée sur un ID unique
{items.map((item) => (
  <li key={item.id}>{item.text}</li>
))}
```

### 2. useEffect avec conditions

```typescript
// ❌ Mauvais : setState synchrone sans condition
useEffect(() => {
  setIsOpen(false);
}, [pathname]);

// ✅ Bon : condition pour éviter les cascades
useEffect(() => {
  if (isOpen) {
    setIsOpen(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pathname]);
```

### 3. Server vs Client Components

```typescript
// Préférer Server Components par défaut
// app/items/page.tsx (Server Component)
export default async function ItemsPage() {
  const items = await getItems();
  return <ItemsList items={items} />;
}

// Extraire uniquement les parties interactives en Client
// components/items/ItemsList.tsx
"use client";
export function ItemsList({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState("");
  // ...
}
```

### 4. Custom hooks pour la logique réutilisable

```typescript
// hooks/use-local-storage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue] as const;
}
```

---

## 🎨 Composants et styling

### Helper cn (className merge)

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
<div className={cn("base-class", condition && "optional-class", className)} />
```

### Classes utilitaires globales

```css
/* app/globals.css */
@layer components {
  .card {
    @apply rounded-2xl border border-white/10 bg-gradient-to-br 
           from-slate-900/90 to-slate-800/70 p-6 backdrop-blur-xl
           transition-all duration-300 hover:border-accent-blue/30;
  }
  
  .badge {
    @apply inline-flex items-center rounded-full bg-white/5 
           px-3 py-1 text-xs font-medium text-gray-300 
           border border-white/10;
  }
}
```

### Composants UI primitifs

```typescript
// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
```

---

## 🚀 Performance

### 1. Optimisation des images

```typescript
// ✅ Utiliser next/image
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority // Pour les images above-the-fold
/>

// ❌ Éviter 'unoptimized' sauf pour les GIFs animés
```

### 2. Dynamic imports

```typescript
// Lazy load des composants lourds
import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("./HeavyChart"), {
  loading: () => <Skeleton />,
  ssr: false, // Si pas besoin de SSR
});
```

### 3. Server Components par défaut

Les Server Components réduisent le bundle JavaScript côté client. N'utiliser `"use client"` que pour :
- `useState`, `useEffect`, `useContext`
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `localStorage`)

---

## ♿ Accessibilité (a11y)

### Checklist minimale

```typescript
// 1. Skip link
<a href="#content" className="skip-link">
  Aller au contenu principal
</a>

// 2. Landmarks sémantiques
<header>...</header>
<main id="content">...</main>
<footer>...</footer>

// 3. ARIA labels sur les boutons sans texte
<button aria-label="Fermer le menu">
  <X className="h-5 w-5" />
</button>

// 4. aria-expanded pour les menus
<button aria-expanded={isOpen} aria-controls="menu">
  Menu
</button>

// 5. alt sur toutes les images
<Image alt="Description significative" ... />

// 6. lang sur <html>
<html lang="fr">
```

---

## 🔍 SEO

### Metadata dans layout.tsx

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Site Name",
    template: "%s | Site Name",
  },
  description: "Description du site",
  openGraph: {
    title: "Site Name",
    description: "Description",
    type: "website",
  },
};
```

### JSON-LD Schema

```typescript
// Dans le body, pas dans head
<body>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
  {children}
</body>
```

---

## 🌐 Internationalisation (i18n)

### Pattern recommandé (sans next-intl)

```typescript
// 1. Context + Provider
// lib/i18n/LanguageContext.tsx
export function LanguageProvider({ children, initialLocale }: Props) {
  const [locale, setLocale] = useState(initialLocale);
  const t = translations[locale];
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 2. Traductions centralisées
// lib/i18n/translations.ts
export const translations = {
  fr: { nav: { home: "Accueil" }, ... },
  en: { nav: { home: "Home" }, ... },
};

// 3. Proxy pour détection langue
// proxy.ts
export function proxy(request: NextRequest) {
  const locale = detectLocale(request);
  const response = NextResponse.next();
  response.cookies.set("locale", locale, { maxAge: 31536000 });
  return response;
}

// 4. Données traduites inline
// data/projects/example.ts
export const project = {
  title: { fr: "Titre", en: "Title" },
};
```

---

## 🤖 Context7 - Documentation IA

### Utilisation de Context7 MCP

Context7 permet d'obtenir de la documentation à jour pour n'importe quelle librairie.

#### 1. Résoudre l'ID de la librairie

```
Outil: mcp_context7_resolve-library-id
Params: { libraryName: "next.js", query: "server components" }
```

#### 2. Requêter la documentation

```
Outil: mcp_context7_query-docs
Params: { libraryId: "/vercel/next.js", query: "useActionState React 19" }
```

### Librairies courantes

| Librairie | Context7 ID | Utilisation |
|-----------|-------------|-------------|
| Next.js | `/vercel/next.js` | App Router, Server Components |
| React | `/facebook/react` | Hooks, patterns |
| Tailwind CSS | `/tailwindlabs/tailwindcss` | Classes, configuration |
| TypeScript | `/microsoft/typescript` | Types, configuration |

### Quand consulter Context7

- Mise à jour de version majeure (Next.js 15 → 16)
- Nouvelles APIs (useActionState, proxy convention)
- Patterns non-familiers
- Messages d'erreur obscurs

---

## ✅ Checklist de qualité

### Avant commit

- [ ] `npm run lint` passe sans erreurs
- [ ] `npm run build` compile sans erreurs
- [ ] TypeScript strict mode activé
- [ ] Pas de `any` utilisé
- [ ] Images optimisées avec next/image
- [ ] `notFound()` appelé côté serveur uniquement
- [ ] Clés de liste stables
- [ ] ARIA labels sur éléments interactifs

### Architecture

- [ ] Types centralisés dans `/types`
- [ ] Constantes dans `/lib/constants.ts`
- [ ] Helper `cn` pour les classes CSS
- [ ] Server Components par défaut
- [ ] Données séparées dans `/data`

### Documentation

- [ ] README.md à jour
- [ ] AGENTS.md synchronisé
- [ ] Commentaires sur la logique complexe

---

## 📖 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Blog](https://react.dev/blog)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Context7 MCP](https://context7.com) - Documentation IA

---

> **Note pour l'IA**: Ce fichier sert de référence pour maintenir la cohérence et la qualité du code. Consulter Context7 pour les APIs récentes ou en cas de doute sur les patterns actuels.
