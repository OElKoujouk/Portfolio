# Checklist SEO & Crédits pour Projets Clients

Ce document résume les bonnes pratiques à intégrer dans CHAQUE site client (Next.js / React) pour :
1.  Booster le référencement local du client (Google Maps, Rich Snippets).
2.  Améliorer MON propre référencement (Backlinks, Autorité).

---

## 1. Crédit Visible (Le "Jus" SEO pour moi)

**Où :** Dans le composant `Footer.tsx`.
**Pourquoi :** C'est le backlink le plus puissant. Il indique à Google que j'ai réalisé ce site performant.

### Argumentaire Client (si on me demande)
> *"C'est une signature numérique standard. Comme un architecte signe un bâtiment. De plus, cela montre à Google que votre site a été réalisé par un professionnel certifié, ce qui est un gage de qualité technique pour votre référencement."*

### Code (Footer.tsx)
```tsx
<div className="text-center text-sm text-gray-500 mt-8">
  <p>© {new Date().getFullYear()} {clientName}. Tous droits réservés.</p>
  <p className="mt-2 text-xs">
    Site conçu et développé par{" "}
    <a 
      href="https://omar-elkoujouk.fr" 
      target="_blank" 
      rel="noopener"
      className="hover:text-primary transition-colors font-medium"
      aria-label="Voir le portfolio du développeur Omar El Koujouk"
    >
      Omar El Koujouk
    </a>
  </p>
</div>
```

---

## 2. Données Structurées invisibles (JSON-LD)

**Où :** Dans `app/layout.tsx` (ou `page.tsx` de l'accueil).
**Pourquoi :** Indispensable pour que le client apparaisse proprement sur Google.

### Code Intégral (Gagnant-Gagnant)

Adapte cet objet JSON dans le `<script type="application/ld+json">` du site client.

```javascript
const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // --- PARTIE CLIENT (Pour son SEO à LUI) ---
    {
      "@type": "LocalBusiness", // Ou "Restaurant", "LegalService", etc.
      "name": "Nom Du Client",
      "image": "https://site-du-client.com/logo.png",
      "url": "https://site-du-client.com",
      "telephone": "+33 1 23 45 67 89",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Rue du Commerce",
        "addressLocality": "Paris",
        "postalCode": "75001",
        "addressCountry": "FR"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$" // $$ = Moyen, $$$ = Cher
    },
    
    // --- PARTIE CRÉATEUR (Pour MON SEO à MOI) ---
    {
      "@type": "WebSite",
      "url": "https://site-du-client.com",
      "creator": {
        "@type": "Person",
        "name": "Omar El Koujouk",
        "url": "https://omar-elkoujouk.fr",
        "jobTitle": "Développeur Web Freelance",
        "sameAs": [
            "https://www.linkedin.com/in/ton-profil",
            "https://github.com/ton-profil"
        ]
      }
    }
  ]
};
```

---

## 3. Métadonnées Techniques (Head)

**Où :** Dans `metadata` (Next.js App Router).
**Pourquoi :** Définit la "paternité" technique du code.

```typescript
export const metadata: Metadata = {
  // ... meta du client ...
  authors: [
    { name: "Nom Du Client", url: "https://site-du-client.com" }, // Propriétaire
    { name: "Omar El Koujouk", url: "https://omar-elkoujouk.fr" } // Auteur technique
  ],
  creator: "Omar El Koujouk", // Indique qui a codé
  publisher: "Nom Du Client", // Indique qui publie le contenu
};
```

---

## 4. Checklist de Livraison Finale

Avant de mettre le site du client en ligne, vérifier :

- [ ] **Google My Business :** Le client a-t-il sa fiche ? (Si non, lui vendre la création).
- [ ] **Sitemap.xml :** Généré et soumis à sa Google Search Console.
- [ ] **Lien Footer :** Présent et cliquable vers `omar-elkoujouk.fr`.
- [ ] **JSON-LD :** Valider le schéma "LocalBusiness" sur l'outil de Google (Rich Results Test).
- [ ] **Portfolio :** Prendre une belle capture d'écran pour L'AJOUTER à mon site.

---
*Ce document est une procédure interne confidentielle.*
