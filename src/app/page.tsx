import Head from 'next/head';
import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Import the Services component
import Contact from "@/components/Contact"; // Import the Contact component
import RepairFocus from "@/components/RepairFocus";
import SpecialServices from "@/components/SpecialServices";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks"; // Import the new component
import ServiceTable from "@/components/ServiceTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fensterservice ROWO - Fensterreparatur Wien, NÖ, Tulln</title>
        <meta name="description" content="Ihr Experte für Fensterreparatur & Fensterservice in Wien, Niederösterreich & Tulln. Schnelle Hilfe bei Fensterproblemen. Kontaktieren Sie uns!" />
        <link rel="canonical" href="https://fensterservice-rowo.at/"/>
      </Head>
      <main>
        <Hero />

        {/* Repair Focus Section */}
        <RepairFocus />

        {/* Services Section */}
        <Services />

        {/* Special Services Section */}
        <SpecialServices />

        {/* How It Works Section */}
        <HowItWorks />

        <ServiceTable />

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
