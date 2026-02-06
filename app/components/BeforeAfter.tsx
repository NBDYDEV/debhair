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
    const [imageError, setImageError] = useState({ before: false, after: false });
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

    // Debug log
    useEffect(() => {
        console.log('BeforeAfter component rendered');
        console.log('Before URL:', before);
        console.log('After URL:', after);
    }, [before, after]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl select-none cursor-ew-resize group border-4 border-white shadow-xl"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* AFTER image (base layer) */}
            <div className="absolute inset-0 w-full h-full bg-gray-200">
                {imageError.after ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <p className="text-gray-500 text-sm">❌ Kép betöltési hiba (after)</p>
                    </div>
                ) : (
                    <Image
                        src={after}
                        alt="Hajbeültetés utána - természetes eredmény FUE módszerrel"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 33vw"
                        className="object-cover"
                        draggable={false}
                        onError={() => {
                            console.error('Failed to load AFTER image:', after);
                            setImageError(prev => ({ ...prev, after: true }));
                        }}
                        priority
                    />
                )}
            </div>

            {/* BEFORE image (clipped layer) */}
            <div
                className="absolute inset-0 w-full h-full bg-gray-300"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                {imageError.before ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <p className="text-gray-600 text-sm">❌ Kép betöltési hiba (before)</p>
                    </div>
                ) : (
                    <Image
                        src={before}
                        alt="Hajbeültetés előtt - hajhullás kezelés előtti állapot"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 33vw"
                        className="object-cover"
                        draggable={false}
                        onError={() => {
                            console.error('Failed to load BEFORE image:', before);
                            setImageError(prev => ({ ...prev, before: true }));
                        }}
                        priority
                    />
                )}
            </div>

            {/* SLIDER */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
                style={{ left: `${position}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
                    <MoveHorizontal className="w-6 h-6 text-primarydark" />
                </div>
            </div>

            {/* LABELS */}
            <div className="absolute top-4 left-4 bg-primarydark/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase z-10">
                Előtte
            </div>
            <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase z-10">
                Utána
            </div>
        </div>
    );
}