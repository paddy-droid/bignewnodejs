"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const SpecialServicesCTAButton = () => {
  const isMobile = useIsMobile();

  return (
    <Button size="lg" className="text-lg px-8 py-6 bg-brand text-white hover:bg-gray-800 hover:text-white" asChild>
      <a href={isMobile ? "https://wa.me/436644351622" : "#about"}>
        Jetzt unverbindlich anfragen
      </a>
    </Button>
  );
};

export default SpecialServicesCTAButton;