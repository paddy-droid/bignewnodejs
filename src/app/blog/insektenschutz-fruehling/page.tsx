import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Insektenschutz Wien & NÖ | Hochwertige Gitter nach Maß',
    description: 'Insektenschutz nach Maß für Wien und Niederösterreich. Spannrahmen, Drehtüren und Rollos für entspannte Frühlingstage ohne Plagegeister.',
    keywords: ['insektenschutz wien', 'fliegengitter tulln', 'mückenschutz nach maß niederösterreich', 'insektenschutzgitter balkon', 'plissee tür insektenschutz', 'fenstergitter reparatur', 'insektenschutz st. pölten']
}

export default function InsektenschutzFruehlingPage() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-8">
            <article className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <div className="text-center mb-6">
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Insektenschutz</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Wohnkomfort</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Saisonstart</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Insektenschutz nachrüsten: Jetzt für den Frühling vorsorgen in Wien & Niederösterreich
                        </h1>
                        <div className="text-gray-500 text-sm">
                            Veröffentlicht am 02. Februar 2026 • Von Fensterservice Team
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    <div className="mb-8">
                        <Image
                            src="/Images/insektenschutz-fruehling.png"
                            alt="Modernes Fenster mit Insektenschutz und Blick in den Frühlingsgarten"
                            width={800}
                            height={400}
                            className="w-full rounded-lg shadow-md object-cover"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 mb-8 text-center">
                        <h2 className="text-2xl font-semibold text-green-900 mb-4">Schluss mit Mücken und Fliegen!</h2>
                        <p className="text-green-800 mb-6">Genießen Sie frische Luft ohne lästige Besucher. Wir messen, liefern und montieren Ihren Insektenschutz.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Kostenloses Angebot anfordern
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum jetzt der beste Zeitpunkt ist</h2>
                        <p className="text-gray-700 mb-4">
                            Sobald die ersten warmen Tage im Februar und März beginnen, erwacht die Natur – und leider auch die Insektenwelt. Wer in <strong>Wien</strong> oder <strong>Niederösterreich</strong> wohnt, kennt das Problem: Man möchte die frische Frühlingsluft hereinlassen, doch Mücken, Fliegen und Wespen nutzen jede Gelegenheit.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Ein rechtzeitiger Einbau von <strong>Insektenschutz nach Maß</strong> spart Ihnen Nerven. Nutzen Sie die noch ruhigere Vorsaison, um Lieferzeiten zu verkürzen. Unser Team ist in der gesamten Region unterwegs – von <strong>Tulln an der Donau</strong> über <strong>Klosterneuburg</strong> bis nach <strong>Baden bei Wien</strong> und <strong>St. Pölten</strong>. Wir beraten Sie direkt vor Ort, welches System für Ihre Fenster und Türen am besten geeignet ist.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Lösungen für jeden Bedarf und Fenstertyp</h2>
                        <p className="text-gray-700 mb-6">
                            Kein Fenster ist wie das andere. Standardlösungen aus dem Baumarkt passen oft schlecht oder halten nur einen Sommer. Wir setzen auf langlebige Systeme mit hochwertigen Profilen und reißfestem Gewebe (Fiberglas).
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/Images/insektenschutz-plissee-detail.png"
                                    alt="Detailaufnahme einer Insektenschutz-Plisseetür"
                                    fill
                                    className="rounded-lg shadow-md object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl text-gray-900 mb-3">Unsere Top-Lösungen im Überblick:</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2 font-bold">1.</span>
                                        <div>
                                            <strong>Spannrahmen für Fenster:</strong> Der Klassiker. Wird einfach eingehängt, ohne Bohren am Fensterrahmen. Ideal für Mietwohnungen in Wien.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2 font-bold">2.</span>
                                        <div>
                                            <strong>Dreh- und Pendeltüren:</strong> Perfekt für den häufigen Durchgang zur Terrasse oder zum Balkon. Schließt automatisch und hält dicht.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2 font-bold">3.</span>
                                        <div>
                                            <strong>Insektenschutz-Plissees:</strong> Platzsparend und modern. Lässt sich wie eine Ziehharmonika zur Seite schieben (siehe Bild). Besonders beliebt bei großen Schiebetüren.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2 font-bold">4.</span>
                                        <div>
                                            <strong>Lichtschachtabdeckungen:</strong> Schützt Ihren Keller vor Laub, Spinnen und Mäusen.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-700">
                            Für Allergiker bieten wir zudem spezielle <strong>Pollenschutzgitter</strong> an. Diese halten nicht nur Insekten fern, sondern filtern auch einen Großteil der Pollen aus der Luft – für einen erholsamen Schlaf, auch bei offenem Fenster.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihr Service-Vorteil in der Region</h2>
                        <div className="bg-gray-50 rounded-lg p-6 mb-6">
                            <h3 className="font-semibold text-lg text-gray-900 mb-3">Wir sind für Sie da – von der Donau bis in den Wienerwald</h3>
                            <p className="text-gray-700 mb-4">
                                Als regionaler Fachbetrieb legen wir Wert auf persönliche Betreuung. Egal ob Sie ein Einfamilienhaus in <strong>Korneuburg</strong> oder eine Altbauwohnung in <strong>Wien</strong> ausstatten möchten:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Kostenloses Ausmessen vor Ort</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Verbindliches Festpreisangebot</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Fachgerechte Montage ohne Schmutz</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Reparatur-Service für bestehende Gitter</li>
                            </ul>
                        </div>
                        <p className="text-gray-700">
                            Oft lässt sich die Montage von Insektenschutz perfekt mit einem kleinen <Link href="/blog/fenster-fruehjahrscheck" className="text-blue-600 hover:text-blue-800 underline">Frühjahrscheck Ihrer Fenster</Link> verbinden. Wenn wir schon vor Ort sind, prüfen wir gerne auch Ihre Dichtungen und Beschläge.
                        </p>
                    </section>

                    <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Bereit für einen insektenfreien Sommer?</h2>
                        <p className="mb-6">Vereinbaren Sie jetzt Ihren Messtermin und sichern Sie sich Ihren Wunschtermin vor dem Saisonstart.</p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                            Beratungstermin anfordern
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
            </article >
        </div >
    )
}
