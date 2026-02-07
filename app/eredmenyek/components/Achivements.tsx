import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import { getHomeData } from '../../lib/api'
import { resolveHomeImageUrl } from '../../lib/url'
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

    // Duplicate pairs for demonstration (remove if not needed)
    const duplicatedPairs = [...pairs, ...pairs, ...pairs]

    return (
        <section className="bg-white py-16 md:py-20 lg:py-24">
            {/* GLOBAL CONTAINER - WIDE FOR BIGGER IMAGES */}
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* HEADER */}
                <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-12 lg:mb-16">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider justify-center lg:justify-start">
                        <span className="w-2 h-2 rounded-full bg-primarydark/50"></span>
                        <span className="text-primarydark/60 font-rem">Számok helyett beszéljenek a képek</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight">
                        Hajbeültetés{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 font-bold">
                                Eredményeink
                            </span>
                            <span className="absolute bottom-[0.0625rem] md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                    {duplicatedPairs.map((pair: any, index: number) => (
                        <BeforeAfter
                            key={index}
                            before={pair.before}
                            after={pair.after}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 lg:mt-16 flex justify-center">
                    <Link
                        href="/kapcsolat"
                        className="
                            w-full sm:w-auto
                            inline-flex items-center justify-center gap-3
                            bg-primarydark text-white
                            px-8 h-14
                            rounded-full
                            font-bold text-base uppercase tracking-wide
                            shadow-lg
                            transition-all duration-300
                            hover:scale-105 hover:shadow-xl hover:bg-primary
                        "
                    >
                        <span className="size-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                            <MoveUpRight className="text-primarydark" />
                        </span>
                        <span>Időpont foglalás</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Achivements