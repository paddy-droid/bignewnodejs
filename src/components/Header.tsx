import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          {/* Placeholder for Logo */}
          <Link href="/">
            <span className="text-xl font-bold text-brand">Fensterservice</span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/leistungen" className="text-gray-600 hover:text-brand">Leistungen</Link></li>
            <li><Link href="/preise" className="text-gray-600 hover:text-brand">Preise</Link></li>
            <li><Link href="/kontakt" className="text-gray-600 hover:text-brand">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;