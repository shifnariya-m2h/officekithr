import React from "react";
import { Check } from "lucide-react";
const bgImage = "/benifitbg.webp";
const phone = "/benifit-hero-removebg.webp";
 

function Benefits() {
  const features = [
    {
      title: "Free for all firms",
      desc: "No licensing cost upto 25 users",
    },
    {
      title: "Seamless setup",
      desc: "launch in minutes without IT involvement.",
    },
    {
      title: "Accurate records",
      desc: "Say goodbye to buddy punching and errors",
    },
    {
      title: "Secure data",
      desc: "Employee details are encrypted and privacy-protected",
    },
  ];

  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto grid lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div>
          <h3 className="text-lg font-light mb-2">Benefits of  Face Kit App</h3>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Get the  Face Kit App, full features, completely FREE.
          </h2>
          <p className="text-gray-300 mb-8">
            Get AI-powered attendance free with OfficeKit HR's Face Recognition
            App perfect for startups and small teams, without costly systems or
            errors.
          </p>

          <ul className="space-y-4 mb-10">
            {features.map((f, i) => (
              <li key={i} className="flex gap-3 items-start">
                           <Check className="w-4 h-4 text-white" />

                <span>
                  <span className="font-semibold">{f.title}</span> - {f.desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <a
              href="https://apps.apple.com/in/app/facekit/id6753619593"
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
              href="https://play.google.com/store/apps/details?id=com.officekitlence&hl=en_IN"
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
        </div>

        {/* Right Content - Phone */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={phone}
            alt="Phone mockup"
            className="w-[60%] md:w-[50%] lg:w-[45%] xl:w-[65%] h-auto "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
