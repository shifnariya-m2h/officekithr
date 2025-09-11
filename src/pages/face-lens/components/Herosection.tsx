import { Button } from "../../../components/ui/button";
import { ChevronDown } from "lucide-react";
import mobileMockup from "../../../../public/okai-lens.png";
import { Link } from "react-router-dom";

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
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Mark Attendance{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text">
                  in a Blink
                </span>{" "}
                with Face Recognition
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Experience secure, instant, and completely contactless attendance
                tracking powered by advanced AI Face Recognition technology
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
                >
                  Schedule Demo
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-white/10"
              >
                Download App
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-300/20 blur-3xl scale-110"></div>

              {/* Mobile Image */}
              <div className="relative z-10 flex justify-center">
                <img
                  src={mobileMockup}
                  alt="Face recognition attendance app interface"
                  className="w-full max-w-md h-auto drop-shadow-2xl transform hover:scale-105 transition duration-500"
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
