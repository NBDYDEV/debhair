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
            className="relative w-full aspect-4/3 md:aspect-video overflow-hidden rounded-2xl select-none cursor-ew-resize group border-4 border-white"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={after}
                    alt="Hajbeültetés utána - természetes eredmény FUE módszerrel"
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={before}
                    alt="Hajbeültetés előtt - hajhullás kezelés előtti állapot"
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            <div
                className="absolute top-0 bottom-0 w-1 bg-secondary/50 z-20 pointer-events-none"
                style={{ left: `${position}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <MoveHorizontal size={20} className="text-secondary text-3xl" />
                </div>
            </div>
        </div>
    );
}
