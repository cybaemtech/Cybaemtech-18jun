/**
 * seoInject.cjs
 * 
 * Build-time SEO injection script.
 * Reads raw HTML from SEO .txt files and directly injects them into
 * the compiled dist/[route]/index.html files.
 * 
 * NO JavaScript execution needed. NO React Helmet. NO Puppeteer.
 * The SEO tags are hardcoded directly into each HTML file at build time.
 */

const fs = require('fs');
const path = require('path');

const SEO_DIR = path.join(__dirname, '../SEO files');
const DIST_DIR = path.join(__dirname, '../dist');

// Route → SEO txt file mapping
const ROUTES = [
  { route: '/',                                    txt: 'Home Page - SEO, AEO & GEO Setup File.txt', src: 'src/data/seo/homeSeo.ts' },
  { route: '/about',                               txt: 'About Page - SEO Setup.txt', src: 'src/data/seo/aboutSeo.ts' },
  { route: '/contact',                             txt: 'Contact Page - SEO Setup.txt', src: 'src/data/seo/contactSeo.ts' },
  { route: '/life-at-cybaemtech',                  txt: 'Life at Cybaemtech - SEO Setup.txt', src: 'src/data/seo/lifeAtCybaemtechSeo.ts' },
  { route: '/blog',                                txt: 'Resource Page - SEO Setup Code.txt', src: 'src/data/seo/blogSeo.ts' },
  { route: '/resources',                           txt: 'Resource Page - SEO Setup Code.txt', src: 'src/data/seo/blogSeo.ts' },
  { route: '/solutions/web-systems',               txt: 'web-systems.txt', src: 'src/data/seo/webSystemsSeo.ts' },
  { route: '/solutions/managed-it',                txt: 'managed-it.txt', src: 'src/data/seo/managedITSeo.ts' },
  { route: '/solutions/it-augmentation',           txt: 'IT Agumentation - SEO Setup.txt', src: 'src/data/seo/itAugmentationSeo.ts' },
  { route: '/solutions/it-staff-augmentation',     txt: 'IT Agumentation - SEO Setup.txt', src: 'src/data/seo/itAugmentationSeo.ts' },
  { route: '/solutions/digital-marketing',         txt: 'digital marketing.txt', src: 'src/data/seo/digitalMarketingSeo.ts' },
  { route: '/solutions/digital-revenue-growth',    txt: 'digital marketing.txt', src: 'src/data/seo/digitalMarketingSeo.ts' },
  { route: '/solutions/enterprise-software',       txt: 'enterprise-software.txt', src: 'src/data/seo/enterpriseSoftwareSeo.ts' },
  { route: '/solutions/it-infrastructure-services',txt: 'it-infrastructure-services.txt', src: 'src/data/seo/itInfrastructureServicesSeo.ts' },
];

/**
 * Extract all SEO meta tags, links, title, and JSON-LD scripts from the txt file.
 * Returns a clean HTML string ready to be injected into <head>.
 */
function extractSeoHtml(txtContent) {
  const lines = [];

  // 1. Extract <title>
  const titleMatch = txtContent.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    lines.push(`<title>${titleMatch[1].trim()}</title>`);
  }

  // 2. Extract ALL <meta ... /> tags (handles multi-line)
  // Normalize: collapse multiline tags into single lines first
  const normalized = txtContent.replace(/<meta\s+([\s\S]*?)\/>/g, (match) => {
    return match.replace(/\r?\n\s*/g, ' ');
  });

  const metaRegex = /<meta\s+([^>]*?)\/>/gi;
  let metaMatch;
  while ((metaMatch = metaRegex.exec(normalized)) !== null) {
    const attrs = metaMatch[1].trim();
    // Skip charset and viewport (already in base html)
    if (/charset=/i.test(attrs)) continue;
    if (/name="viewport"/i.test(attrs)) continue;
    lines.push(`<meta ${attrs}/>`);
  }

  // 3. Extract <link rel="canonical"> (handles multi-line)
  const normalizedLinks = txtContent.replace(/<link\s+([\s\S]*?)\/>/g, (match) => {
    return match.replace(/\r?\n\s*/g, ' ');
  });
  const linkRegex = /<link\s+([^>]*?)\/>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(normalizedLinks)) !== null) {
    const attrs = linkMatch[1].trim();
    if (/rel="canonical"/i.test(attrs)) {
      lines.push(`<link ${attrs}/>`);
    }
  }

  // 4. Extract all <script type="application/ld+json">...</script>
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonLdMatch;
  while ((jsonLdMatch = jsonLdRegex.exec(txtContent)) !== null) {
    // Validate and minify the JSON
    try {
      const parsed = JSON.parse(jsonLdMatch[1].trim());
      lines.push(`<script type="application/ld+json">${JSON.stringify(parsed)}</script>`);
    } catch (e) {
      // If invalid JSON, inject as-is
      lines.push(`<script type="application/ld+json">${jsonLdMatch[1].trim()}</script>`);
    }
  }

  return lines.join('\n');
}

/**
 * Inject SEO HTML into the <head> of an existing HTML file.
 * Inserts the SEO block right after the opening <head> tag (at the very top),
 * so it appears BEFORE any other tags, giving it highest priority.
 * Also removes any previously injected SEO block to avoid duplication.
 */
function injectSeoIntoHtml(htmlContent, seoHtml, sourceLabel) {
  // 1. Remove any old injected SEO block from a previous run
  let cleaned = htmlContent.replace(
    /<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\s*/,
    ''
  );

  const seoBlock = `<!-- SEO_INJECT_START -->\n<!-- SEO SOURCE: ${sourceLabel} -->\n${seoHtml}\n<!-- SEO_INJECT_END -->\n`;

  // 2. Insert right after the opening <head> tag (handles <head> and <head ...attrs>)
  //    Puppeteer outputs the head as part of a single long line, so we match inline.
  if (/<head[^>]*>/i.test(cleaned)) {
    return cleaned.replace(/<head([^>]*)>/i, `<head$1>${seoBlock}`);
  }

  // Fallback: prepend to file
  return seoBlock + cleaned;
}

// ─── Main ───────────────────────────────────────────────────────────────────

let successCount = 0;
let errorCount = 0;

console.log('\n🚀 SEO Build-Time Injection Starting...\n');

for (const { route, txt, src } of ROUTES) {
  const txtPath = path.join(SEO_DIR, txt);
  const routeDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
  const htmlPath = path.join(routeDir, 'index.html');

  // Check txt file exists
  if (!fs.existsSync(txtPath)) {
    console.warn(`  ⚠️  SEO file not found: ${txt} (skipping ${route})`);
    errorCount++;
    continue;
  }

  // Check dist html exists
  if (!fs.existsSync(htmlPath)) {
    // Create directory if needed, copy base index.html
    const baseHtml = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(baseHtml)) {
      fs.mkdirSync(routeDir, { recursive: true });
      fs.copyFileSync(baseHtml, htmlPath);
      console.log(`  📁  Created dist${route}/index.html from base`);
    } else {
      console.warn(`  ⚠️  dist/index.html not found, skipping ${route}`);
      errorCount++;
      continue;
    }
  }

  try {
    const txtContent = fs.readFileSync(txtPath, 'utf8');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    const seoHtml = extractSeoHtml(txtContent);
    const updatedHtml = injectSeoIntoHtml(htmlContent, seoHtml, src);

    fs.writeFileSync(htmlPath, updatedHtml, 'utf8');
    console.log(`  ✅  ${route} → ${txt}`);
    successCount++;
  } catch (err) {
    console.error(`  ❌  Error processing ${route}:`, err.message);
    errorCount++;
  }
}

console.log(`\n✨ SEO Injection Complete: ${successCount} routes updated, ${errorCount} errors.\n`);
