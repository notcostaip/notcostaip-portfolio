"use client";

import React, { useEffect, useState } from "react";

interface MissionPassedOverlayProps {
    show: boolean;
}

export default function MissionPassedOverlay({ show }: MissionPassedOverlayProps) {
    const [render, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
        else {
            const timer = setTimeout(() => setRender(false), 500); // Wait for exit animation
            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!render) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-none transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className={`text-center w-full transition-transform duration-500 ease-out ${show ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <h1 className="text-6xl md:text-8xl font-mission uppercase leading-tight drop-shadow-2xl text-white">
                    Mission Passed
                </h1>
                <h2 className="text-4xl md:text-6xl text-white font-mission mt-4 drop-shadow-lg">
                    Respect +
                </h2>
            </div>
        </div>
    );
}
