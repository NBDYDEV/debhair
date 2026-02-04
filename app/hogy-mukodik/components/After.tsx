import { Crosshair } from 'lucide-react'
import React from 'react'
import AfterCard from './AfterCard'
import AfterCardsClient from './AfterCardsClient'

const afterCareItems = [
    {
        title: 'LOREM IPSUM',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis blandit ornare. Aliquam id convallis metus. Mauris ex ligula, porta vel aliquet vel, aliquet non odio. Proin tortor lorem, semper eu velit eu, lacinia dictum justo. Morbi quis magna quis dui aliquet viverra. Maecenas ut facilisis magna. ',
    },
    {
        title: 'LOREM IPSUM',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis blandit ornare. Aliquam id convallis metus. Mauris ex ligula, porta vel aliquet vel, aliquet non odio. Proin tortor lorem, semper eu velit eu, lacinia dictum justo. Morbi quis magna quis dui aliquet viverra. Maecenas ut facilisis magna. ',
    },
    {
        title: 'LOREM IPSUM',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis blandit ornare. Aliquam id convallis metus. Mauris ex ligula, porta vel aliquet vel, aliquet non odio. Proin tortor lorem, semper eu velit eu, lacinia dictum justo. Morbi quis magna quis dui aliquet viverra. Maecenas ut facilisis magna. ',
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
