import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Trophy, UserStar, Calendar, Search } from "lucide-react";
import { getHomeData } from "../lib/api";
import { resolveHomeImageUrl } from "../lib/url";

async function Hero() {
    const heroData = await getHomeData();

    const title =
        heroData?.hero_title ||
        "Professzionális Hajbeültetés Debrecenben";

    const description =
        heroData?.hero_text ||
        "Természetes eredmény, prémium minőség, több mint 5000 elégedett ügyfél.";

    const imageUrl = heroData?.hero_image?.url
        ? resolveHomeImageUrl(heroData.hero_image.url)
        : "/placeholder-hero.jpg";

    return (
        <section className="relative w-full bg-gradient-to-t from-primary/30 to-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="
                        min-h-[80vh]
                        flex flex-col
                        justify-center
                        gap-6
                        py-12 sm:py-16 lg:py-20
                        lg:grid lg:grid-cols-2 lg:items-center lg:gap-12
                    "
                >
                    <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primarydark leading-tight tracking-tight">
                            <span className="font-rem font-extrabold">
                                Hajbeültetés
                            </span>{" "}
                            <span className="font-lora font-normal">
                                szakértelemmel
                            </span>
                            <span className="font-rem font-extrabold">,</span>
                            <br />
                            <span className="font-rem font-extrabold">
                                mert megérdemled
                            </span>{" "}
                            <span className="font-lora font-normal">a</span>
                            <br />
                            <span className="font-lora font-normal">
                                magabiztosságot!
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-rem max-w-[36ch] sm:max-w-prose mx-auto lg:mx-0">
                            {description}
                        </p>

                        <div className="flex flex-col gap-4 mt-2 lg:flex-row lg:gap-4">
                            <Link
                                href="/kapcsolat"
                                className="
                                    w-full lg:w-auto
                                    inline-flex items-center justify-center gap-3
                                    bg-primary hover:bg-primarydark
                                    text-white
                                    px-8
                                    h-14
                                    rounded-full
                                    font-rem font-medium
                                    text-base
                                    tracking-wide uppercase
                                    shadow-lg
                                    transition-all duration-300
                                    hover:scale-105 hover:shadow-xl
                                "
                            >
                                <Calendar className="h-5 w-5" />
                                <span>Időpont foglalás</span>
                            </Link>
                            <Link
                                href="/hogy-mukodik"
                                className="
                                    w-full lg:w-auto
                                    inline-flex items-center justify-center gap-3
                                    bg-white hover:bg-gray-50
                                    text-primarydark
                                    px-8
                                    h-14
                                    rounded-full
                                    font-rem font-medium
                                    text-base
                                    tracking-wide uppercase
                                    shadow-lg
                                    border border-gray-200
                                    transition-all duration-300
                                    hover:scale-105 hover:shadow-xl
                                "
                            >
                                <Search className="h-5 w-5" />
                                <span>Hogy működik?</span>
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center mt-8 lg:mt-0">
                        <div className="relative w-full max-w-md lg:max-w-none">
                            <div className="relative rotate-2 lg:rotate-3 transition-transform duration-500 hover:rotate-0">
                                <div className="rounded-2xl border-4 border-primarydark shadow-2xl overflow-hidden bg-primarydark">
                                    <div className="relative aspect-[4/3] w-full">
                                        {imageUrl && (
                                            <Image
                                                src={imageUrl}
                                                alt="Debhair hajbeültetési klinika Debrecen"
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                                                className="object-cover"
                                                priority
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:flex items-center gap-3 max-w-[220px] -rotate-3 z-10">
                                <div className="bg-secondary/20 p-2 rounded-full text-secondary flex-shrink-0">
                                    <Trophy className="h-6 w-6" />
                                </div>
                                <p className="text-sm font-rem leading-tight">
                                    Prémium hajbeültetés luxus környezetben
                                </p>
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:flex items-center gap-3 max-w-[200px] rotate-2 z-10">
                                <div className="bg-primary/20 p-2 rounded-full text-primary flex-shrink-0">
                                    <UserStar className="h-6 w-6" />
                                </div>
                                <p className="text-sm font-rem leading-tight">
                                    Több mint 5.000 elégedett ügyfél
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;