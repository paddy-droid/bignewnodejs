import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import {
  Phone,
  Mail,
  ArrowRight,
  Hammer,
  HeartHandshake,
  Eye,
  Recycle,
  Award,
  Wrench,
  Star,
  Quote,
  Coffee,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Über uns – ROWO Fensterservice | Ihr Fensterprofi aus Tulln, NÖ",
  description:
    "Wer hinter ROWO Fensterservice steht: Ein junger Handwerksbetrieb aus Tulln, geführt von Wolfgang Winkler – mit einem Team aus erfahrenen Fenstermonteuren mit jeweils über 10 Jahren Praxiserfahrung. Persönlich, ehrlich und mit Handwerksstolz für Wien, Tulln, St. Pölten und ganz Niederösterreich.",
  keywords: [
    "ROWO Fensterservice",
    "Über uns",
    "Fensterservice Tulln",
    "Familienbetrieb",
    "Fensterprofi Wien",
    "Niederösterreich",
    "Handwerksbetrieb",
    "Geprüfter Fachbetrieb",
  ],
  alternates: {
    canonical: "https://www.fensterservice-rowo.at/ueber-uns",
  },
  openGraph: {
    title: "Über uns | ROWO Fensterservice",
    description:
      "Familienbetrieb aus Tulln – persönlich, ehrlich, mit Handwerksstolz für Wien & NÖ.",
    url: "https://www.fensterservice-rowo.at/ueber-uns",
    type: "website",
    locale: "de_AT",
  },
};

const milestones = [
  {
    year: "Davor",
    title: "Über 10 Jahre auf der Baustelle",
    text: "Bevor ROWO gegründet wurde, hat Wolfgang Winkler – heute Geschäftsführer – über ein Jahrzehnt als Fenstermonteur in größeren Betrieben gearbeitet. Tausende Beschläge, hunderte Häuser, alle Fenstertypen. Daraus wurde irgendwann der Wunsch, es selbst zu machen – nur eben gscheiter.",
  },
  {
    year: "2023",
    title: "Gründung in Tulln",
    text: "Wolfgang Winkler gründet ROWO Fensterservice. Standort Tulln, ein Lieferwagen, ein klares Versprechen: ehrliche Beratung, sauberes Handwerk, faire Preise. Die ersten Aufträge sind Reparaturen in der Nachbarschaft – und werden zu Empfehlungen.",
  },
  {
    year: "2024",
    title: "Team mit Substanz",
    text: "Wir holen die Kollegen ins Boot, mit denen Wolfgang vorher schon auf der Baustelle stand. Jeder bringt selbst über 10 Jahre Erfahrung mit – damit sind wir am ersten Tag kein Lehrlingsbetrieb, sondern ein eingespieltes Profi-Team.",
  },
  {
    year: "2025",
    title: "Velux &amp; 24h-Notdienst",
    text: "Wir spezialisieren uns auf Velux-Dachfenster und bauen den 24-Stunden-Notdienst auf. Sturmschäden, Wassereintritte, Einbruchsversuche – nicht alles wartet bis Montag.",
  },
  {
    year: "2026",
    title: "Heute",
    text: "Ein kleines, festes Team. Über 1.000 erfolgreiche Aufträge in drei Jahren, 4,9 Sterne auf Google – und immer noch derselbe Anspruch wie am ersten Tag: anständige Arbeit, ehrlich abgerechnet.",
  },
];

const values = [
  {
    icon: Hammer,
    title: "Handwerksstolz statt Massenabfertigung",
    text: "Ein Fenster richtig zu justieren dauert oft länger als es zu tauschen. Wir nehmen uns die Zeit – weil wir am Abend in den Spiegel schauen wollen.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: HeartHandshake,
    title: "Ehrlich, auch wenn’s weh tut",
    text: "Wenn ein Tausch wirtschaftlicher ist als die Reparatur, sagen wir das. Wenn ein Fenster noch zehn Jahre läuft, sagen wir das auch.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Eye,
    title: "Transparenz von der ersten Minute",
    text: "Unser Kostenvoranschlag ist schriftlich, nachvollziehbar und ohne Sternchen. Was draufsteht, wird abgerechnet – nichts mehr.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Recycle,
    title: "Reparieren statt wegwerfen",
    text: "Ein 25 Jahre altes Fenster muss nicht in den Container. Oft reicht ein Beschlagteil für 80 € – das ist gut für Sie und gut für die Umwelt.",
    color: "from-cyan-500 to-blue-600",
  },
];

const stats = [
  { icon: Calendar, value: "10+", label: "Jahre Erfahrung pro Techniker" },
  { icon: Wrench, value: "1.000+", label: "Aufträge erfolgreich" },
  { icon: Users, value: "Klein", label: "festes Team, kein Subunternehmer" },
  { icon: Star, value: "4,9 / 5", label: "Google-Bewertung" },
];

const dayInLife = [
  {
    time: "06:30",
    title: "Tag startet am Standort",
    text: "Lieferwagen werden beladen – Beschläge, Dichtungen, Werkzeug. Jedes Auto hat sein eigenes Lager für die häufigsten Reparaturen.",
  },
  {
    time: "07:30",
    title: "Erste Termine",
    text: "Tulln, Wien-West, dann St. Pölten. Die meisten Kunden bevorzugen Vormittagstermine, bevor das Leben losgeht.",
  },
  {
    time: "11:00",
    title: "Notruf",
    text: "Geplatzte Scheibe nach Sturm – wir schicken den nächsten verfügbaren Techniker. Sicherung in 60 Minuten, Tausch nach Lieferung.",
  },
  {
    time: "14:00",
    title: "Aufmaß bei Neukunde",
    text: "Sanierung eines Hauses aus den 80ern – 11 Fenster. Wir messen, beraten und prüfen Förderungen direkt vor Ort.",
  },
  {
    time: "17:00",
    title: "Kalkulation & KV",
    text: "Im Büro werden die Angebote des Tages geschrieben. Schriftlich, transparent, mit allen Optionen – kein Marketing-Blabla.",
  },
];

const promises = [
  {
    title: "Schriftlicher Kostenvoranschlag vor Auftragsbeginn",
    text: "Sie wissen vorher, was es kostet. Punkt.",
  },
  {
    title: "Geprüfte Fachkräfte, keine Subunternehmer",
    text: "Die Person an Ihrer Tür ist unser Mitarbeiter – nicht ein anonymer Drittanbieter.",
  },
  {
    title: "Original- oder freigegebene Ersatzteile",
    text: "Roto, Maco, Siegenia, GU, Velux – kein Billig-Zubehör, das nach 6 Monaten kaputt ist.",
  },
  {
    title: "Saubere Baustelle bei Übergabe",
    text: "Wir hinterlassen Ihre Wohnung so, wie wir sie vorgefunden haben. Bauschutt nehmen wir mit.",
  },
  {
    title: "Schriftliche Gewährleistung auf alle Arbeiten",
    text: "Sollte etwas nicht halten, kommen wir wieder. Ohne Diskussion.",
  },
  {
    title: "24h Notdienst für echte Notfälle",
    text: "Wassereintritt, Einbruchsschäden, Glasbruch – wir rücken aus, auch nachts.",
  },
];

const testimonials = [
  {
    quote:
      "Endlich ein Handwerker, der zurückruft. Termin innerhalb von zwei Tagen, sauber gearbeitet, fairer Preis. So einfach kann es sein.",
    name: "Familie K.",
    location: "Wien, 14. Bezirk",
  },
  {
    quote:
      "Wurde von zwei anderen Firmen abgewiesen, weil das Fenster „zu alt“ sei. ROWO hat einen Beschlag gewechselt – läuft seither wie neu. Bin Stammkunde.",
    name: "Hans M.",
    location: "Tulln",
  },
  {
    quote:
      "Sturmschaden am Sonntag. 90 Minuten später war jemand da und hat alles provisorisch gesichert. Am Montag der finale Tausch. Versicherung hat alles bezahlt – auch dank der Doku.",
    name: "Eva R.",
    location: "St. Pölten",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  "Junger Betrieb · erfahrenes Team",
                  "Tulln & Wien",
                  "4,9★ Google",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 backdrop-blur px-3 py-1 rounded-full font-medium tracking-wide border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Hinter ROWO stehen{" "}
                <span className="text-amber-300">Menschen.</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4">
                Kein Callcenter. Kein Subunternehmer-Karussell. Sondern ein
                kleines, eingespieltes Team aus Tulln – jeder Techniker mit
                über 10 Jahren Praxis am Fenster.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Wir sind die, die Ihren Anruf entgegennehmen, Ihren Termin
                koordinieren, das Fenster reparieren und Ihnen am Ende in die
                Augen schauen. ROWO ist ein junger Betrieb mit erfahrenen
                Köpfen – und wir sind stolz auf jedes einzelne Fenster, das
                wir wieder zum Laufen bringen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-4 rounded-xl transition-colors text-sm"
                >
                  Schreiben Sie uns <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+436644351622"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl transition-colors text-sm border border-white/20"
                >
                  <Phone className="w-4 h-4" /> +43 664 435 1622
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/Images/Fensterservice_Fensterreparatur_Tulln_Wien.png"
                  alt="ROWO Fensterservice Team bei der Arbeit"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-500 rounded-full p-2 flex-shrink-0">
                        <Award className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          Geprüfter Fachbetrieb
                        </p>
                        <p className="text-xs text-slate-600">
                          Roto · Maco · Siegenia · Velux zertifiziert
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic">
                  „So einfach kann es sein.“
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  Familie K., Wien
                </p>
              </div>

              <div className="hidden lg:block absolute -bottom-4 -left-4 bg-amber-400 rounded-2xl p-4 shadow-xl max-w-[180px]">
                <p className="text-2xl font-extrabold text-slate-900">10+ Jahre</p>
                <p className="text-xs text-slate-800 font-semibold">
                  Erfahrung pro Techniker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER NOTE */}
      <section className="py-16 px-4 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-5">
            <Quote className="w-12 h-12 text-amber-400 flex-shrink-0 hidden sm:block" />
            <div>
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium mb-5">
                „Über zehn Jahre habe ich Fenster montiert, repariert und
                ausgetauscht – meistens für andere Firmen. Irgendwann war klar:
                Ich will es selbst machen, und zwar so, wie ich es immer für
                richtig gehalten habe. Ehrlich beraten, sauber gearbeitet,
                fair abgerechnet. Kein Fenster verlässt unsere Hand, das wir
                nicht selbst in unserer Wohnung haben wollen würden.“
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                <p className="text-sm font-bold text-slate-900">
                  Wolfgang Winkler · Geschäftsführer ROWO Fensterservice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAMFOTO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
              Das Team hinter ROWO
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Diese Hände kümmern sich um Ihre Fenster
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Keine Stockfotos, keine Models – das sind wir. Echte Menschen,
              echtes Team, echte Aufträge.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/Images/Fenster Service Rowo Team.png"
              alt="Teamfoto ROWO Fensterservice – Wolfgang Winkler &amp; Team"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-500 rounded-full p-2 flex-shrink-0">
                      <Users className="w-5 h-5 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Festes Team
                      </p>
                      <p className="text-xs text-slate-600">
                        Keine Subunternehmer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        10+ Jahre Erfahrung
                      </p>
                      <p className="text-xs text-slate-600">pro Techniker</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-600 rounded-full p-2 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Wir kommen zu Ihnen
                      </p>
                      <p className="text-xs text-slate-600">
                        Mobil in Wien &amp; ganz NÖ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6 italic">
            Teamfoto ROWO Fensterservice – Tulln, Niederösterreich
          </p>
        </div>
      </section>

      {/* TIMELINE / GESCHICHTE */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
              Unsere Geschichte
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Junger Betrieb. Erfahrene Hände.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              ROWO gibt es als Firma erst seit drei Jahren. Aber die Leute, die
              hier am Fenster stehen, machen das schon weit über ein Jahrzehnt.
              Genau diese Mischung – frischer Betrieb mit reichlich
              Routine-Erfahrung – ist unsere Stärke.
            </p>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-blue-400 to-emerald-400" />

            <div className="space-y-8 md:space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`md:grid md:grid-cols-2 md:gap-12 relative ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-amber-400 border-4 border-white shadow-lg z-10" />

                  <div
                    className={`${
                      i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    } md:py-8`}
                  >
                    <div className="bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all rounded-2xl p-6">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-3xl font-extrabold text-amber-500">
                          {m.year}
                        </span>
                        <div className="w-8 h-0.5 bg-slate-300" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {m.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {m.text}
                      </p>
                    </div>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WERTE / WAS UNS ANTREIBT */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
              Was uns antreibt
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Vier Überzeugungen, die wir nicht verhandeln
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Werte sind erst dann echte Werte, wenn sie auch dann gelten, wenn
              es wehtut. Hier sind unsere – wir leben jede einzelne, jeden Tag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group bg-white border border-slate-200 hover:border-transparent shadow-sm hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`h-2 bg-gradient-to-r ${v.color}`} />
                  <div className="p-7">
                    <div
                      className={`inline-flex bg-gradient-to-br ${v.color} text-white p-3 rounded-2xl mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {v.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
              In Zahlen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Was wir bewegt haben
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur"
                >
                  <Icon className="w-7 h-7 mx-auto mb-3 text-amber-300" />
                  <p className="text-3xl md:text-4xl font-extrabold mb-1">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-300 uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAG IM LEBEN */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
                Hinter den Kulissen
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
                Ein ganz normaler Tag bei ROWO
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Damit Sie eine Vorstellung davon bekommen, was wir tun, wenn
                wir nicht gerade an Ihrer Tür stehen – ein kleiner Einblick in
                einen typischen Werktag.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
                <Coffee className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  Übrigens: Der Kaffee am Morgen ist nicht verhandelbar. Ohne
                  den läuft hier gar nichts.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {dayInLife.map((d, i) => (
                <div key={d.time} className="flex gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="bg-slate-900 text-amber-300 font-bold text-sm px-3 py-2 rounded-xl shadow">
                      {d.time}
                    </div>
                    {i < dayInLife.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 my-2" />
                    )}
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 flex-1 hover:border-blue-300 transition-colors">
                    <p className="font-bold text-slate-900 mb-1">{d.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {d.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VERSPRECHEN */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-3">
              Unser Versprechen an Sie
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sechs Dinge, die Sie sich auf uns verlassen können
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Kein Marketing-Geschwurbel, keine Sternchen. Wenn wir das
              versprechen, halten wir es auch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {promises.map((p, i) => (
              <div
                key={p.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-amber-400 text-slate-900 font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-base">{p.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-10">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
              Was Kunden sagen
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Echte Stimmen, echte Aufträge
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Über 4,9 Sterne auf Google sind kein Zufall – sie sind das
              Ergebnis täglicher, ehrlicher Arbeit am Fenster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-200 mb-3" />
                <p className="text-slate-700 leading-relaxed mb-5 italic">
                  „{t.quote}“
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGION INTRO */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
                Verwurzelt in der Region
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Tulln ist Heimat. Wien ist Leidenschaft. NÖ ist Auftrag.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Unsere Basis ist in Tulln – und das ist kein Zufall. Hier
                kennen wir die Häuser, hier kennen wir die Leute, hier kennen
                wir die Wege. Wir wissen, dass ein Altbau in Wien-Währing
                andere Beschläge braucht als ein Reihenhaus in St. Pölten und
                dass ein Bauernhaus in Krems wieder ganz andere Geschichten
                erzählt.
              </p>
              <p className="text-slate-600 leading-relaxed mb-7">
                Diese Vielfalt macht den Beruf spannend – und macht uns zu
                besseren Handwerkern. Auf folgenden Regionsseiten finden Sie
                konkrete Infos für Ihren Standort:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Wien", href: "/wien" },
                  { name: "Tulln", href: "/tulln" },
                  { name: "St. Pölten", href: "/st-poelten" },
                  { name: "Krems", href: "/krems" },
                  { name: "Klosterneuburg", href: "/klosterneuburg" },
                  { name: "Baden bei Wien", href: "/baden-bei-wien" },
                ].map((r) => (
                  <Link
                    key={r.name}
                    href={r.href}
                    className="bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors text-center flex items-center justify-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5" /> {r.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <Image
                  src="/Images/Fensterservice Tulln.webp"
                  alt="Fensterservice Tulln"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-8">
                <Image
                  src="/Images/Fensterservice Wien.webp"
                  alt="Fensterservice Wien"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <Image
                  src="/Images/Fensterservice St. Pölten.webp"
                  alt="Fensterservice St. Pölten"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-8">
                <Image
                  src="/Images/richtig abgedichtete Fenster in Niederösterreich.webp"
                  alt="Fensterarbeit in Niederösterreich"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZERTIFIKATE / PARTNER */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
            Zertifizierungen &amp; Partner
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Mit den Marken, die das Handwerk prägen
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
            {[
              "ROTO",
              "MACO",
              "SIEGENIA",
              "GU",
              "VELUX",
              "WINKHAUS",
              "SOMFY",
              "INTERNORM",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-xl font-bold tracking-widest text-slate-700"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-14 h-14 mx-auto mb-5" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            Ein Anruf, eine Mail, ein Foto via WhatsApp – das reicht. Wir
            melden uns innerhalb von 2 Stunden und finden gemeinsam heraus,
            was Ihr Fenster braucht.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+436644351622"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors border-2 border-slate-900"
            >
              <Phone className="w-5 h-5" /> +43 664 435 1622
            </a>
            <a
              href="mailto:info@fensterservice-rowo.at"
              className="inline-flex items-center gap-2 bg-white/30 hover:bg-white/50 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5" /> Mail schreiben
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
