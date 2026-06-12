import { lazy, Suspense, useEffect } from "react";
import { HomePageSchema } from "@/components/HomePageSchema";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import WhyOfficeKit from "@/components/WhyOfficeKit";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import { DeferredMount } from "@/components/DeferredMount";
import { HR_POPUP_SENTINEL_ID } from "@/hooks/useHrPopupTrigger";

const TrustBadges = lazy(() =>
  import("@/components/TrustBadges").then((m) => ({ default: m.TrustBadges }))
);
const MobileApp = lazy(() => import("@/components/MobileApp"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

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
      <HomePageSchema />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <div
          id={HR_POPUP_SENTINEL_ID}
          className="h-px w-full shrink-0 pointer-events-none"
          aria-hidden
        />
        <TrustedCompanies />
        <WhyOfficeKit />
        <FeaturesSection />
        <FAQSection />

        <DeferredMount minHeight="120px">
          <Suspense fallback={null}>
            <div className="py-8">
              <TrustBadges />
            </div>
          </Suspense>
        </DeferredMount>

        <DeferredMount minHeight="320px">
          <Suspense fallback={null}>
            <MobileApp />
          </Suspense>
        </DeferredMount>

        <DeferredMount minHeight="280px">
          <Suspense fallback={null}>
            <TestimonialsSection />
          </Suspense>
        </DeferredMount>

        <DeferredMount minHeight="360px">
          <Suspense fallback={null}>
            <ContactSection />
          </Suspense>
        </DeferredMount>
      </main>

      <DeferredMount minHeight="200px">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </DeferredMount>
    </div>
  );
};

export default Index;
