import {
  UserPlus,
  Users,
  CreditCard,
  Target,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

const EssentialHRStack = () => {
  const hrTools = [
    {
      icon: UserPlus,
      title: "Recruitment & Onboarding",
      description: "Streamline hiring and automate onboarding steps.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Core HR",
      description: "Centralized employee data and lifecycle management.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: CreditCard,
      title: "Payroll Management",
      description: "Automated salary calculations, payslips, and statutory compliance.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Target,
      title: "Performance Management",
      description: "Track goals, set KPIs, and run performance reviews.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: HelpCircle,
      title: "Help Desk",
      description: "Resolve HR queries faster with an integrated support system.",
      color: "text-pink-600",
      bg: "bg-pink-50"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <div className="text-center mb-32">
            <Badge className="bg-white mb-2 text-[#1d4ed8] border border-[#ededed] hover:bg-white">
              Essential HR Stack
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-semibold text-hr-text-primary mb-3">
              How we make <span className="leading-snug gradient-text"  >HR Better </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All your HR needs in one smart, streamlined system
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hrTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="feature-card group cursor-pointer"
              >
                <div className={`${tool.bg} ${tool.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {tool.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {tool.description}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:text-primary-hover transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/features">
            <Button className="btn-cta group">
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EssentialHRStack;