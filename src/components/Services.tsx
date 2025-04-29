import React from "react";
import {
  Square,
  Home,
  Sun,
  Shield,
  DoorClosed,
} from "lucide-react";
import ExpandableServiceCard from "./ExpandableServiceCard"; // Import the new Client Component

/**
 * Optimierte Services‑Sektion mit "Mehr lesen"‑Buttons.
 * – Alle Styles sind inline gehalten, um maximale Kontrolle zu gewährleisten.
 * – Zusätzliche SEO‑optimierte Texte werden bei Bedarf eingeblendet.
 */
const Services = () => {
  const services = [
    {
      icon: DoorClosed,
      title: "Fenster- & Türreparatur",
      description:
        "Fachgerechte Reparatur von Schließmechanismen, Dichtungen und Rahmen für optimale Energieeffizienz und Sicherheit.",
      moreText: [
        "Unsere Spezialisten analysieren jede Undichtigkeit präzise und setzen auf ",
        { type: 'bold', text: 'hochwertige Ersatzteile' },
        ", um ",
        { type: 'bold', text: 'Wärmeverluste' },
        " dauerhaft zu reduzieren. Durch justierte Beschläge und erneuerte Dichtprofile steigern wir den ",
        { type: 'bold', text: 'Einbruchschutz' },
        " und senken spürbar Ihre ",
        { type: 'bold', text: 'Heizkosten' },
        " – perfekt für nachhaltiges Wohnen und besseres Raumklima."
      ]
    },
    {
      icon: Sun,
      title: "Sonnenschutzlösungen",
      description:
        "Reparatur und Maßanfertigung von Sonnenschutzsystemen für optimale Licht- und Wärmeregulierung.",
      moreText: [
        "Von modernen Raffstores bis zu klassischen Markisen bieten wir ",
        { type: 'bold', text: 'passgenaue Lösungen' },
        ", die ",
        { type: 'bold', text: 'UV-Strahlung' },
        " filtern und Räume angenehm temperieren. Mit ",
        { type: 'bold', text: 'langlebigen Stoffen' },
        " und smarter Automatisierung schützen wir vor Überhitzung, verlängern die Lebensdauer Ihres Mobiliars und steigern gleichzeitig den ",
        { type: 'bold', text: 'energetischen Gesamtwert' },
        " Ihrer Immobilie."
      ]
    },
    {
      icon: Shield,
      title: "Insektenschutzsysteme",
      description:
        "Individuelle Insektenschutzgitter mit hochwertigen Materialien für optimalen Schutz bei voller Luftdurchlässigkeit.",
      moreText: [
        { type: 'bold', text: 'Millimetergenaue Maßanfertigungen' },
        " aus beschichtetem Aluminium sorgen für ",
        { type: 'bold', text: 'höchste Stabilität' },
        " und ungestörten Luftaustausch. Pulverbeschichtete Rahmen widerstehen Witterungseinflüssen, während feinmaschige Gewebe selbst Pollen abhalten. So genießen Sie ",
        { type: 'bold', text: 'frische Luft ohne Insekten' },
        " – ideal für Allergiker und gesundes Wohnen."
      ]
    },
    {
      icon: Square,
      title: "Rollladenservice",
      description:
        "Wartung und Reparatur von Rollläden für verbesserten Einbruchschutz und Energieeffizienz.",
      moreText: [
        "Ob Gurtband‑Wechsel, Motor‑Nachrüstung oder Dämmung der Rollladenkästen – wir optimieren Ihre Anlage für ",
        { type: 'bold', text: 'leises Laufverhalten' },
        " und ",
        { type: 'bold', text: 'maximale Wärmedämmung' },
        ". Moderne ",
        { type: 'bold', text: 'Sicherheitsprofile' },
        " erschweren unbefugtes Öffnen, während smarte Steuerungen den Komfort erhöhen und Tageslicht optimal nutzen."
      ]
    },
    {
      icon: Home,
      title: "Service für Hausverwaltungen",
      description:
        "Individuelle Servicepakete für Geschäftskunden und Betreuung von Großobjekten.",
      moreText: [
        "Als ",
        { type: 'bold', text: 'zuverlässiger Partner' },
        " übernehmen wir die komplette Koordination von ",
        { type: 'bold', text: 'Wartungszyklen' },
        ", ",
        { type: 'bold', text: 'Notfallreparaturen' },
        " und Modernisierungsmaßnahmen. ",
        { type: 'bold', text: 'Digitale Berichtserstellung' },
        ", ",
        { type: 'bold', text: 'transparente Kostenaufstellungen' },
        " und feste Ansprechpartner sorgen für ",
        { type: 'bold', text: 'effiziente Prozesse' },
        " – von der Einliegerwohnung bis zur Wohnanlage."
      ]
    }
  ];

  const cardStyle: React.CSSProperties = {
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    padding: "24px",
    borderRadius: "14px",
    transition: "box-shadow 0.3s ease",
    backgroundColor: "#ffffff"
  };

  const iconWrapperStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#dbeafe", // Tailwind blue-100
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px"
  };

  return (
    <section
      id="services"
      style={{ padding: "80px 0", backgroundColor: "#f9fafb" }} // Tailwind gray-50
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 16px" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "12px"
          }}
        >
          Unsere Leistungen im Überblick
        </h2>
        <p
          style={{
            maxWidth: "768px",
            margin: "0 auto 48px auto",
            textAlign: "center",
            color: "#4b5563" // Tailwind gray-600
          }}
        >
          Vollumfängliche Reparatur‑ und Serviceleistungen mit gründlicher Ursachenforschung für nachhaltige Ergebnisse
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px"
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="border-none shadow-md p-6 rounded-xl transition-shadow duration-300 bg-white hover:shadow-lg" // Replaced inline styles and event handlers with Tailwind classes
              >
                <div style={iconWrapperStyle} aria-hidden="true">
                  <Icon size={24} strokeWidth={2} color="#2563eb" /* blue-600 */ />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>
                  {service.title}
                </h3>
                {/* Client Component for expandable content and button */}
                <ExpandableServiceCard service={service} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;