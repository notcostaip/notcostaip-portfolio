"use client";

import { projects } from "@/data/projectsData";
import { ArrowRight, Layout } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
    const { t, language } = useLanguage();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t.projectsPage.title.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">{t.projectsPage.title.split(" ").slice(1).join(" ")}</span>
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                        {t.projectsPage.description}
                    </p>
                </motion.div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={`/projects/${project.slug}`}
                            className="group block bg-neutral-900/30 border border-neutral-800/50 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:bg-neutral-900/50"
                        >
                            {/* Image */}
                            <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                                {project.coverImage && (
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors" />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium flex items-center gap-2 border border-white/20">
                                        {t.projectsPage.viewDetails} <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{project.title}</h3>
                                        <p className="text-neutral-400 text-sm line-clamp-2">{project.subtitle[language]}</p>
                                    </div>
                                    <div className="p-3 bg-neutral-800/50 rounded-xl text-neutral-400 group-hover:bg-red-500/10 group-hover:text-red-400 transition-colors">
                                        <Layout size={20} />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-full text-xs text-neutral-400">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-full text-xs text-neutral-400">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
