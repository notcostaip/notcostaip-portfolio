import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Boxes, Check, Code2, Gauge, Layers3, Search, ShoppingCart, Sparkles, Wrench } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";
import VentureName from "@/components/VentureName";

export const metadata: Metadata = {
  title: "Serviços digitais premium",
  description: "Desenvolvimento full stack, SaaS, automação, inteligência artificial e operações digitais por notcostaip.",
  alternates: { canonical: "/servicos" },
};

const services = [
  { icon: Code2, index: "01", title: "Produtos full stack", text: "Aplicações web completas, do produto e interface até APIs, banco de dados e deploy.", tags: ["Next.js", "React", "Node.js"] },
  { icon: Layers3, index: "02", title: "SaaS & MVP", text: "Arquitetura e execução de produtos recorrentes com onboarding, billing e métricas.", tags: ["Product", "Billing", "Analytics"] },
  { icon: Bot, index: "03", title: "IA & automação", text: "Agentes, workflows n8n e integrações que retiram tarefas repetitivas da operação.", tags: ["n8n", "AI agents", "APIs"] },
  { icon: ShoppingCart, index: "04", title: "Commerce systems", text: "Dashboards, precificação e automações para e-commerce, dropshipping e marketplaces.", tags: ["iSHOPBOX", "Growth", "Data"] },
  { icon: Gauge, index: "05", title: "Performance web", text: "Reconstrução de interfaces com foco em Core Web Vitals, SEO técnico e conversão.", tags: ["CWV", "SEO", "CRO"] },
  { icon: Boxes, index: "06", title: "Integrações críticas", text: "CRM, pagamentos, webhooks e bancos de dados funcionando como um único sistema.", tags: ["CRM", "Payments", "SQL"] },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] px-5 pb-24 pt-32 text-white sm:px-7 md:px-10 md:pt-40 xl:px-14">
      <div className="mx-auto max-w-[1500px]">
        <MotionReveal className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><p className="section-kicker">Systems / services</p><h1 className="mt-6 text-5xl font-semibold leading-[.9] tracking-[-.065em] sm:text-6xl md:text-9xl">Construção digital<br /><span className="text-red-500">sem ruído.</span></h1></div>
          <div className="lg:justify-self-end"><p className="max-w-xl text-lg leading-8 text-neutral-500">Estratégia, produto e engenharia trabalhando juntos para transformar um gargalo operacional em software de alto impacto.</p><Link href="https://wa.me/5561994503567" target="_blank" className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-500 active:scale-95">Solicitar diagnóstico <ArrowUpRight size={17} /></Link></div>
        </MotionReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, index, title, text, tags }, itemIndex) => (
            <MotionReveal key={title} delay={itemIndex * 0.045}>
              <article className="group flex min-h-[390px] flex-col rounded-[2rem] border border-white/[.09] bg-[linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.015))] p-7 shadow-[inset_0_1px_rgba(255,255,255,.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-red-500/35 hover:bg-red-500/[.04] md:p-9">
                <div className="flex items-center justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30 text-red-400 transition group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white"><Icon size={22} /></div><span className="font-mono text-[10px] tracking-[.2em] text-neutral-700">SERVICE_{index}</span></div>
                <div className="mt-auto"><h2 className="text-3xl font-semibold tracking-[-.04em] md:text-4xl">{title}</h2><p className="mt-5 leading-7 text-neutral-500">{text}</p><div className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-neutral-500">{tag === "iSHOPBOX" ? <VentureName name="ishopbox" fullAccent /> : tag}</span>)}</div></div>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-24 grid gap-14 border-y border-white/10 py-20 lg:grid-cols-[.7fr_1.3fr] md:mt-32 md:py-28">
          <div><p className="section-kicker">Automation practice</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl md:text-7xl"><VentureName name="automation" /> aplicado ao problema real.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-neutral-500">A mesma disciplina usada em produtos próprios é aplicada ao seu gargalo: entender, simplificar, construir e medir.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[{ icon: Search, step: '01', title: 'Diagnóstico', text: 'Mapeamento do processo atual, custos, exceções e resultado esperado.' }, { icon: Sparkles, step: '02', title: 'Desenho', text: 'Arquitetura enxuta, experiência e critérios claros de sucesso.' }, { icon: Wrench, step: '03', title: 'Construção', text: 'Entrega incremental com integrações, testes e observabilidade.' }, { icon: Gauge, step: '04', title: 'Evolução', text: 'Métricas reais orientam correções, automações e próximas versões.' }].map(({ icon: Icon, step, title, text }) => <article key={step} className="rounded-[1.75rem] border border-white/10 bg-white/[.025] p-7"><div className="flex items-center justify-between"><Icon size={22} className="text-red-400" /><span className="font-mono text-[9px] text-neutral-700">STEP_{step}</span></div><h3 className="mt-12 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-neutral-500">{text}</p></article>)}
          </div>
        </MotionReveal>

        <MotionReveal className="mt-24 md:mt-32">
          <p className="section-kicker">Formas de trabalhar</p><div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[{ title: 'Sprint de diagnóstico', text: 'Para descobrir onde está o gargalo e sair com uma arquitetura priorizada.', bullets: ['Mapa do processo', 'Riscos e oportunidades', 'Plano de execução'] }, { title: 'Produto do zero', text: 'Para transformar uma hipótese validada em aplicação pronta para operar.', bullets: ['UX e interface', 'Front e back-end', 'Deploy e métricas'] }, { title: 'Automação contínua', text: 'Para operações que precisam integrar ferramentas e reduzir trabalho manual.', bullets: ['APIs e webhooks', 'Agentes e workflows', 'Monitoramento'] }].map(item => <article key={item.title} className="rounded-[2rem] border border-white/10 bg-[#0d0d0f] p-7 sm:p-9"><h3 className="text-3xl font-semibold tracking-[-.04em]">{item.title}</h3><p className="mt-5 min-h-20 leading-7 text-neutral-500">{item.text}</p><div className="mt-7 space-y-3">{item.bullets.map(bullet => <p key={bullet} className="flex gap-3 text-sm text-neutral-300"><Check size={17} className="text-red-400" />{bullet}</p>)}</div></article>)}
          </div>
        </MotionReveal>

        <MotionReveal className="mt-20 overflow-hidden rounded-[2.75rem] bg-[#f2efe8] p-8 text-[#171512] md:p-16">
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-red-600">Start with the bottleneck</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1] tracking-[-.055em] md:text-7xl">Não vendo complexidade. Entrego um sistema mais simples de operar.</h2>
          <Link href="https://wa.me/5561994503567" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600 active:scale-95">Conversar sobre o projeto <ArrowRight size={17} /></Link>
        </MotionReveal>
      </div>
    </main>
  );
}
