import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Blindscheiben tauschen & Isolierglas-Upgrade Wien & NÖ | ROWO Fensterservice",
  description:
    "Fenster beschlagen innen? Blinde Scheiben & Kondenswasser im Scheibenzwischenraum austauschen lassen. Professioneller Isolierglastausch mit Upgrade auf modernes Wärmeschutzglas in Tulln, Wien & ganz Niederösterreich. Kostenlose Vor-Ort-Beratung.",
  keywords: [
    "Blindscheiben tauschen",
    "Scheibe blind",
    "Fenster beschlagen innen",
    "Kondenswasser im Scheibenzwischenraum",
    "Isolierglas tauschen",
    "Wärmeschutzglas Upgrade",
    "Glastausch Fenster",
    "Doppelverglasung Dreifachverglasung",
    "Fenster blind",
    "Tulln",
    "St. Pölten",
    "Wien",
    "Niederösterreich",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/blindscheiben-tausch",
  },
  openGraph: {
    title:
      "Blindscheiben tauschen & Isolierglas-Upgrade | ROWO Fensterservice",
    description:
      "Beschlagene oder blinde Fensterscheiben austauschen lassen – mit Upgrade auf Wärmeschutzglas. Tulln, Wien & ganz NÖ.",
    url: "https://www.fensterservice-rowo.at/blindscheiben-tausch",
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
      name: "Was bedeutet eine 'blinde Scheibe' genau?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine blinde Scheibe entsteht, wenn die hermetische Dichtung des Isolierglasverbunds versagt. Feuchtigkeit dringt in den Scheibenzwischenraum ein und kondensiert dort dauerhaft – sichtbar als milchiger Schleier oder Tropfen, die sich nicht abwischen lassen. Reparieren lässt sich das nicht, nur die Glaseinheit muss getauscht werden.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet der Tausch einer Blindscheibe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Austausch einer einzelnen Glaseinheit beginnt ab ca. 180 € für kleine Standardformate. Bei größeren Scheiben oder Upgrade auf modernes 3-fach Wärmeschutzglas liegen die Kosten zwischen 280 € und 650 € pro Scheibe – inklusive Demontage, Montage und fachgerechter Entsorgung. Wir erstellen vorab immer einen kostenlosen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Lohnt sich ein Upgrade von 2-fach auf 3-fach Verglasung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, in vielen Fällen sehr deutlich. Modernes 3-fach Wärmeschutzglas hat einen Ug-Wert von 0,5–0,7 W/m²K – im Vergleich zu alten Isolierglasscheiben mit 2,8–3,0 W/m²K bedeutet das bis zu 80 % geringere Wärmeverluste durch das Glas. Die Mehrkosten gegenüber Standard-2-fach-Glas amortisieren sich oft in 5–8 Jahren über reduzierte Heizkosten.",
      },
    },
    {
      "@type": "Question",
      name: "Muss der ganze Fensterrahmen getauscht werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein – in den meisten Fällen kann nur die Glaseinheit ausgetauscht werden, der Rahmen bleibt erhalten. Voraussetzung ist, dass der Rahmen technisch noch in Ordnung ist und das neue Glas zur Glasfalz passt. Das spart erhebliche Kosten gegenüber einem Komplettfenstertausch.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert der Glastausch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der reine Tausch einer Glaseinheit dauert pro Fenster zwischen 30 und 60 Minuten. Bei mehreren Fenstern an einem Tag sind 6–10 Fenster pro Techniker realistisch. Sie haben das Fenster also nur kurz offen – wir arbeiten sauber und planen den Termin so, dass Sie keine Wohnung im Bauzustand haben.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Glasarten könnt ihr beim Upgrade einbauen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir bieten alle gängigen Verglasungen: 2-fach und 3-fach Wärmeschutzglas, Schallschutzglas (bis Klasse 5), Sicherheitsglas (VSG, ESG), Sonnenschutzglas mit reduzierter Wärmeeinstrahlung sowie Ornamentglas. Auf Wunsch kombinieren wir Eigenschaften – z. B. Wärme- und Schallschutz in einer Einheit.",
      },
    },
  ],
};

const toc = [
  { id: "was-ist", label: "Was ist eine blinde Scheibe?" },
  { id: "ursachen", label: "Ursachen & Anzeichen" },
  { id: "leistungen", label: "Unsere Leistungen" },
  { id: "upgrade", label: "Isolierglas-Upgrade" },
  { id: "kosten", label: "Kosten & Förderung" },
  { id: "ablauf", label: "Ablauf des Tauschs" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function BlindscheibenTauschPage() {
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
              {["Glastausch", "Isolierglas-Upgrade", "Wärmeschutz"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Blindscheiben tauschen –<br />
              <span className="text-blue-300">
                Isolierglas-Upgrade in Wien &amp; NÖ
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Kondenswasser im Scheibenzwischenraum, milchige Schleier, kalte
              Stellen am Glas? Wir tauschen Ihre blinden Scheiben aus –
              auf Wunsch mit Upgrade auf modernes Wärmeschutzglas.
              Saubere Arbeit, kostenloser KV, Gewährleistung.
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
              "✅ Glastausch ohne Rahmenwechsel",
              "🌡️ Bis zu 80 % weniger Wärmeverlust",
              "🔧 Saubere Arbeit, geprüfter Fachbetrieb",
              "📋 Kostenloser Kostenvoranschlag",
              "🛡️ 5 Jahre Gewährleistung auf neue Glaseinheiten",
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
                      🔧 Jetzt KV anfordern
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
                    src="/Images/blindscheiben_1_1777634352802.png"
                    alt="Kondenswasser im Fenster: Beratung zum Tausch blinder Isolierglasscheiben"
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
                    src="/Images/blindscheiben_2_1777634366941.png"
                    alt="Erfolgreicher Blindscheiben-Tausch für wieder klare Sicht und volle Dämmung"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/blindscheiben_1_1777634352802.png"
                    alt="Kondenswasser im Fenster: Beratung zum Tausch blinder Isolierglasscheiben"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                <strong>Beschlagene oder „blinde&quot; Scheiben</strong> sind eines der häufigsten
                Probleme älterer Isolierglasfenster. Wenn sich Kondenswasser dauerhaft <em>zwischen</em> den
                Scheiben sammelt, ist das nicht kosmetisch – es bedeutet, dass die Scheibe technisch defekt
                ist und kaum noch dämmt. Wir tauschen Ihre blinden Scheiben in Wien, Tulln, St. Pölten und
                ganz Niederösterreich aus – effizient, sauber und auf Wunsch mit echtem energetischen
                Mehrwert.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Der Clou: In den meisten Fällen muss <strong>nicht das ganze Fenster</strong> getauscht
                werden – sondern nur die Glaseinheit. Das spart bis zu <strong>70 % gegenüber einem Komplett-Fenstertausch</strong>
                {" "}und ist die ideale Gelegenheit, gleich auf modernes Wärmeschutzglas
                upzugraden.
              </p>

              {/* WAS IST */}
              <section id="was-ist" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was ist eine „blinde Scheibe&quot; genau?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Kurzes Hintergrundwissen, damit Sie wissen, worüber wir reden
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-5">
                  <p className="text-slate-700 leading-relaxed">
                    Moderne Isolierglasfenster bestehen aus 2 oder 3 Scheiben mit einem hermetisch
                    abgedichteten Zwischenraum. Dieser Raum ist mit einem <strong>Edelgas (meist Argon
                    oder Krypton)</strong> gefüllt – das ist der eigentliche Wärmeschutz. Solange die
                    Randdichtung intakt ist, bleibt das Gas drin und die Scheibe ist klar.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Wird die Randdichtung porös, dringt Luftfeuchtigkeit in den Zwischenraum ein. Das
                    Gas entweicht, die Wärmedämmung bricht zusammen, und an kalten Tagen kondensiert die
                    Feuchtigkeit <strong>zwischen den Scheiben</strong> zu einem milchigen Schleier oder
                    sichtbaren Tropfen. Das nennt man „blinde Scheibe&quot; – und sie lässt sich
                    <strong> nicht reparieren</strong>. Nur ein Tausch der Glaseinheit hilft.
                  </p>
                </div>
              </section>

              {/* URSACHEN & ANZEICHEN */}
              <section id="ursachen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Anzeichen & Ursachen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Daran erkennen Sie eine defekte Scheibe – und wann es Zeit zum Handeln ist
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "🌫️",
                      title: "Milchiger Schleier zwischen den Scheiben",
                      problem:
                        "Die Scheibe wirkt diffus, lässt sich von außen und innen nicht klar wischen.",
                      cause:
                        "Kondensat zwischen den Scheiben durch defekte Randdichtung – Edelgasfüllung ist entwichen.",
                      solution:
                        "Glaseinheit komplett tauschen, idealerweise auf modernes Wärmeschutzglas.",
                    },
                    {
                      icon: "💧",
                      title: "Tropfen oder Kondenswasser im Zwischenraum",
                      problem:
                        "Sichtbare Wasserperlen am Rand der Scheibe – besonders morgens und im Winter.",
                      cause:
                        "Fortgeschrittener Defekt – Taupunkt liegt komplett innerhalb des Glasverbunds.",
                      solution:
                        "Eilig tauschen, sonst Schäden an Rahmen und Gummirändern.",
                    },
                    {
                      icon: "🥶",
                      title: "Scheibe fühlt sich kalt an",
                      problem:
                        "Spürbarer Kältestrom direkt vor dem Fenster, kalte Glasoberfläche innen.",
                      cause:
                        "Edelgas entwichen – U-Wert der Scheibe hat sich um 40–60 % verschlechtert.",
                      solution:
                        "Tausch lohnt sich energetisch – oft ist die Heizkostenersparnis spürbar.",
                    },
                    {
                      icon: "📅",
                      title: "Scheibe ist älter als 20 Jahre",
                      problem:
                        "Auch ohne sichtbare Defekte: Randdichtungen alter Isoliergläser haben begrenzte Lebensdauer.",
                      cause:
                        "Material- und UV-Ermüdung, irgendwann unvermeidbar.",
                      solution:
                        "Bei laufender Sanierung sinnvoll mit upgraden – modernes Glas zahlt sich aus.",
                    },
                    {
                      icon: "🔍",
                      title: "Ablagerungen oder Schmutz im Zwischenraum",
                      problem:
                        "Sichtbare Verschmutzung oder weiße Beläge zwischen den Scheiben.",
                      cause:
                        "Trockenmittel im Randverbund hat seine Funktion verloren.",
                      solution:
                        "Glaseinheit ist nicht mehr restaurierbar – nur Tausch hilft.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-base">
                        <span className="text-xl">{item.icon}</span> {item.title}
                      </h3>
                      <div className="grid sm:grid-cols-3 gap-3 text-sm">
                        <div className="bg-red-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-red-600 mb-1">
                            Anzeichen
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
                  Unsere Leistungen rund um den Glastausch
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom Aufmaß bis zur Entsorgung – alles aus einer Hand
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
                          service: "Aufmaß & Beratung",
                          desc: "Vor-Ort-Termin, Vermessung, ehrliche Empfehlung 2-fach vs. 3-fach",
                          benefit: "Genau die Verglasung, die für Ihr Zuhause passt",
                          bg: "bg-white",
                        },
                        {
                          service: "Glaseinheit nach Maß",
                          desc: "Anfertigung beim Glasbauer mit den passenden U-Werten und Maßen",
                          benefit: "Perfekte Passgenauigkeit, kein Spalt, kein Provisorium",
                          bg: "bg-slate-50",
                        },
                        {
                          service: "Demontage der alten Scheibe",
                          desc: "Vorsichtiges Entfernen der defekten Glaseinheit, Schutz von Rahmen & Bauwerk",
                          benefit: "Keine Schäden am Rahmen – meist bleibt er voll erhalten",
                          bg: "bg-white",
                        },
                        {
                          service: "Montage der neuen Verglasung",
                          desc: "Einsetzen, Verklotzen, Versiegeln gemäß ÖNORM und Herstellervorgaben",
                          benefit: "Dichte und langlebige Verbindung – minimaler Wärmeverlust",
                          bg: "bg-slate-50",
                        },
                        {
                          service: "Sauberkeit & Entsorgung",
                          desc: "Abdecken der Möbel, Mitnahme & fachgerechte Entsorgung des Altglases",
                          benefit: "Sie haben am Ende des Tages eine saubere Wohnung – ohne Bauschutt",
                          bg: "bg-white",
                        },
                        {
                          service: "Funktionscheck & Übergabe",
                          desc: "Prüfung Beschläge, Dichtungen, Schließmechanik nach dem Tausch",
                          benefit: "Fenster läuft wieder leichtgängig, alles abgenommen",
                          bg: "bg-slate-50",
                        },
                      ].map((row) => (
                        <tr key={row.service} className={row.bg}>
                          <td className="px-5 py-3 font-semibold text-slate-800">
                            {row.service}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row.desc}</td>
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

              {/* UPGRADE */}
              <section id="upgrade" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Isolierglas-Upgrade: Welche Verglasung passt?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Unsere häufigsten Glasvarianten beim Tausch
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "2-fach Wärmeschutzglas",
                      ug: "Ug 1,0–1,1 W/m²K",
                      desc: "Solide Standardlösung. Deutlich besser als alte Isoliergläser, gutes Preis-Leistungs-Verhältnis.",
                    },
                    {
                      title: "3-fach Wärmeschutzglas",
                      ug: "Ug 0,5–0,7 W/m²K",
                      desc: "Top-Dämmung, ideal bei steigenden Energiekosten. Langfristig die wirtschaftlichste Wahl.",
                    },
                    {
                      title: "Schallschutzglas",
                      ug: "Bis 50 dB Reduktion",
                      desc: "Für Wohnungen an Hauptstraßen oder Bahnstrecken. Spürbare Ruhe – auch in Kombination mit Wärmeschutz.",
                    },
                    {
                      title: "Sicherheitsglas (VSG)",
                      ug: "Einbruch- & Splitterschutz",
                      desc: "Verbundsicherheitsglas mit Folie zwischen den Scheiben – hält bei Bruch zusammen, erschwert Einbruch.",
                    },
                    {
                      title: "Sonnenschutzglas",
                      ug: "g-Wert ab 0,30",
                      desc: "Reflektiert sommerliche Hitzeeinstrahlung – ideal bei Süd- und Westfenstern, dachverglasten Räumen.",
                    },
                    {
                      title: "Ornament- / Mattglas",
                      ug: "Sichtschutz",
                      desc: "Für Bad, WC, Treppenhaus. Verschiedene Strukturen – auch in Kombination mit Wärmeschutz.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-blue-50 border border-blue-100 rounded-2xl p-5"
                    >
                      <p className="font-bold text-blue-800 mb-1">{item.title}</p>
                      <p className="text-xs font-semibold text-blue-700 mb-2">
                        {item.ug}
                      </p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-green-50 border border-green-200 rounded-2xl p-5 text-sm text-green-900">
                  <strong>Unsere Empfehlung:</strong> Wenn Sie ohnehin tauschen
                  müssen, nutzen Sie die Gelegenheit für ein 3-fach Wärmeschutzglas.
                  Der Aufpreis gegenüber Standard-Isolierglas liegt meist nur bei
                  15–25 % – die Heizkostenersparnis amortisiert das oft in
                  weniger als 8 Jahren.
                </div>
              </section>

              {/* KOSTEN */}
              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was kostet der Tausch einer Blindscheibe?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preisspannen für Österreich (2026)
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Glasart
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Format (Beispiel)
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Kosten ca. (inkl. Montage)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: "2-fach Wärmeschutzglas",
                          format: "bis 1 m²",
                          cost: "180 – 280 €",
                          bg: "bg-white",
                        },
                        {
                          type: "2-fach Wärmeschutzglas",
                          format: "1 – 2 m²",
                          cost: "260 – 400 €",
                          bg: "bg-slate-50",
                        },
                        {
                          type: "3-fach Wärmeschutzglas",
                          format: "bis 1 m²",
                          cost: "240 – 360 €",
                          bg: "bg-white",
                        },
                        {
                          type: "3-fach Wärmeschutzglas",
                          format: "1 – 2 m²",
                          cost: "330 – 520 €",
                          bg: "bg-slate-50",
                        },
                        {
                          type: "Schallschutzglas",
                          format: "1 – 2 m², bis 45 dB",
                          cost: "380 – 580 €",
                          bg: "bg-white",
                        },
                        {
                          type: "Sicherheitsglas (VSG)",
                          format: "1 – 2 m²",
                          cost: "350 – 550 €",
                          bg: "bg-slate-50",
                        },
                        {
                          type: "Großformat / Sonderglas",
                          format: "ab 2 m²",
                          cost: "auf Anfrage",
                          bg: "bg-white",
                        },
                      ].map((row, i) => (
                        <tr key={i} className={row.bg}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row.type}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row.format}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">
                            {row.cost}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Preise inkl. Demontage, Entsorgung, Montage und MwSt. – ohne
                  Anfahrt für Aufträge im Servicegebiet. Förderungen (z. B. Sanierungsbonus,
                  Landesförderungen NÖ) können die Kosten zusätzlich senken – wir beraten Sie gerne dazu.
                </p>

                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-800">
                  <strong>Förderungen 2026:</strong> Beim Upgrade auf hochdämmende
                  Verglasung (3-fach) sind in NÖ und Wien teilweise Sanierungsförderungen
                  möglich. Wir verweisen Sie auf die aktuellen Programme und liefern auf
                  Wunsch alle nötigen Unterlagen für Ihren Antrag.
                </div>
              </section>

              {/* ABLAUF */}
              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft der Glastausch ab
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom ersten Anruf bis zum sauber montierten Fenster
                </p>

                <div className="relative">
                  <div className="hidden md:block absolute left-7 top-10 bottom-10 w-0.5 bg-slate-200 z-0" />

                  <div className="space-y-5">
                    {[
                      {
                        step: "1",
                        title: "Erstkontakt & Fotos",
                        text: "Sie schicken uns Fotos (gerne per WhatsApp) der betroffenen Fenster. Wir können oft schon vorab grob einschätzen, ob ein Glastausch reicht oder mehr nötig ist.",
                      },
                      {
                        step: "2",
                        title: "Vor-Ort-Aufmaß",
                        text: "Wir kommen vorbei, prüfen den Rahmenzustand, messen exakt aus und beraten zu 2-fach vs. 3-fach Verglasung – ehrlich und ohne Druck.",
                      },
                      {
                        step: "3",
                        title: "Schriftlicher Kostenvoranschlag",
                        text: "Sie erhalten ein klar aufgeschlüsseltes Angebot mit allen Optionen. Kein versteckter Aufpreis, keine Überraschungen.",
                      },
                      {
                        step: "4",
                        title: "Anfertigung der Glaseinheit",
                        text: "Nach Auftragserteilung produziert unser Glasbauer die maßgeschneiderte Einheit. Lieferzeit in der Regel 5–10 Werktage.",
                      },
                      {
                        step: "5",
                        title: "Montage & Übergabe",
                        text: "Saubere Demontage der alten Scheibe, Einbau der neuen Glaseinheit, Funktionscheck. Pro Fenster ca. 30–60 Minuten – Wohnung bleibt nutzbar.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-5 relative z-10">
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
                </div>
              </section>

              {/* CTA MID */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">
                    Schluss mit beschlagenen Scheiben?
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Kostenloser KV vor Ort – wir nennen Ihnen den exakten Preis &amp;
                    die beste Glasvariante für Ihre Fenster.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Jetzt anfragen →
                </Link>
              </div>

              {/* REGIONEN */}
              <section id="regionen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unser Servicegebiet
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Wir tauschen Ihre Blindscheiben in ganz NÖ &amp; Wien
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Wien & Umgebung", href: "/wien" },
                    { name: "Tulln", href: "/tulln" },
                    { name: "St. Pölten", href: "/st-poelten" },
                    { name: "Klosterneuburg", href: "/klosterneuburg" },
                    { name: "Krems", href: "/krems" },
                    { name: "Baden bei Wien", href: "/baden-bei-wien" },
                  ].map((region) => (
                    <Link
                      key={region.name}
                      href={region.href}
                      className="bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors text-center"
                    >
                      📍 {region.name}
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zum Blindscheiben-Tausch
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Antworten auf die wichtigsten Kundenfragen
                </p>

                <div className="space-y-4">
                  {[
                    {
                      q: "Was bedeutet eine 'blinde Scheibe' genau?",
                      a: "Wenn die Randdichtung der Isolierglas-Einheit defekt ist, dringt Feuchtigkeit in den Scheibenzwischenraum. Das Edelgas entweicht, Wasserdampf kondensiert dauerhaft im Glas – die Scheibe wird milchig oder zeigt Tropfen, die nicht abwischbar sind.",
                    },
                    {
                      q: "Was kostet der Tausch einer Blindscheibe?",
                      a: "Eine Standard 2-fach Wärmeschutzscheibe bis 1 m² liegt bei 180–280 €, eine 3-fach Variante bei 240–360 € – jeweils inklusive Montage. Größere Formate, Schallschutzglas oder Sicherheitsglas kosten entsprechend mehr. Wir erstellen vorab immer einen schriftlichen Kostenvoranschlag.",
                    },
                    {
                      q: "Lohnt sich ein Upgrade von 2-fach auf 3-fach Verglasung?",
                      a: "In den meisten Fällen ja. Modernes 3-fach Wärmeschutzglas hat einen Ug-Wert von 0,5–0,7 W/m²K – im Vergleich zu alten Isoliergläsern (oft 2,8–3,0 W/m²K) bedeutet das bis zu 80 % geringere Wärmeverluste durch das Glas. Mehrkosten amortisieren sich oft in 5–8 Jahren.",
                    },
                    {
                      q: "Muss der ganze Fensterrahmen mit getauscht werden?",
                      a: "Nein – wenn der Rahmen technisch in Ordnung ist, tauschen wir nur die Glaseinheit. Das spart bis zu 70 % gegenüber einem Komplett-Fenstertausch und ist bei intakten Rahmen der wirtschaftlich klar bessere Weg.",
                    },
                    {
                      q: "Wie lange dauert der Tausch pro Fenster?",
                      a: "30–60 Minuten reine Arbeitszeit. Bei mehreren Fenstern an einem Tag erledigen wir 6–10 pro Techniker. Sie haben nur kurz ein offenes Fenster – wir arbeiten sauber und planen das Wetter mit ein.",
                    },
                    {
                      q: "Welche Glasvarianten bietet ihr an?",
                      a: "2-fach und 3-fach Wärmeschutzglas, Schallschutzglas (bis 50 dB), Sicherheitsglas (VSG/ESG), Sonnenschutzglas, Ornamentglas. Auf Wunsch kombinieren wir Eigenschaften – z. B. Schall + Wärmeschutz in einer Einheit.",
                    },
                    {
                      q: "Gibt es Förderungen?",
                      a: "Ja, bei energetischer Sanierung mit hochdämmender Verglasung sind in NÖ und Wien teilweise Sanierungsförderungen möglich. Wir liefern auf Wunsch alle nötigen Unterlagen und Bestätigungen für Ihren Antrag.",
                    },
                    {
                      q: "Wie lange ist die Lieferzeit?",
                      a: "Standard-Wärmeschutzgläser sind in der Regel innerhalb von 5–10 Werktagen verfügbar. Sondergläser (Schall, VSG, Großformate) brauchen meist 10–15 Werktage. In Akutfällen suchen wir Express-Lösungen.",
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

              {/* DIREKTER KONTAKT */}
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
                        Antwort in der Regel innerhalb von 2 Stunden
                      </p>
                    </div>
                  </a>
                </div>
              </section>

              {/* FINAL CTA */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Klare Sicht &amp; warme Räume statt blinder Scheiben
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Kostenloser Kostenvoranschlag, ehrliche Beratung,
                  fachgerechte Montage. Wir tauschen Ihre Glaseinheiten in ganz
                  Wien &amp; NÖ.
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

              {/* FOOTER NAV */}
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
