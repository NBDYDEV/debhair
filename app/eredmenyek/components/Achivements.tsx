import { getHomeData } from '@/app/lib/api'
import { resolveHomeImageUrl } from '@/app/lib/url'
import React from 'react'
import AchievementsSlider from './AchievementsSlider'
import BeforeAfter from '@/app/components/BeforeAfter'

async function Achivements() {
    const data = await getHomeData()
    const images = data?.achivements_images || []

    const normalizedImages = images.map((img: any) => ({
        ...img,
        fullUrl: resolveHomeImageUrl(img.url),
    }))

    const grouped = normalizedImages.reduce((acc: any, img: any) => {
        if (!img.fullUrl) return acc

        const nameWithoutExt = img.name.split('.')[0]
        const rest = nameWithoutExt.split('-').pop()
        if (!rest) return acc

        const [id, type] = rest.split('_')

        if (!acc[id]) acc[id] = {}

        acc[id][type === '1' ? 'before' : 'after'] = img.fullUrl
        return acc
    }, {})

    const pairs = Object.entries(grouped)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([, value]: any) => value)
        .filter(pair => pair.before && pair.after)

    const duplicatedPairs = [...pairs, ...pairs, ...pairs]
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase">
                        <span className="w-2 h-2 rounded-full bg-primarydark/50"></span>
                        <span className="text-primarydark/60 font-rem">Számok helyett beszéljenek a képek</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight">
                        Hajbeültetés{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 font-bold">Eredényeink</span>
                            <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                        </span>{" "}
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {duplicatedPairs.map((pair: any, index: number) => (
                        <BeforeAfter
                            key={index}
                            before={pair.before}
                            after={pair.after}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achivements