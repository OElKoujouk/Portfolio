import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isContain = project.imageFit === "contain";

  const imageWrapperClass = `relative mb-4 h-40 w-full overflow-hidden rounded-2xl ${
    isContain ? "bg-black/30" : ""
  }`;

  const imageClass = `transition duration-500 ${
    isContain ? "object-contain" : "object-cover group-hover:scale-105"
  }`;

  return (
    <Link
      href={`/projets/${project.slug}`}
      className="card group flex h-full flex-col no-underline outline-none transition focus-visible:ring-2 focus-visible:ring-accent-blue/70"
      aria-label={`Découvrir ${project.title}`}
    >
      <div className={imageWrapperClass}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={imageClass}
        />
      </div>

      <h3 className="text-lg font-semibold text-white">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm text-gray-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent-blue">
        Voir les détails →
      </span>
    </Link>
  );
}
