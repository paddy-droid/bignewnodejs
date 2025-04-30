import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Unsere Leistungen - Umfassender Fensterservice in NÖ & Wien",
  description: "Entdecken Sie unser breites Angebot an Fensterservices in Tulln, Wien und Niederösterreich: Fensterreparatur, Wartung, Montage, Sicherheitstechnik und mehr. Qualität und Zuverlässigkeit für Ihre Fenster.",
};
import Contact from "@/components/Contact";

export default function LeistungenPage() {
  return (
    <main className="pt-20"> {/* Added padding top to prevent content from being hidden by fixed header */}
      {/* Section 1: Introduction to Services */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Unsere umfassenden Fensterservices in Tulln, Wien und Niederösterreich</h1>
        <p className="mb-4">
          Willkommen bei Ihrem Experten für **Fensterservice** in **Tulln**, **Wien** und ganz **Niederösterreich**. Wir bieten ein breites Spektrum an Dienstleistungen rund um Ihr Fenster, von der professionellen **Fensterreparatur** über die sorgfältige **Wartung** bis hin zur fachgerechten Montage neuer Fenster. Unser Ziel ist es, die Funktionalität, **Sicherheit** und **Energieeffizienz** Ihrer Fenster langfristig zu gewährleisten. Mit jahrelanger Erfahrung und einem Team aus qualifizierten Fachkräften sind wir Ihr zuverlässiger Partner für alle Anliegen rund um das Fenster. Egal ob es sich um ein kleines Problem oder ein umfangreiches Projekt handelt, wir stehen Ihnen mit Rat und Tat zur Seite. Wir legen Wert auf **Qualität** und **Zuverlässigkeit** bei jedem Auftrag.
        </p>
        <p className="mb-4">
          Ein Fenster ist mehr als nur eine Öffnung in der Wand; es ist ein komplexes Bauelement, das Schutz vor Witterung bietet, zur **Energieeffizienz** Ihres Hauses beiträgt, Schall isoliert und nicht zuletzt das Erscheinungsbild Ihrer Immobilie prägt. Daher ist es unerlässlich, dass Fenster stets in einwandfreiem Zustand sind. Verschleiß, Beschädigungen oder mangelnde **Wartung** können nicht nur die Funktionalität beeinträchtigen, sondern auch zu höheren Heizkosten, Zugluft, Lärmbelästigung und einem erhöhten **Sicherheit**srisiko führen. Unser umfassendes Serviceangebot deckt alle Aspekte ab, um sicherzustellen, dass Ihre Fenster optimal funktionieren und ihren Wert langfristig erhalten. Wir bieten schnelle und effiziente Lösungen für alle Arten von Fensterproblemen.
        </p>
{/* Placeholder for a relevant image */}
        <img src="/Images/window.svg" alt="Relevant image for Leistungen page" className="w-full h-auto max-h-96 object-cover mb-6 rounded-md"/>
        {/* TODO: Replace with a suitable free image */}
      </section>

      {/* Section 2: Specific Service Categories */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Detaillierte Leistungen im Überblick</h2>

        {/* Service Category: Fensterreparatur */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Fensterreparatur</h3>
          <p className="mb-4">
            Ein defektes Fenster kann viele Ursachen haben – von altersbedingtem Verschleiß über Einbruchschäden bis hin zu Problemen mit **Beschlägen** oder **Dichtungen**. Unsere Experten analysieren das Problem schnell und präzise und führen die notwendigen **Fensterreparatur**en durch. Wir reparieren Fenster aller Art und Materialien, einschließlich Holz-, Kunststoff- und Aluminiumfenster. Häufige Reparaturen umfassen den Austausch defekter **Beschläge**, die Reparatur von Rahmen, den Austausch von Glasscheiben (auch Isolierglas), die Erneuerung von **Dichtungen** und die Behebung von Klemmproblemen. Eine zeitnahe **Fensterreparatur** ist wichtig, um größere Schäden zu vermeiden und die volle Funktionalität Ihres Fensters wiederherzustellen. Wir verwenden ausschließlich hochwertige Ersatzteile, um eine langanhaltende Lösung zu gewährleisten. Unsere Reparaturdienste sind schnell, effizient und kostengünstig. Wir verstehen, dass ein defektes Fenster ein **Sicherheit**srisiko darstellen kann, daher bieten wir auch Notfallreparaturen an. Vertrauen Sie auf unsere Expertise, um Ihre Fenster wieder in Top-Zustand zu bringen.
          </p>
        </div>

        {/* Service Category: Fensterwartung */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Fensterwartung</h3>
          <p className="mb-4">
            Regelmäßige **Wartung** ist entscheidend für die Langlebigkeit und einwandfreie Funktion Ihrer Fenster. Unsere Wartungsdienste umfassen die Reinigung und Schmierung beweglicher Teile, die Überprüfung und Einstellung von **Beschlägen**, die Kontrolle der **Dichtungen** auf Undichtigkeiten und Verschleiß sowie die Begutachtung des Rahmens und des Glases. Durch regelmäßige **Wartung** können potenzielle Probleme frühzeitig erkannt und behoben werden, bevor sie zu größeren Schäden führen. Dies spart Ihnen langfristig Kosten und sorgt für eine optimale **Energieeffizienz** und **Sicherheit**. Wir erstellen individuelle Wartungspläne, die auf die spezifischen Bedürfnisse Ihrer Fenster zugeschnitten sind. Eine gut gewartete Fensteranlage schützt nicht nur vor Witterungseinflüssen, sondern trägt auch maßgeblich zum Wohnkomfort bei.
          </p>
        </div>

        {/* Service Category: Fenstermontage und -austausch */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Fenstermontage und -austausch</h3>
          <p className="mb-4">
            Ob Neubau oder Renovierung – wir übernehmen die fachgerechte Montage neuer Fenster sowie den Austausch alter Fenster. Wir beraten Sie bei der Auswahl der passenden Fenster, die Ihren Anforderungen an **Energieeffizienz**, Schallschutz, **Sicherheit** und Design entsprechen. Unsere erfahrenen Monteure sorgen für eine präzise und saubere Installation, die alle relevanten Normen und Vorschriften erfüllt. Ein fachgerechter Fensteraustausch kann die **Energieeffizienz** Ihres Hauses erheblich verbessern und Heizkosten senken. Wir arbeiten mit führenden Herstellern zusammen, um Ihnen eine breite Palette hochwertiger Fenster anbieten zu können. Von modernen Kunststofffenstern über klassische Holzfenster bis hin zu robusten Aluminiumfenstern – wir haben die passende Lösung für Sie.
          </p>
        </div>

        {/* Service Category: Sicherheitstechnik für Fenster */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Sicherheitstechnik für Fenster</h3>
          <p className="mb-4">
            Die **Sicherheit** Ihrer Fenster ist uns ein wichtiges Anliegen. Wir bieten Nachrüstlösungen zur Erhöhung des Einbruchschutzes Ihrer bestehenden Fenster. Dazu gehören die Montage von **Sicherheit**sbeschlägen, abschließbaren Fenstergriffen, Zusatzschlössern und einbruchhemmendem Glas. Wir beraten Sie individuell zu den besten **Sicherheit**smaßnahmen für Ihre spezifische Situation und führen die Installation fachgerecht durch. Ein effektiver Einbruchschutz schreckt potenzielle Täter ab und gibt Ihnen ein Gefühl der **Sicherheit** in Ihrem Zuhause. Wir sind stets auf dem neuesten Stand der **Sicherheit**stechnik und bieten Lösungen, die den aktuellen Empfehlungen der Polizei entsprechen.
          </p>
        </div>

        {/* Service Category: Rollladen- und Jalousienreparatur */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Rollladen- und Jalousienreparatur</h3>
          <p className="mb-4">
            Neben Fenstern kümmern wir uns auch um die **Reparatur** und **Wartung** von Rollläden und Jalousien. Ob ein defekter Gurt, ein klemmender Mechanismus oder beschädigte Lamellen – wir beheben das Problem schnell und zuverlässig. Funktionierende Rollläden und Jalousien tragen nicht nur zum Sicht- und Sonnenschutz bei, sondern auch zur Wärmedämmung und **Sicherheit**.
          </p>
        </div>

        {/* Service Category: Glasreparatur und -austausch */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Glasreparatur und -austausch</h3>
          <p className="mb-4">
            Beschädigtes Glas ist nicht nur ein ästhetisches Problem, sondern kann auch die **Energieeffizienz** und **Sicherheit** Ihres Fensters beeinträchtigen. Wir tauschen beschädigte oder gesprungene Glasscheiben schnell und professionell aus. Wir arbeiten mit verschiedenen Glasarten, einschließlich Isolierglas, **Sicherheit**sglas und Schallschutzglas.
          </p>
        </div>
      </section>

      {/* Section 3: Why Choose Us for Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Warum Sie sich für unseren Fensterservice entscheiden sollten</h2>
        <ul className="list-disc list-inside mb-8">
          <li className="mb-2"><strong>Erfahrung und Expertise:</strong> Unser Team verfügt über langjährige Erfahrung im Bereich Fensterservice und ist bestens geschult.</li>
          <li className="mb-2"><strong>Qualität:</strong> Wir verwenden ausschließlich hochwertige Materialien und Ersatzteile.</li>
          <li className="mb-2"><strong>Zuverlässigkeit:</strong> Wir halten Termine ein und arbeiten effizient.</li>
          <li className="mb-2"><strong>Kundenzufriedenheit:</strong> Die Zufriedenheit unserer Kunden steht für uns an erster Stelle.</li>
          <li className="mb-2"><strong>Regionale Nähe:</strong> Als lokales Unternehmen sind wir schnell in Tulln, Wien und Niederösterreich vor Ort.</li>
          <li className="mb-2"><strong>Umfassendes Leistungsangebot:</strong> Wir bieten alle Dienstleistungen rund um das Fenster aus einer Hand.</li>
        </ul>
      </section>

      {/* Section 4: Call to Action */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Bereit für erstklassigen Fensterservice?</h2>
          <p className="text-xl mb-8">Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Termin.</p>
          <a href="/kontakt" className="bg-white text-brand text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 inline-block">
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}