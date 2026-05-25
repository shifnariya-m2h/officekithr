import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { PageJsonLd } from "@/components/PageJsonLd";
import { useSeoContext } from "./SeoContext";
import { canonicalUrl } from "./site-config";
import { SITE } from "./site-config";
import { buildGraph, webPageSchema } from "./schema";
import { resolveSeoConfig } from "./resolve-seo";
import { SEO_ASSETS } from "@/lib/seo/assets";

function absoluteImage(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return canonicalUrl(url.startsWith("/") ? url : `/${url}`);
}

type SeoHeadProps = {
  /** Extra JSON-LD nodes (article, breadcrumb, FAQ) — not merged into site graph. */
  jsonLdNodes?: Record<string, unknown>[];
};

/** Single app-wide SEO head — reads route table, blog manifest, and page overrides. */
export function SeoHead({ jsonLdNodes = [] }: SeoHeadProps) {
  const { pathname, search } = useLocation();
  const { override, blogManifest } = useSeoContext();

  const resolved = resolveSeoConfig(pathname, override, blogManifest);
  const title = resolved.title;
  const description = resolved.description;
  const rawPath = resolved.path ?? pathname;
  const canonicalPath =
    rawPath === "/resources/blogs" && search ? "/resources/blogs" : rawPath;
  const canonical = canonicalUrl(canonicalPath);
  const image = absoluteImage(resolved.ogImage ?? SITE.ogImage);
  const ogType = resolved.type ?? "website";
  const robotsContent =
    resolved.robots ??
    (resolved.noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  const langs = resolved.hreflang;

  const schemaJson = buildGraph([
    webPageSchema({ url: canonical, name: title, description }),
  ]);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang={pathname.startsWith("/ae") ? "ar" : "en"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robotsContent} />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href={SEO_ASSETS.favicon} type="image/svg+xml" />
        <link rel="icon" href={SEO_ASSETS.faviconIco} sizes="32x32" />
        <link rel="apple-touch-icon" href={SEO_ASSETS.appleTouchIcon} sizes="180x180" />
        {pathname === "/" && (
          <link rel="preload" as="image" href="/BG.png" fetchPriority="high" />
        )}

        {langs?.map(({ lang, path }) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={canonicalUrl(path)}
          />
        ))}

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content={pathname.startsWith("/ae") ? "ar_AE" : "en_US"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta name="application-name" content={SITE.name} />
        <meta name="author" content={SITE.name} />
        <meta
          name="geo.region"
          content="IN;AE;KW;SA;QA"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />

        <script type="application/ld+json">{schemaJson}</script>
      </Helmet>
      <PageJsonLd nodes={jsonLdNodes} />
    </>
  );
}
