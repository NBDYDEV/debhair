import { Smile } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { getAchivementsImages } from '../lib/api';
import { resolveAchiementsImagesUrl } from '../lib/url';
import { Calendar } from 'lucide-react';

async function AchivementsHero() {
    const achivementsImages = await getAchivementsImages();
    const data = achivementsImages?.[0];

    if (!data) return null;

    return (
        <section className="relative w-full min-h-[calc(100vh-74px)] overflow-hidden bg-white">
            <Image
                src='https://api.netbazis.com/uploads/Debhair_2_2_1_scaled_cd6a234bf0.png'
                alt="Hero background"
                fill
                priority
                className="object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-linear-to-r from-white/50 via-white/20 to-transparent" />

            <div className="relative z-10 container mx-auto px-6 md:px-12 min-h-[calc(100vh-74px)] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
                    <div className="flex flex-col items-start text-left gap-6 max-w-lg">
                        <div className="w-12 h-12 border-4 bg-white/50 border-primarydark rounded-2xl flex items-center justify-center">
                            <Smile className="text-primarydark" size={28} />
                        </div>

                        <h1 className="font-rem text-4xl lg:text-5xl xl:text-6xl font-bold text-primarydark leading-tight">
                            Eredményeink
                        </h1>

                        <p className="font-rem text-base lg:text-lg text-primarydark/80 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>

                        <button className="font-rem mt-4 px-8 py-3 bg-primarydark hover:bg-primarydark/70 text-white rounded-full transition-colors duration-300 flex items-center justify-center gap-3">
                            <Calendar className='text-white' size={28}/>
                            IDŐPONT FOGLALÁS
                        </button>

                        <div className="flex gap-8 mt-6">
                            <div className='border-l-3 border-white/50 pl-6'>
                                <div className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-transparent">5000</div>
                                <div className="text-sm text-black/50 mt-1 uppercase tracking-wider">elégedett ügyfél</div>
                            </div>
                            <div className='border-l-3 border-white/50 pl-6'>
                                <div className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-transparent">300</div>
                                <div className="text-sm text-black/50 mt-1 uppercase tracking-wider">sikeres kezelés</div>
                            </div>
                            <div className='border-l-3 border-white/50 pl-6'>
                                <div className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-transparent">20</div>
                                <div className="text-sm text-black/50 mt-1 uppercase tracking-wider">szakértő</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-[500px]">
                        <div className="relative w-48 h-48 lg:w-56 lg:h-56">

                            <div className="absolute inset-0 rounded-full border-4 border-primarydark shadow-2xl overflow-hidden bg-gray-400 z-30 hover:scale-105 transition-all duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.middle_circle.url) || ''}
                                    alt="Middle circle"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-1/2 left-1/2 w-28 h-28 lg:w-32 lg:h-32 -translate-x-1/2 -translate-y-[170%] rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-300 z-20 transition-transform hover:-translate-y-[180%] duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.top_circle.url) || ''}
                                    alt="Top circle"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-1/2 left-1/2 w-28 h-28 lg:w-32 lg:h-32 -translate-x-1/2 translate-y-[70%] rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-300 z-20 transition-transform hover:translate-y-[80%] duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.bottom_circle.url) || ''}
                                    alt="Bottom circle"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-1/2 left-1/2 w-28 h-28 lg:w-32 lg:h-32 -translate-x-[170%] -translate-y-1/2 rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-300 z-20 transition-transform hover:-translate-x-[180%] duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.left_circle.url) || ''}
                                    alt="Left circle"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-1/2 left-1/2 w-28 h-28 lg:w-32 lg:h-32 translate-x-[70%] -translate-y-1/2 rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-300 z-20 transition-transform hover:translate-x-[80%] duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.right_circle.url) || ''}
                                    alt="Right circle"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AchivementsHero