import React from 'react'
import type { Metadata } from 'next'
import AchivementsHero from '../components/AchivementsHero'
import Achivements from './components/Achivements'
import Reviews from '../components/Reviews'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Eredményeink - Hajbeültetés Előtte-Utána | Debhair Debrecen",
    description: "Nézze meg valódi hajbeültetési eredményeinket! Több mint 5000 sikeres beavatkozás, természetes eredmények FUE módszerrel. Debreceni hajbeültetési klinika.",
}

function page() {
    return (
        <>
            <AchivementsHero />
            <Achivements />
            <Reviews />
            <ContactForm backgroundVariant="light"/>

        </>
    )
}

export default page