import { useMemo } from "react";
import { usePageSeo } from "@/seo/SeoContext";
import type { StaticBlogMeta } from "@/data/static-blog-posts";

/** Registers SEO for static blog routes via the global SeoHead. */
export function useStaticBlogSeo(meta: StaticBlogMeta) {
  const seo = useMemo(
    () => ({
      path: meta.path,
      title: meta.title,
      description: meta.description,
      type: "article" as const,
      ogImage: meta.image,
    }),
    [meta]
  );
  usePageSeo(seo);
}
