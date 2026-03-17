import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, CheckCircle, Star, Clock, Shield, Wrench,
  MapPin, ArrowRight, Mail, CalendarCheck, ChevronRight,
  MessageSquareQuote, Euro, Zap,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ── Types ────────────────────────────────────────────────────────────────────

export interface RegionData {
  city: string;
  region: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  localFeatures: { title: string; text: string }[];
  problems: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  extraSection?: { heading: string; body: string };
  serviceAreas: string[];
  faqItems: { question: string; answer: string }[];
  geo: { lat: string; lng: string; region: string };
}

// ── Static data (shared across all region pages) ─────────────────────────────

const STATS = [
  { value: '500+', label: 'Kunden', icon: '👷' },
  { value: '15+',  label: 'Jahre Erfahrung', icon: '🏆' },
  { value: '24h',  label: 'Notdienst', icon: '⚡' },
  { value: '6',    label: 'Regionen', icon: '📍' },
];

const STEPS = [
  {
    icon: Mail, num: '01',
    title: 'Anfrage senden',
    text: 'Anruf, WhatsApp oder Kontaktformular – wir melden uns innerhalb von 24 Stunden.',
    color: 'from-blue-500 to-blue-700', light: 'bg-blue-50', accent: 'text-blue-600',
  },
  {
    icon: CalendarCheck, num: '02',
    title: 'Kostenlose Beratung',
    text: 'Wir analysieren Ihr Problem, erstellen ein Festpreisangebot und vereinbaren einen Wunschtermin.',
    color: 'from-green-500 to-green-700', light: 'bg-green-50', accent: 'text-green-600',
  },
  {
    icon: Wrench, num: '03',
    title: 'Reparatur vor Ort',
    text: 'Unser Techniker kommt direkt zu Ihnen, erledigt alles sauber und gibt Ihnen Garantie auf die Arbeit.',
    color: 'from-orange-500 to-orange-700', light: 'bg-orange-50', accent: 'text-orange-600',
  },
];

const REVIEWS = [
  { name: 'Michael K.', rating: 5, text: 'Super schnell und kompetent – Fenster läuft wieder perfekt! Klare Empfehlung für den ganzen Betrieb.' },
  { name: 'Sandra L.',  rating: 5, text: 'Sehr freundlich, saubere Arbeit und fairer Preis. Innerhalb von 2 Tagen alles erledigt.' },
  { name: 'Thomas B.',  rating: 5, text: '24h Notdienst hat gehalten was er versprochen hat – war in 90 Minuten da. Top!' },
];

// ── Schema helpers ────────────────────────────────────────────────────────────

function buildSchemas(data: RegionData) {
  const base = 'https://www.fensterservice-rowo.at';
  const pageUrl = `${base}/${data.slug}`;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': pageUrl,
    name: `Fensterservice ROWO – ${data.city}`,
    url: pageUrl,
    telephone: '+436644351622',
    email: 'office@fensterservice-rowo.at',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Invoice',
    openingHours: 'Mo-Su 00:00-24:00',
    description: data.description,
    image: `${base}${data.imageSrc}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hauptstraße 1',
      addressLocality: 'Tulln an der Donau',
      postalCode: '3430',
      addressCountry: 'AT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.lat,
      longitude: data.geo.lng,
    },
    areaServed: data.serviceAreas.map(area => ({ '@type': 'City', name: area })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fensterreparatur Leistungen',
      itemListElement: [
        'Fenstereinstellung & Justierung', 'Dichtungstausch', 'Glasbruch & Scheibenersatz',
        'Rollladen Reparatur', 'Einbruchschutz Nachrüstung', 'Fenster Notdienst 24h',
        'Insektenschutz Montage', 'Sonnenschutz Reparatur',
      ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Fensterreparatur ${data.city}`,
    provider: { '@type': 'LocalBusiness', '@id': pageUrl },
    areaServed: { '@type': 'City', name: data.city },
    serviceType: 'Fensterreparatur',
    description: data.description,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        description: 'Festpreisangebot nach Besichtigung, zzgl. Arbeitszeit',
      },
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: base },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: `${base}/#regionen` },
      { '@type': 'ListItem', position: 3, name: `Fensterservice ${data.city}`, item: pageUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return { localBusiness, service, breadcrumb, faqSchema };
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function RegionPage({ data }: { data: RegionData }) {
  const { localBusiness, service, breadcrumb, faqSchema } = buildSchemas(data);

  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="relative h-[500px] md:h-[580px] flex items-center justify-center overflow-hidden" aria-label={`Fensterservice ${data.city} Hero`}>
          <Image src={data.imageSrc} alt={data.imageAlt} fill className="object-cover scale-105" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/90 via-[#0A3D62]/72 to-slate-900/82" />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm mb-5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
              <span className="text-white/90">4,9 · 500+ Kunden · Seit 2010</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Fensterservice {data.city}
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/kontakt" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A3D62] font-bold px-7 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 hover:scale-105 transition-all">
                <CheckCircle className="h-5 w-5 text-green-600" /> Kostenlos anfragen
              </Link>
              <a href="tel:+436644351622" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:scale-105 transition-all backdrop-blur-sm">
                <Phone className="h-5 w-5" /> +43 664 435 16 22
              </a>
              <a href="https://wa.me/436644351622" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 border-2 border-green-400 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-green-400 hover:scale-105 transition-all">
                <Zap className="h-5 w-5" /> 24h Notdienst
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#0A3D62] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-2.5">
            <ol className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Startseite</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link href="/#regionen" className="hover:text-blue-600 transition-colors">Regionen</Link></li>
              <li><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="font-semibold text-[#0A3D62]">Fensterservice {data.city}</li>
            </ol>
          </div>
        </nav>

        {/* ── LOCAL HIGHLIGHTS ── */}
        <section className="py-16 bg-white" aria-labelledby="highlights-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Ihr lokaler Fachbetrieb</span>
              <h2 id="highlights-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Fensterreparatur {data.city} – schnell &amp; zuverlässig
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Als lokaler Fachbetrieb kennen wir die Anforderungen in <strong>{data.region}</strong> genau –
                von Altbau-Kastenfenstern bis zu modernen Kunststoff- und Aluminiumfenstern.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {data.localFeatures.map(f => (
                <div key={f.title} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900">{f.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
            {/* Promo banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-lg">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-1">Frühlings-Aktion bis 30.05.2026</div>
                <div className="text-xl font-bold">Kostenlose Anfahrt für Neukunden in {data.city}</div>
                <div className="text-green-100 text-sm mt-1">Jetzt anfragen und Anfahrtskosten sparen</div>
              </div>
              <Link href="/kontakt" className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-green-700 font-bold px-5 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm whitespace-nowrap shadow">
                Jetzt sichern <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROBLEMS / LEISTUNGEN ── */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="problems-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Unsere Leistungen</span>
              <h2 id="problems-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Typische Fensterprobleme in {data.city}
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Diese Schäden beheben wir direkt vor Ort – meistens beim ersten Termin.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {data.problems.map(p => (
                <div key={p.title} className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pricing note */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-blue-100 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Euro className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-0.5">Transparente Preise – immer Festpreisangebot vor Beginn</div>
                <p className="text-gray-500 text-sm">
                  Materialkosten <strong>ab 49 €</strong> zzgl. Arbeitszeit &amp; Anfahrt.
                  Individuelle Angebote nach kostenloser Besichtigung. Alle Preise exkl. MwSt.
                </p>
              </div>
              <Link href="/kontakt" className="flex-shrink-0 inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-800 whitespace-nowrap">
                Angebot anfordern <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREA ── */}
        <section className="py-14 bg-white" aria-labelledby="servicearea-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Einzugsgebiet</span>
              <h2 id="servicearea-heading" className="text-3xl font-bold text-gray-900 mb-2">
                Fensterservice {data.city} – alle Einsatzgebiete
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm">
                Wir sind in folgenden Gemeinden, Ortschaften und Bezirken tätig:
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {data.serviceAreas.map(area => (
                <span key={area} className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 text-sm font-medium px-3 py-1.5 rounded-full">
                  <MapPin className="h-3 w-3 text-blue-500" /> {area}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm">
              Ihr Ort nicht dabei?{' '}
              <a href="tel:+436644351622" className="text-blue-600 font-semibold hover:underline">Rufen Sie an</a>
              {' '}– wir prüfen die Erreichbarkeit sofort.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-gray-50" aria-labelledby="howitworks-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 id="howitworks-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                So läuft Ihr Fensterservice in {data.city} ab
              </h2>
              <p className="text-gray-500">In 3 einfachen Schritten zu funktionierenden Fenstern.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {STEPS.map(step => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className={`${step.light} rounded-2xl p-7 border border-white shadow-sm hover:shadow-md transition-shadow`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`bg-gradient-to-br ${step.color} w-11 h-11 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className={`text-4xl font-black ${step.accent} opacity-20 leading-none`}>{step.num}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-16 bg-white" aria-labelledby="whyus-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 id="whyus-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Warum Fensterservice ROWO in {data.city}?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.whyUs.map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXTRA SECTION (city-specific) ── */}
        {data.extraSection && (
          <section className="py-12 bg-blue-50" aria-labelledby="extra-heading">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <h2 id="extra-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{data.extraSection.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{data.extraSection.body}</p>
            </div>
          </section>
        )}

        {/* ── REVIEWS ── */}
        <section className="py-16 bg-white" aria-labelledby="reviews-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <MessageSquareQuote className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h2 id="reviews-heading" className="text-3xl font-bold text-gray-900 mb-2">
                Was Kunden über uns sagen
              </h2>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                <span className="font-bold text-gray-900">4,9 / 5</span>
                <span className="text-gray-500 text-sm">· 500+ Kundenbewertungen</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {REVIEWS.map(r => (
                <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">{r.name[0]}</div>
                    <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200 ml-auto">✓ Verifiziert</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-gray-400">
              Alle Bewertungen stammen von echten Kunden ·{' '}
              <a href="https://www.google.com/search?q=Fensterservice+ROWO" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Weitere Bewertungen auf Google
              </a>
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">FAQ</span>
              <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-2">
                Häufige Fragen zum Fensterservice {data.city}
              </h2>
              <p className="text-gray-500 text-sm">Antworten auf die wichtigsten Fragen rund um Fensterreparatur in {data.region}.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:bg-blue-50/50 transition-colors [&[data-state=open]]:text-blue-700">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm mb-3">Noch eine andere Frage?</p>
              <a href="tel:+436644351622" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800">
                <Phone className="h-4 w-4" /> +43 664 435 16 22 – wir helfen sofort weiter
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-gradient-to-br from-[#0A3D62] to-slate-800">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              <span className="text-white/80 text-sm ml-2">4,9 von 5 – 500+ Kundenbewertungen</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fensterprobleme in {data.city}?<br />
              <span className="text-blue-300">Wir sind für Sie da.</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Kostenlose Erstberatung, Festpreisangebot &amp; schnelle Reaktionszeit –
              direkt in <strong className="text-white">{data.region}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/kontakt" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A3D62] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-lg">
                <CheckCircle className="h-5 w-5 text-green-600" /> Jetzt kostenlos anfragen
              </Link>
              <a href="tel:+436644351622" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 hover:scale-105 transition-all">
                <Phone className="h-5 w-5" /> +43 664 435 16 22
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/60 text-sm">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {data.region}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 24h Notdienst</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> Kostenlose Beratung</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-blue-300" /> Festpreisgarantie</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
