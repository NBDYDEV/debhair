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
            <ContactForm backgroundVariant="gradient"/>
        </>
    )
}

export default page