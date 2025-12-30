"use client";

import { Project } from "@/data/projectsData";
import { ArrowUpRight, Github, Calendar, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailsClientProps {
    project: Project;
}

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
    const { t, language } = useLanguage();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Breadcrumb / Back */}
                <Link href="/projects" className="text-neutral-500 hover:text-white transition-colors text-sm mb-8 inline-block">
                    &larr; {t.projectDetails.back}
                </Link>

                {/* Project Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 font-medium mb-8">
                            {project.subtitle[language]}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {project.externalLink && (
                                <a
                                    href={project.externalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center gap-2"
                                >
                                    {t.projectDetails.visit} <ArrowUpRight size={20} />
                                </a>
                            )}
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white font-medium rounded-full transition-all flex items-center gap-2"
                                >
                                    <Github size={20} /> {t.projectDetails.repo}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Intro Stats/Info (Optional) */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-2xl">
                            <div className="text-neutral-500 mb-2 flex items-center gap-2">
                                <Calendar size={16} /> {t.projectDetails.year}
                            </div>
                            <div className="text-xl text-white font-medium">{project.year}</div>
                        </div>
                        <div className="p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-2xl">
                            <div className="text-neutral-500 mb-2 flex items-center gap-2">
                                <Layers size={16} /> {t.projectDetails.category}
                            </div>
                            <div className="text-xl text-white font-medium">{project.category}</div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Main Description */}
                    <div className="lg:col-span-2">
                        <div className="bg-neutral-900/20 border border-neutral-800/50 rounded-3xl p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-white mb-6">{t.projectDetails.about}</h2>
                            <p className="text-neutral-400 leading-relaxed text-lg whitespace-pre-line">
                                {project.description[language]}
                            </p>

                            <h3 className="text-xl font-bold text-white mt-10 mb-4">{t.projectDetails.features}</h3>
                            <ul className="space-y-3">
                                {project.features[language].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-400">
                                        <CheckCircle2 size={18} className="text-red-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tools & Tech */}
                    <div className="lg:col-span-1">
                        <div className="bg-neutral-900/20 border border-neutral-800/50 rounded-3xl p-8 md:p-10 sticky top-32">
                            <h2 className="text-2xl font-bold text-white mb-6">{t.projectDetails.tech}</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-neutral-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery / Carousel */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-8">{t.projectDetails.gallery}</h2>
                    <ProjectGallery images={project.images} title={project.title} />
                </div>

            </div>
        </div>
    );
}
