"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Smartphone, Palette, FileCode } from "lucide-react";

export default function Methodology() {
    const { t } = useLanguage();

    // UNIFIED RED THEME - No Rainbow Colors
    // All cards use the same premium "Lava" aesthetic
    const style = {
        iconColor: "text-red-500",
        iconBg: "bg-red-500/10",
        border: "border-neutral-800",
        hoverBorder: "group-hover:border-red-500/50",
        hoverShadow: "group-hover:shadow-red-900/20",
        glow: "bg-red-500"
    };

    const icons = [Palette, Zap, Smartphone, FileCode];

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-white/50 dark:bg-neutral-950/50">
            {/* Background Decor - Subtle Gradients */}
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                            {t.methodology.title}
                        </h2>
                        {/* Lava Gradient Underline */}
                        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto"></div>
                    </div>
                </ScrollReveal>

                {/* 4-Column Grid for "Dev Aesthetic" cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.methodology.items.map((item, index) => {
                        const Icon = icons[index] || icons[0];

                        return (
                            <ScrollReveal key={index} delay={index * 100} className="h-full">
                                <div className={`
                                    h-full p-8 rounded-3xl 
                                    bg-white dark:bg-neutral-900 
                                    border ${style.border}
                                    ${style.hoverBorder}
                                    transition-all duration-500 
                                    group flex flex-col items-start text-left relative overflow-hidden
                                    hover:-translate-y-2 hover:shadow-2xl ${style.hoverShadow}
                                `}>
                                    {/* Top Line Color - Lava Gradient */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                    {/* Icon Box */}
                                    <div className={`
                                        w-14 h-14 rounded-2xl mb-6 flex items-center justify-center 
                                        ${style.iconBg} ${style.iconColor} border border-red-500/20
                                        group-hover:scale-110 transition-transform duration-500
                                    `}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-red-500 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                        {item.desc}
                                    </p>

                                    {/* Hover Glow Background */}
                                    <div className={`absolute -right-12 -bottom-12 w-32 h-32 rounded-full ${style.glow} blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
