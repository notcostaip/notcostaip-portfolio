import Link from "next/link";
import { Github, Instagram, Linkedin, MapPin, Terminal } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-12 text-white md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-5">
          <div>
            <p className="text-lg font-semibold">Created by <span translate="no" className="notranslate text-red-500">notcostaip</span></p>
            <p className="mt-2 text-sm text-neutral-500">Pablo Henrick Costa Silva · CNPJ 60.778.755/0001-43</p>
          </div>
          <p className="flex items-center gap-2 text-sm text-neutral-400"><MapPin size={16} className="text-red-500" aria-hidden="true" /> Brasília–DF, Brasil</p>
          <div className="flex items-center gap-5 text-neutral-400">
            <Link href="https://github.com/notcostaip" aria-label="GitHub" target="_blank" rel="noreferrer" className="transition hover:text-white active:scale-90"><Github size={19} /></Link>
            <Link href="https://instagram.com/notcostaip" aria-label="Instagram" target="_blank" rel="noreferrer" className="transition hover:text-white active:scale-90"><Instagram size={19} /></Link>
            <Link href="https://www.linkedin.com/in/notcostaip" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="transition hover:text-white active:scale-90"><Linkedin size={19} /></Link>
            <Link href="/system-log" aria-label="System Log" translate="no" className="notranslate ml-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-600 transition hover:text-red-400 active:translate-y-px"><Terminal size={15} /> System Log</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
