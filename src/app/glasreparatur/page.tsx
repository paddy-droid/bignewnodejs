import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Glasreparatur & Glasaustausch Wien & NÖ | Notverglasung | ROWO",
  description:
    "Sprünge, Risse, Glasbruch? Schneller Glasaustausch in Wien, Tulln, St. Pölten & ganz NÖ: Isolierglas, Sicherheitsglas (VSG/ESG), Schallschutzglas. Notverglasung 24h, kostenloser KV.",
  keywords: [
    "Glasreparatur",
    "Glas tauschen",
    "Glasbruch",
    "Notverglasung",
    "Isolierglas",
    "Sicherheitsglas",
    "VSG",
    "ESG",
    "Schallschutzglas",
    "Wien",
    "Tulln",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/glasreparatur",
  },
  openGraph: {
    title: "Glasreparatur &amp; -austausch | ROWO Fensterservice",
    description:
      "Schneller Glasaustausch in Wien & NÖ – auch Notverglasung 24h.",
    url: "https://www.fensterservice-rowo.at/glasreparatur",
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
      name: "Was kostet ein Glasaustausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard-Isolierglas bis 1 m² liegt bei 180–280 €, größere Formate 280–450 €. Sicherheitsglas (VSG): 350–550 €. Schallschutzglas: 380–580 €. Notverglasung 24h: ab 250 €. Wir erstellen vor Arbeitsbeginn einen schriftlichen KV.",
      },
    },
    {
      "@type": "Question",
      name: "Bietet ihr Notverglasung an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Bei Glasbruch, Einbruchschäden oder Sturmschäden kommen wir innerhalb von 60 Minuten in NÖ und Wien. Wir machen sofortige Notverglasung mit Sperrholz oder einer provisorischen Glasscheibe und tauschen anschließend gegen die finale Glaseinheit.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Glasarten könnt ihr austauschen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle gängigen Verglasungen: 2-fach und 3-fach Wärmeschutzglas, Verbundsicherheitsglas (VSG) gegen Einbruch und Splitterschutz, Einscheibensicherheitsglas (ESG) für Türen und Brüstungen, Schallschutzglas bis 50 dB, Sonnenschutzglas, Ornamentglas und Drahtglas.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert ein Glasaustausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der reine Tausch pro Fenster dauert 30–60 Minuten. Lieferzeit der maßgefertigten Glaseinheit: 5–10 Werktage Standard, bei Sonderglas (VSG, Schall) 10–15 Werktage. Bei Notfällen organisieren wir Express-Lieferungen.",
      },
    },
    {
      "@type": "Question",
      name: "Bezahlt die Versicherung den Glasaustausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Glasbruchversicherung (oft in Haushalts- oder Wohngebäudeversicherung enthalten) ja. Bei Einbruchsschäden gilt die Hausratversicherung. Wir stellen die Rechnung mit allen nötigen Belegen aus, damit Sie problemlos abrechnen können.",
      },
    },
  ],
};

const toc = [
  { id: "probleme", label: "Glasprobleme" },
  { id: "glasarten", label: "Glasarten" },
  { id: "leistungen", label: "Leistungen" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function GlasreparaturPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-sky-700 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["24h Notverglasung", "Maßanfertigung", "Versicherungs-Service"].map(
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
              Glasreparatur &amp; -austausch<br />
              <span className="text-sky-300">in Wien, Tulln &amp; ganz NÖ</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Glasbruch, Sprünge, Risse – wir tauschen Isolier-, Sicherheits-,
              Schall- und Sonnenschutzglas schnell und passgenau. Notverglasung
              innerhalb 60 Minuten in NÖ und Wien.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Glas-Tausch anfragen →
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

        <div className="bg-sky-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🚨 Notverglasung 24h",
              "📐 Maßanfertigung",
              "🛡️ Sicherheitsglas (VSG/ESG)",
              "🔇 Schallschutz bis 50 dB",
              "📋 Versicherungsabrechnung",
            ].map((item) => (
              <span key={item} className="text-sky-100">
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Glas tauschen
                    </Link>
                    <Link
                      href="/notdienst"
                      className="block w-full text-center mt-2 border border-red-300 text-red-700 hover:bg-red-50 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      🚨 Notdienst
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            <article className="flex-1 min-w-0">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl overflow-hidden shadow-md col-span-2 sm:col-span-1">
                  <Image
                    src="/Images/Fenster Reparatur.png"
                    alt="Glasreparatur Wien"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/dichtungstausch-fenster.webp"
                    alt="Glasaustausch professionell"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Eine gesprungene Glasscheibe ist nicht nur ein optisches
                Problem – sie ist ein <strong>Sicherheits- und Energieproblem</strong>: Das Fenster
                verliert Dämmwirkung, Splittergefahr besteht und Einbrecher
                haben leichtes Spiel. Wir tauschen Glasscheiben aller Art
                schnell, sauber und passgenau.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Vom einfachen Isolierglas bis zur Sicherheits- oder
                Schallschutzeinheit – wir bieten alle Glasarten als
                Maßanfertigung. Bei akutem Glasbruch sichern wir innerhalb von
                60 Minuten in ganz NÖ und Wien.
              </p>

              <section id="probleme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Wann muss Glas getauscht werden?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Diese Defekte sind nicht reparierbar – nur Tausch hilft
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "💥",
                      title: "Glasbruch / Glassprung",
                      desc: "Einbruchsversuch, Sturm, Stein – sobald die Scheibe gerissen ist, hilft nur Tausch.",
                    },
                    {
                      icon: "🌫️",
                      title: "Beschlagen zwischen Scheiben",
                      desc: "Defekter Isolierglasverbund, Gas entwichen – nicht reparierbar, nur Tausch.",
                    },
                    {
                      icon: "🔇",
                      title: "Lärmprobleme",
                      desc: "Wenn Standardglas nicht ausreicht: Tausch gegen Schallschutzglas verbessert deutlich.",
                    },
                    {
                      icon: "🌡️",
                      title: "Hohe Heizkosten",
                      desc: "Altes 2-fach Glas: Upgrade auf modernes 3-fach senkt Wärmeverlust um bis zu 80 %.",
                    },
                    {
                      icon: "🛡️",
                      title: "Sicherheits-Upgrade",
                      desc: "Tausch gegen VSG verhindert Splitter und Durchgriff – Einbruchsschutz nachrüstbar.",
                    },
                    {
                      icon: "☀️",
                      title: "Sommer-Hitzeschutz",
                      desc: "Sonnenschutzglas reflektiert Wärme – kein Aufheizen mehr im Sommer.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-sky-50 border border-sky-100 rounded-2xl p-5"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="glasarten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Welche Glasarten wir verbauen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom Standard-Wärmeschutz bis zum Hochsicherheitsglas
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "2-fach Wärmeschutzglas",
                      spec: "Ug 1,0–1,1 W/m²K",
                      desc: "Standardlösung mit gutem Preis-Leistungs-Verhältnis.",
                    },
                    {
                      title: "3-fach Wärmeschutzglas",
                      spec: "Ug 0,5–0,7 W/m²K",
                      desc: "Top-Dämmung, langfristig wirtschaftlich, förderfähig.",
                    },
                    {
                      title: "Schallschutzglas",
                      spec: "bis 50 dB",
                      desc: "Spürbar weniger Lärm – ideal an Hauptstraßen oder Bahnstrecken.",
                    },
                    {
                      title: "VSG Sicherheitsglas",
                      spec: "Verbundsicherheitsglas",
                      desc: "Glas zerbricht zwar, hält aber zusammen – Einbruch- und Splitterschutz.",
                    },
                    {
                      title: "ESG Sicherheitsglas",
                      spec: "Einscheibensicherheit",
                      desc: "Bricht in stumpfe Krümel statt scharfer Scherben – ideal für Türen.",
                    },
                    {
                      title: "Sonnenschutzglas",
                      spec: "g-Wert ab 0,30",
                      desc: "Reflektiert sommerliche Hitzeeinstrahlung um 50–70 %.",
                    },
                    {
                      title: "Ornamentglas",
                      spec: "Sichtschutz",
                      desc: "Verschiedene Strukturen für Bad, WC oder Treppenhaus.",
                    },
                    {
                      title: "Drahtglas",
                      spec: "F30 Brandschutz",
                      desc: "Brandschutz und Splitterschutz – häufig in Treppenhäusern.",
                    },
                    {
                      title: "Kombi-Glas",
                      spec: "Schall + Wärme + VSG",
                      desc: "Mehrere Eigenschaften in einer Glaseinheit kombiniert.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-blue-50 border border-blue-100 rounded-2xl p-5"
                    >
                      <p className="font-bold text-blue-800 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs font-semibold text-blue-700 mb-2">
                        {item.spec}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Glas-Leistungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom Notdienst bis zum Premium-Tausch
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
                        ["Aufmaß &amp; Beratung", "Vor-Ort-Termin, Vermessung, Beratung Glasart", "Genau das Glas, das Sie brauchen", "bg-white"],
                        ["Notverglasung 24h", "Sicherung mit Sperrholz oder Provisorium", "Sofortiger Schutz gegen Wettereinflüsse", "bg-slate-50"],
                        ["Standard-Glastausch", "Maßgefertigte Glaseinheit, RAL-konform montiert", "Saubere Arbeit, lange Lebensdauer", "bg-white"],
                        ["Sicherheits-Upgrade", "Tausch auf VSG/ESG für Einbruch- und Splitterschutz", "Mehr Sicherheit ohne neuen Rahmen", "bg-slate-50"],
                        ["Schallschutz-Tausch", "Tausch auf Schallschutzglas bis 50 dB", "Spürbar weniger Lärm", "bg-white"],
                        ["Versicherungsabrechnung", "Wir stellen alle nötigen Belege für Ihre Versicherung aus", "Problemlose Erstattung", "bg-slate-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            <span dangerouslySetInnerHTML={{ __html: row[0] }} />
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

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten Glasaustausch
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise (2026) – inkl. Material und Montage
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Glasart
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Format
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Kosten ca.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Notverglasung (Sperrholz)", "Standard", "ab 250 €", "bg-red-50"],
                        ["2-fach Wärmeschutz", "bis 1 m²", "180–280 €", "bg-white"],
                        ["2-fach Wärmeschutz", "1–2 m²", "260–400 €", "bg-slate-50"],
                        ["3-fach Wärmeschutz", "bis 1 m²", "240–360 €", "bg-white"],
                        ["3-fach Wärmeschutz", "1–2 m²", "330–520 €", "bg-slate-50"],
                        ["VSG Sicherheitsglas", "1–2 m²", "350–550 €", "bg-white"],
                        ["ESG Sicherheitsglas", "1–2 m²", "320–500 €", "bg-slate-50"],
                        ["Schallschutzglas", "1–2 m², 45 dB", "380–580 €", "bg-white"],
                        ["Sonnenschutzglas", "1–2 m²", "360–540 €", "bg-slate-50"],
                        ["Großformat / Sonderglas", "ab 2 m²", "auf Anfrage", "bg-white"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-sky-700">
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
                  So läuft der Glasaustausch ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    { step: "1", title: "Anfrage &amp; Aufmaß", text: "Vor-Ort-Termin oder Foto/Video-Vorab-Diagnose – Vermessung exakt." },
                    { step: "2", title: "Glas-Anfertigung", text: "Maßgefertigte Glaseinheit, Lieferzeit 5–10 Werktage Standard. Notverglasung sofort." },
                    { step: "3", title: "Demontage altes Glas", text: "Sauberes Entfernen ohne Rahmen-Beschädigung." },
                    { step: "4", title: "Montage neues Glas", text: "Verklotzen, einsetzen, versiegeln nach ÖNORM." },
                    { step: "5", title: "Funktionscheck", text: "Beschlag-Justage, Dichtungs-Check, Übergabe mit Gewährleistung." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-sky-700 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
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

              <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Glasbruch oder Sprung?</p>
                  <p className="text-sky-200 text-sm mt-1">
                    Notverglasung 24h – wir sichern und tauschen.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-sky-700 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors text-sm"
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
                      className="bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zur Glasreparatur
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    { q: "Was kostet ein Glasaustausch?", a: "Standard-Isolierglas bis 1 m²: 180–280 €. 3-fach: 240–360 €. VSG: 350–550 €. Schallschutz: 380–580 €. Notverglasung 24h ab 250 €." },
                    { q: "Bietet ihr Notverglasung an?", a: "Ja, 24h-Notdienst in NÖ und Wien innerhalb 60 Minuten. Sofortige Sicherung mit Sperrholz, anschließender Tausch gegen finale Glaseinheit." },
                    { q: "Welche Glasarten könnt ihr austauschen?", a: "Alle: 2-fach und 3-fach Wärmeschutz, VSG/ESG, Schallschutz bis 50 dB, Sonnenschutz, Ornamentglas, Drahtglas, Kombi-Gläser." },
                    { q: "Wie lange dauert der Austausch?", a: "Pro Fenster 30–60 Minuten. Lieferzeit Glaseinheit: Standard 5–10 Werktage, Sonderglas 10–15 Werktage. Express möglich." },
                    { q: "Bezahlt die Versicherung?", a: "Bei Glasbruchversicherung ja. Bei Einbruch greift die Hausratversicherung. Wir liefern alle nötigen Belege für problemlose Abrechnung." },
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
                    className="flex items-center gap-4 bg-sky-50 border border-sky-200 rounded-2xl p-5 hover:bg-sky-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-sky-700 rounded-full flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-sky-700 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Klare Sicht und volle Sicherheit – schnell
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Notverglasung 24h, Maßanfertigung, Versicherungsabwicklung.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
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
                  <Link href="/" className="hover:text-sky-600 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-sky-600 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-sky-600 transition-colors">
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
