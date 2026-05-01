import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Raffstore Textband Tausch Wien & NÖ | Außenraffstore Reparatur | ROWO",
  description:
    "Raffstore Textband gerissen oder ausgefranst? Professioneller Tausch der Aufzugsbänder bei allen gängigen Außenraffstore-Systemen in Wien, Tulln, St. Pölten & ganz NÖ. Originalmaterial, schnelle Termine.",
  keywords: [
    "Raffstore Textband",
    "Raffstore Reparatur",
    "Textband tauschen",
    "Aufzugsband Raffstore",
    "Außenraffstore",
    "Lamellen-Sonnenschutz",
    "Schenker Storen",
    "Warema Raffstore",
    "Wien",
    "Tulln",
    "Niederösterreich",
  ],
  alternates: {
    canonical:
      "https://www.fensterservice-rowo.at/raffstore-textband-tausch",
  },
  openGraph: {
    title: "Raffstore Textband Tausch | ROWO Fensterservice",
    description:
      "Aufzugsbänder gerissen? Schneller Tausch bei allen Außenraffstores – Wien & NÖ.",
    url: "https://www.fensterservice-rowo.at/raffstore-textband-tausch",
    type: "website",
    locale: "de_AT",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet ein Raffstore Textband-Tausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard-Textband-Tausch pro Raffstore liegt bei 120–220 € (Material und Montage). Bei Großformaten oder Sonderprofilen 220–380 €. Mengenrabatte ab 4 Raffstores. Komplette Wartung mit Bandtausch und Mechanik-Service: ab 250 €.",
      },
    },
    {
      "@type": "Question",
      name: "Warum reißen Textbänder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hauptursachen: UV-Strahlung (bleicht und macht Material spröde), mechanische Belastung (Wind, Hagel, häufiges Bedienen), und altersbedingter Verschleiß. Standardmäßige Lebensdauer: 8–15 Jahre. Original-Markenbänder halten oft länger als Billig-Ersatz.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Raffstore-Marken könnt ihr reparieren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle gängigen Hersteller: Schenker, Warema, Roma, Heroal, Baier, Storen Hunter Douglas. Auch ältere Modelle und Sonderkonstruktionen. Wir besorgen passende Original-Textbänder oder hochwertige Alternativen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der Tausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro Raffstore 1–2 Stunden – inklusive Demontage, Bandtausch, Funktionsprüfung und Reinigung. Bei mehreren Raffstores an einem Tag: 5–6 pro Techniker realistisch.",
      },
    },
    {
      "@type": "Question",
      name: "Sollte ich den Tausch selbst machen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nicht empfohlen. Außenraffstores sind komplex, erfordern Demontage in Höhe (oft Leiter-/Steigerarbeiten), korrekte Bandführung und exakte Spannung. Falsche Montage führt zu Folgeschäden an Lamellen und Mechanik. Profi-Tausch ist eine günstige und sichere Lösung.",
      },
    },
  ],
};

const toc = [
  { id: "anzeichen", label: "Anzeichen" },
  { id: "leistungen", label: "Leistungen" },
  { id: "marken", label: "Marken" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function RaffstorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-stone-700 to-stone-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Originalbänder", "Alle Marken", "Mit Steiger"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Raffstore Textband-Tausch<br />
              <span className="text-stone-300">in Wien, Tulln &amp; ganz NÖ</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Textbänder gerissen, ausgefranst oder schief? Wir tauschen die
              Aufzugsbänder bei allen gängigen Außenraffstore-Systemen –
              fachgerecht, mit Originalmaterial und Steiger für höhere
              Geschosse.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-stone-200 hover:bg-white text-stone-900 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Tausch anfragen →
              </Link>
              <a
                href="tel:+436644351622"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                📞 +43 664 435 1622
              </a>
            </div>
          </div>
        </div>

        <div className="bg-stone-800 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🛠️ Schenker / Warema / Roma",
              "✅ Originalbänder",
              "🪜 Mit Steiger / Hubsteiger",
              "📋 Kostenloser KV",
              "🛡️ 5 Jahre Gewährleistung",
            ].map((item) => (
              <span key={item} className="text-stone-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Inhalt
                  </p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-stone-900 hover:bg-stone-100 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-stone-800 hover:bg-stone-900 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Tausch anfragen
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/rollladen_1_1777634381308.png"
                    alt="Service an Außenraffstore-Anlagen durch erfahrenen Techniker in NÖ"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </aside>

            <article className="flex-1 min-w-0">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl overflow-hidden shadow-md col-span-2 sm:col-span-1">
                  <Image
                    src="/Images/rollladen_2_1777634396383.png"
                    alt="Erneuerung des verschlissenen Textilbands beim Raffstore-Service"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/rollladen_1_1777634381308.png"
                    alt="Service an Außenraffstore-Anlagen durch erfahrenen Techniker in NÖ"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Außenraffstores sind die Premium-Lösung für Sonnenschutz – aber
                ihre <strong>Textbänder sind die Schwachstelle</strong>. UV-Strahlung, Wind und
                Bedienung lassen die Bänder mit der Zeit ausfransen, reißen
                oder unsauber laufen. Die Folge: Lamellen hängen schief,
                Raffstore lässt sich nicht mehr sauber bedienen oder bleibt
                ganz stehen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir tauschen die Textbänder fachgerecht – mit Original-
                Markenmaterial, korrekter Spannung und ausgewogener Lamellen-
                Führung. Bei höher gelegenen Raffstores arbeiten wir mit
                Steiger oder Hubsteiger, damit sicheres und sauberes Arbeiten
                garantiert ist.
              </p>

              <section id="anzeichen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Anzeichen für defekte Textbänder
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Diese Symptome bedeuten: Tausch wird nötig
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "✂️",
                      title: "Band gerissen oder eingerissen",
                      desc: "Eindeutigstes Zeichen – Raffstore läuft nicht mehr oder hängt schief.",
                    },
                    {
                      icon: "📐",
                      title: "Lamellen hängen schief",
                      desc: "Bei verdrehten oder gebrochenen Bändern stehen Lamellen nicht mehr im rechten Winkel.",
                    },
                    {
                      icon: "🌫️",
                      title: "Bänder sind ausgefranst",
                      desc: "Sichtbare Faserausrisse – Vorstufe vom Komplett-Riss, sollte zeitnah getauscht werden.",
                    },
                    {
                      icon: "🎨",
                      title: "Verfärbung &amp; Versprödung",
                      desc: "UV-bleichte oder hart wirkende Bänder reißen oft im nächsten Sturm.",
                    },
                    {
                      icon: "⚙️",
                      title: "Geräuschvolles Heben/Senken",
                      desc: "Knirschen oder Schleifen deutet auf falsch laufende Bänder hin.",
                    },
                    {
                      icon: "📅",
                      title: "Älter als 10 Jahre",
                      desc: "Auch ohne sichtbare Defekte: Lebensdauer ist begrenzt – vorbeugend tauschen.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-stone-50 border border-stone-200 rounded-2xl p-5"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p
                        className="font-bold text-slate-900 mb-1"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Raffstore-Leistungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Mehr als nur Bandtausch
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Leistung
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Beschreibung
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Vorteil
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Textband-Tausch", "Komplett-Tausch der Aufzugsbänder, alle Marken", "Volle Funktionalität wieder hergestellt", "bg-white"],
                        ["Lamellen-Justage", "Ausrichtung der Lamellen exakt waagerecht", "Sauberer Lichteinfall, gute Optik", "bg-slate-50"],
                        ["Mechanik-Service", "Reinigung, Schmierung, Endschalter prüfen", "Verhindert vorzeitige Folgeschäden", "bg-white"],
                        ["Motor-Reparatur", "Bei elektrischen Modellen: Motor-Diagnose und Tausch", "Smart-Home-Anbindung möglich", "bg-slate-50"],
                        ["Lamellen-Tausch", "Einzelne defekte Lamellen ersetzen", "Kein kompletter Raffstore-Tausch nötig", "bg-white"],
                        ["Wartungspaket", "Jährlicher Service mit Bandcheck und Schmierung", "Verdoppelt Lebensdauer", "bg-slate-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 text-green-700">
                            <span className="flex items-start gap-1">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              {row[2]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="marken" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Marken, die wir reparieren
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Schenker", "Warema", "Roma", "Heroal", "Baier", "Hunter Douglas", "Storen", "Roto", "Velux"].map(
                    (brand) => (
                      <div
                        key={brand}
                        className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-center font-bold text-slate-700"
                      >
                        {brand}
                      </div>
                    ),
                  )}
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten Textband-Tausch
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise (2026)
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Maßnahme
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Aufwand
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Kosten ca. (pro Raffstore)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Textband-Tausch Standard", "1–2 Std.", "120–220 €", "bg-white"],
                        ["Textband-Tausch Großformat", "2–3 Std.", "220–380 €", "bg-slate-50"],
                        ["Inkl. Lamellen-Justage", "+30 Min.", "+30 €", "bg-white"],
                        ["Mit Mechanik-Service", "+45 Min.", "+50 €", "bg-slate-50"],
                        ["Steiger-Einsatz (Höhe)", "—", "+150–280 €", "bg-yellow-50"],
                        ["Wartungspaket Raffstore", "—", "ab 95 €/Jahr", "bg-emerald-50"],
                        ["Mengenrabatt ab 4 Raffstores", "—", "−10 %", "bg-white"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-stone-700">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft der Bandtausch ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    { step: "1", title: "Anfrage mit Foto/Marke", text: "Wir bestimmen anhand Ihrer Angaben das richtige Original-Textband." },
                    { step: "2", title: "Materialbestellung", text: "Lieferzeit Original-Markenbänder: 5–10 Werktage." },
                    { step: "3", title: "Demontage altes Band", text: "Raffstore wird heruntergefahren, alte Bänder werden entfernt." },
                    { step: "4", title: "Montage neue Bänder", text: "Korrekte Spannung, exakte Lamellen-Führung, alle Endpositionen einstellen." },
                    { step: "5", title: "Funktionstest &amp; Übergabe", text: "Mehrfach-Test, Mechanik-Schmierung, schriftliche Gewährleistung." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-stone-800 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
                        {item.step}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex-1">
                        <p className="font-bold text-slate-800 mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-r from-stone-700 to-stone-900 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Textband gerissen?</p>
                  <p className="text-stone-300 text-sm mt-1">
                    Schneller Tausch mit Originalmaterial – auch in höheren
                    Geschossen.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Anfragen →
                </Link>
              </div>

              <section id="regionen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Servicegebiet
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                  {[
                    { name: "Wien", href: "/wien" },
                    { name: "Tulln", href: "/tulln" },
                    { name: "St. Pölten", href: "/st-poelten" },
                    { name: "Klosterneuburg", href: "/klosterneuburg" },
                    { name: "Krems", href: "/krems" },
                    { name: "Baden bei Wien", href: "/baden-bei-wien" },
                  ].map((r) => (
                    <Link
                      key={r.name}
                      href={r.href}
                      className="bg-slate-50 border border-slate-200 hover:border-stone-400 hover:bg-stone-100 rounded-2xl p-4 text-sm font-semibold text-slate-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zum Textband-Tausch
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    { q: "Was kostet ein Raffstore Textband-Tausch?", a: "Standard-Tausch pro Raffstore: 120–220 € (Material und Montage). Großformate: 220–380 €. Mengenrabatte ab 4 Raffstores. Steiger-Einsatz extra: 150–280 €." },
                    { q: "Warum reißen Textbänder?", a: "UV-Strahlung, mechanische Belastung, alterungsbedingter Verschleiß. Lebensdauer 8–15 Jahre. Original-Markenbänder halten oft länger als Billig-Ersatz." },
                    { q: "Welche Raffstore-Marken könnt ihr reparieren?", a: "Alle gängigen Hersteller: Schenker, Warema, Roma, Heroal, Baier, Hunter Douglas. Wir besorgen passende Original-Textbänder oder hochwertige Alternativen." },
                    { q: "Wie lange dauert der Tausch?", a: "Pro Raffstore 1–2 Stunden – Demontage, Bandtausch, Funktionsprüfung, Reinigung. 5–6 pro Tag und Techniker realistisch." },
                    { q: "Sollte ich den Tausch selbst machen?", a: "Nicht empfohlen. Komplexer Aufbau, Höhenarbeit, korrekte Bandführung und Spannung – falsche Montage führt zu Folgeschäden. Profi-Tausch ist günstig und sicher." },
                  ].map((item, i) => (
                    <details
                      key={i}
                      className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:bg-slate-100 transition-colors list-none">
                        {item.q}
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg ml-4">
                          ⌄
                        </span>
                      </summary>
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Direkter Kontakt
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <a
                    href="tel:+436644351622"
                    className="flex items-center gap-4 bg-stone-100 border border-stone-200 rounded-2xl p-5 hover:bg-stone-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">+43 664 435 1622</p>
                      <p className="text-sm text-slate-500">Mo–Do 8–17 · Fr 8–12</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@fensterservice-rowo.at"
                    className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        info@fensterservice-rowo.at
                      </p>
                      <p className="text-sm text-slate-500">Antwort innerhalb 2h</p>
                    </div>
                  </a>
                </div>
              </section>

              <div className="bg-gradient-to-br from-stone-800 to-stone-950 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Wieder voll funktionstüchtige Raffstores
                </h2>
                <p className="text-stone-300 mb-6 max-w-md mx-auto">
                  Original-Textbänder, Profi-Montage, Gewährleistung.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-stone-200 hover:bg-white text-stone-900 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    Anfragen
                  </Link>
                  <a
                    href="tel:+436644351622"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    📞 +43 664 435 1622
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <span>© 2026 Fenster Service Rowo</span>
                <nav className="flex gap-6">
                  <Link href="/" className="hover:text-stone-900 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-stone-900 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-stone-900 transition-colors">
                    Kontakt
                  </Link>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
