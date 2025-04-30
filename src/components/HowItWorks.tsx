import React from 'react';
import { Mail, Phone, CalendarCheck, Wrench } from "lucide-react"; // Importing relevant icons

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-100"> {/* Use a background color to differentiate the section */}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">So funktioniert unser Fensterservice in 3 Schritten</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <Mail size={48} className="text-blue-600" /> {/* Icon for step 1 */}
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Anfrage senden</h3>
            <p className="text-gray-700">
              Der erste Schritt zu funktionierenden Fenstern ist ganz einfach: Senden Sie uns Ihre Anfrage! Sie können uns bequem per E-Mail kontaktieren oder uns direkt anrufen. Beschreiben Sie uns kurz Ihr Anliegen – ob es sich um eine dringende Reparatur, eine geplante Wartung oder eine allgemeine Frage zu unseren Dienstleistungen handelt. Unser freundliches Team steht bereit, Ihre Anfrage entgegenzunehmen und den Prozess schnellstmöglich in die Wege zu leiten. Wir wissen, dass Fensterprobleme oft unerwartet auftreten, daher bemühen wir uns um eine unkomplizierte und schnelle Kontaktaufnahme. Ihre Zufriedenheit beginnt mit einer einfachen Nachricht oder einem Anruf bei uns.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <CalendarCheck size={48} className="text-green-600" /> {/* Icon for step 2 */}
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Kostenlose Beratung & Termin</h3>
            <p className="text-gray-700">
              Nachdem Ihre Anfrage bei uns eingegangen ist, melden wir uns umgehend bei Ihnen – in der Regel innerhalb von 24 Stunden. Wir bieten Ihnen eine kostenlose und unverbindliche Beratung an. Dabei besprechen wir Ihr spezifisches Fensterproblem, klären alle offenen Fragen und finden gemeinsam die beste Lösung für Sie. Basierend auf dieser Beratung vereinbaren wir einen passenden Termin für die Begutachtung oder Reparatur direkt bei Ihnen vor Ort. Wir legen Wert auf Transparenz und stellen sicher, dass Sie genau wissen, was zu erwarten ist, bevor wir mit der Arbeit beginnen.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <Wrench size={48} className="text-red-600" /> {/* Icon for step 3 */}
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Fachgerechte Reparatur vor Ort</h3>
            <p className="text-gray-700">
              Zum vereinbarten Termin kommt unser qualifiziertes Team direkt zu Ihnen. Wir führen die notwendige Fensterreparatur oder den Fensterservice fachgerecht, effizient und sauber vor Ort durch. Dank unserer Erfahrung und der Ausstattung mit den gängigsten Ersatzteilen können viele Probleme sofort behoben werden. Wir arbeiten präzise und sorgfältig, um die volle Funktionalität und Sicherheit Ihrer Fenster wiederherzustellen. Nach Abschluss der Arbeiten hinterlassen wir Ihren Bereich sauber und ordentlich. Vertrauen Sie auf unsere Expertise für eine schnelle, zuverlässige und professionelle Lösung Ihrer Fensterprobleme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;