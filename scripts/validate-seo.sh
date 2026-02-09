#!/bin/bash

# 🔍 Script de Validation SEO/GEO Automatisé
# Auteur: Omar El Koujouk
# Date: 2026-02-09

set -e

echo "================================================"
echo "🔍 VALIDATION SEO/GEO - Portfolio Omar El Koujouk"
echo "================================================"
echo ""

# Couleurs pour l'output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
PASSED=0
FAILED=0
WARNINGS=0

# URL de test (local ou production)
BASE_URL="${1:-http://localhost:3001}"

echo "📍 URL de test: $BASE_URL"
echo ""

# ========================================
# 1. Vérification Build
# ========================================
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 ÉTAPE 1: Vérification Build"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build réussi${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Build échoué${NC}"
    ((FAILED++))
fi

# ========================================
# 2. Vérification ESLint
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔧 ÉTAPE 2: Vérification ESLint"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if npm run lint > /dev/null 2>&1; then
    echo -e "${GREEN}✅ ESLint: Aucune erreur${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  ESLint: Warnings détectés${NC}"
    ((WARNINGS++))
fi

# ========================================
# 3. Vérification Manifest
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📱 ÉTAPE 3: Vérification PWA Manifest"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

MANIFEST_RESPONSE=$(curl -s "$BASE_URL/manifest.json")

if echo "$MANIFEST_RESPONSE" | grep -q '"name"'; then
    echo -e "${GREEN}✅ Manifest.json accessible${NC}"
    ((PASSED++))

    # Vérifications détaillées
    if echo "$MANIFEST_RESPONSE" | grep -q '"icons"'; then
        echo -e "${GREEN}  ✅ Icons présents${NC}"
    else
        echo -e "${RED}  ❌ Icons manquants${NC}"
        ((FAILED++))
    fi

    if echo "$MANIFEST_RESPONSE" | grep -q '"theme_color"'; then
        echo -e "${GREEN}  ✅ Theme color défini${NC}"
    else
        echo -e "${YELLOW}  ⚠️  Theme color manquant${NC}"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}❌ Manifest.json non accessible${NC}"
    ((FAILED++))
fi

# ========================================
# 4. Vérification JSON-LD (Homepage)
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 ÉTAPE 4: Vérification Schema.org (Homepage)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

HOMEPAGE_HTML=$(curl -s "$BASE_URL")

# Vérifier présence de JSON-LD
JSONLD_COUNT=$(echo "$HOMEPAGE_HTML" | grep -o 'application/ld+json' | wc -l)

if [ "$JSONLD_COUNT" -ge 2 ]; then
    echo -e "${GREEN}✅ $JSONLD_COUNT Schema.org détectés${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Moins de 2 Schema.org détectés${NC}"
    ((FAILED++))
fi

# Vérifier Person Schema
if echo "$HOMEPAGE_HTML" | grep -q '"@type":"Person"'; then
    echo -e "${GREEN}  ✅ Person Schema présent${NC}"

    # Vérifier knowsAbout
    if echo "$HOMEPAGE_HTML" | grep -q 'knowsAbout'; then
        echo -e "${GREEN}    ✅ knowsAbout défini${NC}"
    else
        echo -e "${YELLOW}    ⚠️  knowsAbout manquant${NC}"
        ((WARNINGS++))
    fi

    # Vérifier geo
    if echo "$HOMEPAGE_HTML" | grep -q 'GeoCoordinates'; then
        echo -e "${GREEN}    ✅ GeoCoordinates présentes${NC}"
    else
        echo -e "${YELLOW}    ⚠️  GeoCoordinates manquantes${NC}"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}  ❌ Person Schema manquant${NC}"
    ((FAILED++))
fi

# Vérifier Organization Schema
if echo "$HOMEPAGE_HTML" | grep -q '"@type":"ProfessionalService"'; then
    echo -e "${GREEN}  ✅ ProfessionalService Schema présent${NC}"
else
    echo -e "${YELLOW}  ⚠️  ProfessionalService Schema manquant${NC}"
    ((WARNINGS++))
fi

# ========================================
# 5. Vérification Blog Post (avec FAQ)
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 ÉTAPE 5: Vérification Article Blog + FAQ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

BLOG_HTML=$(curl -s "$BASE_URL/blog/nextjs-projet-web-2026")

# Vérifier FAQPage Schema
if echo "$BLOG_HTML" | grep -q '"@type":"FAQPage"'; then
    echo -e "${GREEN}✅ FAQPage Schema présent${NC}"
    ((PASSED++))

    # Compter les questions
    FAQ_COUNT=$(echo "$BLOG_HTML" | grep -o '"@type":"Question"' | wc -l)
    if [ "$FAQ_COUNT" -ge 5 ]; then
        echo -e "${GREEN}  ✅ $FAQ_COUNT FAQ détectées${NC}"
    else
        echo -e "${YELLOW}  ⚠️  Seulement $FAQ_COUNT FAQ détectées (attendu: 5+)${NC}"
        ((WARNINGS++))
    fi
else
    echo -e "${RED}❌ FAQPage Schema manquant${NC}"
    ((FAILED++))
fi

# Vérifier BlogPosting Schema
if echo "$BLOG_HTML" | grep -q '"@type":"BlogPosting"'; then
    echo -e "${GREEN}✅ BlogPosting Schema présent${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ BlogPosting Schema manquant${NC}"
    ((FAILED++))
fi

# Vérifier BreadcrumbList Schema
if echo "$BLOG_HTML" | grep -q '"@type":"BreadcrumbList"'; then
    echo -e "${GREEN}✅ BreadcrumbList Schema présent${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  BreadcrumbList Schema manquant${NC}"
    ((WARNINGS++))
fi

# Vérifier présence AuthorBio
if echo "$BLOG_HTML" | grep -q 'À propos de l'"'"'auteur' || echo "$BLOG_HTML" | grep -q 'About the Author'; then
    echo -e "${GREEN}✅ AuthorBio présent${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  AuthorBio non détecté${NC}"
    ((WARNINGS++))
fi

# ========================================
# 6. Vérification Open Graph
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🖼️  ÉTAPE 6: Vérification Open Graph"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Vérifier og:image
if echo "$BLOG_HTML" | grep -q 'property="og:image"'; then
    echo -e "${GREEN}✅ og:image défini${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ og:image manquant${NC}"
    ((FAILED++))
fi

# Vérifier og:type
if echo "$BLOG_HTML" | grep -q 'property="og:type" content="article"'; then
    echo -e "${GREEN}✅ og:type = article${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  og:type incorrect ou manquant${NC}"
    ((WARNINGS++))
fi

# Vérifier Twitter Card
if echo "$BLOG_HTML" | grep -q 'twitter:card'; then
    echo -e "${GREEN}✅ Twitter Card définie${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  Twitter Card manquante${NC}"
    ((WARNINGS++))
fi

# ========================================
# 7. Vérification Hreflang
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌍 ÉTAPE 7: Vérification Hreflang"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if echo "$HOMEPAGE_HTML" | grep -q 'hreflang="fr"'; then
    echo -e "${GREEN}✅ Hreflang FR défini${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  Hreflang FR manquant${NC}"
    ((WARNINGS++))
fi

if echo "$HOMEPAGE_HTML" | grep -q 'hreflang="en"'; then
    echo -e "${GREEN}✅ Hreflang EN défini${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  Hreflang EN manquant${NC}"
    ((WARNINGS++))
fi

# ========================================
# 8. Vérification Alt Text Images
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🖼️  ÉTAPE 8: Vérification Alt Text"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

EMPTY_ALT_COUNT=$(grep -r 'alt=""' src/ 2>/dev/null | wc -l || echo "0")

if [ "$EMPTY_ALT_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✅ Aucun alt vide détecté${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  $EMPTY_ALT_COUNT images avec alt vide${NC}"
    ((WARNINGS++))
fi

# ========================================
# RAPPORT FINAL
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RAPPORT FINAL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}✅ Tests réussis: $PASSED${NC}"
echo -e "${YELLOW}⚠️  Warnings: $WARNINGS${NC}"
echo -e "${RED}❌ Tests échoués: $FAILED${NC}"
echo ""

TOTAL=$((PASSED + WARNINGS + FAILED))
if [ $TOTAL -eq 0 ]; then
    TOTAL=1
fi

SUCCESS_RATE=$((PASSED * 100 / TOTAL))

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$FAILED" -eq 0 ]; then
    echo -e "${GREEN}🎉 VALIDATION RÉUSSIE - Score: $SUCCESS_RATE%${NC}"
    echo ""
    echo "✅ Prêt pour le déploiement!"
    exit 0
else
    echo -e "${RED}❌ VALIDATION ÉCHOUÉE - Score: $SUCCESS_RATE%${NC}"
    echo ""
    echo "⚠️  Veuillez corriger les erreurs avant de déployer."
    exit 1
fi
