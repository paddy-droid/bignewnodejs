import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function TullnServicePage() {
  return (
    <>
      <Head>
        <title>Fensterservice Tulln & Fensterreparatur Tulln - Ihr lokaler Experte</title>
        <meta name="description" content="Ihr zuverlässiger Partner für professionellen Fensterservice und schnelle Fensterreparatur in Tulln und Umgebung. Umfassende Lösungen für alle Fensterprobleme in der Region Tulln." />
      </Head>
      <main className="pt-20">
        {/* Hero Section mit modernem Gradient */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Fensterservice Tulln
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                Ihr Spezialist für Fensterreparatur und Wartung in der Region
              </p>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-700 font-medium">Schneller Service in Tulln und Umgebung</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section mit modernem Card-Design */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ihr Experte für Fenster in Tulln</h2>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Herzlich willkommen bei Ihrem lokalen Experten für <span className="font-semibold text-blue-600">Fensterservice Tulln</span> und <span className="font-semibold text-blue-600">Fensterreparatur Tulln</span>. In der malerischen Region Tulln, bekannt für ihre Lebensqualität und die Nähe zur Natur, spielen Fenster eine entscheidende Rolle für das Wohlbefinden in Ihrem Zuhause oder Geschäft.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Historische Gebäude</h3>
                      <p className="text-gray-600 text-sm">Fachgerechte Instandsetzung klassischer Holzfenster</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Moderne Wohnsiedlungen</h3>
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
                      <p className="text-gray-600 text-sm">Zuverlässige Lösungen in der gesamten Region Tulln</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modernes Image mit Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
              <Image src="/Images/Fensterservice Tulln.webp" alt="Fensterservice in Tulln" width={1200} height={600} className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Professionelle Fensterlösungen für Tulln</h3>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fensterreparatur Tulln</h2>
                <p className="text-xl text-gray-600">Schnelle und effektive Lösungen bei Problemen</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Ein defektes Fenster ist mehr als nur ein Ärgernis. Es kann die Sicherheit Ihres Eigentums gefährden, zu unnötigem Energieverlust führen und den Wohnkomfort erheblich mindern. Unsere <span className="font-semibold text-blue-600">Fensterreparatur Tulln</span> Dienstleistung ist darauf spezialisiert, solche Schäden rasch zu identifizieren und professionell zu beheben.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Schwergängigkeit und Quietschen",
                      description: "Oft verursacht durch mangelnde Schmierung oder Verschmutzung der Beschläge. Wir reinigen, warten und justieren Ihre Fenster für eine leichte Bedienung."
                    },
                    {
                      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Zugluft und Kältebrücken",
                      description: "Ein klares Zeichen für undichte Dichtungen oder einen verzogenen Rahmen. Wir tauschen Dichtungen aus und stellen den Rahmen neu ein."
                    },
                    {
                      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                      title: "Defekte oder lose Griffe",
                      description: "Ein häufiges Problem, das die Bedienung des Fensters erschwert oder unmöglich macht. Wir ersetzen oder reparieren Griffe und zugehörige Mechanismen."
                    },
                    {
                      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                      title: "Beschädigtes oder blindes Glas",
                      description: "Risse, Brüche oder Feuchtigkeit zwischen den Scheiben erfordern einen Glasaustausch. Wir ersetzen das Glas fachgerecht und sicher."
                    },
                    {
                      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                      title: "Probleme mit Rollläden oder Jalousien",
                      description: "Auch wenn es nicht direkt das Fenster betrifft, reparieren wir auch damit verbundene Sonnenschutzsysteme."
                    },
                    {
                      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                      title: "Einbruchschäden",
                      description: "Nach einem Einbruch reparieren wir beschädigte Fenster und können auch Maßnahmen zur Erhöhung der Einbruchsicherheit empfehlen."
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Umfassender Fensterservice in Tulln</h2>
                <p className="text-xl text-gray-600">Langfristige Werterhaltung Ihrer Fenster</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    Regelmäßige Wartung ist der Schlüssel zur Langlebigkeit und optimalen Leistung Ihrer Fenster. Unser <span className="font-semibold text-white">Fensterservice Tulln</span> bietet ein umfassendes Wartungsprogramm, das darauf abzielt, kleine Probleme zu erkennen, bevor sie zu größeren Schäden werden.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                        title: "Gründliche Inspektion",
                        description: "Überprüfung aller beweglichen Teile, Dichtungen, Beschläge und des Rahmens auf Verschleiß."
                      },
                      {
                        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                        title: "Reinigung und Pflege",
                        description: "Entfernung von Schmutz und Ablagerungen sowie Schmierung aller beweglichen Teile."
                      },
                      {
                        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                        title: "Justierung von Flügel und Rahmen",
                        description: "Einstellung der Fensterflügel für eine optimale Passform und Dichtheit."
                      },
                      {
                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                        title: "Überprüfung und Austausch von Dichtungen",
                        description: "Kontrolle und Austausch von porösen, rissigen oder beschädigten Dichtungen."
                      },
                      {
                        icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "Beratung zur optimalen Pflege",
                        description: "Tipps und Empfehlungen, wie Sie Ihre Fenster selbst pflegen können."
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
                      Investieren Sie in den regelmäßigen <span className="font-semibold">Fensterservice Tulln</span>, um die Funktionalität, Sicherheit und Energieeffizienz Ihrer Fenster langfristig zu sichern.
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ihr vertrauenswürdiger Partner für Fenster in Tulln</h2>
                <p className="text-xl text-gray-600">Unsere Stärken, die uns auszeichnen</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Lokale Präsenz", description: "Wir sind in der Region Tulln verwurzelt und schnell bei Ihnen vor Ort." },
                  { title: "Umfassende Erfahrung", description: "Unser Team verfügt über langjährige Erfahrung in der Reparatur und Wartung aller gängigen Fenstertypen." },
                  { title: "Qualifizierte Fachkräfte", description: "Unsere Techniker sind gut ausgebildet und arbeiten nach höchsten Qualitätsstandards." },
                  { title: "Transparente Preise", description: "Wir bieten faire und nachvollziehbare Preise ohne versteckte Kosten." },
                  { title: "Hochwertige Materialien", description: "Wir verwenden ausschließlich qualitative Ersatzteile und Materialien für langlebige Ergebnisse." },
                  { title: "Kundenzufriedenheit", description: "Die Zufriedenheit unserer Kunden steht für uns an erster Stelle." }
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

        {/* Gebäudearten Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Service für vielfältige Gebäude in Tulln</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Die Architektur in Tulln ist vielfältig und reicht von historischen Bauten im Stadtzentrum bis hin zu modernen Einfamilienhäusern und Wohnanlagen. Jede Art von Gebäude stellt spezifische Anforderungen an die Fenster und deren Wartung. Unser Team ist erfahren im Umgang mit dieser Vielfalt und bietet spezialisierte Reparatur- und Restaurierungsdienste für traditionelle Holzfenster sowie professionellen Service für moderne Kunststoff- oder Aluminiumfenster.
              </p>
            </div>
          </div>
        </section>

        {/* Nachhaltigkeit Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Energieeffizienz steigern in Tulln</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Durch eine professionelle <span className="font-semibold text-blue-600">Fensterreparatur</span> und regelmäßigen <span className="font-semibold text-blue-600">Fensterservice</span> können Sie die Energieeffizienz Ihres Zuhauses oder Geschäftsgebäudes deutlich verbessern, Heizkosten sparen und einen Beitrag zum Klimaschutz leisten.
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
              <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns für Ihren Fensterservice in Tulln</h2>
              <p className="text-lg text-gray-700 mb-8">
                Benötigen Sie professionelle Hilfe für Ihre Fenster in Tulln oder der umliegenden Region? Ob es sich um eine dringende Reparatur, eine geplante Wartung oder eine allgemeine Beratung handelt, unser Team steht Ihnen gerne zur Verfügung.
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