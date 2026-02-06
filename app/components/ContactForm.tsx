"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, CircleChevronRight, AlertCircle, Loader2 } from "lucide-react"
import Image from "next/image"

type BackgroundVariant = "light" | "dark" | "gradient"

type ContactFormProps = {
    backgroundVariant?: BackgroundVariant
}

type CountryCode = "HU" | "UK" | "DE"

const backgroundMap: Record<BackgroundVariant, string> = {
    light: "bg-white",
    dark: "bg-gray-900",
    gradient: "bg-gradient-to-t from-primary/10 to-background",
}

const steps = [
    {
        id: 1,
        title: "1. lépés",
        description: "Válassza ki a hajhullásának aktuális állapotát",
        ariaLabel: "Első lépés: Hajhullás állapotának kiválasztása"
    },
    {
        id: 2,
        title: "2. lépés",
        description: "Adjon meg néhány alapvető információt magáról",
        ariaLabel: "Második lépés: Személyes információk megadása"
    },
    {
        id: 3,
        title: "3. lépés",
        description: "Adja meg elérhetőségét a kapcsolatfelvételhez",
        ariaLabel: "Harmadik lépés: Elérhetőség megadása"
    },
]

const hairlossOptions = [
    { value: "Enyhe", label: "Enyhe", icon: "hairloss_1.svg" },
    { value: "Közepes", label: "Közepes", icon: "hairloss_2.svg" },
    { value: "Jelentős", label: "Jelentős", icon: "hairloss_3.svg" },
    { value: "Teljes", label: "Teljes", icon: "hairloss_4.svg" },
]

export default function ContactForm({ backgroundVariant = "light" }: ContactFormProps) {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    // STEP 1
    const [hairloss, setHairloss] = useState("")

    // STEP 2
    const [age, setAge] = useState("")
    const [hairlossSince, setHairlossSince] = useState("")

    // STEP 3
    const [fullName, setFullName] = useState("")
    const [country, setCountry] = useState<CountryCode>("HU")
    const [phone, setPhone] = useState("")
    const [gdprAccepted, setGdprAccepted] = useState(false)

    const phoneConfig = {
        HU: { prefix: "+36", flag: "🇭🇺", placeholder: "30 123 4567", max: 9, pattern: /^[237]0\d{7}$/ },
        UK: { prefix: "+44", flag: "🇬🇧", placeholder: "7700 900000", max: 10, pattern: /^\d{10}$/ },
        DE: { prefix: "+49", flag: "🇩🇪", placeholder: "151 23456789", max: 11, pattern: /^\d{10,11}$/ },
    }

    // Validációs függvények
    const validateStep1 = (): boolean => {
        const newErrors: Record<string, string> = {}
        if (!hairloss) {
            newErrors.hairloss = "Kérjük, válasszon egy hajhullási állapotot!"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validateStep2 = (): boolean => {
        const newErrors: Record<string, string> = {}
        if (!age || parseInt(age) < 18 || parseInt(age) > 100) {
            newErrors.age = "Kérjük, adjon meg egy érvényes életkort (18-100 év között)!"
        }
        if (!hairlossSince || parseInt(hairlossSince) < 0 || parseInt(hairlossSince) > parseInt(age)) {
            newErrors.hairlossSince = "Kérjük, adjon meg egy érvényes értéket!"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validateStep3 = (): boolean => {
        const newErrors: Record<string, string> = {}
        if (!fullName || fullName.trim().length < 3) {
            newErrors.fullName = "Kérjük, adja meg teljes nevét (minimum 3 karakter)!"
        }
        if (!phone || !phoneConfig[country].pattern.test(phone)) {
            newErrors.phone = `Érvénytelen telefonszám formátum a(z) ${country} országkódhoz!`
        }
        if (!gdprAccepted) {
            newErrors.gdpr = "Az adatkezelési tájékoztató elfogadása kötelező!"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const nextStep = async () => {
        let isValid = false

        if (step === 1) {
            isValid = validateStep1()
        } else if (step === 2) {
            isValid = validateStep2()
        } else if (step === 3) {
            isValid = validateStep3()
        }

        if (!isValid) return

        if (step < 3) {
            setStep(step + 1)
            setErrors({})
        } else {
            setIsSubmitting(true)

            try {
                const formData = {
                    hairloss,
                    age: parseInt(age),
                    hairlossSince: parseInt(hairlossSince),
                    fullName,
                    phone: `${phoneConfig[country].prefix}${phone}`,
                    country,
                    timestamp: new Date().toISOString(),
                    gdprAccepted
                }

                await new Promise(resolve => setTimeout(resolve, 2000))

                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'form_submit', {
                        form_name: 'contact_form',
                        form_step: 'completed'
                    })
                }

                if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'Lead')
                }

                setHairloss("")
                setAge("")
                setHairlossSince("")
                setFullName("")
                setCountry("HU")
                setPhone("")
                setGdprAccepted(false)
                setStep(1)
                setErrors({})

            } catch (error) {
                console.error("Form submission error:", error)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
            setErrors({})
        }
    }

    return (
        <section className="w-full py-12 sm:py-16 lg:py-24" aria-labelledby="contact-form-title">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* BALOLDAL - FORM */}
                    <div
                        className={`w-full lg:w-1/2 rounded-3xl shadow-2xl p-5 sm:p-8 lg:p-10 flex flex-col ${backgroundMap[backgroundVariant]}`}
                        style={{ minHeight: '650px' }}
                    >
                        {/* HEADER */}
                        <div className="text-center mb-8">
                            <h2 id="contact-form-title" className="text-3xl md:text-4xl font-extrabold text-primarydark">
                                <span className="text-secondary">Ingyenes</span> árajánlat kérése
                            </h2>
                            <p className="mt-2 text-gray-600 text-base">
                                Mindössze 3 egyszerű lépésben
                            </p>
                        </div>

                        {/* STEP INDICATOR */}
                        <div className="flex justify-center items-center mb-8">
                            {steps.map((s, i) => (
                                <React.Fragment key={s.id}>
                                    <div className="flex flex-col items-center gap-2">
                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 font-bold ${step >= s.id ? "bg-primarydark text-white shadow-lg scale-110" : "border-2 border-gray-300 text-gray-400"
                                                }`}
                                        >
                                            {step > s.id ? <Check className="w-6 h-6" /> : <span>{s.id}</span>}
                                        </div>
                                        <span className={`text-[10px] uppercase font-bold ${step >= s.id ? "text-primarydark" : "text-gray-400"}`}>
                                            {s.title}
                                        </span>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className={`w-16 md:w-24 h-[2px] mx-2 mb-6 rounded transition-all duration-500 ${step > s.id ? "bg-primarydark" : "bg-gray-300"
                                            }`} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* STEP CONTENT */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primarydark text-center mb-6">
                                {steps[step - 1].description}
                            </h3>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* STEP 1 */}
                                    {step === 1 && (
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                                            {hairlossOptions.map((option) => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setHairloss(option.value)
                                                        setErrors({ ...errors, hairloss: "" })
                                                    }}
                                                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 cursor-pointer border-2 transition-all ${hairloss === option.value
                                                        ? "border-primarydark bg-teal-50/70 scale-105 shadow-lg"
                                                        : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                                                        }`}
                                                >
                                                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                                                        <Image
                                                            src={`/${option.icon}`}
                                                            alt={option.label}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <span className="text-xs md:text-sm font-medium">{option.label}</span>
                                                </button>
                                            ))}
                                            {errors.hairloss && (
                                                <div className="col-span-2 sm:col-span-4 flex items-center gap-2 text-red-600 text-sm mt-2">
                                                    <AlertCircle className="w-4 h-4" />
                                                    <span>{errors.hairloss}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* STEP 2 */}
                                    {step === 2 && (
                                        <div className="space-y-5 max-w-sm mx-auto">
                                            <div>
                                                <label htmlFor="age-input" className="text-sm font-bold text-gray-700 block mb-2">
                                                    Életkor <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id="age-input"
                                                        type="number"
                                                        min="18"
                                                        max="100"
                                                        value={age}
                                                        onChange={(e) => {
                                                            setAge(e.target.value)
                                                            setErrors({ ...errors, age: "" })
                                                        }}
                                                        className={`w-full rounded-xl border ${errors.age ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:border-primarydark focus:ring-2 focus:ring-primary/20 outline-none`}
                                                        placeholder="Pl. 35"
                                                    />
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">év</span>
                                                </div>
                                                {errors.age && (
                                                    <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                                                        <AlertCircle className="w-4 h-4" />
                                                        <span>{errors.age}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="hairloss-since" className="text-sm font-bold text-gray-700 block mb-2">
                                                    Mióta tapasztal kopaszodást? <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id="hairloss-since"
                                                        type="number"
                                                        min="0"
                                                        max={age || 100}
                                                        value={hairlossSince}
                                                        onChange={(e) => {
                                                            setHairlossSince(e.target.value)
                                                            setErrors({ ...errors, hairlossSince: "" })
                                                        }}
                                                        className={`w-full rounded-xl border ${errors.hairlossSince ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:border-primarydark focus:ring-2 focus:ring-primary/20 outline-none`}
                                                        placeholder="Pl. 5"
                                                    />
                                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">éve</span>
                                                </div>
                                                {errors.hairlossSince && (
                                                    <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                                                        <AlertCircle className="w-4 h-4" />
                                                        <span>{errors.hairlossSince}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3 */}
                                    {step === 3 && (
                                        <div className="space-y-4 max-w-sm mx-auto">
                                            <div>
                                                <label htmlFor="fullname" className="text-sm font-bold text-gray-700 block mb-2">
                                                    Teljes név <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="fullname"
                                                    type="text"
                                                    value={fullName}
                                                    onChange={(e) => {
                                                        setFullName(e.target.value)
                                                        setErrors({ ...errors, fullName: "" })
                                                    }}
                                                    className={`w-full rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:border-primarydark focus:ring-2 focus:ring-primary/20 outline-none`}
                                                    placeholder="Frizura Ferenc"
                                                />
                                                {errors.fullName && (
                                                    <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                                                        <AlertCircle className="w-4 h-4" />
                                                        <span>{errors.fullName}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="text-sm font-bold text-gray-700 block mb-2">
                                                    Telefonszám <span className="text-red-500">*</span>
                                                </label>
                                                <div className={`flex items-center rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} overflow-hidden focus-within:border-primarydark focus-within:ring-2 focus-within:ring-primary/20`}>
                                                    <select
                                                        value={country}
                                                        onChange={(e) => {
                                                            setCountry(e.target.value as CountryCode)
                                                            setPhone("")
                                                            setErrors({ ...errors, phone: "" })
                                                        }}
                                                        className="bg-gray-50 px-3 py-3 border-r outline-none cursor-pointer"
                                                    >
                                                        {Object.entries(phoneConfig).map(([code, c]) => (
                                                            <option key={code} value={code}>{c.flag} {c.prefix}</option>
                                                        ))}
                                                    </select>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        value={phone}
                                                        onChange={(e) => {
                                                            const cleaned = e.target.value.replace(/\D/g, "")
                                                            if (cleaned.length <= phoneConfig[country].max) {
                                                                setPhone(cleaned)
                                                                setErrors({ ...errors, phone: "" })
                                                            }
                                                        }}
                                                        className="flex-1 px-4 py-3 outline-none"
                                                        placeholder={phoneConfig[country].placeholder}
                                                    />
                                                </div>
                                                {errors.phone && (
                                                    <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                                                        <AlertCircle className="w-4 h-4" />
                                                        <span>{errors.phone}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="pt-3">
                                                <label className="flex items-start gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={gdprAccepted}
                                                        onChange={(e) => {
                                                            setGdprAccepted(e.target.checked)
                                                            setErrors({ ...errors, gdpr: "" })
                                                        }}
                                                        className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primarydark focus:ring-2 focus:ring-primary/20 cursor-pointer flex-shrink-0 accent-primarydark"
                                                    />
                                                    <span className="text-sm text-gray-600 leading-relaxed">
                                                        Elfogadom az{" "}
                                                        <a
                                                            href="https://api.netbazis.com/uploads/Debhair_adatkezeles_de71b9192e.pdf"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary underline font-semibold hover:text-primarydark transition-colors"
                                                        >
                                                            adatkezelési tájékoztatót
                                                        </a>
                                                        <span className="text-red-500 ml-0.5">*</span>
                                                    </span>
                                                </label>
                                                {errors.gdpr && (
                                                    <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                                                        <AlertCircle className="w-4 h-4" />
                                                        <span>{errors.gdpr}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* BUTTONS */}
                        <div className={`mt-8 pt-6 border-t border-gray-200 flex ${step > 1 ? "justify-between" : "justify-center"} items-center gap-4`}>
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    disabled={isSubmitting}
                                    className="text-gray-600 hover:text-primarydark font-bold py-3 px-6 rounded-full transition-colors disabled:opacity-50"
                                >
                                    ← Vissza
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={isSubmitting}
                                className="group bg-primarydark hover:bg-primary text-white rounded-full py-4 px-8 font-bold flex items-center gap-3 transition-all shadow-lg hover:shadow-xl active:scale-95 ml-auto disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>KÜLDÉS...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{step < 3 ? "KÖVETKEZŐ" : "ÁRAJÁNLAT KÉRÉSE"}</span>
                                        <CircleChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            className="w-full rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-card aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[500px]"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <iframe
                                className="w-full h-full block"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Deb Hair klinika térkép"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBDt5f--St5Z0UpDT4iFJ0hrg0QeQc0IB4&q=Deb+Hair+hajbeültetési+klinika+Debrecen"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}