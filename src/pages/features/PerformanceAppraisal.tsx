import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Target,
  TrendingUp,
  Users,
  Calendar,
  Award,
  BarChart3,
  ArrowRight,
  Check,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";
import { loadSyncoraBot } from "@/components/syncoraBot";

const PerformanceAppraisal = () => {
  const features = [
    {
      icon: Target,
      title: "Goal Creation",
      description: "Define and align individual and team goals with organizational objectives."
    },
    {
      icon: TrendingUp,
      title: "Assessment Planning",
      description: "Create structured evaluation plans to measure performance effectively."
    },
    {
      icon: Users,
      title: "360° Evaluation",
      description: " Get well-rounded insights with feedback from managers, peers, and subordinates."
    },
    {
      icon: Calendar,
      title: "Peer Feedback",
      description: " Encouragea culture of collaboration and improvement through constructive feedback among colleagues."
    },
    {
      icon: Award,
      title: "IDP Recommendation",
      description: " Provide personalized Individual Development Plans to guide employee growth."
    },
    // {
    //   icon: BarChart3,
    //   title: "Performance Analytics",
    //   description: "Visual dashboards and reports to identify top performers, skill gaps, and improvement areas."
    // }
  ];

  const benefits = [
    "Fair & transparent reviews",
    "Data-driven insights",
    "Goal alignment tracking",
    "Skill gap identification",
    "Career development planning",
    "Performance-based decisions"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-40 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.png')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground leading-tight mb-3">
              Performance Management

            </h3>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-snug mb-6" style={{ lineHeight: 1.2 }}>
              From Average to Exceptional Make <br/>
              <span className="gradient-text">Every Review Count.   </span>

            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Don’t let vague reviews and unclear goals hold your team back. OfficeKit HR helps you set clear objectives, track progress, and give helpful feedback. This turns every performance review into real growth.              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* <Link to="/contact"> */}
              <Link to="/contact" >
              <Button className="btn-cta h-[44px] py-[22px] group" >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
              {/* </Link> */}
              <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k">
                <Button
                  variant="outline"
                  className="btn-outline group h-[44px] px-6 group"
                >                  <Play className="mr-2 h-4 w-4" />
                  Watch Overview
                </Button>
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Complete Performance Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From goal setting to performance reviews, drive excellence across <br></br> your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card text-center group">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}


      <section className="py-20 bg-[#094ace] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
              Ready to Drive Performance Excellence?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies building high-performance cultures with OfficeKit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 ">
              <Link to="/contact">
                <Button className="btn-cta hover:bg-white bg-white text-primary h-[44px] py-[22px] group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="btn-outline h-[44px] px-6 group bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PerformanceAppraisal;