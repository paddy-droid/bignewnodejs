'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FloatingCTAButton: React.FC = () => {
  return (
    // Positioned fixed, top-right below header (h-20), adjusted z-index
    <div className="fixed top-24 right-4 z-40 max-w-[calc(100vw-2rem)]">
      <Link href="/kontakt" passHref>
        <Button
          // Responsive design with adjusted padding, text size, and height for mobile devices
          className="w-auto bg-blue-800 text-white font-semibold py-3 px-3 sm:px-4 md:px-6 rounded-md hover:bg-blue-900 transition-colors shadow-lg animate-bounce text-xs sm:text-sm md:text-base h-auto min-h-[44px] whitespace-normal text-center"
          aria-label="Winter Spezial Aktion: Kostenlose Anfahrt. Gültig bis 31.01.2026."
        >
          <span className="block sm:hidden">Winter Aktion:<br/>Kostenlose Anfahrt<br/>Gültig bis 31.01.2026</span>
          <span className="hidden sm:block md:hidden">Winter Spezial: Kostenlose Anfahrt. Gültig bis 31.01.2026</span>
          <span className="hidden md:block">Winter Spezial Aktion: Kostenlose Anfahrt. Gültig bis 31.01.2026.</span>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTAButton;