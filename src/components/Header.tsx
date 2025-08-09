'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';
import FloatingCTAButton from './FloatingCTAButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
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
              <Link href="/spezialleistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Spezialleistungen</Link>
              <Link href="/ueber-uns" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</Link>
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
      {showCTA && <FloatingCTAButton />}
    </>
  );
};

export default Header;