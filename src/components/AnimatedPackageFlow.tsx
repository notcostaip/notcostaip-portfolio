"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PackageCheck, ShoppingBag, Truck } from "lucide-react";

const packages = [
  { left: "7%", top: "12%", size: "lg", duration: 7.4, delay: 0 },
  { left: "61%", top: "8%", size: "sm", duration: 6.2, delay: -1.5 },
  { left: "74%", top: "48%", size: "md", duration: 8.1, delay: -3.2 },
  { left: "32%", top: "52%", size: "sm", duration: 6.8, delay: -2.1 },
  { left: "48%", top: "27%", size: "md", duration: 7.8, delay: -4.2 },
];

const sizeClasses = {
  sm: "h-20 w-24 sm:h-24 sm:w-28",
  md: "h-24 w-28 sm:h-28 sm:w-36",
  lg: "h-28 w-36 sm:h-36 sm:w-44",
};

function Package({ item, index, reduceMotion }: { item: (typeof packages)[number]; index: number; reduceMotion: boolean | null }) {
  return (
    <motion.div
      className={`absolute ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
      style={{ left: item.left, top: item.top }}
      animate={reduceMotion ? undefined : {
        x: [0, index % 2 ? 18 : -12, index % 2 ? -8 : 16, 0],
        y: [0, -18, 8, 0],
        rotate: [index % 2 ? 4 : -5, index % 2 ? -3 : 3, index % 2 ? 5 : -4, index % 2 ? 4 : -5],
      }}
      transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="package-card relative h-full w-full overflow-hidden rounded-2xl border border-red-400/25 bg-gradient-to-br from-[#821526] via-[#4f0c17] to-[#16070a] shadow-[0_24px_70px_rgba(153,13,35,.28)]">
        <span className="absolute inset-y-0 left-1/2 w-[18%] -translate-x-1/2 bg-gradient-to-b from-red-400/90 to-red-700/80" />
        <span translate="no" className="notranslate absolute left-3 top-3 rounded-md border border-white/10 bg-black/45 px-2 py-1 font-mono text-[6px] uppercase tracking-[.16em] text-red-400 sm:text-[7px]">iSHOPBOX</span>
        <span className="absolute bottom-3 right-3 h-5 w-10 rounded bg-[#eee8dc] p-1 opacity-80">
          <span className="block h-full bg-[repeating-linear-gradient(90deg,#17110f_0_1px,transparent_1px_3px)]" />
        </span>
      </div>
    </motion.div>
  );
}

export default function AnimatedPackageFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[390px] overflow-hidden border-t border-red-500/15 bg-[radial-gradient(circle_at_50%_45%,rgba(239,35,60,.2),transparent_46%)] sm:min-h-[460px] lg:min-h-[520px] lg:border-l lg:border-t-0">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px]" />
      {packages.map((item, index) => <Package key={index} item={item} index={index} reduceMotion={reduceMotion} />)}

      <motion.div
        className="absolute bottom-5 left-5 right-5 rounded-2xl border border-red-500/25 bg-[#090708]/90 p-4 shadow-2xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-[340px]"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/15 text-red-400"><ShoppingBag size={19} /></span>
          <div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-red-400"><span translate="no" className="notranslate">iSHOPBOX</span> / minha loja</p><p className="mt-1 text-sm font-semibold text-white">Operação automática via dropshipping</p></div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] text-neutral-500 sm:text-xs">
          <PackageCheck size={14} className="text-red-400" /> Pedido confirmado <span>→</span> <Truck size={14} className="text-red-400" /> Fulfillment
        </div>
      </motion.div>
    </div>
  );
}
