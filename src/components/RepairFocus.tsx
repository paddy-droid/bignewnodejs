"use client";
import Image from 'next/image';
import ExpandableRepairContent from "./ExpandableRepairContent";
import { Award, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'zufriedene Kunden', color: 'text-blue-600' },
  { icon: Award, value: '15+', label: 'Jahre Erfahrung', color: 'text-green-600' },
  { icon: Clock, value: '24h', label: 'Notdienst', color: 'text-orange-500' },
  { icon: MapPin, value: '6', label: 'Regionen in NÖ & Wien', color: 'text-purple-600' },
];

const RepairFocus = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="repair-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 items-center lg:grid-cols-2">

          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                Ihr Fachbetrieb in Wien & NÖ
              </span>
              <h2 id="repair-heading" className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Professionelle Fensterreparatur &amp; Service in Wien und Niederösterreich
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Fenster, Türen, Sonnenschutz oder Insektenschutz</strong> – bei uns sind Sie richtig!
              Als verlässlicher <strong>Fensterservice-Fachbetrieb in Wien und Niederösterreich</strong> packen
              wir Probleme an der Wurzel. Ob <strong>undichte Fenster</strong>, klemmendes Türschloss oder
              defekter Rollladen – wir sorgen für langfristige Lösungen.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <Icon className={`h-5 w-5 ${color} mx-auto mb-1`} />
                  <div className={`text-2xl font-extrabold ${color}`}>{value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Expandable Content */}
            <div>
              <ExpandableRepairContent />
            </div>
          </div>

          {/* Image */}
          <figure className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-2">
            <Image
              src="/Images/Fenster Reparatur.png"
              alt="Fensterreparatur Service in Wien und Niederösterreich – Fachbetrieb ROWO"
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Floating badge on image */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
              <div className="text-xs text-gray-500 font-medium">Kundenbewertung</div>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-bold text-gray-900 ml-1">4,9 / 5</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default RepairFocus;
