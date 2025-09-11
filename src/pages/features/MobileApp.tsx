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
  Check,
  Play,
  Gift,
  UserCheck,
  Briefcase,
  CalendarCheck,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { loadSyncoraBot } from "@/components/syncoraBot";

const MobileApp = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Self Service Access",
      description:
        "Update profiles, apply for leave, regularize attendance, and download payslips instantly."
    },
    {
      icon: Briefcase,
      title: "Claims & Travel",
      description:
        "Submit, track, and approve expense claims and travel requests from your phone."
    },
    {
      icon: CalendarCheck,
      title: "Attendance & Leave",
      description:
        "Mark attendance with geo-fencing, review working hours, and manage leave approvals."
    },
    {
      icon: MessageSquare,
      title: "Feedback & Surveys",
      description:
        "Share feedback, join 360° evaluations, and respond to employee surveys anytime."
    },
    {
      icon: Gift,
      title: "Social Engagement",
      description:
        "Celebrate birthdays, anniversaries, and milestones with in-app greetings and media posts."
    },
    {
      icon: Bell,
      title: "Instant Alerts & Secure Access",
      description:
        "Receive push notifications for updates, approvals, and celebrations with enterprise-grade data protection."
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
      <section
        className="pt-40 pb-20 bg-gradient-subtle bg-cover bg-center"
        style={{
          backgroundImage: "url('/RecruitmentManagement2.png')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl font-semibold text-foreground leading-tight mb-3">
                Mobile App

              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-snug mb-6" style={{ lineHeight: 1.2 }}>
                Missed Approvals and HR Delays? <span className="gradient-text">Stay Connected, Wherever You Are. </span>

              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                OfficeKit Mobile keeps your HR tasks in your pocket—track attendance, approve requests, and manage payroll in real time, so work never waits for you. Stay informed, act instantly, and keep your team running smoothly wherever you are.

              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="btn-cta group h-[44px]">
                  <Download className="mr-2 h-4 w-4" />
                  Download on App Store
                </Button>
                <Button className="btn-outline h-[44px]">
                  <Download className="mr-2 h-4 w-4" />
                  Get it on Google Play
                </Button>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                <Button className="btn-cta h-[44px] py-[22px] group"  >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                </Link>
                <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k">
                  <Button
                    variant="outline"
                    className="btn-outline group h-[44px] px-6 group"
                  >                  <Play className="mr-2 h-4 w-4" />
                    Watch Overview
                  </Button>
                </Link>
              </div>


              {/* Benefits List */}
              {/* <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div> */}
            </div>
            {/* Mobile Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-72">
                {/* Phone Frame */}
                <div className="flex justify-center lg:justify-end">
                  <img
                    src="/mobile-mockup.png"
                    alt="Mobile App Mockup"
                  // className="w-full max-w-md shadow-lg rounded-lg"
                  />
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
            <h2 className="text-4xl font-semibold text-foreground mb-6">
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
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Download the OfficeKit App
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Available on both iOS and Android. Get started with mobile HR management today.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-cta group">
                <Download className="mr-2 h-4 w-4" />
                Download on App Store
              </Button>
              <Button className="btn-outline">
                <Download className="mr-2 h-4 w-4" />
                Get it on Google Play
              </Button>
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center" >
              <Link to="https://apps.apple.com/in/app/officekit-app/id1382735899" >
                <img className="transform hover:scale-105 ease-out duration-300" src="/AppStore.svg" alt="" />
              </Link>
              <Link to='https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN' >
                <img className="transform hover:scale-105 ease-out duration-300" src="/PlayStore.svg" alt="" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free to download • Requires OfficeKit account
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}


      <section className="py-20 bg-[#094ace] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
              Ready to Go Mobile with HR?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of companies empowering their workforce with mobile HR access.
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

export default MobileApp;