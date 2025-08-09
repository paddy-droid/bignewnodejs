import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Phone, ShieldCheck, Clock, AlertTriangle } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Fensterservice Notdienst Tulln & St. Pölten | 24h Soforthilfe",
    description: "Ihr Fensterservice Notdienst bei Glasbruch oder Einbruch in Tulln, St. Pölten & Wien. Wir bieten schnelle 24h Soforthilfe.",
    keywords: ["Fenster Notdienst", "Glasbruch Notdienst", "dringende Fensterreparatur", "24h Service", "Soforthilfe Fenster", "Tulln", "St. Pölten", "Wien"]
};

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

export default function NotdienstPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-red-700 text-white py-20 md:py-28">
        <div className="absolute inset-0">
            <Image 
                src="/Images/Spezialleistungen Fensterservice.jpg" 
                alt="Fenster Notdienst bei Nacht" 
                layout="fill"
                objectFit="cover"
                className="opacity-30"
            />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-yellow-300"/>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            Fensterservice Notdienst für Tulln & St. Pölten
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Schnelle Hilfe bei Glasbruch, Einbruchschäden und anderen dringenden Fensterproblemen in <span className="font-semibold">Tulln, St. Pölten, Wien und Umgebung</span>.
          </p>
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold animate-pulse">
            <a href="tel:+436644351622">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt Notruf: +43 664 435 1622
            </a>
          </Button>
        </div>
      </section>

      {/* "In welchen Fällen" Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wann Sie unseren Notdienst rufen sollten</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={<ShieldCheck className="w-8 h-8" />} title="Nach einem Einbruch">
                Einbruchschäden an Fenstern oder Terrassentüren müssen sofort gesichert werden, um Ihre Sicherheit wiederherzustellen. Wir führen Notsicherungen und Reparaturen durch.
            </InfoCard>
            <InfoCard icon={<AlertTriangle className="w-8 h-8" />} title="Bei Glasbruch">
                Eine zerbrochene Scheibe stellt ein hohes Verletzungs- und Sicherheitsrisiko dar. Wir entfernen Scherben sicher und sorgen für eine schnelle Notverglasung oder einen Austausch.
            </InfoCard>
            <InfoCard icon={<Clock className="w-8 h-8" />} title="Akute Undichtigkeit">
                Wenn Ihr Fenster plötzlich nicht mehr schließt oder stark undicht ist (z.B. bei Sturm), verhindern wir weitere Schäden an Ihrem Eigentum durch schnelle Abdichtung.
            </InfoCard>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Schnelle &amp; zuverlässige Soforthilfe – Rund um die Uhr</h2>
                <p className="text-gray-700 mb-6">
                    Ein Notfall am Fenster passiert immer unerwartet und zur unpassendsten Zeit – sei es ein Einbruchsversuch am Wochenende, ein Glasbruch durch einen Sturm in der Nacht oder eine plötzlich klemmende Balkontür, die sich nicht mehr schließen lässt. Solche Situationen erfordern sofortiges Handeln, um Ihre Sicherheit zu gewährleisten und Folgeschäden an Ihrem Eigentum zu vermeiden. Genau für diese Fälle haben wir unseren 24-Stunden-Fenster-Notdienst für die Regionen Tulln, St. Pölten und Wien ins Leben gerufen. Wir verstehen die Dringlichkeit und den Stress, den ein solcher Notfall verursacht. Deshalb garantieren wir eine schnelle Reaktionszeit und professionelle Soforthilfe, egal zu welcher Tages- oder Nachtzeit.
                </p>
                <p className="text-gray-700 mb-10">
                    Unser Notdienst-Team besteht aus speziell geschulten, erfahrenen Technikern, die mit vollausgestatteten Servicefahrzeugen zu Ihnen kommen. So haben wir die gängigsten Ersatzteile und Materialien für eine sofortige Notsicherung oder Reparatur direkt dabei. Unser oberstes Ziel ist es, die Sicherheit Ihres Zuhauses schnellstmöglich wiederherzustellen. Das bedeutet, wir sichern zerbrochene Fenster ab, führen Notverglasungen durch oder machen klemmende Fenster und Türen wieder gängig und verschließbar. Wir dokumentieren den Schaden sorgfältig, was Ihnen bei der Abwicklung mit Ihrer Versicherung hilft. Verlassen Sie sich auf unsere Expertise und unsere schnelle, unkomplizierte Hilfe, wenn Sie sie am dringendsten benötigen.
                </p>
                <p className="text-gray-700 mb-10">
                    Als etablierter Fensterservice verstehen wir die Feinheiten moderner und alter Fenstersysteme. Ob es sich um ein hochwertiges Kunststoff-Alu-Fenster oder ein traditionelles Holzfenster handelt, unser Fachwissen ermöglicht es uns, über eine einfache Notsicherung hinauszugehen. Wir analysieren die Ursache des Problems, um nachhaltige Lösungen anzubieten und zukünftige Notfälle zu vermeiden. Vertrauen Sie auf einen echten Fachbetrieb, für den Qualität und Kundenzufriedenheit an erster Stelle stehen.
                </p>

                <h3 className="text-2xl font-bold mb-6">Unser Notdienst-Ablauf für maximale Transparenz:</h3>
                <ol className="space-y-6">
                    <li className="flex">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1</div>
                        <div>
                            <h4 className="text-lg font-semibold">Ihr Anruf</h4>
                            <p className="text-gray-600">Sie erreichen uns rund um die Uhr unter unserer Notrufnummer. Schildern Sie uns die Situation, damit wir uns ein erstes Bild machen können.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">2</div>
                        <div>
                            <h4 className="text-lg font-semibold">Schnelle Anfahrt</h4>
                            <p className="text-gray-600">Einer unserer Techniker macht sich sofort auf den Weg zu Ihnen. Wir decken die Gebiete Tulln, St. Pölten und Wien ab und garantieren kurze Anfahrtszeiten.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">3</div>
                        <div>
                            <h4 className="text-lg font-semibold">Schadensbehebung &amp; Sicherung</h4>
                            <p className="text-gray-600">Vor Ort analysieren wir den Schaden und führen eine sofortige Notsicherung (z.B. Notverglasung) oder, wenn möglich, die vollständige Reparatur durch.</p>
                        </div>
                    </li>
                     <li className="flex">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">4</div>
                        <div>
                            <h4 className="text-lg font-semibold">Weiteres Vorgehen</h4>
                            <p className="text-gray-600">Falls eine endgültige Reparatur nicht sofort möglich ist, besprechen wir mit Ihnen die nächsten Schritte und erstellen ein transparentes Angebot für die vollständige Instandsetzung.</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-800 text-white rounded-xl p-10 md:p-16 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Immer für Sie da: Unsere Notdienst-Regionen</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Unser 24h Notdienst ist in den folgenden Gebieten und deren unmittelbarer Umgebung für Sie im Einsatz:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-full">Tulln</span>
                <span className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-full">St. Pölten</span>
                <span className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-full">Wien</span>
                <span className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-full">Klosterneuburg</span>
                <span className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-full">Krems</span>
            </div>
        </div>
      </section>
    </div>
  );
}
