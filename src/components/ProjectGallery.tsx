"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        dragFree: true, // Promotes fluid momentum scrolling
        containScroll: "trimSnaps"
    });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative group">
            {/* Navigation Buttons (Desktop mostly, but works on mobile too) */}
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 hidden md:block">
                <button
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    className="p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-all backdrop-blur-sm"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 hidden md:block">
                <button
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    className="p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-all backdrop-blur-sm"
                    aria-label="Next Slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Embla Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="pl-4 flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 relative"
                        >
                            <div className="aspect-video bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden relative group/slide select-none">
                                <Image
                                    src={img}
                                    alt={`${title} screenshot ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 hover:scale-105 pointer-events-none" // pointer-events-none helps with dragging
                                    draggable={false} // Disable native image drag
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll instruction for mobile/desktop if needed */}
            <p className="text-center text-neutral-600 text-sm mt-4 md:hidden">
                Arraste para ver mais
            </p>
        </div>
    );
};

export default ProjectGallery;
