import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import RepairFocus from "@/components/RepairFocus";
import SpecialServices from "@/components/SpecialServices";
import About from "@/components/About";

export default function UeberUnsPage() {
  return (
    <main>
      {/* Section 1: Introduction to About Us */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Über uns: Ihr vertrauenswürdiger Partner für Fensterservice in Tulln, Wien und Niederösterreich</h1>
        <p className="mb-4">
          Herzlich willkommen bei Ihrem lokalen Experten für Fensterservice. Seit unserer Gründung haben wir uns dem Ziel verschrieben, erstklassige Dienstleistungen rund um das Fenster anzubieten und dabei höchste Standards in Qualität, Zuverlässigkeit und Kundenzufriedenheit zu erfüllen. Unser Unternehmen ist tief in der Region Tulln, Wien und Niederösterreich verwurzelt, und wir sind stolz darauf, ein fester Bestandteil der lokalen Gemeinschaft zu sein. Wir verstehen die spezifischen Anforderungen und Gegebenheiten der Region und können so optimal auf die Bedürfnisse unserer Kunden eingehen. Unser Team besteht aus erfahrenen und hochqualifizierten Fachkräften, die ihr Handwerk verstehen und mit Leidenschaft bei der Arbeit sind.
        </p>
        <p className="mb-4">
          Unsere Geschichte begann mit einer einfachen Vision: einen Fensterservice anzubieten, der sich durch Ehrlichkeit, Transparenz und exzellente Handwerkskunst auszeichnet. Im Laufe der Jahre haben wir uns stetig weiterentwickelt und unser Leistungsangebot erweitert, um den wachsenden Anforderungen unserer Kunden gerecht zu werden. Was uns auszeichnet, ist nicht nur unser technisches Know-how, sondern auch unser Engagement für einen persönlichen und kundenorientierten Service. Wir nehmen uns Zeit für jeden Kunden, hören genau zu und bieten individuelle Lösungen, die auf die jeweilige Situation zugeschnitten sind.
        </p>
      </section>

      {/* Section 2: Our Values and Philosophy */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Unsere Werte und Philosophie</h2>

        {/* Value: Qualität */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Qualität</h3>
          <p className="mb-4">
            Qualität steht bei uns an erster Stelle. Wir verwenden ausschließlich hochwertige Materialien und modernste Werkzeuge, um sicherzustellen, dass unsere Arbeit langlebig und zuverlässig ist. Von der Auswahl der Ersatzteile bis zur Ausführung der Reparatur oder Montage – wir achten auf jedes Detail. Unser Anspruch ist es, nicht nur die Erwartungen unserer Kunden zu erfüllen, sondern sie zu übertreffen.
          </p>
        </div>

        {/* Value: Zuverlässigkeit */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Zuverlässigkeit</h3>
          <p className="mb-4">
            Wir wissen, wie wichtig es ist, sich auf Handwerker verlassen zu können. Deshalb legen wir größten Wert auf Zuverlässigkeit. Wir halten Termine ein, kommunizieren offen und transparent und erledigen unsere Arbeit pünktlich und effizient. Sie können sich darauf verlassen, dass wir da sind, wenn wir sagen, dass wir da sind, und dass wir die vereinbarten Arbeiten sorgfältig ausführen.
          </p>
        </div>

        {/* Value: Kundenzufriedenheit */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Kundenzufriedenheit</h3>
          <p className="mb-4">
            Die Zufriedenheit unserer Kunden ist unser oberstes Ziel. Wir streben danach, jedem Kunden ein positives Erlebnis zu bieten, von der ersten Kontaktaufnahme bis zum Abschluss des Projekts. Wir hören aufmerksam zu, beantworten alle Fragen und gehen auf individuelle Wünsche ein. Unser freundliches und professionelles Team steht Ihnen jederzeit zur Verfügung, um Ihnen zu helfen.
          </p>
        </div>

        {/* Value: Nachhaltigkeit */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Nachhaltigkeit</h3>
          <p className="mb-4">
            Wir sind uns unserer Verantwortung für die Umwelt bewusst und setzen auf nachhaltige Praktiken. Dies umfasst die fachgerechte Entsorgung alter Materialien, die Bevorzugung umweltfreundlicher Produkte und die Optimierung unserer Arbeitsprozesse, um den Energieverbrauch zu minimieren. Wir beraten unsere Kunden auch zu energieeffizienten Fensterlösungen, die nicht nur Kosten sparen, sondern auch die Umwelt schonen.
          </p>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Unser Team: Erfahrene Fachkräfte für Ihr Fenster</h2>
        <p className="mb-4">
          Hinter unserem Erfolg steht ein engagiertes Team von erfahrenen Fachkräften. Jeder Mitarbeiter ist sorgfältig ausgewählt und verfügt über das notwendige Know-how und die Leidenschaft für das Handwerk. Wir arbeiten als Team zusammen, um sicherzustellen, dass jeder Auftrag reibungslos und effizient abläuft. Lernen Sie einige unserer Teammitglieder kennen und erfahren Sie mehr über ihre Expertise.
        </p>
      </section>

      {/* Section 4: Our Commitment to the Region */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Unsere Verbundenheit mit Tulln, Wien und Niederösterreich</h2>
        <p className="mb-4">
          Als lokales Unternehmen fühlen wir uns der Region Tulln, Wien und Niederösterreich eng verbunden. Wir kennen die Besonderheiten der lokalen Architektur und die klimatischen Bedingungen, was uns ermöglicht, maßgeschneiderte Lösungen anzubieten, die perfekt auf die Gegebenheiten abgestimmt sind. Wir sind stolz darauf, Arbeitsplätze in der Region zu schaffen und lokale Lieferanten zu unterstützen.
        </p>
      </section>

      {/* Section 5: Call to Action */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Lernen Sie uns kennen!</h2>
          <p className="text-xl mb-8">Kontaktieren Sie uns noch heute und erfahren Sie mehr über unser Unternehmen und unsere Dienstleistungen.</p>
          <a href="/kontakt" className="bg-white text-brand text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 inline-block">
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}