import React from "react";
import { Check } from "lucide-react";
import bgImage from "../../../../public/benifitbg.jpg";
import phone from "../../../../public/chatbot.png";


function Benefits() {
  const features = [
    {
      title: "Natural, conversational interface",
    },
    {
      title: "Instant, on-demand HR actions",
    },
    {
      title: "24/7 availability",
    },
    {
      title: "Native to OfficeKit—no setup required",
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
          <h3 className="text-lg font-light mb-2">Why AI Pilot?</h3>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            AI Pilot makes OfficeKit HR not just smarter, but more human.
          </h2>
          <p className="text-gray-300 mb-8">
            Get AI-powered attendance free with OfficeKit HR's Face Recognition
            App perfect for startups and small teams, without costly systems or
            errors.
          </p>

          <ul className="space-y-4 mb-10">
            {features.map((f, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-white" />

                <span>
                  <span className="font- ">{f.title}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <a
              //   href="https://apps.apple.com/in/app/officekit-app/id1382735899"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/AppStore.svg"
                alt="Download on App Store"
                className="h-12 hover:scale-105 transition-transform"
              />
            </a>

            <a
              //   href="https://play.google.com/store/search?q=officekit&c=apps&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/playstoreButton.svg"
                alt="Get it on Play Store"
                className="h-12 hover:scale-105 transition-transform"
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
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
