import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

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

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-blue">Projet</p>
        <h1 className="text-3xl font-semibold text-white">{project.title}</h1>
        <p className="text-gray-300">{project.longDescription}</p>
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
          <h2 className="text-2xl font-semibold text-white">Problematique</h2>
          <p className="mt-3 text-gray-300">{project.problem}</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Stack utilisee</h2>
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
              Voir la demo
            </a>
          )}
        </div>
      </div>

      {project.workflows && project.workflows.length > 0 && (
        <section className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Workflows cles</h2>
          <p className="mt-3 text-sm text-gray-400">
            Suite coordonnee de scenarios n8n couvrant ideation, production et prospection.
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
        <h2 className="text-2xl font-semibold text-white">Solutions & resultats</h2>
        <p className="mt-3 text-gray-300">{project.solution}</p>
      </section>

      {project.demoMedia && project.demoMedia.length > 0 && (
        <section className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Demo</h2>
          <p className="mt-3 text-sm text-gray-400">
            Quelques extraits visuels pour {project.title} : captures et walkthroughs.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {project.demoMedia.map((media) => (
              <div key={media.src} className="space-y-3 rounded-2xl border border-white/5 bg-black/20 p-4">
                <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
                  {media.type === "image" ? (
                    <div className="relative h-56 w-full">
                      <Image
                        src={media.src}
                        alt={media.title || project.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative h-56 w-full">
                      <iframe
                        src={media.src}
                        title={media.title || "Demo video"}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
                {media.title && <h3 className="text-lg font-semibold text-white">{media.title}</h3>}
                {media.description && <p className="text-sm text-gray-300">{media.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
