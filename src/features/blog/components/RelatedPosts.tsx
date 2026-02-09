import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "../types";

interface RelatedPostsProps {
  posts: BlogPost[];
  locale: "fr" | "en";
}

/**
 * Section des articles similaires
 * Améliore l'engagement et le SEO (temps passé sur le site)
 */
export function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  const title = locale === "fr" ? "Articles similaires" : "Related Articles";
  const readMore = locale === "fr" ? "Lire l'article" : "Read article";

  return (
    <section className="mt-16 rounded-2xl border border-white/10 bg-secondary/30 p-6 md:p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">{title}</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-primary/30 transition-all hover:border-accent-blue/40 hover:shadow-lg hover:shadow-accent-blue/10"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 border-b border-white/5 p-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-blue/10 px-2 py-1 text-xs font-medium text-accent-blue"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-3 text-lg font-bold text-white line-clamp-2 group-hover:text-accent-blue transition-colors">
                {post.title}
              </h3>

              <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Metadata */}
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-blue group-hover:gap-3 transition-all">
                <span>{readMore}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
