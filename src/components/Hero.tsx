"use client";
import React from 'react';
import Image from 'next/image';
import { Phone, Star, ChevronDown, Clock, Shield, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Professionelle Fensterreparatur Wien Niederösterreich"
          fill
          className="object-cover scale-105"
          quality={85}
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/90 via-[#0A3D62]/75 to-slate-900/80" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white/90">4,9 · 500+ Kunden · Seit 2010</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-tight tracking-tight">
          <span className="block">Fensterservice Rowo</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            Wien &amp; Niederösterreich
          </span>
        </h1>

        {/* Sub-headline with keywords */}
        <p className="text-lg md:text-xl text-white/85 mb-3 max-w-2xl mx-auto leading-relaxed">
          Ihr Experte für <strong className="text-white">Fensterreparatur</strong>,{' '}
          <strong className="text-white">Türreparatur</strong> &amp;{' '}
          <strong className="text-white">Rollladenservice</strong> — schnell, zuverlässig und fair.
        </p>
        <p className="text-base text-white/70 mb-10 max-w-xl mx-auto">
          Professionelle Reparatur vor Ort in <strong className="text-white/90">Wien, Tulln, Klosterneuburg, Krems, St. Pölten &amp; Baden</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-white text-[#0A3D62] px-8 py-4 text-base font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <CheckCircle className="h-5 w-5 text-green-600" />
            Kostenlos anfragen
          </button>
          <a
            href="tel:+436644351622"
            className="w-full sm:w-auto bg-transparent border-2 border-white/70 text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Phone className="h-5 w-5" />
            <span>+43 664 435 16 22</span>
          </a>
          <a
            href="https://wa.me/436644351622"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-500 border-2 border-green-400 text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-green-400 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            aria-label="24h-Notdienst WhatsApp"
          >
            <Clock className="h-5 w-5" />
            <span>24h-Notdienst</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/80 text-sm">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Kostenlose Erstberatung</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Schnelle Reaktionszeit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-blue-300" />
            <span>Zertifizierte Fachbetrieb</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span>Versicherungsschäden übernehmen wir</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
