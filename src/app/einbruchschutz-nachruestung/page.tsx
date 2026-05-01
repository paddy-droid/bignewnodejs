import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Einbruchschutz-Nachrüstung Fenster Wien & NÖ | Pilzkopfverriegelung & Sicherheit",
  description:
    "Einbruchschutz für Fenster nachrüsten in Tulln, Wien & ganz Niederösterreich: Pilzkopfverriegelungen, abschließbare Griffe, Sicherheitsfolien und einbruchhemmende Beschläge nach RC2. Geprüfte Sicherheit, schnelle Montage, kostenloses Beratungsgespräch.",
  keywords: [
    "Einbruchschutz Fenster",
    "Einbruchschutz nachrüsten",
    "Pilzkopfverriegelung",
    "abschließbare Fenstergriffe",
    "Sicherheitsfolie Fenster",
    "Sicherheitsbeschläge",
    "Fenster sichern",
    "RC2 Sicherheit",
    "einbruchhemmend",
    "Tulln",
    "Wien",
    "Niederösterreich",
  ],
  alternates: {
    canonical:
      "https://www.fensterservice-rowo.at/einbruchschutz-nachruestung",
  },
  openGraph: {
    title:
      "Einbruchschutz für Fenster nachrüsten | ROWO Fensterservice",
    description:
      "Pilzkopfverriegelungen, abschließbare Griffe & Sicherheitsfolien – professionelle Nachrüstung in Wien & NÖ.",
    url: "https://www.fensterservice-rowo.at/einbruchschutz-nachruestung",
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
      name: "Wie lange dauert ein Fenster-Einbruch typischerweise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein durchschnittlicher Einbrecher gibt nach ca. 3–5 Minuten erfolglosen Aufhebelversuchen auf. Ungesicherte Fenster mit Standardbeschlägen lassen sich oft in unter 60 Sekunden öffnen. Mit Pilzkopfverriegelungen, Sicherheitsbeschlägen und abschließbaren Griffen verlängert sich die Aufhebelzeit auf weit über 5 Minuten – die meisten Täter geben dann auf.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet die Einbruchschutz-Nachrüstung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine einfache Nachrüstung mit Pilzkopfverriegelungen und einem abschließbaren Griff pro Fenster liegt zwischen 120 € und 250 € je Fenster (inkl. Material und Montage). Komplettpakete RC2-konform mit Sicherheitsfolie kosten 350–550 € pro Fenster. Wir erstellen vorab immer einen kostenlosen Kostenvoranschlag.",
      },
    },
    {
      "@type": "Question",
      name: "Kann jedes Fenster nachgerüstet werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, in den meisten Fällen. Pilzkopfverriegelungen lassen sich an fast allen modernen Beschlagsystemen (Roto, Maco, Siegenia, GU) nachrüsten. Bei sehr alten oder einfachen Beschlägen muss ggf. der gesamte Beschlag getauscht werden – das prüfen wir vor Ort.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Förderungen für Einbruchschutz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. In Wien und mehreren NÖ-Gemeinden existieren Förderprogramme für Einbruchschutz-Maßnahmen, oft 25–50 % der Investitionssumme. Auch die KFV (Kuratorium für Verkehrssicherheit) und einzelne Bezirkshauptmannschaften bezuschussen Nachrüstungen. Wir liefern alle nötigen Bestätigungen für Ihren Antrag.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Schutzklasse ist sinnvoll für Privathaushalte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Einfamilienhäuser und Wohnungen empfiehlt die Polizei und die ÖNORM B 5338 mindestens Klasse RC2. Diese widersteht standardisierten Aufhebelversuchen mit einfachem Werkzeug für mindestens 3 Minuten. Bei besonders gefährdeten Objekten (Erdgeschoss, abgelegene Lagen) ist RC2N oder RC3 sinnvoll.",
      },
    },
    {
      "@type": "Question",
      name: "Wirkt eine Sicherheitsfolie wirklich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja – eine professionell verklebte Sicherheitsfolie (mind. 100 µm, durchgängig auf den Rahmen verklebt) verhindert das saubere Durchschlagen der Scheibe. Die Scheibe zerbricht zwar, hält aber zusammen wie eine Verbundfolie. Das verzögert den Einbruch deutlich – und kombiniert mit Pilzkopfverriegelungen ist der Hebelschutz nahezu komplett.",
      },
    },
  ],
};

const toc = [
  { id: "warum", label: "Warum nachrüsten?" },
  { id: "schwachstellen", label: "Schwachstellen am Fenster" },
  { id: "loesungen", label: "Unsere Sicherheitslösungen" },
  { id: "klassen", label: "Schutzklassen RC1–RC3" },
  { id: "kosten", label: "Kosten & Förderung" },
  { id: "ablauf", label: "Ablauf der Nachrüstung" },
  { id: "regionen", label: "Regionen" },
  { id: "faq", label: "FAQ" },
];

export default function EinbruchschutzNachruestungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        {/* HERO */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white pt-28 pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Pilzkopfverriegelung", "RC2 zertifiziert", "Geprüfter Fachbetrieb"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Einbruchschutz-Nachrüstung<br />
              <span className="text-amber-300">
                für Ihre Fenster in Wien &amp; NÖ
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Pilzkopfverriegelungen, abschließbare Griffe, Sicherheitsfolien
              und einbruchhemmende Beschläge: Wir machen Ihre Fenster zur echten
              Hürde für Einbrecher – professionell, RC2-konform, in einem Termin.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                Kostenlose Sicherheitsberatung →
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
        <div className="bg-slate-900 text-white py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
            {[
              "🛡️ RC2-konforme Nachrüstung",
              "🔒 Original Roto / Maco / Siegenia Beschläge",
              "👮 Empfohlen vom KFV & der Kriminalpolizei",
              "📋 Kostenloser Vor-Ort-Check",
              "✅ 5 Jahre Gewährleistung",
            ].map((item) => (
              <span key={item} className="text-slate-200">
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
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <Link
                      href="/kontakt"
                      className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      🛡️ Sicherheitscheck anfragen
                    </Link>
                    <a
                      href="tel:+436644351622"
                      className="block w-full text-center mt-2 border border-amber-200 text-amber-700 hover:bg-amber-50 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                    >
                      📞 +43 664 435 1622
                    </a>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/sicherheitsbeschlag-detail.png"
                    alt="Sicherheitsbeschlag Pilzkopfverriegelung Detail"
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
                    src="/Images/einbruchschutz-sicherheit.png"
                    alt="Einbruchschutz Nachrüstung Fenster Sicherheit"
                    width={600}
                    height={350}
                    className="w-full object-cover h-52 sm:h-64"
                    priority
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md hidden sm:block">
                  <Image
                    src="/Images/sicherheitsbeschlag-detail.png"
                    alt="Pilzkopfverriegelung und Sicherheitsbeschlag"
                    width={600}
                    height={350}
                    className="w-full object-cover h-64"
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Über <strong>80 % aller Einbrüche in Privathäusern</strong> erfolgen
                über Fenster oder Balkontüren – meist innerhalb von Sekunden mit einem
                einfachen Schraubenzieher. Der Grund: Standardbeschläge halten dem
                gezielten Aufhebeln kaum stand. Die gute Nachricht: Mit
                <strong> Einbruchschutz-Nachrüstung</strong> machen Sie Ihre Fenster zur
                echten Festung – ohne neue Fenster kaufen zu müssen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Wir sind Ihr <strong>geprüfter Fachbetrieb für Einbruchschutz in Wien,
                Tulln, St. Pölten und ganz Niederösterreich</strong>. Pilzkopfverriegelungen,
                abschließbare Griffe, Sicherheitsfolien und kompletter RC2-Ausbau – alles aus
                einer Hand, sauber montiert, mit Gewährleistung.
              </p>

              {/* WARUM */}
              <section id="warum" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Warum überhaupt nachrüsten?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Drei Fakten, die jeden Hausbesitzer betreffen
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "⏱️",
                      stat: "< 60 Sek.",
                      text: "Reicht oft, um ein Standardfenster aufzuhebeln. Mit Sicherheitsbeschlägen werden daraus 3–5+ Minuten – die meisten Täter geben dann auf.",
                    },
                    {
                      icon: "📊",
                      stat: "80 %",
                      text: "Der Einbrüche erfolgen über Fenster oder Balkontür – nicht über die Haustür. Genau hier ist Sicherheit am wirksamsten.",
                    },
                    {
                      icon: "💶",
                      stat: "Förderungen",
                      text: "In Wien und NÖ gibt es teils 25–50 % Zuschuss für Einbruchschutz. Wir liefern Bestätigung & Unterlagen für den Antrag.",
                    },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className="bg-amber-50 border border-amber-200 rounded-2xl p-5"
                    >
                      <p className="text-3xl mb-1">{item.icon}</p>
                      <p className="text-2xl font-extrabold text-slate-900 mb-2">
                        {item.stat}
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-slate-900 text-white rounded-2xl p-6 flex items-start gap-4">
                  <ShieldCheck className="w-10 h-10 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Sicherheit fängt nicht beim Alarm an – sondern am Fenster.
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Ein Alarm meldet einen laufenden Einbruch. Mechanischer
                      Einbruchschutz <em>verhindert</em> ihn von vornherein. Beides
                      kombiniert ist optimal – aber Mechanik ist die Basis.
                    </p>
                  </div>
                </div>
              </section>

              {/* SCHWACHSTELLEN */}
              <section id="schwachstellen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Typische Schwachstellen am Fenster
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Hier setzen Einbrecher an – und genau hier setzen wir Sicherheit ein
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "🔓",
                      title: "Standard-Rollzapfen am Beschlag",
                      problem:
                        "Einfache Rollzapfen lassen sich mit Schraubenzieher in unter einer Minute aushebeln.",
                      solution:
                        "Tausch gegen Pilzkopfzapfen – greifen formschlüssig in gehärtete Schließbleche.",
                    },
                    {
                      icon: "🔧",
                      title: "Fenstergriff ohne Verriegelung",
                      problem:
                        "Standardgriff lässt sich nach Glasdurchbohrung von außen einfach umlegen.",
                      solution:
                        "Abschließbarer Griff mit Schloss – Glas durchbohren bringt nichts mehr.",
                    },
                    {
                      icon: "💥",
                      title: "Glas ohne Splitterschutz",
                      problem:
                        "Klassisches Isolierglas ist mit Schraubenzieher in 5 Sekunden durchstoßbar.",
                      solution:
                        "Sicherheitsfolie auf Innenseite oder Verbundsicherheitsglas (VSG) – hält zusammen.",
                    },
                    {
                      icon: "🚪",
                      title: "Schwache Schließbleche im Rahmen",
                      problem:
                        "Kunststoff- oder dünne Stahlbleche brechen unter Hebelkraft.",
                      solution:
                        "Massive, gehärtete Sicherheits-Schließbleche, im Mauerwerk verankert.",
                    },
                    {
                      icon: "📐",
                      title: "Bandseite (Scharnierseite)",
                      problem:
                        "Auf der Scharnierseite kann das Fenster aus der Verankerung gehebelt werden.",
                      solution:
                        "Aushebelsicherungen (Bandseiten-Sicherung) zusätzlich montieren.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-base">
                        <span className="text-xl">{item.icon}</span> {item.title}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="bg-red-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-red-600 mb-1">
                            Schwachstelle
                          </p>
                          <p className="text-slate-700">{item.problem}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3">
                          <p className="text-xs font-bold uppercase text-green-600 mb-1">
                            Unsere Lösung
                          </p>
                          <p className="text-slate-700">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* LÖSUNGEN */}
              <section id="loesungen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unsere Sicherheitslösungen im Detail
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Vom einfachen Upgrade bis zum kompletten RC2-Paket
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Pilzkopfverriegelungen",
                      desc: "Tausch der Rollzapfen gegen Pilzkopfzapfen – diese verhaken sich formschlüssig in gehärteten Schließblechen. Das wirksamste mechanische Element gegen Aufhebeln.",
                      level: "RC1 → RC2",
                    },
                    {
                      title: "Abschließbare Fenstergriffe",
                      desc: "Griff lässt sich nur mit Schlüssel oder Code umlegen. Verhindert das Öffnen nach Glasdurchbohrung – einer der häufigsten Einbruchstricks.",
                      level: "Pflicht für RC2",
                    },
                    {
                      title: "Sicherheits-Schließbleche",
                      desc: "Massive, durchgehärtete Stahlbleche, fest im Mauerwerk verschraubt. Halten Hebelkräften stand, wo Standardbleche brechen.",
                      level: "RC1 → RC2",
                    },
                    {
                      title: "Sicherheitsfolie / VSG",
                      desc: "Transparente Folie auf Innenseite (mind. 100 µm) oder Tausch gegen Verbundsicherheitsglas. Glas zerbricht zwar, hält aber zusammen – Durchgriff unmöglich.",
                      level: "Splitter- & Durchstoßschutz",
                    },
                    {
                      title: "Bandseiten-Sicherung",
                      desc: "Zusatzbolzen auf der Scharnierseite. Verhindert das Aushebeln des kompletten Flügels.",
                      level: "Schutz gegen Aushebeln",
                    },
                    {
                      title: "Komplettpaket RC2",
                      desc: "Alle Komponenten kombiniert: Pilzkopf, abschließbarer Griff, Sicherheitsbleche, ggf. VSG. Geprüft und zertifiziert nach ÖNORM B 5338.",
                      level: "Höchste Privathaushalt-Stufe",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white border-2 border-amber-200 rounded-2xl p-6 hover:border-amber-400 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-bold text-slate-900 text-lg">
                          {item.title}
                        </p>
                        <span className="text-xs font-bold uppercase text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SCHUTZKLASSEN */}
              <section id="klassen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Schutzklassen RC1 bis RC3 – was bedeutet das?
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Einordnung nach ÖNORM B 5338 / EN 1627
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">
                          Klasse
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Schutz gegen
                        </th>
                        <th className="text-left px-5 py-4 font-semibold">
                          Widerstandszeit
                        </th>
                        <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">
                          Empfohlen für
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          c: "RC1N",
                          against: "Körperliche Gewalt (Treten, Schulter)",
                          time: "—",
                          for: "Obergeschosse, schwer erreichbare Fenster",
                          bg: "bg-white",
                        },
                        {
                          c: "RC2",
                          against:
                            "Schraubendreher, Zange, Keil – Gelegenheitstäter",
                          time: "ca. 3 Min.",
                          for: "Standard für Wohnungen, Einfamilienhäuser",
                          bg: "bg-amber-50",
                        },
                        {
                          c: "RC2N",
                          against:
                            "Wie RC2, aber ohne einbruchhemmendes Glas",
                          time: "ca. 3 Min.",
                          for: "Kombination mit Sicherheitsfolie nachträglich",
                          bg: "bg-white",
                        },
                        {
                          c: "RC3",
                          against:
                            "Mehrere Werkzeuge, gezielter Tätertyp",
                          time: "ca. 5 Min.",
                          for: "Erdgeschoss, alleinstehende Häuser, hohe Wertobjekte",
                          bg: "bg-amber-50",
                        },
                      ].map((row) => (
                        <tr key={row.c} className={row.bg}>
                          <td className="px-5 py-3 font-bold text-slate-900">
                            {row.c}
                          </td>
                          <td className="px-5 py-3 text-slate-600">
                            {row.against}
                          </td>
                          <td className="px-5 py-3 font-semibold text-amber-700">
                            {row.time}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row.for}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900">
                  <strong>Empfehlung der Polizei &amp; KFV:</strong> Für
                  Privathaushalte ist <strong>RC2</strong> der sinnvolle Standard.
                  Beim Erdgeschoss oder freistehenden Häusern in ruhiger Lage
                  empfiehlt sich RC2N mit Sicherheitsfolie oder gleich RC3.
                </div>
              </section>

              {/* KOSTEN */}
              <section id="kosten" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Kosten der Einbruchschutz-Nachrüstung
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Realistische Preise für Österreich (2026) – inkl. Material &amp; Montage
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
                        {
                          type: "Abschließbarer Griff (1 Stk.)",
                          effort: "10 Min.",
                          cost: "35 – 65 €",
                          bg: "bg-white",
                        },
                        {
                          type: "Pilzkopfverriegelung (Beschlag-Upgrade)",
                          effort: "30 – 45 Min.",
                          cost: "85 – 160 €",
                          bg: "bg-slate-50",
                        },
                        {
                          type: "Sicherheits-Schließbleche",
                          effort: "20 – 30 Min.",
                          cost: "40 – 80 €",
                          bg: "bg-white",
                        },
                        {
                          type: "Sicherheitsfolie (Standardfenster)",
                          effort: "30 – 60 Min.",
                          cost: "120 – 220 €",
                          bg: "bg-slate-50",
                        },
                        {
                          type: "Komplettpaket Basis (Griff + Pilzkopf)",
                          effort: "ca. 1 Std.",
                          cost: "120 – 250 €",
                          bg: "bg-white",
                        },
                        {
                          type: "Komplettpaket RC2-konform",
                          effort: "1,5 – 2 Std.",
                          cost: "350 – 550 €",
                          bg: "bg-slate-50",
                        },
                        {
                          type: "Komplettpaket RC2 + Sicherheitsfolie",
                          effort: "2 – 3 Std.",
                          cost: "480 – 720 €",
                          bg: "bg-white",
                        },
                      ].map((row, i) => (
                        <tr key={i} className={row.bg}>
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {row.type}
                          </td>
                          <td className="px-5 py-3 text-slate-600">
                            {row.effort}
                          </td>
                          <td className="px-5 py-3 font-semibold text-amber-700">
                            {row.cost}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Preise inkl. Material und Montage, ohne Anfahrt im Servicegebiet.
                  Bei mehreren Fenstern: deutliche Mengenrabatte.
                </p>

                <div className="mt-5 bg-green-50 border border-green-200 rounded-2xl p-5 text-sm text-green-900">
                  <strong>Förderungen 2026:</strong> Wien &amp; einige NÖ-Gemeinden
                  bezuschussen Einbruchschutz-Maßnahmen mit bis zu 50 % der
                  Investitionssumme. Wir stellen alle nötigen Bestätigungen bereit
                  und beraten zu den passenden Programmen.
                </div>
              </section>

              {/* ABLAUF */}
              <section id="ablauf" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  So läuft die Nachrüstung ab
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  In wenigen Schritten zum sicheren Zuhause
                </p>

                <div className="relative">
                  <div className="hidden md:block absolute left-7 top-10 bottom-10 w-0.5 bg-slate-200 z-0" />

                  <div className="space-y-5">
                    {[
                      {
                        step: "1",
                        title: "Sicherheits-Check vor Ort",
                        text: "Wir analysieren Ihre Fenster: Beschlagsystem, Glasart, Lage, Risikofaktoren. Sie bekommen eine ehrliche Einschätzung – ohne Verkaufsdruck.",
                      },
                      {
                        step: "2",
                        title: "Maßnahmenpaket & Angebot",
                        text: "Sie erhalten einen detaillierten KV mit Schutzklasse-Empfehlung. Mehrere Varianten möglich (Basis, RC2, RC2 + Folie).",
                      },
                      {
                        step: "3",
                        title: "Förderantrag prüfen",
                        text: "Auf Wunsch prüfen wir vor Auftragsbestätigung, welche Förderungen möglich sind, und liefern alle Unterlagen vor.",
                      },
                      {
                        step: "4",
                        title: "Materialbestellung",
                        text: "Originalbeschläge (Roto, Maco, Siegenia, GU), passend zu Ihrem Fenstersystem. Lieferzeit meist 5–10 Werktage.",
                      },
                      {
                        step: "5",
                        title: "Saubere Montage",
                        text: "Pro Fenster ca. 30–90 Minuten – je nach Paket. Saubere Arbeit, alle Maßnahmen werden nach Abschluss gemeinsam mit Ihnen abgenommen.",
                      },
                      {
                        step: "6",
                        title: "Übergabe & Förderbestätigung",
                        text: "Sie erhalten das Abnahmeprotokoll, Bestätigung über RC-konforme Ausführung und alle Unterlagen für Ihren Förderantrag.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-5 relative z-10">
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-xl font-bold border-4 border-white shadow">
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
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <p className="font-bold text-lg">Sicherheit ist nicht verhandelbar.</p>
                  <p className="text-slate-800 text-sm mt-1">
                    Kostenloser Vor-Ort-Sicherheitscheck – wir zeigen Ihnen die
                    Schwachstellen und das wirksamste Paket dagegen.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="flex-shrink-0 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm"
                >
                  Sicherheits-Check anfragen →
                </Link>
              </div>

              {/* REGIONEN */}
              <section id="regionen" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Unser Servicegebiet
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Einbruchschutz-Nachrüstung in ganz Wien &amp; NÖ
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
                      className="bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-2xl p-4 text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors text-center"
                    >
                      📍 {region.name}
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Häufige Fragen zum Einbruchschutz
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Antworten auf die wichtigsten Kundenfragen
                </p>

                <div className="space-y-4">
                  {[
                    {
                      q: "Wie lange dauert ein Fenster-Einbruch typischerweise?",
                      a: "Ein durchschnittlicher Einbrecher gibt nach ca. 3–5 Minuten erfolglosen Aufhebelversuchen auf. Standardfenster lassen sich oft in unter 60 Sekunden öffnen. Mit Pilzkopfverriegelungen, Sicherheitsbeschlägen und abschließbaren Griffen verlängert sich die Aufhebelzeit auf weit über 5 Minuten – die meisten Täter brechen ab.",
                    },
                    {
                      q: "Was kostet die Einbruchschutz-Nachrüstung?",
                      a: "Eine einfache Nachrüstung mit Pilzkopfverriegelungen und einem abschließbaren Griff pro Fenster liegt zwischen 120 € und 250 €. Komplettpakete RC2-konform mit Sicherheitsfolie kosten 350–720 € pro Fenster. Wir erstellen vorab immer einen kostenlosen Kostenvoranschlag.",
                    },
                    {
                      q: "Kann jedes Fenster nachgerüstet werden?",
                      a: "Ja, in den meisten Fällen. Pilzkopfverriegelungen lassen sich an fast allen modernen Beschlagsystemen (Roto, Maco, Siegenia, GU) nachrüsten. Bei sehr alten oder einfachen Beschlägen muss ggf. der gesamte Beschlag getauscht werden – das prüfen wir vor Ort und sagen Ihnen ehrlich, was möglich ist.",
                    },
                    {
                      q: "Gibt es Förderungen für Einbruchschutz?",
                      a: "Ja. In Wien und mehreren NÖ-Gemeinden existieren Förderprogramme, oft 25–50 % der Investitionssumme. Auch das KFV (Kuratorium für Verkehrssicherheit) bezuschusst Nachrüstungen. Wir prüfen die für Sie möglichen Programme und liefern alle nötigen Unterlagen.",
                    },
                    {
                      q: "Welche Schutzklasse ist sinnvoll für Privathaushalte?",
                      a: "Für Wohnungen und Einfamilienhäuser empfiehlt die Polizei und ÖNORM B 5338 mindestens RC2. Diese widersteht standardisierten Aufhebelversuchen mit einfachem Werkzeug für ca. 3 Minuten. Bei Erdgeschoss-Lagen oder freistehenden Häusern ist RC2N mit Sicherheitsfolie oder RC3 sinnvoll.",
                    },
                    {
                      q: "Wirkt eine Sicherheitsfolie wirklich?",
                      a: "Ja – eine professionell verklebte Sicherheitsfolie (mind. 100 µm, durchgängig auf den Rahmen verklebt) verhindert das saubere Durchschlagen der Scheibe. Das Glas zerbricht zwar, hält aber zusammen wie eine Verbundfolie. Kombiniert mit Pilzkopfverriegelungen ist der Hebelschutz nahezu komplett.",
                    },
                    {
                      q: "Stört der abschließbare Griff im Alltag?",
                      a: "Nein. Im Normalbetrieb bedienen Sie den Griff wie gewohnt. Erst wenn Sie ihn aktiv abschließen (1 Drehung mit Schlüssel), ist er gesichert. Beim Verlassen der Wohnung dauert das pro Fenster 2–3 Sekunden.",
                    },
                    {
                      q: "Bekomme ich nach der Nachrüstung Versicherungsrabatt?",
                      a: "Bei vielen österreichischen Versicherungen ja – insbesondere wenn die Maßnahme RC2-konform ist. Wir stellen Ihnen ein Abnahmeprotokoll mit Klassen-Bestätigung aus, das Sie bei Ihrer Versicherung einreichen können.",
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
                    className="flex items-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 hover:bg-amber-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-slate-900" />
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
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Schluss mit dem mulmigen Gefühl beim Verlassen des Hauses
                </h2>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Kostenloser Sicherheits-Check, ehrliche Beratung,
                  RC2-konforme Nachrüstung. Wir machen Ihre Fenster zur
                  echten Hürde – in einem Termin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kontakt"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3 rounded-xl transition-colors text-sm"
                  >
                    Jetzt Sicherheits-Check anfragen
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
                  <Link href="/" className="hover:text-amber-600 transition-colors">
                    Startseite
                  </Link>
                  <Link
                    href="/leistungen"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Leistungen
                  </Link>
                  <Link
                    href="/kontakt"
                    className="hover:text-amber-600 transition-colors"
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
