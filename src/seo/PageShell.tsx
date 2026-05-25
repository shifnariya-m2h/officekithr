import { ReactNode, useMemo } from "react";
import { PageJsonLd } from "@/components/PageJsonLd";
import { usePageSeo } from "./SeoContext";
import type { FaqItem } from "./schema";
import { faqPageSchema } from "./schema";

type PageShellProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
  faqs?: FaqItem[];
  schemaNodes?: Record<string, unknown>[];
};

/** Wraps page content with per-route SEO override + optional FAQ schema. */
export function PageShell({
  children,
  faqs,
  schemaNodes = [],
  ...seo
}: PageShellProps) {
  const { title, description, path, ogImage, noindex, type } = seo;
  const seoConfig = useMemo(
    () => ({ title, description, path, ogImage, noindex, type }),
    [title, description, path, ogImage, noindex, type]
  );
  usePageSeo(seoConfig);

  const faqNode = faqs?.length ? faqPageSchema(faqs) : null;
  const pageNodes = [...schemaNodes, ...(faqNode ? [faqNode] : [])];

  return (
    <>
      <PageJsonLd nodes={pageNodes} />
      <main id="main-content">{children}</main>
    </>
  );
}
