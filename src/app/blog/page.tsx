import type { Metadata } from "next";
import { BlogList } from "@/features/blog";

export const metadata: Metadata = {
    title: "Blog | Omar El Koujouk",
    description: "Retours d'expérience et analyses techniques sur Next.js, React et Salesforce.",
};

export default function BlogPage() {
    return <BlogList />;
}
