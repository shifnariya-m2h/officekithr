import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { useEffect } from "react";
import { HomeFaqSchema } from "@/components/HomeFaqSchema";
import { LazySection } from "@/components/LazySection";
import { HR_POPUP_SENTINEL_ID } from "@/hooks/useHrPopupTrigger";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".section-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HomeFaqSchema />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <div
          id={HR_POPUP_SENTINEL_ID}
          className="h-px w-full shrink-0 pointer-events-none"
          aria-hidden
        />
        <LazySection
          loader={() => import("@/components/TrustedCompanies")}
          minHeight="14rem"
          rootMargin="480px 0px"
        />
        <LazySection
          loader={() => import("@/components/WhyOfficeKit")}
          minHeight="20rem"
        />
        <LazySection
          loader={() => import("@/components/FeaturesSection")}
          minHeight="24rem"
        />
        <LazySection
          loader={() => import("@/components/FAQSection")}
          minHeight="20rem"
        />
        <LazySection
          loader={() => import("@/components/MobileApp")}
          minHeight="28rem"
        />
        <LazySection
          loader={() => import("@/components/TestimonialsSection")}
          minHeight="16rem"
        />
        <LazySection
          loader={() => import("@/components/ContactSection")}
          minHeight="20rem"
        />
      </main>
      <LazySection loader={() => import("@/components/Footer")} minHeight="12rem" />
    </div>
  );
};

export default Index;
