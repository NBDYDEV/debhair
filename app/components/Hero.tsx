import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Trophy, UserStar, Calendar, Search } from "lucide-react";
import { getHomeData } from "../lib/api";
import { resolveHomeImageUrl } from "../lib/url";

async function Hero() {
    const heroData = await getHomeData();

    const title = heroData?.hero_title || "Professzionális Hajbeültetés Debrecenben";
    const description = heroData?.hero_text || "Természetes eredmény, prémium minőség, több mint 5000 elégedett ügyfél.";

    const imageUrl = heroData?.hero_image?.url
        ? resolveHomeImageUrl(heroData.hero_image.url)
        : "/placeholder-hero.jpg";

    return (
        <section className="relative w-full min-h-[calc(100vh-74px)] flex items-center bg-gradient-to-t from-primary/30 to-white overflow-hidden py-12 md:py-0">
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

                {/* Bal oldal - Szöveg és gombok */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 z-10">
                    <h1 className="text-4xl lg:text-6xl text-primarydark leading-tight tracking-tight text-center md:text-left">
                        <span className="font-rem font-extrabold">Hajbeültetés</span>{" "}
                        <span className="font-lora font-normal">szakértelemmel</span>
                        <span className="font-rem font-extrabold">,</span>{" "}
                        <br />
                        <span className="font-rem font-extrabold">mert megérdemled</span>{" "}
                        <span className="font-lora font-normal">a</span>
                        <br />
                        <span className="font-lora font-normal">magabiztosságot!</span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-lg font-rem text-center md:text-left mx-auto md:mx-0">
                        {description}
                    </p>

                    {/* Gombok - horizontálisan */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2 md:mt-4 justify-center md:justify-start">
                        <Link
                            href="/kapcsolat"
                            className="flex items-center justify-center gap-3 bg-primary hover:bg-primarydark text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-rem text-sm md:text-base tracking-widest uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                            <span>Időpont foglalás</span>
                        </Link>

                        <Link
                            href="/hogy-mukodik"
                            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primarydark px-6 md:px-8 py-3 md:py-4 rounded-full font-rem text-sm md:text-base tracking-widest uppercase shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <Search className="h-5 w-5 md:h-6 md:w-6" />
                            <span>Hogy működik?</span>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="relative w-full max-w-[500px] lg:max-w-[550px]">
                        <div className="relative rotate-2 md:rotate-3 transition-transform duration-500 hover:rotate-0">
                            <div className="rounded-2xl border-4 border-primarydark shadow-2xl overflow-hidden bg-primarydark">
                                <div className="relative aspect-[4/3] w-full">
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt="Debhair hajbeültetési klinika Debrecen - modern berendezés és professzionális környezet"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                                            className="object-cover"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                            <span className="text-xl font-rem text-gray-500">Betöltés...</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Lebegő badge - bal felső (csak desktop) */}
                        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 bg-white p-3 lg:p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 max-w-[200px] lg:max-w-[220px] transform -rotate-3 z-10">
                            <div className="bg-secondary/20 p-2 rounded-full text-secondary flex-shrink-0">
                                <Trophy className="h-5 w-5 lg:h-6 lg:w-6" />
                            </div>
                            <p className="text-black text-xs lg:text-sm font-rem leading-tight">
                                Prémium hajbeültetés luxus környezetben
                            </p>
                        </div>

                        {/* Lebegő badge - jobb alsó (csak desktop) */}
                        <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white p-3 lg:p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 max-w-[180px] lg:max-w-[200px] transform rotate-2 z-10">
                            <div className="bg-primary/20 p-2 rounded-full text-primary flex-shrink-0">
                                <UserStar className="h-5 w-5 lg:h-6 lg:w-6" />
                            </div>
                            <p className="text-black text-xs lg:text-sm font-rem leading-tight">
                                Több mint 5.000 elégedett ügyfél
                            </p>
                        </div>

                        {/* Mobil badge-ek */}
                        <div className="absolute -top-3 -left-2 bg-white p-2.5 rounded-xl shadow-lg flex md:hidden items-center gap-2 max-w-[160px] z-10">
                            <div className="bg-secondary/20 p-1.5 rounded-full text-secondary flex-shrink-0">
                                <Trophy className="h-4 w-4" />
                            </div>
                            <p className="text-black text-[10px] font-rem leading-tight">
                                Prémium hajbeültetés luxus környezetben
                            </p>
                        </div>

                        <div className="absolute -bottom-3 -right-2 bg-white p-2.5 rounded-xl shadow-lg flex md:hidden items-center gap-2 max-w-[160px] z-10">
                            <div className="bg-primary/20 p-1.5 rounded-full text-primary flex-shrink-0">
                                <UserStar className="h-4 w-4" />
                            </div>
                            <p className="text-black text-[10px] font-rem leading-tight">
                                5.000+ elégedett ügyfél
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;