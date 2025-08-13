import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, X, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹299",
      period: "per user/month",
      description: "Perfect for small teams getting started with HR automation",
      maxUsers: "Up to 25 employees",
      popular: false,
      features: [
        "Core HR Management",
        "Attendance & Leave Tracking", 
        "Employee Self-Service Portal",
        "Basic Reporting",
        "Email Support",
        "Mobile App Access"
      ],
      notIncluded: [
        "Payroll Processing",
        "Performance Management",
        "Advanced Analytics",
        "API Access",
        "Priority Support"
      ]
    },
    {
      name: "Growth",
      price: "₹599",
      period: "per user/month",
      description: "Comprehensive HR solution for growing businesses",
      maxUsers: "25-100 employees",
      popular: true,
      features: [
        "Everything in Starter",
        "Payroll Processing & Compliance",
        "Performance Management",
        "Advanced Reporting & Analytics",
        "Document Management",
        "API Integration",
        "Phone & Chat Support",
        "Custom Workflows"
      ],
      notIncluded: [
        "Dedicated Account Manager",
        "Custom Integrations",
        "Advanced Security Features"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Advanced HR platform for large organizations",
      maxUsers: "100+ employees",
      popular: false,
      features: [
        "Everything in Growth",
        "Advanced Security & Compliance",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Priority Support (24/7)",
        "Advanced Analytics & BI",
        "Multi-location Support",
        "SSO Integration",
        "Custom Training",
        "SLA Guarantee"
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for Starter and Growth plans. Enterprise plans include complimentary setup and migration assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can set up invoicing for Enterprise customers."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Save 20% when you pay annually on any plan. Contact us for multi-year discount options."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Simple Pricing for Every Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose a plan that fits your organization. No hidden fees, just value.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>14-day free trial</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>No setup fees</span>
              </span>
              <span className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cancel anytime</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-strong scale-105' 
                    : 'border-border shadow-medium'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <p className="text-sm font-medium text-primary">{plan.maxUsers}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    {plan.name === "Enterprise" ? (
                      <Link to="/contact">
                        <Button className="w-full btn-cta">Contact Sales</Button>
                      </Link>
                    ) : (
                      <Link to="/contact">
                        <Button 
                          className={`w-full ${
                            plan.popular ? 'btn-cta' : 'btn-outline'
                          }`}
                        >
                          Start Free Trial
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Compare Plans</h2>
            <p className="text-xl text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-medium">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-foreground font-semibold">Features</th>
                  <th className="text-center p-6 text-foreground font-semibold">Starter</th>
                  <th className="text-center p-6 text-foreground font-semibold">Growth</th>
                  <th className="text-center p-6 text-foreground font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Core HR Management", true, true, true],
                  ["Attendance & Leave", true, true, true],
                  ["Payroll Processing", false, true, true],
                  ["Performance Management", false, true, true],
                  ["Advanced Analytics", false, true, true],
                  ["API Access", false, true, true],
                  ["Custom Integrations", false, false, true],
                  ["24/7 Priority Support", false, false, true]
                ].map(([feature, starter, growth, enterprise], index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-6 text-foreground">{feature}</td>
                    <td className="p-6 text-center">
                      {starter ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {growth ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {enterprise ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Pricing FAQ</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;