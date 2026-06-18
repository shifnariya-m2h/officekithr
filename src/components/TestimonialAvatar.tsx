import type { Testimonial } from "@/data/testimonials-data";
import { partnerLogoSources } from "@/lib/partner-logos";
import { cn } from "@/lib/utils";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type TestimonialAvatarProps = {
  testimonial: Testimonial;
  className?: string;
};

/** Person headshot when available; otherwise company logo or initials. */
export function TestimonialAvatar({ testimonial, className }: TestimonialAvatarProps) {
  if (testimonial.avatar) {
    return (
      <img
        src={testimonial.avatar}
        alt=""
        width={48}
        height={48}
        className={cn(
          "h-12 w-12 shrink-0 rounded-xl object-cover border border-border bg-muted shadow-sm",
          className
        )}
        loading="lazy"
        decoding="async"
      />
    );
  }

  if (testimonial.companyLogo) {
    const { src, srcSet, sizes } = partnerLogoSources(testimonial.companyLogo);
    return (
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-2 shadow-sm",
          className
        )}
        aria-hidden
      >
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt=""
          width={40}
          height={40}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-sm font-semibold text-primary",
        className
      )}
      aria-hidden
    >
      {initials(testimonial.name)}
    </div>
  );
}
