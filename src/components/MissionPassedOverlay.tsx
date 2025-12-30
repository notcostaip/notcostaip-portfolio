"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MissionPassedOverlayProps {
    show: boolean;
}

export default function MissionPassedOverlay({ show }: MissionPassedOverlayProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-none"
                >
                    <div className="text-center w-full">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-mission uppercase leading-tight drop-shadow-2xl text-white">
                                Mission Passed
                            </h1>
                            <h2 className="text-4xl md:text-6xl text-white font-mission mt-4 drop-shadow-lg">
                                Respect +
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
