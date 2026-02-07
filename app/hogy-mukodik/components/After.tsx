import { Crosshair } from 'lucide-react'
import React from 'react'
import AfterCard from './AfterCard'
import AfterCardsClient from './AfterCardsClient'

const afterCareItems = [
    {
        title: 'Pihenés és regeneráció',
        description:
            'A hajbeültetést követő napokban a szervezet regenerációja kiemelten fontos. Javasolt a fokozott fizikai terhelés kerülése, valamint a megfelelő mennyiségű pihenés biztosítása. Ez elősegíti a beültetett hajszálak megtapadását és a gyorsabb gyógyulást.',
    },
    {
        title: 'Hajápolás és tisztítás',
        description:
            'A beavatkozás után speciális hajápolási szabályokat kell betartani. A hajmosás kizárólag az előírt módon, az ajánlott termékekkel történhet, kerülve a dörzsölést és az erős vízsugarat. A megfelelő ápolás alapvető a természetes és tartós eredményhez.',
    },
    {
        title: 'Kontroll és utókezelés',
        description:
            'A rendszeres kontrollvizsgálatok segítenek nyomon követni a gyógyulás folyamatát és a haj növekedését. Klinikánk szakemberei végigkísérik Önt az utókezelési időszakban, és minden felmerülő kérdésre gyors, szakszerű választ adnak.',
    },
]

function After() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl mb-12">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3">
                        <span className="w-2 h-2 rounded-full bg-primarydark/50" />
                        <span className="text-primarydark">Hajbeültetés után</span>
                    </div>

                    <h2 className="text-primarydark text-3xl md:text-4xl font-extrabold leading-tight">
                        Mire kell figyelni a beavatkozás után?
                    </h2>
                </div>
                <AfterCardsClient items={afterCareItems} />

            </div>
        </section>
    )
}

export default After
