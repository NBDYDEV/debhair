import React from "react";
import { getHomeData } from "../lib/api";
import { MediaPlayer } from "./MediaPlayer";

const HeroIntroduce = async () => {
    const heroData = await getHomeData();
    const title = heroData?.introduce_title;
    const text = heroData?.introduce_text;
    const videoUrl = heroData?.introduce_vid?.url;

    const fullVideoUrl =
        "https://api.netbazis.com/uploads/Debhair_DEB_Hair_Clinic_Hajbeueltetesi_klinika_a8aa8a3836.mp4";

    return (
        <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="
                        flex flex-col
                        gap-8 lg:gap-12
                        lg:grid lg:grid-cols-2 lg:items-center lg:gap-16
                    "
                >
                    <div className="w-full relative order-2 lg:order-1">
                        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-4 border-primarydark shadow-2xl aspect-video w-full">
                            <MediaPlayer src={fullVideoUrl} />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 lg:gap-6 text-center lg:text-left order-1 lg:order-2">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wider justify-center lg:justify-start">
                            <span className="w-2 h-2 rounded-full bg-primarydark/50"></span>
                            <span>Bemutatkozás</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight max-w-[36ch] sm:max-w-prose mx-auto lg:mx-0">
                            Prémium hajbeültetés{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 italic font-lora font-bold">
                                    luxus
                                </span>
                                <span className="absolute bottom-[0.0625rem] left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                            </span>{" "}
                            környezetben
                        </h2>

                        <div
                            className="
                                flex flex-col gap-4
                                text-gray-600
                                text-sm sm:text-base lg:text-lg
                                leading-relaxed
                                font-rem
                                max-w-[36ch] sm:max-w-prose
                                mx-auto lg:mx-0
                            "
                        >
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroIntroduce;