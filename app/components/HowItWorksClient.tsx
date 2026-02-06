"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HowItWorksData } from '../lib/types';
import { motion, AnimatePresence } from "motion/react";

function HowItWorksClient({ steps }: { steps: HowItWorksData[] }) {
    const [currentStep, setCurrentStep] = React.useState(0);
    
    return (
        <>
            {/* HEADER */}
            <div className="flex flex-col gap-4 mb-12 lg:mb-16 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primarydark to-primary leading-tight">
                    Hogy működik a <span className="font-lora italic">Hajbeültetés?</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base font-rem">
                    Ismerje meg hajbeültetési folyamatunk főbb lépéseit, amelyekkel természetes és tartós eredményt biztosítunk.
                </p>
            </div>

            {/* CONTENT LAYOUT */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
                {/* IMAGE SECTION */}
                <div className="w-full lg:w-5/12 relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px]">
                    <div className="relative w-full h-full rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl">
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
                                    src={steps[currentStep]?.image.url ?? '/placeholder.jpg'}
                                    alt={`Hajbeültetés ${currentStep + 1}. lépés - ${steps[currentStep]?.title}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primarydark/80 via-transparent to-transparent pointer-events-none" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-8 left-8 z-20">
                            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-widest uppercase">
                                Hajbeültetés
                            </h3>
                        </div>

                        {/* Corner Decoration */}
                        <div className="absolute -bottom-1 -right-1 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-tl-[3rem] z-10 flex items-center justify-center">
                            <div className="transform translate-x-2 translate-y-2">
                                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-primarydark/60" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* STEPS SECTION */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center py-2 lg:py-4">
                    <div className="flex flex-col gap-6 lg:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-4 sm:gap-6 group relative cursor-pointer"
                                onClick={() => setCurrentStep(index)}
                            >
                                {/* Connecting Line */}
                                {index !== steps.length - 1 && (
                                    <div className={`absolute left-[26px] top-14 bottom-0 w-[2px] -mb-6 lg:-mb-8 z-0 transition-colors duration-300 ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />
                                )}

                                {/* Step Number */}
                                <div className={`
                                    z-10 w-[52px] h-[52px] min-w-[52px] rounded-xl 
                                    flex items-center justify-center 
                                    text-2xl font-bold shadow-sm 
                                    transition-all duration-300
                                    ${currentStep === index
                                        ? 'bg-primarydark text-white scale-105'
                                        : 'bg-gray-100 text-primarydark border border-gray-200'}
                                `}>
                                    {index + 1}.
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2 pt-2 flex-1">
                                    <h4 className="text-lg sm:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primarydark to-primary leading-tight">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed font-rem max-w-prose">
                                        {step.description}
                                    </p>
                                    <Link
                                        href={step.href || '/hogy-mukodik'}
                                        className={`
                                            inline-flex items-center gap-1 
                                            text-sm font-bold mt-1 
                                            uppercase tracking-wider font-rem
                                            transition-colors
                                            ${currentStep === index 
                                                ? 'text-primary underline decoration-2 underline-offset-4 hover:text-primary/80' 
                                                : 'text-primarydark hover:text-primary'}
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