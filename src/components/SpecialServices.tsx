"use client";
import { Phone, ShieldCheck, Building, Wrench, ArrowRight } from "lucide-react";
import SpecialServicesCTAButton from "./SpecialServicesCTAButton";

const cards = [
  {
    icon: Phone,
    title: "24h-Notdienst",
    badge: "Rund um die Uhr",
    badgeColor: "bg-red-100 text-red-600",
    borderColor: "border-t-red-500",
    iconBg: "bg-red-50 text-red-600",
    description:
      "Defekte Fenster, klemmendes Türschloss oder kaputter Rollladen mitten in der Nacht? Unser <strong>24-Stunden-Notdienst</strong> ist immer erreichbar – schnelle Hilfe in Wien &amp; NÖ.",
    keywords: ["Soforteinsatz", "Wien & NÖ", "WhatsApp-Notfallline"],
  },
  {
    icon: ShieldCheck,
    title: "Versicherungsschäden",
    badge: "Direkte Abwicklung",
    badgeColor: "bg-green-100 text-green-700",
    borderColor: "border-t-green-500",
    iconBg: "bg-green-50 text-green-600",
    description:
      "Sturm-, Einbruch- oder Vandalismusschaden? Wir übernehmen die komplette <strong>Schadensabwicklung mit Ihrer Versicherung</strong> – inklusive Dokumentation und Kostenvoranschlag.",
    keywords: ["Dokumentation", "Direktabrechnung", "Kostenvoranschlag"],
  },
  {
    icon: Wrench,
    title: "Privathaushalte",
    badge: "Spezialpreise",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-t-blue-500",
    iconBg: "bg-blue-50 text-blue-600",
    description:
      "Attraktive Konditionen für Eigenheimbesitzer und Mieter: <strong>Fenster- &amp; Türreparatur für Privathaushalte</strong> mit Festpreisgarantie und termingerechter Umsetzung.",
    keywords: ["Festpreis", "Termingarantie", "Eigenheimbesitzer"],
  },
];

const SpecialServices = () => {
  return (
    <section id="specialServices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Spezialleistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Mehr als nur Fensterreparatur
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Zusatzleistungen, die Ihnen das Leben leichter machen – von der Notfallhilfe bis zur Versicherungsabwicklung.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`bg-white rounded-2xl border-t-4 ${card.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col`}
              >
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${card.iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>

                <p
                  className="text-gray-600 text-sm leading-relaxed mb-4 flex-1"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {card.keywords.map((kw) => (
                    <span key={kw} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
                      ✓ {kw}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hausverwaltungen – wide card */}
        <div className="bg-gradient-to-r from-[#0A3D62] to-slate-700 rounded-2xl shadow-lg p-7 text-white flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">Service für Hausverwaltungen</h3>
              <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full">B2B</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
              Maßgeschneiderte <strong className="text-white">Wartungsverträge</strong> und Sofortreparaturen für Wohn- und Geschäftsobjekte. Digitale Berichte, feste Ansprechpartner und{' '}
              <strong className="text-white">transparente Kostenaufstellungen</strong> für effiziente Prozesse.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Wartungsverträge', 'Großobjekte', 'Notfallreparatur', 'Digitale Berichte'].map((kw) => (
                <span key={kw} className="text-xs bg-white/15 text-white/90 px-2.5 py-1 rounded-full border border-white/20">
                  ✓ {kw}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0A3D62] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Anfrage senden <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <SpecialServicesCTAButton />
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
