import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fenstermontage & Fenstertausch Wien & NÖ | RAL-Montage | ROWO",
  description:
    "Professionelle Fenstermontage und Fenstertausch in Wien, Tulln, St. Pölten & ganz Niederösterreich nach ÖNORM B 5320 und RAL. Neubau und Sanierung, alle Marken, förderfähig. Kostenloses Aufmaß und Beratung.",
  keywords: [
    "Fenstermontage",
    "Fenstertausch",
    "Fenster austauschen",
    "RAL Montage",
    "ÖNORM B 5320",
    "neue Fenster",
    "Fenstermontage Wien",
    "Sanierung Fenster",
    "Tulln",
    "St. Pölten",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/fenstermontage",
  },
  openGraph: {
    title: "Fenstermontage & -tausch | ROWO Fensterservice",
    description:
      "RAL-zertifizierte Fenstermontage in Wien & NÖ – Neubau und Sanierung.",
    url: "https://www.fensterservice-rowo.at/fenstermontage",
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
      name: "Was kostet eine Fenstermontage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reine Montagekosten ohne Fenster liegen bei 180–350 € pro Fenster (Standardgröße, RAL-Montage). Kompletter Tausch mit neuem 2-fach Wärmeschutzfenster: 750–1.400 € pro Fenster. 3-fach Verglasung: 950–1.800 €. Wir erstellen vor Auftrag immer einen schriftlichen KV mit allen Optionen.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet RAL-Montage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAL-Montage ist die Premium-Norm für Fenstermontage in Österreich und Deutschland. Sie regelt die fachgerechte Anschlussabdichtung in drei Ebenen (innen, Mitte, außen) – damit kein Wasser, keine Luft und kein Schall durch die Anschlussfuge dringt. Wir arbeiten ausschließlich nach RAL und ÖNORM B 5320.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert ein Fenstertausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro Fenster ca. 2–4 Stunden bei sauberem Tausch (Demontage altes Fenster, neue RAL-Anschlussabdichtung, Montage neues Fenster, Innen- und Außenleibung herstellen). Ein durchschnittliches Haus mit 10 Fenstern wird in 3–5 Tagen komplett saniert.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Förderungen gibt es?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sanierungsbonus (Bund), Landesförderungen NÖ und Wien für thermische Sanierung. Bei Tausch alter Fenster auf 3-fach Wärmeschutzglas oft 25–50 % Förderung möglich. Wir prüfen vor Auftrag alle möglichen Programme und liefern alle Unterlagen für Ihren Antrag.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Hersteller bietet ihr an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir arbeiten mit Internorm, Josko, Schüco, Drutex und ausgesuchten österreichischen Herstellern. Bei Bestandsfenstern können wir oft auch original passende Modelle besorgen, um den Stilbruch zu vermeiden.",
      },
    },
  ],
};

const toc = [
  { id: "warum", label: "Wann tauschen?" },
  { id: "leistungen", label: "Unsere Leistungen" },
  { id: "ral", label: "RAL-Montage" },
  { id: "kosten", label: "Kosten" },
  { id: "foerderung", label: "Förderung" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function FenstermontagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-indigo-800 to-purple-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["RAL-zertifiziert", "ÖNORM B 5320", "Förderfähig"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fenstermontage &amp; -tausch<br />
              <span className="text-indigo-300">in Wien, NÖ und Tulln</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Neubau oder Sanierung? Wir montieren neue Fenster nach RAL und
              ÖNORM B 5320 – mit lückenloser Anschlussabdichtung, sauberer
              Demontage und vollständiger Förderdokumentation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Kostenloses Aufmaß →
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

        <div className="bg-indigo-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🏗️ Neubau &amp; Sanierung",
              "✅ RAL &amp; ÖNORM B 5320",
              "💰 Förderungen bis 50 %",
              "🪟 Internorm, Josko, Schüco u.a.",
              "🛡️ 5 Jahre Gewährleistung",
            ].map((item) => (
              <span
                key={item}
                className="text-indigo-100"
                dangerouslySetInnerHTML={{ __html: item }}
              />
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Kostenloses Aufmaß
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/fenstermontage_noe_1_1777634275948.png"
                    alt="Montageteam bei der fachgerechten Installation eines neuen Energiesparfensters"
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
                    src="/Images/fenstermontage_noe_2_1777634290743.png"
                    alt="Exaktes Ausrichten des neuen Fensterrahmens mit Wasserwaage beim Fenstertausch"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/fenstermontage_noe_1_1777634275948.png"
                    alt="Montageteam bei der fachgerechten Installation eines neuen Energiesparfensters"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Ob Neubau, Sanierung oder einzelner Fenstertausch – die <strong>fachgerechte Montage
                ist entscheidender als das Fenster selbst</strong>. Ein hochwertiges 3-fach-Fenster
                mit schlechter Anschlussabdichtung dämmt schlechter als ein einfaches
                Fenster mit perfekter RAL-Montage.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir montieren nach RAL-Norm und ÖNORM B 5320 – das ist die
                höchste Qualitätsstufe für Fenstermontage in Österreich. Wir
                arbeiten mit allen großen Herstellern (Internorm, Josko, Schüco,
                Drutex) und liefern die komplette Förderdokumentation für Ihren
                Antrag.
              </p>

              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Wann lohnt sich ein Fenstertausch?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fünf Anzeichen, dass ein Tausch wirtschaftlicher ist als
                  Reparatur
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "📅",
                      title: "Älter als 25 Jahre",
                      desc: "Alte Isoliergläser haben Ug-Werte um 2,8–3,0 W/m²K – modernes Glas 0,5–0,7. Heizkosten-Ersparnis ist enorm.",
                    },
                    {
                      icon: "🔥",
                      title: "Hohe Heizkosten",
                      desc: "Wenn Heizen 30 % über vergleichbaren Häusern liegt, sind oft Fenster die Hauptursache.",
                    },
                    {
                      icon: "🛠️",
                      title: "Mehrere Defekte",
                      desc: "Wenn an einem Fenster mehrere Beschläge, Dichtungen und Glas defekt sind, ist Tausch wirtschaftlicher.",
                    },
                    {
                      icon: "🏠",
                      title: "Sanierung ohnehin",
                      desc: "Bei Fassadensanierung, Wärmedämmung oder Innenarbeiten lohnt sich der parallele Fenstertausch.",
                    },
                    {
                      icon: "🛡️",
                      title: "Sicherheits-Update",
                      desc: "Neue Fenster sind ab Werk RC2-tauglich – kein Nachrüsten nötig.",
                    },
                    {
                      icon: "💰",
                      title: "Förderung möglich",
                      desc: "Sanierungsbonus + Landesförderung können 25–50 % der Kosten decken.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5"
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

              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Leistungen rund um die Fenstermontage
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Komplettpaket aus einer Hand
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
                        ["Aufmaß &amp; Beratung", "Vor-Ort-Termin, Vermessung, Beratung Glasart und Hersteller", "Genau das Fenster, das passt", "bg-white"],
                        ["Förderprüfung", "Wir prüfen alle Förderprogramme und kalkulieren Netto-Investition", "Sie sehen den echten Endpreis", "bg-slate-50"],
                        ["Demontage altes Fenster", "Saubere Entfernung, Schutz von Tapeten und Möbeln", "Keine Bauschäden in der Wohnung", "bg-white"],
                        ["RAL-Anschlussabdichtung", "3-Ebenen-Abdichtung innen/mitte/außen nach Norm", "Lückenloser Schutz vor Wasser, Luft und Schall", "bg-slate-50"],
                        ["Montage neues Fenster", "Statisch korrekte Befestigung, Justage Beschlag und Dichtung", "Optimaler Anpressdruck, leichtgängige Bedienung", "bg-white"],
                        ["Innenleibung &amp; Verputz", "Fensterbank, Putz und Fugen herstellen", "Saubere Optik, kein Nacharbeiten nötig", "bg-slate-50"],
                        ["Entsorgung Altfenster", "Mitnahme und fachgerechte Entsorgung", "Sie haben am Ende kein Bauschutt", "bg-white"],
                        ["Förderdokumentation", "Alle Bestätigungen und technischen Daten", "Antrag wird problemlos akzeptiert", "bg-slate-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            {row[0]}
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

              <section id="ral" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was ist RAL-Montage?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Die höchste Qualitätsstufe für Fenstermontage – kurz erklärt
                </p>

                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-5">
                  <p className="text-slate-700 leading-relaxed">
                    RAL-Montage ist die <strong>Norm für fachgerechte Fenstermontage</strong>.
                    Sie regelt die Anschlussfuge zwischen Fenster und Mauerwerk
                    in <strong>drei Abdichtungsebenen</strong>:
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      side: "Innen",
                      title: "Luftdicht",
                      color: "bg-blue-100 text-blue-800 border-blue-200",
                      desc: "Innere Dichtungsebene gegen Raumluft – verhindert Tauwasserbildung in der Konstruktion.",
                    },
                    {
                      side: "Mitte",
                      title: "Wärme- &amp; Schallschutz",
                      color: "bg-purple-100 text-purple-800 border-purple-200",
                      desc: "PU-Schaum oder Mineralwolle – sorgt für Wärmedämmung und Schallschutz in der Fuge.",
                    },
                    {
                      side: "Außen",
                      title: "Schlagregendicht",
                      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
                      desc: "Äußere Dichtungsebene gegen Schlagregen – muss aber dampfdiffusionsoffen bleiben.",
                    },
                  ].map((item) => (
                    <div
                      key={item.side}
                      className={`border-2 rounded-2xl p-5 ${item.color}`}
                    >
                      <p className="text-xs font-bold uppercase mb-1">
                        {item.side}
                      </p>
                      <p className="font-bold text-lg mb-2">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700">
                  <strong>Faustregel:</strong> Innen dichter als außen – Feuchtigkeit
                  soll nach außen entweichen können. Eine umgekehrte Konstruktion
                  führt zu Schimmel und Bauschäden.
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten Fenstermontage &amp; -tausch
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise (2026) – Standardgröße ca. 1,2 × 1,4 m
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Variante
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Glasart
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Kosten ca. (pro Fenster)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Reine Montage (ohne Fenster)", "—", "180–350 €", "bg-white"],
                        ["Tausch mit 2-fach Wärmeschutz", "Ug 1,0", "750–1.400 €", "bg-slate-50"],
                        ["Tausch mit 3-fach Wärmeschutz", "Ug 0,5–0,7", "950–1.800 €", "bg-white"],
                        ["Tausch mit Schallschutzglas", "bis 45 dB", "1.100–2.000 €", "bg-slate-50"],
                        ["Tausch mit RC2-Sicherheit", "RC2 + 3-fach", "1.250–2.300 €", "bg-white"],
                        ["Sonderformate / Großformate", "auf Anfrage", "ab 1.800 €", "bg-slate-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-indigo-700">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Preise inkl. Demontage, RAL-Montage, Entsorgung, Innenleibung
                  und MwSt. – ohne Förderabzug. Förderungen können 25–50 % davon
                  decken.
                </p>
              </section>

              <section id="foerderung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Förderungen für neue Fenster (2026)
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Welche Programme aktuell für Sie infrage kommen
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Sanierungsbonus (Bund)",
                      pct: "bis 30 %",
                      desc: "Beim Tausch alter Fenster auf hochdämmende 3-fach-Verglasung – bei umfassender Sanierung höhere Beträge möglich.",
                    },
                    {
                      title: "Landesförderung NÖ",
                      pct: "10–15 %",
                      desc: "Wohnbauförderung NÖ und Sanierungsförderung – kombinierbar mit Bund.",
                    },
                    {
                      title: "Stadt Wien",
                      pct: "Programme",
                      desc: "Thewosan, Hauskunft und Sanierungsbonus Wien – unterschiedliche Förderhöhen.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-amber-50 border border-amber-200 rounded-2xl p-5"
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                        {item.pct}
                      </p>
                      <p className="font-bold text-slate-900 mb-2">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-800">
                  <strong>Wir helfen kostenlos:</strong> Vor jedem Auftrag prüfen wir
                  alle möglichen Förderprogramme für Ihr Objekt und liefern die
                  komplette technische Dokumentation für Ihren Antrag. Anträge
                  müssen Sie nur unterschreiben.
                </div>
              </section>

              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft der Fenstertausch ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    {
                      step: "1",
                      title: "Aufmaß &amp; Beratung",
                      text: "Vor-Ort-Termin, Vermessung, Beratung zu Glasart, Hersteller und Sicherheit.",
                    },
                    {
                      step: "2",
                      title: "Förderprüfung &amp; KV",
                      text: "Wir prüfen alle Programme, kalkulieren netto und liefern schriftlichen KV.",
                    },
                    {
                      step: "3",
                      title: "Auftrag &amp; Förderantrag",
                      text: "Sie unterschreiben den Auftrag, wir den Förderantrag. Lieferzeit Fenster: 4–8 Wochen.",
                    },
                    {
                      step: "4",
                      title: "Montage",
                      text: "Pro Fenster 2–4 Stunden. Saubere Demontage, RAL-Anschluss, Montage neues Fenster, Innenleibung.",
                    },
                    {
                      step: "5",
                      title: "Übergabe &amp; Förderabwicklung",
                      text: "Funktionscheck, Abnahmeprotokoll, Förderbestätigungen – wir kümmern uns um die Abwicklung.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
                        {item.step}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex-1">
                        <p
                          className="font-bold text-slate-800 mb-1"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        <p
                          className="text-sm text-slate-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Bereit für neue Fenster?</p>
                  <p className="text-indigo-200 text-sm mt-1">
                    Kostenloses Aufmaß und ehrliche Beratung – inklusive
                    Förderprüfung.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
                >
                  Aufmaß anfragen →
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
                      className="bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-indigo-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zur Fenstermontage
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    {
                      q: "Was kostet eine Fenstermontage?",
                      a: "Reine Montage: 180–350 € pro Fenster. Kompletter Tausch mit 2-fach Wärmeschutzfenster: 750–1.400 €. 3-fach: 950–1.800 €. Wir erstellen vor Auftrag schriftlichen KV mit allen Optionen.",
                    },
                    {
                      q: "Was bedeutet RAL-Montage?",
                      a: "Premium-Norm für Fenstermontage. Regelt die Anschlussabdichtung in 3 Ebenen (innen luftdicht, mitte wärmegedämmt, außen schlagregendicht). Wir arbeiten ausschließlich nach RAL und ÖNORM B 5320.",
                    },
                    {
                      q: "Wie lange dauert ein Fenstertausch?",
                      a: "Pro Fenster 2–4 Stunden. Ein Haus mit 10 Fenstern wird in 3–5 Tagen komplett saniert. Sie können während der Arbeiten in der Wohnung bleiben – wir arbeiten Fenster für Fenster.",
                    },
                    {
                      q: "Welche Förderungen gibt es?",
                      a: "Sanierungsbonus (Bund), Landesförderungen NÖ und Wien für thermische Sanierung. Bei Tausch auf 3-fach Wärmeschutzglas oft 25–50 % Förderung. Wir prüfen alle Programme und liefern Unterlagen.",
                    },
                    {
                      q: "Welche Hersteller bietet ihr an?",
                      a: "Internorm, Josko, Schüco, Drutex und ausgesuchte österreichische Hersteller. Bei Bestandsfenstern besorgen wir oft auch passende Modelle, um Stilbruch zu vermeiden.",
                    },
                    {
                      q: "Muss ich während der Montage zu Hause sein?",
                      a: "Nicht zwingend, aber empfohlen für Übergabe und Schlüsselübergabe. Bei Mietwohnungen können Sie die Schlüssel auch vorab hinterlegen.",
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
                    className="flex items-center gap-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 hover:bg-indigo-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-indigo-800 to-purple-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Ein Fenstertausch lohnt sich heute mehr denn je
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Förderungen, Energiepreise und Komfort sprechen für jetzt.
                  Kostenloses Aufmaß und Förderprüfung.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    Aufmaß anfragen
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
                  <Link href="/" className="hover:text-indigo-600 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-indigo-600 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-indigo-600 transition-colors">
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
