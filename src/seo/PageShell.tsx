import { ReactNode, useMemo, useEffect } from "react";
import { PageJsonLd } from "@/components/PageJsonLd";
import { usePageSeo } from "./SeoContext";
import type { FaqItem } from "./schema";
import { faqPageSchema, speakableSchema } from "./schema";
import { absoluteUrl } from "./site-config";

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

  useEffect(() => {
    document.documentElement.setAttribute("data-prerender-ready", "true");
  }, []);

  const faqNode = faqs?.length ? faqPageSchema(faqs) : null;
  const speakableNode =
    faqs?.length && path
      ? speakableSchema({
          url: absoluteUrl(path),
          cssSelectors: ["#page-faq-heading", ".geo-faq-answer", ".direct-answer"],
        })
      : null;
  const pageNodes = [
    ...schemaNodes,
    ...(faqNode ? [faqNode] : []),
    ...(speakableNode ? [speakableNode] : []),
  ];

  return (
    <>
      <PageJsonLd nodes={pageNodes} />
      <main id="main-content">{children}</main>
    </>
  );
}
