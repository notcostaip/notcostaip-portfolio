"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProcessTimeline() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 bg-neutral-900 text-white relative isolate overflow-hidden">
            {/* Dark theme specifically for this section to look premium */}

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 -z-20"></div>
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center md:text-left">
                        {t.process.title}
                    </h2>
                </ScrollReveal>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[50%] left-0 w-full h-px bg-neutral-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {t.process.steps.map((step, idx) => (
                            <ScrollReveal key={idx} delay={idx * 150} className="relative z-10">
                                <div className="group">
                                    {/* Step Number Badge */}
                                    <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 group-hover:border-red-600 transition-colors duration-300 rounded-2xl flex items-center justify-center text-xl font-bold text-neutral-500 group-hover:text-white mb-6 mx-auto md:mx-0 relative shadow-2xl">
                                        <span className="absolute -inset-1 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity"></span>
                                        0{idx + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4 text-center md:text-left">
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                                            {step.title.replace(/^\d+\.\s/, '')}
                                        </h3>
                                        <p className="text-neutral-400 text-base leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
