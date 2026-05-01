import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Rollladen- & Jalousien-Reparatur Wien & NÖ | ROWO Fensterservice",
  description:
    "Rollladen klemmt, Gurt gerissen oder Motor defekt? Professionelle Reparatur von Rollläden, Jalousien und Außenraffstores in Wien, Tulln, St. Pölten & ganz Niederösterreich. Alle Marken, schnelle Termine, faire Preise.",
  keywords: [
    "Rollladen Reparatur",
    "Rollladen klemmt",
    "Rollladen Motor defekt",
    "Gurt gerissen",
    "Jalousie Reparatur",
    "Außenraffstore",
    "Somfy Reparatur",
    "Rollladen Wien",
    "Tulln",
    "St. Pölten",
    "Niederösterreich",
  ],
  alternates: {
    canonical:
      "https://www.fensterservice-rowo.at/rollladen-jalousien-reparatur",
  },
  openGraph: {
    title: "Rollladen- &amp; Jalousien-Reparatur | ROWO",
    description:
      "Klemmt, Gurt gerissen, Motor defekt? Wir reparieren alle Marken in Wien & NÖ.",
    url: "https://www.fensterservice-rowo.at/rollladen-jalousien-reparatur",
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
      name: "Was kostet eine Rollladen-Reparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gurttausch beginnt ab 65 €, Gurtwicklertausch 90–160 €, Motor-Tausch 250–450 €, Lamellen-Reparatur 80–250 €. Bei kompletten Reparaturen mit mehreren Defekten erstellen wir vorab einen schriftlichen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Mein Rollladen klemmt – was kann ich tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Häufigste Ursachen: verbogene Lamellen, blockierte Lager, defekter Gurt oder Motorproblem. Versuchen Sie nicht, mit Gewalt zu öffnen – das verbiegt mehr Lamellen. Wir kommen schnell vor Ort und beheben das Problem in der Regel im ersten Termin.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Rollladen-Marken könnt ihr reparieren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle gängigen Hersteller: Somfy, Becker, Geiger, Heroal, Schenker, Internorm, Velux. Auch ältere Modelle oder Sonderkonstruktionen. Bei Motor-Tausch verwenden wir Originalmotoren mit Funkfähigkeit (auf Wunsch).",
      },
    },
    {
      "@type": "Question",
      name: "Lohnt sich Reparatur oder neuer Rollladen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einzelnen Defekten (Gurt, Motor, einzelne Lamellen) lohnt sich Reparatur fast immer. Bei stark verbogenen Lamellen, alten Aluminium-Modellen oder durchgerosteten Kästen ist ein Tausch wirtschaftlicher. Wir empfehlen ehrlich, was für Sie sinnvoll ist.",
      },
    },
    {
      "@type": "Question",
      name: "Repariert ihr auch Jalousien und Außenraffstores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, neben klassischen Rollläden reparieren wir auch innenliegende Jalousien, Plissees, Außenraffstores (Lamellen-Sonnenschutz) und elektrische Markisen. Speziell bei Außenraffstores tauschen wir auch Textbänder und Antriebe.",
      },
    },
  ],
};

const toc = [
  { id: "probleme", label: "Häufige Probleme" },
  { id: "leistungen", label: "Reparatur-Leistungen" },
  { id: "marken", label: "Marken" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function RollladenReparaturPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Alle Marken", "Schnelle Termine", "Motor-Tausch"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Rollladen- &amp; Jalousien-Reparatur<br />
              <span className="text-slate-300">in Wien, Tulln &amp; NÖ</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Gurt gerissen, Motor defekt, Lamellen verbogen oder klemmt der
              Rollladen? Wir reparieren alle Marken – mechanisch und elektrisch,
              meist in einem Termin.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-slate-200 hover:bg-white text-slate-900 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Reparatur anfragen →
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

        <div className="bg-slate-800 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🔧 Somfy / Becker / Geiger",
              "⚡ Motor-Tausch mit Funk",
              "📋 Kostenloser KV",
              "🛡️ Gewährleistung",
              "✅ Geprüfter Fachbetrieb",
            ].map((item) => (
              <span key={item} className="text-slate-200">
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Reparatur anfragen
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/rolladen reparatur niederösterreich.webp"
                    alt="Rollladen-Reparatur Niederösterreich"
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
                    src="/Images/rolladen reparatur niederösterreich.webp"
                    alt="Rollladen-Reparatur"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/Fensterservice_Fensterreparatur_Tulln_Wien.png"
                    alt="Jalousien-Reparatur"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Ein defekter Rollladen ist mehr als nur ein Komfort-Problem –
                wer ihn nicht hochfahren kann, hat keinen Sonnenschutz, keine
                Verdunkelung und im Sommer eine überhitzte Wohnung. Wir
                reparieren alle Arten von Rollläden, Jalousien und
                Außenraffstores in Wien, Tulln, St. Pölten und ganz NÖ.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Egal ob mechanischer Gurtwickler, elektrischer Antrieb oder
                Funk-gesteuerte Smart-Home-Lösung: Wir kennen alle Marken,
                haben die häufigsten Ersatzteile am Lager und reparieren in
                der Regel in einem einzigen Termin.
              </p>

              <section id="probleme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Probleme &amp; Ursachen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Diese Defekte sehen wir am häufigsten
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "📉",
                      title: "Gurt gerissen",
                      problem:
                        "Rollladen lässt sich nicht mehr hochziehen – Gurt im Wickler abgerissen.",
                      cause:
                        "Material- und Altersverschleiß, UV-Licht macht Gurte mit der Zeit spröde.",
                      solution:
                        "Gurttausch inkl. neuer Wicklerfeder – meist 30–45 Min.",
                    },
                    {
                      icon: "⚙️",
                      title: "Gurtwickler defekt",
                      problem:
                        "Gurt rollt sich nicht mehr von selbst auf, Feder gebrochen.",
                      cause:
                        "Verschlissene Feder oder defekte Aufrollmechanik.",
                      solution:
                        "Kompletter Gurtwicklertausch – schnell und günstig.",
                    },
                    {
                      icon: "⚡",
                      title: "Motor läuft nicht",
                      problem:
                        "Elektrischer Rollladen reagiert nicht oder dreht in eine Richtung nur.",
                      cause:
                        "Motor defekt, Stromversorgung, Endschalter verstellt oder Kondensator hin.",
                      solution:
                        "Erst Diagnose, dann Reparatur oder Motor-Tausch (oft mit Funkmodul-Upgrade).",
                    },
                    {
                      icon: "🔄",
                      title: "Rollladen klemmt",
                      problem:
                        "Lässt sich nicht mehr hoch- oder runterfahren, hängt schief.",
                      cause:
                        "Verbogene Lamellen, Lager defekt oder Wicklerwelle verkantet.",
                      solution:
                        "Lamellen richten oder einzeln tauschen, Lager erneuern.",
                    },
                    {
                      icon: "🪟",
                      title: "Lamellen beschädigt",
                      problem:
                        "Einzelne Lamellen verbogen, gebrochen oder fehlen.",
                      cause:
                        "Sturm, falsche Bedienung oder Verschleiß.",
                      solution:
                        "Einzeltausch betroffener Lamellen ohne Komplett-Demontage.",
                    },
                    {
                      icon: "📡",
                      title: "Funk reagiert nicht",
                      problem:
                        "Smart-Home oder Funk-Sender funktioniert nicht mehr.",
                      cause:
                        "Sender-Empfänger-Verbindung verloren, Batterie leer oder Modul defekt.",
                      solution:
                        "Neusynchronisierung, Batterietausch oder Funk-Modul ersetzen.",
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

              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Reparatur-Leistungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom kleinsten Defekt bis zum kompletten Antriebs-Upgrade
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
                        ["Gurttausch", "Neuer Aufzugsgurt inkl. Wicklerfeder", "Schnell, günstig, sofort wieder funktionsfähig", "bg-white"],
                        ["Gurtwicklertausch", "Komplette neue Aufrollmechanik", "Lange Lebensdauer, leichtgängig", "bg-slate-50"],
                        ["Motor-Reparatur", "Diagnose, Endschalter, Kondensator, Motorlager", "Oft günstiger als Komplett-Tausch", "bg-white"],
                        ["Motor-Tausch", "Original Somfy/Becker/Geiger – auch mit Funk-Upgrade", "Smart-Home-Anschluss möglich", "bg-slate-50"],
                        ["Lamellen-Tausch", "Einzelne oder mehrere Lamellen ersetzen", "Kein kompletter neuer Rollladen nötig", "bg-white"],
                        ["Mechanik-Service", "Lager schmieren, Welle justieren", "Verhindert Folgeschäden", "bg-slate-50"],
                        ["Funk &amp; Smart Home", "Neusynchronisierung, Funk-Module, App-Steuerung", "Modernisierung ohne neuen Rollladen", "bg-white"],
                        ["Jalousien &amp; Markisen", "Reparatur und Service auch innen + außen", "Komplettservice aus einer Hand", "bg-slate-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            <span dangerouslySetInnerHTML={{ __html: row[0] }} />
                          </td>
                          <td className="px-5 py-3 text-slate-600">
                            <span dangerouslySetInnerHTML={{ __html: row[1] }} />
                          </td>
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
                <p className="text-slate-500 text-sm mb-6">
                  Wir kennen alle gängigen Hersteller
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Somfy", "Becker", "Geiger", "Heroal", "Schenker", "Internorm", "Velux", "Schellenberg", "elero"].map(
                    (brand) => (
                      <div
                        key={brand}
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center font-bold text-slate-700"
                      >
                        {brand}
                      </div>
                    ),
                  )}
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten Rollladen-Reparatur
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise für Österreich (2026)
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
                        ["Gurttausch", "30–45 Min.", "65–120 €", "bg-white"],
                        ["Gurtwicklertausch", "45–60 Min.", "90–160 €", "bg-slate-50"],
                        ["Motor-Diagnose &amp; Reparatur", "1–2 Std.", "120–280 €", "bg-white"],
                        ["Motor-Tausch (Standard)", "1,5–2,5 Std.", "250–450 €", "bg-slate-50"],
                        ["Motor-Tausch mit Funk-Upgrade", "2–3 Std.", "350–650 €", "bg-white"],
                        ["Lamellen-Tausch (1–3 Stk.)", "30–60 Min.", "80–250 €", "bg-slate-50"],
                        ["Komplette Mechanik-Reparatur", "2–4 Std.", "320–650 €", "bg-white"],
                        ["Jalousie / Plissee Reparatur", "30–90 Min.", "70–220 €", "bg-slate-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            <span dangerouslySetInnerHTML={{ __html: row[0] }} />
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-slate-700">
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
                  So läuft die Reparatur ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    { step: "1", title: "Anfrage mit Foto", text: "Per WhatsApp, Mail oder Telefon. Foto/Video hilft uns, vorab das richtige Material mitzubringen." },
                    { step: "2", title: "Diagnose vor Ort", text: "Wir lokalisieren das Problem genau – elektrisch oder mechanisch." },
                    { step: "3", title: "Reparatur in einem Termin", text: "Mit den gängigen Ersatzteilen am Wagen – meist sofort lösbar." },
                    { step: "4", title: "Funktionstest &amp; Übergabe", text: "Wir testen mehrfach, geben Bedienungstipps und schriftliche Gewährleistung." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
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

              <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">
                    Rollladen oder Jalousie defekt?
                  </p>
                  <p className="text-slate-300 text-sm mt-1">
                    Schnell behoben – meist in einem Termin.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm"
                >
                  Reparatur anfragen →
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
                      className="bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 rounded-2xl p-4 text-sm font-semibold text-slate-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zur Rollladen-Reparatur
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    { q: "Was kostet eine Rollladen-Reparatur?", a: "Gurttausch ab 65 €, Gurtwicklertausch 90–160 €, Motor-Tausch 250–450 €, Lamellen-Reparatur 80–250 €. Bei kompletten Reparaturen erstellen wir vorab einen schriftlichen Kostenvoranschlag." },
                    { q: "Mein Rollladen klemmt – was kann ich tun?", a: "Häufigste Ursachen: verbogene Lamellen, blockierte Lager, defekter Gurt oder Motor. Versuchen Sie nicht, mit Gewalt zu öffnen – das verbiegt mehr Lamellen. Wir kommen schnell vor Ort." },
                    { q: "Welche Marken könnt ihr reparieren?", a: "Alle gängigen Hersteller: Somfy, Becker, Geiger, Heroal, Schenker, Internorm, Velux. Auch ältere Modelle oder Sonderkonstruktionen." },
                    { q: "Lohnt sich Reparatur oder neuer Rollladen?", a: "Bei einzelnen Defekten lohnt sich Reparatur fast immer. Bei stark verbogenen Lamellen oder durchgerosteten Kästen ist Tausch wirtschaftlicher. Wir empfehlen ehrlich." },
                    { q: "Repariert ihr auch Jalousien und Außenraffstores?", a: "Ja, neben klassischen Rollläden auch innenliegende Jalousien, Plissees, Außenraffstores und elektrische Markisen. Bei Außenraffstores tauschen wir auch Textbänder." },
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
                    className="flex items-center gap-4 bg-slate-100 border border-slate-200 rounded-2xl p-5 hover:bg-slate-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-slate-800 to-slate-950 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Wieder funktionierende Rollläden – meist in einem Termin
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Schnelle Hilfe von Profis. Mit Original-Ersatzteilen.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-slate-200 hover:bg-white text-slate-900 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    Reparatur anfragen
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
                  <Link href="/" className="hover:text-slate-900 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-slate-900 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-slate-900 transition-colors">
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
