import React from 'react'
import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'
import After from './components/After'
import Faq from './components/Faq'

export const metadata: Metadata = {
    title: "Hogyan Működik a Hajbeültetés? | FUE Módszer Debrecen",
    description: "Ismerje meg a hajbeültetés folyamatát lépésről lépésre! FUE módszer, fájdalommentes beavatkozás, gyors gyógyulás. Gyakran ismételt kérdések és válaszok.",
}
import Achivements from '../components/Achivements'
import PrepSect from './components/PrepSect'
import Hero from './components/Hero'
import HowItWorksSect from './components/HowItWorksSect'
import Pricing from '../components/Pricing'

function page() {
    return (
        <>
            <Hero />
            <HowItWorksSect />
            <PrepSect />
            <Achivements />
            <Faq />
            <After />
            <ContactForm backgroundVariant="gradient"/>
        </>
    )
}

export default page