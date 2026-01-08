"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import ProjectMediaGallery from "@/components/projects/ProjectMediaGallery";
import { getProjectBySlug } from "@/data/projects";

type ProjectDetailClientProps = {
    slug: string;
};

const splitIntoParagraphs = (text?: string) =>
    text
        ?.split(/\n{2,}/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean) ?? [];

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
    const { t, locale } = useLanguage();
    const project = getProjectBySlug(slug, locale);

    // Le projet a été validé côté serveur, mais on garde une vérification
    // pour TypeScript (narrowing) - ne devrait jamais se produire
    if (!project) {
        return null;
    }

    const descriptionParagraphs = splitIntoParagraphs(project.longDescription);
    const solutionParagraphs = splitIntoParagraphs(project.solution);

    return (
        <article className="space-y-10 md:space-y-12">
            <Link
                href="/projets"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-accent-blue animate-fade-in"
            >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                {t.projectDetail.backToProjects}
            </Link>

            <header className="space-y-6 animate-fade-in">
                <p className="text-xs uppercase tracking-[0.4em] text-accent-blue font-semibold">{t.projectDetail.projectLabel}</p>
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    <span className="text-gradient">{project.title}</span>
                </h1>
                <div className="space-y-4 text-base leading-relaxed text-gray-300">
                    {descriptionParagraphs.map((paragraph, index) => (
                        <p key={`desc-${index}`}>{paragraph}</p>
                    ))}
                </div>
            </header>

            <div className="group overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/90 to-slate-800/70 shadow-2xl transition-all duration-500 hover:border-accent-blue/30 animate-fade-in">
                <div className="relative h-[350px] md:h-[450px] lg:h-[500px] w-full flex items-center justify-center">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="100vw"
                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr,1fr] animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
                        <h2 className="text-2xl font-bold text-white">{t.projectDetail.problem}</h2>
                    </div>
                    <p className="mt-3 leading-relaxed text-gray-300">{project.problem}</p>
                </div>
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full" />
                        <h2 className="text-2xl font-bold text-white">{t.projectDetail.stack}</h2>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {project.link && (
                <div className="card animate-fade-in" style={{ animationDelay: "150ms" }}>
                    <h2 className="text-2xl font-bold text-white mb-4">{t.projectDetail.redirect}</h2>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border-2 border-accent-blue/60 bg-accent-blue/10 px-6 py-3 text-sm font-semibold text-accent-blue transition-all duration-300 hover:border-accent-blue hover:bg-accent-blue/20 hover:shadow-lg hover:shadow-accent-blue/30 hover:scale-105"
                    >
                        <span>{project.link}</span>
                        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                </div>
            )}

            {project.workflows && project.workflows.length > 0 && (
                <section className="card animate-fade-in" style={{ animationDelay: "200ms" }}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1 w-8 bg-gradient-to-r from-accent-pink to-accent-blue rounded-full" />
                        <h2 className="text-2xl font-bold text-white">{project.workflowsTitle ?? t.projectDetail.keyWorkflows}</h2>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {project.workflowsIntro ?? t.projectDetail.workflowsDefaultIntro}
                    </p>
                    <div className="mt-6 space-y-4">
                        {project.workflows.map((flow) => (
                            <div
                                key={flow.name}
                                className="group rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-black/20 p-5 transition-all duration-300 hover:border-accent-blue/30 hover:bg-gradient-to-br hover:from-accent-blue/10 hover:to-black/30"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent-blue">
                                        {flow.name}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-300">{flow.description}</p>
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

            <section className="card animate-fade-in" style={{ animationDelay: "250ms" }}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
                    <h2 className="text-2xl font-bold text-white">{t.projectDetail.solutionsResults}</h2>
                </div>
                <div className="mt-3 space-y-4 text-base leading-relaxed text-gray-300">
                    {solutionParagraphs.map((paragraph, index) => (
                        <p key={`solution-${index}`}>{paragraph}</p>
                    ))}
                </div>
            </section>

            {project.demoMedia && project.demoMedia.length > 0 && (
                <section className="card animate-fade-in" style={{ animationDelay: "300ms" }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-1 w-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full" />
                        <h2 className="text-2xl font-bold text-white">{t.projectDetail.demo}</h2>
                    </div>
                    <ProjectMediaGallery items={project.demoMedia} projectTitle={project.title} />
                </section>
            )}
        </article>
    );
}
