import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import RepairFocus from "@/components/RepairFocus";
import SpecialServices from "@/components/SpecialServices";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import ServiceTable from "@/components/ServiceTable";
import ShutterRepairSection from "@/components/ShutterRepairSection";
import VeluxServiceSection from "@/components/VeluxServiceSection";
import BlogPreview from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "Fensterservice ROWO – Fensterreparatur Wien, NÖ & Tulln | 24h Notdienst",
  description:
    "Professionelle Fensterreparatur & Fensterservice in Wien, Niederösterreich & Tulln ✓ 24h Notdienst ✓ Kostenlose Beratung ✓ Festpreisgarantie. Jetzt anfragen!",
  alternates: {
    canonical: "https://fensterservice-rowo.at/",
  },
  openGraph: {
    title: "Fensterservice ROWO – Fensterreparatur Wien & Niederösterreich",
    description:
      "Ihr Experte für Fensterreparatur, Türreparatur & Rollladenservice in Wien & NÖ. 24h Notdienst. Jetzt kostenlos anfragen!",
    url: "https://fensterservice-rowo.at/",
    siteName: "Fensterservice ROWO",
    locale: "de_AT",
    type: "website",
  },
  keywords: [
    "Fensterreparatur Wien",
    "Fensterservice Niederösterreich",
    "Fensterreparatur Tulln",
    "Rollladen Reparatur Wien",
    "Türreparatur Wien",
    "24h Notdienst Fenster",
    "Fenster einstellen Wien",
    "Sonnenschutz Reparatur NÖ",
    "Insektenschutz Wien",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <RepairFocus />
      <Services />
      <SpecialServices />
      <HowItWorks />
      <ServiceTable />
      <About />
      <FAQ />
      <ShutterRepairSection />
      <VeluxServiceSection />
      <BlogPreview />
      <Contact />
    </main>
  );
}
