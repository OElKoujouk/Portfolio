import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/data/projects";
import { SEO_CONFIG } from "@/lib/constants";

/**
 * Sitemap dynamique Next.js
 * Génère automatiquement toutes les URLs du site incluant les pages de projets
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SEO_CONFIG.url;
    const projectSlugs = getProjectSlugs();

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
    ];

    const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
        url: `${baseUrl}/projets/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticPages, ...projectPages];
}
