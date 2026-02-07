import { Smile, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getAchivementsImages } from '../lib/api';
import { resolveAchiementsImagesUrl } from '../lib/url';

async function AchivementsHero() {
    const achivementsImages = await getAchivementsImages();
    const data = achivementsImages?.[0];

    if (!data) return null;

    return (
        <section className="relative w-full min-h-[calc(100vh-74px)] overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
            <Image
                src='https://api.netbazis.com/uploads/Debhair_2_2_1_scaled_cd6a234bf0.png'
                alt="Hero background"
                fill
                priority
                className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-74px)] flex items-center py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
                    <div className="flex flex-col items-start text-left gap-6 max-w-xl">
                        <div className="w-14 h-14 border-4 bg-white/90 border-primarydark rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:rotate-6 duration-300">
                            <Smile className="text-primarydark" size={32} />
                        </div>
                        <h1 className="font-rem text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primarydark leading-tight">
                            Eredményeink
                        </h1>
                        <p className="font-rem text-base lg:text-lg text-gray-700 leading-relaxed max-w-prose">
                            Több mint 5000 elégedett ügyfelünk igazolja szakértelmünket. Tekintse meg valódi eredményeinket és csatlakozzon hozzájuk!
                        </p>
                        <Link
                            href="/kapcsolat"
                            className="
                                font-rem mt-2
                                inline-flex items-center justify-center gap-3
                                px-8 py-4
                                bg-primarydark hover:bg-primary
                                text-white
                                rounded-full
                                shadow-xl
                                transition-all duration-300
                                hover:scale-105 hover:shadow-2xl
                                text-base font-bold uppercase tracking-wide
                            "
                        >
                            <Calendar className='text-white' size={24}/>
                            <span>Időpont foglalás</span>
                        </Link>
                        <div className="flex flex-wrap gap-8 lg:gap-10 mt-6">
                            <div className='flex flex-col gap-1'>
                                <div className="text-4xl lg:text-5xl font-extrabold text-primarydark font-rem">5000</div>
                                <div className="text-xs lg:text-sm text-gray-600 uppercase tracking-wider font-rem font-medium">elégedett ügyfél</div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className="text-4xl lg:text-5xl font-extrabold text-primarydark font-rem">300</div>
                                <div className="text-xs lg:text-sm text-gray-600 uppercase tracking-wider font-rem font-medium">sikeres kezelés</div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className="text-4xl lg:text-5xl font-extrabold text-primarydark font-rem">20</div>
                                <div className="text-xs lg:text-sm text-gray-600 uppercase tracking-wider font-rem font-medium">szakértő</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - IMAGE CLUSTER (EXACT REFERENCE LAYOUT) */}
                    <div className="relative flex items-center justify-center min-h-[450px] sm:min-h-[550px] lg:min-h-[650px]">
                        <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md">
                            <div className="relative aspect-square rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-100 hover:scale-105 transition-all duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.top_circle.url) || ''}
                                    alt="Eredmény 1"
                                    fill
                                    sizes="(max-width: 640px) 45vw, 35vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="relative aspect-square rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-100 hover:scale-105 transition-all duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.right_circle.url) || ''}
                                    alt="Eredmény 2"
                                    fill
                                    sizes="(max-width: 640px) 45vw, 35vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="relative aspect-square rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-100 hover:scale-105 transition-all duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.left_circle.url) || ''}
                                    alt="Eredmény 3"
                                    fill
                                    sizes="(max-width: 640px) 45vw, 35vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="relative aspect-square rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-100 hover:scale-105 transition-all duration-300">
                                <Image
                                    src={resolveAchiementsImagesUrl(data.bottom_circle.url) || ''}
                                    alt="Eredmény 4"
                                    fill
                                    sizes="(max-width: 640px) 45vw, 35vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* DESKTOP - REFERENCE IMAGE LAYOUT (EXACTLY LIKE THE SCREENSHOT) */}
                        <div className="hidden lg:block relative w-full h-full">
                            
                            {/* TOP IMAGE - Small, upper left area */}
                            <div className="absolute top-[10%] left-[10%] w-32 h-32 xl:w-36 xl:h-36 z-10 group">
                                <div className="relative w-full h-full rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-100 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:border-primary hover:z-50">
                                    <Image
                                        src={resolveAchiementsImagesUrl(data.top_circle.url) || ''}
                                        alt="Hajbeültetés eredmény"
                                        fill
                                        sizes="(max-width: 1536px) 128px, 144px"
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primarydark/5 group-hover:to-primarydark/10 transition-all duration-300" />
                                </div>
                            </div>

                            {/* RIGHT IMAGE - LARGEST, center-right (main focus) */}
                            <div className="absolute top-[22%] right-[8%] w-64 h-64 xl:w-72 xl:h-72 z-30 group">
                                <div className="relative w-full h-full rounded-full border-[6px] border-primarydark shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden bg-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] hover:border-primary hover:z-50">
                                    <Image
                                        src={resolveAchiementsImagesUrl(data.right_circle.url) || ''}
                                        alt="Hajbeültetés eredmény - fő kép"
                                        fill
                                        sizes="(max-width: 1536px) 256px, 288px"
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/5 group-hover:to-secondary/15 transition-all duration-300" />
                                </div>
                            </div>

                            {/* LEFT IMAGE - Medium, lower-left area */}
                            <div className="absolute bottom-[20%] left-[8%] w-44 h-44 xl:w-52 xl:h-52 z-20 group">
                                <div className="relative w-full h-full rounded-full border-[5px] border-primarydark shadow-2xl overflow-hidden bg-gray-100 transition-all duration-500 hover:scale-110 hover:translate-y-1 hover:shadow-3xl hover:border-primary hover:z-50">
                                    <Image
                                        src={resolveAchiementsImagesUrl(data.left_circle.url) || ''}
                                        alt="Hajbeültetés eredmény"
                                        fill
                                        sizes="(max-width: 1536px) 176px, 208px"
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primarydark/5 group-hover:to-primarydark/10 transition-all duration-300" />
                                </div>
                            </div>

                            {/* BOTTOM IMAGE - Small, lower-right area */}
                            <div className="absolute bottom-[8%] right-[22%] w-36 h-36 xl:w-40 xl:h-40 z-15 group">
                                <div className="relative w-full h-full rounded-full border-4 border-primarydark shadow-xl overflow-hidden bg-gray-100 transition-all duration-500 hover:scale-110 hover:translate-y-2 hover:shadow-2xl hover:border-primary hover:z-50">
                                    <Image
                                        src={resolveAchiementsImagesUrl(data.bottom_circle.url) || ''}
                                        alt="Hajbeültetés eredmény"
                                        fill
                                        sizes="(max-width: 1536px) 144px, 160px"
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primarydark/5 group-hover:to-primarydark/10 transition-all duration-300" />
                                </div>
                            </div>

                            {/* DECORATIVE FLOATING ELEMENTS */}
                            <div className="absolute top-[18%] left-[28%] w-3 h-3 rounded-full bg-primary/30 blur-md animate-pulse" />
                            <div className="absolute bottom-[45%] right-[15%] w-4 h-4 rounded-full bg-secondary/25 blur-md animate-pulse" style={{ animationDelay: '2s' }} />
                            <div className="absolute top-[52%] left-[20%] w-2 h-2 rounded-full bg-primary/20 blur-sm animate-pulse" style={{ animationDelay: '3.5s' }} />
                            <div className="absolute bottom-[28%] right-[45%] w-3 h-3 rounded-full bg-secondary/30 blur-md animate-pulse" style={{ animationDelay: '1s' }} />
                            
                            {/* SUBTLE CONNECTING LINES */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 20% 15% Q 50% 30% 75% 35%" stroke="#0F4D43" strokeWidth="2" fill="none" strokeDasharray="8,6" />
                                <path d="M 18% 70% Q 40% 55% 68% 70%" stroke="#0F4D43" strokeWidth="2" fill="none" strokeDasharray="8,6" />
                                <circle cx="75%" cy="40%" r="120" stroke="#0F4D43" strokeWidth="1.5" fill="none" strokeDasharray="4,8" opacity="0.5" />
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AchivementsHero