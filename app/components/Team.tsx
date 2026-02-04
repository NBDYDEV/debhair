import React from 'react'
import OurTeamSlider from './OurTeamSlider'
import Image from 'next/image'
import { getTeamData } from '../lib/api'
import { resolveTeamImageUrl } from '../lib/url';
import Link from 'next/link';
import { AtSign } from 'lucide-react';

// Egy csapattag kártya komponens a tisztább kódért
function TeamMemberCard({
    name,
    position,
    imageUrl
}: {
    name: string;
    position: string;
    imageUrl: string | null;
}) {
    return (
        <div className="flex flex-col items-center rounded-2xl overflow-hidden bg-gradient-to-t from-[#0F4D43] to-[#4F7F73]">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                    src={imageUrl || '/doc.png'}
                    alt={`Debhair csapat tagja - ${position} ${name}`}
                    fill
                    sizes="(max-width: 480px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 280px"
                    className="object-cover object-top transition-transform duration-500"
                />
            </div>

            {/* Információs rész */}
            <div className="w-full py-4 md:py-5 lg:py-6 text-center bg-[#0F4D43]">
                <h3 className="text-white text-base md:text-lg font-bold leading-tight px-2">
                    {name}
                </h3>
                <p className="text-white/70 text-xs md:text-sm italic mt-1 px-2">
                    {position}
                </p>
            </div>
        </div>
    );
}

async function Team() {
    const team = await getTeamData();

    // Placeholder adatok ha nincs API válasz
    const placeholderTeam = [
        { id: 1, name: "Dr. Kovács János", position: "Vezető orvos", image: null },
        { id: 2, name: "Dr. Nagy Eszter", position: "Hajbeültetési specialista", image: null },
        { id: 3, name: "Szabó Péter", position: "Asszisztens", image: null },
        { id: 4, name: "Kiss Mária", position: "Pácienskoordinátor", image: null },
        { id: 5, name: "Tóth László", position: "Technikus", image: null },
        { id: 6, name: "Varga Anna", position: "Recepciós", image: null },
    ];

    const teamData = team && team.length > 0 ? team : placeholderTeam;

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primarydark">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Fejléc badge */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase mb-4 md:mb-6">
                    <span className="w-2 h-2 rounded-full bg-white/50"></span>
                    <span className="text-white/60 tracking-wider">Csapatunk</span>
                </div>

                {/* Cím és CTA gomb */}
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-white leading-tight">
                        Ismerje meg{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 italic font-lora font-bold">csapatunkat .</span>
                            <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                        </span>{" "}
                    </h2>

                    <Link
                        href="/kapcsolat"
                        className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-5 sm:px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shrink-0"
                    >
                        <AtSign className="h-4 w-4 md:h-5 md:w-5 text-black" />
                        <span>Kérdezzen tőlünk!</span>
                    </Link>
                </div>

                {/* Slider konténer */}
                <div className="w-full py-4 md:py-6 mt-4 md:mt-6">
                    <OurTeamSlider>
                        {teamData.map((member) => (
                            <TeamMemberCard
                                key={member.id}
                                name={member.name}
                                position={member.position}
                                imageUrl={
                                    member.image?.url
                                        ? resolveTeamImageUrl(member.image.url)
                                        : '/doc.png'
                                }
                            />
                        ))}
                    </OurTeamSlider>
                </div>
            </div>
        </section>
    )
}

export default Team;