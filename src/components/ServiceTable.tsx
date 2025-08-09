import { CheckCircle, XCircle } from 'lucide-react';

const ServiceTable = () => {
  const services = [
    { service: "Fensterreparatur (Holz, Kunststoff, Alu)", emergency: true, maintenance: true },
    { service: "Dichtungstausch", emergency: true, maintenance: true },
    { service: "Beschlag-Service (Einstellen, Ölen)", emergency: true, maintenance: true },
    { service: "Glas-Austausch", emergency: true, maintenance: false },
    { service: "Velux-Dachfenster Service", emergency: true, maintenance: true },
    { service: "Sicherheitsnachrüstung", emergency: false, maintenance: true },
    { service: "Rollladen- & Sonnenschutzreparatur", emergency: true, maintenance: true },
  ];

  return (
    <section id="services-table" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Leistungen im Überblick
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir bieten ein umfassendes Spektrum an Dienstleistungen rund um Ihre Fenster und Türen. Hier sehen Sie eine Auswahl unserer Kernkompetenzen.
          </p>
        </div>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
              <tr>
                <th className="p-4 font-semibold">Dienstleistung</th>
                <th className="p-4 font-semibold text-center">Im Notdienst verfügbar</th>
                <th className="p-4 font-semibold text-center">Teil der Wartung</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {services.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">{item.service}</td>
                  <td className="p-4 text-center">
                    {item.emergency ? (
                      <CheckCircle className="h-6 w-6 text-green-500 inline-block" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 inline-block" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.maintenance ? (
                      <CheckCircle className="h-6 w-6 text-green-500 inline-block" />
                    ) : (
                      <XCircle className="h-6 w-6 text-gray-400 inline-block" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceTable;