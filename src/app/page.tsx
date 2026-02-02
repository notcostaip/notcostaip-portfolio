"use client";

import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Layout,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

// Components
import MissionPassedEgg from "@/components/MissionPassedEgg";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import AboutMe from "@/components/AboutMe";

// Dynamic Components for Performance
const Pricing = dynamic(() => import("@/components/Pricing"));
const InvestmentSection = dynamic(() => import("@/components/PricingAndFooter"));

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-red-500/30">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradients - Red Theme */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar with Easter Egg */}
          <MissionPassedEgg imageSrc="/images/pablo.jpg" alt="Pablo Profile" size={160} priority={true} />

          <h1
            className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6"
          >
            {t.hero.greeting} <span className="text-neutral-900 dark:text-white">Pablo</span>
            <br />
            <span className="text-red-500">{t.hero.role}</span>
          </h1>

          <p
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.description}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#contact" className="px-8 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              <Mail size={18} />
              {t.hero.contact}
            </Link>
            <Link href="/projects" className="px-8 py-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all flex items-center gap-2">
              <Layout size={18} />
              {t.hero.projects}
            </Link>
          </div>

          <div
            className="flex items-center justify-center gap-6 mt-12 text-neutral-500"
          >
            <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-800 hidden sm:block"></div>
            <Link href="https://github.com/notcostaip" target="_blank" className="hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label="GitHub"><Github size={20} /></Link>
            <Link href="https://instagram.com/notcostaip" target="_blank" className="hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label="Instagram"><Instagram size={20} /></Link>
            <Link href="https://x.com/notcostaip" target="_blank" className="hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label="Twitter"><Twitter size={20} /></Link>
            <Link href="https://www.linkedin.com/in/notcostaip" target="_blank" className="hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></Link>
            <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-800 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* NEW SECTIONS */}
      <div id="services">
        {/* About Me - Skills & Tools (Replaces standard Services for "Dev" aesthetic) */}
        <AboutMe />

        {/* Methodology - Por que performam melhor */}
        <Methodology />

        {/* Timeline - Processo */}
        <ProcessTimeline />
      </div>



      {/* 1. Investment Section (Unique) */}
      <InvestmentSection />

      {/* 2. Maintenance Pricing */}
      <Pricing />

      {/* 3. FAQ Section */}
      <FAQ />

      {/* 4. Contact Form */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-sm text-neutral-600 dark:text-neutral-300 hover:border-red-500/50 hover:text-red-600 dark:hover:text-white transition-colors mb-8">
              <Layout size={14} />
              {t.contact.viewProjects}
            </Link>

            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              {t.contact.title} <br />
              <span className="text-red-500">{t.contact.subtitle}</span>
            </h2>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-2">{t.contact.desc}</p>
          </ScrollReveal>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto relative z-10">
          <ScrollReveal delay={200}>
            <div className="bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 backdrop-blur-sm transition-colors hover:border-neutral-400 dark:hover:border-neutral-700">
              <form action="https://formsubmit.co/eucostaipcontato@gmail.com" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700"
                    placeholder={t.contact.form.placeholderName}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700"
                    placeholder={t.contact.form.placeholderEmail}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700 resize-none"
                    placeholder={t.contact.form.placeholderMsg}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-700"
                    placeholder={t.contact.form.placeholderPhone}
                  />
                </div>

                <button type="submit" className="w-full py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-red-500/20">
                  {t.contact.form.submit} <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Background Mesh for Footer */}
        <div className="absolute inset-0 top-[20%] -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-red-900/10 dark:from-red-900/20 to-transparent blur-[100px]"></div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-900 bg-white/50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm text-neutral-500 dark:text-neutral-500">
          {/* Left: Role */}
          <div className="flex items-center justify-center md:justify-start gap-2 order-2 md:order-1">
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">notcostaip</span>
            <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-700 rounded-full"></span>
            <span>{t.footer.role}</span>
          </div>

          {/* Center: Made in Brazil */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <span>{t.footer.madeIn}</span>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right order-3">
            &copy; 2026 Costa. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
