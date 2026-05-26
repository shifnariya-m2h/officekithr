import { partnerLogoSources } from "@/lib/partner-logos";
import { cn } from "@/lib/utils";

/** Max rendered logo width (md breakpoint); assets are 2× in /public. */
export const PARTNER_LOGO_WIDTH = 160;
export const PARTNER_LOGO_HEIGHT = 56;

type PartnerLogoProps = {
  src: string;
  label: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/**
 * Below-the-fold partner logo with stable layout box and lazy loading.
 */
export function PartnerLogo({
  src,
  label,
  className,
  loading = "lazy",
}: PartnerLogoProps) {
  const { src: responsiveSrc, srcSet, sizes } = partnerLogoSources(src);

  return (
    <img
      src={responsiveSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={label}
      width={PARTNER_LOGO_WIDTH}
      height={PARTNER_LOGO_HEIGHT}
      className={cn(
        "h-10 w-auto max-w-[92%] object-contain sm:h-12 md:h-14",
        className
      )}
      loading={loading}
      decoding="async"
    />
  );
}
