import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, ShieldCheck, Clock, AlertTriangle, MapPin, Star, CheckCircle, ArrowRight, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Fenster Notdienst Wien & Tulln | 24h Soforthilfe bei Glasbruch & Einbruch | ROWO",
    description: "✅ Schneller 24h Fenster Notdienst in Wien, Tulln, St. Pölten & Umgebung. Soforthilfe bei Glasbruch, Einbruchschäden, undichten Fenstern. Geprüfter Fachbetrieb mit 30+ Jahren Erfahrung. Jetzt anrufen!",
    keywords: ["Fenster Notdienst", "24h Fenster Notdienst", "Glasbruch Notdienst", "Fensterreparatur Notdienst", "Notdienst Wien", "Notdienst Tulln", "Notdienst St. Pölten", "Fenster Notruf", "Fenster Soforthilfe", "Einbruch Notdienst", "Fenster undicht Notdienst", "ROWO Fensterservice"],
    openGraph: {
        title: "Fenster Notdienst Wien & Tulln | 24h Soforthilfe bei Glasbruch & Einbruch",
        description: "Schneller 24h Fenster Notdienst in Wien, Tulln, St. Pölten & Umgebung. Soforthilfe bei Glasbruch, Einbruchschäden, undichten Fenstern. Geprüfter Fachbetrieb mit 30+ Jahren Erfahrung.",
        type: "website",
        locale: "de_DE",
    },
    alternates: {
        canonical: "/notdienst"
    }
};

const EmergencyCard = ({ icon, title, description, emergencyLevel }: { 
    icon: React.ReactNode, 
    title: string, 
    description: string,
    emergencyLevel: "high" | "medium" | "low" 
}) => {
    const levelColors = {
        high: "border-red-500 bg-red-50",
        medium: "border-orange-500 bg-orange-50",
        low: "border-yellow-500 bg-yellow-50"
    };

    return (
        <div className={`border-l-4 ${levelColors[emergencyLevel]} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white`}>
            <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 p-3 rounded-full flex-shrink-0">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

const USPCard = ({ icon, title, description }: { 
    icon: React.ReactNode, 
    title: string, 
    description: string 
}) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ProcessStep = ({ number, title, description }: { 
    number: number, 
    title: string, 
    description: string 
}) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
            {number}
        </div>
        <div>
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ServiceAreaCard = ({ city, districts }: { 
    city: string, 
    districts: string[] 
}) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            {city}
        </h3>
        <div className="flex flex-wrap gap-2">
            {districts.map((district, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {district}
                </span>
            ))}
        </div>
    </div>
);

const ReviewCard = ({ name, rating, date, text }: { 
    name: string, 
    rating: number, 
    date: string, 
    text: string 
}) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">{name}</h4>
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
            </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-600">{text}</p>
    </div>
);

export default function NotdienstPage() {
    return (
        <div className="bg-gray-50">
            {/* Sticky Mobile CTA Button */}
            <div className="fixed bottom-4 right-4 z-50 md:hidden">
                <a 
                    href="tel:+436644351622" 
                    className="bg-red-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse"
                >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">Notruf</span>
                </a>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-700 to-red-900 text-white py-20 md:py-28">
                <div className="absolute inset-0">
                    <Image
                        src="/Images/Spezialleistungen Fensterservice.jpg"
                        alt="Fenster Notdienst bei Nacht"
                        fill
                        className="opacity-30 object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="bg-red-800 bg-opacity-90 inline-block px-4 py-2 rounded-full mb-4">
                        <span className="text-yellow-300 font-semibold">⚡ 24/7 Soforthilfe in ganz Niederösterreich</span>
                    </div>
                    <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-yellow-300"/>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
                        Fenster Notdienst Wien & Tulln
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Professionelle Soforthilfe bei Glasbruch, Einbruchschäden und undichten Fenstern.
                        <span className="font-semibold"> Geprüfter Fachbetrieb mit 10+ Jahren Erfahrung.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold animate-pulse">
                            <a href="tel:+436644351622">
                                <Phone className="mr-2 h-5 w-5" />
                                Jetzt Notruf: +43 664 435 1622
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-700 bg-transparent">
                            <Link href="/kontakt">
                                Kontaktformular
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                        <span className="bg-white bg-opacity-90 text-red-700 px-3 py-1 rounded-full font-semibold">✅ Schnelle Reaktion</span>
                        <span className="bg-white bg-opacity-90 text-red-700 px-3 py-1 rounded-full font-semibold">✅ 10+ Jahre Erfahrung</span>
                        <span className="bg-white bg-opacity-90 text-red-700 px-3 py-1 rounded-full font-semibold">✅ Geprüfter Fachbetrieb</span>
                    </div>
                </div>
            </section>

            {/* Emergency Cases Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Wann Sie unseren Notdienst sofort rufen sollten</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Bei diesen Notfällen sind wir sofort für Sie verfügbar – rund um die Uhr, auch an Wochenenden und Feiertagen
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EmergencyCard 
                        icon={<AlertTriangle className="w-6 h-6" />}
                        title="Einbruchschäden"
                        description="Sicherung von Einbruchöffnungen, Notverglasung, Reparatur beschädigter Fenster und Türen. Wir stellen Ihre Sicherheit sofort wieder her."
                        emergencyLevel="high"
                    />
                    <EmergencyCard 
                        icon={<ShieldCheck className="w-6 h-6" />}
                        title="Glasbruch"
                        description="Sichere Entfernung von Scherben, professionelle Notverglasung oder kompletter Austausch. Schutz vor Verletzungen und Witterung."
                        emergencyLevel="high"
                    />
                    <EmergencyCard 
                        icon={<Clock className="w-6 h-6" />}
                        title="Akute Undichtigkeit"
                        description="Plötzlich undichte Fenster bei Sturm oder Regen. Sofortige Abdichtung zur Vermeidung von Wasserschäden und Energieverlust."
                        emergencyLevel="medium"
                    />
                    <EmergencyCard 
                        icon={<Wrench className="w-6 h-6" />}
                        title="Fenster klemmt/blockiert"
                        description="Fenster oder Türen lassen sich nicht mehr schließen oder öffnen. Wir beheben mechanische Blockierungen sofort vor Ort."
                        emergencyLevel="medium"
                    />
                    <EmergencyCard 
                        icon={<AlertTriangle className="w-6 h-6" />}
                        title="Rollladen-Ausfall"
                        description="Blockierte oder defekte Rollläden, die Ihre Sicherheit oder Privatsphäre beeinträchtigen. Schnelle Reparatur oder Notlösungen."
                        emergencyLevel="low"
                    />
                    <EmergencyCard 
                        icon={<ShieldCheck className="w-6 h-6" />}
                        title="Beschädigte Fensterdichtungen"
                        description="Komplett ausfallende Dichtungen bei Extremwetter. Temporäre Abdichtung als Schutz vor Kälte, Nässe und Lärm."
                        emergencyLevel="low"
                    />
                </div>
            </section>

            {/* USPs Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihre Vorteile beim ROWO Fenster Notdienst</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Wir sind nicht nur ein Notdienst – wir sind Ihr verlässlicher Partner für schnelle und professionelle Lösungen
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <USPCard 
                            icon={<Clock className="w-6 h-6" />}
                            title="24/7 Erreichbarkeit"
                            description="Rund um die Uhr erreichbar, auch an Wochenenden und Feiertagen. Schnelle Reaktionszeit garantiert."
                        />
                        <USPCard
                            icon={<Users className="w-6 h-6" />}
                            title="10+ Jahre Erfahrung"
                            description="Langjährige Expertise in der Fensterreparatur und Notfallsicherung. Wir kennen jedes Problem und seine Lösung."
                        />
                        <USPCard 
                            icon={<ShieldCheck className="w-6 h-6" />}
                            title="Geprüfter Fachbetrieb"
                            description="Zertifizierte Qualität nach österreichischen Standards. Vertrauen Sie auf echte Profis."
                        />
                        <USPCard 
                            icon={<MapPin className="w-6 h-6" />}
                            title="Schnelle Anfahrt"
                            description="Stationen in Wien und Tulln für kurze Wege. In der Regel innerhalb von 60 Minuten bei Ihnen."
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">So funktioniert unser Notdienst-Ablauf</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Transparenter Prozess von Ihrem Notruf bis zur vollständigen Problemlösung
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <ProcessStep 
                            number={1}
                            title="Ihr Notruf"
                            description="Sie erreichen uns rund um die Uhr unter +43 664 435 1622. Beschreiben Sie uns kurz Ihre Situation, damit wir die richtige Hilfe einplanen können."
                        />
                        <ProcessStep 
                            number={2}
                            title="Schnelle Analyse"
                            description="Unser Notfall-Team analysiert Ihr Problem und plant die sofortige Maßnahme. Wir geben Ihnen eine realistische Ankunftszeit."
                        />
                        <ProcessStep 
                            number={3}
                            title="Vor-Ort-Sicherung"
                            description="Unser Techniker kommt mit vollständig ausgestattetem Servicefahrzeug. Zuerst sichern wir den Schaden ab."
                        />
                        <ProcessStep 
                            number={4}
                            title="Reparatur oder Notlösung"
                            description="Je nach Situation führen wir die komplette Reparatur durch oder erstellen eine sichere Notlösung bis zur endgültigen Instandsetzung."
                        />
                        <ProcessStep 
                            number={5}
                            title="Dokumentation & Abrechnung"
                            description="Wir dokumentieren alles für Ihre Versicherung und erstellen eine transparente, verständliche Abrechnung."
                        />
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Notdienst-Einsatzgebiete</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Wir sind schnell in der gesamten Region Wien und Niederösterreich für Sie da
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceAreaCard 
                            city="Wien"
                            districts={["1. Innere Stadt", "2. Leopoldstadt", "3. Landstraße", "8. Josefstadt", "9. Alsergrund", "13. Hietzing", "18. Währing", "19. Döbling", "21. Floridsdorf", "22. Donaustadt"]}
                        />
                        <ServiceAreaCard 
                            city="Tulln"
                            districts={["Tulln Stadt", "Atzenbrugg", "Kirchberg am Wagram", "Königstetten", "Muckendorf-Wipfing", "Siegendorf", "Zwentendorf"]}
                        />
                        <ServiceAreaCard 
                            city="St. Pölten"
                            districts={["St. Pölten Stadt", "Herzogenburg", "Krems", "Mautern", "Melk", "Rabenstein", "Traismauer", "Wilhelmsburg"]}
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            Auch in allen umliegenden Gemeinden und Bezirken von Wien und Niederösterreich
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Klosterneuburg</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Krems</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Baden bei Wien</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Mödling</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Schwechat</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden über unseren Notdienst sagen</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Echte Erfahrungen von Kunden in Notfallsituationen
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ReviewCard 
                        name="Markus Huber"
                        rating={5}
                        date="15.10.2024"
                        text="Mitten in der Nacht ist bei uns ein Fenster eingegangen. Der Notdienst war innerhalb von 45 Minuten da und hat professionell alles gesichert. Absolute Empfehlung!"
                    />
                    <ReviewCard 
                        name="Elena Wagner"
                        rating={5}
                        date="03.11.2024"
                        text="Nach einem Sturm war unsere Terrassentür komplett undicht. Der Techniker kam sofort, hat das Problem gefunden und behoben. Super Service!"
                    />
                    <ReviewCard 
                        name="Thomas Bergmann"
                        rating={5}
                        date="28.10.2024"
                        text="Einbruchsversuch am Wochenende. Schnelle Reaktion, professionelle Arbeit und alles für die Versicherung dokumentiert. Danke für die schnelle Hilfe!"
                    />
                </div>
                <div className="text-center mt-8">
                    <Link href="/kontakt" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                        Alle Bewertungen ansehen
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen zum Fenster Notdienst</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Antworten auf die wichtigsten Fragen rund um unsere Notfall-Hilfe
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg">
                                <AccordionTrigger className="text-left font-semibold px-4 hover:no-underline">
                                    Wie schnell erreichen Sie mich bei einem Notfall?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 px-4">
                                    In der Regel sind wir innerhalb von 60 Minuten bei Ihnen. In Wien und Tulln sogar oft schneller, da wir dort Stationen haben. Die genaue Ankunftszeit erfahren Sie direkt bei Ihrem Anruf.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg">
                                <AccordionTrigger className="text-left font-semibold px-4 hover:no-underline">
                                    Was kostet ein Notdiensteinsatz?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 px-4">
                                    Die Kosten hängen von der Art des Notfalls und der durchgeführten Arbeit ab. Wir geben Ihnen vor Beginn der Arbeiten eine transparente Kostenschätzung. Notdiensteinsätze haben einen pauschalen Servicezuschlag für die sofortige Erreichbarkeit.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
                                <AccordionTrigger className="text-left font-semibold px-4 hover:no-underline">
                                    Sind Sie auch an Wochenenden und Feiertagen erreichbar?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 px-4">
                                    Ja, unser Notdienst ist 24/7 erreichbar, also rund um die Uhr, auch an Wochenenden, Feiertagen und in der Nacht. Fensterprobleme warten nicht auf Geschäftszeiten, und wir auch nicht.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg">
                                <AccordionTrigger className="text-left font-semibold px-4 hover:no-underline">
                                    Können Sie auch komplexe Schäden sofort reparieren?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 px-4">
                                    Bei den meisten Notfällen können wir sofort eine Lösung umsetzen. Bei sehr komplexen Schäden sichern wir zunächst alles professionell ab und planen dann die endgültige Reparatur. Ihre Sicherheit steht immer an erster Stelle.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg">
                                <AccordionTrigger className="text-left font-semibold px-4 hover:no-underline">
                                    Helfen Sie auch bei der Schadensregulierung mit der Versicherung?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 px-4">
                                    Ja, wir dokumentieren alle Schäden fotografisch und erstellen detaillierte Berichte für Ihre Versicherung. Bei Einbruchschäden arbeiten wir oft direkt mit der Polizei und Versicherungen zusammen.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Haben Sie einen Fenster-Notfall?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Zögern Sie nicht! Rufen Sie uns sofort an – wir sind rund um die Uhr für Sie da.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                            <a href="tel:+436644351622">
                                <Phone className="mr-2 h-5 w-5" />
                                Jetzt Notruf: +43 664 435 1622
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-700 bg-transparent">
                            <Link href="/kontakt">
                                Kontaktformular
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-8 flex justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>24/7 Erreichbar</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>Schnelle Hilfe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>Geprüfter Fachbetrieb</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">Weitere Informationen zu unseren Dienstleistungen</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/leistungen" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                        <h3 className="font-semibold mb-2">Unsere Leistungen</h3>
                        <p className="text-sm text-gray-600">Übersicht aller Fenster-Services</p>
                    </Link>
                    <Link href="/velux-reparatur" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                        <h3 className="font-semibold mb-2">Velux Reparatur</h3>
                        <p className="text-sm text-gray-600">Spezialisiert auf Dachfenster</p>
                    </Link>
                    <Link href="/spezialleistungen" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                        <h3 className="font-semibold mb-2">Spezialleistungen</h3>
                        <p className="text-sm text-gray-600">Individuelle Lösungen</p>
                    </Link>
                    <Link href="/blog" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                        <h3 className="font-semibold mb-2">Blog & Tipps</h3>
                        <p className="text-sm text-gray-600">Ratgeber zur Fensterpflege</p>
                    </Link>
                </div>
            </section>
        </div>
    );
}
