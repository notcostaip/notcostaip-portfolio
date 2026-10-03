"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import OrbLogo from "@/components/OrbLogo";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/data/translations";

const navigationCopy: Record<Language, { items: string[]; contact: string; navigation: string }> = {
  PT: { items: ["História", "Negócios", "Projetos", "Instagram", "Serviços"], contact: "Vamos conversar", navigation: "Navegação" },
  EN: { items: ["Story", "Ventures", "Projects", "Instagram", "Services"], contact: "Let's talk", navigation: "Navigation" },
  ES: { items: ["Historia", "Negocios", "Proyectos", "Instagram", "Servicios"], contact: "Hablemos", navigation: "Navegación" },
  FR: { items: ["Histoire", "Activités", "Projets", "Instagram", "Services"], contact: "Parlons-nous", navigation: "Navigation" },
  ZH: { items: ["经历", "业务", "项目", "Instagram", "服务"], contact: "联系我们", navigation: "导航" },
};

const itemHrefs = ["/historia", "/#negocios", "/projects", "/#instagram", "/servicos"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const mounted = useSyncExternalStore(() => () => undefined, () => true, () => false);
  const copy = navigationCopy[language];
  const items = copy.items.map((label, index) => ({ label, href: itemHrefs[index] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <nav className={clsx("fixed inset-x-0 top-0 z-50 h-[76px] border-b transition-all duration-300 md:h-20", scrolled ? "border-white/10 bg-[#080808]/88 shadow-[0_12px_40px_rgba(0,0,0,.28)] backdrop-blur-2xl" : "border-white/[.06] bg-[#080808]/72 backdrop-blur-xl")} aria-label="Navegação principal">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-5 sm:px-7 md:px-10 xl:px-14">
        <Link href="/" className="group flex items-center gap-3 active:scale-95" aria-label="Página inicial de notcostaip">
          <OrbLogo />
          <span translate="no" className="notranslate text-sm font-semibold tracking-[-.02em] text-[#f2efe8] sm:text-base"><span className="red-braces">{"{"}</span>notcostaip<span className="red-braces">{"}"}</span></span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {items.map((item) => <Link key={item.href} href={item.href} className="text-xs font-medium text-neutral-400 transition-colors hover:text-white active:text-red-400">{item.label}</Link>)}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Link href="/#contato" className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition hover:bg-red-500 hover:text-white active:scale-95 active:bg-red-700 lg:inline-flex">{copy.contact}</Link>
          <button type="button" onClick={() => setOpen(!open)} className="relative z-[90] rounded-xl p-2 text-white transition hover:bg-white/10 active:scale-90 lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mounted && createPortal(
        <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menu principal" aria-hidden={!open} className={clsx("fixed inset-0 z-[1000] isolate min-h-[100dvh] overflow-y-auto bg-[#050505] px-6 pb-10 pt-7 shadow-2xl transition duration-300 lg:hidden", open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0 pointer-events-none")}>
          <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] w-full max-w-xl flex-col">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <p className="font-mono text-[10px] uppercase tracking-[.24em] text-red-500">{copy.navigation} / <span translate="no" className="notranslate">notcostaip</span></p>
              <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-red-500 hover:text-red-400 active:scale-90" aria-label="Fechar menu"><X /></button>
            </div>
            <div className="flex flex-1 flex-col justify-center py-8">
              {items.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-5 text-3xl font-semibold leading-none tracking-[-.035em] text-white transition hover:translate-x-2 hover:text-red-400 active:text-red-600 sm:text-4xl">{item.label}</Link>)}
              <Link href="/#contato" onClick={() => setOpen(false)} className="mt-10 rounded-full bg-red-600 px-6 py-4 text-center font-bold text-white transition hover:bg-red-500 active:scale-95">{copy.contact}</Link>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </nav>
  );
}
