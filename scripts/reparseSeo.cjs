const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, '../SEO files');
const destDir = path.join(__dirname, '../src/data/seo');

const mappings = [
  { txt: 'Home Page - SEO, AEO & GEO Setup File.txt', ts: 'homeSeo.ts', dataName: 'homeSeoData' },
  { txt: 'About Page - SEO Setup.txt', ts: 'aboutSeo.ts', dataName: 'aboutSeoData' },
  { txt: 'Contact Page - SEO Setup.txt', ts: 'contactSeo.ts', dataName: 'contactSeoData' },
  { txt: 'Life at Cybaemtech - SEO Setup.txt', ts: 'lifeAtCybaemtechSeo.ts', dataName: 'lifeAtCybaemtechSeoData' },
  { txt: 'Resource Page - SEO Setup Code.txt', ts: 'resourceSeo.ts', dataName: 'resourceSeoData' },
  { txt: 'web-systems.txt', ts: 'webSystemsSeo.ts', dataName: 'webSystemsSeoData' },
  { txt: 'managed-it.txt', ts: 'managedITSeo.ts', dataName: 'managedITSeoData' },
  { txt: 'IT Agumentation - SEO Setup.txt', ts: 'itStaffAugmentationSeo.ts', dataName: 'itStaffAugmentationSeoData' },
  { txt: 'digital marketing.txt', ts: 'digitalGrowthSeo.ts', dataName: 'digitalGrowthSeoData' },
  { txt: 'enterprise-software.txt', ts: 'enterpriseSoftwareSeo.ts', dataName: 'enterpriseSoftwareSeoData' },
  { txt: 'it-infrastructure-services.txt', ts: 'itInfrastructureSeo.ts', dataName: 'itInfrastructureSeoData' },
];

function extractTag(html, regex) {
  const match = html.match(regex);
  return match ? match[1].replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() : '';
}

for (const map of mappings) {
  const txtPath = path.join(seoDir, map.txt);
  if (!fs.existsSync(txtPath)) continue;
  
  const content = fs.readFileSync(txtPath, 'utf8');

  // Match multiline meta tags
  const title = extractTag(content, /<title>([\s\S]*?)<\/title>/);
  const description = extractTag(content, /<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/);
  const keywords = extractTag(content, /<meta[^>]*name=["']keywords["'][^>]*content=["']([\s\S]*?)["'][^>]*>/);
  const canonical = extractTag(content, /<link[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["'][^>]*>/);
  const ogTitle = extractTag(content, /<meta[^>]*property=["']og:title["'][^>]*content=["']([\s\S]*?)["'][^>]*>/);
  const ogDescription = extractTag(content, /<meta[^>]*property=["']og:description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/);
  const twitterTitle = extractTag(content, /<meta[^>]*name=["']twitter:title["'][^>]*content=["']([\s\S]*?)["'][^>]*>/);
  const twitterDescription = extractTag(content, /<meta[^>]*name=["']twitter:description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/);

  // Extract JSON-LD scripts
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g;
  let match;
  let jsonLdArray = [];
  while ((match = jsonLdRegex.exec(content)) !== null) {
      try {
          const parsed = JSON.parse(match[1].trim());
          jsonLdArray.push(JSON.stringify(parsed, null, 2));
      } catch(e) {
          jsonLdArray.push(match[1].trim());
      }
  }

  const jsonLdContent = jsonLdArray.length > 0 ? `[\n${jsonLdArray.join(',\n')}\n  ]` : `[]`;

  const tsContent = `export const ${map.dataName} = {
  title: "${title}",
  description: "${description}",
  canonical: "${canonical}",
  keywords: "${keywords}",
  ogTitle: "${ogTitle}",
  ogDescription: "${ogDescription}",
  twitterTitle: "${twitterTitle}",
  twitterDescription: "${twitterDescription}",
  jsonLd: ${jsonLdContent}
};
`;

  const tsPath = path.join(destDir, map.ts);
  fs.writeFileSync(tsPath, tsContent, 'utf8');
  console.log(`Updated ${map.ts}`);
}
