import React from "react";
import { UaeFonts } from "@/components/UaeFonts";
import Navbar from "./Navigation";
import Hero from "./Hero";
import Footer from "../components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { LazySection } from "@/components/LazySection";

const UaeLandingPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
      {language === "ar" ? <UaeFonts /> : null}
      <Navbar />

      <div className="relative isolate overflow-hidden">
        <Hero />
      </div>

      <div className="mt-12 space-y-20 md:space-y-28 pb-16">
        <LazySection
          loader={() => import("./PainPoints")}
          minHeight="16rem"
          rootMargin="400px 0px"
        />
        <LazySection
          loader={() => import("./WhyOfficeKit")}
          minHeight="18rem"
        />
        <LazySection loader={() => import("./Features")} minHeight="20rem" />
        <LazySection loader={() => import("./Compliance")} minHeight="16rem" />
        <LazySection loader={() => import("./FAQ")} minHeight="14rem" />
      </div>

      <Footer />
    </div>
  );
};

export default UaeLandingPage;
