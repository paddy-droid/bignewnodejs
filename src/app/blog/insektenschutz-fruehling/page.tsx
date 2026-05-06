import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Insektenschutz nach Maß | Fliegengitter für Wien & NÖ',
  description: 'Hochwertiger Insektenschutz für Fenster, Türen und Lichtschächte – Spannrahmen, Drehtüren, Plissees & Pollenschutz. Profi-Montage in Wien, Tulln, St. Pölten und ganz Niederösterreich.',
  keywords: [
    'insektenschutz wien', 'fliegengitter tulln', 'mückenschutz nach maß niederösterreich',
    'insektenschutzgitter balkon', 'plissee tür insektenschutz', 'pollenschutz fenster',
    'fenstergitter reparatur', 'insektenschutz st. pölten', 'fliegengitter rollo',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/insektenschutz-fruehling' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet ein Insektenschutz nach Maß?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein einfacher Spannrahmen für Fenster kostet inkl. Aufmaß und Montage in Niederösterreich und Wien zwischen 90 € und 180 €. Drehtüren liegen bei 250–450 €, Insektenschutz-Plissees für Schiebetüren bei 350–700 €. Pollenschutzgewebe als Aufpreis ca. 25–40 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welcher Insektenschutz ist für Mietwohnungen erlaubt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spannrahmen werden in den Fensterfalz eingehängt – ohne Bohren oder Kleben. Das ist für Mietwohnungen ideal, weil rückstandslos entfernbar. Ein Vermerk im Mietvertrag ist nicht nötig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hält Insektenschutz auch Pollen ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spezielles Pollenschutzgewebe filtert bis zu 99 % der Pollen aus der Außenluft. Es ist feiner gewebt als Standard-Fiberglas und etwas teurer. Für Allergiker oft die einzige Möglichkeit, im Frühling bei offenem Fenster zu schlafen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welcher Insektenschutz für Balkontüren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drehtüren mit Magnet-Schließer für klassische Balkontüren, Plissees für Schiebe-Hebe-Türen, Pendeltüren für häufige Nutzung. Wir messen vor Ort und empfehlen die passende Lösung – oft kombiniert mit Pollenschutz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange hält ein Insektenschutzgitter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hochwertige Spannrahmen mit Aluminium-Profil und Fiberglasgewebe halten 10–15 Jahre. Billigware aus dem Baumarkt oft nur 2–3 Sommer. Das Gewebe lässt sich bei Bedarf für 30–60 € austauschen, ohne den Rahmen zu erneuern.',
      },
    },
  ],
}

const toc = [
  { id: 'warum', label: 'Warum jetzt?' },
  { id: 'systeme', label: 'Systeme im Überblick' },
  { id: 'pollenschutz', label: 'Pollenschutz' },
  { id: 'kosten', label: 'Kosten' },
  { id: 'montage', label: 'Montage-Ablauf' },
  { id: 'reparatur', label: 'Reparatur' },
  { id: 'faq', label: 'FAQ' },
]

export default function InsektenschutzFruehlingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-800 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Insektenschutz', 'Frühling', 'Komfort', 'Pollenschutz'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Insektenschutz nach Maß<br />
              <span className="text-emerald-200">für Wien & Niederösterreich</span>
            </h1>
            <p className="text-emerald-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Spannrahmen, Drehtüren, Plissees und Pollenschutz – wir messen kostenlos auf, fertigen passgenau
              und montieren rückstandslos. Für Häuser, Wohnungen, Balkone und Lichtschächte.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-emerald-100/90">
              <span>Veröffentlicht: 02. Februar 2026</span>
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
                      📐 Kostenlos aufmessen
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
                <Image src="/Images/insektenschutz-fruehling.png" alt="Modernes Fenster mit Insektenschutz – Blick in den Frühlingsgarten" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Auf einen Blick</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Maßanfertigung passt 100 % – Baumarkt-Standardware oft 2–3 Sommer</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Spannrahmen ohne Bohren – ideal für Mietwohnungen</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Pollenschutzgewebe filtert 99 % der Pollen für Allergiker</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Wir kommen zum Aufmaß kostenlos in ganz Wien & NÖ</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Sobald die ersten warmen Tage kommen, erwacht die Natur – und leider auch die Insektenwelt.
                Wer in <strong>Wien</strong>, im <strong>Tullnerfeld</strong>, im Donauraum oder im Wienerwald
                wohnt, kennt das Problem: Man möchte die frische Luft hereinlassen, doch Mücken, Fliegen und
                Wespen nutzen jede Gelegenheit.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Ein rechtzeitig montierter <strong>Insektenschutz nach Maß</strong> ist die einfachste Investition
                in mehr Wohnkomfort. Anders als Standardware aus dem Baumarkt passen unsere Lösungen exakt,
                halten 10–15 Jahre und lassen sich rückstandslos abnehmen.
              </p>

              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Warum jetzt der beste Zeitpunkt ist</h2>
                <p className="text-slate-500 text-sm mb-6">Frühling = Vorsaison = kürzere Lieferzeit</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  In der Hochsaison (Mai–Juli) sind die Werkstätten österreichweit ausgebucht. Wer im Februar
                  oder März bestellt, bekommt seinen Insektenschutz binnen 1–2 Wochen geliefert und montiert.
                  Im Sommer warten Sie oft 4–6 Wochen.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Außerdem: Der Frühling ist die <strong>kritische Phase für Allergiker</strong>. Birken-,
                  Erlen- und Gräserpollen lösen heftige Reaktionen aus – ein Pollenschutzgewebe in Kombination
                  mit Insektenschutz ermöglicht endlich wieder erholsamen Schlaf bei offenem Fenster.
                </p>
              </section>

              <section id="systeme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Systeme im Überblick</h2>
                <p className="text-slate-500 text-sm mb-6">Welche Lösung für welches Fenster?</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6 items-center">
                  <div className="relative h-72 w-full">
                    <Image src="/Images/insektenschutz-plissee-detail.png" alt="Detailaufnahme einer Insektenschutz-Plisseetür" fill className="rounded-2xl shadow-md object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-3 text-lg">Unsere Top-Lösungen</h3>
                    <ol className="space-y-3 text-slate-700 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">1</span>
                        <div>
                          <strong>Spannrahmen für Fenster</strong> – ohne Bohren, ideal für Mietwohnungen,
                          einfach abnehmbar zum Putzen.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">2</span>
                        <div>
                          <strong>Drehtüren mit Magnetverschluss</strong> – für klassische Balkontüren,
                          schließt sich automatisch.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">3</span>
                        <div>
                          <strong>Plissee-Schiebetüren</strong> – platzsparend wie Ziehharmonika,
                          perfekt für Hebe-Schiebe-Türen.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">4</span>
                        <div>
                          <strong>Insektenschutz-Rollos</strong> – fahren bei Nichtgebrauch in die Kassette ein,
                          für Dachfenster und Lichtschächte.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">5</span>
                        <div>
                          <strong>Lichtschacht-Abdeckungen</strong> – schützen Keller vor Laub, Spinnen, Mäusen.
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">System</th>
                        <th className="text-left px-5 py-4 font-semibold">Einsatzbereich</th>
                        <th className="text-left px-5 py-4 font-semibold">Mietwohnung?</th>
                        <th className="text-left px-5 py-4 font-semibold">Preis ab</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { s: 'Spannrahmen', e: 'Fenster (Dreh-Kipp)', m: 'Ja', p: '90 €' },
                        { s: 'Drehtür', e: 'Balkon-/Terrassentür', m: 'Mit Erlaubnis', p: '250 €' },
                        { s: 'Plissee-Schiebetür', e: 'Hebe-Schiebe / breite Tür', m: 'Mit Erlaubnis', p: '350 €' },
                        { s: 'Insektenschutz-Rollo', e: 'Dachfenster, große Flächen', m: 'Mit Erlaubnis', p: '280 €' },
                        { s: 'Lichtschacht-Gitter', e: 'Kellerlichtschächte', m: 'Eigentumsfrage', p: '70 €' },
                      ].map((row, i) => (
                        <tr key={row.s} className={i % 2 ? 'bg-emerald-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.s}</td>
                          <td className="px-5 py-3 text-slate-600">{row.e}</td>
                          <td className="px-5 py-3 text-slate-600">{row.m}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="pollenschutz" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Pollenschutz – das Plus für Allergiker</h2>
                <p className="text-slate-500 text-sm mb-6">Endlich wieder durchatmen</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Pollenschutzgewebe ist deutlich feiner gewebt als Standard-Fiberglas. Es filtert bis zu 99 %
                  der Pollen aus der Außenluft – wichtig in Niederösterreich, wo das Pollenaufkommen wegen
                  großer Wald- und Wiesenflächen besonders hoch ist.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { t: 'Birke', d: 'März bis Mai – häufigster Allergieauslöser im Frühling.' },
                    { t: 'Gräser', d: 'Mai bis August – Hauptbelastung in NÖ und im Wienerwald.' },
                    { t: 'Beifuß / Ambrosia', d: 'Juli bis Oktober – zunehmende Belastung in Ostösterreich.' },
                  ].map((p) => (
                    <div key={p.t} className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                      <p className="font-bold text-slate-800 text-sm mb-1">{p.t}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.d}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Aufpreis Pollenschutzgewebe: ca. 25–40 € pro Element. In der Praxis kaum spürbar dunkler,
                  aber ein riesiger Unterschied beim Schlafen mit offenem Fenster.
                </p>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was kostet Insektenschutz nach Maß?</h2>
                <p className="text-slate-500 text-sm mb-6">Realistische Preise inkl. Aufmaß und Montage (2026)</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Lösung</th>
                        <th className="text-left px-5 py-4 font-semibold">Standard</th>
                        <th className="text-left px-5 py-4 font-semibold">Mit Pollenschutz</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Spannrahmen Fenster (klein)', s: '90–120 €', p: '120–160 €' },
                        { t: 'Spannrahmen Fenster (groß)', s: '140–180 €', p: '170–220 €' },
                        { t: 'Drehtür Balkon', s: '250–380 €', p: '290–420 €' },
                        { t: 'Plissee Schiebetür', s: '350–550 €', p: '400–600 €' },
                        { t: 'Pendeltür', s: '320–480 €', p: '370–520 €' },
                        { t: 'Insektenschutzrollo', s: '280–450 €', p: '320–490 €' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-emerald-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 font-semibold text-slate-700">{row.s}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">* Mengenrabatt ab 4 Fenstern. Verbindliches Angebot kostenlos vor Ort.</p>
              </section>

              <section id="montage" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wie der Ablauf bei uns aussieht</h2>
                <p className="text-slate-500 text-sm mb-6">Von der Anfrage bis zur fertigen Montage</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Anfrage und Telefon-Beratung', d: 'Sie schildern, welche Fenster und Türen Sie ausgestattet haben möchten. Wir nennen einen groben Richtpreis und vereinbaren einen Aufmaß-Termin.' },
                    { t: 'Kostenloses Aufmaß vor Ort', d: 'Wir messen alle Elemente exakt aus, beraten zur passenden Variante und besprechen Farben (weiß, anthrazit, holzdekor).' },
                    { t: 'Festpreis-Angebot', d: 'Sie erhalten ein verbindliches Angebot per E-Mail – ohne versteckte Kosten und ohne Anzahlung.' },
                    { t: 'Fertigung in 7–14 Tagen', d: 'Maßanfertigung in unserer Werkstatt. Sie können den Termin für die Montage flexibel wählen.' },
                    { t: 'Montage in unter 1 Stunde pro Element', d: 'Wir montieren sauber, hinterlassen keinen Schmutz und entsorgen Verpackungen. Sie bekommen eine Pflegeanleitung.' },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{step.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="reparatur" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Bestehender Insektenschutz beschädigt?</h2>
                <p className="text-slate-500 text-sm mb-6">Reparatur statt Neukauf</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ein gerissenes Gewebe heißt nicht, dass der ganze Rahmen weg muss. Wir tauschen das Fiberglas-Netz
                  für 30–60 € pro Rahmen, ersetzen Magnete oder Eckverbinder und richten verbogene Profile.
                  Wenn Sie noch das Originalmodell haben, lohnt sich Reparatur fast immer.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900">
                  Mehr zu Frühjahrs-Tipps für Ihr Zuhause finden Sie in unserem Artikel{' '}
                  <Link href="/blog/fenster-fruehjahrscheck" className="font-semibold underline hover:text-blue-700">
                    Fenster-Frühjahrscheck
                  </Link>. Wir kombinieren Insektenschutz-Montage gerne mit einer kompletten Wartung.
                </div>
              </section>

              <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Bereit für einen insektenfreien Sommer?</p>
                  <p className="text-emerald-50 text-sm mt-1">Kostenloses Aufmaß. Festpreis. Saubere Montage.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin anfragen →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Alles, was Sie vor dem Kauf wissen sollten</p>
                <div className="space-y-4">
                  {[
                    { q: 'Was kostet ein Insektenschutz nach Maß?', a: 'Spannrahmen ab 90 €, Drehtüren ab 250 €, Plissees ab 350 €. Pollenschutz als Aufpreis 25–40 €. Mengenrabatt ab 4 Fenstern.' },
                    { q: 'Welcher Insektenschutz ist für Mietwohnungen erlaubt?', a: 'Spannrahmen werden in den Fensterfalz eingehängt – ohne Bohren oder Kleben. Ideal für Mietwohnungen, weil rückstandslos entfernbar.' },
                    { q: 'Hält Insektenschutz auch Pollen ab?', a: 'Spezielles Pollenschutzgewebe filtert bis zu 99 % der Pollen aus der Außenluft – feiner gewebt als Standard-Fiberglas.' },
                    { q: 'Welcher Insektenschutz für Balkontüren?', a: 'Drehtüren mit Magnetverschluss für klassische Balkontüren, Plissees für Schiebe-Hebe-Türen, Pendeltüren für häufige Nutzung.' },
                    { q: 'Wie lange hält ein Insektenschutzgitter?', a: 'Hochwertige Spannrahmen mit Aluminium-Profil und Fiberglasgewebe halten 10–15 Jahre. Gewebe austauschbar für 30–60 €.' },
                    { q: 'Kann ich Insektenschutz selbst montieren?', a: 'Spannrahmen lassen sich grundsätzlich selbst einhängen, wenn Sie genau aufmessen. Drehtüren und Plissees brauchen Profi-Montage – ein Schiefstand reicht, damit der Magnetverschluss nicht hält.' },
                    { q: 'Sind die Gitter im Winter dran zu lassen?', a: 'Ja. Modern gebaute Spannrahmen sind UV- und frostbeständig. Wer mag, kann sie aushängen und liegend lagern – das verlängert die Lebensdauer leicht.' },
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
                  Hochwertiger <strong>Insektenschutz nach Maß</strong> ist eine der günstigsten Investitionen
                  in mehr Wohnkomfort – und für Allergiker oft sogar gesundheitsrelevant. Im Frühling bestellen
                  spart Lieferzeit und macht Sie für die Insekten-Hauptsaison ab Mai bereit.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Wir messen kostenlos, fertigen passgenau und montieren sauber – in Wien, Tulln, St. Pölten,
                  Klosterneuburg, Krems und ganz Niederösterreich.
                </p>
              </section>

              <div className="bg-gradient-to-br from-emerald-700 to-green-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Aufmaß-Termin sichern</h2>
                <p className="text-emerald-50 mb-6 max-w-md mx-auto">
                  Kostenlos und unverbindlich. Wir kommen mit Mustern und beraten persönlich.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-emerald-700 font-bold px-7 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm">
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
