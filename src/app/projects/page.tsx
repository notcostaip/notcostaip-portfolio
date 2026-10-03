import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, GitBranch, Github, Star } from "lucide-react";
import MotionReveal from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Projetos no GitHub",
  description: "Código, experimentos e projetos open source de notcostaip no GitHub.",
  alternates: { canonical: "/projects" },
};

const signals = [
  { icon: Code2, label: "Full stack systems" },
  { icon: GitBranch, label: "Build in public" },
  { icon: Star, label: "Products & experiments" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] px-5 pb-24 pt-32 text-white sm:px-7 md:px-10 md:pt-40 xl:px-14">
      <div className="mx-auto max-w-[1500px]">
        <MotionReveal>
          <p className="section-kicker">Repository / public work</p>
          <h1 className="mt-6 max-w-6xl text-5xl font-semibold leading-[.9] tracking-[-.06em] sm:text-6xl md:text-9xl xl:text-[10rem]">O código fala no <span className="text-red-500">GitHub.</span></h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-neutral-500 md:text-xl">Esta página não replica repositórios. Ela é uma porta direta para o lugar onde projetos, experimentos e evolução técnica acontecem em público.</p>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-16">
          <Link href="https://github.com/notcostaip" target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#0d0d0f] p-7 transition duration-500 hover:-translate-y-2 hover:border-red-500/40 active:translate-y-0 md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,35,60,.2),transparent_35%)] opacity-70 transition duration-700 group-hover:opacity-100" />
            <div className="relative flex min-h-[380px] flex-col justify-between md:min-h-[460px]">
              <div className="flex items-start justify-between">
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[.04]"><Github size={32} /></div>
                <ArrowUpRight size={34} className="text-neutral-600 transition duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-red-400" />
              </div>
              <div>
                <div className="mb-10 grid gap-3 sm:grid-cols-3">
                  {signals.map(({ icon: Icon, label }) => <span key={label} className="flex items-center gap-3 rounded-2xl border border-white/[.08] bg-black/30 px-4 py-4 text-xs text-neutral-400"><Icon size={16} className="text-red-400" />{label}</span>)}
                </div>
                <p translate="no" className="notranslate font-mono text-[10px] uppercase tracking-[.25em] text-red-400">github.com/notcostaip</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.045em] md:text-7xl">Explorar todos os repositórios</h2>
                <span className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_50px_rgba(220,38,38,.28)] transition group-hover:bg-white group-hover:text-black">
                  Clique aqui para abrir meu GitHub <ArrowUpRight size={17} />
                </span>
              </div>
            </div>
          </Link>
        </MotionReveal>
      </div>
    </main>
  );
}
