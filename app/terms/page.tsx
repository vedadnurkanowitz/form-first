import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Form First",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-white pt-32 pb-24">
        <div className="max-w-[720px] mx-auto px-6">
          <h1 className="font-serif text-4xl text-brand-black mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-brand-ash text-sm mb-10">Last updated: 1 January 2025</p>

          <div className="prose prose-neutral max-w-none text-brand-slate text-sm leading-relaxed space-y-6">
            <p>
              By using Form First services or this website, you agree to the
              following terms and conditions. Please read them carefully.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              1. Services
            </h2>
            <p>
              Form First provides personal training and online coaching services.
              All sessions are subject to availability and must be booked in
              advance. We reserve the right to cancel or reschedule sessions with
              reasonable notice.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              2. Payment &amp; Cancellation
            </h2>
            <p>
              Monthly plans are billed in advance. Cancellations require 7 days
              notice before the next billing date. Sessions cancelled with less
              than 24 hours notice may be forfeited.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              3. Health Disclaimer
            </h2>
            <p>
              You confirm that you are in good physical health and have no medical
              condition that would prevent safe participation in a fitness
              programme. Consult a medical professional before beginning any new
              exercise regime.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              4. Satisfaction Guarantee
            </h2>
            <p>
              All plans include a 2-week satisfaction guarantee. If you are not
              satisfied, contact us within the first 14 days for a pro-rated
              refund.
            </p>

            <h2 className="font-semibold text-brand-black text-base mt-8">
              5. Contact
            </h2>
            <p>
              For questions about these terms, email{" "}
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
