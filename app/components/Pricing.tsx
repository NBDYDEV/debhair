'use client'

import React, { useState } from 'react'
import { Check, X, HelpCircle, ShoppingCart, Gem, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const plans = [
    { id: 'basic', name: 'Basic', hairCount: '2000-3000 hajszál beültetése', onedayprice: 399000, twodayprice: 899000, isElite: false },
    { id: 'popular', name: 'Populár', hairCount: '3000-4000 hajszál beültetése', onedayprice: 599000, twodayprice: 1099000, isElite: false },
    { id: 'elite', name: 'Elite', hairCount: '4000-5000 hajszál beültetése', onedayprice: 699000, twodayprice: 1199000, isElite: true },
] as const

const features = [
    { name: 'Örök-élet garancia', basic: true, popular: true, elite: true },
    { name: 'Konzultáció hajgyógyásszal', basic: true, popular: true, elite: true },
    { name: '365 napos utókezelés', basic: true, popular: true, elite: true },
    { name: 'Maximális sűrűség', basic: false, popular: true, elite: true, tooltip: 'Maximális hajbeültetési sűrűség. MikroFUE módszerrel (Európa egyik legjobb módszere)' },
    { name: 'Utókezelő csomag', basic: false, popular: false, elite: true },
    { name: 'Szállás', basic: false, popular: false, elite: true },
]

const formatPrice = (p: number) => p.toLocaleString('hu-HU').replace(/\s/g, '.')

export default function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState<'1nap' | '2nap'>('1nap')
    const [openMobileCard, setOpenMobileCard] = useState<string>('elite')

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100/50">
            {/* GLOBAL CONTAINER */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ===================== DESKTOP NÉZET (lg+) ===================== */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-4 gap-6 xl:gap-8">
                        {/* SIDEBAR - Feature nevek + címek */}
                        <div className="flex flex-col">
                            <div className="h-[220px] xl:h-[240px] flex flex-col justify-start pr-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-primarydark/50"></span>
                                    <span className="text-primarydark/60 font-bold text-sm uppercase tracking-wider">Áraink</span>
                                </div>

                                <h2 className="text-4xl xl:text-5xl font-extrabold text-primarydark leading-tight mb-6">
                                    Választható<br />csomagok
                                </h2>

                                {/* Toggle */}
                                <div className="bg-white border border-gray-200 rounded-full p-1.5 inline-flex self-start shadow-sm">
                                    <button
                                        onClick={() => setBillingPeriod('1nap')}
                                        className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${billingPeriod === '1nap'
                                            ? 'bg-primarydark text-white shadow-md'
                                            : 'text-gray-500 hover:text-primarydark'
                                            }`}
                                    >
                                        1 napos csomagok
                                    </button>
                                    <button
                                        onClick={() => setBillingPeriod('2nap')}
                                        className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${billingPeriod === '2nap'
                                            ? 'bg-primarydark text-white shadow-md'
                                            : 'text-gray-500 hover:text-primarydark'
                                            }`}
                                    >
                                        2 napos csomagok
                                    </button>
                                </div>
                            </div>

                            {/* Feature nevek */}
                            <div>
                                {features.map((f, i) => (
                                    <div key={i} className="h-[64px] xl:h-[72px] flex items-center border-b border-gray-200 last:border-0">
                                        <div className="w-2 h-2 rounded-full bg-black mr-4 flex-shrink-0"></div>
                                        <span className="text-black font-semibold text-base xl:text-lg leading-tight">{f.name}</span>
                                        {f.tooltip && (
                                            <div className="group relative ml-2">
                                                <HelpCircle className="w-4 h-4 text-secondary cursor-help" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-primarydark text-white text-sm rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64 z-50 leading-relaxed">
                                                    {f.tooltip}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-primarydark"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Egyedi ajánlat CTA */}
                            <div className="mt-10 p-5 xl:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2.5 rounded-full flex-shrink-0">
                                        <HelpCircle className="text-primary w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 leading-relaxed mb-1">
                                            Nem találja a megfelelőt?
                                        </p>
                                        <Link href="/kapcsolat" className="text-primary font-bold text-base hover:underline">
                                            Kérjen egyedi ajánlatot!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PLAN CARDS */}
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`flex flex-col rounded-[32px] xl:rounded-[40px] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${plan.isElite ? 'bg-primarydark text-white' : 'bg-white'}`}
                            >
                                {/* Header */}
                                <div className={`h-[220px] xl:h-[240px] p-6 xl:p-8 text-center flex flex-col justify-center items-center border-b ${plan.isElite ? 'border-white/10' : 'border-gray-100'}`}>
                                    <h3 className="text-2xl xl:text-3xl font-bold font-rem mb-1 flex justify-center items-center">
                                        {plan.isElite && <Gem className="w-10 h-10 text-secondary mr-2" />}
                                        {plan.name}
                                    </h3>
                                    <p className={`text-xs xl:text-sm mb-4 font-medium uppercase tracking-wider ${plan.isElite ? 'text-white/60' : 'text-gray-400'}`}>
                                        {plan.hairCount}
                                    </p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl xl:text-5xl font-extrabold ${plan.isElite ? 'text-white' : 'text-primarydark'}`}>
                                            {formatPrice(billingPeriod === '1nap' ? plan.onedayprice : plan.twodayprice)}
                                        </span>
                                        <span className={`text-lg xl:text-xl font-bold ${plan.isElite ? 'text-white' : 'text-primarydark'}`}>Ft</span>
                                    </div>
                                    {plan.isElite && <div className='w-[110%] mt-6 border-t-2 border-dashed border-secondary'></div>}
                                </div>

                                {/* Features */}
                                <div className="px-6 xl:px-8 flex-grow">
                                    {features.map((f, i) => (
                                        <div
                                            key={i}
                                            className={`h-[64px] xl:h-[72px] flex items-center justify-center border-b last:border-0 ${plan.isElite ? 'border-white/10' : 'border-gray-300'}`}
                                        >
                                            {f[plan.id] ? (
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                                    <Check className={`w-5 h-5 xl:w-6 xl:h-6 ${plan.isElite ? 'text-secondary' : 'text-primary'}`} strokeWidth={3} />
                                                </div>
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gray-100/30 flex items-center justify-center">
                                                    <X className="w-5 h-5 text-secondary" strokeWidth={2.5} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="p-6 xl:p-8">
                                    <Link
                                        href="/kapcsolat"
                                        className={`w-full py-4 xl:py-5 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-3 ${plan.isElite
                                            ? 'bg-white text-primarydark hover:bg-secondary hover:scale-[1.02] shadow-lg'
                                            : 'bg-primarydark text-white hover:bg-primary hover:shadow-xl'
                                            }`}
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        <span>Ezt választom</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===================== MOBILE + TABLET NÉZET (<lg) ===================== */}
                <div className="lg:hidden">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-primarydark/50"></span>
                            <span className="text-primarydark/60 font-bold text-sm uppercase tracking-wider">Áraink</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primarydark leading-tight mb-6 max-w-[36ch] mx-auto">
                            Választható csomagok
                        </h2>
                        
                        {/* Toggle */}
                        <div className="bg-white border border-gray-200 rounded-full p-1 sm:p-1.5 inline-flex shadow-sm">
                            <button
                                onClick={() => setBillingPeriod('1nap')}
                                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${billingPeriod === '1nap' ? 'bg-primarydark text-white shadow-md' : 'text-gray-500'}`}
                            >
                                1 napos
                            </button>
                            <button
                                onClick={() => setBillingPeriod('2nap')}
                                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${billingPeriod === '2nap' ? 'bg-primarydark text-white shadow-md' : 'text-gray-500'}`}
                            >
                                2 napos
                            </button>
                        </div>
                    </div>

                    {/* Plan Cards - Accordion Style */}
                    <div className="space-y-4 max-w-2xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`rounded-2xl overflow-hidden shadow-lg transition-all ${plan.isElite ? 'bg-primarydark' : 'bg-white'}`}
                            >
                                {/* Card Header - Clickable */}
                                <button
                                    onClick={() => setOpenMobileCard(openMobileCard === plan.id ? '' : plan.id)}
                                    className="w-full p-5 sm:p-6 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        {plan.isElite && (
                                            <Gem className="w-8 h-8 sm:w-10 sm:h-10 text-secondary flex-shrink-0" />
                                        )}
                                        <div className="text-left">
                                            <h3 className={`text-lg sm:text-xl font-bold font-rem ${plan.isElite ? 'text-white' : 'text-primarydark'}`}>
                                                {plan.name}
                                            </h3>
                                            <p className={`text-xs ${plan.isElite ? 'text-white/50' : 'text-gray-400'}`}>
                                                {plan.hairCount}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="text-right">
                                            <div className="flex items-baseline gap-0.5">
                                                <span className={`text-xl sm:text-2xl font-extrabold ${plan.isElite ? 'text-white' : 'text-primarydark'}`}>
                                                    {formatPrice(billingPeriod === '1nap' ? plan.onedayprice : plan.twodayprice)}
                                                </span>
                                                <span className={`text-sm font-bold ${plan.isElite ? 'text-white' : 'text-primarydark'}`}>Ft</span>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openMobileCard === plan.id ? 'rotate-180' : ''} ${plan.isElite ? 'text-white/50' : 'text-gray-400'}`} />
                                    </div>
                                </button>

                                {/* Expandable Content */}
                                <div className={`overflow-hidden transition-all duration-300 ${openMobileCard === plan.id ? 'max-h-[800px]' : 'max-h-0'}`}>
                                    <div className={`px-5 sm:px-6 pb-5 sm:pb-6 ${plan.isElite ? 'border-t-2 border-dashed border-secondary' : 'border-t border-gray-100'}`}>
                                        {/* Features */}
                                        <div className="py-3">
                                            {features.map((f, i) => (
                                                <div key={i} className={`h-[48px] sm:h-[52px] flex items-center justify-between border-b last:border-0 ${plan.isElite ? 'border-white/10' : 'border-gray-200'}`}>
                                                    <div className="flex items-center gap-1.5">
                                                        <span className={`text-sm ${plan.isElite ? 'text-white/70' : 'text-gray-600'}`}>
                                                            {f.name}
                                                        </span>
                                                        {f.tooltip && (
                                                            <div className="group relative">
                                                                <HelpCircle className={`w-3.5 h-3.5 cursor-help ${plan.isElite ? 'text-secondary' : 'text-secondary'}`} />
                                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-primarydark text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 z-50 leading-relaxed">
                                                                    {f.tooltip}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {f[plan.id] ? (
                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <Check className={`w-5 h-5 ${plan.isElite ? 'text-secondary' : 'text-primary'}`} strokeWidth={3} />
                                                        </div>
                                                    ) : (
                                                        <div className="w-8 h-8 rounded-full bg-gray-100/30 flex items-center justify-center flex-shrink-0">
                                                            <X className="w-4 h-4 text-secondary" strokeWidth={2.5} />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <Link
                                            href="/kapcsolat"
                                            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all mt-3 ${plan.isElite
                                                ? 'bg-white text-primarydark hover:bg-secondary hover:scale-[1.02] shadow-lg'
                                                : 'bg-primarydark text-white hover:bg-primary hover:shadow-lg'
                                                }`}
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            <span>Ezt választom</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Custom Quote CTA */}
                    <div className="mt-8 p-5 sm:p-6 bg-white rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm max-w-2xl mx-auto">
                        <div className="bg-primary/10 p-2.5 rounded-full flex-shrink-0">
                            <HelpCircle className="text-primary w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold text-primarydark">Nem találja a megfelelőt?</span>
                            </p>
                            <Link href="/kapcsolat" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                                Kérjen egyedi ajánlatot →
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}