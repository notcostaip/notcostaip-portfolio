import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, Box, Check, Megaphone, PackageCheck, Search, ShoppingBag, Store, Truck } from "lucide-react";
import VentureName from "@/components/VentureName";

export const metadata: Metadata = {
  title: "iSHOPBOX | Loja de e-commerce de notcostaip",
  description: "Conheça a iSHOPBOX, loja de e-commerce operada por Pablo Henrick com dropshipping, automação e decisões orientadas por margem.",
  alternates: { canonical: "/negocios/ishopbox" },
};

const stages = [
  { icon: Search, title: "Produto e oferta", text: "Pesquisa de demanda, leitura de concorrência, definição de preço e construção de uma oferta clara." },
  { icon: BarChart3, title: "Aquisição e margem", text: "Criativos, mídia e indicadores são analisados juntos para crescer sem perder o controle econômico." },
  { icon: PackageCheck, title: "Pedido automatizado", text: "A operação conecta venda e fornecedor, reduzindo tarefas manuais no processamento de cada pedido." },
  { icon: Truck, title: "Fulfillment", text: "O modelo de dropshipping permite operar sem estoque próprio, com acompanhamento de envio e experiência do cliente." },
];

export default function IshopboxPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] px-5 pb-24 pt-28 text-white sm:px-7 md:px-10 md:pt-40 xl:px-14">
      <div className="mx-auto max-w-[1500px]">
        <Link href="/#negocios" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-red-400"><ArrowLeft size={16} /> Voltar aos negócios</Link>

        <section className="mt-10 grid gap-10 border-b border-white/10 pb-16 md:mt-12 md:gap-12 md:pb-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,.8fr)] lg:items-center xl:gap-20">
          <div>
            <p className="section-kicker">Minha loja / e-commerce</p>
            <h1 className="mt-6 text-6xl font-semibold leading-[.88] tracking-[-.065em] sm:text-7xl md:text-9xl xl:text-[9rem]"><VentureName name="ishopbox" /></h1>
          </div>
          <div className="w-full max-w-xl lg:justify-self-end">
            <p className="text-2xl font-medium leading-tight text-white sm:text-3xl">Uma loja própria, operada com automação e dropshipping.</p>
            <p className="mt-6 text-lg leading-8 text-neutral-400">A <VentureName name="ishopbox" fullAccent /> não é um software. É a operação de e-commerce de Pablo Henrick: produto, oferta, aquisição, venda e relacionamento com o cliente coordenados por dados.</p>
          </div>
        </section>

        <section className="grid border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[['Modelo', 'Dropshipping'], ['Papel', 'Loja própria'], ['Operação', 'Automatizada'], ['Decisão', 'Dados + margem']].map(([label, value]) => <div key={label} className="border-white/10 py-5 sm:border-l sm:px-6 first:border-l-0 first:pl-0"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-neutral-600">{label}</p><p className="mt-2 text-lg font-semibold text-white">{value}</p></div>)}
        </section>

        <section className="py-20 md:py-28">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stages.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="flex min-h-[280px] flex-col rounded-[2rem] border border-white/10 bg-white/[.035] p-7 transition hover:-translate-y-1 hover:border-red-500/35">
                <div className="flex items-center justify-between"><Icon className="text-red-400" size={24} /><span className="font-mono text-[10px] text-neutral-600">0{index + 1}</span></div>
                <div className="mt-auto"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-neutral-500">{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid overflow-hidden rounded-[2rem] border border-red-500/25 bg-[#0d090a] md:grid-cols-[.8fr_1.2fr] md:rounded-[2.75rem]">
          <div className="p-7 sm:p-10 md:p-14"><ShoppingBag className="text-red-400" /><h2 className="mt-8 text-4xl font-semibold tracking-[-.045em] md:text-6xl">O trabalho humano fica nas decisões.</h2><p className="mt-6 leading-8 text-neutral-400">Automação organiza o fluxo repetitivo. A operação continua responsável por selecionar produtos, avaliar margem, ajustar oferta e cuidar da experiência de compra.</p></div>
          <div className="grid min-h-[380px] place-items-center bg-[radial-gradient(circle,rgba(239,35,60,.22),transparent_55%)] p-7">
            <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-black/65 p-6 shadow-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-red-400">Fluxo operacional</p>
              <div className="mt-8 space-y-3">{["Produto validado", "Pedido recebido", "Fornecedor acionado", "Entrega acompanhada"].map((label, index) => <div key={label} className="flex items-center gap-4 rounded-xl bg-white/[.04] p-4"><span className="grid h-8 w-8 place-items-center rounded-full bg-red-500/15 text-xs text-red-300">{index + 1}</span><span className="text-sm text-neutral-300">{label}</span></div>)}</div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="section-kicker">Como eu opero</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl md:text-7xl">Uma loja com rotina de laboratório.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-neutral-500">Cada produto começa como hipótese. Oferta, criativo, canal e margem são testados antes de receber mais capital.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[{ icon: Store, title: 'Catálogo', text: 'Produtos escolhidos por demanda, diferenciação e viabilidade econômica.' }, { icon: Megaphone, title: 'Distribuição', text: 'Criativos e campanhas conectam intenção, oferta e página de produto.' }, { icon: Box, title: 'Fornecedor', text: 'Disponibilidade, processamento e rastreio acompanhados como parte da experiência.' }, { icon: BarChart3, title: 'Otimização', text: 'Conversão, CAC, ticket e margem orientam o próximo ciclo de decisão.' }].map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[.025] p-7"><Icon className="text-red-400" size={22} /><h3 className="mt-10 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-neutral-500">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] bg-[#f2efe8] p-7 text-[#171512] sm:p-10 md:grid-cols-2 md:rounded-[2.75rem] md:p-14">
          <div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-red-600">O que automatiza</p><div className="mt-7 space-y-4">{['Registro e organização de pedidos', 'Encaminhamento operacional ao fornecedor', 'Atualização de status e acompanhamento', 'Consolidação de indicadores de venda'].map(item => <p key={item} className="flex gap-3 text-sm font-medium sm:text-base"><Check size={18} className="shrink-0 text-red-600" />{item}</p>)}</div></div>
          <div className="border-black/10 pt-8 md:border-l md:pl-12 md:pt-0"><p className="font-mono text-[10px] uppercase tracking-[.22em] text-red-600">O que continua humano</p><p className="mt-7 text-3xl font-semibold leading-tight tracking-[-.04em]">Escolher o produto, construir a oferta, interpretar o cliente e decidir onde reinvestir.</p></div>
        </section>

        <section className="flex flex-col gap-8 py-24 sm:flex-row sm:items-end sm:justify-between md:py-32"><div><p className="section-kicker">Visão</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] md:text-7xl">Transformar operação em repertório para o próximo produto.</h2></div><Link href="/#negocios" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:border-red-500 hover:text-red-400">Ver outros negócios <ArrowRight size={16} /></Link></section>
      </div>
    </main>
  );
}
