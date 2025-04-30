import Head from 'next/head';
import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Import the Services component
import Contact from "@/components/Contact"; // Import the Contact component
import RepairFocus from "@/components/RepairFocus";
import SpecialServices from "@/components/SpecialServices";
import About from "@/components/About";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fensterservice ROWO - Fensterreparatur Wien, NÖ, Tulln</title>
        <meta name="description" content="Ihr Experte für Fensterreparatur & Fensterservice in Wien, Niederösterreich & Tulln. Schnelle Hilfe bei Fensterproblemen. Kontaktieren Sie uns!" />
<meta name="google-site-verification" content="EQPajf2paCExhJQbaP4P1rFPaS1zYxoN6kxwO1bPxUI" />
      </Head>
      <main>
        <Hero />

        {/* Repair Focus Section */}
        <RepairFocus />

        {/* Services Section */}
        <Services />

        {/* Special Services Section */}
        <SpecialServices />

        {/* About Section */}
        <About />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />

      </main>
    </>
  );
}
