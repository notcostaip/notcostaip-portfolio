import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, BrainCircuit, CheckCircle2, CreditCard, Database, MessageSquareText, ShieldCheck, Workflow } from "lucide-react";
import VentureName from "@/components/VentureName";

export const metadata: Metadata = {
  title: "ColdconnectPay | CRM, automação e pagamentos",
  description: "ColdconnectPay reúne CRM, prospecção, automação, inteligência artificial e pagamentos em uma operação conectada.",
  alternates: { canonical: "/negocios/coldconnectpay" },
};

const capabilities = [
  { icon: MessageSquareText, title: "CRM e conversas", text: "Contatos, histórico, oportunidades e próximas ações dentro de um fluxo comercial organizado." },
  { icon: Workflow, title: "Automação", text: "Regras e integrações assumem tarefas repetitivas entre aquisição, atendimento, vendas e pós-venda." },
  { icon: BrainCircuit, title: "Inteligência artificial", text: "IA aplicada para classificar contexto, apoiar conversas e transformar dados em ações úteis." },
  { icon: CreditCard, title: "Pagamentos", text: "Cobrança e confirmação de pagamento conectadas ao restante da jornada comercial." },
];

export default function ColdconnectpayPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] px-5 pb-24 pt-24 text-white sm:px-7 md:px-10 md:pt-32 xl:px-14">
      <div className="mx-auto max-w-[1500px]">
        <Link href="/#negocios" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-red-400"><ArrowLeft size={16} /> Voltar aos negócios</Link>

        <section className="mt-10 grid gap-10 border-b border-white/10 pb-16 md:mt-12 md:gap-12 md:pb-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,.75fr)] lg:items-center xl:gap-20">
          <div>
            <p className="section-kicker">CRM / IA / automação / pagamentos</p>
            <h1 className="mt-6 break-words text-[clamp(3.25rem,7.4vw,8rem)] font-semibold leading-[.88] tracking-[-.065em]"><VentureName name="coldconnectpay" /><span className="text-red-500">.</span></h1>
          </div>
          <div className="w-full max-w-xl lg:justify-self-end">
            <p className="text-2xl font-medium leading-[1.12] sm:text-3xl lg:text-[2rem]">Da primeira conversa ao pagamento, sem perder contexto.</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8"><VentureName name="coldconnectpay" fullAccent /> unifica prospecção, CRM, automação inteligente e pagamentos em uma arquitetura operacional contínua.</p>
          </div>
        </section>

        <section className="grid border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[['Entrada', 'Prospecção'], ['Memória', 'CRM'], ['Execução', 'Automação + IA'], ['Conversão', 'Pagamentos']].map(([label, value]) => <div key={label} className="border-white/10 py-5 sm:border-l sm:px-6 first:border-l-0 first:pl-0"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-neutral-600">{label}</p><p className="mt-2 text-lg font-semibold">{value}</p></div>)}
        </section>

        <section className="py-20 md:py-28">
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group min-h-[300px] rounded-[2rem] border border-white/10 bg-white/[.035] p-7 transition hover:border-red-500/35 hover:bg-red-500/[.035] sm:p-9">
                <div className="flex items-center justify-between"><Icon className="text-red-400" size={26} /><span className="font-mono text-[10px] text-neutral-600">MODULE_0{index + 1}</span></div>
                <h2 className="mt-20 text-3xl font-semibold tracking-[-.035em]">{title}</h2><p className="mt-4 max-w-xl leading-7 text-neutral-500">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] border border-red-500/25 bg-red-600 p-7 sm:p-10 md:rounded-[2.75rem] md:p-16">
          <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-white/15" /><div className="absolute -right-8 -top-12 h-72 w-72 rounded-full border border-white/15" />
          <Bot size={30} className="relative" /><p className="relative mt-12 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-.05em] md:text-7xl">Menos ferramentas soltas. Mais contexto atravessando toda a operação.</p>
        </section>

        <section className="py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="section-kicker">Arquitetura operacional</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl md:text-7xl">Um contexto. Quatro camadas.</h2><p className="mt-7 text-lg leading-8 text-neutral-500">O objetivo não é adicionar mais uma ferramenta. É impedir que informação, conversa e receita se percam entre ferramentas isoladas.</p></div>
            <div className="space-y-3">
              {[{ icon: Database, label: '01 / Dados', text: 'Contatos, histórico e sinais comerciais viram uma base operacional única.' }, { icon: MessageSquareText, label: '02 / Conversa', text: 'Cada interação preserva origem, contexto e próximo passo.' }, { icon: BrainCircuit, label: '03 / Inteligência', text: 'Regras e IA ajudam a classificar, priorizar e executar.' }, { icon: CreditCard, label: '04 / Receita', text: 'Pagamento confirmado atualiza o ciclo sem reconciliação manual.' }].map(({ icon: Icon, label, text }) => <article key={label} className="grid gap-5 rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:grid-cols-[auto_1fr] sm:items-center"><span className="grid h-12 w-12 place-items-center rounded-xl bg-red-500/10 text-red-400"><Icon size={22} /></span><div><h3 className="font-mono text-xs uppercase tracking-[.18em] text-red-400">{label}</h3><p className="mt-2 leading-7 text-neutral-500">{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0f] md:grid-cols-2 md:rounded-[2.75rem]">
          <div className="p-7 sm:p-10 md:p-14"><ShieldCheck className="text-red-400" /><h2 className="mt-8 text-4xl font-semibold tracking-[-.045em] md:text-6xl">O resultado esperado.</h2><p className="mt-6 leading-8 text-neutral-400">Menos perda de contexto, menor tempo de resposta e uma visão mais clara do que realmente move cada oportunidade.</p></div>
          <div className="border-white/10 p-7 sm:p-10 md:border-l md:p-14">{['Pipeline visível do início ao fim', 'Follow-up acionado por eventos', 'IA apoiando tarefas repetitivas', 'Pagamento ligado à origem comercial'].map(item => <p key={item} className="flex gap-3 border-b border-white/10 py-5 text-neutral-300 last:border-0"><CheckCircle2 size={19} className="shrink-0 text-red-400" />{item}</p>)}</div>
        </section>

        <section className="flex flex-col gap-8 py-24 sm:flex-row sm:items-end sm:justify-between md:py-32"><div><p className="section-kicker">Produto em evolução</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] md:text-7xl">Construído para fazer a operação avançar sem perder memória.</h2></div><Link href="/#negocios" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:border-red-500 hover:text-red-400">Ver outros negócios <ArrowRight size={16} /></Link></section>
      </div>
    </main>
  );
}
