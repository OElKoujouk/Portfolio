import { TranslatedText } from "@/features/projects/types";

export type BlogPostBase = {
    slug: string;
    title: TranslatedText;
    excerpt: TranslatedText;
    date: string;
    readingTime: TranslatedText;
    tags: string[];
    content: TranslatedText;
    seoKeywords: { fr: string[]; en: string[] };
    coverImage?: string;
};

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    tags: string[];
    content: string;
    seoKeywords: string[];
    coverImage?: string;
};
