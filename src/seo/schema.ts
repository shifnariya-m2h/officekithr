import { SITE, absoluteUrl } from "./site-config";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 200,
      height: 60,
    },
    description:
      "OfficeKit HR provides AI-powered HRMS software for payroll, attendance, recruitment, and compliance in India and the GCC.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      email: SITE.email,
      areaServed: SITE.areasServed,
      availableLanguage: ["en", "ar"],
    },
    knowsAbout: [
      "Human resource management software",
      "Payroll software",
      "UAE WPS compliance",
      "GCC HR compliance",
      "Applicant tracking",
      "Employee self-service",
    ],
    sameAs: [...SITE.sameAs],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: "AI-powered HRMS software for recruitment, payroll, attendance, and compliance.",
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE.url}/#software`,
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Human Resource Management Software",
    operatingSystem: "Web, iOS, Android",
    url: SITE.url,
    description:
      "AI-powered HRMS for recruitment, attendance, payroll, performance management, and employee self-service across India and the GCC.",
    featureList: [
      "Recruitment and onboarding",
      "Attendance and leave management",
      "Payroll and statutory compliance",
      "Performance management",
      "Employee self-service portal",
      "Mobile HR app",
      "UAE WPS payroll support",
      "AI workflow automation",
    ],
    countriesSupported: ["IN", "AE", "KW", "SA", "QA", "OM", "BH"],
    provider: { "@id": `${SITE.url}/#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/pricing`,
      description: "Flexible per-user pricing; contact sales for enterprise quotes.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        price: "Contact sales",
      },
    },
    screenshot: {
      "@type": "ImageObject",
      url: `${SITE.url}/dashboardok.webp`,
      caption: "OfficeKit HR dashboard overview",
    },
    applicationSuite: "OfficeKit HR Enterprise Suite",
    downloadUrl: SITE.url,
    softwareVersion: "3.0",
    storageRequirements: "Cloud-based, no local storage required",
    releaseNotes: `${SITE.url}/resources/blogs/mobileappupdates`,
  };
}

export function localBusinessSchema() {
  return [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#office-calicut`,
      name: "OfficeKit HR — Calicut",
      parentOrganization: { "@id": `${SITE.url}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calicut",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.2588,
        longitude: 75.7804,
      },
      areaServed: { "@type": "Country", name: "India" },
      telephone: SITE.phone,
      email: SITE.email,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#office-dubai`,
      name: "OfficeKit HR — Dubai",
      parentOrganization: { "@id": `${SITE.url}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Kuwait" },
      ],
      telephone: SITE.phone,
      email: SITE.email,
    },
  ];
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "Product",
    name: input.name,
    description: input.description,
    url: input.url,
    brand: { "@type": "Brand", name: SITE.name },
    category: "HRMS Software",
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/pricing`,
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      description: "Contact sales for enterprise pricing",
    },
  };
}

/** Comparison / alternative pages — cite as WebPage + FAQ, not Product reviews. */
export function comparisonWebPageSchema(input: {
  url: string;
  name: string;
  description: string;
  aboutProduct: string;
  competitorName: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.name,
    description: input.description,
    about: [
      { "@type": "SoftwareApplication", name: SITE.name },
      { "@type": "SoftwareApplication", name: input.competitorName },
    ],
    mainEntity: { "@type": "SoftwareApplication", name: input.aboutProduct },
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    image: input.image || SITE.ogImage,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: {
      "@type": "Person",
      name: input.author || "OfficeKit HR Team",
    },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema(input: {
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
}) {
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

/** Site-wide graph (Organization + WebSite + SoftwareApplication + current page). */
export function buildGraph(nodes: Record<string, unknown>[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      softwareApplicationSchema(),
      ...localBusinessSchema(),
      ...nodes.filter(Boolean),
    ],
  });
}

/** Page-only graph — article, breadcrumb, FAQ (no duplicate Organization/WebSite). */
export function buildPageGraph(nodes: Record<string, unknown>[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}
