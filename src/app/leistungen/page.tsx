import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import {
  Wrench,
  Layers,
  Settings2,
  Hammer,
  ShieldCheck,
  Shield,
  Sun,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Phone,
  Clock,
  Award,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Leistungen – Fensterservice & Reparatur Wien, NÖ, Tulln | ROWO",
  description:
    "Alle Leistungen rund um Ihre Fenster: Reparatur, Dichtungstausch, Wartung, Montage, Glastausch, Einbruchschutz, Rollladen-Reparatur, Sonnenschutz und Raffstore-Service in Wien, Tulln, St. Pölten & ganz Niederösterreich. Geprüfter Fachbetrieb mit 24h Notdienst.",
  keywords: [
    "Fensterservice Wien",
    "Fensterreparatur Niederösterreich",
    "Dichtungstausch Fenster",
    "Fenstermontage",
    "Glasreparatur",
    "Einbruchschutz Fenster",
    "Rollladen Reparatur",
    "Sonnenschutzfolie",
    "Raffstore Reparatur",
    "Tulln",
    "St. Pölten",
    "Wien",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/leistungen",
  },
  openGraph: {
    title: "Alle Fensterservice-Leistungen | ROWO Fensterservice",
    description:
      "Reparatur, Wartung, Montage, Sicherheit & Sonnenschutz – alles aus einer Hand in Wien, NÖ und Tulln.",
    url: "https://www.fensterservice-rowo.at/leistungen",
    type: "website",
    locale: "de_AT",
  },
};

const services = [
  {
    title: "Fensterreparatur",
    href: "/fensterreparatur",
    icon: Wrench,
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    text: "text-blue-700",
    short:
      "Klemmt, schließt nicht, undicht? Wir reparieren Holz-, Kunststoff- und Aluminiumfenster fachgerecht – Beschläge, Rahmen, Dichtungen, Mechanik.",
    bullets: ["Alle Hersteller", "Original-Ersatzteile", "Gewährleistung"],
    badge: "Klassiker",
  },
  {
    title: "Dichtungstausch",
    href: "/dichtungstausch",
    icon: Layers,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    short:
      "Poröse Dichtungen sind die häufigste Ursache für Zugluft & Energieverluste. Wir tauschen alle gängigen Profile – inkl. Pflegeset.",
    bullets: ["Spart 5–15 % Heizkosten", "Sofort spürbar", "Pro Fenster ab 35 €"],
    badge: "Sparpotenzial",
  },
  {
    title: "Fensterwartung",
    href: "/fensterwartung",
    icon: Settings2,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    short:
      "Reinigung, Schmierung, Beschlag-Justage, Dichtungen prüfen – einmal jährlich verdoppelt die Lebensdauer Ihrer Fenster.",
    bullets: ["Jährliches Wartungspaket", "Pro Fenster ca. 25–45 €", "Frühwarnung bei Defekten"],
    badge: "Werterhalt",
  },
  {
    title: "Fenstermontage & -austausch",
    href: "/fenstermontage",
    icon: Hammer,
    color: "from-indigo-500 to-purple-600",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    short:
      "Neubau oder Sanierung: Fachgerechte Montage neuer Fenster nach ÖNORM B 5320 mit RAL-Montage – inkl. Beratung und Aufmaß.",
    bullets: ["RAL-zertifiziert", "Förderfähig", "Saubere Demontage"],
    badge: "Neu & Tausch",
  },
  {
    title: "Einbruchschutz Nachrüstung",
    href: "/einbruchschutz-nachruestung",
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    text: "text-amber-700",
    short:
      "Pilzkopfverriegelungen, abschließbare Griffe, Sicherheitsfolien – RC2-konforme Nachrüstung. Über 80 % der Einbrüche erfolgen über Fenster.",
    bullets: ["RC2-zertifiziert", "Förderungen möglich", "Bewährter Schutz"],
    badge: "Sicherheit",
  },
  {
    title: "Glasreparatur & -austausch",
    href: "/glasreparatur",
    icon: Eye,
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    text: "text-sky-700",
    short:
      "Sprünge, Risse, Bruchglas? Wir tauschen Isolierglas, Sicherheitsglas (VSG/ESG) und Schallschutzglas – schnell und passgenau.",
    bullets: ["Schnelltausch", "Maßanfertigung", "Notverglasung"],
    badge: "Schnell",
  },
  {
    title: "Blindscheiben-Tausch",
    href: "/blindscheiben-tausch",
    icon: Sparkles,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    text: "text-blue-700",
    short:
      "Kondenswasser zwischen den Scheiben? Wir tauschen die defekte Glaseinheit – gerne mit Upgrade auf 3-fach Wärmeschutzglas.",
    bullets: ["Bis 80 % weniger Wärmeverlust", "Rahmen bleibt", "Förderfähig"],
    badge: "Beliebt",
  },
  {
    title: "Rollladen- & Jalousien-Reparatur",
    href: "/rollladen-jalousien-reparatur",
    icon: Shield,
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50",
    text: "text-slate-700",
    short:
      "Gurt gerissen, Motor defekt, Rollladen klemmt? Wir reparieren elektrische und mechanische Rollläden, Jalousien und Außenraffstores.",
    bullets: ["Alle Marken", "Motor-Tausch", "Gurtwickler"],
    badge: "Service",
  },
  {
    title: "Sonnenschutzfolien Montage",
    href: "/sonnenschutzfolien",
    icon: Sun,
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    short:
      "Schutz vor Hitze, UV-Strahlung und Blendung – professionelle Folierung gegen Sommerhitze und für mehr Privatsphäre.",
    bullets: ["Bis 80 % Hitzereduktion", "Sichtschutz möglich", "Saubere Verklebung"],
    badge: "Komfort",
  },
  {
    title: "Raffstore Textband Tausch",
    href: "/raffstore-textband-tausch",
    icon: Layers,
    color: "from-stone-600 to-stone-800",
    bg: "bg-stone-50",
    text: "text-stone-700",
    short:
      "Textbänder gerissen oder ausgefranst? Wir tauschen die Bänder bei allen gängigen Außenraffstore-Systemen – fachgerecht und langlebig.",
    bullets: ["Alle Hersteller", "Schnell montiert", "Originalmaterial"],
    badge: "Spezial",
  },
];

const stats = [
  { value: "10+", label: "Jahre Erfahrung pro Techniker" },
  { value: "1.000+", label: "Aufträge erfolgreich" },
  { value: "60 Min.", label: "Notdienst-Reaktionszeit" },
  { value: "4,9★", label: "Google-Bewertung" },
];

const whyUs = [
  {
    icon: Award,
    title: "Geprüfter Fachbetrieb",
    text: "Zertifizierte Techniker, langjährige Erfahrung und kontinuierliche Weiterbildung – Qualität, die man sieht.",
  },
  {
    icon: CheckCircle,
    title: "Original-Ersatzteile",
    text: "Wir verwenden ausschließlich Originalteile (Roto, Maco, Siegenia, Velux) – kein Billig-Zubehör.",
  },
  {
    icon: Clock,
    title: "Schneller Notdienst",
    text: "Bei akuten Problemen wie Wassereintritt oder defektem Schloss reagieren wir in der Regel innerhalb von 60 Minuten.",
  },
  {
    icon: ShieldCheck,
    title: "Schriftliche Gewährleistung",
    text: "Auf alle Reparaturen geben wir dokumentierte Gewährleistung – ohne Wenn und Aber.",
  },
  {
    icon: MapPin,
    title: "Regional verankert",
    text: "Lokal in Tulln, Wien und ganz Niederösterreich präsent – kurze Anfahrt, persönlicher Kontakt.",
  },
  {
    icon: Sparkles,
    title: "Faire Preise",
    text: "Transparenter Kostenvoranschlag vor Arbeitsbeginn, keine versteckten Kosten, keine Überraschungen.",
  },
];

const processSteps = [
  {
    n: "1",
    title: "Kontakt aufnehmen",
    text: "Per Telefon, WhatsApp oder Formular – beschreiben Sie kurz Ihr Problem, gerne mit Fotos.",
  },
  {
    n: "2",
    title: "Termin & Aufmaß",
    text: "Wir kommen vor Ort, prüfen die Situation und nehmen alle nötigen Maße – kostenlos.",
  },
  {
    n: "3",
    title: "Schriftlicher Kostenvoranschlag",
    text: "Sie erhalten ein klares Angebot mit allen Optionen. Kein versteckter Aufpreis.",
  },
  {
    n: "4",
    title: "Fachgerechte Ausführung",
    text: "Saubere Arbeit, Original-Ersatzteile, in der Regel in einem Termin abgeschlossen.",
  },
  {
    n: "5",
    title: "Abnahme & Gewährleistung",
    text: "Gemeinsame Funktionsprüfung, schriftliches Protokoll, dokumentierte Gewährleistung.",
  },
];

const regions = [
  { name: "Wien", href: "/wien" },
  { name: "Tulln", href: "/tulln" },
  { name: "St. Pölten", href: "/st-poelten" },
  { name: "Krems", href: "/krems" },
  { name: "Klosterneuburg", href: "/klosterneuburg" },
  { name: "Baden bei Wien", href: "/baden-bei-wien" },
];

export default function LeistungenPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-5">
            {["Wien & NÖ", "Geprüfter Fachbetrieb", "24h Notdienst", "Förderfähig"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide border border-white/20"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            Alles rund ums Fenster –{" "}
            <span className="text-amber-300">aus einer Hand.</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Reparatur, Wartung, Montage, Sicherheit, Sonnenschutz und mehr – wir
            bieten zehn spezialisierte Leistungen für Holz-, Kunststoff- und
            Aluminiumfenster. Schnell, sauber, mit Gewährleistung – in Wien,
            Tulln, St. Pölten und ganz Niederösterreich.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-4 rounded-xl transition-colors text-sm"
            >
              Kostenlosen KV anfragen <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+436644351622"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl transition-colors text-sm border border-white/20"
            >
              <Phone className="w-4 h-4" /> +43 664 435 1622
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-slate-900 border-y border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-amber-300">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-slate-300 uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
              Ihr Fensterprofi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Qualität, Zuverlässigkeit und ehrliche Beratung
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ein Fenster ist mehr als nur eine Öffnung – es ist Wärmeschutz,
              Sicherheit, Schalldämmung und Designelement zugleich. Verschleiß,
              schlechte Montage oder fehlende Wartung führen zu höheren
              Heizkosten, Zugluft und einem schwächeren Schutz vor Einbruch.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mit unseren <strong>10 spezialisierten Leistungen</strong>{" "}
              beheben wir jedes Problem rund ums Fenster – schnell und mit
              Gewährleistung. Klicken Sie sich durch die Leistungsdetails – jede
              hat ihre eigene Seite mit Kostenübersicht, Ablauf und FAQs.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Images/Leistungen Fenstervice und Reparatur Tulln Niederösterreich.jpg"
              alt="Leistungen Fensterservice und Reparatur"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="leistungen" className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 text-center">
            Unsere Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
            10 Spezialleistungen rund ums Fenster
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Jede Leistung hat ihre eigene Detailseite mit Kostenübersicht,
            Ablauf, Glasvarianten oder Schutzklassen und FAQ.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative bg-white rounded-3xl border border-slate-200 hover:border-transparent shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Top gradient accent */}
                  <div
                    className={`h-2 bg-gradient-to-r ${s.color}`}
                  />

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`${s.bg} ${s.text} p-3 rounded-2xl`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {s.short}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle className={`w-3.5 h-3.5 ${s.text}`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${s.text} group-hover:gap-2 transition-all`}>
                      Details &amp; Kosten <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 text-center">
            So arbeiten wir
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
            Vom Anruf bis zum fertigen Fenster
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Ein klarer, transparenter Prozess – egal welche Leistung Sie buchen.
          </p>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {processSteps.map((step, i) => (
              <div key={step.n} className="relative">
                <div className="bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl p-6 h-full transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 text-center">
            Warum ROWO Fensterservice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Was uns von anderen unterscheidet
          </h2>
          <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
            Sechs Argumente, die Sie überzeugen werden.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 text-center">
            Unser Servicegebiet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
            Vor Ort in ganz NÖ und Wien
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Wir sind regional verankert und überall innerhalb von 60 Minuten vor Ort.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-2xl p-5 text-center transition-colors group"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                  {r.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            Bereit für erstklassigen Fensterservice?
          </h2>
          <p className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            Kostenloser Kostenvoranschlag, ehrliche Beratung, schnelle Termine.
            Wir freuen uns auf Ihre Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Jetzt unverbindlich anfragen <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+436644351622"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors border-2 border-slate-900"
            >
              <Phone className="w-5 h-5" /> +43 664 435 1622
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
