'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children: React.ReactNode[];
};

export default function OurTeamSlider({ children }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const totalSlides = React.Children.count(children);

    const checkScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

        const pages = Math.round(scrollWidth / clientWidth);
        const current = Math.round(scrollLeft / clientWidth);

        setTotalPages(pages);
        setCurrentIndex(current);
    }, []);

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', checkScroll);
            checkScroll();
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (ref) ref.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [checkScroll]);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollAmount = container.clientWidth;

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative group">
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {React.Children.map(children, (child, index) => (
                    <div className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] snap-center shrink-0">
                        {child}
                    </div>
                ))}
            </div>



            <div className="flex items-center justify-between gap-4 mt-8 py-4 px-6 rounded-full max-w-3xl mx-auto">
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`text-white transition-opacity duration-300 ${!canScrollLeft ? 'opacity-30' : 'hover:opacity-80'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={32} strokeWidth={1.5} />
                </button>

                <div className="flex-1 flex gap-2 h-1">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-full flex-1 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`text-white transition-opacity duration-300 ${!canScrollRight ? 'opacity-30' : 'hover:opacity-80'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={32} strokeWidth={1.5} />
                </button>
            </div>
        </div >
    );
}
