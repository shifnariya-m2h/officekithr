/** Display widths for partner marquee logos (matches Tailwind h-10 / h-12 / h-14). */
const PARTNER_SIZES =
  "(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px";

/**
 * Version-bump to force browsers/Lighthouse to fetch updated logo binaries.
 *
 * Your CDN sends `Cache-Control: immutable` for `.webp`, so if the same URL
 * previously existed in cache, Lighthouse may keep reporting old (larger)
 * transfer sizes unless the site data cache is cleared.
 */
const PARTNER_LOGO_ASSET_VERSION = "2026-05-26";

/**
 * Responsive paths for /company-logos/{name}.webp (+ optional {name}-80.webp).
 */
export function partnerLogoSources(src: string) {
  const match = src.match(/^\/company-logos\/(.+)\.webp$/i);
  if (!match) {
    return { src, srcSet: undefined as string | undefined, sizes: undefined as string | undefined };
  }
  const name = match[1];
  const base = `/company-logos/${name}.webp`;
  const small = `/company-logos/${name}-80.webp`;
  const v = `?v=${encodeURIComponent(PARTNER_LOGO_ASSET_VERSION)}`;
  return {
    src: `${small}${v}`,
    srcSet: `${small}${v} 80w, ${base}${v} 160w`,
    sizes: PARTNER_SIZES,
  };
}
