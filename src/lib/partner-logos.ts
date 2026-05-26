/** Display widths for partner marquee logos (matches Tailwind h-10 / h-12 / h-14). */
const PARTNER_SIZES =
  "(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px";

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
  return {
    src: small,
    srcSet: `${small} 80w, ${base} 160w`,
    sizes: PARTNER_SIZES,
  };
}
