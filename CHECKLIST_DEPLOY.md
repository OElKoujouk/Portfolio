# ✅ Checklist Pré-Déploiement & Post-Déploiement

## 🚀 ÉTAPE 1 : Vérifications Locales (AVANT COMMIT)

### Build & Lint
```bash
# 1. Build de production (doit passer sans erreur)
npm run build

# 2. ESLint (aucun warning critique)
npm run lint

# 3. Vérifier la taille du bundle
# Objectif : First Load JS < 200 KB
```

**Résultats attendus :**
- ✅ Build réussi sans erreur
- ✅ Aucune erreur TypeScript
- ✅ Warnings ESLint < 5

---

### Tests Fonctionnels Locaux

```bash
# Lancer le serveur local
npm run dev
# Ouvrir http://localhost:3000
```

#### Pages à tester :

| Page | URL | Vérifications |
|------|-----|---------------|
| **Accueil** | http://localhost:3000 | ✅ JSON-LD Person/Business visibles |
| **Blog List** | http://localhost:3000/blog | ✅ 7 articles affichés |
| **Article 1** | http://localhost:3000/blog/nextjs-projet-web-2026 | ✅ FAQ accordéon fonctionnel<br>✅ AuthorBio visible<br>✅ Related Posts (3 articles)<br>✅ Breadcrumbs présents |
| **Article 2** | http://localhost:3000/blog/react-19-nouveautes | ✅ Mêmes vérifications |
| **Projets** | http://localhost:3000/projets | ✅ 7 projets affichés |
| **Contact** | http://localhost:3000/contact | ✅ Formulaire fonctionnel |
| **Manifest** | http://localhost:3000/manifest.json | ✅ JSON valide |

---

### Validation Schema.org

```bash
# Extraire le JSON-LD de la page d'accueil
curl -s http://localhost:3000 | grep -A 50 'application/ld+json'

# Valider sur : https://validator.schema.org/
# 1. Copier tout le JSON-LD (entre <script> et </script>)
# 2. Coller dans l'outil de validation
# 3. Vérifier : AUCUNE ERREUR
```

**Schemas à valider :**
- ✅ Person (avec knowsAbout, address, geo)
- ✅ Organization (avec geo, openingHours)
- ✅ BlogPosting (sur chaque article)
- ✅ FAQPage (sur chaque article)
- ✅ BreadcrumbList (sur articles/projets)
- ✅ ItemList (portfolio.json)

---

### Validation Open Graph

```bash
# Tester sur : https://www.opengraph.xyz/
# URL à tester : http://localhost:3000/blog/nextjs-projet-web-2026
```

**Vérifications :**
- ✅ Image 1200x630 affichée
- ✅ Titre correct
- ✅ Description complète
- ✅ Type "article"
- ✅ Tags visibles

---

### Validation PWA Manifest

```bash
# Tester sur : https://manifest-validator.appspot.com/
# URL à valider : http://localhost:3000/manifest.json
```

**Vérifications :**
- ✅ JSON valide
- ✅ Icons 192x192 et 512x512
- ✅ Description complète
- ✅ Theme color #00d9ff

---

### Performance Locale

```bash
# Lighthouse CI (optionnel mais recommandé)
npx lighthouse http://localhost:3000 --view --only-categories=performance,seo

# Objectifs :
# - Performance : 90+
# - SEO : 95+
```

---

## 🔥 ÉTAPE 2 : Commit & Push

```bash
# 1. Vérifier les fichiers modifiés
git status

# 2. Ajouter tous les fichiers
git add .

# 3. Commit avec message détaillé
git commit -m "feat(seo): améliorations SEO/GEO majeures

✨ Nouvelles fonctionnalités
- FAQ Schema.org (35 Q&R sur 7 articles)
- Related Posts avec algorithme de similarité
- Breadcrumbs avec Schema.org
- AuthorBio sur tous les articles
- Open Graph images optimisées

🌍 Internationalisation
- Hreflang tags FR/EN
- FAQ bilingues complètes

📈 SEO Technique
- GeoCoordinates Paris (48.8566, 2.3522)
- knowsAbout (11 compétences)
- PWA Manifest enrichi
- Portfolio JSON-LD (7 projets)

📊 Impact estimé
- +66% visibilité SEO/GEO
- +20% featured snippets
- +15% temps sur site

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Push vers GitHub
git push origin main
```

---

## 🚀 ÉTAPE 3 : Déploiement Vercel

### Vérifications Automatiques Vercel

Vercel va :
1. ✅ Builder le projet avec Next.js 16
2. ✅ Exécuter les tests (si configurés)
3. ✅ Déployer sur l'URL de production

**URL de production :** https://omar-elkoujouk.fr

---

## 📈 ÉTAPE 4 : Tests Post-Déploiement (J+0 - Immédiat)

### 1. Performance Production

```bash
# Lighthouse Production
npx lighthouse https://omar-elkoujouk.fr --view

# Objectifs :
# - Performance : 90+ (Desktop), 85+ (Mobile)
# - SEO : 95+
# - Best Practices : 95+
# - Accessibility : 90+
```

**Vercel Speed Insights** (automatique si activé) :
- Dashboard : https://vercel.com/[votre-projet]/analytics

---

### 2. Validation Schema.org Production

```bash
# 1. Ouvrir : https://validator.schema.org/
# 2. Tester les URLs suivantes :

# Homepage
https://omar-elkoujouk.fr

# Article avec FAQ
https://omar-elkoujouk.fr/blog/nextjs-projet-web-2026

# Projet
https://omar-elkoujouk.fr/projets/navzen

# Portfolio JSON-LD
https://omar-elkoujouk.fr/structured-data/portfolio.json
```

**Résultat attendu :** AUCUNE ERREUR sur aucune page

---

### 3. Validation Open Graph

```bash
# Tester sur : https://www.opengraph.xyz/
# OU : https://cards-dev.twitter.com/validator

# URLs à tester :
https://omar-elkoujouk.fr/blog/nextjs-projet-web-2026
https://omar-elkoujouk.fr/blog/react-19-nouveautes
https://omar-elkoujouk.fr/projets/navzen
```

**Vérifications :**
- ✅ Images 1200x630 chargées
- ✅ Pas d'image cassée
- ✅ Description complète

---

### 4. Test Mobile Responsive

```bash
# Ouvrir DevTools Chrome (F12)
# Activer Device Toolbar (Ctrl+Shift+M)
# Tester sur :
# - iPhone 14 Pro Max (430x932)
# - Samsung Galaxy S21 (360x800)
# - iPad Pro (1024x1366)
```

**Pages critiques :**
- ✅ Accueil
- ✅ Article de blog
- ✅ Formulaire contact

---

### 5. Test Partage Social

```bash
# LinkedIn
# 1. Créer un post test
# 2. Coller : https://omar-elkoujouk.fr/blog/nextjs-projet-web-2026
# 3. Vérifier aperçu avant publication

# Twitter/X
# Même procédure

# Facebook
# Utiliser : https://developers.facebook.com/tools/debug/
```

---

## 🔍 ÉTAPE 5 : Google Search Console (J+1 à J+3)

### 1. Soumettre le Sitemap

```bash
# 1. Ouvrir : https://search.google.com/search-console
# 2. Sélectionner : omar-elkoujouk.fr
# 3. Menu : Sitemaps
# 4. Ajouter : https://omar-elkoujouk.fr/sitemap.xml
# 5. Cliquer : ENVOYER
```

**Résultat attendu :**
- ✅ Sitemap indexé avec succès
- ✅ ~20-30 URLs détectées (pages + articles + projets)

---

### 2. Demander Ré-indexation

```bash
# Pour chaque article modifié :
# 1. Menu : Inspection de l'URL
# 2. Coller : https://omar-elkoujouk.fr/blog/nextjs-projet-web-2026
# 3. Cliquer : DEMANDER UNE INDEXATION
# 4. Répéter pour tous les articles

# Articles à ré-indexer :
- /blog/nextjs-projet-web-2026
- /blog/react-19-nouveautes
- /blog/typescript-qualite-code
- /blog/ia-developpement-web
- /blog/infrastructure-ci-cd
- /blog/headless-cms-vs-wordpress
- /blog/ux-mobile-first-pwa-2026
```

---

### 3. Surveiller Rich Results

```bash
# 1. Menu : Améliorations > Rich Results
# 2. Attendre 3-7 jours
# 3. Vérifier présence de :
#    - FAQPage (7 articles)
#    - BreadcrumbList
#    - BlogPosting
```

**Résultat attendu (J+7) :**
- ✅ 7 FAQPage détectées
- ✅ Aucune erreur de validation

---

## 📊 ÉTAPE 6 : Monitoring Performance (J+7 à J+30)

### 1. Vercel Analytics

```bash
# Dashboard : https://vercel.com/[votre-projet]/analytics

# Métriques à surveiller :
- Visitors : +20-30% dans les 30 jours
- Bounce Rate : <50% (cible : 40%)
- Avg. Session Duration : >2min
- Pages/Session : >2.5
```

---

### 2. Google Analytics (si configuré)

```bash
# Métriques clés :
- Organic Search Traffic : +30% (vs. mois précédent)
- Avg. Time on Page : >3min (articles)
- Bounce Rate : <45%
```

---

### 3. Google Search Console - Performance

```bash
# Menu : Performances
# Période : 30 derniers jours

# Métriques attendues (vs. mois précédent) :
- Impressions : +40%
- Clics : +25%
- CTR moyen : +15%
- Position moyenne : -2 (amélioration)
```

**Requêtes cibles à surveiller :**
- "développeur Salesforce Paris"
- "expert Next.js freelance"
- "développeur Full-Stack React"
- "Next.js vs WordPress"

---

## 🎯 ÉTAPE 7 : Audit SEO Automatisé (J+14)

### 1. Lighthouse CI (Production)

```bash
npx lighthouse https://omar-elkoujouk.fr \
  --only-categories=performance,seo,best-practices,accessibility \
  --output=html \
  --output-path=./lighthouse-report.html \
  --view

# Objectifs finaux :
# - Performance : 92+/100
# - SEO : 98+/100
# - Best Practices : 95+/100
# - Accessibility : 92+/100
```

---

### 2. Outils SEO Professionnels (optionnel)

#### Ahrefs
```bash
# Dashboard : https://ahrefs.com/
# Ajouter : omar-elkoujouk.fr
# Surveiller :
# - Domain Rating (DR) : cible 25+ en 6 mois
# - Backlinks : +5-10 liens naturels
# - Organic Keywords : +20-30 mots-clés
```

#### SEMrush
```bash
# Project : omar-elkoujouk.fr
# Audit de site : Score 85+/100
# Vérifier :
# - Erreurs critiques : 0
# - Avertissements : <5
```

---

## 📈 KPIs de Succès (30 jours)

| Métrique | Avant | Objectif J+30 | Méthode de mesure |
|----------|-------|---------------|-------------------|
| **SEO Score** | 78/100 | 96/100 | Lighthouse |
| **GEO Score** | 45/100 | 92/100 | Manual check (ChatGPT, Perplexity) |
| **Organic Traffic** | Baseline | +30% | Google Analytics |
| **Featured Snippets** | 0 | 3-5 | Google Search Console |
| **Position moyenne** | ~15 | ~8 | Google Search Console |
| **Time on Page** | 2m30s | 3m15s | Vercel Analytics |
| **Bounce Rate** | 55% | 40% | Vercel Analytics |

---

## 🚨 Checklist Finale

### Avant Commit
- [x] ✅ npm run build (sans erreur)
- [x] ✅ npm run lint (sans erreur)
- [x] ✅ Alt text sur toutes les images
- [x] ✅ FAQ visibles sur articles
- [x] ✅ AuthorBio visible
- [x] ✅ Related Posts fonctionnels
- [x] ✅ Breadcrumbs présents
- [x] ✅ Manifest.json valide
- [x] ✅ Schema.org sans erreur (validator.schema.org)

### Post-Déploiement J+0
- [ ] ✅ Lighthouse Production : 90+/100
- [ ] ✅ Open Graph images OK
- [ ] ✅ Test mobile responsive
- [ ] ✅ Test partage LinkedIn

### Post-Déploiement J+1 à J+3
- [ ] ✅ Google Search Console : Sitemap soumis
- [ ] ✅ Ré-indexation demandée (7 articles)
- [ ] ✅ Rich Results surveillés

### Post-Déploiement J+7 à J+30
- [ ] ✅ Vercel Analytics : +20% visitors
- [ ] ✅ Google Search Console : +30% impressions
- [ ] ✅ Featured Snippets : 3-5 détectés
- [ ] ✅ Position moyenne : <10

---

## 📞 Support & Ressources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Vercel Docs](https://vercel.com/docs)

### Outils de Test
- **Schema.org Validator** : https://validator.schema.org/
- **Open Graph Debugger** : https://www.opengraph.xyz/
- **Manifest Validator** : https://manifest-validator.appspot.com/
- **Lighthouse** : https://pagespeed.web.dev/
- **Google Rich Results** : https://search.google.com/test/rich-results

---

**Dernière mise à jour :** 2026-02-09
**Auteur :** Omar El Koujouk
**Assistance :** Claude Code
