import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Velux Reparatur & Service Wien & NÖ | ROWO Fensterservice (2026)",
  description:
    "Velux Dachfenster undicht, klemmt oder beschlagen? Professionelle Velux Reparatur, Dichtungstausch & Wartung in Tulln, St. Pölten, Wien & ganz NÖ. Kostenloser Kostenvoranschlag.",
  keywords: [
    "Velux Reparatur",
    "Velux Service",
    "Dachfenster Reparatur",
    "Dichtungstausch Velux",
    "Velux undicht",
    "Velux klemmt",
    "Velux beschlagen",
    "Dachfenster Wartung",
    "Tulln",
    "St. Pölten",
    "Wien",
    "Niederösterreich",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Velux Reparatur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einfache Reparaturen wie Dichtungstausch oder Griffwechsel beginnen ab ca. 80–150 €. Glaseinheit tauschen kostet 200–450 €, Mechanik-Komplettreparatur 150–300 €. Wir erstellen vor Arbeitsbeginn immer einen kostenlosen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Velux Dachfenster beschlagen innen – was tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beschlag innen deutet auf einen defekten Isolierglasverbund hin – die Gasfüllung zwischen den Scheiben ist entwichen. Das lässt sich nicht reparieren, nur die Glaseinheit muss getauscht werden. Wir ersetzen diese schnell mit passenden Velux-Glaseinheiten.",
      },
    },
    {
      "@type": "Question",
      name: "Können alte Velux Fenster noch repariert werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja – Velux produziert Ersatzteile für fast alle Modelle bis zu 20 Jahre rückwirkend. Bei sehr alten Modellen (>25 Jahre) kann ein Austausch wirtschaftlicher sein. Wir prüfen dies ehrlich vor Ort und empfehlen die günstigste Lösung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie erkenne ich ob mein Velux Fenster undicht ist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typische Zeichen: Feuchtigkeitsflecken an der Decke oder am Rahmen, Zugluft bei geschlossenem Fenster, Kondenswasser auf dem Rahmen (nicht nur auf dem Glas). Ursache ist meist eine poröse Dichtung oder ein beschädigter Eindeckrahmen.",
      },
    },
    {
      "@type": "Question",
      name: "Bieten Sie auch Notdienst für defekte Velux Fenster an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Unser 24h-Notdienst ist in ganz Niederösterreich und Wien verfügbar. Bei akutem Wassereintritt durch ein defektes Dachfenster reagieren wir in der Regel innerhalb von 60 Minuten.",
      },
    },
  ],
};

const toc = [
  { id: "probleme", label: "Häufige Probleme" },
  { id: "leistungen", label: "Leistungen" },
  { id: "modelle", label: "Velux Modelle" },
  { id: "kosten", label: "Kosten" },
  { id: "reparieren-oder-tauschen", label: "Reparieren oder tauschen?" },
  { id: "ablauf", label: "Ablauf" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function VeluxReparaturPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Velux Spezialist", "Dachfenster", "24h Notdienst"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Velux Dachfenster Reparatur<br />
              <span className="text-blue-300">& Service in Wien & NÖ</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Undicht, klemmt, beschlagen? Unsere zertifizierten Techniker beheben jeden Velux-Defekt
              schnell und nachhaltig – mit Originalteilen, transparenten Preisen und Gewährleistung.
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

        {/* ── TRUST BAR ── */}
        <div className="bg-blue-700 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "✅ Zertifizierter Velux-Fachbetrieb",
              "⚡ Notdienst innerhalb 60 Min.",
              "🔧 Original Velux Ersatzteile",
              "📋 Kostenloser Kostenvoranschlag",
              "🛡️ Gewährleistung auf alle Arbeiten",
            ].map((item) => (
              <span key={item} className="text-blue-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* ── SIDEBAR TOC ── */}
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
                      🔧 Jetzt Profi anfragen
                    </Link>
                    <a
                      href="tel:+436644351622"
                      className="block w-full text-center mt-2 border border-blue-200 text-blue-700 hover:bg-blue-50 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>

                {/* Sidebar image */}
                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/fensterwartung_noe_1_1777634247124.png"
                    alt="Wartung und Reparatur von Velux-Dachflächenfenstern durch Fachbetrieb"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <article className="flex-1 min-w-0">

              {/* Hero images */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl overflow-hidden shadow-md col-span-2 sm:col-span-1">
                  <Image
                    src="/Images/glasreparatur_2_1777634339908.png"
                    alt="Tausch der verwitterten Dichtung an einem Dachfenster für 100% Regenschutz"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/fensterwartung_noe_1_1777634247124.png"
                    alt="Wartung und Reparatur von Velux-Dachflächenfenstern durch Fachbetrieb"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              {/* Intro */}
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Velux Dachfenster sind robust und langlebig – aber auch sie verschleißen. Dichtungen werden porös,
                Mechaniken schwergängig, Glasscheiben beschlagen von innen. Als spezialisierter Fachbetrieb für
                Velux in <strong>Tulln, St. Pölten, Wien und ganz Niederösterreich</strong> kennen unsere Techniker
                jedes Modell und jeden Defekt.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir reparieren schnell, verwenden ausschließlich Originalteile oder freigegebene Alternativen,
                und geben Gewährleistung auf alle Arbeiten. Kein Problem ist uns zu klein – und kein Notfall zu dringend.
              </p>

              {/* ── HÄUFIGE PROBLEME ── */}
              <section id="probleme" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Probleme & Ursachen
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Die häufigsten Defekte bei Velux Dachfenstern im Überblick
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💧",
                      title: "Undicht – Wasser dringt ein",
                      color: "blue",
                      problem:
                        "Feuchtigkeitsflecken am Rahmen, an der Decke oder auf dem Fensterbrett nach Regen.",
                      cause:
                        "Poröse Dichtung, gealterter Eindeckrahmen, Risse in der Verglasung oder undichte Anschlüsse am Dach.",
                      solution:
                        "Leckage exakt lokalisieren, Dichtungen tauschen, Eindeckrahmen prüfen – bei Bedarf erneuern.",
                    },
                    {
                      icon: "🥶",
                      title: "Zugluft bei geschlossenem Fenster",
                      color: "orange",
                      problem:
                        "Kalte Luft strömt ins Zimmer, obwohl das Fenster geschlossen ist. Oft spürbar an der Decke.",
                      cause:
                        "Verschlissene Umlaufdichtung, Rahmen hat sich verzogen oder Schließmechanismus greift nicht mehr satt.",
                      solution:
                        "Dichtung tauschen, Rahmen justieren, Schlossriegel nachstellen – oft in einem Termin erledigt.",
                    },
                    {
                      icon: "🌫️",
                      title: "Scheibe beschlagen innen",
                      color: "purple",
                      problem:
                        "Dauerhafte Beschlag zwischen den Scheiben, der sich nicht abwischen lässt.",
                      cause:
                        "Defekter Isolierglasverbund – die Gasfüllung ist entwichen, Taupunkt liegt nun innerhalb des Glases.",
                      solution:
                        "Nur Glasaustausch hilft. Wir ersetzen die Glaseinheit passgenau mit Velux-Original.",
                    },
                    {
                      icon: "⚙️",
                      title: "Fenster klemmt oder lässt sich nicht öffnen",
                      color: "red",
                      problem:
                        "Kurbel dreht leer, Griff lässt sich nicht umlegen oder Flügel ist schief.",
                      cause:
                        "Harz-Ablagerungen, verschlissene Scharniere, defekter Griff oder verbogener Rahmen.",
                      solution:
                        "Mechanik reinigen, Scharniere ölen, Griff ersetzen – je nach Ursache in 30–90 Minuten behoben.",
                    },
                    {
                      icon: "🔒",
                      title: "Defekter Griff oder Schloss",
                      color: "slate",
                      problem:
                        "Griff dreht leer, rastet nicht ein oder lässt sich nicht mehr schließen.",
                      cause:
                        "Mechanischer Verschleiß – besonders bei Fenstern >10 Jahre Nutzung.",
                      solution:
                        "Griffgarnitur oder Schloss ersetzen – günstige Reparatur mit sofortiger Wirkung.",
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
                          <p className="text-xs font-bold uppercase text-red-600 mb-1">Problem</p>
                          <p className="text-slate-700">{item.problem}</p>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-orange-600 mb-1">Ursache</p>
                          <p className="text-slate-700">{item.cause}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-green-600 mb-1">Lösung</p>
                          <p className="text-slate-700">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── LEISTUNGEN ── */}
              <section id="leistungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Leistungen im Überblick
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom Einzelteil bis zur Komplettwartung
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Leistung</th>
                        <th className="text-left px-5 py-4 font-semibold">Was wir tun</th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Ihr Vorteil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          service: "Analyse & Diagnose",
                          desc: "Sorgfältige Prüfung aller Komponenten vor Ort – Dichtung, Mechanik, Glas, Rahmen",
                          benefit: "Transparenter KV vor Arbeitsbeginn, keine versteckten Kosten",
                          bg: "bg-white",
                        },
                        {
                          service: "Dichtungstausch",
                          desc: "Umlaufdichtungen & Eindeckrahmen-Dichtungen mit Velux-Original ersetzen",
                          benefit: "Stoppt Zugluft & Wassereintritt, spart Heizkosten",
                          bg: "bg-slate-50",
                        },
                        {
                          service: "Glasaustausch",
                          desc: "Defekte Isolierglaseinheit durch passgenaue Velux-Glaseinheit ersetzen",
                          benefit: "Klare Sicht, volle Wärmedämmung wiederhergestellt",
                          bg: "bg-white",
                        },
                        {
                          service: "Mechanik-Service",
                          desc: "Scharniere, Schlösser und Griffe reinigen, ölen, justieren oder ersetzen",
                          benefit: "Leichtgängige Bedienung, kein Klemmen mehr",
                          bg: "bg-slate-50",
                        },
                        {
                          service: "Eindeckrahmen-Erneuerung",
                          desc: "Schadhafte Eindeckrahmen rund ums Fenster abdichten oder ersetzen",
                          benefit: "Dauerhafter Schutz vor Wassereintritt",
                          bg: "bg-white",
                        },
                        {
                          service: "Komplett-Wartung",
                          desc: "Alle Punkte in einem Termin – ideal einmal jährlich",
                          benefit: "Maximaler Werterhalt, verhindert teure Folgeschäden",
                          bg: "bg-slate-50",
                        },
                      ].map((row) => (
                        <tr key={row.service} className={row.bg}>
                          <td className="px-5 py-3 font-semibold text-slate-800">{row.service}</td>
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

              {/* ── VELUX MODELLE ── */}
              <section id="modelle" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Velux Modelle & Baujahre
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Wir kennen jede Generation – alt oder neu
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      model: "GGL / GGU",
                      desc: "Klapp-Dachfenster mit Mittelachse – das klassische Velux Modell. Häufigstes Modell in Österreich.",
                    },
                    {
                      model: "GPL / GPU",
                      desc: "Schwingfenster mit untenliegender Achse – oft in Altbauten und bei niedrigen Kniestöcken.",
                    },
                    {
                      model: "VKU / VKL",
                      desc: "Flachdachfenster / Lichtschacht-Systeme – spezielle Dichtungsanforderungen.",
                    },
                    {
                      model: "FCM / FCP",
                      desc: "Fest verglaste Dachfenster – kein Öffnen möglich, Glasaustausch und Dichtungen.",
                    },
                    {
                      model: "INTEGRA® (elektrisch)",
                      desc: "Elektrische und solar-betriebene Modelle – Motordiagnose, Steuerungsreset, Sensorwartung.",
                    },
                    {
                      model: "CABRIO® / CURVED",
                      desc: "Ausstiegsfenster und Sonderformen – Spezialmontage und -dichtungen erforderlich.",
                    },
                  ].map((item) => (
                    <div
                      key={item.model}
                      className="bg-blue-50 border border-blue-100 rounded-2xl p-5"
                    >
                      <p className="font-bold text-blue-800 mb-1">{item.model}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700">
                  <strong>Alte Modelle:</strong> Velux hält Ersatzteile für die meisten Modelle bis zu 20 Jahre
                  vor. Auch für ältere Fenster der Serien vor 2005 haben wir in der Regel die passenden Teile
                  oder besorgen sie kurzfristig. Wir sagen Ihnen ehrlich, ob eine Reparatur noch sinnvoll ist.
                </div>
              </section>

              {/* ── KOSTEN ── */}
              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Was kostet eine Velux Reparatur?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Kostenübersicht für Österreich (2026)
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Reparatur</th>
                        <th className="text-left px-5 py-4 font-semibold">Aufwand</th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Kosten ca.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Diagnose & Inspektion", effort: "30–60 Min.", cost: "kostenlos*", bg: "bg-white" },
                        { type: "Griffwechsel", effort: "15–30 Min.", cost: "50–120 €", bg: "bg-slate-50" },
                        { type: "Dichtungstausch (ein Fenster)", effort: "1–2 Std.", cost: "80–180 €", bg: "bg-white" },
                        { type: "Mechanik-Service / Schmierung", effort: "30–60 Min.", cost: "80–150 €", bg: "bg-slate-50" },
                        { type: "Scharniere ersetzen", effort: "1–2 Std.", cost: "120–220 €", bg: "bg-white" },
                        { type: "Glasaustausch (Isolierglas)", effort: "1–3 Std.", cost: "200–450 €", bg: "bg-slate-50" },
                        { type: "Eindeckrahmen erneuern", effort: "2–4 Std.", cost: "250–500 €", bg: "bg-white" },
                        { type: "Komplett-Wartung", effort: "1,5–3 Std.", cost: "150–280 €", bg: "bg-slate-50" },
                      ].map((row) => (
                        <tr key={row.type} className={row.bg}>
                          <td className="px-5 py-3 font-medium text-slate-800">{row.type}</td>
                          <td className="px-5 py-3 text-slate-600">{row.effort}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  * Diagnose ist kostenlos bei anschließender Beauftragung. Preise inkl. Material, ohne Notdienst-Zuschlag.
                  Für ein verbindliches Angebot einfach anfragen – wir kommen vor Ort.
                </p>
              </section>

              {/* ── REPARIEREN ODER TAUSCHEN ── */}
              <section id="reparieren-oder-tauschen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Reparieren oder komplett tauschen?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Unsere ehrliche Entscheidungshilfe
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                      <span className="text-xl">🔧</span> Reparatur lohnt sich
                    </h3>
                    <ul className="space-y-3 text-sm text-green-800">
                      {[
                        "Fenster ist jünger als 20 Jahre",
                        "Rahmen und Eindeckrahmen sind intakt",
                        "Nur einzelne Komponenten defekt (Dichtung, Glas, Griff)",
                        "Reparaturkosten unter 50% des Neupreises",
                        "Velux Ersatzteile noch verfügbar",
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                      <span className="text-xl">🔄</span> Austausch überlegen
                    </h3>
                    <ul className="space-y-3 text-sm text-orange-800">
                      {[
                        "Fenster ist älter als 25 Jahre",
                        "Rahmen oder Eindeckrahmen stark beschädigt",
                        "Mehrere Defekte gleichzeitig",
                        "Keine Ersatzteile mehr verfügbar",
                        "Energieklasse deutlich veraltet (hohe Heizkosten)",
                      ].map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex-shrink-0 text-orange-500 mt-0.5">→</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-800">
                  <strong>Unser Versprechen:</strong> Wir empfehlen nur, was für Sie wirtschaftlich sinnvoll ist.
                  Wenn eine Reparatur nicht mehr lohnt, sagen wir das klar – und helfen Ihnen beim Austausch.
                </div>
              </section>

              {/* ── ABLAUF ── */}
              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft ein Serviceeinsatz ab
                </h2>
                <p className="text-slate-500 text-sm mb-6">Vom Anruf bis zur fertigen Reparatur</p>

                <div className="relative">
                  {/* connecting line */}
                  <div className="hidden md:block absolute left-7 top-10 bottom-10 w-0.5 bg-slate-200 z-0" />

                  <div className="space-y-5">
                    {[
                      {
                        step: "1",
                        title: "Kontakt aufnehmen",
                        text: "Rufen Sie uns an oder nutzen Sie das Kontaktformular. Beschreiben Sie kurz das Problem – Fotos per WhatsApp helfen bei der ersten Einschätzung.",
                      },
                      {
                        step: "2",
                        title: "Kostenloser Kostenvoranschlag",
                        text: "Wir besichtigen Ihr Fenster vor Ort und erstellen einen transparenten KV. Kein versteckter Diagnose-Aufpreis bei Auftragserteilung.",
                      },
                      {
                        step: "3",
                        title: "Terminvereinbarung",
                        text: "Wir vereinbaren einen Wunschtermin – auch kurzfristig. Bei Notfällen reagieren wir in der Regel innerhalb von 60 Minuten.",
                      },
                      {
                        step: "4",
                        title: "Fachgerechte Reparatur",
                        text: "Unser Techniker kommt ausgerüstet mit den gängigen Velux-Ersatzteilen. Die meisten Reparaturen sind in einem Termin abgeschlossen.",
                      },
                      {
                        step: "5",
                        title: "Abnahme & Gewährleistung",
                        text: "Wir testen die Funktion gemeinsam mit Ihnen. Auf alle Arbeiten geben wir Gewährleistung – schriftlich.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-5 relative z-10">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow">
                          {item.step}
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex-1">
                          <p className="font-bold text-slate-800 mb-1">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── CTA MID ── */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Bereit für klare Sicht?</p>
                  <p className="text-blue-200 text-sm mt-1">
                    Kostenloser Kostenvoranschlag – kein Risiko, keine Überraschungen
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Jetzt anfragen →
                </Link>
              </div>

              {/* ── REGIONEN ── */}
              <section id="regionen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unser Servicegebiet
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Wir kommen zu Ihnen – in ganz NÖ & Wien
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Wien & Umgebung", href: "/wien" },
                    { name: "Tulln", href: "/tulln" },
                    { name: "St. Pölten", href: "/st-poelten" },
                    { name: "Klosterneuburg", href: "/klosterneuburg" },
                    { name: "Krems", href: "/krems" },
                    { name: "Baden bei Wien", href: "/baden" },
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
                <p className="text-sm text-slate-500 mt-4">
                  Sie sind nicht dabei? Kontaktieren Sie uns trotzdem – wir fahren auch in angrenzende Gebiete.
                </p>
              </section>

              {/* ── FAQ ── */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zur Velux Reparatur
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Die meistgestellten Fragen unserer Kunden
                </p>

                <div className="space-y-4">
                  {[
                    {
                      q: "Was kostet eine Velux Reparatur?",
                      a: "Einfache Reparaturen wie Griffwechsel oder Dichtungstausch beginnen ab ca. 80–150 €. Eine Glaseinheit kostet 200–450 €, die Komplett-Wartung 150–280 €. Wir erstellen immer zuerst einen kostenlosen Kostenvoranschlag vor Ort – ohne Überraschungen.",
                    },
                    {
                      q: "Mein Velux Dachfenster beschlägt innen – was tun?",
                      a: "Beschlag zwischen den Scheiben bedeutet, dass die Gasfüllung des Isolierglasverbunds entwichen ist. Das lässt sich nicht reparieren – die Glaseinheit muss getauscht werden. Wir ersetzen diese mit passenden Velux-Glaseinheiten, oft am selben Tag.",
                    },
                    {
                      q: "Kann ich ein altes Velux Fenster noch reparieren?",
                      a: "Ja – Velux produziert Ersatzteile für die meisten Modelle bis zu 20 Jahre rückwirkend. Bei Fenstern über 25 Jahren prüfen wir ehrlich, ob Reparatur oder Austausch wirtschaftlicher ist. Bei alten Serien haben wir oft noch Lagerware passender Teile.",
                    },
                    {
                      q: "Bieten Sie auch Notdienst für Velux Fenster an?",
                      a: "Ja. Unser 24h-Notdienst ist in ganz NÖ und Wien verfügbar. Bei akutem Wassereintritt reagieren wir in der Regel innerhalb von 60 Minuten. Rufen Sie einfach an: +43 664 435 1622.",
                    },
                    {
                      q: "Wie erkenne ich ob mein Velux Fenster undicht ist?",
                      a: "Typische Zeichen: Feuchtigkeitsflecken am Holzrahmen oder der Decke nach Regen, Zugluft bei geschlossenem Fenster, Kondenswasser auf dem Rahmen (nicht auf der Scheibe). Ursache ist meist die Umlaufdichtung oder der Eindeckrahmen.",
                    },
                    {
                      q: "Haben Sie Angebote für Hausverwaltungen?",
                      a: "Ja – für Hausverwaltungen und Immobilieneigentümer bieten wir Servicepakete mit priorisierten Terminen, einem persönlichen Ansprechpartner und Mengenrabatten. Sprechen Sie uns an.",
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

              {/* ── DIREKTER KONTAKT ── */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Direkter Kontakt</h2>
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
                      <p className="text-sm text-slate-500">Mo–Do 8–17 Uhr · Fr 8–12 Uhr · 24h Notdienst</p>
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
                      <p className="font-bold text-slate-800">info@fensterservice-rowo.at</p>
                      <p className="text-sm text-slate-500">Antwort in der Regel innerhalb von 2 Stunden</p>
                    </div>
                  </a>
                </div>
              </section>

              {/* ── FINAL CTA ── */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Probleme mit Ihrem Velux Dachfenster?
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Kostenloser Kostenvoranschlag, Original-Ersatzteile, Gewährleistung auf alle Arbeiten.
                  Wir sind in ganz NÖ & Wien für Sie da.
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

              {/* ── FOOTER NAV ── */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <span>© 2026 Fenster Service Rowo</span>
                <nav className="flex gap-6">
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Startseite
                  </Link>
                  <Link href="/blog" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                  <Link href="/kontakt" className="hover:text-blue-600 transition-colors">
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
