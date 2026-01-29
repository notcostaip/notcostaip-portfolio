"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import {
    Palette,
    Layout,
    Smartphone,
    Database,
    Server,
    CheckCircle2,
    Code2,
    Terminal,
    Cpu,
    ArrowRight
} from "lucide-react";

// Icon mapping based on strings in the translation file
const iconMap: Record<string, any> = {
    "Palette": Palette,
    "Layout": Layout,
    "Smartphone": Smartphone,
    "Database": Database,
    "Server": Server
};

export default function AboutMe() {
    const { t } = useLanguage();

    // Type casting to handle dynamic translation structure without complex types everywhere
    const whatIDoList = t.about?.whatIDoList as unknown as Array<{ title: string, icon: string }>;
    const toolsCategories = t.about?.toolsCategories as unknown as {
        frontend: { title: string, items: string[] },
        backend: { title: string, items: string[] },
        design: { title: string, items: string[] }
    };
    const uiuxFeatures = t.about?.uiuxFeatures as unknown as string[] || [];

    // Early return if data isn't loaded correctly (prevents crashes during switching)
    if (!whatIDoList || !toolsCategories) return null;

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950">
            {/* Background Decorations - "Dev" Aesthetic */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#ef4444 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">

                {/* 1. TOP CARDS: What I Do & Tools */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Card: What I Do */}
                    <ScrollReveal>
                        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden group">
                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-900/10 rounded-full blur-[80px] group-hover:bg-red-900/20 transition-all duration-500"></div>

                            {/* Icon Header */}
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
                                <Code2 size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{t.about.title}</h3>
                            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed">
                                {t.about.description}
                            </p>

                            <div className="space-y-4">
                                {whatIDoList.map((item, idx) => {
                                    const Icon = iconMap[item.icon] || Code2;
                                    return (
                                        <div key={idx} className="flex items-center gap-4 group/item">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover/item:text-red-500 group-hover/item:bg-red-500/10 transition-colors">
                                                <Icon size={16} />
                                            </div>
                                            <span className="text-neutral-300 font-medium group-hover/item:text-white transition-colors">
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Card: Tools */}
                    <ScrollReveal delay={100}>
                        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden group">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-900/10 rounded-full blur-[80px] group-hover:bg-rose-900/20 transition-all duration-500"></div>

                            {/* Icon Header */}
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
                                <Server size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{t.about.tools}</h3>
                            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed">
                                {t.about.toolsDesc}
                            </p>

                            <div className="space-y-6">
                                {/* Frontend */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span className="text-sm font-bold text-white tracking-wide uppercase">{toolsCategories.frontend.title}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {toolsCategories.frontend.items.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs font-mono text-neutral-300 hover:border-red-500/50 hover:text-white transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Backend */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span className="text-sm font-bold text-white tracking-wide uppercase">{toolsCategories.backend.title}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {toolsCategories.backend.items.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs font-mono text-neutral-300 hover:border-red-500/50 hover:text-white transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Design */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span className="text-sm font-bold text-white tracking-wide uppercase">{toolsCategories.design.title}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {toolsCategories.design.items.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs font-mono text-neutral-300 hover:border-red-500/50 hover:text-white transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* 2. BOTTOM CARD: UI/UX Design Banner */}
                <ScrollReveal delay={200}>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-red-900/10 to-transparent opacity-50"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 text-rose-500 border border-rose-500/20">
                                    <Palette size={24} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {t.about.uiuxTitle}
                                </h3>
                                <p className="text-neutral-400 mb-8 text-lg leading-relaxed max-w-xl">
                                    {t.about.uiuxDesc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {uiuxFeatures.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                                            <span className="text-neutral-300 font-medium">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Visual (Abstract Mockup) */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="relative w-full max-w-md aspect-[4/3] bg-neutral-800 rounded-2xl border border-neutral-700 shadow-2xl p-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 flex flex-col">
                                    {/* Mockup Top Bar */}
                                    {/* Mockup Top Bar (MacOS Style) */}
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    {/* Mockup Content Frame */}
                                    <div className="flex-1 bg-neutral-900/50 rounded-xl border border-neutral-700/50 p-6 flex flex-col gap-4 relative overflow-hidden">
                                        {/* Design System Mock Content */}
                                        <div className="space-y-5 select-none">
                                            {/* Header */}
                                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                                <span className="text-xs font-mono text-neutral-500">design_system.fig</span>
                                                <div className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-[9px] text-red-400 font-bold tracking-wider animate-pulse">CORE V2</div>
                                            </div>

                                            {/* Colors Row */}
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                                                    <span>Colors</span>
                                                    <span>#HEX</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="group/color cursor-default relative h-8 w-10 rounded-lg bg-red-600 shadow-lg shadow-red-600/20 border border-white/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300"></div>
                                                    <div className="h-8 w-10 rounded-lg bg-white shadow-lg border border-white/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 delay-75"></div>
                                                    <div className="h-8 w-10 rounded-lg bg-neutral-800 border border-white/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 delay-100"></div>
                                                    <div className="h-8 w-10 rounded-lg bg-rose-400 shadow-lg shadow-rose-400/20 border border-white/5 hover:scale-110 hover:-translate-y-1 transition-all duration-300 delay-150"></div>
                                                </div>
                                            </div>

                                            {/* Typography & Elements */}
                                            <div className="flex gap-3">
                                                {/* Type */}
                                                <div className="flex-1 space-y-1.5">
                                                    <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Type</span>
                                                    <div className="bg-neutral-800/50 rounded-lg p-2.5 border border-white/5 flex flex-col justify-center h-[52px] group/type hover:bg-neutral-800 transition-colors">
                                                        <span className="text-xl font-bold text-white leading-none tracking-tight group-hover/type:scale-105 transition-transform origin-left">Aa</span>
                                                        <span className="text-[9px] text-neutral-400 mt-1">Inter Display</span>
                                                    </div>
                                                </div>
                                                {/* Spacing/Grid Visual */}
                                                <div className="flex-1 space-y-1.5">
                                                    <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Grid</span>
                                                    <div className="bg-neutral-800/50 rounded-lg p-1 border border-white/5 h-[52px] grid grid-cols-4 gap-1">
                                                        <div className="bg-red-500/20 rounded-sm animate-pulse"></div>
                                                        <div className="bg-red-500/20 rounded-sm animate-pulse delay-75"></div>
                                                        <div className="bg-red-500/20 rounded-sm animate-pulse delay-150"></div>
                                                        <div className="bg-red-500/20 rounded-sm animate-pulse delay-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* "Explore" Button inside mockup */}
                                        <div className="absolute bottom-6 right-6">
                                            <div className="px-6 py-2 bg-red-600 rounded-lg shadow-lg shadow-red-600/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                                {t.about.explore}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Glow behind mockup */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-500/20 blur-[100px] -z-10 group-hover:bg-rose-500/30 transition-colors"></div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
