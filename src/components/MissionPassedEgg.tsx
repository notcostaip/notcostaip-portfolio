"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MissionPassedOverlay = dynamic(() => import("./MissionPassedOverlay"), {
    ssr: false
});

interface MissionPassedEggProps {
    imageSrc: string;
    size?: number;
    alt: string;
    priority?: boolean;
}

export default function MissionPassedEgg({ imageSrc, size = 160, alt, priority = false }: MissionPassedEggProps) {
    const [clickCount, setClickCount] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Load Audio safely
    useEffect(() => {
        try {
            const audio = new Audio("/sounds/mission-passed.mp3");
            audio.volume = 0.5; // Reasonable volume
            // Suppress error if file not found
            audio.addEventListener('error', (e) => {
                // Silently fail or log debug only
                // console.debug("Audio file missing for easter egg");
            });
            audioRef.current = audio;
        } catch (e) {
            console.error("Audio initialization failed");
        }
    }, []);

    const handleClick = () => {
        // If overlay is already shown, do nothing (or maybe close it?)
        if (showOverlay) return;

        setClickCount((prev) => prev + 1);

        // Reset timer on every click
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Set 2s window to reset count
        timerRef.current = setTimeout(() => {
            setClickCount(0);
        }, 2000);
    };

    useEffect(() => {
        // Check if triggered
        if (clickCount >= 2) {
            activateMission();
            setClickCount(0); // Reset immediately so it doesn't loop
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [clickCount]);

    const activateMission = () => {
        setShowOverlay(true);
        // Play Sound
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.error("Audio play failed", e));
        }

        // Auto hide after 5 seconds
        setTimeout(() => {
            setShowOverlay(false);
        }, 5000);
    };

    return (
        <>
            <div
                onClick={handleClick}
                className="cursor-pointer active:scale-95 transition-transform select-none"
                title="Double click me..."
            >
                <div
                    className="mx-auto mb-8 relative rounded-full p-1 bg-gradient-to-tr from-red-600 via-rose-500 to-red-400"
                    style={{ width: size, height: size }}
                >
                    <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden relative">
                        <Image
                            src={imageSrc}
                            alt={alt}
                            fill
                            sizes={`${size}px`}
                            className="object-cover"
                            priority={priority}
                        />
                    </div>
                </div>
            </div>

            {showOverlay && <MissionPassedOverlay show={showOverlay} />}
        </>
    );
}
