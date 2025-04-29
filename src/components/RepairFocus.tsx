"use client";
// Trigger re-check
import Image from 'next/image'; // Import the Image component
import ExpandableRepairContent from "./ExpandableRepairContent"; // Import the new Client Component

const RepairFocus = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="repair-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:flex-row-reverse">
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <h2 id="repair-heading" className="text-4xl font-bold text-gray-900">
              Service- und Reparaturarbeiten in Wien & Niederösterreich
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Fenster, Türen, Sonnenschutz oder Insektenschutz</strong> – bei uns sind Sie richtig! Wir sind Ihr verlässlicher Partner für <strong>Service- und Reparaturarbeiten in Wien und Niederösterreich</strong>. Egal ob kleinere Defekte oder umfassende Reparaturen: Wir packen Probleme an der Wurzel, damit Sie langfristig Freude an Ihren Bauelementen haben.
            </p>

            {/* Client Component for expandable content */}
            <div>
              <ExpandableRepairContent />
            </div>

          </div>

          <figure className="relative aspect-video overflow-hidden rounded-xl shadow-2xl order-1 lg:order-2 animate-fade-in">
            <Image
              src="https://raw.githubusercontent.com/paddy-droid/bignewnodejs/master/fensterservice/public/lovable-uploads/fenster%20service%20reparatur.jpg"
              alt="Fensterservice Reparatur"
              className="w-full h-full object-cover"
              fill // Use fill to make the image cover the parent container
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // Add appropriate sizes
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default RepairFocus;