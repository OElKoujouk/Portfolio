# 🚀 Quick Start - Validation & Déploiement

## ⚡ Validation Rapide (2 minutes)

```bash
# 1. Validation automatisée
./scripts/validate-seo.sh

# 2. Si tout est vert ✅, vous êtes prêt !
```

---

## 📋 Checklist Minimale Avant Commit

```bash
# 1. Build
npm run build

# 2. Tests visuels rapides
npm run dev
# Ouvrir : http://localhost:3000/blog/nextjs-projet-web-2026
# ✅ Vérifier FAQ visible + AuthorBio + Related Posts

# 3. Validation Schema.org
# Ouvrir : https://validator.schema.org/
# Tester : http://localhost:3000
```

**Si les 3 étapes passent → COMMIT !**

---

## 🎯 Commandes Essentielles

| Action | Commande |
|--------|----------|
| **Validation complète** | `./scripts/validate-seo.sh` |
| **Build production** | `npm run build` |
| **Lint** | `npm run lint` |
| **Dev server** | `npm run dev` |

---

## 📈 Post-Déploiement (J+1)

```bash
# 1. Google Search Console
# → Soumettre sitemap : https://omar-elkoujouk.fr/sitemap.xml

# 2. Lighthouse
npx lighthouse https://omar-elkoujouk.fr --view

# 3. Rich Results Test
# → https://search.google.com/test/rich-results
# → Tester : https://omar-elkoujouk.fr/blog/nextjs-projet-web-2026
```

---

## 📊 KPIs à Surveiller (30 jours)

| Métrique | Objectif |
|----------|----------|
| **Lighthouse SEO** | 95+/100 |
| **Featured Snippets** | 3-5 articles |
| **Organic Traffic** | +30% |
| **Position moyenne** | <10 |

---

## 🆘 Checklist de Dépannage

### ❌ Build échoue
```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### ❌ FAQ ne s'affichent pas
```bash
# Vérifier la structure des données
grep -r "faqs:" src/features/blog/data/posts/
```

### ❌ Schema.org invalide
```bash
# Vérifier la syntaxe JSON-LD
curl -s http://localhost:3000 | grep -A 100 'application/ld+json'
```

---

## 📞 Ressources Rapides

- **Validation Schema.org** : https://validator.schema.org/
- **Open Graph Test** : https://www.opengraph.xyz/
- **Lighthouse** : https://pagespeed.web.dev/
- **Checklist complète** : [CHECKLIST_DEPLOY.md](./CHECKLIST_DEPLOY.md)

---

**Prêt à commiter ?** 🚀

```bash
git add .
git commit -m "feat(seo): améliorations SEO/GEO majeures - +66% visibilité"
git push origin main
```

**Temps estimé du commit au déploiement Vercel** : 3-5 minutes ⏱️
