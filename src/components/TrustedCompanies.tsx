const TrustedCompanies = () => {
  const companies = [
    "Image@4x.png", "InnovateHub", "DataFlow", "CloudNine", "NextGen",
    "Digital+", "Synergy", "ProActive", "Momentum", "Catalyst",
    "Velocity", "Pinnacle", "Nexus", "Zenith", "Apex"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto ">
        <div className="text-center mb-14">
          <h2 className="text-xl text-foreground mb-5">
            Trusted by Leading Companies Across the Globe
          </h2>
          {/* <p className="text-muted-foreground">
            Join thousands of companies that trust OfficeKit for their HR management
          </p> */}
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 logo-scroll ">
            {/* First Set */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-12 w-100 bg-none rounded-lg flex items-center justify-center  hover:border-primary/30 transition-colors">
                  <span className="text-muted-foreground font-semibold text-sm">
                    {/* {company} */}
                    <img className="object-contain w-100 h-12 " src={`public/${index + 1}.png`} />
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="h-12 w-100 bg-none rounded-lg flex items-center justify-center  hover:border-primary/30 transition-colors">
                  <span className="text-muted-foreground font-semibold text-sm">
                    {/* {company} */}
                    <img className="object-contain w-100 h-12 " src={`public/${index + 1}.png`} />
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