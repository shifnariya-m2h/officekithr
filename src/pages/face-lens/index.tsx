import Navigation from "@/components/Navigation";
import HeroSection from "./components/Herosection";
import HowWorks from "./components/how-work";
import Benifits from "./components/Benifits";
import Footer from "@/components/Footer";
import { PageShell } from "@/seo/PageShell";
import { FeatureSeoIntro } from "@/components/seo/FeatureSeoIntro";
import { productSchema } from "@/seo/schema";
import { canonicalUrl } from "@/seo/site-config";
import { ProductPageShell } from "@/components/product";
import { PAGE_GEO_BY_PATH } from "@/data/page-faqs";
import { getRouteSeo } from "@/seo/route-seo";

const PAGE_PATH = "/features/face-kit";

const FaceLens = () => {
  const url = canonicalUrl(PAGE_PATH);
  const routeSeo = getRouteSeo(PAGE_PATH);
  const geo = PAGE_GEO_BY_PATH[PAGE_PATH];

  return (
    <PageShell
      title={routeSeo.title}
      description={routeSeo.description}
      path={PAGE_PATH}
      faqs={geo?.faqs}
      schemaNodes={[
        productSchema({
          name: "Face Kit — OfficeKit HR",
          description:
            "AI face scan attendance app with touchless check-in, synced to OfficeKit HR payroll and reports.",
          url,
        }),
      ]}
    >
      <ProductPageShell>
        <Navigation />
        <main id="main-content">
          <HeroSection />
          <FeatureSeoIntro path={PAGE_PATH} />
          <HowWorks />
          <Benifits />
        </main>
        <Footer />
      </ProductPageShell>
    </PageShell>
  );
};

export default FaceLens;
