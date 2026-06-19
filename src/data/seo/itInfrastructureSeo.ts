import { organizationSchema, professionalServiceSchema } from "./commonSchemas";

export const itInfrastructureSeoData = {
  title: "IT Infrastructure Services & Managed IT Support | Cybaem Tech",
  description: "Cybaem Tech delivers managed IT services, IT AMC, Microsoft 365 support, cybersecurity, cloud infrastructure, network management, backup solutions, and 24x7 IT support across Pune and India.",
  canonical: "/it-infrastructure-services",
  keywords: "IT Infrastructure Services, Managed IT Services, IT Support Company Pune, IT AMC Services, Microsoft 365 Support, Cloud Infrastructure Services, Cybersecurity Services, Firewall Management, IT Helpdesk Services, Network Infrastructure Services, Server Management Services, Backup and Disaster Recovery, IT Asset Management, IT Consulting Services, Managed Service Provider Pune, Cloud Migration Services, Virtualisation Services, IT Support India",
  ogDescription: "Reliable managed IT services, cybersecurity, Microsoft 365 support, cloud infrastructure, networking, IT AMC, and 24x7 technical support for businesses.",
  ogImageAlt: "IT Infrastructure Services & Managed IT Support | Cybaem Tech",
  twitterDescription: "End-to-end IT infrastructure management, cybersecurity, cloud services, Microsoft 365 support, networking and IT AMC solutions.",
  twitterImageAlt: "Cybaem Tech IT Infrastructure Services",
  jsonLd: [
    organizationSchema("Cybaem Tech Pvt. Ltd. specializes in IT infrastructure management, managed IT services, cybersecurity, cloud computing, Microsoft 365 support, network management, and IT AMC services."),
    professionalServiceSchema("https://cybaemtech.com/it-infrastructure-services#localbusiness"),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://cybaemtech.com/it-infrastructure-services#service",
      name: "IT Infrastructure Services & Managed IT Support",
      description: "Comprehensive IT infrastructure management, monitoring, and support services for businesses of all sizes.",
      provider: {
        "@type": "ProfessionalService",
        name: "Cybaem Tech Pvt. Ltd.",
        url: "https://cybaemtech.com/",
        telephone: "+91-9028541383",
        email: "sales@cybaemtech.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suratwala Mark Plazzo, Hinjawadi",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411057",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Delhi" },
        { "@type": "Country", name: "India" },
      ],
      serviceType: [
        "Managed IT Services",
        "IT Infrastructure Management",
        "24x7 IT Support",
        "IT AMC Services",
        "Microsoft 365 Support",
        "Cybersecurity Services",
        "Cloud Infrastructure",
        "Network Management",
        "Backup and Disaster Recovery",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Infrastructure Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Managed IT & Support",
              description: "24×7 monitoring, helpdesk support, and ITIL processes for complete IT management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cybersecurity & Data Protection",
              description: "Threat detection, endpoint security, data backup and disaster recovery solutions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud, Server & Productivity",
              description: "Microsoft 365 administration, cloud infrastructure, and virtualization services.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Network & Connectivity",
              description: "Wi-Fi & LAN setup, SD-WAN solutions, and continuous network monitoring.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Device, Asset & Procurement",
              description: "IT asset management, lifecycle management, and vendor management services.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IT Consulting & Strategy",
              description: "Digital transformation, IT roadmap planning, and governance consulting.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cybaemtech.com/it-infrastructure-services#localbusiness",
      name: "Cybaem Tech Pvt. Ltd. - IT Infrastructure Services",
      url: "https://cybaemtech.com/it-infrastructure-services",
      telephone: "+91-9028541383",
      email: "sales@cybaemtech.com",
      image: "https://cybaemtech.com/assets/cybaem-logo-C5lgmAgK.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suratwala Mark Plazzo, Hinjawadi",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411057",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5912,
        longitude: 73.7389,
      },
      areaServed: "IN",
      priceRange: "Contact for pricing",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://cybaemtech.com/it-infrastructure-services#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Managed IT Services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Managed IT Services means outsourcing the day-to-day management of your IT infrastructure — monitoring, maintenance, support, and security — to Cybaem Tech for a fixed monthly fee.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in an IT AMC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AMCs cover preventive maintenance, scheduled health checks, hardware & software maintenance, security updates, performance tuning, and priority support for desktops, laptops, servers, networks, firewalls, and storage.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide both remote and onsite support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most issues are resolved instantly through secure remote support, and our engineers provide onsite assistance whenever physical intervention is needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work alongside our existing IT team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our Co-Managed IT model supplements your internal team with 24×7 monitoring, specialist skills, and extra capacity during peak demand.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly do you respond to issues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Response times are defined in your SLA. Critical incidents receive immediate attention — typical response within 15–30 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Which locations do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Headquartered in Pune (Hinjawadi), we serve clients across India with remote-first support that extends to international clients.",
          },
        },
        {
          "@type": "Question",
          name: "How much do Managed IT Services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on users, devices, servers, and service level. We offer per-user and per-device monthly models. Most clients save 30–40% vs. in-house IT.",
          },
        },
      ],
    },
  ] as Record<string, unknown>[],
};
