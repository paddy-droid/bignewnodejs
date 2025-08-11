import Head from 'next/head';
import Image from 'next/image';
import Contact from "@/components/Contact";
import ServiceTable from '@/components/ServiceTable';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const ServiceCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-blue-800">{title}</h3>
    <div className="text-gray-600 space-y-4">
      {children}
    </div>
  </div>
);

export default function LeistungenPage() {
  return (
    <>
      <Head>
        <title>Unsere Leistungen - Fensterservice & Fensterreparatur Wien, NÖ, Tulln</title>
        <meta name="description" content="Umfassender Fensterservice & Fensterreparatur in Wien, NÖ & Tulln. Wartung, Montage, Sicherheitstechnik, Sonnenschutzfolien und Raffstore Textband tausch. Qualität & Zuverlässigkeit für Ihre Fenster." />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center text-white flex items-center" style={{ backgroundImage: "url('/Images/rowo-fensterservice-titelbild.jpeg')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Unsere umfassenden Fensterservices</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Ihr Experte für Reparatur, Wartung und Sicherheit in Tulln, Wien und ganz Niederösterreich.</p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Jetzt unverbindlich anfragen
              </Button>
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Qualität und Zuverlässigkeit bei jedem Auftrag</h2>
                <p className="text-gray-700 mb-4">
                  Willkommen bei Ihrem Experten für <strong>Fensterservice</strong> in <strong>Tulln</strong>, <strong>Wien</strong> und ganz <strong>Niederösterreich</strong>. Wir bieten ein breites Spektrum an Dienstleistungen rund um Ihr Fenster, von der professionellen <strong>Fensterreparatur</strong> über die sorgfältige <strong>Wartung</strong> bis hin zur fachgerechten Montage neuer Fenster. Unser Ziel ist es, die Funktionalität, <strong>Sicherheit</strong> und <strong>Energieeffizienz</strong> Ihrer Fenster langfristig zu gewährleisten.
                </p>
                <p className="text-gray-700">
                  Ein Fenster ist mehr als nur eine Öffnung; es ist ein komplexes Bauelement, das Schutz vor Witterung bietet, zur <strong>Energieeffizienz</strong> Ihres Hauses beiträgt und Schall isoliert. Verschleiß oder mangelnde Wartung können zu höheren Heizkosten, Zugluft und einem erhöhten <strong>Sicherheitsrisiko</strong> führen. Unser umfassendes Serviceangebot stellt sicher, dass Ihre Fenster optimal funktionieren.
                </p>
              </div>
              <div>
                <Image src="/Images/Leistungen Fenstervice und Reparatur Tulln Niederösterreich.jpg" alt="Leistungen Fensterservice und Reparatur" width={800} height={600} className="w-full h-auto rounded-lg shadow-xl"/>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Detaillierte Leistungen im Überblick</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard title="Fensterreparatur">
                        <p>Ein defektes Fenster kann viele Ursachen haben. Unsere Experten analysieren das Problem schnell und präzise und führen die notwendigen Reparaturen an Holz-, Kunststoff- und Aluminiumfenstern durch. Wir tauschen defekte Beschläge, reparieren Rahmen, erneuern Dichtungen und beheben Klemmprobleme.</p>
                    </ServiceCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-1 md:col-span-2 lg:col-span-3">
                        <div className="md:col-span-1">
                             <ServiceCard title="Dichtungstausch">
                                <p>Poröse oder beschädigte Dichtungen sind eine der Hauptursachen für Zugluft, Energieverlust und sogar Feuchtigkeitsprobleme. Wir bieten einen professionellen Dichtungstausch für alle gängigen Fenstertypen an. Dabei verwenden wir hochwertige, langlebige Materialien, die eine optimale Abdichtung gewährleisten und die Energieeffizienz Ihres Zuhauses nachhaltig verbessern.</p>
                            </ServiceCard>
                        </div>
                        <div className="md:col-span-1 grid grid-cols-1 gap-4">
                            <Image src="/images/dichtungstausch-fenster.webp" alt="Dichtungstausch bei Fenstern" width={400} height={300} className="w-full h-auto rounded-lg shadow-xl"/>
                            <Image src="/images/fenster-dichtungen-tauschen.webp" alt="Professioneller Tausch von Fensterdichtungen" width={400} height={300} className="w-full h-auto rounded-lg shadow-xl"/>
                        </div>
                    </div>

                    <ServiceCard title="Fensterwartung">
                        <p>Regelmäßige Wartung ist entscheidend für die Langlebigkeit Ihrer Fenster. Unsere Dienste umfassen Reinigung, Schmierung, Einstellung der Beschläge und die Kontrolle der Dichtungen, um potenzielle Probleme frühzeitig zu erkennen und Kosten zu sparen.</p>
                    </ServiceCard>
                    <ServiceCard title="Fenstermontage und -austausch">
                        <p>Ob Neubau oder Renovierung – wir übernehmen die fachgerechte Montage neuer sowie den Austausch alter Fenster. Wir beraten Sie bei der Auswahl und sorgen für eine präzise Installation, um die Energieeffizienz Ihres Hauses zu verbessern.</p>
                    </ServiceCard>
                    <ServiceCard title="Sicherheitstechnik für Fenster">
                        <p>Wir bieten Nachrüstlösungen zur Erhöhung des Einbruchschutzes wie Sicherheitsbeschläge, abschließbare Griffe und einbruchhemmendes Glas. Wir beraten Sie individuell zu den besten Sicherheitsmaßnahmen für Ihr Zuhause.</p>
                    </ServiceCard>
                    <ServiceCard title="Rollladen- & Jalousienreparatur">
                        <p>Neben Fenstern kümmern wir uns auch um die Reparatur und Wartung von Rollläden und Jalousien. Ob ein defekter Gurt, ein klemmender Mechanismus oder beschädigte Lamellen – wir beheben das Problem schnell und zuverlässig.</p>
                    </ServiceCard>
                    <ServiceCard title="Glasreparatur und -austausch">
                        <p>Beschädigtes Glas ist ein Sicherheits- und Effizienzproblem. Wir tauschen gesprungene Scheiben schnell und professionell aus und arbeiten mit Isolier-, Sicherheits- und Schallschutzglas.</p>
                    </ServiceCard>
                    <ServiceCard title="Sonnenschutzfolien montage">
                        <p>Schützen Sie Ihre Räume vor übermäßiger Sonneneinstrahlung und Hitze. Wir montieren hochwertige Sonnenschutzfolien, die nicht nur den Komfort erhöhen, sondern auch zur Energieeinsparung beitragen.</p>
                    </ServiceCard>
                    <ServiceCard title="Raffstore Textband tausch">
                        <p>Ein gerissenes oder abgenutztes Textband kann die Funktion Ihres Raffstores beeinträchtigen. Wir tauschen die Textbänder fachgerecht aus, damit Ihr Sonnenschutz wieder einwandfrei funktioniert.</p>
                    </ServiceCard>
                </div>
            </div>
        </section>

        {/* Service Table Section */}
        <ServiceTable />

        
        {/* Why Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Warum Sie sich für unseren Fensterservice entscheiden sollten</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Erfahrung und Expertise</h3>
                    <p className="text-gray-600">Unser Team verfügt über langjährige Erfahrung und ist bestens geschult.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Qualität</h3>
                    <p className="text-gray-600">Wir verwenden ausschließlich hochwertige Materialien und Ersatzteile.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Zuverlässigkeit</h3>
                    <p className="text-gray-600">Wir halten Termine ein und arbeiten effizient, um Ihr Problem schnell zu lösen.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Kundenzufriedenheit</h3>
                    <p className="text-gray-600">Die Zufriedenheit unserer Kunden steht für uns an erster Stelle.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Regionale Nähe</h3>
                    <p className="text-gray-600">Als lokales Unternehmen sind wir schnell in Tulln, Wien und NÖ vor Ort.</p>
                </div>
                 <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Umfassendes Angebot</h3>
                    <p className="text-gray-600">Wir bieten alle Dienstleistungen rund um das Fenster aus einer Hand.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-blue-800 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Bereit für erstklassigen Fensterservice?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Zögern Sie nicht und kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Termin.</p>
            <Link href="/kontakt">
              <Button size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-gray-200">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}