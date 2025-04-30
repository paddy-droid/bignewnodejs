import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Import the Services component
import Contact from "@/components/Contact"; // Import the Contact component
import RepairFocus from "@/components/RepairFocus";
import SpecialServices from "@/components/SpecialServices";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
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

      {/* Call-to-Action Banner */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Bereit für erstklassigen Fensterservice?</h2>
          <p className="text-xl mb-8">Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder einen Termin.</p>
          <Button size="lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </main>
  );
}
