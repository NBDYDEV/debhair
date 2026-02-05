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
            <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    <div className="w-full md:w-1/3 flex flex-col gap-6">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex flex-col gap-4 mt-2">
                            <a 
                                href="https://maps.google.com/?q=4002+Debrecen+Tűztövis+utca+2" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="bg-white/10 p-2 rounded-full">
                                    <MapPin className="w-5 h-5 text-white/50" />
                                </div>
                                <span className="text-sm text-white/50 font-rem">4002, Debrecen, Tűztövis utca 2.</span>
                            </a>
                            <a 
                                href="tel:+36706480008"
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="bg-white/10 p-2 rounded-full">
                                    <Phone className="w-5 h-5 text-white/50" />
                                </div>
                                <span className="text-sm text-white/50 font-rem">+36 (70) 648-0008</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-between md:justify-end gap-12 md:gap-24">
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-secondary py-4 px-6 md:px-12 relative z-10">
                <div className="container mx-auto flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center text-primarydark font-bold text-sm font-rem">
                    <p>© {new Date().getFullYear()} Debhair. Minden jog fenntartva.</p>
                    <div className="flex gap-6">
                        {footerData && footerData[0]?.gdpr && (
                            <Link 
                                href={resolveDocumentUrl(footerData[0].gdpr.url) || '#'} 
                                className="hover:text-white transition-colors"
                            >
                                GDPR
                            </Link>
                        )}
                        {footerData && footerData[0]?.ToS && (
                            <Link 
                                href={resolveDocumentUrl(footerData[0].ToS.url) || '#'} 
                                className="hover:text-white transition-colors"
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