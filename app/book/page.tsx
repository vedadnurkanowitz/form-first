import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book a Session — Form First",
  description:
    "Book a free 20-minute discovery call with Form First personal training.",
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-black flex flex-col items-center justify-start pt-32 pb-24 px-6">
        <div className="max-w-2xl w-full text-center mb-10">
          <span className="text-brand-green text-xs font-semibold uppercase tracking-widest">
            Get Started
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-white mt-3 mb-3">
            Let&rsquo;s find a time.
          </h1>
          <p className="text-brand-ash text-lg">
            Book a free 20-minute discovery call below. Come as you are — this
            is just a conversation.
          </p>
        </div>

        {/* Cal.com embed placeholder */}
        <div className="w-full max-w-2xl bg-brand-charcoal rounded-2xl border border-brand-slate/20 p-10 text-center">
          <p className="text-brand-ash text-sm mb-4">
            Booking calendar will appear here once your Cal.com username is
            configured in{" "}
            <code className="text-brand-green text-xs bg-brand-black px-2 py-0.5 rounded">
              NEXT_PUBLIC_CAL_USERNAME
            </code>
            .
          </p>
          <p className="text-brand-ash text-xs">
            See{" "}
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:underline"
            >
              cal.com
            </a>{" "}
            to set up your account and embed link.
          </p>
        </div>

        <p className="mt-8 text-brand-ash text-sm">
          Prefer to message first?{" "}
          <a
            href="mailto:contact@formfirst.com"
            className="text-brand-green hover:underline"
          >
            contact@formfirst.com
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
