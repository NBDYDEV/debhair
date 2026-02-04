'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import ReviewsSlider, { ReviewsSliderRef } from './ReviewsSlider'

interface ReviewsClientProps {
    reviews: any[]
}

export default function ReviewsClient({ reviews }: ReviewsClientProps) {
    const sliderRef = useRef<ReviewsSliderRef>(null)
    const [canLeft, setCanLeft] = useState(false)
    const [canRight, setCanRight] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                setCanLeft(sliderRef.current.canScrollLeft)
                setCanRight(sliderRef.current.canScrollRight)
                setActiveIndex(sliderRef.current.activeIndex)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="relative lg:col-span-4">
                <span className="absolute -top-16 -left-8 text-[120px] text-primarydark/10 font-lora italic font-bold leading-none">
                    "
                </span>
                <h2 className="text-4xl md:text-5xl font-rem font-medium text-primarydark leading-tight mb-6 relative z-10">
                    Rólunk <br /> mondták.
                </h2>

                <p className="text-primary font-rem text-lg leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex items-center gap-4 mt-8 max-w-md">
                    <button
                        onClick={() => sliderRef.current?.scrollLeft()}
                        disabled={!canLeft}
                        className="p-3 rounded-full bg-primary text-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shrink-0"
                        aria-label="Previous review"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex items-center gap-2 flex-1 justify-center">
                        {reviews.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-primary/30'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => sliderRef.current?.scrollRight()}
                        disabled={!canRight}
                        className="p-3 rounded-full bg-primary text-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shrink-0"
                        aria-label="Next review"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            
            <div className="lg:col-span-8">
                <ReviewsSlider ref={sliderRef} reviews={reviews} />
            </div>
        </div>
    )
}