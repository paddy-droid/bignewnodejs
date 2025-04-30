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
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden" style={{ backgroundColor: 'white' }} onClick={(e) => {
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

             <a
              href="https://wa.me/436644351622" // Replace with actual contact link if different
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktieren Sie unseren 24h-Notdienst"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full bg-gray-800 text-white px-4 py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
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