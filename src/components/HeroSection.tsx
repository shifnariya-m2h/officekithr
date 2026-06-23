import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyContainerScroll } from "@/components/ui/LazyContainerScroll";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { HERO_IMAGES } from "@/lib/seo/assets";
import { imgFetchPriority } from "@/lib/img-props";
import gsap from "gsap";

const TRUST_PILLS = [
  "500+ companies",
  "WPS & GOSI native",
] as const;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = gsap.utils.selector(section);
    const lines = q('[data-hero="line"]');
    const description = q('[data-hero="description"]');
    const badges = q('[data-hero="badge"]');
    const ctas = q('[data-hero="cta"]');
    const dashboard = q('[data-hero="dashboard"]');
    const watchButton = q('[data-hero="watch"]');
    const blobs = q('[data-hero="blob"]');

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set([lines, description, badges, ctas, dashboard, watchButton], {
          clearProps: "all",
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(blobs, { autoAlpha: 0.45, scale: 1, x: 0, y: 0 });
        return;
      }

      gsap.set([lines, description, badges, ctas, dashboard, watchButton], {
        autoAlpha: 0,
      });
      gsap.set(lines, { y: 24 });
      gsap.set(description, { y: 16 });
      gsap.set(badges, { y: 12 });
      gsap.set(ctas, { y: 12, scale: 0.95 });
      gsap.set(dashboard, { y: 36, scale: 0.97 });
      gsap.set(blobs, { autoAlpha: 0, scale: 0.92, x: 0, y: 0 });

      const reveal = gsap.timeline({ defaults: { ease: "power3.out" } });
      reveal
        .to(lines, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
        })
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.2"
        )
        .to(
          badges,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.12"
        )
        .to(
          ctas,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.1"
        )
        .to(
          dashboard,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
          },
          "-=0.1"
        )
        .to(
          watchButton,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.25"
        );

      gsap.to(blobs, {
        autoAlpha: 0.42,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.12,
      });

      gsap.to(dashboard, {
        y: "-=10",
        duration: 4.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(badges, {
        y: "-=5",
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.18,
      });

      gsap.to(watchButton, {
        scale: 1.04,
        duration: 1.65,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      blobs.forEach((blob, index) => {
        gsap.to(blob, {
          y: index % 2 === 0 ? -18 : -12,
          x: index % 2 === 0 ? 10 : -10,
          duration: 8 + index * 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, section);

    if (!reduceMotion && blobs.length > 0) {
      const xSetters = blobs.map((blob) =>
        gsap.quickTo(blob, "x", { duration: 0.9, ease: "power3.out" })
      );
      const ySetters = blobs.map((blob) =>
        gsap.quickTo(blob, "y", { duration: 0.9, ease: "power3.out" })
      );

      const handleMouseMove = (event: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        const maxShift = 16;

        xSetters.forEach((setX, index) => setX(nx * maxShift * (0.4 + index * 0.15)));
        ySetters.forEach((setY, index) => setY(ny * maxShift * (0.3 + index * 0.12)));
      };

      const handleMouseLeave = () => {
        xSetters.forEach((setX) => setX(0));
        ySetters.forEach((setY) => setY(0));
      };

      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
        ctx.revert();
      };
    }

    return () => {
      ctx.revert();
    };
  }, []);

  const titleBlock = (
    <div className="text-center w-full max-w-3xl lg:max-w-4xl mx-auto px-1 sm:px-4 relative z-30">
      <h1 className="text-[1.625rem] leading-[1.2] min-[375px]:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-5 md:mb-7">
        <span data-hero="line" className="block">
          AI-Powered HRMS for
        </span>
        <span data-hero="line" className="block text-white">
          India, UAE &amp; GCC Payroll
        </span>
      </h1>

      <p
        data-hero="description"
        className="text-[0.8125rem] leading-relaxed sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 px-1"
      >
        Recruitment, attendance, statutory payroll, and WPS compliance on one
        platform — built for mid-market teams scaling across India and the Gulf.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-5 sm:mb-8 md:mb-10">
        {TRUST_PILLS.map((pill) => (
          <span
            key={pill}
            data-hero="badge"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs text-white/90"
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
        <div data-hero="cta" className="cta-lift w-full sm:w-auto">
          <Button
            asChild
            className="bg-white !rounded-xl text-[#0055ff] hover:bg-white/90 h-10 sm:h-12 px-5 sm:px-8 group font-semibold w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
          >
            <Link to="/contact">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div data-hero="cta" className="cta-lift w-full sm:w-auto">
          <Button
            asChild
            variant="outline"
            className="text-white border-white/50 hover:border-white bg-white/5 hover:bg-white/10 !rounded-xl h-10 sm:h-12 px-5 sm:px-8 group text-sm sm:text-base font-medium w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(255,255,255,0.22)]"
          >
            <Link to="/pricing">
              See Pricing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-4 sm:mt-5 md:mt-6 hidden min-[400px]:block">
        <Link
          data-hero="watch"
          to="https://www.youtube.com/watch?v=Tposa0O5s_k"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-lift inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors group"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 group-hover:bg-white/15 transition-colors">
            <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
          </span>
          Watch product overview
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );

  const productImage = (
    <div data-hero="dashboard" className="h-full w-full">
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
    </div>
  );

  return (
    <section
      ref={sectionRef}
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
      <div
        data-hero="blob"
        className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-[#7aa7ff]/35 blur-3xl"
      />
      <div
        data-hero="blob"
        className="pointer-events-none absolute right-8 top-24 h-64 w-64 rounded-full bg-[#64d9ff]/30 blur-3xl"
      />
      <div
        data-hero="blob"
        className="pointer-events-none absolute right-28 bottom-16 h-72 w-72 rounded-full bg-[#7668ff]/26 blur-3xl"
      />
      <div className="relative z-10 flex flex-col">
        <LazyContainerScroll titleComponent={titleBlock}>
          {productImage}
        </LazyContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
