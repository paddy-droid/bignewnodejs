import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Fenster klemmen im Sommer | Ursachen & Lösung',
    description: 'Warum klemmen Fenster und Türen im Sommer oft? Erfahren Sie die Ursachen für klemmende Beschläge bei Hitze und was Sie dagegen tun können.',
    keywords: ['fenster klemmen sommer', 'fenster schleift hitze', 'beschläge einstellen tulln', 'fenster reparatur wien', 'kunststofffenster verziehen']
}

export default function FensterKlemmenSommerPage() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-8">
            <article className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <div className="text-center mb-6">
                        <div className="flex justify-center gap-2 mb-4">
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Reparatur</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Sommer</span>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Ratgeber</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Warum Fenster im Sommer oft klemmen – und was Sie dagegen tun können
                        </h1>
                        <div className="text-gray-500 text-sm">
                            Veröffentlicht am 06. Mai 2026 • Von Fensterservice Team
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    <div className="mb-8">
                        <Image
                            src="/Images/fenster_klemmen_sommer.png"
                            alt="Fenstertechniker repariert Fenster im Sommer"
                            width={800}
                            height={400}
                            className="w-full rounded-lg shadow-md object-cover"
                        />
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Materialausdehnung bei Hitze</h2>
                        <p className="text-gray-700 mb-4">
                            Im Winter zog es, jetzt im Sommer lässt sich das Fenster kaum noch schließen. Kommt Ihnen das bekannt vor? Die Ursache liegt in der Physik: Materialien dehnen sich bei Hitze aus. Besonders stark betroffen sind <strong>Kunststofffenster (PVC)</strong>, aber auch Holz- und Aluminiumfenster reagieren auf starke Sonneneinstrahlung.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Der Rahmen wird durch die stundenlange Hitze regelrecht &quot;größer&quot;. Die Spaltmaße zwischen Flügel und Blendrahmen werden minimal kleiner, und schon schleift das Fenster beim Schließen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipps für den Sommer</h2>
                        <p className="text-gray-700 mb-4">
                            Zunächst sollten Sie keine Gewalt anwenden. Durch gewaltsames Drücken und Ziehen können die Beschläge nachhaltig beschädigt werden. 
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Kühlen:</strong> Oft reicht es, das Fenster in den kühlen Morgenstunden zu schließen, wenn das Material wieder etwas geschrumpft ist.</li>
                            <li><strong>Schmierung:</strong> Trockene, staubige Beschläge klemmen schneller. Ein spezielles Beschlagsspray kann hier Wunder wirken.</li>
                            <li><strong>Einstellen lassen:</strong> Meist muss das Fenster über die Inbusschrauben an den Scharnieren minimal neu zentriert werden.</li>
                        </ul>
                    </section>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-center">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Lieber vom Profi justieren lassen</h3>
                        <p className="text-blue-800 mb-4">
                            Damit Ihre Fenster sowohl im heißen Sommer als auch im eiskalten Winter perfekt schließen, übernehmen wir gerne die professionelle Einstellung für Sie in Wien und Niederösterreich.
                        </p>
                        <Link href="/kontakt" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                            Jetzt Termin vereinbaren
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
