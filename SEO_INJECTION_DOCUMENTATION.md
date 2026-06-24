# SEO HTML Injection & Pre-rendering Architecture

This document describes the design and implementation logic used to connect custom SEO HTML files to the page sources in development and production (cPanel deployment).

---

## 1. High-Level Concept

The application is a Single Page Application (SPA) built using React and Vite. By default, SPAs serve a single generic `index.html` file, and React Router renders pages dynamically on the client side. This means that search engine crawlers (Google, Bing, ChatGPT, Claude) only see generic meta tags when viewing the initial page source code.

To solve this, we implemented a custom **static pre-rendering and SEO injection pipeline** that automatically loads raw, high-performing SEO tags from the `SEO files` directory and injects them directly into the page source code.

---

## 2. Directory and File Mappings

All custom SEO metadata templates reside in the `./SEO files` folder, renamed from `.txt` to `.html`. The system processes these mappings inside the Vite config:

| URL Path | Target HTML Template (inside `./SEO files/`) |
| :--- | :--- |
| `/` | `Home Page - SEO, AEO & GEO Setup File.html` |
| `/about` | `About Page - SEO Setup.html` |
| `/contact` | `Contact Page - SEO Setup.html` |
| `/life-at-cybaemtech` | `Life at Cybaemtech - SEO Setup.html` |
| `/approach` | `Life at Cybaemtech - SEO Setup.html` (Alias) |
| `/blog` | `Resource Page - SEO Setup Code.html` |
| `/resources` | `Resource Page - SEO Setup Code.html` (Alias) |
| `/solutions/web-systems` | `web-systems.html` |
| `/solutions/it-augmentation` | `IT Agumentation - SEO Setup.html` |
| `/solutions/it-staff-augmentation` | `IT Agumentation - SEO Setup.html` (Alias) |
| `/solutions/digital-marketing` | `digital marketing.html` |
| `/solutions/digital-revenue-growth` | `digital marketing.html` (Alias) |
| `/solutions/managed-it` | `managed-it.html` |
| `/solutions/managed-it-cloud-security` | `managed-it.html` (Alias) |
| `/solutions/it-infrastructure-services` | `it-infrastructure-services.html` |
| `/solutions/it-infrastructure` | `it-infrastructure-services.html` (Alias) |
| `/solutions/enterprise-software` | `enterprise-software.html` |
| `/portfolio` | `portfolio.html` |

---

## 3. SEO Injection Logic

The core logic is implemented as a custom plugin in `vite.config.ts`:

### A. Markdown Extraction & Cleaning
Some `.html` template files contain introductory markdown text and code fences (e.g. ````html ... ````). To prevent rendering raw markdown inside the HTML headers, we use the `extractHtmlFromContent` utility:
```typescript
function extractHtmlFromContent(content: string): string {
  const match = content.match(/```html\s*([\s\S]*?)\s*```/i);
  if (match) {
    return match[1];
  }
  return content.trim();
}
```
If code fences are found, it extracts only the valid HTML tags; otherwise, it returns the trimmed file content.

### B. Dev Server Middleware (`configureServer`)
In development server mode, when a user accesses a matching route (like `/contact` or `/about`):
1. **URL Normalization**: Trailing slashes are stripped (e.g. `/contact/` normalizes to `/contact`).
2. **Template Lookup**: If a matching template exists in `./SEO files/`, it is loaded and cleaned.
3. **Fallback**: If no template exists, it falls back to dynamically building the SEO header block from the default TypeScript config (`seo-config.ts`).
4. **Vite HTML Transform integration**: The HTML is transformed using `await server.transformIndexHtml(...)`. This ensures Vite injects HMR (Hot Module Replacement) scripts and the React Fast Refresh preamble, keeping the page operational (rather than blank).

### C. Build Prerendering (`closeBundle`)
During production builds (`npm run build`), after compilation finishes:
1. The plugin reads `dist/index.html` as the base shell.
2. For each route in `routesToProcess`:
   - It cleans up any existing `<!-- SEO_INJECT_START -->` block.
   - It reads the matching `.html` template file (falling back to generated TypeScript SEO block).
   - It inserts the SEO tags right before `</head>`.
   - **For `/`**: It overwrites `dist/index.html`.
   - **For Subroutes (e.g., `/contact`)**: It creates a physical subdirectory (e.g. `dist/contact/`) and writes the custom HTML structure to `dist/contact/index.html`.

---

## 4. cPanel Deployment & Routing

cPanel usually runs Apache or LiteSpeed servers. When deploying static files, page reloads or direct URL lookups of subdirectories require server-level rewrite rules.

We updated [public/.htaccess](file:///c:/Cybaemtech/Cybaemtech/Cybaemtech/CYBNEW-17-06-2026/public/.htaccess) to map requests to the correct pre-rendered physical subdirectories:

```apache
# Serve prerendered SEO routes directly when they exist
RewriteRule ^about/?$ /about/index.html [L]
RewriteRule ^contact/?$ /contact/index.html [L]
RewriteRule ^portfolio/?$ /portfolio/index.html [L]
...
```

### Why this is compatible with cPanel:
1. **Crawlers**: When Googlebot requests `https://www.cybaemtech.com/contact`, Apache intercepts the request and serves the static `/contact/index.html` file immediately. The crawler receives the exact SEO content from `Contact Page - SEO Setup.html`.
2. **Direct Browser URL Hits**: Direct accesses and page reloads are fast and render the SEO tags instantly.
3. **React Router fallback**: If a route is accessed that has not been pre-rendered, Apache falls back to serving `/index.html` where client-side navigation handles the layout.

---

## 5. How to Deploy to cPanel

1. Run the build command locally or in your pipeline:
   ```bash
   npm run build
   ```
2. Zip the contents of the generated **`dist/`** directory (including `.htaccess`).
3. Upload the zip to your cPanel File Manager and extract it directly into the **`public_html`** folder.
