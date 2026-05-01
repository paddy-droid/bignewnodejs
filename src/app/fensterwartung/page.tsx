import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fensterwartung Wien & NÖ | Jährliche Wartung & Pflege | ROWO",
  description:
    "Professionelle Fensterwartung in Wien, Tulln, St. Pölten & ganz Niederösterreich: Beschlag-Justage, Schmierung, Dichtungspflege und Funktionsprüfung. Verdoppelt die Lebensdauer Ihrer Fenster. Wartungspakete ab 25 €/Fenster.",
  keywords: [
    "Fensterwartung",
    "Fenster Wartung",
    "Beschlag wartung",
    "Fenster pflege",
    "Fensterservice Wartung",
    "Wartungsvertrag",
    "Fenster justieren",
    "Fenster ölen",
    "Wien",
    "Tulln",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/fensterwartung",
  },
  openGraph: {
    title: "Fensterwartung | ROWO Fensterservice",
    description:
      "Jährliche Wartung verdoppelt die Lebensdauer Ihrer Fenster. Wartungspakete ab 25 €/Fenster.",
    url: "https://www.fensterservice-rowo.at/fensterwartung",
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
      name: "Wie oft sollten Fenster gewartet werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hersteller empfehlen eine jährliche Wartung. Bei stark beanspruchten Fenstern (Hauseingang, Balkontür) sogar halbjährlich. Eine professionelle Wartung verdoppelt die durchschnittliche Lebensdauer eines Fensters von ca. 25 auf 40+ Jahre.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet eine Fensterwartung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standardwartung pro Fenster: 25–45 €. Wartungspaket Haus (8–12 Fenster): ab 199 €. Bei Wartungsvertrag mit jährlicher Anfahrt: 15 % Rabatt. Kosten amortisieren sich oft schon im ersten Jahr durch verhinderte Reparaturen.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Garantie bietet die Fensterwartung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei vielen Fensterherstellern (z. B. Internorm, Josko, Drutex) ist eine jährliche Wartung Voraussetzung für Garantieleistungen. Wir dokumentieren die Wartung schriftlich – das gilt als Nachweis bei der Garantieabwicklung.",
      },
    },
    {
      "@type": "Question",
      name: "Was wird bei einer Wartung gemacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reinigung der Beschläge, Schmierung beweglicher Teile mit zertifiziertem Beschlag-Öl, Justage in Höhe und Anpressdruck, Dichtungspflege mit Spezialfett, Funktionscheck der Schließmechanik, Sichtprüfung Glas und Rahmen. Defekte werden dokumentiert und mit Reparatur-KV ergänzt.",
      },
    },
    {
      "@type": "Question",
      name: "Lohnt sich ein Wartungsvertrag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei Hausverwaltungen, Mietshäusern oder größeren Wohnungen klar ja. Wir kommen automatisch jährlich, garantieren feste Termine und bieten 15 % Rabatt sowie priorisierten Notdienst. Die Buchhaltung wird vereinfacht und Probleme werden früh erkannt.",
      },
    },
  ],
};

const toc = [
  { id: "warum", label: "Warum Wartung?" },
  { id: "leistungen", label: "Wartungsumfang" },
  { id: "pakete", label: "Wartungspakete" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function FensterwartungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Werterhalt", "Garantie-Voraussetzung", "Pakete ab 25 €"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Fensterwartung<br />
              <span className="text-emerald-300">Verdoppeln Sie die Lebensdauer</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Eine jährliche Wartung kostet pro Fenster meist weniger als ein
              Mittagessen – verhindert aber teure Reparaturen, hält die
              Hersteller-Garantie aufrecht und macht Ihre Fenster spürbar
              leichtgängiger.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Wartungstermin vereinbaren →
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

        <div className="bg-emerald-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🛡️ Hersteller-Garantie sichern",
              "💪 Verdoppelt Lebensdauer",
              "📋 Schriftliches Protokoll",
              "🔧 Premium Beschlag-Öl",
              "📅 Wartungsverträge möglich",
            ].map((item) => (
              <span key={item} className="text-emerald-100">
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Wartung buchen
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/dichtungspflege-detail.png"
                    alt="Dichtungspflege Fensterwartung"
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
                    src="/Images/dichtungspflege-detail.png"
                    alt="Fensterwartung Beschlagpflege"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/Fenster Reparatur.png"
                    alt="Fensterservice Wartung"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Ein modernes Fenster ist ein <strong>technisches Bauteil mit über 30 beweglichen Komponenten</strong> – Beschlag,
                Scharniere, Schloss, Dichtungen. Wie ein Auto braucht es jährliche Wartung,
                um zuverlässig und energieeffizient zu bleiben. Vernachlässigte Wartung
                führt zu vorzeitigem Verschleiß, Funktionsstörungen und im
                schlimmsten Fall zum Verlust der Hersteller-Garantie.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Mit unserem Wartungsservice in Wien, Tulln, St. Pölten und ganz NÖ
                halten Sie Ihre Fenster in Topform – einmal im Jahr, schriftlich
                dokumentiert, mit Garantie-Wirksamkeit.
              </p>

              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Warum sollte ich meine Fenster warten lassen?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vier knallharte Gründe, die für jeden Hausbesitzer relevant sind
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      icon: "🛡️",
                      title: "Hersteller-Garantie sichern",
                      desc: "Viele Hersteller (Internorm, Josko, Drutex) verlangen für Garantieleistungen den Nachweis jährlicher Wartung. Wir dokumentieren schriftlich – das gilt als Beweis.",
                    },
                    {
                      icon: "💰",
                      title: "Teure Reparaturen vermeiden",
                      desc: "Eine jährliche Wartung à 25–45 € verhindert oft Reparaturen im Wert von mehreren hundert Euro. Das ROI ist meist 5–10×.",
                    },
                    {
                      icon: "⏳",
                      title: "Doppelte Lebensdauer",
                      desc: "Gewartete Fenster halten 40+ Jahre, vernachlässigte oft nur 20–25 Jahre. Eine Wartung kostet einen Bruchteil eines neuen Fensters.",
                    },
                    {
                      icon: "🌡️",
                      title: "Optimale Energieeffizienz",
                      desc: "Justierte Beschläge und gepflegte Dichtungen sorgen für maximalen Anpressdruck – damit minimale Wärmeverluste.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <p className="font-bold text-slate-900 mb-2">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was wir bei jeder Wartung machen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Unser standardisierter 9-Punkte-Wartungs-Check
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Schritt
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Maßnahme
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Zweck
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "Sichtprüfung", "Glas, Rahmen, Beschlag, Dichtungen optisch prüfen", "bg-white"],
                        ["2", "Beschlag reinigen", "Schmutz und alte Schmiermittel entfernen", "bg-slate-50"],
                        ["3", "Schmierung", "Schmierung mit zertifiziertem Beschlag-Öl an allen beweglichen Teilen", "bg-white"],
                        ["4", "Justage Höhe/Seite", "Flügel exakt im Rahmen ausrichten", "bg-slate-50"],
                        ["5", "Anpressdruck einstellen", "Optimaler Druck der Pilzköpfe gegen Schließbleche", "bg-white"],
                        ["6", "Dichtungspflege", "Spezialfett gegen Aushärten und Risse auftragen", "bg-slate-50"],
                        ["7", "Schließmechanik testen", "Funktion von Griff, Schloss und Verriegelung prüfen", "bg-white"],
                        ["8", "Glas-Sichtprüfung", "Risse, Sprünge, Scheibenzwischenraum kontrollieren", "bg-slate-50"],
                        ["9", "Wartungsprotokoll", "Schriftliche Dokumentation für Garantie und Versicherung", "bg-white"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-bold text-emerald-700 text-center w-12">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            {row[1]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="pakete" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Wartungspakete
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Drei Pakete – passend für jede Situation
                </p>

                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {
                      name: "Einzel-Wartung",
                      price: "ab 25 €",
                      perWindow: "pro Fenster",
                      features: [
                        "9-Punkte-Check",
                        "Schmierung &amp; Justage",
                        "Wartungsprotokoll",
                        "Pro Fenster: 20–30 Min.",
                      ],
                      color: "emerald",
                      featured: false,
                    },
                    {
                      name: "Haus-Paket",
                      price: "ab 199 €",
                      perWindow: "8–12 Fenster",
                      features: [
                        "Komplett-Check Haus",
                        "10–15 % günstiger pro Fenster",
                        "Foto-Dokumentation",
                        "Reparatur-KV bei Bedarf",
                      ],
                      color: "teal",
                      featured: true,
                    },
                    {
                      name: "Wartungsvertrag",
                      price: "ab 169 €/Jahr",
                      perWindow: "Haus-Paket jährlich",
                      features: [
                        "Automatische Erinnerung",
                        "−15 % auf Wartung &amp; Reparatur",
                        "Priorisierter Notdienst",
                        "Garantie-konforme Doku",
                      ],
                      color: "blue",
                      featured: false,
                    },
                  ].map((pack) => (
                    <div
                      key={pack.name}
                      className={`relative rounded-3xl p-6 border-2 ${
                        pack.featured
                          ? "border-emerald-500 bg-emerald-50 shadow-xl"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      {pack.featured && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          BELIEBT
                        </span>
                      )}
                      <p className="font-bold text-lg text-slate-900">
                        {pack.name}
                      </p>
                      <p className="text-3xl font-extrabold text-emerald-700 mt-2">
                        {pack.price}
                      </p>
                      <p className="text-xs text-slate-500 mb-5">
                        {pack.perWindow}
                      </p>
                      <ul className="space-y-2 text-sm">
                        {pack.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-slate-700"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span dangerouslySetInnerHTML={{ __html: f }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten Wartungsservice
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Transparente Preise (2026)
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Variante
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Aufwand
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Kosten
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Einzel-Wartung pro Fenster", "20–30 Min.", "25–45 €", "bg-white"],
                        ["Wartung Wohnung (4–6 Fenster)", "1,5–2,5 Std.", "ab 119 €", "bg-slate-50"],
                        ["Wartung Haus (8–12 Fenster)", "3–4,5 Std.", "ab 199 €", "bg-white"],
                        ["Wartungsvertrag (Haus, jährlich)", "—", "ab 169 €/Jahr", "bg-emerald-50"],
                        ["Hausverwaltungs-Paket", "—", "auf Anfrage", "bg-white"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Alle Preise inkl. Anfahrt im Servicegebiet, Material und MwSt.
                </p>
              </section>

              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft die Wartung ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    {
                      step: "1",
                      title: "Terminvereinbarung",
                      text: "Wir vereinbaren einen Wunschtermin – gerne auch in den Randzeiten oder am Wochenende.",
                    },
                    {
                      step: "2",
                      title: "9-Punkte-Wartung",
                      text: "Pro Fenster ca. 20–30 Minuten. Saubere Arbeit, keine Möbel-Verschiebungen nötig.",
                    },
                    {
                      step: "3",
                      title: "Defekt-Dokumentation",
                      text: "Falls wir Verschleiß oder Defekte feststellen, dokumentieren wir das und geben Ihnen einen separaten Reparatur-KV.",
                    },
                    {
                      step: "4",
                      title: "Wartungsprotokoll",
                      text: "Sie erhalten ein schriftliches Protokoll mit allen geprüften Punkten – wichtig für Hersteller-Garantie und Versicherungen.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
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

              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">
                    Schon gewartet dieses Jahr?
                  </p>
                  <p className="text-emerald-100 text-sm mt-1">
                    Vereinbaren Sie jetzt Ihren Wartungstermin – schnell und unkompliziert.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm"
                >
                  Termin buchen →
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
                      className="bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zur Fensterwartung
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    {
                      q: "Wie oft sollten Fenster gewartet werden?",
                      a: "Hersteller empfehlen jährlich. Bei stark beanspruchten Fenstern (Hauseingang, Balkontür) sogar halbjährlich. Eine professionelle Wartung verdoppelt die durchschnittliche Lebensdauer.",
                    },
                    {
                      q: "Was kostet eine Fensterwartung?",
                      a: "Standardwartung: 25–45 € pro Fenster. Haus-Paket (8–12 Fenster): ab 199 €. Wartungsvertrag mit jährlichem Termin: 15 % Rabatt.",
                    },
                    {
                      q: "Welche Garantie bietet die Wartung?",
                      a: "Bei vielen Herstellern ist jährliche Wartung Voraussetzung für Garantieleistungen. Wir dokumentieren schriftlich – das ist der Nachweis bei Garantieabwicklung.",
                    },
                    {
                      q: "Was wird bei einer Wartung gemacht?",
                      a: "Reinigung der Beschläge, Schmierung mit zertifiziertem Beschlag-Öl, Justage in Höhe und Anpressdruck, Dichtungspflege, Funktionscheck Schließmechanik, Sichtprüfung Glas und Rahmen, Wartungsprotokoll.",
                    },
                    {
                      q: "Lohnt sich ein Wartungsvertrag?",
                      a: "Bei Hausverwaltungen, Mietshäusern oder größeren Wohnungen klar ja. Wir kommen automatisch jährlich, garantieren feste Termine, bieten 15 % Rabatt und priorisierten Notdienst.",
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
                    className="flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 hover:bg-emerald-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Kleine Wartung – große Wirkung
                </h2>
                <p className="text-slate-200 mb-6 max-w-md mx-auto">
                  Pro Fenster weniger als ein Mittagessen. Schützt Ihre Investition.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    Jetzt Wartung buchen
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
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-emerald-600 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-emerald-600 transition-colors">
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
