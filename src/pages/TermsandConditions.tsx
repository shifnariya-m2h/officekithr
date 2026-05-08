import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navigation />

      {/* ✅ Main content area grows to fill space */}
      <main className="flex-grow container mx-auto px-6 py-40 text-gray-800 leading-relaxed">
        <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: 20 Aug 2025</p>

        <p className="mb-6">
          Welcome to <strong>OfficeKit</strong>! These Terms of Service (“Terms”)
          govern your access to and use of the OfficeKit HRMS platform and our
          website (<span className="text-primary">officekithr.com</span>). By
          using our Services, you agree to these Terms and our Privacy Policy. If
          you do not agree, please do not use our Services.
        </p>

        {/* 1. Acceptance of Terms */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="mb-6">
          By accessing the OfficeKit website or using our HRMS software
          (“Services”), you agree to these Terms and acknowledge our Privacy
          Policy. These Terms form a binding agreement between you and OfficeKit
          HRMS (“we,” “us,” or “our”).
        </p>

        {/* 2. Eligibility */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Eligibility</h2>
        <p className="mb-6">
          You must be at least 18 years old and legally capable of entering into a
          binding agreement. By using OfficeKit, you represent and warrant that
          you meet these eligibility requirements.
        </p>

        {/* 3. Account Registration */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Account Registration
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Accurate Information:</strong> You must provide true,
            complete, and up-to-date details during registration.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for maintaining
            the confidentiality of your credentials and all activity under your
            account. Notify us at{" "}
            <span className="font-medium">hello@officekithr.com</span> if you
            suspect unauthorized use.
          </li>
        </ul>

        {/* 4. Permitted Use */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Permitted Use</h2>
        <p className="mb-4">
          You agree to use OfficeKit only for lawful purposes and in accordance
          with these Terms. You must not:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Violate any laws, regulations, or third-party rights.</li>
          <li>Use the Services for fraudulent or harmful activities.</li>
          <li>Attempt to gain unauthorized access to any part of the platform.</li>
          <li>Disrupt the normal operation or security of the Services.</li>
          <li>Upload or transmit malware, viruses, or malicious code.</li>
        </ul>

        {/* 5. Subscription & Payment */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Subscription & Payment
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Payment Terms:</strong> By subscribing, you agree to pay the
            applicable fees and taxes. Payments are non-refundable unless stated
            otherwise.
          </li>
          <li>
            <strong>Billing:</strong> You must maintain valid billing details.
            Failed payments may result in suspension or cancellation.
          </li>
          <li>
            <strong>Auto-Renewal:</strong> Subscriptions renew automatically
            unless cancelled before the renewal date. You may manage billing in
            your account settings.
          </li>
        </ul>

        {/* 6. Intellectual Property */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Intellectual Property
        </h2>
        <p className="mb-6">
          All intellectual property rights in the OfficeKit platform—including
          software, design, and branding—are owned by us or our licensors. You may
          not copy, modify, or use our content without prior written consent.
        </p>

        {/* 7. Privacy */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Privacy</h2>
        <p className="mb-6">
          Your use of OfficeKit is also governed by our Privacy Policy, which
          describes how we collect, use, and safeguard your data. By using our
          Services, you consent to those practices.
        </p>

        {/* 8. Termination */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Termination</h2>
        <p className="mb-6">
          We may suspend or terminate your access without notice if you violate
          these Terms. Upon termination, you must stop using our Services
          immediately. Certain obligations (e.g., intellectual property,
          disclaimers, limitations of liability) will survive termination.
        </p>

        {/* 9. Disclaimers & Limitation of Liability */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. Disclaimers & Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>No Warranty:</strong> Our Services are provided “as is” and
            “as available” without warranties of any kind.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> To the extent permitted by
            law, OfficeKit and its affiliates are not liable for indirect,
            incidental, or consequential damages (including lost profits or data
            loss).
          </li>
        </ul>

        {/* 10. Governing Law */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">10. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by the laws of India and the UAE. Disputes will
          be resolved in the courts of India or UAE, depending on jurisdiction.
        </p>

        {/* 11. Changes */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          11. Changes to These Terms
        </h2>
        <p className="mb-6">
          We may revise these Terms periodically. If changes are material, we will
          update this page and the “Last Updated” date. Continued use of the
          Services indicates acceptance of the revised Terms.
        </p>

        {/* 12. Contact */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">12. Contact Us</h2>
        <p className="mb-2">
          📧 <strong>Email:</strong> hello@officekithr.com
        </p>
        <p className="mb-2">
          📍 <strong>India Office:</strong> OfficeKit HRMS, Ground Floor, Cyber
          Park, Calicut - 673016 <br /> 📞 + 91 8137932991


        </p>
        <p className="mb-2">
          📍 <strong>UAE Office:</strong> #906, Palace Towers, Dubai Silicon
          Oasis, Dubai, UAE <br /> 📞 +971 55 315 5343
        </p>

        <p className="mt-10 font-medium">
          Thank you for choosing OfficeKit. We’re here to support your HR journey.
        </p>
      </main>

      {/* ✅ Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default TermsOfService;
