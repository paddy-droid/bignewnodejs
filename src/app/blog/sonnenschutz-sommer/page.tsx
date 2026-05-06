import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sonnenschutz für Fenster im Sommer | Raffstore, Rollladen & mehr',
  description: 'Wie Sie Ihr Zuhause im Sommer ohne Klimaanlage angenehm kühl halten: Raffstores, Rollläden, Markisen & Folien im Profi-Vergleich. Service in Wien, Tulln, St. Pölten & ganz NÖ.',
  keywords: [
    'sonnenschutz sommer', 'raffstore niederösterreich', 'außenjalousien wien',
    'rollladen reparatur tulln', 'fenster abdunkeln', 'sonnenschutzfolie fenster',
    'hitzeschutz fenster', 'markise montage', 'verdunkelung schlafzimmer',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/sonnenschutz-sommer' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welcher Sonnenschutz hält Hitze am besten draußen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Außenliegender Sonnenschutz (Raffstore, Rollladen, Markise, Außenrollo) ist deutlich effektiver als innenliegende Jalousien. Er reduziert den Energieeintrag um bis zu 75 %, weil die Sonnenstrahlen das Glas gar nicht erst erhitzen. Innenrollos schlucken nur einen Teil der bereits eingedrungenen Wärme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist besser: Raffstore oder Rollladen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raffstores haben verstellbare Lamellen und ermöglichen Tageslicht ohne Hitze – ideal für Wohn- und Arbeitsräume. Rollläden verdunkeln vollständig, schützen besser vor Einbruch und Sturm – ideal für Schlafzimmer und Erdgeschoss. Im Sommer lohnt oft eine Kombination beider Systeme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet ein Raffstore-System pro Fenster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein elektrischer Raffstore kostet inkl. Montage in Niederösterreich und Wien typischerweise zwischen 700 € und 1.400 € pro Fensterelement – abhängig von Größe, Lamellenform und Steuerung (Funk, Smart Home).',
      },
    },
    {
      '@type': 'Question',
      name: 'Lohnt sich Sonnenschutzfolie auf Fenstern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sonnenschutzfolie ist die günstigste Lösung (ca. 30–80 € pro m²) und reduziert den Wärmeeintrag deutlich. Nachteil: Die Folie verdunkelt das Fenster dauerhaft und bietet keinen Sicht- oder Einbruchschutz. Für Mietwohnungen oder denkmalgeschützte Fassaden oft die einzige Option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mein Raffstore-Motor ist kaputt – was tun?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erst Sicherung und Fernbedienung prüfen. Bei Überhitzung 15 Minuten warten. Reagiert der Motor weiter nicht, defekt austauschen lassen – das ist ein Profi-Job (Stromanschluss & Höhe). Wir wechseln Motoren in der Regel innerhalb von 1–3 Werktagen in Wien & NÖ.',
      },
    },
  ],
}

const toc = [
  { id: 'warum', label: 'Warum Hitzeschutz' },
  { id: 'systeme', label: 'Systeme im Vergleich' },
  { id: 'raffstore', label: 'Raffstore im Detail' },
  { id: 'rollladen', label: 'Rollladen' },
  { id: 'markise', label: 'Markisen & Folien' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'reparatur', label: 'Reparatur & Service' },
  { id: 'faq', label: 'FAQ' },
]

export default function SonnenschutzSommerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* HERO */}
        <div className="bg-gradient-to-br from-amber-700 via-orange-600 to-amber-800 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Sonnenschutz', 'Sommer', 'Hitzeschutz', 'Raffstore'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Sonnenschutz für Fenster:<br />
              <span className="text-amber-200">Zuhause kühl halten – ohne Klimaanlage</span>
            </h1>
            <p className="text-amber-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Außenliegender Sonnenschutz spart bis zu 75 % Energieeintrag. Wir zeigen Ihnen Schritt für Schritt,
              welches System für welches Fenster passt – und worauf es bei der Montage in Wien & Niederösterreich ankommt.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-amber-100/90">
              <span>Veröffentlicht: 06. Mai 2026</span>
              <span>•</span>
              <span>Lesezeit: 8 Min.</span>
              <span>•</span>
              <span>Fensterservice Team</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* SIDEBAR TOC */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Inhalt</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-700 hover:bg-white px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-amber-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      🔧 Beratung anfragen
                    </Link>
                    <a
                      href="tel:+436644351622"
                      className="block w-full text-center mt-2 border border-amber-300 text-amber-800 hover:bg-amber-100 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN */}
            <article className="flex-1 min-w-0">
              <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/Images/sonnenschutz_sommer.png"
                  alt="Modernes Wohnzimmer mit halboffenem Raffstore – effektiver Sonnenschutz im Sommer"
                  width={900}
                  height={450}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* TL;DR */}
              <div className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">In 60 Sekunden</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span> Außenliegender Sonnenschutz ist 3–4× effektiver als innenliegende Jalousien.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span> Raffstore = Tageslicht regelbar; Rollladen = Vollverdunkelung + Einbruchschutz.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span> Folie ist die günstigste Nachrüst-Variante – aber dauerhaft dunkler.</li>
                  <li className="flex gap-2"><span className="text-amber-600 font-bold">→</span> Defekter Sonnenschutz im Sommer? Wir reparieren in Wien & NÖ meist binnen 48 h.</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Die Sommer in Österreich werden heißer – Tropennächte sind in Wien längst keine Ausnahme mehr.
                Wer keine teure und energiefressende Klimaanlage nachrüsten möchte, sollte beim <strong>Sonnenschutz für Fenster</strong> ansetzen.
                Das Prinzip ist simpel: Was draußen bleibt, muss drinnen nicht weggekühlt werden.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                In diesem Leitfaden erfahren Sie, welche Systeme in der Praxis wirklich funktionieren, was sie kosten
                und worauf Sie bei der Montage in Wien, Tulln, St. Pölten oder Klosterneuburg achten sollten.
                Außerdem: Was tun, wenn der bestehende Sonnenschutz im Hochsommer streikt?
              </p>

              {/* WARUM */}
              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Warum Sonnenschutz mehr ist als „Schatten machen"</h2>
                <p className="text-slate-500 text-sm mb-6">Physik kurz erklärt</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Sobald Sonnenstrahlen auf Glas treffen, verwandelt sich das Fenster in einen Wärmesammler.
                  Dieser sogenannte <strong>g-Wert</strong> beschreibt, wie viel Sonnenenergie als Wärme in den Raum gelangt.
                  Ein modernes 3-fach-verglastes Fenster lässt immer noch rund 50 % der Strahlung durch –
                  ohne zusätzlichen Sonnenschutz wird ein 4 m² großes Südfenster zur 2-kW-Heizung.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Genau hier setzt außenliegender Sonnenschutz an: Er hält die Strahlung <em>vor</em> der Scheibe ab.
                  Innenliegende Jalousien können das Licht zwar streuen, die Wärme ist aber bereits im Raum.
                  Studien zeigen: Außen-Systeme reduzieren den Wärmeeintrag um 70–80 %, innen-Systeme nur um 25–40 %.
                </p>
              </section>

              {/* SYSTEME */}
              <section id="systeme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Welches System für welches Fenster?</h2>
                <p className="text-slate-500 text-sm mb-6">Schnellüberblick</p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold">System</th>
                        <th className="text-left px-5 py-4 font-semibold">Hitzeschutz</th>
                        <th className="text-left px-5 py-4 font-semibold">Tageslicht</th>
                        <th className="text-left px-5 py-4 font-semibold">Einbruchschutz</th>
                        <th className="text-left px-5 py-4 font-semibold">Preis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { s: 'Raffstore (außen)', h: '★★★★★', l: 'regelbar', e: '★★', p: '€€€' },
                        { s: 'Rollladen', h: '★★★★★', l: 'aus oder verdunkelt', e: '★★★★', p: '€€€' },
                        { s: 'Markise', h: '★★★★', l: 'gefiltert', e: '–', p: '€€' },
                        { s: 'Außenrollo / Screen', h: '★★★★', l: 'gefiltert', e: '★', p: '€€' },
                        { s: 'Sonnenschutzfolie', h: '★★★', l: 'dauerhaft dunkler', e: '–', p: '€' },
                        { s: 'Innenjalousie', h: '★★', l: 'regelbar', e: '–', p: '€' },
                      ].map((row, i) => (
                        <tr key={row.s} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="px-5 py-3 font-semibold text-slate-800">{row.s}</td>
                          <td className="px-5 py-3 text-slate-700">{row.h}</td>
                          <td className="px-5 py-3 text-slate-700">{row.l}</td>
                          <td className="px-5 py-3 text-slate-700">{row.e}</td>
                          <td className="px-5 py-3 font-semibold text-amber-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* RAFFSTORE */}
              <section id="raffstore" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Raffstore – der Premium-Sonnenschutz</h2>
                <p className="text-slate-500 text-sm mb-6">Maximal flexibel, ideal für Wohn- und Arbeitsräume</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Raffstores sind außenliegende Lamellenjalousien, deren Lamellen sich stufenlos neigen lassen.
                  Damit kombinieren Sie zwei Vorteile: <strong>volle Beschattung</strong> bei direkter Sonneneinstrahlung
                  und <strong>indirektes Tageslicht</strong>, sobald die Sonne weiterzieht.
                </p>
                <div className="grid sm:grid-cols-2 gap-5 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-bold text-emerald-900 mb-3">Vorteile</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Lichtregulierung ohne Verdunkelung</li>
                      <li className="flex gap-2"><span>✓</span>Hervorragender U-Wert-Schutz im Sommer</li>
                      <li className="flex gap-2"><span>✓</span>Smart-Home-fähig (KNX, Somfy, Loxone)</li>
                      <li className="flex gap-2"><span>✓</span>Wertet die Fassade modern auf</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                    <h3 className="font-bold text-amber-900 mb-3">Worauf achten</h3>
                    <ul className="space-y-2 text-sm text-amber-900">
                      <li className="flex gap-2"><span>!</span>Windklasse beachten (in NÖ Klasse 5–6)</li>
                      <li className="flex gap-2"><span>!</span>Z-Lamellen halten besser dicht als C-Lamellen</li>
                      <li className="flex gap-2"><span>!</span>Stromanschluss bei Nachrüstung einplanen</li>
                      <li className="flex gap-2"><span>!</span>Bei Sturm automatisch hochfahren lassen</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ROLLLADEN */}
              <section id="rollladen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Rollladen – Schutz rundum</h2>
                <p className="text-slate-500 text-sm mb-6">Hitzeschutz + Verdunkelung + Einbruchschutz in einem</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Rollläden bieten in geschlossenem Zustand nahezu vollständige Verdunkelung und sind die einzige
                  Sonnenschutzart, die gleichzeitig auch <strong>aktiven Einbruchschutz</strong> bietet. Klassiker
                  für Schlafzimmer und Erdgeschoss-Räume. Mit Aufsatzkasten oder Vorbau-Variante auch nachrüstbar.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Im Hochsommer reicht es, den Rollladen nur halb zu schließen – die Lamellen mit Lichtschlitzen
                  lassen genug indirektes Licht durch, blockieren aber den Großteil der Wärme.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900">
                  <strong>Tipp:</strong> Klemmt Ihr Rollladen in der Hitze? Lesen Sie unseren Spezial-Ratgeber{' '}
                  <Link href="/blog/rollladen-klemmt" className="font-semibold underline hover:text-blue-700">
                    Rollladen klemmt – alle Ursachen & Lösungen
                  </Link>.
                </div>
              </section>

              {/* MARKISE & FOLIE */}
              <section id="markise" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Markisen, Außenrollos & Folien</h2>
                <p className="text-slate-500 text-sm mb-6">Wenn der Vollumbau zu teuer ist</p>
                <div className="grid sm:grid-cols-3 gap-5">
                  {[
                    { title: 'Gelenkarmmarkise', text: 'Klassiker für Terrasse & Balkon. Schützt Fenster und Sitzbereich gleichzeitig. Auf Windsensor achten.' },
                    { title: 'Senkrecht-Screen', text: 'Außenrollo aus textilem Gewebe. Lässt Sicht nach draußen, blockt UV-Strahlung. Ideal für Bürofenster.' },
                    { title: 'Sonnenschutzfolie', text: 'Aufgeklebte Hightech-Folie. Günstig, aber irreversibel verdunkelnd. Perfekt für Mietwohnungen ohne Genehmigung.' },
                  ].map((b) => (
                    <div key={b.title} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{b.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KOSTEN */}
              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet Sonnenschutz?</h2>
                <p className="text-slate-500 text-sm mb-6">Realistische Preise inkl. Montage – Niederösterreich & Wien (2026)</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-amber-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Lösung</th>
                        <th className="text-left px-5 py-4 font-semibold">Preis pro Fenster</th>
                        <th className="text-left px-5 py-4 font-semibold">Lebensdauer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Sonnenschutzfolie (Profi-Montage)', p: '120–250 €', l: '8–12 Jahre' },
                        { t: 'Innenjalousie / Plissee', p: '150–400 €', l: '10–15 Jahre' },
                        { t: 'Außenrollo / Screen', p: '450–900 €', l: '15–20 Jahre' },
                        { t: 'Markise (pro Meter Breite)', p: '300–700 €', l: '15–20 Jahre' },
                        { t: 'Raffstore (elektrisch)', p: '700–1.400 €', l: '20–25 Jahre' },
                        { t: 'Rollladen (Vorbau, motorisiert)', p: '600–1.200 €', l: '20–30 Jahre' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-amber-50/50' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 font-semibold text-amber-700">{row.p}</td>
                          <td className="px-5 py-3 text-slate-600">{row.l}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  * Richtwerte bei Standardgrößen (ca. 120×140 cm). Größere oder gebogene Fensterelemente,
                  Sonderfarben und Smart-Home-Integration verändern den Preis. Wir erstellen verbindliche Angebote vor Ort.
                </p>
              </section>

              {/* REPARATUR */}
              <section id="reparatur" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Sonnenschutz defekt? So gehen wir vor</h2>
                <p className="text-slate-500 text-sm mb-6">Reparatur statt Neukauf</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Telefonische Erstdiagnose', d: 'Sie schildern das Problem (Motor, Lamellen, Gurt). Wir schätzen den Aufwand und nennen einen Richtpreis.' },
                    { t: 'Termin vor Ort meist binnen 48 h', d: 'Im Sommer fahren wir täglich Wien, Tulln, St. Pölten, Klosterneuburg und Krems an.' },
                    { t: 'Reparatur oder Ersatzteil-Bestellung', d: 'Standard-Motoren und Gurte haben wir am Fahrzeug dabei. Bei Sonderlamellen kommen wir ein zweites Mal.' },
                    { t: 'Funktionstest und Wartung', d: 'Wir kontrollieren End-Anschläge, Lager und Steuerung. Sie bekommen Pflegeempfehlungen mit.' },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
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

              {/* INTERNAL CTA */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Hitzewelle und Ihr Raffstore streikt?</p>
                  <p className="text-amber-50 text-sm mt-1">Schnelle Reparatur in Wien, NÖ & Wienerwald – meist innerhalb von 48 Stunden.</p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors text-sm shadow whitespace-nowrap"
                >
                  Reparatur anfragen →
                </Link>
              </div>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen zum Sonnenschutz</h2>
                <p className="text-slate-500 text-sm mb-6">Antworten aus tausenden Service-Einsätzen</p>
                <div className="space-y-4">
                  {[
                    { q: 'Welcher Sonnenschutz hält Hitze am besten draußen?', a: 'Außenliegender Sonnenschutz – Raffstore, Rollladen, Markise, Außenrollo – ist deutlich effektiver als innenliegende Jalousien. Bis zu 75 % weniger Energieeintrag, weil die Sonnenstrahlen das Glas gar nicht erst erhitzen.' },
                    { q: 'Was ist besser: Raffstore oder Rollladen?', a: 'Raffstores haben verstellbare Lamellen für Tageslicht ohne Hitze – ideal für Wohn- und Arbeitsräume. Rollläden verdunkeln vollständig und schützen besser vor Einbruch und Sturm – ideal für Schlafzimmer.' },
                    { q: 'Was kostet ein Raffstore-System pro Fenster?', a: 'Ein elektrischer Raffstore kostet inkl. Montage in Niederösterreich und Wien zwischen 700 € und 1.400 € pro Fensterelement, abhängig von Größe und Steuerung.' },
                    { q: 'Lohnt sich Sonnenschutzfolie auf Fenstern?', a: 'Sonnenschutzfolie ist die günstigste Lösung (ca. 30–80 € pro m²) und reduziert den Wärmeeintrag deutlich. Nachteil: Die Folie verdunkelt das Fenster dauerhaft. Für Mietwohnungen oft die einzige Option.' },
                    { q: 'Mein Raffstore-Motor ist kaputt – was tun?', a: 'Erst Sicherung und Fernbedienung prüfen, bei Überhitzung 15 Minuten warten. Reagiert der Motor weiter nicht, defekt austauschen lassen – das ist ein Profi-Job.' },
                    { q: 'Kann ich Sonnenschutz nachträglich montieren?', a: 'Ja – Vorbau-Rollläden, Aufsatz-Raffstores, Markisen und Folien sind alle nachrüstbar. Bei Mietwohnungen Zustimmung des Eigentümers einholen, vor allem bei Eingriffen in die Fassade.' },
                  ].map((item, i) => (
                    <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:bg-slate-100 list-none">
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

              {/* FAZIT */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fazit</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Effektiver <strong>Sonnenschutz</strong> hält die Hitze schon an der Glasoberfläche ab – innenliegende
                  Jalousien sind eine Notlösung, aber kein echter Klimaschutz. Wer neu baut oder saniert, sollte
                  Raffstore oder Rollladen einplanen. Im Bestand sind Markise und Folie clevere Alternativen.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Wir beraten in Wien und Niederösterreich neutral – ohne Markenbindung – und reparieren bestehende
                  Systeme schnell und langlebig. Jetzt rechtzeitig vor der Hitzewelle planen.
                </p>
              </section>

              {/* FINAL CTA */}
              <div className="bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Beratung & Reparatur aus einer Hand</h2>
                <p className="text-amber-50 mb-6 max-w-md mx-auto">
                  Ob Neumontage, Service oder Notreparatur – wir kommen zu Ihnen und schauen es uns vor Ort an.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-amber-700 font-bold px-7 py-3 rounded-xl hover:bg-amber-50 transition-colors text-sm">
                    Kostenlos anfragen
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
