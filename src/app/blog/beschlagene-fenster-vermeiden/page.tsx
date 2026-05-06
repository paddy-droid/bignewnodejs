import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Beschlagene Fenster vermeiden | Schimmel-Prävention im Winter',
  description: 'Kondenswasser & Schimmel an Fenstern verhindern: Richtig lüften, heizen, Möbel anordnen. Inkl. Profi-Tipps zur Fensterdiagnose. Service in Wien, Tulln, St. Pölten & ganz NÖ.',
  keywords: [
    'beschlagene fenster winter', 'schimmel vermeiden fenster', 'luftfeuchtigkeit wohnung wien',
    'fensterservice tulln', 'fensterlüftung st. pölten', 'kondenswasser fenster',
    'stoßlüften richtig', 'taupunkt fenster', 'isolierglas tausch',
  ],
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog/beschlagene-fenster-vermeiden' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie verhindere ich beschlagene Fenster im Winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mehrmals täglich 5–10 Minuten stoßlüften (komplett geöffnetes Fenster), nicht kipplüften. Räume auf 19–21 °C halten, Luftfeuchtigkeit zwischen 40–60 %. Möbel mit 5 cm Abstand zur Außenwand stellen. Wäsche nicht in Wohnräumen trocknen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum beschlagen Fenster trotz richtiger Lüftung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wenn Fenster trotz richtiger Lüftung beschlagen, liegt es oft an alten Glasrändern oder kalten Rahmenstellen (Wärmebrücken). Bei Beschlag zwischen den Glasebenen ist die Randverklebung des Isolierglases defekt – das Glas muss getauscht werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Stoßlüften und wie geht es richtig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stoßlüften = Fenster für 5–10 Minuten komplett öffnen, am besten Querlüftung mit gegenüberliegenden Fenstern. Heizung kurz abdrehen. 3–5× täglich. Kipplüften ist im Winter falsch: Fenster und Wand kühlen aus, kaum Luftaustausch, Heizkosten steigen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel Luftfeuchtigkeit ist normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Wohnräumen 40–60 % relative Luftfeuchte. Werte über 65 % begünstigen Schimmel. Werte unter 35 % reizen Schleimhäute. Hygrometer (10–20 €) helfen beim Überwachen. Zu hohe Werte: mehr lüften, Pflanzen reduzieren, Wäsche woanders trocknen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann ist Schimmel an Fenstern gefährlich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kleine Flecken (< 0,5 m²) können Sie selbst mit 70 %-Alkohol oder Schimmelreiniger entfernen. Flächen über 0,5 m², oder wenn der Schimmel wiederkommt: Profi rufen. Allergiker und Kleinkinder reagieren empfindlich – früh handeln, nicht warten.',
      },
    },
  ],
}

const toc = [
  { id: 'physik', label: 'Wie entsteht Kondenswasser?' },
  { id: 'ursachen', label: 'Häufige Ursachen' },
  { id: 'lueften', label: 'Richtig lüften' },
  { id: 'heizen', label: 'Richtig heizen' },
  { id: 'fenstercheck', label: 'Fenstercheck' },
  { id: 'sanieren', label: 'Was Sie sanieren können' },
  { id: 'faq', label: 'FAQ' },
]

export default function BeschlageneFensterVermeidenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Schimmel', 'Lüften', 'Komfort', 'Heizsaison'].map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Beschlagene Fenster?<br />
              <span className="text-cyan-200">So stoppen Sie Schimmel im Winter</span>
            </h1>
            <p className="text-blue-50 text-lg md:text-xl max-w-2xl leading-relaxed">
              Kondenswasser ist ein Warnsignal – kein optisches Problem. Wir zeigen Ihnen, warum es entsteht,
              wie Sie es vermeiden und wann Ihre Fenster wirklich saniert werden müssen.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100/90">
              <span>Veröffentlicht: 10. November 2025</span>
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
                      🔍 Fensterdiagnose
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
                <Image src="/Images/fenster-dichtungen-tauschen.webp" alt="Beschlagene Fenster vermeiden – Tipps gegen Kondenswasser & Schimmel" width={900} height={450} className="w-full object-cover" priority />
              </div>

              <div className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Schnellantwort</p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Kondenswasser entsteht, wenn warme feuchte Luft auf kaltes Glas trifft</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> 3–5× täglich 5–10 Min stoßlüften (kein kipplüften!)</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Luftfeuchtigkeit 40–60 % halten – Hygrometer für ~15 € sehr hilfreich</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Beschlag zwischen Glasebenen = Isolierglas defekt → tauschen</li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Viele Hausbesitzer betrachten beschlagene Fenster im Winter als normales Phänomen und ignorieren
                die Warnsignale. Doch <strong>Kondenswasser ist weit mehr als nur ein optisches Problem</strong> –
                es ist ein klares Indiz für ein unausgeglichenes Raumklima und kann zu Schimmel und damit zu
                ernsthaften gesundheitlichen Problemen führen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Besonders in gut gedämmten modernen Gebäuden wird das Problem häufiger, weil die Luftfeuchtigkeit
                nicht mehr wie früher durch undichte Fugen entweichen kann. Lüftung wird zum aktiven Prozess.
                Lesen Sie weiter, wie Sie Kondenswasser stoppen – und wann Ihre Fenster die Ursache sind.
              </p>

              <section id="physik" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wie entsteht Kondenswasser?</h2>
                <p className="text-slate-500 text-sm mb-6">Der Taupunkt einfach erklärt</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Warme Luft kann mehr Wasser aufnehmen als kalte Luft. Trifft Ihre 21 °C warme Wohnzimmerluft
                  mit 60 % Feuchte auf eine 5 °C kalte Glasscheibe, kondensiert das Wasser dort sofort –
                  weil die kalte Oberfläche die Feuchtigkeit nicht mehr halten kann.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Das ist <strong>kein Fenster-Defekt</strong>, sondern Physik. Das Fenster ist nur der erste
                  Ort, an dem es sichtbar wird – kalte Wandstellen hinter Möbeln sind oft genauso betroffen,
                  ohne dass Sie es merken.
                </p>
              </section>

              <section id="ursachen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wo kommt die Feuchtigkeit her?</h2>
                <p className="text-slate-500 text-sm mb-6">Eine 4-köpfige Familie produziert 12 l Wasser pro Tag</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { i: '🍳', t: 'Kochen', d: '0,5–1 l pro Mahlzeit ohne Dunstabzug' },
                    { i: '🚿', t: 'Duschen / Baden', d: '0,7–1,5 l pro Person und Tag' },
                    { i: '😴', t: 'Schlafen', d: 'Atmung 0,5 l pro Person und Nacht' },
                    { i: '🌿', t: 'Pflanzen', d: 'Je nach Größe 0,2–1 l pro Pflanze und Tag' },
                    { i: '👕', t: 'Wäsche trocknen', d: 'Bis zu 3 l pro Trockenladung' },
                    { i: '🐠', t: 'Aquarien & Brunnen', d: 'Konstante Feuchtigkeit – oft unterschätzt' },
                  ].map((s) => (
                    <div key={s.t} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                      <span className="text-2xl mb-2 block">{s.i}</span>
                      <p className="font-bold text-slate-800 mb-1 text-sm">{s.t}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="lueften" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Richtig lüften</h2>
                <p className="text-slate-500 text-sm mb-6">Die wichtigste Maßnahme</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2"><span className="text-xl">✅</span> Richtig: Stoßlüften</h3>
                    <ul className="space-y-2 text-sm text-emerald-900">
                      <li className="flex gap-2"><span>✓</span>Fenster komplett öffnen, 5–10 Minuten</li>
                      <li className="flex gap-2"><span>✓</span>3–5× täglich – nach Aufstehen, Kochen, vorm Schlafen</li>
                      <li className="flex gap-2"><span>✓</span>Querlüftung: gegenüberliegende Fenster für Durchzug</li>
                      <li className="flex gap-2"><span>✓</span>Heizkörper kurz abdrehen</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2"><span className="text-xl">🔴</span> Falsch: Kipplüften</h3>
                    <ul className="space-y-2 text-sm text-red-900">
                      <li className="flex gap-2"><span>✗</span>Fenster stundenlang gekippt</li>
                      <li className="flex gap-2"><span>✗</span>Außenwände kühlen aus → noch mehr Kondenswasser</li>
                      <li className="flex gap-2"><span>✗</span>Heizung läuft durch → hohe Energiekosten</li>
                      <li className="flex gap-2"><span>✗</span>Kaum echter Luftaustausch</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="heizen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Richtig heizen</h2>
                <p className="text-slate-500 text-sm mb-6">Konstant ist besser als rauf-runter</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Räume nicht unter 18 °C auskühlen lassen – sonst sind die Wandflächen so kalt, dass auch bei
                  guter Lüftung Kondenswasser entsteht. Im Schlafzimmer 16–18 °C, in Wohnräumen 19–21 °C, im Bad
                  21–23 °C.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { t: 'Schlafzimmer', v: '16–18 °C', n: 'Tür zu Wohnräumen geschlossen halten' },
                    { t: 'Wohnen / Arbeiten', v: '19–21 °C', n: 'Komfortbereich, Standard-Empfehlung' },
                    { t: 'Bad', v: '21–23 °C', n: 'Nach Dusche sofort lüften' },
                  ].map((r) => (
                    <div key={r.t} className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
                      <p className="text-xs uppercase tracking-wider text-blue-700 mb-1">{r.t}</p>
                      <p className="text-2xl font-extrabold text-slate-800 mb-1">{r.v}</p>
                      <p className="text-xs text-slate-600">{r.n}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="fenstercheck" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Wann sind Ihre Fenster die Ursache?</h2>
                <p className="text-slate-500 text-sm mb-6">Drei klare Warnsignale</p>
                <div className="space-y-4">
                  {[
                    { t: 'Beschlag innen am Glasrand', d: 'Wärmebrücke am Rahmen oder Verglasungs-Abstandshalter zu kalt. Bei alten Fenstern (>20 Jahre) oft Tauschempfehlung.' },
                    { t: 'Beschlag zwischen den Scheiben', d: 'Defekte Randverklebung des Isolierglases. Reparatur nicht möglich – Glas muss getauscht werden. Wir bieten Glas-Tausch ohne kompletten Fensterwechsel.' },
                    { t: 'Schimmel in der Fensterlaibung', d: 'Schlechte Wärmedämmung oder undichte Anschlussfuge. Profi-Diagnose mit Wärmebild-Kamera empfohlen.' },
                  ].map((p, i) => (
                    <div key={p.t} className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-800 mb-1">{p.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="sanieren" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Was Sie sanieren können</h2>
                <p className="text-slate-500 text-sm mb-6">Vom Dichtungstausch bis zum Glas-Wechsel</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Maßnahme</th>
                        <th className="text-left px-5 py-4 font-semibold">Wirkung</th>
                        <th className="text-left px-5 py-4 font-semibold">Kosten</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: 'Dichtungen tauschen', e: 'Schließt undichte Stellen, bessere Wärmedämmung', p: '60–110 €/Fenster' },
                        { t: 'Beschläge justieren', e: 'Erhöht den Anpressdruck → bessere Dichtigkeit', p: '80–150 €/Fenster' },
                        { t: 'Isolierglas tauschen', e: 'Behebt Beschlag zwischen Scheiben', p: '180–450 €/Fenster' },
                        { t: 'Komplett-Tausch (3-fach)', e: 'Maximale Wärmedämmung, U-Wert 0,5–0,7', p: '600–1.400 €/Fenster' },
                      ].map((row, i) => (
                        <tr key={row.t} className={i % 2 ? 'bg-blue-50/30' : 'bg-white'}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.t}</td>
                          <td className="px-5 py-3 text-slate-600">{row.e}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-700 leading-relaxed mt-5">
                  Mehr zum Dichtungstausch lesen Sie in unserem Spezialartikel{' '}
                  <Link href="/blog/fensterdichtungen-austauschen" className="text-blue-600 underline font-semibold">
                    Fensterdichtungen austauschen
                  </Link>
                  . Energiespar-Potenzial im Detail finden Sie in{' '}
                  <Link href="/blog/energie-sparen-im-winter" className="text-blue-600 underline font-semibold">
                    Energie sparen im Winter
                  </Link>.
                </p>
              </section>

              <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Fensterdiagnose vom Profi</p>
                  <p className="text-blue-100 text-sm mt-1">Wir kommen mit Wärmebildkamera und finden die Ursache.</p>
                </div>
                <Link href="/kontakt" className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow whitespace-nowrap">
                  Termin buchen →
                </Link>
              </div>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Häufige Fragen</h2>
                <p className="text-slate-500 text-sm mb-6">Alles, was Sie zur Heizsaison wissen müssen</p>
                <div className="space-y-4">
                  {[
                    { q: 'Wie verhindere ich beschlagene Fenster im Winter?', a: '3–5× täglich 5–10 Min stoßlüften, nicht kippen. 19–21 °C halten, Luftfeuchte 40–60 %. Möbel mit Abstand zu Außenwänden.' },
                    { q: 'Warum beschlagen Fenster trotz richtiger Lüftung?', a: 'Alte Glasränder oder Wärmebrücken. Bei Beschlag zwischen den Glasebenen: Isolierglas defekt – Glas tauschen.' },
                    { q: 'Was ist Stoßlüften?', a: 'Fenster für 5–10 Min komplett öffnen, idealerweise mit Querlüftung. Heizung kurz aus. Kein Kipplüften im Winter.' },
                    { q: 'Wie viel Luftfeuchtigkeit ist normal?', a: '40–60 %. Hygrometer für 10–20 € hilft. Über 65 % begünstigt Schimmel.' },
                    { q: 'Wann ist Schimmel gefährlich?', a: 'Kleine Flecken (< 0,5 m²) selbst entfernen. Größer oder wiederkehrend: Profi rufen. Allergiker und Kleinkinder besonders sensibel.' },
                    { q: 'Was tun bei Kondenswasser am Fenster?', a: 'Sofort wegwischen (sonst saugt sich der Rahmen voll). Lüftungsroutine prüfen. Bei wiederkehrendem Problem: Profi-Diagnose.' },
                    { q: 'Ist eine Lüftungsanlage sinnvoll?', a: 'Bei Niedrigenergiehäusern mit < 50 % Luftaustauschrate ja. Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung kostet ab 8.000 € pro Wohnung – amortisiert sich nur bei guter Dämmung.' },
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
                  <strong>Beschlagene Fenster sind ein Warnsignal</strong>, kein Defekt. Mit richtiger Lüftung,
                  konstantem Heizen und sinnvoller Möbel-Anordnung lösen Sie 80 % aller Kondenswasser-Probleme
                  innerhalb weniger Tage.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Wenn das nicht reicht oder Schimmel sichtbar wird, sind Ihre Fenster oder die Bausubstanz
                  Teil des Problems. Wir kommen mit Wärmebildkamera, finden die Ursache und sanieren ohne
                  Komplett-Tausch wo immer möglich.
                </p>
              </section>

              <div className="bg-gradient-to-br from-blue-700 to-cyan-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Wiederkehrende Feuchtigkeitsprobleme?</h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">
                  Wir analysieren vor Ort und sagen ehrlich, was zu tun ist. Schnell, kompetent, fair bepreist.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/kontakt" className="bg-white text-blue-700 font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                    Diagnose anfragen
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
