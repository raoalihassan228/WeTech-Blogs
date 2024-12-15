import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for WeTech Blog</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: December 15, 2024</p>
      <p className="mb-4">
        Welcome to Wetech Blog! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website{" "}
        <a href="https://we-tech-blogs.vercel.app/" className="text-blue-500 hover:underline">
        https://we-tech-blogs.vercel.app/
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email, contact details, and information submitted via forms.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> IP address, browser type, operating system, pages visited, and visit timestamps.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Improve our Website and services</li>
        <li>Respond to inquiries and send newsletters</li>
        <li>Analyze usage trends and enhance user experience</li>
        <li>Comply with legal requirements</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share it with:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Service Providers:</strong> For hosting, analytics, or email delivery
        </li>
        <li>
          <strong>Legal Authorities:</strong> If required by law
        </li>
        <li>
          <strong>Business Transfers:</strong> During mergers or acquisitions
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We use cookies to improve your experience. These include essential, analytics, and advertising cookies. You can manage cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
      <p className="mb-4">
        We are not responsible for the privacy practices of external websites linked on our site. Please review their policies before sharing information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Security</h2>
      <p className="mb-4">
        We take measures to safeguard your data but cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access, correct, or delete your data</li>
        <li>Restrict or object to data processing</li>
        <li>Withdraw consent where applicable</li>
      </ul>
      <p className="mb-4">
        Contact us at <strong>raoalihassan1145@gmail.com</strong> to exercise your rights.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy. Changes will be posted with the December 15, 2024 Check back periodically to stay informed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p>
        For questions or concerns:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Email:</strong> raoalihassan1145@gmail.com
        </li>
      </ul>

      <p className="mt-6">Thank you for visiting WeTech Blog!</p>
    </div>
  );
};

export default PrivacyPolicy;