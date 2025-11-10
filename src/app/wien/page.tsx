import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function WienServicePage() {
  return (
    <>
      <Head>
        <title>Fensterservice Wien & Fensterreparatur Wien - Ihr Experte in der Hauptstadt</title>
        <meta name="description" content="Ihr zuverlässiger Partner für professionellen Fensterservice und schnelle Fensterreparatur in Wien. Umfassende Lösungen für alle Fensterprobleme in der österreichischen Hauptstadt." />
      </Head>
      <main className="pt-20">
        {/* Hero Section mit modernem Gradient */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Fensterservice Wien
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                Ihr Spezialist für Fensterreparatur und Wartung in der Hauptstadt
              </p>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-700 font-medium">Schneller Service in allen Wiener Bezirken</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section mit modernem Card-Design */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ihr Experte für Fenster in Wien</h2>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Willkommen bei Ihrem lokalen Experten für <span className="font-semibold text-blue-600">Fensterservice Wien</span> und <span className="font-semibold text-blue-600">Fensterreparatur Wien</span>. In der pulsierenden Metropole Wien sind Fenster mehr als nur Lichtquellen; sie sind ein wesentlicher Bestandteil des Wohnkomforts, der Energieeffizienz und der Sicherheit.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Historische Altbaufenster</h3>
                      <p className="text-gray-600 text-sm">Fachgerechte Instandsetzung klassischer Wiener Fenster</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Moderne Isolierglasfenster</h3>
                      <p className="text-gray-600 text-sm">Effiziente Reparatur und Wartung zeitgemäßer Systeme</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Schnelle Hilfe</h3>
                      <p className="text-gray-600 text-sm">Zuverlässige Lösungen in allen Wiener Bezirken</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modernes Image mit Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
              <Image src="/Images/Fensterservice Wien.webp" alt="Fensterservice in Wien" width={1200} height={600} className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Professionelle Fensterlösungen für Wien</h3>
                <p className="text-lg opacity-90">Vertrauen Sie auf unsere Expertise für alle Fensteranforderungen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fensterreparatur Section mit modernem Design */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fensterreparatur Wien</h2>
                <p className="text-xl text-gray-600">Schnelle Hilfe bei Defekten aller Art</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Ein defektes Fenster kann viele Ursachen haben: ein klemmender Mechanismus, eine beschädigte Dichtung, ein Riss im Glas oder Probleme mit dem Rahmen. Solche Schäden beeinträchtigen nicht nur die Funktionalität, sondern können auch zu Wärmeverlust, Zugluft, erhöhtem Lärmpegel und verminderter Sicherheit führen. Unsere <span className="font-semibold text-blue-600">Fensterreparatur Wien</span> Dienstleistung ist darauf spezialisiert, solche Probleme schnell und effizient zu beheben.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Klemmende oder schwergängige Fenster",
                      description: "Oft liegt das Problem an verschmutzten oder falsch eingestellten Beschlägen. Wir reinigen, schmieren und justieren Ihre Fensterbeschläge professionell."
                    },
                    {
                      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Undichte Fenster",
                      description: "Veraltete oder beschädigte Dichtungen sind eine Hauptursache für Wärmeverlust und Zugluft. Wir tauschen Dichtungen schnell und effektiv aus."
                    },
                    {
                      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                      title: "Defekte Fenstergriffe oder -mechanismen",
                      description: "Ein kaputter Griff oder Mechanismus macht das Öffnen und Schließen des Fensters unmöglich. Wir ersetzen oder reparieren defekte Teile."
                    },
                    {
                      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                      title: "Beschädigtes Glas",
                      description: "Ob einfacher Riss oder Bruch, wir kümmern uns um den fachgerechten Austausch von Einfach- oder Isolierglas."
                    },
                    {
                      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                      title: "Probleme mit dem Fensterrahmen",
                      description: "Risse, Verformungen oder Fäulnis (bei Holzfenstern) können die Stabilität beeinträchtigen. Wir führen notwendige Reparaturen am Rahmen durch."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fensterservice Section mit modernem Design */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Umfassender Fensterservice in Wien</h2>
                <p className="text-xl text-gray-600">Prävention statt Reparatur für langlebige Fenster</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    Neben der akuten Reparatur ist der regelmäßige <span className="font-semibold text-white">Fensterservice Wien</span> entscheidend für die Langlebigkeit und optimale Funktion Ihrer Fenster. Unser Service umfasst eine gründliche Inspektion, Wartung und Einstellung Ihrer Fenster.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                        title: "Inspektion",
                        description: "Überprüfung aller Fensterkomponenten auf Verschleiß und Beschädigungen"
                      },
                      {
                        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                        title: "Reinigung und Schmierung",
                        description: "Säuberung und Pflege der beweglichen Teile und Beschläge"
                      },
                      {
                        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                        title: "Einstellung",
                        description: "Justierung von Flügel und Rahmen für optimale Dichtheit"
                      },
                      {
                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                        title: "Dichtungsprüfung",
                        description: "Überprüfung des Zustands der Dichtungen und Austausch bei Bedarf"
                      },
                      {
                        icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "Beratung",
                        description: "Empfehlungen zur Pflege und möglichen Modernisierungen"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-white">{item.title}</h3>
                        </div>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                    <p className="text-white text-center">
                      Ein gut gewartetes Fenster spart Energie, schützt vor Lärm und Einbruch und trägt maßgeblich zum Wohnkomfort bei.
                      Investieren Sie in den regelmäßigen <span className="font-semibold">Fensterservice Wien</span>, um teure Reparaturen in der Zukunft zu vermeiden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "Warum uns wählen?" Section mit modernem Design */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Warum uns für Ihren Fensterservice in Wien wählen?</h2>
                <p className="text-xl text-gray-600">Ihr vertrauenswürdiger Partner für alle Fensteranliegen</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Lokale Expertise", description: "Wir kennen die Besonderheiten des Wiener Immobilienmarktes und die gängigen Fenstertypen." },
                  { title: "Schnelle Reaktionszeit", description: "Bei Notfällen sind wir schnell vor Ort, um Schäden zu beheben." },
                  { title: "Erfahrene Techniker", description: "Unser Team besteht aus qualifizierten Fachkräften mit langjähriger Erfahrung." },
                  { title: "Qualität und Zuverlässigkeit", description: "Wir verwenden hochwertige Materialien und garantieren eine sorgfältige Ausführung." },
                  { title: "Umfassendes Leistungsangebot", description: "Von der kleinen Reparatur bis zur umfassenden Wartung bieten wir alles aus einer Hand." },
                  { title: "Faire Preise", description: "Transparente Kostenkalkulation ohne versteckte Gebühren." }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="font-bold text-xl text-blue-600 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Altbau und Neubau Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Fensterservice für Altbau und Neubau</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Wien ist bekannt für seine prächtigen Altbauten mit oft historischen Kastenfenstern. Diese Fenster haben ihren eigenen Charme, erfordern aber auch spezielle Kenntnisse bei Wartung und Reparatur. Gleichzeitig gibt es in Wien viele moderne Neubauten mit energieeffizienten Fenstersystemen. Unser Team ist bestens geschult im Umgang mit beiden Fenstertypen. Wir bieten maßgeschneiderte Lösungen, die den spezifischen Anforderungen Ihres Gebäudes und Ihrer Fenster gerecht werden. Ob es um die Instandsetzung historischer Beschläge im Altbau geht oder um die Justierung komplexer Mechanismen in modernen Fenstern – wir sind Ihr kompetenter Ansprechpartner für <span className="font-semibold text-blue-600">Fensterservice Wien</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Nachhaltigkeit Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Nachhaltigkeit und Energieeffizienz</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Undichte Fenster sind eine der Hauptursachen für Energieverlust. Durch eine professionelle <span className="font-semibold text-blue-600">Fensterreparatur</span> und regelmäßigen <span className="font-semibold text-blue-600">Fensterservice</span> verbessern Sie die Energieeffizienz, sparen Kosten und schonen die Umwelt.
              </p>
              <Link href="/kontakt" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Jetzt Beratung anfordern
              </Link>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns für Ihren Fensterservice in Wien</h2>
              <p className="text-lg text-gray-700 mb-8">
                Haben Sie Probleme mit Ihren Fenstern? Zögern Sie nicht, uns zu kontaktieren. Unser freundliches Team berät Sie gerne und vereinbart schnellstmöglich einen Termin.
              </p>
              <p className="text-gray-600">
                Erfahren Sie mehr über unser gesamtes Leistungsangebot auf unserer <Link href="/" className="text-blue-600 hover:underline font-semibold">Startseite</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
