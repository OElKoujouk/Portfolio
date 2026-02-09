import { BlogPost } from "../types";

/**
 * Calcule un score de similarité entre deux articles basé sur:
 * - Tags communs
 * - Proximité temporelle
 * - Mots-clés SEO communs
 */
function calculateSimilarity(post1: BlogPost, post2: BlogPost): number {
  let score = 0;

  // 1. Tags communs (poids: 40%)
  const commonTags = post1.tags.filter(tag => post2.tags.includes(tag));
  score += (commonTags.length / Math.max(post1.tags.length, post2.tags.length)) * 40;

  // 2. Mots-clés SEO communs (poids: 30%)
  const commonKeywords = post1.seoKeywords.filter(kw =>
    post2.seoKeywords.includes(kw)
  );
  score += (commonKeywords.length / Math.max(post1.seoKeywords.length, post2.seoKeywords.length)) * 30;

  // 3. Proximité temporelle (poids: 30%)
  const date1 = new Date(post1.date).getTime();
  const date2 = new Date(post2.date).getTime();
  const daysDiff = Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

  // Plus les articles sont proches dans le temps, plus le score est élevé
  // Max bonus si moins de 7 jours, décroissance jusqu'à 90 jours
  const timeScore = Math.max(0, 30 * (1 - daysDiff / 90));
  score += timeScore;

  return score;
}

/**
 * Trouve les articles similaires à un article donné
 * @param currentPost - L'article actuel
 * @param allPosts - Tous les articles du blog
 * @param limit - Nombre d'articles similaires à retourner (défaut: 3)
 * @returns Articles similaires triés par score de similarité
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] {
  // Filtrer l'article actuel
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);

  // Calculer les scores de similarité
  const postsWithScores = otherPosts.map(post => ({
    post,
    score: calculateSimilarity(currentPost, post)
  }));

  // Trier par score décroissant et limiter le nombre de résultats
  return postsWithScores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}
