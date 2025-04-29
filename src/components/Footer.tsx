import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <div className="mb-4">
          {/* Placeholder for Company Data */}
          <p>Fensterservice Niederösterreich & Wien</p>
          <p>Musterstraße 123, 1010 Wien</p>
          <p>Telefon: +43 123 456 789</p>
          <p>E-Mail: info@fensterservice.at</p>
        </div>
        <div className="flex justify-center space-x-6">
          {/* Placeholder for Contact Links */}
          <Link href="/impressum" className="hover:text-brand">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-brand">Datenschutz</Link>
        </div>
        <div className="mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Fensterservice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;