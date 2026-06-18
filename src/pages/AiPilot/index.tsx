import Navigation from "@/components/Navigation";
import HeroSection from "./components/Herosection";
import HowWorks from "./components/how-work";
import Benifits from "./components/Benifits";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { productSchema } from "@/seo/schema";
import { canonicalUrl } from "@/seo/site-config";
import { ProductPageShell } from "@/components/product";

const PAGE_PATH = "/features/ai-pilot";

const AiPilot = () => {
  const url = canonicalUrl(PAGE_PATH);

  return (
    <PageShell
      title="AI Pilot — AI HR Assistant | OfficeKit HR"
      description="Automate employee queries, leave, payslips, and workforce insights with AI Pilot — voice and chat built into OfficeKit HR."
      path={PAGE_PATH}
      schemaNodes={[
        productSchema({
          name: "AI Pilot — OfficeKit HR",
          description:
            "AI-powered voice and text assistant for leave, payslips, policies, and everyday HR tasks.",
          url,
        }),
      ]}
    >
      <ProductPageShell>
        <Navigation />
        <main id="main-content">
          <HeroSection />
          <HowWorks />
          <Benifits />
        </main>
        <Footer />
      </ProductPageShell>
    </PageShell>
  );
};

export default AiPilot;
