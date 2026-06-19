import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { SeoHeroBanner } from "@/components/seo/SeoHeroBanner";
import { FeatureSeoIntro } from "@/components/seo/FeatureSeoIntro";
import { Button } from "@/components/ui/button";
import {
  Users,
  Search,
  Calendar,
  FileText,
  UserPlus,
  BarChart3,
  ArrowRight,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { productSchema } from "@/seo/schema";
import { canonicalUrl } from "@/seo/site-config";
import { PAGE_GEO_BY_PATH } from "@/data/page-faqs";
import { getRouteSeo } from "@/seo/route-seo";

const PAGE_PATH = "/features/recruitment-management";

const RecruitmentManagement = () => {
  const geo = PAGE_GEO_BY_PATH[PAGE_PATH];
  const routeSeo = getRouteSeo(PAGE_PATH);

  const features = [
    {
      icon: Search,
      title: "Talent Requisition",
      description: "Create job requisitions for all hiring needs.",
    },
    {
      icon: Calendar,
      title: "Job Posting",
      description: "Post openings on the right boards instantly.",
    },
    {
      icon: FileText,
      title: "Centralised Talent Pipeline",
      description: "Track and manage candidates in one view.",
    },
    {
      icon: UserPlus,
      title: "Interview & Selection",
      description: "Schedule panels and communicate effortlessly.",
    },
    {
      icon: BarChart3,
      title: "Offer Management",
      description: "Send, track, and finalize offers with ease.",
    },
    {
      icon: Users,
      title: "Paperless Onboarding",
      description: "Deliver a smooth digital self onboarding experience for every hire.",
    },
  ];

  const url = canonicalUrl(PAGE_PATH);

  return (
    <PageShell
      title={routeSeo.title}
      description={routeSeo.description}
      path={PAGE_PATH}
      faqs={geo?.faqs}
      schemaNodes={[
        productSchema({
          name: "Recruitment Management — OfficeKit HR",
          description:
            "Applicant tracking, hiring workflows, and onboarding connected to core HR in OfficeKit HR.",
          url,
        }),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />

        <SeoHeroBanner
          eyebrow="Recruitment Management"
          title={
            <>
              Stop losing top talent to slow processes – make every hire count with{" "}
              <span className="gradient-text">OfficeKit HR</span>
            </>
          }
          subtitle="Slow hiring processes make you lose top talent. OfficeKit HR streamlines recruitment, automates approvals, and keeps your hiring fast and efficient—so you never miss out on the right candidate. Track applications in real time, collaborate with your team, and make data-driven hiring decisions from one platform."
        >
          <Button asChild className="btn-cta h-[48px] px-6 group">
            <Link to="/contact">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="btn-outline h-[48px] px-6 group">
            <Link to="https://www.youtube.com/watch?v=Tposa0O5s_k">
              <Play className="mr-2 h-5 w-5" />
              Watch Overview
            </Link>
          </Button>
        </SeoHeroBanner>

        <FeatureSeoIntro path={PAGE_PATH} />

        <section className="py-20 bg-background" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-4xl font-semibold text-foreground mb-6">
                Complete Recruitment Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every tool you need to streamline your hiring process from start to finish.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="feature-card text-center group">
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

        <section className="py-20 bg-[#094ace] text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold mb-6">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join thousands of companies that have streamlined their recruitment with
                OfficeKit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
    </PageShell>
  );
};

export default RecruitmentManagement;
