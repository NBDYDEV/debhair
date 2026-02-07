import React from 'react'
import PrepCardClient from './PrepCardClient'

const afterCareItems = [
    {
        title: 'Orvosi felmérés és konzultáció',
        description:
            'A hajbeültetés előtt elengedhetetlen egy alapos orvosi vizsgálat és személyes konzultáció. Ennek során felmérjük a hajhullás okát, az adóterület állapotát, valamint az Ön általános egészségi állapotát. Ez biztosítja, hogy a beavatkozás biztonságosan, az Ön igényeire szabva történjen.',
    },
    {
        title: 'Gyógyszerek és életmód',
        description:
            'A beavatkozás előtti napokban bizonyos gyógyszerek, vitaminok és élvezeti szerek kerülése javasolt. A vérhígítók, az alkohol és a dohányzás befolyásolhatják a gyógyulást, ezért részletes útmutatót adunk arról, mire kell figyelni a tökéletes eredmény érdekében.',
    },
    {
        title: 'Felkészülés a beavatkozás napjára',
        description:
            'A hajbeültetés napján fontos a megfelelő előkészület: tiszta haj, kényelmes ruházat és nyugodt érkezés. Klinikánk minden szükséges információt előre megoszt, hogy Ön felkészülten, stresszmentesen vágjon bele a kezelésbe.',
    },
]

function PrepSect() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl mb-12">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3">
                        <span className="w-2 h-2 rounded-full bg-primarydark/50" />
                        <span className="text-primarydark">Előkészületek</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-rem font-extrabold text-primarydark leading-tight">
                        <span className="relative inline-block">
                            <span className="relative z-10 font-bold">Fontos lépések</span>
                            <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                        </span>{" "} a habjeültetés előtt
                    </h2>
                    <span className="text-black text-lg mt-2 block">Az alábbi lépések elvégzése elengedhetetlen a tökéletes eredmény eléréséhez!</span>
                </div>
                <PrepCardClient items={afterCareItems} />

            </div>
        </section>
    )
}

export default PrepSect