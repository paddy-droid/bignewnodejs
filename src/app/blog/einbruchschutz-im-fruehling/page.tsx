import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Einbruchschutz für Fenster | Pilzkopfverriegelung & Sicherheitsbeschläge',
  description: 'Effektiver Einbruchschutz für Fenster: Pilzkopfverriegelung, abschließbare Griffe, Sicherheitsglas. Profi-Nachrüstung in Wien, Tulln, St. Pölten – schnell, unsichtbar, von der Polizei empfohlen.',
  keywords: [
    'fenstersicherung nachrüsten', 'einbruchschutz fenster wien', 'sicherheitsbeschläge fenster',
    'fenstergriff mit schloss', 'pilzkopfverriegelung nachrüsten', 'fenster sicherheit st pölten',
    'balkontür sichern', 'einbruchschutz frühling', 'rc2 fenster nachrüsten',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/einbruchschutz-im-fruehling' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet die Nachrüstung mit Pilzkopfverriegelung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pro Fenster rechnen Sie inkl. Material und Montage in Wien und Niederösterreich mit 180–320 €. Bei mehreren Fenstern in einem Termin reduziert sich der Stückpreis. Eine komplette Wohnung mit 6 Fenstern kostet typischerweise 950–1.500 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich für Einbruchschutz die Fenster tauschen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein – in den meisten Fällen ist das nicht nötig. Pilzkopfverriegelungen, abschließbare Griffe und Sicherheitsbleche lassen sich nachrüsten. Nur sehr alte oder beschädigte Fenster müssen ausgetauscht werden. Eine Schwachstellenanalyse vor Ort zeigt, was sinnvoll ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell hebeln Einbrecher ein Fenster auf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard-Rollzapfen-Beschläge geben oft schon nach 5–10 Sekunden mit einem Schraubenzieher nach. Pilzkopfverriegelung der Klasse RC2 hält 3 Minuten gegen Aufhebeln stand – die meisten Täter geben nach 60 Sekunden auf, weil das Risiko entdeckt zu werden steigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sind Sicherheitsbeschläge auch für Mietwohnungen erlaubt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, der Einbau von Pilzkopfverriegelung und abschließbaren Griffen ist eine Verbesserung der Wohnung – Vermieter dürfen das nicht verweigern. Wichtig: vor Einbau schriftlich informieren, beim Auszug ggf. Originalzustand wiederherstellen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Sicherheitsklasse ist empfehlenswert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Privathäuser empfiehlt das Bundeskriminalamt mindestens RC2 (Resistance Class 2). Diese hält 3 Minuten gegen einfache Werkzeuge stand. RC2 lässt sich durch Pilzkopfverriegelung + abschließbare Griffe + verstärktes Schließblech in fast jedes Bestandsfenster nachrüsten.',
      },
    },
  ],
}

const toc = [
  { id: 'risiko', label: 'Risiko & Statistik' },
  { id: 'pilzkopf', label: 'Pilzkopfverriegelung' },
  { id: 'griffe', label: 'Sichere Griffe' },
  { id: 'glas', label: 'Sicherheitsglas' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'foerderung', label: 'Förderungen' },
  { id: 'check', label: 'Sicherheits-Check' },
  { id: 'faq', label: 'FAQ' },
]

export default function EinbruchschutzFruehlingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Sicherheit', 'Einbruchschutz', 'Nachrüsten', 'RC2'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Einbruchschutz für Fenster<br />
              <span className="text-red-300">Unsichtbar nachrüsten – sofort sicherer wohnen</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              Pilzkopfverriegelung, abschließbare Griffe und Sicherheitsglas: So machen Sie Ihre Bestandsfenster
              in wenigen Stunden auf Polizei-Empfehlungs-Niveau – ohne kompletten Fenstertausch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span>Veröffentlicht: 05. Januar 2026</span>
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
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Inhalt</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-700 hover:bg-white px-3 py-2 rounded-lg transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link href="/kontakt" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-3 rounded-xl">
                      🛡️ Sicherheits-Check
                    </Link>
                    <a href="tel:+436644351622" className="block w-full text-center mt-2 border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold px-4 py-3 rounded-xl">
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <article className="flex-1 min-w-0">
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image src="/Images/einbruchschutz-sicherheit.png" alt="Sicherer Fenstergriff mit Schloss und Pilzkopfverriegelung – Einbruchschutz nachrüsten" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-2">Auf einen Blick</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Standardfenster lassen sich in 10 Sekunden aufhebeln</li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Pilzkopfverriegelung erhöht die Aufbruchszeit auf 3 Minuten – das reicht meist für Abschreckung</li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Nachrüsten ist möglich: Fenstertausch nicht nötig</li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> Pro Fenster ca. 180–320 € – Förderungen in NÖ verfügbar</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                „Bei mir wird schon nichts passieren" – das hören wir oft. Die Realität: In Niederösterreich
                und Wien werden jedes Jahr <strong>tausende Wohnungen und Häuser</strong> aufgebrochen. Das
                Fenster ist mit Abstand der häufigste Einstiegspunkt – noch vor der Eingangstür.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Die gute Nachricht: Mit relativ überschaubarem Aufwand lässt sich Ihre Bestandsausstattung
                deutlich aufrüsten. Sie müssen weder Fenster tauschen noch Wände aufstemmen. Wir zeigen Ihnen
                hier, wie es geht – und worauf es bei der Auswahl wirklich ankommt.
              </p>

              <section id="risiko" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wo und wann passieren Einbrüche?</h2>
                <p className="text-slate-500 text-sm mb-6">Die Realität – nicht der Krimi</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Die meisten Einbrüche in Privathäuser passieren <strong>tagsüber zwischen 10 und 18 Uhr</strong>,
                  besonders im Frühling und Herbst. Täter wählen die Zeit, in der niemand zu Hause ist.
                  Der typische Einbruch dauert weniger als 10 Minuten – und beginnt fast immer am Fenster.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Besonders gefährdet:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t: 'Speckgürtel von Wien', d: 'Mödling, Baden, Klosterneuburg, Brunn am Gebirge – hohe Bevölkerungsdichte, viele Einfamilienhäuser.' },
                    { t: 'Erdgeschosswohnungen', d: 'In allen Bezirken – auch in der Innenstadt. Gekippte Fenster sind eine Einladung.' },
                    { t: 'Reihenhaussiedlungen', d: 'In Tulln, St. Pölten, Krems – oft serielle Einbrüche in einer Straße.' },
                    { t: 'Ferienwohnungen', d: 'Mostviertel, Weinviertel – wenn Häuser tagelang leer stehen.' },
                  ].map((s) => (
                    <div key={s.t} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                      <p className="font-bold text-slate-800 mb-1">{s.t}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="pilzkopf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Pilzkopfverriegelung – der unsichtbare Bodyguard</h2>
                <p className="text-slate-500 text-sm mb-6">Polizei-Empfehlung Nr. 1</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6 items-center">
                  <div className="relative h-64 w-full">
                    <Image src="/Images/sicherheitsbeschlag-detail.png" alt="Detailaufnahme: Pilzkopfzapfen für maximalen Einbruchschutz" fill className="rounded-2xl shadow-md object-cover" />
                  </div>
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Herkömmliche Rollzapfen sehen wie kleine Räder am Fensterrand aus. Mit einem Schraubenzieher
                      lassen sie sich aushebeln – das Fenster ist in 10 Sekunden offen.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong>Pilzkopfzapfen</strong> haben einen pilzförmigen Kopf, der sich beim Schließen
                      hinter ein verstärktes Stahl-Schließblech legt. Hebeln wird damit fast unmöglich –
                      die meisten Täter geben nach 60 Sekunden auf.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li className="flex gap-2"><span className="text-red-600">✓</span><strong>Nachrüstbar</strong> – Fenstertausch nicht nötig</li>
                      <li className="flex gap-2"><span className="text-red-600">✓</span><strong>Unsichtbar</strong> – Optik bleibt unverändert</li>
                      <li className="flex gap-2"><span className="text-red-600">✓</span><strong>RC2-zertifiziert</strong> – Polizei-Empfehlung</li>
                      <li className="flex gap-2"><span className="text-red-600">✓</span><strong>Mietfähig</strong> – beim Auszug rückbaubar</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="griffe" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Abschließbare Griffe – das oft vergessene Detail</h2>
                <p className="text-slate-500 text-sm mb-6">Schutz gegen Glasdurchgriff</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Selbst die beste Pilzkopfverriegelung nützt nichts, wenn der Einbrecher einfach ein kleines Loch
                  ins Glas schlägt und den Griff von innen dreht. Genau dafür gibt es <strong>abschließbare Griffe</strong>:
                  Sie verhindern, dass der Griff ohne Schlüssel betätigt werden kann.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { t: 'Standard-Griff', d: 'Lässt sich nach Glasdurchgriff drehen. Kein Schutz.', c: 'red' },
                    { t: 'Abschließbarer Griff', d: 'Mit Schlüssel verriegelt. Mindestens 100 Nm Drehmomentschutz.', c: 'amber' },
                    { t: 'Druckknopf-Griff', d: 'Einfacher Schutz – muss aber aktiv betätigt werden.', c: 'emerald' },
                  ].map((g) => (
                    <div key={g.t} className={`rounded-2xl p-5 border ${g.c === 'red' ? 'bg-red-50 border-red-200' : g.c === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200'}`}>
                      <p className="font-bold text-slate-800 mb-1">{g.t}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{g.d}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  Bonus: Abschließbare Griffe sind auch eine wichtige <strong>Kindersicherung</strong>.
                  Bei Familien mit Kleinkindern empfehlen wir sie selbst dann, wenn Einbruchschutz nicht
                  im Vordergrund steht.
                </p>
              </section>

              <section id="glas" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Sicherheitsglas – wenn das Standardglas nicht reicht</h2>
                <p className="text-slate-500 text-sm mb-6">Für besonders gefährdete Bereiche</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Verbund-Sicherheitsglas (VSG)</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Zwei Glasscheiben mit reißfester Folie verklebt</li>
                      <li>• Glas zerspringt, bleibt aber im Rahmen</li>
                      <li>• Klassen P1A bis P5A (steigend)</li>
                      <li>• Empfehlung Privathaus: P4A</li>
                      <li>• Auch als Tausch in Bestandsfenster möglich</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Einbruchhemmende Folie</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Wird auf Standardglas geklebt</li>
                      <li>• Günstige Alternative – ca. 60–120 €/m²</li>
                      <li>• Hält 90 Sekunden gegen Werkzeug</li>
                      <li>• Ideal für gefährdete Einzelfenster</li>
                      <li>• Reversibel – Mietwohnung-tauglich</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet Einbruchschutz wirklich?</h2>
                <p className="text-slate-500 text-sm mb-6">Realistische Preise inkl. Material und Montage</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-red-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Maßnahme</th>
                        <th className="text-left px-5 py-4 font-semibold">Pro Fenster</th>
                        <th className="text-left px-5 py-4 font-semibold">Wirkung</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Abschließbarer Griff', p: '40–80 €', e: '★★' },
                        { t: 'Pilzkopf + Schließblech', p: '180–320 €', e: '★★★★' },
                        { t: 'Komplett-Set RC2', p: '280–450 €', e: '★★★★★' },
                        { t: 'Sicherheitsfolie P2A', p: '180–350 €', e: '★★★' },
                        { t: 'Glas-Tausch auf VSG', p: '350–650 €', e: '★★★★' },
                        { t: 'Außenrollladen mit Schloss', p: '600–1.200 €', e: '★★★★' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-red-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 font-semibold text-red-700">{row.p}</td>
                          <td className="px-5 py-3 text-amber-600">{row.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">* Inkl. Anfahrt im Großraum Wien & NÖ. Mengenrabatt ab 4 Fenstern.</p>
              </section>

              <section id="foerderung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Förderungen in Niederösterreich</h2>
                <p className="text-slate-500 text-sm mb-6">Bis zu 30 % vom Staat zurück</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  In Niederösterreich gibt es verschiedene Programme, die Einbruchschutz bezuschussen.
                  Die wichtigsten:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <span className="text-emerald-600 font-bold">€</span>
                    <div><strong>Bundesförderung „Schutz vor Einbruch"</strong> – Zuschuss bis 1.500 € für nachgerüstete RC2-Fenster und -Türen.</div>
                  </li>
                  <li className="flex gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <span className="text-emerald-600 font-bold">€</span>
                    <div><strong>NÖ Wohnbauförderung</strong> – Zinsbegünstigte Darlehen für Sicherheits-Sanierung.</div>
                  </li>
                  <li className="flex gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <span className="text-emerald-600 font-bold">€</span>
                    <div><strong>Versicherungsrabatte</strong> – Viele Wohngebäude- und Hausratsversicherungen geben 5–15 % Nachlass bei zertifizierter Nachrüstung.</div>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Wir kennen die aktuellen Programme und unterstützen bei der Antragsstellung – fragen Sie
                  uns einfach im Beratungstermin danach.
                </p>
              </section>

              <section id="check" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Unser Sicherheits-Check</h2>
                <p className="text-slate-500 text-sm mb-6">Kostenlos und unverbindlich vor Ort</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Schwachstellenanalyse', d: 'Wir gehen jedes Fenster und jede Tür mit Ihnen durch. Erkennen, wo Einbrecher zuerst ansetzen würden.' },
                    { t: 'Maßnahmen-Empfehlung', d: 'Sie bekommen eine ehrliche Priorisierung – nicht jedes Fenster muss gleich teuer aufgerüstet werden.' },
                    { t: 'Festpreis-Angebot', d: 'Verbindlich, schriftlich, ohne versteckte Kosten. Inklusive Förder-Beratung.' },
                    { t: 'Fachgerechte Montage', d: 'Geschulte Techniker, zertifizierte Komponenten, Garantie auf alle Arbeiten.' },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-700 text-white flex items-center justify-center font-bold">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{step.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="bg-gradient-to-r from-red-700 to-rose-700 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Ihr Sicherheits-Check ist kostenlos</p>
                  <p className="text-red-100 text-sm mt-1">Wir kommen, schauen, beraten – ohne Verpflichtung.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin sichern →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Antworten aus Hunderten Sicherheits-Checks</p>
                <div className="space-y-4">
                  {[
                    { q: 'Was kostet die Nachrüstung mit Pilzkopfverriegelung?', a: '180–320 € pro Fenster inkl. Material und Montage. Bei mehreren Fenstern reduziert sich der Stückpreis. Wohnung mit 6 Fenstern: 950–1.500 €.' },
                    { q: 'Muss ich die Fenster tauschen?', a: 'In den meisten Fällen nicht. Pilzkopfverriegelung, abschließbare Griffe und Sicherheitsbleche sind nachrüstbar. Nur sehr alte Fenster müssen ausgetauscht werden.' },
                    { q: 'Wie schnell hebeln Einbrecher ein Fenster auf?', a: 'Standard-Beschläge: 5–10 Sekunden. RC2-Pilzkopfverriegelung: 3 Minuten – die meisten Täter geben nach 60 Sekunden auf.' },
                    { q: 'Sind Sicherheitsbeschläge auch für Mietwohnungen erlaubt?', a: 'Ja, der Einbau ist eine Verbesserung – Vermieter dürfen das nicht verweigern. Schriftlich informieren, beim Auszug ggf. rückbauen.' },
                    { q: 'Welche Sicherheitsklasse ist empfehlenswert?', a: 'Für Privathäuser RC2 – hält 3 Minuten gegen einfache Werkzeuge. Lässt sich in fast jedes Bestandsfenster nachrüsten.' },
                    { q: 'Ist Einbruchschutz auch im Frühling wichtig?', a: 'Besonders im Frühling und Herbst! Die Tage werden länger, Bewohner sind häufiger im Garten – Täter nutzen das. Beste Zeit für Nachrüstung: Februar–April, vor der Urlaubssaison.' },
                    { q: 'Was bringt Pilzkopf ohne Sicherheitsglas?', a: 'Sehr viel. Ein normaler Einbrecher schlägt das Glas nur dann ein, wenn er sieht, dass Hebeln nicht funktioniert. Glas einschlagen ist laut – das vermeiden Täter, weil es Aufmerksamkeit erregt.' },
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
                  Einbruchschutz für Fenster ist <strong>kein Luxus, sondern Basis-Sicherheit</strong>. Mit
                  Pilzkopfverriegelung, abschließbaren Griffen und gegebenenfalls Sicherheitsfolie machen Sie
                  Ihr Zuhause in wenigen Stunden für Einbrecher unattraktiv – ohne Fenstertausch.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Beachten Sie auch unseren Tipp zum{' '}
                  <Link href="/blog/fensterdichtungen-austauschen" className="text-blue-600 underline font-semibold">
                    Dichtungstausch
                  </Link>
                  : Ein gut gewartetes Fenster mit korrektem Anpressdruck ist deutlich schwerer aufzuhebeln
                  als eines mit ausgeleierten Beschlägen.
                </p>
              </section>

              <div className="bg-gradient-to-br from-slate-900 to-red-900 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Kostenloser Sicherheits-Check</h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Wir kommen vorbei, prüfen Schwachstellen, beraten ehrlich. Ohne Druck, ohne Verpflichtung.
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
