import { ReactNode } from "react";
import { PageJsonLd } from "@/components/PageJsonLd";
import { useStaticBlogSeo } from "@/hooks/useStaticBlogSeo";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { absoluteUrl } from "@/seo/site-config";
import type { StaticBlogMeta } from "@/data/static-blog-posts";

type StaticBlogShellProps = {
  meta: StaticBlogMeta;
  children: ReactNode;
};

/** Article JSON-LD + global SEO override for static blog pages. */
export function StaticBlogShell({ meta, children }: StaticBlogShellProps) {
  const url = absoluteUrl(meta.path);
  useStaticBlogSeo(meta);

  return (
    <>
      <PageJsonLd
        nodes={[
          articleSchema({
            title: meta.headline,
            description: meta.description,
            url,
            image: meta.image,
            datePublished: meta.datePublished,
            author: meta.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/resources/blogs" },
            { name: meta.headline, path: meta.path },
          ]),
        ]}
      />
      {children}
    </>
  );
}
