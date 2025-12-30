"use client";

import {
  Palette,
  Layout,
  Smartphone,
  Database,
  Blocks,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  CheckCircle2,
  Code2,
  Server,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const Pricing = dynamic(() => import("@/components/Pricing"));
import MissionPassedEgg from "@/components/MissionPassedEgg";
import ScrollReveal from "@/components/ScrollReveal";


export default function Home() {
  const { t } = useLanguage();

  const whatIDoIcons = [Palette, Layout, Smartphone, Database, Blocks];
  const uiUxList = t.about.uiuxList;

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
            className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6 animate-fade-in-up"
          >
            {t.hero.greeting} <span className="text-neutral-900 dark:text-white">Pablo</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">{t.hero.role}</span>
          </h1>

          <p
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100"
            style={{ animationFillMode: 'both' }}
          >
            {t.hero.description}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200"
            style={{ animationFillMode: 'both' }}
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
            className="flex items-center justify-center gap-6 mt-12 text-neutral-500 animate-fade-in-up delay-300"
            style={{ animationFillMode: 'both' }}
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

      {/* Intro Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">{t.about.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-2xl">
              {t.about.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What I Do Card */}
          <ScrollReveal delay={100} className="h-full">
            <div className="bg-white/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800/50 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-neutral-900/50 transition-all duration-300 group h-full">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="text-red-400" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t.about.whatIDo}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t.about.whatIDoDesc}</p>

              <ul className="space-y-4">
                {t.about.whatIDoList.map((item, idx) => {
                  const Icon = whatIDoIcons[idx] || Code2;
                  return (
                    <li key={idx} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                      <div className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-red-500 dark:text-red-400">
                        <Icon size={14} />
                      </div>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollReveal>

          {/* Tools Card */}
          <ScrollReveal delay={200} className="h-full">
            <div className="bg-white/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800/50 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-neutral-900/50 transition-all duration-300 group h-full">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="text-rose-400" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">{t.about.tools}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t.about.toolsDesc}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">JavaScript</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">HTML5</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">Next.js</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">React</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">TypeScript</span>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Backend
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">Node.js</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">Fastify</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">MongoDB</span>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Design
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">Figma</span>
                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-red-500/50 hover:text-red-500 dark:hover:text-red-200 transition-colors">Framer</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Featured Card */}
        <div className="max-w-6xl mx-auto mt-8">
          <ScrollReveal delay={300}>
            <div className="bg-white/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800/50 rounded-3xl p-8 md:p-12 hover:bg-white/80 dark:hover:bg-neutral-900/50 transition-all duration-300 relative overflow-hidden group">
              {/* Background Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10 group-hover:bg-red-500/10 transition-colors"></div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8">
                    <Palette className="text-red-400" size={28} />
                  </div>

                  <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t.about.uiuxTitle}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
                    {t.about.uiuxDesc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {uiUxList.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                        <CheckCircle2 size={18} className="text-red-500 dark:text-red-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end hidden md:flex">
                  <div className="relative w-full max-w-sm aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-rose-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute inset-4 border border-red-500/30 rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm p-6 flex flex-col gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                      <div className="h-32 bg-neutral-100 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 opacity-50"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                        <div className="h-3 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                      </div>
                      <div className="mt-auto flex justify-end">
                        <div className="px-4 py-2 bg-red-600 text-white text-xs rounded-lg shadow-lg shadow-red-500/30">{t.about.explore}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Pricing />

      {/* CTA / Footer Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-sm text-neutral-600 dark:text-neutral-300 hover:border-red-500/50 hover:text-red-600 dark:hover:text-white transition-colors mb-8">
              <Layout size={14} />
              {t.contact.viewProjects}
            </Link>

            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              {t.contact.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">{t.contact.subtitle}</span>
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

                <button type="submit" className="w-full py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2">
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

      {/* Footer */}
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
            &copy; 2025 Costa. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
