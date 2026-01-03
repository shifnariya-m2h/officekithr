"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked, but video will play when user interacts
      });
    }
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat rounded-b-3xl overflow-hidden min-h-screen flex flex-col pb-0"
      style={{
        backgroundImage: "url('/BG.png')",
        willChange: "auto",
      }}
    >
      <ContainerScroll
        titleComponent={
          <>
            <div className="text-center w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-30 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              {/* Main Headline */}
              <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight px-2">
                AI Powered HR Built for the{" "}
                <span className="text-white font-bold">Future</span>
              </h1>

              {/* Description Text */}
              <p className="text-xs min-[375px]:text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                Your journey matters. Our tailored software streamlines operations,
                supports your team, and fuels growth. Together, let's build a brighter tomorrow.
              </p>

              {/* CTA Buttons - Centered */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-center px-2">
                <Link to="/contact" className="w-full sm:w-auto max-w-xs sm:max-w-none">
                  <Button
                    className="bg-white text-[#0055ff] hover:bg-white/90 h-[40px] sm:h-[42px] md:h-[44px] px-5 sm:px-6 md:px-8 group font-semibold w-full sm:w-auto text-xs sm:text-sm md:text-base"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 sm:h-4 w-3.5 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link 
                  to="https://www.youtube.com/watch?v=Tposa0O5s_k" 
                  target="_blank" 
                  className="flex items-center justify-center text-white border border-transparent hover:border-white bg-transparent hover:bg-white/10 rounded-full px-5 sm:px-6 md:px-8 h-[40px] sm:h-[42px] md:h-[44px] transition-all duration-300 group text-xs sm:text-sm md:text-base font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
                >
                  <span>Watch Overview</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 sm:h-4 w-3.5 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </>
        }
      >
        <video
          ref={videoRef}
          src="/sequence-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full"
          style={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
            display: "block",
            minWidth: "100%",
            minHeight: "100%",
          }}
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

export default HeroSection;