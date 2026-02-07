'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react'

interface ReviewsSliderProps {
    reviews: any[]
}

export interface ReviewsSliderRef {
    scrollLeft: () => void
    scrollRight: () => void
    canScrollLeft: boolean
    canScrollRight: boolean
    activeIndex: number
}

const ReviewsSlider = forwardRef<ReviewsSliderRef, ReviewsSliderProps>(({ reviews }, forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null)
    const [canLeft, setCanLeft] = useState(false)
    const [canRight, setCanRight] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0)

    const update = () => {
        if (!ref.current) return
        const { scrollLeft, scrollWidth, clientWidth } = ref.current
        setCanLeft(scrollLeft > 10)
        setCanRight(scrollLeft < scrollWidth - clientWidth - 10)

        const cardWidth = ref.current.querySelector('.review-card')?.clientWidth || 0
        const gap = 32
        const newIndex = Math.round(scrollLeft / (cardWidth + gap))
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        update()
        ref.current?.addEventListener('scroll', update)
        window.addEventListener('resize', update)
        return () => {
            ref.current?.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [])

    const scroll = (dir: 'left' | 'right') => {
        if (!ref.current) return
        const cardWidth = ref.current.querySelector('.review-card')?.clientWidth || 0
        const gap = 32
        const scrollAmount = cardWidth + gap

        ref.current.scrollBy({
            left: dir === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        })
    }

    useImperativeHandle(forwardedRef, () => ({
        scrollLeft: () => scroll('left'),
        scrollRight: () => scroll('right'),
        canScrollLeft: canLeft,
        canScrollRight: canRight,
        activeIndex: activeIndex
    }))

    return (
        <div className="relative">
            <div
                ref={ref}
                className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pr-0 md:pr-[calc(66.666%+32px)]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {reviews.map((review, i) => (
                    <div
                        key={i}
                        className="review-card min-w-full md:min-w-[calc(33.333%-21px)] snap-start shrink-0"
                    >
                        <div className={`flex flex-col items-start gap-4 md:gap-6 transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="relative bg-white rounded-3xl p-5 md:p-6 shadow-xl w-1/3 md:w-full md:max-w-xl mx-0">
                                <p className="text-sm md:text-base text-gray-600 leading-normal md:leading-relaxed wrap-break-word">
                                    {review.review}
                                </p>
                                <span className="absolute -bottom-3 left-8 w-6 h-6 bg-white rotate-45"></span>
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                                <Image
                                    src={review.avatar.url}
                                    alt="debhair hajbeültetési klinika debrecen - elégedett páciens véleménye"
                                    width={48}
                                    height={48}
                                    className="object-cover rounded-[50%]"
                                />

                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold text-primarydark">
                                        {review.name}
                                    </span>


                                    <div className="flex items-center gap-1 text-primary">
                                        <span className="text-xs opacity-80">{review.social_media}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})

ReviewsSlider.displayName = 'ReviewsSlider'

export default ReviewsSlider
