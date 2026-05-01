import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Sonnenschutzfolien Montage Wien & NÖ | Hitzeschutz & UV | ROWO",
  description:
    "Professionelle Sonnenschutzfolien-Montage in Wien, Tulln, St. Pölten & ganz Niederösterreich: Hitzeschutz bis 80 %, UV-Schutz 99 %, Blendschutz und Sichtschutz. Saubere Verklebung, kostenloser KV.",
  keywords: [
    "Sonnenschutzfolie",
    "Sonnenschutzfolie Fenster",
    "Hitzeschutzfolie",
    "UV-Schutz Fenster",
    "Sichtschutzfolie",
    "Blendschutz",
    "Spiegelfolie",
    "Wien",
    "Tulln",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/sonnenschutzfolien",
  },
  openGraph: {
    title: "Sonnenschutzfolien Montage | ROWO Fensterservice",
    description:
      "Professionelle Folierung gegen Sommerhitze, UV und Blendung – Wien & NÖ.",
    url: "https://www.fensterservice-rowo.at/sonnenschutzfolien",
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
      name: "Was kostet eine Sonnenschutzfolie pro m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard-Sonnenschutzfolien liegen bei 45–80 €/m² inkl. Montage. Premium-Folien (mit erhöhter Hitzereduktion oder spektralselektiv) 80–140 €/m². Sichtschutzfolien einseitig: 55–95 €/m². Mengenrabatte ab 10 m².",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel Hitze hält die Folie ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hochwertige Sonnenschutzfolien reduzieren die Wärmeeinstrahlung um 60–80 %. Spürbar: Räume bleiben im Sommer 4–8 °C kühler, Klimaanlage muss weniger arbeiten – das spart bis zu 30 % Klimakosten.",
      },
    },
    {
      "@type": "Question",
      name: "Bleibt die Sicht durch die Folie erhalten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Moderne Sonnenschutzfolien sind hochtransparent (50–70 % Lichtdurchlass) und kaum sichtbar. Bei Sichtschutzfolien (einseitig oder beidseitig blickdicht) ist das natürlich anders – das ist dann gewollt.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange hält eine Sonnenschutzfolie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premium-Folien halten 10–15 Jahre und werden mit Herstellergarantie geliefert. Billige Folien werden oft schon nach 3–5 Jahren milchig oder lösen sich. Wir verbauen ausschließlich Markenfolien (3M, Solar Gard, Llumar).",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich die Folie selbst aufkleben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theoretisch ja, praktisch riskant: Profi-Folierung ist absolut blasen- und staubfrei – das gelingt zu Hause selten. Falsch verklebte Folien sehen unschön aus, lösen sich frühzeitig und müssen oft entfernt und neu beauftragt werden. Eine Profi-Montage ist eine günstige Versicherung.",
      },
    },
  ],
};

const toc = [
  { id: "vorteile", label: "Vorteile" },
  { id: "folientypen", label: "Folientypen" },
  { id: "anwendung", label: "Anwendungen" },
  { id: "kosten", label: "Kosten" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function SonnenschutzfolienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Bis 80 % Hitzeschutz", "UV 99 %", "10+ Jahre Haltbarkeit"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Sonnenschutzfolien<br />
              <span className="text-amber-200">Hitze raus, Komfort rein</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
              Schluss mit überhitzten Räumen, ausgeblichenen Möbeln und
              Blendung. Wir montieren professionelle Sonnenschutzfolien aller
              Art – sauber, blasenfrei, mit 10+ Jahren Haltbarkeit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-white hover:bg-amber-50 text-amber-700 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
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

        <div className="bg-amber-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🌡️ Räume 4–8 °C kühler",
              "🛡️ 99 % UV-Schutz",
              "💎 3M / Solar Gard / Llumar",
              "📋 10 Jahre Garantie",
              "✨ Blasen- &amp; staubfreie Verklebung",
            ].map((item) => (
              <span
                key={item}
                className="text-amber-100"
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      Folie anfragen
                    </Link>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/sonnenschutzfolien_1_1777634419477.png"
                    alt="Fachgerechtes Anbringen von hitzereduzierender Sonnenschutzfolie auf Fensterglas"
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
                    src="/Images/sonnenschutzfolien_2_1777634433138.png"
                    alt="Effektiver Blendschutz: Bürofenster mit und ohne Sonnenschutzfolierung im Vergleich"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/sonnenschutzfolien_1_1777634419477.png"
                    alt="Fachgerechtes Anbringen von hitzereduzierender Sonnenschutzfolie auf Fensterglas"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                In den vergangenen Sommern wurden Innenräume immer öfter
                untragbar heiß. <strong>Sonnenschutzfolien sind die wirtschaftlichste Lösung</strong>
                {" "}gegen sommerliche Überhitzung – sie reduzieren die
                Wärmeeinstrahlung um bis zu 80 %, blockieren UV-Licht zu 99 %
                und sind in einem halben Tag montiert.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir verkleben ausschließlich Markenfolien (3M, Solar Gard,
                Llumar) – mit Herstellergarantie von 10 Jahren. Die Verklebung
                erfolgt staub- und blasenfrei in unserer geschulten
                Profi-Technik.
              </p>

              <section id="vorteile" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was Sonnenschutzfolien können
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Sechs Vorteile, die Sie spüren werden
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "🌡️",
                      title: "Hitzeschutz bis 80 %",
                      desc: "Räume bleiben im Sommer 4–8 °C kühler. Klimaanlage muss weniger arbeiten – Stromsparen inklusive.",
                    },
                    {
                      icon: "🛡️",
                      title: "UV-Schutz 99 %",
                      desc: "Möbel, Böden, Bilder bleichen nicht mehr aus. Schutz für Mensch und Inneneinrichtung.",
                    },
                    {
                      icon: "🌞",
                      title: "Blendschutz",
                      desc: "Spürbar weniger Blendung am Bildschirm und bei Lese-Plätzen am Fenster.",
                    },
                    {
                      icon: "👁️",
                      title: "Sichtschutz möglich",
                      desc: "Spiegelfolien sind von außen blickdicht, von innen weitgehend transparent – ideal für Erdgeschoss.",
                    },
                    {
                      icon: "✨",
                      title: "Optisch unauffällig",
                      desc: "Moderne Folien sind kaum sichtbar – die Optik des Fensters bleibt erhalten.",
                    },
                    {
                      icon: "💰",
                      title: "Wirtschaftlich",
                      desc: "Im Vergleich zu Außenraffstores oder Klima-Tausch deutlich günstiger und kein Eingriff am Bau.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-amber-50 border border-amber-100 rounded-2xl p-5"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="folientypen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Folientypen im Überblick
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Welche Folie passt zu Ihrem Fenster?
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Standard Sonnenschutz",
                      pct: "60 % Hitzereduktion",
                      desc: "Solide Allroundlösung gegen sommerliche Überhitzung, transparent und unauffällig.",
                    },
                    {
                      title: "Premium spektralselektiv",
                      pct: "80 % Hitze, 99 % UV",
                      desc: "High-End-Folie: Maximaler Hitzeschutz bei maximaler Lichttransparenz.",
                    },
                    {
                      title: "Spiegelfolie (außen)",
                      pct: "Sichtschutz tags",
                      desc: "Tagsüber von außen blickdicht, von innen klar – perfekt für Erdgeschoss.",
                    },
                    {
                      title: "Mattfolie / Sichtschutz",
                      pct: "Vollständig blickdicht",
                      desc: "Beidseitig opak – ideal für Bad, WC, Eingangstür-Glas.",
                    },
                    {
                      title: "Sicherheitsfolie",
                      pct: "Splitterschutz + UV",
                      desc: "Zusätzlich zur Hitzereduktion auch Splitterschutz und Einbruch-Verzögerung.",
                    },
                    {
                      title: "Designfolie",
                      pct: "Dekorativ",
                      desc: "Strukturen, Sandstrahl-Optik, Streifen – Kombination aus Optik und Funktion.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border-2 border-amber-200 rounded-2xl p-5"
                    >
                      <p className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs font-semibold text-amber-700 mb-2">
                        {item.pct}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="anwendung" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Typische Anwendungen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Wo sich Sonnenschutzfolien besonders bezahlt machen
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Süd- und Westfenster",
                      desc: "Direkte Sonneneinstrahlung von Mittag bis Abend – die größte Hitzequelle im Haus.",
                    },
                    {
                      title: "Dachfenster",
                      desc: "Heizen sich besonders stark auf – Sonnenschutzfolie ist günstiger als Spezial-Sonnenschutz.",
                    },
                    {
                      title: "Wintergärten",
                      desc: "Glasflächen wirken als Treibhaus – Folie macht den Wintergarten ganzjährig nutzbar.",
                    },
                    {
                      title: "Büros &amp; Arbeitsplätze",
                      desc: "Blendschutz am Monitor, kühlere Temperaturen, höhere Arbeitsproduktivität.",
                    },
                    {
                      title: "Erdgeschoss-Räume",
                      desc: "Spiegelfolie schützt vor Einblicken und reduziert gleichzeitig Hitze.",
                    },
                    {
                      title: "Geschäftsräume",
                      desc: "Schutz von Auslagen vor UV-Bleichen, Komfort für Kunden und Mitarbeiter.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <p
                        className="font-bold text-slate-900 mb-1"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was kostet die Folierung?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise (2026) – inkl. Material und Montage
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Folientyp
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Preis pro m²
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Eigenschaften
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Standard Sonnenschutz", "45–80 €", "60 % Hitzeschutz, 99 % UV", "bg-white"],
                        ["Premium spektralselektiv", "80–140 €", "80 % Hitzeschutz, max. Transparenz", "bg-slate-50"],
                        ["Spiegelfolie", "65–110 €", "Sichtschutz tags + Hitzeschutz", "bg-white"],
                        ["Sichtschutz / Matt", "55–95 €", "Beidseitig blickdicht", "bg-slate-50"],
                        ["Sicherheits- + Sonnenschutz", "120–180 €", "Splitterschutz + Hitzeschutz", "bg-white"],
                        ["Designfolie", "ab 70 €", "Dekorative Strukturen", "bg-slate-50"],
                        ["Mengenrabatt ab 10 m²", "−10 %", "Für größere Aufträge", "bg-amber-50"],
                      ].map((row, i) => (
                        <tr key={i} className={row[3] as string}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row[0]}
                          </td>
                          <td className="px-5 py-3 font-semibold text-amber-700">
                            {row[1]}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Mindestauftrag 4 m². Bei kleineren Aufträgen Mindestbetrag
                  290 €. Kostenloses Aufmaß und Beratung im Servicegebiet.
                </p>
              </section>

              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft die Folienmontage ab
                </h2>
                <div className="space-y-5 mt-6">
                  {[
                    { step: "1", title: "Beratung &amp; Aufmaß", text: "Wir prüfen Ihre Glasart, Ausrichtung und Beratung zur passenden Folie." },
                    { step: "2", title: "Folienzuschnitt", text: "Maßgenauer Zuschnitt im Werkstatt mit speziellen Schneidetischen." },
                    { step: "3", title: "Glasreinigung", text: "Gründliche Reinigung mit Spezialreiniger – essentiell für die spätere Haltbarkeit." },
                    { step: "4", title: "Verklebung", text: "Blasen- und staubfreie Anbringung mit Wassermethode und Profi-Werkzeug." },
                    { step: "5", title: "Trocknung &amp; Übergabe", text: "Komplette Aushärtung in 7–14 Tagen, danach voll belastbar. Schriftliche Garantie." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
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

              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">
                    Vor dem nächsten Sommer entscheiden.
                  </p>
                  <p className="text-amber-100 text-sm mt-1">
                    Kostenloses Aufmaß und Folienberatung – schnelle Termine.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-amber-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors text-sm"
                >
                  Beratung anfragen →
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
                      className="bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors text-center"
                    >
                      📍 {r.name}
                    </Link>
                  ))}
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zu Sonnenschutzfolien
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    { q: "Was kostet eine Sonnenschutzfolie pro m²?", a: "Standard-Sonnenschutzfolien: 45–80 €/m² inkl. Montage. Premium: 80–140 €/m². Sichtschutzfolien: 55–95 €/m². Mengenrabatte ab 10 m²." },
                    { q: "Wie viel Hitze hält die Folie ab?", a: "Hochwertige Sonnenschutzfolien reduzieren Wärmeeinstrahlung um 60–80 %. Räume bleiben im Sommer 4–8 °C kühler – Klimakosten sinken um bis zu 30 %." },
                    { q: "Bleibt die Sicht durch die Folie erhalten?", a: "Ja. Moderne Sonnenschutzfolien sind hochtransparent (50–70 % Lichtdurchlass) und kaum sichtbar. Bei Sichtschutzfolien ist das natürlich anders – das ist gewollt." },
                    { q: "Wie lange hält eine Sonnenschutzfolie?", a: "Premium-Folien halten 10–15 Jahre mit Herstellergarantie. Wir verbauen ausschließlich Markenfolien (3M, Solar Gard, Llumar)." },
                    { q: "Kann ich die Folie selbst aufkleben?", a: "Theoretisch ja, praktisch riskant: Profi-Folierung ist absolut blasen- und staubfrei – das gelingt zu Hause selten. Falsch verklebte Folien sehen unschön aus und müssen oft neu gemacht werden." },
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
                    className="flex items-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 hover:bg-amber-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Kühle Räume statt Sommerhitze
                </h2>
                <p className="text-white/90 mb-6 max-w-md mx-auto">
                  Wir folieren professionell – mit Markenmaterial und 10 Jahren
                  Garantie.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-white text-amber-700 font-bold px-7 py-3 rounded-xl hover:bg-amber-50 transition-colors text-sm"
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
                  <Link href="/" className="hover:text-amber-600 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/leistungen" className="hover:text-amber-600 transition-colors">
                    Leistungen
                  </Link>
                  <Link href="/kontakt" className="hover:text-amber-600 transition-colors">
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
