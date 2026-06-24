// ---------------------------------------------------------------------------
// SEO Config — used exclusively by vite.config.ts for dev-time HTML injection.
// This file lives outside src/ to avoid contaminating the Vite app module graph,
// which would interfere with @vitejs/plugin-react-swc Fast Refresh preamble injection.
// ---------------------------------------------------------------------------

export const homeSeoData = {
  title: "Cybaem Tech | IT Services, Cybersecurity, Cloud & Digital Marketing Company in Pune",
  description: "Cybaem Tech is a leading IT services company in Pune providing cybersecurity, cloud solutions, Microsoft 365, managed IT services, AMC, digital marketing, software development, networking, VAPT, ITSM and business technology solutions.",
  canonical: "https://www.cybaemtech.com/",
  keywords: "Cybaem Tech, IT company Pune, cybersecurity company Pune, managed IT services Pune, cloud consulting Pune, Microsoft 365 services, Azure migration, digital marketing agency Pune, SEO services Pune, VAPT services Pune, SOC services India, computer AMC Pune, network security services, firewall management, IT infrastructure management, software development company Pune, web development Pune, AI automation services, chatbot development, IT outsourcing company, IT consulting services, cloud security services, endpoint security, disaster recovery solutions, backup solutions, IT helpdesk support, NOC monitoring services, IT staffing services, digital transformation company, technology solutions provider India",
  ogTitle: "Cybaem Tech | IT Services, Cybersecurity & Cloud Solutions",
  ogDescription: "Trusted IT partner for cybersecurity, cloud, digital marketing, managed IT services, Microsoft 365, software development and business technology solutions.",
  twitterTitle: "Cybaem Tech | IT Services, Cybersecurity & Cloud Solutions",
  twitterDescription: "Cybersecurity, cloud solutions, managed IT services, Microsoft 365, digital marketing and software development.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "description": "Cybaem Tech provides cybersecurity, managed IT services, cloud solutions, software development, digital marketing and enterprise technology consulting.",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.facebook.com/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.youtube.com/@cybaemtech"],
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "Customer Support", "areaServed": "IN", "availableLanguage": ["English"] }],
      "knowsAbout": ["Cybersecurity", "Cloud Computing", "Microsoft 365", "Azure", "Google Workspace", "Digital Marketing", "SEO", "Software Development", "Managed IT Services", "IT Infrastructure", "Network Security", "ITSM", "AI Automation", "Cloud Security", "VAPT", "SOC Monitoring"]
    },
    { "@context": "https://schema.org", "@type": "WebSite", "name": "Cybaem Tech", "url": "https://www.cybaemtech.com/", "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" } },
    { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Cybaem Tech", "image": "https://www.cybaemtech.com/images/cybaem-logo.png", "url": "https://www.cybaemtech.com/", "telephone": "+91-9028541383", "priceRange": "$$", "address": { "@type": "PostalAddress", "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }, "areaServed": ["India", "United States", "United Kingdom", "Australia", "Canada", "Middle East"] },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" }] },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What services does Cybaem Tech provide?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech provides cybersecurity, cloud services, managed IT services, Microsoft 365, IT infrastructure management, digital marketing, software development, web development, ITSM, AMC, networking and consulting services." } }, { "@type": "Question", "name": "Where is Cybaem Tech located?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech is located in Hinjewadi, Pune, Maharashtra and serves clients across India and globally." } }, { "@type": "Question", "name": "Does Cybaem Tech provide cybersecurity services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cybaem Tech offers VAPT, firewall management, endpoint protection, cloud security, network security, compliance consulting and managed cybersecurity services." } }, { "@type": "Question", "name": "Does Cybaem Tech offer cloud migration services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cybaem Tech provides Microsoft 365 migration, Azure deployment, cloud infrastructure management and cloud security solutions." } }, { "@type": "Question", "name": "Does Cybaem Tech provide AMC services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cybaem Tech offers comprehensive AMC services including preventive maintenance, remote support, system health monitoring and SLA-based support." } }, { "@type": "Question", "name": "How can I contact Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "You can contact Cybaem Tech by calling +91 9028541383, emailing sales@cybaemtech.com or submitting an enquiry through the contact page." } }] }
  ]
};

export const aboutSeoData = {
  title: "About Cybaem Tech | Leading IT, Cybersecurity & Cloud Solutions Company in Pune",
  description: "Learn about Cybaem Tech, a trusted technology partner helping businesses with cybersecurity, cloud solutions, managed IT services, Microsoft 365, digital transformation, software development and digital marketing across India and globally.",
  canonical: "https://www.cybaemtech.com/about",
  keywords: "About Cybaem Tech, Cybaem Tech company profile, IT company Pune, technology solutions company, managed IT services company, cybersecurity company Pune, cloud consulting company, Microsoft 365 partner, Azure cloud experts, digital transformation company, IT infrastructure company, software development company, web development company, AI automation company, digital marketing agency Pune, IT consulting company, network security provider, cloud migration experts, IT support company, business technology partner, enterprise IT solutions, IT outsourcing services, cybersecurity consultants, technology consulting company, IT innovation company India",
  ogTitle: "About Cybaem Tech | IT, Cybersecurity & Cloud Solutions Experts",
  ogDescription: "Discover Cybaem Tech",
  twitterTitle: "About Cybaem Tech | Technology, Cybersecurity & Cloud Experts",
  twitterDescription: "Learn about Cybaem Tech, a trusted technology partner delivering cybersecurity, cloud, managed IT services and digital transformation solutions.",
  jsonLd: [
    { "@context": "https://schema.org", "@type": "Organization", "name": "Cybaem Tech", "url": "https://www.cybaemtech.com/", "logo": "https://www.cybaemtech.com/images/cybaem-logo.png", "description": "Cybaem Tech is a technology solutions company specializing in cybersecurity, cloud computing, managed IT services, digital transformation, software development and digital marketing.", "foundingLocation": { "@type": "Place", "name": "Pune, Maharashtra, India" }, "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.facebook.com/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.youtube.com/@cybaemtech"], "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "Customer Support", "areaServed": "Worldwide", "availableLanguage": ["English"] }], "knowsAbout": ["Cybersecurity", "Managed IT Services", "Cloud Computing", "Microsoft 365", "Azure", "Software Development", "Web Development", "Digital Marketing", "IT Infrastructure", "ITSM", "Network Security", "Cloud Security", "AI Automation", "Business Technology Consulting", "VAPT Services", "SOC Monitoring", "Data Protection", "Digital Transformation"] },
    { "@context": "https://schema.org", "@type": "WebSite", "name": "Cybaem Tech", "url": "https://www.cybaemtech.com/", "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" } },
    { "@context": "https://schema.org", "@type": "AboutPage", "name": "About Cybaem Tech", "url": "https://www.cybaemtech.com/about", "description": "Learn about Cybaem Tech's mission, vision, values, expertise and commitment to delivering secure, scalable and innovative technology solutions." },
    { "@context": "https://schema.org", "@type": "ProfessionalService", "name": "Cybaem Tech", "image": "https://www.cybaemtech.com/images/cybaem-logo.png", "url": "https://www.cybaemtech.com/", "telephone": "+91-9028541383", "priceRange": "$$", "address": { "@type": "PostalAddress", "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }, "areaServed": ["India", "United States", "United Kingdom", "Australia", "Canada", "Middle East"] },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.cybaemtech.com/about" }] },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Who is Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech is a Pune-based technology company helping businesses with cybersecurity, cloud solutions, managed IT services, software development, digital marketing and digital transformation." } }, { "@type": "Question", "name": "What services does Cybaem Tech specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech specializes in cybersecurity, cloud computing, managed IT services, Microsoft 365 solutions, software development, web development, IT infrastructure management and digital marketing." } }, { "@type": "Question", "name": "Where is Cybaem Tech located?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech is located at 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057." } }] }
  ]
};

export const contactSeoData = {
  title: "Contact Cybaem Tech | IT Services, Cybersecurity & Cloud Solutions Pune",
  description: "Contact Cybaem Tech for cybersecurity, cloud solutions, managed IT services, Microsoft 365, AMC, software development, digital marketing and IT consulting. Get a free consultation today.",
  canonical: "https://www.cybaemtech.com/contact",
  keywords: "Contact Cybaem Tech, IT support Pune, cybersecurity consultation Pune, managed IT services enquiry, cloud solutions consultation, Microsoft 365 support, IT AMC services Pune, software development enquiry, digital marketing consultation Pune, IT company contact Pune, remote IT support, cloud migration support, IT helpdesk services, IT infrastructure support, technology consulting company",
  ogTitle: "Contact Cybaem Tech | Talk to IT Experts Today",
  ogDescription: "Get in touch with Cybaem Tech for cybersecurity, cloud solutions, IT infrastructure, managed IT services, software development and digital marketing.",
  twitterTitle: "Contact Cybaem Tech | IT Services & Technology Experts",
  twitterDescription: "Reach Cybaem Tech for cybersecurity, cloud, managed IT services, software development and digital transformation consulting.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.facebook.com/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.youtube.com/@cybaemtech"],
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "Customer Support", "areaServed": "Worldwide", "availableLanguage": ["English"] }]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Cybaem Tech",
      "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "url": "https://www.cybaemtech.com/",
      "telephone": "+91-9028541383",
      "email": "sales@cybaemtech.com",
      "priceRange": "$$",
      "address": { "@type": "PostalAddress", "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Cybaem Tech",
      "url": "https://www.cybaemtech.com/contact",
      "description": "Contact Cybaem Tech for cybersecurity, cloud solutions, managed IT services, software development and digital marketing."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" }, { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.cybaemtech.com/contact" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{ "@type": "Question", "name": "How can I contact Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "You can contact Cybaem Tech by calling +91 9028541383, emailing sales@cybaemtech.com or submitting the enquiry form." } }, { "@type": "Question", "name": "Can I request a free consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cybaem Tech offers consultation for cybersecurity, cloud services, managed IT services and digital transformation projects." } }, { "@type": "Question", "name": "Does Cybaem Tech provide remote IT support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide remote support for desktops, laptops, servers, Microsoft 365, cloud infrastructure and enterprise applications." } }, { "@type": "Question", "name": "Which locations does Cybaem Tech serve?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech serves businesses across Pune, Maharashtra, India and international clients through onsite and remote engagement models." } }, { "@type": "Question", "name": "What services can I enquire about?", "acceptedAnswer": { "@type": "Answer", "text": "You can enquire about cybersecurity, cloud solutions, Microsoft 365, managed IT services, software development, web development, AMC services and digital marketing." } }]
    }
  ]
};

export const lifeAtCybaemtechSeoData = {
  title: "Life at Cybaem Tech | Culture, Growth & Work Environment",
  description: "Discover life at Cybaem Tech in Pune – our culture, work environment, learning opportunities, team activities and what it’s like to build IT and digital solutions with us.",
  canonical: "https://www.cybaemtech.com/life-at-cybaemtech",
  keywords: "life at Cybaem Tech, Cybaem Tech culture, IT company work culture Pune, tech careers environment, employee experience Cybaem Tech, work-life balance IT company, learning and development IT, team activities in IT company, tech jobs culture Pune",
  ogTitle: "Life at Cybaem Tech | Culture & Team",
  ogDescription: "Take a look inside Cybaem Tech – our people, culture, collaboration and how we work together on IT, cloud, cybersecurity and digital projects.",
  twitterTitle: "Life at Cybaem Tech | Culture, Growth & Team",
  twitterDescription: "Explore how teams at Cybaem Tech collaborate, learn and grow while delivering IT and digital solutions.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"],
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "human resources", "areaServed": "IN", "availableLanguage": "English" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Life at Cybaem Tech",
      "url": "https://www.cybaemtech.com/life-at-cybaemtech",
      "description": "An inside view of the culture, people and work environment at Cybaem Tech in Pune."
    },
    {
      "@context": "https://schema.org",
      "@type": "ITService",
      "name": "Cybaem Tech",
      "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "url": "https://www.cybaemtech.com/",
      "telephone": "+91-9028541383",
      "priceRange": "$$",
      "address": { "@type": "PostalAddress", "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" }, { "@type": "ListItem", "position": 2, "name": "Life at Cybaem Tech", "item": "https://www.cybaemtech.com/life-at-cybaemtech" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{ "@type": "Question", "name": "What is it like to work at Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "Working at Cybaem Tech means being part of a collaborative IT and digital team that focuses on learning, ownership and delivering value to clients through infrastructure, cloud, cybersecurity and digital solutions." } }, { "@type": "Question", "name": "What kind of culture does Cybaem Tech promote?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech promotes a culture of transparency, continuous learning, teamwork and customer-first thinking, with space for individuals to share ideas and grow in their roles." } }, { "@type": "Question", "name": "Are there learning and growth opportunities at Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, team members at Cybaem Tech work on real-world IT, cloud, cybersecurity and digital projects, get exposure to new tools and platforms and are encouraged to upgrade their skills through hands-on experience and training." } }, { "@type": "Question", "name": "Does Cybaem Tech organize team activities or events?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech organizes team interactions, knowledge-sharing sessions and periodic celebrations or activities that help build a positive and collaborative work environment." } }, { "@type": "Question", "name": "How can I explore opportunities to work at Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "You can explore current openings on the Careers page or share your CV with the HR team via the contact details on the website to be considered for future opportunities." } }]
    }
  ]
};

export const blogSeoData = {
  title: "Resources & Blog | IT, Cloud & Cybersecurity Insights | Cybaem Tech",
  description: "Explore Cybaem Tech resources – blogs, guides and insights on IT infrastructure, cloud, cybersecurity, digital marketing, AMC, managed services and IT strategy for businesses.",
  canonical: "https://www.cybaemtech.com/resources",
  keywords: "IT blog, technology resources, IT infrastructure articles, cloud computing blog, cybersecurity insights, digital transformation resources, managed IT services blog, IT AMC tips, Microsoft 365 guides, network and security best practices, Cybaem Tech blog, IT knowledge center",
  ogTitle: "Resources & Blog | IT, Cloud & Cybersecurity Insights",
  ogDescription: "Read blogs and resources from Cybaem Tech on IT infrastructure, cloud, cybersecurity, digital marketing and managed services.",
  twitterTitle: "Resources & Blog | Cybaem Tech",
  twitterDescription: "Blogs, guides and insights on IT, cloud, cybersecurity, digital marketing and managed services from Cybaem Tech.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"],
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "English" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" }
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cybaem Tech Resources & Blog",
      "url": "https://www.cybaemtech.com/resources",
      "description": "Blogs, guides, articles and updates from Cybaem Tech on IT, cloud, cybersecurity, digital marketing and managed services."
    },
    {
      "@context": "https://schema.org",
      "@type": "ITService",
      "name": "Cybaem Tech",
      "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "url": "https://www.cybaemtech.com/",
      "telephone": "+91-9028541383",
      "priceRange": "$$",
      "address": { "@type": "PostalAddress", "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411057", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" }, { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.cybaemtech.com/resources" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{ "@type": "Question", "name": "What type of content is available in Cybaem Tech’s resources section?", "acceptedAnswer": { "@type": "Answer", "text": "The resources section of Cybaem Tech includes blogs, guides, checklists and insights on IT infrastructure, cloud computing, cybersecurity, digital marketing, IT AMC, managed services and IT strategy for modern businesses." } }, { "@type": "Question", "name": "Who should read Cybaem Tech’s blog and resources?", "acceptedAnswer": { "@type": "Answer", "text": "Business owners, IT managers, CTOs, startup founders and operations leaders who want to improve their IT infrastructure, security, cloud adoption and digital presence can benefit from Cybaem Tech’s resources." } }, { "@type": "Question", "name": "How often are new articles published?", "acceptedAnswer": { "@type": "Answer", "text": "New content is published periodically based on key topics in IT, cloud, cybersecurity and digital transformation to keep readers updated with practical insights and best practices." } }, { "@type": "Question", "name": "Can I request a topic for a future article?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can suggest topics or questions related to IT, cloud, cybersecurity or digital marketing through the contact form, and the Cybaem Tech team may cover them in future blog posts." } }, { "@type": "Question", "name": "How can I stay updated with new resources from Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "You can revisit the resources page regularly and follow Cybaem Tech on LinkedIn, X, Facebook, Instagram and YouTube to get notified when new articles or updates are published." } }]
    }
  ]
};

export const webSystemsSeoData = {
  title: "Enterprise Web Development Systems & Platforms Pune | Cybaem Tech",
  description: "Cybaem Tech engineers high-performance, conversion-optimized enterprise web systems in Pune. Over 200 platforms launched with an average 0.8s load time.",
  canonical: "https://www.cybaemtech.com/solutions/web-systems",
  keywords: "Cybaem Web Systems, Web Development Research Centre Pune, custom web development company, conversion optimized websites, enterprise SaaS platforms, custom e-commerce architecture, corporate website development Pune, high converting landing pages, corporate CMS development, fast loading web systems, scalable web apps",
  ogTitle: "Web Systems Engineered to Convert | Cybaem Tech Research Centre",
  ogDescription: "Over 200 platforms launched with an average 0.8s load time. Discover lightning-fast, secure, and conversion-optimized web platforms built for D2C, B2B, and B2C scale.",
  twitterTitle: "Web Systems Engineered to Convert | Cybaem Tech Research Centre",
  twitterDescription: "Lightning-fast, conversion-optimized web platforms built with enterprise-grade security and strict milestone-driven delivery. Avg load time: 0.8 seconds.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Enterprise Web Systems & Platform Engineering",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Cybaem Tech Web Development Research Centre",
        "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
        "telephone": "+91-9028541383",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cybaem Web Systems Platform Portfolio",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business & Corporate Web Systems", "description": "Digital headquarters built to convert enterprise attention into trusted corporate relationships. Includes Multi-team CMS, Case Studies, and Enterprise SEO alignment." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Web Systems", "description": "Revenue-first architecture optimizing catalogues, payment gateways, secure checkouts, and automated cart recovery systems for maximum conversion." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portfolio Web Systems", "description": "High-end visual business platforms integrated with case studies and clear inquiry flow funnels for creative studios, designers, and agencies." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Web Systems", "description": "Laser-focused single-decision conversion frameworks utilizing minimal interface friction, interactive elements, A/B testing capability, and built-in lead captures." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blog & Personal Web Systems", "description": "SEO-architected platforms built from the foundation up to scale executive thought leadership, capture newsletter signups, and compound organic audience reach." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS & Web Applications", "description": "Highly interactive, scalable, API-first software architectures supporting multi-level authentication, custom user roles, dashboard spaces, and continuous data persistence." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Educational & Informational Web Systems", "description": "Deep-dive knowledge spaces, wikis, resource portals, and community-driven knowledge bases structurally optimized for discoverability and scaling absolute niche authority." } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.cybaemtech.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Web Systems", "item": "https://www.cybaemtech.com/solutions/web-systems" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Cybaem Tech's Web Development Research Centre?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech's Web Development Research Centre is a specialized engineering hub that creates high-performance web systems across seven distinct categories—ranging from enterprise landing pages to complex SaaS web apps. Every project prioritizes lightning-fast performance, extreme conversion capability, security, and enterprise scalability." } },
        { "@type": "Question", "name": "What are the seven platform categories built by Cybaem Web Systems?", "acceptedAnswer": { "@type": "Answer", "text": "Our research center designs tailored frameworks across seven core categories: Business & Corporate Systems, E-commerce Architectures, interactive Portfolio Platforms, high-converting Landing Pages, SEO-driven Blog & Personal hubs, complex SaaS & Web Apps, and structured Educational & Informational Knowledge Portals." } },
        { "@type": "Question", "name": "What performance metrics do Cybaem Tech web platforms deliver?", "acceptedAnswer": { "@type": "Answer", "text": "With over 200 custom platforms delivered globally, Cybaem Tech systems boast an average page load time of 0.8 seconds. This rapid architecture minimizes user drops and directly improves Conversion Rate Optimization (CRO) scores while maintaining a 98% client satisfaction rate." } },
        { "@type": "Question", "name": "Are Cybaem Tech web systems secure for custom enterprise functions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every system engineered across all channels (D2C, B2B, B2C, or internal infrastructure) is constructed using enterprise-grade security protocols, robust data persistence configurations, custom access tokens, secure payment integrations, and clear compliance safeguards." } }
      ]
    }
  ]
};

export const managedITSeoData = {
  title: "Managed IT Services, IT Governance & Risk Management Pune | Cybaem Tech",
  description: "Cybaem Tech turns unstructured IT risk into structured corporate governance. Explore our 24/7 managed IT services, Microsoft 365/Google Workspace management, secure cloud email migration, and enterprise risk oversight in Pune.",
  canonical: "https://www.cybaemtech.com/solutions/managed-it",
  keywords: "Cybaem Managed IT, managed IT services Pune, IT risk governance, 24/7 IT support Pune, Microsoft 365 administration, Google Workspace management, enterprise email migration, cloud transition services, IT security oversight Pune, patch management solutions, IT compliance audit readiness, professional MSP India",
  ogTitle: "Structured Managed IT Services & Executive Risk Governance | Cybaem Tech",
  ogDescription: "We don't just manage IT—we govern it. 8x5 and 24x7 enterprise monitoring with clear escalation matrices and total cost predictability.",
  twitterTitle: "Structured Managed IT Services & IT Governance | Cybaem Tech",
  twitterDescription: "Turn IT from an operational liability into a competitive strength. 8x5 and 24x7 enterprise monitoring, clear escalation matrices, and total cost predictability.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Structured Managed IT & Corporate Governance Services",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Cybaem Tech",
        "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
        "telephone": "+91-9028541383",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cybaem Managed IT Core Pillars",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services (8x5 and 24x7)", "description": "Round-the-clock proactive infrastructure monitoring, structured patch management, rigorous SLA governance, escalation matrix controls, and monthly executive performance reporting." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed Email Services", "description": "Professional Microsoft 365 and Google Workspace administration encompassing comprehensive monitoring, security configuration modeling, license optimization, and corporate governance frameworks." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Migration & Cloud Transitions", "description": "Secure Cutover and Hybrid migration execution backed by ironclad data integrity protection, risk mitigation planning, user transition workflows, and post-migration infrastructure stabilization." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security & Risk Oversight", "description": "Continuous patch compliance tracking, mandatory MFA enforcement maps, incident response structuring, executive alignment, and enterprise audit readiness support." } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.cybaemtech.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Managed IT", "item": "https://www.cybaemtech.com/solutions/managed-it" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are Managed IT Services from Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "Managed IT Services from Cybaem Tech represent a shift from reactive, fragmented IT support to structured, controlled corporate governance. We offer complete 8x5 and 24x7 tech infrastructure monitoring, patch and vulnerability governance, clear escalation matrices, predictable monthly investing parameters, and strategic executive reporting dashboards." } },
        { "@type": "Question", "name": "Why does a corporate leadership team need 24/7 IT support?", "acceptedAnswer": { "@type": "Answer", "text": "Unstructured IT creates clear business risks like data breaches, ransomware infections, email blackouts, and audit failures. Cybaem Tech's 24/7 service model mitigates these trigger events proactively before fragility becomes a crisis, ensuring absolute operational continuity, reduced corporate liability, and protected workforce productivity." } },
        { "@type": "Question", "name": "What is included in Cybaem Tech's Microsoft 365 and Google Workspace management?", "acceptedAnswer": { "@type": "Answer", "text": "Our Managed Email pillar handles end-to-end cloud workspace administration, active security configuration setups, license profile optimization to control overhead costs, real-time tracking, and structured user access governance frameworks." } },
        { "@type": "Question", "name": "How do Cybaem Tech's Email Migration Services reduce business risk?", "acceptedAnswer": { "@type": "Answer", "text": "We execute calculated Cutover and Hybrid migrations designed with data integrity protection and detailed risk mitigation planning. This ensures seamless user transition phases, minimum operational downtime, zero data drops, and total platform stabilization post-migration." } },
        { "@type": "Question", "name": "What engagement models or service tiers are available?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech provides three distinct service tiers calibrated for specific leadership mandates: Business Hours Support (8x5) for fixed operating schedules, 24x7 Managed IT for rapid growth-stage and uptime-critical brands, and Premium Plus for security-sensitive, compliance-driven organizations requiring dual ISO-level alignment and dedicated account management." } }
      ]
    }
  ]
};

export const itAugmentationSeoData = {
  title: "IT Staff Augmentation & Outsourcing in Pune | Cybaem Tech",
  description: "Cybaem Tech offers IT staff augmentation in Pune with onsite and remote engineers, helpdesk teams and specialist IT resources for server, cloud, network and security.",
  canonical: "https://www.cybaemtech.com/it-augmentation",
  keywords: "IT staff augmentation Pune, IT outsourcing Pune, hire onsite IT engineer, remote IT specialist, contract IT staffing, IT helpdesk outsourcing, network administrator Pune, system administrator Pune, server and cloud engineers, dedicated IT resources, project-based IT staffing, managed IT teams, Cybaem Tech IT staffing",
  ogTitle: "IT Staff Augmentation & Outsourcing in Pune | Cybaem Tech",
  ogDescription: "Dedicated onsite and remote IT engineers, helpdesk and specialist resources through Cybaem Tech’s IT staff augmentation services in Pune.",
  twitterTitle: "IT Staff Augmentation & Outsourcing in Pune | Cybaem Tech",
  twitterDescription: "Onsite and remote IT engineers, helpdesk and specialist resources for your business from Cybaem Tech.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"],
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "English" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Cybaem Tech IT Staff Augmentation Services",
      "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "url": "https://www.cybaemtech.com/it-augmentation",
      "telephone": "+91-9028541383",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" },
      "areaServed": [{ "@type": "City", "name": "Pune" }, { "@type": "Country", "name": "India" }],
      "serviceType": "IT Staff Augmentation & Outsourcing",
      "services": [
        "Dedicated Onsite IT Engineers",
        "Remote IT Specialists for Server, Cloud and Security",
        "Contract and Project-Based IT Staffing",
        "IT Helpdesk and Support Desk Outsourcing",
        "Network and System Administrators on Demand",
        "Short-Term and Long-Term IT Resource Engagements"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" },
        { "@type": "ListItem", "position": 2, "name": "IT Staff Augmentation", "item": "https://www.cybaemtech.com/it-augmentation" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is IT staff augmentation from Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "IT staff augmentation from Cybaem Tech allows you to hire dedicated onsite or remote IT engineers, administrators and specialists who work as an extension of your internal IT team." } },
        { "@type": "Question", "name": "Which IT roles can Cybaem Tech provide on augmentation?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech can provide desktop and support engineers, server and network administrators, cloud and security specialists, helpdesk staff and project-based technical resources." } },
        { "@type": "Question", "name": "What is the difference between IT staff augmentation and outsourcing?", "acceptedAnswer": { "@type": "Answer", "text": "In staff augmentation, resources work under your direction as part of your team. In outsourcing, Cybaem Tech manages complete IT functions or processes with its own team, tools and SLAs." } },
        { "@type": "Question", "name": "Can I hire IT resources for short-term projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Cybaem Tech supports short-term, project-based and long-term IT resource engagement models depending on your project duration and workload." } },
        { "@type": "Question", "name": "How do I start IT staff augmentation with Cybaem Tech?", "acceptedAnswer": { "@type": "Answer", "text": "You can share your role requirements and skills via the contact page, call +91 9028541383, or email sales@cybaemtech.com. Cybaem Tech will propose suitable profiles and an engagement model." } }
      ]
    }
  ]
};

export const digitalMarketingSeoData = {
  title: "Digital Marketing, SEO & B2B Growth Services Pune | Cybaem Tech",
  description: "Cybaem Tech offers ROI-focused digital marketing in Pune. Dominate organic search with advanced SEO & CRO, turn digital presence into B2B leads, and scale executive thought leadership with our premium LinkedIn strategies.",
  canonical: "https://www.cybaemtech.com/digital-marketing",
  keywords: "digital marketing services Pune, SEO services Pune, B2B digital growth, conversion rate optimization Pune, CRO services, LinkedIn executive branding, B2B lead generation agency, organic search dominance, corporate thought leadership, executive presence marketing, social media marketing Pune, PPC agency Pune, Google Ads management, performance marketing, Cybaem Tech digital marketing",
  ogTitle: "Digital Marketing & B2B Growth Services in Pune | Cybaem Tech",
  ogDescription: "Result-driven SEO, CRO, social media, PPC, and executive LinkedIn strategies from Cybaem Tech to turn your online presence into revenue and qualified B2B leads.",
  twitterTitle: "Digital Marketing & B2B Growth Services in Pune | Cybaem Tech",
  twitterDescription: "Dominate search results, optimize conversion funnels, and scale executive thought leadership to grow your revenue online.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"],
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91-9028541383", "contactType": "customer support", "areaServed": "IN", "availableLanguage": "English" }]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "potentialAction": { "@type": "SearchAction", "target": "https://www.cybaemtech.com/?s={search_term_string}", "query-input": "required name=search_term_string" }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Cybaem Tech Digital Marketing Services",
      "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "url": "https://www.cybaemtech.com/digital-marketing",
      "telephone": "+91-9028541383",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" },
      "areaServed": [{ "@type": "City", "name": "Pune" }, { "@type": "Country", "name": "India" }],
      "serviceType": "Digital Marketing & B2B Growth Engine",
      "services": [
        "Digital Growth & B2B Lead Infrastructure",
        "Search Engine Optimization (SEO) & Conversions (CRO)",
        "LinkedIn Strategy & Executive Thought Leadership",
        "Social Media Marketing & Management",
        "Pay-Per-Click (PPC) & Google Ads",
        "Content Marketing & Copywriting",
        "Branding & Online Reputation Management"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "B2B SEO & Digital Growth Solutions",
      "provider": { "@type": "Organization", "name": "Cybaem Tech" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO & Performance Growth Engine",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Growth Infrastructure", "description": "Turning basic corporate presence into automated B2B lead generation ecosystems designed for revenue optimization." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & CRO Alignment", "description": "Dominating organic search landscapes while aggressively optimizing layouts for high-intent client conversions." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Executive Strategy", "description": "Scaling executive thought leadership to secure industry placement, network authority, and enterprise trust." } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" },
        { "@type": "ListItem", "position": 2, "name": "Digital Marketing", "item": "https://www.cybaemtech.com/digital-marketing" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What digital marketing services does Cybaem Tech offer?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech offers end-to-end digital marketing services including B2B Digital Growth pipelines, Search Engine Optimization (SEO) combined with Conversion Rate Optimization (CRO), LinkedIn executive thought leadership, social media management, Google Ads (PPC), content marketing, and deep marketing analytics." } },
        { "@type": "Question", "name": "How does Cybaem Tech turn digital presence into B2B leads?", "acceptedAnswer": { "@type": "Answer", "text": "Through our Digital Growth Framework, we restructure traditional brand positioning into performance-driven marketing funnels. By targeting exact enterprise consumer intent, we systematically build pipelines that turn casual company traffic into consistent, high-value B2B inquiries." } },
        { "@type": "Question", "name": "What is Cybaem Tech's approach to SEO and CRO?", "acceptedAnswer": { "@type": "Answer", "text": "We believe visibility means nothing without conversion. Our strategy is built around dominating organic search result blocks while simultaneously executing split-testing and interface optimizations (CRO). This ensures you capture maximum search share and transform that traffic directly into corporate revenue." } },
        { "@type": "Question", "name": "How does your LinkedIn Strategy build Executive Thought Leadership?", "acceptedAnswer": { "@type": "Answer", "text": "Our LinkedIn corporate management engine designs, refines, and scales executive content profiles at institutional scale. We cultivate industry trust, authoritative reach, and distinct market voice for your executive team, generating valuable warm inbound opportunities through native organic platform influence." } },
        { "@type": "Question", "name": "How can I get started with Cybaem Tech’s digital growth services?", "acceptedAnswer": { "@type": "Answer", "text": "You can get started by filling out the contact form on the Cybaem Tech website, calling +91 9028541383, or emailing sales@cybaemtech.com. Our performance specialists will design a growth layout mapped explicitly to your company's revenue targets." } }
      ]
    }
  ]
};

export const enterpriseSoftwareSeoData = {
  title: "AI-Powered Enterprise Software Solutions in Pune | Cybaem Tech",
  description: "Cybaem Tech engineers scalable, ISO-certified enterprise software solutions in Pune. Explore our AI-powered product ecosystem including Cybaem CRM Ace Pro, ITSM Tool, Project Management, DMS, Site Engineer, and HR Management Systems.",
  canonical: "https://www.cybaemtech.com/solutions/enterprise-software",
  keywords: "Cybaem CRM Ace Pro, Cybaem Nova CRM, ITSM Tool Pune, enterprise software company Pune, custom enterprise platforms, AI business software, Document Management System, Project Management Tool, Site Engineer Ecosystem, HR Management System, custom CRM development, ISO certified software development, B2B enterprise applications, scalable business software India",
  ogTitle: "AI-Powered Enterprise Software Solutions & Platforms | Cybaem Tech",
  ogDescription: "Eliminate bottlenecks and accelerate growth with Cybaem Tech's proprietary AI-powered software platforms.",
  twitterTitle: "AI-Powered Enterprise Software Solutions & Platforms | Cybaem Tech",
  twitterDescription: "From Cybaem CRM Ace Pro and ITSM to secure DMS and HR management systems. Dual ISO-certified engineering with zero scope creep, guaranteed.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI-Powered Enterprise Software Engineering",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Cybaem Tech",
        "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
        "telephone": "+91-9028541383",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cybaem Enterprise Platform Ecosystem",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Cybaem CRM Ace | Pro (Cybaem Nova)", "applicationCategory": "BusinessApplication", "description": "Intelligent CRM featuring predictive lead scoring, automated pipeline management, and AI-driven customer insights configured for strict corporate standards." } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Project Management Tool", "applicationCategory": "BusinessApplication", "description": "Smart task automation, resource allocation, and milestone tracking built with real-time collaboration features for distributed corporate teams." } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Document Management System (DMS)", "applicationCategory": "BusinessApplication", "description": "Secure, AI-powered document search, semantic classification, stringent version control, and compliance-ready audit trails for global enterprise content." } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "ITSM Tool", "applicationCategory": "BusinessApplication", "description": "Complete IT service management platforms presenting automated ticket distributions, custom SLA tracking, change management, and client self-service portals." } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Site Engineer Ecosystem", "applicationCategory": "BusinessApplication", "description": "Mobile-first field operations application optimized for site engineers with real-time task reporting, operational asset tracking, and offline-capable mobile access." } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "HR Management System", "applicationCategory": "BusinessApplication", "description": "Scalable end-to-end human resource operations system covering modern corporate recruitment, onboarding paths, secure payroll, performance reviews, and global compliance tracking." } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.cybaemtech.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Enterprise Software", "item": "https://www.cybaemtech.com/solutions/enterprise-software" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What AI-powered products has Cybaem Tech built?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech has engineered a suite of six proprietary core products built for scale: Cybaem CRM Ace | Pro (Cybaem Nova), Project Management Tool, Document Management System (DMS), IT Service Management (ITSM) Tool, Site Engineer Ecosystem, and HR Management System." } },
        { "@type": "Question", "name": "How does Cybaem CRM Ace | Pro differ from off-the-shelf CRMs?", "acceptedAnswer": { "@type": "Answer", "text": "CRM Ace | Pro is built with proprietary AI systems at its core—delivering predictive lead scoring, automated pipeline management, intelligent customer insights, and seamless integration with your existing legacy enterprise stack. Unlike generic off-the-shelf tools, it is completely architected around your specific corporate workflows and data parameters." } },
        { "@type": "Question", "name": "How do you ensure data security and compliance across your software suite?", "acceptedAnswer": { "@type": "Answer", "text": "Every custom application built by Cybaem Tech follows rigorous security structures. Our operations are dual ISO 27001 & 27017 certified, maintaining top-tier global compliance data criteria, cloud platform protocols, secure rollout parameters, and compliance-ready audit trails." } },
        { "@type": "Question", "name": "What is Cybaem Tech's deployment model and SLA guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "We provide a 99.9% uptime SLA to ensure uninterrupted enterprise-grade reliability. Furthermore, we operate under a strict Requirement Freeze Protocol guaranteeing Zero Scope-Creep, and can deploy certified, fully accredited engineering talent verticals within 48 hours." } }
      ]
    }
  ]
};

export const itInfrastructureServicesSeoData = {
  title: "IT Infrastructure Services, Cloud, Cybersecurity & AMC Pune | Cybaem Tech",
  description: "Cybaem Tech delivers end-to-end IT infrastructure services in Pune. Dual ISO-certified solutions spanning AWS/Azure cloud migration, cybersecurity VAPT & SOC monitoring, SLA-based computer AMC, fleet procurement, and senior IT consulting strategy.",
  canonical: "https://www.cybaemtech.com/solutions/it-infrastructure-services",
  keywords: "it infrastructure services Pune, cloud solutions Pune, cloud migration services, cybersecurity services Pune, VAPT Pune, penetration testing Pune, computer AMC services Pune, IT AMC Pune, IT asset management services, hardware procurement India, IT consulting Pune, digital transformation strategy, IT infrastructure audit, enterprise technology roadmap, 24/7 SOC monitoring, managed cloud services, Cybaem Tech solutions",
  ogTitle: "Enterprise IT Infrastructure Services, Cloud & Cybersecurity | Cybaem Tech",
  ogDescription: "From AWS/Azure migrations and comprehensive VAPT testing to SLA-backed computer AMC frameworks and senior tech strategy. Professionalize your IT footprints with a dual ISO-certified partner.",
  twitterTitle: "Enterprise IT Infrastructure Services & Governance | Cybaem Tech",
  twitterDescription: "Integrated cloud solutions, predictive cybersecurity architectures, hardware lifecycle procurement, and computer AMC systems backed by 24/7 monitoring models.",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cybaem Tech",
      "url": "https://www.cybaemtech.com/",
      "logo": "https://www.cybaemtech.com/images/cybaem-logo.png",
      "sameAs": ["https://www.linkedin.com/company/cybaemtech", "https://x.com/Cybaem_Tech", "https://www.facebook.com/cybaemtech", "https://www.instagram.com/cybaemtech", "https://www.youtube.com/@cybaemtech"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Enterprise IT Infrastructure Services & Solutions",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Cybaem Tech IT Infrastructure Division",
        "image": "https://www.cybaemtech.com/images/cybaem-logo.png",
        "telephone": "+91-9028541383",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "304, Suratwala Mark Plazzo, Hinjewadi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": "18.5900", "longitude": "73.7360" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cybaem Core IT Infrastructure Pillars",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Solutions & Migration Services", "description": "Enterprise cloud consulting, architecture layouts, and managed migrations across Microsoft Azure, AWS, and Google Cloud Platform. Includes automated hybrid setups, backup infrastructures, cost rightsizing protocols, and robust disaster recovery (DR) solutions." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Services (VAPT & 24/7 SOC)", "description": "Rigorous Vulnerability Assessment & Penetration Testing (VAPT) across networks, APIs, applications, and cloud services. Supported by continuous 24/7 Security Operations Center (SOC) tracking, SIEM configurations, firewall setups, predictive endpoint isolation, and ISO 27001/HIPAA/GDPR compliance roadmaps." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Annual Maintenance Contracts (IT AMC)", "description": "SLA-driven corrective and preventive corporate upkeep programs. Encompasses systematic server patching, device lifecycle tuning, network device support configurations, real-time helpdesk resolutions, and recurring structural IT performance audits." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Device Lifecycle, ITAM & Procurement Fleet Management", "description": "End-to-end hardware fleet asset management (ITAM). Governs hardware procurement channels, system imaging/OS configurations, third-party internet service provider (ISP) liaison, technical vendor escalations, warranty tracking, and secure asset retirement paths." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Senior IT Consulting & Digital Transformation Strategy", "description": "Executive-level technical architecture auditing, risk evaluation briefs, digital transition system layouts, strategic corporate technology roadmap development, and strict financial ROI engineering." } }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cybaemtech.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.cybaemtech.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "IT Infrastructure Services", "item": "https://www.cybaemtech.com/solutions/it-infrastructure-services" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What comprehensive IT infrastructure services does Cybaem Tech provide?", "acceptedAnswer": { "@type": "Answer", "text": "Cybaem Tech provides an integrated suite of corporate IT infrastructure solutions out of our Hinjewadi hub. This combines Multi-Cloud Services (Azure, AWS, GCP), advanced Cybersecurity (VAPT testing & 24/7 SOC operations), corporate Computer AMC, Fleet Device Procurement, IT Asset Management (ITAM), and senior-level IT Strategy Consulting." } },
        { "@type": "Question", "name": "Which cloud platforms do you work with for migrations?", "acceptedAnswer": { "@type": "Answer", "text": "We design and deploy architectures across all leading global cloud ecosystems, specifically Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP), optimizing your workloads based entirely on your operational goals and budget constraints." } },
        { "@type": "Question", "name": "Can Cybaem Tech migrate our legacy, on-premise servers to a hybrid or public cloud?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our engineering division specializes in non-disruptive cloud migrations. We systematically audit your legacy configurations, engineer the target cloud topography, safeguard data integrity during shifting phases, and execute seamless cutovers with zero runtime impact." } },
        { "@type": "Question", "name": "How does your cloud backup and disaster recovery (DR) solution function?", "acceptedAnswer": { "@type": "Answer", "text": "We build highly redundant, encrypted backup systems configured for automated real-time replication. In the case of severe cyber incidents or physical failure, our Disaster Recovery (DR) protocols trigger alternate hosting nodes to guarantee zero data drops and high operational continuity." } },
        { "@type": "Question", "name": "What VAPT, and why should our company perform it?", "acceptedAnswer": { "@type": "Answer", "text": "VAPT stands for Vulnerability Assessment and Penetration Testing. It is a critical defense tool that discovers internal configuration weaknesses and simulates sophisticated, real-world cyberattacks across your APIs, cloud systems, and networks before malicious threat actors can exploit them." } },
        { "@type": "Question", "name": "Does Cybaem Tech provide a 24/7 Security Operations Center (SOC)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cybaem Tech offers dedicated, round-the-clock 24/7 SOC monitoring utilizing advanced SIEM structures, predictive endpoint threat hunting, real-time intrusion alarms, and swift threat mitigation protocols to neutralize breach patterns immediately." } },
        { "@type": "Question", "name": "Can your infrastructure setups align our business with international regulations like ISO 27001?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We offer complete compliance audit readiness support for global data criteria, including ISO 27001, HIPAA, GDPR, and PCI-DSS. We handle your initial gap assessments, structural hardening implementations, and required technology verification records." } },
        { "@type": "Question", "name": "What devices and routines are covered under your computer AMC packages?", "acceptedAnswer": { "@type": "Answer", "text": "Our SLA-backed Annual Maintenance Contracts (AMC) support workstations, enterprise laptops, network endpoints, main servers, firewalls, and ancillary peripherals. Routines include scheduled onsite or remote troubleshooting, system driver updates, security updates, and automated patch testing." } },
        { "@type": "Question", "name": "Do you provide both remote and physical onsite support during technical emergencies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. While our central helpdesk handles the vast majority of infrastructure escalations instantly through remote terminal access, we deploy fully accredited onsite field engineers as mandated by your custom Service Level Agreement (SLA) metrics to handle core hardware disruptions." } },
        { "@type": "Question", "name": "What is included in your Device Lifecycle and IT Asset Management (ITAM) framework?", "acceptedAnswer": { "@type": "Answer", "text": "Our ITAM division handles end-to-end device tracking. We manage wholesale hardware procurement, corporate deployment setups, custom OS flashing, ongoing software license tracking, third-party internet service provider (ISP) coordination, warranty claims, and secure, documentable technical equipment retirement." } },
        { "@type": "Question", "name": "What does a formal IT Infrastructure Audit by your consulting team involve?", "acceptedAnswer": { "@type": "Answer", "text": "Our senior consulting workflows perform an deep analysis of your current technical frameworks. We map hidden technical debt, isolate operational bottleneck areas, find data leaks, and present an actionable transformation roadmap engineered to optimize technology investments for scale." } },
        { "@type": "Question", "name": "How can our enterprise get a tailored quote for infrastructure services?", "acceptedAnswer": { "@type": "Answer", "text": "You can request a tailored infrastructure quote by submitting your platform footprints, user numbers, and location metrics through our contact page, calling us directly at +91 9028541383, or emailing sales@cybaemtech.com. Our technology planners will build a custom framework customized to your specific operational scale." } }
      ]
    }
  ]
};
