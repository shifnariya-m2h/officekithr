import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Shield, Link as LinkIcon } from "lucide-react";
import { FeatureCard } from "./ui/FeatureCard";
import { Link } from "react-router-dom";
import { StaggerReveal, StaggerItem } from "@/components/motion/StaggerReveal";
import { CtaHoverLift } from "@/components/motion/CtaHoverLift";

export default function WhyOfficeKit() {
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-[#2463eb]" />,
      title: "Unified HR Platform",
      description:
        "Centralizes all HR functions—recruitment, onboarding, payroll, attendance, leave, feedback, and more—in one seamless solution.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#2463eb]" />,
      title: "Robust Security & Compliance",
      description:
        "Enterprise-grade protection for your HR data, with built-in compliance for local and multi-country payroll to ensure regulations are met and risks are minimized.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#2463eb]" />,
      title: "Enhanced Engagement",
      description:
        "Tools for mood tracking, surveys, and a social platform keep employees connected and engaged.",
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-[#2463eb]" />,
      title: "Fast and Easy Implementation",
      description:
        "Quick onboarding means you can get up and running with minimal downtime.",
    },
  ];

  return (
    <section className="pb-16 sm:pb-24 lg:pb-pb-common">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="!bg-[#f4f7fa] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <Badge className="bg-white font-normal py-2 px-4 text-[#1d4ed8] mb-3 sm:mb-4 border border-[#ededed] hover:bg-transparent">
                  Better Starts here
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-hr-text-primary leading-tight mb-4 sm:mb-6">
                  Why <span className="gradient-text">OfficeKit</span> <br />
                  Stands out?
                </h2>
                <p className="text-hr-text-secondary text-base sm:text-lg leading-relaxed">
                  OfficeKit HR stands out by offering a fully integrated,
                  all-in-one platform that automates the entire employee
                  lifecycle, making HR effortless and efficient.
                </p>
              </div>

              <CtaHoverLift className="inline-block">
                <Button
                  asChild
                  variant="outline"
                  className="btn-cta gradient-text font-normal min-h-11"
                >
                  <Link to="/about-us">Learn more about OfficeKit HR</Link>
                </Button>
              </CtaHoverLift>
            </div>

            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <StaggerItem>
                  <FeatureCard {...features[0]} />
                </StaggerItem>
                <StaggerItem>
                  <FeatureCard {...features[1]} />
                </StaggerItem>
              </div>
              <div className="space-y-8 sm:mt-9">
                <StaggerItem>
                  <FeatureCard
                    {...features[2]}
                    className="h-45 flex flex-col justify-center"
                  />
                </StaggerItem>
                <StaggerItem>
                  <FeatureCard
                    {...features[3]}
                    className="h-45 flex flex-col justify-center"
                  />
                </StaggerItem>
              </div>
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
