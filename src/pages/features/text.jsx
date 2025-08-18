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
          <div className="flex space-x-12 logo-scroll">
            {/* First Set */}
            {Array.from({ length: 12 }).map((_, index) => (
              console.log(`Rendering company logo ${index}`),
              
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div
                  className={`${
                    index === 1 ? "h-20 w-40" : "h-12 w-24"
                  } bg-none rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors`}
                >
                  <span className="text-muted-foreground font-semibold text-sm">
                    <img
                      className={`object-contain ${
                        index === 1 ? "w-36 h-14" : "w-24 h-12"
                      }`}
                      src={`public/${index + 1}.png`}
                    />
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div
                  className={`${
                    index === 1 ? "h-20 w-40" : "h-12 w-24"
                  } bg-none rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors`}
                >
                  <span className="text-muted-foreground font-semibold text-sm">
                    <img
                      className={`object-contain ${
                        index === 1 ? "w-36 h-14" : "w-24 h-12"
                      }`}
                      src={`public/${index + 1}.png`}
                    />
                  </span>
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
