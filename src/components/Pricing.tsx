"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import ScrollReveal from "@/components/ScrollReveal";

export default function Pricing() {
    return (
        <section className="py-24 px-6 bg-neutral-950" id="pricing">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Planos de Manutenção & Evolução
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                            Hospedagem de alta performance, segurança e suporte contínuo para seu projeto nunca parar.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
                    {/* Plano Essencial (Start) */}
                    <ScrollReveal delay={0} className="h-full">
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 h-full flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">Plano Essencial</h3>
                                <p className="text-sm text-neutral-400 font-medium tracking-wider uppercase mb-6">(Start)</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-neutral-400 text-lg">R$</span>
                                    <span className="text-4xl font-bold text-white">97</span>
                                    <span className="text-sm text-neutral-400">/mês</span>
                                </div>
                                <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
                                    Para quem precisa do site online, seguro e monitorado.
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Hospedagem de Alta Performance",
                                    "Monitoramento 24/7 (Uptime)",
                                    "Manutenção Corretiva (Bug fix)",
                                    "Backups Semanais",
                                    "Suporte via E-mail (Horário Comercial)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                                        <Check className="text-neutral-500 shrink-0" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://whatsa.me/5561994503567/?t=Ol%C3%A1,%20Pablo!%20Tenho%20interesse%20no%20or%C3%A7amento%20do%20Plano%20Essencial%20que%20vi%20no%20seu%20site.%20Podemos%20conversar?"
                                target="_blank"
                                className="block w-full py-3 px-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-center rounded-xl transition-colors text-sm"
                            >
                                Tenho Interesse
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Plano Profissional (Growth) - DESTAQUE */}
                    <ScrollReveal delay={150} className="h-full relative z-10 md:-mt-4 md:mb-4">
                        <div className="bg-neutral-900 border border-red-500 rounded-3xl p-8 shadow-2xl shadow-red-500/20 relative h-full flex flex-col md:scale-105 transform origin-top">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg shadow-red-500/40">
                                Recomendado
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">Plano Profissional</h3>
                                <p className="text-sm text-red-400 font-medium tracking-wider uppercase mb-6">(Growth)</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-neutral-400 text-lg">R$</span>
                                    <span className="text-5xl font-bold text-white">147</span>
                                    <span className="text-sm text-neutral-400">/mês</span>
                                </div>
                                <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
                                    Para empresas que querem o site sempre atualizado e evoluindo.
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="text-white font-medium text-sm border-b border-neutral-800 pb-2">
                                    Tudo do Essencial, mais:
                                </li>
                                {[
                                    "Manutenção Preventiva (Updates de Segurança)",
                                    "Ajustes mensai incluídos (Texto/Imagem)",
                                    "Otimização contínua de Performance",
                                    "Suporte Prioritário via WhatsApp",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white text-sm">
                                        <Check className="text-red-500 shrink-0" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://whatsa.me/5561994503567/?t=Ol%C3%A1,%20Pablo!%20Tenho%20interesse%20no%20or%C3%A7amento%20do%20Plano%20Profissional%20que%20vi%20no%20seu%20site.%20Podemos%20conversar?"
                                target="_blank"
                                className="block w-full py-4 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-center rounded-xl transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/40 text-sm"
                            >
                                Assinar Plano Growth
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Plano Business (Scale) */}
                    <ScrollReveal delay={300} className="h-full">
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition-all duration-300 h-full flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">Plano Business</h3>
                                <p className="text-sm text-neutral-400 font-medium tracking-wider uppercase mb-6">(Scale)</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-neutral-400 text-lg">R$</span>
                                    <span className="text-4xl font-bold text-white">297</span>
                                    <span className="text-sm text-neutral-400">/mês</span>
                                </div>
                                <p className="text-neutral-400 mt-4 text-sm leading-relaxed">
                                    A tranquilidade de ter um desenvolvedor sênior sob demanda.
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="text-neutral-300 font-medium text-sm border-b border-neutral-800 pb-2">
                                    Tudo do Profissional, mais:
                                </li>
                                {[
                                    "Ajustes ilimitados (Textos e mídias)",
                                    "Criação de 1 nova seção/página",
                                    "Prioridade Máxima ao Suporte",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                                        <Check className="text-neutral-500 shrink-0" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://whatsa.me/5561994503567/?t=Ol%C3%A1,%20Pablo!%20Tenho%20interesse%20no%20or%C3%A7amento%20do%20Plano%20Business%20que%20vi%20no%20seu%20site.%20Podemos%20conversar?"
                                target="_blank"
                                className="block w-full py-3 px-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-center rounded-xl transition-colors text-sm"
                            >
                                Tenho Interesse
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
