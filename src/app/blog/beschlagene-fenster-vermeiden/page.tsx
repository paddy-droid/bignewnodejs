import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Beschlagene Fenster vermeiden | Schimmelprävention',
  description: 'Verhindern Sie Schimmel durch richtige Lüftung. Tipps gegen beschlagene Fenster in der Heizsaison.',
  keywords: ['beschlagene fenster winter', 'schimmel vermeiden fenster', 'luftfeuchtigkeit wohnung wien', 'fensterservice tulln', 'fensterlüftung st. pölten']
}

export default function BeschlageneFensterVermeidenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Schimmelprävention</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Lüftung</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Feuchtigkeitskontrolle</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beschlagene Fenster? So vermeidest du Schimmel in der Heizsaison
            </h1>
            <div className="text-gray-500 text-sm">
              Veröffentlicht am 10. November 2025 • Von Fensterservice Team
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <Image
              src="/Images/fenster-dichtungen-tauschen.webp"
              alt="Beschlagene Fenster vermeiden durch richtige Dichtungen und Lüftung"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 mb-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Schutz vor Schimmel und Feuchtigkeitsschäden</h2>
            <p className="text-blue-800 mb-6">Beschlagene Fenster sind oft das erste Anzeichen für zu hohe Luftfeuchtigkeit und können zu Schimmelbildung führen.</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jetzt Beratung anfordern
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum beschlagene Fenster kein harmloses Problem sind</h2>
            <p className="text-gray-700 mb-4">
              Viele Hausbesitzer betrachten beschlagene Fenster im Winter als normales Phänomen und ignorieren die Warnsignale. Doch <strong>beschlagene fenster winter</strong> sind weit mehr als nur ein optisches Problem – sie sind ein klares Indiz für ein unausgeglichenes Raumklima und können ernsthafte Folgen haben.
            </p>
            <p className="text-gray-700 mb-4">
              Das Kondenswasser an Fensterscheiben entsteht, wenn warme, feuchte Innenluft auf die kalte Glasscheibe trifft und sich dort abkühlt. Dieser Prozess ist nicht nur unansehnlich, sondern schafft auch ideale Bedingungen für Schimmelpilze, die sich schnell in Fensternischen und angrenzenden Wänden ausbreiten können.
            </p>
            <p className="text-gray-700">
              Besonders in gut gedämmten modernen Gebäuden wird dieses Problem immer häufiger, da die Luftfeuchtigkeit nicht mehr wie früher durch undichte Fugen entweichen kann. Regelmäßiges und richtiges Lüften ist daher unerlässlich, um <strong>schimmel vermeiden fenster</strong> zu können und ein gesundes Raumklima zu erhalten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ursachen – Luftfeuchtigkeit & Temperaturunterschiede</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Quellen für hohe Luftfeuchtigkeit</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Kochen und Backen in der Küche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Duschen und Baden im Badezimmer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Atmung und Transpiration von Personen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Wäschetrocknung in der Wohnung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Zimmerpflanzen und Aquarien</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Risikofaktoren für Kondensation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Geringe Raumtemperatur (unter 20°C)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Ungenügende Luftzirkulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Möbel direkt vor den Fenstern</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Alte Fenster mit einfacher Verglasung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Kältebrücken im Fensterrahmen</span>
                  </li>
                </ul>
              </Card>
            </div>
            <p className="text-gray-700">
              Die ideale <strong>luftfeuchtigkeit wohnung wien</strong> sollte zwischen 40-60% liegen. Werte darüber fördern die Kondenswasserbildung an kühlen Oberflächen wie Fenstergläsern. Mit einem einfachen Hygrometer können Sie die Luftfeuchtigkeit in Ihren Räumen überwachen und rechtzeitig gegensteuern, bevor Probleme entstehen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Richtige Lüftung im Winter (Stoßlüften, keine Kipplüftung)</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Die richtige Lüftungstechnik</h3>
              <p className="text-gray-700 mb-4">
                Im Winter ist die richtige Lüftungstechnik besonders wichtig, um Feuchtigkeit effektiv abzuführen, ohne die Räume übermäßig auszukühlen. Die effektivste Methode ist das Stoßlüften:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Stoßlüftung:</strong> Fenster 5-10 Minuten vollständig öffnen, mehrmals täglich</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Querlüftung:</strong> Durchzug schaffen, indem gegenüberliegende Fenster geöffnet werden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Zeitpunkt:</strong> Besonders nach dem Aufstehen, nach dem Kochen und vor dem Schlafengehen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Heizung aus:</strong> Während des Lüftens die Heizung kurz ausschalten</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-red-900 mb-3">Was Sie vermeiden sollten</h3>
              <p className="text-gray-700 mb-4">
                Besonders im Winter ist die Kipplüftung problematisch und sollte vermieden werden:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Kipplüftung:</strong> Führt zu Auskühlung der Fensterrahmen und Wärmebrücken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Dauerlüften:</strong> Fenster stundenlang gekippt lassen verschwendet Energie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Unregelmäßiges Lüften:</strong> Führt zu Feuchtigkeitsansammlung über Zeit</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700">
              Unsere Experten für <strong>fensterlüftung st. pölten</strong> beraten Sie gerne zur optimalen Lüftungsstrategie für Ihre Wohnsituation. Die richtige Lüftung ist nicht nur wichtig zur Vermeidung von Schimmel, sondern trägt auch zu einem gesunden Raumklima und höherem Wohnkomfort bei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fenstercheck – Dichtungen, Wärmebrücken, Isolierglas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Regelmäßige Überprüfung</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Dichtungen auf Risse und Porosität prüfen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Schließfunktion und Druck der Verriegelung kontrollieren</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Glas auf Beschädigungen und Undichtigkeiten untersuchen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Rahmen auf Anzeichen von Feuchtigkeit und Schimmel prüfen</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Moderne Fensterlösungen</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Dreifach-Isolierglas mit Wärmeschutzbeschichtung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Wärmebrückenfreie Rahmenkonstruktionen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Integrierte Lüftungssysteme mit Wärmerückgewinnung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Elektronisch gesteuerte Fensterlüfter</span>
                  </li>
                </ul>
              </Card>
            </div>
            <p className="text-gray-700 mb-4">
              Wenn Ihre Fenster älter als 15-20 Jahre sind, lohnt sich oft eine Modernisierung. Moderne Fenster bieten nicht nur bessere Dämmeigenschaften, sondern auch verbesserten Schutz vor Kondenswasserbildung. Unser <strong>fensterservice tulln</strong> Team führt eine professionelle Bewertung Ihrer Fenster durch und empfiehlt die passende Lösung für Ihre Situation.
            </p>
            <p className="text-gray-700">
              Bereits kleine Verbesserungen wie der Austausch alter Dichtungen oder die Nachrüstung mit Wärmeschutzverglasung können einen erheblichen Unterschied machen und das Problem beschlagener Fenster deutlich reduzieren. Lesen Sie auch unseren Artikel über <Link href="/blog/energie-sparen-im-winter" className="text-blue-600 hover:text-blue-800 underline">Energie sparen im Winter</Link>, um mehr über die Vorteile gut abgedichteter Fenster zu erfahren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zusätzliche Maßnahmen zur Schimmelprävention</h2>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-green-900 mb-3">Effektive Strategien gegen Schimmel</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Räumliche Anordnung:</strong> Möbel mit Abstand zu Wänden und Fenstern aufstellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Luftzirkulation:</strong> Große Möbelstücke nicht direkt vor Heizkörpern stellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Temperaturkontrolle:</strong> Räume nicht unter 18°C abkühlen lassen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Feuchtigkeitsquellen:</strong> Beim Kochen und Duschen gezielt lüften</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Entfeuchter:</strong> In Problemzonen temporär Entfeuchter einsetzen</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Besonders in Altbauten oder in Räumen mit unzureichender Belüftung können zusätzliche Maßnahmen notwendig sein. In manchen Fällen ist die Installation einer kontrollierten Wohnraumlüftung sinnvoll, die automatisch für einen Luftaustausch sorgt und dabei die Wärme zurückgewinnt.
            </p>
            <p className="text-gray-700">
              Wenn Sie bereits Anzeichen von Schimmel bemerken, ist schnelles Handeln wichtig. Kleine Schimmelflecken können oft selbst entfernt werden, bei größeren Bereichen sollten Sie jedoch unbedingt professionelle Hilfe in Anspruch nehmen, um gesundheitliche Risiken zu vermeiden.
            </p>
          </section>

          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Schutz vor Schimmel und Feuchtigkeitsschäden</h2>
            <p className="mb-6">Kontaktieren Sie uns für eine professionelle Bewertung Ihrer Fenster und erhalten Sie Tipps zur optimalen Raumluftregulierung.</p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Jetzt Beratung anfordern
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Fensterservice. Alle Rechte vorbehalten.
            </div>
            <nav className="flex space-x-6">
              <Link href="/blog" className="text-gray-500 hover:text-blue-600 text-sm">
                Zurück zum Blog
              </Link>
              <Link href="/" className="text-gray-500 hover:text-blue-600 text-sm">
                Startseite
              </Link>
              <Link href="/kontakt" className="text-gray-500 hover:text-blue-600 text-sm">
                Kontakt
              </Link>
            </nav>
          </div>
        </footer>
      </article>
    </div>
  )
}