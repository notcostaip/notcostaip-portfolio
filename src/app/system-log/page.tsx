import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CircleDot } from "lucide-react";
import NoTranslate from "@/components/NoTranslate";
import SystemTerminal from "@/components/SystemTerminal";
import { systemLogGroups } from "@/data/systemLog";

export const metadata: Metadata = {
  title: { absolute: "Pablo Henrick Costa Silva (notcostaip) — System Log" },
  description: "Perfil público e mapa de conhecimento de Pablo Henrick Costa Silva, conhecido como notcostaip, CNPJ 60.778.755/0001-43: full stack, SaaS, IA, automação e e-commerce.",
  keywords: [
    "Pablo Henrick Costa Silva",
    "notcostaip",
    "60.778.755/0001-43",
    "60778755000143",
    "CNPJ notcostaip",
    "desenvolvedor full stack Brasília",
    "builder de SaaS",
    "ColdconnectPay",
    "iSHOPBOX",
  ],
  alternates: { canonical: "/system-log" },
  openGraph: {
    type: "profile",
    url: "/system-log",
    title: "Pablo Henrick Costa Silva (notcostaip) — System Log",
    description: "Identidade pública, trajetória, produtos, tecnologias e áreas de atuação de Pablo Henrick Costa Silva.",
    images: [{ url: "/images/pablo.jpg", alt: "Pablo Henrick Costa Silva, notcostaip" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Henrick Costa Silva — notcostaip",
    description: "Perfil público, produtos, trajetória e mapa de conhecimento.",
    images: ["/images/pablo.jpg"],
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://notcostaip.site/system-log#profile",
  url: "https://notcostaip.site/system-log",
  name: "Pablo Henrick Costa Silva (notcostaip) — perfil público e System Log",
  headline: "Perfil público e mapa de conhecimento de Pablo Henrick Costa Silva",
  description: "Identidade, trajetória, produtos, tecnologias e áreas de atuação de Pablo Henrick Costa Silva, conhecido como notcostaip.",
  inLanguage: "pt-BR",
  dateModified: "2026-10-03",
  mainEntity: {
    "@type": "Person",
    "@id": "https://notcostaip.site/#pablo-henrick-costa-silva",
    name: "Pablo Henrick Costa Silva",
    givenName: "Pablo Henrick",
    familyName: "Costa Silva",
    alternateName: ["notcostaip", "@notcostaip"],
    url: "https://notcostaip.site",
    image: {
      "@type": "ImageObject",
      url: "https://notcostaip.site/images/pablo.jpg",
      caption: "Pablo Henrick Costa Silva, também conhecido como notcostaip",
    },
    description: "Desenvolvedor full stack, builder de produtos SaaS e operador de e-commerce em Brasília, Distrito Federal.",
    jobTitle: "Desenvolvedor Full Stack e Builder",
    homeLocation: {
      "@type": "Place",
      name: "Brasília, Distrito Federal, Brasil",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CNPJ",
      value: "60.778.755/0001-43",
    },
    knowsAbout: [
      "Desenvolvimento Full Stack",
      "Software as a Service",
      "Inteligência Artificial",
      "Automação empresarial",
      "E-commerce",
      "Dropshipping",
      "Next.js",
      "React",
      "TypeScript",
      "n8n",
    ],
    sameAs: [
      "https://github.com/notcostaip",
      "https://instagram.com/notcostaip",
      "https://x.com/notcostaip",
      "https://www.linkedin.com/in/notcostaip",
    ],
  },
};

const protectedTerms = new Set(["notcostaip", "ColdconnectPay", "iSHOPBOX"]);

export default function SystemLogPage() {
  const entryCount = systemLogGroups.reduce((total, group) => total + group.entries.length, 0);

  return (
    <main className="system-log-bg min-h-screen overflow-hidden bg-[#080607] px-4 pb-24 pt-28 font-mono text-red-100 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-neutral-500 transition hover:text-white active:translate-y-px"><ArrowLeft size={14} /> /home/<NoTranslate>notcostaip</NoTranslate></Link>
        <span className="text-[10px] uppercase tracking-[.2em] text-neutral-700">public semantic index</span>
      </div>

      <SystemTerminal />

      <section className="mx-auto mt-24 max-w-6xl" aria-labelledby="semantic-index-title">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[.24em] text-red-500">SEO / human-first</p>
            <h1 id="semantic-index-title" className="mt-5 text-4xl font-medium tracking-[-.045em] text-white md:text-6xl">Perfil público e <NoTranslate>System Log</NoTranslate> de <NoTranslate>notcostaip</NoTranslate>.</h1>
          </div>
          <div className="font-sans text-base leading-8 text-neutral-500 md:pt-7">
            <p>O terminal acima é uma representação visual. Abaixo, cada conceito é publicado como conteúdo editorial legível, navegável e útil — sem texto escondido, cloaking ou repetições artificiais.</p>
            <p className="mt-4 font-mono text-xs text-neutral-700">groups={systemLogGroups.length} · records={entryCount} · cnpj=60.778.755/0001-43</p>
          </div>
        </div>

        <div className="mt-16 space-y-20">
          {systemLogGroups.map((group, groupIndex) => (
            <section key={group.id} id={group.id} className="scroll-mt-28">
              <div className="mb-7 grid gap-4 md:grid-cols-[.7fr_1fr]">
                <h2 className="text-xl text-white"><span className="mr-3 text-red-800">0{groupIndex + 1}</span>{group.label}</h2>
                <p className="font-sans text-sm leading-6 text-neutral-600">{group.summary}</p>
              </div>
              <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
                {group.entries.map((entry) => (
                  <div key={entry.term} className="bg-[#0c090a] p-6 transition hover:bg-red-500/[.045]">
                    <dt
                      translate={protectedTerms.has(entry.term) ? "no" : undefined}
                      className={`flex items-center gap-3 text-sm font-semibold text-red-300 ${protectedTerms.has(entry.term) ? "notranslate" : ""}`}
                    ><CircleDot size={12} />{entry.term}</dt>
                    <dd className="mt-3 font-sans text-sm leading-7 text-neutral-500">{entry.detail}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <nav aria-label="Conteúdos relacionados" className="mt-24 border-t border-white/10 pt-10">
          <p className="text-[10px] uppercase tracking-[.24em] text-red-500">Entidades e rotas relacionadas</p>
          <div className="mt-6 flex flex-wrap gap-3 font-sans">
            <Link href="/historia" className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-400 transition hover:border-red-500/40 hover:text-white">História de Pablo Henrick</Link>
            <Link href="/negocios/coldconnectpay" className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-400 transition hover:border-red-500/40 hover:text-white"><NoTranslate>ColdconnectPay</NoTranslate></Link>
            <Link href="/negocios/ishopbox" className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-400 transition hover:border-red-500/40 hover:text-white"><NoTranslate>iSHOPBOX</NoTranslate></Link>
            <Link href="/servicos" className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-400 transition hover:border-red-500/40 hover:text-white">Serviços e soluções</Link>
            <Link href="/projects" className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-400 transition hover:border-red-500/40 hover:text-white">Projetos públicos</Link>
          </div>
        </nav>
      </section>
    </main>
  );
}
