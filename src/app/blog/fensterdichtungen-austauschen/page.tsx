import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fensterdichtungen austauschen | Schritt-für-Schritt + Kosten',
  description: 'Fensterdichtungen tauschen und bis zu 20 % Heizkosten sparen: DIY-Anleitung, Materialwahl, Profi-Tipps & Kostenüberblick. Service in Wien, Tulln, St. Pölten & ganz Niederösterreich.',
  keywords: [
    'fensterdichtungen austauschen', 'dichtungstausch fenster', 'fenster abdichten',
    'heizkosten senken', 'zugluft vermeiden', 'gummidichtung fenster',
    'epdm dichtung', 'fenster dichtung erneuern', 'dichtung fenster kaufen',
  ],
  alternates: { canonical: 'https://fensterservice-rowo.at/blog/fensterdichtungen-austauschen' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie lange halten Fensterdichtungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hochwertige EPDM-Gummidichtungen halten 15–25 Jahre, Silikon-Dichtungen sogar bis zu 30 Jahre. Wer regelmäßig pflegt, holt das Maximum heraus. Erste Verschleißanzeichen zeigen sich oft schon nach 10–12 Jahren – Aushärtung, Risse, fehlender Anpressdruck.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Fensterdichtungen selbst tauschen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei Standard-Fenstern ja: alte Dichtung herausziehen, Nut reinigen, neue Dichtung passgenau einsetzen. Sie brauchen nur ein Cuttermesser und ca. 30–60 Minuten pro Fenster. Bei Velux, denkmalgeschützten oder Spezialfenstern ist Profi-Hilfe sinnvoller.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet der Dichtungstausch beim Profi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pro Fenster rechnen Sie inkl. Material und Montage in Wien und Niederösterreich mit 60–110 €. Bei einer kompletten Wohnung (6–8 Fenster) liegen die Kosten typischerweise bei 320–650 €. Material allein kostet 4–12 € pro Meter Dichtungsband.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Dichtung ist die beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EPDM-Gummi ist Standard – wetterbeständig, langlebig, preiswert. Silikon ist teurer, aber temperaturbeständiger und weicher. Schaumstoff-Dichtungen sind nur Notlösung – sie verlieren schnell ihre Spannkraft. Wir verwenden meist EPDM in Originalprofil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel kann ich durch neue Dichtungen sparen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei stark verschlissenen Dichtungen sind 10–20 % Heizkostenreduktion realistisch. Bei einer durchschnittlichen Heizkostenrechnung von 1.800 €/Jahr sind das 180–360 € jährlich – die Investition amortisiert sich oft in 1–2 Heizperioden.',
      },
    },
  ],
}

const toc = [
  { id: 'warum', label: 'Warum tauschen?' },
  { id: 'erkennen', label: 'Verschleiß erkennen' },
  { id: 'material', label: 'Material wählen' },
  { id: 'anleitung', label: 'Schritt-für-Schritt' },
  { id: 'profi', label: 'Wann zum Profi?' },
  { id: 'kosten', label: 'Kosten & Sparpotenzial' },
  { id: 'faq', label: 'FAQ' },
]

export default function FensterdichtungenAustauschenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Dichtungen', 'Energie', 'DIY', 'Heizkosten'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fensterdichtungen austauschen<br />
              <span className="text-emerald-200">Kleine Arbeit, große Wirkung</span>
            </h1>
            <p className="text-emerald-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Bis zu 20 % Heizkosten weniger – ohne Fenstertausch. Wir zeigen Ihnen, wie Sie Verschleiß erkennen,
              das richtige Material wählen und alte Dichtungen fachgerecht ersetzen.
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
                      🔧 Profi anfragen
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
                <Image src="/Images/fenster-dichtungen-tauschen.webp" alt="Fensterdichtungen austauschen für bessere Wärmedämmung" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Auf einen Blick</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Alte Dichtungen verursachen bis zu 20 % Wärmeverlust</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Tausch dauert pro Fenster ca. 30–60 Minuten</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Material kostet 4–12 € pro Meter (EPDM)</li>
                  <li className="flex gap-2"><span className="text-emerald-600 font-bold">→</span> Profi-Service ab 60 € pro Fenster, Komplettpaket ab 320 €</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Alte und poröse Fensterdichtungen sind eine der häufigsten Ursachen für Wärmeverluste in Wohnhäusern.
                Besonders in den kalten Wintermonaten in Niederösterreich können undichte Fenster für bis zu
                20 % des gesamten Energieverlusts verantwortlich sein – das schlägt sich direkt auf der
                Heizkostenrechnung nieder.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Die gute Nachricht: Ein Dichtungstausch ist keine Wissenschaft. Mit den richtigen Materialien
                und etwas handwerklichem Geschick erledigen Sie ihn selbst – und sparen sofort. Wann sich der
                Profi lohnt, lesen Sie weiter unten.
              </p>

              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Warum lohnt sich der Tausch?</h2>
                <p className="text-slate-500 text-sm mb-6">Mehr als nur weniger Zugluft</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { i: '💶', t: 'Heizkosten senken', d: 'Bis zu 20 % weniger Energie – jährlich oft 200–400 € Ersparnis.' },
                    { i: '🛌', t: 'Komfort', d: 'Schluss mit Zugluft am Schreibtisch oder kalten Schlafzimmern.' },
                    { i: '🦠', t: 'Schimmel-Schutz', d: 'Dichte Fenster vermeiden Kondenswasser und Schimmel.' },
                    { i: '🔇', t: 'Lärmschutz', d: 'Neue Dichtungen reduzieren auch Außengeräusche spürbar.' },
                  ].map((b) => (
                    <div key={b.t} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
                      <span className="text-3xl mb-3 block">{b.i}</span>
                      <h3 className="font-bold text-slate-800 mb-2 text-sm">{b.t}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{b.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="erkennen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Verschleiß erkennen</h2>
                <p className="text-slate-500 text-sm mb-6">Vier einfache Tests, die jeder kann</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">👀 Sicht-Test</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Gummi sichtbar rissig oder spröde</li>
                      <li>• Verformte oder zusammengedrückte Stellen</li>
                      <li>• Fehlende Stücke an Ecken</li>
                      <li>• Verfärbungen ins Schwarz-Gelbliche</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">📄 Papier-Test</h3>
                    <p className="text-sm text-slate-600">
                      Papier zwischen Flügel und Rahmen klemmen, Fenster schließen, ziehen. Lässt sich das
                      Papier leicht herausziehen, ist die Dichtung erneuerungsbedürftig.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">🕯️ Kerzen-Test</h3>
                    <p className="text-sm text-slate-600">
                      Kerze entlang des geschlossenen Fensters führen. Flackert die Flamme, kommt Luft durch.
                      Klappt nur bei Windstille im Freien.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">✋ Druck-Test</h3>
                    <p className="text-sm text-slate-600">
                      Mit dem Finger auf die Dichtung drücken. Springt sie sofort zurück = ok.
                      Bleibt sie eingedrückt oder fühlt sich hart an = tauschen.
                    </p>
                  </div>
                </div>
              </section>

              <section id="material" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Welches Material wählen?</h2>
                <p className="text-slate-500 text-sm mb-6">Die wichtigsten Dichtungstypen im Überblick</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-emerald-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Material</th>
                        <th className="text-left px-5 py-4 font-semibold">Lebensdauer</th>
                        <th className="text-left px-5 py-4 font-semibold">Preis/m</th>
                        <th className="text-left px-5 py-4 font-semibold">Eigenschaft</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { m: 'EPDM-Gummi', l: '15–25 Jahre', p: '4–8 €', e: 'Standard, wetterbeständig, langlebig' },
                        { m: 'Silikon', l: '20–30 Jahre', p: '8–14 €', e: 'Sehr temperaturbeständig, hochwertig' },
                        { m: 'TPE (Thermoplast)', l: '12–18 Jahre', p: '5–9 €', e: 'Modern, recycelbar, gute Elastizität' },
                        { m: 'Schaumstoff (D/E-Profil)', l: '3–5 Jahre', p: '2–4 €', e: 'Notlösung, schnell verschlissen' },
                      ].map((row, i) => (
                        <tr key={row.m} className={i % 2 ? 'bg-emerald-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.m}</td>
                          <td className="px-5 py-3 text-slate-600">{row.l}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row.p}</td>
                          <td className="px-5 py-3 text-slate-600">{row.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  <strong>Unsere Empfehlung:</strong> EPDM in Originalprofil – das passt 99 % der Fensterhersteller
                  und hält 15–25 Jahre. Wichtig ist das richtige Profil (Form & Dicke). Bringen Sie ein altes
                  Stück Dichtung in den Fachhandel mit oder fragen Sie uns – wir kennen die gängigen Profile.
                </p>
              </section>

              <section id="anleitung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Schritt-für-Schritt-Anleitung</h2>
                <p className="text-slate-500 text-sm mb-6">DIY in 30–60 Minuten pro Fenster</p>
                <ol className="space-y-4">
                  {[
                    { t: 'Vorbereitung', d: 'Werkzeug bereitlegen: Cuttermesser, Lappen, Bürste, neue Dichtung. Fensterflügel öffnen oder ausbauen, falls Sie schwer zugängliche Stellen haben.' },
                    { t: 'Alte Dichtung entfernen', d: 'Vorsichtig aus der Nut ziehen. Bei Widerstand mit Cutter den Klebepunkt durchtrennen. Nicht zerren – die Nut nicht beschädigen.' },
                    { t: 'Nut reinigen', d: 'Mit Bürste und Tuch gründlich säubern. Klebereste mit Universalreiniger lösen. Trocken wischen – keine feuchte Nut neu bedichten.' },
                    { t: 'Maß nehmen', d: 'Länge der Nut messen + 2 cm Reserve. Lieber etwas länger schneiden – kürzen geht immer, kleben nicht.' },
                    { t: 'Neue Dichtung einsetzen', d: 'An einer Ecke beginnen, mit dem Daumen flach in die Nut drücken. Nicht ziehen – das verformt die Dichtung. An den Ecken auf 45° gehrungsschnitt.' },
                    { t: 'Funktionstest', d: 'Fenster mehrmals schließen. Sollte gleichmäßig anliegen, leicht schließen. Bei zu viel Andruck Dichtung etwas dünner wählen.' },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{step.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-900">
                  <strong>⚠️ Vorsicht:</strong> Bei zu dicker Dichtung kann der Fensterflügel nicht mehr schließen
                  oder der Beschlag wird überlastet. Bei zu dünner Dichtung dichtet das Fenster nicht.
                  Im Zweifel: Profi rufen oder Original-Ersatzteil beim Hersteller bestellen.
                </div>
              </section>

              <section id="profi" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann lohnt sich der Profi?</h2>
                <p className="text-slate-500 text-sm mb-6">Nicht jedes Fenster ist DIY-tauglich</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2"><span className="text-xl">✅</span> Selbst tauschen</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Standard-Kunststofffenster</li>
                      <li className="flex gap-2"><span>✓</span>Originalprofil verfügbar</li>
                      <li className="flex gap-2"><span>✓</span>Gut zugänglich</li>
                      <li className="flex gap-2"><span>✓</span>Sie haben Werkzeug & Zeit</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2"><span className="text-xl">🔴</span> Profi rufen</h3>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex gap-2"><span>!</span>Velux & Dachfenster</li>
                      <li className="flex gap-2"><span>!</span>Denkmalgeschützte Holzfenster</li>
                      <li className="flex gap-2"><span>!</span>Beschädigte Dichtnut</li>
                      <li className="flex gap-2"><span>!</span>Hebe-Schiebe-Türen</li>
                      <li className="flex gap-2"><span>!</span>Mehrkomponenten-Profile</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Kosten & Sparpotenzial</h2>
                <p className="text-slate-500 text-sm mb-6">Was Sie investieren – und was Sie zurückbekommen</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Posten</th>
                        <th className="text-left px-5 py-4 font-semibold">DIY</th>
                        <th className="text-left px-5 py-4 font-semibold">Profi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Material 1 Fenster (~6 m)', d: '24–60 €', p: 'inkl.' },
                        { t: 'Arbeitszeit', d: '~45 Min', p: 'durch uns' },
                        { t: 'Pro Fenster komplett', d: '24–60 €', p: '60–110 €' },
                        { t: 'Komplette Wohnung (6–8 Stk)', d: '180–450 €', p: '320–650 €' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 text-slate-700">{row.d}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-sm text-emerald-900">
                  <strong>Amortisation:</strong> Bei 1.800 € Heizkosten/Jahr und 15 % Ersparnis durch neue Dichtungen
                  sparen Sie ca. 270 € jährlich – die Investition ist meist innerhalb von <strong>1–2 Heizperioden</strong> drin.
                </div>
              </section>

              <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Lieber gleich vom Profi machen lassen?</p>
                  <p className="text-emerald-100 text-sm mt-1">Komplett-Service für eine Wohnung ab 320 € in Wien & NÖ.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin anfragen →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Die wichtigsten Antworten</p>
                <div className="space-y-4">
                  {[
                    { q: 'Wie lange halten Fensterdichtungen?', a: 'EPDM 15–25 Jahre, Silikon bis 30 Jahre. Erste Verschleißanzeichen meist nach 10–12 Jahren.' },
                    { q: 'Kann ich Fensterdichtungen selbst tauschen?', a: 'Bei Standard-Fenstern ja: Cuttermesser und 30–60 Minuten reichen. Velux und Spezialfenster: Profi.' },
                    { q: 'Was kostet der Dichtungstausch beim Profi?', a: '60–110 € pro Fenster. Komplette Wohnung 320–650 €.' },
                    { q: 'Welche Dichtung ist die beste?', a: 'EPDM-Gummi ist Standard und reicht für 99 % der Fenster. Silikon nur für Spezialfälle.' },
                    { q: 'Wie viel kann ich sparen?', a: 'Bei stark verschlissenen Dichtungen 10–20 % Heizkosten – oft 180–360 € pro Jahr. Amortisation in 1–2 Jahren.' },
                    { q: 'Wann ist der beste Zeitpunkt?', a: 'Frühjahr oder Herbst bei 10–18 °C. Material ist dann flexibel. Im Winter ist es zwar spürbarer, aber schwieriger zu verarbeiten.' },
                    { q: 'Muss ich den Fensterflügel ausbauen?', a: 'In der Regel nicht. Bei großen Flügeln oder schlecht zugänglichen Stellen erleichtert es aber die Arbeit. Wir bauen bei Bedarf für Sie aus und wieder ein.' },
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
                  Der <strong>Tausch alter Fensterdichtungen</strong> ist eine der effektivsten und günstigsten
                  Energiesparmaßnahmen überhaupt. Mit relativ geringem Aufwand senken Sie die Heizkosten,
                  verbessern Wohnkomfort und Schimmelschutz – und verlängern die Lebensdauer Ihrer Fenster.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Lesen Sie auch unseren Artikel{' '}
                  <Link href="/blog/energie-sparen-im-winter" className="text-emerald-700 underline font-semibold">
                    Energie sparen im Winter
                  </Link>{' '}
                  und unseren{' '}
                  <Link href="/blog/fenster-fruehjahrscheck" className="text-emerald-700 underline font-semibold">
                    Frühjahrscheck-Leitfaden
                  </Link>
                  , um das Maximum aus Ihren Fenstern herauszuholen.
                </p>
              </section>

              <div className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Profi-Dichtungstausch gewünscht?</h2>
                <p className="text-emerald-100 mb-6 max-w-md mx-auto">
                  Wir kommen, prüfen, tauschen – schnell, sauber und mit Garantie. In ganz Wien & NÖ.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-emerald-700 font-bold px-7 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm">
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
