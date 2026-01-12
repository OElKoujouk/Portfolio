// ... imports unchanged
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, BlogPostClient } from "@/features/blog";
import { notFound } from "next/navigation";

type BlogPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, "fr");

    if (!post) {
        return {
            title: "Article non trouvé",
            description: "L'article que vous cherchez n'existe pas."
        };
    }

    return {
        title: `${post.title} | Omar El Koujouk`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Omar El Koujouk"],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        }
    };
}

export function generateStaticParams() {
    return getAllPosts("fr").map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "fr");

    if (!post) {
        notFound();
    }

    // Construction du JSON-LD pour le SEO (Schema.org)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": "Omar El Koujouk",
            "url": "https://omar-elkoujouk.fr"
        },
        "datePublished": post.date,
        "keywords": post.seoKeywords.join(", "),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://omar-elkoujouk.fr/blog/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostClient slug={slug} />
        </>
    );
}
