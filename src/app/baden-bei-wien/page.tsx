import type { Metadata } from 'next';
import RegionPage, { RegionData } from '@/components/RegionPage';

export const metadata: Metadata = {
  title: 'Fensterservice Baden bei Wien – Fensterreparatur Baden ✓ Villen ✓ 24h | ROWO',
  description: 'Fensterreparatur Baden bei Wien ✓ Jugendstil-Villen & Altbauten ✓ Zweitwohnsitze ✓ 24h Notdienst ✓ Festpreisangebot. Ihr Fachbetrieb im Triestingtal.',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/baden-bei-wien' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fensterservice Baden bei Wien – Fensterreparatur | ROWO',
    description: 'Professionelle Fensterreparatur in Baden bei Wien – Villen, Altbauten, Zweitwohnsitze, 24h Notdienst.',
    url: 'https://www.fensterservice-rowo.at/baden-bei-wien',
    locale: 'de_AT', type: 'website',
  },
  other: {
    'geo.region': 'AT-3',
    'geo.placename': 'Baden bei Wien',
    'geo.position': '47.9947;16.2312',
    'ICBM': '47.9947, 16.2312',
  },
};

const data: RegionData = {
  city: 'Baden',
  region: 'Baden bei Wien & Triestingtal',
  slug: 'baden-bei-wien',
  imageSrc: '/Images/Fensterservice Tulln.webp',
  imageAlt: 'Fensterservice Baden bei Wien – Fensterreparatur im Kurort und Triestingtal',
  description: 'Professionelle Fensterreparatur in Baden bei Wien – von der historischen Kurort-Villa und dem Biedermeierhäuschen bis zur modernen Wohnanlage im Triestingtal.',
  geo: { lat: '47.9947', lng: '16.2312', region: 'AT-3' },

  localFeatures: [
    { title: 'Villen & historische Bauten', text: 'Baden ist bekannt für seine prächtigen Jugendstil-Villen und Biedermeier-Kurhäuser. Wir haben Erfahrung mit wertvollen alten Fenstersystemen und arbeiten denkmalangepasst.' },
    { title: 'Triestingtal & Umgebung', text: 'Wir decken Baden, Traiskirchen, Mödling und die gesamte Triestingtal-Region schnell und zuverlässig ab – ohne hohe Anfahrtsaufschläge.' },
    { title: 'Zweitwohnsitze & Kurort', text: 'Als touristisch geprägter Ort mit vielen Zweitwohnsitzen liegt Einbruchschutz und 24h Notdienst besonders nahe. Wir sind immer erreichbar.' },
  ],

  problems: [
    { title: 'Historische Villen-Fenster', description: 'Alte Holz- und Gusseisenbeschläge in Jugendstil-Villen – wir reparieren und restaurieren schonend und fachgerecht, mit Blick auf Denkmalschutz.' },
    { title: 'Zugluft & undichte Dichtungen', description: 'Wärmeverlust durch alte Dichtprofile – schneller Austausch vor Ort, meist beim ersten Termin erledigt.' },
    { title: 'Klemmendes Dreh-Kipp-System', description: 'Falsch eingestellte oder verschlissene Beschläge – präzise Justierung durch unsere Fachkräfte direkt bei Ihnen.' },
    { title: 'Glasschäden & Scheibenersatz', description: 'Bruch, Riss oder beschlagene Isolierverglasung – wir ersetzen alle gängigen Glasarten und Formate.' },
    { title: 'Rollladen & Jalousien', description: 'Reparatur von Rollläden, Raffstores und Sonnenschutzsystemen in Wohn- und Kurbetrieben in Baden.' },
    { title: 'Einbruchschutz für Zweitwohnsitze', description: 'Zertifizierte Sicherheitstechnik für Fenster und Türen – besonders wichtig für zeitweise unbewohnte Ferienwohnungen.' },
  ],

  serviceAreas: [
    'Baden bei Wien', 'Traiskirchen', 'Mödling', 'Laxenburg',
    'Gumpoldskirchen', 'Alland', 'Heiligenkreuz', 'Berndorf',
    'Pottenstein', 'Ebreichsdorf', 'Schwechat', 'Wiener Neustadt',
  ],

  faqItems: [
    {
      question: 'Was kostet Fensterservice in Baden bei Wien?',
      answer: 'In Baden bei Wien liegen unsere Preise bei 60–100 € für Beschlagjustierungen, 80–150 € für Dichtungserneuerungen und ab 150 € für Glasschäden. Für historische Villen und Gründerzeithäuser in Baden erstellen wir ein individuelles Angebot nach Besichtigung. Kein böses Erwachen: immer Festpreis vor Arbeitsbeginn. Alle Preise zzgl. Arbeitszeit & Anfahrt und MwSt.',
    },
    {
      question: 'Reparieren Sie historische Fenster in Badener Jugendstil-Villen?',
      answer: 'Ja, Baden bei Wien ist für seine prächtigen Jugendstil-Villen und Biedermeier-Häuser bekannt. Wir haben Erfahrung mit alten Holzfenstern, Sprossenfenstern, historischen Fensterbeschlägen und restaurierten Kastenfenstern. Unser Ansatz: erst reparieren, dann ersetzen – damit der Charakter historischer Gebäude erhalten bleibt.',
    },
    {
      question: 'Welche Orte im Triestingtal und rund um Baden betreuen Sie?',
      answer: 'Wir betreuen Baden bei Wien und die gesamte Region: Traiskirchen, Mödling, Gumpoldskirchen, Laxenburg, Ebreichsdorf, Schwechat, Berndorf, Pottenstein und Alland. Auch in Richtung Wiener Neustadt und Heiligenkreuz fahren wir. Kein Zuschlag für Fahrzeiten – der Preis gilt für die Arbeit, nicht die Anfahrt.',
    },
    {
      question: 'Bieten Sie Einbruchschutz für Zweitwohnsitze in Baden an?',
      answer: 'Ja, Einbruchschutz für Zweitwohnsitze und Ferienwohnungen in Baden ist ein wichtiges Thema. Wir rüsten Fenster und Balkontüren mit Sicherheitsbeschlägen (RC2), Aufbohrschutz und Mehrfachverriegelungen nach. Für Häuser, die zeitweise unbewohnt sind, empfehlen wir abschließbare Fenstergriffe und einbruchhemmende Verglasung (P4A-Folie oder VSG-Glas).',
    },
    {
      question: 'Wie schnell ist Ihr Notdienst in Baden verfügbar?',
      answer: 'Unser Notdienst ist für Baden bei Wien rund um die Uhr erreichbar. Da wir in Niederösterreich beheimatet sind, ist die Anfahrt nach Baden kurz – in der Regel 30–60 Minuten. An Wochenenden und Feiertagen sind wir ebenfalls im Einsatz. Bei dringenden Fällen (offenes Fenster, Glasbruch, Einbruch) haben wir Prioritätstermine.',
    },
    {
      question: 'Reparieren Sie Rollläden und Sonnenschutz in Baden?',
      answer: 'Ja, neben Fenstern reparieren wir in Baden auch Rollläden, Raffstores und Markisen. Typische Schäden: gerissenes Gurtband, verbogene Lamellen, defekte Federaufzüge und ausgefallene Elektromotoren. Wir haben häufige Ersatzteile im Fahrzeug und können die meisten Reparaturen beim ersten Termin erledigen.',
    },
    {
      question: 'Helfen Sie bei Versicherungsabwicklung nach Sturmschäden in Baden?',
      answer: 'Ja, nach Sturm-, Hagel- oder Einbruchschäden in Baden helfen wir bei der Schadensdokumentation für Ihre Versicherung. Wir erstellen Schadensberichte, fotografieren den Schaden professionell und stellen die notwendigen Unterlagen für den Versicherungsantrag zur Verfügung. Die Kosten für die Dokumentation werden oft von der Versicherung übernommen.',
    },
    {
      question: 'Warten Sie Fenster in Badener Kurhotels und Gewerbeobjekten?',
      answer: 'Ja, neben Privathaushalten betreuen wir in Baden auch Kurhotels, Pensionen, Restaurants und Gewerbeobjekte. Für Betriebe bieten wir Wartungsverträge mit fixen Jahrespreisen, dokumentierten Wartungsprotokollen und Prioritätsterminen. Gerade im Tourismusbereich ist die schnelle Behebung von Fensterproblemen entscheidend für den Gästebetrieb.',
    },
  ],

  whyUs: [
    { title: 'Villen-Erfahrung', description: 'Wir gehen respektvoll mit historischer Bausubstanz in Baden um – Jugendstil, Biedermeier, Gründerzeit.' },
    { title: 'Kurze Anfahrtswege', description: 'Als NÖ-Betrieb sind wir in Baden und dem Triestingtal besonders schnell erreichbar.' },
    { title: 'Festpreisangebote', description: 'Klares Angebot vor Beginn der Arbeiten – keine versteckten Kosten.' },
    { title: '24h Notdienst', description: 'Rund um die Uhr erreichbar – auch für Zweitwohnsitze und Ferienwohnungen in Baden.' },
    { title: 'Versicherungsabwicklung', description: 'Bei Einbruch- oder Sturmschäden übernehmen wir die Kommunikation mit Ihrer Versicherung.' },
    { title: 'Qualität & Garantie', description: 'Hochwertige Ersatzteile und Garantie auf alle durchgeführten Arbeiten.' },
  ],

  extraSection: {
    heading: 'Fensterservice für Badens besondere Gebäude',
    body: 'Baden bei Wien ist nicht nur Kurort, sondern auch Heimat außergewöhnlicher Architektur – von Biedermeierhäusern bis zu prächtigen Jugendstil-Villen. Unsere Techniker bringen das nötige Feingefühl mit, um historische Fenster und Beschläge zu erhalten und gleichzeitig modern abzudichten und zu sichern.',
  },
};

export default function BadenPage() {
  return <RegionPage data={data} />;
}
