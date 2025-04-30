import Head from 'next/head';

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>Kontakt - Fensterservice & Fensterreparatur Wien, NÖ, Tulln</title>
        <meta name="description" content="Kontaktieren Sie uns für Fensterservice & Fensterreparatur in Wien, NÖ, Tulln. Telefon, E-Mail, Formular. Schnelle Bearbeitung Ihrer Anfragen." />
      </Head>
      <main className="pt-20"> {/* Added padding top to prevent content from being hidden by fixed header */}
      {/* Section 1: Introduction to Contact */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Kontaktieren Sie uns: Ihr direkter Draht zum Fensterservice Experten</h1>
        <p className="mb-4">
          Haben Sie Fragen zu unseren Leistungen, benötigen Sie eine unverbindliche Beratung oder möchten Sie einen Termin für eine <strong>Fensterreparatur</strong> oder <strong>Wartung</strong> vereinbaren? Wir sind gerne für Sie da! Nutzen Sie die untenstehenden <strong>Kontakt</strong>möglichkeiten, um mit uns in Verbindung zu treten. Unser freundliches und kompetentes Team steht Ihnen zur Verfügung, um Ihre Anliegen schnell und effizient zu bearbeiten. Wir wissen, dass Ihre Zeit wertvoll ist, und bemühen uns, Ihre Anfragen so schnell wie möglich zu beantworten. Egal ob es sich um eine kleine <strong>Reparatur</strong>, eine umfangreiche Sanierung oder die Planung eines Neubaus handelt, wir beraten Sie umfassend und finden die passende Lösung für Ihre Bedürfnisse. Wir legen Wert auf exzellenten <strong>Kundenservice</strong>.
        </p>
        <p className="mb-4">
          Die <strong>Kontakt</strong>aufnahme mit uns ist einfach und unkompliziert. Sie können uns telefonisch erreichen, eine E-Mail senden oder unser <strong>Kontakt</strong>formular auf dieser Seite nutzen. Wir sind bestrebt, Ihnen den bestmöglichen Service zu bieten, beginnend mit einer reibungslosen und angenehmen Kommunikation. Unser Team ist geschult, auf Ihre Fragen einzugehen und Ihnen die Informationen zu geben, die Sie benötigen. Wir verstehen, dass jedes Anliegen individuell ist, und nehmen uns die Zeit, Ihre spezifische Situation zu verstehen, bevor wir Lösungen vorschlagen. Vertrauen Sie auf unsere <strong>Zuverlässigkeit</strong> und <strong>Qualität</strong>.
        </p>
{/* Placeholder for a relevant image */}
        <img src="/Images/window.svg" alt="Relevant image for Kontakt page" className="w-full h-auto max-h-96 object-cover mb-6 rounded-md"/>
        {/* TODO: Replace with a suitable free image */}
      </section>

      {/* Section 2: Contact Information */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Unsere Kontaktdaten</h2>

        {/* Contact Method: Telefon */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Telefon</h3>
          <p className="mb-4">
            Rufen Sie uns an! Wir sind während unserer Geschäftszeiten telefonisch für Sie erreichbar. Bei dringenden Notfällen außerhalb der Geschäftszeiten hinterlassen Sie bitte eine Nachricht, und wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <p className="text-xl font-bold text-brand">Telefonnummer: <a href="tel:+436644351622" className="hover:text-brand-dark transition-colors">+43 664 435 1622</a></p>
        </div>

        {/* Contact Method: E-Mail */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">E-Mail</h3>
          <p className="mb-4">
            Schreiben Sie uns eine E-Mail mit Ihrem Anliegen. Wir beantworten Ihre E-Mail so schnell wie möglich, in der Regel innerhalb von 24 Stunden an Werktagen.
          </p>
          <p className="text-xl font-bold text-brand">E-Mail Adresse: <a href="mailto:info@fensterservice-rowo.at" className="hover:text-brand-dark transition-colors">info@fensterservice-rowo.at</a></p>
        </div>

        {/* Contact Method: Kontaktformular */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Kontaktformular</h3>
          <p className="mb-4">
            Nutzen Sie unser Online-Kontaktformular, um uns direkt eine Nachricht zu senden. Füllen Sie einfach die Felder aus und klicken Sie auf &quot;Senden&quot;. Wir werden Ihre Anfrage umgehend bearbeiten.
          </p>
          {/* Placeholder for Contact Form Component */}
          {/* <ContactForm /> */}
        </div>

        {/* Contact Method: Adresse */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Besuchen Sie uns</h3>
          <p className="mb-4">
            Sie können uns auch persönlich an unserem Standort besuchen. Bitte vereinbaren Sie vorab einen Termin, um sicherzustellen, dass der richtige Ansprechpartner für Sie verfügbar ist.
          </p>
          <p className="text-xl font-bold text-brand">Unsere Adresse: Am Wiesengrund 1, 3452 Michelndorf</p>
        </div>
      </section>

      {/* Section 3: Service Area */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Unser Servicegebiet: Tulln, Wien und Niederösterreich</h2>
        <p className="mb-4">
          Wir sind stolz darauf, unsere Dienstleistungen in <strong>Tulln</strong>, <strong>Wien</strong> und ganz <strong>Niederösterreich</strong> anzubieten. Dank unserer lokalen Präsenz können wir schnell auf Ihre Anfragen reagieren und sind flexibel bei der Terminvereinbarung. Egal wo in dieser Region Sie sich befinden, wir sind Ihr <strong>zuverlässig</strong>er Partner für alle Anliegen rund um das Fenster. Unser Servicegebiet umfasst diese wichtigen Regionen, um Ihnen schnell und effizient helfen zu können.
        </p>
      </section>

      {/* Section 4: Call to Action */}
      <section className="bg-brand text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Bereit, uns zu kontaktieren?</h2>
          <p className="text-xl mb-8 text-white">Wählen Sie die für Sie passende Methode und lassen Sie uns wissen, wie wir Ihnen helfen können.</p>
          <a href="#contact-form" className="bg-white text-brand !text-[#0A3D62] text-lg font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition duration-300 inline-block">
            Kontaktformular nutzen
          </a>
        </div>
      </section>

      {/* Contact Section - Using the existing Contact component is redundant on the contact page */}
      {/* <Contact /> */}
    </main>
    </>
  );
}