'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const FloatingCTAButton: React.FC = () => {
  return (
    // Positioned fixed, top-right below header (h-20), adjusted z-index
    <div className="fixed top-24 right-4 z-40">
      <Link href="/kontakt" passHref>
        <Button
          // Adjusted padding, darker blue, bounce animation, removed w-full
          className="w-auto bg-blue-800 text-white text-base font-semibold py-2 px-6 rounded-md hover:bg-blue-900 transition-colors shadow-lg animate-bounce"
          aria-label="Kostenlose Anfahrt bis 30.09.2025"
        >
          Kostenlose Anfahrt bis 30.09.2025
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTAButton;