import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyContainerScroll } from "@/components/ui/LazyContainerScroll";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { HERO_IMAGES } from "@/lib/seo/assets";
import { imgFetchPriority } from "@/lib/img-props";

const HeroProductParallax = lazy(() =>
  import("@/components/motion/HeroProductParallax").then((m) => ({
    default: m.HeroProductParallax,
  }))
);

const TRUST_PILLS = [
  "500+ companies",
  "WPS & GOSI native",
] as const;

const HeroSection = () => {
  const titleBlock = (
    <div className="hero-fade-up text-center w-full max-w-3xl lg:max-w-4xl mx-auto px-1 sm:px-4 relative z-30">
      <h1 className="text-[1.625rem] leading-[1.2] min-[375px]:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-5 md:mb-7">
        AI-Powered HRMS for{" "}
        <span className="text-white">India, UAE &amp; GCC Payroll</span>
      </h1>

      <p className="hero-fade-up hero-fade-up--delay-1 text-[0.8125rem] leading-relaxed sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 px-1">
        Recruitment, attendance, statutory payroll, and WPS compliance on one
        platform — built for mid-market teams scaling across India and the Gulf.
      </p>

      <div className="hero-fade-up hero-fade-up--delay-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-5 sm:mb-8 md:mb-10">
        {TRUST_PILLS.map((pill) => (
          <span
            key={pill}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs text-white/90"
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="hero-fade-up hero-fade-up--delay-3 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
        <div className="cta-lift w-full sm:w-auto">
          <Button
            asChild
            className="bg-white !rounded-xl text-[#0055ff] hover:bg-white/90 h-10 sm:h-12 px-5 sm:px-8 group font-semibold w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-black/10"
          >
            <Link to="/contact">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
        <div className="cta-lift w-full sm:w-auto">
          <Button
            asChild
            variant="outline"
            className="text-white border-white/50 hover:border-white bg-white/5 hover:bg-white/10 !rounded-xl h-10 sm:h-12 px-5 sm:px-8 group text-sm sm:text-base font-medium w-full sm:w-auto"
          >
            <Link to="/pricing">
              See Pricing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="hero-fade-up hero-fade-up--delay-4 mt-4 sm:mt-5 md:mt-6 hidden min-[400px]:block">
        <Link
          to="https://www.youtube.com/watch?v=Tposa0O5s_k"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-lift inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors group"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 group-hover:bg-white/15">
            <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
          </span>
          Watch product overview
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );

  const productImage = (
    <picture className="block h-full w-full">
      <source
        media="(min-width: 768px)"
        srcSet={HERO_IMAGES.desktop.srcSet}
        sizes={HERO_IMAGES.desktop.sizes}
      />
      <img
        src={HERO_IMAGES.mobile.src}
        srcSet={HERO_IMAGES.mobile.srcSet}
        sizes={HERO_IMAGES.mobile.sizes}
        alt={HERO_IMAGES.desktop.alt}
        width={HERO_IMAGES.mobile.width}
        height={HERO_IMAGES.mobile.height}
        className="h-full w-full object-contain object-bottom"
        {...imgFetchPriority("high")}
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </picture>
  );

  return (
    <section
      className="relative rounded-b-3xl overflow-hidden flex flex-col bg-[#01004f] pb-6 sm:pb-14 md:pb-20"
      style={{
        backgroundImage: "linear-gradient(160deg, #0055ff 0%, #01004f 55%)",
      }}
      aria-label="OfficeKit HR — AI-powered HRMS for India, UAE and GCC"
    >
      <OptimizedImage
        src={HERO_IMAGES.heroBg.src}
        srcSet={HERO_IMAGES.heroBg.srcSet}
        sizes={HERO_IMAGES.heroBg.sizes}
        alt=""
        width={HERO_IMAGES.heroBg.width}
        height={HERO_IMAGES.heroBg.height}
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none opacity-90"
        priority="high"
        loading="eager"
        decoding="async"
        decorative
      />
      <div className="relative z-10 flex flex-col">
        <LazyContainerScroll titleComponent={titleBlock}>
          <Suspense fallback={productImage}>
            <HeroProductParallax className="h-full w-full">
              {productImage}
            </HeroProductParallax>
          </Suspense>
        </LazyContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
