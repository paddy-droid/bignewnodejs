import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Phone } from 'lucide-react'; // Import icons
import MobileMenu from './MobileMenu'; // Import the MobileMenu Client Component

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo Image */}
            <Image
              src="/Images/Fensterservice ROWO Fensterreparatur Tulln, Wien und Niederösterreich.png"
              alt="Fensterservice ROWO Logo" // Updated alt text
              width={150} // Adjust width and height as needed
              height={50} // Adjust width and height as needed
              className="h-auto w-auto max-h-12" // Adjusted styling for better responsiveness
              priority
            />
          </Link>

          {/* Desktop Menu */}
          {/* Desktop Menu and Buttons */}
          <div className="hidden md:flex items-center space-x-4"> {/* Adjusted spacing and removed flex-grow/justify-end */}
            <Link href="/leistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</Link>
            <Link href="/spezialleistungen" className="text-gray-600 hover:text-gray-900 transition-colors">Spezialleistungen</Link> {/* Changed from Preise */}
            <Link href="/ueber-uns" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</Link> {/* Added Über uns */}
            <Link href="/kontakt" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</Link>

            {/* Buttons */}
            <a
              href="#" // Replace with actual link for Geprüfter Fachbetrieb
              className="bg-green-500 text-white text-sm font-semibold px-4 py-2 md:px-6 rounded-md hover:bg-green-600 transition-colors flex items-center gap-1" // Button styling
              aria-label="Geprüfter Fachbetrieb"
            >
               ✅ Geprüfter Fachbetrieb
            </a>

            <a
              href="https://wa.me/436644351622" // Replace with actual contact link if different
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktieren Sie unseren 24h-Notdienst"
              className="bg-gray-800 text-white px-4 py-2 md:px-6 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2" // Updated button styling
            >
              <Phone className="h-4 w-4" />
              <span>24h-Notdienst</span>
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