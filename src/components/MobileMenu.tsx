"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react'; // Import icons

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
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden" style={{ backgroundColor: 'white !important' }} onClick={(e) => {
          // Close menu if the click target is the overlay itself
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
          }
        }}>
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-8 flex-grow">
            <Link href="/" className="text-xl text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/leistungen" className="text-xl text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Leistungen</Link>
            <Link href="/spezialleistungen" className="text-xl text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Spezialleistungen</Link>
            <Link href="/ueber-uns" className="text-xl text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Über uns</Link>
            <Link href="/kontakt" className="text-xl text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
            <Link href="/notdienst" className="text-xl text-red-600 font-semibold hover:text-red-800 transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Phone className="h-5 w-5" />
                24h Notdienst
            </Link>
          </nav>

          {/* Ensure text color is dark for readability */}
          <div className="flex flex-col items-center space-y-4 mb-8 text-gray-800">

            <a
              href="#" // Replace with actual link for Geprüfter Fachbetrieb
              className="w-full text-center bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2 justify-center"
              aria-label="Geprüfter Fachbetrieb"
              onClick={() => setIsMenuOpen(false)}
            >
               ✅ Geprüfter Fachbetrieb
            </a>

             <button
               aria-label="Kostenlose Anfahrt bis 30.09.2025"
               className="w-full bg-blue-500 text-white px-4 py-3 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors"
               onClick={() => setIsMenuOpen(false)}
             >
               Kostenlose Anfahrt bis 30.09.2025
             </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;