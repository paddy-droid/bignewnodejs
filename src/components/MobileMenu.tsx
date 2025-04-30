"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, ShieldCheck, Clock } from 'lucide-react'; // Import icons

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <Link href="/leistungen" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Leistungen</Link>
            {/* Navigation links for mobile */}
            <Link href="/spezialleistungen" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Spezialleistungen</Link>
            <Link href="/ueber-uns" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Über uns</Link>
            <Link href="/kontakt" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>

            {/* Buttons/Status for Mobile */}
            <a
              href="#" // Replace with actual link for Geprüfter Fachbetrieb
              className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-1 justify-center" // Button styling
              aria-label="Geprüfter Fachbetrieb"
              onClick={() => setIsMenuOpen(false)}
            >
               ✅ Geprüfter Fachbetrieb
            </a>

             <button
               aria-label="Kostenlose Anfahrt bis 30.09.2025"
               className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors w-full" // Button styling
               onClick={() => setIsMenuOpen(false)}
             >
               Kostenlose Anfahrt bis 30.09.2025
             </button>

            {/* 24h-Notdienst Button for Mobile */}
             <a
              href="https://wa.me/436644351622" // Replace with actual contact link if different
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktieren Sie unseren 24h-Notdienst"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Using button-like styling with Tailwind */}
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 w-full">
                <Phone className="h-4 w-4" />
                <span>24h-Notdienst</span>
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;