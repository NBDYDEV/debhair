'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
    children: React.ReactNode[]
}

export default function AchievementsSlider({ children }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = useCallback(() => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 10)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }, [])

    useEffect(() => {
        const ref = scrollRef.current
        if (!ref) return

        ref.addEventListener('scroll', checkScroll)
        window.addEventListener('resize', checkScroll)
        checkScroll()

        return () => {
            ref.removeEventListener('scroll', checkScroll)
            window.removeEventListener('resize', checkScroll)
        }
    }, [checkScroll])

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left:
                direction === 'left'
                    ? -scrollRef.current.clientWidth
                    : scrollRef.current.clientWidth,
            behavior: 'smooth',
        })
    }

    return (
        <div className="relative group">
            <div
                ref={scrollRef}
                className="
                    flex gap-6
                    overflow-x-auto
                    snap-x snap-mandatory
                    scrollbar-hide
                    py-4
                    px-1
                "
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {React.Children.map(children, (child) => (
                    <div
                        className="
                            snap-center
                            shrink-0
                            min-w-full
                            md:min-w-[80%]
                            lg:min-w-[calc(33.333%-16px)]
                        "
                    >
                        {child}
                    </div>
                ))}
            </div>
            <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="
                    hidden lg:flex
                    absolute top-1/2 -left-6 -translate-y-1/2
                    z-10
                    p-3 rounded-full
                    bg-primary text-white
                    transition
                    hover:scale-110
                    disabled:opacity-0
                "
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="
                    hidden lg:flex
                    absolute top-1/2 -right-6 -translate-y-1/2
                    z-10
                    p-3 rounded-full
                    bg-primary text-white
                    transition
                    hover:scale-110
                    disabled:opacity-0
                "
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}
