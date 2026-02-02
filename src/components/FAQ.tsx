"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t.faq.title}
                        </h2>
                        <p className="text-neutral-400">
                            {t.faq.description}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {t.faq.items.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 50}>
                            <div
                                className={`border rounded-2xl transition-all duration-300 ${openIndex === idx
                                    ? "border-red-500/30 bg-red-900/10"
                                    : "border-zinc-800 bg-transparent hover:border-zinc-700"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    aria-expanded={openIndex === idx}
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === idx ? "text-red-400" : "text-white"
                                        }`}>
                                        {item.question}
                                    </span>
                                    <span className={`p-2 rounded-full transition-colors ${openIndex === idx ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-500"
                                        }`}>
                                        {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-96 opacity-100 pb-6 px-6" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-neutral-400 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
