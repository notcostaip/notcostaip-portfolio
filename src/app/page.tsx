import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Instagram,
  MoveRight,
  ShoppingBag,
} from "lucide-react";
import MagneticSocials from "@/components/MagneticSocials";
import MotionReveal from "@/components/MotionReveal";
import PremiumTimeline from "@/components/PremiumTimeline";
import CommerceShowcase from "@/components/CommerceShowcase";
import NoTranslate from "@/components/NoTranslate";
import VentureName from "@/components/VentureName";

export const metadata: Metadata = {
  title: "Pablo Henrick Costa Silva (notcostaip) | Builder",
  description:
    "Site oficial de Pablo Henrick Costa Silva, conhecido como notcostaip, CNPJ 60.778.755/0001-43: full stack, SaaS, automação, IA e e-commerce em Brasília-DF.",
  alternates: { canonical: "/" },
};

const ventures = [
  {
    icon: Bot,
    name: "ColdconnectPay",
    brand: "coldconnectpay" as const,
    tag: "CRM · IA · Automação · Pagamentos",
    text: "Um ecossistema único que centraliza prospecção, CRM, conversas, automação inteligente e processamento de pagamentos.",
    href: "/negocios/coldconnectpay",
  },
  {
    icon: ShoppingBag,
    name: "iSHOPBOX",
    brand: "ishopbox" as const,
    tag: "E-commerce · Dropshipping",
    text: "Minha loja de e-commerce, operada de forma automatizada por dropshipping, com foco em produto, oferta, mídia, margem e experiência do cliente.",
    href: "/negocios/ishopbox",
  },
  {
    icon: Boxes,
    name: "Automation Stack",
    brand: "automation" as const,
    tag: "n8n · Agentes · Dados",
    text: "Sistemas que conectam APIs, bancos de dados e inteligência artificial para retirar trabalho manual de operações complexas.",
    href: "/servicos",
  },
];

const gallery = [
  { src: "/images/gallery/optimized/01-infancia.webp", alt: "Registro da infância de Pablo Henrick" },
  { src: "/images/gallery/optimized/02-builder-macbook.webp", alt: "Pablo Henrick com seu MacBook" },
  { src: "/images/gallery/optimized/03-builder-retrato.webp", alt: "Retrato de Pablo Henrick diante do painel vermelho" },
  { src: "/images/gallery/optimized/04-profissional.webp", alt: "Pablo Henrick em um registro profissional" },
  { src: "/images/gallery/optimized/05-treino.webp", alt: "Pablo Henrick durante sua rotina de treino" },
  { src: "/images/gallery/optimized/06-trabalho-remoto.webp", alt: "Pablo Henrick trabalhando com seu MacBook" },
];

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://notcostaip.site/#website",
      url: "https://notcostaip.site",
      name: "Pablo Henrick Costa Silva — notcostaip",
      alternateName: ["notcostaip", "Site oficial de Pablo Henrick Costa Silva"],
      description: "Portfólio, trajetória, produtos e negócios digitais de Pablo Henrick Costa Silva.",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://notcostaip.site/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://notcostaip.site/#pablo-henrick-costa-silva",
      name: "Pablo Henrick Costa Silva",
      givenName: "Pablo Henrick",
      familyName: "Costa Silva",
      alternateName: ["notcostaip", "@notcostaip"],
      url: "https://notcostaip.site",
      image: "https://notcostaip.site/images/pablo.jpg",
      jobTitle: "Desenvolvedor Full Stack e Builder",
      identifier: { "@type": "PropertyValue", propertyID: "CNPJ", value: "60.778.755/0001-43" },
      birthDate: "2005-12-13",
      birthPlace: { "@type": "Place", name: "Brasília, Distrito Federal, Brasil" },
      homeLocation: { "@type": "Place", name: "Brasília, Distrito Federal, Brasil" },
      knowsAbout: [
        "Software as a Service",
        "Inteligência Artificial",
        "Automação empresarial",
        "Desenvolvimento Full Stack",
        "E-commerce",
        "Dropshipping",
        "n8n",
        "Docker",
        "Oracle SQL",
        "Meta Ads",
      ],
      sameAs: [
        "https://github.com/notcostaip",
        "https://instagram.com/notcostaip",
        "https://x.com/notcostaip",
        "https://www.linkedin.com/in/notcostaip",
      ],
      worksFor: { "@id": "https://notcostaip.site/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://notcostaip.site/#organization",
      name: "notcostaip",
      url: "https://notcostaip.site",
      taxID: "60.778.755/0001-43",
      logo: "https://notcostaip.site/images/pablo.jpg",
      founder: { "@id": "https://notcostaip.site/#pablo-henrick-costa-silva" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
      sameAs: [
        "https://github.com/notcostaip",
        "https://instagram.com/notcostaip",
        "https://www.linkedin.com/in/notcostaip",
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#080808] text-white selection:bg-red-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c") }}
      />

      <section className="hero-grid relative min-h-[100svh] px-5 pb-16 pt-28 sm:px-7 sm:pt-32 md:px-10 md:pt-40 xl:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(220,38,38,.17),transparent_33%)]" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.22em] text-neutral-300">
              Build in Public
            </div>
            <p className="mb-4 text-xl font-semibold tracking-[-.02em] text-red-500 md:text-2xl"><NoTranslate>notcostaip</NoTranslate></p>
            <h1 className="relative max-w-5xl text-balance text-4xl font-semibold leading-[.94] tracking-[-.06em] min-[380px]:text-5xl sm:text-7xl lg:text-[6.2rem]">
              <span aria-hidden className="absolute -left-5 -top-3 font-serif text-5xl text-red-500/55 sm:-left-8 sm:text-7xl">“</span>
              Sistemas que transformam
              <span className="block bg-gradient-to-r from-red-500 via-orange-300 to-[#f2efe8] bg-clip-text text-transparent">ambição em escala.</span>
              <span aria-hidden className="ml-2 font-serif text-5xl text-red-500/55 sm:text-7xl">”</span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-neutral-400 md:text-xl">
              Sou Pablo Henrick Costa Silva — desenvolvedor full stack, criador de SaaS,
              operador de e-commerce e builder. Minha história começou na obra e ganhou escala
              diante de um notebook Positivo quebrado.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/historia" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-red-500 hover:text-white active:scale-95 active:bg-red-700">
                Conheça minha história <MoveRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[.06] active:scale-95 active:bg-white/10">
                Ver projetos <ArrowUpRight size={17} />
              </Link>
            </div>
            <MagneticSocials />
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-neutral-500">
              <span>Full Stack</span><span className="text-red-500">/</span>
              <span>SaaS</span><span className="text-red-500">/</span>
              <span>IA & automação</span><span className="text-red-500">/</span>
              <span>E-commerce</span>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_30px_100px_rgba(220,38,38,.12)]">
            <Image src="/images/pablo.jpg" alt="notcostaip — Pablo Henrick Costa Silva" fill priority sizes="(max-width: 1024px) 80vw, 38vw" className="object-cover object-center opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-red-950/20" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
              <div><p className="font-mono text-[9px] uppercase tracking-[.24em] text-red-400">identity / verified</p><p className="mt-2 text-xl font-semibold"><NoTranslate>notcostaip</NoTranslate></p></div>
              <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="border-y border-white/10 bg-[#0d0d0d] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <MotionReveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">01 / Manifesto</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] md:text-6xl">Não foi sorte.<br />Foi alavanca.</h2>
            <Link href="/historia" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300 active:translate-y-px">Abrir arquivo completo <ArrowUpRight size={16} /></Link>
          </MotionReveal>
          <MotionReveal delay={0.08} className="space-y-8 text-xl leading-9 text-neutral-300 md:text-2xl md:leading-10">
            <p className="text-white">Nasci em Brasília, em 13 de dezembro de 2005. Perdi meus pais muito cedo e aprendi que liberdade não viria pronta.</p>
            <p>Antes do código, vieram a estrada, o cimento e o peso. Trabalhei como ajudante de caminhoneiro e servente de pedreiro. Esse período me ensinou a respeitar execução — e deixou claro que eu precisava encontrar uma forma de escalar o esforço.</p>
            <p>Aos 16 anos, encontrei essa alavanca em um notebook Positivo destruído, cabeado em uma televisão velha. Virei noites pesquisando como tecnologia e negócios poderiam mudar a minha realidade.</p>
            <blockquote className="my-14 border-l-2 border-red-500 pl-7 text-3xl font-medium leading-tight tracking-[-.03em] text-white md:text-5xl">
              “Eu não queria ser apenas programador. Queria construir soluções que geram lucro.”
            </blockquote>
            <p>Hoje, transformo processos lentos em sistemas automáticos. Construo produtos digitais do zero, conecto dados e inteligência artificial e desenho operações capazes de crescer sem aumentar o caos.</p>
          </MotionReveal>
        </div>
      </section>

      <PremiumTimeline />

      <section id="negocios" className="scroll-mt-28 bg-[#f2efe8] px-5 py-24 text-[#171512] sm:px-7 md:px-10 md:py-36 xl:px-14">
        <div className="mx-auto max-w-[1500px]">
          <MotionReveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-kicker !text-red-600">03 / Negócios</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl md:text-7xl">Produtos e operações construídos para escalar.</h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-neutral-600">Encontro gargalos que custam tempo ou dinheiro e construo funcionários digitais para resolver cada um deles.</p>
          </MotionReveal>
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {ventures.map(({ icon: Icon, name, brand, tag, text, href }) => (
              <Link key={name} href={href} aria-label={`Conhecer ${name}`} className="group flex min-h-[320px] flex-col rounded-[2rem] border border-black/10 bg-[#faf8f3] p-7 transition duration-500 hover:-translate-y-2 hover:bg-[#181714] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 active:translate-y-0 sm:p-8 md:min-h-[360px]">
                <div className="flex items-center justify-between"><Icon size={28} /><ArrowUpRight size={20} className="opacity-40" /></div>
                <div className="mt-auto">
                  <p className="font-mono text-[11px] uppercase tracking-[.2em] text-red-600">{tag}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-.035em]"><VentureName name={brand} /></h3>
                  <p className="mt-5 leading-7 text-neutral-600 transition-colors group-hover:text-neutral-400">{text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition group-hover:text-red-400">Conhecer melhor <ArrowUpRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CommerceShowcase />

      <section id="instagram" className="scroll-mt-28 px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <MotionReveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="section-kicker">05 / Visual log</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.05em] md:text-7xl">Vida, código e construção.</h2></div>
            <Link href="https://instagram.com/notcostaip" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition hover:text-red-400 active:translate-y-px">Acompanhar no Instagram <ArrowUpRight size={16} /></Link>
          </MotionReveal>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {gallery.map((photo) => (
              <Link key={photo.src} href="https://instagram.com/notcostaip" target="_blank" rel="noreferrer" aria-label="Abrir Instagram de Pablo" className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-[0_18px_50px_rgba(0,0,0,.2)] transition duration-500 hover:-translate-y-1 active:scale-[.99]">
                <Image src={photo.src} alt={photo.alt} width={2048} height={1299} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full object-contain transition duration-700 group-hover:opacity-80" loading="lazy" />
                <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-black/50 opacity-0 backdrop-blur transition group-hover:opacity-100"><Instagram size={18} /></span>
              </Link>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-500 md:text-base">
            Fragmentos de uma trajetória construída entre trabalho, tecnologia e ambição. Os próximos capítulos continuam no Instagram.
          </p>
        </div>
      </section>

      <section id="contato" className="scroll-mt-28 px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-red-600 px-7 py-16 md:px-16 md:py-24">
          <p className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-.045em] md:text-7xl">Se existe um problema caro e repetitivo, provavelmente existe um sistema melhor para ele.</p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="https://wa.me/5561994503567" target="_blank" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-black hover:text-white active:scale-95">Falar com Pablo <ArrowUpRight size={17} /></Link>
            <span className="text-sm text-red-100">Brasília, DF · atendimento remoto</span>
          </div>
        </div>
      </section>

    </main>
  );
}
