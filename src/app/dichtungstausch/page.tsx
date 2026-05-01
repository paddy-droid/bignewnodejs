import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fensterdichtungen tauschen Wien & NÖ | Dichtungstausch | ROWO",
  description:
    "Zugluft, Pfeifgeräusche, Energieverluste? Professioneller Fensterdichtungs-Tausch in Wien, Tulln, St. Pölten & ganz NÖ. Spart 5–15 % Heizkosten, sofort spürbar. Geprüfter Fachbetrieb mit kostenlosem KV.",
  keywords: [
    "Fensterdichtung tauschen",
    "Dichtungstausch",
    "Fenster Zugluft",
    "Fensterdichtung erneuern",
    "Gummidichtung Fenster",
    "Energie sparen Fenster",
    "Fenster pfeift",
    "Wien",
    "Tulln",
    "St. Pölten",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/dichtungstausch",
  },
  openGraph: {
    title: "Fensterdichtungen tauschen | ROWO Fensterservice",
    description:
      "Schluss mit Zugluft – Dichtungstausch spart 5–15 % Heizkosten und ist sofort spürbar.",
    url: "https://www.fensterservice-rowo.at/dichtungstausch",
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
      name: "Wie oft sollten Fensterdichtungen getauscht werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hochwertige EPDM- und TPE-Dichtungen halten 10–15 Jahre, einfache PVC-Dichtungen oft nur 5–8 Jahre. Wir empfehlen einen Check alle 5 Jahre und einen Tausch, sobald die Dichtung Risse zeigt, hart wird oder Zugluft spürbar ist.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet der Dichtungstausch pro Fenster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard-Dichtungstausch pro Fenster liegt bei 35–80 € (Material und Montage). Bei Sonderprofilen oder größeren Formaten 80–150 €. Mengenrabatte bei mehreren Fenstern. Wir erstellen vorab immer einen schriftlichen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel Heizkosten spart Dichtungstausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei kompletter Dichtungssanierung im Haus: typischerweise 5–15 % der Heizkosten. Bei einer Heizrechnung von 2.000 €/Jahr sind das 100–300 € Ersparnis. Die Investition amortisiert sich oft in 2–3 Heizperioden.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Dichtungstypen verwendet ihr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir verwenden hochwertige EPDM-Dichtungen (UV- und ozonbeständig) und TPE-Dichtungen (langlebig, elastisch). Diese halten 10–15 Jahre und vertragen Temperaturen von -40°C bis +120°C. Billige PVC-Dichtungen verbauen wir bewusst nicht.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich die Dichtung selbst tauschen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einfachen Anschlagsdichtungen ist es theoretisch möglich, aber: Profilauswahl ist heikel (über 200 Profile am Markt), falsche Dichtung verursacht mehr Probleme als sie löst, und ohne anschließende Beschlag-Justage stimmt der Anpressdruck oft nicht. Professionell gemacht ist es eine günstige Investition.",
      },
    },
  ],
};

const toc = [
  { id: "anzeichen", label: "Anzeichen" },
  { id: "leistungen", label: "Leistungen" },
  { id: "materialien", label: "Materialien" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function DichtungstauschPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-cyan-800 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Energie sparen", "Sofort spürbar", "Alle Profile"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fensterdichtungen tauschen<br />
              <span className="text-cyan-300">Schluss mit Zugluft &amp; Energieverlust</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Poröse Dichtungen sind die häufigste und meist unterschätzte Ursache für
              kalte Räume und hohe Heizrechnungen. Wir tauschen alle gängigen
              Dichtungsprofile – spart 5–15 % Heizkosten, ist sofort spürbar
              und kostet pro Fenster oft weniger als 80 €.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Kostenlos anfragen →
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

        <div className="bg-cyan-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "💰 Spart 5–15 % Heizkosten",
              "🌡️ Sofort spürbarer Komfort",
              "🔧 EPDM &amp; TPE Premium-Dichtungen",
              "📋 Mengenrabatt ab 5 Fenstern",
              "✅ 5 Jahre Gewährleistung",
            ].map((item) => (
              <span key={item} className="text-cyan-100">
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Dichtung erneuern
                    </Link>
                    <a
                      href="tel:+436644351622"
                      className="block w-full text-center mt-2 border border-cyan-200 text-cyan-700 hover:bg-cyan-50 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/dichtungstausch-fenster.webp"
                    alt="Fensterdichtungen tauschen"
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
                    src="/Images/dichtungstausch-fenster.webp"
                    alt="Dichtungstausch Fenster"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/fenster-dichtungen-tauschen.webp"
                    alt="Dichtung erneuern"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Fensterdichtungen sind das <strong>am meisten unterschätzte Bauteil</strong> Ihres
                Fensters – und gleichzeitig der größte Hebel für spürbar mehr
                Wohnkomfort und niedrigere Heizkosten. Werden sie hart, rissig
                oder porös, entweicht warme Luft, kalte Luft strömt herein, und
                das Fenster verliert bis zu <strong>40 % seiner Dämmwirkung</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Die gute Nachricht: Der Dichtungstausch ist eine der günstigsten
                Maßnahmen mit dem schnellsten Effekt. Pro Fenster meist
                30–60 Minuten Arbeit, sofort spürbar wärmer und ruhiger.
              </p>

              <section id="anzeichen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Daran erkennen Sie defekte Dichtungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  6 typische Anzeichen, dass Ihre Fenster eine neue Dichtung brauchen
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🥶",
                      title: "Spürbare Zugluft",
                      desc: "Auch bei geschlossenem Fenster fühlen Sie kalte Luft am Rahmen oder die Vorhänge bewegen sich.",
                    },
                    {
                      icon: "🎵",
                      title: "Pfeifgeräusche bei Wind",
                      desc: "Wind erzeugt Geräusche am Fenster – ein klares Zeichen, dass Luft durch Spalten strömt.",
                    },
                    {
                      icon: "💧",
                      title: "Kondenswasser am Rahmen",
                      desc: "Tropfen oder Beschlag am Rahmen (nicht am Glas) deuten auf Kältebrücken durch defekte Dichtung.",
                    },
                    {
                      icon: "🪨",
                      title: "Hart oder rissig",
                      desc: "Drücken Sie auf die Dichtung – sie sollte elastisch nachgeben. Wenn sie hart wie Plastik ist, muss sie raus.",
                    },
                    {
                      icon: "🌫️",
                      title: "Schwarze Verfärbungen",
                      desc: "Schimmel oder Ablagerungen an der Dichtung – meist Folge von Feuchteansammlung.",
                    },
                    {
                      icon: "📈",
                      title: "Steigende Heizkosten",
                      desc: "Trotz gleicher Heizgewohnheiten steigt die Rechnung – Dichtungen sind oft die unsichtbare Ursache.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-bold text-slate-900 mb-1">
                            {item.title}
                          </p>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Dichtungs-Leistungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom Einzeltausch bis zur Komplett-Sanierung
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
                        ["Profil-Identifikation", "Wir identifizieren Ihr Dichtungsprofil aus über 200 Varianten", "Garantiert passende Ersatz-Dichtung", "bg-white"],
                        ["Anschlag-Dichtung", "Tausch der äußeren umlaufenden Dichtung am Flügel", "Hauptdichtung gegen Zugluft", "bg-slate-50"],
                        ["Mitteldichtung", "Tausch der zweiten Dichtungsebene bei modernen Fenstern", "Doppelter Schutz gegen Energieverluste", "bg-white"],
                        ["Glasleisten-Dichtung", "Tausch der Glas-Verglasungs-Dichtung", "Verhindert Schwitzen am Glasrand", "bg-slate-50"],
                        ["Beschlag-Justage", "Anpressdruck nach Tausch optimal einstellen", "Maximale Dichtwirkung garantiert", "bg-white"],
                        ["Komplettsanierung", "Alle Dichtungen + Justage in einem Termin", "Wie ein neues Fenster für einen Bruchteil", "bg-slate-50"],
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

              <section id="materialien" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Welche Dichtungen wir verwenden
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Premium-Materialien statt Billig-PVC – das macht den Unterschied
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "EPDM-Dichtungen",
                      lifespan: "10–15 Jahre",
                      desc: "Ethylen-Propylen-Dien-Kautschuk – UV- und ozonbeständig, alterungsfest. Unsere Standardwahl für Holz- und Kunststofffenster.",
                    },
                    {
                      title: "TPE-Dichtungen",
                      lifespan: "10–12 Jahre",
                      desc: "Thermoplastisches Elastomer – sehr elastisch, ideal für komplexe Profile. Recyclebar und umweltfreundlich.",
                    },
                    {
                      title: "Silikon-Dichtungen",
                      lifespan: "15–20 Jahre",
                      desc: "Höchste Beständigkeit, für Sonderanwendungen. Premium-Lösung bei extremen Bedingungen oder denkmalgeschützten Fenstern.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border-2 border-cyan-200 rounded-2xl p-5"
                    >
                      <p className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs font-semibold text-cyan-700 mb-3">
                        {item.lifespan}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten Dichtungstausch
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preisspannen für Österreich (2026)
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
                          Kosten ca. (pro Fenster)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Standard-Dichtung Anschlag", "30–45 Min.", "35–80 €", "bg-white"],
                        ["Standard-Dichtung Mitteldichtung", "30–45 Min.", "40–90 €", "bg-slate-50"],
                        ["Anschlag + Mitteldichtung", "60–90 Min.", "65–140 €", "bg-white"],
                        ["Sonderprofil oder Großformat", "60–90 Min.", "80–150 €", "bg-slate-50"],
                        ["Komplettsanierung + Justage", "1,5–2 Std.", "120–220 €", "bg-white"],
                        ["Mengenrabatt ab 5 Fenstern", "—", "−15 % auf Material", "bg-emerald-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-cyan-700">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Preise inkl. Material und Montage. Bei größeren Aufträgen:
                  Anfahrt im Servicegebiet inklusive.
                </p>
              </section>

              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft der Dichtungstausch ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    {
                      step: "1",
                      title: "Profil-Bestimmung",
                      text: "Wir identifizieren das genaue Dichtungsprofil – entweder direkt vor Ort oder anhand eines Fotos vorab.",
                    },
                    {
                      step: "2",
                      title: "Anfertigung &amp; Termin",
                      text: "Bestellen der passenden Premium-Dichtung (EPDM/TPE), Lieferzeit meist 2–5 Werktage.",
                    },
                    {
                      step: "3",
                      title: "Saubere Demontage",
                      text: "Alte Dichtung entfernen, Falz reinigen, Fensterprofil prüfen.",
                    },
                    {
                      step: "4",
                      title: "Montage",
                      text: "Neue Dichtung passgenau einsetzen, an den Ecken sauber stoßen, Klebepunkte setzen.",
                    },
                    {
                      step: "5",
                      title: "Justage &amp; Test",
                      text: "Beschlag-Anpressdruck einstellen, Funktionsprüfung mit Probeschluss.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-700 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
                        {item.step}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex-1">
                        <p className="font-bold text-slate-800 mb-1">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Schluss mit Zugluft.</p>
                  <p className="text-cyan-200 text-sm mt-1">
                    Kostenloser KV vor Ort – günstigste Maßnahme mit größtem
                    Effekt.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-cyan-700 font-bold px-6 py-3 rounded-xl hover:bg-cyan-50 transition-colors text-sm"
                >
                  Jetzt anfragen →
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
                      className="bg-slate-50 border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-cyan-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zum Dichtungstausch
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    {
                      q: "Wie oft sollten Fensterdichtungen getauscht werden?",
                      a: "Hochwertige EPDM- und TPE-Dichtungen halten 10–15 Jahre, einfache PVC-Dichtungen oft nur 5–8. Wir empfehlen einen Check alle 5 Jahre und einen Tausch bei ersten Anzeichen von Härte, Rissen oder Zugluft.",
                    },
                    {
                      q: "Was kostet der Dichtungstausch pro Fenster?",
                      a: "Standard-Dichtungstausch: 35–80 € pro Fenster (Material und Montage). Bei Sonderprofilen oder größeren Formaten 80–150 €. Mengenrabatte bei mehreren Fenstern.",
                    },
                    {
                      q: "Wie viel Heizkosten kann ich sparen?",
                      a: "Bei kompletter Dichtungssanierung im Haus: typischerweise 5–15 % der Heizkosten. Bei einer Heizrechnung von 2.000 €/Jahr sind das 100–300 € Ersparnis – Investition amortisiert sich oft in 2–3 Heizperioden.",
                    },
                    {
                      q: "Welche Dichtungstypen sind die beste Wahl?",
                      a: "Wir verwenden EPDM- (UV-/ozonbeständig) und TPE-Dichtungen (langlebig, elastisch). Beide halten 10–15 Jahre. Bei Sonderfällen Silikon. Billige PVC-Dichtungen verbauen wir bewusst nicht – die halten meist nur 3–5 Jahre.",
                    },
                    {
                      q: "Kann ich die Dichtung selbst tauschen?",
                      a: "Theoretisch ja, praktisch riskant: Über 200 Profile am Markt, die falsche Dichtung verursacht mehr Probleme als sie löst. Ohne Beschlag-Justage stimmt der Anpressdruck oft nicht. Profi-Tausch ist eine günstige Investition.",
                    },
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
                    className="flex items-center gap-4 bg-cyan-50 border border-cyan-200 rounded-2xl p-5 hover:bg-cyan-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        +43 664 435 1622
                      </p>
                      <p className="text-sm text-slate-500">
                        Mo–Do 8–17 Uhr · Fr 8–12 Uhr
                      </p>
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
                      <p className="text-sm text-slate-500">
                        Antwort in der Regel innerhalb von 2 Stunden
                      </p>
                    </div>
                  </a>
                </div>
              </section>

              <div className="bg-gradient-to-br from-cyan-800 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Heizkosten senken, Komfort steigern
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Schnellster Effekt für kleines Geld. Wir kommen vor Ort.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
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

              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <span>© 2026 Fenster Service Rowo</span>
                <nav className="flex gap-6">
                  <Link href="/" className="hover:text-cyan-600 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-cyan-600 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-cyan-600 transition-colors">
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
