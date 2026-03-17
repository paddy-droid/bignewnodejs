'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPreview: React.FC = () => {
  // Blogartikel-Daten
  const blogPosts = [
    {
      id: 1,
      title: 'Insektenschutz im Frühling: Jetzt Gitter & Plissees montieren lassen',
      excerpt: 'Sobald die ersten warmen Tage beginnen, erwacht die Insektenwelt. Jetzt ist der richtige Zeitpunkt für maßgefertigte Insektenschutzgitter in Wien & NÖ.',
      imageUrl: '/Images/insektenschutz-fruehling.png',
      date: '02. Februar 2026',
      slug: 'insektenschutz-fruehling'
    },
    {
      id: 2,
      title: 'Einbruchschutz im Frühling: Warum jetzt der richtige Zeitpunkt ist',
      excerpt: 'Frühjahr bedeutet mehr Aktivität – auch für Einbrecher. Erfahren Sie, warum jetzt der ideale Moment für Sicherheits-Updates an Ihren Fenstern und Türen ist.',
      imageUrl: '/Images/einbruchschutz-sicherheit.png',
      date: '05. Januar 2026',
      slug: 'einbruchschutz-im-fruehling'
    },
    {
      id: 3,
      title: 'Fenster-Frühjahrscheck: Wartung & Pflege nach dem Winter',
      excerpt: 'Nach dem Winter brauchen Fenster besondere Aufmerksamkeit. Unser Frühjahrscheck zeigt, worauf Sie achten sollten und wann ein Profi gefragt ist.',
      imageUrl: '/Images/fenster-fruehjahrscheck.png',
      date: '20. Januar 2026',
      slug: 'fenster-fruehjahrscheck'
    },
    {
      id: 4,
      title: 'Beschlagene Fenster? So vermeidest du Schimmel in der Heizsaison',
      excerpt: 'Erfahren Sie, wie Sie beschlagene Fenster vermeiden und Schimmelbildung in der Heizsaison effektiv verhindern können.',
      imageUrl: '/Images/fenster-dichtungen-tauschen.webp',
      date: '10. November 2025',
      slug: 'beschlagene-fenster-vermeiden'
    },
    {
      id: 5,
      title: 'Rollladen-Reparatur: Wann Sie einen Profi rufen sollten',
      excerpt: 'Erfahren Sie, bei welchen Rollladen-Problemen Sie selbst helfen können und wann es Zeit ist, einen Fachmann zu kontaktieren.',
      imageUrl: '/Images/rolladen reparatur niederösterreich.webp',
      date: '08. November 2025',
      slug: 'rollladen-klemmt'
    },
    {
      id: 6,
      title: 'Energie sparen im Winter: Richtig abgedichtete Fenster in NÖ',
      excerpt: 'Entdecken Sie, wie Sie durch professionelles Fensterabdichten Energiekosten senken und den Wohnkomfort erhöhen können.',
      imageUrl: '/Images/richtig abgedichtete Fenster in Niederösterreich.webp',
      date: '10. November 2025',
      slug: 'energie-sparen-im-winter'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aktuelles aus unserem Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nützliche Tipps und Informationen rund um Fenster, Energieeffizienz und Wartung für ein behagliches Zuhause
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Artikel lesen
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
          >
            Weitere Fenstertipps und Wartungsratgeber
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;