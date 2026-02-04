import React from 'react'
import PrepCardClient from './PrepCardClient'

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