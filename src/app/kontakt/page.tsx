import Head from 'next/head';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>Kontakt - Fensterservice ROWO | Wien, NÖ, Tulln</title>
        <meta name="description" content="Kontaktieren Sie Fensterservice ROWO für Reparatur und Wartung in Wien, NÖ & Tulln. Rufen Sie an oder schreiben Sie uns eine E-Mail für schnelle Hilfe." />
      </Head>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-64 md:h-80">
            <Image 
                src="/Images/Leistungen Fenstervice und Reparatur Tulln Niederösterreich.jpg" 
                alt="Kontaktieren Sie Fensterservice ROWO" 
                layout="fill"
                objectFit="cover"
                className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center tracking-tighter">
                    Kontaktieren Sie uns
                </h1>
            </div>
        </section>

        {/* Introduction Text */}
        <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ihr direkter Draht zu uns</h2>
                <p className="text-lg text-gray-600">
                    Haben Sie Fragen, benötigen eine Beratung oder möchten einen Termin vereinbaren? Wir sind für Sie da! Wählen Sie die für Sie passende Kontaktmöglichkeit. Unser Team in der Region Tulln, St. Pölten und Wien freut sich darauf, Ihnen schnell und kompetent weiterzuhelfen.
                </p>
            </div>
        </section>

        {/* Contact Details Section */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Column: Phone and Mail */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Phone className="w-7 h-7 mr-3 text-blue-600"/>
                    Telefonischer Kontakt
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Für eine schnelle und persönliche Beratung erreichen Sie uns am besten telefonisch. Wir freuen uns auf Ihren Anruf!
                  </p>
                  <a href="tel:+436644351622" className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors inline-block">+43 664 435 1622</a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Mail className="w-7 h-7 mr-3 text-blue-600"/>
                    Anfrage per E-Mail
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Schreiben Sie uns Ihr Anliegen per E-Mail. Wir bearbeiten Ihre Anfrage in der Regel innerhalb von 24 Stunden.
                  </p>
                  <a href="mailto:info@fensterservice-rowo.at" className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors inline-block">info@fensterservice-rowo.at</a>
                </div>
              </div>

              {/* Right Column: Address and Opening Hours */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <MapPin className="w-7 h-7 mr-3 text-blue-600"/>
                    Unser Standort
                  </h3>
                  <p className="text-gray-600">
                    Am Wiesengrund 1<br/>
                    3452 Michelndorf<br/>
                    Österreich
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Clock className="w-7 h-7 mr-3 text-blue-600"/>
                    Geschäftszeiten
                  </h3>
                  <p className="text-gray-600">
                    Mo–Do: 08:00 – 17:00 Uhr<br/>
                    Fr: 08:00 – 12:00 Uhr<br/>
                    <span className="font-semibold">24h-Notdienst verfügbar</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
             <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                title="Standort von Fensterservice Rowo in Michelndorf"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43264.93207327197!2d16.02968877789167!3d48.29164877131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d06ab78c3b7f3%3A0x13bf4f7c80397c25!2sMichelndorf!5e0!3m2!1sen!2sat!4v1682452988849!5m2!1sen!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
      </main>
    </>
  );
}