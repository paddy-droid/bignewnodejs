import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fensterreparatur Wien & NÖ | Holz, Kunststoff, Alu | ROWO Fensterservice",
  description:
    "Professionelle Fensterreparatur in Wien, Tulln, St. Pölten & ganz Niederösterreich: Beschläge, Rahmen, Mechanik, Schließprobleme, Klemmen, Undichtigkeiten. Geprüfter Fachbetrieb mit 24h Notdienst, kostenloser Kostenvoranschlag.",
  keywords: [
    "Fensterreparatur",
    "Fenster klemmt",
    "Fenster schließt nicht",
    "Beschlag reparieren",
    "Fenstergriff defekt",
    "Holzfenster Reparatur",
    "Kunststofffenster Reparatur",
    "Aluminiumfenster Reparatur",
    "Fenster justieren",
    "Wien",
    "Tulln",
    "St. Pölten",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/fensterreparatur",
  },
  openGraph: {
    title: "Fensterreparatur Wien & NÖ | ROWO Fensterservice",
    description:
      "Holz-, Kunststoff- und Aluminiumfenster reparieren – schnell, sauber, mit Gewährleistung.",
    url: "https://www.fensterservice-rowo.at/fensterreparatur",
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
      name: "Was kostet eine Fensterreparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einfache Reparaturen wie Griffwechsel, Justierung oder kleine Beschlagteile beginnen bei 60–120 €. Größere Reparaturen wie Beschlagtausch, Schließmechanik oder Mehrfach-Justage liegen bei 150–350 €. Komplette Beschlag-Sanierungen 350–700 €. Wir erstellen vor Arbeitsbeginn immer einen kostenlosen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Mein Fenster klemmt – woran kann das liegen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Häufige Ursachen: Rahmen hat sich gesetzt (Setzungen im Mauerwerk), Beschlag ist verstellt, Scharniere abgenutzt oder Dichtung verklebt. In den meisten Fällen reicht eine Justage von 15–30 Minuten – manchmal müssen einzelne Beschlagteile getauscht werden.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Marken könnt ihr reparieren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir reparieren alle gängigen Beschlagsysteme: Roto, Maco, Siegenia, GU, Winkhaus, AGB. Bei Sonderbeschlägen oder sehr alten Fenstern besorgen wir die passenden Original- oder freigegebene Ersatzteile.",
      },
    },
    {
      "@type": "Question",
      name: "Lohnt sich eine Reparatur oder soll ich gleich ein neues Fenster kaufen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faustregel: Wenn die Reparaturkosten unter 30 % eines Neufensters liegen und Rahmen + Glas in Ordnung sind, lohnt sich die Reparatur fast immer. Wir sagen Ihnen ehrlich, wenn ein Austausch wirtschaftlich sinnvoller ist.",
      },
    },
    {
      "@type": "Question",
      name: "Bietet ihr Notdienst bei kaputten Fenstern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Bei Einbruchsschäden, defekten Schlössern oder Wassereintritt sind wir innerhalb von 60 Minuten in ganz NÖ und Wien einsatzbereit. Notverglasung und provisorische Sicherung gehören zum Repertoire.",
      },
    },
  ],
};

const toc = [
  { id: "probleme", label: "Häufige Probleme" },
  { id: "leistungen", label: "Reparatur-Leistungen" },
  { id: "marken", label: "Marken & Beschläge" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function FensterreparaturPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        {/* HERO */}
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Alle Hersteller", "24h Notdienst", "Original-Ersatzteile"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fensterreparatur<br />
              <span className="text-blue-300">Wien, Tulln, St. Pölten &amp; NÖ</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Klemmt, schließt nicht, ist undicht oder hängt schief? Wir
              reparieren Holz-, Kunststoff- und Aluminiumfenster aller Marken –
              meist in einem Termin, mit Gewährleistung und transparenten
              Preisen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
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

        {/* TRUST BAR */}
        <div className="bg-blue-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "✅ Geprüfter Fachbetrieb",
              "🔧 Roto / Maco / Siegenia / GU",
              "⚡ Notdienst innerhalb 60 Min.",
              "📋 Kostenloser Kostenvoranschlag",
              "🛡️ Schriftliche Gewährleistung",
            ].map((item) => (
              <span key={item} className="text-blue-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* SIDEBAR */}
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
                      🔧 Reparatur anfragen
                    </Link>
                    <a
                      href="tel:+436644351622"
                      className="block w-full text-center mt-2 border border-blue-200 text-blue-700 hover:bg-blue-50 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/Fenster Reparatur.png"
                    alt="Fensterreparatur Wien NÖ"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </aside>

            {/* MAIN */}
            <article className="flex-1 min-w-0">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl overflow-hidden shadow-md col-span-2 sm:col-span-1">
                  <Image
                    src="/Images/Fenster Reparatur.png"
                    alt="Fensterreparatur Beschläge tauschen"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/Fensterservice_Fensterreparatur_Tulln_Wien.png"
                    alt="Professionelle Fensterreparatur Tulln Wien"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Die meisten Probleme an Fenstern lassen sich <strong>reparieren statt tauschen</strong> –
                das spart bis zu 80 % der Kosten gegenüber einem Neufenster und
                ist meist in einem Termin erledigt. Als spezialisierter
                Fachbetrieb für Fensterreparatur in <strong>Wien, Tulln, St. Pölten und ganz
                Niederösterreich</strong> haben wir die Beschläge, Werkzeuge und das Know-how
                für nahezu jedes Problem dabei.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir reparieren Holz-, Kunststoff- und Aluminiumfenster aller
                gängigen Hersteller, mit Original-Ersatzteilen und
                schriftlicher Gewährleistung. Vom verstellten Beschlag über die
                ausgeschlagene Mechanik bis zum komplett blockierten Fenster –
                wir bringen Ihre Fenster wieder in Schwung.
              </p>

              {/* PROBLEME */}
              <section id="probleme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Probleme &amp; Ursachen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Diese Defekte sehen wir am häufigsten bei Reparaturterminen
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "⚙️",
                      title: "Fenster klemmt oder schließt nicht",
                      problem:
                        "Flügel schleift am Rahmen, lässt sich nicht mehr drücken oder kippen.",
                      cause:
                        "Beschlag verstellt, Rahmen gesetzt, Scharniere ausgeschlagen oder Pilzkopf falsch positioniert.",
                      solution:
                        "Justage in Höhe und Anpressdruck – meist 30–60 Minuten und das Fenster läuft wieder leichtgängig.",
                    },
                    {
                      icon: "🔓",
                      title: "Fenstergriff defekt oder dreht durch",
                      problem:
                        "Griff lässt sich nicht umlegen, dreht leer oder bricht ab.",
                      cause:
                        "Verschleiß im Getriebe, abgebrochene Innenmechanik oder gebrochener Griff.",
                      solution:
                        "Griff oder Getriebe-Einheit tauschen – schnelle, günstige Reparatur mit sofortiger Wirkung.",
                    },
                    {
                      icon: "🥶",
                      title: "Zugluft trotz geschlossenem Fenster",
                      problem:
                        "Kalte Luft an der Hand spürbar, Vorhang bewegt sich am Rahmen.",
                      cause:
                        "Dichtung verschlissen, Beschlag mit zu wenig Anpressdruck, Rahmen nicht plan.",
                      solution:
                        "Beschlag straffer einstellen, ggf. Dichtung tauschen oder Rahmen nachjustieren.",
                    },
                    {
                      icon: "🪟",
                      title: "Flügel hängt schief oder sackt durch",
                      problem:
                        "Eckstellung beim Schließen sichtbar, Spalt unten oder oben.",
                      cause:
                        "Scharniere abgenutzt, Tragbolzen verbogen, Glas im Flügel verrutscht.",
                      solution:
                        "Scharnier-Tausch, Verklotzung der Glasscheibe, Höhen- und Seitenjustage.",
                    },
                    {
                      icon: "🔒",
                      title: "Schloss klemmt oder Schließbleche verbogen",
                      problem:
                        "Fenster lässt sich nicht mehr abschließen oder Schließblech wackelt.",
                      cause:
                        "Mechanischer Verschleiß, fehlende Schmierung, lose Schrauben.",
                      solution:
                        "Mechanik reinigen, schmieren, Schließblech-Position korrigieren oder ersetzen.",
                    },
                    {
                      icon: "💥",
                      title: "Beschlag gebrochen oder ausgeschlagen",
                      problem:
                        "Hörbares Knirschen beim Bedienen oder sichtbare Materialermüdung am Beschlag.",
                      cause:
                        "Material- und Altersverschleiß, fehlende jährliche Wartung.",
                      solution:
                        "Defekte Komponenten ersetzen mit Original-Ersatzteilen – meist in einem Termin.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-base">
                        <span className="text-xl">{item.icon}</span>{" "}
                        {item.title}
                      </h3>
                      <div className="grid sm:grid-cols-3 gap-3 text-sm">
                        <div className="bg-red-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-red-600 mb-1">
                            Problem
                          </p>
                          <p className="text-slate-700">{item.problem}</p>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-orange-600 mb-1">
                            Ursache
                          </p>
                          <p className="text-slate-700">{item.cause}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-green-600 mb-1">
                            Lösung
                          </p>
                          <p className="text-slate-700">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* LEISTUNGEN */}
              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Reparatur-Leistungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom Einzelteil bis zur Komplettsanierung
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Leistung
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Was wir tun
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Ihr Vorteil
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          service: "Diagnose vor Ort",
                          desc: "Sorgfältige Prüfung von Beschlag, Glas, Dichtung & Rahmen",
                          benefit: "Transparenter KV vor Arbeitsbeginn",
                          bg: "bg-white",
                        },
                        {
                          service: "Beschlag-Justage",
                          desc: "Höhe, Seite und Anpressdruck einstellen",
                          benefit: "Leichtgängigkeit wieder hergestellt",
                          bg: "bg-slate-50",
                        },
                        {
                          service: "Beschlagteile ersetzen",
                          desc: "Defekte Komponenten mit Original-Ersatzteilen tauschen",
                          benefit: "Volle Funktionalität, lange Lebensdauer",
                          bg: "bg-white",
                        },
                        {
                          service: "Griff &amp; Schloss",
                          desc: "Tausch oder Reparatur defekter Griffgarnituren und Schlösser",
                          benefit: "Sicherheit &amp; Bedienkomfort wieder hergestellt",
                          bg: "bg-slate-50",
                        },
                        {
                          service: "Scharniere ersetzen",
                          desc: "Tragbänder oder ganze Scharniere bei Verschleiß tauschen",
                          benefit: "Flügel hängt wieder sauber, kein Durchhängen",
                          bg: "bg-white",
                        },
                        {
                          service: "Komplett-Sanierung",
                          desc: "Vollständiger Beschlag-Tausch, Dichtungen, Justage – ein Termin",
                          benefit: "Wie neu, ohne neues Fenster kaufen zu müssen",
                          bg: "bg-slate-50",
                        },
                      ].map((row) => (
                        <tr key={row.service} className={row.bg}>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            {row.service}
                          </td>
                          <td className="px-5 py-3 text-slate-600">
                            {row.desc}
                          </td>
                          <td className="px-5 py-3 text-green-700">
                            <span className="flex items-start gap-1">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              {row.benefit}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* MARKEN */}
              <section id="marken" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Marken &amp; Beschläge, die wir reparieren
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Kein System ist uns fremd – auch alte Beschläge sind oft noch
                  reparierbar
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      brand: "Roto",
                      desc: "Roto NT, NX, NX Designo, Patio – wir haben fast alle Komponenten am Lager.",
                    },
                    {
                      brand: "Maco",
                      desc: "Maco Multi-Matic und ältere Generationen – Justage und Teiletausch.",
                    },
                    {
                      brand: "Siegenia",
                      desc: "Siegenia Aubi und Titan – inklusive Sicherheits-Pilzköpfe.",
                    },
                    {
                      brand: "GU (Gretsch-Unitas)",
                      desc: "GU Secury und ältere Beschläge – auch bei langen Lieferzeiten.",
                    },
                    {
                      brand: "Winkhaus",
                      desc: "Winkhaus activPilot – Justage, Komplettsanierung und Sicherheits-Upgrades.",
                    },
                    {
                      brand: "AGB &amp; Sonderbeschläge",
                      desc: "AGB, Hautau und ältere Sonderbeschläge – Original- oder Alternativteile.",
                    },
                  ].map((item) => (
                    <div
                      key={item.brand}
                      className="bg-blue-50 border border-blue-100 rounded-2xl p-5"
                    >
                      <p className="font-bold text-blue-800 mb-1 flex items-center gap-2">
                        <Wrench className="w-4 h-4" /> {item.brand}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KOSTEN */}
              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was kostet eine Fensterreparatur?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise für Österreich (2026) inkl. Material &amp; Montage
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Reparatur
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Aufwand
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Kosten ca.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Diagnose vor Ort", "30 Min.", "kostenlos*", "bg-white"],
                        ["Beschlag-Justage", "30–60 Min.", "60–120 €", "bg-slate-50"],
                        ["Griffwechsel", "15 Min.", "45–95 €", "bg-white"],
                        ["Scharnier-Tausch", "1–2 Std.", "120–220 €", "bg-slate-50"],
                        ["Beschlagteile ersetzen", "1–2 Std.", "150–280 €", "bg-white"],
                        ["Schließmechanik tauschen", "1–2 Std.", "180–320 €", "bg-slate-50"],
                        ["Komplettsanierung Beschlag", "2–4 Std.", "350–700 €", "bg-white"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  * Diagnose ist kostenlos bei anschließender Beauftragung. Preise ohne Notdienst-Zuschlag.
                </p>
              </section>

              {/* ABLAUF */}
              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft eine Reparatur ab
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  In 4 Schritten zu Ihrem reparierten Fenster
                </p>

                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "Anfrage &amp; Foto",
                      text: "Sie schicken uns ein Foto Ihres Fensters per WhatsApp oder Mail – damit können wir oft schon vorab grob einschätzen, was zu tun ist.",
                    },
                    {
                      step: "2",
                      title: "Vor-Ort-Termin &amp; KV",
                      text: "Wir kommen zu Ihrer Wunschzeit, prüfen das Fenster und erstellen einen schriftlichen Kostenvoranschlag – kostenlos.",
                    },
                    {
                      step: "3",
                      title: "Reparatur",
                      text: "Bei einfachen Fällen reparieren wir oft direkt vor Ort. Bei nötigen Ersatzteilen kommen wir mit dem passenden Material zum vereinbarten Termin.",
                    },
                    {
                      step: "4",
                      title: "Abnahme &amp; Gewährleistung",
                      text: "Wir testen die Funktion gemeinsam, übergeben das Abnahmeprotokoll und geben Ihnen schriftlich Gewährleistung.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
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

              {/* CTA MID */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Fenster macht Probleme?</p>
                  <p className="text-blue-200 text-sm mt-1">
                    Kostenloser Kostenvoranschlag – wir bringen es wieder in
                    Schwung.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Reparatur anfragen →
                </Link>
              </div>

              {/* REGIONEN */}
              <section id="regionen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Servicegebiet
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Wir reparieren Fenster in ganz NÖ &amp; Wien
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                      className="bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zur Fensterreparatur
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    {
                      q: "Was kostet eine Fensterreparatur?",
                      a: "Einfache Reparaturen wie Griffwechsel oder Justage beginnen bei 60–120 €. Größere Reparaturen wie Beschlagtausch oder Mehrfach-Justage 150–350 €, Komplettsanierungen 350–700 €. Wir erstellen vorab immer einen schriftlichen Kostenvoranschlag.",
                    },
                    {
                      q: "Mein Fenster klemmt – woran kann das liegen?",
                      a: "Häufige Ursachen: Rahmen hat sich gesetzt, Beschlag verstellt, Scharniere abgenutzt oder Dichtung verklebt. In den meisten Fällen reicht eine Justage – manchmal müssen einzelne Beschlagteile getauscht werden.",
                    },
                    {
                      q: "Welche Marken könnt ihr reparieren?",
                      a: "Wir reparieren alle gängigen Beschlagsysteme: Roto, Maco, Siegenia, GU, Winkhaus, AGB. Bei Sonderbeschlägen oder sehr alten Fenstern besorgen wir die passenden Original- oder freigegebenen Ersatzteile.",
                    },
                    {
                      q: "Lohnt sich Reparatur oder ist neues Fenster sinnvoller?",
                      a: "Faustregel: Wenn Reparaturkosten unter 30 % eines Neufensters liegen und Rahmen + Glas in Ordnung sind, lohnt sich die Reparatur fast immer. Wir sagen Ihnen ehrlich, wenn ein Austausch wirtschaftlicher wäre.",
                    },
                    {
                      q: "Bietet ihr Notdienst bei kaputten Fenstern?",
                      a: "Ja. Bei Einbruchsschäden, defekten Schlössern oder Wassereintritt sind wir innerhalb von 60 Minuten in NÖ und Wien einsatzbereit. Notverglasung und Sicherung gehören zum Repertoire.",
                    },
                    {
                      q: "Wie lange dauert eine typische Reparatur?",
                      a: "Justagen: 30–60 Minuten. Beschlagteile-Tausch: 1–2 Stunden. Komplette Sanierungen: 2–4 Stunden. Die meisten Reparaturen sind in einem Termin abgeschlossen.",
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

              {/* KONTAKT */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Direkter Kontakt
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <a
                    href="tel:+436644351622"
                    className="flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-5 hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">+43 664 435 1622</p>
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
                        Antwort innerhalb von 2 Stunden
                      </p>
                    </div>
                  </a>
                </div>
              </section>

              {/* FINAL CTA */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Wieder leichtgängige Fenster – ohne Neukauf
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Kostenloser KV, Original-Ersatzteile, Gewährleistung.
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

              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <span>© 2026 Fenster Service Rowo</span>
                <nav className="flex gap-6">
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Startseite
                  </Link>
                  <Link
                    href="/leistungen"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Leistungen
                  </Link>
                  <Link
                    href="/kontakt"
                    className="hover:text-blue-600 transition-colors"
                  >
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
