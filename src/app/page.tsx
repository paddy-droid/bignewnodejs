import Hero from "@/components/Hero";
import Image from "next/image"; // Keep Image import for potential future use or if needed in cards

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Info Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Reparatur */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* Placeholder Icon/Image */}
            <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">🛠️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Fensterreparatur</h3>
            <p className="text-gray-600">Schnelle und professionelle Reparatur von defekten Fenstern, Beschlägen und Glas.</p>
          </div>

          {/* Card 2: Wartung */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* Placeholder Icon/Image */}
            <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">🔧</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Fensterwartung</h3>
            <p className="text-gray-600">Regelmäßige Wartung zur Verlängerung der Lebensdauer Ihrer Fenster und zur Vermeidung von Schäden.</p>
          </div>

          {/* Card 3: Notfall-Service */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* Placeholder Icon/Image */}
            <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">🚨</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Notfall-Service</h3>
            <p className="text-gray-600">Sofortige Hilfe bei Glasbruch, Einbruchschäden oder anderen dringenden Fensterproblemen.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Bereit für erstklassigen Fensterservice?</h2>
          <p className="text-xl mb-8">Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Termin.</p>
          <button className="bg-white text-brand text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Kontakt aufnehmen
          </button>
        </div>
      </section>
    </main>
  );
}
