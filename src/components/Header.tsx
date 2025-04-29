import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react'; // Import icons
import MobileMenu from './MobileMenu'; // Import the MobileMenu Client Component

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
          {/* Desktop Menu and Buttons */}
          <div className="hidden md:flex items-center space-x-6 flex-grow justify-end"> {/* Added flex-grow and justify-end */}
            <Link href="/leistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</Link>
            <Link href="/spezialleistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Spezialleistungen</Link> {/* Changed from Preise */}
            <Link href="/ueber-uns" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</Link> {/* Added Über uns */}
            <Link href="/kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</Link>

            {/* Buttons */}
            <a
              href="#" // Replace with actual link for Geprüfter Fachbetrieb
              className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-1" // Button styling
              aria-label="Geprüfter Fachbetrieb"
            >
               ✅ Geprüfter Fachbetrieb
            </a>

            <a
              href="https://wa.me/436644351622" // Replace with actual contact link if different
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktieren Sie unseren 24h-Notdienst"
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2" // Updated button styling
            >
              <Phone className="h-4 w-4" />
              <span>24h-Notdienst</span>
            </a>

            {/* Kostenlose Anfahrt Button - positioned separately */}
            {/* This button needs to be outside this flex container to be on the far right */}
          </div>

           {/* Kostenlose Anfahrt Button - positioned separately */}
           <div className="hidden md:flex items-center ml-6"> {/* Added a new flex container for this button */}
             <a
               href="#" // Replace with actual link for Kostenlose Anfahrt
               className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition-colors" // Button styling
               aria-label="Kostenlose Anfahrt bis 30.09.2025"
             >
               Kostenlose Anfahrt bis 30.09.2025
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