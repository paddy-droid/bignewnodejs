import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fenster-Blog 2026 | Ratgeber, Anleitungen & Service-Tipps',
  description: 'Praxis-Ratgeber rund um Fenster, Rollladen, Sonnenschutz, Einbruchschutz und Energiesparen. Vom Profi für Wien & Niederösterreich. Jetzt informieren & Service buchen.',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/blog' },
  openGraph: {
    title: 'Fenster-Blog 2026 | ROWO Fensterservice',
    description: 'Ratgeber & Anleitungen rund um Fenster, Rollladen & Sonnenschutz – vom Profi für Wien & Niederösterreich.',
    url: 'https://www.fensterservice-rowo.at/blog',
    siteName: 'Fensterservice ROWO',
    locale: 'de_AT',
    type: 'website',
  },
}

type BlogPost = {
  id: string
  title: string
  description: string
  date: string
  dateLabel: string
  readingTime: string
  category: 'Reparatur' | 'Wartung' | 'Sicherheit' | 'Energie' | 'Komfort'
  image: string
  tags: string[]
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 'sonnenschutz-sommer',
    title: 'Sonnenschutz für Fenster: Wie Sie Ihr Zuhause im Sommer angenehm kühl halten',
    description: 'Außenliegender Sonnenschutz, Raffstores & Rollläden im Vergleich – so bleibt es im Sommer drinnen kühl, ohne Klimaanlage.',
    date: '2026-05-06',
    dateLabel: '06. Mai 2026',
    readingTime: '8 Min.',
    category: 'Komfort',
    image: '/Images/sonnenschutz_sommer.png',
    tags: ['Sonnenschutz', 'Sommer', 'Hitzeschutz'],
    featured: true,
  },
  {
    id: 'fenster-klemmen-sommer',
    title: 'Warum Fenster im Sommer klemmen – und was Sie sofort tun können',
    description: 'Hitze, Materialdehnung, schief sitzende Beschläge: Wir erklären die Ursachen und zeigen, wie Sie Ihr Fenster wieder zum Laufen bringen.',
    date: '2026-05-06',
    dateLabel: '06. Mai 2026',
    readingTime: '7 Min.',
    category: 'Reparatur',
    image: '/Images/fenster_klemmen_sommer.png',
    tags: ['Reparatur', 'Sommer', 'Beschläge'],
  },
  {
    id: 'insektenschutz-fruehling',
    title: 'Insektenschutz nachrüsten: Jetzt für den Frühling vorsorgen',
    description: 'Spannrahmen, Drehtüren, Plissees & Pollenschutz – die richtige Lösung für jedes Fenster in Wien & Niederösterreich.',
    date: '2026-02-02',
    dateLabel: '02. Februar 2026',
    readingTime: '9 Min.',
    category: 'Komfort',
    image: '/Images/insektenschutz-fruehling.png',
    tags: ['Insektenschutz', 'Frühling', 'Komfort'],
  },
  {
    id: 'fenster-fruehjahrscheck',
    title: 'Fenster-Frühjahrscheck: So machen Sie Ihre Fenster fit für das Jahr',
    description: 'Dichtungen, Beschläge, Glas: Die komplette Checkliste für einen Profi-Frühjahrscheck inkl. Kostenüberblick.',
    date: '2026-01-20',
    dateLabel: '20. Januar 2026',
    readingTime: '10 Min.',
    category: 'Wartung',
    image: '/Images/fenster-fruehjahrscheck.png',
    tags: ['Wartung', 'Frühjahr', 'Werterhalt'],
  },
  {
    id: 'einbruchschutz-im-fruehling',
    title: 'Einbruchschutz: Warum Frühling der richtige Zeitpunkt für Sicherheits-Updates ist',
    description: 'Pilzkopfverriegelung, abschließbare Griffe, Sicherheitsglas – wie Sie Ihre Fenster effektiv und kostengünstig nachrüsten.',
    date: '2026-01-05',
    dateLabel: '05. Januar 2026',
    readingTime: '11 Min.',
    category: 'Sicherheit',
    image: '/Images/einbruchschutz-sicherheit.png',
    tags: ['Sicherheit', 'Einbruchschutz', 'Nachrüsten'],
  },
  {
    id: 'rollladen-klemmt',
    title: 'Rollladen klemmt oder läuft schief? Alle Ursachen & Lösungen',
    description: 'Vom DIY-Tipp bis zum Notdienst: Der vollständige Leitfaden zu klemmenden Rollladen inkl. Kostenübersicht & FAQ.',
    date: '2025-11-10',
    dateLabel: '10. November 2025',
    readingTime: '12 Min.',
    category: 'Reparatur',
    image: '/Images/rolladen reparatur niederösterreich.webp',
    tags: ['Rollladen', 'Notdienst', 'DIY'],
  },
  {
    id: 'fensterdichtungen-austauschen',
    title: 'Fensterdichtungen austauschen – kleine Arbeit, große Wirkung',
    description: 'Schritt-für-Schritt-Anleitung: Dichtungen prüfen, Material wählen, fachgerecht tauschen. Mit Kosten- und Spar-Tabelle.',
    date: '2025-11-10',
    dateLabel: '10. November 2025',
    readingTime: '11 Min.',
    category: 'Energie',
    image: '/Images/fenster-dichtungen-tauschen.webp',
    tags: ['Dichtungen', 'Energie', 'DIY'],
  },
  {
    id: 'beschlagene-fenster-vermeiden',
    title: 'Beschlagene Fenster? So vermeiden Sie Schimmel in der Heizsaison',
    description: 'Kondenswasser stoppen mit Stoßlüften, richtigem Heizverhalten und modernen Fensterlösungen. Inkl. FAQ.',
    date: '2025-11-10',
    dateLabel: '10. November 2025',
    readingTime: '10 Min.',
    category: 'Komfort',
    image: '/Images/fenster-dichtungen-tauschen.webp',
    tags: ['Schimmel', 'Lüftung', 'Heizsaison'],
  },
  {
    id: 'fensterwartung-im-winter',
    title: 'Fensterwartung im Winter: So verlängern Sie die Lebensdauer Ihrer Fenster',
    description: 'Reinigen, schmieren, justieren: Die Profi-Routine für Winterwartung inkl. regionaler Tipps für Wien & NÖ.',
    date: '2025-11-10',
    dateLabel: '10. November 2025',
    readingTime: '9 Min.',
    category: 'Wartung',
    image: '/Images/Fenster Dichtungstausch im Winter.webp',
    tags: ['Wartung', 'Winter', 'Pflege'],
  },
  {
    id: 'energie-sparen-im-winter',
    title: 'Energie sparen im Winter: Warum richtig abgedichtete Fenster bares Geld wert sind',
    description: 'Bis zu 30 % Heizkosten sparen – mit professioneller Abdichtung, modernen Dichtungen und Förderungen in Niederösterreich.',
    date: '2025-11-10',
    dateLabel: '10. November 2025',
    readingTime: '11 Min.',
    category: 'Energie',
    image: '/Images/richtig abgedichtete Fenster in Niederösterreich.webp',
    tags: ['Energie', 'Heizkosten', 'Dämmung'],
  },
  {
    id: 'fenster-einstellen-lassen',
    title: 'Fenster einstellen lassen – warum kleine Justierungen große Wirkung haben',
    description: 'Wenn Fenster klemmen, undicht sind oder schwer schließen: So funktioniert eine professionelle Justage – inkl. Kosten.',
    date: '2025-11-10',
    dateLabel: '10. November 2025',
    readingTime: '9 Min.',
    category: 'Wartung',
    image: '/Images/dichtungstausch-fenster.webp',
    tags: ['Justage', 'Wartung', 'Energie'],
  },
]

const categoryStyles: Record<BlogPost['category'], string> = {
  Reparatur: 'bg-red-50 text-red-700 border-red-100',
  Wartung: 'bg-blue-50 text-blue-700 border-blue-100',
  Sicherheit: 'bg-amber-50 text-amber-700 border-amber-100',
  Energie: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Komfort: 'bg-violet-50 text-violet-700 border-violet-100',
}

const categories: BlogPost['category'][] = ['Reparatur', 'Wartung', 'Sicherheit', 'Energie', 'Komfort']

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Fensterservice ROWO – Blog',
  description: 'Ratgeber rund um Fenster, Rollladen, Sonnenschutz, Einbruchschutz und Energiesparen.',
  url: 'https://www.fensterservice-rowo.at/blog',
  inLanguage: 'de-AT',
  publisher: {
    '@type': 'Organization',
    name: 'Fensterservice ROWO',
    url: 'https://www.fensterservice-rowo.at',
  },
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    datePublished: p.date,
    url: `https://www.fensterservice-rowo.at/blog/${p.id}`,
    image: `https://www.fensterservice-rowo.at${p.image}`,
    description: p.description,
  })),
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((p) => p.id !== featured.id)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-28 pb-20 px-4">
          <div className="absolute inset-0 opacity-10" aria-hidden>
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-400 blur-3xl" />
          </div>
          <div className="relative max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Praxiswissen vom Fenster-Profi
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Der Fenster-Ratgeber<br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">für Wien & Niederösterreich</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Reparieren, warten, sparen: Über 12 Profi-Anleitungen aus tausenden Service-Einsätzen.
              Verständlich erklärt, sofort umsetzbar – und mit dem direkten Draht zum Notdienst.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/kontakt"
                className="bg-white text-blue-900 font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg"
              >
                Service-Termin anfragen
              </Link>
              <a
                href="tel:+436644351622"
                className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm"
              >
                📞 +43 664 435 1622
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 -mt-10 pb-16 relative z-10">
          {/* CATEGORY CHIPS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">Kategorien:</span>
            {categories.map((cat) => (
              <span key={cat} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${categoryStyles[cat]}`}>
                {cat}
              </span>
            ))}
          </div>

          {/* FEATURED POST */}
          <Link
            href={`/blog/${featured.id}`}
            className="group block mb-14 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-72 md:h-auto">
                <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" priority />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  ⭐ Empfehlung
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryStyles[featured.category]}`}>{featured.category}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-500">{featured.dateLabel}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-500">{featured.readingTime} Lesezeit</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{featured.description}</p>
                <span className="inline-flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-3 transition-all">
                  Artikel lesen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border backdrop-blur bg-white/90 ${categoryStyles[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span>{post.dateLabel}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                    Weiterlesen
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA-Block am Ende */}
          <div className="mt-16 bg-gradient-to-br from-blue-700 to-slate-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Sie haben ein konkretes Fenster-Problem?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Unsere Techniker sind in ganz <strong className="text-white">Wien, Tulln, St. Pölten, Krems, Klosterneuburg & Baden</strong> unterwegs.
                Wir kommen vorbei, beraten ehrlich und reparieren – meist noch am selben oder nächsten Werktag.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="bg-white text-blue-900 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow"
                >
                  Kostenlos anfragen
                </Link>
                <a
                  href="tel:+436644351622"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  📞 +43 664 435 1622
                </a>
                <Link
                  href="/notdienst"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  🚨 Notdienst 24/7
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
