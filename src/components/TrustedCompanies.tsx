import React from "react";

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
    // "/company-logos/crowe.webp",
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

  // Split into 3 rows
  const third = Math.ceil(logos.length / 3);
  const row1 = logos.slice(0, third);
  const row2 = logos.slice(third, third * 2);
  const row3 = logos.slice(third * 2);

  // ✅ ONLY duplicate twice (important)
  const row1Repeated = [...row1, ...row1];
  const row2Repeated = [...row2, ...row2];
  const row3Repeated = [...row3, ...row3];

  const LogoCard = ({ src, index }: { src: string; index: number }) => (
    <div className="relative group flex items-center justify-center w-40 h-24 sm:w-48 sm:h-28 lg:w-56 lg:h-32 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-transparent hover:border-neutral-100 mx-3 sm:mx-4 flex-shrink-0 p-3 sm:p-4 cursor-pointer">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl transition-all duration-500 rounded-2xl" />
      <img
        src={src}
        alt={`Trusted Company ${index + 1}`}
        className="relative z-10 w-auto h-12 sm:h-16 lg:h-20 object-contain"
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">

      {/* ✅ FIXED CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          animation: marquee 22s linear infinite;
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .marquee-slow {
          animation: marquee 30s linear infinite reverse;
        }

        .marquee-medium {
          animation: marquee 26s linear infinite;
        }

        .marquee-track:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-2xl lg:text-2xl font-semibold text-hr-text-primary">
            Trusted by Leading Companies{" "}
            <span className="leading-snug gradient-text text-4xl font-semibold">
              Across the Globe
            </span>
          </h1>
        </div>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 lg:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 lg:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 */}
        <div className="marquee-track overflow-hidden mb-10 p-2">
          <div className="marquee">
            {row1Repeated.map((src, i) => (
              <LogoCard key={`r1-${i}`} src={src} index={i % row1.length} />
            ))}
          </div>
        </div>

        {/* Row 2 (reverse) */}
        <div className="marquee-track overflow-hidden mb-10 p-2">
          <div className="marquee marquee-slow">
            {row2Repeated.map((src, i) => (
              <LogoCard key={`r2-${i}`} src={src} index={i % row2.length} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="marquee-track overflow-hidden p-2">
          <div className="marquee marquee-medium">
            {row3Repeated.map((src, i) => (
              <LogoCard key={`r3-${i}`} src={src} index={i % row3.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-14">
        <p className="text-gray-600 text-sm lg:text-base font-medium">
          Powering innovation for companies across industries
        </p>
      </div>
    </section>
  );
};

export default TrustedCompaniesShowcase;