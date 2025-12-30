"use client";

import React, { useState, useEffect, useRef } from "react";

interface CyberpunkTextProps {
    text: string;
    className?: string;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function CyberpunkText({ text, className = "" }: CyberpunkTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startGlitch = () => {
        setIsHovering(true);
        let iteration = 0;

        // Clear any existing interval
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            // Slower resolve matching original hacker effect theory but kept fast for hover feeling
            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                // keep hovering state purely visual via CSS if needed, but text is resolved
            }

            iteration += 1 / 3;
        }, 30);
    };

    const stopGlitch = () => {
        setIsHovering(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
    };

    return (
        <span
            className={`relative inline-block ${className} ${isHovering ? "animate-glitch text-red-500" : ""}`}
            onMouseEnter={startGlitch}
            onMouseLeave={stopGlitch}
            data-text={text} // For potential CSS pseudo-element tricks
        >
            {displayText}
        </span>
    );
}
