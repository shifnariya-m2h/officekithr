import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navigation />

      {/* ✅ Main content area grows to fill space */}
      <main className="flex-grow container mx-auto px-6 py-40 text-gray-800 leading-relaxed">
        <h1 className="text-5xl font-bold mb-6 ">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: 20 Aug 2025</p>

        <p className="mb-6">
          Welcome to <strong>OfficeKit</strong>! We’re glad you’re here. OfficeKit
          is a comprehensive HRMS platform built to simplify and streamline human
          resource operations for businesses in India, the UAE, and beyond. As
          part of delivering our Services, we are committed to respecting and
          protecting your privacy.
        </p>

        <p className="mb-6">
          This Privacy Policy outlines how we collect, use, store, share, and
          protect your personal information when you interact with our website{" "}
          <span className="text-primary">officekithr.com</span> and use our HRMS
          software and related services (collectively referred to as the
          “Services”).
        </p>

        <p className="mb-6">
          By accessing or using OfficeKit, you agree to the practices described in
          this Privacy Policy. Please read carefully to understand your rights and
          how we handle your data.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>
        <h3 className="text-lg font-semibold mb-2">1.1 Information You Provide</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Account Setup:</strong> Name, email, phone, company name, and
            designation.
          </li>
          <li>
            <strong>Profile Enrichment:</strong> Optional details such as profile
            photo, department, and contact details.
          </li>
          <li>
            <strong>Communication Records:</strong> Messages with our team,
            feedback, or inquiries.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          1.2 Information Collected Automatically
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>User Activity:</strong> Navigation behavior, access times,
            feature engagement.
          </li>
          <li>
            <strong>Technical Data:</strong> Device type, IP address, browser, OS,
            and identifiers for performance/diagnostics.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> Used for analytics, performance,
            and user experience. You may adjust these in browser settings.
          </li>
        </ul>

        {/* 2. How We Use Your Information */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Delivering and improving services.</li>
          <li>Customer support, updates, and communication.</li>
          <li>Personalizing dashboards and user experiences.</li>
          <li>Ensuring compliance, fraud prevention, and security.</li>
        </ul>

        {/* 3. Information Sharing */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Information Sharing Practices
        </h2>
        <p className="mb-4">
          We do not sell your personal data. We may share data only:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Authorized Service Providers:</strong> Hosting, analytics,
            support, or integration partners bound by confidentiality.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law or valid legal
            processes.
          </li>
          <li>
            <strong>Business Events:</strong> In case of mergers, acquisitions, or
            restructuring.
          </li>
        </ul>

        {/* 4. Your Rights */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Your Data Rights</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access a copy of your stored data.</li>
          <li>Request updates or corrections.</li>
          <li>Request deletion (subject to legal constraints).</li>
          <li>Limit or object to certain processing activities.</li>
        </ul>
        <p className="mb-6">
          To exercise your rights, contact us at{" "}
          <span className="font-medium">hello@officekithr.com</span>.
        </p>

        {/* 5. Security */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Data Protection and Security
        </h2>
        <p className="mb-6">
          We implement industry-standard security measures to protect your data.
          However, no system is completely secure, and we encourage users to
          follow best practices.
        </p>

        {/* 6. Cross-Border */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Cross-Border Data Transfers
        </h2>
        <p className="mb-6">
          OfficeKit operates from India and the UAE. Your data may be transferred
          across borders with safeguards to ensure protection.
        </p>

        {/* 7. Policy Updates */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Policy Updates
        </h2>
        <p className="mb-6">
          We may revise this policy from time to time. Updates will be posted on
          our site with the latest effective date. Please review periodically.
        </p>
        {/* 8. Location Data */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Location Data
        </h2>
        <p className="mb-6">
          When you use our Services, we may collect and process your device’s location information. This data is used to enable attendance marking via geofencing.
          You can choose to enable or disable location permissions at any time through your device settings. We do not sell your location information to third parties. Location data may only be shared with authorized service providers or as required by law, as outlined in Section 3 of this Privacy Policy
        </p>
        {/* 9. Policy Updates */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. Target audience and content
        </h2>
        <p className="mb-6">

          Our Services are intended for individuals aged 18 and above. We do not knowingly collect personal information from children under 13.
          We collect information you provide directly (such as name, email, phone, company details, profile information, and communications with our team) as well as information collected automatically (such as usage activity, device and technical data, IP address, cookies, and tracking data for analytics and performance). This information is used solely to deliver and improve our Services and is not used for any purposes beyond those described in this Privacy Policy.        </p>

        {/* 10. Contact */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Contact Information
        </h2>
        <p className="mb-2">
          📧 <strong>Email:</strong> hello@officekithr.com
        </p>
        <p className="mb-2">
          📍 <strong>India Office:</strong> OfficeKit HRMS, Ground Floor, Cyber
          Park, Calicut - 673016 <br /> 📞 +91 7994154069
        </p>
        <p className="mb-2">
          📍 <strong>UAE Office:</strong>  #105, Bushager Building ,
          13 55 St-Al Garhoud-Dubai <br /> 📞 +971 52 815 5771
        </p>

        <p className="mt-10 font-medium">
          Thank you for trusting OfficeKit. Your privacy matters to us.
        </p>
      </main>

      {/* ✅ Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
