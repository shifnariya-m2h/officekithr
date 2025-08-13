import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Shield, 
  CreditCard, 
  FileText, 
  TrendingUp,
  Clock,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const PayrollAndCompliance = () => {
  const features = [
    {
      icon: Calculator,
      title: "Automated Salary Calculations",
      description: "Intelligent payroll engine that handles complex salary structures, deductions, and bonuses automatically."
    },
    {
      icon: Shield,
      title: "Statutory Compliance",
      description: "Stay compliant with PF, ESI, TDS, and other statutory requirements with automatic updates."
    },
    {
      icon: CreditCard,
      title: "Direct Bank Transfers",
      description: "Secure and instant salary transfers with detailed transaction tracking and confirmations."
    },
    {
      icon: FileText,
      title: "Digital Payslips",
      description: "Generate and distribute professional payslips with detailed breakdown and tax calculations."
    },
    {
      icon: TrendingUp,
      title: "Payroll Analytics",
      description: "Comprehensive reporting on salary trends, cost analysis, and budget planning insights."
    },
    {
      icon: Clock,
      title: "Time-based Processing",
      description: "Automated processing based on attendance, overtime, and leave data integration."
    }
  ];

  const benefits = [
    "100% accurate calculations",
    "Statutory compliance assured",
    "Instant salary transfers",
    "Digital payslip generation",
    "Tax optimization support",
    "Multi-location payroll"
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
                Error-Free Payroll, Always On Time
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Automate salary calculations, deductions, and tax compliance with a secure, 
                integrated payroll engine that ensures accuracy and timeliness.
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
                    <h3 className="text-lg font-semibold">Payroll Dashboard</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Processing Complete
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <div className="text-2xl font-bold text-blue-700">₹45.2L</div>
                        <div className="text-sm text-blue-600">Total Payroll</div>
                      </div>
                      <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                        <div className="text-2xl font-bold text-green-700">156</div>
                        <div className="text-sm text-green-600">Employees</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { label: "Gross Salary", amount: "₹52.8L", type: "positive" },
                        { label: "PF Deduction", amount: "₹4.2L", type: "deduction" },
                        { label: "TDS", amount: "₹2.8L", type: "deduction" },
                        { label: "ESI", amount: "₹0.6L", type: "deduction" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                          <span className="font-medium">{item.label}</span>
                          <span className={`font-semibold ${
                            item.type === 'positive' ? 'text-green-600' : 
                            item.type === 'deduction' ? 'text-red-600' : 'text-foreground'
                          }`}>
                            {item.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Next run: 1st March</span>
                      <span>Compliance: 100%</span>
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
              Complete Payroll Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From salary calculations to statutory compliance, handle all aspects of payroll effortlessly.
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
              Ready to Automate Your Payroll?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies processing accurate, compliant payroll with OfficeKit.
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

export default PayrollAndCompliance;