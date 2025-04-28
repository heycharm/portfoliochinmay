import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  
  // Add all your site routes here
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://chinmaypundir.me' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap().catch((err) => {
  console.error('Error generating sitemap:', err);
});
