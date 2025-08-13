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
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const PerformanceAppraisal = () => {
  const features = [
    {
      icon: Target,
      title: "Goal Setting & KPIs",
      description: "Set SMART goals, define KPIs, and track progress with real-time updates and milestone tracking."
    },
    {
      icon: TrendingUp,
      title: "360-Degree Reviews",
      description: "Comprehensive feedback from peers, subordinates, and supervisors for holistic performance evaluation."
    },
    {
      icon: Users,
      title: "Self & Manager Reviews",
      description: "Structured self-assessment and manager evaluation forms with customizable rating scales."
    },
    {
      icon: Calendar,
      title: "Custom Appraisal Cycles",
      description: "Flexible review cycles - annual, bi-annual, quarterly, or custom periods based on your needs."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Built-in recognition system to celebrate achievements and link performance to rewards."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Visual dashboards and reports to identify top performers, skill gaps, and improvement areas."
    }
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
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Performance That Drives Growth
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Set goals, track KPIs, and conduct fair, transparent reviews to unlock 
                your team's full potential and drive organizational success.
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
                    <h3 className="text-lg font-semibold">Performance Dashboard</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Q4 Review Active
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <div className="text-2xl font-bold text-blue-700">4.2/5</div>
                        <div className="text-sm text-blue-600">Avg. Rating</div>
                      </div>
                      <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                        <div className="text-2xl font-bold text-green-700">89%</div>
                        <div className="text-sm text-green-600">Goal Achievement</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { goal: "Sales Target", progress: 95, status: "Excellent" },
                        { goal: "Project Delivery", progress: 88, status: "Good" },
                        { goal: "Team Collaboration", progress: 92, status: "Excellent" },
                        { goal: "Skill Development", progress: 76, status: "Satisfactory" }
                      ].map((item, i) => (
                        <div key={i} className="p-3 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{item.goal}</span>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              item.progress >= 90 ? 'bg-green-100 text-green-700' :
                              item.progress >= 80 ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{item.progress}% Complete</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Next review: March 15</span>
                      <span>Reviews completed: 142/156</span>
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
              Complete Performance Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From goal setting to performance reviews, drive excellence across your organization.
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
              Ready to Drive Performance Excellence?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies building high-performance cultures with OfficeKit.
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

export default PerformanceAppraisal;