import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-grow container mx-auto px-6 py-40 text-gray-800 leading-relaxed max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective date: 25 May 2026</p>

        <p className="mb-6">
          This Cookie Policy explains how <strong>OfficeKit HR</strong> uses cookies
          and similar technologies when you visit{" "}
          <a href="https://www.officekithr.com" className="text-primary">
            www.officekithr.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What we use cookies for</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Essential:</strong> site functionality and security (always active).
          </li>
          <li>
            <strong>Analytics:</strong> Google Analytics to understand traffic and improve
            the site (only after you accept cookies).
          </li>
          <li>
            <strong>Marketing:</strong> Google Ads conversion tracking (only after consent).
          </li>
          <li>
            <strong>Support chat:</strong> Tawk.to live chat widget (loaded after page idle).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Your choices</h2>
        <p className="mb-6">
          When you first visit, you can accept or reject non-essential cookies via
          the banner. You can change your choice anytime by clearing site data in your
          browser or contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">More information</h2>
        <p className="mb-6">
          See our{" "}
          <Link to="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>{" "}
          for how we process personal data. Questions:{" "}
          <a href="mailto:hello@officekithr.com" className="text-primary">
            hello@officekithr.com
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default CookiePolicy;
