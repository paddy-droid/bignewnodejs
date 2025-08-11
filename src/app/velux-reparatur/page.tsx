import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import { CheckCircle, Mail, Phone, Settings, Shield, Wind } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Velux Reparatur & Service | Tulln, St. Pölten & Wien | ROWO",
    description: "Professioneller Velux Service für Dachfenster Reparatur & Dichtungstausch in Tulln, St. Pölten & Wien. Schnelle Hilfe bei undichten Fenstern.",
    keywords: ["Velux Reparatur", "Velux Service", "Dachfenster Reparatur", "Dichtungstausch", "Velux undicht", "Fensterservice", "Tulln", "St. Pölten", "Wien"]
};

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

export default function VeluxReparaturPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-gray-900">
            Velux Dachfenster Service & Reparatur
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ihr zertifizierter Partner für Velux Fensterreparatur, Dichtungstausch und Wartung in <span className="font-semibold">Tulln, St. Pölten und Wien</span>. Schnell, zuverlässig und professionell.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/kontakt">Jetzt kostenloses Angebot anfordern</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Settings className="w-8 h-8" />} title="Professionelle Reparatur">
                Egal ob Glasbruch, ein klemmender Mechanismus oder ein defekter Griff – unsere Experten kennen jede Schraube Ihres Velux Fensters und beheben Schäden schnell und nachhaltig.
            </FeatureCard>
            <FeatureCard icon={<Wind className="w-8 h-8" />} title="Dichtungen tauschen">
                Poröse oder undichte Dichtungen sind die häufigste Ursache für Zugluft und Wärmeverlust. Wir tauschen alte Dichtungen gegen hochwertige neue aus und steigern so Ihre Energieeffizienz.
            </FeatureCard>
            <FeatureCard icon={<Shield className="w-8 h-8" />} title="Regelmäßige Wartung">
                Verlängern Sie die Lebensdauer Ihrer Dachfenster um Jahre. Mit unserer regelmäßigen Wartung beugen Sie teuren Schäden vor und sorgen für eine dauerhaft einwandfreie Funktion.
            </FeatureCard>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ihr Velux Fenster in besten Händen</h2>
                    <p className="text-gray-700 mb-4">
                        Velux Dachfenster stehen für Qualität, Langlebigkeit und Wohnkomfort. Doch auch die besten Fenster sind Witterungseinflüssen und täglicher Beanspruchung ausgesetzt. Mit der Zeit können Probleme wie Undichtigkeiten, schwergängige Mechanik oder nachlassende Dämmleistung auftreten. Genau hier kommen wir ins Spiel. Als spezialisierter Fachbetrieb für Velux Fenster in der Region Tulln, St. Pölten und Wien bieten wir Ihnen einen umfassenden Service, der den Wert und die Funktion Ihrer Dachfenster langfristig sichert.
                    </p>
                     <p className="text-gray-700 mb-6">
                        Wir verstehen, dass ein defektes Dachfenster nicht nur ein Ärgernis ist, sondern auch zu ernsthaften Schäden an der Bausubstanz führen kann. Deshalb legen wir größten Wert auf eine schnelle Reaktionszeit und eine sorgfältige Ausführung aller Arbeiten. Unser Team besteht aus erfahrenen Technikern, die regelmäßig geschult werden und mit allen Velux-Modellen – von älteren Baureihen bis zur neuesten Generation – bestens vertraut sind. Wir verwenden ausschließlich Original-Ersatzteile oder hochwertige, von Velux freigegebene Alternativen, um eine perfekte Passform und maximale Lebensdauer zu garantieren. Ihre Zufriedenheit ist unser oberstes Ziel.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="w-full h-auto">
                        <Image
                            src="/images/velux-fensterservice-reparatur-dichtungstausch.jpg"
                            alt="Professioneller Velux Fenster-Service und Reparatur"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                        <Image
                            src="/images/dachfenster-velux-service-reparatur.webp"
                            alt="Service und Reparatur für Velux Dachfenster"
                            width={500}
                            height={240}
                            className="rounded-lg shadow-xl w-full object-cover"
                        />
                        <Image
                            src="/images/velux-dachfenster-dichtungstausch-service.webp"
                            alt="Dichtungstausch bei Velux Dachfenstern"
                            width={500}
                            height={240}
                            className="rounded-lg shadow-xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-16">

                <h3 className="text-2xl font-bold mb-6">Häufige Probleme, die wir für Sie lösen:</h3>
                <ul className="space-y-4 mb-10">
                    <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Undichte Stellen & Wassereintritt:</span> Oftmals sind es poröse Eindeckrahmen oder gealterte Dichtungen. Wir lokalisieren die Ursache präzise und dichten Ihr Fenster wieder vollständig ab.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Schwergängige oder blockierte Fenster:</span> Harz, Schmutz oder eine verzogene Mechanik können die Ursache sein. Wir reinigen, justieren und schmieren alle beweglichen Teile.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Beschlagene Scheiben (innen):</span> Ein klares Zeichen für ein defektes Isolierglas. Wir tauschen die Glaseinheit schnell und unkompliziert aus.</span>
                    </li>
                     <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Defekte Griffe und Schließmechanismen:</span> Ein Sicherheitsrisiko und ein Ärgernis. Wir ersetzen defekte Teile und stellen die volle Funktionsfähigkeit wieder her.</span>
                    </li>
                </ul>

                <h3 className="text-2xl font-bold mb-6">Unsere Serviceleistungen im Überblick</h3>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-800">
                            <tr>
                                <th className="p-4 font-semibold">Leistung</th>
                                <th className="p-4 font-semibold">Beschreibung</th>
                                <th className="p-4 font-semibold">Ihre Vorteile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="p-4 font-semibold">Analyse & Diagnose</td>
                                <td className="p-4">Sorgfältige Überprüfung aller Komponenten vor Ort.</td>
                                <td className="p-4">Transparenter Kostenvoranschlag, keine versteckten Kosten.</td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="p-4 font-semibold">Dichtungstausch</td>
                                <td className="p-4">Austausch aller relevanten Dichtungen mit Originalteilen.</td>
                                <td className="p-4">Stoppt Zugluft, verbessert die Wärmedämmung, spart Heizkosten.</td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="p-4 font-semibold">Mechanik-Service</td>
                                <td className="p-4">Reinigung, Justierung und Schmierung der Scharniere und Schlösser.</td>
                                <td className="p-4">Leichtgängige Bedienung, längere Lebensdauer der Mechanik.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="p-4 font-semibold">Komplett-Wartung</td>
                                <td className="p-4">Umfassendes Servicepaket inklusive aller oben genannten Punkte.</td>
                                <td className="p-4">Maximaler Werterhalt und Vorbeugung gegen teure Folgeschäden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    Dies ist eine Übersicht unserer Standardleistungen. Selbstverständlich bieten wir auch individuelle Lösungen für spezielle Anforderungen wie den Austausch von Glasscheiben, die Reparatur von Rollläden oder den Einbau von Zubehör an. Zögern Sie nicht, uns zu kontaktieren.
                </p>
            </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">So einfach gehts: Ihr Weg zum reparierten Fenster</h2>
        <div className="relative grid md:grid-cols-3 gap-8 text-center">
          {/* Das ist die Linie, die die Schritte verbindet. Sie wird nur auf größeren Bildschirmen angezeigt. */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-300" style={{ transform: 'translateY(-50%)', zIndex: 0 }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-lg">1</div>
            <h3 className="text-xl font-semibold mb-2">Kontaktaufnahme</h3>
            <p className="text-gray-600">Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Schildern Sie uns kurz Ihr Problem.</p>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-lg">2</div>
            <h3 className="text-xl font-semibold mb-2">Angebot & Termin</h3>
            <p className="text-gray-600">Wir erstellen ein transparentes Angebot und vereinbaren einen passenden Termin mit Ihnen.</p>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-lg">3</div>
            <h3 className="text-xl font-semibold mb-2">Reparatur</h3>
            <p className="text-gray-600">Unser Techniker kommt zum vereinbarten Termin und führt die Reparatur fachgerecht durch.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 text-white rounded-xl p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für klare Sicht und ein perfektes Raumklima?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Warten Sie nicht, bis aus einem kleinen Problem ein großer Schaden wird. Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Servicetermin in Tulln, St. Pölten oder Wien.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-600 font-bold">
                <Link href="/kontakt">Termin vereinbaren</Link>
            </Button>
        </div>
      </section>

      {/* FAQ and Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
                <FAQ />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6">Direkter Kontakt</h2>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700 mb-6">
                        Haben Sie eine dringende Frage oder möchten Sie direkt mit uns sprechen? Zögern Sie nicht, uns anzurufen oder eine E-Mail zu schreiben. Wir sind für Sie da!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Phone className="w-6 h-6 text-blue-600 mr-4" />
                            <a href="tel:+436644351622" className="text-lg text-gray-800 hover:text-blue-600 transition-colors">+43 664 435 1622</a>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-6 h-6 text-blue-600 mr-4" />
                            <a href="mailto:info@fensterservice-rowo.at" className="text-lg text-gray-800 hover:text-blue-600 transition-colors">info@fensterservice-rowo.at</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 text-center">
            <p className="text-gray-600">
                Für weitere Informationen zu unserem kompletten Angebot, besuchen Sie unsere <Link href="/" className="text-blue-600 hover:underline">Fensterservice-Startseite</Link>.
            </p>
      </section>
    </div>
  );
}
