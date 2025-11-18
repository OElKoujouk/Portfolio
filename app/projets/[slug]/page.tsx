import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import ProjectMediaGallery from "@/components/ProjectMediaGallery";

type ProjectPageProps = {
  params: { slug: string };
};

const splitIntoParagraphs = (text?: string) =>
  text
    ?.split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean) ?? [];

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projet introuvable" };
  }
  return {
    title: `${project.title} | Projets`,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const descriptionParagraphs = splitIntoParagraphs(project.longDescription);
  const solutionParagraphs = splitIntoParagraphs(project.solution);

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-blue">Projet</p>
        <h1 className="text-3xl font-semibold text-white">{project.title}</h1>
        <div className="space-y-3 text-gray-300">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={`desc-${index}`}>{paragraph}</p>
          ))}
        </div>
      </header>

      <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={450}
          className="h-[500px] w-full object-cover"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Problématique</h2>
          <p className="mt-3 text-gray-300">{project.problem}</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Stack utilisée</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-accent-blue"
            >
              Voir la démo
            </a>
          )}
        </div>
      </div>

      {project.workflows && project.workflows.length > 0 && (
        <section className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">{project.workflowsTitle ?? "Workflows clés"}</h2>
          <p className="mt-3 text-sm text-gray-400">
            {project.workflowsIntro ??
              "Suite coordonnée de scénarios couvrant les étapes essentielles du produit présenté."}
          </p>
          <div className="mt-6 space-y-5">
            {project.workflows.map((flow) => (
              <div key={flow.name} className="rounded-2xl border border-white/5 bg-black/20 p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">{flow.name}</h3>
                  <p className="text-sm text-gray-300">{flow.description}</p>
                  {flow.tech && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {flow.tech.map((tech) => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">Solutions & résultats</h2>
        <div className="mt-3 space-y-3 text-gray-300">
          {solutionParagraphs.map((paragraph, index) => (
            <p key={`solution-${index}`}>{paragraph}</p>
          ))}
        </div>
      </section>

      {project.demoMedia && project.demoMedia.length > 0 && (
        <section className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Démo</h2>
          <ProjectMediaGallery items={project.demoMedia} projectTitle={project.title} />
        </section>
      )}
    </article>
  );
}
