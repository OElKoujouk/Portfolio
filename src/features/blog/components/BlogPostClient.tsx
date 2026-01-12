"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useLanguage } from "@/features/i18n";
import { getPostBySlug } from "../data/blog";

export default function BlogPostClient({ slug }: { slug: string }) {
    const { t, locale } = useLanguage();
    const post = getPostBySlug(slug, locale);

    if (!post) {
        return null;
    }

    return (
        <article className="min-h-screen pt-24 pb-20">
            {/* Article Header */}
            <div className="container mx-auto px-6 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent-blue transition-colors mb-8 group"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    {t.blog.backToBlog}
                </Link>

                <div className="space-y-6 mb-12 animate-fade-in">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="rounded-full bg-accent-blue/10 px-3 py-1 text-sm font-medium text-accent-blue border border-accent-blue/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {t.blog.publishedOn} {new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {post.readingTime}
                        </span>
                    </div>
                </div>

                {/* Article Content */}
                <div
                    className="
            animate-slide-up delay-100
            prose prose-invert prose-lg max-w-none
            text-gray-300
            
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-l-4 [&>h2]:border-accent-blue [&>h2]:pl-4
            
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3
            
            [&>p]:leading-relaxed [&>p]:mb-6
            
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li]:marker:text-accent-blue
            
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>ol>li]:marker:text-accent-blue
            
            [&>strong]:text-white [&>strong]:font-semibold
            
            [&>pre]:bg-[#1e1e2e] [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-white/10 [&>pre]:overflow-x-auto [&>pre]:mb-8
            [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-accent-blue [&>pre>code]:font-mono [&>pre>code]:text-sm
            
            [&>*:not(pre)>code]:bg-white/10 [&>*:not(pre)>code]:px-1.5 [&>*:not(pre)>code]:py-0.5 [&>*:not(pre)>code]:rounded [&>*:not(pre)>code]:text-accent-pink [&>*:not(pre)>code]:font-mono [&>*:not(pre)>code]:text-sm
          "
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t.blog.backToBlog}
                    </Link>
                </div>
            </div>
        </article>
    );
}
