'use client';

import React from 'react';
import Image from 'next/image';
import {
  Shield,
  Wrench,
  Clock,
  MapPin,
  CheckCircle,
  Phone,
  Sun,
  Droplets,
  Wind,
} from 'lucide-react';

const VeluxServiceSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild-Spalte */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/dachfenster-velux-service-reparatur.webp"
                alt="Velux Dachfenster Service und Reparatur in Wien und Niederösterreich"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Overlay-Badge */}
              <div className="absolute top-6 left-6 bg-[#0A3D62] text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                <Sun className="w-4 h-4" />
                Zertifizierter Velux Service
              </div>
            </div>
          </div>

          {/* Inhalt-Spalte */}
          <div className="order-1 lg:order-2">
            {/* Ueberschrift */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Professioneller <span className="text-[#0A3D62]">Velux Dachfenster</span> Service
            </h2>

            {/* Einleitung */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ihr Velux Dachfenster ist undicht, schwergängig oder braucht neue Dichtungen?
              Unser spezialisiertes Team repariert und wartet alle Velux Dachfenster-Modelle –
              vom klassischen Schwingfenster bis zum modernen Elektro-Dachfenster.
            </p>

            {/* Unsere Leistungen */}
            <div className="mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-4 m-0 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#0A3D62]" />
                Unsere Velux-Leistungen
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: <Droplets className="w-4 h-4" />, text: "Dichtungstausch & Abdichtung" },
                  { icon: <Wrench className="w-4 h-4" />, text: "Scharniere & Beschläge einstellen" },
                  { icon: <Sun className="w-4 h-4" />, text: "Sonnenschutz & Rollo Reparatur" },
                  { icon: <Wind className="w-4 h-4" />, text: "Glasaustausch & Scheibentausch" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="text-[#0A3D62]">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ihre Vorteile */}
            <div className="mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-4 m-0 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0A3D62]" />
                Ihre Vorteile
              </p>
              <div className="space-y-2">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: "Schnelle Terminvergabe – Reparatur oft am selben Tag" },
                  { icon: <Shield className="w-4 h-4" />, text: "Original Velux Ersatzteile für langlebige Reparaturen" },
                  { icon: <Droplets className="w-4 h-4" />, text: "Schluss mit undichten Dachfenstern – dauerhafte Abdichtung" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-[#0A3D62] mt-0.5">{item.icon}</div>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regionale Verfuegbarkeit */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-lg font-semibold text-gray-900 mb-2 m-0 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0A3D62]" />
                Regionale Verfügbarkeit
              </p>
              <p className="text-sm text-gray-700">
                Unser Velux Dachfenster-Service ist in Wien, Tulln, St. Pölten, Krems,
                Klosterneuburg, Baden bei Wien und in ganz Niederösterreich für Sie verfügbar.
              </p>
            </div>

            {/* CTA-Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+436644351622"
                className="inline-flex items-center justify-center gap-2 bg-[#0A3D62] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0b4a75] transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Velux Reparatur anfragen
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A3D62] font-semibold px-6 py-3 rounded-lg border-2 border-[#0A3D62] hover:bg-blue-50 transition-colors"
              >
                Velux Service Termin vereinbaren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeluxServiceSection;
