import {
  NAV_LOGO_HEIGHT,
  NAV_LOGO_SIZES,
  NAV_LOGO_SRCSET,
  NAV_LOGO_WIDTH,
  SEO_ASSETS,
} from "@/lib/seo/assets";
import { cn } from "@/lib/utils";
import { imgFetchPriority } from "@/lib/img-props";

const LOGO_ALT = "OfficeKit HR - AI-Powered HRMS Software";

type NavBrandLogoProps = {
  className?: string;
};

/** Navigation brand mark — intrinsic ratio matches NavLogo.webp (274×82 @2×). */
export function NavBrandLogo({ className }: NavBrandLogoProps) {
  return (
    <img
      src={SEO_ASSETS.logo108}
      srcSet={NAV_LOGO_SRCSET}
      sizes={NAV_LOGO_SIZES}
      alt={LOGO_ALT}
      width={NAV_LOGO_WIDTH}
      height={NAV_LOGO_HEIGHT}
      className={cn(
        "w-auto h-8 sm:h-10 transition-all duration-300 [.group\\/nav[data-visible='true']_&]:h-6 [.group\\/nav[data-visible='true']_&]:sm:h-7",
        className
      )}
      loading="eager"
      decoding="async"
      {...imgFetchPriority("high")}
    />
  );
}
