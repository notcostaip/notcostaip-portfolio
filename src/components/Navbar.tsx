"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu,
    X,
    ChevronDown
} from "lucide-react";
import clsx from "clsx";
import { useLanguage, languagesList } from "@/context/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { currentLang, setLanguage, t } = useLanguage();
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 transition-colors duration-300 dark:bg-neutral-950/80 dark:border-neutral-800 bg-white/80 border-neutral-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1 group">
                    <span className="text-red-600 font-bold text-xl tracking-tight">{"{"}</span>
                    <span className="text-neutral-900 dark:text-white font-bold text-xl tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">notcostaip</span>
                    <span className="text-red-600 font-bold text-xl tracking-tight">{"}"}</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link
                        href="/"
                        className={clsx(
                            "transition-colors hover:text-red-600 dark:hover:text-red-400",
                            pathname === "/" ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={clsx(
                            "transition-colors hover:text-red-600 dark:hover:text-red-400",
                            pathname.startsWith("/projects") ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"
                        )}
                    >
                        {t.hero.projects}
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-neutral-500 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                        {t.hero.contact}
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all text-xs font-medium"
                            aria-label="Select language"
                        >
                            {currentLang.code}
                            <ChevronDown size={14} className={clsx("transition-transform duration-200", langOpen && "rotate-180")} />
                        </button>

                        {langOpen && (
                            <div
                                className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden py-1 animate-fade-in"
                            >
                                {languagesList.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setLangOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-red-500 dark:hover:text-white transition-colors flex items-center justify-between group"
                                    >
                                        {lang.label}
                                        {currentLang.code === lang.code && <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Hire Me Button (Small) */}
                    <Link href="https://whatsa.me/5561994503567/?t=Ol%C3%A1,%20Pablo!%20Estou%20buscando%20um%20especialista%20em%20Desenvolvimento%20Web%20para%20uma%20demanda%20espec%C3%ADfica.%20Podemos%20falar?" target="_blank" className="ml-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-red-600/20">
                        {t.nav.hireMe}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white relative w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={clsx("absolute transition-all duration-300 transform", isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")}>
                        <Menu size={24} />
                    </div>
                    <div className={clsx("absolute transition-all duration-300 transform", isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50")}>
                        <X size={24} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg animate-fade-in"
                >
                    <div className="flex flex-col p-6 gap-4">
                        <Link onClick={() => setIsOpen(false)} href="/" className="text-neutral-600 dark:text-neutral-300 hover:text-red-500 font-medium">Home</Link>
                        <Link onClick={() => setIsOpen(false)} href="/projects" className="text-neutral-600 dark:text-neutral-300 hover:text-red-500 font-medium">{t.hero.projects}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-red-500 font-medium">{t.hero.contact}</Link>

                        <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2"></div>

                        <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                            <span className="text-sm">Language</span>
                            <div className="flex gap-2">
                                {languagesList.map(l => (
                                    <button
                                        key={l.code}
                                        onClick={() => setLanguage(l.code)}
                                        className={clsx("text-xs px-2 py-1 rounded", currentLang.code === l.code ? "bg-red-600 text-white" : "bg-neutral-100 dark:bg-neutral-900")}
                                    >
                                        {l.code}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="https://whatsa.me/5561994503567/?t=Ol%C3%A1,%20Pablo!%20Estou%20buscando%20um%20especialista%20em%20Desenvolvimento%20Web%20para%20uma%20demanda%20espec%C3%ADfica.%20Podemos%20falar?"
                            target="_blank"
                            className="w-full text-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-red-600/20 mt-2"
                        >
                            {t.nav.hireMe}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
