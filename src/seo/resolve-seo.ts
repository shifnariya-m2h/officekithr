import type { BlogSeoEntry, SeoOverride } from "./SeoContext";
import { getRouteSeo, type RouteSeoConfig } from "./route-seo";

export function resolveSeoConfig(
  pathname: string,
  override: SeoOverride | null,
  blogManifest: Record<string, BlogSeoEntry>
): RouteSeoConfig & SeoOverride {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  let base = getRouteSeo(path);

  if (path.startsWith("/blog/")) {
    const slug = path.replace(/^\/blog\//, "");
    const entry = blogManifest[slug];
    if (entry) {
      base = {
        ...base,
        path: entry.path,
        title: entry.title,
        description: entry.description,
        ogImage: entry.image,
        type: "article",
      };
    }
  }

  if (!override) return { ...base };

  return {
    ...base,
    ...override,
    path: override.path ?? base.path,
    title: override.title ?? base.title,
    description: override.description ?? base.description,
    ogImage: override.ogImage ?? base.ogImage,
    type: override.type ?? base.type,
    robots: override.robots,
    noindex: override.noindex,
    hreflang: override.hreflang ?? base.hreflang,
  };
}
