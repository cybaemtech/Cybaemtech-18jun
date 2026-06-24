import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import {
  homeSeoData,
  aboutSeoData,
  contactSeoData,
  lifeAtCybaemtechSeoData,
  blogSeoData,
  webSystemsSeoData,
  managedITSeoData,
  itAugmentationSeoData,
  digitalMarketingSeoData,
  enterpriseSoftwareSeoData,
  itInfrastructureServicesSeoData,
} from "./seo-config";

const BASE_URL = "https://www.cybaemtech.com";

type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  jsonLd?: unknown[];
};

const routeMeta: Record<string, RouteMeta> = {
  "/": homeSeoData,
  "/about": aboutSeoData,
  "/contact": contactSeoData,
  "/life-at-cybaemtech": lifeAtCybaemtechSeoData,
  "/blog": blogSeoData,
  "/resources": blogSeoData,
  "/solutions/web-systems": webSystemsSeoData,
  "/solutions/managed-it": managedITSeoData,
  "/solutions/it-augmentation": itAugmentationSeoData,
  "/solutions/digital-marketing": digitalMarketingSeoData,
  "/solutions/enterprise-software": enterpriseSoftwareSeoData,
  "/solutions/it-infrastructure-services": itInfrastructureServicesSeoData,
};

const routeAliases: Record<string, string> = {
  "/approach": "/life-at-cybaemtech",
  "/solutions/it-staff-augmentation": "/solutions/it-augmentation",
  "/solutions/digital-revenue-growth": "/solutions/digital-marketing",
  "/solutions/managed-it-cloud-security": "/solutions/managed-it",
  "/solutions/it-infrastructure": "/solutions/it-infrastructure-services",
};

const routeToSeoFileName: Record<string, string> = {
  "/": "Home Page - SEO, AEO & GEO Setup File.html",
  "/about": "About Page - SEO Setup.html",
  "/contact": "Contact Page - SEO Setup.html",
  "/life-at-cybaemtech": "Life at Cybaemtech - SEO Setup.html",
  "/approach": "Life at Cybaemtech - SEO Setup.html",
  "/blog": "Resource Page - SEO Setup Code.html",
  "/resources": "Resource Page - SEO Setup Code.html",
  "/solutions/web-systems": "web-systems.html",
  "/solutions/it-augmentation": "IT Agumentation - SEO Setup.html",
  "/solutions/it-staff-augmentation": "IT Agumentation - SEO Setup.html",
  "/solutions/digital-marketing": "digital marketing.html",
  "/solutions/digital-revenue-growth": "digital marketing.html",
  "/solutions/managed-it": "managed-it.html",
  "/solutions/managed-it-cloud-security": "managed-it.html",
  "/solutions/it-infrastructure-services": "it-infrastructure-services.html",
  "/solutions/it-infrastructure": "it-infrastructure-services.html",
  "/solutions/enterprise-software": "enterprise-software.html",
  "/portfolio": "portfolio.html",
};

const routesToProcess = Object.keys(routeToSeoFileName);

const targetRouteToSourceLabel: Record<string, string> = {
  "/": "src/data/seo/homeSeo.ts",
  "/about": "src/data/seo/aboutSeo.ts",
  "/contact": "src/data/seo/contactSeo.ts",
  "/life-at-cybaemtech": "src/data/seo/lifeAtCybaemtechSeo.ts",
  "/approach": "src/data/seo/lifeAtCybaemtechSeo.ts",
  "/blog": "src/data/seo/blogSeo.ts",
  "/resources": "src/data/seo/blogSeo.ts",
  "/solutions/web-systems": "src/data/seo/webSystemsSeo.ts",
  "/solutions/it-augmentation": "src/data/seo/itAugmentationSeo.ts",
  "/solutions/it-staff-augmentation": "src/data/seo/itAugmentationSeo.ts",
  "/solutions/digital-marketing": "src/data/seo/digitalMarketingSeo.ts",
  "/solutions/digital-revenue-growth": "src/data/seo/digitalMarketingSeo.ts",
  "/solutions/managed-it": "src/data/seo/managedITSeo.ts",
  "/solutions/managed-it-cloud-security": "src/data/seo/managedITSeo.ts",
  "/solutions/it-infrastructure-services": "src/data/seo/itInfrastructureServicesSeo.ts",
  "/solutions/it-infrastructure": "src/data/seo/itInfrastructureServicesSeo.ts",
  "/solutions/enterprise-software": "src/data/seo/enterpriseSoftwareSeo.ts",
};

function escHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildSeoHtml(meta: RouteMeta) {
  const canonical = meta.canonical.startsWith("http") ? meta.canonical : `${BASE_URL}${meta.canonical}`;
  const ogImg = "https://www.cybaemtech.com/images/cybaem-logo.png";
  const parts = [
    `<title>${escHtml(meta.title)}</title>`,
    `<meta name="description" content="${escHtml(meta.description)}">`,
    `<meta name="keywords" content="${escHtml(meta.keywords || "")}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escHtml(meta.ogTitle || meta.title)}">`,
    `<meta property="og:description" content="${escHtml(meta.ogDescription || meta.description)}">`,
    `<meta property="og:image" content="${ogImg}">`,
    `<meta property="og:site_name" content="Cybaem Tech">`,
    `<meta property="og:locale" content="en_IN">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escHtml(meta.twitterTitle || meta.ogTitle || meta.title)}">`,
    `<meta name="twitter:description" content="${escHtml(meta.twitterDescription || meta.ogDescription || meta.description)}">`,
    `<meta name="twitter:image" content="${ogImg}">`,
  ];

  if (meta.jsonLd?.length) {
    for (const schema of meta.jsonLd) {
      parts.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
    }
  }

  return parts.join("\n");
}

function extractHtmlFromContent(content: string): string {
  const match = content.match(/```html\s*([\s\S]*?)\s*```/i);
  if (match) {
    return match[1];
  }
  return content.trim();
}

function injectSeoIntoHtml(html: string, seoContent: string, sourceLabel: string) {
  const seoBlock = `<!-- SEO_INJECT_START -->\n<!-- SEO SOURCE: ${sourceLabel} -->\n${seoContent}\n<!-- SEO_INJECT_END -->`;
  const cleaned = html.replace(/<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\n?/g, "");
  return cleaned.replace("</head>", `${seoBlock}\n</head>`);
}

export default defineConfig(() => ({
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/contact.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/blog-api.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/auth.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  appType: "spa",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2015",
  },
  plugins: [
    react(),
    {
      name: "route-seo-dev-html",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            let url = req.url?.split("?")[0] || "/";
            // Normalize trailing slash (except for root "/")
            if (url.endsWith("/") && url !== "/") {
              url = url.slice(0, -1);
            }
            if (!routesToProcess.includes(url)) return next();

            const htmlPath = path.resolve(__dirname, "index.html");
            if (!fs.existsSync(htmlPath)) return next();

            let html = fs.readFileSync(htmlPath, "utf-8");

            let seoContent = "";
            let sourceLabel = "";

            const fileName = routeToSeoFileName[url];
            if (fileName) {
              const seoFilePath = path.resolve(__dirname, "SEO files", fileName);
              if (fs.existsSync(seoFilePath)) {
                const rawContent = fs.readFileSync(seoFilePath, "utf-8");
                seoContent = extractHtmlFromContent(rawContent);
                sourceLabel = `SEO files/${fileName}`;
              }
            }

            // Fallback
            if (!seoContent) {
              const targetRoute = routeMeta[url] ? url : routeAliases[url] || null;
              if (targetRoute) {
                const meta = routeMeta[targetRoute];
                seoContent = buildSeoHtml(meta);
                sourceLabel = targetRouteToSourceLabel[targetRoute] || "seo-config.ts";
              }
            }

            if (seoContent) {
              html = injectSeoIntoHtml(html, seoContent, sourceLabel);
            }

            // Pass the HTML through Vite's internal transformers (preamble, HMR client, etc.)
            const transformedHtml = await server.transformIndexHtml(req.url || url, html);

            res.setHeader("Content-Type", "text/html");
            res.end(transformedHtml);
          } catch (e) {
            next(e);
          }
        });
      },
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const baseHtmlPath = path.join(distDir, "index.html");
        if (!fs.existsSync(baseHtmlPath)) {
          console.warn("Could not find dist/index.html for SEO injection.");
          return;
        }

        const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

        const generateRouteHtml = (route: string, seoContent: string, sourceLabel: string) => {
          const stripped = baseHtml.replace(/<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\n?/g, "");
          const injected = injectSeoIntoHtml(stripped, seoContent, sourceLabel);

          if (route === "/") {
            fs.writeFileSync(baseHtmlPath, injected);
          } else {
            const routeDir = path.join(distDir, route.startsWith("/") ? route.substring(1) : route);
            fs.mkdirSync(routeDir, { recursive: true });
            fs.writeFileSync(path.join(routeDir, "index.html"), injected);
          }
        };

        for (const route of routesToProcess) {
          let seoContent = "";
          let sourceLabel = "";

          const fileName = routeToSeoFileName[route];
          if (fileName) {
            const seoFilePath = path.resolve(__dirname, "SEO files", fileName);
            if (fs.existsSync(seoFilePath)) {
              const rawContent = fs.readFileSync(seoFilePath, "utf-8");
              seoContent = extractHtmlFromContent(rawContent);
              sourceLabel = `SEO files/${fileName}`;
            }
          }

          // Fallback
          if (!seoContent) {
            const targetRoute = routeMeta[route] ? route : routeAliases[route] || null;
            if (targetRoute) {
              const meta = routeMeta[targetRoute];
              seoContent = buildSeoHtml(meta);
              sourceLabel = targetRouteToSourceLabel[targetRoute] || "seo-config.ts";
            }
          }

          if (seoContent) {
            generateRouteHtml(route, seoContent, sourceLabel);
          }
        }
      },
    },
  ],
}));
