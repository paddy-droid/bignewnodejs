import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Corrected import path
import { MessageSquareQuote } from "lucide-react";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageSquareQuote className="h-12 w-12 text-blue-600" aria-hidden="true" />
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Häufig gestellte Fragen rund um unseren Fenster- und Türservice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finden Sie Antworten zu unseren Dienstleistungen für Fensterreparaturen, Türservices und Wartungen in Wien und Niederösterreich.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Welche Regionen in Wien und Niederösterreich decken Sie mit Ihrem Fenster- und Türservice ab?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Regionale Abdeckung</h4>
                <p className="mb-2">
                  Unser professioneller Fenster- und Türservice ist flächendeckend in Wien sowie in ganz Niederösterreich verfügbar. Wir verstehen, dass schnelle Hilfe oft entscheidend ist, daher haben wir unser Servicenetz so aufgebaut, dass wir Sie in vielen Regionen zeitnah erreichen können.
                </p>
                <p>
                  Ob Sie in <strong>Wien-Döbling</strong>, <strong>Floridsdorf</strong>, <strong>Mödling</strong>, <strong>Baden</strong>, <strong>St. Pölten</strong> oder <strong>Wiener Neustadt</strong> wohnen – unser erfahrenes Team ist schnell und zuverlässig für Sie zur Stelle. Wir decken sowohl städtische Gebiete als auch ländlichere Regionen ab, um sicherzustellen, dass niemand lange auf notwendige Reparaturen oder Wartungen warten muss. Vertrauen Sie auf unsere lokale Präsenz und unser Engagement für Qualität in Ihrer Nähe.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Wie schnell ist Ihr Notdienst für Fenster- und Türreparaturen verfügbar?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Schnelle Hilfe im Notfall</h4>
                <p className="mb-2">
                  Unser <strong>24/7-Notdienst</strong> in Wien und Niederösterreich garantiert Ihnen eine rasche Hilfe im Ernstfall. Ein defektes Fenster oder eine klemmende Tür kann ein Sicherheitsrisiko darstellen und sollte umgehend behoben werden. Deshalb sind wir rund um die Uhr für Sie erreichbar.
                </p>
                <p>
                  In der Regel sind wir innerhalb von <strong>60 Minuten</strong> bei Ihnen vor Ort – sei es bei einem kaputten Fenster, einem Defekt an der Haustür oder einem sonstigen dringenden Problem. Unsere Notfallteams sind speziell geschult und ausgerüstet, um die häufigsten Probleme schnell und effizient zu lösen. Verlassen Sie sich auf unsere schnelle Reaktionszeit und unsere fachkundige Hilfe, um Ihre Sicherheit und Ihren Komfort wiederherzustellen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Welche Arten von Fenstern und Türen reparieren Sie?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Vielfalt der reparierten Systeme</h4>
                <p className="mb-2">
                  Unser Team verfügt über umfassende Erfahrung mit einer breiten Palette von Fenster- und Türsystemen. Wir sind bestens vertraut mit der Reparatur und Wartung von <strong>Kunststofffenstern</strong>, die für ihre Langlebigkeit und Pflegeleichtigkeit bekannt sind, sowie mit klassischen <strong>Holzfenstern</strong>, die oft in älteren Gebäuden zu finden sind und besonderen Pflege bedürfen.
                </p>
                <p>
                  Auch moderne <strong>Aluminiumfenster</strong>, die für ihre Stabilität und schlanken Profile geschätzt werden, gehören zu unserem Fachgebiet. Wir reparieren gängige <strong>Drehkipp-Fenster</strong>, praktische <strong>Schiebetüren</strong>, sowie <strong>Rollläden</strong> und sogar <strong>historische Fenstersysteme</strong>, die spezielles Know-how erfordern. Unabhängig vom Material oder Typ finden wir schnelle, fachgerechte Lösungen für Ihre Reparaturbedürfnisse und stellen die volle Funktionalität wieder her.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Bieten Sie auch regelmäßige Wartungen für Fenster und Türen an?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Vorteile der regelmäßigen Wartung</h4>
                <p className="mb-2">
                  Ja, unser umfassender <strong>Wartungsservice</strong> trägt wesentlich zur <strong>Langlebigkeit</strong> und optimalen Funktion Ihrer Fenster und Türen bei. Regelmäßige Wartung ist eine Investition, die sich langfristig auszahlt, indem sie größere Schäden und teure Reparaturen verhindert.
                </p>
                <p>
                  Wir prüfen Beschläge, Dichtungen und Mechanik sorgfältig, beseitigen kleine Mängel sofort und führen eine gründliche Reinigung durch. Eine regelmäßige Wartung spart langfristig Kosten, erhöht die <strong>Energieeffizienz</strong> Ihres Hauses durch intakte Dichtungen und verbessert die <strong>Sicherheit</strong>, da alle Komponenten einwandfrei funktionieren. Lassen Sie Ihre Fenster und Türen regelmäßig von unseren Experten warten, um ihren Wert und ihre Funktionalität zu erhalten.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Mit welchen Kosten muss ich bei einer Fenster- oder Türreparatur rechnen?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Transparente Preisgestaltung</h4>
                <p className="mb-2">
                  Die <strong>Reparaturkosten</strong> für Fenster oder Türen sind abhängig vom Umfang der Arbeiten und den eventuell benötigten Ersatzteilen. Jeder Fall ist einzigartig, daher ist eine pauschale Preisangabe oft schwierig. Wir legen jedoch größten Wert auf <strong>faire und transparente Preise</strong>.
                </p>
                <p>
                  Um Ihnen volle Kostentransparenz zu bieten, erstellen wir Ihnen vor Arbeitsbeginn immer einen detaillierten und kostenlosen Kostenvoranschlag. So wissen Sie genau, welche Kosten auf Sie zukommen. Bei Inanspruchnahme unseres 24-Stunden-Notdienstes gelten gesonderte Konditionen aufgrund der Dringlichkeit und der Verfügbarkeit rund um die Uhr, die wir Ihnen gerne individuell und transparent mitteilen, bevor wir mit der Arbeit beginnen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Haben Sie spezielle Angebote für Hausverwaltungen und Immobilienbesitzer?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Spezialkonditionen für Profis</h4>
                <p className="mb-2">
                  Ja, für <strong>Hausverwaltungen</strong> und <strong>Immobilieneigentümer</strong> bieten wir attraktive <strong>Servicepakete</strong> an, die speziell auf die Bedürfnisse der Immobilienwirtschaft zugeschnitten sind. Wir verstehen die Anforderungen an schnelle Reaktionszeiten und zuverlässige Partner.
                </p>
                <p>
                  Unsere Pakete beinhalten priorisierte Bearbeitungszeiten für dringende Fälle, einen persönlichen Ansprechpartner für eine reibungslose Kommunikation sowie Mengenrabatte bei regelmäßigen Wartungen und Reparaturen in Ihrem Immobilienbestand. Unsere Angebote sind individuell auf Ihre Anforderungen zugeschnitten, um Ihnen maximale Effizienz und Kostenvorteile zu bieten. Gerne erstellen wir Ihnen ein unverbindliches Konzept, das Ihre spezifischen Bedürfnisse berücksichtigt.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Welche Vorteile bietet die regelmäßige Wartung von Fenstern und Türen?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Langfristige Vorteile</h4>
                <p className="mb-2">
                  Die regelmäßige Wartung Ihrer Fenster und Türen bietet zahlreiche Vorteile, die über die reine Funktionsfähigkeit hinausgehen. Sie trägt maßgeblich zur <strong>Werterhaltung</strong> Ihrer Immobilie bei und verlängert die Lebensdauer der Elemente erheblich.
                </p>
                <p>
                  Durch die sorgfältige Prüfung und Pflege von Beschlägen, Dichtungen und Rahmen werden kleine Mängel frühzeitig erkannt und behoben, bevor sie zu größeren, teuren Schäden führen. Eine gut gewartete Dichtung verbessert die <strong>Energieeffizienz</strong>, reduziert Heizkosten und erhöht den Wohnkomfort durch besseren Schallschutz. Zudem trägt die einwandfreie Funktion aller Komponenten zur Erhöhung der <strong>Sicherheit</strong> Ihres Zuhauses bei. Investieren Sie in regelmäßige Wartung, um langfristig Kosten zu sparen und den Komfort und die Sicherheit Ihrer Immobilie zu gewährleisten.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Wie kann ich einen Service anfragen oder einen Kostenvoranschlag erhalten?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                <h4 className="text-lg font-semibold mb-2">Ihr Weg zu uns</h4>
                <p className="mb-2">
                  Einen Service anzufragen oder einen unverbindlichen Kostenvoranschlag für Ihre Fenster- oder Türreparatur zu erhalten, ist ganz einfach. Sie können uns telefonisch unter unserer Servicenummer erreichen, um Ihr Anliegen direkt mit einem unserer Mitarbeiter zu besprechen und einen Termin zu vereinbaren.
                </p>
                <p>
                  Alternativ können Sie uns auch eine E-Mail mit einer Beschreibung des Problems und idealerweise einigen Fotos senden. Für eine schnelle und unkomplizierte Anfrage steht Ihnen auch unser Kontaktformular auf der Webseite zur Verfügung. Wir melden uns umgehend bei Ihnen, um die Details zu klären, Ihnen einen transparenten Kostenvoranschlag zu unterbreiten und den bestmöglichen Service für Sie zu planen.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;