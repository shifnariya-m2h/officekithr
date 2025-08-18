const TrustedCompanies = () => {
  const companies = [
    "Image@4x.png", "InnovateHub", "DataFlow", "CloudNine", "NextGen",
    "Digital+", "Synergy", "ProActive", "Momentum", "Catalyst",
    "Velocity", "Pinnacle", "Nexus", "Zenith", "Apex"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-xl text-foreground mb-5">
            Trusted by Leading Companies Across the Globe
          </h2>
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
                    src={`public/${index + 1}.png`}
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
                    src={`public/${index + 1}.png`}
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
