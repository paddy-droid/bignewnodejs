import { MetadataRoute } from 'next';

const BASE = 'https://www.fensterservice-rowo.at';
const NOW = '2026-03-17';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                               lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/wien`,                     lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/tulln`,                    lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/st-poelten`,               lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/krems`,                    lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/baden-bei-wien`,           lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/klosterneuburg`,           lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/leistungen`,               lastModified: NOW, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/notdienst`,                lastModified: NOW, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/velux-reparatur`,          lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/spezialleistungen`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/kontakt`,                  lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/ueber-uns`,                lastModified: NOW, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/blog`,                     lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog/insektenschutz-fruehling`,        lastModified: '2026-02-02', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/einbruchschutz-im-fruehling`,     lastModified: '2026-01-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/fenster-fruehjahrscheck`,         lastModified: '2026-01-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/beschlagene-fenster-vermeiden`,   lastModified: '2025-11-10', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/fensterwartung-im-winter`,        lastModified: '2025-11-10', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/energie-sparen-im-winter`,        lastModified: '2025-11-10', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/fensterdichtungen-austauschen`,   lastModified: '2025-11-09', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/rollladen-klemmt`,                lastModified: '2025-11-08', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/fenster-einstellen-lassen`,       lastModified: '2025-11-07', changeFrequency: 'monthly', priority: 0.6 },
  ];
}
