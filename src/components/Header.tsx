'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';
import FloatingCTAButton from './FloatingCTAButton';

const Header: React.FC = () => {
  // Initialize with false to ensure server and client match
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20); // Header background change
      setShowCTA(scrollPosition > window.innerHeight * 0.1); // CTA visibility
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md h-20' : 'bg-transparent h-24'}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Images/Fensterservice ROWO Fensterreparatur Tulln, Wien und Niederösterreich.png"
                alt="Fensterservice ROWO Logo"
                width={150}
                height={50}
                className="h-auto w-auto max-h-12"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/leistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</Link>
                            <div className="relative" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) { setIsServiceMenuOpen(false); } }}>
                              <button
                                onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                              >
                                Serviceregionen <ChevronDown className="h-4 w-4 ml-1" />
                              </button>
                              <div
                                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-opacity duration-300 ${
                                  isServiceMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}
                              >
                                <Link href="/wien" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServiceMenuOpen(false)}>Wien</Link>
                                <Link href="/tulln" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServiceMenuOpen(false)}>Tulln</Link>
                                <Link href="/st-poelten" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServiceMenuOpen(false)}>St. Pölten</Link>
                                <Link href="/krems" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServiceMenuOpen(false)}>Krems</Link>
                                <Link href="/baden-bei-wien" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServiceMenuOpen(false)}>Baden bei Wien</Link>
                                <Link href="/klosterneuburg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsServiceMenuOpen(false)}>Klosterneuburg</Link>
                              </div>
                            </div>
                            <Link href="/velux-reparatur" className="text-gray-600 hover:text-gray-900 transition-colors">Velux Reparatur</Link>
                            <Link href="/ueber-uns" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
              <Link href="/kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</Link>
              <Link href="/notdienst" className="text-red-600 font-semibold hover:text-red-800 transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  24h Notdienst
              </Link>
              <a
                href="#"
                className="bg-green-500 text-white text-sm font-semibold px-4 py-2 md:px-6 rounded-md hover:bg-green-600 transition-colors flex items-center gap-1"
                aria-label="Geprüfter Fachbetrieb"
              >
                 ✅ Geprüfter Fachbetrieb
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>
      {isMounted && showCTA && <FloatingCTAButton />}
    </>
  );
};

export default Header;