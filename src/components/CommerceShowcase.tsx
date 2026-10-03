"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Boxes, Globe2, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";
import VentureName from "@/components/VentureName";

const brands = [
  { name: "amazon", label: "Marketplace global", className: "text-white", badge: "a" },
  { name: "mercado livre", label: "Marketplace LATAM", className: "text-[#ffe600]", badge: "ML" },
  { name: "TikTok Shop", label: "Social commerce", className: "text-white [text-shadow:2px_0_#ef233c,-2px_0_#25f4ee]", badge: "♪" },
  { name: "Shopee", label: "Marketplace mobile", className: "text-[#ee4d2d]", badge: "S" },
];

export default function CommerceShowcase() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="overflow-hidden bg-[#080808] py-28 text-white md:py-40" aria-labelledby="ishopbox-title">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-7 md:px-10 lg:grid-cols-[.82fr_1.18fr] xl:px-14">
        <div>
          <p className="section-kicker">04 / Minha loja</p>
          <h2 id="ishopbox-title" className="mt-5 text-5xl font-semibold tracking-[-.055em] md:text-8xl"><VentureName name="ishopbox" /></h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-400">A <VentureName name="ishopbox" fullAccent /> é minha loja de e-commerce. Eu opero produto, oferta, mídia e experiência do cliente, com pedidos e fulfillment automatizados pelo modelo de dropshipping.</p>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {[{ icon: Globe2, label: "Pesquisa global" }, { icon: Truck, label: "Dropshipping" }, { icon: ShoppingBag, label: "Marketplaces" }, { icon: Boxes, label: "Automação" }].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[.035] p-4 text-sm text-neutral-300"><Icon className="mb-5 text-red-400" size={19} />{label}</div>
            ))}
          </div>
          <Link href="/negocios/ishopbox" className="mt-7 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-300 transition hover:bg-red-600 hover:text-white active:scale-95">Conhecer a <VentureName name="ishopbox" fullAccent /> <ArrowUpRight size={16} /></Link>
        </div>

        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 60, rotateX: 8 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-red-500/20 bg-[radial-gradient(circle_at_70%_20%,rgba(239,35,60,.18),transparent_38%),#0d0d0f] p-7 shadow-[0_40px_120px_rgba(0,0,0,.5)] md:p-10">
          <div className="flex items-center justify-between"><span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.2em] text-red-300">live commerce ops</span><ArrowUpRight className="text-neutral-600" /></div>
          <div className="mt-14 grid grid-cols-3 gap-3">
            {["GMV", "Pedidos", "Margem"].map((label, index) => <div key={label} className="rounded-2xl border border-white/10 bg-black/40 p-4"><p className="text-[9px] uppercase tracking-widest text-neutral-600">{label}</p><p className="mt-3 text-xl font-semibold">{["R$ 128k", "2.841", "31,8%"][index]}</p></div>)}
          </div>
          <div className="relative mt-4 h-56 overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-6">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/[.06]" />
            <div className="absolute inset-x-0 top-1/4 h-px bg-white/[.04]" />
            <div className="absolute inset-x-0 top-3/4 h-px bg-white/[.04]" />
            <div className="flex h-full items-end gap-2">
              {[28, 42, 37, 58, 48, 72, 62, 86, 78, 96, 82, 100].map((height, index) => <motion.span key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.045 }} className="flex-1 rounded-t-md bg-gradient-to-t from-red-800 to-red-400" />)}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.035] p-4"><span className="text-sm text-neutral-400">Loja orientada por margem e automação</span><span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /></div>
        </motion.div>
      </div>

      <div className="relative mt-24 border-y border-white/10 bg-[#050505] py-6 [mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)] md:py-8">
        <div className={`brand-marquee flex w-max items-stretch ${reduceMotion ? "" : "animate-brand-marquee"}`}>
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="px-2.5 md:px-3">
              <div className="flex min-w-[280px] items-center gap-4 rounded-2xl border border-white/[.08] bg-white/[.025] px-5 py-4 transition hover:border-red-500/30 hover:bg-red-500/[.045] md:min-w-[350px] md:px-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-black text-lg font-black text-red-400 shadow-[inset_0_1px_rgba(255,255,255,.08)]">{brand.badge}</span>
                <span><span className={`block whitespace-nowrap text-2xl font-black tracking-[-.045em] md:text-4xl ${brand.className}`}>{brand.name}</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[.18em] text-neutral-600">{brand.label}</span></span>
                <span className="ml-auto text-red-700">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
