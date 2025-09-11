
import { TypeAnimation } from "react-type-animation";

const TrustedCompanies = () => {
  const companies = [
    "Image@4x.png", "InnovateHub", "DataFlow", "CloudNine", "NextGen",
    "Digital+", "Synergy", "ProActive", "Momentum", "Catalyst",
    "Velocity", "Pinnacle", "Nexus", "Zenith", "Apex"
  ];

  return (
    <section className="py-pb-common bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-2xl lg:text-2xl font-semibold text-hr-text-primary">
            Trusted by Leading Companies  <span className="leading-snug gradient-text text-4xl font-semibold"  > Across the Globe</span>
          </h1>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-10 logo-scroll">
            {/* First Set */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-12 w-28 flex items-center justify-center hover:border-primary/30 transition-colors">
                  <img
                    className="object-contain w-24 h-12"
                    src={`/${index + 1}.png`}
                    alt={`Company ${index + 1}`}
                  />
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-12 w-28 flex items-center justify-center hover:border-primary/30 transition-colors">
                  <img
                    className="object-contain w-24 h-12"
                    src={`/${index + 1}.png`}
                    alt={`Company ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
