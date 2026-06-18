import { ProductBenefitsShell } from "@/components/product";

function Benefits() {
  return (
    <ProductBenefitsShell
      eyebrow="Why AI Pilot?"
      title="HR answers and actions — instantly"
      description="Employees get leave balances, payslips, and policy info through natural voice or chat — no waiting on HR tickets."
      bullets={[
        { title: "Natural conversations", desc: "voice or text" },
        { title: "Instant HR actions", desc: "leave, payslips, policies" },
        { title: "Available 24/7", desc: "always on inside OfficeKit" },
        { title: "Zero extra setup", desc: "native to your HRMS" },
      ]}
      imageSrc="/chatbot.webp"
      imageAlt="AI Pilot on mobile"
    >
      <div className="flex gap-4">
        <a
          href="https://apps.apple.com/in/app/officekit-app/id1382735899"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/AppStore.svg"
            alt="Download on App Store"
            className="h-12 hover:scale-105 transition-transform"
            loading="lazy"
          />
        </a>
        <a
          href="https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/playstoreButton.svg"
            alt="Get it on Play Store"
            className="h-12 hover:scale-105 transition-transform"
            loading="lazy"
          />
        </a>
      </div>
    </ProductBenefitsShell>
  );
}

export default Benefits;
