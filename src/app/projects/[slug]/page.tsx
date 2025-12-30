import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "./ProjectDetailsClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailsClient project={project} />;
}
