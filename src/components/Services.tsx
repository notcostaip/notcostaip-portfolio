"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Layout, MonitorSmartphone, CheckCircle2 } from "lucide-react";

export default function Services() {
    const { t } = useLanguage();

    const icons = [Layout, MonitorSmartphone, Zap];
    const gradients = [
        "from-red-500/10 to-orange-500/10",
        "from-blue-500/10 to-cyan-500/10", // Using blue here but carefully as requested by design agent, actually let's stick to brand colors (red/rose) or neutrals.
        "from-emerald-500/10 to-teal-500/10"
    ];

    // Override gradients to stick to Red/Rose/Dark aesthetic
    const cardStyles = [
        "border-neutral-200 dark:border-neutral-800 hover:border-red-500/30",
        "border-neutral-200 dark:border-neutral-800 hover:border-red-500/30",
        "border-neutral-200 dark:border-neutral-800 hover:border-red-500/30"
    ];

    return (
        <section id="services" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950/50">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                            {t.services.title}
                        </h2>
                        <div className="h-1 w-24 bg-red-600 rounded-full"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.services.items.map((item, idx) => {
                        const Icon = icons[idx] || Layout;

                        return (
                            <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                                <div className={`h-full p-8 rounded-3xl bg-white dark:bg-neutral-900 border ${cardStyles[idx]} transition-all duration-300 hover:shadow-xl hover:shadow-red-900/5 group relative overflow-hidden`}>

                                    {/* Hover Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-red-500/10">
                                            <Icon className="text-neutral-700 dark:text-neutral-300 group-hover:text-red-500 transition-colors" size={28} />
                                        </div>

                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 pr-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
