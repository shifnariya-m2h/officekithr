import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Users,
  BarChart3,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const AttendanceAndLeave = () => {
  const features = [
    {
      icon: Clock,
      title: "Geo-fenced Clock-in/out",
      description: "Secure location-based attendance tracking with GPS verification and office boundary checks."
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Comprehensive leave tracking with automated approvals, balance calculations, and policy enforcement."
    },
    {
      icon: MapPin,
      title: "Remote Work Tracking",
      description: "Monitor remote employee attendance with flexible check-in options and productivity insights."
    },
    {
      icon: CheckCircle,
      title: "Approval Workflows",
      description: "Customizable approval chains for leave requests with instant notifications and status updates."
    },
    {
      icon: Users,
      title: "Team Calendar",
      description: "Visual team availability overview with holiday planning and resource allocation insights."
    },
    {
      icon: BarChart3,
      title: "Attendance Analytics",
      description: "Detailed reports on attendance patterns, absenteeism trends, and workforce productivity metrics."
    }
  ];

  const benefits = [
    "Real-time attendance tracking",
    "Automated leave calculations",
    "Compliance with labor laws",
    "Mobile app integration",
    "Overtime management",
    "Holiday calendar sync"
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
                Simplify Attendance and Leave Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Track employee time and manage leave policies with ease. Fully customizable 
                settings ensure you stay compliant and flexible.
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
                    <h3 className="text-lg font-semibold">Team Attendance</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      98% Present Today
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Sarah Johnson", status: "Present", time: "9:15 AM", color: "bg-green-100 text-green-700" },
                      { name: "Mike Chen", status: "On Leave", time: "Sick Leave", color: "bg-yellow-100 text-yellow-700" },
                      { name: "Emily Rodriguez", status: "Present", time: "8:45 AM", color: "bg-green-100 text-green-700" },
                      { name: "David Kumar", status: "Remote", time: "9:30 AM", color: "bg-blue-100 text-blue-700" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${item.color.split(' ')[0]}`}></div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                            {item.status}
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Total employees: 156</span>
                      <span>Avg. attendance: 94%</span>
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
              Complete Attendance Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track time, manage leaves, and maintain compliance.
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
              Ready to Streamline Time Tracking?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies managing attendance effortlessly with OfficeKit.
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

export default AttendanceAndLeave;