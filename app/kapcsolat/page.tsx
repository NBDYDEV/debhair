"use client"
import { Check, CircleChevronRight, HelpCircle } from 'lucide-react'
import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm'

function ConnectionPage() {
    const transitionSettings = { duration: 0.8, ease: "easeOut" } as const;
    const [step, setStep] = React.useState(1);
    const [selectedHairloss, setSelectedHairloss] = React.useState('');
    return (
        <>
            <section className="relative w-full min-h-[calc(100vh-74px)] bg-linear-to-t from-primary/40 to-background py-12 md:py-16 overflow-hidden">
                <div className="container mx-auto md:px-12 h-full">
                    <ContactForm backgroundVariant='light' />
                </div>
            </section >
            <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 h-full">
                    <div className="w-full flex flex-col px-4 py-6 justify-center bg-white rounded-xl">
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={transitionSettings}
                        >
                            <div className="flex items-center gap-2 mb-4 justify-start">
                                <span className="w-2 h-2 rounded-full bg-[#1B5E53]/50 animate-pulse"></span>
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Szeretne kapcsolatba lépni velünk?</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-rem font-extrabold text-primarydark leading-tight">
                                <span className="relative inline-block">
                                    <span className="relative z-10 font-bold">Kapcsolat</span>
                                    <span className="absolute bottom-[0.06125rem] -md:bottom-1 left-0 w-full h-2 md:h-3 bg-secondary/70 -z-0 rounded-sm"></span>
                                </span>{" "}
                            </h2>
                        </motion.div>
                        <motion.div
                            className='w-full flex flex-col md:flex-row gap-4 justify-between items-center'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ ...transitionSettings, delay: 0.2 }}
                        >
                            {[
                                { label: 'Telefon', val: '+36 30 123 4567' },
                                { label: 'Viber', val: '+36 30 123 4567' },
                                { label: 'WhatsApp', val: '+36 30 123 4567' },
                                { label: 'E-mail', val: 'info@debhair.hu' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ ...transitionSettings, delay: index * 0.3 }}
                                    className='flex flex-col'
                                >
                                    <span className='text-secondary text-2xl md:text-xl font-bold md:text-left text-center'>{item.label}</span>
                                    <span className='text-primary text-3xl md:text-3xl font-extrabold md:text-left text-center'>{item.val}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ConnectionPage
