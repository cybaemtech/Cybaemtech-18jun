export const portfolioSeoData = {
  title: "Our IT Projects & Case Studies Portfolio Pune | Cybaem Tech",
  description: "Explore Cybaem Tech's portfolio of successful IT projects in Pune. Discover our case studies covering cloud migrations, managed IT infrastructure, digital transformation, and corporate technology solutions.",
  canonical: "https://www.cybaemtech.com/portfolio",
  keywords: "IT portfolio Pune, technology case studies, cloud migration success stories, managed IT projects India, digital transformation examples, corporate infrastructure deployment, network setup portfolio, Cybaem Tech case studies, software deployment Pune",
  ogTitle: "Our IT Projects & Case Studies Portfolio Pune | Cybaem Tech",
  ogDescription: "Explore our track record of engineering success. Real-world case studies detailing cloud migrations, infrastructure management, and digital strategy deployments by Cybaem Tech.",
  ogType: "website",
  ogImageAlt: "Cybaem Tech logo", // Assuming default
  twitterTitle: "Our IT Projects & Case Studies Portfolio Pune | Cybaem Tech",
  twitterDescription: "See how Cybaem Tech drives enterprise growth through robust cloud solutions, asset compliance, and custom strategic IT transformations.",
  twitterImageAlt: "Cybaem Tech logo",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": [
        "https://in.linkedin.com/company/cybaemtech",
        "https://x.com/Cybaem_Tech",
        "https://www.facebook.com/cybaemtech/",
        "https://www.instagram.com/cybaemtech/",
        "https://www.youtube.com/@cybaemtech"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9028541383",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": "English"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.cybaemtech.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cybaem Tech Project Portfolio",
      "description": "A curated collection of IT implementation case studies, enterprise cloud integrations, and infrastructure optimization deployments executed by Cybaem Tech.",
      "url": "https://www.cybaemtech.com/portfolio",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Cybaem Tech",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cybaemtech.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://www.cybaemtech.com/portfolio"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What industries does Cybaem Tech have experience with in their portfolio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cybaem Tech's portfolio includes successful technological deployments across varied industries including e-commerce platforms, renewable energy initiatives, manufacturing setups, corporate offices, and local community infrastructure environments."
          }
        },
        {
          "@type": "Question",
          "name": "Can I read detailed case studies on cloud migration and IT asset optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our portfolio outlines comprehensive project roadmaps, including real-world executions of AWS/Azure/Google cloud scaling, full hardware fleet configuration setups, and data security alignments."
          }
        },
        {
          "@type": "Question",
          "name": "How regularly does Cybaem Tech update its project portfolio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We update our portfolio index routinely upon the successful deployment and stabilization of enterprise IT infrastructures, ensuring our latest engineering capabilities are accurately showcased."
          }
        }
      ]
    }
  ] as Record<string, unknown>[],
};
