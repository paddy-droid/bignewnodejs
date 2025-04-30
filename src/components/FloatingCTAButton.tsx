'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile'; // Assuming you have a hook to detect mobile

const FloatingCTAButton: React.FC = () => {
  const isMobile = useIsMobile(); // Use the hook

  // Only render the button on mobile
  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm px-4">
      <Link href="/kontakt" passHref>
        <Button
          className="w-full bg-blue-700 text-white text-base font-semibold py-3 rounded-md hover:bg-blue-800 transition-colors shadow-lg"
          aria-label="Kostenlose Anfahrt bis 30.09.2025"
        >
          Kostenlose Anfahrt bis 30.09.2025
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTAButton;