import type { ReactNode } from "react";
import { SEO_ASSETS } from "@/lib/seo/assets";

type SeoHeroBannerProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  centered?: boolean;
  titleId?: string;
};

/** Full-width hero with background image and readable overlay (matches feature pages). */
export function SeoHeroBanner({
  eyebrow,
  title,
  subtitle,
  children,
  backgroundImage = SEO_ASSETS.sectionBg,
  centered = true,
  titleId,
}: SeoHeroBannerProps) {
  const align = centered ? "text-center" : "";

  return (
    <section
      className="relative pt-32 pb-16 md:pb-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/88 to-background/96"
        aria-hidden
      />
      <div className={`relative container mx-auto px-4 max-w-4xl ${align}`}>
        {eyebrow && (
          <p className="text-sm font-medium text-primary mb-3">{eyebrow}</p>
        )}
        <h1
          id={titleId}
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 ${
            centered ? "mx-auto max-w-4xl" : "max-w-3xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 ${
              centered ? "mx-auto max-w-3xl" : "max-w-3xl"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
