import React from 'react';
import { getHomeData } from '../lib/api';
import { MediaPlayer } from './MediaPlayer';

const HeroIntroduce = async () => {
    const heroData = await getHomeData();
    const title = heroData?.introduce_title;
    const text = heroData?.introduce_text;
    const videoUrl = heroData?.introduce_vid?.url;
    const fullVideoUrl = 'https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4';
    return (
        <section className="py-16 md:py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden border-4 border-primarydark shadow-2xl aspect-video md:aspect-4/3 w-full">
                            <MediaPlayer src={fullVideoUrl} />
                            {/* <iframe
                                src="https://www.youtube.com/embed/INElMf-xD9o?autoplay=1&mute=1&loop=1&playlist=INElMf-xD9o&controls=0&showinfo=0&rel=0&modestbranding=1"
                                title="Debhair Intro Video"
                                className="absolute inset-0 w-full h-full object-cover"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe> */}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primarydark/50"></span>
                            <span>Bemutatkozás</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight">
                            Prémium hajbeültetés{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 italic font-lora font-bold">luxus</span>
                                <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                            </span>{" "}
                            környezetben
                        </h2>

                        <div className="flex flex-col gap-4 text-gray-600 text-lg leading-relaxed font-rem">
                            {text}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroIntroduce;
