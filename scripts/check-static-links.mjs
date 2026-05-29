import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
const missing = [];

function cleanHref(href) {
  return href.split('#')[0].split('?')[0].trim();
}

function shouldIgnore(href) {
  const value = href.trim().toLowerCase();
  return (
    !value ||
    value.startsWith('#') ||
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    value.startsWith('javascript:')
  );
}

function targetExists(href) {
  const clean = cleanHref(href);
  if (!clean || shouldIgnore(clean)) return true;
  const normalized = clean.replace(/^\.\//, '');
  const targetPath = path.join(root, normalized);
  return fs.existsSync(targetPath);
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/gi);

  for (const match of hrefMatches) {
    const href = match[1];
    if (shouldIgnore(href)) continue;
    const clean = cleanHref(href);
    if (!targetExists(clean)) {
      missing.push(`${file} -> ${href}`);
    }
  }
}

if (missing.length) {
  console.error('Missing local links found:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Static local link check passed for ${htmlFiles.length} HTML files.`);
