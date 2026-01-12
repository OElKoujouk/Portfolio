import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/data/projects";
import { getAllPosts } from "@/data/blog";
import { SEO_CONFIG } from "@/lib/constants";

/**
 * Sitemap dynamique Next.js
 * Génère automatiquement toutes les URLs du site incluant les pages de projets et de blog
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SEO_CONFIG.url;
    const projectSlugs = getProjectSlugs();
    const blogPosts = getAllPosts();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/projets`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9, // Le blog est important pour le SEO
        },
    ];

    const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
        url: `${baseUrl}/projets/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticPages, ...projectPages, ...blogPages];
}
