import type { Metadata } from "next";
import { BlogList } from "@/features/blog";

import { cookies } from "next/headers";
import { translations } from "@/features/i18n";

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    const locale = (cookieStore.get("app-locale")?.value as "fr" | "en") || "fr";
    const t = translations[locale].blog.meta;

    return {
        title: t.title,
        description: t.description
    };
}

export default function BlogPage() {
    return <BlogList />;
}
