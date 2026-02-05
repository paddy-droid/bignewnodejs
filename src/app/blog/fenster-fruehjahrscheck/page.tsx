import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Fenster-Frühjahrscheck | Wartung & Pflege Anleitung',
    description: 'Profi-Tipps für den Fenster-Frühjahrscheck: Dichtungen pflegen, Beschläge ölen und Schäden erkennen. Service für Wien, Krems & St. Pölten.',
    keywords: ['fensterwartung wien', 'dichtungen pflegen anleitung', 'fenster einstellen lassen krems', 'fensterbeschläge ölen', 'holzfenster wartung', 'kunststofffenster reinigen', 'fenster service niederösterreich']
}

export default function FensterFruehjahrscheckPage() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-8">
            <article className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <div className="text-center mb-6">
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Frühjahrsputz</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Wartung</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Werterhalt</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Fenster-Frühjahrscheck: So machen Sie Ihre Fenster fit für die warme Jahreszeit
                        </h1>
                        <div className="text-gray-500 text-sm">
                            Veröffentlicht am 20. Januar 2026 • Von Fensterservice Team
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    <div className="mb-8">
                        <Image
                            src="/Images/fenster-fruehjahrscheck.png"
                            alt="Handwerker beim Fenster-Frühjahrscheck"
                            width={800}
                            height={400}
                            className="w-full rounded-lg shadow-md object-cover"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 mb-8 text-center">
                        <h2 className="text-2xl font-semibold text-yellow-900 mb-4">Der Winter hat Spuren hinterlassen?</h2>
                        <p className="text-yellow-800 mb-6">Wir beheben kleine Schäden, bevor sie zu großen Kosten führen. Service in ganz Wien & Niederösterreich.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
                        >
                            Service-Termin buchen
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nach dem Winter ist vor dem Sommer: Bestandsaufnahme</h2>
                        <p className="text-gray-700 mb-4">
                            Der kalte Winter in Ostösterreich setzt Fenstermaterialien ordentlich zu. Eis, Schnee und die starken Temperaturschwankungen zwischen geheizten Innenräumen und frostiger Außenluft führen zu Materialdehnungen. Jetzt, wo die Tage wieder länger werden, ist der ideale Zeitpunkt für eine gründliche Bestandsaufnahme.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Ein professioneller <strong>Fenster-Check</strong> deckt auf, was der Winter angerichtet hat – von porösen Dichtungen bis hin zu verstellten Beschlägen. Besonders in windreichen Gegenden wie dem <strong>Tullnerfeld</strong> oder dem <strong>Weinviertel</strong> merken Bewohner oft erst im Frühling, dass Fenster undicht geworden sind ("es zieht"). In städtischen Gebieten wie <strong>Wien</strong> setzt zudem der winterliche Straßenschmutz und Feinstaub den mechanischen Teilen zu.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dichtungen im Fokus: Das A und O für Dichtheit</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                            <div>
                                <p className="text-gray-700 mb-4">
                                    Sind Ihre Gummidichtungen noch elastisch oder fühlen sie sich hart und spröde an? Poröse Dichtungen sind der Energiefresser Nummer eins. Weder Wärme noch Schall werden effektiv abgehalten.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    <strong>Unser Profi-Tipp:</strong> Reinigen Sie die Dichtungen mindestens einmal jährlich mit klarem Wasser (ohne aggressive Reiniger!) und behandeln Sie sie anschließend mit einem Pflegestift auf Silikonbasis oder Talkum. Das hält den Gummi geschmeidig und verhindert, dass er im Sommer bei Hitze am Rahmen festklebt.
                                </p>
                                <p className="text-gray-700">
                                    Sollten die Dichtungen bereits Risse zeigen, hilft nur noch ein Austausch. Wir bieten diesen Service für fast alle Fenstermarken an, von <strong>Krems</strong> bis <strong>Baden</strong>.
                                </p>
                            </div>
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/Images/dichtungspflege-detail.png"
                                    alt="Nahaufnahme: Pflege der Fensterdichtung mit einem Stift"
                                    fill
                                    className="rounded-lg shadow-md object-cover"
                                />
                                <p className="text-xs text-center text-gray-500 mt-2">Regelmäßige Pflege verlängert die Lebensdauer der Dichtungen massiv.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Die 3-Schritte-Checkliste für den Frühling</h2>
                        <div className="space-y-6 mb-6">
                            <Card className="p-6 border-l-4 border-blue-500">
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">1. Reinigung & Rahmenprüfung</h3>
                                <p className="text-gray-700">
                                    Putzen Sie nicht nur das Glas! Reinigen Sie auch die Rahmen, Falze und vor allem die Wasserablaufschlitze unten im Rahmen. Prüfen Sie Holzfenster auf Risse im Lack – hier kann Feuchtigkeit eindringen und das Holz faulen lassen. Kunststofffenster sollten auf Verfärbungen oder tiefe Kratzer geprüft werden.
                                </p>
                            </Card>
                            <Card className="p-6 border-l-4 border-green-500">
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">2. Funktionsprüfung der Mechanik</h3>
                                <p className="text-gray-700">
                                    Öffnen, Kippen, Schließen – geht das leicht von der Hand oder hakt es? Ein schwergängiger Griff ist oft ein Warnsignal. Drücken Sie den Fensterflügel beim Schließen nicht mit Gewalt in den Rahmen. Wenn es klemmt, muss der Beschlag justiert werden. Eine <strong>Fenstereinstellung</strong> ist Millimeterarbeit.
                                </p>
                            </Card>
                            <Card className="p-6 border-l-4 border-yellow-500">
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">3. Beschläge ölen</h3>
                                <p className="text-gray-700">
                                    Alle beweglichen Metallteile sollten einmal jährlich geölt werden. Verwenden Sie dafür bitte nur <strong>harz- und säurefreies Öl</strong> (z.B. Nähmaschinenöl oder spezielles Beschlagsspray). WD-40 ist zum Reinigen okay, aber schmiert nicht dauerhaft genug.
                                </p>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum sich der Profi lohnt</h2>
                        <p className="text-gray-700 mb-4">
                            Wer sein Auto zum Service bringt, sollte auch seinen Fenstern diesen Luxus gönnen. Fenster sind komplexe technologische Bauteile. Falsches Einstellen kann den Verschleiß beschleunigen statt ihn zu verhindern. Ein ausgeleiertes Scharnier kann im schlimmsten Fall dazu führen, dass der Fensterflügel herausfällt.
                        </p>
                        <p className="text-gray-700">
                            Unser Team prüft bei einem Service-Termin alle kritischen Punkte systematisch ab. Wir sind in ganz <strong>Niederösterreich</strong> für Sie da. Lesen Sie auch unseren Artikel <Link href="/blog/fenster-einstellen-lassen" className="text-blue-600 hover:text-blue-800 underline">Fenster einstellen lassen</Link>, um zu verstehen, warum präzise Justierung auch den Lärmschutz verbessert.
                        </p>
                    </section>

                    <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Fenster-Check vom Profi gewünscht?</h2>
                        <p className="mb-6">Wir kommen vorbei und machen Ihre Fenster frühlingsfit. Schnell, sauber und kompetent.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                            Termin für Frühjahrscheck anfragen
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
