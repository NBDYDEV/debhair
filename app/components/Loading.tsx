import { Loader2 } from 'lucide-react'

export default function Loading() {
    return (
        <div className="min-h-screen bg-linear-to-b from-background to-primary/5 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Logo vagy ikon */}
                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary/10 animate-ping absolute"></div>
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center relative">
                        <Loader2 className="w-10 h-10 text-primary animate-spin" aria-hidden="true" />
                    </div>
                </div>

                {/* Loading szöveg */}
                <div className="text-center">
                    <h2 className="text-xl font-bold text-primarydark mb-2">
                        Betöltés folyamatban...
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Kérjük, várjon néhány másodpercet
                    </p>
                </div>

                {/* Loading bar */}
                <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full animate-loading-bar"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes loading-bar {
                    0% {
                        width: 0%;
                        margin-left: 0%;
                    }
                    50% {
                        width: 50%;
                        margin-left: 25%;
                    }
                    100% {
                        width: 0%;
                        margin-left: 100%;
                    }
                }
                .animate-loading-bar {
                    animation: loading-bar 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}