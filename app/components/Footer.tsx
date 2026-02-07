import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { getFooterData } from '../lib/api';
import { resolveDocumentUrl } from '../lib/url';

async function Footer() {
    const footerData = await getFooterData();

    return (
        <footer className="bg-primarydark text-white relative overflow-hidden">
            <Image
                src="/logo.svg"
                alt="Hero background"
                fill
                priority
                className="object-cover opacity-10"
            />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-start">
                            <Image
                                src={'/debhair.svg'}
                                alt="Debhair logó - hajbeültetési klinika Debrecen"
                                width={200}
                                height={50}
                                className="object-contain"
                            />
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-rem">
                            Prémium hajbeültetési szolgáltatások Debrecenben. Természetes eredmények, szakértő csapat, örök-élet garancia.
                        </p>

                        <div className="flex flex-col gap-4 mt-2">
                            <a
                                href="https://maps.google.com/?q=4002+Debrecen+Tűztövis+utca+2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-fit"
                            >
                                <div className="bg-white/10 p-2 rounded-full flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-white/70" />
                                </div>
                                <span className="text-sm text-white/70 font-rem">4002, Debrecen, Tűztövis utca 2.</span>
                            </a>
                            <a
                                href="tel:+36706480008"
                                className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-fit"
                            >
                                <div className="bg-white/10 p-2 rounded-full flex-shrink-0">
                                    <Phone className="w-5 h-5 text-white/70" />
                                </div>
                                <span className="text-sm text-white/70 font-rem">+36 (70) 648-0008</span>
                            </a>
                        </div>
                        <div className="mt-4 md:hidden">
                            <Link
                                href="/kapcsolat"
                                className="
                                    w-full
                                    inline-flex items-center justify-center
                                    bg-secondary text-primarydark
                                    px-8 h-14
                                    rounded-full
                                    font-bold text-base uppercase tracking-wide
                                    shadow-lg
                                    transition-all duration-300
                                    hover:scale-105 hover:shadow-xl
                                "
                            >
                                Ingyenes konzultáció
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white text-lg mb-2 font-rem">Navigáció</h3>
                        <ul className="flex flex-col gap-3 text-gray-300 text-sm font-rem">
                            <li><Link href="/" className="hover:text-secondary transition-colors">Főoldal</Link></li>
                            <li><Link href="/hogy-mukodik" className="hover:text-secondary transition-colors">Hogy működik?</Link></li>
                            <li><Link href="/eredmenyek" className="hover:text-secondary transition-colors">Eredmények</Link></li>
                            <li><Link href="/galeria" className="hover:text-secondary transition-colors">Galéria</Link></li>
                            <li><Link href="/kapcsolat" className="hover:text-secondary transition-colors">Kapcsolat</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white text-lg mb-2 font-rem">Dokumentumok</h3>
                        <ul className="flex flex-col gap-3 text-gray-300 text-sm font-rem">
                            {footerData && footerData[0]?.gdpr && (
                                <li>
                                    <Link
                                        href={resolveDocumentUrl(footerData[0].gdpr.url) || '#'}
                                        className="hover:text-secondary transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Adatvédelem (GDPR)
                                    </Link>
                                </li>
                            )}
                            {footerData && footerData[0]?.ToS && (
                                <li>
                                    <Link
                                        href={resolveDocumentUrl(footerData[0].ToS.url) || '#'}
                                        className="hover:text-secondary transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ÁSZF
                                    </Link>
                                </li>
                            )}
                            <li><Link href="/kapcsolat" className="hover:text-secondary transition-colors">Kapcsolat</Link></li>
                        </ul>

                        <div className="mt-6 hidden md:block">
                            <Link
                                href="/kapcsolat"
                                className="
                                    inline-flex items-center justify-center
                                    bg-secondary text-primarydark
                                    px-8 py-4
                                    rounded-full
                                    font-bold text-sm uppercase tracking-wide
                                    shadow-lg
                                    transition-all duration-300
                                    hover:scale-105 hover:shadow-xl
                                "
                            >
                                Ingyenes konzultáció
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-secondary py-4 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center text-primarydark font-bold text-sm font-rem">
                    <p className="text-center sm:text-left">© {new Date().getFullYear()} Debhair. Minden jog fenntartva.</p>
                    <Link
                        href={'https://netbazis.hu'}
                        className="hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Weboldalt készítette: <span className='font-instrument text-base'>Netbázis</span>
                    </Link>
                    <div className="flex gap-6">
                        {footerData && footerData[0]?.gdpr && (
                            <Link
                                href={resolveDocumentUrl(footerData[0].gdpr.url) || '#'}
                                className="hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GDPR
                            </Link>
                        )}
                        {footerData && footerData[0]?.ToS && (
                            <Link
                                href={resolveDocumentUrl(footerData[0].ToS.url) || '#'}
                                className="hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ÁSZF
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;