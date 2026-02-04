'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Prevent scroll when menu is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 h-[74px] flex justify-between items-center px-6 md:px-12 bg-white shadow-sm z-50'>
                <Link href="/" className="flex items-center h-full relative z-50">
                    <Image
                        src="/debhair.svg"
                        alt="Debhair - Hajbeültetési Klinika Debrecen"
                        width={178}
                        height={74}
                        className="object-contain"
                        priority
                    />
                </Link>

                <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm tracking-wide">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                        >
                            Főoldal
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/eredmenyek"
                            className="hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                        >
                            Eredmények
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/hogy-mukodik"
                            className="hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                        >
                            Hogy működik?
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/galeria"
                            className="hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                        >
                            Galéria
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:block">
                    <Link
                        href="/kapcsolat"
                        className="bg-primary hover:bg-primarydark text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider transition-colors shadow-md uppercase focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Kapcsolat
                    </Link>
                </div>

                <button
                    ref={buttonRef}
                    className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none focus:text-primary transition-colors relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>
            <div className="h-[74px]" />
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`fixed top-[74px] left-0 right-0 bg-white shadow-lg border-b border-gray-200 md:hidden transition-all duration-300 ease-in-out z-40 ${isOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-4 invisible'
                    }`}
                role="navigation"
                aria-label="Debhair mobile menu"
                aria-hidden={!isOpen}
            >
                <div className="flex flex-col items-center gap-6 py-8 px-6">
                    <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium text-lg tracking-wide w-full">
                        <li className="w-full text-center">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="block py-2 hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                            >
                                Főoldal
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link
                                href="/eredmenyek"
                                onClick={() => setIsOpen(false)}
                                className="block py-2 hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                            >
                                Eredmények
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link
                                href="/hogy-mukodik"
                                onClick={() => setIsOpen(false)}
                                className="block py-2 hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                            >
                                Hogy működik?
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link
                                href="/galeria"
                                onClick={() => setIsOpen(false)}
                                className="block py-2 hover:text-primary transition-colors focus:outline-none focus:text-primary focus:underline"
                            >
                                Galéria
                            </Link>
                        </li>
                    </ul>
                    <Link
                        href="/kapcsolat"
                        onClick={() => setIsOpen(false)}
                        className="bg-primary hover:bg-primarydark text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider transition-colors shadow-md uppercase focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Kapcsolat
                    </Link>
                </div>
            </div>

            {/* Backdrop overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

export default Navbar