import React from 'react'
import type { Metadata } from 'next'
import Hero from './component/Hero'
import Gallery from './component/Gallery'
import Achivements from './component/Achivements'
import ImageGallery from './component/ImageGallery'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Galéria - Hajbeültetés Előtte-Utána Képek | Debhair",
    description: "Tekintse meg hajbeültetési eredményeinket! Valódi előtte-utána fotók elégedett ügyfeleink természetes hajbeültetési eredményeiről. FUE módszer Debrecenben.",
}

function page() {
    return (
        <>
            <Hero />
            <Gallery />
            <Achivements />
            <ImageGallery />
            {/* <ContactForm backgroundVariant="gradient">
                <div className="grid grid-cols-3 gap-4 w-full h-full auto-rows-fr" style={{ minHeight: '650px' }}>
                    <div className="relative col-span-2 row-span-1 rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-lg aspect-3/2">
                        <Image
                            src="https://api.netbazis.com/uploads/Debhair_20240530_125853_scaled_86b5be1f2f.webp"
                            alt="Debhair hajbeültetés előtte-utána eredmény - természetes hajvonal kialakítása FUE módszerrel"
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="relative col-span-1 row-span-1 rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-lg aspect-3/2">
                        <Image
                            src="https://api.netbazis.com/uploads/Debhair_0_3_scaled_d16067ddab.jpg"
                            alt="Hajbeültetés eredmény - dús, természetes hajkorona 6 hónap után"
                            fill
                            sizes="(max-width: 1024px) 100vw, 16vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="relative col-span-3 row-span-1 rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-lg aspect-3/1">
                        <Image
                            src="https://api.netbazis.com/uploads/Debhair_20240530_125853_scaled_86b5be1f2f.webp"
                            alt="Debhair klinika belső tere - modern, steril környezet professzionális hajbeültetési eljárásokhoz"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </ContactForm> */}
        </>
    )
}

export default page