import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Rollladen klemmt? Alle Ursachen & Lösungen (2026)',
  description: 'Rollladen klemmt, läuft schief oder lässt sich nicht öffnen? Alle Ursachen, DIY-Tipps, Kosten & wann der Profi muss – mit Notdienst in ganz Niederösterreich.',
  keywords: [
    'rollladen klemmt', 'rolladen reparatur', 'rolladen läuft schief',
    'rollladen notdienst', 'rollladen gurt kaputt', 'rollladen motor defekt',
    'rollladen kosten reparatur', 'rollladen führungsschiene klemmt'
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was tun wenn der Rollladen klemmt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zuerst keine Gewalt anwenden. Sichtprüfung machen, Führungsschienen auf Schmutz prüfen, sanft in beide Richtungen bewegen. Hilft das nicht, sofort den Fachmann rufen – Gewalt am Gurt kann zu Totalschaden führen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel kostet eine Rollladen-Reparatur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einfache Reparaturen (Gurt tauschen, Reinigung) kosten ab ca. 80–150 €. Motordefekte oder stark deformierte Lamellen liegen zwischen 150–400 €. Ein kompletter Austausch beginnt bei ca. 300 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich einen geklemmten Rollladen selbst reparieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leichte Verschmutzungen, einfaches Schmieren oder einen Gurttausch können geübte Heimwerker selbst durchführen. Bei Motordefekten, deformierten Lamellen oder defekter Federmechanik ist ein Fachbetrieb empfohlen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum läuft mein Rollladen schief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein schief laufender Rollladen deutet auf eine einseitige Blockade in einer Führungsschiene, ungleichmäßig aufgewickelte Lamellen oder eine lockere Wellenhalterung hin. Ursache unbedingt beheben, bevor Lamellen dauerhaft verbogen werden.',
      },
    },
  ],
}

const toc = [
  { id: 'ursachen', label: 'Ursachen' },
  { id: 'sofortmassnahmen', label: 'Sofortmaßnahmen' },
  { id: 'diy', label: 'DIY-Lösungen' },
  { id: 'elektrisch', label: 'Elektrisch vs. Manuell' },
  { id: 'profi', label: 'Wann zum Profi?' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'vorbeugung', label: 'Vorbeugung' },
  { id: 'faq', label: 'FAQ' },
]

export default function RollladenKlemmtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Rollladen-Reparatur', 'Notdienst', 'DIY-Tipps'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Rollladen klemmt oder läuft schief?<br />
              <span className="text-blue-300">Alle Ursachen & Lösungen</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Von der schnellen Selbsthilfe bis zum Notdienst – dieser Leitfaden erklärt Schritt für Schritt,
              was hinter einem klemmenden Rollladen steckt und wie Sie das Problem sicher beheben.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>Veröffentlicht: 10. November 2025</span>
              <span>•</span>
              <span>Aktualisiert: April 2026</span>
              <span>•</span>
              <span>Fensterservice Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── SIDEBAR TOC ── */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Inhalt</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      🔧 Jetzt Profi anfragen
                    </Link>
                    <a
                      href="tel:+436644351622"
                      className="block w-full text-center mt-2 border border-blue-200 text-blue-700 hover:bg-blue-50 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <article className="flex-1 min-w-0">

              {/* Hero image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/Images/rolladen reparatur niederösterreich.webp"
                  alt="Rollladen Reparatur Niederösterreich – klemmender Rollladen wird geprüft"
                  width={900}
                  height={450}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* Intro */}
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Ein <strong>klemmender Rollladen</strong> ist mehr als nur ein Komfortproblem: Er lässt Wärme entweichen,
                gefährdet die Einbruchsicherheit und kann – wenn zu lange ignoriert – zu einem Totalschaden führen.
                Die gute Nachricht: In vielen Fällen lässt sich das Problem mit einfachen Mitteln selbst lösen.
                Dieser Artikel zeigt Ihnen, woran es liegt, was Sie sofort tun können – und wann der Profi gefragt ist.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Besonders in Niederösterreich und Wien, wo die Temperaturschwankungen im Winter extrem sind,
                gehören klemmende Rollladen zu den häufigsten Reparaturanfragen. Wir haben die Erfahrung aus
                tausenden Serviceeinsätzen in diesen Leitfaden eingearbeitet.
              </p>

              {/* Notdienst-Banner */}
              <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Rollladen komplett blockiert?</p>
                  <p className="text-red-100 text-sm mt-1">24h-Notdienst – schnelle Hilfe in ganz Niederösterreich & Wien</p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm shadow whitespace-nowrap"
                >
                  Jetzt Notdienst rufen →
                </Link>
              </div>

              {/* ── URSACHEN ── */}
              <section id="ursachen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Die häufigsten Ursachen</h2>
                <p className="text-slate-500 text-sm mb-6">Warum klemmt ein Rollladen überhaupt?</p>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  {[
                    {
                      color: 'red',
                      icon: '⚙️',
                      title: 'Mechanische Defekte',
                      items: [
                        { name: 'Gurt gerissen oder ausgehängt', detail: 'Der häufigste Defekt – oft nach Jahren Dauerbetrieb' },
                        { name: 'Verschlissene Gurtrolle', detail: 'Dreht durch, Gurt lässt sich nicht aufwickeln' },
                        { name: 'Gebrochene Feder', detail: 'Rollladen fällt oder lässt sich nicht halten' },
                        { name: 'Deformierte Lamellen', detail: 'Knicke durch Druck oder Sturm, blockieren die Führung' },
                        { name: 'Lockere Wellenhalterung', detail: 'Welle sitzt schief → Rollladen läuft ungleichmäßig' },
                      ],
                    },
                    {
                      color: 'orange',
                      icon: '🌦️',
                      title: 'Umwelt & Verschmutzung',
                      items: [
                        { name: 'Eisbildung im Winter', detail: 'Lamellen frieren in den Führungsschienen fest' },
                        { name: 'Schmutz & Ablagerungen', detail: 'Sand, Pollen, Insekten blockieren die Führung' },
                        { name: 'Feuchtigkeit & Quellen', detail: 'Holzkomponenten können aufquellen' },
                        { name: 'Verzogene Führungsschienen', detail: 'Durch Hitze, Frost oder mechanischen Druck' },
                        { name: 'Korrosion', detail: 'Besonders bei Metallführungen ohne Pflege' },
                      ],
                    },
                  ].map((block) => (
                    <div key={block.title} className={`rounded-2xl border p-5 ${block.color === 'red' ? 'border-red-100 bg-red-50' : 'border-orange-100 bg-orange-50'}`}>
                      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span>{block.icon}</span> {block.title}
                      </h3>
                      <ul className="space-y-3">
                        {block.items.map((item) => (
                          <li key={item.name} className="text-sm">
                            <span className="font-semibold text-slate-800">{item.name}</span>
                            <span className="block text-slate-500 text-xs mt-0.5">{item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-800">
                  <strong>Sonderfall: Rollladen läuft schief</strong> – Das ist fast immer eine einseitige Blockade:
                  eine Seite der Führungsschiene ist verschmutzt oder leicht verzogen, während die andere frei läuft.
                  Ignorieren Sie das nicht – die Lamellen werden dabei dauerhaft gebogen.
                </div>
              </section>

              {/* ── SOFORTMASSNAHMEN ── */}
              <section id="sofortmassnahmen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Sofortmaßnahmen</h2>
                <p className="text-slate-500 text-sm mb-6">Was Sie in den ersten Minuten tun sollten</p>

                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Keine Gewalt anwenden',
                      text: 'Ruckartige Züge am Gurt sind die häufigste Ursache für einen Totalschaden. Ein beschädigter Gurt kann plötzlich reißen und Verletzungsgefahr verursachen. Stopp – erst prüfen.',
                      warning: true,
                    },
                    {
                      step: '2',
                      title: 'Sichtprüfung durchführen',
                      text: 'Leuchten Sie mit einer Taschenlampe in beide Führungsschienen. Suchen Sie nach sichtbaren Fremdkörpern (Insekten, Blätter, Steinchen), Eisbrocken oder verklemmten Lamellen.',
                    },
                    {
                      step: '3',
                      title: 'Sanfte Bewegung testen',
                      text: 'Bewegen Sie den Rollladen vorsichtig wenige Zentimeter in beide Richtungen. Manchmal löst sich ein leichtes Klemmen dadurch bereits. Spüren Sie starken Widerstand – sofort aufhören.',
                    },
                    {
                      step: '4',
                      title: 'Bei Eis: Wärme anwenden',
                      text: 'Haarntrockner auf niedrige Stufe an die zugefrorene Führungsschiene halten. Niemals kochendes Wasser verwenden – das kann Kunststoffschienen verformen.',
                    },
                    {
                      step: '5',
                      title: 'Rollladen in Mittelposition sichern',
                      text: 'Wenn sich der Rollladen weder öffnen noch schließen lässt, sichern Sie ihn mit einem Holzkeil oder Klebeband, um ein unkontrolliertes Fallen zu verhindern.',
                    },
                  ].map((item) => (
                    <div key={item.step} className={`flex gap-4 p-5 rounded-2xl border ${item.warning ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                      <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${item.warning ? 'bg-red-600 text-white' : 'bg-blue-700 text-white'}`}>
                        {item.step}
                      </div>
                      <div>
                        <p className={`font-semibold mb-1 ${item.warning ? 'text-red-800' : 'text-slate-800'}`}>{item.title}</p>
                        <p className={`text-sm leading-relaxed ${item.warning ? 'text-red-700' : 'text-slate-600'}`}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── DIY ── */}
              <section id="diy" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">DIY-Lösungen Schritt für Schritt</h2>
                <p className="text-slate-500 text-sm mb-6">Was Sie ohne Fachmann selbst erledigen können</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      icon: '🧹',
                      title: 'Führungsschienen reinigen',
                      steps: [
                        'Rollladen soweit möglich hochfahren',
                        'Schienen mit feuchtem Lappen oder Pinsel auswischen',
                        'Hartnäckigen Schmutz mit Bürste lösen',
                        'Danach gründlich trocknen lassen',
                      ],
                    },
                    {
                      icon: '🛢️',
                      title: 'Führungsschienen schmieren',
                      steps: [
                        'Nur Silikonspray verwenden – kein WD-40!',
                        'Schienen dünn einsprühen, nicht zu viel',
                        'Rollladen mehrmals auf und ab fahren',
                        'Überschuss mit Tuch abtupfen',
                      ],
                    },
                    {
                      icon: '🔧',
                      title: 'Gurt neu einhängen',
                      steps: [
                        'Rollladen vollständig hochfahren',
                        'Gurtkasten öffnen (meist Klipsabdeckung)',
                        'Gurt in Gurtrolle einhängen & straff ziehen',
                        'Kasten schließen, Funktion testen',
                      ],
                    },
                    {
                      icon: '↔️',
                      title: 'Verkantete Lamelle ausrichten',
                      steps: [
                        'Betroffene Stelle lokalisieren',
                        'Lamelle von beiden Seiten gleichmäßig drücken',
                        'Keine Zangen – nur Handkraft verwenden',
                        'Rollladen danach langsam testen',
                      ],
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-base">
                        <span className="text-xl">{item.icon}</span> {item.title}
                      </h3>
                      <ol className="space-y-2">
                        {item.steps.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-900">
                  <strong>⚠️ Wichtig beim Gurt:</strong> Ist der Gurt gerissen oder stark ausgefranst, niemals provisorisch
                  zusammenknoten. Ein reißender Gurt kann den Rollladen unkontrolliert nach unten schlagen lassen.
                  Hier den Gurt fachgerecht ersetzen – das Material ist günstig, die Arbeit überschaubar.
                </div>
              </section>

              {/* ── ELEKTRISCH VS MANUELL ── */}
              <section id="elektrisch" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Elektrisch vs. Manuell</h2>
                <p className="text-slate-500 text-sm mb-6">Unterschiedliche Probleme, unterschiedliche Lösungen</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="bg-slate-700 text-white text-xs px-2 py-0.5 rounded-full">MANUELL</span> Gurt / Kurbel
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">→</span> Gurt reißt oder hängt sich aus: häufigste Ursache</li>
                      <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">→</span> Gurtrolle dreht durch: Rolle auswechseln</li>
                      <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">→</span> Feder gebrochen: Rollladen fällt – Fachmann nötig</li>
                      <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">→</span> Kurbel dreht leer: Mechanismus prüfen lassen</li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-4">Reparaturen oft günstig und schnell möglich</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded-full">ELEKTRISCH</span> Motor / Smart Home
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span> Motor reagiert nicht: erst Sicherung prüfen</li>
                      <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span> Endanschläge falsch eingestellt: oft per Fernbedienung korrigierbar</li>
                      <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span> Motor überhitzt: kurze Pause – Überhitzungsschutz greift</li>
                      <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span> Motor defekt: Austausch durch Fachmann notwendig</li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-4">Motordefekte nie selbst öffnen – Garantieverlust & Stromgefahr</p>
                  </div>
                </div>
              </section>

              {/* ── PROFI ── */}
              <section id="profi" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann muss der Profi ran?</h2>
                <p className="text-slate-500 text-sm mb-6">Klare Entscheidungshilfe</p>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <span className="text-xl">✅</span> Selbst erledigen
                    </h3>
                    <ul className="space-y-2 text-sm text-green-800">
                      {[
                        'Führungsschienen reinigen & schmieren',
                        'Gurt in Rolle einhängen',
                        'Gurt ersetzen (einfacher Typ)',
                        'Eisbildung auftauen',
                        'Leicht verkantete Lamelle ausrichten',
                        'Regelmäßige Sichtkontrolle',
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex-shrink-0 text-green-600">✓</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                      <span className="text-xl">🔴</span> Fachmann notwendig
                    </h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      {[
                        'Gurt vollständig gerissen',
                        'Feder im Rollladenkasten gebrochen',
                        'Motor defekt oder reagiert nicht',
                        'Mehrere stark gebogene Lamellen',
                        'Führungsschiene verzogen/gebrochen',
                        'Wellenhalterung locker oder defekt',
                        'Rollladen fällt unkontrolliert ab',
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex-shrink-0 text-red-500">!</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-700 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-lg">Unser Notdienst ist 24/7 erreichbar</p>
                    <p className="text-blue-200 text-sm mt-1">Schnelle Hilfe in Wien, Tulln, St. Pölten, Krems, Klosterneuburg & Baden</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                    <a href="tel:+436644351622" className="bg-white text-blue-700 font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm text-center">
                      📞 Jetzt anrufen
                    </a>
                    <Link href="/kontakt" className="bg-blue-600 border border-blue-400 text-white font-bold px-5 py-3 rounded-xl hover:bg-blue-500 transition-colors text-sm text-center">
                      Anfrage senden
                    </Link>
                  </div>
                </div>
              </section>

              {/* ── KOSTEN ── */}
              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet eine Rollladen-Reparatur?</h2>
                <p className="text-slate-500 text-sm mb-6">Realistische Kostenübersicht für Österreich (2026)</p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Reparatur</th>
                        <th className="text-left px-5 py-4 font-semibold">Aufwand</th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Kosten ca.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Reinigung & Schmierung', effort: 'Selbst möglich', cost: '0–30 €', bg: 'bg-white' },
                        { type: 'Gurt tauschen (einfach)', effort: 'Selbst / Profi', cost: '15–60 €', bg: 'bg-slate-50' },
                        { type: 'Gurtrolle ersetzen', effort: 'Profi empfohlen', cost: '80–150 €', bg: 'bg-white' },
                        { type: 'Lamellen ersetzen', effort: 'Profi', cost: '100–250 €', bg: 'bg-slate-50' },
                        { type: 'Feder tauschen', effort: 'Profi', cost: '120–200 €', bg: 'bg-white' },
                        { type: 'Motor tauschen', effort: 'Profi', cost: '200–450 €', bg: 'bg-slate-50' },
                        { type: 'Führungsschiene ersetzen', effort: 'Profi', cost: '150–300 €', bg: 'bg-white' },
                        { type: 'Kompletter Austausch', effort: 'Profi', cost: 'ab 300 €', bg: 'bg-slate-50' },
                      ].map((row) => (
                        <tr key={row.type} className={row.bg}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.type}</td>
                          <td className="px-5 py-3 text-slate-600">{row.effort}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  * Preise inkl. Material, ohne Anfahrt. Notdienst-Zuschläge (Wochenende, Nacht) möglich. Für ein verbindliches Angebot unverbindlich anfragen.
                </p>
              </section>

              {/* ── VORBEUGUNG ── */}
              <section id="vorbeugung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Vorbeugung & Wartung</h2>
                <p className="text-slate-500 text-sm mb-6">So verhindern Sie das nächste Klemmen</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: '📅', title: 'Jährliche Inspektion', text: 'Einmal pro Jahr alle Komponenten durch einen Fachmann prüfen lassen – erkennt Schwachstellen bevor sie zum Problem werden.' },
                    { icon: '🧽', title: 'Regelmäßig reinigen', text: 'Führungsschienen 2× pro Jahr mit feuchtem Tuch auswischen. Besonders nach dem Winter wichtig.' },
                    { icon: '🛢️', title: 'Richtig schmieren', text: 'Silikonspray alle 6 Monate dünn auf Führungsschienen auftragen. Kein Öl – zieht Schmutz an.' },
                    { icon: '❄️', title: 'Winterschutz', text: 'Rollladen bei Frost vollständig öffnen oder schließen – nie in Mittelposition stehen lassen, so frieren sie leichter ein.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-5 text-center">
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <h3 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-5 bg-green-50 border border-green-200 rounded-2xl text-sm text-green-800">
                  Tipp: Erfahren Sie in unserem Artikel{' '}
                  <Link href="/blog/fensterwartung-im-winter" className="font-semibold underline hover:text-green-900">
                    Fensterwartung im Winter
                  </Link>{' '}
                  wie Sie Fenster und Rollladen gemeinsam fit für die kalte Jahreszeit machen.
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Die meistgestellten Fragen zu klemmenden Rollladen</p>

                <div className="space-y-4">
                  {[
                    {
                      q: 'Was tun wenn der Rollladen klemmt?',
                      a: 'Zuerst keine Gewalt anwenden. Führungsschienen auf Blockaden prüfen, sanft in beide Richtungen testen. Bei Eisbildung vorsichtig erwärmen. Wenn das nicht hilft – Profi rufen, bevor größerer Schaden entsteht.',
                    },
                    {
                      q: 'Kann ich einen gerissenen Gurt selbst tauschen?',
                      a: 'Ja, bei einem einfachen Aufrollgurt ist das auch für Heimwerker machbar. Kasten öffnen, alten Gurt herausziehen, neuen einlegen und straff befestigen. Gurte gibt es im Baumarkt ab ca. 5 €. Bei Kassettenrollladen oder komplexeren Systemen lieber den Fachmann fragen.',
                    },
                    {
                      q: 'Warum läuft mein Rollladen schief?',
                      a: 'Eine Seite der Führungsschiene ist verschmutzt, leicht verzogen oder eine Lamelle hängt einseitig. Beide Schienen gründlich reinigen und prüfen. Hört das Problem nicht auf, können auch Wellenhalterung oder Wickelwelle betroffen sein.',
                    },
                    {
                      q: 'Mein elektrischer Rollladen reagiert nicht – was prüfen?',
                      a: 'Zuerst Sicherungskasten prüfen (Leitungsschutzschalter). Dann Fernbedienungsbatterie wechseln. Motor kann durch zu häufige Nutzung überhitzen – 15 Minuten warten. Endanschläge können verstellt sein und per Fernbedienung zurückgesetzt werden (Anleitung des Herstellers). Hilft nichts davon: Fachmann.',
                    },
                    {
                      q: 'Wie lange hält ein Rollladen-Motor?',
                      a: 'Qualitätsmotoren halten bei normaler Nutzung 15–25 Jahre. Günstiger Motoren können nach 8–10 Jahren Probleme machen. Jährliche Wartung verlängert die Lebensdauer deutlich.',
                    },
                  ].map((item, i) => (
                    <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:bg-slate-100 transition-colors list-none">
                        {item.q}
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg ml-4">⌄</span>
                      </summary>
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* ── FAZIT ── */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fazit</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ein <strong>klemmender Rollladen</strong> ist in den meisten Fällen kein Grund zur Panik – aber ein Grund,
                  schnell zu handeln. Viele Ursachen lassen sich mit einfacher Reinigung und etwas Silikonspray selbst beheben.
                  Bei gerissenen Gurten, defekten Motoren oder stark gebogenen Lamellen ist der Fachmann die sichere und
                  langfristig günstigere Wahl.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Wer auf regelmäßige Wartung setzt, spart sich teure Notdiensteinsätze: Führungsschienen reinigen,
                  einmal im Jahr schmieren und Komponenten frühzeitig tauschen – dann halten Rollladen ein Leben lang.
                </p>
              </section>

              {/* ── FINAL CTA ── */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">Probleme mit Ihren Rollladen?</h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Unser Serviceteam ist 24/7 erreichbar – für Notdienst, Reparatur und Wartung in ganz Niederösterreich & Wien.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    Kostenlos anfragen
                  </Link>
                  <a
                    href="tel:+436644351622"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    📞 +43 664 435 1622
                  </a>
                </div>
              </div>

              {/* ── FOOTER NAV ── */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <span>© 2026 Fenster Service Rowo</span>
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
