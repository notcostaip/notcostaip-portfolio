"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Investment() {
    const { t } = useLanguage();

    if (!t.investment) return null;

    return (
        <section id="investment" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/10">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            {t.investment.title}
                        </h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
                            {t.investment.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {t.investment.cards.map((card, idx) => {
                        const isRecommended = idx === 1; // Middle card
                        return (
                            <ScrollReveal key={idx} delay={idx * 150} className="relative h-full">
                                <div
                                    className={clsx(
                                        "rounded-3xl p-8 transition-all duration-300 h-full flex flex-col relative group",
                                        isRecommended
                                            ? "bg-neutral-900 text-white shadow-2xl shadow-red-500/20 scale-105 border-2 border-red-500"
                                            : "bg-white dark:bg-neutral-900 dark:border-neutral-800 border border-neutral-200 hover:border-red-500/30"
                                    )}
                                >

                                    {isRecommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
                                            {card.recommended}
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className={clsx("text-xl font-bold mb-2", isRecommended ? "text-white" : "text-neutral-900 dark:text-white")}>
                                            {card.title}
                                        </h3>
                                        <div className={clsx("text-xs font-bold uppercase tracking-wider mb-6", isRecommended ? "text-red-400" : "text-red-600 dark:text-red-400")}>
                                            {card.tag}
                                        </div>

                                        <div className="flex items-baseline gap-1">
                                            <span className={clsx("text-lg", isRecommended ? "text-neutral-400" : "text-neutral-500")}>R$</span>
                                            <span className={clsx("text-5xl font-bold tracking-tighter", isRecommended ? "text-white" : "text-neutral-900 dark:text-white")}>
                                                {card.price}
                                            </span>
                                            <span className={clsx("text-xs", isRecommended ? "text-neutral-400" : "text-neutral-500")}>{t.investment.priceSuffix}</span>
                                        </div>
                                        <p className={clsx("mt-4 text-sm leading-relaxed", isRecommended ? "text-neutral-300" : "text-neutral-500 dark:text-neutral-400")}>
                                            {card.desc}
                                        </p>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {card.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm">
                                                <Check className={clsx("shrink-0", isRecommended ? "text-red-500" : "text-green-500")} size={18} />
                                                <span className={clsx(isRecommended ? "text-neutral-200" : "text-neutral-600 dark:text-neutral-300")}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`https://wa.me/5561994503567?text=${encodeURIComponent(t.investment.whatsappMessage.replace("{0}", card.title).replace("{1}", card.tag))}`}
                                        target="_blank"
                                        className={clsx(
                                            "block w-full py-4 text-center rounded-xl font-bold transition-all text-sm group-hover:shadow-lg",
                                            isRecommended
                                                ? "bg-red-600 hover:bg-red-700 text-white shadow-red-500/20"
                                                : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white"
                                        )}
                                    >
                                        {t.investment.cta}
                                    </Link>

                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                <ScrollReveal delay={400}>
                    <div className="mt-12 text-center p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl max-w-3xl mx-auto">
                        <p className="text-yellow-700 dark:text-yellow-500 text-sm font-medium">
                            ⚠️ {t.investment.disclaimer}
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
