import { Calendar, CircleQuestionMark, Images } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-74px)] overflow-hidden">

            {/* Background image */}
            <Image
                src="https://api.netbazis.com/uploads/Debhair_2_2_1_scaled_cd6a234bf0.png"
                alt="Hero background"
                fill
                priority
                className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-white/80" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 min-h-[calc(100vh-74px)] flex items-center justify-center">
                <div className="flex flex-col items-center text-center gap-6 max-w-xl">

                    <CircleQuestionMark className="text-primarydark" size={40} />

                    <h1 className="text-4xl lg:text-[40px] font-rem text-primarydark font-extrabold">
                        Hogy működik?
                    </h1>

                    <p className="text-lg font-rem text-primarydark">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do.
                    </p>

                    <Link
                        href="/galeria"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-primarydark text-white px-8 py-4 rounded-full font-sans text-base tracking-widest uppercase shadow-lg transition-transform hover:scale-105"
                    >
                        <Images className="text-primary h-6 w-6" />
                        <span className='font-rem'>Eredményeink</span>
                    </Link>

                </div>
            </div>

        </section>
    )
}

export default Hero