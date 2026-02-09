import { TranslatedText } from "@/features/projects/types";

export type FAQItem = {
    question: string;
    answer: string;
};

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
    faqs?: { fr: FAQItem[]; en: FAQItem[] };
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
    faqs?: FAQItem[];
};
