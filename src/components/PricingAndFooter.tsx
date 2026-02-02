"use client";

import { Check, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import clsx from "clsx";

/**
 * 🎨 DESIGN COMMITMENT:
 * - Geometry: Modern, Rounded-3xl (Apple-like premium feel)
 * - Typography: Clean Sans-Serif (Inherited)
 * - Palette: Dark Mode (Zinc-950) + High Performance Red/Orange (No Blue/Purple)
 * - Effects: Subtle Glassmorphism, Glow trails, Scale on hover
 */

export default function InvestmentSection() {
    const cards = [
        {
            title: "Landing Page",
            subtitle: "High-Performance",
            desc: "Foco total em campanhas e conversão direta.",
            price: "2.200",
            features: [
                "Design One-Page (Rolagem Fluida)",
                "Foco em Vendas e Campanhas",
                "Seções Estratégicas (Hero, Sobre, Contato)",
                "Botões Flutuantes (WhatsApp)",
                "Otimização Mobile-First",
            ],
            highlight: false,
        },
        {
            title: "Posicionamento",
            subtitle: "Authority",
            desc: "A estrutura completa para liderar o mercado local.",
            price: "3.600",
            features: [
                "*Inclui tudo da Landing Page*",
                "Estrutura Multi-páginas (Home, Sobre, Serviços)",
                "SEO Técnico Avançado (Google)",
                "Blog/Artigos de Conteúdo",
                "Página de \"Obrigado\" (Rastreamento Ads)",
            ],
            highlight: true,
            tag: "Recomendado",
        },
        {
            title: "Ecossistema",
            subtitle: "Digital",
            desc: "Para alta complexidade e múltiplas unidades.",
            price: "5.500",
            features: [
                "Sistema de Agendamento / Área do Cliente",
                "Integrações Avançadas (CRM, E-mail)",
                "Design System Completo",
                "Lojas Virtuais (E-commerce)",
            ],
            highlight: false,
        },
    ];

    return (
        <div className="bg-zinc-950 relative overflow-hidden font-sans">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[128px] pointer-events-none" />

            {/* PRICING SECTION */}
            <section className="py-24 px-6 relative z-10" id="investment">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Investimento Único
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            Projetos entregues prontos para usar. Sem mensalidades ocultas.
                        </p>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className={clsx(
                                    "relative rounded-3xl p-8 h-full flex flex-col transition-all duration-500",
                                    card.highlight
                                        ? "bg-zinc-900/80 border-2 border-red-500 shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)] md:-mt-8 md:mb-8 z-20 scale-105"
                                        : "bg-zinc-900/40 border border-zinc-800 hover:border-red-500/30 hover:bg-zinc-900/60 z-10"
                                )}
                            >
                                {/* Highlight Tag */}
                                {card.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-500/40">
                                        {card.tag}
                                    </div>
                                )}

                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p
                                        className={clsx(
                                            "text-xs font-bold tracking-widest uppercase mb-6",
                                            card.highlight ? "text-red-400" : "text-zinc-500"
                                        )}
                                    >
                                        {card.subtitle}
                                    </p>

                                    <div className="flex items-baseline gap-1">
                                        <span className="text-zinc-500 text-lg">R$</span>
                                        <span className="text-5xl font-bold text-white tracking-tighter">
                                            {card.price}
                                        </span>
                                        <span className="text-xs text-zinc-500 font-medium">/único</span>
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-zinc-400 border-b border-zinc-800 pb-6">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {card.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <div
                                                className={clsx(
                                                    "mt-0.5 p-0.5 rounded-full shrink-0",
                                                    // Center card (highlight=true) -> Red
                                                    // Side cards (highlight=false) -> green-500
                                                    card.highlight
                                                        ? "bg-red-500/20 text-red-500"
                                                        : "bg-green-500/20 text-green-500"
                                                )}
                                            >
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className={clsx("text-sm", feature.startsWith("*") ? "text-white font-medium italic" : "text-zinc-400")}>
                                                {feature.replace(/\*/g, "")}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href={`https://wa.me/5561994503567?text=Olá! Tenho interesse no pacote ${card.title}. Podemos conversar?`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        "block w-full py-4 text-center rounded-xl font-bold text-sm tracking-wide transition-all duration-300",
                                        card.highlight
                                            ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg shadow-red-900/20 hover:shadow-red-500/40 hover:-translate-y-1"
                                            : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600"
                                    )}
                                >
                                    Solicitar Orçamento
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Pricing Footer Disclaimer */}
                    <div className="mt-16 text-center">
                        <p className="text-sm text-zinc-600 max-w-2xl mx-auto">
                            Valores estimados para escopos padrão. O investimento pode ser adaptado conforme a necessidade específica do seu projeto.
                        </p>
                    </div>
                </div >
            </section >

            {/* FOOTER REMOVED - Managed in page.tsx */}
        </div >
    );
}
