import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Form First",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-white pt-32 pb-24">
        <div className="max-w-[720px] mx-auto px-6">
          <h1 className="font-serif text-4xl text-brand-black mb-2">Privacy Policy</h1>
          <p className="text-brand-ash text-sm mb-10">Last updated: 1 January 2025</p>

          <div className="prose prose-neutral max-w-none text-brand-slate text-sm leading-relaxed space-y-6">
            <p>
              Form First (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
              protecting your personal data. This policy explains how we collect,
              use, and store information when you use our website and services.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly — such as your name,
              email address, and fitness goals — when you submit a contact form or
              book a session. We may also collect usage data automatically via
              analytics tools.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              2. How We Use Your Information
            </h2>
            <p>
              Your data is used to respond to enquiries, deliver coaching
              services, and improve our website. We do not sell your personal data
              to third parties.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              3. Data Retention
            </h2>
            <p>
              We retain your data for as long as necessary to deliver our services
              or as required by law. You may request deletion at any time.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              4. Your Rights
            </h2>
            <p>
              Under GDPR and UK data protection law, you have the right to access,
              rectify, or erase your personal data. Contact us at{" "}
              <a
                href="mailto:contact@formfirst.com"
                className="text-brand-green hover:underline"
              >
                contact@formfirst.com
              </a>{" "}
              to exercise these rights.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              5. Contact
            </h2>
            <p>
              For any privacy-related questions, please email{" "}
              <a
                href="mailto:contact@formfirst.com"
                className="text-brand-green hover:underline"
              >
                contact@formfirst.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
