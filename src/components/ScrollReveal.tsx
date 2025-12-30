"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
    delay?: number; // ms
}

export default function ScrollReveal({ children, className = "", threshold = 0, delay = 0 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsVisible(true), delay);
                    } else {
                        setIsVisible(true);
                    }
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold,
                rootMargin: "0px" // Adjusted to trigger exactly when entering
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, [threshold, delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out will-change-transform ${className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {children}
        </div>
    );
}
