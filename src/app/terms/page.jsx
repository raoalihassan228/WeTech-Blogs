import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions for Wetech Blog</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: [Insert Date]</p>
      <p className="mb-4">
        Welcome to Wetech Blog! By accessing or using our website{" "}
        <a href="https://we-tech-blogs.vercel.app/" className="text-blue-500 hover:underline">
        https://we-tech-blogs.vercel.app/
        </a>{" "}
        (&quot;Website&quot;), you agree to comply with and be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of the Website</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>You must be at least 18 years old or have parental consent to use this Website.</li>
        <li>You agree to use the Website only for lawful purposes and in accordance with these Terms.</li>
        <li>You may not use the Website in any way that may harm the Website or its users.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          All content on this Website, including text, images, graphics, and logos, is the property of Wetech Blog or its licensors and is protected by copyright, trademark, and other intellectual property laws.
        </li>
        <li>You may not reproduce, distribute, or create derivative works from any content on this Website without prior written consent.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Contributions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          By submitting content (e.g., comments, feedback) to the Website, you grant Wetech Blog a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, and display your content.
        </li>
        <li>You are responsible for ensuring that your contributions do not infringe on the rights of any third party.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Disclaimers</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The content on this Website is provided for informational purposes only and is not guaranteed to be accurate, complete, or up-to-date.</li>
        <li>We do not warrant that the Website will be error-free, uninterrupted, or free from viruses or other harmful components.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Wetech Blog and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website.
        </li>
        <li>Your sole remedy for dissatisfaction with the Website is to discontinue using it.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
      <p className="mb-4">
        The Website may contain links to third-party websites. We are not responsible for the content or practices of these external sites. Access third-party links at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to These Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated December 15, 2024 Continued use of the Website after changes constitutes your acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or restrict your access to the Website at our discretion, without notice, for any violation of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in [Insert Jurisdiction].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms, please <Link className="text-blue-700 underline" href={"/contact"}>contact us</Link>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Email:</strong> raoalihassan1145@gmail.com
        </li>
      </ul>

      <p className="mt-6">Thank you for using Wetech Blog!</p>
    </div>
  );
};

export default TermsAndConditions;