import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import WhyOfficeKit from "@/components/WhyOfficeKit";
import FeaturesSection from "@/components/FeaturesSection";
import EssentialHRStack from "@/components/EssentialHRStack";
import MobileAppSection from "@/components/MobileAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import MobileApp from "@/components/MobileApp";
import { HomeFaqSchema } from "@/components/HomeFaqSchema";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.section-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HomeFaqSchema />
      <Navigation />
      <main id="main-content">
      <HeroSection />
      <TrustedCompanies />
      <WhyOfficeKit />
      <FeaturesSection />
      {/* <EssentialHRStack /> */}
      <FAQSection />
      <MobileApp />
      {/* <MobileAppSection /> */}
      <TestimonialsSection />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
