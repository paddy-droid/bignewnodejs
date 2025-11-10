import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog - Fensterservice',
  description: 'Nützliche Tipps und Informationen rund um Fenster, Energieeffizienz und Wartung.',
}

const blogPosts = [
  {
    id: 'rollladen-klemmt',
    title: 'Rollladen klemmt oder läuft schief? Ursachen und schnelle Lösungen',
    description: 'Erfahren Sie, was Sie bei klemmenden oder schief laufenden Rollladen tun können und wann professionelle Hilfe notwendig ist.',
    date: '2025-11-10',
    author: 'Fensterservice Team',
    image: '/Images/rolladen reparatur niederösterreich.webp',
    tags: ['Rollladen-Reparatur', 'Notdienst', 'DIY-Tipps']
  },
  {
    id: 'fensterdichtungen-austauschen',
    title: 'Fensterdichtungen austauschen – kleine Arbeit, große Wirkung im Winter',
    description: 'Erfahren Sie, wie Sie durch den Austausch von Fensterdichtungen Heizkosten senken und Zugluft vermeiden können.',
    date: '2025-11-10',
    author: 'Fensterservice Team',
    image: '/Images/fenster-dichtungen-tauschen.webp',
    tags: ['DIY-Anleitung', 'Energieeffizienz', 'Winterschutz']
  },
  {
    id: 'beschlagene-fenster-vermeiden',
    title: 'Beschlagene Fenster? So vermeidest du Schimmel in der Heizsaison',
    description: 'Erfahren Sie, wie Sie beschlagene Fenster vermeiden und Schimmelbildung in der Heizsaison effektiv verhindern können.',
    date: '2025-11-10',
    author: 'Fensterservice Team',
    image: '/Images/fenster-dichtungen-tauschen.webp',
    tags: ['Schimmelprävention', 'Lüftung', 'Feuchtigkeitskontrolle']
  },
  {
    id: 'fensterwartung-im-winter',
    title: 'Fensterwartung im Winter: So verlängerst du die Lebensdauer deiner Fenster',
    description: 'Erfahren Sie, wie Sie durch richtige Fensterwartung im Winter die Lebensdauer Ihrer Fenster verlängern und Heizkosten sparen.',
    date: '2025-11-10',
    author: 'Fensterservice Team',
    image: '/Images/Fenster Dichtungstausch im Winter.webp',
    tags: ['Fensterpflege', 'Wartung', 'Winterschutz']
  },
  {
    id: 'energie-sparen-im-winter',
    title: 'Energie sparen im Winter: Warum richtig abgedichtete Fenster in Niederösterreich bares Geld wert sind',
    description: 'Entdecken Sie, wie Sie durch professionelles Fensterabdichten Energiekosten senken und den Wohnkomfort erhöhen können.',
    date: '2025-11-10',
    author: 'Fensterservice Team',
    image: '/Images/richtig abgedichtete Fenster in Niederösterreich.webp',
    tags: ['Energieeffizienz', 'Fensterabdichtung', 'Winterschutz']
  },
  {
    id: 'fenster-einstellen-lassen',
    title: 'Fenster einstellen lassen – warum kleine Justierungen große Wirkung haben',
    description: 'Erfahren Sie, wie professionelle Fenstereinstellung die Funktion verbessert und Energiekosten senkt.',
    date: '2025-11-10',
    author: 'Fensterservice Team',
    image: '/Images/dichtungstausch-fenster.webp',
    tags: ['Fenstereinstellung', 'Wartung', 'Energieeffizienz']
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unser Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nützliche Tipps und Informationen rund um Fenster, Energieeffizienz und Wartung für ein behagliches Zuhause.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {post.date} • {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Weiterlesen
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Derzeit keine Blogartikel verfügbar.</p>
            <p className="text-gray-400 mt-2">Besuchen Sie uns bald wieder für neue Inhalte!</p>
          </div>
        )}
      </div>
    </div>
  )
}