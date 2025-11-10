import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function StPoeltenServicePage() {
  return (
    <>
      <Head>
        <title>Fensterservice St. Pölten & Fensterreparatur St. Pölten - Ihr lokaler Experte</title>
        <meta name="description" content="Ihr zuverlässiger Partner für professionellen Fensterservice und schnelle Fensterreparatur in St. Pölten und Umgebung. Umfassende Lösungen für alle Fensterprobleme in Niederösterreichs Landeshauptstadt." />
      </Head>
      <main className="pt-20">
        {/* Hero Section mit modernem Gradient */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Fensterservice St. Pölten
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                Ihr Spezialist für Fensterreparatur und Wartung in der Landeshauptstadt
              </p>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-700 font-medium">Schneller Service in St. Pölten und Umgebung</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section mit modernem Card-Design */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ihr Experte für Fenster in St. Pölten</h2>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Willkommen bei Ihrem lokalen Experten für <span className="font-semibold text-blue-600">Fensterservice St. Pölten</span> und <span className="font-semibold text-blue-600">Fensterreparatur St. Pölten</span>. Als Landeshauptstadt Niederösterreichs vereint St. Pölten historische Bausubstanz mit moderner Architektur. Fenster spielen in beiden Fällen eine entscheidende Rolle für das Wohlbefinden, die Energiebilanz und die Sicherheit Ihres Zuhauses oder Geschäfts.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Historische Bausubstanz</h3>
                      <p className="text-gray-600 text-sm">Fachgerechte Instandsetzung klassischer Fenster</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Moderne Architektur</h3>
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
                      <p className="text-gray-600 text-sm">Zuverlässige Lösungen in St. Pölten und Umgebung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modernes Image mit Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
              <Image src="/Images/Fensterservice St. Pölten.webp" alt="Fensterservice in St. Pölten" width={1200} height={600} className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Professionelle Fensterlösungen für St. Pölten</h3>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fensterreparatur St. Pölten</h2>
                <p className="text-xl text-gray-600">Schnelle und professionelle Hilfe bei Defekten</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Ein defektes Fenster kann schnell zum Ärgernis werden. Klemmende Beschläge, undichte Stellen, ein beschädigter Rahmen oder ein Sprung im Glas mindern nicht nur den Wohnkomfort, sondern können auch zu erhöhten Heizkosten, Zugluft, Lärmbelästigung und einem Sicherheitsrisiko führen. Unsere <span className="font-semibold text-blue-600">Fensterreparatur St. Pölten</span> bietet schnelle und effektive Lösungen für alle Arten von Fensterschäden.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Schwergängige oder klemmende Fensterflügel",
                      description: "Oft sind verschmutzte, verharzte oder falsch eingestellte Beschläge die Ursache. Wir reinigen, schmieren und justieren Ihre Beschläge professionell."
                    },
                    {
                      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                      title: "Undichte Fenster und Zugluft",
                      description: "Beschädigte oder poröse Dichtungen führen zu Wärmeverlust und unangenehmer Zugluft. Wir tauschen alte Dichtungen schnell und effizient aus."
                    },
                    {
                      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                      title: "Defekte Fenstergriffe oder Getriebe",
                      description: "Ein kaputter Griff oder ein defektes Getriebe machen die Bedienung des Fensters unmöglich. Wir ersetzen oder reparieren defekte Mechanismen."
                    },
                    {
                      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                      title: "Glasschäden",
                      description: "Ob einfacher Riss, Bruch oder beschädigte Isolierverglasung – wir kümmern uns um den fachgerechten Austausch des Glases."
                    },
                    {
                      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                      title: "Probleme mit dem Fensterrahmen",
                      description: "Risse, Verformungen oder Feuchtigkeitsschäden können die Stabilität und Dichtheit beeinträchtigen. Wir führen notwendige Reparaturen am Rahmen durch."
                    },
                    {
                      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                      title: "Einbruchschäden",
                      description: "Nach einem Einbruch reparieren wir beschädigte Fenster und können auf Wunsch auch Maßnahmen zur Erhöhung der Einbruchsicherheit empfehlen."
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Umfassender Fensterservice in St. Pölten</h2>
                <p className="text-xl text-gray-600">Pflege und Wartung für langlebige Fenster</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    Neben der akuten Reparatur ist die regelmäßige Wartung Ihrer Fenster entscheidend für deren Langlebigkeit, Funktionalität und Werterhalt. Unser <span className="font-semibold text-white">Fensterservice St. Pölten</span> bietet Ihnen ein umfassendes Paket zur Pflege und Instandhaltung Ihrer Fenster.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                        title: "Gründliche Inspektion",
                        description: "Überprüfung aller relevanten Bauteile auf Verschleiß, Beschädigungen und korrekte Funktion."
                      },
                      {
                        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                        title: "Reinigung und Schmierung",
                        description: "Sorgfältige Reinigung und Schmierung der Beschläge für eine reibungslose Bedienung."
                      },
                      {
                        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                        title: "Einstellung von Flügel und Rahmen",
                        description: "Präzise Justierung für eine optimale Passform und Dichtheit."
                      },
                      {
                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                        title: "Prüfung und Austausch von Dichtungen",
                        description: "Austausch alter Dichtungen, um Wärmeverlust und Zugluft zu verhindern."
                      },
                      {
                        icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "Beratung zu Pflege und Optimierung",
                        description: "Wertvolle Tipps zur richtigen Pflege und Verbesserung Ihrer Fenster."
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
                      Regelmäßiger <span className="font-semibold">Fensterservice St. Pölten</span> ist eine Investition, die sich auszahlt. Er verlängert die Lebensdauer Ihrer Fenster, verbessert den Wohnkomfort und senkt Energiekosten.
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ihr vertrauenswürdiger Partner in St. Pölten</h2>
                <p className="text-xl text-gray-600">Unsere Stärken, die uns zum idealen Partner machen</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Lokale Präsenz", description: "Wir sind in St. Pölten und der Region verwurzelt und kennen die lokalen Gegebenheiten." },
                  { title: "Schnelle Reaktionszeiten", description: "Bei Notfällen sind wir schnell zur Stelle, um Ihnen zu helfen." },
                  { title: "Qualifiziertes Team", description: "Unsere Techniker sind bestens ausgebildet und verfügen über langjährige Erfahrung." },
                  { title: "Hohe Qualitätsstandards", description: "Wir verwenden ausschließlich hochwertige Materialien und Ersatzteile." },
                  { title: "Umfassendes Leistungsportfolio", description: "Wir bieten alle Leistungen rund ums Fenster aus einer Hand." },
                  { title: "Transparente und faire Preise", description: "Wir erstellen detaillierte, nachvollziehbare Angebote ohne versteckte Kosten." }
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

        {/* Fensterarten Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Service für alle Fensterarten in St. Pölten</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In St. Pölten finden sich Fenster aus den unterschiedlichsten Epochen und Materialien. Unser Team ist bestens geschult im Umgang mit der Vielfalt der Fenstersysteme. Wir bieten professionellen <span className="font-semibold text-blue-600">Fensterservice</span> und <span className="font-semibold text-blue-600">Fensterreparatur</span> für:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {["Holzfenster", "Kunststofffenster", "Aluminiumfenster", "Holz-Alu-Fenster", "Altbaufenster", "Isolierglasfenster"].map((type, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nachhaltigkeit Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Energieeffizienz steigern und Kosten senken</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Durch einen professionellen <span className="font-semibold text-blue-600">Fensterservice</span> und gezielte <span className="font-semibold text-blue-600">Fensterreparatur</span> können Sie die Energiebilanz Ihres Zuhauses oder Geschäfts erheblich verbessern, Heizkosten sparen und einen Beitrag zum Klimaschutz leisten.
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
              <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns für Ihren Fensterservice in St. Pölten</h2>
              <p className="text-lg text-gray-700 mb-8">
                Haben Sie Fragen oder benötigen Sie eine schnelle Reparatur? Zögern Sie nicht, uns zu kontaktieren. Unser freundliches Team steht Ihnen gerne zur Verfügung.
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