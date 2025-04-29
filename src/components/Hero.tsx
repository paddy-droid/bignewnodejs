"use client";
import React from 'react';
import Image from 'next/image'; // Import Image for background
import { Phone } from 'lucide-react'; // Import Phone icon

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Using next/image for background */}
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Moderne Fenster"
          fill // Use fill to cover the parent
          className="object-cover" // Cover the area without distorting aspect ratio
          quality={80} // Optimize image quality
          priority // Prioritize loading for LCP
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Fensterservice Rowo - Ihr Experte für Fenster & Türreparatur
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professionelle Fenster-, Tür-, Sonnenschutz- und Insektenschutzreparatur in Niederösterreich und Wien
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          {/* Button 1: Jetzt unverbindlich anfragen! */}
          <button
            className="w-full md:w-auto bg-white text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt unverbindlich anfragen!
          </button>
          {/* Button 2: 24h-Notdienst */}
          <a
            href="https://wa.me/436644351622"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
            aria-label="Kontaktieren Sie unseren 24h-Notdienst über WhatsApp"
          >
            <button
              className="w-full bg-transparent border border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/10 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>24h-Notdienst</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;