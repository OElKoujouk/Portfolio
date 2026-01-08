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
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Vérification côté serveur
  const projectExists = getProjectBySlug(slug, "fr") || getProjectBySlug(slug, "en");
  if (!projectExists) {
    notFound();
  }

  // Construction du JSON-LD pour Google
  // Note: On utilise les données FR par défaut pour le SEO technique
  const projectFr = getProjectBySlug(slug, "fr");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": projectFr?.title,
    "description": projectFr?.shortDescription,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web, Browser",
    "author": {
      "@type": "Person",
      "name": "Omar El Koujouk",
      "url": "https://omar-elkoujouk.fr"
    },
    "image": projectFr?.image ? `https://omar-elkoujouk.fr${projectFr.image}` : undefined,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient slug={slug} />
    </>
  );
}
