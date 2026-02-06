'use client'

import Image from 'next/image'
import { Instagram } from 'lucide-react'

interface ReviewCardProps {
    review: any
    isActive?: boolean
}

export default function ReviewCard({ review, isActive = true }: ReviewCardProps) {
    return (
        <div
            className={`
                flex flex-col items-start gap-6
                transition-opacity duration-500
                ${isActive ? 'opacity-100' : 'opacity-40'}
            `}
        >
            <div
                className="
                    relative
                    bg-white
                    rounded-3xl
                    p-6
                    shadow-xl
                    max-w-[36ch]
                    sm:max-w-prose
                    lg:max-w-xl
                "
            >
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-rem">
                    {review.review}
                </p>

                <span className="absolute -bottom-3 left-8 w-6 h-6 bg-white rotate-45"></span>
            </div>

            <div className="flex items-center gap-3 ml-4">
                <Image
                    src={review.avatar.url}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                />

                <div className="flex flex-col text-sm">
                    <span className="font-semibold text-primarydark">
                        {review.name}
                    </span>

                    <div className="flex items-center gap-1 text-primary">
                        <Instagram size={14} />
                        <span className="text-xs opacity-80">
                            Instagram
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
