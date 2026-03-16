import React from "react";
import Navbar from "./Navigation";
import Hero from "./Hero";
import PainPoints from "./PainPoints";
import WhyOfficeKit from "./WhyOfficeKit";
import Features from "./Features";
import Compliance from "./Compliance";
import FAQ from "./FAQ";
import Footer from "../components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const UaeLandingPage: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
      <Navbar />

      <div className="relative isolate overflow-hidden">
        <Hero />
      </div>

      <div className="space-y-24 md:space-y-32 pb-20 mt-12">
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