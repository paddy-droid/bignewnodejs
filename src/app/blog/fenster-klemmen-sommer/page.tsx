import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fenster klemmt im Sommer? Ursachen & Soforthilfe vom Profi',
  description: 'Fenster klemmt bei Hitze, schließt nicht mehr richtig oder schleift im Rahmen? Alle Ursachen, sofortige DIY-Tipps und wann der Profi muss. Service in Wien, Tulln, St. Pölten & ganz NÖ.',
  keywords: [
    'fenster klemmt sommer', 'fenster schleift hitze', 'beschläge einstellen tulln',
    'fenster reparatur wien', 'kunststofffenster verziehen', 'fenster justieren',
    'fenster schließt nicht', 'fenster geht schwer auf', 'fenster einstellen lassen',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/fenster-klemmen-sommer' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Warum klemmen Fenster im Sommer plötzlich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Materialien dehnen sich bei Hitze aus. Besonders Kunststoff- und Aluminiumfenster werden bei direkter Sonneneinstrahlung wenige Millimeter „größer". Reicht das Spaltmaß nicht aus, schleift der Flügel im Rahmen. Holzfenster reagieren zusätzlich auf Luftfeuchtigkeit und können quellen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kann ich tun, wenn das Fenster im Sommer klemmt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erstens: keine Gewalt. Versuchen Sie das Fenster in den kühlen Morgenstunden zu schließen, wenn das Material weniger ausgedehnt ist. Reinigen Sie Beschläge und Schienen, sprühen Sie ein harzfreies Beschlagsspray ein. Hilft das nicht: Fenstertechniker holen, der den Beschlag mit Inbusschrauben justiert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Fensterjustage durch den Profi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für 1–2 Fenster rechnen Sie mit 80–150 € inkl. Anfahrt in Wien und Niederösterreich. Bei mehreren Fenstern in einem Termin reduziert sich der Stückpreis deutlich. Eine vollständige Wartung (alle Fenster der Wohnung, Schmierung, Justage) kostet meist 250–450 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Fenster sind besonders anfällig für Hitzeklemmen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dunkle Kunststofffenster auf der Süd- und Westseite sind am anfälligsten – sie heizen sich bis 60 °C auf. Auch große Flügel über 1,4 m Höhe und Hebe-Schiebe-Türen sind oft betroffen. Holzfenster klemmen seltener thermisch, häufiger durch Quellen bei Regenwetter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich mein Fenster selbst justieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mit etwas handwerklichem Geschick: ja. Sie benötigen einen 4-mm-Inbusschlüssel. Die Justierschrauben sitzen am unteren Ecklager und am Scheren-Lager oben. Vorsicht: Falsches Drehen kann den Beschlag deformieren. Wer unsicher ist, sollte den Profi rufen – ein Fehlversuch kann teurer werden als die Justage selbst.',
      },
    },
  ],
}

const toc = [
  { id: 'physik', label: 'Warum klemmt es?' },
  { id: 'symptome', label: 'Symptome erkennen' },
  { id: 'sofort', label: 'Sofortmaßnahmen' },
  { id: 'diy', label: 'Selbst justieren' },
  { id: 'profi', label: 'Wann zum Profi?' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'vorbeugung', label: 'Vorbeugen' },
  { id: 'faq', label: 'FAQ' },
]

export default function FensterKlemmenSommerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-red-700 via-rose-700 to-red-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Reparatur', 'Sommer', 'Beschläge', 'Soforthilfe'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fenster klemmt im Sommer?<br />
              <span className="text-red-200">So bekommen Sie es wieder zum Laufen</span>
            </h1>
            <p className="text-red-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Hitze, falsch eingestellte Beschläge oder verzogene Rahmen: Wir zeigen alle Ursachen,
              Soforthilfe ohne Werkzeug und wann der Fenstertechniker übernehmen muss.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-red-100/90">
              <span>Veröffentlicht: 06. Mai 2026</span>
              <span>•</span>
              <span>Lesezeit: 7 Min.</span>
              <span>•</span>
              <span>Fensterservice Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Inhalt</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-700 hover:bg-white px-3 py-2 rounded-lg transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-red-200">
                    <Link href="/kontakt" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-3 rounded-xl">
                      🔧 Justage anfragen
                    </Link>
                    <a href="tel:+436644351622" className="block w-full text-center mt-2 border border-red-300 text-red-700 hover:bg-red-100 text-sm font-semibold px-4 py-3 rounded-xl">
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <article className="flex-1 min-w-0">
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image src="/Images/fenster_klemmen_sommer.png" alt="Fenstertechniker justiert klemmendes Fenster im Sommer" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-2">Schnellantwort</p>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  Klemmt Ihr Fenster nur im Hochsommer und schließt im Winter problemlos? Dann ist es fast immer
                  Materialausdehnung durch Hitze – kein Defekt. Sofortmaßnahme: <strong>nicht mit Gewalt drücken</strong>,
                  früh am Morgen schließen, Beschläge schmieren. Bleibt das Problem: Justage durch Fachbetrieb.
                </p>
                <ul className="text-sm text-slate-700 space-y-1.5">
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Häufigste Ursache: Sonneneinstrahlung dehnt Kunststoff/Alu aus</li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Selber lösbar: Reinigung & Schmierung der Beschläge</li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Profi-Justage kostet meist 80–150 € für 1–2 Fenster</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Im Winter zog es noch durch das Fenster, jetzt im Sommer lässt es sich kaum noch schließen –
                kommt Ihnen das bekannt vor? Sie sind nicht allein. Vor allem in den heißen Wochen Juni bis August
                bekommen wir in Wien und Niederösterreich täglich Anrufe von verzweifelten Hausbesitzern,
                deren Fenster „plötzlich nicht mehr funktionieren".
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Die gute Nachricht: In den meisten Fällen ist es kein Defekt, sondern Physik. Mit den richtigen
                Tricks bekommen Sie das Problem oft selbst in den Griff – und wenn nicht, ist eine Profi-Justage
                kein großer Aufwand und nicht teuer.
              </p>

              <section id="physik" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Warum Hitze Ihre Fenster verzieht</h2>
                <p className="text-slate-500 text-sm mb-6">Die Physik dahinter</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jeder Werkstoff dehnt sich bei Wärme aus – das nennt man <strong>Wärmeausdehnungskoeffizient</strong>.
                  Bei Kunststoffrahmen (PVC) sind das ca. 70 µm pro Meter und Grad Celsius. Heizt sich ein dunkler
                  Rahmen in der Sonne von 20 °C auf 60 °C auf, dehnt sich ein 1,5 m hoher Flügel um über 4 mm.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Genau diese 4 mm fehlen jetzt im Spaltmaß zum Blendrahmen – und schon schleift der Flügel.
                  Weil sich Rahmen und Flügel unterschiedlich erwärmen, entsteht zusätzlich eine leichte Verformung.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { mat: 'Kunststoff (PVC)', val: 'sehr hoch', color: 'red' },
                    { mat: 'Aluminium', val: 'mittel', color: 'amber' },
                    { mat: 'Holz', val: 'gering, aber feuchtigkeitsanfällig', color: 'emerald' },
                  ].map((m) => (
                    <div key={m.mat} className={`rounded-2xl border p-4 ${m.color === 'red' ? 'bg-red-50 border-red-200' : m.color === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200'}`}>
                      <p className="font-bold text-slate-800 text-sm">{m.mat}</p>
                      <p className="text-xs text-slate-600 mt-1">Hitzeempfindlichkeit: <strong>{m.val}</strong></p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="symptome" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Die typischen Symptome</h2>
                <p className="text-slate-500 text-sm mb-6">So unterscheiden Sie Hitze-Problem von echtem Defekt</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🌡️ Hitze-Symptom</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Fenster geht nur an heißen Tagen schwer zu</li>
                      <li>• Schleifgeräusch oben oder seitlich</li>
                      <li>• Im Winter funktioniert alles normal</li>
                      <li>• Betrifft mehrere Fenster auf der Sonnenseite</li>
                      <li>• Lässt sich am frühen Morgen schließen</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">⚙️ Echter Defekt</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Klemmt das ganze Jahr über</li>
                      <li>• Griff lässt sich nicht ganz drehen</li>
                      <li>• Flügel hängt sichtbar schief im Rahmen</li>
                      <li>• Knackgeräusch beim Schließen</li>
                      <li>• Beschlag-Teile sind sichtbar abgenutzt</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="sofort" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Sofortmaßnahmen</h2>
                <p className="text-slate-500 text-sm mb-6">Was Sie jetzt – ohne Werkzeug – tun können</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Keine Gewalt', d: 'Drücken oder ziehen Sie nicht mit aller Kraft. Sie riskieren, das Beschlag-Lager zu verbiegen oder den Griff abzubrechen. Beides ist deutlich teurer als die Hitze auszusitzen.' },
                    { t: 'Früh am Morgen schließen', d: 'Vor 7 Uhr ist das Material noch kühl und das Fenster passt wieder. Schließen Sie es dann und lassen Sie es geschlossen, bis die Sonne weiterzieht.' },
                    { t: 'Reinigen', d: 'Staub, Pollen und kleine Steinchen in der Falz erhöhen die Reibung. Mit feuchtem Tuch und Pinsel ausputzen, danach trocken wischen.' },
                    { t: 'Schmieren', d: 'Spezielles Beschlagsspray (kein WD-40, kein Olivenöl!) auf alle beweglichen Metallteile sprühen. Griff mehrmals betätigen, Überschuss abwischen.' },
                    { t: 'Sonnenschutz aktivieren', d: 'Rollladen oder Raffstore zumindest tagsüber schließen, damit der Rahmen sich nicht weiter aufheizt. Das wirkt oft wie eine Sofort-Reparatur.' },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{step.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="diy" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Selbst justieren – wenn Sie sich's zutrauen</h2>
                <p className="text-slate-500 text-sm mb-6">Mit Inbusschlüssel und etwas Geduld</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Moderne Drehkippbeschläge (Roto, Maco, Siegenia) lassen sich an drei Punkten justieren:
                  <strong> Höhe, Andruck und Seitenversatz</strong>. Sie brauchen einen 4-mm-Inbusschlüssel.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { t: 'Höhe', d: 'Schraube am unteren Ecklager. Im Uhrzeigersinn = anheben.' },
                    { t: 'Seite', d: 'Schraube unten oder am oberen Scheren-Lager. Korrigiert Seitenversatz.' },
                    { t: 'Andruck', d: 'Schließzapfen am Flügel-Rand. Mit Drehzapfen Andruck erhöhen.' },
                  ].map((p) => (
                    <div key={p.t} className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                      <p className="font-bold text-slate-800 text-sm mb-1">{p.t}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.d}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-900">
                  <strong>⚠️ Achtung:</strong> Drehen Sie die Schrauben nur viertelweise und prüfen Sie nach jeder
                  Korrektur den Lauf. Übertriebenes Justieren kann den Beschlag dauerhaft verziehen.
                  Im Zweifel den Profi rufen – wir kommen, schauen, und justieren in der Regel binnen 30 Minuten.
                </div>
              </section>

              <section id="profi" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann sollte der Profi ran?</h2>
                <p className="text-slate-500 text-sm mb-6">Klare Entscheidungshilfe</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2"><span className="text-xl">✅</span> Selbst lösbar</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Klemmt nur im Sommer</li>
                      <li className="flex gap-2"><span>✓</span>Reinigung & Schmierung helfen</li>
                      <li className="flex gap-2"><span>✓</span>Sie haben Inbus-Schlüssel & Zeit</li>
                      <li className="flex gap-2"><span>✓</span>Nur leichtes Schleifen</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2"><span className="text-xl">🔴</span> Profi notwendig</h3>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex gap-2"><span>!</span>Klemmt das ganze Jahr</li>
                      <li className="flex gap-2"><span>!</span>Griff lässt sich nicht voll drehen</li>
                      <li className="flex gap-2"><span>!</span>Flügel hängt sichtbar</li>
                      <li className="flex gap-2"><span>!</span>Beschlagsteile gebrochen</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet die Reparatur?</h2>
                <p className="text-slate-500 text-sm mb-6">Richtwerte für Wien und Niederösterreich (2026)</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-red-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Leistung</th>
                        <th className="text-left px-5 py-4 font-semibold">Aufwand</th>
                        <th className="text-left px-5 py-4 font-semibold">Kosten</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Reinigung & Schmierung', a: '15–30 Min', p: 'ab 60 €' },
                        { t: 'Justage 1 Fenster', a: '30–60 Min', p: '80–150 €' },
                        { t: 'Justage gesamte Wohnung', a: '2–4 Std', p: '250–450 €' },
                        { t: 'Beschlag-Teil tauschen', a: '1–2 Std', p: '120–280 €' },
                        { t: 'Kompletter Beschlag-Tausch', a: '2–4 Std', p: '350–650 €' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-red-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 text-slate-600">{row.a}</td>
                          <td className="px-5 py-3 font-semibold text-red-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">* Inkl. Anfahrt im Großraum Wien & NÖ.</p>
              </section>

              <section id="vorbeugung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">So vermeiden Sie es nächstes Jahr</h2>
                <p className="text-slate-500 text-sm mb-6">Vorbeugen ist günstiger als reparieren</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { i: '🌞', t: 'Außenliegender Sonnenschutz', d: 'Raffstore oder Rollladen schützt den Rahmen vor Aufheizung.' },
                    { i: '🛢️', t: 'Jährliche Schmierung', d: 'Im Frühjahr alle Beschläge mit Beschlagsspray pflegen.' },
                    { i: '🧹', t: 'Regelmäßige Reinigung', d: 'Falze und Dichtungen sauber halten – einmal im Quartal.' },
                    { i: '⚙️', t: 'Wartungs-Vertrag', d: 'Alle 1–2 Jahre Profi-Check spart langfristig Geld.' },
                  ].map((item) => (
                    <div key={item.t} className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-5 text-center">
                      <span className="text-3xl mb-3 block">{item.i}</span>
                      <h3 className="font-bold text-slate-800 text-sm mb-2">{item.t}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-5 bg-blue-50 border border-blue-200 rounded-2xl text-sm text-blue-900">
                  Mehr zur Wartung erfahren Sie in unserem Artikel{' '}
                  <Link href="/blog/fenster-fruehjahrscheck" className="font-semibold underline hover:text-blue-700">
                    Fenster-Frühjahrscheck
                  </Link>{' '}
                  und zur professionellen Justage in{' '}
                  <Link href="/blog/fenster-einstellen-lassen" className="font-semibold underline hover:text-blue-700">
                    Fenster einstellen lassen
                  </Link>.
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Antworten aus der Praxis</p>
                <div className="space-y-4">
                  {[
                    { q: 'Warum klemmen Fenster im Sommer plötzlich?', a: 'Materialien dehnen sich bei Hitze aus. Besonders Kunststoff- und Aluminiumfenster werden bei direkter Sonneneinstrahlung wenige Millimeter größer. Reicht das Spaltmaß nicht aus, schleift der Flügel.' },
                    { q: 'Was kann ich tun, wenn das Fenster im Sommer klemmt?', a: 'Erstens: keine Gewalt. Versuchen Sie das Fenster in den kühlen Morgenstunden zu schließen. Reinigen Sie Beschläge und Schienen, sprühen Sie Beschlagsspray ein. Hilft das nicht: Profi rufen.' },
                    { q: 'Was kostet eine Fensterjustage?', a: '80–150 € pro Fenster inkl. Anfahrt in Wien und NÖ. Eine vollständige Wohnungs-Justage liegt bei 250–450 €.' },
                    { q: 'Welche Fenster sind besonders anfällig?', a: 'Dunkle Kunststofffenster auf der Süd- und Westseite. Auch große Flügel und Hebe-Schiebe-Türen. Holzfenster klemmen seltener thermisch, häufiger durch Quellen bei Regen.' },
                    { q: 'Kann ich mein Fenster selbst justieren?', a: 'Ja, mit etwas Geschick. 4-mm-Inbusschlüssel reicht. Vorsicht: Falsches Drehen kann den Beschlag deformieren. Im Zweifel: Profi.' },
                    { q: 'Hilft Schmieren wirklich?', a: 'In etwa 30 % der Fälle reicht eine gründliche Reinigung und Schmierung der Beschläge. Probieren Sie es immer zuerst – kostet wenig und ist sofort gemacht.' },
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
                  Ein klemmendes Fenster im Sommer ist <strong>fast nie ein Defekt</strong>, sondern ein Hitze-Phänomen.
                  Mit Reinigung, Schmierung und Geduld lösen Sie das Problem oft selbst. Bleibt es bestehen,
                  ist eine Profi-Justage schnell, günstig und langlebig.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Wer langfristig Ruhe haben will, kombiniert die jährliche Wartung mit gutem außenliegendem
                  Sonnenschutz – dann bleiben die Rahmen kühl und die Fenster passen ganzjährig.
                </p>
              </section>

              <div className="bg-gradient-to-br from-red-700 to-rose-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Fenster lässt sich gar nicht mehr schließen?</h2>
                <p className="text-red-100 mb-6 max-w-md mx-auto">
                  Wir kommen meist binnen 24–48 h vorbei und justieren vor Ort. Wien, Tulln, St. Pölten, Krems & Klosterneuburg.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-red-700 font-bold px-7 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm">
                    Termin anfragen
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
