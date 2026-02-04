import { Trophy } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Achievements() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-black leading-tight">
                        Nézze meg hajbeültetés{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 font-bold">eredményeinket</span>
                            <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-white -z-0 rounded-sm"></span>
                        </span>{" "}
                    </h2>


                    <Link
                        href="/eredmenyek"
                        className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-sans text-base tracking-widest uppercase shadow-lg transition-all hover:scale-105 hover:shadow-xl md:ml-6"
                    >
                        <Trophy className="h-6 w-6" />
                        <span>EREDMÉNYEINK</span>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Achievements
