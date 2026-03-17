import { CheckCircle, Clock, MapPin, Wrench, Euro } from 'lucide-react';

const services = [
  {
    name: 'Fensterreparatur',
    category: 'Fenster',
    description: 'Reparatur aller Fenstertypen – Beschläge, Dichtungen, Griffe, Schließmechanismen.',
    region: 'Wien, NÖ, Tulln',
    reaction: '24–48h',
    priceFrom: 'ab 69 €',
    highlight: true,
  },
  {
    name: 'Türreparatur',
    category: 'Türen',
    description: 'Schlösser, Bänder, Rahmen – Haustür, Balkontür, Terrassen­schiebetür.',
    region: 'Wien, NÖ',
    reaction: '24–48h',
    priceFrom: 'ab 79 €',
    highlight: false,
  },
  {
    name: 'Fensterwartung',
    category: 'Wartung',
    description: 'Regelmäßige Inspektion & Einstellung für Energieeffizienz und Langlebigkeit.',
    region: 'Wien, NÖ, Tulln',
    reaction: 'nach Vereinbarung',
    priceFrom: 'ab 49 €',
    highlight: false,
  },
  {
    name: 'Rollladenservice',
    category: 'Rollläden',
    description: 'Gurtband-Wechsel, Motor-Nachrüstung, Dämmung, Sicherheitsprofile.',
    region: 'Wien, NÖ',
    reaction: '24–48h',
    priceFrom: 'ab 59 €',
    highlight: false,
  },
  {
    name: 'Sonnenschutz­reparatur',
    category: 'Sonnenschutz',
    description: 'Raffstores, Markisen, Jalousien – Reparatur & Textband-Austausch.',
    region: 'Wien, NÖ, Tulln',
    reaction: '24–72h',
    priceFrom: 'ab 55 €',
    highlight: false,
  },
  {
    name: 'Glasreparatur',
    category: 'Glas',
    description: 'Austausch von Einfach- & Isolierglas, Sicherheitsglas, beschichtetes Glas.',
    region: 'Wien, NÖ',
    reaction: '48–72h',
    priceFrom: 'ab 99 €',
    highlight: false,
  },
  {
    name: 'Sicherheitstechnik',
    category: 'Sicherheit',
    description: 'Nachrüstung Mehrfachverriegelung, Panzerriegel, zert. Einbruchschutz.',
    region: 'Wien, NÖ',
    reaction: '24–48h',
    priceFrom: 'ab 89 €',
    highlight: false,
  },
  {
    name: 'Insektenschutz',
    category: 'Zubehör',
    description: 'Maßanfertigung & Montage von Insektenschutzgittern und Plissees.',
    region: 'Wien, NÖ, Tulln',
    reaction: 'nach Vereinbarung',
    priceFrom: 'ab 45 €',
    highlight: false,
  },
];

const categoryColors: Record<string, string> = {
  Fenster: 'bg-blue-100 text-blue-700',
  Türen: 'bg-purple-100 text-purple-700',
  Wartung: 'bg-green-100 text-green-700',
  Rollläden: 'bg-orange-100 text-orange-700',
  Sonnenschutz: 'bg-yellow-100 text-yellow-700',
  Glas: 'bg-cyan-100 text-cyan-700',
  Sicherheit: 'bg-red-100 text-red-700',
  Zubehör: 'bg-gray-100 text-gray-700',
};

const ServiceTable = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Leistungsübersicht
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Alle Leistungen im Überblick
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Transparente Preise, schnelle Reaktionszeiten und professionelle <strong>Fensterreparatur</strong> in ganz Wien &amp; Niederösterreich.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-[#0A3D62] text-white">
                <th className="px-5 py-4 text-left font-semibold tracking-wide">
                  <div className="flex items-center gap-1.5"><Wrench className="h-4 w-4 opacity-70" /> Leistung</div>
                </th>
                <th className="px-5 py-4 text-left font-semibold tracking-wide">Beschreibung</th>
                <th className="px-5 py-4 text-left font-semibold tracking-wide">
                  <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 opacity-70" /> Region</div>
                </th>
                <th className="px-5 py-4 text-left font-semibold tracking-wide">
                  <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 opacity-70" /> Reaktionszeit</div>
                </th>
                <th className="px-5 py-4 text-left font-semibold tracking-wide">
                  <div className="flex items-center gap-1.5"><Euro className="h-4 w-4 opacity-70" /> Preis (Materialkosten)</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {services.map((service) => (
                <tr
                  key={service.name}
                  className={`transition-colors hover:bg-blue-50/50 ${service.highlight ? 'bg-blue-50/30' : ''}`}
                >
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="font-semibold text-gray-900">{service.name}</span>
                        {service.highlight && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Beliebt</span>
                        )}
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit ${categoryColors[service.category]}`}>
                        {service.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600 max-w-xs">{service.description}</td>
                  <td className="px-5 py-4 text-gray-700 font-medium whitespace-nowrap">{service.region}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                      <Clock className="h-3 w-3" /> {service.reaction}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-bold text-[#0A3D62] text-sm">{service.priceFrom}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className={`bg-white rounded-xl border shadow-sm p-4 ${service.highlight ? 'border-blue-300 ring-1 ring-blue-200' : 'border-gray-100'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-bold text-gray-900">{service.name}</span>
                    {service.highlight && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Beliebt</span>
                    )}
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[service.category]}`}>
                    {service.category}
                  </span>
                </div>
                <span className="font-bold text-[#0A3D62] text-sm whitespace-nowrap ml-2">{service.priceFrom}</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  <MapPin className="h-3 w-3" /> {service.region}
                </span>
                <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  <Clock className="h-3 w-3" /> {service.reaction}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-gray-400 mt-6">
          * Materialkosten zzgl. Arbeitszeit & Anfahrt. Individuelle Festpreisangebote auf Anfrage. Alle Preise exkl. MwSt.
        </p>
      </div>
    </section>
  );
};

export default ServiceTable;
