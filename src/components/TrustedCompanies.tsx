import React from "react";
import { PartnerLogo } from "@/components/ui/PartnerLogo";

const TrustedCompaniesShowcase = () => {
  const logos = [
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
  ];

  const third = Math.ceil(logos.length / 3);
  const chunk1 = logos.slice(0, third);
  const chunk2 = logos.slice(third, third * 2);
  const chunk3 = logos.slice(third * 2);

  const duplicate = (arr: string[]) => [...arr, ...arr];
  const row1 = duplicate(chunk1);
  const row2 = duplicate(chunk2);
  const row3 = duplicate(chunk3);

  const LogoItem = ({ src, label }: { src: string; label: string }) => (
    <div className="flex h-16 w-36 sm:h-20 sm:w-44 md:h-24 md:w-52 flex-shrink-0 items-center justify-center px-1">
      <PartnerLogo src={src} label={label} />
    </div>
  );

  return (
    <section
      className="relative overflow-hidden bg-background py-12 lg:py-16 [content-visibility:auto] [contain-intrinsic-size:1px_480px]"
      aria-labelledby="trusted-companies-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-6 text-center lg:mb-8">
          <h2
            id="trusted-companies-heading"
            className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl"
          >
            Trusted by leading companies across the globe
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />

        <div className="marquee-track mb-4 overflow-hidden sm:mb-5">
          <div className="animate-marquee flex w-max items-center">
            {row1.map((src, i) => (
              <LogoItem key={`r1-${src}-${i}`} src={src} label={`Partner ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="marquee-track mb-4 overflow-hidden sm:mb-5">
          <div className="animate-marquee-reverse flex w-max items-center">
            {row2.map((src, i) => (
              <LogoItem key={`r2-${src}-${i}`} src={src} label={`Partner ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="marquee-track overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {row3.map((src, i) => (
              <LogoItem key={`r3-${src}-${i}`} src={src} label={`Partner ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesShowcase;
