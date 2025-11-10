import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fensterdichtungen austauschen – kleine Arbeit, große Wirkung',
  description: 'Fensterdichtungen austauschen und Heizkosten senken. Schritt-für-Schritt-Anleitung für den Dichtungstausch im Winter.',
  keywords: ['fensterdichtungen austauschen', 'dichtungstausch fenster', 'fenster abdichten', 'heizkosten senken', 'zugluft vermeiden']
}

export default function FensterdichtungenAustauschenPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">DIY-Anleitung</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Energieeffizienz</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Winterschutz</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fensterdichtungen austauschen – kleine Arbeit, große Wirkung im Winter
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
              alt="Fensterdichtungen austauschen für bessere Wärmedämmung im Winter"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 mb-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Senken Sie Ihre Heizkosten bis zu 20%</h2>
            <p className="text-blue-800 mb-6">Durch den Austausch alter Fensterdichtungen können Sie Zugluft eliminieren und erheblich Energie sparen.</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jetzt professionelle Hilfe anfordern
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum der Austausch von Fensterdichtungen so wichtig ist</h2>
            <p className="text-gray-700 mb-4">
              Alte und poröse Fensterdichtungen sind eine der häufigsten Ursachen für Wärmeverluste in Wohnhäusern. Besonders in den kalten Wintermonaten in Niederösterreich können undichte Fenster für bis zu 20% des gesamten Energieverlusts verantwortlich sein. Das Ergebnis: höhere Heizkosten und ein unbehagliches Raumklima.
            </p>
            <p className="text-gray-700 mb-4">
              Viele Hausbesitzer unterschätzen die Wirkung, die ein einfacher <strong>fensterdichtungen austauschen</strong> haben kann. Die gute Nachricht ist: Mit den richtigen Materialien und etwas handwerklichem Geschick können Sie die meisten Dichtungen selbst austauschen und so schnell eine deutliche Verbesserung erzielen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">So erkennen Sie, ob Ihre Fensterdichtungen ausgetauscht werden müssen</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Visuelle Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Sichtbare Risse oder Brüche im Dichtungsmaterial
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Poröse oder brüchige Dichtungen
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Verformte oder zusammengedrückte Dichtungen
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Fehlende Dichtungsabschnitte
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Praktische Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Kerzentest: Flamme flackert am Fenster
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Papiertest: Papier lässt sich leicht herausziehen
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Spürbare Zugluft bei geschlossenem Fenster
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Kondenswasserbildung an den Scheiben
                  </li>
                </ul>
              </Card>
            </div>
            <p className="text-gray-700">
              Wenn Sie eines oder mehrere dieser Anzeichen bemerken, ist es Zeit für einen <strong>dichtungstausch fenster</strong>. Besonders in Regionen wie <Link href="/tulln" className="text-blue-600 hover:text-blue-800 underline">Tulln</Link> mit den kalten Wintermonaten sollten Sie nicht zu lange warten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Die richtigen Materialien für den Dichtungstausch</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Arten von Fensterdichtungen</h3>
              <p className="text-gray-700 mb-4">
                Nicht alle Fensterdichtungen sind gleich. Die Wahl des richtigen Materials hängt von Ihrem Fenstertyp und Ihren Anforderungen ab:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>EPDM-Dichtungen:</strong> Besonders wetterbeständig und langlebig, ideal für Außenbereiche</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Silikon-Dichtungen:</strong> Hohe Temperaturbeständigkeit und gute Flexibilität</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Schaumstoff-Dichtungen:</strong> Einfach zu verarbeiten, gut für unebene Oberflächen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Doppel-Profildichtungen:</strong> Besonders dicht, ideal für den Winter</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Achten Sie beim Kauf auf Qualität und die richtige Dicke. Zu dicke Dichtungen können den Fenstermechanismus belasten, während zu dünne Dichtungen nicht ausreichend abdichten. Unser Team für <strong>fenster abdichten</strong> hilft Ihnen gerne bei der Auswahl der passenden Materialien.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Schritt-für-Schritt-Anleitung: Fensterdichtungen austauschen</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-blue-900 mb-3">Vorbereitung</h3>
              <ol className="space-y-3 text-blue-800">
                <li><strong>1. Fenster gründlich reinigen:</strong> Entfernen Sie Schmutz und alte Dichtungsrückstände</li>
                <li><strong>2. Maße nehmen:</strong> Messen Sie die Länge der Dichtungsnuten genau aus</li>
                <li><strong>3. Material vorbereiten:</strong> Schneiden Sie die neuen Dichtungen auf die richtige Länge</li>
              </ol>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-blue-900 mb-3">Durchführung</h3>
              <ol className="space-y-3 text-blue-800">
                <li><strong>4. Alte Dichtungen entfernen:</strong> Ziehen Sie die alten Dichtungen vorsichtig aus den Nuten</li>
                <li><strong>5. Nuten reinigen:</strong> Verwenden Sie eine Bürste und Reinigungsmittel für gründliche Säuberung</li>
                <li><strong>6. Neue Dichtungen einsetzen:</strong> Drücken Sie die neuen Dichtungen fest in die Nuten</li>
                <li><strong>7. Ecken behandeln:</strong> Schneiden Sie die Dichtungen in den Ecken sauber auf 45° und verbinden Sie sie</li>
                <li><strong>8. Funktion testen:</strong> Schließen Sie das Fenster mehrmals und prüfen Sie die Abdichtung</li>
              </ol>
            </div>
            <p className="text-gray-700 mb-4">
              Der gesamte Prozess dauert in der Regel nur 30-60 Minuten pro Fenster. Die Investition lohnt sich: Durch den <strong>heizkosten senken</strong> Effekt amortisieren sich die Materialkosten meist innerhalb weniger Monate. Erfahren Sie auch mehr darüber, wie Sie durch <Link href="/blog/energie-sparen-im-winter" className="text-blue-600 hover:text-blue-800 underline">Energie sparen im Winter</Link> zusätzlich Kosten reduzieren können.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wann Sie professionelle Hilfe in Anspruch nehmen sollten</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">DIY ist ideal bei:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Standardfenstern mit einfachen Dichtungssystemen
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Gut zugänglichen Dichtungsnuten
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Leichten Undichtigkeiten
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Neueren Fenstern (weniger als 20 Jahre alt)
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Professionelle Hilfe bei:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    Speziellen Fensterkonstruktionen (z.B. Velux)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    Historischen oder denkmalgeschützten Fenstern
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    Beschädigten Fensterrahmen
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    Mehrfachen Problemen (Dichtung + Mechanik)
                  </li>
                </ul>
              </Card>
            </div>
            <p className="text-gray-700 mb-4">
              Besonders bei älteren Gebäuden oder speziellen Fensterkonstruktionen kann professionelle Hilfe sinnvoll sein. Unsere Experten haben jahrelange Erfahrung mit allen Arten von <strong>zugluft vermeiden</strong> Maßnahmen und finden auch für komplizierte Fälle die richtige Lösung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zusätzliche Tipps für maximale Wirkung</h2>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-green-900 mb-3">Kombinieren Sie den Dichtungstausch mit:</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Fensterwartung:</strong> Überprüfen Sie auch den Schließmechanismus und die Beschläge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Rollladen-Überprüfung:</strong> Dichte Rollladenkästen verbessern zusätzlich die Isolierung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Thermovorhänge:</strong> Zusätzlicher Schutz gegen Kälte in der Nacht</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Heizkörperverkleidungen:</strong> Lenken Sie die Wärme in den Raum statt an die Fenster</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Durch die Kombination verschiedener Maßnahmen können Sie die Energieeffizienz Ihrer Fenster erheblich steigern. Ein <strong>fensterdichtungen austauschen</strong> ist oft der erste und wichtigste Schritt, aber die zusätzliche Optimierung weiterer Bereiche rund um das Fenster kann den Effekt weiter verstärken.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fazit: Kleine Maßnahme mit großer Wirkung</h2>
            <p className="text-gray-700 mb-4">
              Der Austausch von Fensterdichtungen ist eine der effektivsten und kostengünstigsten Maßnahmen zur Steigerung der Energieeffizienz in Ihrem Zuhause. Mit relativ geringem Aufwand können Sie nicht nur Ihre Heizkosten senken, sondern auch den Wohnkomfort deutlich verbessern.
            </p>
            <p className="text-gray-700 mb-4">
              Ob Sie den <strong>dichtungstausch fenster</strong> selbst durchführen oder professionelle Hilfe in Anspruch nehmen – die Investition lohnt sich immer. Besonders in den kalten Wintermonaten in Niederösterreich werden Sie den Unterschied sofort spüren: weniger Zugluft, behaglichere Räume und niedrigere Heizkosten.
            </p>
            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-yellow-900 mb-3">Zeitpunkt für den Austausch</h3>
              <p className="text-yellow-800 mb-3">
                Der ideale Zeitpunkt für den Austausch von Fensterdichtungen ist das Frühjahr oder Herbst. Bei milden Temperaturen ist das Material flexibler und die Verarbeitung einfacher. Allerdings ist ein Austausch auch im Winter möglich – die sofortige Wirkung macht sich besonders bezahlt.
              </p>
              <p className="text-yellow-800">
                Planen Sie rechtzeitig: Vor dem ersten Frost sollten alle Fensterdichtungen überprüft und bei Bedarf ausgetauscht sein, um unangenehme Überraschungen zu vermeiden.
              </p>
            </div>
          </section>

          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Benötigen Sie professionelle Hilfe?</h2>
            <p className="mb-6">Unser Team steht Ihnen für eine professionelle Beratung und Umsetzung zur Verfügung. Kontaktieren Sie uns für ein unverbindliches Angebot!</p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Jetzt Kontakt aufnehmen
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