import { MediaPlayer } from '@/app/components/MediaPlayer'
import { Images } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HowItWorksSect() {
    return (
        <section className="relative w-full min-h-[calc(100vh-74px)] py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 h-full">
                {/* HEADER */}
                <div className='flex flex-col justify-center items-center mb-12 md:mb-16 gap-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold font-rem text-center bg-clip-text text-transparent bg-gradient-to-r from-primarydark to-primary'>
                        Hogy működik a Hajbeültetés?
                    </h2>
                    <p className='text-base md:text-lg font-rem text-black/50 text-center max-w-3xl wrap-break-word'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* CONTENT GRID */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
                    {/* LEFT SIDE - TEXT + BUTTON */}
                    <div className='flex flex-col justify-between gap-8 bg-gray-50 rounded-3xl p-8 md:p-10'>
                        <div className='flex-1 flex flex-col justify-center'>
                            <p className='font-rem font-medium text-sm md:text-base text-black leading-relaxed wrap-break-word'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis blandit ornare. Aliquam id convallis metus. Mauris ex ligula, porta vel aliquet vel, aliquet non odio. Proin tortor lorem, semper eu velit eu, lacinia dictum justo. Morbi quis magna quis dui aliquet viverra. Maecenas ut facilisis magna. Aliquam placerat finibus erat, ac ullamcorper sapien bibendum et. Phasellus imperdiet pharetra ipsum quis molestie.
                            </p>
                            <p className='font-rem font-medium text-sm md:text-base text-black leading-relaxed wrap-break-word mt-4'>
                                Aliquam lobortis felis ac turpis auctor dapibus vitae consequat sapien. Duis quis risus id arcu mattis pulvinar. Duis dictum ac sem vel sagittis. Mauris at gravida odio, et fringilla est. Vestibulum nec vestibulum mauris, iaculis dignissim turpis. Donec eros nibh, congue in dui nec, finibus ullamcorper augue. Maecenas fermentum massa nec sapien molestie ornare.
                            </p>
                            <p className='font-rem font-medium text-sm md:text-base text-black leading-relaxed wrap-break-word mt-4'>
                                Aliquam lobortis felis ac turpis auctor dapibus vitae consequat sapien. Duis quis risus id arcu mattis pulvinar. Duis dictum ac sem vel sagittis. Mauris at gravida odio, et fringilla est. Vestibulum nec vestibulum mauris, iaculis dignissim turpis. Donec eros nibh, congue in dui nec, finibus ullamcorper augue. Maecenas fermentum massa nec sapien molestie ornare.
                            </p>
                        </div>

                        <div className='flex justify-center lg:justify-start'>
                            <Link
                                href="/galeria"
                                className="inline-flex items-center gap-3 bg-primary hover:bg-primarydark text-white px-8 py-4 rounded-full font-sans text-base tracking-widest uppercase shadow-lg transition-all hover:scale-105"
                            >
                                <Images className="h-6 w-6" />
                                <span>Eredményeink</span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE - VIDEO PLAYER */}
                    <div className='flex flex-col justify-center items-center bg-gray-900 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]'>
                        <MediaPlayer src={'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSect