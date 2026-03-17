import type { Metadata } from 'next';
import RegionPage, { RegionData } from '@/components/RegionPage';

export const metadata: Metadata = {
  title: 'Fensterservice Krems – Fensterreparatur Krems an der Donau ✓ Wachau | ROWO',
  description: 'Fensterreparatur Krems an der Donau ✓ Wachau-Experte ✓ historische Holzfenster ✓ 24h Notdienst ✓ Festpreisangebot. Ihr Fachbetrieb für die UNESCO-Region.',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/krems' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fensterservice Krems – Fensterreparatur Krems an der Donau | ROWO',
    description: 'Fensterreparatur in Krems an der Donau und der Wachau – historische Holzfenster, 24h Notdienst.',
    url: 'https://www.fensterservice-rowo.at/krems',
    locale: 'de_AT', type: 'website',
  },
  other: {
    'geo.region': 'AT-3',
    'geo.placename': 'Krems an der Donau',
    'geo.position': '48.4095;15.5992',
    'ICBM': '48.4095, 15.5992',
  },
};

const data: RegionData = {
  city: 'Krems',
  region: 'Krems an der Donau & Wachau',
  slug: 'krems',
  imageSrc: '/Images/Fensterservice ROWO Fensterreparatur Tulln, Wien und Niederösterreich.png',
  imageAlt: 'Fensterservice Krems an der Donau – Fensterreparatur in der Wachau und UNESCO-Region',
  description: 'Fachgerechte Fensterreparatur in Krems an der Donau – für historische Altbauten in der UNESCO-Weltkulturerbe-Region Wachau genauso wie für moderne Wohnanlagen.',
  geo: { lat: '48.4095', lng: '15.5992', region: 'AT-3' },

  localFeatures: [
    { title: 'UNESCO-Weltkulturerbe Expertise', text: 'Die Wachau und Krems stehen für historische Bausubstanz. Wir haben Erfahrung mit alten Holzfenstern, Kastenfenstern und restaurierungswürdigen Systemen – behutsam und fachgerecht.' },
    { title: 'Wachau & Weingüter', text: 'Wir decken Krems, Langenlois, Krems-Land und die Wachau-Gemeinden ab. Auch Weingüter, Pressgebäude und Ferienwohnungen betreuen wir zuverlässig.' },
    { title: 'Universität & Wachstum', text: 'Dank IMC FH Krems und stetigem Wachstum entstehen neue Wohngebäude – wir kennen sowohl moderne als auch historische Fenster- und Türsysteme.' },
  ],

  problems: [
    { title: 'Alte Holzfenster & Kastenfenster', description: 'Holzquellen, Verzug oder defekte Beschläge – wir reparieren und restaurieren historische Fenster schonend und fachgerecht.' },
    { title: 'Undichte Fenster & Kältebrücken', description: 'Zugluft und Wärmeverlust durch alte Dichtungen – Tausch der Dichtprofile und Neueinstellung des Flügels inklusive.' },
    { title: 'Klemmende Dreh-/Kipp-Systeme', description: 'Verschlissene oder falsch eingestellte Beschläge – präzise Justierung durch unsere Techniker direkt vor Ort.' },
    { title: 'Glasschäden & Scheibenersatz', description: 'Einfach-, Isolier- und Verbundsicherheitsglas – Austausch in allen gängigen Formaten, auch für historische Sprossenrahmen.' },
    { title: 'Rollladen & Sonnenschutz', description: 'Defekte Rollläden, Raffstores oder Markisen reparieren wir schnell und zuverlässig in Krems und der Wachau.' },
    { title: 'Einbruchschutz für Zweitwohnsitze', description: 'Sicherheitsbeschläge und Mehrfachverriegelung – besonders wichtig für Ferienwohnungen und Winzerhöfe in der Wachau.' },
  ],

  serviceAreas: [
    'Krems an der Donau', 'Krems Land', 'Langenlois', 'Gföhl',
    'Mautern an der Donau', 'Furth bei Göttweig', 'Spitz an der Donau',
    'Weißenkirchen in der Wachau', 'Dürnstein', 'Senftenberg', 'Rastenfeld',
  ],

  faqItems: [
    {
      question: 'Was kostet Fensterservice in Krems an der Donau?',
      answer: 'Unsere Preise für Fensterreparatur in Krems: Beschlagjustierung 60–100 €, Dichtungstausch 80–150 €, Scheibenersatz ab 150 € für Einfachglas. Für historische Holzfenster in Kremser Altbauten oder in der Wachau erstellen wir immer ein individuelles Festpreisangebot nach Besichtigung. Alle Preise zzgl. Arbeitszeit, Anfahrt und MwSt.',
    },
    {
      question: 'Reparieren Sie alte Holzfenster in der Kremser Altstadt?',
      answer: 'Ja, historische Holzfenster in der Kremser Altstadt und in der UNESCO-Weltkulturerbe-Region Wachau sind unser Spezialgebiet. Wir quellen gequollene Holzrahmen ab, ersetzen defekte Beschläge, erneuern Glasleisten und Dichtungen. Das Ziel ist immer: Funktion wiederherstellen und das historische Erscheinungsbild erhalten.',
    },
    {
      question: 'Welche Orte rund um Krems betreuen Sie?',
      answer: 'Wir sind in Krems an der Donau und dem gesamten Umland tätig: Langenlois, Mautern an der Donau, Furth bei Göttweig, Spitz an der Donau, Weißenkirchen in der Wachau, Dürnstein, Gföhl, Senftenberg und Rastenfeld. Auch Winzerhäuser und Ferienwohnungen in der Wachau werden von uns betreut.',
    },
    {
      question: 'Gibt es Einbruchschutz-Nachrüstung für Häuser in der Wachau?',
      answer: 'Ja, Einbruchschutz ist besonders für Ferienwohnungen, Winzerhöfe und Zweitwohnsitze in der touristischen Wachau-Region wichtig. Wir rüsten Fenster mit Pilzkopfzapfen, Sicherheitsbeschlägen (RC2) und aufgebohrten Zusatzsicherungen nach. Für Häuser, die monatelang leer stehen, bieten wir auch Sicherheitschecks an.',
    },
    {
      question: 'Wie schnell kommen Sie bei einem Fensternotfall in Krems?',
      answer: 'Für Notfälle in Krems an der Donau sind wir innerhalb von 1–3 Stunden vor Ort. Unser 24h-Notdienst ist täglich verfügbar. Für Orte in der Wachau (Spitz, Weißenkirchen, Dürnstein) kann die Anfahrt etwas länger dauern – rufen Sie an und wir nennen Ihnen die realistische Wartezeit. Telefon: +43 664 435 16 22.',
    },
    {
      question: 'Können Sie Fenster in denkmalgeschützten Gebäuden in Krems reparieren?',
      answer: 'Ja, wir haben Erfahrung mit denkmalgeschützten Gebäuden in der Altstadt Krems und der Wachau-Region. Bei denkmalgeschützten Objekten dürfen Fenster oft nur repariert, nicht verändert werden. Wir arbeiten reparatur-orientiert und stimmen uns wenn nötig mit dem Bundesdenkmalamt ab. Historische Beschläge werden soweit möglich repariert statt ersetzt.',
    },
    {
      question: 'Tauschen Sie beschlagene Fenster in Weingütern und Kellergassen aus?',
      answer: 'Ja, Weingüter, Presskeller und Wirtschaftsgebäude in der Wachau haben oft besondere Anforderungen – Schlagregenschutz, Lüftung, Sicherheit. Wir ersetzen beschlagene oder defekte Fenster auch in Nebengebäuden. Für Winzer mit mehreren Liegenschaften bieten wir Servicepakete mit Jahreswartung an.',
    },
    {
      question: 'Führen Sie Fensterwartung für Schulen und Institutionen in Krems durch?',
      answer: 'Ja, wir betreuen auch gewerbliche und öffentliche Liegenschaften in Krems. Schulen, die IMC FH Krems und andere Institutionen mit großen Fensterflotten können von unseren Wartungsverträgen profitieren: fixe Jahrespreise, dokumentierte Wartungsprotokolle und Prioritätstermine bei Ausfall.',
    },
  ],

  whyUs: [
    { title: 'Wachau & Altbau-Knowhow', description: 'Erfahrung mit historischen Fensterkonstruktionen und denkmalgeschützten Gebäuden in der UNESCO-Region.' },
    { title: 'Schnelle Reaktionszeit', description: 'Notfälle in Krems beheben wir in der Regel innerhalb von 24–48 Stunden.' },
    { title: 'Festpreisangebote', description: 'Klare Kostenaufstellung vor dem Einsatz – ohne böse Überraschungen.' },
    { title: '24h Notdienst', description: 'Auch nachts und am Wochenende für Sie und Ihre Wachau-Liegenschaften erreichbar.' },
    { title: 'Alle Fenstertypen', description: 'Holz, Kunststoff, Aluminium, Verbund – wir kennen alle Systeme und haben Ersatzteile dabei.' },
    { title: 'Weingüter & Zweitwohnsitze', description: 'Erfahrung mit Ferienwohnungen, Winzerhöfen und temporär unbewohnten Objekten in der Wachau.' },
  ],

  extraSection: {
    heading: 'Altbau-Fenster in Krems – unser Spezialgebiet',
    body: 'Die historische Altstadt von Krems und die UNESCO-Weltkulturerbe-Region Wachau beherbergen viele denkmalgeschützte und historisch wertvolle Gebäude. Unsere Techniker sind geschult im Umgang mit alten Holzfenstern, traditionellen Beschlägen und restaurierungswürdigen Kastenfenstern – damit Charme und Funktionalität erhalten bleiben.',
  },
};

export default function KremsPage() {
  return <RegionPage data={data} />;
}
