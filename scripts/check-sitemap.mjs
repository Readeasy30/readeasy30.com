import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sitemapPath = path.join(root, 'sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  console.error('Missing sitemap.xml');
  process.exit(1);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(https:\/\/readeasy30\.com\/[^<]*)<\/loc>/gi)].map((match) => match[1]);
const missing = [];

for (const url of urls) {
  const parsed = new URL(url);
  let pathname = parsed.pathname;
  if (pathname === '/') pathname = '/index.html';
  const localPath = path.join(root, pathname.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    missing.push(`${url} -> ${localPath}`);
  }
}

if (missing.length) {
  console.error('Missing sitemap files found:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Sitemap check passed for ${urls.length} URLs.`);
