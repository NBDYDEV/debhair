'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';
import Image from 'next/image';

type Props = {
    before: string;
    after: string;
};

export default function BeforeAfter({ before, after }: Props) {
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const newPos = Math.min(100, Math.max(0, (x / rect.width) * 100));
        setPosition(newPos);
    }, []);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        setIsResizing(true);
        updatePosition(e.clientX);
    }, [updatePosition]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setIsResizing(true);
        updatePosition(e.touches[0].clientX);
    }, [updatePosition]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            updatePosition(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isResizing) return;
            updatePosition(e.touches[0].clientX);
        };

        const handleMouseUp = () => setIsResizing(false);

        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isResizing, updatePosition]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/5] overflow-hidden rounded-xl lg:rounded-2xl select-none cursor-ew-resize group border-[3px] lg:border-4 border-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div className="absolute inset-0 w-full h-full bg-gray-200">
                <Image
                    src={after}
                    alt="Hajbeültetés utána - természetes eredmény FUE módszerrel"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                    draggable={false}
                    priority
                />
            </div>

            <div
                className="absolute inset-0 w-full h-full bg-gray-300"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={before}
                    alt="Hajbeültetés előtt - hajhullás kezelés előtti állapot"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                    draggable={false}
                    priority
                />
            </div>

            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
                style={{ left: `${position}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 bg-white rounded-full shadow-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <MoveHorizontal className="w-6 h-6 lg:w-7 lg:h-7 text-primarydark" />
                </div>
            </div>
        </div>
    );
}