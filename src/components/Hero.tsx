import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Fenster reparieren & warten in NÖ & Wien
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Schnelle und zuverlässige Hilfe für Ihre Fenster.
        </p>
        <button className="bg-brand text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-brand-dark transition duration-300">
          Jetzt Termin vereinbaren
        </button>
      </div>
    </section>
  );
};

export default Hero;