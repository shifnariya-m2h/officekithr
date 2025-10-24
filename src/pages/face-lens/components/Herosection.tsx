import { Button } from "../../../components/ui/button";
import mobileMockup from "../../../../public/okai-lens.png";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SiApple, SiAndroid } from "react-icons/si";
// import { toast } from "sonner";

const HeroSection = () => {
//   const handleIOSClick = (e: React.MouseEvent) => {
//   e.preventDefault();
//   toast("iOS App Coming Soon 🚀", {
//     description: "Stay tuned! Our iOS app will be available shortly.",
//     duration: 3000,
//     position: "top-center", 
//   });
// };

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
               {/* Download Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-white/10 "
                  >
                    Download App
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 bg-background border border-gray-700 rounded-xl shadow-lg animate-in fade-in-80 slide-in-from-top-2">
                  {/* iOS Option */}
                  <DropdownMenuItem asChild>
                    <a
                      href="https://apps.apple.com/in/app/facekit/id6753619593 "
                      // onClick={handleIOSClick}
                          target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 rounded-lg mouse-pointer transition hover:bg-blue-600 hover:text-white"
                    >
                      <SiApple className="mr-2 h-5 w-5" />
                      <span>Download for iOS</span>
                    </a>
                  </DropdownMenuItem>

                  {/* Android Option */}
                  <DropdownMenuItem asChild>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.officekitlence&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 rounded-lg mouse-pointer transition hover:bg-blue-600 hover:text-white"
                    >
                      <SiAndroid className="mr-2 h-5 w-5" />
                      <span>Download for Android</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
                  loading="lazy"
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
