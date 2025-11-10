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
  Zap,
  Home,
  Thermometer
} from 'lucide-react';

const ShutterRepairSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild-Spalte */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/rolladen reparatur niederösterreich.webp"
                alt="Rolladen Reparatur Niederösterreich - Professioneller Service"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Overlay-Badge */}
              <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                <Zap className="w-4 h-4" />
                Schnelle Hilfe in ganz NÖ
              </div>
            </div>
          </div>

          {/* Inhalt-Spalte */}
          <div className="order-1 lg:order-2">
            {/* Überschrift */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Professionelle <span className="text-green-600">Rolladen Reparatur</span> in Niederösterreich
            </h2>

            {/* Einleitung */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ihre Rolladen in Niederösterreich funktionieren nicht mehr einwandfrei? 
              Unser Expertenteam bietet schnelle und zuverlässige Rolladen-Reparaturen für alle 
              gängigen Marken und Modelle - von manuellen Gurtrolladen bis zu modernen 
              elektrischen Anlagen.
            </p>

            {/* Unsere Leistungen */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-green-600" />
                Unsere Rolladen-Leistungen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: <Wrench className="w-4 h-4" />, text: "Gurtband- & Seilwechsel" },
                  { icon: <Zap className="w-4 h-4" />, text: "Motorenreparatur & -austausch" },
                  { icon: <Shield className="w-4 h-4" />, text: "Lamellen- & Führungsschienen" },
                  { icon: <Home className="w-4 h-4" />, text: "Kästen & Dämmungen" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="text-green-600">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ihre Vorteile */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Ihre Vorteile
              </h3>
              <div className="space-y-2">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: "Schnelle Reaktionszeiten in ganz Niederösterreich" },
                  { icon: <Thermometer className="w-4 h-4" />, text: "Verbesserte Energieeffizienz durch funktionierende Rolladen" },
                  { icon: <Shield className="w-4 h-4" />, text: "Erhöhter Einbruchschutz durch intakte Mechanik" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-green-600 mt-0.5">{item.icon}</div>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regionale Verfügbarkeit */}
            <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Regionale Verfügbarkeit
              </h3>
              <p className="text-sm text-gray-700">
                Unser Rolladen-Service deckt das gesamte Bundesland Niederösterreich ab, 
                inklusive Wien, Tulln, St. Pölten, Krems, Baden bei Wien, Klosterneuburg 
                und allen umliegenden Gemeinden.
              </p>
            </div>

            {/* CTA-Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+436644351622"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Jetzt Kontakt aufnehmen
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 font-semibold px-6 py-3 rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                Online-Anfrage stellen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShutterRepairSection;