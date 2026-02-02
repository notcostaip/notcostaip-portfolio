"use client";

import { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);
    const { currentLang, setLanguage, t } = useLanguage();
    const pathname = usePathname();

    // Scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Menu Items
    const navItems = [
        { label: t.nav?.home || "Home", href: "/" },
        { label: t.nav?.solutions || "Soluções", href: "/#services" },
        { label: t.nav?.portfolio || "Portfólio", href: "/projects" }, // Using explicit route for projects
        { label: t.nav?.investment || "Investimento", href: "/#investment" },
        { label: t.nav?.faq || "FAQ", href: "/#faq" },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 h-16 shadow-lg shadow-neutral-500/5"
                    : "bg-transparent border-transparent h-24"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1 group relative z-10">
                    <span className="text-red-600 font-bold text-xl tracking-tight transition-transform group-hover:-translate-x-1">{"{"}</span>
                    <span className="text-neutral-900 dark:text-white font-bold text-xl tracking-tight">notcostaip</span>
                    <span className="text-red-600 font-bold text-xl tracking-tight transition-transform group-hover:translate-x-1">{"}"}</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            // Using standard anchor behavior for hashes to avoid Next.js routing delay on same page
                            // Optimized smooth scroll handler
                            onClick={(e) => {
                                // Special case for Home (scroll to top)
                                if (item.href === "/" && pathname === "/") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "auto" });
                                    return;
                                }

                                if (item.href.startsWith("/#")) {
                                    e.preventDefault();
                                    const targetId = item.href.replace("/#", "");
                                    const elem = document.getElementById(targetId);

                                    if (elem) {
                                        // Instant scroll for maximum performance feel
                                        const headerOffset = 80;
                                        const elementPosition = elem.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "auto"
                                        });
                                    } else {
                                        // Fallback if element not found or different page
                                        window.location.href = item.href;
                                    }
                                }
                            }}
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-500 transition-colors relative group"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors text-xs font-medium"
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
                                        className="w-full text-left px-4 py-2 text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-red-500 dark:hover:text-white transition-colors flex items-center justify-between"
                                    >
                                        {lang.label}
                                        {currentLang.code === lang.code && <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Hire Me Button */}
                    {/* Hire Me Button */}
                    <Link
                        href={`https://wa.me/5561994503567?text=${encodeURIComponent(t.nav?.whatsappMessage || "")}`}
                        target="_blank"
                        className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5"
                    >
                        {t.nav?.hireMe || "Solicitar Consultoria"}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-white dark:bg-neutral-950 z-40 flex flex-col pt-24 px-6 transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-6 text-center">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            onClick={() => setIsOpen(false)}
                            href={item.href}
                            className="text-2xl font-bold text-neutral-800 dark:text-white hover:text-red-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-4"></div>

                    <div className="flex justify-center gap-4">
                        {languagesList.map(l => (
                            <button
                                key={l.code}
                                onClick={() => setLanguage(l.code)}
                                className={clsx("text-sm px-4 py-2 rounded-full border", currentLang.code === l.code ? "bg-red-600 text-white border-red-600" : "bg-transparent border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400")}
                            >
                                {l.code}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
