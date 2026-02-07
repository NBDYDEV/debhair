'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-screen bg-linear-to-b from-background to-primary/5 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100">
                    <AlertTriangle className="w-12 h-12 text-red-600" aria-hidden="true" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primarydark mb-4">
                    Hoppá, valami hiba történt
                </h1>
                <p className="text-lg text-gray-600 mb-2 max-w-md mx-auto">
                    Elnézést kérünk a kellemetlenségért. Váratlan hiba lépett fel az oldal betöltése során.
                </p>
                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-xl mx-auto overflow-auto">
                        <p className="text-sm font-mono text-red-800 break-all">
                            {error.message}
                        </p>
                        {error.digest && (
                            <p className="text-xs text-red-600 mt-2">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <button
                        onClick={reset}
                        className="group inline-flex items-center gap-3 bg-primary hover:bg-primarydark text-white px-8 py-4 rounded-full font-bold text-base tracking-wide uppercase shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 active:scale-95"
                    >
                        <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
                        <span>Újrapróbálás</span>
                    </button>

                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primarydark border-2 border-gray-200 hover:border-primary px-8 py-4 rounded-full font-bold text-base tracking-wide uppercase shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                        <span>Főoldal</span>
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">
                        Ha a probléma továbbra is fennáll, kérjük, vegye fel velünk a kapcsolatot:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                        <a
                            href="tel:+36706480008"
                            className="text-primary hover:text-primarydark font-semibold transition-colors"
                        >
                            📞 +36 70 648-0008
                        </a>
                        <span className="hidden sm:inline text-gray-300">•</span>
                        <a
                            href="mailto:info@debhair.hu"
                            className="text-primary hover:text-primarydark font-semibold transition-colors"
                        >
                            ✉️ info@debhair.hu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}