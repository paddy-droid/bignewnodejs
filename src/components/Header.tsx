import React from 'react';
import Link from 'next/link';
import { Phone, ShieldCheck, Clock } from 'lucide-react'; // Import icons
import MobileMenu from './MobileMenu'; // Import the new Client Component

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            {/* Placeholder for Logo - replace with actual logo image */}
            <span className="text-xl font-bold text-brand">Fensterservice</span>
            {/* Example using Image component (replace src and alt) */}
            {/* <Image
              src="/lovable-uploads/b5f2e7bb-445a-4ca8-b677-0095b7b2f820.png"
              alt="Fenster Service Rowo Logo"
              width={48} // Adjust width and height as needed
              height={48}
              className="h-12 w-auto"
              priority
            /> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/leistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</Link>
            {/* Add other navigation links as needed */}
            <Link href="/preise" className="text-gray-600 hover:text-gray-900 transition-colors">Preise</Link>
            <Link href="/kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</Link>

            {/* Status Spans */}
            <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900 flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> ✅ Geprüfter Fachbetrieb
            </span>
            <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-900 flex items-center gap-1">
              <Clock className="h-3 w-3" /> Schnelle Hilfe bei Fenster- und Türproblemen
            </span>

            {/* 24h-Notdienst Button */}
            <a
              href="https://wa.me/436644351622" // Replace with actual contact link if different
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktieren Sie unseren 24h-Notdienst"
            >
              {/* Using button-like styling with Tailwind */}
              <button className="bg-brand text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-brand-dark transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>24h-Notdienst</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Client Component */}
          <MobileMenu />

        </div>
      </div>
    </header>
  );
};

export default Header;