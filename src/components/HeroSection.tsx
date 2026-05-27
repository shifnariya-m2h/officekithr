import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyContainerScroll } from "@/components/ui/LazyContainerScroll";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { HERO_IMAGES } from "@/lib/seo/assets";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const HeroSection = () => {
  const isDesktopHero = useMediaQuery("(min-width: 768px)", false);
  const titleBlock = (
    <div className="text-center w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-30 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight px-2">
        AI Powered HR Built for the{" "}
        <span className="text-white font-bold">Future</span>
      </h1>
      <p className="text-xs min-[375px]:text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
        Your journey matters. Our tailored software streamlines operations,
        supports your team, and fuels growth. Together, let&apos;s build a brighter
        tomorrow.
      </p>
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-center px-2">
        <Button
          asChild
          className="bg-white !rounded-lg text-[#0055ff] hover:bg-white/90 h-11 sm:h-11 md:h-11 px-5 sm:px-6 md:px-8 group font-semibold w-full sm:w-auto max-w-xs sm:max-w-none text-xs sm:text-sm md:text-base"
        >
          <Link to="/contact">
            Schedule Demo
            <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 sm:h-4 w-3.5 sm:w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Link
          to="https://www.youtube.com/watch?v=Tposa0O5s_k"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white border border-transparent hover:border-white bg-transparent hover:bg-white/10 !rounded-lg px-5 sm:px-6 md:px-8 h-[40px] sm:h-[42px] md:h-[44px] transition-all duration-300 group text-xs sm:text-sm md:text-base font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <span>Watch Overview</span>
          <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 sm:h-4 w-3.5 sm:w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );

  const heroImages = isDesktopHero ? (
    <OptimizedImage
      src={HERO_IMAGES.desktop.src}
      srcSet={HERO_IMAGES.desktop.srcSet}
      sizes={HERO_IMAGES.desktop.sizes}
      alt={HERO_IMAGES.desktop.alt}
      width={HERO_IMAGES.desktop.width}
      height={HERO_IMAGES.desktop.height}
      className="h-full w-full object-contain"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      draggable={false}
    />
  ) : (
    <OptimizedImage
      src={HERO_IMAGES.mobile.src}
      srcSet={HERO_IMAGES.mobile.srcSet}
      sizes={HERO_IMAGES.mobile.sizes}
      alt={HERO_IMAGES.mobile.alt}
      width={HERO_IMAGES.mobile.width}
      height={HERO_IMAGES.mobile.height}
      className="h-full w-full object-contain"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );

  return (
    <section
      className="relative rounded-b-3xl overflow-hidden min-h-screen flex flex-col pb-0 bg-[#01004f]"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #0055ff 0%, #01004f 55%)",
      }}
    >
      <OptimizedImage
        src={HERO_IMAGES.heroBg.src}
        srcSet={HERO_IMAGES.heroBg.srcSet}
        sizes={HERO_IMAGES.heroBg.sizes}
        alt=""
        width={HERO_IMAGES.heroBg.width}
        height={HERO_IMAGES.heroBg.height}
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        decorative
      />
      <div className="relative z-10 flex flex-col flex-1">
        <LazyContainerScroll titleComponent={titleBlock}>
          {heroImages}
        </LazyContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
