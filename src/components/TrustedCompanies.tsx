import React from "react";

const TrustedCompaniesShowcase = () => {
  const logos = Array.from({ length: 18 }, (_, i) => `/${i + 1}.png`);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-2xl lg:text-2xl font-semibold text-hr-text-primary">
            Trusted by Leading Companies{" "}
            <span className="leading-snug gradient-text text-4xl font-semibold">
              Across the Globe
            </span>
          </h1>
        </div>

        {/* ======== CENTERED GRID (inline-grid method) ========
            Why: inline-grid makes the grid shrink to its content width.
            The parent (.text-center) then centers that inline-grid so the last row is centered.
        */}
        <div className="text-center">
          <div
            className="
              inline-grid
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              gap-10
              place-items-center
            "
          >
            {logos.map((src, i) => (
              <div
                key={i}
                className="relative group flex items-center justify-center w-36 h-20 lg:w-40 lg:h-24 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl transition-all duration-500 rounded-xl"></div>

                {/* Logo */}
                <img
                  src={src}
                  alt={`Company ${i + 1}`}
                  className="relative z-10 h-12 w-auto object-contain group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

   

        {/* Bottom text */}
        <div className="text-center mt-14">
          <p className="text-gray-600 text-sm lg:text-base font-medium">
            Powering innovation for companies across industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesShowcase;
