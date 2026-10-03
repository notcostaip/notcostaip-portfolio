"use client";

import Image from "next/image";
import { BarChart3, MonitorUp, ShoppingBag, Smartphone, Truck } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedPackageFlow from "@/components/AnimatedPackageFlow";
import VentureName from "@/components/VentureName";

function MediaCard({
  title,
  caption,
  index,
  image,
  width,
  height,
  className = "",
}: {
  title: string;
  caption: string;
  index: string;
  image: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0f] shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:rounded-[2rem] ${className}`}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div className="overflow-hidden bg-black">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 1200px"
          quality={100}
          className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.01]"
        />
      </div>
      <div className="grid gap-3 border-t border-white/10 p-5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7">
        <p className="font-mono text-[10px] tracking-[.22em] text-red-400">CHAPTER_{index}</p>
        <div><h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">{caption}</p></div>
      </div>
    </motion.article>
  );
}

function DeviceComposition() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-5 sm:min-h-[620px] md:min-h-[680px] md:rounded-[2.5rem] md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(220,38,38,.18),transparent_38%)]" />

      <motion.div className="absolute left-[5%] top-[10%] z-20 w-[150px] rounded-[2rem] border-[5px] border-neutral-800 bg-black p-2 shadow-2xl md:left-[10%] md:w-[190px]" animate={{ y: [0, -12, 0], rotate: [-3, -1, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <div className="mx-auto mb-3 h-4 w-16 rounded-b-xl bg-neutral-900" />
        <div className="space-y-3 rounded-[1.3rem] bg-gradient-to-b from-red-950 to-black p-4">
          <Smartphone size={18} className="text-red-400" />
          <p translate="no" className="notranslate text-[9px] uppercase tracking-widest text-red-400">iSHOPBOX mobile ops</p>
          <p className="text-xl font-bold text-white">+128 pedidos</p>
          <div className="h-16 rounded-xl bg-white/5 p-2"><div className="h-full rounded-lg bg-gradient-to-t from-red-500/40 to-transparent" /></div>
          <div className="h-7 rounded-lg bg-red-600" />
        </div>
      </motion.div>

      <motion.div className="absolute right-[4%] top-[18%] w-[72%] md:right-[8%] md:w-[62%]" animate={{ y: [0, 10, 0], rotate: [1.5, 0.5, 1.5] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}>
        <div className="rounded-t-2xl border-[6px] border-neutral-800 bg-[#050505] p-3 shadow-2xl">
          <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-emerald-500" /></div>
          <div className="grid gap-3 md:grid-cols-3">
            {["iSHOPBOX GMV", "Pedidos", "ROAS"].map((label, i) => <div key={label} className="rounded-xl bg-white/[.045] p-3"><p translate={i === 0 ? "no" : undefined} className={`text-[8px] uppercase tracking-wider ${i === 0 ? "notranslate text-red-400" : "text-neutral-500"}`}>{label}</p><p className="mt-2 text-sm font-semibold text-white">{["R$ 84k", "1.284", "6,4x"][i]}</p></div>)}
          </div>
          <div className="mt-3 flex h-32 items-end gap-2 rounded-xl bg-white/[.035] p-4">
            {[35, 62, 48, 78, 55, 88, 72, 96].map((height, i) => <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-red-700 to-red-400" style={{ height: `${height}%` }} />)}
          </div>
        </div>
        <div className="mx-auto h-3 w-[112%] -translate-x-[5.5%] rounded-b-xl bg-gradient-to-b from-neutral-600 to-neutral-900" />
        <div className="mx-auto h-2 w-24 rounded-b-xl bg-neutral-800" />
      </motion.div>

      <motion.div className="absolute bottom-[8%] left-[9%] flex items-center gap-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl" animate={{ x: [0, 9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><MonitorUp size={20} /></div>
        <div><p className="text-xs font-semibold text-white">Dropshipping engine</p><p className="mt-1 font-mono text-[9px] text-neutral-500">TEST / SELL / SCALE</p></div>
      </motion.div>

      <motion.div className="absolute bottom-[9%] right-[8%] grid h-24 w-40 place-items-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-300 shadow-[0_20px_60px_rgba(239,35,60,.12)]" animate={{ rotate: [5, 1, 5], y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        <ShoppingBag size={32} /><span className="font-mono text-[8px] uppercase tracking-[.18em]">margin / reinvest</span>
      </motion.div>
    </div>
  );
}

export default function StoryExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [90, -90]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#080808] px-5 py-32 text-white sm:px-7 md:px-10 md:py-44 xl:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-kicker">Arquivo pessoal</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] md:text-8xl">A história por trás de <span translate="no" className="notranslate text-red-500">notcostaip.</span></h1>
          </div>
          <div className="space-y-7 text-xl leading-9 text-neutral-400 md:pt-20 md:text-2xl">
            <p className="text-white">Antes do software, vieram o concreto, a estrada e a necessidade de criar a própria oportunidade.</p>
            <p>O primeiro laboratório foi um notebook Positivo quebrado ligado a uma televisão. Foi ali que noites de estudo viraram sistemas, negócios digitais e uma obsessão por escala.</p>
          </div>
        </div>

        <motion.div style={{ y }} className="mt-24 grid gap-6 md:mt-32 md:grid-cols-2">
          <MediaCard index="01" title="Aos 8 anos" caption="Um registro do começo da minha história — antes dos sistemas, dos produtos e da obsessão por construir." image="/images/story/optimized/01-oito-anos.webp" width={2048} height={1299} className="md:col-span-2" />
          <MediaCard index="02" title="O Positivo que virou laboratório" caption="O notebook improvisado, ligado à televisão, onde começaram as madrugadas de pesquisa, código e negócios digitais." image="/images/story/optimized/02-positivo.webp" width={2048} height={1299} className="md:col-span-2" />
          <MediaCard index="03" title="Operação por dentro: Giraffas" caption="Foi trabalhando no Giraffas que processos, estoque, pessoas e indicadores deixaram de ser teoria e passaram a fazer parte da minha rotina." image="/images/story/optimized/03-giraffas.webp" width={2048} height={1299} className="md:col-span-2" />
          <MediaCard index="04" title="Identidade em construção" caption="A disciplina do caminho transformada em presença, repertório e uma forma própria de criar." image="/images/story/optimized/04-pablo.webp" width={2048} height={1299} />
          <MediaCard index="05" title="Builder em movimento" caption="Produto, tecnologia e execução agora fazem parte da mesma rotina." image="/images/story/optimized/05-builder.webp" width={2048} height={1299} />
          <MediaCard index="06" title="O setup atual" caption="A evolução material do primeiro laboratório: mais capacidade para projetar, operar e construir em escala." image="/images/story/optimized/06-setup-atual.webp" width={2048} height={1299} className="md:col-span-2" />
        </motion.div>

        <div className="mt-44 grid items-center gap-16 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="section-kicker"><span translate="no" className="notranslate">iSHOPBOX</span> / minha loja</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] md:text-6xl">Minha loja, operada com automação.</h2>
            <div className="mt-8 space-y-5 text-neutral-400">
              <p className="flex gap-3"><ShoppingBag className="mt-1 shrink-0 text-red-400" size={18} /> <span>A <VentureName name="ishopbox" fullAccent /> é minha loja de e-commerce, onde opero produtos, ofertas, mídia e experiência do cliente.</span></p>
              <p className="flex gap-3"><BarChart3 className="mt-1 shrink-0 text-red-400" size={18} /> Dashboards transformam dados de mídia e venda em decisões de margem e escala.</p>
              <p className="flex gap-3"><Truck className="mt-1 shrink-0 text-red-400" size={18} /> O modelo de dropshipping reduz estoque próprio e exige controle rigoroso de fornecedor e entrega.</p>
            </div>
          </div>
          <DeviceComposition />
        </div>

        <div className="mt-28 grid overflow-hidden rounded-[2rem] border border-red-500/20 bg-[radial-gradient(circle_at_70%_50%,rgba(239,35,60,.16),transparent_42%),#0b0b0d] sm:mt-32 sm:rounded-[2.5rem] lg:grid-cols-[.7fr_1.3fr]">
          <div className="p-7 sm:p-9 md:p-14 lg:self-center">
            <p className="section-kicker">Pedidos em movimento</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl md:text-6xl">Dropshipping operado no automático.</h2>
            <p className="mt-6 max-w-lg leading-8 text-neutral-400">A <VentureName name="ishopbox" fullAccent /> é minha loja. O dropshipping é o modelo de operação: eu valido produtos, construo ofertas e acompanho resultados, enquanto automações organizam pedidos, fornecedores e fulfillment.</p>
          </div>
          <AnimatedPackageFlow />
        </div>
      </div>
    </section>
  );
}
