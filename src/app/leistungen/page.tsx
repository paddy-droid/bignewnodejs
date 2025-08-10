import Head from 'next/head';
import Image from 'next/image';
import Contact from "@/components/Contact";
import ServiceTable from '@/components/ServiceTable';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function LeistungenPage() {
  return (
    <>
      <Head>
        <title>Unsere Leistungen - Fensterservice & Fensterreparatur Wien, NÖ, Tulln</title>
        <meta name="description" content="Umfassender Fensterservice & Fensterreparatur in Wien, NÖ & Tulln. Wartung, Montage, Sicherheitstechnik, Sonnenschutzfolien und Raffstore Textband tausch. Qualität & Zuverlässigkeit für Ihre Fenster." />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center text-white flex items-center" style={{ backgroundImage: "url('/Images/Leistungen Fenstervice und Reparatur Tulln Niederösterreich.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Professioneller Fensterservice</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">Von der Reparatur bis zur Wartung – wir sind Ihr zuverlässiger Partner in Wien, NÖ und Tulln.</p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Jetzt unverbindlich anfragen
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ihre Vorteile mit unserem Service</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Erfahrung & Expertise</h3>
                <p>Langjährige Erfahrung und ein geschultes Team garantieren höchste Qualität.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Qualität & Zuverlässigkeit</h3>
                <p>Wir verwenden nur hochwertige Materialien und halten uns an vereinbarte Termine.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Regionale Nähe</h3>
                <p>Als lokales Unternehmen sind wir schnell bei Ihnen vor Ort in der gesamten Region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Table Section */}
        <ServiceTable />

        {/* Final CTA Section */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Bereit für erstklassigen Fensterservice?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Termin.</p>
            <Link href="/kontakt">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}