import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  AlertCircle,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt – Fensterservice ROWO | Wien, NÖ & Tulln · 24h erreichbar",
  description:
    "Kontaktieren Sie ROWO Fensterservice in Wien, Niederösterreich & Tulln. ✓ Telefon · WhatsApp · E-Mail ✓ 24h-Notdienst ✓ Antwort in unter 24 Stunden.",
  alternates: { canonical: "https://fensterservice-rowo.at/kontakt" },
  openGraph: {
    title: "Kontakt – Fensterservice ROWO | Wien, NÖ & Tulln",
    description:
      "Telefon, WhatsApp oder E-Mail – wählen Sie Ihren bevorzugten Kontaktweg. 24h-Notdienst für Wien & Niederösterreich.",
    url: "https://fensterservice-rowo.at/kontakt",
    siteName: "Fensterservice ROWO",
    locale: "de_AT",
    type: "website",
  },
};

const PHONE_DISPLAY = "+43 664 435 1622";
const PHONE_TEL = "+436644351622";
const WHATSAPP = "https://wa.me/436644351622";
const EMAIL = "info@fensterservice-rowo.at";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fensterservice-rowo.at/#localbusiness",
  name: "Fensterservice ROWO",
  url: "https://fensterservice-rowo.at",
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  image: "https://fensterservice-rowo.at/Images/Fenster%20Service%20Rowo%20Team.png",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Am Wiesengrund 1",
    postalCode: "3452",
    addressLocality: "Michelndorf",
    addressRegion: "Niederösterreich",
    addressCountry: "AT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.2916, longitude: 16.0297 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  areaServed: [
    "Wien",
    "Tulln",
    "St. Pölten",
    "Krems",
    "Baden bei Wien",
    "Klosterneuburg",
    "Niederösterreich",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_DISPLAY,
      contactType: "customer service",
      areaServed: "AT",
      availableLanguage: ["German"],
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_DISPLAY,
      contactType: "emergency",
      areaServed: "AT",
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
  ],
};

const regions = [
  { name: "Wien", href: "/wien" },
  { name: "Tulln", href: "/tulln" },
  { name: "St. Pölten", href: "/st-poelten" },
  { name: "Krems", href: "/krems" },
  { name: "Baden bei Wien", href: "/baden-bei-wien" },
  { name: "Klosterneuburg", href: "/klosterneuburg" },
];

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-gray-50">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0A3D62]">
          {/* Subtle radial pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/95 to-slate-900/90" />

          <div className="relative z-10 container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white/90">
                4,9 · 500+ Kunden · Antwort in unter 24 h
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              <span className="block">So erreichen Sie uns</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Wien, Niederösterreich &amp; Tulln
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Wählen Sie den Kontaktweg, der zu Ihnen passt – telefonisch,
              per WhatsApp oder E-Mail. Bei akuten Schäden ist unser{" "}
              <strong className="text-white">24h-Notdienst</strong> rund um die
              Uhr für Sie da.
            </p>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-blue-300" />
                <span>Zertifizierter Fachbetrieb</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Festpreisgarantie</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS – overlap into hero for depth */}
        <section className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {/* Phone */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-7 border border-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A3D62] text-white mb-5 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Direkt anrufen
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Schnellster Weg zu einem persönlichen Gespräch
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#0A3D62]">
                  {PHONE_DISPLAY}
                </span>
                <ArrowRight className="h-5 w-5 text-[#0A3D62] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-7 border border-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-500 text-white mb-5 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                WhatsApp schreiben
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Foto vom Schaden senden – wir melden uns mit Einschätzung
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-green-600">
                  Chat starten
                </span>
                <ArrowRight className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Emergency */}
            <Link
              href="/notdienst"
              className="group relative bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-7 border border-red-500 overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full">
                24/7
              </div>
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm mb-5 group-hover:scale-110 transition-transform">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold mb-1">Notdienst</h2>
              <p className="text-white/85 text-sm mb-4">
                Glasbruch, Einbruch, defekte Schließung – wir kommen sofort
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  Notdienst rufen
                </span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* CONTACT DETAILS + MAP */}
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto items-stretch">
            {/* Details */}
            <div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content="Fensterservice ROWO" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Ihr direkter Draht zu uns
              </h2>
              <p className="text-gray-600 mb-8">
                Persönlich, regional und ohne Warteschleife. Unser Team meldet
                sich werktags in der Regel innerhalb weniger Stunden.
              </p>

              <div className="space-y-7">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 text-[#0A3D62] flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Standort
                    </p>
                    <address
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                      className="not-italic text-gray-600 leading-relaxed"
                    >
                      <span itemProp="streetAddress">Am Wiesengrund 1</span>
                      <br />
                      <span itemProp="postalCode">3452</span>{" "}
                      <span itemProp="addressLocality">Michelndorf</span>
                      <br />
                      <span itemProp="addressCountry">Österreich</span>
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 text-[#0A3D62] flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefon</p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      itemProp="telephone"
                      className="text-gray-700 hover:text-[#0A3D62] font-medium"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 text-[#0A3D62] flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-Mail</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      itemProp="email"
                      className="text-gray-700 hover:text-[#0A3D62] font-medium break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 text-[#0A3D62] flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">
                      Geschäftszeiten
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex justify-between gap-6">
                        <span>Montag – Donnerstag</span>
                        <span className="font-medium text-gray-800">
                          08:00 – 17:00
                        </span>
                      </li>
                      <li className="flex justify-between gap-6">
                        <span>Freitag</span>
                        <span className="font-medium text-gray-800">
                          08:00 – 12:00
                        </span>
                      </li>
                      <li className="flex justify-between gap-6 pt-2 border-t border-gray-100 mt-2">
                        <span className="font-semibold text-red-600">
                          24h-Notdienst
                        </span>
                        <span className="font-medium text-red-600">
                          rund um die Uhr
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 min-h-[400px] lg:min-h-0">
              <iframe
                title="Standort von Fensterservice ROWO in Michelndorf"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43264.93207327197!2d16.02968877789167!3d48.29164877131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d06ab78c3b7f3%3A0x13bf4f7c80397c25!2sMichelndorf!5e0!3m2!1sen!2sat!4v1682452988849!5m2!1sen!2sat"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* SERVICE REGIONS */}
        <section className="bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Vor Ort in Ihrer Region
              </h2>
              <p className="text-gray-600 text-lg">
                Wir betreuen Wien und ganz Niederösterreich – mit
                spezialisierten Service-Standorten in den wichtigsten Städten.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {regions.map((region) => (
                <Link
                  key={region.href}
                  href={region.href}
                  className="group flex items-center justify-between gap-3 bg-gray-50 hover:bg-[#0A3D62] hover:text-white border border-gray-100 rounded-xl px-5 py-4 transition-all duration-200"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <MapPin className="h-5 w-5 text-[#0A3D62] group-hover:text-cyan-300 transition-colors" />
                    Fensterservice {region.name}
                  </span>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A3D62] to-slate-900 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Lieber gleich anrufen?
              </h2>
              <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
                Schildern Sie uns Ihr Anliegen – wir geben Ihnen direkt am
                Telefon eine ehrliche Einschätzung und nennen einen
                realistischen Termin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="w-full sm:w-auto bg-white text-[#0A3D62] px-8 py-4 text-base font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-green-400 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
