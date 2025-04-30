import Head from 'next/head';
import Contact from "@/components/Contact";

export default function LeistungenPage() {
  return (
    <>
      <Head>
        <title>Unsere Leistungen - Fensterservice & Fensterreparatur Wien, NÖ, Tulln</title>
        <meta name="description" content="Umfassender Fensterservice & Fensterreparatur in Wien, NÖ & Tulln. Wartung, Montage, Sicherheitstechnik. Qualität & Zuverlässigkeit für Ihre Fenster." />
      </Head>
      <main className="pt-20"> {/* Added padding top to prevent content from being hidden by fixed header */}
      {/* Section 1: Introduction to Services */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Unsere umfassenden Fensterservices in Tulln, Wien und Niederösterreich</h1>
        <p className="mb-4">
          Willkommen bei Ihrem Experten für <strong>Fensterservice</strong> in <strong>Tulln</strong>, <strong>Wien</strong> und ganz <strong>Niederösterreich</strong>. Wir bieten ein breites Spektrum an Dienstleistungen rund um Ihr Fenster, von der professionellen <strong>Fensterreparatur</strong> über die sorgfältige <strong>Wartung</strong> bis hin zur fachgerechten Montage neuer Fenster. Unser Ziel ist es, die Funktionalität, <strong>Sicherheit</strong> und <strong>Energieeffizienz</strong> Ihrer Fenster langfristig zu gewährleisten. Mit jahrelanger Erfahrung und einem Team aus qualifizierten Fachkräften sind wir Ihr zuverlässiger Partner für alle Anliegen rund um das Fenster. Egal ob es sich um ein kleines Problem oder ein umfangreiches Projekt handelt, wir stehen Ihnen mit Rat und Tat zur Seite. Wir legen Wert auf <strong>Qualität</strong> und <strong>Zuverlässigkeit</strong> bei jedem Auftrag.
        </p>
        <p className="mb-4">
          Ein Fenster ist mehr als nur eine Öffnung in der Wand; es ist ein komplexes Bauelement, das Schutz vor Witterung bietet, zur <strong>Energieeffizienz</strong> Ihres Hauses beiträgt, Schall isoliert und nicht zuletzt das Erscheinungsbild Ihrer Immobilie prägt. Daher ist es unerlässlich, dass Fenster stets in einwandfreiem Zustand sind. Verschleiß, Beschädigungen oder mangelnde <strong>Wartung</strong> können nicht nur die Funktionalität beeinträchtigen, sondern auch zu höheren Heizkosten, Zugluft, Lärmbelästigung und einem erhöhten <strong>Sicherheit</strong>srisiko führen. Unser umfassendes Serviceangebot deckt alle Aspekte ab, um sicherzustellen, dass Ihre Fenster optimal funktionieren und ihren Wert langfristig erhalten. Wir bieten schnelle und effiziente Lösungen für alle Arten von Fensterproblemen.
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
            Ein defektes Fenster kann viele Ursachen haben – von altersbedingtem Verschleiß über Einbruchschäden bis hin zu Problemen mit <strong>Beschlägen</strong> oder <strong>Dichtungen</strong>. Unsere Experten analysieren das Problem schnell und präzise und führen die notwendigen <strong>Fensterreparatur</strong>en durch. Wir reparieren Fenster aller Art und Materialien, einschließlich Holz-, Kunststoff- und Aluminiumfenster. Häufige Reparaturen umfassen den Austausch defekter <strong>Beschläge</strong>, die Reparatur von Rahmen, den Austausch von Glasscheiben (auch Isolierglas), die Erneuerung von <strong>Dichtungen</strong> und die Behebung von Klemmproblemen. Eine zeitnahe <strong>Fensterreparatur</strong> ist wichtig, um größere Schäden zu vermeiden und die volle Funktionalität Ihres Fensters wiederherzustellen. Wir verwenden ausschließlich hochwertige Ersatzteile, um eine langanhaltende Lösung zu gewährleisten. Unsere Reparaturdienste sind schnell, effizient und kostengünstig. Wir verstehen, dass ein defektes Fenster ein <strong>Sicherheit</strong>srisiko darstellen kann, daher bieten wir auch Notfallreparaturen an. Vertrauen Sie auf unsere Expertise, um Ihre Fenster wieder in Top-Zustand zu bringen.
          </p>
        </div>

        {/* Service Category: Fensterwartung */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Fensterwartung</h3>
          <p className="mb-4">
            Regelmäßige <strong>Wartung</strong> ist entscheidend für die Langlebigkeit und einwandfreie Funktion Ihrer Fenster. Unsere Wartungsdienste umfassen die Reinigung und Schmierung beweglicher Teile, die Überprüfung und Einstellung von <strong>Beschlägen</strong>, die Kontrolle der <strong>Dichtungen</strong> auf Undichtigkeiten und Verschleiß sowie die Begutachtung des Rahmens und des Glases. Durch regelmäßige <strong>Wartung</strong> können potenzielle Probleme frühzeitig erkannt und behoben werden, bevor sie zu größeren Schäden führen. Dies spart Ihnen langfristig Kosten und sorgt für eine optimale <strong>Energieeffizienz</strong> und <strong>Sicherheit</strong>. Wir erstellen individuelle Wartungspläne, die auf die spezifischen Bedürfnisse Ihrer Fenster zugeschnitten sind. Eine gut gewartete Fensteranlage schützt nicht nur vor Witterungseinflüssen, sondern trägt auch maßgeblich zum Wohnkomfort bei.
          </p>
        </div>

        {/* Service Category: Fenstermontage und -austausch */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Fenstermontage und -austausch</h3>
          <p className="mb-4">
            Ob Neubau oder Renovierung – wir übernehmen die fachgerechte Montage neuer Fenster sowie den Austausch alter Fenster. Wir beraten Sie bei der Auswahl der passenden Fenster, die Ihren Anforderungen an <strong>Energieeffizienz</strong>, Schallschutz, <strong>Sicherheit</strong> und Design entsprechen. Unsere erfahrenen Monteure sorgen für eine präzise und saubere Installation, die alle relevanten Normen und Vorschriften erfüllt. Ein fachgerechter Fensteraustausch kann die <strong>Energieeffizienz</strong> Ihres Hauses erheblich verbessern und Heizkosten senken. Wir arbeiten mit führenden Herstellern zusammen, um Ihnen eine breite Palette hochwertiger Fenster anbieten zu können. Von modernen Kunststofffenstern über klassische Holzfenster bis hin zu robusten Aluminiumfenstern – wir haben die passende Lösung für Sie.
          </p>
        </div>

        {/* Service Category: Sicherheitstechnik für Fenster */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Sicherheitstechnik für Fenster</h3>
          <p className="mb-4">
            Die <strong>Sicherheit</strong> Ihrer Fenster ist uns ein wichtiges Anliegen. Wir bieten Nachrüstlösungen zur Erhöhung des Einbruchschutzes Ihrer bestehenden Fenster. Dazu gehören die Montage von <strong>Sicherheit</strong>sbeschlägen, abschließbaren Fenstergriffen, Zusatzschlössern und einbruchhemmendem Glas. Wir beraten Sie individuell zu den besten <strong>Sicherheit</strong>smaßnahmen für Ihre spezifische Situation und führen die Installation fachgerecht durch. Ein effektiver Einbruchschutz schreckt potenzielle Täter ab und gibt Ihnen ein Gefühl der <strong>Sicherheit</strong> in Ihrem Zuhause. Wir sind stets auf dem neuesten Stand der <strong>Sicherheit</strong>stechnik und bieten Lösungen, die den aktuellen Empfehlungen der Polizei entsprechen.
          </p>
        </div>

        {/* Service Category: Rollladen- und Jalousienreparatur */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Rollladen- und Jalousienreparatur</h3>
          <p className="mb-4">
            Neben Fenstern kümmern wir uns auch um die <strong>Reparatur</strong> und <strong>Wartung</strong> von Rollläden und Jalousien. Ob ein defekter Gurt, ein klemmender Mechanismus oder beschädigte Lamellen – wir beheben das Problem schnell und zuverlässig. Funktionierende Rollläden und Jalousien tragen nicht nur zum Sicht- und Sonnenschutz bei, sondern auch zur Wärmedämmung und <strong>Sicherheit</strong>.
          </p>
        </div>

        {/* Service Category: Glasreparatur und -austausch */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Glasreparatur und -austausch</h3>
          <p className="mb-4">
            Beschädigtes Glas ist nicht nur ein ästhetisches Problem, sondern kann auch die <strong>Energieeffizienz</strong> und <strong>Sicherheit</strong> Ihres Fensters beeinträchtigen. Wir tauschen beschädigte oder gesprungene Glasscheiben schnell und professionell aus. Wir arbeiten mit verschiedenen Glasarten, einschließlich Isolierglas, <strong>Sicherheit</strong>sglas und Schallschutzglas.
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
      {/* Section 4: Call to Action */}
      <section className="bg-brand text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">Bereit für erstklassigen Fensterservice?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-black">Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Termin.</p>
          <a href="/kontakt" className="bg-brand text-white hover:bg-gray-200 transition-colors duration-300 inline-block text-lg font-semibold px-10 py-5 rounded-lg shadow-lg" style={{ backgroundColor: '#0A3D62', color: '#FFFFFF' }}>
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