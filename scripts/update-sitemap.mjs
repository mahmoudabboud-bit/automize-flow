import fs from 'node:fs';
import path from 'node:path';

function readDomain() {
  const cnamePath = path.join(process.cwd(), 'CNAME');
  if (!fs.existsSync(cnamePath)) {
    throw new Error('CNAME file not found; cannot determine domain');
  }
  return fs.readFileSync(cnamePath, 'utf8').trim();
}

function isoDate(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function writeSitemap(domain) {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>https://${domain}/</loc>\n` +
    `    <lastmod>${isoDate()}</lastmod>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`;
  fs.mkdirSync(path.dirname(sitemapPath), { recursive: true });
  fs.writeFileSync(sitemapPath, xml, 'utf8');
}

function writeRobots(domain) {
  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  const content = `User-agent: *\n` +
    `Allow: /\n` +
    `Sitemap: https://${domain}/sitemap.xml\n`;
  fs.mkdirSync(path.dirname(robotsPath), { recursive: true });
  fs.writeFileSync(robotsPath, content, 'utf8');
}

try {
  const domain = readDomain();
  writeSitemap(domain);
  writeRobots(domain);
  console.log(`Updated sitemap and robots for domain: ${domain}`);
} catch (err) {
  console.error('Failed to update sitemap/robots:', err.message);
  process.exitCode = 1;
}