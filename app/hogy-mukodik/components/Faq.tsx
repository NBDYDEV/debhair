'use client'

import { HandHelping, Users, Search, CreditCard, ThumbsUp, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface FaqItem {
    icon: React.ReactNode
    question: string
    answer: string
}

const faqData = {
    'Általános kérdések': [
        {
            icon: <Users className="w-6 h-6" />,
            question: 'Kínél alkalmazható a hajátültetés, hajbeültetés?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis blandit ornare. Aliquam id convallis metus. Mauris vel aliquet lorem, vel aliquet non odio. Proin tortor lorem, semper eu velit eu, lacinia dictum ligula. Morbi nec magna, nec dui aliquet lorem. Phasellus imperdiet. Nullam erat, ac ullamcorper sapien bibendum eu. Donec molestie.'
        },
        {
            icon: <Users className="w-6 h-6" />,
            question: 'Hogyan zajlik egy személyes konzultáció?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <Search className="w-6 h-6" />,
            question: 'Hogyan lehet megállapítani, hogy valaki alkalmas-e a hajbeültetésre?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            question: 'Mennyibe kerül, és milyen költségei vannak a hajbeültetésnek?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <ThumbsUp className="w-6 h-6" />,
            question: 'Miért érdemes a hajbeültetést választani?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ],
    'Beavatkozás': [
        {
            icon: <Users className="w-6 h-6" />,
            question: 'Hogyan zajlik egy személyes konzultáció?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <Search className="w-6 h-6" />,
            question: 'Hogyan lehet megállapítani, hogy valaki alkalmas-e a hajbeültetésre?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            question: 'Mennyibe kerül, és milyen költségei vannak a hajbeültetésnek?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <ThumbsUp className="w-6 h-6" />,
            question: 'Miért érdemes a hajbeültetést választani?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <Users className="w-6 h-6" />,
            question: 'Hogyan zajlik egy személyes konzultáció?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <Search className="w-6 h-6" />,
            question: 'Hogyan lehet megállapítani, hogy valaki alkalmas-e a hajbeültetésre?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ],
    'Előkészületek': [
        {
            icon: <Users className="w-6 h-6" />,
            question: 'Hogyan zajlik egy személyes konzultáció?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <Search className="w-6 h-6" />,
            question: 'Hogyan lehet megállapítani, hogy valaki alkalmas-e a hajbeültetésre?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            question: 'Mennyibe kerül, és milyen költségei vannak a hajbeültetésnek?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]
}

function FaqAccordionItem({ item, isOpen, onToggle, index }: { item: FaqItem; isOpen: boolean; onToggle: () => void; index: number }) {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onToggle}
                className="w-full flex items-start gap-4 py-5 text-left hover:bg-white/5 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                aria-label={item.question}
            >
                <div className="shrink-0 text-white mt-1">
                    {item.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-base leading-relaxed pr-8">
                        {item.question}
                    </h3>
                    {isOpen && (
                        <p className="text-white/70 text-sm leading-relaxed mt-3" id={`faq-answer-${index}`}>
                            {item.answer}
                        </p>
                    )}
                </div>
                <ChevronDown
                    className={`shrink-0 w-5 h-5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
        </div>
    )
}

function Faq() {
    const [activeTab, setActiveTab] = useState<keyof typeof faqData>('Általános kérdések')
    const [openItems, setOpenItems] = useState<number[]>([0])

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    const currentFaqs = faqData[activeTab]
    const leftColumn = currentFaqs.filter((_, i) => i % 2 === 0)
    const rightColumn = currentFaqs.filter((_, i) => i % 2 === 1)

    return (
        <section className="py-16 md:py-24 bg-primarydark">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="w-2 h-2 rounded-full bg-white/50" />
                        <span className="text-white/80">Gyakran ismételt kérdések</span>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
                        <h2 className="text-white text-4xl md:text-5xl font-sans font-extrabold">
                            Kérdése van?{' '}
                            <span className="relative font-serif font-bold">
                                Megválaszoljuk!
                                <span className="absolute left-0 bottom-[4px] w-full h-4 bg-linear-to-t from-secondary to-transparent"></span>
                            </span>
                        </h2>

                        <Link
                            href="/kapcsolat"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg transition-all hover:scale-105 hover:shadow-xl shrink-0"
                        >
                            <HandHelping className="h-5 w-5 text-black" />
                            <span>KÉRDEZZEN TŐLÜNK!</span>
                        </Link>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3">
                        {(Object.keys(faqData) as Array<keyof typeof faqData>).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab)
                                    setOpenItems([0])
                                }}
                                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === tab
                                    ? 'bg-[#d4a574] text-black shadow-lg'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Two Column FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div>
                        {leftColumn.map((item, index) => (
                            <FaqAccordionItem
                                key={index * 2}
                                item={item}
                                isOpen={openItems.includes(index * 2)}
                                onToggle={() => toggleItem(index * 2)}
                                index={index * 2}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div>
                        {rightColumn.map((item, index) => (
                            <FaqAccordionItem
                                key={index * 2 + 1}
                                item={item}
                                isOpen={openItems.includes(index * 2 + 1)}
                                onToggle={() => toggleItem(index * 2 + 1)}
                                index={index * 2 + 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq