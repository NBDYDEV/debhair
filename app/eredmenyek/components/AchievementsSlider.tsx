'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children: React.ReactNode[];
};

export default function AchievementsSlider({ children }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const totalSlides = React.Children.count(children);

    const checkScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        const index = Math.round(scrollLeft / clientWidth);
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
                    <div className="min-w-full md:min-w-[calc(50%-12px)] snap-center shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 p-3 rounded-full bg-primary text-white transition-all duration-300 hover:scale-110 disabled:opacity-0 disabled:scale-90 ${!canScrollLeft ? 'pointer-events-none' : ''}`}
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 p-3 rounded-full bg-primary text-white transition-all duration-300 hover:scale-110 disabled:opacity-0 disabled:scale-90 ${!canScrollRight ? 'pointer-events-none' : ''}`}
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}
