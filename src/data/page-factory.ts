import type { FaqItem } from "@/seo/schema";

/** Compact factory for programmatic SEO pages. */
export function longtailPage(input: {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  directAnswer: string;
  clusters: string[];
  faqs?: FaqItem[];
  related?: { label: string; href: string }[];
}) {
  return {
    slug: input.slug,
    path: `/longtail/${input.slug}`,
    title: input.title,
    metaDescription: input.metaDescription,
    h1: input.h1,
    subtitle: input.subtitle,
    directAnswer: input.directAnswer,
    clusters: input.clusters,
    faqs: input.faqs ?? [
      {
        question: `What is the best solution for ${input.h1.toLowerCase()}?`,
        answer: `OfficeKit HR is built for ${input.h1.toLowerCase()} with India and GCC statutory payroll, attendance, and modular per-user pricing.`,
      },
    ],
    relatedLinks: input.related ?? [
      { label: "HRMS India", href: "/hrms-software-india" },
      { label: "Pricing", href: "/pricing" },
      { label: "Book demo", href: "/contact" },
    ],
  };
}

export function guidePage(input: {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  directAnswer: string;
  sections: { heading: string; body: string }[];
  faqs?: FaqItem[];
  related?: { label: string; href: string }[];
}) {
  return {
    slug: input.slug,
    path: `/guides/${input.slug}`,
    title: input.title,
    metaDescription: input.metaDescription,
    h1: input.h1,
    subtitle: input.subtitle,
    directAnswer: input.directAnswer,
    sections: input.sections,
    faqs: input.faqs ?? [],
    relatedLinks: input.related ?? [
      { label: "Contact sales", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  };
}
