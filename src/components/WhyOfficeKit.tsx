import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Shield, Link as LinkIcon } from "lucide-react";
import { FeatureCard } from "./ui/FeatureCard";
import { Link } from "react-router-dom";


export default () => {
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-[#2463eb]" />,
      title: "Unified HR Platform",
      description: "Centralizes all HR functions—recruitment, onboarding, payroll, attendance, leave, feedback, and more—in one seamless solution."
    },
    {
      icon: <Lock className="w-5 h-5 text-[#2463eb]" />,
      title: "Robust Security & Compliance",
      description: "Enterprise-grade protection for your HR data, with built-in compliance for local and multi-country payroll to ensure regulations are met and risks are minimized."
    },
    {
      icon: <Shield className="w-5 h-5 text-[#2463eb]" />,
      title: "Enhanced Engagement",
      description: "Tools for mood tracking, surveys, and a social platform keep employees connected and engaged."
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-[#2463eb]" />,
      title: "Fast and Easy Implementation",
      description: "Quick onboarding means you can get up and running with minimal downtime."
    }
  ];

  return (
    <section className="pb-pb-common">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="!bg-[#f4f7fa] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className=" ">
                <Badge className="bg-white font-normal py-2  text-[#3f5ffc] mb-4 border border-[#ededed] hover:bg-transparent"  >
                  Better Starts here
                </Badge>
                <div className="">
                  <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary leading-tight mb-6">
                    Why <span className="gradient-text" >OfficeKit</span> <br />
                    Stands out?
                  </h2>
                  <p className="text-hr-text-secondary text-lg leading-relaxed">
                    OfficeKit HR stands out by offering a fully integrated, all-in-one platform that automates
                    the entire employee lifecycle, making HR effortless and efficient.
                  </p>
                </div>
              </div>


              <Button
                variant="outline"
                className="btn-cta gradient-text font-normal"
              >
                <Link to="/about-us" className="flex items-center space-x-2">
                  Learn more
                </Link>
              </Button>




            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <FeatureCard {...features[0]} />
                <FeatureCard {...features[1]} />
              </div>
              <div className="space-y-8 sm:mt-9">
                <FeatureCard {...features[2]} className="h-45 flex flex-col justify-center" />
                <FeatureCard {...features[3]} className="h-45 flex flex-col justify-center" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};