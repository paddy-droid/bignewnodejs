import React from 'react';
import { Mail, CalendarCheck, Wrench, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Anfrage senden',
    color: 'from-blue-500 to-blue-700',
    lightColor: 'bg-blue-50',
    accentColor: 'text-blue-600',
    keywords: ['kostenlos', 'unverbindlich', '24h Rückmeldung'],
    description:
      'Schildern Sie uns kurz Ihr Fensterproblem – per Anruf, WhatsApp oder Kontaktformular. Kein langes Warten: Wir melden uns <strong>innerhalb von 24 Stunden</strong>.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Kostenlose Beratung & Termin',
    color: 'from-green-500 to-green-700',
    lightColor: 'bg-green-50',
    accentColor: 'text-green-600',
    keywords: ['Vor-Ort-Besichtigung', 'transparentes Angebot', 'Wunschtermin'],
    description:
      'Wir analysieren das Problem, erstellen ein <strong>transparentes Festpreisangebot</strong> und vereinbaren flexibel einen Wunschtermin – auch am Wochenende.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Fachgerechte Reparatur vor Ort',
    color: 'from-orange-500 to-orange-700',
    lightColor: 'bg-orange-50',
    accentColor: 'text-orange-600',
    keywords: ['Sofortreparatur', 'sauber', 'Garantie'],
    description:
      'Unser Techniker erledigt die <strong>Fensterreparatur direkt bei Ihnen</strong> – mit den häufigsten Ersatzteilen im Fahrzeug. Nach der Arbeit ist alles sauber und Sie erhalten Garantie.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Einfacher Ablauf
          </span>
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            So funktioniert unser Fensterservice
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Von der Anfrage bis zur fertigen <strong>Fensterreparatur in Wien &amp; NÖ</strong> – in nur 3 einfachen Schritten.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col">
                <div className={`${step.lightColor} rounded-2xl p-7 h-full shadow-sm border border-white hover:shadow-md transition-shadow`}>
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`bg-gradient-to-br ${step.color} text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-5xl font-black ${step.accentColor} opacity-20 leading-none`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />

                  {/* Keywords / Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.keywords.map((kw) => (
                      <span key={kw} className={`text-xs font-semibold ${step.accentColor} bg-white px-2.5 py-1 rounded-full border border-current/20`}>
                        ✓ {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="flex md:hidden justify-center my-2">
                    <ArrowRight className="h-5 w-5 text-gray-300 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
