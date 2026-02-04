"use client"
import { Crosshair } from "lucide-react"

type AfterCardProps = {
    item: {
        title: string
        description: string
    }
    isActive: boolean
    onClick: () => void
}

function PrepCard({ item, isActive, onClick }: AfterCardProps) {
    return (
        <div
            onMouseEnter={onClick}
            className={`
                cursor-pointer rounded-3xl p-8 min-h-[320px] md:min-h-[360px]
                flex flex-col gap-4 shadow-lg
                ${isActive
                    ? "bg-gradient-to-t from-primarydark to-primary border-0"
                    : "bg-white border-2 border-primary"
                }
            `}
        >
            <div className="flex items-center gap-4">
                <div
                    className={`
                        w-12 h-12 rounded-full flex items-center justify-center shadow
                        ${isActive ? "bg-white" : "bg-primary"}
                    `}
                >
                    <Crosshair
                        className={`w-6 h-6 ${isActive ? "text-primary" : "text-white"}`}
                    />
                </div>

                <h3 className={`text-3xl font-rem font-extrabold ${isActive ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-r from-primarydark to-primary"}`}>
                    {item.title}
                </h3>
            </div>

            <p className={`${isActive ? "text-white/70" : "text-black/50"} leading-relaxed`}>
                {item.description}
            </p>
        </div>
    )
}

export default PrepCard
