import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fensterwartung im Winter | Profi-Anleitung & Service in NÖ & Wien',
  description: 'So pflegen Sie Ihre Fenster richtig durch Winter, Frost und Eis: Reinigen, schmieren, justieren, Dichtungen prüfen. Service in Wien, Tulln, Krems & ganz Niederösterreich.',
  keywords: [
    'fensterwartung wien', 'fenster einstellen tulln', 'fensterpflege winter',
    'fenster service baden', 'fenster reparieren st. pölten', 'beschläge winterfest',
    'frostfeste fenster', 'fenster vereist', 'beschläge ölen winter',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/fensterwartung-im-winter' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was tun, wenn das Fenster im Winter klemmt oder vereist ist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niemals mit Gewalt öffnen – Beschläge und Dichtung können brechen. Bei Vereisung mit Haartrockner auf niedriger Stufe vorsichtig auftauen. Niemals heißes Wasser. Mehrfach versuchen, sanft zu bewegen. Hilft nichts: Profi rufen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann sollte ich Fensterwartung machen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zwei Wartungstermine pro Jahr: Herbst (Oktober/November) zur Vorbereitung auf Winter und Frühjahr (März/April) zur Bestandsaufnahme nach der Heizperiode. Profi-Wartung alle 1–2 Jahre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Fensterwartung im Winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine komplette Profi-Wartung für eine Wohnung kostet 180–380 €. Akute Reparaturen (klemmendes Fenster, vereister Beschlag) im Notdienst-Modus 90–180 € pro Termin in Wien und Niederösterreich.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum vereisen Fensterbeschläge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eindringende Feuchtigkeit (Kondenswasser, Schlagregen) gefriert in den Mechanik-Spalten. Häufige Ursachen: undichte Dichtungen, fehlende Wartung, falsche Schmiermittel die Wasser einschließen. Mit jährlicher Schmierung und intakten Dichtungen kein Problem mehr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Schmiermittel sind im Winter geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spezielles Beschlagsspray mit Frostschutz oder dünnflüssiges Nähmaschinenöl. Auch Silikon-basiertes Öl ist gut. Vermeiden: WD-40 (verdunstet zu schnell), Speiseöle (verharzen), Vaseline (zieht Schmutz an).',
      },
    },
  ],
}

const toc = [
  { id: 'warum', label: 'Warum gerade Winter?' },
  { id: 'pflege', label: 'Pflege-Routine' },
  { id: 'probleme', label: 'Typische Winter-Probleme' },
  { id: 'profi', label: 'Profi-Service' },
  { id: 'regional', label: 'Regionale Tipps' },
  { id: 'kosten', label: 'Kosten & Nutzen' },
  { id: 'faq', label: 'FAQ' },
]

export default function FensterwartungImWinterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Wartung', 'Winter', 'Pflege', 'Frost'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fensterwartung im Winter<br />
              <span className="text-blue-200">So verlängern Sie die Lebensdauer Ihrer Fenster</span>
            </h1>
            <p className="text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Frost, Feuchtigkeit, Streusalz: Der Winter setzt Ihren Fenstern ordentlich zu. Wir zeigen Ihnen,
              wie Sie selbst pflegen, was der Profi macht und welche Probleme Sie sofort erkennen sollten.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100/90">
              <span>Veröffentlicht: 10. November 2025</span>
              <span>•</span>
              <span>Lesezeit: 9 Min.</span>
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
                      🔧 Wartung buchen
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
                <Image src="/Images/Fenster Dichtungstausch im Winter.webp" alt="Fensterwartung im Winter – professionelle Pflege für Frost & Feuchtigkeit" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Auf einen Blick</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Im Winter: Schmierung & Dichtungspflege wichtig, vor allem nach Frost</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Vereiste Beschläge mit Haartrockner auftauen – nie mit Gewalt</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Profi-Wartung 2× jährlich (Herbst + Frühjahr) verlängert die Lebensdauer um Jahre</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Akute Hilfe bei klemmenden Fenstern: meist binnen 24–48 h</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Die Wintermonate stellen besondere Anforderungen an Ihre Fenster. Kälte, Feuchtigkeit und ständige
                Temperaturschwankungen zwischen warmer Innenluft und eisiger Außentemperatur können zu erheblichen
                Problemen führen. Viele Hausbesitzer bemerken erst im Winter, dass ihre Fenster nicht mehr einwandfrei
                funktionieren – wenn es oft schon zu spät für einfache Maßnahmen ist.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Besonders in <strong>Wien</strong>, im <strong>Wienerwald</strong>, im <strong>Tullnerfeld</strong>
                und im <strong>Mostviertel</strong>, wo die Temperaturen häufig unter den Gefrierpunkt fallen,
                ist eine rechtzeitige Fensterpflege unerlässlich.
              </p>

              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Warum Winter für Fenster kritisch ist</h2>
                <p className="text-slate-500 text-sm mb-6">Die drei größten Belastungen</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { i: '🥶', t: 'Temperatur-Wechsel', d: 'Innen 21 °C, außen -10 °C – das sind 30 K Differenz. Materialien arbeiten ständig, Dichtungen bekommen Mikro-Risse.' },
                    { i: '💧', t: 'Feuchtigkeit', d: 'Kondenswasser dringt in Beschlag-Spalte, gefriert dort. Streusalz an Erdgeschossfenstern beschleunigt Korrosion.' },
                    { i: '🌪️', t: 'Wind & Sturm', d: 'Schlagregen drückt Wasser durch undichte Dichtungen ins Innere. Sturmböen belasten die Beschläge bei jedem Öffnen.' },
                  ].map((b) => (
                    <div key={b.t} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                      <span className="text-3xl mb-3 block">{b.i}</span>
                      <h3 className="font-bold text-slate-800 mb-2 text-sm">{b.t}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{b.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="pflege" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Pflege-Routine für den Winter</h2>
                <p className="text-slate-500 text-sm mb-6">Vier Aufgaben, die Sie selbst erledigen können</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🧹 Reinigung</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Fensterschienen von Schmutz, Laub, Streusalz befreien</li>
                      <li>• Dichtungen mit feuchtem Tuch reinigen</li>
                      <li>• Wasserablaufschlitze unten im Rahmen freilegen</li>
                      <li>• Glas und Rahmen mit mildem Reiniger</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🛢️ Schmierung</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Beschläge mit Beschlagsspray (frostfest)</li>
                      <li>• Scharniere und Hebel ölen</li>
                      <li>• Schließzapfen und Verriegelungen</li>
                      <li>• Niemals: WD-40 (verdunstet), Vaseline, Speiseöl</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🛡️ Dichtungspflege</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Sichtkontrolle auf Risse und Verformung</li>
                      <li>• Pflegestift mit Silikon oder Talkum</li>
                      <li>• Sprödes Material → austauschen</li>
                      <li>• Anpressdruck am Beschlag prüfen</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">⚙️ Funktionstest</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Öffnen, Kippen, Schließen mehrmals</li>
                      <li>• Auf gleichmäßigen Lauf achten</li>
                      <li>• Spaltmaße prüfen (sollten gleichmäßig sein)</li>
                      <li>• Schwergängigkeit ist Warnsignal</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="probleme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Typische Winter-Probleme</h2>
                <p className="text-slate-500 text-sm mb-6">Erste Hilfe & Warnsignale</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Vereiste Beschläge', d: 'Mit Haartrockner auf niedriger Stufe vorsichtig auftauen. Niemals heißes Wasser – Materialschock! Danach trocknen und schmieren.', warn: false },
                    { t: 'Klemmende Fenster', d: 'Erst Reinigen und Schmieren. Bleibt das Problem, ist meist eine Justage nötig. Lesen Sie auch: Fenster einstellen lassen.', warn: false },
                    { t: 'Beschlagene Scheiben', d: 'Innen: Lüftungsverhalten anpassen. Zwischen Glasebenen: Isolierglas defekt – Glas-Tausch nötig.', warn: false },
                    { t: 'Zugluft trotz geschlossenem Fenster', d: 'Dichtung verschlissen oder Beschlag-Andruck zu gering. Profi-Justage oder Dichtungstausch.', warn: false },
                    { t: 'Knack-/Klick-Geräusche beim Schließen', d: 'Lockere Beschlag-Schraube oder verbogenes Lager. Unbedingt prüfen lassen, bevor der Flügel herausfällt.', warn: true },
                  ].map((p, i) => (
                    <li key={p.t} className={`flex gap-4 p-5 rounded-2xl border ${p.warn ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-100'}`}>
                      <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold ${p.warn ? 'bg-red-600 text-white' : 'bg-blue-700 text-white'}`}>{i + 1}</div>
                      <div>
                        <p className={`font-semibold mb-1 ${p.warn ? 'text-red-800' : 'text-slate-800'}`}>{p.t}</p>
                        <p className={`text-sm leading-relaxed ${p.warn ? 'text-red-700' : 'text-slate-600'}`}>{p.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="profi" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann braucht es den Fachbetrieb?</h2>
                <p className="text-slate-500 text-sm mb-6">Klare Entscheidungshilfe</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2"><span className="text-xl">✅</span> Selber lösen</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Reinigung & Schmierung</li>
                      <li className="flex gap-2"><span>✓</span>Vereisung sanft auftauen</li>
                      <li className="flex gap-2"><span>✓</span>Sichtkontrolle</li>
                      <li className="flex gap-2"><span>✓</span>Pflegestift für Dichtungen</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2"><span className="text-xl">🔴</span> Profi rufen</h3>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex gap-2"><span>!</span>Schwergängige Fenster</li>
                      <li className="flex gap-2"><span>!</span>Sichtbar verzogene Beschläge</li>
                      <li className="flex gap-2"><span>!</span>Dichtungen brüchig oder fehlend</li>
                      <li className="flex gap-2"><span>!</span>Beschlag-Geräusche beim Schließen</li>
                      <li className="flex gap-2"><span>!</span>Spaltmaße ungleichmäßig</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="regional" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Regionale Tipps</h2>
                <p className="text-slate-500 text-sm mb-6">Was wir in Wien & NÖ aus Erfahrung wissen</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">❄️ Mostviertel & Waldviertel</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Temperaturen bis -20 °C, hohe Schneelast. Hier ist <strong>frostbeständiges Schmiermittel</strong>
                      Pflicht, sonst zähflüssig und kontraproduktiv. Holzfenster brauchen jährliche Lasur.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🏙️ Wien & Speckgürtel</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Hohe Luftfeuchtigkeit aus Donau und Wienerwald. <strong>Kondenswasser-Probleme</strong>
                      sind häufiger. Dichtungspflege wichtig. Streusalz in Erdgeschossen → besonders gründlich reinigen.
                    </p>
                  </div>
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet Wartung – und was bringt sie?</h2>
                <p className="text-slate-500 text-sm mb-6">Investition mit klarem Return</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Leistung</th>
                        <th className="text-left px-5 py-4 font-semibold">Kosten</th>
                        <th className="text-left px-5 py-4 font-semibold">Nutzen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Eigenpflege jährlich', p: '15–40 €', n: 'Material, lebensverlängernd' },
                        { t: 'Profi-Wartung Wohnung', p: '180–380 €', n: '+8–12 Jahre Lebensdauer' },
                        { t: 'Notdienst Reparatur', p: '90–180 €', n: 'Akut – verhindert Folgeschäden' },
                        { t: 'Komplett-Tausch (8 Fenster)', p: '5.000–12.000 €', n: 'Letzte Option' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-blue-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row.p}</td>
                          <td className="px-5 py-3 text-slate-600">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-sm text-emerald-900">
                  <strong>Faustregel:</strong> Wer 200 € Wartung pro Jahr investiert, spart sich oft mehrere
                  Tausend Euro für einen vorzeitigen Komplett-Tausch. Lesen Sie auch unseren{' '}
                  <Link href="/blog/fenster-fruehjahrscheck" className="font-semibold underline hover:text-emerald-700">
                    Frühjahrscheck-Leitfaden
                  </Link>.
                </div>
              </section>

              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Winter-Notdienst aktiv</p>
                  <p className="text-blue-100 text-sm mt-1">Klemmendes Fenster, vereister Beschlag? Wir kommen meist innerhalb von 24–48 h.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin sichern →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Alles, was unsere Kunden im Winter fragen</p>
                <div className="space-y-4">
                  {[
                    { q: 'Was tun, wenn das Fenster im Winter klemmt oder vereist ist?', a: 'Niemals mit Gewalt. Vereisung mit Haartrockner auf niedriger Stufe auftauen. Kein heißes Wasser. Sanft bewegen. Hilft nichts: Profi.' },
                    { q: 'Wann sollte ich Fensterwartung machen?', a: '2× jährlich – Herbst (Vorbereitung Winter) und Frühjahr (Bestandsaufnahme). Profi-Wartung alle 1–2 Jahre.' },
                    { q: 'Was kostet Fensterwartung?', a: 'Komplette Wohnungs-Wartung 180–380 €. Notreparatur 90–180 € pro Termin in Wien & NÖ.' },
                    { q: 'Warum vereisen Fensterbeschläge?', a: 'Kondenswasser oder Schlagregen gefriert in Spalten. Mit jährlicher Schmierung und intakten Dichtungen kein Problem.' },
                    { q: 'Welches Schmiermittel im Winter?', a: 'Beschlagsspray mit Frostschutz oder dünnflüssiges Nähmaschinenöl. Kein WD-40, keine Vaseline, keine Speiseöle.' },
                    { q: 'Kann ich Fenster im Winter selbst justieren?', a: 'Bei Hitze schwierig (Material kontrahiert), im Winter prinzipiell ja – aber das Material ist spröder, ein Fehler wird teurer. Im Zweifel Profi.' },
                    { q: 'Wie oft Dichtungen tauschen?', a: 'EPDM-Dichtungen halten 15–25 Jahre. Erste Verschleißanzeichen meist nach 10–12 Jahren. Mehr in unserem Artikel zum Dichtungstausch.' },
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
                  Wer im Winter Probleme mit Fenstern bekommt, hätte sie meist im Herbst leicht vermeiden können.
                  Die Pflege-Routine dauert pro Fenster nur 5 Minuten und verlängert die Lebensdauer um Jahre.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Wenn etwas akut nicht funktioniert: Nicht mit Gewalt – wir kommen meist binnen 24–48 h.
                  Mehr zur Justage in{' '}
                  <Link href="/blog/fenster-einstellen-lassen" className="text-blue-600 underline font-semibold">
                    Fenster einstellen lassen
                  </Link>{' '}
                  und zum Energiesparen in{' '}
                  <Link href="/blog/energie-sparen-im-winter" className="text-blue-600 underline font-semibold">
                    Energie sparen im Winter
                  </Link>.
                </p>
              </section>

              <div className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Profi-Wartung jetzt buchen</h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">
                  Wir machen Ihre Fenster fit für Winter und Sommer – schnell, sauber, mit Garantie.
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
