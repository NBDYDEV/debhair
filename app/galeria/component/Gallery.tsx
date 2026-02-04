import { MediaPlayer } from '@/app/components/MediaPlayer'
import { Youtube } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const videos = [
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
]

function Gallery() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col gap-12">

                    {/* Section header */}
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primarydark/50" />
                            <span className="text-primarydark/60">Videók</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight">
                        Hajbeültetés{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 font-bold">Videók</span>
                            <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                        </span>{" "}
                    </h2>
                    </div>

                    {/* Video grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {videos.map((src, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-3xl border-4 border-primarydark shadow-xl aspect-video w-full"
                            >
                                <MediaPlayer src={src} />
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center pt-6">
                        <Link
                            href="/idopont"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primarydark text-white px-10 py-4 rounded-full font-rem text-base tracking-widest uppercase shadow-lg transition-transform hover:scale-105"
                        >
                            <Youtube className="h-6 w-6" />
                            <span>TOVÁBBI VIDEÓK A YOUTUBE CSATORNÁNKON!</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Gallery
