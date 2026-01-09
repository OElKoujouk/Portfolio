"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getAllPosts } from "@/data/blog";

export default function BlogList() {
    const { t, locale } = useLanguage();
    const posts = getAllPosts(locale);

    return (
        <section className="space-y-12 md:space-y-16">
            <header className="w-full space-y-4 animate-fade-in">
                <p className="text-xs uppercase tracking-[0.4em] text-accent-blue font-semibold">{t.blog.label}</p>
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    <span className="text-gradient">{t.blog.title}</span>
                </h1>
                <p className="mt-4 text-base leading-relaxed text-gray-300 max-w-3xl">
                    {t.blog.description}
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-6" />
            </header>

            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-secondary/50 backdrop-blur-sm transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/10 animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Cover Image or Gradient Header */}
                            <div className="h-48 w-full bg-slate-900 relative overflow-hidden">
                                {post.coverImage ? (
                                    <div className="absolute inset-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10" />
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-full w-full bg-gradient-to-br from-slate-900 to-slate-800 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {post.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="rounded-full bg-white/5 px-2 py-1 text-xs font-medium text-accent-blue border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="mb-3 text-xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                                    {post.title}
                                </h2>

                                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="h-3.5 w-3.5" />
                                            {post.readingTime}
                                        </span>
                                    </div>

                                    <span className="flex items-center gap-1 font-semibold text-accent-blue transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
}
