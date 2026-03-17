import type { Metadata } from 'next';
import RegionPage, { RegionData } from '@/components/RegionPage';

export const metadata: Metadata = {
  title: 'Fensterservice Klosterneuburg – Fensterreparatur Klosterneuburg ✓ Wien-nah | ROWO',
  description: 'Fensterreparatur Klosterneuburg ✓ direkt neben Wien ✓ Stiftsstadt & Wienerwald ✓ 24h Notdienst ✓ Festpreisangebot. Ihr lokaler Fachbetrieb – schnell vor Ort.',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/klosterneuburg' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fensterservice Klosterneuburg – Fensterreparatur | ROWO',
    description: 'Fensterreparatur in Klosterneuburg – direkt an der Wiener Stadtgrenze, 24h Notdienst, schnell vor Ort.',
    url: 'https://www.fensterservice-rowo.at/klosterneuburg',
    locale: 'de_AT', type: 'website',
  },
  other: {
    'geo.region': 'AT-3',
    'geo.placename': 'Klosterneuburg',
    'geo.position': '48.3058;16.3267',
    'ICBM': '48.3058, 16.3267',
  },
};

const data: RegionData = {
  city: 'Klosterneuburg',
  region: 'Klosterneuburg & nördlicher Wienerwald',
  slug: 'klosterneuburg',
  imageSrc: '/Images/Fensterservice Tulln.webp',
  imageAlt: 'Fensterservice Klosterneuburg – Fensterreparatur nahe Wien im nördlichen Wienerwald',
  description: 'Fensterreparatur in Klosterneuburg und dem nördlichen Wienerwald – direkt an der Wiener Stadtgrenze, mit kurzen Reaktionszeiten und lokalem Knowhow.',
  geo: { lat: '48.3058', lng: '16.3267', region: 'AT-3' },

  localFeatures: [
    { title: 'Direkt neben Wien', text: 'Klosterneuburg liegt unmittelbar an der Wiener Stadtgrenze – wir sind von beiden Seiten schnell bei Ihnen, ohne Mehrkosten für die Lage.' },
    { title: 'Stiftsstadt & Wachstumsregion', text: 'Von historischen Häusern rund ums Stift bis zu neuen Einfamilienhäusern in Kierling und Weidling – wir kennen alle Fenstertypen der Region.' },
    { title: 'Wienerwald-Gemeinden', text: 'Wir betreuen Klosterneuburg, Kierling, Kritzendorf, Weidling, Höflein und die umliegenden Ortschaften im nördlichen Wienerwald zuverlässig.' },
  ],

  problems: [
    { title: 'Klemmende & schwergängige Fenster', description: 'Beschläge verschlissen oder verstellt – wir justieren und schmieren für einfache, leise Bedienung ohne Kraftaufwand.' },
    { title: 'Zugluft durch alte Dichtungen', description: 'Poröse Gummidichtungen führen zu Wärmeverlust – rascher Dichtungstausch bei Ihnen vor Ort.' },
    { title: 'Defekte Fenstergriffe & Schlösser', description: 'Kaputter oder loser Fenstergriff – Austausch mit Markenteilen meist direkt beim ersten Termin möglich.' },
    { title: 'Glasschäden & Scheibenersatz', description: 'Riss, Bruch oder Feuchtigkeit zwischen den Scheiben – wir ersetzen Einfach- und Isolierglas.' },
    { title: 'Rollladen & Insektenschutz', description: 'Gurtband, Lamellen oder Insektenschutzgitter – Reparatur und Montage für Klosterneuburg und Umgebung.' },
    { title: 'Einbruchschutz in Wohnlage', description: 'In der begehrten Wohnlage nahe Wien besonders relevant – wir rüsten Fenster und Türen sicher und zertifiziert nach.' },
  ],

  serviceAreas: [
    'Klosterneuburg', 'Kierling', 'Kritzendorf', 'Weidling',
    'Höflein an der Donau', 'Gugging', 'Langenrohr', 'Korneuburg',
    'Leobendorf', 'Spillern', 'Bisamberg', 'Tulln an der Donau',
  ],

  faqItems: [
    {
      question: 'Was kostet Fensterservice in Klosterneuburg?',
      answer: 'Fensterreparaturen in Klosterneuburg beginnen bei ca. 60–80 € für eine Beschlagjustierung und reichen bis 400 € für einen Scheibenersatz mit Dreifachverglasung. Da wir sowohl Wien- als auch NÖ-seitig tätig sind, entfallen lange Anfahrtswege. Kostenloser Festpreis vor jedem Einsatz. Alle Preise zzgl. Arbeitszeit & Anfahrt und MwSt.',
    },
    {
      question: 'Welche Ortschaften rund um Klosterneuburg betreuen Sie?',
      answer: 'Wir betreuen Klosterneuburg und alle umliegenden Ortschaften: Kierling, Kritzendorf, Weidling, Höflein an der Donau, Gugging und Langenrohr. Außerdem fahren wir nach Korneuburg, Leobendorf, Spillern und Bisamberg. Durch unsere Lage zwischen Wien und dem NÖ-Kerngebiet sind wir ideal aufgestellt.',
    },
    {
      question: 'Reparieren Sie Fenster in der historischen Stiftsstadt Klosterneuburg?',
      answer: 'Ja, das Stift Klosterneuburg und die historische Altstadt haben viele alte Gebäude mit Holzfenstern, Kastenfenstern und historischen Beschlägen. Wir reparieren diese schonend mit dem Ziel, das historische Erscheinungsbild zu erhalten. Für denkmalgeschützte Gebäude arbeiten wir nur nach Absprache mit den zuständigen Stellen.',
    },
    {
      question: 'Wie schnell kommen Sie bei einem Fensternotfall in Klosterneuburg?',
      answer: 'Klosterneuburg liegt direkt an der Wiener Stadtgrenze – das bedeutet für Sie besonders kurze Reaktionszeiten. In dringenden Fällen sind wir in der Regel innerhalb von 30–60 Minuten vor Ort. Unser 24h-Notdienst ist täglich erreichbar. Tel: +43 664 435 16 22.',
    },
    {
      question: 'Reparieren Sie Einbruchsschäden an Fenstern in Klosterneuburg?',
      answer: 'Ja, nach einem Einbruch in Klosterneuburg sind wir schnell zur Stelle. Wir sichern aufgebrochene Fenster sofort (Notabdichtung), dokumentieren den Schaden für die Versicherung und reparieren oder ersetzen die beschädigten Fenster und Türen. Anschließend rüsten wir auf Wunsch auch sicherheitstechnisch nach.',
    },
    {
      question: 'Bieten Sie Fensterwartung für Einfamilienhäuser in Klosterneuburg an?',
      answer: 'Ja, Klosterneuburg und Umgebung (Kierling, Weidling, Kritzendorf) sind stark von Einfamilienhäusern geprägt. Wir bieten jährliche Fensterwartungen an, bei denen wir alle Beschläge einstellen, schmieren und prüfen, Dichtungen kontrollieren und bei Bedarf austauschen und die Funktion aller Fenster und Türen dokumentieren. Preis: ab 25 € pro Fenster.',
    },
    {
      question: 'Tauschen Sie Insektenschutzgitter in Klosterneuburg aus?',
      answer: 'Ja, Insektenschutzgitter und Plissee-Systeme montieren und reparieren wir in Klosterneuburg und Umgebung. Ob Spannrahmen, Klemm-Rollo, Aufsatzrollo oder maßgefertigtes Plissee – wir beraten Sie und montieren das passende System für jedes Fensterformat. Montage meist innerhalb von 1–2 Wochen nach Bestellung.',
    },
    {
      question: 'Können Sie Balkon-Schiebetüren in Klosterneuburg reparieren?',
      answer: 'Ja, Balkon- und Terrassenschiebetüren reparieren wir in Klosterneuburg regelmäßig. Typische Probleme: verschlissene Laufrollen (Schiebetür hakt), defektes Schloss, beschädigte Dichtung oder gebrochene Scheibe. Wir ersetzen Laufrollen, justieren die Schienen und erneuern Schlösser und Griffe. In vielen Fällen ist die Reparatur günstiger als ein Neukauf.',
    },
  ],

  whyUs: [
    { title: 'Wien-nah & NÖ-lokal', description: 'Perfekte Lage: schnell erreichbar aus Wien und aus dem Herzen Niederösterreichs – keine Mehrkosten.' },
    { title: 'Festpreisangebote', description: 'Klares Angebot vor dem Einsatz – transparent und ohne versteckte Kosten.' },
    { title: 'Erfahrene Techniker', description: 'Über 15 Jahre Erfahrung mit allen Fenster- und Türsystemen in der Region Klosterneuburg.' },
    { title: '24h Notdienst', description: 'Notfall am Wochenende oder spät abends – wir sind für Klosterneuburg erreichbar.' },
    { title: 'Hochwertige Materialien', description: 'Nur geprüfte Marken-Ersatzteile für langlebige Ergebnisse.' },
    { title: '500+ zufriedene Kunden', description: 'Unser Ruf als verlässlicher Fachbetrieb in der Region basiert auf echter Kundenzufriedenheit.' },
  ],

  extraSection: {
    heading: 'Klosterneuburg – Wohnqualität zwischen Wien und Wienerwald',
    body: 'Die Lage zwischen Wienerwald und Donau macht Klosterneuburg zu einer der begehrtesten Wohnregionen Niederösterreichs. Viele Bewohner pendeln nach Wien und schätzen den lokalen Service vor der Haustür. Als Fachbetrieb mit Abdeckung beider Regionen bieten wir Ihnen das Beste aus beiden Welten: Wiener Professionalität mit niederösterreichischer Nahbarkeit.',
  },
};

export default function KlosterneuburgPage() {
  return <RegionPage data={data} />;
}
