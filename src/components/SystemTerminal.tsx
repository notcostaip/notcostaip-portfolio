"use client";

import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { memo, useEffect, useMemo, useState } from "react";
import { systemLogGroups } from "@/data/systemLog";

const bootCommands = [
  "booting notcostaip.knowledge_graph --public",
  "mounting products, engineering, ai, commerce",
  "verifying CNPJ 60.778.755/0001-43",
  "index ready: context-first semantic entities",
];

type TerminalLine = {
  id: string;
  scope: string;
  term: string;
  detail: string;
};

const TerminalStream = memo(function TerminalStream({ lines, paused }: { lines: TerminalLine[]; paused: boolean }) {
  return (
    <div className={`terminal-stream ${paused ? "[animation-play-state:paused]" : ""}`} aria-hidden="true">
      {[...lines, ...lines].map((line, index) => (
        <div key={`${line.id}-${index}`} className="grid grid-cols-[90px_1fr] gap-3 border-b border-red-500/[.055] py-2.5">
          <span className="text-neutral-800">[{String(index % lines.length).padStart(3, "0")}]</span>
          <p><span className="text-red-500">{line.scope}</span><span className="text-neutral-700"> :: </span><strong className="font-medium text-red-300">{line.term}</strong><span className="text-neutral-600"> — {line.detail}</span></p>
        </div>
      ))}
    </div>
  );
});

export default function SystemTerminal() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [paused, setPaused] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const lines = useMemo(
    () => systemLogGroups.flatMap((group) => group.entries.slice(0, 5).map((entry, index) => ({
      id: `${group.id}-${index}`,
      scope: group.id,
      term: entry.term,
      detail: entry.detail,
    }))),
    [],
  );

  useEffect(() => {
    if (paused || minimized) return;
    const command = bootCommands[commandIndex];
    if (typed.length < command.length) {
      const timer = window.setTimeout(() => setTyped(command.slice(0, typed.length + 1)), 28);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setTyped("");
      setCommandIndex((current) => (current + 1) % bootCommands.length);
    }, 900);
    return () => window.clearTimeout(timer);
  }, [commandIndex, minimized, paused, typed]);

  return (
    <section translate="no" className={`notranslate relative z-10 mx-auto w-full overflow-hidden rounded-[1.25rem] border border-red-500/25 bg-[#0a0809]/92 shadow-[0_40px_140px_rgba(120,0,18,.24)] backdrop-blur-2xl transition-all duration-500 ${maximized ? "max-w-none" : "max-w-6xl"}`} aria-label="System Log interativo do mapa de conhecimento">
      <div className="flex h-14 items-center justify-between border-b border-red-500/15 bg-red-500/[.055] px-5">
        <div className="flex items-center gap-2.5">
          <Link href="/" aria-label="Fechar terminal e voltar para a página inicial" className="h-3.5 w-3.5 rounded-full bg-[#ff314b] shadow-[0_0_12px_rgba(255,49,75,.45)] transition hover:scale-110 active:scale-90" />
          <button type="button" aria-label={minimized ? "Restaurar terminal" : "Minimizar terminal"} onClick={() => setMinimized(!minimized)} className="h-3.5 w-3.5 rounded-full bg-[#a51d30] shadow-inner transition hover:scale-110 active:scale-90" />
          <button type="button" aria-label={maximized ? "Reduzir terminal" : "Maximizar terminal"} onClick={() => setMaximized(!maximized)} className="h-3.5 w-3.5 rounded-full bg-[#66101e] shadow-inner transition hover:scale-110 active:scale-90" />
        </div>
        <div className="font-sans text-xs font-medium text-neutral-500">notcostaip — knowledge-graph — 120×36</div>
        <button type="button" onClick={() => setPaused(!paused)} className="grid h-8 w-8 place-items-center rounded-lg text-neutral-500 transition hover:bg-white/10 hover:text-white active:scale-90" aria-label={paused ? "Continuar animação" : "Pausar animação"}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>

      {!minimized && (
        <div className="relative h-[620px] overflow-hidden p-5 text-[12px] leading-6 md:p-8 md:text-[13px]">
          <div className="relative z-10 mb-5 flex items-center gap-2 bg-[#0a0809] text-red-400">
            <span className="text-red-300">notcostaip@portfolio</span><span className="text-neutral-700">~</span><span>$</span>
            <span className="text-neutral-200">{typed}</span><span className="terminal-cursor h-4 w-2 bg-red-500" />
          </div>
          <div className="relative z-10 mb-4 grid grid-cols-[90px_1fr] border-b border-red-500/15 bg-[#0a0809] pb-3 text-[10px] uppercase tracking-[.18em] text-neutral-700"><span>process</span><span>semantic output</span></div>
          <div className="relative h-[455px] overflow-hidden">
            <TerminalStream lines={lines} paused={paused} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0809] to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[.15em] text-neutral-600 md:left-8 md:right-8">
            <span>records={lines.length}</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> indexed / human-readable</span>
          </div>
        </div>
      )}
    </section>
  );
}
