import Head from 'next/head';
import Contact from "@/components/Contact";

export default function SpezialleistungenPage() {
  return (
    <>
      <Head>
        <title>Spezialleistungen - Fensterservice Wien, NÖ, Tulln</title>
        <meta name="description" content="Spezial-Fensterservice in Wien, NÖ, Tulln: Restaurierung historischer Fenster, Smart Home, Sicherheit. Lösungen für besondere Anforderungen." />
      </Head>
      <main className="pt-20"> {/* Added padding top to prevent content from being hidden by fixed header */}
      {/* Section 1: Introduction to Special Services */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Spezialleistungen im Fensterservice: Lösungen für besondere Anforderungen</h1>
        <p className="mb-4">
          Neben unserem umfassenden Standardangebot im Bereich <strong>Fensterservice</strong> bieten wir auch eine Reihe von <strong>Spezialleistungen</strong> an, die auf besondere Anforderungen und individuelle Bedürfnisse zugeschnitten sind. Ob es um die Restaurierung historischer Fenster, die Integration moderner Smart-Home-Technologie oder spezielle <strong>Sicherheit</strong>slösungen geht – unser Team verfügt über das nötige Know-how und die Erfahrung, um auch komplexe Projekte erfolgreich umzusetzen. Wir verstehen, dass jedes Gebäude und jeder Kunde einzigartig ist. Deshalb nehmen wir uns die Zeit, Ihre spezifischen Anforderungen genau zu verstehen und maßgeschneiderte Lösungen zu entwickeln. Unsere <strong>Spezialleistungen</strong> sind darauf ausgerichtet, nicht nur die Funktionalität und Ästhetik Ihrer Fenster zu verbessern, sondern auch deren Wert und <strong>Sicherheit</strong> zu steigern. Wir bedienen Kunden in <strong>Tulln</strong>, <strong>Wien</strong> und ganz <strong>Niederösterreich</strong>.
        </p>
{/* Placeholder for a relevant image */}
        <img src="/Images/window.svg" alt="Relevant image for Spezialleistungen page" className="w-full h-auto max-h-96 object-cover mb-6 rounded-md"/>
        {/* TODO: Replace with a suitable free image */}
      </section>

      {/* Section 2: Detailed Special Service Categories */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Unsere Spezialleistungen im Detail</h2>

        {/* Special Service Category: Restaurierung historischer Fenster */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Restaurierung historischer Fenster</h3>
          <p className="mb-4">
            Historische Gebäude haben oft einzigartige Fenster, die ihren Charakter prägen. Die Restaurierung solcher Fenster erfordert spezielles Wissen und handwerkliches Geschick. Wir sind spezialisiert auf die behutsame und fachgerechte Restaurierung historischer Fenster, wobei wir den ursprünglichen Charme und die Bausubstanz erhalten. Dies umfasst die <strong>Reparatur</strong> oder den Austausch beschädigter Holzteile, die Erneuerung von Kitt und Farbe nach historischen Vorbildern sowie die <strong>Reparatur</strong> oder den Austausch von historischem Glas. Ziel ist es, die Funktionalität und <strong>Energieeffizienz</strong> der Fenster zu verbessern, ohne ihr historisches Erscheinungsbild zu verändern.
          </p>
        </div>

        {/* Special Service Category: Integration von Smart-Home-Technologie */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Integration von Smart-Home-Technologie</h3>
          <p className="mb-4">
            Moderne Fenster können mehr als nur Licht und Luft hereinlassen. Wir integrieren Smart-Home-Technologie in Ihre Fenster, um Komfort, <strong>Sicherheit</strong> und <strong>Energieeffizienz</strong> zu maximieren. Dazu gehören automatische Beschattungssysteme, integrierte Sensoren zur Überwachung von Temperatur und Luftfeuchtigkeit sowie vernetzte <strong>Sicherheit</strong>ssysteme, die Sie über den Zustand Ihrer Fenster informieren. Steuern Sie Ihre Fenster bequem per App oder Sprachbefehl.
          </p>
        </div>

        {/* Special Service Category: Spezielle Sicherheitslösungen */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Spezielle Sicherheitslösungen</h3>
          <p className="mb-4">
            Für erhöhte <strong>Sicherheit</strong>sanforderungen bieten wir spezielle Lösungen an, die über den Standard-Einbruchschutz hinausgehen. Dazu gehören die Installation von durchschusshemmendem oder sprengwirkungshemmendem Glas, die Verstärkung von Fensterrahmen und die Integration komplexer Überwachungssysteme. Diese Lösungen eignen sich besonders für Objekte mit erhöhtem <strong>Sicherheit</strong>sbedarf, wie z.B. Banken, Juweliere oder private Residenzen mit wertvollen Sammlungen.
          </p>
        </div>

        {/* Special Service Category: Schallschutzoptimierung */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Schallschutzoptimierung</h3>
          <p className="mb-4">
            Lärm kann die Lebensqualität erheblich beeinträchtigen. Wir bieten Lösungen zur Schallschutzoptimierung Ihrer Fenster, um den Lärmpegel in Ihren Räumen deutlich zu reduzieren. Dies umfasst den Austausch von Standardglas durch spezielles Schallschutzglas, die Verbesserung der Fenster<strong>dichtungen</strong> und die Optimierung des Fensteranschlusses an das Mauerwerk.
          </p>
        </div>

        {/* Special Service Category: Energetische Sanierung von Fenstern */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Energetische Sanierung von Fenstern</h3>
          <p className="mb-4">
            Alte oder undichte Fenster können zu erheblichen Energieverlusten führen. Wir bieten umfassende Lösungen zur energetischen Sanierung Ihrer Fenster, um die Wärmedämmung zu verbessern und Heizkosten zu senken. Dies kann den Austausch alter Fenster durch moderne, hochenergieeffiziente Modelle umfassen, die Nachrüstung von Isolierglas in bestehende Rahmen oder die Optimierung der Fensterab<strong>dichtungen</strong>. Dies trägt maßgeblich zur <strong>Energieeffizienz</strong> Ihres Gebäudes bei.
          </p>
        </div>
      </section>

      {/* Section 3: Why Choose Us for Special Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Warum Sie sich für unsere Spezialleistungen entscheiden sollten</h2>
        <ul className="list-disc list-inside mb-8">
          <li className="mb-2"><strong>Spezialisiertes Know-how:</strong> Unser Team verfügt über fundiertes Wissen und Erfahrung in komplexen Fensterservicebereichen.</li>
          <li className="mb-2"><strong>Maßgeschneiderte Lösungen:</strong> Wir entwickeln individuelle Konzepte, die genau auf Ihre Bedürfnisse zugeschnitten sind.</li>
          <li className="mb-2"><strong>Qualität und Präzision:</strong> Wir legen Wert auf höchste handwerkliche Qualität und sorgfältige Ausführung.</li>
          <li className="mb-2"><strong>Innovative Ansätze:</strong> Wir integrieren moderne Technologien und Lösungen, um optimale Ergebnisse zu erzielen.</li>
          <li className="mb-2"><strong>Umfassende Beratung:</strong> Wir nehmen uns Zeit, Sie ausführlich zu beraten und alle Ihre Fragen zu beantworten.</li>
          <li className="mb-2"><strong>Zuverlässigkeit:</strong> Wir sind ein vertrauenswürdiger Partner für anspruchsvolle Fensterserviceprojekte.</li>
        </ul>
      </section>

      {/* Section 4: Call to Action */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Haben Sie besondere Anforderungen an Ihre Fenster?</h2>
          <p className="text-xl mb-8 text-white">Kontaktieren Sie uns für eine individuelle Beratung zu unseren Spezialleistungen.</p>
          <a href="/kontakt" className="bg-white text-brand !text-[#0A3D62] text-lg font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition duration-300 inline-block">
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
    </>
  );
}