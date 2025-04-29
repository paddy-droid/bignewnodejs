"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const SpecialServicesCTAButton = () => {
  const isMobile = useIsMobile();

  return (
    <Button size="lg" className="text-lg px-8 py-6" asChild>
      <a href={isMobile ? "https://wa.me/436644351622" : "#about"}>
        Jetzt unverbindlich anfragen
      </a>
    </Button>
  );
};

export default SpecialServicesCTAButton;