import React from 'react'
import OurTeamSlider from './OurTeamSlider'
import Image from 'next/image'
import { getTeamData } from '../lib/api'
import { resolveTeamImageUrl } from '../lib/url';
import Link from 'next/link';
import { AtSign } from 'lucide-react';

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
        <div className="flex flex-col items-center rounded-2xl overflow-hidden bg-gradient-to-t from-[#0F4D43] to-[#4F7F73] transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                    src={imageUrl || '/doc.png'}
                    alt={`Debhair csapat tagja - ${position} ${name}`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 280px"
                    className="object-cover object-top"
                    loading='lazy'
                />
            </div>

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

    const placeholderTeam = [
        { id: 1, name: "Dr. Kovács János", position: "Vezető orvos", image: null },
        { id: 2, name: "Dr. Nagy Eszter", position: "Hajbeültetési specialista", image: null },
        { id: 3, name: "Szabó Péter", position: "Asszisztens", image: null },
        { id: 4, name: "Kiss Mária", position: "Pácienskoordinátor", image: null },
    ];

    const teamData = team && team.length > 0 ? team : placeholderTeam;

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-primarydark">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider justify-center lg:justify-start">
                        <span className="w-2 h-2 rounded-full bg-white/50"></span>
                        <span className="text-white/60">Csapatunk</span>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rem font-extrabold text-white leading-tight max-w-[36ch] mx-auto lg:mx-0">
                            Ismerje meg{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 italic font-lora font-bold">csapatunkat.</span>
                                <span className="absolute bottom-[0.0625rem] md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                            </span>
                        </h2>

                        <Link
                            href="/kapcsolat"
                            className="
                                w-full sm:w-auto
                                inline-flex items-center justify-center gap-3 
                                bg-white text-black 
                                px-8 py-4
                                rounded-full 
                                font-bold text-sm uppercase tracking-wide 
                                shadow-lg 
                                transition-all duration-300 
                                hover:scale-105 hover:shadow-xl hover:bg-secondary
                                flex-shrink-0
                            "
                        >
                            <AtSign className="h-5 w-5 text-black" />
                            <span>Kérdezzen tőlünk!</span>
                        </Link>
                    </div>
                </div>

                <div className="w-full py-4 md:py-6 mt-8 md:mt-10">
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