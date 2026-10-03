"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

function MagneticLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Github }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  return (
    <motion.div
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      whileTap={{ scale: 0.96 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex min-w-40 items-center justify-between rounded-full border border-white/15 bg-white/[.06] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-red-400/60 hover:bg-red-500 active:bg-red-700"
      >
        <span>{label}</span>
        <Icon size={18} className="transition-transform group-hover:rotate-6 group-hover:scale-110" />
      </Link>
    </motion.div>
  );
}

export default function MagneticSocials() {
  return (
    <div className="mt-5 flex flex-wrap gap-3" aria-label="Redes profissionais">
      <MagneticLink href="https://github.com/notcostaip" label="GitHub" icon={Github} />
      <MagneticLink href="https://www.linkedin.com/in/notcostaip" label="LinkedIn" icon={Linkedin} />
    </div>
  );
}
