/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://fensterservice.at',
  generateRobotsTxt: false, // Will create robots.txt manually
  // optional
  // exclude: ['/server-sitemap.xml'], // exclude here
  // robotsTxtUrl: 'https://example.com/robots.txt', // sitemap will be added here
  // changefreq: 'daily',
  // priority: 0.7,
  // sitemapSize: 5000,
  // generateIndexSitemap: true,
  // Default transformation function
  // transform: async (config, path) => {
  //   return {
  //     loc: path, // => this will be exported as http(s)://<config.siteUrl><path>
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //     alternateRefs: config.alternateRefs ?? [],
  //   }
  // },
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/additional-page'),
  // ],
  // robotsTxtOptions: {
  //   policies: [
  //     {
  //       userAgent: '*',
  //       allow: '/',
  //     },
  //     {
  //       userAgent: 'blacklisted-bot',
  //       disallow: ['/private/', '/another-private/'],
  //     },
  //   ],
  //   additionalSitemaps: [
  //     'https://example.com/my-custom-sitemap-1.xml',
  //     'https://example.com/my-custom-sitemap-2.xml',
  //   ],
  // },
};

export default config;