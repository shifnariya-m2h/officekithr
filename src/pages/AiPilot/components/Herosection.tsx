import { Button } from "../../../components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import mobileAnimation from "../../../../public/lottie/Anima Bot.json";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #101443 63.68%, #000328 100%)",
      }}
    >
      {/* Right angled overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute right-[-20%] top-0 h-full w-[70%] rotate-12"
          style={{
            background: "linear-gradient(180deg, #0a0f3d 0%, #000320 100%)",
            opacity: 0.6,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Talk to Your HRMS <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text">
                  It Listens - It Acts.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your AI-powered voice assistant built into OfficeKit HR.
                Interact using voice or text to manage HR tasks effortlessly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
                >
                  Schedule Demo
                </Button>
              </Link>
                   <Link to="/contact"> 
              <Button
                size="lg"
                className="bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-white/10"
              >
                Download App
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Mobile Lottie Animation */}
          <div className="relative lg:pl-12 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-300/20 blur-3xl scale-110"></div>

              <div className="relative z-10 flex justify-center">
                <Lottie
                  animationData={mobileAnimation}
                  loop={true}
                  className="
                    w-[260px] h-[360px]   /* base (small screens) */
                    sm:w-[340px] sm:h-[480px]
                    md:w-[420px] md:h-[600px]
                    lg:w-[500px] lg:h-[700px]
                    xl:w-[560px] xl:h-[780px]
                    mt-6 sm:mt-8 md:mt-10
                    drop-shadow-2xl 
                    transform hover:scale-105 transition duration-500
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
