import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
