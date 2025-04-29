"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const ExpandableRepairContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className={`space-y-8 transition-all duration-500 ${isExpanded ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
        aria-hidden={!isExpanded}
      >
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Unser Serviceangebot für Wien & Niederösterreich:
          </h3>
          <ul className="space-y-6">
            {[
              {
                title: 'Vollumfängliche Problemanalyse',
                description: 'Wir untersuchen Bauteile und Substanz genauestens, um Ursachen gezielt zu erkennen.'
              },
              {
                title: 'Organisation und Durchführung von Begleitarbeiten',
                description: 'Wir koordinieren bei Bedarf zusätzliche Handwerksarbeiten für Sie.'
              },
              {
                title: 'Behebung von Defekten an der Schließfunktion',
                description: 'Wir reparieren Schließmechanismen fachgerecht und stellen volle Funktionalität her.'
              }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowRight className="h-6 w-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ihre Vorteile auf einen Blick:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {[
              'Lokaler Fachbetrieb mit schneller Verfügbarkeit',
              'Langjährige Erfahrung',
              'Transparente Beratung & faire Preise',
              'Individuelle Lösungen'
            ].map((point, idx) => (
              <li key={idx} className="flex items-center">
                <span aria-hidden="true">✓</span>
                <span className="ml-2">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 transition-transform hover:scale-105"
        size="lg"
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren'}
        <ArrowRight className={`ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
      </Button>
    </>
  );
};

export default ExpandableRepairContent;