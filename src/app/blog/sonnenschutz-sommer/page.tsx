import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Sonnenschutz für Fenster im Sommer | ROWO Fensterservice',
    description: 'Wie Sie Ihr Zuhause im Sommer in Niederösterreich und Wien angenehm kühl halten. Alles über modernen Sonnenschutz, Raffstores und Rollläden.',
    keywords: ['sonnenschutz sommer', 'raffstore niederösterreich', 'hitze fenster wien', 'rollladen reparatur tulln', 'fenster abdunkeln']
}

export default function SonnenschutzSommerPage() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-8">
            <article className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <div className="text-center mb-6">
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Sommer</span>
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Sonnenschutz</span>
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Klima</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sonnenschutz für Fenster: Wie Sie Ihr Zuhause im Sommer angenehm kühl halten
                        </h1>
                        <div className="text-gray-500 text-sm">
                            Veröffentlicht am 06. Mai 2026 • Von Fensterservice Team
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    <div className="mb-8">
                        <Image
                            src="/Images/sonnenschutz_sommer.png"
                            alt="Modernes Wohnzimmer mit halboffenem Sonnenschutz (Raffstore)"
                            width={800}
                            height={400}
                            className="w-full rounded-lg shadow-md object-cover"
                        />
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wenn die Hitze drückt: Außenliegender Sonnenschutz hilft</h2>
                        <p className="text-gray-700 mb-4">
                            Die Sommer in Österreich werden heißer. Besonders große Glasflächen lassen schnell die Temperaturen im Wohnzimmer ansteigen. Wer keine teure und energiefressende Klimaanlage nachrüsten möchte, sollte beim <strong>Fenster-Sonnenschutz</strong> ansetzen. 
                        </p>
                        <p className="text-gray-700 mb-4">
                            Wir vom ROWO Fensterservice beraten Sie gerne zu passenden Systemen in Tulln, Wien und ganz Niederösterreich. Das Wichtigste vorab: Außen liegender Sonnenschutz wie <strong>Raffstores oder Rollläden</strong> ist wesentlich effizienter als innenliegende Jalousien, da die Sonnenstrahlen gar nicht erst das Glas erhitzen können.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vorteile von modernen Raffstores</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Lichtregulierung:</strong> Durch neigbare Lamellen kann Tageslicht genutzt werden, ohne dass Hitze ins Haus dringt.</li>
                            <li><strong>Wetterschutz:</strong> Schützt Ihre Fenster vor Hagel und Starkregen im Sommergewitter.</li>
                            <li><strong>Sichtschutz:</strong> Privatsphäre ohne komplette Dunkelheit.</li>
                        </ul>
                    </section>

                    <div className="bg-amber-50 rounded-lg p-6 mb-8 text-center border border-amber-200">
                        <h3 className="text-xl font-semibold text-amber-900 mb-3">Defekter Sonnenschutz im Sommer?</h3>
                        <p className="text-amber-800 mb-4">Rollladen klemmt oder der Raffstore-Motor streikt? Unser Reparatur-Service hilft rasch in Wien & NÖ, damit Sie wieder im Kühlen sitzen.</p>
                        <Link href="/kontakt" className="inline-block bg-amber-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition">
                            Jetzt Reparatur anfragen
                        </Link>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <nav className="flex space-x-6">
                            <Link href="/blog" className="text-gray-500 hover:text-blue-600 text-sm">Zurück zum Blog</Link>
                            <Link href="/kontakt" className="text-gray-500 hover:text-blue-600 text-sm">Kontakt</Link>
                        </nav>
                    </div>
                </footer>
            </article>
        </div>
    )
}
