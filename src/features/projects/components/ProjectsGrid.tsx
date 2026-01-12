"use client";

import ProjectCard from "./ProjectCard";
import { getProjects } from "../data/projects";
import { useLanguage } from "@/features/i18n";

export default function ProjectsGrid() {
  const { locale } = useLanguage();
  const projects = getProjects(locale);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
