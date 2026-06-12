import React from "react";
import { UaeFonts } from "@/components/UaeFonts";
import Navbar from "./Navigation";
import Hero from "./Hero";
import Footer from "../components/Footer";
import PainPoints from "./PainPoints";
import WhyOfficeKit from "./WhyOfficeKit";
import Features from "./Features";
import Compliance from "./Compliance";
import FAQ from "./FAQ";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <PainPoints />
        <WhyOfficeKit />
        <Features />
        <Compliance />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default UaeLandingPage;
