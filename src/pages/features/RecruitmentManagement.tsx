import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Search, 
  Calendar, 
  FileText, 
  UserPlus,
  BarChart3,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const RecruitmentManagement = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Candidate Filtering",
      description: "Advanced AI-powered resume parsing and candidate matching based on job requirements."
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Automated calendar integration for seamless interview coordination with all stakeholders."
    },
    {
      icon: FileText,
      title: "Offer Management",
      description: "Generate, send, and track offer letters with digital signature capabilities."
    },
    {
      icon: UserPlus,
      title: "Onboarding Workflows",
      description: "Streamlined onboarding process with automated task assignments and progress tracking."
    },
    {
      icon: BarChart3,
      title: "Recruitment Analytics",
      description: "Comprehensive reporting on hiring metrics, time-to-hire, and source effectiveness."
    },
    {
      icon: Users,
      title: "Collaborative Hiring",
      description: "Enable team-based hiring decisions with structured feedback and evaluation forms."
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 50%",
    "Improve candidate experience",
    "Centralized applicant database",
    "Automated workflow management",
    "Compliance with hiring regulations",
    "Integration with job boards"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Smart Recruitment from Job Posting to Joining
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                OfficeKit helps you attract, evaluate, and onboard top talent effortlessly. 
                Automate interview workflows, track applicants, and reduce hiring time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button className="btn-cta group">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-outline">
                    Schedule Demo
                  </Button>
                </Link>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-card rounded-3xl shadow-strong p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Recruitment Pipeline</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      15 New Applications
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { stage: "Applications", count: 127, color: "bg-blue-100 text-blue-700" },
                      { stage: "Screening", count: 45, color: "bg-yellow-100 text-yellow-700" },
                      { stage: "Interview", count: 18, color: "bg-purple-100 text-purple-700" },
                      { stage: "Offer", count: 5, color: "bg-green-100 text-green-700" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${item.color.split(' ')[0]}`}></div>
                          <span className="font-medium">{item.stage}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Time to hire: 14 days</span>
                      <span>Success rate: 84%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Complete Recruitment Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every tool you need to streamline your hiring process from start to finish.
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies that have streamlined their recruitment with OfficeKit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Pricing
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

export default RecruitmentManagement;