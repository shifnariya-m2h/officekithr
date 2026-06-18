import React from "react";
import { TestimonialMarquee } from "@/components/motion/TestimonialMarquee";
import { PartnerLogo } from "@/components/ui/PartnerLogo";

const LOGOS = [
  "/company-logos/abreco.webp",
  "/company-logos/aerovative.webp",
  "/company-logos/anjuman.webp",
  "/company-logos/beyond.webp",
  "/company-logos/bigwing.webp",
  "/company-logos/bosq.webp",
  "/company-logos/chavara.webp",
  "/company-logos/clikon.webp",
  "/company-logos/clubsulaimani.webp",
  "/company-logos/empire.webp",
  "/company-logos/kvn.webp",
  "/company-logos/landmark.webp",
  "/company-logos/lulu.webp",
  "/company-logos/midac.webp",
  "/company-logos/mist.webp",
  "/company-logos/popees.webp",
  "/company-logos/pride.webp",
  "/company-logos/rsspectra.webp",
  "/company-logos/safa.webp",
  "/company-logos/seablueshipyard.webp",
  "/company-logos/skyworth.webp",
  "/company-logos/sreelakshmi.webp",
  "/company-logos/tablez.webp",
  "/company-logos/techfair.webp",
  "/company-logos/thai.webp",
  "/company-logos/thawfeeq.webp",
  "/company-logos/weddingmall.webp",
  "/company-logos/yesbharath.webp",
] as const;

const ROW_SIZE = Math.ceil(LOGOS.length / 3);
const ROWS = [
  LOGOS.slice(0, ROW_SIZE),
  LOGOS.slice(ROW_SIZE, ROW_SIZE * 2),
  LOGOS.slice(ROW_SIZE * 2),
] as const;

const ROW_CONFIG = [
  { duration: 58, reverse: false },
  { duration: 64, reverse: true },
  { duration: 52, reverse: false },
] as const;

type LogoItemProps = {
  src: string;
  label: string;
  priority?: boolean;
};

const LogoItem = ({ src, label, priority = false }: LogoItemProps) => (
  <div className="flex h-16 w-[8.5rem] shrink-0 items-center justify-center sm:h-[4.5rem] sm:w-40 md:h-20 md:w-44">
    <PartnerLogo
      src={src}
      label={label}
      loading={priority ? "eager" : "lazy"}
      className="max-h-full max-w-[88%]"
    />
  </div>
);

const LogoRow = ({
  logos,
  duration,
  reverse,
  rowIndex,
}: {
  logos: readonly string[];
  duration: number;
  reverse: boolean;
  rowIndex: number;
}) => (
  <TestimonialMarquee
    seamless
    reverse={reverse}
    duration={duration}
    className="mb-4 sm:mb-5 last:mb-0"
    groupClassName="items-center gap-8 sm:gap-10 md:gap-12"
  >
    {logos.map((src, i) => (
      <LogoItem
        key={`r${rowIndex}-${src}`}
        src={src}
        label={`Partner logo ${rowIndex * ROW_SIZE + i + 1}`}
        priority={rowIndex === 0 && i < 4}
      />
    ))}
  </TestimonialMarquee>
);

const TrustedCompaniesShowcase = () => {
  return (
    <section
      className="relative min-h-[17rem] overflow-hidden bg-background py-12 sm:min-h-[19rem] lg:min-h-[21rem] lg:py-16"
      aria-labelledby="trusted-companies-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <h2
            id="trusted-companies-heading"
            className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl"
          >
            Trusted by leading companies across the globe
          </h2>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-16 md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-16 md:w-24"
          aria-hidden
        />

        {ROWS.map((logos, i) => (
          <LogoRow
            key={i}
            logos={logos}
            rowIndex={i}
            duration={ROW_CONFIG[i].duration}
            reverse={ROW_CONFIG[i].reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompaniesShowcase;
