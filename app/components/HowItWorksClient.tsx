"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HowItWorksData } from '../lib/types';
import { motion, AnimatePresence } from "motion/react";
import { resolveHowItWorksImageUrl } from '../lib/url';

function HowItWorksClient({ steps }: { steps: HowItWorksData[] }) {
    const [currentStep, setCurrentStep] = React.useState(0);
    return (
        <>
            <div className="flex flex-col gap-4 mb-16 items-center text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primarydark to-primary">
                    Hogy működik a <span className="font-lora italic">Hajbeültetés?</span>
                </h2>
                <p className="text-black/60 max-w-2xl text-sm md:text-base font-rem font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-auto">
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={steps[currentStep].image.url ?? ''}
                                    alt={`Hajbeültetés ${currentStep + 1}. lépés - ${steps[currentStep].title}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Overlay Gradient/Tint if needed */}
                        <div className="absolute inset-0 bg-linear-to-t from-primarydark/80 via-transparent to-transparent pointer-events-none" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-8 left-8 z-20">
                            <h3 className="text-white text-2xl font-bold tracking-widest uppercase font-sans">
                                Hajbeültetés
                            </h3>
                        </div>

                        {/* Cutout Corner Effect */}
                        <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-white rounded-tl-4xl z-10 flex items-center justify-center">
                            <div className="transform translate-x-2 translate-y-2">
                                <ArrowUpRight className="w-8 h-8 text-primarydark/60" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-7/12 flex flex-col justify-between py-4">
                    <div className="flex flex-col gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-6 group relative cursor-pointer"
                                onClick={() => setCurrentStep(index)}
                            >
                                {index !== steps.length - 1 && (
                                    <div className={`absolute left-[26px] top-14 bottom-0 w-[2px] -mb-8 z-0 transition-colors duration-300 ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />
                                )}

                                <div className={`
                                                z-10 w-[52px] h-[52px] min-w-[52px] rounded-xl flex items-center justify-center text-2xl font-bold font-sans shadow-sm transition-colors duration-300
                                                ${currentStep === index
                                        ? 'bg-primarydark text-white '
                                        : 'bg-gray-100 text-primarydark border border-gray-100 shadow-sm'}
                                            `}>
                                    {index + 1}.
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2 pt-2">
                                    <h4 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primarydark to-primary">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed font-rem font-medium">
                                        {step.description}
                                    </p>
                                    <Link
                                        href={'https://api.netbazis.com'}
                                        className={`
                                                        inline-flex items-center gap-1 text-sm font-bold mt-1 uppercase tracking-wider font-rem
                                                        ${currentStep === index ? 'text-primary underline decoration-2 underline-offset-4 hover:text-primary/80' : 'text-primarydark hover:text-primarydark'}
                                                    `}
                                    >
                                        Olvassa tovább
                                        <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorksClient