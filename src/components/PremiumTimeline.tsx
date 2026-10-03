"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import VentureName from "@/components/VentureName";

const milestones = [
  { number: "01", label: "O começo", title: "Trabalho real antes do código", text: "A estrada e a obra ensinaram disciplina, operação e o custo real de cada hora de trabalho.", signal: "disciplina" },
  { number: "02", label: "Aos 16", title: "Um Positivo quebrado virou laboratório", text: "Uma TV como monitor, noites de estudo e a descoberta de que software poderia multiplicar esforço.", signal: "tecnologia" },
  { number: "03", label: "Operação", title: "Negócios vistos por dentro", text: "Estoque, equipes, bancos de dados e indicadores transformaram teoria em problemas concretos.", signal: "dados" },
  { number: "04", label: "Agora", title: "Ecossistemas que trabalham sozinhos", text: <><VentureName name="coldconnectpay" fullAccent />, automações e a operação da <VentureName name="ishopbox" fullAccent /> conectam produto, aquisição e execução.</>, signal: "escala" },
];

export default function PremiumTimeline() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 72%", "end 58%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.25 });

  return (
    <section ref={ref} id="trajetoria" className="scroll-mt-28 overflow-hidden bg-[#080808] px-5 py-28 text-white sm:px-7 md:px-10 md:py-40 xl:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div><p className="section-kicker">02 / Trajetória</p><h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.06em] md:text-8xl xl:text-9xl">Do peso à<br /><span className="text-red-500">escala.</span></h2></div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-500 lg:justify-self-end lg:text-xl">Quatro mudanças de contexto. A mesma obsessão: construir uma realidade em que resultado não dependa apenas de horas trabalhadas.</p>
        </div>

        <div className="relative mt-16 lg:ml-[12%]">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-white/10 md:left-[43px]" />
          <motion.div className="absolute bottom-0 left-[27px] top-0 w-px origin-top bg-gradient-to-b from-red-400 via-red-600 to-red-950 md:left-[43px]" style={{ scaleY }} />
          <div className="space-y-5">
            {milestones.map((item, index) => (
              <motion.article
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, x: 44 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.72, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid min-h-[240px] gap-6 rounded-[2rem] border border-white/[.08] bg-white/[.025] p-7 pl-20 transition duration-500 hover:border-red-500/30 hover:bg-red-500/[.035] md:grid-cols-[.65fr_1fr] md:p-10 md:pl-28"
              >
                <span className="absolute left-[15px] top-10 grid h-6 w-6 place-items-center rounded-full border border-red-500/50 bg-[#080808] text-[8px] text-red-400 shadow-[0_0_24px_rgba(239,35,60,.35)] md:left-[31px]">{item.number}</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[.24em] text-red-400">{item.label} / {item.signal}</p>
                  <h3 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">{item.title}</h3>
                </div>
                <div className="flex items-end"><p className="max-w-xl text-base leading-8 text-neutral-500 md:text-lg">{item.text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
