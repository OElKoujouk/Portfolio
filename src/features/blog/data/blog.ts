import { BlogPost, BlogPostBase } from "../types";
import { nextjsProjetWeb2026 } from "./posts/nextjs-projet-web-2026";
import { react19Nouveautes } from "./posts/react-19-nouveautes";
import { typescriptQualite } from "./posts/typescript-qualite-code";
import { headlessVsWordpress } from "./posts/headless-cms-vs-wordpress";
import { mobileFirstUx } from "./posts/ux-mobile-first-pwa-2026";
import { iaDevWeb } from "./posts/ia-developpement-web";
import { infrastructureCiCd } from "./posts/infrastructure-ci-cd";

export const BLOG_POSTS: BlogPostBase[] = [
  nextjsProjetWeb2026,
  react19Nouveautes,
  typescriptQualite,
  headlessVsWordpress,
  mobileFirstUx,
  iaDevWeb,
  infrastructureCiCd,
];

function resolveBlogPost(post: BlogPostBase, locale: string): BlogPost {
  // Default to 'fr' if locale is not 'en' (simple fallback)
  const lang = locale === 'en' ? 'en' : 'fr';

  return {
    slug: post.slug,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
    date: post.date,
    readingTime: post.readingTime[lang],
    tags: post.tags,
    content: post.content[lang],
    seoKeywords: post.seoKeywords[lang],
    coverImage: post.coverImage,
    faqs: post.faqs ? post.faqs[lang] : undefined,
  };
}

export function getPostBySlug(slug: string, locale: string = 'fr'): BlogPost | undefined {
  const post = BLOG_POSTS.find((post) => post.slug === slug);
  if (!post) return undefined;

  return resolveBlogPost(post, locale);
}

export function getAllPosts(locale: string = 'fr'): BlogPost[] {
  return BLOG_POSTS
    .map(post => resolveBlogPost(post, locale))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
