import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Clock,
  Download,
  Bell,
  BarChart3,
  Shield,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const MobileApp = () => {
  const features = [
    {
      icon: Clock,
      title: "Work Entry & Time Tracking",
      description: "Log work hours, clock in/out remotely with GPS verification and break time management."
    },
    {
      icon: Download,
      title: "Instant Document Access",
      description: "Download payslips, certificates, and HR documents anytime, anywhere with secure access."
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Stay updated with instant alerts for approvals, announcements, and important HR updates."
    },
    {
      icon: BarChart3,
      title: "Personal Dashboard",
      description: "View attendance summary, leave balances, and performance metrics in personalized dashboards."
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Biometric authentication and encrypted data transmission ensure your information stays safe."
    },
    {
      icon: Smartphone,
      title: "Offline Capability",
      description: "Core features work offline, syncing automatically when connection is restored."
    }
  ];

  const benefits = [
    "iOS & Android support",
    "GPS-based attendance",
    "Push notifications",
    "Offline functionality",
    "Biometric security",
    "Real-time sync"
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
                Manage HR on the Go
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                OfficeKit's mobile app brings full HR functionality to your fingertips —
                anywhere, anytime. Perfect for remote teams and on-the-go employees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="btn-cta group">
                  <Download className="mr-2 h-4 w-4" />
                  Download on App Store
                </Button>
                <Button className="btn-outline">
                  <Download className="mr-2 h-4 w-4" />
                  Get it on Google Play
                </Button>
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

            {/* Mobile Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative mx-auto w-80">
                {/* Phone Frame */}
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-strong">
                  <div className="bg-card rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-primary text-primary-foreground px-6 py-3 flex justify-between items-center text-sm">
                      <span>9:41</span>
                      <span>OfficeKit</span>
                      <span>100%</span>
                    </div>

                    {/* App Content */}
                    <div className="p-6 space-y-4">
                      <div className="text-center">
                        <h3 className="font-semibold text-lg mb-2">Good Morning, Sarah!</h3>
                        <p className="text-muted-foreground text-sm">Ready to start your day?</p>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                          <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-green-700">Clock In</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-200">
                          <Download className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-blue-700">Payslip</div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">Leave Balance</span>
                          <span className="font-semibold">12 days</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">This Month</span>
                          <span className="font-semibold">22/23 days</span>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div>
                        <h4 className="font-medium mb-3">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Clocked in at 9:15 AM</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Leave request approved</span>
                          </div>
                        </div>
                      </div>
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
              Full HR Experience on Mobile
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access all essential HR features from your smartphone with a native, intuitive experience.
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

      {/* Download Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Download the OfficeKit App
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Available on both iOS and Android. Get started with mobile HR management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cta group">
                <Download className="mr-2 h-4 w-4" />
                Download on App Store
              </Button>
              <Button className="btn-outline">
                <Download className="mr-2 h-4 w-4" />
                Get it on Google Play
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free to download • Requires OfficeKit account
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Go Mobile with HR?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies empowering their workforce with mobile HR access.
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

export default MobileApp;