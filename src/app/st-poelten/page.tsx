import type { Metadata } from 'next';
import RegionPage, { RegionData } from '@/components/RegionPage';

export const metadata: Metadata = {
  title: 'Fensterservice St. Pölten – Fensterreparatur St. Pölten ✓ 24h | ROWO',
  description: 'Fensterreparatur St. Pölten & NÖ-Landeshauptstadt ✓ 24h Notdienst ✓ Wohnanlagen & Betriebe ✓ Festpreisangebot ✓ kostenlose Beratung. Jetzt anfragen!',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/st-poelten' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fensterservice St. Pölten – Fensterreparatur | ROWO',
    description: 'Professionelle Fensterreparatur in St. Pölten – schnell, zuverlässig, mit 24h Notdienst.',
    url: 'https://www.fensterservice-rowo.at/st-poelten',
    locale: 'de_AT', type: 'website',
  },
  other: {
    'geo.region': 'AT-3',
    'geo.placename': 'St. Pölten',
    'geo.position': '48.2058;15.6232',
    'ICBM': '48.2058, 15.6232',
  },
};

const data: RegionData = {
  city: 'St. Pölten',
  region: 'St. Pölten & Umgebung',
  slug: 'st-poelten',
  imageSrc: '/Images/Fensterservice Tulln.webp',
  imageAlt: 'Fensterservice St. Pölten – Fensterreparatur in der NÖ-Landeshauptstadt',
  description: 'Professionelle Fensterreparatur in St. Pölten und der Umgebung der Landeshauptstadt Niederösterreichs – schnelle Reaktionszeit, faire Festpreise.',
  geo: { lat: '48.2058', lng: '15.6232', region: 'AT-3' },

  localFeatures: [
    { title: 'Landeshauptstadt & Umland', text: 'St. Pölten wächst – von modernen Neubauvierteln bis zu sanierten Altbauten in der Innenstadt kennen wir alle Fenstertypen der Region.' },
    { title: 'Schnelle Erreichbarkeit', text: 'Durch unsere gute Anbindung über A1 und S33 sind wir schnell in St. Pölten und den umliegenden Gemeinden – ohne langen Vorlauf.' },
    { title: 'Wohnanlagen & Gewerbeobjekte', text: 'Wir betreuen Hausverwaltungen, Wohnbaugesellschaften und Gewerbebetriebe mit maßgeschneiderten Wartungsverträgen.' },
  ],

  problems: [
    { title: 'Klemmende & schwergängige Fenster', description: 'Fehleinstellung oder Verschleiß der Beschläge – wir justieren und schmieren fachgerecht für leichte, sichere Bedienung.' },
    { title: 'Undichte Fenster & Zugluft', description: 'Poröse Dichtungen kosten Heizenergie. Wir tauschen Dichtprofile aus und stellen den Flügel neu ein.' },
    { title: 'Defekte Griffe & Mechanismen', description: 'Kaputter Fenstergriff oder klemmendes Dreh-/Kippsystem – Austausch meist direkt beim ersten Termin.' },
    { title: 'Glasbruch & Scheibenersatz', description: 'Einfach-, Isolier- oder Sicherheitsglas – wir ersetzen Scheiben schnell und fachgerecht.' },
    { title: 'Rollladen & Markisen', description: 'Gurtband gerissen, Lamellen verbogen oder Motor defekt – wir reparieren alle Rollläden und Sonnenschutzsysteme.' },
    { title: 'Einbruchschutz Nachrüstung', description: 'Mehrfachverriegelung, Sicherheitsbeschläge und Panzerriegel für erhöhten Einbruchschutz in St. Pölten.' },
  ],

  serviceAreas: [
    'St. Pölten Stadt', 'St. Pölten Land', 'Kapelln', 'Herzogenburg',
    'Traismauer', 'Wilhelmsburg', 'Böheimkirchen', 'Pyhra',
    'Wölbling', 'Prinzersdorf', 'Rabenstein an der Pielach', 'Pöchlarn', 'Melk',
  ],

  faqItems: [
    {
      question: 'Was kostet eine Fensterreparatur in St. Pölten?',
      answer: 'Eine Beschlagjustierung in St. Pölten kostet bei uns 60–100 €, ein Dichtungstausch 80–150 € pro Fenster. Glasbruch-Reparaturen beginnen bei ca. 150 € für Einfachglas und reichen bis 400 € für Dreifach-Isolierverglasung. Als Betrieb mit guter Anbindung an St. Pölten (A1/S33) halten wir die Anfahrtskosten niedrig. Immer mit kostenlosem Festpreisangebot vor Beginn der Arbeiten. Alle Preise zzgl. MwSt.',
    },
    {
      question: 'Bieten Sie Fensterservice für Wohnanlagen in St. Pölten an?',
      answer: 'Ja, Hausverwaltungen und Wohnbaugesellschaften in St. Pölten sind wichtige Partner von uns. Wir bieten jährliche Wartungsrunden für alle Fenster und Türen im Gebäude, prioritäre Notfalltermine und günstige Konditionen ab 10 Einheiten. Für öffentliche Gebäude und Gemeindeanlagen erstellen wir individuelle Servicekonzepte.',
    },
    {
      question: 'Welche Gemeinden rund um St. Pölten betreuen Sie?',
      answer: 'Wir sind in St. Pölten Stadt und Land tätig sowie in: Herzogenburg, Traismauer, Wilhelmsburg, Kapelln, Böheimkirchen, Pyhra, Wölbling, Prinzersdorf, Pöchlarn und Rabenstein an der Pielach. Auch in Richtung Melk fahren wir. Nicht dabei? Rufen Sie an – wir prüfen die Anfahrt sofort.',
    },
    {
      question: 'Reparieren Sie Fenster in der Altstadt St. Pölten?',
      answer: 'Ja, die Altstadt von St. Pölten hat historische Gebäude mit alten Holz- und Kastenfenstern, die behutsame Reparatur erfordern. Wir arbeiten mit Holzfenstern, alten Beschlägen und sanierten Altbaufenstern aller Art. Gleichzeitig kennen wir die modernen Kunststoff- und Aluminiumfenster der neuen Stadtteile rund um den Landhausallee-Bereich.',
    },
    {
      question: 'Wie schnell ist Ihr Notdienst in St. Pölten?',
      answer: 'Für Notfälle in St. Pölten sind wir rund um die Uhr erreichbar. Die Anfahrtszeit beträgt je nach Tageszeit ca. 30–60 Minuten. Besonders kritisch: ein nicht schließbares Fenster im Winter oder nach einem Einbruch. In diesen Fällen priorisieren wir den Einsatz. Rufen Sie +43 664 435 16 22 an.',
    },
    {
      question: 'Tauschen Sie Isolierglas in St. Pölten aus?',
      answer: 'Ja, Scheibenersatz ist eine unserer Hauptleistungen in St. Pölten. Wir ersetzen Einfachglas, Zweifach-Isolierglas, Dreifach-Isolierglas sowie Verbundsicherheitsglas (VSG) und Einscheibensicherheitsglas (ESG). Die Scheibe wird auf Maß gefertigt und meist innerhalb von 2–3 Tagen geliefert und eingebaut.',
    },
    {
      question: 'Können Sie Rollläden in St. Pölten reparieren?',
      answer: 'Ja, Rollladenreparatur in St. Pölten und Umgebung ist ein Standardservice. Wir reparieren gerissene Gurtbänder, tauschen Lamellen aus, reparieren Federantriebe und elektrische Motoren. Auch defekte Raffstores und Außenjalousien werden wieder instandgesetzt. In der Regel erledigen wir die Reparatur beim ersten Termin.',
    },
    {
      question: 'Was bringt eine regelmäßige Fensterwartung in St. Pölten?',
      answer: 'Eine jährliche Fensterwartung in St. Pölten verlängert die Lebensdauer Ihrer Fenster erheblich und verhindert teure Folgeschäden. Beim Wartungsbesuch schmieren wir alle beweglichen Teile, justieren Beschläge nach, prüfen Dichtungen auf Verschleiß und überprüfen die Verglasung. Das spart Heizkosten durch bessere Abdichtung. Preis: ab 25 € pro Fenster.',
    },
  ],

  whyUs: [
    { title: 'Regionale Nähe A1/S33', description: 'Als NÖ-Betrieb mit guter Autobahnanbindung sind wir schnell in St. Pölten – kein langer Vorlauf nötig.' },
    { title: 'Festpreisgarantie', description: 'Klares Angebot vor Arbeitsbeginn – keine unerwarteten Nachkosten.' },
    { title: 'Erfahrene Techniker', description: 'Langjährige Erfahrung mit allen Fenster- und Türsystemen in der Landeshauptstadt.' },
    { title: '24h Notdienst', description: 'Notfall in der Nacht oder am Wochenende – wir sind für St. Pölten erreichbar.' },
    { title: 'Versicherungsschäden', description: 'Wir unterstützen bei Dokumentation und Abwicklung von Versicherungsschäden.' },
    { title: 'B2B & Hausverwaltungen', description: 'Wartungsverträge für Wohnanlagen und Gewerbeobjekte in ganz St. Pölten.' },
  ],

  extraSection: {
    heading: 'Fensterservice für die wachsende Landeshauptstadt',
    body: 'St. Pölten entwickelt sich stetig weiter – neue Wohnviertel entstehen, Altbauten werden saniert. Als flexibler Fachbetrieb begleiten wir diesen Wandel: von der Reparatur historischer Fenster in der Altstadt bis zur Wartung moderner Isolierglasfenster in den neuen Stadtteilen rund um den Landhausallee.',
  },
};

export default function StPoeltenPage() {
  return <RegionPage data={data} />;
}
