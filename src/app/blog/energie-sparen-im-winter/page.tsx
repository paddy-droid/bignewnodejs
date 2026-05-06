import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Energie sparen im Winter | Bis 30% Heizkosten weniger durch dichte Fenster',
  description: 'Wie professionelle Fensterabdichtung Heizkosten massiv senkt: Schwachstellen erkennen, Dichtungen erneuern, Förderungen nutzen. Service in Wien, Tulln, St. Pölten, Krems.',
  keywords: [
    'fenster abdichten tulln', 'fensterservice st. pölten', 'energie sparen fenster',
    'wärmeverlust fenster', 'fensterdichtung wien', 'heizkosten senken',
    'thermische sanierung niederösterreich', 'fenster sanieren förderung', 'u-wert fenster',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/energie-sparen-im-winter' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie viel Heizkosten kann ich durch dichte Fenster sparen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei stark verschlissenen Dichtungen sind 15–30 % Heizkostenreduktion realistisch. Bei einer durchschnittlichen Heizrechnung von 1.800 €/Jahr in Niederösterreich entspricht das 270–540 € pro Heizperiode. Investitionen amortisieren sich oft in 1–3 Jahren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Müssen alte Fenster komplett getauscht werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nicht zwangsläufig. Oft reichen Dichtungstausch, Beschlag-Justage und gegebenenfalls Glas-Tausch. Eine professionelle Diagnose mit Wärmebildkamera zeigt, was wirtschaftlich sinnvoll ist. Komplett-Tausch lohnt erst bei sehr alten oder beschädigten Fenstern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Förderungen gibt es in Niederösterreich für Fenstersanierung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NÖ Wohnbauförderung (Annuitätenzuschuss), Bundesförderung „Sauber Heizen für Alle" und „Sanierungsoffensive" mit bis zu 30 % Zuschuss. Plus Steuerabsetzbarkeit für thermische Sanierung. Wir kennen die aktuellen Programme und unterstützen bei der Antragsstellung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was bedeutet U-Wert beim Fenster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der U-Wert beschreibt, wie viel Wärme pro m² und Kelvin verloren geht. Je niedriger, desto besser. Alte Einfachverglasung: U-Wert 5,0; alte Doppelverglasung: 2,5–3,0; moderne 3-fach-Verglasung: 0,5–0,8. Ab U-Wert >1,3 lohnt sich Modernisierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Lohnt sich Fensteraustausch in Altbauten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei historischen oder denkmalgeschützten Gebäuden gibt es spezielle Sanierungsfenster, die den Charakter erhalten und energetisch modernen Anforderungen entsprechen. Wir haben in Wien und NÖ viele solche Projekte umgesetzt – mit 20–25 % Energieeinsparung bei Erhalt der Optik.',
      },
    },
  ],
}

const toc = [
  { id: 'verlust', label: 'Wo geht Energie verloren?' },
  { id: 'erkennen', label: 'Schwachstellen erkennen' },
  { id: 'massnahmen', label: 'Maßnahmen im Vergleich' },
  { id: 'beispiele', label: 'Erfolgsprojekte' },
  { id: 'foerderung', label: 'Förderungen' },
  { id: 'kosten', label: 'Investition & Amortisation' },
  { id: 'faq', label: 'FAQ' },
]

export default function EnergieSparenImWinterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Energie', 'Heizkosten', 'Sanierung', 'Förderung'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Energie sparen im Winter<br />
              <span className="text-emerald-200">Dichte Fenster sind bares Geld wert</span>
            </h1>
            <p className="text-emerald-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Bis zu 30 % der Heizenergie verschwinden durch undichte Fenster. Mit gezielten Maßnahmen holen
              Sie das zurück – ohne Komplett-Tausch und mit attraktiven Förderungen in NÖ.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-emerald-100/90">
              <span>Veröffentlicht: 10. November 2025</span>
              <span>•</span>
              <span>Lesezeit: 11 Min.</span>
              <span>•</span>
              <span>Fensterservice Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">Inhalt</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700 hover:bg-white px-3 py-2 rounded-lg transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />{item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-emerald-200">
                    <Link href="/kontakt" className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-3 rounded-xl">
                      💶 Spar-Beratung
                    </Link>
                    <a href="tel:+436644351622" className="block w-full text-center mt-2 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold px-4 py-3 rounded-xl">
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <article className="flex-1 min-w-0">
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image src="/Images/richtig abgedichtete Fenster in Niederösterreich.webp" alt="Energie sparen mit richtig abgedichteten Fenstern in Niederösterreich" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Auf einen Blick</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Bis zu 30 % der Heizenergie geht durch alte Fenster verloren</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Dichtungstausch + Justage spart oft 270–540 € pro Jahr</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Komplett-Tausch nicht immer nötig – Sanierung oft günstiger</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Förderungen in NÖ bis zu 30 % Zuschuss</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Viele Hausbesitzer in Niederösterreich unterschätzen den enormen Einfluss, den Fenster auf die
                Energieeffizienz eines Gebäudes haben. Tatsächlich können undichte Fenster für bis zu 30 % des
                gesamten Wärmeverlusts in einem Wohnhaus verantwortlich sein. Das bedeutet: Jede dritte Heizkostenrechnung
                hängt direkt mit schlecht abgedichteten Fenstern zusammen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Eine professionelle Fensterabdichtung ist daher keine Luxusmaßnahme, sondern eine wirtschaftlich
                sinnvolle Investition – mit Amortisation binnen 1–3 Jahren und attraktiven Förderungen.
              </p>

              <section id="verlust" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wo geht die Energie verloren?</h2>
                <p className="text-slate-500 text-sm mb-6">Die typischen Schwachstellen</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { i: '🚪', t: 'Dichtungen', d: 'Spröde Gummiprofile = größter Wärmeverlust. Ersatz oft schon nach 12–15 Jahren nötig.', val: '40 %' },
                    { i: '🪟', t: 'Verglasung', d: 'Einfach- und alte Doppelverglasung haben hohen U-Wert. Modernes 3-fach-Glas bringt 60 % weniger Verlust.', val: '30 %' },
                    { i: '🧱', t: 'Anschlussfuge', d: 'Übergang Fenster zu Wand oft unzureichend abgedichtet – sichtbar als Schimmelfleck.', val: '20 %' },
                    { i: '⚙️', t: 'Beschlag-Andruck', d: 'Wenn Fenster nicht mehr richtig schließt, leidet die Dichtwirkung der besten Dichtung.', val: '10 %' },
                  ].map((s) => (
                    <div key={s.t} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                      <span className="text-3xl flex-shrink-0">{s.i}</span>
                      <div>
                        <div className="flex items-baseline justify-between gap-3 mb-1">
                          <p className="font-bold text-slate-800">{s.t}</p>
                          <span className="text-lg font-extrabold text-emerald-700">{s.val}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="erkennen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Schwachstellen erkennen</h2>
                <p className="text-slate-500 text-sm mb-6">Auch ohne Wärmebildkamera</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">👁️ Sichtbar</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Spürbare Zugluft am Fensterrahmen</li>
                      <li>• Kondenswasser an Glasrändern</li>
                      <li>• Risse oder Lücken in Dichtungen</li>
                      <li>• Flatternde Vorhänge bei Wind</li>
                      <li>• Eis innen am Glas (sehr alte Fenster)</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">📊 Messbar</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Hand am Glasrand: deutlich kälter</li>
                      <li>• Heizung läuft trotz hoher Stufe</li>
                      <li>• Räume kühlen schnell aus</li>
                      <li>• Schimmel in Fensterecken</li>
                      <li>• Heizkostenanstieg ohne Grund</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="massnahmen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Maßnahmen im Vergleich</h2>
                <p className="text-slate-500 text-sm mb-6">Was bringt wie viel?</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Maßnahme</th>
                        <th className="text-left px-5 py-4 font-semibold">Ersparnis</th>
                        <th className="text-left px-5 py-4 font-semibold">Kosten/Fenster</th>
                        <th className="text-left px-5 py-4 font-semibold">Amortisation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Dichtungstausch', e: '5–15 %', p: '60–110 €', a: '1–2 Jahre' },
                        { t: 'Beschlag-Justage', e: '3–8 %', p: '80–150 €', a: '2–3 Jahre' },
                        { t: 'Anschluss-Abdichtung', e: '5–10 %', p: '100–250 €', a: '2–4 Jahre' },
                        { t: 'Glas-Tausch (3-fach)', e: '15–25 %', p: '350–650 €', a: '4–6 Jahre' },
                        { t: 'Komplett-Fenstertausch', e: '20–30 %', p: '700–1.400 €', a: '8–12 Jahre' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-emerald-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row.e}</td>
                          <td className="px-5 py-3 text-slate-700">{row.p}</td>
                          <td className="px-5 py-3 text-slate-600">{row.a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900">
                  <strong>Profi-Tipp:</strong> Beginnen Sie mit den günstigen Maßnahmen (Dichtungstausch, Justage)
                  und prüfen Sie nach einer Heizperiode, ob das ausreicht. Häufig sparen schon diese kleinen
                  Maßnahmen 10–20 % – ein Komplett-Tausch ist dann unnötig.
                </div>
              </section>

              <section id="beispiele" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Erfolgsprojekte aus der Region</h2>
                <p className="text-slate-500 text-sm mb-6">Was wir in Wien & NÖ schon erreicht haben</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Einfamilienhaus Tulln (Bj. 1985)</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Kunststofffenster 30 Jahre alt, ständige Zugluft, Heizkosten 2.400 €/Jahr.
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 mb-3 ml-1">
                      <li>• Dichtungs-Komplettaustausch (8 Fenster)</li>
                      <li>• Beschlag-Justage</li>
                      <li>• Anschlussfugen nachgespritzt</li>
                    </ul>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm">
                      <strong className="text-emerald-800">Ergebnis:</strong> -28 % Heizkosten · Investition 850 € · Amortisation nach 13 Monaten
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Mehrfamilienhaus Baden (Bj. 1910)</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Original-Holzfenster, denkmalgeschützt, Heizkosten 4.800 €/Jahr.
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700 mb-3 ml-1">
                      <li>• Spezial-Dichtungssystem für Holzfenster</li>
                      <li>• Innengläser mit Wärmeschutz</li>
                      <li>• Holz-Restauration mit Lasur</li>
                    </ul>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm">
                      <strong className="text-emerald-800">Ergebnis:</strong> -22 % Heizkosten bei voller Erhaltung des Charakters
                    </div>
                  </div>
                </div>
              </section>

              <section id="foerderung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Förderungen in Niederösterreich</h2>
                <p className="text-slate-500 text-sm mb-6">Bis zu 30 % vom Staat</p>
                <div className="space-y-3">
                  {[
                    { t: 'NÖ Wohnbauförderung – Sanierung', d: 'Annuitätenzuschuss zu Krediten für thermische Sanierung. Förderintensität abhängig von Einkommen und Maßnahme.' },
                    { t: 'Bundesförderung „Sanierungsoffensive"', d: 'Bis zu 30 % Zuschuss bei Komplett-Sanierung mit Energieausweis-Verbesserung.' },
                    { t: 'Steuerabsetzbarkeit', d: 'Thermisch-energetische Sanierung absetzbar als „Sonderausgabe" auf 10 Jahre.' },
                    { t: 'Versicherungs-Rabatte', d: 'Modernisierte Fenster (RC2, dichte Beschläge) führen oft zu 5–10 % Versicherungsrabatt.' },
                  ].map((f) => (
                    <div key={f.t} className="flex gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                      <span className="text-emerald-600 font-bold flex-shrink-0">€</span>
                      <div>
                        <p className="font-bold text-slate-800 mb-1">{f.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  Wir kennen die aktuellen Programme und bei Bedarf reichen wir mit Ihnen die Anträge ein.
                  Sprechen Sie uns einfach beim Beratungstermin darauf an.
                </p>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Investition & Amortisation</h2>
                <p className="text-slate-500 text-sm mb-6">Eine konkrete Beispielrechnung</p>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <p className="text-sm text-slate-500 mb-4">Beispiel: Einfamilienhaus 130 m², Bj. 1990, NÖ Speckgürtel</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Vorher</p>
                      <p className="text-3xl font-extrabold text-slate-800">2.400 €/Jahr</p>
                      <p className="text-xs text-slate-500 mt-1">Heizkosten Gas (alt)</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-emerald-700 mb-2">Nach Sanierung</p>
                      <p className="text-3xl font-extrabold text-emerald-700">1.680 €/Jahr</p>
                      <p className="text-xs text-emerald-700 mt-1">−30 % = 720 € Ersparnis</p>
                    </div>
                  </div>
                  <hr className="my-5 border-slate-200" />
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-slate-500 text-xs">Investition</p>
                      <p className="font-bold text-slate-800">2.150 €</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-500 text-xs">Förderung NÖ</p>
                      <p className="font-bold text-emerald-700">−540 €</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-500 text-xs">Amortisation</p>
                      <p className="font-bold text-emerald-700">~2,2 Jahre</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Kostenlose Spar-Analyse</p>
                  <p className="text-emerald-100 text-sm mt-1">Wir kommen mit Wärmebildkamera und sagen Ihnen, was wirklich nötig ist.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin anfragen →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Antworten zu Energiesparen mit Fenstern</p>
                <div className="space-y-4">
                  {[
                    { q: 'Wie viel Heizkosten kann ich sparen?', a: '15–30 % bei verschlissenen Dichtungen. Bei 1.800 € Heizkosten/Jahr sind das 270–540 € Ersparnis. Amortisation 1–3 Jahre.' },
                    { q: 'Müssen alte Fenster komplett getauscht werden?', a: 'Nicht zwangsläufig. Dichtungstausch, Justage, Glas-Tausch sind oft günstiger und ähnlich wirksam. Profi-Diagnose mit Wärmebildkamera empfohlen.' },
                    { q: 'Welche Förderungen gibt es?', a: 'NÖ Wohnbauförderung, Bundes-Sanierungsoffensive, Steuerabsetzbarkeit, Versicherungsrabatte. Bis zu 30 % Zuschuss möglich.' },
                    { q: 'Was ist der U-Wert?', a: 'Wärmedurchgangskoeffizient. Niedriger ist besser. Alte Einfachverglasung 5,0; modernes 3-fach-Glas 0,5. Ab >1,3 lohnt Modernisierung.' },
                    { q: 'Lohnt sich Tausch in Altbauten?', a: 'Ja – mit speziellen Sanierungsfenstern für historische Fassaden. Wir haben in NÖ viele solche Projekte mit 20–25 % Energieeinsparung umgesetzt.' },
                    { q: 'Was bringt mehr: Dichtungs- oder Glas-Tausch?', a: 'Bei alten Dichtungen: erst diese tauschen (günstig, wirksam). Bei alter Verglasung mit hohem U-Wert: Glas-Tausch sinnvoll. Beides zusammen ist optimal.' },
                    { q: 'Kann ich selbst Fenster abdichten?', a: 'Dichtungstausch und kleinere Abdichtungen ja. Anschluss-Fugen und Glas-Tausch sind Profi-Arbeit – ein Fehler hier kostet mehr als die Reparatur.' },
                  ].map((item, i) => (
                    <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:bg-slate-100 list-none">
                        {item.q}
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg ml-4">⌄</span>
                      </summary>
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200">{item.a}</div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fazit</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Dichte Fenster sind die effizienteste Energiesparmaßnahme</strong>, die Sie in 1–2 Tagen
                  umsetzen können. Die Kombination aus Dichtungstausch, Justage und gegebenenfalls Glas-Tausch
                  ist meist günstiger und ähnlich wirksam wie ein Komplett-Tausch.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Mehr Detail-Tipps in{' '}
                  <Link href="/blog/fensterdichtungen-austauschen" className="text-emerald-700 underline font-semibold">
                    Fensterdichtungen austauschen
                  </Link>{' '}
                  und{' '}
                  <Link href="/blog/fenster-einstellen-lassen" className="text-emerald-700 underline font-semibold">
                    Fenster einstellen lassen
                  </Link>.
                </p>
              </section>

              <div className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Wir analysieren Ihre Heizkosten</h2>
                <p className="text-emerald-100 mb-6 max-w-md mx-auto">
                  Wärmebildkamera, Schwachstellenanalyse, Sparpotenzial – alles kostenlos und unverbindlich.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-emerald-700 font-bold px-7 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm">
                    Spar-Termin anfragen
                  </Link>
                  <a href="tel:+436644351622" className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm">
                    📞 +43 664 435 1622
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <span>© 2026 Fenster Service ROWO</span>
                <nav className="flex gap-6">
                  <Link href="/blog" className="hover:text-blue-600 transition-colors">← Blog</Link>
                  <Link href="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
                  <Link href="/kontakt" className="hover:text-blue-600 transition-colors">Kontakt</Link>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
