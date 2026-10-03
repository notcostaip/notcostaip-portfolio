"use client";

import { ThinkingOrb } from "thinking-orbs";

export default function LoadingOrb() {
  return (
    <div className="grid min-h-[100svh] place-items-center bg-[#080808] text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="scale-125"><ThinkingOrb state="connecting" size={64} theme="dark" aria-label="Carregando notcostaip" /></div>
        <p translate="no" className="notranslate font-mono text-[10px] uppercase tracking-[.32em] text-neutral-500">notcostaip / loading</p>
      </div>
    </div>
  );
}
