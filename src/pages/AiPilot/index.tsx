import Navigation from "@/components/Navigation";
import HeroSection from "./components/Herosection";
import HowWorks from "./components/how-work";
import Benifits from "./components/Benifits";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { productSchema } from "@/seo/schema";
import { canonicalUrl } from "@/seo/site-config";

const PAGE_PATH = "/features/ai-pilot";

const AiPilot = () => {
  const url = canonicalUrl(PAGE_PATH);

  return (
    <PageShell
      title="AI Pilot for HR Automation | OfficeKit HR"
      description="Automate repetitive HR tasks with OfficeKit AI Pilot — smart voice and text workflows for modern HR teams."
      path={PAGE_PATH}
      schemaNodes={[
        productSchema({
          name: "AI Pilot — OfficeKit HR",
          description:
            "AI-powered voice and text assistant built into OfficeKit HR for leave, payslips, policies, and everyday HR tasks.",
          url,
        }),
      ]}
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <HowWorks />
        <Benifits />
        <Footer />
      </div>
    </PageShell>
  );
};

export default AiPilot;