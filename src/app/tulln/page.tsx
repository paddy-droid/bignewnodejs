import type { Metadata } from 'next';
import RegionPage, { RegionData } from '@/components/RegionPage';

export const metadata: Metadata = {
  title: 'Fensterservice Tulln – Fensterreparatur Tulln ✓ Stammbetrieb ✓ 24h | ROWO',
  description: 'Fensterreparatur Tulln & Umgebung ✓ lokaler Stammbetrieb ✓ 24h Notdienst ✓ Einfamilienhäuser & Reihenhäuser ✓ Festpreisangebot. Jetzt anfragen!',
  alternates: { canonical: 'https://www.fensterservice-rowo.at/tulln' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fensterservice Tulln – Fensterreparatur Tulln | ROWO',
    description: 'Lokaler Fensterservice in Tulln – schnell vor Ort, faire Preise, 24h Notdienst.',
    url: 'https://www.fensterservice-rowo.at/tulln',
    locale: 'de_AT', type: 'website',
  },
  other: {
    'geo.region': 'AT-3',
    'geo.placename': 'Tulln an der Donau',
    'geo.position': '48.3285;16.0562',
    'ICBM': '48.3285, 16.0562',
  },
};

const data: RegionData = {
  city: 'Tulln',
  region: 'Tulln & Umgebung',
  slug: 'tulln',
  imageSrc: '/Images/Fensterservice Tulln.webp',
  imageAlt: 'Fensterservice Tulln – Fensterreparatur in Tulln an der Donau und Umgebung',
  description: 'Ihr lokaler Stammbetrieb für Fensterreparatur in Tulln, Langenlebarn, Stockerau und der gesamten Region – kurze Anfahrtswege, faire Preise.',
  geo: { lat: '48.3285', lng: '16.0562', region: 'AT-3' },

  localFeatures: [
    { title: 'Stammbetrieb der Region', text: 'Als ortsansässiger Betrieb kennen wir die Region Tulln bestens und sind in kurzer Zeit bei Ihnen – ohne lange Wartezeiten oder hohe Anfahrtskosten.' },
    { title: 'Einfamilienhäuser & Reihenhäuser', text: 'Tulln und Umgebung ist geprägt von Eigenheimen. Wir kennen die gängigen Kunststoff- und Holzfenster-Systeme und haben Ersatzteile meist im Fahrzeug.' },
    { title: 'Historische Bauten & Moderne', text: 'Vom historischen Stadthaus im Zentrum bis zur modernen Wohnanlage – wir haben Erfahrung mit allen Fenstertypen in der Region Tulln.' },
  ],

  problems: [
    { title: 'Schwergängige & klemmende Fenster', description: 'Mangelnde Schmierung oder verstellte Beschläge – wir justieren und pflegen Ihre Fenster fachgerecht für leichte Bedienung.' },
    { title: 'Zugluft & undichte Dichtungen', description: 'Poröse oder gerissene Dichtungen führen zu Wärmeverlust und hohen Heizkosten. Wir tauschen Dichtprofile schnell aus.' },
    { title: 'Defekte Griffe & Beschläge', description: 'Kaputter Fenstergriff oder lockere Bänder – Reparatur mit Markenteilen meist beim ersten Besuch möglich.' },
    { title: 'Glasbruch & Scheibenersatz', description: 'Einfach-, Isolier- und Sicherheitsglas – wir ersetzen alle gängigen Scheiben, meist innerhalb von 2–3 Tagen.' },
    { title: 'Rollladen & Jalousien', description: 'Gurtband, Lamellen, Federantrieb oder Motor – wir reparieren alle Rollläden und Sonnenschutzsysteme in Tulln.' },
    { title: 'Insektenschutz Montage', description: 'Maßgefertigte Insektenschutzgitter und Plissees für Fenster und Türen – Montage inklusive.' },
  ],

  serviceAreas: [
    'Tulln an der Donau', 'Langenlebarn', 'Großweikersdorf', 'Judenau-Baumgarten',
    'Tulln Land', 'Stockerau', 'Korneuburg', 'Herzogenburg',
    'Traismauer', 'Königstetten', 'Sieghartskirchen', 'Klosterneuburg',
  ],

  faqItems: [
    {
      question: 'Was kostet Fensterservice in Tulln?',
      answer: 'Für eine Fensterreparatur in Tulln rechnen Sie grob mit 60–100 € für eine Beschlagjustierung, 80–150 € für einen Dichtungstausch und 150–400 € für den Austausch einer Isolierglasscheibe. Als lokaler Betrieb in der Region Tulln haben wir keine hohen Anfahrtskosten. Immer mit kostenlosem Festpreisangebot vor Arbeitsbeginn. Alle Preise zzgl. MwSt.',
    },
    {
      question: 'Wie schnell kommen Sie zu einem Notfall in Tulln?',
      answer: 'Da wir in der Region Tulln ansässig sind, können wir bei Notfällen besonders schnell reagieren. In den meisten Fällen sind wir innerhalb von 1–2 Stunden vor Ort. Unser 24h-Notdienst ist täglich erreichbar – auch an Wochenenden und Feiertagen. Rufen Sie uns unter +43 664 435 16 22 an.',
    },
    {
      question: 'Welche Orte rund um Tulln betreuen Sie?',
      answer: 'Von Tulln an der Donau aus betreuen wir die gesamte Umgebung: Langenlebarn, Großweikersdorf, Judenau-Baumgarten, Königstetten, Sieghartskirchen, Stockerau, Korneuburg, Herzogenburg und Traismauer. Auch nach Klosterneuburg und in Richtung Wien fahren wir regelmäßig.',
    },
    {
      question: 'Reparieren Sie Fenster in Einfamilienhäusern in Tulln?',
      answer: 'Ja, ein Großteil unserer Arbeit in der Region Tulln sind Einfamilienhäuser und Reihenhäuser. Wir kennen die typischen Kunststofffenster von REHAU, Salamander und Veka sowie ältere Holz- und Holz-Alu-Verbundfenster. Häufige Reparaturen: Beschlagjustierung, Dichtungswechsel, Griff- und Schlosserneuerung sowie Rollladenreparatur.',
    },
    {
      question: 'Führen Sie auch Fensterwartung für Neubauten in Tulln durch?',
      answer: 'Ja, Neubaufenster in der wachsenden Region Tulln sollten nach 1–2 Jahren erstmals justiert und gewartet werden, da sich Gebäude setzen und Beschläge nachjustiert werden müssen. Wir prüfen Dichtungen, Beschläge und die Funktion aller Fenster und Türen und erstellen ein Wartungsprotokoll. Für Bauträger bieten wir Rahmenverträge an.',
    },
    {
      question: 'Können Sie beschlagene Isolierglasscheiben in Tulln austauschen?',
      answer: 'Ja, beschlagenes oder feuchtes Isolierglas bedeutet, dass die Versiegelung gebrochen ist – das lässt sich nicht reparieren, die Scheibe muss ersetzt werden. Wir messen das genaue Format, bestellen die Scheibe und montieren sie. Die Arbeit dauert in der Regel 1–2 Stunden. Standardscheiben haben wir oft auf Lager.',
    },
    {
      question: 'Was mache ich, wenn mein Fenster sich nicht mehr schließen lässt?',
      answer: 'Ein Fenster, das sich nicht mehr schließen lässt, ist ein Notfall – besonders im Winter oder bei Unwetter. Häufige Ursachen: der Beschlag ist verschlissen oder verstellt, der Rahmen hat sich durch Setzung verzogen, oder der Griff ist gebrochen. Rufen Sie uns sofort an – wir kommen auch am selben Tag. Übergangsweise können Sie das Fenster mit einem Keil provisorisch sichern.',
    },
    {
      question: 'Reparieren Sie auch Terrassentüren und Schiebetüren in Tulln?',
      answer: 'Ja, neben normalen Fenstern reparieren wir in Tulln auch Terrassentüren, Balkontüren und Schiebetürsysteme. Typische Probleme: schwergängige Schiebetüren (Rollen verschlissen), klemmendes Schloss, defekte Dichtung oder beschädigtes Glas. Auch Insektenschutzsysteme (Plissee, Rahmen-Rollo) montieren und reparieren wir.',
    },
  ],

  whyUs: [
    { title: 'Stammbetrieb Tulln', description: 'Als ortsansässiger Betrieb sind wir schnell in Tulln und der Umgebung – kurze Wege, kein langer Vorlauf.' },
    { title: 'Transparente Festpreise', description: 'Vor Arbeitsbeginn erhalten Sie ein klares Angebot – ohne versteckte Kosten.' },
    { title: 'Erfahrene Techniker', description: 'Qualifiziertes Fachpersonal mit Erfahrung in allen gängigen Fenster- und Türsystemen.' },
    { title: '24h Notdienst', description: 'Notfall-Reparaturen rund um die Uhr – auch am Wochenende und an Feiertagen erreichbar.' },
    { title: 'Ersatzteile im Fahrzeug', description: 'Häufige Ersatzteile sind immer dabei – viele Reparaturen beim ersten Termin erledigt.' },
    { title: '500+ zufriedene Kunden', description: 'Über 500 zufriedene Kunden in der Region sprechen für unsere Qualität und Verlässlichkeit.' },
  ],
};

export default function TullnPage() {
  return <RegionPage data={data} />;
}
