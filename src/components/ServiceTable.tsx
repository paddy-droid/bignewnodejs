import { Check } from 'lucide-react';

const services = [
  { name: 'Fensterreparatur', description: 'Schnelle und zuverlässige Reparatur aller Fenstertypen.' },
  { name: 'Fensterwartung', description: 'Regelmäßige Wartung für Langlebigkeit und Energieeffizienz.' },
  { name: 'Fenstermontage und -austausch', description: 'Fachgerechter Einbau moderner und sicherer Fenster.' },
  { name: 'Sicherheitstechnik für Fenster', description: 'Nachrüstung von Sicherheitstechnik für optimalen Einbruchschutz.' },
  { name: 'Rollladen- und Jalousienreparatur', description: 'Reparatur und Wartung von Rollläden und Jalousien.' },
  { name: 'Glasreparatur und -austausch', description: 'Austausch von beschädigtem oder veraltetem Glas.' },
  { name: 'Sonnenschutzfolien montage', description: 'Professionelle Montage von Sonnenschutzfolien für optimalen Hitzeschutz.' },
  { name: 'Raffstore Textband tausch', description: 'Fachgerechter Austausch von Raffstore Textbändern.' },
];

const ServiceTable = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Unsere Leistungen im Detail</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leistung</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {service.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;