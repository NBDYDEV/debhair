import { MediaPlayer } from '@/app/components/MediaPlayer'
import { Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const videos = [
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
    'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4',
]

function ImageGallery() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col gap-12">

                    {/* Section header */}
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primarydark/50" />
                            <span className="text-primarydark/60">Képek</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight">
                            További{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 font-bold">képek</span>
                                <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                            </span>{" "}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-3xl shadow-xl aspect-square"
                            >
                                <Image src={'https://api.netbazis.com/uploads/Debhair_0_3_scaled_d16067ddab.jpg'} alt="" fill className='object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageGallery
