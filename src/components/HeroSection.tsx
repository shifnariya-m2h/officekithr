import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
// import { loadSyncoraBot } from "../components/syncoraBot";
import { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {


  const words = ["Future", "Growth", "Innovation", "Success"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative bg-[url('/hero.svg')] bg-cover bg-center rounded-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              AI Powered HR Built for the 
              <span className="gradient-text"> 
                <TypeAnimation
                sequence={[
                  " Future",
                  1000,
                  "",
                  500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              /></span>
            </h1> */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
      AI Powered HR Built for the zain{" "}
      <span className="relative inline-block min-w-[8ch] perspective-1000">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute left-0 top-0 gradient-text"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
        {/* Keeps height stable */}
        <span className="invisible block">{words[0]}</span>
      </span>
    </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Your journey matters. Our tailored software streamlines operations,
              supports your team, and fuels growth. Together, let’s build a brighter tomorrow.
            </p>

            {/* Pillars Section */}
            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Item */}
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-base font-medium text-foreground">
                  Automated & Accurate
                </span>
              </div>

              {/* Item */}
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-base font-medium text-foreground">
                  All-in-One Platform
                </span>
              </div>

              {/* Item */}
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-base font-medium text-foreground">
                  Smarter Decisions
                </span>
              </div>
            </motion.div>


            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">

                <Button
                  className="btn-cta h-[44px] py-[22px] group w-full sm:w-auto"
                // onClick={loadSyncoraBot}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k" target="_blank">
                <Button
                  variant="outline"
                  className="btn-cta text-black h-[44px] px-6 group w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Overview
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              className="w-full max-w-[1200px] h-auto object-contain rounded-3xl"
              src="/hero-mains.webp"
              alt="Hero"
              style={{ scale: 1.5 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
