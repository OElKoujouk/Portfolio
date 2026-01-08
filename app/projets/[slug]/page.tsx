import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  // Pour les métadonnées statiques, on utilise le français par défaut
  const project = getProjectBySlug(slug, "fr");
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} | Projects`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  // Vérification côté serveur - le projet doit exister dans au moins une langue
  const projectExists = getProjectBySlug(slug, "fr") || getProjectBySlug(slug, "en");
  if (!projectExists) {
    notFound();
  }
  
  // On passe juste le slug, le composant client gérera la langue
  return <ProjectDetailClient slug={slug} />;
}
