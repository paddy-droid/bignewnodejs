import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fenster-Frühjahrscheck 2026 | Profi-Wartung & Pflege-Anleitung',
  description: 'Die komplette Frühjahrscheckliste für Fenster: Dichtungen, Beschläge, Glas, Holz. Inkl. Profi-Tipps, Kostenüberblick & Service in Wien, Krems, Tulln & St. Pölten.',
  keywords: [
    'fensterwartung wien', 'dichtungen pflegen anleitung', 'fenster einstellen krems',
    'fensterbeschläge ölen', 'holzfenster wartung', 'kunststofffenster reinigen',
    'fenster service niederösterreich', 'fenster frühjahrscheck', 'fenster reinigen anleitung',
  ],
  alternates: { canonical: 'https://fensterservice-rowo.at/blog/fenster-fruehjahrscheck' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie oft sollte man Fenster warten lassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine professionelle Fensterwartung empfehlen wir alle 1–2 Jahre, idealerweise im Frühjahr. Die jährliche Eigenpflege (Dichtungen reinigen, Beschläge schmieren) sollten Sie selbst machen. Das verlängert die Lebensdauer der Fenster um durchschnittlich 8–12 Jahre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet ein Fenster-Frühjahrscheck vom Profi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Komplett-Service für die ganze Wohnung (alle Fenster reinigen, justieren, schmieren, Dichtungen prüfen) kostet in Wien und Niederösterreich typischerweise 180–380 €. Einzelne Fenster ab ca. 80 € inkl. Anfahrt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welches Öl für Fensterbeschläge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verwenden Sie ausschließlich harz- und säurefreies Öl – am besten ein spezielles Beschlagsspray. Nähmaschinenöl funktioniert auch. WD-40 ist nur zum Reinigen geeignet, schmiert aber nicht dauerhaft. Nie Speiseöle, Vaseline oder Olivenöl verwenden – diese verharzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie pflege ich Fensterdichtungen richtig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einmal jährlich mit klarem Wasser und einem weichen Tuch reinigen (keine aggressiven Reiniger). Anschließend mit Silikon- oder Talkum-Pflegestift behandeln. Das hält den Gummi geschmeidig und verhindert das Festkleben am Rahmen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Woran erkenne ich, dass mein Fenster eingestellt werden muss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wenn der Griff schwergängig ist, der Flügel beim Schließen schleift oder Sie Zugluft bei geschlossenem Fenster spüren, ist eine Justage fällig. Auch sichtbar ungleiche Spaltmaße zwischen Flügel und Rahmen sind ein Warnsignal.',
      },
    },
  ],
}

const toc = [
  { id: 'warum', label: 'Warum Frühjahr?' },
  { id: 'dichtungen', label: 'Dichtungen prüfen' },
  { id: 'mechanik', label: 'Beschläge & Mechanik' },
  { id: 'glas', label: 'Glas & Rahmen' },
  { id: 'checkliste', label: 'Checkliste DIY' },
  { id: 'profi', label: 'Profi-Service' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'faq', label: 'FAQ' },
]

export default function FensterFruehjahrscheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-800 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Wartung', 'Frühjahr', 'Werterhalt', 'DIY + Profi'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fenster-Frühjahrscheck 2026<br />
              <span className="text-cyan-200">Die komplette Profi-Anleitung</span>
            </h1>
            <p className="text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Nach dem Winter ist vor dem Sommer: Mit unserer Schritt-für-Schritt-Checkliste machen Sie Ihre Fenster
              fit für das ganze Jahr. Plus: Wann sich der Profi-Service wirklich lohnt.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100/90">
              <span>Veröffentlicht: 20. Januar 2026</span>
              <span>•</span>
              <span>Lesezeit: 10 Min.</span>
              <span>•</span>
              <span>Fensterservice Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Inhalt</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-white px-3 py-2 rounded-lg transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />{item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-blue-200">
                    <Link href="/kontakt" className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-3 rounded-xl">
                      🔧 Service buchen
                    </Link>
                    <a href="tel:+436644351622" className="block w-full text-center mt-2 border border-blue-300 text-blue-800 hover:bg-blue-100 text-sm font-semibold px-4 py-3 rounded-xl">
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <article className="flex-1 min-w-0">
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image src="/Images/fenster-fruehjahrscheck.png" alt="Profi beim Fenster-Frühjahrscheck – Dichtungen und Beschläge prüfen" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Kurz gesagt</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Frühjahrscheck verlängert die Lebensdauer um durchschnittlich 8–12 Jahre</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Eigenpflege jährlich, Profi-Wartung alle 1–2 Jahre</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Drei Hauptpunkte: Dichtungen, Beschläge, Glas/Rahmen</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Profi-Komplettservice ab ca. 180 € für eine Wohnung</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Der Winter in Ostösterreich setzt Fenstermaterialien ordentlich zu: Eis, Schnee, Streusalz an
                Erdgeschossfenstern, ständige Temperaturschwankungen zwischen geheizten Innenräumen und frostiger
                Außenluft. Jetzt, wo die Tage wieder länger werden, ist der ideale Zeitpunkt für eine gründliche
                Bestandsaufnahme.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir zeigen Ihnen Schritt für Schritt, was Sie selbst prüfen können – und wann es sich wirklich
                lohnt, den Profi zu rufen. Besonders in windreichen Lagen wie dem <strong>Tullnerfeld</strong>,
                dem <strong>Weinviertel</strong> oder oberen Donauraum merken Bewohner oft erst im Frühling,
                dass Fenster undicht geworden sind.
              </p>

              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Warum gerade im Frühjahr?</h2>
                <p className="text-slate-500 text-sm mb-6">Drei gute Gründe</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { i: '🌡️', t: 'Mildes Wetter', d: 'Bei 10–18 °C ist Dichtungs- und Lackmaterial flexibel – ideal für Reparaturen und Wartung.' },
                    { i: '👀', t: 'Schäden sichtbar', d: 'Sonnenlicht legt Mikrorisse, Verschmutzungen und Verformungen offen, die im Winter unsichtbar sind.' },
                    { i: '⏰', t: 'Vor dem Sommer', d: 'Bevor Hitze, Insekten und Gewitter kommen, sollten Fenster top in Schuss sein.' },
                  ].map((p) => (
                    <div key={p.t} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center">
                      <span className="text-3xl mb-3 block">{p.i}</span>
                      <h3 className="font-bold text-slate-800 mb-2">{p.t}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{p.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="dichtungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Dichtungen – das A und O</h2>
                <p className="text-slate-500 text-sm mb-6">Energiefresser Nr. 1</p>
                <div className="grid md:grid-cols-2 gap-8 mb-6 items-center">
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Sind Ihre Gummidichtungen noch elastisch oder fühlen sie sich hart und spröde an? Poröse
                      Dichtungen sind der Hauptgrund für Wärmeverluste – und damit teure Heizkostenrechnungen.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong>Profi-Tipp:</strong> Reinigen Sie die Dichtungen einmal jährlich mit klarem Wasser
                      und einem weichen Tuch. Verzichten Sie auf aggressive Reiniger – die zerstören das Material.
                      Anschließend mit einem Pflegestift auf Silikon- oder Talkum-Basis behandeln.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Sollten die Dichtungen Risse zeigen oder fest am Rahmen kleben, hilft nur Austausch.
                      Mehr dazu in unserem Spezialartikel{' '}
                      <Link href="/blog/fensterdichtungen-austauschen" className="text-blue-600 underline font-semibold">
                        Fensterdichtungen austauschen
                      </Link>.
                    </p>
                  </div>
                  <div className="relative h-64 w-full">
                    <Image src="/Images/dichtungspflege-detail.png" alt="Nahaufnahme: Pflege der Fensterdichtung mit Pflegestift" fill className="rounded-2xl shadow-md object-cover" />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-900">
                  <strong>So testen Sie Dichtungen:</strong> Klemmen Sie ein Blatt Papier zwischen Flügel und Rahmen,
                  schließen das Fenster und ziehen am Papier. Lässt es sich leicht herausziehen, ist die Dichtung
                  nicht mehr ausreichend.
                </div>
              </section>

              <section id="mechanik" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Beschläge & Mechanik</h2>
                <p className="text-slate-500 text-sm mb-6">Damit Ihr Fenster ein Leben lang leichtgängig bleibt</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Sichtprüfung', d: 'Alle Beschlag-Teile auf Risse, Verbiegungen oder Lockerheit prüfen. Bei Holzfenstern auf Beschlagschrauben achten – sie können sich durch Materialarbeit lockern.' },
                    { t: 'Reinigung', d: 'Falze und Beschläge mit Pinsel oder Druckluft von Staub und Pollen befreien. In den Schließzapfen-Bereichen besonders gründlich.' },
                    { t: 'Schmierung', d: 'Alle beweglichen Metallteile mit harzfreiem Beschlagsspray oder Nähmaschinenöl behandeln. NIE Speiseöle oder Vaseline – die verharzen!' },
                    { t: 'Funktionstest', d: 'Fenster mehrmals öffnen, kippen, schließen. Auf gleichmäßigen Anpressdruck und leichten Lauf achten. Bei Schwergängigkeit: Profi rufen.' },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4 p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{step.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="glas" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Glas & Rahmen</h2>
                <p className="text-slate-500 text-sm mb-6">Die oft übersehenen Details</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Holzfenster</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Lackoberfläche auf Risse prüfen</li>
                      <li>• Wasser-Ablaufschlitze freihalten</li>
                      <li>• Bei Bedarf nachstreichen oder lasieren</li>
                      <li>• Holzkitt bei kleinen Beschädigungen</li>
                      <li>• Wetterschenkel auf Festigkeit prüfen</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Kunststofffenster</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Verfärbungen mit speziellen PVC-Reinigern</li>
                      <li>• Tiefe Kratzer mit PVC-Reparaturset</li>
                      <li>• Wasserablaufschlitze unten freilegen</li>
                      <li>• Glas auf Sprünge oder Schichtbeschädigung</li>
                      <li>• Zwischenraum-Dichtung (Verglasung) prüfen</li>
                    </ul>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  Beschlagene Scheiben <em>zwischen</em> den Glasebenen sind ein Hinweis auf eine defekte
                  Randverklebung – das Isolierglas muss getauscht werden. Wir bieten Glas-Tausch ohne kompletten
                  Fensterwechsel an.
                </p>
              </section>

              <section id="checkliste" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Die DIY-Checkliste in 5 Schritten</h2>
                <p className="text-slate-500 text-sm mb-6">Plan in 60–90 Minuten pro Wohnung</p>
                <div className="space-y-4">
                  {[
                    { c: 'border-blue-500', t: '1. Sichtprüfung', d: 'Alle Fenster und Türen abgehen. Notizen machen, was auffällt: schwergängig, undicht, beschädigt.' },
                    { c: 'border-emerald-500', t: '2. Reinigung', d: 'Glas, Rahmen, Falze, Wasserablaufschlitze und Dichtungen. Mit klarem Wasser und weichem Tuch.' },
                    { c: 'border-amber-500', t: '3. Pflege', d: 'Dichtungen mit Pflegestift behandeln. Beschläge schmieren. Bei Holzfenstern eventuell nachstreichen.' },
                    { c: 'border-purple-500', t: '4. Funktionstest', d: 'Jedes Fenster öffnen, kippen, schließen. Auf Geräusche, Schwergängigkeit, Spaltmaße achten.' },
                    { c: 'border-red-500', t: '5. Bilanz ziehen', d: 'Welche Probleme bleiben? Profi-Termin nur für die wirklich kritischen Stellen vereinbaren.' },
                  ].map((step) => (
                    <div key={step.t} className={`bg-white border-l-4 ${step.c} border-y border-r border-slate-200 rounded-r-2xl p-5 shadow-sm`}>
                      <h3 className="font-bold text-slate-800 mb-1">{step.t}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="profi" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann sich der Profi lohnt</h2>
                <p className="text-slate-500 text-sm mb-6">Klare Kriterien</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2"><span className="text-xl">✅</span> Selbst lösbar</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Reinigung & Pflege</li>
                      <li className="flex gap-2"><span>✓</span>Beschläge schmieren</li>
                      <li className="flex gap-2"><span>✓</span>Sichtkontrolle</li>
                      <li className="flex gap-2"><span>✓</span>Kleinere Lackausbesserungen</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2"><span className="text-xl">🔴</span> Profi notwendig</h3>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex gap-2"><span>!</span>Justage & Beschlag-Tausch</li>
                      <li className="flex gap-2"><span>!</span>Dichtungs-Komplettaustausch</li>
                      <li className="flex gap-2"><span>!</span>Glas-Tausch (Isolier-, Sicherheitsglas)</li>
                      <li className="flex gap-2"><span>!</span>Holz: Schaden im Tragegerüst</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet ein Profi-Frühjahrscheck?</h2>
                <p className="text-slate-500 text-sm mb-6">Richtwerte 2026</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Leistung</th>
                        <th className="text-left px-5 py-4 font-semibold">Umfang</th>
                        <th className="text-left px-5 py-4 font-semibold">Preis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Einzelfenster-Service', u: 'Reinigung, Justage, Schmierung', p: '80–130 €' },
                        { t: 'Wohnungs-Komplettcheck', u: 'Alle Fenster (4–6 Stk.)', p: '180–380 €' },
                        { t: 'Einfamilienhaus', u: 'Komplette Wartung 8–12 Fenster', p: '380–680 €' },
                        { t: 'Dichtungstausch pro Fenster', u: 'Material + Montage', p: '60–110 €' },
                        { t: 'Beschlag-Reparatur', u: 'Einzelner Beschlag-Teil', p: '120–280 €' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-blue-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 text-slate-600">{row.u}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Lieber gleich vom Profi machen lassen?</p>
                  <p className="text-blue-100 text-sm mt-1">Komplett-Service in Wien, Tulln, Krems, St. Pölten – ab ca. 180 €.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin sichern →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Alles, was unsere Kunden vor der Wartung fragen</p>
                <div className="space-y-4">
                  {[
                    { q: 'Wie oft sollte man Fenster warten lassen?', a: 'Eigenpflege jährlich, Profi-Wartung alle 1–2 Jahre. Das verlängert die Lebensdauer um durchschnittlich 8–12 Jahre.' },
                    { q: 'Was kostet ein Fenster-Frühjahrscheck vom Profi?', a: 'Komplett-Service für eine Wohnung 180–380 €. Einzelne Fenster ab ca. 80 € inkl. Anfahrt.' },
                    { q: 'Welches Öl für Fensterbeschläge?', a: 'Harz- und säurefreies Beschlagsspray oder Nähmaschinenöl. NIE Speiseöle, Vaseline oder Olivenöl – die verharzen.' },
                    { q: 'Wie pflege ich Fensterdichtungen?', a: 'Einmal jährlich mit klarem Wasser reinigen, dann mit Silikon- oder Talkum-Pflegestift behandeln.' },
                    { q: 'Woran erkenne ich, dass mein Fenster eingestellt werden muss?', a: 'Schwergängiger Griff, schleifender Flügel, Zugluft trotz geschlossenem Fenster oder ungleiche Spaltmaße sind klare Hinweise.' },
                    { q: 'Lohnt sich Wartung bei sehr alten Fenstern?', a: 'Bei Fenstern älter als 25 Jahre lohnt sich ein Kostenvergleich Wartung vs. Tausch. Wir beraten ehrlich – manchmal ist Tausch wirtschaftlicher.' },
                    { q: 'Welche Förderungen gibt es?', a: 'In Niederösterreich gibt es Wohnbauförderungen für thermische Sanierung. Beim Komplett-Tausch sind oft 20–30 % Zuschuss möglich – wir kennen die aktuellen Programme.' },
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
                  Ein <strong>Fenster-Frühjahrscheck</strong> dauert 60–90 Minuten und spart Ihnen langfristig
                  hunderte Euro – bei Heizkosten, Reparaturen und vorzeitigem Fenstertausch. Die meisten Punkte
                  können Sie selbst erledigen.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Für die fachgerechte Justage, den Dichtungs- oder Beschlag-Tausch lohnt sich der Profi.
                  Wir kommen in ganz Wien & Niederösterreich, sind kompetent ausgerüstet und reparieren in der
                  Regel beim ersten Termin.
                </p>
              </section>

              <div className="bg-gradient-to-br from-blue-700 to-cyan-700 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Frühjahrscheck vom Profi gewünscht?</h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">
                  Wir kommen vorbei und machen Ihre Fenster fit – schnell, sauber und kompetent.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-blue-700 font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                    Termin vereinbaren
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
