import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fenster einstellen lassen | Profi-Justage in Wien & Niederösterreich',
  description: 'Wenn Fenster klemmen, schief sitzen oder Zugluft kommt: Eine professionelle Justage löst 80 % aller Probleme. Ablauf, Kosten & wann es Pflicht ist. Service in ganz Wien & NÖ.',
  keywords: [
    'fenster einstellen lassen wien', 'fenster justieren tulln', 'fenster einstellen niederösterreich',
    'fenster service baden', 'fenster reparieren st. pölten', 'fenster schließt nicht',
    'beschlag justieren', 'fenster anpressdruck einstellen', 'fenster schief',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/fenster-einstellen-lassen' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet eine Fensterjustage durch den Profi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pro Fenster rechnen Sie inkl. Anfahrt in Wien und Niederösterreich mit 80–150 €. Bei einer kompletten Wohnung (4–6 Fenster) reduziert sich der Stückpreis – Komplettpaket meist 250–450 €. Akute Notreparaturen (z.B. Fenster lässt sich nicht schließen) ab 90 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft muss man Fenster justieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine professionelle Justage empfehlen wir alle 1–2 Jahre als Teil der regulären Wartung. Bei intensiver Nutzung (Mietwohnung, Gewerbe) auch jährlich. Wenn Sie Schwergängigkeit, Zugluft oder schlechtes Schließen bemerken: sofort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Werkzeuge braucht der Profi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inbusschlüssel-Set (3, 4, 5 mm), Schraubendreher, Wasserwaage, Spaltlehre, Beschlagsspray, gegebenenfalls Pflegestifte. Bei großen Justagen auch Hebewerkzeug für den Fensterflügel. Wir haben das alles standardmäßig im Servicewagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Fenster auch selbst einstellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mit etwas handwerklichem Geschick: ja. Sie brauchen einen 4-mm-Inbusschlüssel und Geduld. Vorsicht: Falsches Justieren kann den Beschlag deformieren. Kleine Korrekturen sind machbar; bei größeren Problemen lohnt der Profi – Fehler sind teurer als die Service-Rechnung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert eine Fensterjustage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pro Fenster ca. 20–45 Minuten – je nach Beschlag-Typ und Ausgangszustand. Eine komplette Wohnung mit 6 Fenstern dauert meist 2–3 Stunden inkl. Funktionstest. Sehr alte oder defekte Beschläge brauchen länger oder müssen ersetzt werden.',
      },
    },
  ],
}

const toc = [
  { id: 'symptome', label: 'Symptome erkennen' },
  { id: 'physik', label: 'Was passiert beim Justieren?' },
  { id: 'diy', label: 'Selbst einstellen' },
  { id: 'profi', label: 'Profi-Justage' },
  { id: 'ablauf', label: 'Ablauf vor Ort' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'regional', label: 'Wien & NÖ' },
  { id: 'faq', label: 'FAQ' },
]

export default function FensterEinstellenLassenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-700 via-sky-700 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Justage', 'Wartung', 'Energie', 'Reparatur'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fenster einstellen lassen<br />
              <span className="text-sky-200">Kleine Justierungen, große Wirkung</span>
            </h1>
            <p className="text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Schwergängige Fenster, Zugluft, schiefer Flügel: Eine professionelle Justage löst die meisten
              Probleme in weniger als einer Stunde – und ist deutlich günstiger als ein Beschlag-Tausch.
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
                      🔧 Justage anfragen
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
                <Image src="/Images/dichtungstausch-fenster.webp" alt="Fenster einstellen lassen – professionelle Justage durch den Fenstertechniker" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Auf einen Blick</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Justage löst 80 % aller Fenster-Probleme – ohne Teile-Tausch</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Pro Fenster 20–45 Minuten, Wohnung 2–3 Stunden</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Kosten 80–150 € pro Fenster, Komplettpaket ab 250 €</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> DIY mit 4-mm-Inbus möglich – aber Vorsicht bei schief sitzenden Flügeln</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Viele Hausbesitzer bemerken nicht sofort, dass ihre Fenster nicht mehr optimal funktionieren.
                Die Anzeichen sind oft subtil, werden aber mit der Zeit deutlicher: Der Griff geht schwer,
                ein leichter Lufthauch trotz geschlossenem Fenster, ein leiser Schleifton beim Schließen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Genau hier setzt eine <strong>Fensterjustage</strong> an. Sie ist eine der unterschätztesten,
                aber wirksamsten Wartungsmaßnahmen – und löst in 80 % aller Fälle das Problem ohne neuen Beschlag,
                ohne neues Glas, ohne neue Dichtungen.
              </p>

              <section id="symptome" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann sollte ich justieren lassen?</h2>
                <p className="text-slate-500 text-sm mb-6">Die typischen Warnsignale</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">⚠️ Akute Symptome</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Griff lässt sich nicht ganz drehen</li>
                      <li>• Fenster schleift im Rahmen</li>
                      <li>• Flügel hängt sichtbar schief</li>
                      <li>• Knack-Geräusche beim Schließen</li>
                      <li>• Spürbare Zugluft trotz geschlossenem Fenster</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">📉 Langfristige Folgen ohne Justage</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• 10–30 % höhere Heizkosten</li>
                      <li>• Schimmelbildung durch undichte Stellen</li>
                      <li>• Verschleiß der Beschläge beschleunigt sich</li>
                      <li>• Versprödung der Dichtungen</li>
                      <li>• Schlechterer Einbruchschutz</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="physik" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was passiert beim Justieren?</h2>
                <p className="text-slate-500 text-sm mb-6">Drei Achsen, drei Effekte</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { i: '↕️', t: 'Höhen-Justage', d: 'Am unteren Ecklager. Hebt oder senkt den Flügel. Korrigiert hängende Fenster.' },
                    { i: '↔️', t: 'Seiten-Justage', d: 'Am Scheren-Lager oben. Verschiebt den Flügel seitlich. Korrigiert Spaltmaße.' },
                    { i: '⊕', t: 'Andruck-Justage', d: 'An den Schließzapfen. Erhöht oder reduziert den Druck auf die Dichtung.' },
                  ].map((s) => (
                    <div key={s.t} className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
                      <span className="text-3xl mb-2 block">{s.i}</span>
                      <p className="font-bold text-slate-800 mb-1 text-sm">{s.t}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  Moderne Drehkippbeschläge (Roto, Maco, Siegenia, Winkhaus) lassen sich an diesen drei Achsen
                  exakt justieren – im Idealfall mit der Spaltlehre auf 1 mm genau. Ein gut eingestelltes
                  Fenster schließt mit einem Finger, dichtet rundum, hält die Position beim Kippen und beim
                  Schließen klingt es satt-leise.
                </p>
              </section>

              <section id="diy" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Selbst einstellen – wann es funktioniert</h2>
                <p className="text-slate-500 text-sm mb-6">Mit Inbusschlüssel und Geduld</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Bei kleineren Korrekturen können Sie selbst Hand anlegen. Nötig ist meist ein <strong>4-mm-Inbusschlüssel</strong>.
                  Die Justierschrauben finden Sie am unteren Ecklager (versteckt unter einer Abdeckkappe) und
                  am oberen Scherenlager.
                </p>
                <ol className="space-y-3">
                  {[
                    { t: 'Diagnose', d: 'Wo schleift es? Schließen Sie das Fenster mit einem Blatt Papier dazwischen – an welcher Seite hält es nicht?' },
                    { t: 'Abdeckkappen entfernen', d: 'Vorsichtig mit Schraubenzieher abhebeln. Kappen aufbewahren – sie zeigen, wo die Schrauben sitzen.' },
                    { t: 'Vierteldrehungen', d: 'Niemals ganze Umdrehungen. Pro Schraube max. 1/4 Drehung, dann testen.' },
                    { t: 'Andruck zuletzt', d: 'Erst Höhe, dann Seite, dann Andruck. Andruck im Winter höher (besser dichtend), im Sommer niedriger (weniger Reibung).' },
                  ].map((s, i) => (
                    <li key={s.t} className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-0.5">{s.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-900">
                  <strong>⚠️ Wann Sie aufhören sollten:</strong> Wenn nach 2–3 Versuchen keine Verbesserung
                  sichtbar ist, riskieren Sie, den Beschlag zu deformieren. Profi rufen – die Servicekosten
                  sind niedriger als ein Beschlag-Komplettaustausch.
                </div>
              </section>

              <section id="profi" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was der Profi anders macht</h2>
                <p className="text-slate-500 text-sm mb-6">Werkzeug und Erfahrung</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2"><span className="text-xl">✅</span> Selbst lösbar</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Reinigung & Schmierung</li>
                      <li className="flex gap-2"><span>✓</span>Sichtbare Inspektion</li>
                      <li className="flex gap-2"><span>✓</span>Kleine Andruck-Korrektur</li>
                      <li className="flex gap-2"><span>✓</span>Standard-Beschlag</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2"><span className="text-xl">🔴</span> Profi-Sache</h3>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex gap-2"><span>!</span>Hängender Flügel</li>
                      <li className="flex gap-2"><span>!</span>Mehrfachverriegelung</li>
                      <li className="flex gap-2"><span>!</span>Hebe-Schiebe-Türen</li>
                      <li className="flex gap-2"><span>!</span>Beschlag-Defekte</li>
                      <li className="flex gap-2"><span>!</span>Holzfenster mit Quellen</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">So läuft der Service-Termin ab</h2>
                <p className="text-slate-500 text-sm mb-6">Transparent und schnell</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Diagnose', d: 'Wir gehen jedes problematische Fenster mit Ihnen durch und zeigen, woran es liegt. Spaltlehre, Sichtkontrolle, Funktionstest.' },
                    { t: 'Justage', d: 'Mit Inbus, Schraubendreher und Werkzeug stellen wir Höhe, Seite und Andruck präzise ein. Pro Fenster 20–45 Min.' },
                    { t: 'Funktionstest', d: 'Mehrmals öffnen, kippen, schließen. Spaltmaße kontrollieren. Anpressdruck auf gleichmäßig prüfen.' },
                    { t: 'Pflege & Empfehlungen', d: 'Beschlagsspray für die nächsten 12 Monate. Schriftliche Empfehlungen für Eigenpflege.' },
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

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet die Justage?</h2>
                <p className="text-slate-500 text-sm mb-6">Faire Preise für Wien & NÖ (2026)</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Leistung</th>
                        <th className="text-left px-5 py-4 font-semibold">Dauer</th>
                        <th className="text-left px-5 py-4 font-semibold">Preis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Einzelfenster Justage', d: '20–45 Min', p: '80–150 €' },
                        { t: 'Wohnung 4–6 Fenster (Komplettpaket)', d: '2–3 Std', p: '250–450 €' },
                        { t: 'Einfamilienhaus 8–12 Fenster', d: '4–6 Std', p: '450–780 €' },
                        { t: 'Hebe-Schiebe-Tür', d: '60–90 Min', p: '180–280 €' },
                        { t: 'Notdienst (Fenster schließt nicht)', d: '30–60 Min', p: 'ab 90 €' },
                        { t: 'Beschlag-Tausch (falls nötig)', d: '1–2 Std', p: '120–280 €' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-blue-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 text-slate-600">{row.d}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">* Inkl. Anfahrt im Großraum Wien & NÖ. Preise verbindlich nach kostenlosem Kostenvoranschlag.</p>
              </section>

              <section id="regional" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Regionale Besonderheiten</h2>
                <p className="text-slate-500 text-sm mb-6">Aus tausenden Service-Einsätzen</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🏙️ Wien</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Viele moderne Kunststofffenster mit Mehrfachverriegelung und elektronischen Komponenten.
                      Häufiges Problem: Verstellung durch ständige Nutzung in dichten Wohnverhältnissen.
                      Kunststofffenster auf der Südseite klemmen oft im Sommer.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🌳 Niederösterreich</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Im ländlichen Raum oft ältere Fenstermodelle: Holz mit natürlicher Materialveränderung,
                      Aluminium mit Verschleiß. Im Mostviertel und Waldviertel zudem Frostschäden an Beschlägen.
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  Wir kennen die Unterschiede und passen unsere Justage entsprechend an. Mehr zu spezifischen
                  Themen in unseren Artikeln{' '}
                  <Link href="/blog/fenster-klemmen-sommer" className="text-blue-700 underline font-semibold">
                    Fenster klemmt im Sommer
                  </Link>{' '}
                  und{' '}
                  <Link href="/blog/fensterwartung-im-winter" className="text-blue-700 underline font-semibold">
                    Fensterwartung im Winter
                  </Link>.
                </p>
              </section>

              <div className="bg-gradient-to-r from-blue-700 to-sky-600 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Profi-Justage – meist binnen 48 Stunden</p>
                  <p className="text-blue-100 text-sm mt-1">Schneller Service in Wien, Tulln, Krems, St. Pölten, Klosterneuburg & Baden.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin sichern →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Alles, was unsere Kunden vor der Justage fragen</p>
                <div className="space-y-4">
                  {[
                    { q: 'Was kostet eine Fensterjustage?', a: '80–150 € pro Fenster inkl. Anfahrt. Wohnung 250–450 €. Notreparatur ab 90 €.' },
                    { q: 'Wie oft muss man Fenster justieren?', a: 'Alle 1–2 Jahre als Wartung. Bei intensiver Nutzung jährlich. Bei akuten Symptomen sofort.' },
                    { q: 'Welche Werkzeuge braucht der Profi?', a: 'Inbusschlüssel-Set, Schraubendreher, Wasserwaage, Spaltlehre, Beschlagsspray, Hebewerkzeug für große Justagen.' },
                    { q: 'Kann ich Fenster auch selbst einstellen?', a: 'Ja, mit etwas Geschick und 4-mm-Inbus. Vorsicht: Falsches Drehen kann den Beschlag deformieren.' },
                    { q: 'Wie lange dauert eine Justage?', a: '20–45 Min pro Fenster. Wohnung 2–3 Std inkl. Funktionstest.' },
                    { q: 'Was passiert, wenn die Justage nicht hilft?', a: 'Dann ist meist ein Beschlag-Teil defekt. Wir tauschen Roto-, Maco- und Siegenia-Teile gleich beim ersten Termin – Standardteile haben wir am Fahrzeug dabei.' },
                    { q: 'Hilft Justage gegen Zugluft?', a: 'Ja, oft. Ein höherer Anpressdruck verbessert die Dichtwirkung deutlich. Wenn die Dichtung selbst kaputt ist, hilft nur Tausch – siehe unseren Artikel zum Dichtungstausch.' },
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
                  Eine professionelle <strong>Fensterjustage</strong> ist eine der unterschätztesten und
                  effektivsten Wartungsmaßnahmen. Sie kostet wenig, dauert kurz und löst die meisten Probleme,
                  die Sie sonst in einen Komplett-Tausch treiben würden.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Lesen Sie auch unseren{' '}
                  <Link href="/blog/fenster-fruehjahrscheck" className="text-blue-700 underline font-semibold">
                    Frühjahrscheck-Leitfaden
                  </Link>{' '}
                  und unseren Artikel zum{' '}
                  <Link href="/blog/energie-sparen-im-winter" className="text-blue-700 underline font-semibold">
                    Energie sparen im Winter
                  </Link>, um das Maximum aus Ihren Fenstern herauszuholen.
                </p>
              </section>

              <div className="bg-gradient-to-br from-blue-700 to-sky-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Termin in der ganzen Region</h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">
                  Wir kommen nach Wien, Tulln, Krems, St. Pölten, Klosterneuburg, Baden und überall dazwischen.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-blue-700 font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                    Justage anfragen
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
