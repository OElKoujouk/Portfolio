"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "../types";
import { useLanguage } from "@/features/i18n";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/projets/${project.slug}`}
      className="card group flex h-full flex-col no-underline outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-accent-blue/70"
      aria-label={`${t.projectDetail.projectLabel}: ${project.title}`}
    >
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={`object-contain p-4 transition-transform duration-700 ${["rivalytics-api", "navzen-projet-prime"].includes(project.slug)
            ? "scale-90 group-hover:scale-100"
            : "scale-150 group-hover:scale-[1.55]"
            }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-0" />
      </div>

      <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent-blue">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="badge text-xs">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="badge text-xs opacity-60">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition-all duration-300 group-hover:gap-3">
        {t.projectDetail.viewDetails}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
