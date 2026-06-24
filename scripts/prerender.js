import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

// Define the routes to prerender, combining current routes with requested spec routes
const routes = [
  '/',
  '/about',
  '/contact',
  '/life-at-cybaemtech',
  '/resources',
  '/blog',
  '/solutions/web-systems',
  '/solutions/managed-it',
  '/solutions/it-augmentation',
  '/solutions/it-staff-augmentation',
  '/solutions/digital-marketing',
  '/solutions/digital-revenue-growth',
  '/solutions/enterprise-software',
  '/solutions/it-infrastructure-services'
];

async function prerender() {
  const app = express();
  
  // Serve static files from the dist directory, fallback to index.html for CSR navigation
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Static server listening on port ${port}`);

    try {
      const browser = await puppeteer.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
      });
      const page = await browser.newPage();

      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Additional wait to ensure React useEffects for SEO head injection are completed
        await new Promise(r => setTimeout(r, 1500));
        
        // Remove scripts if desired, but we want a hydrated app, so we keep them.
        const html = await page.content();
        
        const routePath = route === '/' ? '' : route;
        const outDir = path.join(distPath, routePath);
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
        console.log(`Successfully saved ${route}`);
      }

      await browser.close();
      console.log('Prerendering complete!');
    } catch (err) {
      console.error('Prerender error:', err);
      process.exit(1);
    } finally {
      server.close();
    }
  });
}

prerender();
