import type { Metadata } from 'next';
import RegionPage, { RegionData } from '@/components/RegionPage';

export const metadata: Metadata = {
  title: 'Fensterservice Wien – Fensterreparatur Wien ✓ alle Bezirke ✓ 24h | ROWO',
  description: 'Professionelle Fensterreparatur Wien ✓ alle 23 Bezirke ✓ 24h Notdienst ✓ Altbau & Kastenfenster ✓ Festpreisangebot ✓ kostenlose Beratung. Jetzt anfragen!',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/wien' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fensterservice Wien – Fensterreparatur alle Bezirke | ROWO',
    description: 'Fensterreparatur Wien in allen 23 Bezirken – 24h Notdienst, Altbau-Spezialist, Festpreisangebot.',
    url: 'https://www.fensterservice-rowo.at/wien',
    locale: 'de_AT', type: 'website',
  },
  other: {
    'geo.region': 'AT-9',
    'geo.placename': 'Wien',
    'geo.position': '48.2082;16.3738',
    'ICBM': '48.2082, 16.3738',
  },
};

const data: RegionData = {
  city: 'Wien',
  region: 'Wien & alle 23 Bezirke',
  slug: 'wien',
  imageSrc: '/Images/Fensterservice Wien.webp',
  imageAlt: 'Fensterservice Wien – professionelle Fensterreparatur in allen Wiener Bezirken',
  description: 'Professionelle Fensterreparatur in allen 23 Wiener Bezirken – vom historischen Altbau-Kastenfenster bis zur modernen Dreifach-Isolierverglasung.',
  geo: { lat: '48.2082', lng: '16.3738', region: 'AT-9' },

  localFeatures: [
    { title: 'Altbau-Spezialisten', text: 'Wiens Gründerzeitbauten mit Kastenfenstern und historischen Beschlägen sind unser Spezialgebiet – wir kennen diese Systeme in- und auswendig.' },
    { title: 'Alle 23 Bezirke', text: 'Von Döbling bis Favoriten, von Hietzing bis Floridsdorf – wir sind in ganz Wien schnell vor Ort, ohne Mehrkosten für entlegene Bezirke.' },
    { title: 'Hausverwaltungen & B2B', text: 'Maßgeschneiderte Wartungsverträge und Sofortreparaturen für Immobilienverwalter und Wohnbaugesellschaften in Wien.' },
  ],

  problems: [
    { title: 'Klemmende & schwergängige Fenster', description: 'Verschlissene oder falsch eingestellte Beschläge – wir justieren millimetergenau für leichte, leise Bedienung.' },
    { title: 'Undichte Fenster & Zugluft', description: 'Alte Dichtungen verursachen Wärmeverlust und hohe Heizkosten. Wir tauschen Dichtprofile schnell und fachgerecht aus.' },
    { title: 'Defekte Griffe & Schlösser', description: 'Kaputter Griff oder klemmendes Schloss – Austausch mit Markenteilen meist beim ersten Termin möglich.' },
    { title: 'Glasschäden & Scheibentausch', description: 'Riss, Bruch oder beschlagene Isolierverglasung? Einfach-, Zweifach- und Dreifachglas – fachgerechter Austausch.' },
    { title: 'Rollladen & Sonnenschutz', description: 'Gerissenes Gurtband, klemmendes Lamellensystem oder defekter Motor – wir reparieren alle Systeme in Wien.' },
    { title: 'Einbruchschutz Nachrüstung', description: 'Pilzkopfverriegelung, Sicherheitsbeschläge (RC2/RC3), Panzerriegel – zertifizierter Einbruchschutz für Wiener Wohnungen.' },
  ],

  serviceAreas: [
    '1. Bezirk Innere Stadt', '2. Bezirk Leopoldstadt', '3. Bezirk Landstraße',
    '4. Bezirk Wieden', '5. Bezirk Margareten', '6. Bezirk Mariahilf',
    '7. Bezirk Neubau', '8. Bezirk Josefstadt', '9. Bezirk Alsergrund',
    '10. Bezirk Favoriten', '11. Bezirk Simmering', '12. Bezirk Meidling',
    '13. Bezirk Hietzing', '14. Bezirk Penzing', '15. Bezirk Rudolfsheim-Fünfhaus',
    '16. Bezirk Ottakring', '17. Bezirk Hernals', '18. Bezirk Währing',
    '19. Bezirk Döbling', '20. Bezirk Brigittenau', '21. Bezirk Floridsdorf',
    '22. Bezirk Donaustadt', '23. Bezirk Liesing',
  ],

  faqItems: [
    {
      question: 'Was kostet eine Fensterreparatur in Wien?',
      answer: 'Die Kosten für eine Fensterreparatur in Wien hängen vom Schadensumfang ab. Eine Beschlagjustierung kostet meist 60–100 €, ein Dichtungstausch 80–150 €. Für Glasbruch rechnen Sie mit 150–400 € je nach Glastyp. Wir erstellen vor jeder Arbeit ein kostenloses Festpreisangebot – ohne versteckte Kosten. Materialkosten zzgl. Arbeitszeit & Anfahrt.',
    },
    {
      question: 'Wie schnell ist der Fenster-Notdienst in Wien verfügbar?',
      answer: 'Unser 24h-Notdienst ist in Wien rund um die Uhr erreichbar – auch an Wochenenden und Feiertagen. Bei dringenden Fällen (offenes Fenster nach Einbruch, nicht schließbares Fenster im Winter) sind wir in der Regel innerhalb von 1–3 Stunden vor Ort. Wir decken alle 23 Wiener Gemeindebezirke ab.',
    },
    {
      question: 'Reparieren Sie Kastenfenster in Wiener Altbauten?',
      answer: 'Ja, Kastenfenster aus der Gründerzeit sind unser Spezialgebiet in Wien. Wir reparieren defekte Beschläge, ersetzen Holzleisten, erneuern Dichtungen und justieren die Flügel. Wien hat Tausende Gründerzeit-Wohnungen mit historischen Kastenfenstern – unsere Techniker sind speziell dafür geschult und ausgerüstet. Wir arbeiten so, dass der historische Charakter erhalten bleibt.',
    },
    {
      question: 'Welche Wiener Bezirke decken Sie ab?',
      answer: 'Fensterservice ROWO deckt alle 23 Wiener Gemeindebezirke ab: von der Inneren Stadt (1. Bezirk) über Favoriten (10.), Floridsdorf (21.) und Donaustadt (22.) bis nach Liesing (23.) und Hietzing (13.). Kein Bezirk zu weit – keine Mehrkosten für entlegene Bezirke.',
    },
    {
      question: 'Bieten Sie Wartungsverträge für Hausverwaltungen in Wien an?',
      answer: 'Ja, für Wiener Hausverwaltungen bieten wir spezielle Servicepakete: jährliche Wartungsrunden aller Fenster und Türen, priorisierte Notfalltermine, einen persönlichen Ansprechpartner und günstigere Konditionen bei Mehrjahresverträgen. Besonders für Gründerzeithäuser mit vielen alten Kastenfenstern lohnt sich ein Wartungsvertrag enorm.',
    },
    {
      question: 'Was ist bei einem Glasbruch in Wien zu tun?',
      answer: 'Bei einem Glasbruch in Wien sollten Sie zunächst den Bereich sichern (Kinder und Haustiere fernhalten). Rufen Sie uns an – wir kommen noch am selben oder nächsten Tag. Wir ersetzen Einfachglas, Isolierverglasung (Thermopane), Verbundsicherheitsglas (VSG) und ESG in allen Formaten. Bei Einbruch übernehmen wir auch die Schadensdokumentation für Ihre Haushaltsversicherung.',
    },
    {
      question: 'Reparieren Sie auch Rollläden und Jalousien in Wien?',
      answer: 'Ja, neben Fenstern reparieren wir alle Sonnenschutz- und Rollladensysteme in Wien: gerissenes Gurtband austauschen, verbogene Lamellen ersetzen, Federantriebe überholen, defekte Elektromotoren reparieren. Viele Wiener Altbauten haben alte Gurtrollläden – wir kennen alle Systeme und haben häufige Ersatzteile im Fahrzeug.',
    },
    {
      question: 'Führen Sie Einbruchschutz-Nachrüstungen bei Fenstern in Wien durch?',
      answer: 'Ja, Einbruchschutz-Nachrüstungen für Fenster und Balkontüren sind ein wichtiger Service in Wien. Wir montieren Pilzkopfverriegelungen, Sicherheitsbeschläge nach EN 1627 (RC2/RC3), Aufbohrschutz und Panzerriegel. Besonders Erdgeschosswohnungen und Kellerabgänge sollten nachgerüstet werden. Die Kosten beginnen bei ca. 100–250 € pro Fenster.',
    },
  ],

  whyUs: [
    { title: 'Alle 23 Bezirke Wien', description: 'Keine Zone zu weit – wir sind in ganz Wien schnell vor Ort, ohne Aufschlag für entlegene Bezirke.' },
    { title: 'Altbau-Expertise', description: 'Kastenfenster, Gründerzeitbeschläge, Holzverbundfenster – wir kennen die historische Wiener Bausubstanz.' },
    { title: 'Festpreisgarantie', description: 'Kein böses Erwachen: wir erstellen transparente Angebote vor Beginn der Arbeiten.' },
    { title: '24h Notdienst Wien', description: 'Rund um die Uhr erreichbar – auch am Wochenende und an Feiertagen in allen Bezirken.' },
    { title: 'Versicherungsabwicklung', description: 'Wir übernehmen die Kommunikation mit Ihrer Versicherung bei Sturm- oder Einbruchschäden.' },
    { title: 'B2B Hausverwaltungen', description: 'Maßgeschneiderte Wartungsverträge für Wohnbaugesellschaften und Immobilienverwalter in Wien.' },
  ],

  extraSection: {
    heading: 'Altbau & Neubau – wir kennen beide Welten in Wien',
    body: 'Wiens historische Bausubstanz erfordert besonderes Fingerspitzengefühl. Kastenfenster aus der Gründerzeit, Holzverbundfenster aus den 70er-Jahren oder hochmoderne Dreifach-Isolierverglasung in neuen Bauträgerprojekten im 22. Bezirk – unser Team ist für alle Fenstertypen ausgebildet und mit den nötigen Ersatzteilen ausgerüstet.',
  },
};

export default function WienPage() {
  return <RegionPage data={data} />;
}
