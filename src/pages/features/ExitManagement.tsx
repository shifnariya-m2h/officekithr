import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  UserMinus, 
  ClipboardList, 
  MessageCircle, 
  Calculator, 
  BarChart3,
  Shield,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const ExitManagement = () => {
  const features = [
    {
      icon: UserMinus,
      title: "Notice Period Tracking",
      description: "Automated tracking of resignation dates, notice periods, and last working day calculations."
    },
    {
      icon: MessageCircle,
      title: "Exit Interviews",
      description: "Structured exit interview process with customizable questionnaires and feedback collection."
    },
    {
      icon: ClipboardList,
      title: "Clearance Checklists",
      description: "Department-wise clearance workflows ensuring all assets and responsibilities are transferred."
    },
    {
      icon: Calculator,
      title: "Final Settlement",
      description: "Automated calculation of final dues including salary, benefits, and deductions processing."
    },
    {
      icon: BarChart3,
      title: "Exit Analytics",
      description: "Insights into turnover patterns, exit reasons, and retention opportunities for improvement."
    },
    {
      icon: Shield,
      title: "Knowledge Transfer",
      description: "Structured handover process ensuring critical knowledge and responsibilities are documented."
    }
  ];

  const benefits = [
    "Streamlined exit process",
    "Complete asset tracking",
    "Automated settlements",
    "Compliance documentation",
    "Knowledge preservation",
    "Analytics-driven insights"
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
                Smooth & Transparent Exit Process
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Manage resignations, clearances, and knowledge transfers easily with a 
                structured and trackable exit workflow that ensures positive endings.
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
                    <h3 className="text-lg font-semibold">Exit Workflow</h3>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      3 Active Exits
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        employee: "John Smith", 
                        stage: "Exit Interview", 
                        progress: 75, 
                        daysLeft: 5,
                        status: "In Progress"
                      },
                      { 
                        employee: "Maria Garcia", 
                        stage: "Final Settlement", 
                        progress: 90, 
                        daysLeft: 2,
                        status: "Almost Complete"
                      },
                      { 
                        employee: "Alex Chen", 
                        stage: "Clearance", 
                        progress: 45, 
                        daysLeft: 12,
                        status: "Pending Approvals"
                      }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg border border-border">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-medium">{item.employee}</div>
                            <div className="text-sm text-muted-foreground">{item.stage}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{item.daysLeft} days left</div>
                            <div className={`text-xs px-2 py-1 rounded-full ${
                              item.progress >= 80 ? 'bg-green-100 text-green-700' :
                              item.progress >= 50 ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {item.status}
                            </div>
                          </div>
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
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Total exits this month: 8</span>
                      <span>Avg. completion time: 12 days</span>
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
              Complete Exit Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From resignation to final settlement, manage the entire exit journey professionally.
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
              Ready to Improve Your Exit Process?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies managing smooth, professional exits with OfficeKit.
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

export default ExitManagement;