import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Einbruchschutz im Frühling | Sicherheit erhöhen',
    description: 'Schützen Sie Ihr Zuhause vor Einbrechern. Jetzt Sicherheitsbeschläge und abschließbare Griffe nachrüsten. Tipps für Wien & NÖ.',
    keywords: ['fenstersicherung nachrüsten', 'einbruchschutz fenster wien', 'sicherheitsbeschläge fenster', 'fenstergriff mit schloss', 'pilzkopfverriegelung nachrüsten', 'fenster sicherheit st pölten', 'balkontür sichern']
}

export default function EinbruchschutzFruehlingPage() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-8">
            <article className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <div className="text-center mb-6">
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Sicherheit</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Einbruchschutz</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Zuhause</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Einbruchschutz im Frühling: Warum jetzt der richtige Zeitpunkt für Sicherheits-Updates ist
                        </h1>
                        <div className="text-gray-500 text-sm">
                            Veröffentlicht am 05. Januar 2026 • Von Fensterservice Team
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    <div className="mb-8">
                        <Image
                            src="/Images/einbruchschutz-sicherheit.png"
                            alt="Sicherer Fenstergriff mit Schloss und Pilzkopfverriegelung"
                            width={800}
                            height={400}
                            className="w-full rounded-lg shadow-md object-cover"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 mb-8 text-center">
                        <h2 className="text-2xl font-semibold text-red-900 mb-4">Sicherheit geht vor!</h2>
                        <p className="text-red-800 mb-6">Alte Fenster sind oft in wenigen Sekunden aufgehebelt. Wir rüsten Ihre Fenster sicher nach.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Kostenlosen Sicherheits-Check buchen
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dunkle Jahreszeit vorbei – Gefahr auch?</h2>
                        <p className="text-gray-700 mb-4">
                            Es ist ein Trugschluss zu glauben, Einbrüche passieren nur im dunklen Winter. Sobald der Frühling kommt und die Temperaturen steigen, ändern auch Täter ihre Strategien. "Gekippte Fenster sind offene Fenster" – dieser alte Spruch bewahrheitet sich jedes Jahr aufs Neue.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Besonders in Ballungsräumen wie <strong>Wien</strong> oder dicht besiedelten Gebieten im <strong>Speckgürtel von Niederösterreich</strong> (Mödling, Baden, Klosterneuburg) nutzen Einbrecher oft die Nachmittagsstunden, wenn Bewohner kurz einkaufen oder im Garten sind. Aber auch abgelegene Häuser im <strong>Mostviertel</strong> oder <strong>Weinviertel</strong> sind Ziele.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Investieren Sie jetzt in Ihre Sicherheit, bevor die großen Ferienzeiten beginnen, in denen Häuser oft tagelang leer stehen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pilzkopfverriegelung: Der unsichtbare Bodyguard</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/Images/sicherheitsbeschlag-detail.png"
                                    alt="Detailaufnahme: Pilzkopfzapfen für maximalen Einbruchschutz"
                                    fill
                                    className="rounded-lg shadow-md object-cover"
                                />
                                <p className="text-xs text-center text-gray-500 mt-2">Ein Pilzkopfzapfen verkrallt sich im Rahmen und verhindert das Aufhebeln.</p>
                            </div>
                            <div>
                                <p className="text-gray-700 mb-4">
                                    Herkömmliche Rollzapfen bieten kaum Widerstand. Ein Schraubenzieher genügt, und das Fenster ist in 10 Sekunden offen. Die Lösung heißt <strong>Pilzkopfverriegelung</strong>.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Wie auf dem Bild zu sehen, hat der Zapfen einen Kopf wie ein Pilz. Dieser "verkrallt" sich in das stählerne Schließblech am Rahmen. Ein Aufhebeln wird dadurch extrem erschwert bis unmöglich gemacht.
                                </p>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2">✓</span>
                                        <span><strong>Nachrüstbar:</strong> Ihre alten Fenster müssen meist nicht getauscht werden!</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2">✓</span>
                                        <span><strong>Unsichtbar:</strong> Die Optik des Fensters bleibt unverändert.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-600 mr-2">✓</span>
                                        <span><strong>Effektiv:</strong> Empfohlen von der Kriminalpolizei.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Weitere Maßnahmen: Griffe & Glas</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <Card className="p-6">
                                <h3 className="font-semibold text-lg text-gray-900 mb-3">Abschließbare Fenstergriffe</h3>
                                <p className="text-gray-700 mb-3">
                                    Ein absolutes Muss, besonders im Erdgeschoss.
                                </p>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span>Verhindert den "Glasdurchgriff" (Loch ins Glas schlagen, Griff drehen)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span>Wichtige Kindersicherung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span>Widerstandsklasse mind. 100 Nm wählen</span>
                                    </li>
                                </ul>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-semibold text-lg text-gray-900 mb-3">Sicherheitsglas (P4A)</h3>
                                <p className="text-gray-700 mb-3">
                                    Für besonders gefährdete Bereiche.
                                </p>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span>Verbundsicherheitsglas (VSG)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span>Scheibe bleibt bei Bruch im Rahmen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span>Kann oft durch Scheibentausch nachgerüstet werden</span>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                        <p className="text-gray-700">
                            Eine <strong>fenstersicherung nachrüsten</strong> ist meist kostengünstiger, als viele denken. Wir kommen zu Ihnen nach <strong>St. Pölten</strong>, <strong>Krems</strong> oder in jeden Bezirk von <strong>Wien</strong> und erstellen eine Schwachstellenanalyse.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sicherheit beginnt bei der Wartung</h2>
                        <p className="text-gray-700">
                            Ein schlecht gewartetes Fenster ist ein unsicheres Fenster. Wenn Beschläge wackeln oder der Anpressdruck fehlt, hat der Einbrecher leichtes Spiel. Unser Sicherheits-Check kombiniert daher oft Wartung und Sicherheitsberatung. Mehr zum Thema allgemeine Wartung finden Sie in unserem Artikel über <Link href="/blog/fensterdichtungen-austauschen" className="text-blue-600 hover:text-blue-800 underline">Fensterdichtungen austauschen</Link>.
                        </p>
                    </section>

                    <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Fühlen Sie sich sicher zuhause?</h2>
                        <p className="mb-6">Lassen Sie es nicht drauf ankommen. Vereinbaren Sie jetzt einen kostenlosen Sicherheits-Check.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                            Beratungstermin vereinbaren
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0">
                            © 2026 Fensterservice. Alle Rechte vorbehalten.
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
