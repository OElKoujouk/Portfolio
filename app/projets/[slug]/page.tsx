import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  // Pour les métadonnées statiques, on utilise le français par défaut
  const project = getProjectBySlug(params.slug, "fr");
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} | Projects`,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  // On passe juste le slug, le composant client gérera la langue
  return <ProjectDetailClient slug={params.slug} />;
}
