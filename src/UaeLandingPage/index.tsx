// src/pages/index.tsx (or Home.tsx) - SAFE & ISOLATED HERO
import React from "react";
import Navbar from "./Navigation";
import Hero from "./Hero";
import PainPoints from "./PainPoints";
import WhyOfficeKit from "./WhyOfficeKit";
import Features from "./Features";
import Compliance from "./Compliance";
import FAQ from "./FAQ";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
       <Navbar/>

       <div className="relative isolate overflow-hidden">
        <Hero />
      </div>

       <PainPoints />
      <WhyOfficeKit />
      <Features />
      <Compliance />
      {/* <FAQ /> */}

       <Footer />
    </div>
  );
};

export default Home;