"use client"
import React from "react"
import PrepCard from "./PrepCard";

type Item = { title: string; description: string }

export default function PrepCardClient({ items }: { items: Item[] }) {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <PrepCard
                    key={index}
                    item={item}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    )
}
